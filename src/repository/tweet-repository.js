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
    async getAll(offset,limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
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
            }).lean();       // returns plain javascript object not mongoose object
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
    
}
module.exports =TweetRepository;