import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [
    ItemComponent,
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
  providers: [],
  exports: [ItemComponent],
  entryComponents: [ItemComponent]
})
export class ItemModule {}
