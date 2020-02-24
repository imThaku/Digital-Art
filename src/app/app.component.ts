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
  private identifier: string;
  private array: string[];
  private result: number[] = [];
  private user: Hero = {classe: '', lvl: 0, name: ''};

  test(data: any) {
    console.log(data.target.value);
    this.identifier = data.target.value;
    this.array = this.identifier.split(/\s/);
    console.log(this.array);
    let sum = 0;
    for (const str of this.array) {
      sum = 0;
      for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
      }
      this.result.push(sum);
    }
    let var1 = (this.result[0].valueOf() / 10 ) - Math.floor((this.result[0].valueOf() / 10 ));
    var1 = var1 * 10;
    this.user.classe = Classe[Math.round(var1)];
    console.log(this.user.classe);
  }
}
