jEngine: Scope [![wercker status](https://app.wercker.com/status/5171150383b23595c99e25435ccb0135/s "wercker status")](https://app.wercker.com/project/bykey/5171150383b23595c99e25435ccb0135)
================
[![Bower version](https://badge.fury.io/bo/jstools-scope.svg)](http://badge.fury.io/bo/jstools-scope)
[![npm version](https://badge.fury.io/js/jstools-scope.svg)](http://badge.fury.io/js/jstools-scope)
[![Build Status](https://travis-ci.org/jstools/scope.svg?branch=master)](https://travis-ci.org/jstools/scope)
Installation
------------
```.sh
npm install jstools-scope --save
```
  or
```.sh
bower install jstools-scope --save
```
Usage
-----
```.js
var s1 = new Scope({ foo: 'bar', overlap: 'v1', obj: { value: 'pristine' } });
var s2 = s1.$$new({ overlap: 'v2' });

var s3 = s2.$$new();

s3.foo = 'changed';
s3.obj.value = 'dirty';
```
