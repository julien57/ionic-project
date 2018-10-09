import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Book} from '../../../models/Book';
import {BooksAndCdService} from '../../../services/booksAndCd.service';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  book: Book;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private booksAndCdService: BooksAndCdService) {
  }

  ngOnInit(): void {
    this.index = this.navParams.get('index');
    this.book = this.booksAndCdService.booksList[this.index];
  }

  onToggleBook() {
    this.book.isLent = !this.book.isLent;
  }
}
