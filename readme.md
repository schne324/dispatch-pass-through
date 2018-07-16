# Dispatch pass-through

> 1 line utility mostly useful for react-redux. Specifically for `mapDispatchToProps`, which passes all arguments passed to a dispatch-wrapped action prop through to the action itself.

## Why?

I got sick of writing almost identical `mapDispatchToProps` statements in which I would just pass all arguments through to the action.

### Before (_without_ `dispatchPassThrough`)

```js
const mapDispatchToProps = dispatch => ({
  setStuff: (foo, bar) => dispatch(actions.setStuff(foo, bar)),
  updateThings: (a, b, c) => dispatch(actions.updateThings(a, b, c))
});
```

### After (_with_ `dispatchPassThrough`)

```js
import passThrough from 'dispatch-pass-through';

const mapDispatchToProps = dispatch => ({
  setStuff: passThrough(dispatch, actions.setStuff),
  updateThings: passThrough(dispatch, actions.updateThings)
});
```

**_NOTE: THIS UTILITY MIGHT SEEM OUTRAGEOUSLY MINOR / SILLY...BECAUSE IT IS_**

## Installation

```sh
$ yarn add dispatch-pass-through
```

or

```sh
$ npm install dispatch-pass-through --save
```
