import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  //custom property binding
  //receive data from outside
  @Input() element: {
    type: string,
    name: string,
    content: string
  };
}
