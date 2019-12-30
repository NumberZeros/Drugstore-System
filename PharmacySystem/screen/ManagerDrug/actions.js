import * as CONST from './constant';

export function AddDrug(data) {
  return {
    type: CONST.ADDDRUG,
    data: data,
  };
}
