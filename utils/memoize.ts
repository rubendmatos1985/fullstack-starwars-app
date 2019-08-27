const memoize: any = (fn: Function) => {
  let state = {} as any;
  return function(...args: any) {
    const key: string = [...args].reduce((acc, curr) => acc.concat(curr), '');
    if (Object.keys(state).some((k: string) => k === key)) {
      console.log('From Cache');
      return state[key];
    } else {
      console.log('Normal');
      state[key] = fn(...args);
      return state[key];
    }
  };
};

export default memoize;
