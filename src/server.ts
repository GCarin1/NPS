import express, { request, response } from 'express'; 

const app = express(); 

/*
 get= busca
 post= Salvar
 put= alterar
 delete= deletar 
 patch= alteração especifica

*/
app.get("/users",(request,response)=>{
    return response.json({message:"Hellos World"})
   
});
app.post("/",(Request,response)=>{
    return response.json({message:"Os dados foram salvos com sucesso "});
})

app.listen(3333,()=>console.log("Server is running!"));