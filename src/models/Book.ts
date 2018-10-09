export class Book {

  isLent: boolean;

  constructor(public name: string, public description: string, public auteur: string) {
    this.isLent = false;
  }
}
