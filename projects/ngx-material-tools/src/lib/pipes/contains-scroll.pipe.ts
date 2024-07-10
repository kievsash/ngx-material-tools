import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {map, merge, Observable, Subject, take, timer} from 'rxjs';
import {ContainsScrollEvent} from '../models/scroll-event.model';

@Pipe({
  name: 'containsScroll'
})
export class ContainsScrollPipe implements PipeTransform, OnDestroy {
  emitter = new Subject<ContainsScrollEvent>();
  observer: MutationObserver;

  transform(elem: HTMLElement): Observable<ContainsScrollEvent> {
    this.observer?.disconnect();

    this.observer = new MutationObserver(() => {
      const scrollInfo = this.getScroll(elem);
      this.emitter.next(scrollInfo);
    });

    this.observer.observe(elem, {attributes: true, childList: true, subtree: true});

    return merge(
      this.emitter,
      timer(0, 500).pipe(
        take(2), // first check may not reflect actual state (not rendered yet)
        map(() => this.getScroll(elem))
      ));
  }

  getScroll(elem: HTMLElement) {
    const hasHorizontalScroll = !!elem && (elem.scrollWidth > elem.clientWidth);
    const hasVerticalScroll = !!elem && elem.scrollHeight > elem.clientHeight;
    const verticalScrollBarWidth = elem.offsetWidth - elem.clientWidth;
    const horizontalScrollBarWidth = elem.scrollHeight - elem.clientHeight;
    return {hasHorizontalScroll, hasVerticalScroll, verticalScrollBarWidth, horizontalScrollBarWidth};
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.emitter.complete();
  }
}

