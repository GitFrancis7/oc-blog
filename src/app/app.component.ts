import {Component} from '@angular/core';
import {Post} from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oc-blog';

  posts: Array<Post> = [
    new Post('Mon premier Post', 'Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne' +
      ' que les validateurs doivent pouvoir cloner. Vous fournirez le lien vers le dépôt dans le champs de commentaires.\'', 0),
    new Post('Un Autre Post', 'Assuming that the CLI ng serve command is still running, ' +
      'the browser should refresh and display both the application title and the hero name.', 1),
    new Post('Un Super Post', 'Assuming that the CLI ng serve command is still running, ' +
      'the browser should refresh and display both the application title and the hero name.', 3),
    new Post('Un Mega Post', 'Assuming that the CLI ng serve command is still running, ' +
      'the browser should refresh and display both the application title and the hero name.', -2)
  ];


  constructor() {
  }
}
