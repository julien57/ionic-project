import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {BooksAndCdService} from '../../services/booksAndCd.service';
import {Book} from '../../models/Book';
import {LendBookPage} from './lend-book/lend-book';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList: Book[];

  constructor(private booksAndCdService: BooksAndCdService,
              private modalCtrl: ModalController,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.bookList = this.booksAndCdService.booksList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index})
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
