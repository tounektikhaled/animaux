//express
const express=require('express');
const { append } = require('express/lib/response');
//fs
const fs=require('fs');
//url
const url = require('url');
//http
const http=require('http');
//module authentification
const at=require('./loging');
const authentification=at.authentification;
//using express
const app = express();
app.use(express.json());
//creation de serveur


    
   app.get('/:name/:ps', (req, res) => {
    const userParams = req.params.name;
    const psPramams= req.params.ps;
    const jsonData = fs.readFileSync('user.json');
    const jsonData1 = fs.readFileSync('animaux.json');
    const user = JSON.parse(jsonData);
    const animaux = JSON.parse(jsonData1);
    const userLg = user.filter(user=>user.login === userParams );
    const userPs = user.filter(user=>user.password === psPramams );
    //const userSt = user.filter(user=>user.animal === psPramams );
    
      if(JSON.stringify(userLg).length>2){
         if(JSON.stringify(userPs).length>2){

         res.send(animaux);

         /* Update - Patch method */
app.patch('/:name/:ps/:genre', (req, res) => {
   //get  url
   const aGenre = req.params.genre
   //get the update data
   const userData = req.body
   //get the existing user data
   const existUsers = getUserData()
   //filter the userdata
   // 
   const updateUser = existUsers.filter(user=>user.login === userParams)

   //push the updated data
   updateUser.push(userData)
   //finally save it
   saveUserData(updateUser)
   res.send({ success: true, msg: 'User data updated successfully' })
})


         }else res.send("MOT DE PASSE INCORRECTE");
      }
      else res.send("USER NOT FOUND");

    
    
    
});
   app.listen(3000, () => {
       console.log('Server runs on port 3000')
        
       });
   
