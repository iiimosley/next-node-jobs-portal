import { Request } from 'express'

export class JobByIdRequest extends Request {
  id: number;
}