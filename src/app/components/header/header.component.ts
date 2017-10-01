import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonService } from '../../services';
@Component({
  selector: 'app-header',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  isScrolledUp = false;
  showIndexing = true;
  showScrollButton = false;
  currentType;
  count = 0;
  pageType;
  pageName = 'Top Stories';
  curPageNumber = 1;
  prevPageNumber = 0;
  nextPageNumber = 2;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CommonService,
    private location: Location) { }

  ngOnInit() {
    this.service.$pageDetails.subscribe(data => {
      if (data) {
        this.pageName = data['name'];
        this.pageType = data['type'];
        this.curPageNumber = parseInt(data['pageNumber']);
        if (!this.curPageNumber) {
          this.showIndexing = false;
        } else {
          this.nextPageNumber = this.curPageNumber + 1;
          this.prevPageNumber = this.curPageNumber - 1;
          this.showIndexing = true;
        }
      }
    });
    this.service.$totalCount.subscribe(count => {
      if (count) {
        this.count = count;
      }
     });
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  navigate(val?) {
    if (val && val === 'back') {
      this.location.back();
    } else {
      if (val === 'next') {
        this.router.navigate([`${this.pageType}/${this.curPageNumber + 1}`]);
      } else {
        this.router.navigate([`${this.pageType}/${this.curPageNumber - 1}`]);
      }
    }
  }
  scrollToTop() {
    // window.scrollTo(0, 0);
  }
}
