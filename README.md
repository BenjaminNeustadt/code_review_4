statement:

work for a company that makes that academic papers easier to read

product does this by scanning through maths papers looking for mathematical expressions

then exatracts those sums as strings

extracted sum strings then evaluated

evaluated result outputted along with the extracted sum string 

Build a prototype that evaluates some strings given one or two terms


Input / ouput


INPUT
"1"
"1 + 1"
"1 + 2"
"2 - 1"
"50 * 50"
"25 / 5"
"10 - 20"
"2.57 + 1.2"
"0"

OUTPUT
["1", 1]
["1 + 1", 2.0]
["1 + 2", 3.0]



Format will always be consistent
"a + a" => error
"2+2" => error
"2 -1" => error
If the format is not consistent, then an error should be thrown:

```
MathError "Input must be a valid mathematical string separated by spaces"
```

js
one function

checkMath(argument)


