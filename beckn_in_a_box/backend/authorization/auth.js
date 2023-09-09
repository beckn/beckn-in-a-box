import express, { response } from 'express'
import cors from 'cors'
import fs from 'fs'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import {checkApiDetails} from '../database.js'
import dotenv from 'dotenv';
dotenv.config();
const auth = express()
auth.use(express.json())
auth.use(cors());

export const getAPI = () => {
  const baseAPI = `http://localhost:${process.env.BACKEND_PORT}/api-reference/query`; // Add 'query' as a placeholder
  const port = uuidv4()
  return `${baseAPI}/${port}`; // Append the UUID part after the placeholder
};


export const checkAPI = async({query, id}) => {
  const baseApi = `http://localhost:${process.env.BACKEND_PORT}/api-reference/query/${id}`
  const isApiAuth = await checkApiDetails(baseApi)
  console.log(isApiAuth)
}

auth.post('api-reference/:query/:id', async(req,res) => {
  try{
    console.log("Hello")
    const details = req.params
    const {body} = req.body 
    // const result = await protoclServer(body)
    res.send(result)
  }catch(e){
    console.log("Error", e)
  }
})

export async function protoclServer(body, query) {
  try {
    const protocolServerURL = `http://localhost:${process.env.PROTOCOL_SERVER_PORT}/${query}`;
    
    // Send a POST request to protocolServerURL with the provided body
    console.log(body)
    const response = await axios.post(protocolServerURL, body);
    
    return response.data;
  } catch (error) {
    console.error("Error in protoclServer", error);
    throw error;
  }
}
