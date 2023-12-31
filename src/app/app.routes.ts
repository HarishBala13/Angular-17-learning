import { Routes } from "@angular/router";
 export const routes:Routes = [
  {
    path: 'travel',
    loadChildren: () =>
      import('./travel-module/travel-module.module').then(
        (travel) => travel.TravelModuleModule
      ),
  },
  {
    path: 'employer',
    loadChildren: () =>
      import('./employer-module/employer-module.module').then(
        (employer) => employer.EmployerModuleModule
      ),
  },
 ];
