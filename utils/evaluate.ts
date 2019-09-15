const Maybe = require('folktale/maybe');

export const evaluate = (condition: (arg: any) => boolean, val: any) => condition(val) ? Maybe.Just(val) : Maybe.Nothing();
