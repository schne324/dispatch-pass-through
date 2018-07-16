"use strict";

const test = require("ava");
const passThough = require("..");

test("passes args through", t => {
  let argA, argB, argC;
  const dispatch = c => (argC = c);
  const action = (a, b) => {
    argA = a;
    argB = b;
    return "boognish";
  };
  const funk = passThough(dispatch, action);
  funk("gene", "ween");

  t.is(argA, "gene");
  t.is(argB, "ween");
  t.is(argC, "boognish");
});

test("works with 0 args", t => {
  let dispatchArg;
  const dispatch = a => (dispatchArg = a);
  const action = () => "deaner";
  const funk = passThough(dispatch, action);
  funk();

  t.is(dispatchArg, "deaner");
});
