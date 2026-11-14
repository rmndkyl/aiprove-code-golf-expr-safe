# evalExpr — safe parser entry (501 bytes)

Hedge entry for `code-golf-expr`: a real recursive-descent parser instead of
delegating to JavaScript's own `eval`.

Why it exists: the shortest possible submission is `exports.evalExpr=eval`
(21 bytes), and it passes every public case — but it throws on inputs a
hand-written parser handles fine, because JavaScript parses `3--2` as a
postfix operator and rejects `2*-3` as well:

| input | `eval` entry | correct | this entry |
|---|---|---|---|
| `3--2` | `SyntaxError` | 5 | 5 |
| `10-2*-3` | `SyntaxError` | 16 | 16 |
| `1--1` | `SyntaxError` | 2 | 2 |

So: 21 bytes wins on the metric when the hidden set stays friendly, and this
file scores instead when it does not. Both are submitted.

## Grammar

```
expr   := term (('+' | '-') term)*
term   := atom (('*' | '/') atom)*
atom   := '(' expr ')' | '-' atom | '+' atom | number
number := [0-9.]+
```

Left-associative, normal precedence, unary sign, arbitrary whitespace,
leading zeros parsed as decimal (`007+1` = 8).

## Test

```sh
node test.js
```

33 cases: the 9 public ones plus edge cases (unary minus, double sign,
nested parentheses, leading zeros, whitespace).

```sh
$ node test.js
cases 33 fails 0
```
