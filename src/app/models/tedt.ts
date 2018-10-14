class IMfk {
    constructor(
      public  FUND: string = '',
      public  ORG: string = '',
      public  DEPT: string = '',
      public  SUBDEPT: string = '',
      public  GRANTPGM: string = '',
      public  IACT: string = '',
      public  OACT: string = '',
      public  DACT: string = '',
      public  FN: string = '',
      public  CCTR: string = '',
      public  BRF?: string 
    ){}
 
  [key: string]: string;
}
const keys = Object.keys(new IMfk());
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
  }

/** Create a K:V */
const Direction : {[k in keyof IMfk]: k}= {
    FUND: 'FUND',
  ORG: 'ORG',
  DEPT: 'DEPT',
  SUBDEPT: 'SUBDEPT',
  GRANTPGM: 'GRANTPGM',
  IACT: 'IACT',
  OACT: 'OACT',
  DACT: 'DACT',
  FN: 'FN',
  CCTR: 'CCTR',
  BRF: 'BRF'

}
  /** Create a Type */
  type Direction = keyof typeof Direction;
/** 
  * Sample using a string enum
  */
let sample: Direction;

sample = 'North'; // Okay
sample = 'AnythingElse'; // ERROR!