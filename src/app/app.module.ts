import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PipeDemoComponentComponent } from './components/pipe-demo-component/pipe-demo-component.component';
import { FormsModule } from '@angular/forms';

import { MyCurrencyPipePipe } from 'src/app/pipes/my-currency-pipe.pipe';
import { MyDatePipePipe } from 'src/app/pipes/my-date-pipe.pipe';
import { TitleCasePipePipe } from 'src/app/pipes/title-case-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponentComponent,
    TitleCasePipePipe,
    MyDatePipePipe,
    MyCurrencyPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}