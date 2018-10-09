import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BookListPage} from '../pages/book-list/book-list';
import {LendBookPage} from '../pages/book-list/lend-book/lend-book';
import {CdListPage} from '../pages/cd-list/cd-list';
import {LendCdPage} from '../pages/cd-list/lend-cd/lend-cd';
import {BooksAndCdService} from '../services/booksAndCd.service';
import {TabsPage} from '../pages/tabs/tabs';
import {SettingsPage} from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    TabsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksAndCdService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
