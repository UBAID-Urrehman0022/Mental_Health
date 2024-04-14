import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from "openai";
import { python } from 'pythonia';

dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const app = express(); 
app.use(cors());
app.use(express.json());


const API = '';
console.log(API)
app.post('/completion', async(req,res) =>{
    const options = {
        method: 'POST',
        headers:{
            "Authorization":`Bearer ${API}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role:"user", content: req.body.message}],
            max_tokens: 100,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})

// app.post('/predict', async(req,res) =>{
//     try {
//         const prompt = req.body.prompt;

       
        
//         const response = await python("./model.py").recommendation(prompt);
//         //console.log(await response.recommendation(prompt));
//         python.exit();
//         res.status(200).send({
//             bot: response[0]
//           });;
      
//     } catch (error) {
//         console.error(error)
//         res.status(500).send(error || 'Something went wrong');
//     }
// }
// )
app.listen(3000, () => console.log('AI server started on http://localhost:3000')) 