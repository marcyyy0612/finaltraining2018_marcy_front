import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import {
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SigninComponent } from './authorization/signin/signin.component';
import { MessagesComponent } from './messages/messages.component';
import { RecsComponent } from './recs/recs.component';
import { ProfileComponent } from './profile/profile.component';
import { TopComponent } from './top/top.component';
import { StoresComponent } from './stores/stores.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { AuthGuardService } from './auth-guard.service';
import { SignupComponent } from './authorization/signup/signup.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MatchingComponent } from './matching/matching.component';
import { AppState } from './app.state';
import { ModifyProfComponent } from './modify-prof/modify-prof.component';

const appRoutes: Routes = [
  { path: '', component: TopComponent },
  { path: 'app/recs', component: RecsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SigninComponent,
    SignupComponent,
    MessagesComponent,
    RecsComponent,
    ProfileComponent,
    TopComponent,
    StoresComponent,
    MessagesListComponent,
    ProfileListComponent,
    AuthorizationComponent,
    MatchingComponent,
    ModifyProfComponent,
  ],
  entryComponents: [
    AuthorizationComponent,
    MatchingComponent,
    ModifyProfComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'PLAY_SESSION_CSRF',
      headerName: 'Csrf-Token'
    }),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    NgxAutoScrollModule
  ],
  providers: [
    CookieService,
    AppState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
