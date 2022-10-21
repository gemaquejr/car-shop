import { Router } from 'express';
import CreateCarController from '../controllers/CreateCarController';
import CreateCarService from '../services/CarCreateService';
import Car from '../models/CarCreateModel';

const route = Router();

const car = new Car();
const createCarService = new CreateCarService(car);
const createCarController = new CreateCarController(createCarService);

route.get('/cars', (req, res) => createCarController.read(req, res));
route.post('/cars', (req, res) => createCarController.create(req, res));

export default route;