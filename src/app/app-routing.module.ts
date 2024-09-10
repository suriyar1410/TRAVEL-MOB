import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PackageDetailsPage } from './allpages/package-details/package-details.page';
import { ProducthomeComponent } from './allpages/producthome/producthome.component';
import { TravelcalenComponent } from './allpages/travelcalen/travelcalen.component';
import { PaymentComponent } from './allpages/payment/payment.component';
import { CalenpageComponent } from './allpages/calenpage/calenpage.component';
import { CartpageComponent } from './allpages/cartpage/cartpage.component';
import { VehicleDetailsPage } from './allpages/vehicle-details/vehicle-details.page';

const routes: Routes = [
  { path: 'producthome', component: ProducthomeComponent },
  {path:'travelcalen',component:TravelcalenComponent},
  {path:'payment',component:PaymentComponent},
  {path:'cart',component:CartpageComponent},
  {path:'calenpage',component:CalenpageComponent},
  { path: 'package-details/:id', component: PackageDetailsPage }, 
  { path: '', redirectTo: '/producthome', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'package-details',
    loadChildren: () => import('./allpages/package-details/package-details.module').then( m => m.PackageDetailsPageModule)
  },
  {
    path: 'vehicle-details',
    loadChildren: () => import('./allpages/vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
