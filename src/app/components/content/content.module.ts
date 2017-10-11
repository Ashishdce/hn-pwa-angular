import { NoDataModule } from '../no-data/no-data.module';
import { CommonModule } from '@angular/common';
import { ContentChild, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    CommonModule,
    NoDataModule,
    RouterModule.forChild([
        {
          path: '',
          component: ContentComponent
        }
    ])
  ],
  exports: [ContentComponent],
  entryComponents: [ContentComponent]
})
export class ContentModule {}
