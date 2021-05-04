import { AuthGuard } from '../guard/auth.guard';
import { AuthService } from './auth/auth.service';

export const services = [AuthService];
export const guards = [AuthGuard];
