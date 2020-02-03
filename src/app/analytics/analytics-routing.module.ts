import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { Statement5Component } from './statement5/statement5.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/analytics',
    pathMatch:'full'
  },
  {
    path:'',
    component:AnalyticsComponent,
    children:[
      {
        path:'statement5',
        component:Statement5Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
