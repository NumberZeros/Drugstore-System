import * as CONST from './constant';

export function loaddata(data) {
  return {
    type: CONST.LOADDATA,
    data: data,
  };
}
export function searchdata(data) {
  return {
    type: CONST.SEARCHDATA,
    data: data,
  };
}
