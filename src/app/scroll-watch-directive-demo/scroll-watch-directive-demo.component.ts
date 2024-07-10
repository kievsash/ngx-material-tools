import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-watch-directive-demo',
  templateUrl: './scroll-watch-directive-demo.component.html',
  styleUrls: ['./scroll-watch-directive-demo.component.scss']
})
export class ScrollWatchDirectiveDemoComponent implements OnInit {
  showContent = false;
  addWidth = '100%';

  codeExample = `
  <code class="code">
   Scroll status: {{scrollable.data | json}}
  </code>
  <section class="content" >
    <div class="header" [style.margin-right.px]="scrollable?.data?.verticalScrollBarWidth">
      Right aligned label
    </div>
    <div class="scrollable" scrollWatch #scrollable="scrollDetails" >
     some long content (which may differ over time)
    </div>
   </section>
  `;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVertScroll() {
    this.showContent = !this.showContent;
  }

  toggleHorScroll() {
    this.addWidth = this.addWidth === '110%' ? '100%' : '110%';
  }


}
