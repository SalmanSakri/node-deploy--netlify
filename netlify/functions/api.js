import  express,{Router} from 'express';
import serverless from "serverless-http"

const app = express();
const router =Router()
const port = 3000; // You can choose any available port

// Define a basic route
router.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
router.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api/",router);
export const handler=serverless(app)