import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { VibeComponent } from './vibe/vibe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    AboutComponent,
    TimelineComponent,
    VibeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"about", component:AboutComponent},
      {path:"timeline", component:TimelineComponent},
      {path:"vibe", component:VibeComponent},
      {path:"**", redirectTo:"/about", pathMatch:"full"}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
