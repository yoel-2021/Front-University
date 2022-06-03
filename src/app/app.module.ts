import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material-modules/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentDetailPageComponent } from './pages/student-detail-page/student-detail-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {FlexLayoutModule} from '@angular/flex-layout'


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavComponent,
    RegisterPageComponent,
    StudentsPageComponent,
    CoursesPageComponent,
    CategoriesPageComponent,
    MenuItemComponent,
    LoginFormComponent,
    RegisterFormComponent,
    StudentsTableComponent,
    StudentDetailPageComponent,
    CoursesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
