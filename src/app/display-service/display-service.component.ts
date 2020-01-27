import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/shared-data.service';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-display-service',
  templateUrl: './display-service.component.html',
  styleUrls: ['./display-service.component.scss']
})
export class DisplayServiceComponent implements OnInit {

  userDisplay: string;
  constructor(
    private sharedData: MessageService
  ) { }

  ngOnInit() {
    this.sharedData.username.pipe(
      tap((username) => {
        this.userDisplay = username.getValue();
      })
    ).subscribe()

    console.log(this.userDisplay);
  }

}
