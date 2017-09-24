import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-loader',
  moduleId: module.id,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  private subscription;
  loader = false;
  constructor(private service: CommonService) {
    this.subscription = this.service.$loader.subscribe(data => this.loader = data);
   }
}
