import express, { Router } from 'express';
import serverless from "serverless-http"

const app = express();
const router = Router()

app.use(express.json())


// Define a basic route
router.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});


app.use("/api/", router);
export const handler = serverless(app)