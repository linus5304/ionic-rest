import { json, Request, Response, Router } from "express";
import { User } from "../enitity/User";
import { getConnection, getRepository } from "typeorm";



export const getUsers = async (req: Request, res: Response):Promise<Response>  => {
  const users = await User.find()
  return res.json(users)
}


export const createUser = async (req: Request, res: Response):Promise<Response>  => {
  const newUser = User.create(req.body)
  const result = await User.save(newUser)
  return res.json(result)
   
}

