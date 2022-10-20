import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  compare(nextLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return nextLetter === enteredLetter ? 'correct' : 'incorrect';
  }

  onInput(value: any) {
    // console.log(value.target.value);
    this.enteredText = value.target.value;
  }
}
