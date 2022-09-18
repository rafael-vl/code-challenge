import express, { Request, Response } from "express";

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
      message: 'Robot not found'
    });
});


