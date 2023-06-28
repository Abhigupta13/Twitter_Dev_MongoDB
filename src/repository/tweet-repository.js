const Tweet = require('../models/tweet')

class TweetRepository{
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw{error}
        }
    }
    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            throw{error}
        }
    }
    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({
                path: 'comments',
                // populate: {
                //     path: 'comments'
                // }
            })   // .lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async distroy(id){
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            throw{error}
        }
    }
    async update(tweetId,data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            throw{error}
        }
    }
}
module.exports =TweetRepository;