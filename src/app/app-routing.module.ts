import { HeaderComponent } from './components/header/header.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentResolver } from './services/content.resolver.service';
import { ItemResolver } from './services/item.resolver.service';

const routes: Routes = [
    {
        path: 'newest',
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: ContentResolver
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
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: ContentResolver
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
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: ContentResolver
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
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: ContentResolver
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
        children: [{
            path: ':id',
            loadChildren: 'app/components/content/content.module#ContentModule',
            resolve: {
                content: ContentResolver
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
        loadChildren: 'app/components/user/user.module#UserModule'
    },
    {
        path: 'item',
        children: [{
            path: ':id',
            loadChildren: 'app/components/item/item.module#ItemModule',
            resolve: {
                content: ItemResolver
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
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
