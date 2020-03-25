import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RestObservableService } from '../services/rest-observable.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-observable',
  templateUrl: './rest-observable.component.html',
  styleUrls: ['./rest-observable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestObservableComponent implements OnInit {
  getAllPosts: Observable<any>;
  getComments: Observable<any>;
  getUsers: Observable<any>;
  getUsersPosts: Observable<any>;
  postPosts: string;
  putPosts: string;
  patchPosts: string;
  deletePosts: string;
  errorMessage: string;
  indexTrackFn = (index: number) => index;

  constructor(private restObservableService: RestObservableService) {}

  ngOnInit() {}

  // GET
  onGetAllPosts() {
    this.getAllPosts = this.restObservableService.getAllPosts();
  }

  onGetSpecificComments() {
    this.getAllPosts = this.restObservableService.getSpecificComments();
  }

  onGetUsers() {
    this.getAllPosts = this.restObservableService.getUsers();
  }

  // POST
  onGetUsersPosts() {
    this.getAllPosts = this.restObservableService.getUsersPosts();
  }

  // POST
  onPostPosts() {
    this.restObservableService.postPosts({
      userId: '49',
      id: '48',
      title: 'new title',
      body: 'new body text'
    });
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
