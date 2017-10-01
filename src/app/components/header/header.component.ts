import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HostListener} from "@angular/core";
import { CommonService } from '../../services';
@Component({
  selector: 'app-header',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //  let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //  if (number >= 83) {
  //    if (number >=250) {
  //      this.showScrollButton = true;
  //    } else {
  //      this.showScrollButton = false;
  //    }
  //    this.isScrolledUp = true;
  // } else {
  //   this.isScrolledUp = false;
  //   this.showScrollButton = false;
  //  }
  // }
  showMenu = false;
  isScrolledUp = false;
  showIndexing = true;
  showScrollButton = false;
  pageName = 'Top Stories';
  githubLink = 'https://github.com/Ashishdce/hn-pwa-angular';
  curPageNumber = 1;
  prevPageNumber = 0
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
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  navigate(val?) {
    if (val && val === 'back') {
      this.location.back();
    } else {
      this.router.navigate(['/newest']);
    }
  }
  scrollToTop() {
    // window.scrollTo(0, 0);
  }
}
