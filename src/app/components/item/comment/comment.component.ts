import { Component, OnInit, Input } from '@angular/core';
import {style} from '@angular/animations';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input('data') data;
  toggleComments = false;
  dynamicPadding;
  constructor() { }

  ngOnInit() {
    const level = this.data.level > 3 ? 0 : this.data.level;
    this.dynamicPadding = level * 15 + 'px';
  }

}
