import * as CONST from './constant';

export const checkLogin = isCheck => {
  return {
    type: CONST.CHECKLOGIN,
    isLogin: isCheck,
  };
};

export const login = data => {
  return {
    type: CONST.LOGIN,
    data: data,
  };
};
