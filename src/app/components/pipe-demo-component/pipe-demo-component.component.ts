import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo-component',
  templateUrl: './pipe-demo-component.component.html',
  styleUrls: ['./pipe-demo-component.component.scss']
})
export class PipeDemoComponentComponent {
  newWord: string='';
  typeOfThePipe: string = 'none';
  listOfWords: string[] = [];
  listOfUsedPipes: string[] = [];
  addWord()
  {
    this.listOfWords.push(this.newWord);
    this.newWord='';
    this.listOfUsedPipes.push(this.typeOfThePipe);
  }
}
