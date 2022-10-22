import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarCreateModel from "../../../models/CarCreateModel";
import CarCreateService from "../../../services/CarCreateService";
import CreateCarController from "../../../controllers/CreateCarController";

import { carMock } from "../../mocks/carMock";
import { Request, Response } from "express"

describe("Car Controller", () => {
  const carCreateModel = new CarCreateModel();
  const carCreateService = new CarCreateService(carCreateModel);
  const createCarController = new CreateCarController(carCreateService);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carCreateService, "create").resolves(carMock);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe("creating a car", () => {
    it("successfully created", async () => {
        req.body = carMock;
      await createCarController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });
});