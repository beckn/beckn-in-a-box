import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { getUser, getRow, addUser, checkUser, signUp, signIn, getProjects, getDetails, User, getApiDetails } from './database.js';
import { getAPI, checkAPI, protoclServer } from './authorization/auth.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.BACKEND_DEVELOPMENT_URL, () => {
  console.log(`Server is running on http://localhost:${process.env.BACKEND_DEVELOPMENT_URL}`);
});

// API: User Signup
app.post('/signup', async (req, res) => {
  const { username, email, password, organization } = req.body;
  try {
    await signUp(username, email, password, organization);
    res.status(201).json({ message: 'Added User Successfully' });
  } catch (e) {
    res.status(400).json({ message: 'User Already Registered' });
  }
});

// API: User Signin
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await signIn(email, password);
    res.status(200).send(users);
  } catch (e) {
    res.status(401).send({ message: 'Wrong Credentials' });
  }
});

// API: Get Projects
app.post('/get-projects', async (req, res) => {
  try {
    const { email } = req.body;
    const project = await getProjects(email);
    res.status(200).send(project);
  } catch (e) {
    res.status(500).send('Error');
  }
});

// API: Get Project Details
app.post('/get-details', async (req, res) => {
  try {
    const { email, project_type } = req.body;
    const projectdetails = await getDetails(email, project_type);
    if (project_type === 'Protocol Stack') {
      try {
        const list = await Promise.allSettled(
          projectdetails.map(async (projectapi) => {
            const { project } = projectapi;
            try {
              const userApi = await getApiDetails(project);
              return { ...projectapi, userApi };
            } catch (e) {
              console.log('Error occurred at MongoDB:', e.message);
              return null;
            }
          })
        );
        const details = list.map((item) => ({
          project: item.value.project,
          project_type: item.value.project_type,
          project_role: item.value.project_role,
          organization_name: item.value.organization_name,
          industry_domains: item.value.industry_domains,
          funnel_stages: item.value.funnel_stages,
          manage: item.value.manage,
          created: item.value.created,
          id: item.value.id,
          email: item.value.email,
          user_api: item.value.userApi,
        }));
        res.status(200).send(details);
      } catch (error) {
        console.log('Error occurred:', error.message);
      }
    } else {
      res.status(200).send(projectdetails);
    }
  } catch (e) {
    res.status(500).send('Error');
  }
});

// API: Get Users
app.get('/users', async (req, res) => {
  const users = await getUser();
  res.status(200).send(users);
});

// API: Add Project and User
app.post('/users', async (req, res) => {
  try {
    // Extract request body properties
    const {
      project,
      project_type,
      project_role,
      organization_name,
      industry_domains,
      funnel_stages,
      manage,
      id,
      email,
    } = req.body;
    // Check project_type to decide if API data needs to be fetched
    if (project_type === 'Protocol Stack') {
      const api = await getAPI();
      const newData = new User({
        email: email,
        project: project,
        project_type: project_type,
        project_api: api,
      });
      try {
        await newData.save();
        console.log('Added to MongoDB');
      } catch (error) {
        console.error('Error adding data to MongoDB:', error);
      }
    }
    // Add user data
    await addUser(
      project,
      project_type,
      project_role,
      organization_name,
      industry_domains,
      funnel_stages,
      manage,
      id,
      email
    );
    res.status(201).json({ message: 'Added Project Successfully' });
  } catch (e) {
    res.status(500).send({ e });
  }
});

// API: Check Project
app.post('/check-project', async (req, res) => {
  try {
    const { project } = req.body;
    const update = await checkUser(project);
    const details = update[0].project;
    res.status(200).json({ details });
  } catch (e) {
    res.status(500).send({ details: '' });
  }
});

// Handle Unhandled Routes
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// API Reference Check
app.post('/api-reference/:query/:id', async (req, res) => {
  try {
    const details = req.params;
    const body = req.body
    const result = await checkAPI(details);
    // console.log(details)
    const {query} = details 
    const protocol_details = await protoclServer(body, query)
    res.status(200).send({result: result, protocol_details});
  } catch (e) {
    console.log('Error', e);
    res.status(500).send('Error');
  }
});

// MongoDB 

// const addData = async() => {
//   const newUser = await User.create({
//     email: "email@gmail.com",
//     project: "beckn",
//     project_type: "stack",
//     project_api: "localhost"
//   });
//   await newUser.save();
//   console.log("added data successfully")
// }
// addData()
