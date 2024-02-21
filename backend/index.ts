import express,{Request,Response} from 'express'
import bodyParser from 'body-parser'
const app=express()
const PORT=3000
// app.use()
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/jokes',(req:Request,res:Response)=>{
    const Jokes=[
        {
            id:1,
            title:"Joke 1",
            description:"the main joke"
        },
        {
            id:2,
            title:"Joke 2",
            description:"the other joke"
        },
        {
            id:3,
            title:"Joke 3",
            description:"the complete joke"
        },
        {
            id:4,
            title:"Joke 4",
            description:"the Balle Balle joke"
        },
        {
            
                id:5,
                title:"Joke 5",
                description:"the thalle thalle joke"
            
        }
    ]
    res.send(Jokes)

})

app.listen(PORT,()=>{
    console.log('started at 300')
})