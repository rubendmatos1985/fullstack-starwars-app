import { ProcessEnvOptions } from 'child_process';
import Log from './logger'; 
export const memoize: (f: Function) => (a: any) => any = (fn) => {
  let state = {} as any;
  return function(...args: any) {
    const key: string = [...args].reduce((acc, curr) => acc.concat(curr), '');
    if (Object.keys(state).some((k: string) => k === key)) {
      return () => state[key];
    } else {
      state[key] = fn(...args);
      return () => state[key];
    }
  };
};

export const asyncMemoize: (f: (a: any) => Promise<any>) => (a: any) => () => Promise<any> = (fn) => {
  let state = {} as any;
  return (args: any) => {
    const key: string = [...args].reduce((acc, curr) => acc.concat(curr), '');
    if (Object.keys(state).some((k: string) => k === key)) {
      Log('Memoize: Data extracted From Cache');
      return () => state[key];
    } else {
      Log('Memoize: data extracted From DB');
      state[key] = fn(args);
      return () => state[key];
    }
  };
};

