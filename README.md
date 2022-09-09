# Code Review (4)

A code review.
The observation exercise lasts one hour,
with around 30-minutes to do the TDD.

This program takes a string and identifies whether a mathematical expression
is given. It returns that expression and its result, as two elements of an
array.

:information_source:

Originally, the code involved one method. However, after the
introduction of regular expressions to verify the validity of the
inputted mathematical expressions, a second method was created above
that checks whether the input adheres to the criteria.
This extraction was in the effort to respect the single responsibility principle.

This README contains everything from the information gathering stage,
where the description of the program to be written is layed out by the
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

