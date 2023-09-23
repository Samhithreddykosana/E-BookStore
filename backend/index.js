import express, { request, response } from 'express';
import {PORT, mongoURL} from './config.js';
import mongoose from 'mongoose';
import {Book} from './bookmodel/bookModel.js'
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

// app.use(
//     cors(
//         {
//             origin:'http://localhost:4000',
//             methods:['GET', 'PUT', 'POST', 'DELETE'],
//             allowedHeaders:['Content-Type']
//         }
//     )
// )

app.get('/',(request, response)=>{
    console.log(request)
    return response.status(234).send("mern proj undergoing")
})

app.use('/books', bookRoutes)

mongoose.connect(mongoURL)
.then(()=>{
    console.log("App connected to DB");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error)
})