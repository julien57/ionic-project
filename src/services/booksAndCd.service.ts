import {Book} from '../models/Book';
import {Cd} from '../models/Cd';

export class BooksAndCdService {

  booksList: Book[] = [
    {
      name: 'Le Petit Prince',
      description: 'Le Petit Prince est une œuvre de langue française, la plus connue d\'Antoine de Saint-Exupéry. Publié en 1943 à New York simultanément à sa traduction anglaise, c\'est une œuvre poétique et philosophique sous l\'apparence d\'un conte pour enfants.',
      auteur: 'Antoine de Saint-Exupéry',
      isLent: false
    },
    {
      name: 'La couleur des émotions',
      description: 'Le monstre des couleurs se sent tout barbouillé aujourd\'hui. Ses émotions sont sens dessus dessous ! Il ne comprends pas ce qui lui arrive. Réussira-t-il à mettre de l\'ordre dans son cœur et à retrouver son équilibre ?',
      auteur: 'Anna Llenas et Marie Antilogus',
      isLent: false
    },
    {
      name: 'Le loup qui apprivoisait ses émotions',
      description: 'Il etait une fois un gentil loup qui vivait dans une belle forêt, entoure de tous ses amis. Il s\'appelait Loup. Mais ce loup avait un souci : il etait trop emotif. Joyeux, fâche, triste, excite... il changeait d\'humeur à cent à l\'heure !',
      auteur: 'Orianne Lallemand',
      isLent: true
    }
  ];

  cdList: Cd[] = [
    {
      name: 'Six Pack',
      singer: 'The Police',
      isLent: false
    },
    {
      name: 'Sarbacane',
      singer: 'Francis Cabrel',
      isLent: false
    },
    {
      name: 'Je suis nul',
      singer: 'Jul',
      isLent: true
    }
  ]
}
