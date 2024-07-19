import { Request } from 'express'

export interface JobByIdRequest extends Request {
  id: number;
}
