import { createServer } from "http";
import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { TwitterApi } from 'twitter-api-v2';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

//Handle CORS
const corsOptions = {
    credentials: true,
    origin: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));




app.post("/tweet", async function (req, res) {

    const client = new TwitterApi({
        appKey: "tNiOSOq63kLkLecGeDMQ90Knu",
        appSecret: "5xyZUZtnqbSNoVuD1b1GxYW0p6hDhQkn3HQZoqYvEUx01z61XE",
        accessToken: req.body.accessToken,
        accessSecret: req.body.accessSecret,
    });


    const text = req.body.text

    try {
        const response = await client.v1.tweet(text);
        console.log("response", JSON.stringify(response, null, 2));
        res.send(response);
    } catch (error) {
        console.log("tweets error", error);
    }
});

export default app;


const port = process.env.PORT || 4040;
const server = createServer(app);

server.listen(port, () => {
    console.log(`Listening to twitter on ${port}`);
});