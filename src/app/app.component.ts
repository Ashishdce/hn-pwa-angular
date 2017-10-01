import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @HostListener("window:offline", [])
  // onWindowOffline() {
  //  console.log('offline', window.navigator.onLine);
  //  this.greyOut = window.navigator.onLine;
  //  this.showAlert = true;
  //  setTimeout(() => {
  //    this.showAlert = false;
  //   }, 5000);
  // }
  // @HostListener("window:online", [])
  // onWindowonline() {
  // this.greyOut = window.navigator.onLine;
  //  console.log('online', window.navigator.onLine);
  //  this.showAlert = false;
  // }

  constructor(private router: Router) {}
  showAlert = false;
  greyOut = true;
  // greyOut = window.navigator.onLine;
  title = 'app';
  // ngOnInit() {
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //         return;
  //     }
  //     window.scrollTo(0, 0);
  //   });
  // }
}

