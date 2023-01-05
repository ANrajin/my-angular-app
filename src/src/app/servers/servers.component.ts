import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servername = "Test";
  allowAddServer = false;
  serverCreationStatus = "No server was created!";

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 3000);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer() {
    this.serverCreationStatus = `${this.servername} Server was created!`;
  }

}
