export declare const memoize: (f: Function) => (a: any) => any;
export declare const asyncMemoize: (f: (a: any) => Promise<any>) => (a: any) => () => Promise<any>;
