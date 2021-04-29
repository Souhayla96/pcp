import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MarchandComponent } from './marchand/marchand.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegesterComponent } from './users/user-regester/user-regester.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilSettingComponent } from './users/profil-setting/profil-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MarchandComponent,
    UsersComponent,
    UserLoginComponent,
    UserRegesterComponent,
    ProfilSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
