# OpinionHub - Backend

**OpinionHub** is a Twitter-like application where users can create, like, comment, retweet, and interact with posts while enjoying a seamless and secure experience. This backend is built using **Node.js**, **Express.js**, **MongoDB**, and **AWS S3**, with features like user authentication, pagination, and hashtags.

## Features

### Core Functionalities

- **Create Posts (Tweets):** Tweet with image uploads (AWS S3), hashtag support, visible to followers.
- **Interactions:** Like, comment (nested), and retweet tweets or comments.
- **User Profiles:** View Name, Bio, Follower count, last 10 tweets, and paginated tweets.
- **Authentication:** Secure sign-up/login with Passport.js and session handling.
---

## API Endpoints

### **Authentication**
| Method | Endpoint      | Description            |
|--------|---------------|------------------------|
| `POST` | `/signup`     | Register a new user.  |
| `POST` | `/login`      | User login.           |
| `GET`  | `/logout`     | Logout the user.      |

### **Tweets**
| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| `POST` | `/createTweet`  | Create a new tweet.         |
| `GET`  | `/tweets`       | Fetch tweets with pagination.|
| `POST` | `/tweets`       | Retweet an existing tweet.  |

### **Comments**
| Method | Endpoint        | Description                   |
|--------|-----------------|-------------------------------|
| `POST` | `/comments`     | Add a comment to a tweet.    |
| `POST` | `/comments`     | Add a comment on a comment.  |
| `GET`  | `/comments`     | Fetch comments for a tweet.  |

### **Likes**
| Method | Endpoint    | Description                 |
|--------|-------------|-----------------------------|
| `GET`  | `/Like`     | Like a tweet or a comment. |

### **User**
| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| `GET`  | `/profile`       | View user profile.            |
| `GET`  | `/tweets`        | Fetch user's last 10 tweets. |

---

## Technologies Used
- **Node.js** & **Express.js** for server-side logic.
- **MongoDB** for database management.
- **Passport.js** for authentication.
- **AWS S3** for image uploads.
- **Jest** for unit testing.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhigupta13/Twitter_Dev_MongoDB.git
   cd Twitter_Dev_MongoDB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```env
   PORT=3000
   MONGO_URI=<your_mongo_db_uri>
   AWS_ACCESS_KEY=<your_aws_access_key>
   AWS_SECRET_KEY=<your_aws_secret_key>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the server:
   ```bash
   npm start
   ```

---
