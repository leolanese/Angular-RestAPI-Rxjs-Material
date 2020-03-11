import { Component, OnInit } from '@angular/core';
import { RestObservableService } from './rest-observable.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-observable',
  templateUrl: './rest-observable.component.html',
  styles: ['li { list-style-type: none; padding: 20px 0; }']
})
export class RestObservableComponent implements OnInit {
  getPosts: Observable<any>;
  getComments: Observable<any>;
  getUsers: Observable<any>;
  getUsersPosts: Observable<any>;
  postPosts: string;
  putPosts: string;
  patchPosts: string;
  deletePosts: string;
  errorMessage: string;

  constructor(private restObservableService: RestObservableService) {}

  ngOnInit() {}

  // GET
  onGetPosts() {
    this.getPosts = this.restObservableService.getPosts();
  }

  onGetSpecificComments() {
    this.getComments = this.restObservableService.getSpecificComments();
  }

  onGetUsers() {
    this.getUsers = this.restObservableService.getUsers();
  }

  onGetUsersPosts() {
    this.getUsersPosts = this.restObservableService.getUsersPosts();
  }

  // POST
  onPostPosts() {
    this.restObservableService
      .postPosts({
        userId: '49',
        id: '48',
        title: 'new title',
        body: 'new body text'
      })
      .subscribe(
        data => (this.postPosts = JSON.stringify(data)),
        error => (this.errorMessage = <any>error),
        () => console.log('Post posts finished')
      );
  }

  // PUT
  onPutPosts() {
    this.restObservableService
      .putPosts({
        userId: '23',
        id: '9',
        title: 'new title 2',
        body: 'new body text 2'
      })
      .subscribe(
        data => (this.putPosts = JSON.stringify(data)),
        error => (this.errorMessage = <any>error),
        () => console.log('Put posts finished')
      );
  }

  // PATCH
  onPatchPosts() {
    this.restObservableService
      .patchPosts({
        userId: '43',
        id: '12',
        title: 'new title 3',
        body: 'new body text 3'
      })
      .subscribe(
        data => (this.patchPosts = JSON.stringify(data)),
        error => (this.errorMessage = <any>error),
        () => console.log('Patch posts finished')
      );
  }

  // DELETE
  onDeletePosts() {
    this.restObservableService.deletePosts().subscribe(
      data => (this.deletePosts = JSON.stringify(data)),
      error => (this.errorMessage = <any>error),
      () => console.log('Delete post finished')
    );
  }
}
