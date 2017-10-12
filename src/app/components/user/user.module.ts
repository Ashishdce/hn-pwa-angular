import { NoDataModule } from '../no-data/no-data.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    // UserComponent,
  ],
  imports: [
    NoDataModule
  ],
  providers: [],
  // exports: [UserComponent],
  // entryComponents: [UserComponent]
})
export class UserModule {}
