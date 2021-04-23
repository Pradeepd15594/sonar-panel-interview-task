import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';

/**@APP_COMPONENTS (COMMON) */
import { HeaderComponent } from './AppComponents/Header/header.component';
import { FooterComponent } from './AppComponents/Footer/footer.component';
import { SidebarComponent } from './AppComponents/Sidebar/sidebar.component';
import { UserWidgetComponent } from './AppComponents/Widgets/user.component';
import { NotificationComponent } from './AppComponents/Widgets/notification.component';
import { BackNavigation } from './AppComponents/Back-navigation/BackNavigation';
import {Screen404Component} from './Screens/screen404/screen404.component'; 
const APP_COMPONENTS=[
  HeaderComponent, FooterComponent, SidebarComponent, UserWidgetComponent, NotificationComponent,
  BackNavigation
]

/**@AUTHENTICATION_COMPONENTS */
import { DashboardComponent } from './Screens/Authentication/dashboard/dashboard.component';
import { UserListsModule } from './Screens/user-lists/user-lists.module';
import { SignInSignUpModule } from './Screens/Auth/sign-in-sign-up/sign-in-sign-up.module';

// import { NumbersOnly } from './AppDirectives/numberOnly.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ...APP_COMPONENTS,
    Screen404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,UserListsModule,SignInSignUpModule
  ],
  providers: [],
  entryComponents:[...APP_COMPONENTS],
  bootstrap: [AppComponent]
})
export class AppModule { }
