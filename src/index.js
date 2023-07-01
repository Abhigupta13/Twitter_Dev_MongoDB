const express = require('express');
const connect= require('./config/database')
const TweetService = require('./services/tweet-service');
const app = express();
const PORT=3000;
app.listen(PORT,async()=>{
    console.log(`Server started on port ${PORT}`);
    await connect();
    console.log('MongoDB connected');
   
  const service = new TweetService();
  const tweet = await service.create({
    content: 'This is #testing for #hashtag #second'
  })
  console.log(tweet);


})