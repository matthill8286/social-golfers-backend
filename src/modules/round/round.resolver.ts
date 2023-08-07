import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoundService } from './round.service';
import { Round } from './entities/round.entity';
import { CreateRoundInput } from './dto/create-round.input';
import { UpdateRoundInput } from './dto/update-round.input';

@Resolver(() => Round)
export class RoundResolver {
  constructor(private readonly roundService: RoundService) {}

  @Mutation(() => Round)
  async createRound(
    @Args('input') createRoundInput: CreateRoundInput,
  ): Promise<Round> {
    return this.roundService.createRound(createRoundInput);
  }

  @Query(() => [Round])
  async getAllRounds(): Promise<Round[]> {
    return this.roundService.findAllRounds();
  }

  @Query(() => Round)
  async getRoundById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Round> {
    return this.roundService.findRoundById(id);
  }

  @Mutation(() => Round)
  async updateRound(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') updateRoundInput: UpdateRoundInput,
  ): Promise<Round> {
    return this.roundService.updateRound(id, updateRoundInput);
  }

  @Mutation(() => Round)
  async deleteRound(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Round> {
    return this.roundService.deleteRound(id);
  }
}
