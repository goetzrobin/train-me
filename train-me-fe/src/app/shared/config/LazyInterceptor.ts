import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../module/auth/interceptor/auth.interceptor';

export const LazyInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
