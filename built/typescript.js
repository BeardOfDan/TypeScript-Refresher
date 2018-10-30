// boolean
const isCool = true;
// number
const age = 42;
// string
const eyeColor = 'brown';
const favoriateQuote = `I'm not old, I'm only ${age}`;
// array
const pets = ['cat', 'dog', 'pig'];
const pets2 = ['lion', 'tiger', 'bear'];
// object
const wizard = {
    a: 'John'
};
// null and undefiend
const meh = undefined;
const unbeing = null;
// Tuple
const bucket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
const sizeName = Size[2]; // 'Medium'
const sizeNumber = Size.Small; // 1
// Any
let whatever = 'blargh';
whatever = 5;
whatever = true;
whatever = Size.Large;
whatever = bucket;
// void
const sing = () => {
    console.log('la');
};
// never
const error = () => {
    throw Error('whoops');
    // has neither a return type, nor a reachable end point
};
;
const fightElvenArmy = (elves) => {
    // input must have the given properties/types
    console.log('Fight!');
};
const fightMageArmy = (mages) => {
    // same as above
    console.log(`Let's get ready to rumble!`);
};
;
const dog = {};
dog.count = 5;
