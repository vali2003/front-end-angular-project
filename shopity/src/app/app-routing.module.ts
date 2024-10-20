import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { MobileComponent } from './mobile/mobile.component';
import { AutosComponent } from './autos/autos.component';
import { BikesComponent } from './bikes/bikes.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CradComponent } from './crad/crad.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'card',component:CradComponent},
      {path:'mobile',component:MobileComponent},
      {path:'autos',component:AutosComponent},
      {path:'bikes',component:BikesComponent}
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddproductsComponent},
      {path:'product',component:ProductsComponent},
      {path:'mobile',component:MobileComponent},
      {path:'autos',component:AutosComponent},
      {path:'bikes',component:BikesComponent},
      {path:'manage',component:ManageproductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
