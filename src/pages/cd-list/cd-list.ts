import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Cd} from '../../models/Cd';
import {LendCdPage} from './lend-cd/lend-cd';
import {BooksAndCdService} from '../../services/booksAndCd.service';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: Cd[];

  constructor(private modalCtrl: ModalController,
              private booksAndCdService: BooksAndCdService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.cdList = this.booksAndCdService.cdList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
