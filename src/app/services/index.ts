import { CommonService } from './common.service';
import { DataResolver } from './data.resolver.service';
import { UniversalInterceptor } from './interceptor.service';

export * from './common.service';
export * from './data.resolver.service';
export * from './interceptor.service';

export const Services = [
    CommonService,
    DataResolver,
    UniversalInterceptor
];
