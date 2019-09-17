import { ExecException } from "child_process";

export const asyncCompose = (...fns: Function[]) => (data: Promise<any>) =>
  fns.reduceRight(
    (acc: Promise<any>, f: Function, index: number) =>
      acc
        .then((v: any) => f(v))
        .catch((e:ExecException) => console.log(e))
    , data
  )
