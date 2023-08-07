import { CreateCommentPostInput } from 'src/modules/post/dto/create-post-comment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostCommentInput extends PartialType(
  CreateCommentPostInput,
) {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;
}
