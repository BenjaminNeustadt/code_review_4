# Code Review (4)

A code review.
The observation exercise lasts one hour,
with around 30-minutes to do the TDD.

This program takes a string and identifies whether a mathematical expression
is given. It returns that expression and its result, as two elements of an
array.

 :information_source:
Some of the tests are currently turned off, in order to see the code in a
state where the tests all pass clone this repo (or checkout
this commit in the history) and do the following
command: `git checkout 75be1fe635` (this is the SHA key of the git
commit message before the code was taken in a different direction).

**The code at that commit message will look like this:**

```js
const checkMath = (n) => {
   const has_space = (/\s/.test(n))
   const has_letters = (/[a-z]/i.test(n))
   const one_chars = n.length == 1
   const uneven_space = (n.split(' ').length - 1) % 2 == 1
   const incorrect_spacing = uneven_space || !(has_space)

   if (has_letters || (incorrect_spacing) && !one_chars){
     return "Input must be a valid mathematical string separated by spaces";
  } else {
    return [n, parseFloat(eval(n).toFixed(2))];
  }
}

module.exports = checkMath;

```

**The tests passing at that commit:**

<p align="center">
  <img src="/documents/test_passing.png" 
      style=" display: block;
              margin-left: auto;
              margin-right: auto;
              width: 50%;">
</p>

The reason for the sudden change in direction is that the order of the
`if` - `else` conditionals was inverted upon second inspection which resulted in
the logic being turned around. Originally the negative came first,
followed by a positive.

The responsibilities of the single method were also extracted into two
methods to respect the single responsibility principle.

This README contains everything from the information gathering stage,
where the descriptive of the program to be written is layed out by the
reviewer followed by questions of the reviewee to identify edge-cases.

---
### Statement:

"Works for a company that makes academic papers easier to read.
Product does this by scanning through maths papers,
looking for mathematical expressions.
It then extracts those sums, as strings.
Extracted "sum strings" are then evaluated.
Evaluated result outputted,
along with the extracted sum string."

Build a prototype that evaluates some strings given (with one or two terms).

---
### Input-Output


**_INPUT_**
```js
"1"
"1 + 1"
"1 + 2"
"2 - 1"
"50 * 50"
"25 / 5"
"10 - 20"
"2.57 + 1.2"
"0"
```

**_OUTPUT_**
```js
["1", 1]
["1 + 1", 2.0]
["1 + 2", 3.0]
["2.57 + 1.2", 3.77]
["0", 0.0]
```


**Format will always be consistent**
```js
"a + a" //=> error
"2+2"   //=> error
"2 -1"  //=> error
```
**If the format is not consistent, then an error should be thrown:**

```js
MathError "Input must be a valid mathematical string separated by spaces"
```

##### Didn't ask about the following:

* Mixing string expressions:

```js
"Hello kitty 1 + 1"
"Hello1 + 1"
"Hello, 1 + 1 , 1+1"
"Hello, 1 + 1 2 + 2 " // Does this still output stuff?
"1 + 1, 2 + 2 " // Does this still output stuff?
"2a + 3a" //Does this still output anything?
```

---

Will do in js.

one function
called
```js
checkMath(argument)
```

