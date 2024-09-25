import { Test, TestingModule } from '@nestjs/testing';
import { StakeholdersController } from './stakeholders.controller';
import { StakeholdersService } from './stakeholders.service';

describe('StakeholdersController', () => {
  let controller: StakeholdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StakeholdersController],
      providers: [StakeholdersService],
    }).compile();

    controller = module.get<StakeholdersController>(StakeholdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
