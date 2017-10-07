import { CommonService } from '../../services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  pageData: Array<Object>;
  currentPageNumber: number;
  currentType: string;
  count: number;
  constructor(private route: ActivatedRoute, private router: Router, private service: CommonService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data) {
        this.pageData = data['content']['data'];
        this.service.$totalCount.next(this.pageData.length);
        this.currentPageNumber = +data['content']['id'];
        this.currentType = data['key'];
        this.count = +(30 * (this.currentPageNumber - 1) + 1);
      }
    });
  }
  navigate(type: string, val?) {
    if (type === 'comments') {
      this.router.navigate([`/item/${val}`]);
    } else {
      this.router.navigate([`/user/${val}`]);
    }
  }
}
