import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() OnePost: Post = {
    title: '',
    thought: ''
  }
  
  changeTitle: string = '';
  changeThought: string = '';

  editMode: boolean = false;

  @Output() remove: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.changeTitle = this.OnePost.title;
    this.changeThought = this.OnePost.thought;
    this.editMode = true;
  }

  save(){
    this.OnePost.title = this.changeTitle;
    this.OnePost.thought = this.changeThought;
    this.editMode = false;
  }

  cancel(){
    this.editMode = false;
  }

  delete(){
    this.remove.emit(this.OnePost);
  }
}
