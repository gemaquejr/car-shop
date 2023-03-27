import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarCreateModel from "../../../models/CarCreateModel";
import { carMock, carMockWithId, carUpdateMock, carUpdateMockWithId } from "../../mocks/carMock";
import { Model } from "mongoose";

describe("Car Model", () => {
  const carCreateModel = new CarCreateModel();

  before(async () => {
    sinon.stub(Model, "create").resolves(carMock);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carUpdateMockWithId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(carMockWithId);
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

  describe('searching a car', () => {
    it('successfully found', async () => {
      const CarsFound = await carCreateModel.readOne('62cf1fc6498565d94eba52cd');
      expect(CarsFound).to.be.deep.equal(carMockWithId);
    });

    it('_id invalid', async () => {
      try {
        await carCreateModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('searching all cars', () => {
    it('returns all Cars in the db', async () => {
      const CarsFound = await carCreateModel.read();
      expect(CarsFound).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('updating a car', () => {
    it('successfully deleted', async () => {
      const CarDeleted = await carCreateModel.update('62cf1fc6498565d94eba52cd', carUpdateMock);
      expect(CarDeleted).to.be.deep.equal(carUpdateMockWithId);
    });

    it('_id invalid', async () => {
      try {
        await carCreateModel.update('123ERRADO', carUpdateMock);
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('deleting a car', () => {
    it('successfully deleted', async () => {
      const CarDeleted = await carCreateModel.delete('62cf1fc6498565d94eba52cd');
      expect(CarDeleted).to.be.deep.equal(carMockWithId);
    });

    it('_id invalid', async () => {
      try {
        await carCreateModel.delete('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});