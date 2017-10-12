import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public offline = false;
  public showAlert = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('window', 'offline', (e) => {
      console.log('offline');
      this.offline = true;
      this.showAlert = true;
      console.log(e);
      e['path'][0].setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    });
    this.renderer.listen('window', 'online', (e) => {
      console.log('online');
      this.offline = false;
      this.showAlert = true;
      e['path'][0].setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    });
  }
  skipContent(e) {
    console.log(e);
  }
}

