import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { MobileComponent } from './mobile/mobile.component';
import { AutosComponent } from './autos/autos.component';
import { BikesComponent } from './bikes/bikes.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CradComponent } from './crad/crad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    AddproductsComponent,
    ProductsComponent,
    MobileComponent,
    AutosComponent,
    BikesComponent,
    ManageproductsComponent,
    CradComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
