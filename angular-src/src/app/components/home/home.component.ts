import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [PostsService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

}

interface Post{
  id: number;
  title: string;
  body: string;
}
