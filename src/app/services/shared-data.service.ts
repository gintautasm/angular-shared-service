import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable()

export class MessageService {
    private usernameSource = new BehaviorSubject<string>('Onejohi Tony');
    username = of(this.usernameSource);

    constructor() { }

    changeUsername(username: string) {
        this.usernameSource.next(username);
    }
}