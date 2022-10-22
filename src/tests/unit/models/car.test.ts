import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarCreateModel from "../../../models/CarCreateModel";
import { carMock } from "../../mocks/carMock";
import { Model } from "mongoose";

describe("Car Model", () => {
  const carCreateModel = new CarCreateModel();

  before(async () => {
    sinon.stub(Model, "create").resolves(carMock);
  });

  after(() => {
    sinon.restore();
  });

  describe("creating a car", () => {
    it("successfully created", async () => {
      const newCar = await carCreateModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMock);
    });
  });
});
