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
};

export function deleteData(id) {
  return {
    type: CONST.DELETE,
    id: id,
  };
}

export function updateData(data) {
  return {
    type: CONST.UPDATEDATA,
    data: data,
  };
}

export function handleInputChange(data) {
  return {
    type: CONST.INPUTCHANGE,
    data,
  };
}