import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
// import { CreateCommentPostInput } from './dto/create-post-comment.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  async createPost(
    @Args('input') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.createPost(createPostInput);
  }

  @Query(() => [Post])
  async getAllPosts(): Promise<Post[]> {
    return this.postService.findAllPosts();
  }

  @Query(() => Post)
  async getPostById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Post> {
    return this.postService.findPostById(id);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    return this.postService.updatePost(id, updatePostInput);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postService.deletePost(id);
  }

  // @Mutation(() => Post)
  // async commentPost(
  //   @Args('input') commentPostInput: CreateCommentPostInput,
  // ): Promise<Post> {
  //   return this.postService.commentPost(commentPostInput);
  // }
}
