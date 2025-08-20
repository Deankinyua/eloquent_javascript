// ? Being able to reference a specific instance of local variables
// ? in an enclosing function is called a closure.

// * In contrast to the Elixir world, data is mutable in JavaScript.
// * This brings a lot of benefits and also a bit of confusion. For example if we want to
// * hold on to a particular value we have to most likely declare it as a constant.
// * But what if we intend to manipulate that varialbe in other words "mutate it"? What if we also want to get the best of both worlds.
// * This is where closures come in. They are a means to capture a particular value or "close it"
// * such that we can continue manipulating the variable while also preserving an initial value of that specific variable

// ? Take the following example :

let selling_price = 100;

// Here we are locking the value of selling price
function sales_at_noon(selling_price) {
  return () => 4 * selling_price;
}
let initial_sales = sales_at_noon(selling_price);

// changing selling price afterwards won't affect initial results
selling_price = 120;

let new_total_sales = selling_price * 4;

console.log(initial_sales());
// ? => 400
console.log(new_total_sales);
// ? => 480

let a = 4;

function do_not_change_value(n) {
  return () => n;
}

let b = do_not_change_value(a);

a = 500;

console.log(a);
console.log(b());
