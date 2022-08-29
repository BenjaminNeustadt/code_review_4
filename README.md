# Code Review (4)

---
### Statement:

"Works for a company that makes academic papers easier to read.
Product does this by scanning through maths papers,
looking for mathematical expressions.
It then exatracts those sums, as strings.
Extracted sum strings then evaluated.
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

### Advice given after

Mo gives advice on syntax to interact with elements of anything:
"abc"[0] => "a"
we use that and parseInt(n) or parseFloat(n) to add them,
since we are currently only adding.