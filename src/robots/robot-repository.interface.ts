import { RobotDto } from "./robot.dto";

export interface RobotRepository {
  find(id: number): Promise<RobotDto | null>;

  create(newRobot: RobotDto): Promise<RobotDto>;
}
