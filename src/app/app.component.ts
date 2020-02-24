import {Component} from '@angular/core';
import {Hero} from './hero';
import {Classe} from './classe.enum';
import * as Surnames from './../assets/surnames.json';
import * as Names from './../assets/name.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digital-art';
  public userData: Hero;

  test(data: any) {
    let identifier: string;
    let array: string[];
    let result: number[] = [];
    console.log(data.target.value);
    identifier = data.target.value;
    array = identifier.split(/\s/);

    if(array.length == 4){
      console.log(array);
      let sum = 0;
      for (const str of array) {
        sum = 0;
        for (let i = 0; i < str.length; i++) {
          sum += str.charCodeAt(i);
        }
        result.push(sum);
      }
    } else{
      let length = identifier.length;
      let dividedLength = length / 4;
      let indexStart = 0;
      let indexEnd = dividedLength;
      let sum = 0;
      for(let i = 0; i < 4; i++){
        let currentString = identifier.substr(indexStart, indexEnd);
        sum = 0;
        for (let i = 0; i < currentString.length; i++) {
          sum += currentString.charCodeAt(i);
        }
        result.push(sum);
        indexStart += dividedLength;
        indexEnd += dividedLength;
        console.log(result)
      }
    }

    let surnames = Surnames.surnames;
    let names = Names.names;
    let classe = (result[0].valueOf() / 10 ) - Math.floor((result[0].valueOf() / 10 ));
    console.log(classe);
    let surname = (result[1].valueOf() / 100 ) - Math.floor((result[1].valueOf() / 100 ));
    let name = (result[2].valueOf() / 100 ) - Math.floor((result[2].valueOf() / 100 ));
    let lvl = (result[3].valueOf() / 100 ) - Math.floor((result[3].valueOf() / 100 ));
    classe = classe * 10;
    surname = surname * 100;
    name = name * 100;
    lvl = lvl * 100;

    const user: Hero = {
      classe: Classe[Math.round(classe)],
      surname: surnames[Math.round(surname)].name,
      description: surnames[Math.round(surname)].description,
      name: names[Math.round(name)].name,
      path: 'assets/images/' + Classe[Math.round(classe)] + '.png',
      lvl: Math.round(lvl)
    };
    this.userData = user;
    console.log(user);
  }
}
