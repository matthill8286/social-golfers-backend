import { Model, Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';

import { AbstractRepository } from 'src/libs/database/mongo';
import { User } from './models/user.model';

@Injectable()
export class UserRepository extends AbstractRepository<User> {
  constructor(
    @InjectConnection() connection: Connection,
    @InjectModel(User.name) model: Model<User>,
  ) {
    super(model, connection);
  }
}
