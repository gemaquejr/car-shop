import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const CarZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7) });

type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema, ICar };