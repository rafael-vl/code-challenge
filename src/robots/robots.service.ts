import { RobotRepository } from "./robot-repository.interface";
import { RobotDto } from "./robot.dto";

export class RobotsService {
  readonly robotRepository: RobotRepository;

  constructor(robotRepository: RobotRepository) {
    this.robotRepository = robotRepository;
  }

  async find(id: number): Promise<RobotDto | null> {
    return this.robotRepository.find(id);
  }

  async create(newRobot: RobotDto): Promise<RobotDto> {
    return this.robotRepository.create(newRobot);
  }
}
