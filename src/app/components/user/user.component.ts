import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HostListener} from "@angular/core";
import { CommonService } from '../../services';

@Component({
  selector: 'app-user',
  moduleId: module.id,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userData: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userData = this.route.snapshot.data['content'][0];
    console.log(this.userData);
  }

}
