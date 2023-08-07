import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
// import { courseProviders } from './course.providers';
import { Course } from './entities/course.entity';
import { CourseSchema } from './models/course.model';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDatabaseModule } from 'src/libs/database';

@Module({
  imports: [
    MongoDatabaseModule,
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  providers: [CourseService, CourseResolver],
  exports: [CourseService],
})
export class CourseModule {}
