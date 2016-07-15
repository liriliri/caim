---
layout: module.jade
title: Guide
---# Eustia Documentation

## last 

Get the last element of array.

|Name  |Type |Desc                     |
|------|-----|-------------------------|
|arr   |array|The array to query       |
|return|*    |The last element of array|

```javascript
last([1, 2]); // -> 2
```

## isUndef 

Check if value is undefined.

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |The value to check        |
|return|boolean|True if value is undefined|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```

## isObj 

Check if value is the language type of Object.

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |The value to check        |
|return|boolean|True if value is an object|

[Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```

## inherits 

Inherit the prototype methods from one constructor into another.

|Name      |Type    |Desc       |
|----------|--------|-----------|
|Class     |function|Child Class|
|SuperClass|function|Super Class|

```javascript
function People(name)
{
    this._name = name;
}
People.prototype = {
    getName: function ()
    {
        return this._name;
    }
};
function Student(name)
{
    this._name = name;
}
inherits(Student, People);
var s = new Student('RedHood');
s.getName(); // -> 'RedHood'
```

## has 

Checks if key is a direct property.

|Name  |Type   |Desc                            |
|------|-------|--------------------------------|
|obj   |object |The object to query             |
|key   |string |The path to check               |
|return|boolean|True if key is a direct property|

```javascript
has({one: 1}, 'one'); // -> true
```

## slice 

No documentation.

## after 

Create a function that invokes once it's called n or more times.

|Name  |Type    |Desc                                |
|------|--------|------------------------------------|
|n     |number  |Number of calls before fn is invoked|
|fn    |function|Function to restrict                |
|return|function|The new restricted function         |

```javascript
var fn = after(5, function()
{
    // -> Only invoke after fn is called 5 times.
});
```

## allKeys 

Retrieve all the names of object's own and inherited properties.

|Name  |Type  |Desc                           |
|------|------|-------------------------------|
|obj   |object|The object to query            |
|return|array |The array of all property names|

> Members of Object's prototype won't be retrieved.

```javascript
var obj = Object.create({zero: 0});
obj.one = 1;
allKeys(obj) // -> ['zero', 'one']
```

## before 

Create a function that invokes less than n times.

|Name  |Type    |Desc                                            |
|------|--------|------------------------------------------------|
|n     |number  |Number of calls at which fn is no longer invoked|
|fn    |function|Function to restrict                            |
|return|function|New restricted function                         |

Subsequent calls to the created function return the result of the last fn invocation.

```javascript
$(element).on('click', before(5, function() {}));
// -> allow function to be call 4 times at last.
```

## restArgs 

This accumulates the arguments passed into an array, after a given index.

|Name      |Type    |Desc                                   |
|----------|--------|---------------------------------------|
|function  |function|Function that needs rest parameters    |
|startIndex|number  |The start index to accumulates         |
|return    |function|Generated function with rest parameters|

```javascript
var paramArr = _.restArgs(function (rest) { return rest });
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```

## bind 

Create a function bound to a given object.

|Name  |Type    |Desc                          |
|------|--------|------------------------------|
|fn    |function|Function to bind              |
|ctx   |*       |This binding of given function|
|[rest]|...*    |Optional arguments            |
|return|function|New bound function            |

```javascript
var fn = bind(function (msg)
{
    console.log(this.name + ':' + msg);
}, {name: 'eustia'}, 'I am a utility library.');
fn(); // -> 'eustia: I am a utility library.'
```

## splitCase 

Split different string case to an array.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to split|
|return|array |Result array   |

```javascript
splitCase('foo-bar'); // -> ['foo', 'bar']
splitCase('foo bar'); // -> ['foo', 'bar']
splitCase('foo_bar'); // -> ['foo', 'bar']
splitCase('foo.bar'); // -> ['foo', 'bar']
splitCase('fooBar'); // -> ['foo', 'bar']
splitCase('foo-Bar'); // -> ['foo', 'bar']
```

## camelCase 

Convert string to "camelCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Camel cased string|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```

## kebabCase 

Convert string to "kebabCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Kebab cased string|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```

## capitalize 

Convert the first character to upper case and the remaining to lower case.

|Name  |Type  |Desc                    |
|------|------|------------------------|
|str   |string|The string to capitalize|
|return|string|The capitalized string  |

```
capitalize('rED'); // -> Red
```

## keys 

Create an array of the own enumerable property names of object.

|Name  |Type  |Desc                       |
|------|------|---------------------------|
|obj   |object|The object to query        |
|return|array |The array of property names|

## idxOf 

Get the index at which the first occurrence of value.

|Name       |Type  |Desc                |
|-----------|------|--------------------|
|arr        |array |Array to search     |
|val        |*     |Value to search for |
|[fromIdx=0]|number|Index to search from|

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```

## define 

No documentation.

## delay 

Invoke function after certain milliseconds.

|Name  |Type    |Desc                                      |
|------|--------|------------------------------------------|
|fn    |function|Function to delay                         |
|wait  |number  |Number of milliseconds to delay invocation|
|[args]|...*    |Arguments to invoke fn with               |

```javascript
delay(function (text)
{
    console.log(text);
}, 1000, 'later');
// -> Logs 'later' after one second
```

## dotCase 

Convert string to "dotCase".

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to convert|
|return|string|Dot cased string |

```javascript
dotCase('fooBar'); // -> foo.bar
dotCase('foo bar'); // -> foo.bar
```

## endWith 

Check if string ends with the given target string.

|Name  |Type   |Desc                           |
|------|-------|-------------------------------|
|str   |string |The string to search           |
|suffix|string |String suffix                  |
|return|boolean|True if string ends with target|

```javascript
endWith('ab', 'b'); // -> true
```

## escape 

Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|String to escape|
|return|string|Escaped string  |

```javascript
escape('You & Me'); -> // -> 'You &amp; Me'
```

## escapeRegExp 

Escape special chars to be used as literals in RegExp constructors.

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|string to escape|
|return|string|Escaped string  |

```javascript
escapeRegExp('[eris]'); // -> '\\[eris\\]'
```

## evalCss 

Load css into page.

|Name|Type  |Desc    |
|----|------|--------|
|css |string|Css code|

```javascript
evalCss('body{background:#08c}');
```

## identity 

Return the first argument given.

|Name  |Type|Desc       |
|------|----|-----------|
|val   |*   |Any value  |
|return|*   |Given value|

```javascript
identity('a'); // -> 'a'
```

## repeat 

Repeat string n-times.

|Name  |Type  |Desc                |
|------|------|--------------------|
|str   |string|The string to repeat|
|n     |number|Repeat times        |
|return|string|Repeated string     |

```javascript
repeat('a', 3); // -> 'aaa'
repeat('ab', 2); // -> 'abab'
repeat('*', 0); // -> ''
```

## objToStr 

Alias of Object.prototype.toString.

|Name  |Type  |Desc                                    |
|------|------|----------------------------------------|
|value |*     |Source value                            |
|return|string|String representation of the given value|

## isArgs 

Check if value is classified as an arguments object.

|Name  |Type   |Desc                                |
|------|-------|------------------------------------|
|value |*      |Value to check                      |
|return|boolean|True if value is an arguments object|

```javascript
(function () {
    isArgs(arguments); // -> true
})();
```

## isArr 

Check if value is an `Array` object.

|Name  |Type   |Desc                              |
|------|-------|----------------------------------|
|val   |*      |The value to check                |
|return|boolean|True if value is an `Array` object|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```

## flatten 

Recursively flatten an array.

|Name  |Type |Desc               |
|------|-----|-------------------|
|arr   |array|Array to flatten   |
|return|array|New flattened array|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```

## isPlainObj 

No documentation.

## isFn 

Check if value is a function.

|Name  |Type   |Desc                       |
|------|-------|---------------------------|
|val   |*      |The value to check         |
|return|boolean|True if value is a function|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
```

## isNum 

Checks if value is classified as a Number primitive or object.

|Name  |Type   |Desc                                             |
|------|-------|-------------------------------------------------|
|value |*      |The value to check                               |
|return|boolean|True if value is correctly classified, else false|

## indent 

Indent each line in a string.

|Name  |Type  |Desc                |
|------|------|--------------------|
|str   |string|String to indent    |
|[char]|string|Character to prepend|
|[len] |number|Indent length       |
|return|string|Indented string     |

```javascript
indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
```

## isArrLike 

No documentation.

## each 

Iterates over elements of collection and invokes iteratee for each element.

|Name    |Type        |Desc                          |
|--------|------------|------------------------------|
|obj     |object array|Collection to iterate over    |
|iteratee|function    |Function invoked per iteration|
|[ctx]   |*           |Function context              |

```javascript
each({'a': 1, 'b': 2}, function (val, key) {});
```

## cloneDeep 

No documentation.

## createAssigner 

Used to create extend, extendOwn and defaults.

|Name    |Type    |Desc                          |
|--------|--------|------------------------------|
|keysFn  |function|Function to get object keys   |
|defaults|boolean |No override when set to true  |
|return  |function|The result function, extend...|

## defaults 

Fill in undefined properties in object with the first value present in the following list of defaults objects.

|Name  |Type  |Desc              |
|------|------|------------------|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|return|object|Destination object|

```javascript
defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
```

## cookie 

Simple api for handling browser cookies.

## get: get cookie value.

|Name  |Type  |Desc                      |
|------|------|--------------------------|
|key   |string|Cookie key                |
|return|string|Corresponding cookie value|

## set: set cookie value.

|Name     |Type   |Desc          |
|---------|-------|--------------|
|key      |string |Cookie key    |
|val      |string |Cookie value  |
|[options]|object |Cookie options|
|return   |exports|Module cookie |

## remove: remove cookie value.

|Name     |Type   |Desc          |
|---------|-------|--------------|
|key      |string |Cookie key    |
|[options]|object |Cookie options|
|return   |exports|Module cookie |

```javascript
cookie.set('a', '1', {path: '/'});
cookie.get('a'); // -> '1'
cookie.remove('a');
```

## extend 

Copy all of the properties in the source objects over to the destination object.

|Name  |Type  |Desc              |
|------|------|------------------|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|return|object|Destination object|

```javascript
extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## clone 

No documentation.

## extendOwn 

Like extend, but only copies own properties over to the destination object.

|Name  |Type  |Desc              |
|------|------|------------------|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|return|object|Destination object|

```javascript
extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## extendDeep 

No documentation.

## invert 

Create an object composed of the inverted keys and values of object.

|Name  |Type  |Desc               |
|------|------|-------------------|
|obj   |object|Object to invert   |
|return|object|New inverted object|

If object contains duplicate values, subsequent values overwrite property
assignments of previous values unless multiValue is true.

```javascript
invert({a: 'b', c: 'd', e: 'f'}); // -> {b: 'a', d: 'c', f: 'e'}
```

## values 

Creates an array of the own enumerable property values of object.

|Name  |Type  |Desc                    |
|------|------|------------------------|
|obj   |object|Object to query         |
|return|array |Array of property values|

```javascript
values({one: 1, two: 2}); // -> [1, 2]
```

## contain 

No documentation.

## isStr 

Check if value is a string primitive.

|Name  |Type   |Desc                               |
|------|-------|-----------------------------------|
|val   |*      |The value to check                 |
|return|boolean|True if value is a string primitive|

```javascript
isStr('eris'); // -> true
```

## isBool 

Check if value is a boolean primitive.

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |The value to check        |
|return|boolean|True if value is a boolean|

```javascript
isBool(true); // -> true
isBool(false); // -> true
isBool(1); // -> false
```

## isBuffer 

Check if value is a buffer.

|Name  |Type   |Desc                     |
|------|-------|-------------------------|
|val   |*      |The value to check       |
|return|boolean|True if value is a buffer|

```javascript
isBuffer(new Buffer(4)); // -> true
```

## isDate 

Check if value is classified as a Date object.

|Name  |Type   |Desc                          |
|------|-------|------------------------------|
|val   |*      |value to check                |
|return|boolean|True if value is a Date object|

```javascript
isDate(new Date()); // -> true
```

## isEl 

Check if value is a DOM element.

|Name  |Type   |Desc                          |
|------|-------|------------------------------|
|val   |*      |Value to check                |
|return|boolean|True if value is a DOM element|

```javascript
isEl(document.body); // -> true
```

## isEmpty 

Check if value is an empty object or array.

|Name  |Type   |Desc                  |
|------|-------|----------------------|
|val   |*      |Value to check        |
|return|boolean|True if value is empty|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
```

## isEqual 

No documentation.

## isErr 

Check if value is an error.

|Name  |Type   |Desc                     |
|------|-------|-------------------------|
|val   |*      |The value to check       |
|return|boolean|True if value is an error|

```javascript
isErr(new Error()); // -> true
```

## root 

Root object reference, `global` in nodeJs, `window` in browser.

## isFinite 

Check if value is a finite primitive number.

|Name  |Type   |Desc                            |
|------|-------|--------------------------------|
|val   |*      |Value to check                  |
|return|boolean|True if value is a finite number|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```

## isInt 

Checks if value is classified as a Integer.

|Name  |Type   |Desc                                             |
|------|-------|-------------------------------------------------|
|value |*      |The value to check                               |
|return|boolean|True if value is correctly classified, else false|

## isMatch 

Check if keys and values in src are contained in obj.

|Name  |Type   |Desc                              |
|------|-------|----------------------------------|
|obj   |object |Object to inspect                 |
|src   |object |Object of property values to match|
|return|boolean|True if object is match           |

```javascript
isMatch({a: 1, b: 2}, {a: 1}); // -> true
```

## isMobile 

Check whether client is using a mobile browser using ua.

## isNaN 

Check if value is an NaN.

|Name  |Type   |Desc                   |
|------|-------|-----------------------|
|val   |*      |The value to check     |
|return|boolean|True if value is an NaN|

Undefined is not an NaN, different from global isNaN function.

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```

## isPrimitive 

Check if value is string, number, boolean or null.

|Name  |Type   |Desc                        |
|------|-------|----------------------------|
|val   |*      |Value to check              |
|return|boolean|True if value is a primitive|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```

## isRegExp 

Check if value is a regular expression.

|Name  |Type   |Desc                                 |
|------|-------|-------------------------------------|
|val   |*      |The value to check                   |
|return|boolean|True if value is a regular expression|

```javascript
isRegExp(/a/); // -> true
```

## isRelative 

Check if path appears to be relative.

|Name  |Type   |Desc                               |
|------|-------|-----------------------------------|
|path  |string |Path to check                      |
|return|boolean|True if path appears to be relative|

```javascript
isRelative('README.md'); // -> true
```

## loadJs 

Inject script tag into page with given src value.

## size 

Get size of object, length of array like object or the number of keys.

|Name  |Type        |Desc                 |
|------|------------|---------------------|
|obj   |array object|Collection to inspect|
|return|number      |Collection size      |

```javascript
size({a: 1, b: 2}); // -> 2
size([1, 2, 3]); // -> 3
```

## longest 

Get the longest item in an array.

|Name  |Type |Desc            |
|------|-----|----------------|
|arr   |array|Array to inspect|
|return|*    |Longest item    |

```javascript
longest(['a', 'abcde', 'abc']); // -> 'abcde'
```

## lpad 

Pad string on the left side if it's shorter than length.

|Name  |Type  |Desc                      |
|------|------|--------------------------|
|str   |string|The string to pad         |
|len   |number|The padding length        |
|chars |string|The string used as padding|
|return|string|Resulted string           |

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```

## ltrim 

Remove chars or white-spaces from beginning of string.

|Name  |Type        |Desc              |
|------|------------|------------------|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|return|string      |Trimmed string    |

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```

## matcher 

No documentation.

## negate 

Create a function that negates the result of the predicate function.

|Name     |Type    |Desc               |
|---------|--------|-------------------|
|predicate|function|Predicate to negate|
|return   |function|New function       |

```javascript
function even(n) { return n % 2 === 0 }
filter([1, 2, 3, 4, 5, 6], negate(even)); // -> [1, 3, 5]
```

## noop 

A no-operation function.

## now 

Gets the number of milliseconds that have elapsed since the Unix epoch.

## optimizeCb 

No documentation.

## safeCb 

function
safeCb: Create callback based on input value.

## every 

Check if predicate return truthy for all elements.

|Name     |Type        |Desc                                         |
|---------|------------|---------------------------------------------|
|obj      |array object|Collection to iterate over                   |
|predicate|function    |Function invoked per iteration               |
|ctx      |*           |Predicate context                            |
|return   |boolean     |True if all elements pass the predicate check|

```javascript
every([2, 4], function (val)
{
    return val % 2 === 0;
}); // -> false
```

## filter 

Iterates over elements of collection, returning an array of all the values that pass a truth test.

|Name     |Type    |Desc                                   |
|---------|--------|---------------------------------------|
|obj      |array   |Collection to iterate over             |
|predicate|function|Function invoked per iteration         |
|[ctx]    |*       |Predicate context                      |
|return   |array   |Array of all values that pass predicate|

```javascript
filter([1, 2, 3, 4, 5], function (val)
{
    return val % 2 === 0;
}); // -> [2, 4]
```

## difference 

Create an array of unique array values not included in the other given array.

|Name  |Type    |Desc                        |
|------|--------|----------------------------|
|arr   |array   |Array to inspect            |
|[rest]|...array|Values to exclude           |
|return|array   |New array of filtered values|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```

## findKey 

Return the key where the predicate truth test passes or undefined.

|Name     |Type    |Desc                          |
|---------|--------|------------------------------|
|obj      |object  |Object to search              |
|predicate|function|Function invoked per iteration|
|return   |string  |The key of matched element    |

```javascript
findKey({a: 1, b: 2}, function (val)
{
    return val === 1;
}); // -> a
```

## map 

Create an array of values by running each element in collection through iteratee.

|Name    |Type        |Desc                          |
|--------|------------|------------------------------|
|obj     |array object|Collection to iterate over    |
|iteratee|function    |Function invoked per iteration|
|[ctx]   |*           |Function context              |
|return  |array       |New mapped array              |

```javascript
map([4, 8], function (n) { return n * n; }); // -> [16, 64]
```

## toArr 

Convert value to an array.

|Name  |Type |Desc            |
|------|-----|----------------|
|val   |*    |Value to convert|
|return|array|Converted array |

```javascript
toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> []
toArr(null); // -> []
```

## Class 

Create JavaScript class.

|Name   |Type    |Desc                             |
|-------|--------|---------------------------------|
|methods|object  |Public methods                   |
|statics|object  |Static methods                   |
|return |function|Function used to create instances|

```javascript
var People = Class({
    initialize: function (name, age)
    {
        this.name = name;
        this.age = age;
    },
    introduce: function ()
    {
        return 'I am ' + this.name + ', ' + this.age + ' years old.'.
    }
});

var Student = People.extend({
    initialize: function (name, age, school)
    {
        this.callSuper('initialize', name, age);

        this.school = school.
    },
    introduce: function ()
    {
        return this.callSuper('introduce') + '\n I study at ' + this.school + '.'.
    }
}, {
    is: function (obj)
    {
        return obj instanceof Student;
   }
});

var a = new Student('allen', 17, 'Hogwarts');
a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
Student.is(a); // -> true
```

## Emitter 

No documentation.

## Select 

jQuery like dom manipulator.

## $safeNodes 

No documentation.

## $attr 

No documentation.

## $data 

No documentation.

## $css 

No documentation.

## $insert 

No documentation.

## $offset 

No documentation.

## $property 

No documentation.

## $remove 

No documentation.

## $show 

No documentation.

## Uri 

No documentation.

## delegate 

No documentation.

## $event 

No documentation.

## max 

Get maximum value of given numbers.

|Name  |Type     |Desc                |
|------|---------|--------------------|
|num   |...number|Numbers to calculate|
|return|number   |Maximum value       |

```javascript
max(2.3, 1, 4.5, 2); // 4.5
```

## min 

Get minimum value of given numbers.

|Name  |Type     |Desc                |
|------|---------|--------------------|
|num   |...number|Numbers to calculate|
|return|number   |Minimum value       |

```javascript
min(2.3, 1, 4.5, 2); // 1
```

## partial 

Partially apply a function by filling in given arguments.

|Name    |Type    |Desc                                    |
|--------|--------|----------------------------------------|
|fn      |function|Function to partially apply arguments to|
|partials|...*    |Arguments to be partially applied       |
|return  |function|New partially applied function          |

```javascript
var sub5 = partial(function (a, b) { return b - a }, 5);
sub(20); // -> 15
```

## once 

Create a function that invokes once.

|Name  |Type    |Desc                   |
|------|--------|-----------------------|
|fn    |function|Function to restrict   |
|return|function|New restricted function|

```javascript
function init() {};
var initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```

## some 

Check if predicate return truthy for any element.

|Name     |Type        |Desc                                          |
|---------|------------|----------------------------------------------|
|obj      |array object|Collection to iterate over                    |
|predicate|function    |Function to invoked per iteration             |
|ctx      |*           |Predicate context                             |
|return   |boolean     |True if any element passes the predicate check|

```javascript
some([2, 5], function (val)
{
    return val % 2 === 0;
}); // -> true
```

## $class 

No documentation.

## $ 

jQuery like style dom manipulator.

## State 

No documentation.

## pad 

Pad string on the left and right sides if it's shorter than length.

|Name  |Type  |Desc                      |
|------|------|--------------------------|
|str   |string|The string to pad         |
|len   |number|The padding length        |
|chars |string|The string used as padding|
|return|string|Resulted string           |

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```

## upperFirst 

Convert the first character of string to upper case.

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to convert|
|return|string|Converted string |

```javascript
upperFirst('red'); // -> RED
```

## pascalCase 

Convert string to "pascalCase".

|Name  |Type  |Desc               |
|------|------|-------------------|
|str   |string|String to convert  |
|return|string|Pascal cased string|

```javascript
pascalCase('fooBar'); // -> FooBar
pascalCase('foo bar'); // -> FooBar
pascalCase('foo_bar'); // -> FooBar
pascalCase('foo.bar'); // -> FooBar
```

## random 

Produces a random number between min and max(inclusive).

|Name  |Type  |Desc                      |
|------|------|--------------------------|
|min   |number|The minimum possible value|
|max   |number|The maximum possible value|
|return|number|The random number         |

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```

## rpad 

Pad string on the right side if it's shorter than length.

|Name  |Type  |Desc                  |
|------|------|----------------------|
|str   |string|The string to pad     |
|len   |number|Padding length        |
|chars |string|String used as padding|
|return|string|Resulted string       |

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```

## rtrim 

Remove chars or white-spaces from end of string.

|Name  |Type        |Desc              |
|------|------------|------------------|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|return|string      |Trimmed string    |

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```

## trim 

Remove chars or white-spaces from beginning end of string.

|Name  |Type        |Desc              |
|------|------------|------------------|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|return|string      |Trimmed string    |

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```

## extractBlockCmts 

Extract block comments from source code.

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to extract|
|return|array |Block comments   |

```javascript
extractBlockCmts('\/*eris*\/'); // -> ['eris']
```

## snakeCase 

Convert string to "snakeCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Snake cased string|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```

## spaceCase 

Convert string to "spaceCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Space cased string|

```javascript
spaceCase('fooBar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
```

## startWith 

Check if string starts with the given target string.

|Name  |Type   |Desc                             |
|------|-------|---------------------------------|
|str   |string |The string to search             |
|prefix|string |String prefix                    |
|return|boolean|True if string starts with prefix|

```javascript
startWith('ab', 'a'); // -> true
```

## stripAnsi 

Strip ansi codes from a string.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to strip|
|return|string|Resulted string|

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```

## stripCmt 

Strip comments from source code.

|Name  |Type  |Desc                 |
|------|------|---------------------|
|str   |string|Source code          |
|return|string|Code without comments|

```javascript
stripCmts('// comment \n var a = 5; /* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```

## stripColor 

Strip ansi color codes from a string.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to strip|
|return|string|Resulted string|

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```

## stripHtmlTag 

Strip html tags from a string.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to strip|
|return|string|Resulted string|

```javascript
stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
```

## template 

No documentation.

## toNum 

Convert value to a number.

|Name  |Type  |Desc            |
|------|------|----------------|
|val   |*     |Value to process|
|return|number|Resulted number |

```javascript
toNum('5'); // -> 5
```

## toInt 

Convert value to an integer.

|Name  |Type  |Desc             |
|------|------|-----------------|
|val   |*     |Value to convert |
|return|number|Converted integer|

```javascript
toInt(1.1); // -> 1
```

## toStr 

Convert value to a string.

|Name  |Type  |Desc            |
|------|------|----------------|
|val   |*     |Value to convert|
|return|string|Resulted string |

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```

## topoSort 

Topological sorting algorithm.

## unescape 

Convert HTML entities back, the inverse of escape.

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to unescape|
|return|string|unescaped string  |

```javascript
unescape('You &amp; Me'); -> // -> 'You & Me'
```

## unique 

Create duplicate-free version of an array.

|Name     |Type    |Desc                         |
|---------|--------|-----------------------------|
|arr      |array   |Array to inspect             |
|[compare]|function|Function for comparing values|
|return   |array   |New duplicate free array     |

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```

## union 

Create an array of unique values, in order, from all given arrays.

|Name  |Type    |Desc                        |
|------|--------|----------------------------|
|arr   |...array|Arrays to inspect           |
|return|array   |New array of combined values|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```

## uniqId 

Generate a globally-unique id.

|Name  |Type  |Desc              |
|------|------|------------------|
|prefix|string|Id prefix         |
|return|string|Globally-unique id|

```javascript
uniqueId('eusita_'); // -> 'eustia_xxx'
```

## use 

No documentation.

## wrap 

Wrap the function inside a wrapper function, passing it as the first argument.

|Name   |Type    |Desc            |
|-------|--------|----------------|
|fn     |*       |Function to wrap|
|wrapper|function|Wrapper function|
|return |function|New function    |

```javascript
var p = wrap(escape, function(fn, text)
{
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```
