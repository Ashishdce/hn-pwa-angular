import { Component, OnDestroy } from '@angular/core';
import { CommonService } from '../../services';
@Component({
  selector: 'app-loader',
  moduleId: module.id,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnDestroy {
  private subscription;
  loader = false;
  constructor(private service: CommonService) {
    this.subscription = this.service.$loader.subscribe(data => this.loader = data);
   }
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
