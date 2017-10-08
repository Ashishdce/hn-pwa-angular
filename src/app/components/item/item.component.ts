import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  commentData: any;
  showMore = false;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.commentData = this.route.snapshot.data['content'];
  }
}
