import express from 'express'
import bodyParser from 'body-parser';
import connect from './config/database.js'
import apiRoutes from './routes/index.js'
const app = express();
const PORT=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes)
app.listen(PORT,async()=>{
    console.log(`Server started on port ${PORT}`);
    await connect();
    console.log('MongoDB connected');
    // const tweetServ = new TweetService
    // const tweet = await tweetServ.create({content: 'es module #test'});
    // console.log(tweet);



})