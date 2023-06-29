const express = require('express');
const connect= require('./config/database')
const Tweet = require('./models/tweet')
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();
const PORT=3000;
app.listen(PORT,async()=>{
    console.log(`Server started on port ${PORT}`);
    await connect();
    console.log('MongoDB connected');
  const tweetRepo = new TweetRepository();
    // console.log(tweets);
    // const tweet = await tweetRepo.create({content: "new content with comment 2"});
    // const comment= await Comment.create({content:"New comment 2"});
    // tweet.comments.push(comment);
    // await tweet.save();
    // const tweet = await tweetRepo.getAll(0,3);
    const tweet = await tweetRepo.create({content: "with hook "})
    console.log(tweet);
    // console.log(tweet[0].contentWithEmail);

})