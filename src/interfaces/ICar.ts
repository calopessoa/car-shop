import { z } from 'zod';
import { vehicle } from './IVehicle';

const car = vehicle.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type ICar = z.infer<typeof car>;
export default ICar;
export { car };