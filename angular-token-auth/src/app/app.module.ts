import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {AuthService} from "./services/auth.service";
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from "./guards/auth.guard";
import { ItemsComponent } from './items/items.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { ItemService } from './items/shared/item.service';
import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    ItemsComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    routing
  ],
  providers: [ Angular2TokenService, AuthService, AuthGuard, ItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
