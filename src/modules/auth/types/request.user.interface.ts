import { Request } from 'express';

/** Cross-Module Imports **/
import { User } from 'src/modules/user/models/user.model';

export interface RequestWithUser extends Request {
  user: User;
}
