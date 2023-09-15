import { Request, Response } from "express";

async function getPersonsControler(req:Request, res:Response){
  const person = await personService.getPerson()
}