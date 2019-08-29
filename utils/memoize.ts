export const memoize: (f:Function)=>(a:any)=>any = (fn) => {
  let state = {} as any;
  return function(...args: any) {
    const key: string = [...args].reduce((acc, curr) => acc.concat(curr), '');
    if (Object.keys(state).some((k: string) => k === key)) {
      return ()=> state[key];
    } else {
      state[key] = fn(...args);
      return ()=> state[key];
    }
  };
};

export const asyncMemoize: (f:Function)=>(a:any)=>Promise<any> = (fn) => {
  let state = {} as any;
  return async function(...args: any) {
    const key: string = [...args].reduce((acc, curr) => acc.concat(curr), '');
    if (Object.keys(state).some((k: string) => k === key)) {
      return ()=> state[key];
    } else {
      state[key] = await fn(...args);
      return ()=> state[key];
    }
  };
};

