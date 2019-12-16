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

export function logout() {
  return {
    type: CONST.LOGOUT,
  };
}

export function updateInfo(data) {
  return {
    type: CONST.UPDATEINFO,
    data: data,
  };
}
