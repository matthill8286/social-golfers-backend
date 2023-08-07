import { Prop, Schema } from '@nestjs/mongoose';

import { Round } from 'src/modules/round/entities/round.entity';
import { User } from 'src/modules/user/models/user.model';
import { CourseRating } from './course-rating.entity';
import { CourseReview } from './course-review.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractDocument } from 'src/libs/database/mongo';

@ObjectType()
@Schema({ timestamps: true })
export class Course extends AbstractDocument {
  @Prop()
  @Field(() => String)
  name: string;

  @Prop()
  location: string;

  @Prop()
  par: number;

  @Prop()
  rounds: Round[];

  @Prop()
  reviews: CourseReview[];

  @Prop()
  ratings: CourseRating[];

  @Prop()
  favoritedBy: User[];
}
