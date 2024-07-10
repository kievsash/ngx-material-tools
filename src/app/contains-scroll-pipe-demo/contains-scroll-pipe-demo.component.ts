import { Component } from '@angular/core';

@Component({
  selector: 'app-contains-scroll-pipe-demo',
  templateUrl: './contains-scroll-pipe-demo.component.html',
  styleUrls: ['./contains-scroll-pipe-demo.component.scss']
})
export class ContainsScrollPipeDemoComponent {
  showContent = false;

  codeExample = `
    <section class="content" >

      Scroll status: {{(scrollable | containsScroll | async) | json}}

      <div class="header" [style.margin-right.px]="(scrollable | containsScroll | async)?.verticalScrollBarWidth || 0">
        Right aligned label
      </div>
      <div class="scrollable" #scrollable >
        <div class="some-long-text" *ngIf="showHideContent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet aperiam asperiores, harum illo in iure nam non odit pariatur perferendis placeat quia quis reiciendis, rem saepe sequi temporibus unde?
        </div>
      </div>
    </section>
  `;

  addScroll() {
    this.showContent = true;
  }

  removeScroll() {
    this.showContent = false;
  }

}
