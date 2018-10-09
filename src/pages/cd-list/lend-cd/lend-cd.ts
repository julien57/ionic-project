import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Cd} from '../../../models/Cd';
import {BooksAndCdService} from '../../../services/booksAndCd.service';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  index: number;
  cd: Cd;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private booksAndCdService: BooksAndCdService) {
  }

  ngOnInit(): void {
    this.index = this.navParams.get('index');
    this.cd = this.booksAndCdService.cdList[this.index];
  }

  onToggleCd() {
    this.cd.isLent = !this.cd.isLent;
  }
}
