import { ExecException } from "child_process";
import { has } from "ramda";

export const asyncCompose = (...fns: Function[]) => (data: Promise<any> | any) =>
   fns.reduceRight(
    (acc: Promise<any>, f: Function) =>
      acc
        .then((v: any) => f(v))
        .catch((e:ExecException) => console.log(e))
    ,(isPromise(data) ? data : Promise.resolve(data))
    )


const isPromise = has('then'); 
  
