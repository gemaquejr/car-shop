import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
    model: 'Peugeot',
    year: 2022,
    color: 'gray',
    buyValue: 110000,
    seatsQty: 5,
    doorsQty: 4,
}

const carMockWithId: ICar & { _id: string } = {
    _id: "4edd40c86762e0fb12000003",
    model: 'Peugeot',
    year: 2022,
    color: 'gray',
    buyValue: 110000,
    seatsQty: 5,
    doorsQty: 4,
  }
  
const carUpdateMock: ICar = {
    model: 'Peugeot',
    year: 2022,
    color: 'gray',
    buyValue: 150000,
    seatsQty: 5,
    doorsQty: 4,
  }
  
const carUpdateMockWithId: ICar & { _id: string } = {
    _id: "4edd40c86762e0fb12000003",
    model: 'Peugeot',
    year: 2022,
    color: 'gray',
    buyValue: 150000,
    seatsQty: 5,
    doorsQty: 4,
  }

export { carMock, carMockWithId, carUpdateMock, carUpdateMockWithId };