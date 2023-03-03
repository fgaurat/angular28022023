import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './fallback/fallback.component';
import { HelloComponent } from './lazy/hello/hello.component';
import { ProtectGuard } from './protect.guard';
import { ProtectComponent } from './protect/protect.component';

const routes: Routes = [
  // {path:"hello",component:HelloComponent}
  {path:"hello",loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)},
  {path:"protect",component:ProtectComponent,canActivate:[ProtectGuard]},
  {path:"fallback",component:FallbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
