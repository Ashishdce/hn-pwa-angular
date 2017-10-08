import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public greyOut = false;
  public showAlert = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('window', 'offline', (e) => {
      console.log('offline');
      this.greyOut = true;
      this.showAlert = true;
      console.log(e);
      e['path'][0].setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    });
    this.renderer.listen('window', 'online', (e) => {
      console.log('online');
      this.greyOut = false;
      this.showAlert = true;
      e['path'][0].setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    });
  }
}

