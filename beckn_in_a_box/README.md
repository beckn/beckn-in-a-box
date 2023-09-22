# Beckn in a box

## What is BeckN in a box?

Beckn-In-a-Box (BIAB) is a modular integration framework that allows any network participant to become beckn-enabled quickly by building simple plug and play modules.

A traditional approach to developing beckn-enabled applications involves the participant to study and understand the specifications, define the scope and use cases based on business workflows, implement the protocol APIs and client APIs, and then register on a network. However, this is a process that is time and effort-intensive.

To ease the process of developing beckn-enabled applications, Beckn-in-a-box provides a set of modules which can be easily integrated with the participant's applications. The participants will be able to configure the modules they require based on network role, domain, use cases, etc. and receive an output in the form of open-source code, SDKs or a complete deployable application.


## Table of content:

- [BeckN iin a box](#beckn-bpp-boilerplate-ui--backend-sdk)
  - [What is BeckN in a box?](#what-is-beckn-bpp-boilerplate-ui--beckend-sdk)
  - [Table of content:](#table-of-content)
    - [Demo](#demo)
    - [Pre-requisites](#pre-requisites)
    - [Project Setup](#project-setup)
      - [Using Docker](#using-docker)
      - [Local Setup](#local-setup)
    - [Folder Structure](#folder-structure)
    - [Project Architecture](#project-architecture)
      - [Tech Stack](#tech-stack)

### Demo

[Video Link](https://drive.google.com/drive/folders/1pjkO8VNlOzch8bzNbIiLzZ28a1ovkPuC?usp=sharing)

<a id="pre-requisites"></a>

### Pre-requisites

<table>
  <tr>
    <td>NodeJS</td>
    <td>>=16</td>
  </tr>
  <tr>
    <td>MySQL</td>
    <td> <span/> </td> 
  </tr>
</table>

<a id="project-setup"></a>

### Project Setup

- Clone the repository by.
  ```bash
  git clone <repo-link>
  git checkout -b dev
  git pull origin dev
  ```

#### Using Docker

**STEP 1: Run your docker containers**

- Simply run docker compose by running `docker-compose up`.


**STEP 2: Accessing the ports**

- For the **Beckn in a box Frontend**

```bash
http://localhost:3002/
```
- For the **Beckn in a box Backend**

```bash
http://localhost:3001/
```

#### Local Setup

1. **Clone the repo**

    ```bash
    git clone https://github.com/premsaivarmachekuri/beckn-in-a-box.git
    ```

2. **Go to the project directory**

    ```bash
    cd beckn_in_box
    ```

3. **Go to the Backend directory**

    ```bash
    cd backend
    ```

4. **Install the packages**

    ```bash
    npm i
    ```

5. **Configure the port number (Optional)**

    You can configure the port number by editing the `.env` file if necessary.

6. **Run the backend server first**

    ```bash
    nodemon app.js
    ```

Now you have successfully set up the backend. To set up the frontend, follow the instructions below:

### Frontend Setup

1. **Open another terminal**

2. **Navigate to the frontend directory**

    ```bash
    cd frontend
    ```

3. **Install the required packages**

    ```bash
    npm install
    ```

4. **Start the frontend development server**

    ```bash
    npm start
    ```

#### Accessing the ports

- Then connect to the beakn in a box by visiting `http://localhost:3002`.
- BIAB server is running at `http://localhost:3001`.

<a id="folder-structure"></a>

### Folder Structure

```bash
├── backend/
│   ├── authorization/ # Level 1 integration
│   ├── app/ # express API's
│   └── database/
    └── Dockerfile/ # dockerfilee
├── frontend/
│   ├── App/ #frontend app
│   └── Dockerfile/ # dockerfile
└── package.json
```

<a id="project-architecture"></a>

### Project Architecture

The workflow of the project goes as
![image](https://user-images.githubusercontent.com/110842297/262409623-fec609cc-5c7b-4aab-b360-84c8a95797ed.png)

## Tech Stack

![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

 <h1 align="center"> 📌 Contributing Guidelines </h1>

## Basics of Git and GitHub

### Git & GitHub

Before we proceed, it's better to know the difference between Git and Github. Git is a version control system (VCS) that allows us to keep track of the history of our source code , whereas GitHub is a service that hosts Git projects. 

We assume you have created an account on Github and installed Git on your System.

Now enter your name and E-mail (used on Github) address in Git, by using following command.

```
$ git config --global user.name "YOUR NAME"
$ git config --global user.email "YOUR EMAIL ADDRESS"
```

This is an important step to mark your commits to your name and email.

<br />

### Fork a project

You can make a copy of the project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>
Click on fork to create a copy of project to your account. This creates a separate copy for you to work on.

<br />

<br />

### Clone the forked project

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

```
$ git clone https://github.com/premsaivarmachekuri/beckn-in-a-box.git
```

Follow the installation guide for this step

<br />

### Add a remote (upstream) to original project repository

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

```
$ cd <your-forked-project-folder>
$ git remote add upstream https://github.com/premsaivarmachekuri/beckn-in-a-box.git
```

You will see the benefits of adding remote later.

<br />

### Synchronizing your fork

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

```
$ git checkout main
$ git fetch upstream
$ git merge upstream/main
$ git push origin main
```

The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

<br />

### Create a new branch for a feature or bugfix

Usually, all repositories have a main branch that is regarded to be stable, and any new features should be developed on a separate branch before being merged into the main branch. As a result, we should establish a new branch for our feature or bugfix and go to work on the issue. 

```
$ git checkout -b <feature-branch>
```

This will create a new branch out of master branch. Now start working on the problem and commit your changes.

```
$ git add --all
$ git commit -m "<commit message>"
```

The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.

<br />

### Push code and create a pull request

You now have a new branch containing the modifications you want in the project you forked. Now, push your new branch to your remote github fork. 

```
$ git push origin <feature-branch>
```
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bug fix to original repository. You can open a pull request by clicking on green icon -

<p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

Remember your upstream base branch should be main and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.

Congratulations! You've already made your first contribution.🥳

Good Luck for your journey


      
 
<span> <h2 align ="center">Join the Community  ⚡</h2>
<div align ="center">
<a  href="https://www.youtube.com/watch?v=gefmygtzZR8" target="_blank"><img alt="YouTube" src="https://img.shields.io/badge/Youtube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" /></a>
<a  href="https://www.linkedin.com/company/becknprotocol/?originalSubdomain=in" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<!-- <a href="mailto:"><img  alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a> -->
<a  href="https://discord.com/invite/pbayfsrMR9?utm_source=website&utm_medium=BOCCTAButton&utm_campaign=BecknProtocol"><img alt=" Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></a>
<a  href="https://www.instagram.com/becknprotocol/"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>


<div align="center">
<!--[![HitCount](http://hits.dwyl.com/Code4GovTech/C4GT/Code4GovTech/C4GT.svg)](http://hits.dwyl.com/Code4GovTech/C4GT/Code4GovTech/C4GT)-->

[![GitHub license](https://img.shields.io/github/license/Code4GovTech/C4GT?logo=github)](https://github.com/Code4GovTech/C4GT/blob/master/LICENSE)

