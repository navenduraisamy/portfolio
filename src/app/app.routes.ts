import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { VibeComponent } from "./vibe/vibe.component";

export const AppRoutes: Routes = [
    {path:"about", component:AboutComponent},
    {path:"timeline", component:TimelineComponent},
    {path:"projectList", component: ProjectListComponent},
    {path:"vibe", component:VibeComponent},
    {path:"**", redirectTo:"/about", pathMatch:"full"}
];