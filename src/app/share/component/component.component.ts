import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class ComponentComponent {
  @Output() myAction = new EventEmitter<string>();

  title: string = '';

  onClickAction(): void {
    this.myAction.emit(this.title);
  }
}
