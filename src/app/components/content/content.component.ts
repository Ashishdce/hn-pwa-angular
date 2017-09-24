import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  pageData: Array<Object>;
  currentPageNumber: number;
  currentType: string;
  count: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data) {
        this.pageData = data['content']['data'];
        this.currentPageNumber = +data['content']['id'];
        this.currentType = data['key'];
        this.count = +(30 * (this.currentPageNumber - 1) + 1);
      }
    });
  }
  navigate(type: string) {
    if (type === 'left') {
      this.router.navigate([`${this.currentType}/${this.currentPageNumber - 1}`]);
    } else if (type === 'right') {
      this.router.navigate([`${this.currentType}/${this.currentPageNumber + 1}`]);
    } else {
      this.router.navigate([`/item/${type}`]);
    }
  }
}
