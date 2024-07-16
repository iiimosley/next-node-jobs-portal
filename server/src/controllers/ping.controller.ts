import { Request, Response } from 'express';

export class PingController {
    public ping = (__: Request, res: Response) => res.status(200).json({ message: 'pong' });
}
