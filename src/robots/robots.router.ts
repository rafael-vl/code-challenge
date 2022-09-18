import express, { Request, Response } from "express";

import schemas from "./robot.validator";
import { Robot } from "../db/models/robot.model";
import { RobotsService } from "./robots.service";
import { RobotDto } from "./robot.dto";
import { RobotRepositoryPostgres } from "./robot-repository-postgres";

export const robotsRouter = express.Router();

const robotRepository = new RobotRepositoryPostgres();
const robotService = new RobotsService(robotRepository);

robotsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 0);
  const robot: RobotDto | null = await robotService.find(id);
  if (robot) {
    return res.status(200).json(robot);
  }
  res.status(404).json({
    message: "Robot not found",
  });
});

robotsRouter.post("/", async (req: Request, res: Response) => {
  const robot: Robot = req.body;
  const result = schemas.newRobot.validate(robot);
  const { error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: "Invalid request",
      data: error.message,
    });
  } else {
    const newRobot = await robotService.create(robot);
    res.status(200).json(newRobot);
  }
});
