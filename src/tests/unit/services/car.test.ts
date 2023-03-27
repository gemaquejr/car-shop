import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog'

import CarCreateModel from "../../../models/CarCreateModel";
import CarCreateService from "../../../services/CarCreateService";

import { carMock, carMockWithId } from "../../mocks/carMock";

describe("Car Service", () => {
  const carCreateModel = new CarCreateModel();
  const carCreateService = new CarCreateService(carCreateModel);

  before(async () => {
    sinon.stub(carCreateModel, "create").resolves(carMock);
    sinon.stub(carCreateModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);

    sinon.stub(carCreateModel, 'read').resolves([carMockWithId]);

    sinon.stub(carCreateModel, 'update')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);

    sinon.stub(carCreateModel, 'delete')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe("creating a car", () => {
    it("successfully created", async () => {
      const newCar = await carCreateService.create(carMock);
      expect(newCar).to.be.deep.equal(carMock);
    });

    it('Failure', async () => {
      try {
        await carCreateService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('ReadOne car', () => {
    it('Success', async () => {
      const carCreated = await carCreateService.readOne(carMockWithId._id);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      try {
        await carCreateService.readOne(carMockWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe('Read all cars', () => {
    it('Success', async () => {
      const carCreated = await carCreateService.read();

      expect(carCreated).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Deleting a car', () => {
    it('Success', async () => {
      const carCreated = await carCreateService.delete(carMockWithId._id);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      try {
        await carCreateService.delete(carMockWithId._id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });
});