// import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
// import { userProviders } from './user.providers';
// import { PostModule } from 'src/modules/post/post.module';
import { User, UserSchema } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDatabaseModule } from 'src/libs/database';
import { UserRepository } from './user.repository';
// import { CourseService } from 'src/modules/course/course.service';
// import { PostService } from 'src/modules/post/post.service';
// import { PostModule } from 'src/modules/post/post.module';

@Module({
  imports: [
    MongoDatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserResolver, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
