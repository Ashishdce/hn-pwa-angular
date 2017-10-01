import { CommonService } from './common.service';
import { ItemResolver } from './item.resolver.service';
import { UserResolver } from './user.resolver.service';
import { ContentResolver } from './content.resolver.service';

export * from './common.service';
export * from './item.resolver.service';
export * from './content.resolver.service';
export * from './user.resolver.service';

export const Services = [
    CommonService,
    ItemResolver,
    UserResolver,
    ContentResolver
];
