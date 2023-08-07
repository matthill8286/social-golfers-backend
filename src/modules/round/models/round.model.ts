import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Round } from '../entities/round.entity';

export type RoundDocument = Round & Document;

export const RoundSchema = SchemaFactory.createForClass(Round);
