import * as CONST from './constant';

export function AddDrug(data) {
  return {
    type: CONST.ADDDRUG,
    data: data,
  };
}

export function loadData(id) {
  return {
    type: CONST.LOADDATA,
    id: id,
  };
}

export function loadDataSuccess(data) {
  return {
    type: CONST.LOADDATASUCCESS,
    data: data,
  };
}
