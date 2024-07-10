import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { NgxMaterialToolsModule } from '../../projects/ngx-material-tools/src/lib/ngx-material-tools.module';
import { ReactiveFormsModule } from '@angular/forms';
import {ContainsScrollPipeDemoComponent} from './contains-scroll-pipe-demo/contains-scroll-pipe-demo.component';
import {AppRoutingModule} from './app.routing-module';
import {CommifiedInputDemoComponent} from './commified-input/commified-input-demo.component';
import {ScrollWatchDirectiveDemoComponent} from './scroll-watch-directive-demo/scroll-watch-directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainsScrollPipeDemoComponent,
    CommifiedInputDemoComponent,
    ScrollWatchDirectiveDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaterialToolsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
