import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/shared-data.service';

@Component({
  selector: 'app-setup-service',
  templateUrl: './setup-service.component.html',
  styleUrls: ['./setup-service.component.scss']
})
export class SetupServiceComponent implements OnInit {


  username: string;

  constructor(
    private sharedData: MessageService
  ) {
    //this.username = 'abcd';
  }

  ngOnInit() {
    this.username = 'abcd';
    this.sharedData.changeUsername(this.username);
  }

}
