import { CommonModule } from '@angular/common';
import { ContentChild, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
// import { ContentResolver } from './content.resolver.service';

@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
          path: '',
          component: ContentComponent
        }
    ])
  ],
//   providers: [ContentResolver],
  exports: [ContentComponent],
  entryComponents: [ContentComponent]
})
export class ContentModule {}
