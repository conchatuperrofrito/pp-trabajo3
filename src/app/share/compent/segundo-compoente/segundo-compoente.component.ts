import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-compoente',
  templateUrl: './segundo-compoente.component.html',
  styleUrls: ['./segundo-compoente.component.css']
})
export class SegundoCompoenteComponent {
  textTemp: string = '';

  title = 'stifler title';
  myActionOutput(event: string): void {
    this.title = event;
  }
}
