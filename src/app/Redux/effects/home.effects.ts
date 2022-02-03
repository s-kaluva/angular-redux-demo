import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { homeServiceService } from '../api/home-service.service';
import * as homeAction from '../actions/homeAction';

@Injectable()
export class HomeEffects {
    constructor(
        private actions: Actions,
        private homeService: homeServiceService
      ) {}

      getUsers = createEffect(() =>
    this.actions.pipe(
      ofType(homeAction.login),
      exhaustMap(action =>
        this.homeService.getUsers().pipe(
          map(response => homeAction.registeredUsersSuccess({payload:response})),
          catchError((error: any) => of(homeAction.registeredUsersFailure(error))))
      )
    )
  );

  getMemberships = createEffect(() =>
  this.actions.pipe(
    ofType(homeAction.memberships),
    exhaustMap(action =>
      this.homeService.getProjectMemberships().pipe(
        map(response => homeAction.membershipsSuccess({payload:response})),
        catchError((error: any) => of(homeAction.membershipsFailure(error))))
    )
  )
);

}