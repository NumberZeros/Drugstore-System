import * as CONST from './constant';

import {createAction} from 'redux-actions';

export const checkLogin = createAction(CONST.CHECKLOGIN);
export const checkLoginSuccess = createAction(CONST.CHECKLOGINSUCCESS);
export const checkLoginFail = createAction(CONST.CHECKLOGINFAIL);
