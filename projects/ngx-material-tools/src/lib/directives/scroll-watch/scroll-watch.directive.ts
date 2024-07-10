import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {map, Subject, Subscription, take, timer} from 'rxjs';
import {ContainsScrollEvent} from '../../models/scroll-event.model';

@Directive({
  selector: '[scrollWatch]',
  exportAs: 'scrollDetails'
})
export class ScrollWatchDirective implements OnInit, OnDestroy {
  data: ContainsScrollEvent;

  observer: MutationObserver;
  sub: Subscription;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const elem = this.elementRef.nativeElement;

    // initial value
    this.sub = timer(0, 500).pipe(
      take(2), // first check may not reflect actual state (not rendered yet)
      map(() => this.getScroll(elem))
    ).subscribe((data: ContainsScrollEvent) => {
      this.data = data;
    });

    // subsequent observation
    this.observer = new MutationObserver(() => {
      this.data = this.getScroll(elem);
    });

    this.observer.observe(elem, {attributes: true, childList: true, subtree: true});
  }

  getScroll(elem: HTMLElement) {
    const hasHorizontalScroll = !!elem && (elem.scrollWidth > elem.clientWidth);
    const hasVerticalScroll = !!elem && elem.scrollHeight > elem.clientHeight;
    const verticalScrollBarWidth = elem.offsetWidth - elem.clientWidth;
    const horizontalScrollBarWidth = elem.offsetHeight - elem.clientHeight;
    console.log('elem.scrollWidth', elem.scrollWidth);
    console.log('elem.clientWidth', elem.clientWidth)
    console.log('elem.offsetWidth', elem.offsetWidth)

    return {hasHorizontalScroll, hasVerticalScroll, verticalScrollBarWidth, horizontalScrollBarWidth};
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.sub?.unsubscribe();
  }
}
