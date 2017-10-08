import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonService } from '../../services';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-header',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  fixHeader = false;
  isScrolledUp = false;
  showIndexing = true;
  showScrollButton = false;
  currentType;
  count = 0;
  pageType;
  pageName = 'Top Stories';
  curPageNumber = 1;
  currentEvent;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CommonService,
    private location: Location,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen('window', 'scroll', (e) => {
      const yScroll = e['path'][1]['scrollY'];
      this.currentEvent = e;
      if (yScroll >= 115) {
        if (yScroll > 300) {
          this.showScrollButton = true;
        } else {
          this.showScrollButton = false;
        }
        this.fixHeader = true;
      } else {
        this.showScrollButton = false;
        this.fixHeader = false;
      }
    });

    this.service.$pageDetails.subscribe(data => {
      if (data) {
        this.pageName = data['name'];
        this.pageType = data['type'];
        this.curPageNumber = data['id'] ? data['id'] : null;
        if (!this.curPageNumber) {
          this.showIndexing = false;
        } else {
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
    } else if (val && val === 'image-click') {
      this.router.navigate(['/newest/1']);
    }
  }
  scrollUp() {
    this.currentEvent['path'][1].scrollTo(0, 0);
  }
}
