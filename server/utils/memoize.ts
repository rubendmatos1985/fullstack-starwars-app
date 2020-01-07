const sizeof = require("object-sizeof");

export const memoize: (f: Function) => (a: any) => any = (fn) => {
  let state = {} as any;
  return  (...args: any) => {
    if (sizeof(state) >= Math.pow(2, 25)) {
      state = {}
    }
    const key: string = [...args].reduce((acc, curr) => acc.concat(curr), '');
    if (Object.keys(state).some((k: string) => k === key)) {
      return () => state[key];
    } else {
      state[key] = fn(...args);
      return () => state[key];
    }
  };
};

export const asyncMemoize: (f: (a: any) => Promise<any>) => ((b: any) => () => Promise<any> ) = (fn) => {
  let state = {} as any;
  return (args: any) => {
    // CLEAN STATE
    // IF 35 MB
    if (sizeof(state) >= Math.pow(2, 25)) {
      state = {}
    }
    if(!args){
      throw new Error("you must pass a paramater to memoize")
    }
    const key: string = [...args].reduce((acc, curr) => acc.concat(curr), '');
    if (Object.keys(state).some((k: string) => k === key)) {
      return () => state[key];
    } else {
      state[key] = fn(args);
      return () => state[key];
    }
  };
};

