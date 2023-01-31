
// 1. Example ----------------------

var Sales = "Toyota";

function CarTypes(name) {
  if (name == "Honda") {
    return name;
  } else {
    return "Sorry, we don't \n sell " + name + ".";
  }
}

const regex = /^hell\/o/;
var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.special);




// 2. Tests ----------------------

function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);


// 3. Regex ----------------------
const regex1 = /^[\w\.-]+@([\w\-]+|\.)+[A-Z0-9]{2,4}(?x)/;
const regex2 = /\x0g\#\p{Alpha}\1/;
const regex3 = /.*\Q...\E$/;


/**
sample javascript from xui
*/

var undefined,
    xui,
    window     = this,
    string     = new String('string'),
    document   = window.document,
    simpleExpr = /^#?([\w-]+)$/,
    idExpr     = /^#/,
    tagExpr    = /<([\w:]+)/,
    slice      = function (e) { return [].slice.call(e, 0); };
    try { var a = slice(document.documentElement.childNodes)[0].nodeType; }
    catch(e){ slice = function (e) { var ret=[]; for (var i=0; e[i]; i++)
        ret.push(e[i]); return ret; }; }

window.x$ = window.xui = xui = function(q, context) {
    return new xui.fn.find(q, context);
};
