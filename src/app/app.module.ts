import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './component/UI/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StudentComponent } from './component/student/student.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { AppState } from './store/global/app.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.model';
import { AddStudentComponent } from './component/student-add/add-student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule } from '@angular/common/http';
import { StudentEffects } from './store/student/student.effect';
import { OneStudentPageComponent } from './pages/one-student-page/one-student-page.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/router/custom.serializer';
import { SearchFilterPipe } from './service/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    StudentComponent,
    StudentPageComponent,
    AddStudentComponent,
    OneStudentPageComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState, {}),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([StudentEffects]),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
