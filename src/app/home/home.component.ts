import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as homeAction from '../Redux/actions/homeAction';
import { HomeReducer } from '../Redux/reducer/homeReducer';
import {projectReducer} from '../Redux/reducer/projectReducer';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  userStore$: Observable<{users:any[]}> = this.store.select(state => state);
  userStore1$: Observable<{users1:any[]}> = this.store1.select(state => state);

  registeredUsersData:RegisteredUsers[]=[]
  projectsData:Projects[]=[]
  displayedColumnsUsers: string[] = ['firstName', 'lastName', 'company', 'country','organizationType'];
  displayedColumnsProject: string[] = ['id', 'projectId', 'userId'];

  dataSource = new MatTableDataSource<RegisteredUsers>(this.registeredUsersData);
  projectDataSource = new MatTableDataSource<Projects>(this.projectsData);

  @ViewChild('userPaginator', { read: MatPaginator })
  paginator!: MatPaginator;

  @ViewChild('projectPaginator', { read: MatPaginator })
  paginator1!: MatPaginator;

  panelOpenState = false;
  constructor(private store: Store<{users:[]}>, private store1: Store<{users1:[]}>) {
  }
 

  ngOnInit(): void {
    this.store.dispatch({type:'[Registered Users] registeredUsers'})
    this.store.dispatch({type:'[Memberships Users] memberships'})
    this.userStore$.subscribe(event => {
      console.log(event)
      this.registeredUsersData=event.users
      console.log(this.registeredUsersData)
      this.dataSource = new MatTableDataSource<RegisteredUsers>(this.registeredUsersData);
      this.dataSource.paginator = this.paginator;
    });
    this.userStore1$.subscribe(event => {
      console.log(event)
      this.projectsData=event.users1
      console.log(this.projectsData)
      this.projectDataSource = new MatTableDataSource<Projects>(this.projectsData);
      this.projectDataSource.paginator = this.paginator1;
    });
  }

}

export interface RegisteredUsers {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  organizationType:string;
}

export interface Projects {
  id: string;
  projectId: string;
  userId: string;
}