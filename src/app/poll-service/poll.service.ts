import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]>{
    return of([
      {
        id: 1,
        question: 'Do you like dogs??',
        thumbnail: 'https://x9s4w2e2.stackpathcdn.com/wp-content/uploads/2020/04/how_switch_works.jpg',
        results: [2,5,7],
        options: ["Cats", "Dogs", "None"],
        voted: true,
      },
      {
        id: 2,
        question: 'What is my name???',
        thumbnail: 'https://networkmeme.com/wp-content/uploads/2020/10/ipHone13.jpg',
        results: [0,0,0],
        options: ["Smile","Kisan","Sagar"],
        voted: false,
      }
    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber:number){
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm){
    console.log(poll);
  }
}
