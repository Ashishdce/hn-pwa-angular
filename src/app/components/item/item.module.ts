import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    ItemComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
          path: '',
          component: ItemComponent
        }
    ])
  ],
  exports: [ItemComponent],
  entryComponents: [ItemComponent]
})
export class ItemModule {}
