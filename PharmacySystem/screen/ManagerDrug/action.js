import * as CONST from './constant';

export function adddrug(data) {
  return {
    type: CONST.ADDDRUG,
    data: data,
  };
}
