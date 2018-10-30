// boolean
const isCool: boolean = true;

// number
const age: number = 42;

// string
const eyeColor: string = 'brown';
const favoriateQuote: string = `I'm not old, I'm only ${age}`;

// array
const pets: string[] = ['cat', 'dog', 'pig'];
const pets2: Array<string> = ['lion', 'tiger', 'bear'];

// object
const wizard: object = {
  a: 'John'
};

// null and undefiend
const meh: undefined = undefined;
const unbeing: null = null;

// Tuple
const bucket: [string, number] = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
const sizeName: string = Size[2]; // 'Medium'
const sizeNumber: number = Size.Small; // 1

// Any
let whatever: any = 'blargh';
whatever = 5;
whatever = true;
whatever = Size.Large;
whatever = bucket;

// void
const sing = (): void => {
  console.log('la');
};

// never
const error = (): never => {
  throw Error('whoops');
  // has neither a return type, nor a reachable end point
};

