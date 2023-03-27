import { Router } from 'express';
import CreateMotorcycleController from '../controllers/CreateMotorcycleController';
import MotorcycleCreateService from '../services/MotorcycleCreateService';
import Motorcycle from '../models/MotorcycleCreateModel';

const route = Router();

const motorcycle = new Motorcycle();
const createMotorcycleService = new MotorcycleCreateService(motorcycle);
const createMotorcycleController = new CreateMotorcycleController(createMotorcycleService);

route.get('/motorcycles', (req, res) => createMotorcycleController.read(req, res));
route.post('/motorcycles', (req, res) => createMotorcycleController.create(req, res));
route.get('/motorcycles/:id', (req, res) => createMotorcycleController.readOne(req, res));
route.put('/motorcycles/:id', (req, res) => createMotorcycleController.update(req, res));
route.delete('/motorcycles/:id', (req, res) => createMotorcycleController.delete(req, res));

export default route;