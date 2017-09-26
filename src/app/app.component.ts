import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener("window:offline", [])
  onWindowOffline() {
   console.log('offline', window.navigator.onLine);
   this.greyOut = window.navigator.onLine;
   this.showAlert = true;
   setTimeout(() => {
     this.showAlert = false;
    }, 5000);
  }
  @HostListener("window:online", [])
  onWindowonline() {
    console.log('online', window.navigator.onLine);
    this.greyOut = window.navigator.onLine;
   this.showAlert = false;
  }
  showAlert = false;
  greyOut = window.navigator.onLine;
  title = 'app';
}
