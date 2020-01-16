export type Func3<A, B, C, D> = (a: A) => (b: B) => (c: C) => D;

export type Func<A> = () => A;

export type Func2<A, B, C> = (a: A, b: B) => C;

export type Func1<A, B> = (a: A) => B;

export type Action1<A> = (a: A) => void;

export type Action2<A, B> = (a: A) => (b: B) => void;
