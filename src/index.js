import express from 'express'
import connect from './config/database.js'
const app = express();
const PORT=3000;
app.listen(PORT,async()=>{
    console.log(`Server started on port ${PORT}`);
    await connect();
    console.log('MongoDB connected');
    // const tweetServ = new TweetService
    // const tweet = await tweetServ.create({content: 'es module #test'});
    // console.log(tweet);



})