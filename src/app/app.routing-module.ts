import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommifiedInputDemoComponent} from './commified-input/commified-input-demo.component';
import {ScrollWatchDirectiveDemoComponent} from './scroll-watch-directive-demo/scroll-watch-directive-demo.component';
import {ContainsScrollPipeDemoComponent} from './contains-scroll-pipe-demo/contains-scroll-pipe-demo.component';

const routes: Routes = [
  { path: '', component: CommifiedInputDemoComponent },
  { path: 'has-scroll-pipe', component: ContainsScrollPipeDemoComponent },
  { path: 'scroll-watch-directive', component: ScrollWatchDirectiveDemoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
