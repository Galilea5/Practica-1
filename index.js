const express =require('express');
const app = express();

const port = 3080;
const contributors = [
{
    "id" : 1,
    "username": "Galilea"

},
{
    "id" :2,
    "username":"Naomi"
},
{
    "id" :3,
    "username":"Gael"
}
]
app.listen(port , ()=>{console.log(`Server is running on ${port}`)});
app.get('/',(req,res) =>{
    res.send("Funciona mundo")
}
)
