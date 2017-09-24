import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  private subscription;
  private loader = false;
  constructor(private service: CommonService) {
    this.subscription = this.service.$loader.subscribe(data => this.loader = data);
   }
}
