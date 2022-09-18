import { RobotRepository } from "./robot-repository.interface";
import { RobotDto } from "./robot.dto";
import { Robot } from "../db/models/robot.model";

export class RobotRepositoryPostgres implements RobotRepository {
  async find(id: number): Promise<RobotDto | null> {
    return Robot.findByPk(id);
  }

  async create(newRobot: RobotDto): Promise<RobotDto> {
    return await Robot.create({ ...newRobot });
  }
}
