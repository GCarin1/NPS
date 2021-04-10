import{Request,Response} from "express";
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UsersRepository";
import SendMailServices from "../services/SendMailServices";
import {resolve} from 'path';

class SendMailController{
async execute(request:Request,response:Response){
   const {email,survey_id}=request.body;

   const usersRpository=getCustomRepository(UserRepository);
   const surveysRepository=getCustomRepository(SurveyRepository);
   const surveysUsersRepository=getCustomRepository(SurveysUsersRepository);

   const user=await usersRpository.findOne({email});

   if(!user){
       return response.status(400).json({
           error:"User does not exists",
       });
   }
   const survey=await surveysRepository.findOne({
       id:survey_id
    });
   if(!survey){
       return response.status(400).json({
           error:"Survey does not exists!"
       });
   }
   
const npsPath=resolve(__dirname,"..","views","emails","npsMail.hbs");

const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
    where: {
        user_id: user.id,
        value: null
    },
    relations: ["user", "survey"]
});
const variables = {
    name: user.name,
    title: survey.title,
    description: survey.description,
    id: "", 
    link: process.env.URL_MAIL
};
   if(surveyUserAlreadyExists){
       await SendMailServices.execute(email,survey.title,variables,npsPath)
       return response.json(surveyUserAlreadyExists);
   }
   const surveyUser =surveysUsersRepository.create({
       user_id:user.id,
       survey_id
   });
   

   await surveysUsersRepository.save(surveyUser);
        variables.id = surveyUser.id;

   


   await SendMailServices.execute(email,survey.title,variables,npsPath);
   return response.json(surveyUser);

 }
}
export{SendMailController}