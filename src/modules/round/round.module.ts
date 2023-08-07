import { Module } from '@nestjs/common';
import { RoundService } from './round.service';
import { RoundResolver } from './round.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RoundSchema, Round } from './models/round.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Round.name, schema: RoundSchema }]),
  ],
  providers: [RoundService, RoundResolver],
  exports: [RoundService],
})
export class RoundModule {}
