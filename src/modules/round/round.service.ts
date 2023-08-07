import { Injectable } from '@nestjs/common';
import { CreateRoundInput } from './dto/create-round.input';
import { UpdateRoundInput } from './dto/update-round.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Round, RoundDocument } from './models/round.model';

@Injectable()
export class RoundService {
  constructor(
    @InjectModel(Round.name)
    private readonly roundModel: Model<RoundDocument>,
  ) {}

  async createRound(createRoundInput: CreateRoundInput): Promise<Round> {
    const round = await this.roundModel.create(createRoundInput);
    return round;
  }

  async findAllRounds(): Promise<Round[]> {
    return this.roundModel.find();
  }

  async findRoundById(id: number): Promise<Round> {
    return this.roundModel.findOne({ id });
  }

  async updateRound(
    id: number,
    updateRoundInput: UpdateRoundInput,
  ): Promise<Round> {
    await this.roundModel.updateOne({ id }, updateRoundInput);
    return this.roundModel.findOne({ id });
  }

  async deleteRound(id: number): Promise<Round> {
    const round = await this.roundModel.findOne({ id });
    await this.roundModel.deleteOne({ id });
    return round;
  }
}
