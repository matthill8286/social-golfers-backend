import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Types } from 'mongoose';

import { UserService } from './user.service';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './models/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService, // private readonly courseService: CourseService, // private readonly postService: PostService,
  ) {}

  @Mutation(() => User)
  async createUser(
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser(createUserInput);
  }

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Query(() => User)
  async getUserById(
    @Args('id', { type: () => Int }) id: Types.ObjectId,
  ): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserInput);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }

  // @Mutation(() => User)
  // async favoriteCourse(
  //   @Args('userId', { type: () => Int }) userId: number,
  //   @Args('input') favoriteCourseInput: FavoriteCourse,
  // ): Promise<User> {
  //   return this.userService.favoriteCourse(userId, favoriteCourseInput);
  // }

  // @Mutation(() => CourseReview)
  // async addCourseReview(
  //   @Args('input') courseReviewInput: CreateCourseReviewInput,
  // ): Promise<CourseReview> {
  //   return this.courseService.createCourseReview(courseReviewInput);
  // }

  // @Mutation(() => Post)
  // async likePost(@Args('input') likePostInput: LikePostInput): Promise<Post> {
  //   return this.postService.likePost(likePostInput);
  // }

  // @Mutation(() => PostComment)
  // async commentPost(
  //   @Args('input') commentPostInput: CreateCommentPostInput,
  // ): Promise<Post> {
  //   return this.postService.commentPost(commentPostInput);
  // }

  // @Mutation(() => PostComment)
  // async updatePostComment(
  //   @Args('input') updatePostCommentInput: UpdatePostCommentInput,
  // ): Promise<PostComment> {
  //   return this.postService.updatePostComment(updatePostCommentInput);
  // }

  // @Mutation(() => PostComment)
  // async deletePostComment(
  //   @Args('id', { type: () => Int }) id: number,
  // ): Promise<PostComment> {
  //   return this.postService.deletePostComment(id);
  // }
}
