import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class FindPlaceResolver {
  @Query(() => String)
  async findCoordsAddress(
  ): Promise<void> {
    throw new SyntaxError();
  }
}