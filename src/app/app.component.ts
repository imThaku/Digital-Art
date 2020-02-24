import {Component} from '@angular/core';
import {Hero} from './hero';
import {Classe} from './classe.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digital-art';

  test(data: any) {
    let identifier: string;
    let array: string[];
    let result: number[] = [];
    let user: Hero = {classe: '', lvl: 0, name: ''};
    console.log(data.target.value);
    identifier = data.target.value;
    array = identifier.split(/\s/);
    console.log(array);
    let sum = 0;
    for (const str of array) {
      sum = 0;
      for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
      }
      result.push(sum);
    }
    let var1 = (result[0].valueOf() / 10 ) - Math.floor((result[0].valueOf() / 10 ));
    var1 = var1 * 10;
    user.classe = Classe[Math.round(var1)];
    console.log(user.classe);
  }
}
