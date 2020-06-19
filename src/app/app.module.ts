import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


// Modulo Externos
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
