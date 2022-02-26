import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFrontModule } from './templates/template-front/template-front.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FiltreMoneyPipe } from './shared/pipes/filtre-money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FiltreMoneyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateFrontModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    FiltreMoneyPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
