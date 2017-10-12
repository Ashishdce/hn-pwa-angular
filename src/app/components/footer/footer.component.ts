import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  moduleId: module.id,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear: string | number;
  constructor() {}
  ngOnInit() {
    this.currentYear = (new Date()).getFullYear();
  }
}
