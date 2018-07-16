'use strict';

const passThrough = (dispatch, action) => (...args) => dispatch(action(...args));
module.exports = passThrough;
