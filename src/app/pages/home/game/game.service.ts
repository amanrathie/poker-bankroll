import { Injectable } from '@angular/core';
import {Game} from './game.model';
import {Http, Response} from '@angular/http';

@Injectable()
export class GameService {
  constructor(private http : Http) {  }

  addGame(newGame : Game) : Promise<void | Game> {
    return this.http.post('/api/game', newGame)
                .toPromise()
                .then(resp => resp.json() as Game)
                .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}