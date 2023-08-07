import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCommentPostInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  postId: number;

  @Field()
  content: string;

  @Field()
  title: string;
}
