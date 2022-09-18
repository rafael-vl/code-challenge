import { RobotRepositoryPostgres } from "../src/robots/robot-repository-postgres";
import { RobotsService } from "../src/robots/robots.service";

const assert = require("assert");
const sinon = require("sinon");

describe("RobotService", function () {
  describe("#find()", function () {
    it("should return ID = 555", async function () {
      const ID = 5555;
      const repo = new RobotRepositoryPostgres();
      const service = new RobotsService(repo);
      const stub = sinon.stub(repo, "find").returns({
        id: ID,
        name: "Robotina",
      });
      const robot = await service.find(stub.id);
      assert.equal(robot?.id, ID);
    });
  });
  describe("#create()", function () {
    it("should return a new robot", async function () {
      const newRobot = {
        id: 122,
        name: "Robotina2",
        model: "UJK",
      };
      const repo = new RobotRepositoryPostgres();
      const service = new RobotsService(repo);
      sinon.stub(repo, "create").returns(newRobot);
      const robot = await service.create(newRobot);
      assert.equal(robot?.id, newRobot.id);
    });
  });
});
