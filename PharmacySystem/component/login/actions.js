import * as CONST from './constant';

export const checkLogin = isCheck => {
  return {
    type: CONST.CHECKLOGIN,
    isLogin: isCheck,
  };
};

export function login(data) {
  return {
    type: CONST.LOGIN,
    data: data,
  };
}

export function creacteAccount(data) {
  return {
    type: CONST.LOGIN,
    data: data,
  };
}
