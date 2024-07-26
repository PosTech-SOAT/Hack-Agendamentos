import { Router } from 'express';
import SchedulesController from '../../infra/controllers/SchedulesController';

const schedulesRoute = Router();

const schedulesController = new SchedulesController();

schedulesRoute.get('/', (req, res) => schedulesController.list(req, res));
schedulesRoute.get('/:id', (req, res) => schedulesController.findOne(req, res));
schedulesRoute.patch('/:id', (req, res) =>
  schedulesController.update(req, res),
);
schedulesRoute.delete('/:id', (req, res) =>
  schedulesController.delete(req, res),
);
schedulesRoute.post('/', (req, res) => schedulesController.create(req, res));

export default schedulesRoute;
