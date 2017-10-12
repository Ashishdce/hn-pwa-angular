import { UserComponent } from './components/user/user.component';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './services';

const routes: Routes = [
    {
        path: 'newest',
        data: {
            name: 'Newest',
            nav: true,
            priority: 2
        },
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: DataResolver
            },
            data: {
                key: 'newest'
            }
        },
        {
            path: '',
            redirectTo: '1',
            pathMatch: 'full'
        }]
    },
    {
        path: 'news',
        data: {
            name: 'News',
            nav: true,
            priority: 1
        },
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: DataResolver
            },
            data: {
                key: 'news'
            }
        },
        {
            path: '',
            redirectTo: '1',
            pathMatch: 'full'
        }]
    },
    {
        path: 'show',
        data: {
            name: 'Show',
            nav: true,
            priority: 3
        },
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: DataResolver
            },
            data: {
                key: 'show'
            }
        },
        {
            path: '',
            redirectTo: '1',
            pathMatch: 'full'
        }]
    },
    {
        path: 'ask',
        data: {
            name: 'Asks',
            nav: true,
            priority: 4
        },
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: DataResolver
            },
            data: {
                key: 'ask'
            }
        },
        {
            path: '',
            redirectTo: '1',
            pathMatch: 'full'
        }]
    },
    {
        path: 'jobs',
        data: {
            name: 'Jobs',
            nav: true,
            priority: 5
        },
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: DataResolver
            },
            data: {
                key: 'jobs'
            }
        },
        {
            path: '',
            redirectTo: '1',
            pathMatch: 'full'
        }]
    },
    {
        path: 'user',
        data: {
            name: 'User',
            nav: false
        },
        children: [{
            path: ':id',
            loadChildren: 'app/components/user/user.module#UserModule',
            resolve: {
                content: DataResolver
            },
            data: {
                key: 'user'
            }
        },
        {
            path: '',
            redirectTo: '/newest/1',
            pathMatch: 'full'
        }],
    },
    {
        path: 'item',
        data: {
            name: 'Comments',
            nav: false
        },
        children: [{
            path: ':id',
            loadChildren: 'app/components/item/item.module#ItemModule',
            resolve: {
                content: DataResolver
            },
            data: {
                key: 'item'
            }
        },
        {
            path: '',
            redirectTo: '/newest/1',
            pathMatch: 'full'
        }]
    },
    {
        path: '',
        redirectTo: 'newest/1',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'newest/1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {initialNavigation: 'enabled'})
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
