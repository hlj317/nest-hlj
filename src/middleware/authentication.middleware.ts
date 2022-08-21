import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { CallbackFunction } from '../types/callbackFunction.type';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: CallbackFunction) {

        // Check if Authorization header contains a fixed token which is defined in env
        const logFormat = `{method: ${req.method}, requestOriginalUrl: ${
            req.originalUrl
          }, query:${JSON.stringify(req.query)}, params:${JSON.stringify(
            req.params
          )}, ip: ${req.ip}, statusCode: ${res.statusCode} }`;
        
        console.log("####log:"+logFormat);
        console.log("####env:"+process.env.NODE_ENV);

        next();
    }
}