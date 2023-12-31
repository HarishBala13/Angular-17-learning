import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerModuleComponent } from './employer-module.component';

const routes: Routes = [
  {
    path:'',component:EmployerModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerModuleRoutingModule { }
