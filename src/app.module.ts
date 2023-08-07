import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { CourseModule } from './modules/course/course.module';

// Validation
import { validate } from './config/validation';
import { join } from 'path';
import { AuthModule } from './modules/auth';

@Module({
  imports: [
    // Common Modules
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: true,
      sortSchema: true,
    }),

    AuthModule,
    UserModule,
    CourseModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
