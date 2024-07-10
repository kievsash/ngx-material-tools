import {NgModule} from '@angular/core';
import {ContainsScrollPipe} from './pipes/contains-scroll.pipe';
import {MatInputCommifiedDirective} from './directives/mat-input-commified/mat-input-commified.directive';
import { ScrollWatchDirective } from './directives/scroll-watch/scroll-watch.directive';


@NgModule({
  declarations: [MatInputCommifiedDirective, ContainsScrollPipe, ScrollWatchDirective],
  imports: [],
  exports: [MatInputCommifiedDirective, ContainsScrollPipe, ScrollWatchDirective]
})
export class NgxMaterialToolsModule {
}
