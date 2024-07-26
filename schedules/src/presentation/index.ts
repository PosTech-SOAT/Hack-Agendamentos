import { Router } from 'express';
import schedulesRoutes from './routes/SchedulesRoutes';

const router = Router();

router.use('/schedules', schedulesRoutes);

export default router;
