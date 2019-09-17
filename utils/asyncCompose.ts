export const asyncCompose = (...fns: Function[]) => (data: Promise<any>) =>
  fns.reduceRight(
    (acc: Promise<any>, f: Function, index: number) =>
      acc.then((v: any) => f(v))
    , data
  )
