import express, { Application, Request, Response, NextFunction} from 'express';
import * as bodyParser from "body-parser";
import Middleware from './middleware/middleware';
import Functions from './functions/functions';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (req: Request, res: Response) => {
    res.send('Work on progress');
});

app.post('/api/v1/parse',  Middleware.v1ParseMiddleware, (req: Request, res: Response) => {
    Functions.sendData(res, req.body);
});

app.post('/api/v2/parse', Middleware.v2ParseMiddleware, (req: Request, res: Response) => {
    Functions.sendData(res, req.body);
});

app.listen(3000, () => {
    console.log('Server Running in 3000');
});


