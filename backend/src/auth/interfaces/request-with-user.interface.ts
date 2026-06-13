import type { Request } from 'express';
import { ActiveUserData } from './active-user-data.interface';
export interface RequestWithUser extends Request {
  user: ActiveUserData;
}
