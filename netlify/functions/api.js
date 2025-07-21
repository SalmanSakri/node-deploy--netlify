import  express,{Router} from 'express';
import serverless from "serverless-http"

const app = express();
const router =Router()

// Define a basic route
router.get('/', (req, res) => {
    res.send('Hello from Express!');
});


app.use("/api/",router);
export const handler=serverless(app)