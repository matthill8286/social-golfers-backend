import { Field, ObjectType } from '@nestjs/graphql';
import { JwtModel } from './jwt.model';

@ObjectType()
export class JwtWithEmailModel extends JwtModel {
  @Field(() => String)
  email: string;
}
