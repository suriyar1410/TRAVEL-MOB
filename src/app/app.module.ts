import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CalenpageComponent } from './allpages/calenpage/calenpage.component';
import { CartpageComponent } from './allpages/cartpage/cartpage.component';
import { ProducthomeComponent } from './allpages/producthome/producthome.component';
import { TravelcalenComponent } from './allpages/travelcalen/travelcalen.component';
import { PaymentComponent } from './allpages/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent,CalenpageComponent,CartpageComponent,ProducthomeComponent,TravelcalenComponent,PaymentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
