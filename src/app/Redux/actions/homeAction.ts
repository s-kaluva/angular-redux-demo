import { createAction, props } from '@ngrx/store';

/* export const GET_USER = createAction('[Registered Users] registered Users');
export const USERSUCCESS = createAction('[Registered Users Success] registered Users Success');
export const USERFAILURE = createAction('[Registered Users Failure] registered Users Failure'); */

export const login = createAction(
    '[Registered Users] registeredUsers',
    props<{ users: any }>()
  );
  export const registeredUsersSuccess = createAction(
    '[Registered Users Success] registeredUsersSuccess',
    props<{ payload:any }>()
  )
  
  export const registeredUsersFailure = createAction(
    '[Registered Users Failure] registered Users Failure',
    props<{message: string}>()
  )

  export const memberships = createAction(
    '[Memberships Users] memberships',
    props<{ users: any }>()
  );
  export const membershipsSuccess = createAction(
    '[Memberships Success] membershipsSuccess',
    props<{ payload:any }>()
  )
  
  export const membershipsFailure = createAction(
    '[Memberships Failure] membershipsFailure',
    props<{message: string}>()
  )