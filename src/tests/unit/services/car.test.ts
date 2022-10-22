import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarCreateModel from "../../../models/CarCreateModel";
import CarCreateService from "../../../services/CarCreateService";

import { carMock } from "../../mocks/carMock";

describe("Car Service", () => {
  const carCreateModel = new CarCreateModel();
  const carCreateService = new CarCreateService(carCreateModel);

  before(async () => {
    sinon.stub(carCreateModel, "create").resolves(carMock);
  });

  after(() => {
    sinon.restore();
  });

  describe("creating a car", () => {
    it("successfully created", async () => {
      const newCar = await carCreateService.create(carMock);
      expect(newCar).to.be.deep.equal(carMock);
    });
  });
});