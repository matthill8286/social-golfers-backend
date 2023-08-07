import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => Int)
  userId: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int)
  postId: number;

  // ... add other post properties as needed
}
