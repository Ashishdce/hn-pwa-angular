import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  showMenu = false;
  isScrollBtnActive = false;
  curPageNumber = 1;
  navRoutes: any[];
  title: string;
  currentEvent;
  showBackButton = true;
  pageTitle = 'Hacker News';
  routeSubscription;
  pageDataSubscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CommonService,
    private location: Location,
    private renderer: Renderer2,
    private titleService: Title
  ) {
      this.routeSubscription = this.service.$routeData.subscribe(data => {
        if (data['type'] === 'user' || data['type'] === 'item') {
          this.showBackButton = true;
        } else {
          this.showBackButton = false;
        }
        this.title = data['name'] || '';
        this.titleService.setTitle(`${this.pageTitle} ${this.title ? '| ' + this.title : ''}`);
        this.showMenu = false;
        this.scrollUp();
      });
    }

  ngOnInit() {

    this.navRoutes = this.router.config.filter(c => c.data && c.data.nav).sort(this.sortPriority);

    this.renderer.listen('window', 'scroll', (e) => {
      const yScroll = e['path'][1]['scrollY'];
      this.currentEvent = e;
      if (yScroll >= 115) {
        if (yScroll > 300) {
          this.isScrollBtnActive = true;
        } else {
          this.isScrollBtnActive = false;
        }
      } else {
        this.isScrollBtnActive = false;
      }
    });

    this.pageDataSubscription = this.service.$pageDetails.subscribe(data => {
      if (data) {
        this.curPageNumber = data['id'] ? data['id'] : null;
      }
    });
  }
  sortPriority(a, b) {
    if (a.data.priority < b.data.priority) {
      return -1;
    }
    if (a.data.priority > b.data.priority) {
      return 1;
    }
    return 0;
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
    if (this.currentEvent) {
      this.currentEvent['path'][1].scrollTo(0, 0);
    }
  }
  navigateBack() {
    this.location.back();
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.pageDataSubscription.unsubscribe();
  }
}
