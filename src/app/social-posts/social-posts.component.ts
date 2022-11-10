import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  newTitle: string = '';
  newThought: string ='';

  showForm: boolean = false;
  
  constructor(public PostSrv: PostService) { }

  ngOnInit(): void {
  }

  showNewPostForm(){
    this.showForm = true;
  }

  add(){
    this.PostSrv.get().push({
      title: this.newTitle,
      thought: this.newThought
    })

    this.showForm = false;
    this.newTitle = '';
    this.newThought = '';
  }

  cancel(){
    this.showForm = false;
    this.newTitle = '';
    this.newThought = '';
  }

  removeItem(whichPost: Post){
    for(let i: number = 0 ; i < this.PostSrv.get().length ; i++){
      if (this.PostSrv.get()[i] == whichPost){
        this.PostSrv.get().splice(i, 1);
        return;
      }
    }
  }

}
