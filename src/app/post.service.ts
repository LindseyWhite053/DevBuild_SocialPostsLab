import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  TheList: Post[] = []

  get(): Post[] {
    return this.TheList;
  }

  constructor() { }
}
