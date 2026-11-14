// node test.js — 9 public cases + edge cases
const { evalExpr } = require("./evalExpr.js");

const cases = [
  // public
  ["1+2*3", 7], ["(1+2)*3", 9], ["10/4", 2.5], ["2*2*2*2", 16],
  ["7-3-2", 2], ["(8-2)/(1+2)", 2], ["3.5+1.5", 5], ["100", 100],
  ["2*(3+(4-1))", 12],
  // edge
  [" 1 + 2 ", 3], ["-(3)", -3], ["2*-3", -6], ["((1))", 1], ["0.1+0.2", 0.3],
  ["007+1", 8], ["8-2-3", 3], ["2/4/2", 0.25], ["-5+3", -2], ["1.5*2", 3],
  ["3--2", 5], ["(2+3)*(4-1)", 15], ["12.5-2.5", 10], ["100/10/5", 2],
  ["1+2*3-4/2", 5], ["(1)", 1], ["  ( 2 + 3 ) * 2 ", 10], ["0.5*0.5", 0.25],
  ["((7))", 7], ["-(-2)", 2], ["2-3*4", -10], ["10-2*-3", 16], ["1--1", 2],
  ["2*(3+(4-1))", 12],
];

let fail = 0;
for (const [input, want] of cases) {
  let got;
  try { got = evalExpr(input); } catch (e) { got = "THROW:" + e.message; }
  if (!(Math.abs(Number(got) - Number(want)) < 1e-9)) {
    fail++;
    console.log("FAIL", JSON.stringify(input), "want", want, "got", got);
  }
}
console.log("cases", cases.length, "fails", fail);
process.exit(fail ? 1 : 0);
