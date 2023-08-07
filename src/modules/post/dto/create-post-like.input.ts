import { InputType, Field, Int } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';
import { User } from 'src/modules/user/models/user.model';

@InputType()
export class LikePostInput {
  @Field(() => Int)
  postId: number;

  @Field(() => Int)
  userId: number;

  @Field()
  content: string;

  @Field()
  user: User;

  @Field()
  post: Post;
}
