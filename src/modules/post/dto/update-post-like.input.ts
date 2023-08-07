import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { LikePostInput } from './create-post-like.input';

@InputType()
export class UpdatePostLikeInput extends PartialType(LikePostInput) {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;
}
