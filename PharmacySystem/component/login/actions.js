import * as CONST from './constant';

export const checkLogin = isCheck => {
  return {
    type: CONST.CHECKLOGIN,
    isLogin: isCheck,
  };
};

export const login = data => {
  const [datas] = data;
  console.log(`action ${datas.email}`);
  return {
    type: CONST.LOGIN,
    data: data,
  };
};
