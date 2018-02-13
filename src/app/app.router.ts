import { NgModule } from '@angular/core';
import { ExtraOptions,Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './common/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const ROUTES: Routes = [
    {path: '', redirectTo: 'Login', pathMatch: 'full'},
    { path: 'Login', component: LoginComponent },
    {
      path: 'app', component: LayoutComponent,
      children: [
        {path: '', redirectTo: 'Home',pathMatch: 'full'},
        {path: 'Home', component: HomeComponent},
        {path: 'Dashboard', component: DashboardComponent},
      ]
    }
];

const config: ExtraOptions = {
    useHash: true,
};

  @NgModule({
    imports: [RouterModule.forRoot(ROUTES, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }
