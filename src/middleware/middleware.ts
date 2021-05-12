import {NextFunction, Request, Response} from "express";
import Functions from './../functions/functions'

const v1ParseMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.body = Functions.v1Parse(req.body.data);
    next();
};


const v2ParseMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.body = Functions.v2Parse(req.body.data);
    next();
};

export default {
    v1ParseMiddleware: v1ParseMiddleware,
    v2ParseMiddleware: v2ParseMiddleware
};