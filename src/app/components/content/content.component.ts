import { CommonService } from '../../services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  pageData: Array<Object> = [];
  currentPageNumber: number;
  count: number;
  routeSubscription;
  pageDetailsSubscription;
  pageType;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CommonService) { }

  ngOnInit() {
    this.routeSubscription = this.route.data.subscribe(data => {
      if (data) {
        this.pageData = data['content'] || [];
        this.service.$totalCount.next(this.pageData.length);
      }
    });
    this.pageDetailsSubscription = this.service.$pageDetails.subscribe(data => {
      if (data) {
        this.pageType = data['type'];
        this.currentPageNumber = data['id'] ? data['id'] : null;
        this.count = (30 * ((this.currentPageNumber) - 1) + 1);
      }
    });
  }
  navigate(type: string, val?) {
    if (type === 'comments') {
      this.router.navigate([`/item/${val}`]);
    } else if (type === 'left') {
      this.router.navigate([`${this.pageType}/${this.currentPageNumber - 1}`]);
    } else if (type === 'right') {
      this.router.navigate([`${this.pageType}/${this.currentPageNumber + 1}`]);
    } else {
      this.router.navigate([`/user/${val}`]);
    }
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.pageDetailsSubscription.unsubscribe();
  }
}
