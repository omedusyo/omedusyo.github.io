(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Main$LambdaUiMsg = function (a) {
	return {$: 'LambdaUiMsg', a: a};
};
var $author$project$Ui$Main$HelpMsg = function (a) {
	return {$: 'HelpMsg', a: a};
};
var $author$project$Ui$Main$ModuleMsg = function (a) {
	return {$: 'ModuleMsg', a: a};
};
var $author$project$Ui$Main$ProgramMsg = function (a) {
	return {$: 'ProgramMsg', a: a};
};
var $author$project$Ui$Main$RegisterMachineMsg = function (a) {
	return {$: 'RegisterMachineMsg', a: a};
};
var $author$project$Ui$Control$Context$embedModelIntoState = function (model) {
	return {
		model: model,
		notifications: {}
	};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Ui$Control$InitContext$setModelTo = function (model) {
	return function (_v0) {
		return _Utils_Tuple2(
			$author$project$Ui$Control$Context$embedModelIntoState(model),
			$elm$core$Platform$Cmd$none);
	};
};
var $author$project$Ui$Tab$Help$init = $author$project$Ui$Control$InitContext$setModelTo(
	{});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $author$project$Calculus$Evaluation$Value$emptyFunctorEnvironment = $elm$core$Dict$empty;
var $author$project$Calculus$Evaluation$Value$emptyModuleEnvironment = $elm$core$Dict$empty;
var $author$project$Calculus$Evaluation$Value$emptyTermEnvironment = $elm$core$Dict$empty;
var $author$project$Calculus$Evaluation$Value$emptyEnvironment = {functorEnv: $author$project$Calculus$Evaluation$Value$emptyFunctorEnvironment, moduleEnv: $author$project$Calculus$Evaluation$Value$emptyModuleEnvironment, termEnv: $author$project$Calculus$Evaluation$Value$emptyTermEnvironment};
var $author$project$Calculus$Evaluation$Value$AssignFunctorLiteral = F2(
	function (a, b) {
		return {$: 'AssignFunctorLiteral', a: a, b: b};
	});
var $author$project$Calculus$Evaluation$Value$AssignModuleValue = F2(
	function (a, b) {
		return {$: 'AssignModuleValue', a: a, b: b};
	});
var $author$project$Calculus$Evaluation$Value$AssignValue = F2(
	function (a, b) {
		return {$: 'AssignValue', a: a, b: b};
	});
var $author$project$Calculus$Evaluation$Value$Closure = function (a) {
	return {$: 'Closure', a: a};
};
var $author$project$Calculus$Evaluation$Value$Cons = F2(
	function (a, b) {
		return {$: 'Cons', a: a, b: b};
	});
var $author$project$Calculus$Evaluation$Value$ConstEmpty = {$: 'ConstEmpty'};
var $author$project$Calculus$Evaluation$Value$ConstFalse = {$: 'ConstFalse'};
var $author$project$Calculus$Evaluation$Value$ConstTrue = {$: 'ConstTrue'};
var $author$project$Calculus$Evaluation$Value$ConstZero = {$: 'ConstZero'};
var $author$project$Calculus$Evaluation$Evaluation$ExpectedBoolean = {$: 'ExpectedBoolean'};
var $author$project$Calculus$Evaluation$Evaluation$ExpectedFunction = {$: 'ExpectedFunction'};
var $author$project$Calculus$Evaluation$Evaluation$ExpectedLeftRight = {$: 'ExpectedLeftRight'};
var $author$project$Calculus$Evaluation$Evaluation$ExpectedList = {$: 'ExpectedList'};
var $author$project$Calculus$Evaluation$Evaluation$ExpectedNat = {$: 'ExpectedNat'};
var $author$project$Calculus$Evaluation$Evaluation$ExpectedPair = {$: 'ExpectedPair'};
var $author$project$Calculus$Evaluation$Evaluation$ExpectedThunkClosure = {$: 'ExpectedThunkClosure'};
var $author$project$Calculus$Evaluation$Evaluation$FailedToForceThunk = function (a) {
	return {$: 'FailedToForceThunk', a: a};
};
var $author$project$Calculus$Evaluation$Value$ForcedThunk = function (a) {
	return {$: 'ForcedThunk', a: a};
};
var $author$project$Calculus$Evaluation$Evaluation$FunctorApplicationNumberOfModuleParametersShouldBeEqualToNumberOfArguments = {$: 'FunctorApplicationNumberOfModuleParametersShouldBeEqualToNumberOfArguments'};
var $author$project$Calculus$Evaluation$Value$Left = function (a) {
	return {$: 'Left', a: a};
};
var $author$project$Calculus$Evaluation$Value$ListValue = function (a) {
	return {$: 'ListValue', a: a};
};
var $author$project$Calculus$Evaluation$Value$NatValue = function (a) {
	return {$: 'NatValue', a: a};
};
var $author$project$Calculus$Evaluation$Value$Pair = F2(
	function (a, b) {
		return {$: 'Pair', a: a, b: b};
	});
var $author$project$Calculus$Evaluation$Value$Right = function (a) {
	return {$: 'Right', a: a};
};
var $author$project$Calculus$Evaluation$Value$Succ = function (a) {
	return {$: 'Succ', a: a};
};
var $author$project$Calculus$Evaluation$Value$ThunkClosure = function (a) {
	return {$: 'ThunkClosure', a: a};
};
var $author$project$Lib$State$StatefulReaderWithErr$andThen = F2(
	function (f, stateful_a) {
		return F2(
			function (r, state0) {
				var _v0 = A2(stateful_a, r, state0);
				if (_v0.$ === 'Ok') {
					var _v1 = _v0.a;
					var state1 = _v1.a;
					var a = _v1.b;
					return A3(f, a, r, state1);
				} else {
					var err = _v0.a;
					return $elm$core$Result$Err(err);
				}
			});
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$Calculus$Evaluation$Value$extendFunctorEnvironment0 = F3(
	function (functorName, functor, env) {
		return A3(
			$elm$core$Dict$update,
			functorName,
			function (maybeBinding) {
				if (maybeBinding.$ === 'Just') {
					var functors = maybeBinding.a;
					return $elm$core$Maybe$Just(
						A2($elm$core$List$cons, functor, functors));
				} else {
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[functor]));
				}
			},
			env);
	});
var $author$project$Calculus$Evaluation$Value$extendFunctorEnvironment = F3(
	function (functorName, functor, env) {
		return _Utils_update(
			env,
			{
				functorEnv: A3($author$project$Calculus$Evaluation$Value$extendFunctorEnvironment0, functorName, functor, env.functorEnv)
			});
	});
var $author$project$Calculus$Evaluation$Value$extendModuleEnvironment0 = F3(
	function (varName, module0, env) {
		return A3(
			$elm$core$Dict$update,
			varName,
			function (maybeBinding) {
				if (maybeBinding.$ === 'Just') {
					var modules = maybeBinding.a;
					return $elm$core$Maybe$Just(
						A2($elm$core$List$cons, module0, modules));
				} else {
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[module0]));
				}
			},
			env);
	});
var $author$project$Calculus$Evaluation$Value$extendModuleEnvironment = F3(
	function (varName, module0, env) {
		return _Utils_update(
			env,
			{
				moduleEnv: A3($author$project$Calculus$Evaluation$Value$extendModuleEnvironment0, varName, module0, env.moduleEnv)
			});
	});
var $author$project$Calculus$Evaluation$Value$extendModuleEnvironmentWithBindings = F2(
	function (bindings, env0) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, env) {
					var moduleName = _v0.a;
					var moduleValue = _v0.b;
					return A3($author$project$Calculus$Evaluation$Value$extendModuleEnvironment, moduleName, moduleValue, env);
				}),
			env0,
			bindings);
	});
var $author$project$Calculus$Evaluation$Value$extendTermEnvironment0 = F3(
	function (varName, term, env) {
		return A3(
			$elm$core$Dict$update,
			varName,
			function (maybeBinding) {
				if (maybeBinding.$ === 'Just') {
					var terms = maybeBinding.a;
					return $elm$core$Maybe$Just(
						A2($elm$core$List$cons, term, terms));
				} else {
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[term]));
				}
			},
			env);
	});
var $author$project$Calculus$Evaluation$Value$extendTermEnvironment = F3(
	function (varName, term, env) {
		return _Utils_update(
			env,
			{
				termEnv: A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment0, varName, term, env.termEnv)
			});
	});
var $author$project$Calculus$Evaluation$Evaluation$UndefinedFunctor = function (a) {
	return {$: 'UndefinedFunctor', a: a};
};
var $author$project$Lib$State$StatefulReaderWithErr$get0 = function (f) {
	return F2(
		function (r, state0) {
			return A4(f, r, state0, r, state0);
		});
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Calculus$Evaluation$Value$lookupFunctorEnvironment0 = F2(
	function (functorName, env) {
		return A2(
			$elm$core$Maybe$andThen,
			function (functors) {
				if (!functors.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var functor = functors.a;
					return $elm$core$Maybe$Just(functor);
				}
			},
			A2($elm$core$Dict$get, functorName, env));
	});
var $author$project$Calculus$Evaluation$Value$lookupFunctorEnvironment = F2(
	function (functorName, env) {
		return A2($author$project$Calculus$Evaluation$Value$lookupFunctorEnvironment0, functorName, env.functorEnv);
	});
var $author$project$Lib$State$StatefulReaderWithErr$return = function (a) {
	return F2(
		function (r, state0) {
			return $elm$core$Result$Ok(
				_Utils_Tuple2(state0, a));
		});
};
var $author$project$Lib$State$StatefulReaderWithErr$error = function (err) {
	return F2(
		function (_v0, _v1) {
			return $elm$core$Result$Err(err);
		});
};
var $author$project$Calculus$Evaluation$Evaluation$throwEvalError = $author$project$Lib$State$StatefulReaderWithErr$error;
var $author$project$Calculus$Evaluation$Evaluation$functorLookup = function (functorName) {
	return $author$project$Lib$State$StatefulReaderWithErr$get0(
		F2(
			function (env, _v0) {
				var _v1 = A2($author$project$Calculus$Evaluation$Value$lookupFunctorEnvironment, functorName, env);
				if (_v1.$ === 'Just') {
					var val = _v1.a;
					return $author$project$Lib$State$StatefulReaderWithErr$return(val);
				} else {
					return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
						_List_fromArray(
							[
								$author$project$Calculus$Evaluation$Evaluation$UndefinedFunctor(functorName)
							]));
				}
			}));
};
var $author$project$Calculus$Evaluation$Evaluation$UnknownModuleField = function (a) {
	return {$: 'UnknownModuleField', a: a};
};
var $author$project$Calculus$Evaluation$Evaluation$lookupModuleTermField = F2(
	function (field, moduleValue) {
		var lookup = function (assignments0) {
			lookup:
			while (true) {
				if (!assignments0.b) {
					return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
						_List_fromArray(
							[
								$author$project$Calculus$Evaluation$Evaluation$UnknownModuleField(field)
							]));
				} else {
					var assignment = assignments0.a;
					var assignments1 = assignments0.b;
					switch (assignment.$) {
						case 'AssignValue':
							var field0 = assignment.a;
							var val = assignment.b;
							if (_Utils_eq(field0, field)) {
								return $author$project$Lib$State$StatefulReaderWithErr$return(val);
							} else {
								var $temp$assignments0 = assignments1;
								assignments0 = $temp$assignments0;
								continue lookup;
							}
						case 'AssignType':
							var $temp$assignments0 = assignments1;
							assignments0 = $temp$assignments0;
							continue lookup;
						case 'AssignModuleValue':
							var $temp$assignments0 = assignments1;
							assignments0 = $temp$assignments0;
							continue lookup;
						default:
							var $temp$assignments0 = assignments1;
							assignments0 = $temp$assignments0;
							continue lookup;
					}
				}
			}
		};
		return lookup(moduleValue.assignments);
	});
var $author$project$Lib$State$StatefulReaderWithErr$map = F2(
	function (f, stateful_a0) {
		return F2(
			function (r, state0) {
				var _v0 = A2(stateful_a0, r, state0);
				if (_v0.$ === 'Ok') {
					var _v1 = _v0.a;
					var state1 = _v1.a;
					var a = _v1.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							state1,
							f(a)));
				} else {
					var err = _v0.a;
					return $elm$core$Result$Err(err);
				}
			});
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Lib$State$StatefulReaderWithErr$pair = F2(
	function (stateful_a, stateful_b) {
		return F2(
			function (r, state0) {
				var _v0 = A2(stateful_a, r, state0);
				if (_v0.$ === 'Ok') {
					var _v1 = _v0.a;
					var state1 = _v1.a;
					var a = _v1.b;
					var _v2 = A2(stateful_b, r, state1);
					if (_v2.$ === 'Ok') {
						var _v3 = _v2.a;
						var state2 = _v3.a;
						var b = _v3.b;
						return $elm$core$Result$Ok(
							_Utils_Tuple2(
								state2,
								_Utils_Tuple2(a, b)));
					} else {
						var err = _v2.a;
						return $elm$core$Result$Err(err);
					}
				} else {
					var err = _v0.a;
					return $elm$core$Result$Err(err);
				}
			});
	});
var $author$project$Lib$State$StatefulReaderWithErr$map2 = F3(
	function (f, stateful_a0, stateful_a1) {
		return A2(
			$author$project$Lib$State$StatefulReaderWithErr$map,
			function (_v0) {
				var a0 = _v0.a;
				var a1 = _v0.b;
				return A2(f, a0, a1);
			},
			A2($author$project$Lib$State$StatefulReaderWithErr$pair, stateful_a0, stateful_a1));
	});
var $author$project$Calculus$Evaluation$Evaluation$UndefinedModule = function (a) {
	return {$: 'UndefinedModule', a: a};
};
var $author$project$Calculus$Evaluation$Value$lookupModuleEnvironment0 = F2(
	function (varName, env) {
		return A2(
			$elm$core$Maybe$andThen,
			function (modules) {
				if (!modules.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var module0 = modules.a;
					return $elm$core$Maybe$Just(module0);
				}
			},
			A2($elm$core$Dict$get, varName, env));
	});
var $author$project$Calculus$Evaluation$Value$lookupModuleEnvironment = F2(
	function (varName, env) {
		return A2($author$project$Calculus$Evaluation$Value$lookupModuleEnvironment0, varName, env.moduleEnv);
	});
var $author$project$Calculus$Evaluation$Evaluation$moduleLookup = function (moduleName) {
	return $author$project$Lib$State$StatefulReaderWithErr$get0(
		F2(
			function (env, _v0) {
				var _v1 = A2($author$project$Calculus$Evaluation$Value$lookupModuleEnvironment, moduleName, env);
				if (_v1.$ === 'Just') {
					var val = _v1.a;
					return $author$project$Lib$State$StatefulReaderWithErr$return(val);
				} else {
					return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
						_List_fromArray(
							[
								$author$project$Calculus$Evaluation$Evaluation$UndefinedModule(moduleName)
							]));
				}
			}));
};
var $author$project$Lib$State$StatefulReaderWithErr$second = F2(
	function (stateful_a_ignored, stateful_b) {
		return A2(
			$author$project$Lib$State$StatefulReaderWithErr$map,
			function (_v0) {
				var b = _v0.b;
				return b;
			},
			A2($author$project$Lib$State$StatefulReaderWithErr$pair, stateful_a_ignored, stateful_b));
	});
var $author$project$Lib$State$StatefulReaderWithErr$sequence = function (stateful_as0) {
	if (!stateful_as0.b) {
		return $author$project$Lib$State$StatefulReaderWithErr$return(_List_Nil);
	} else {
		var stateful_a = stateful_as0.a;
		var stateful_as1 = stateful_as0.b;
		return A2(
			$author$project$Lib$State$StatefulReaderWithErr$map,
			function (_v1) {
				var a = _v1.a;
				var as1 = _v1.b;
				return A2($elm$core$List$cons, a, as1);
			},
			A2(
				$author$project$Lib$State$StatefulReaderWithErr$pair,
				stateful_a,
				$author$project$Lib$State$StatefulReaderWithErr$sequence(stateful_as1)));
	}
};
var $author$project$Calculus$Evaluation$Value$DelayedThunk = function (a) {
	return {$: 'DelayedThunk', a: a};
};
var $author$project$Lib$State$StatefulReaderWithErr$create = function (f) {
	return f;
};
var $author$project$Calculus$Evaluation$Evaluation$storeNewThunk = F2(
	function (env, body) {
		return $author$project$Lib$State$StatefulReaderWithErr$create(
			F2(
				function (_v0, state) {
					var thunkContext = state.thunkContext;
					var id = thunkContext.nextThunkId;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							_Utils_update(
								state,
								{
									thunkContext: _Utils_update(
										thunkContext,
										{
											nextThunkId: id + 1,
											thunks: A3(
												$elm$core$Dict$insert,
												id,
												$author$project$Calculus$Evaluation$Value$DelayedThunk(
													{body: body, env: env}),
												thunkContext.thunks)
										})
								}),
							id));
				}));
	});
var $author$project$Lib$State$StatefulReaderWithErr$update0 = function (f) {
	return F2(
		function (r, state0) {
			return $elm$core$Result$Ok(
				_Utils_Tuple2(
					A2(f, r, state0),
					_Utils_Tuple0));
		});
};
var $author$project$Calculus$Evaluation$Evaluation$UndefinedVar = function (a) {
	return {$: 'UndefinedVar', a: a};
};
var $author$project$Calculus$Evaluation$Value$lookupTermEnvironment0 = F2(
	function (varName, env) {
		return A2(
			$elm$core$Maybe$andThen,
			function (terms) {
				if (!terms.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var term0 = terms.a;
					return $elm$core$Maybe$Just(term0);
				}
			},
			A2($elm$core$Dict$get, varName, env));
	});
var $author$project$Calculus$Evaluation$Value$lookupTermEnvironment = F2(
	function (varName, env) {
		return A2($author$project$Calculus$Evaluation$Value$lookupTermEnvironment0, varName, env.termEnv);
	});
var $author$project$Calculus$Evaluation$Evaluation$varLookup = function (varName) {
	return $author$project$Lib$State$StatefulReaderWithErr$get0(
		F2(
			function (env, _v0) {
				var _v1 = A2($author$project$Calculus$Evaluation$Value$lookupTermEnvironment, varName, env);
				if (_v1.$ === 'Just') {
					var val = _v1.a;
					return $author$project$Lib$State$StatefulReaderWithErr$return(val);
				} else {
					return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
						_List_fromArray(
							[
								$author$project$Calculus$Evaluation$Evaluation$UndefinedVar(varName)
							]));
				}
			}));
};
var $author$project$Lib$State$StatefulReaderWithErr$withReadOnly = F2(
	function (f, stateful_a) {
		return F2(
			function (r0, state0) {
				return A2(
					stateful_a,
					A2(f, r0, state0),
					state0);
			});
	});
var $author$project$Calculus$Evaluation$Evaluation$eval = function (term) {
	switch (term.$) {
		case 'VarUse':
			var varName = term.a;
			return $author$project$Calculus$Evaluation$Evaluation$varLookup(varName);
		case 'Pair':
			var fst = term.a;
			var snd = term.b;
			return A3(
				$author$project$Lib$State$StatefulReaderWithErr$map2,
				$author$project$Calculus$Evaluation$Value$Pair,
				$author$project$Calculus$Evaluation$Evaluation$eval(fst),
				$author$project$Calculus$Evaluation$Evaluation$eval(snd));
		case 'MatchPair':
			var arg = term.a;
			var var0 = term.b.var0;
			var var1 = term.b.var1;
			var body = term.b.body;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (argEvaled) {
					if (argEvaled.$ === 'Pair') {
						var val0 = argEvaled.a;
						var val1 = argEvaled.b;
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
							F2(
								function (env, _v23) {
									return A3(
										$author$project$Calculus$Evaluation$Value$extendTermEnvironment,
										var1,
										val1,
										A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, var0, val0, env));
								}),
							$author$project$Calculus$Evaluation$Evaluation$eval(body));
					} else {
						return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
							_List_fromArray(
								[$author$project$Calculus$Evaluation$Evaluation$ExpectedPair]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(arg));
		case 'Abstraction':
			var _var = term.a._var;
			var body = term.a.body;
			return $author$project$Lib$State$StatefulReaderWithErr$get0(
				F2(
					function (env, _v24) {
						return $author$project$Lib$State$StatefulReaderWithErr$return(
							$author$project$Calculus$Evaluation$Value$Closure(
								{body: body, env: env, _var: _var}));
					}));
		case 'Application':
			var fn = term.a;
			var arg = term.b;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (valFn) {
					if (valFn.$ === 'Closure') {
						var closure = valFn.a;
						var _var = closure._var;
						var body = closure.body;
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$andThen,
							function (argEvaled) {
								return A2(
									$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
									F2(
										function (_v26, _v27) {
											return A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, _var, argEvaled, closure.env);
										}),
									$author$project$Calculus$Evaluation$Evaluation$eval(body));
							},
							$author$project$Calculus$Evaluation$Evaluation$eval(arg));
					} else {
						return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
							_List_fromArray(
								[$author$project$Calculus$Evaluation$Evaluation$ExpectedFunction]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(fn));
		case 'Left':
			var term1 = term.a;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$map,
				$author$project$Calculus$Evaluation$Value$Left,
				$author$project$Calculus$Evaluation$Evaluation$eval(term1));
		case 'Right':
			var term1 = term.a;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$map,
				$author$project$Calculus$Evaluation$Value$Right,
				$author$project$Calculus$Evaluation$Evaluation$eval(term1));
		case 'MatchSum':
			var arg = term.a;
			var leftBranch = term.b.leftBranch;
			var rightBranch = term.b.rightBranch;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (argEvaled) {
					switch (argEvaled.$) {
						case 'Left':
							var val = argEvaled.a;
							return A2(
								$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
								F2(
									function (env, _v29) {
										return A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, leftBranch._var, val, env);
									}),
								$author$project$Calculus$Evaluation$Evaluation$eval(leftBranch.body));
						case 'Right':
							var val = argEvaled.a;
							return A2(
								$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
								F2(
									function (env, _v30) {
										return A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, rightBranch._var, val, env);
									}),
								$author$project$Calculus$Evaluation$Evaluation$eval(rightBranch.body));
						default:
							return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
								_List_fromArray(
									[$author$project$Calculus$Evaluation$Evaluation$ExpectedLeftRight]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(arg));
		case 'ConstTrue':
			return $author$project$Lib$State$StatefulReaderWithErr$return($author$project$Calculus$Evaluation$Value$ConstTrue);
		case 'ConstFalse':
			return $author$project$Lib$State$StatefulReaderWithErr$return($author$project$Calculus$Evaluation$Value$ConstFalse);
		case 'MatchBool':
			var arg = term.a;
			var trueBranch = term.b.trueBranch;
			var falseBranch = term.b.falseBranch;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (argEvaled) {
					switch (argEvaled.$) {
						case 'ConstTrue':
							return $author$project$Calculus$Evaluation$Evaluation$eval(trueBranch.body);
						case 'ConstFalse':
							return $author$project$Calculus$Evaluation$Evaluation$eval(falseBranch.body);
						default:
							return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
								_List_fromArray(
									[$author$project$Calculus$Evaluation$Evaluation$ExpectedBoolean]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(arg));
		case 'ConstZero':
			return $author$project$Lib$State$StatefulReaderWithErr$return(
				$author$project$Calculus$Evaluation$Value$NatValue($author$project$Calculus$Evaluation$Value$ConstZero));
		case 'Succ':
			var term1 = term.a;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (argEvaled) {
					if (argEvaled.$ === 'NatValue') {
						var natVal = argEvaled.a;
						return $author$project$Lib$State$StatefulReaderWithErr$return(
							$author$project$Calculus$Evaluation$Value$NatValue(
								$author$project$Calculus$Evaluation$Value$Succ(natVal)));
					} else {
						return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
							_List_fromArray(
								[$author$project$Calculus$Evaluation$Evaluation$ExpectedNat]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(term1));
		case 'FoldNat':
			var arg = term.a;
			var zeroBranch = term.b.zeroBranch;
			var succBranch = term.b.succBranch;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (argEvaled) {
					if (argEvaled.$ === 'NatValue') {
						var natVal = argEvaled.a;
						var evalNatLoop = function (natVal0) {
							if (natVal0.$ === 'ConstZero') {
								return $author$project$Calculus$Evaluation$Evaluation$eval(zeroBranch.body);
							} else {
								var natVal1 = natVal0.a;
								return A2(
									$author$project$Lib$State$StatefulReaderWithErr$andThen,
									function (prevVal) {
										return A2(
											$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
											F2(
												function (env, _v35) {
													return A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, succBranch._var, prevVal, env);
												}),
											$author$project$Calculus$Evaluation$Evaluation$eval(succBranch.body));
									},
									evalNatLoop(natVal1));
							}
						};
						return evalNatLoop(natVal);
					} else {
						return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
							_List_fromArray(
								[$author$project$Calculus$Evaluation$Evaluation$ExpectedNat]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(arg));
		case 'ConstEmpty':
			return $author$project$Lib$State$StatefulReaderWithErr$return(
				$author$project$Calculus$Evaluation$Value$ListValue($author$project$Calculus$Evaluation$Value$ConstEmpty));
		case 'Cons':
			var headTerm = term.a;
			var tailTerm = term.b;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (headValue) {
					return A2(
						$author$project$Lib$State$StatefulReaderWithErr$map,
						function (tailValue) {
							return $author$project$Calculus$Evaluation$Value$ListValue(
								A2($author$project$Calculus$Evaluation$Value$Cons, headValue, tailValue));
						},
						$author$project$Calculus$Evaluation$Evaluation$eval(tailTerm));
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(headTerm));
		case 'FoldList':
			var arg = term.a;
			var emptyBranch = term.b.emptyBranch;
			var consBranch = term.b.consBranch;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (argValue) {
					if (argValue.$ === 'ListValue') {
						var listValue = argValue.a;
						var evalListLoop = function (listValue0) {
							if (listValue0.$ === 'ConstEmpty') {
								return $author$project$Calculus$Evaluation$Evaluation$eval(emptyBranch.body);
							} else {
								var headValue = listValue0.a;
								var restValue = listValue0.b;
								if (restValue.$ === 'ListValue') {
									var listValue1 = restValue.a;
									return A2(
										$author$project$Lib$State$StatefulReaderWithErr$andThen,
										function (prevVal) {
											return A2(
												$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
												F2(
													function (env, _v39) {
														return A3(
															$author$project$Calculus$Evaluation$Value$extendTermEnvironment,
															consBranch.var1,
															prevVal,
															A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, consBranch.var0, headValue, env));
													}),
												$author$project$Calculus$Evaluation$Evaluation$eval(consBranch.body));
										},
										evalListLoop(listValue1));
								} else {
									return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
										_List_fromArray(
											[$author$project$Calculus$Evaluation$Evaluation$ExpectedList]));
								}
							}
						};
						return evalListLoop(listValue);
					} else {
						return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
							_List_fromArray(
								[$author$project$Calculus$Evaluation$Evaluation$ExpectedList]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(arg));
		case 'Delay':
			var body = term.a.body;
			return $author$project$Lib$State$StatefulReaderWithErr$get0(
				F2(
					function (env, _v40) {
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$andThen,
							function (thunkId) {
								return $author$project$Lib$State$StatefulReaderWithErr$return(
									$author$project$Calculus$Evaluation$Value$ThunkClosure(thunkId));
							},
							A2($author$project$Calculus$Evaluation$Evaluation$storeNewThunk, env, body));
					}));
		case 'Force':
			var body = term.a;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (val) {
					if (val.$ === 'ThunkClosure') {
						var thunkId = val.a;
						return $author$project$Calculus$Evaluation$Evaluation$forceThunk(thunkId);
					} else {
						return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
							_List_fromArray(
								[$author$project$Calculus$Evaluation$Evaluation$ExpectedThunkClosure]));
					}
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(body));
		case 'LetBe':
			var arg = term.a;
			var _var = term.b._var;
			var body = term.b.body;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (argVal) {
					return A2(
						$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
						F2(
							function (env, _v42) {
								return A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, _var, argVal, env);
							}),
						$author$project$Calculus$Evaluation$Evaluation$eval(body));
				},
				$author$project$Calculus$Evaluation$Evaluation$eval(arg));
		default:
			var module0 = term.a;
			var field = term.b;
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (moduleValue) {
					return A2($author$project$Calculus$Evaluation$Evaluation$lookupModuleTermField, field, moduleValue);
				},
				$author$project$Calculus$Evaluation$Evaluation$evalModule(module0));
	}
};
var $author$project$Calculus$Evaluation$Evaluation$evalFunctorApplication = F2(
	function (functorLiteral, modules) {
		var zipSame = F2(
			function (xs0, ys0) {
				var _v14 = _Utils_Tuple2(xs0, ys0);
				_v14$2:
				while (true) {
					if (!_v14.a.b) {
						if (!_v14.b.b) {
							return $elm$core$Maybe$Just(_List_Nil);
						} else {
							break _v14$2;
						}
					} else {
						if (_v14.b.b) {
							var _v15 = _v14.a;
							var x = _v15.a;
							var xs1 = _v15.b;
							var _v16 = _v14.b;
							var y = _v16.a;
							var ys1 = _v16.b;
							return A2(
								$elm$core$Maybe$map,
								function (zs1) {
									return A2(
										$elm$core$List$cons,
										_Utils_Tuple2(x, y),
										zs1);
								},
								A2(zipSame, xs1, ys1));
						} else {
							break _v14$2;
						}
					}
				}
				return $elm$core$Maybe$Nothing;
			});
		var _v17 = A2(zipSame, functorLiteral.parameters, modules);
		if (_v17.$ === 'Just') {
			var bindingsWithInterfaces = _v17.a;
			var moduleTermBindings = $author$project$Lib$State$StatefulReaderWithErr$sequence(
				A2(
					$elm$core$List$map,
					function (_v19) {
						var _v20 = _v19.a;
						var moduleName = _v20.a;
						var moduleTerm = _v19.b;
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$map,
							function (moduleValue) {
								return _Utils_Tuple2(moduleName, moduleValue);
							},
							$author$project$Calculus$Evaluation$Evaluation$evalModule(moduleTerm));
					},
					bindingsWithInterfaces));
			return A2(
				$author$project$Lib$State$StatefulReaderWithErr$andThen,
				function (bindings) {
					return A2(
						$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
						F2(
							function (env, _v18) {
								return A2($author$project$Calculus$Evaluation$Value$extendModuleEnvironmentWithBindings, bindings, env);
							}),
						$author$project$Calculus$Evaluation$Evaluation$evalModule(functorLiteral.body));
				},
				moduleTermBindings);
		} else {
			return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
				_List_fromArray(
					[$author$project$Calculus$Evaluation$Evaluation$FunctorApplicationNumberOfModuleParametersShouldBeEqualToNumberOfArguments]));
		}
	});
var $author$project$Calculus$Evaluation$Evaluation$evalModule = function (moduleTerm) {
	switch (moduleTerm.$) {
		case 'ModuleLiteralTerm':
			var module0 = moduleTerm.a;
			return $author$project$Calculus$Evaluation$Evaluation$evalModuleLiteral(module0);
		case 'ModuleVarUse':
			var moduleName = moduleTerm.a;
			return $author$project$Calculus$Evaluation$Evaluation$moduleLookup(moduleName);
		default:
			var functorTerm = moduleTerm.a;
			var modules = moduleTerm.b;
			if (functorTerm.$ === 'FunctorVarUse') {
				var functorName = functorTerm.a;
				return A2(
					$author$project$Lib$State$StatefulReaderWithErr$andThen,
					function (functorLiteral) {
						return A2($author$project$Calculus$Evaluation$Evaluation$evalFunctorApplication, functorLiteral, modules);
					},
					$author$project$Calculus$Evaluation$Evaluation$functorLookup(functorName));
			} else {
				var functorLiteral = functorTerm.a;
				return A2($author$project$Calculus$Evaluation$Evaluation$evalFunctorApplication, functorLiteral, modules);
			}
	}
};
var $author$project$Calculus$Evaluation$Evaluation$evalModuleLiteral = function (module0) {
	var evalBindings = function (bindings0) {
		evalBindings:
		while (true) {
			if (!bindings0.b) {
				return $author$project$Lib$State$StatefulReaderWithErr$return(_List_Nil);
			} else {
				var binding = bindings0.a;
				var bindings1 = bindings0.b;
				switch (binding.$) {
					case 'LetTerm':
						var varName = binding.a;
						var term = binding.b;
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$andThen,
							function (val) {
								return A2(
									$author$project$Lib$State$StatefulReaderWithErr$map,
									function (assignments1) {
										return A2(
											$elm$core$List$cons,
											A2($author$project$Calculus$Evaluation$Value$AssignValue, varName, val),
											assignments1);
									},
									A2(
										$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
										F2(
											function (env, _v9) {
												return A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, varName, val, env);
											}),
										evalBindings(bindings1)));
							},
							$author$project$Calculus$Evaluation$Evaluation$eval(term));
					case 'LetType':
						var typeVar = binding.a;
						var type0 = binding.b;
						var $temp$bindings0 = bindings1;
						bindings0 = $temp$bindings0;
						continue evalBindings;
					case 'LetModule':
						var moduleName = binding.a;
						var moduleTerm = binding.b;
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$andThen,
							function (moduleValue) {
								return A2(
									$author$project$Lib$State$StatefulReaderWithErr$map,
									function (assignments1) {
										return A2(
											$elm$core$List$cons,
											A2($author$project$Calculus$Evaluation$Value$AssignModuleValue, moduleName, moduleValue),
											assignments1);
									},
									A2(
										$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
										F2(
											function (env, _v10) {
												return A3($author$project$Calculus$Evaluation$Value$extendModuleEnvironment, moduleName, moduleValue, env);
											}),
										evalBindings(bindings1)));
							},
							$author$project$Calculus$Evaluation$Evaluation$evalModule(moduleTerm));
					default:
						var functorName = binding.a;
						var functorLiteral = binding.b;
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$map,
							function (assignments1) {
								return A2(
									$elm$core$List$cons,
									A2($author$project$Calculus$Evaluation$Value$AssignFunctorLiteral, functorName, functorLiteral),
									assignments1);
							},
							A2(
								$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
								F2(
									function (env, _v11) {
										return A3($author$project$Calculus$Evaluation$Value$extendFunctorEnvironment, functorName, functorLiteral, env);
									}),
								evalBindings(bindings1)));
				}
			}
		}
	};
	return A2(
		$author$project$Lib$State$StatefulReaderWithErr$map,
		function (assignments) {
			return {assignments: assignments};
		},
		evalBindings(module0.bindings));
};
var $author$project$Calculus$Evaluation$Evaluation$forceThunk = function (thunkId) {
	return $author$project$Lib$State$StatefulReaderWithErr$get0(
		F2(
			function (_v0, _v1) {
				var thunkContext = _v1.thunkContext;
				var maybeThunk = A2($elm$core$Dict$get, thunkId, thunkContext.thunks);
				if (maybeThunk.$ === 'Just') {
					var thunk = maybeThunk.a;
					if (thunk.$ === 'DelayedThunk') {
						var env = thunk.a.env;
						var body = thunk.a.body;
						return A2(
							$author$project$Lib$State$StatefulReaderWithErr$andThen,
							function (thunkVal) {
								return A2(
									$author$project$Lib$State$StatefulReaderWithErr$second,
									$author$project$Lib$State$StatefulReaderWithErr$update0(
										F2(
											function (_v6, state) {
												return _Utils_update(
													state,
													{
														thunkContext: function () {
															var thunkContext1 = state.thunkContext;
															return _Utils_update(
																thunkContext1,
																{
																	thunks: A3(
																		$elm$core$Dict$insert,
																		thunkId,
																		$author$project$Calculus$Evaluation$Value$ForcedThunk(thunkVal),
																		thunkContext1.thunks)
																});
														}()
													});
											})),
									$author$project$Lib$State$StatefulReaderWithErr$return(thunkVal));
							},
							A2(
								$author$project$Lib$State$StatefulReaderWithErr$withReadOnly,
								F2(
									function (_v4, _v5) {
										return env;
									}),
								$author$project$Calculus$Evaluation$Evaluation$eval(body)));
					} else {
						var val = thunk.a;
						return $author$project$Lib$State$StatefulReaderWithErr$return(val);
					}
				} else {
					return $author$project$Calculus$Evaluation$Evaluation$throwEvalError(
						_List_fromArray(
							[
								$author$project$Calculus$Evaluation$Evaluation$FailedToForceThunk(thunkId)
							]));
				}
			}));
};
var $author$project$Calculus$Evaluation$Evaluation$emptyThunkContext = {nextThunkId: 0, thunks: $elm$core$Dict$empty};
var $author$project$Calculus$Evaluation$Evaluation$initMutState = {thunkContext: $author$project$Calculus$Evaluation$Evaluation$emptyThunkContext};
var $author$project$Calculus$Evaluation$Evaluation$initReadOnlyState = $author$project$Calculus$Evaluation$Value$emptyEnvironment;
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $author$project$Lib$State$StatefulReaderWithErr$run = function (stateful_a0) {
	return stateful_a0;
};
var $author$project$Calculus$Evaluation$Evaluation$evalModule0 = function (module0) {
	return A2(
		$elm$core$Result$map,
		function (_v0) {
			var value = _v0.b;
			return value;
		},
		A3(
			$author$project$Lib$State$StatefulReaderWithErr$run,
			$author$project$Calculus$Evaluation$Evaluation$evalModule(module0),
			$author$project$Calculus$Evaluation$Evaluation$initReadOnlyState,
			$author$project$Calculus$Evaluation$Evaluation$initMutState));
};
var $author$project$Ui$Tab$Module$evalModule = function (model) {
	return _Utils_update(
		model,
		{
			evaledModule: function () {
				var _v0 = model.parsedModule;
				if (_v0.$ === 'Just') {
					var parsedModule = _v0.a;
					if (parsedModule.$ === 'Ok') {
						var moduleTerm = parsedModule.a;
						return $elm$core$Maybe$Just(
							$author$project$Calculus$Evaluation$Evaluation$evalModule0(moduleTerm));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}()
		});
};
var $author$project$Calculus$Evaluation$Evaluation$openModule = function (moduleValue0) {
	var f = F2(
		function (assignments0, env) {
			f:
			while (true) {
				if (!assignments0.b) {
					return env;
				} else {
					var assignment = assignments0.a;
					var assignments1 = assignments0.b;
					switch (assignment.$) {
						case 'AssignValue':
							var varName = assignment.a;
							var value = assignment.b;
							var $temp$assignments0 = assignments1,
								$temp$env = A3($author$project$Calculus$Evaluation$Value$extendTermEnvironment, varName, value, env);
							assignments0 = $temp$assignments0;
							env = $temp$env;
							continue f;
						case 'AssignType':
							var typeVar = assignment.a;
							var type0 = assignment.b;
							var $temp$assignments0 = assignments1,
								$temp$env = env;
							assignments0 = $temp$assignments0;
							env = $temp$env;
							continue f;
						case 'AssignModuleValue':
							var moduleName = assignment.a;
							var moduleValue1 = assignment.b;
							var $temp$assignments0 = assignments1,
								$temp$env = A3($author$project$Calculus$Evaluation$Value$extendModuleEnvironment, moduleName, moduleValue1, env);
							assignments0 = $temp$assignments0;
							env = $temp$env;
							continue f;
						default:
							var functorName = assignment.a;
							var functorLiteral = assignment.b;
							var $temp$assignments0 = assignments1,
								$temp$env = A3($author$project$Calculus$Evaluation$Value$extendFunctorEnvironment, functorName, functorLiteral, env);
							assignments0 = $temp$assignments0;
							env = $temp$env;
							continue f;
					}
				}
			}
		});
	return f(moduleValue0.assignments);
};
var $author$project$Ui$Tab$Module$openModule = function (model) {
	return _Utils_update(
		model,
		{
			env: function () {
				var _v0 = model.parsedModule;
				if (_v0.$ === 'Just') {
					var parsedModule = _v0.a;
					if (parsedModule.$ === 'Ok') {
						var moduleTerm = parsedModule.a;
						var evaledModuleResult = $author$project$Calculus$Evaluation$Evaluation$evalModule0(moduleTerm);
						if (evaledModuleResult.$ === 'Ok') {
							var moduleVal = evaledModuleResult.a;
							return A2($author$project$Calculus$Evaluation$Evaluation$openModule, moduleVal, $author$project$Calculus$Evaluation$Value$emptyEnvironment);
						} else {
							return $author$project$Calculus$Evaluation$Value$emptyEnvironment;
						}
					} else {
						return $author$project$Calculus$Evaluation$Value$emptyEnvironment;
					}
				} else {
					return $author$project$Calculus$Evaluation$Value$emptyEnvironment;
				}
			}()
		});
};
var $author$project$Calculus$Base$Abstraction = function (a) {
	return {$: 'Abstraction', a: a};
};
var $author$project$Calculus$Base$Application = F2(
	function (a, b) {
		return {$: 'Application', a: a, b: b};
	});
var $author$project$Calculus$Base$Cons = F2(
	function (a, b) {
		return {$: 'Cons', a: a, b: b};
	});
var $author$project$Calculus$Parser$Cons = {$: 'Cons'};
var $author$project$Calculus$Base$ConstEmpty = {$: 'ConstEmpty'};
var $author$project$Calculus$Parser$ConstEmpty = {$: 'ConstEmpty'};
var $author$project$Calculus$Base$ConstFalse = {$: 'ConstFalse'};
var $author$project$Calculus$Parser$ConstFalse = {$: 'ConstFalse'};
var $author$project$Calculus$Base$ConstTrue = {$: 'ConstTrue'};
var $author$project$Calculus$Parser$ConstTrue = {$: 'ConstTrue'};
var $author$project$Calculus$Base$ConstZero = {$: 'ConstZero'};
var $author$project$Calculus$Base$Delay = function (a) {
	return {$: 'Delay', a: a};
};
var $author$project$Calculus$Parser$ExpectedAtleastOneParameterToAbstraction = function (a) {
	return {$: 'ExpectedAtleastOneParameterToAbstraction', a: a};
};
var $author$project$Calculus$Parser$ExpectedAtleastTwoArgumentsToApplication = function (a) {
	return {$: 'ExpectedAtleastTwoArgumentsToApplication', a: a};
};
var $author$project$Calculus$Parser$ExpectedClosingBracketsInFunctorApplication = function (a) {
	return {$: 'ExpectedClosingBracketsInFunctorApplication', a: a};
};
var $author$project$Calculus$Parser$ExpectedClosingOfApplication = function (a) {
	return {$: 'ExpectedClosingOfApplication', a: a};
};
var $author$project$Calculus$Parser$ExpectedDotAfterFunctorParameters = function (a) {
	return {$: 'ExpectedDotAfterFunctorParameters', a: a};
};
var $author$project$Calculus$Parser$ExpectedEqualsInModuleLetBinding = function (a) {
	return {$: 'ExpectedEqualsInModuleLetBinding', a: a};
};
var $author$project$Calculus$Parser$ExpectedFunctorIdentifier = function (a) {
	return {$: 'ExpectedFunctorIdentifier', a: a};
};
var $author$project$Calculus$Parser$ExpectedFunctorLiteral = function (a) {
	return {$: 'ExpectedFunctorLiteral', a: a};
};
var $author$project$Calculus$Parser$ExpectedFunctorLiteralClosingBraces = function (a) {
	return {$: 'ExpectedFunctorLiteralClosingBraces', a: a};
};
var $author$project$Calculus$Parser$ExpectedFunctorLiteralOpenBraces = function (a) {
	return {$: 'ExpectedFunctorLiteralOpenBraces', a: a};
};
var $author$project$Calculus$Parser$ExpectedFunctorTermInApplication = function (a) {
	return {$: 'ExpectedFunctorTermInApplication', a: a};
};
var $author$project$Calculus$Parser$ExpectedGapAfterPatternKeyword = function (a) {
	return {$: 'ExpectedGapAfterPatternKeyword', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleClosingBraces = function (a) {
	return {$: 'ExpectedModuleClosingBraces', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleIdentifier = function (a) {
	return {$: 'ExpectedModuleIdentifier', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleIdentifierInModuleLetBinding = function (a) {
	return {$: 'ExpectedModuleIdentifierInModuleLetBinding', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleLetBinding = function (a) {
	return {$: 'ExpectedModuleLetBinding', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleOpenBraces = function (a) {
	return {$: 'ExpectedModuleOpenBraces', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleTermInFunctorBody = function (a) {
	return {$: 'ExpectedModuleTermInFunctorBody', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleTermInModuleAccess = function (a) {
	return {$: 'ExpectedModuleTermInModuleAccess', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleTermInModuleLetBinding = function (a) {
	return {$: 'ExpectedModuleTermInModuleLetBinding', a: a};
};
var $author$project$Calculus$Parser$ExpectedNatConstant = function (a) {
	return {$: 'ExpectedNatConstant', a: a};
};
var $author$project$Calculus$Parser$ExpectedOperator = function (a) {
	return {$: 'ExpectedOperator', a: a};
};
var $author$project$Calculus$Parser$ExpectedPattern = function (a) {
	return {$: 'ExpectedPattern', a: a};
};
var $author$project$Calculus$Parser$ExpectedPatternKeyword = function (a) {
	return {$: 'ExpectedPatternKeyword', a: a};
};
var $author$project$Calculus$Parser$ExpectedSemicolonAfterModuleLetBinding = function (a) {
	return {$: 'ExpectedSemicolonAfterModuleLetBinding', a: a};
};
var $author$project$Calculus$Parser$ExpectedTermIdentifier = function (a) {
	return {$: 'ExpectedTermIdentifier', a: a};
};
var $author$project$Calculus$Parser$ExpectedTermIdentifierInModuleLetBinding = function (a) {
	return {$: 'ExpectedTermIdentifierInModuleLetBinding', a: a};
};
var $author$project$Calculus$Parser$ExpectedTermInModuleLetBinding = function (a) {
	return {$: 'ExpectedTermInModuleLetBinding', a: a};
};
var $author$project$Calculus$Base$FoldList = F2(
	function (a, b) {
		return {$: 'FoldList', a: a, b: b};
	});
var $author$project$Calculus$Base$FoldNat = F2(
	function (a, b) {
		return {$: 'FoldNat', a: a, b: b};
	});
var $author$project$Calculus$Parser$FoldNat = {$: 'FoldNat'};
var $author$project$Calculus$Base$Force = function (a) {
	return {$: 'Force', a: a};
};
var $author$project$Calculus$Base$FunctorApplication = F2(
	function (a, b) {
		return {$: 'FunctorApplication', a: a, b: b};
	});
var $author$project$Calculus$Base$FunctorLiteral = F2(
	function (parameters, body) {
		return {body: body, parameters: parameters};
	});
var $author$project$Calculus$Base$FunctorLiteralTerm = function (a) {
	return {$: 'FunctorLiteralTerm', a: a};
};
var $author$project$Calculus$Base$FunctorVarUse = function (a) {
	return {$: 'FunctorVarUse', a: a};
};
var $author$project$Calculus$Base$Left = function (a) {
	return {$: 'Left', a: a};
};
var $author$project$Calculus$Parser$Left = {$: 'Left'};
var $author$project$Calculus$Base$LetBe = F2(
	function (a, b) {
		return {$: 'LetBe', a: a, b: b};
	});
var $author$project$Calculus$Base$LetModule = F2(
	function (a, b) {
		return {$: 'LetModule', a: a, b: b};
	});
var $author$project$Calculus$Base$LetTerm = F2(
	function (a, b) {
		return {$: 'LetTerm', a: a, b: b};
	});
var $author$project$Calculus$Base$MatchBool = F2(
	function (a, b) {
		return {$: 'MatchBool', a: a, b: b};
	});
var $author$project$Calculus$Base$MatchPair = F2(
	function (a, b) {
		return {$: 'MatchPair', a: a, b: b};
	});
var $author$project$Calculus$Base$MatchSum = F2(
	function (a, b) {
		return {$: 'MatchSum', a: a, b: b};
	});
var $author$project$Calculus$Base$ModuleAccess = F2(
	function (a, b) {
		return {$: 'ModuleAccess', a: a, b: b};
	});
var $author$project$Calculus$Base$ModuleLiteral = function (bindings) {
	return {bindings: bindings};
};
var $author$project$Calculus$Base$ModuleLiteralTerm = function (a) {
	return {$: 'ModuleLiteralTerm', a: a};
};
var $author$project$Calculus$Base$ModuleVarUse = function (a) {
	return {$: 'ModuleVarUse', a: a};
};
var $author$project$Calculus$Base$Pair = F2(
	function (a, b) {
		return {$: 'Pair', a: a, b: b};
	});
var $author$project$Calculus$Parser$Pair = {$: 'Pair'};
var $author$project$Calculus$Base$Right = function (a) {
	return {$: 'Right', a: a};
};
var $author$project$Calculus$Parser$Right = {$: 'Right'};
var $author$project$Calculus$Base$Succ = function (a) {
	return {$: 'Succ', a: a};
};
var $author$project$Calculus$Parser$Succ = {$: 'Succ'};
var $author$project$Calculus$Base$VarUse = function (a) {
	return {$: 'VarUse', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $author$project$Lib$Parser$Parser$make = function (f) {
	return f;
};
var $author$project$Lib$Parser$Parser$run = function (parser) {
	return parser;
};
var $author$project$Lib$Parser$Parser$andThen = F2(
	function (f, parser) {
		return $author$project$Lib$Parser$Parser$make(
			F2(
				function (r, s0) {
					return A2(
						$elm$core$Result$andThen,
						function (_v0) {
							var s1 = _v0.a;
							var a = _v0.b;
							return A3(
								$author$project$Lib$Parser$Parser$run,
								f(a),
								r,
								s1);
						},
						A3($author$project$Lib$Parser$Parser$run, parser, r, s0));
				}));
	});
var $author$project$Calculus$Parser$ExpectedBindingTerm = function (a) {
	return {$: 'ExpectedBindingTerm', a: a};
};
var $author$project$Calculus$Parser$ExpectedClosingBraces = function (a) {
	return {$: 'ExpectedClosingBraces', a: a};
};
var $author$project$Calculus$Parser$ExpectedDot = function (a) {
	return {$: 'ExpectedDot', a: a};
};
var $author$project$Calculus$Parser$ExpectedOpenBraces = function (a) {
	return {$: 'ExpectedOpenBraces', a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $author$project$Lib$Parser$Error$mapMsg = F2(
	function (f, error) {
		return {
			msg: f(error.msg),
			position: error.position
		};
	});
var $author$project$Lib$Parser$Parser$mapError = F2(
	function (f, parser0) {
		return $author$project$Lib$Parser$Parser$make(
			F2(
				function (r, s) {
					return A2(
						$elm$core$Result$mapError,
						$author$project$Lib$Parser$Error$mapMsg(f),
						A3($author$project$Lib$Parser$Parser$run, parser0, r, s));
				}));
	});
var $author$project$Lib$Parser$Parser$map = F2(
	function (f, parser) {
		return $author$project$Lib$Parser$Parser$make(
			F2(
				function (r, s0) {
					return A2(
						$elm$core$Result$map,
						function (_v0) {
							var s1 = _v0.a;
							var a = _v0.b;
							return _Utils_Tuple2(
								s1,
								f(a));
						},
						A3($author$project$Lib$Parser$Parser$run, parser, r, s0));
				}));
	});
var $author$project$Lib$Parser$Parser$pair = F2(
	function (parser0, parser1) {
		return $author$project$Lib$Parser$Parser$make(
			F2(
				function (r, s0) {
					return A2(
						$elm$core$Result$andThen,
						function (_v0) {
							var s1 = _v0.a;
							var a = _v0.b;
							return A2(
								$elm$core$Result$map,
								function (_v1) {
									var s2 = _v1.a;
									var b = _v1.b;
									return _Utils_Tuple2(
										s2,
										_Utils_Tuple2(a, b));
								},
								A3($author$project$Lib$Parser$Parser$run, parser1, r, s1));
						},
						A3($author$project$Lib$Parser$Parser$run, parser0, r, s0));
				}));
	});
var $author$project$Lib$Parser$Parser$first = F2(
	function (parser0, parser1) {
		return A2(
			$author$project$Lib$Parser$Parser$map,
			function (_v0) {
				var a = _v0.a;
				return a;
			},
			A2($author$project$Lib$Parser$Parser$pair, parser0, parser1));
	});
var $author$project$Lib$Parser$Parser$o = F2(
	function (parser1, parser0) {
		return A2($author$project$Lib$Parser$Parser$first, parser0, parser1);
	});
var $author$project$Lib$Parser$Parser$ooo = F2(
	function (parser_a, parser_f) {
		return A2(
			$author$project$Lib$Parser$Parser$map,
			function (_v0) {
				var f = _v0.a;
				var a = _v0.b;
				return f(a);
			},
			A2($author$project$Lib$Parser$Parser$pair, parser_f, parser_a));
	});
var $author$project$Lib$Parser$Parser$return = function (a) {
	return $author$project$Lib$Parser$Parser$make(
		F2(
			function (r, s) {
				return $elm$core$Result$Ok(
					_Utils_Tuple2(s, a));
			}));
};
var $elm$core$String$cons = _String_cons;
var $author$project$Lib$Parser$State$updatePosition = F2(
	function (f, s) {
		return _Utils_update(
			s,
			{
				position: f(s.position)
			});
	});
var $author$project$Lib$Parser$State$moveBy = function (n) {
	return $author$project$Lib$Parser$State$updatePosition(
		function (position) {
			return {col: position.col + n, line: position.line};
		});
};
var $author$project$Lib$Parser$State$newLine = $author$project$Lib$Parser$State$updatePosition(
	function (position) {
		return {col: 0, line: position.line + 1};
	});
var $author$project$Lib$Parser$State$moveByCharacter = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr('\n')) ? $author$project$Lib$Parser$State$newLine : $author$project$Lib$Parser$State$moveBy(1);
};
var $elm$core$String$reverse = _String_reverse;
var $author$project$Lib$Parser$State$setInput = F2(
	function (newInput, s) {
		return _Utils_update(
			s,
			{input: newInput});
	});
var $author$project$Lib$Parser$State$consumeWhileTrue = F2(
	function (test, init_s) {
		var loop = F2(
			function (s, reversed_strConsumedSoFar) {
				loop:
				while (true) {
					var _v0 = $elm$core$String$uncons(s.input);
					if (_v0.$ === 'Just') {
						var _v1 = _v0.a;
						var c = _v1.a;
						var inputRemaining = _v1.b;
						if (test(c)) {
							var $temp$s = A2(
								$author$project$Lib$Parser$State$moveByCharacter,
								c,
								A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
								$temp$reversed_strConsumedSoFar = A2($elm$core$String$cons, c, reversed_strConsumedSoFar);
							s = $temp$s;
							reversed_strConsumedSoFar = $temp$reversed_strConsumedSoFar;
							continue loop;
						} else {
							return _Utils_Tuple2(
								s,
								$elm$core$String$reverse(reversed_strConsumedSoFar));
						}
					} else {
						return _Utils_Tuple2(
							s,
							$elm$core$String$reverse(reversed_strConsumedSoFar));
					}
				}
			});
		return A2(loop, init_s, '');
	});
var $author$project$Lib$Parser$Parser$allWhileTrue = function (test) {
	return $author$project$Lib$Parser$Parser$make(
		F2(
			function (_v0, s) {
				return $elm$core$Result$Ok(
					A2($author$project$Lib$Parser$State$consumeWhileTrue, test, s));
			}));
};
var $author$project$Lib$Parser$Parser$discard = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$map,
		function (_v0) {
			return _Utils_Tuple0;
		},
		parser);
};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$Calculus$Parser$whitespaceChars = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(' '),
			_Utils_chr('\n'),
			_Utils_chr('\u000D'),
			_Utils_chr('\t'),
			_Utils_chr(',')
		]));
var $author$project$Calculus$Parser$isWhitespaceChar = function (c) {
	return A2($elm$core$Set$member, c, $author$project$Calculus$Parser$whitespaceChars);
};
var $author$project$Calculus$Parser$spaces = $author$project$Lib$Parser$Parser$discard(
	$author$project$Lib$Parser$Parser$allWhileTrue($author$project$Calculus$Parser$isWhitespaceChar));
var $author$project$Lib$Parser$Error$ExpectedString = F3(
	function (expected, consumedSuccessfully, failedAtChar) {
		return {consumedSuccessfully: consumedSuccessfully, expected: expected, failedAtChar: failedAtChar};
	});
var $author$project$Lib$Parser$State$throw = F2(
	function (msg, s) {
		return {msg: msg, position: s.position};
	});
var $author$project$Lib$Parser$State$consumeString = F2(
	function (strToBeMatched, init_s) {
		var loop = F3(
			function (strToBeMatched0, s, reversed_strConsumedSoFar) {
				loop:
				while (true) {
					var _v0 = _Utils_Tuple2(
						$elm$core$String$uncons(strToBeMatched0),
						$elm$core$String$uncons(s.input));
					if (_v0.a.$ === 'Just') {
						if (_v0.b.$ === 'Just') {
							var _v1 = _v0.a.a;
							var cToBeMatched = _v1.a;
							var strToBeMatched1 = _v1.b;
							var _v2 = _v0.b.a;
							var c = _v2.a;
							var inputRemaining = _v2.b;
							if (_Utils_eq(cToBeMatched, c)) {
								var $temp$strToBeMatched0 = strToBeMatched1,
									$temp$s = A2(
									$author$project$Lib$Parser$State$moveByCharacter,
									cToBeMatched,
									A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
									$temp$reversed_strConsumedSoFar = A2($elm$core$String$cons, c, reversed_strConsumedSoFar);
								strToBeMatched0 = $temp$strToBeMatched0;
								s = $temp$s;
								reversed_strConsumedSoFar = $temp$reversed_strConsumedSoFar;
								continue loop;
							} else {
								return $elm$core$Result$Err(
									A2(
										$author$project$Lib$Parser$State$throw,
										A3(
											$author$project$Lib$Parser$Error$ExpectedString,
											strToBeMatched,
											$elm$core$String$reverse(reversed_strConsumedSoFar),
											$elm$core$Maybe$Just(c)),
										s));
							}
						} else {
							var _v3 = _v0.b;
							return $elm$core$Result$Err(
								A2(
									$author$project$Lib$Parser$State$throw,
									A3(
										$author$project$Lib$Parser$Error$ExpectedString,
										strToBeMatched,
										$elm$core$String$reverse(reversed_strConsumedSoFar),
										$elm$core$Maybe$Nothing),
									s));
						}
					} else {
						var _v4 = _v0.a;
						return $elm$core$Result$Ok(s);
					}
				}
			});
		return A3(loop, strToBeMatched, init_s, '');
	});
var $author$project$Lib$Parser$Parser$string = function (strToBeMatched) {
	return $author$project$Lib$Parser$Parser$make(
		F2(
			function (_v0, s0) {
				return A2(
					$elm$core$Result$map,
					function (s1) {
						return _Utils_Tuple2(s1, _Utils_Tuple0);
					},
					A2($author$project$Lib$Parser$State$consumeString, strToBeMatched, s0));
			}));
};
var $author$project$Lib$Parser$Parser$unit = $author$project$Lib$Parser$Parser$return(_Utils_Tuple0);
var $author$project$Calculus$Parser$symbol = function (symbol0) {
	return A2(
		$author$project$Lib$Parser$Parser$o,
		$author$project$Calculus$Parser$spaces,
		A2(
			$author$project$Lib$Parser$Parser$o,
			$author$project$Lib$Parser$Parser$string(symbol0),
			$author$project$Lib$Parser$Parser$unit));
};
var $author$project$Calculus$Parser$binding = F2(
	function (patternParser, bodyParser) {
		return A2(
			$author$project$Lib$Parser$Parser$o,
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				A2($elm$core$Basics$composeL, $author$project$Calculus$Parser$ExpectedBindingTerm, $author$project$Calculus$Parser$ExpectedClosingBraces),
				$author$project$Calculus$Parser$symbol('}')),
			A2(
				$author$project$Lib$Parser$Parser$ooo,
				bodyParser,
				A2(
					$author$project$Lib$Parser$Parser$o,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						A2($elm$core$Basics$composeL, $author$project$Calculus$Parser$ExpectedBindingTerm, $author$project$Calculus$Parser$ExpectedDot),
						$author$project$Calculus$Parser$symbol('.')),
					A2(
						$author$project$Lib$Parser$Parser$ooo,
						patternParser,
						A2(
							$author$project$Lib$Parser$Parser$o,
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								A2($elm$core$Basics$composeL, $author$project$Calculus$Parser$ExpectedBindingTerm, $author$project$Calculus$Parser$ExpectedOpenBraces),
								$author$project$Calculus$Parser$symbol('{')),
							$author$project$Lib$Parser$Parser$return(
								F2(
									function (vars, body) {
										return _Utils_Tuple2(vars, body);
									})))))));
	});
var $author$project$Calculus$Parser$ExpectedDefEquals = function (a) {
	return {$: 'ExpectedDefEquals', a: a};
};
var $author$project$Calculus$Parser$defEquals = $author$project$Calculus$Parser$symbol('=');
var $author$project$Calculus$Parser$defEqualsTerm = A2(
	$author$project$Lib$Parser$Parser$mapError,
	A2($elm$core$Basics$composeL, $author$project$Calculus$Parser$ExpectedBindingTerm, $author$project$Calculus$Parser$ExpectedDefEquals),
	$author$project$Calculus$Parser$defEquals);
var $author$project$Calculus$Parser$emptySequence = $author$project$Calculus$Parser$spaces;
var $author$project$Lib$Parser$State$getPosition = function (state) {
	return state.position;
};
var $author$project$Lib$Parser$Error$Error = F2(
	function (position, msg) {
		return {msg: msg, position: position};
	});
var $author$project$Lib$Parser$Error$make = F2(
	function (position, msg) {
		return A2($author$project$Lib$Parser$Error$Error, position, msg);
	});
var $author$project$Lib$Parser$Parser$fail = function (error) {
	return $author$project$Lib$Parser$Parser$make(
		F2(
			function (_v0, s) {
				return $elm$core$Result$Err(
					A2(
						$author$project$Lib$Parser$Error$make,
						$author$project$Lib$Parser$State$getPosition(s),
						error));
			}));
};
var $author$project$Calculus$Parser$ExpectedFunctorOperator = function (a) {
	return {$: 'ExpectedFunctorOperator', a: a};
};
var $author$project$Calculus$Parser$ExpectedGapAfterFunctorOperator = function (a) {
	return {$: 'ExpectedGapAfterFunctorOperator', a: a};
};
var $author$project$Calculus$Parser$FunctorLiteral = {$: 'FunctorLiteral'};
var $author$project$Calculus$Parser$FunctorVarUse = {$: 'FunctorVarUse'};
var $author$project$Lib$Parser$Error$CharFailedTest = function (failedAtChar) {
	return {failedAtChar: failedAtChar};
};
var $author$project$Lib$Parser$State$consumeAnyCharSatisfying = F2(
	function (test, s) {
		var _v0 = $elm$core$String$uncons(s.input);
		if (_v0.$ === 'Just') {
			var _v1 = _v0.a;
			var c = _v1.a;
			var inputRemaining = _v1.b;
			return test(c) ? $elm$core$Result$Ok(
				_Utils_Tuple2(
					A2(
						$author$project$Lib$Parser$State$moveByCharacter,
						c,
						A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
					c)) : $elm$core$Result$Err(
				A2(
					$author$project$Lib$Parser$State$throw,
					$author$project$Lib$Parser$Error$CharFailedTest(
						$elm$core$Maybe$Just(c)),
					s));
		} else {
			return $elm$core$Result$Err(
				A2(
					$author$project$Lib$Parser$State$throw,
					$author$project$Lib$Parser$Error$CharFailedTest($elm$core$Maybe$Nothing),
					s));
		}
	});
var $author$project$Lib$Parser$Parser$anyCharSatisfying = function (test) {
	return $author$project$Lib$Parser$Parser$make(
		F2(
			function (_v0, s0) {
				return A2($author$project$Lib$Parser$State$consumeAnyCharSatisfying, test, s0);
			}));
};
var $author$project$Lib$Parser$Parser$check = function (parser) {
	return $author$project$Lib$Parser$Parser$make(
		F2(
			function (r, s0) {
				var _v0 = A3($author$project$Lib$Parser$Parser$run, parser, r, s0);
				if (_v0.$ === 'Ok') {
					var _v1 = _v0.a;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(s0, _Utils_Tuple0));
				} else {
					var error = _v0.a;
					return $elm$core$Result$Err(error);
				}
			}));
};
var $author$project$Lib$Parser$Error$getMsg = function (error) {
	return error.msg;
};
var $author$project$Lib$Parser$Parser$ifSuccessIfError = F3(
	function (handleSuccess, handleError, parser) {
		return $author$project$Lib$Parser$Parser$make(
			F2(
				function (r, s0) {
					var _v0 = A3($author$project$Lib$Parser$Parser$run, parser, r, s0);
					if (_v0.$ === 'Ok') {
						var _v1 = _v0.a;
						var s1 = _v1.a;
						var a = _v1.b;
						return A3(
							$author$project$Lib$Parser$Parser$run,
							handleSuccess(a),
							r,
							s1);
					} else {
						var error = _v0.a;
						return A3(
							$author$project$Lib$Parser$Parser$run,
							handleError(
								$author$project$Lib$Parser$Error$getMsg(error)),
							r,
							s0);
					}
				}));
	});
var $author$project$Lib$Parser$Parser$ifError = F2(
	function (handleError, parser) {
		return A3($author$project$Lib$Parser$Parser$ifSuccessIfError, $author$project$Lib$Parser$Parser$return, handleError, parser);
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$union, dict1, dict2));
	});
var $author$project$Calculus$Parser$gapChars = A2(
	$elm$core$Set$union,
	$author$project$Calculus$Parser$whitespaceChars,
	$elm$core$Set$fromList(
		_List_fromArray(
			[
				_Utils_chr('('),
				_Utils_chr(')'),
				_Utils_chr('{'),
				_Utils_chr('}'),
				_Utils_chr('.'),
				_Utils_chr('$'),
				_Utils_chr('\''),
				_Utils_chr('\"'),
				_Utils_chr('%'),
				_Utils_chr('/'),
				_Utils_chr('='),
				_Utils_chr(';'),
				_Utils_chr('\\'),
				_Utils_chr('['),
				_Utils_chr(']')
			])));
var $author$project$Calculus$Parser$isGapChar = function (c) {
	return A2($elm$core$Set$member, c, $author$project$Calculus$Parser$gapChars);
};
var $author$project$Calculus$Parser$keywordGap = A2(
	$author$project$Lib$Parser$Parser$o,
	$author$project$Calculus$Parser$spaces,
	A2(
		$author$project$Lib$Parser$Parser$ifError,
		function (failedAtCharErr) {
			var _v0 = failedAtCharErr.failedAtChar;
			if (_v0.$ === 'Just') {
				var c = _v0.a;
				return $author$project$Lib$Parser$Parser$fail(
					{failedAtChar: c});
			} else {
				return $author$project$Lib$Parser$Parser$unit;
			}
		},
		$author$project$Lib$Parser$Parser$check(
			$author$project$Lib$Parser$Parser$anyCharSatisfying($author$project$Calculus$Parser$isGapChar))));
var $author$project$Lib$Parser$Error$ExpectedStringIn = F2(
	function (consumedSuccessfully, failedAtChar) {
		return {consumedSuccessfully: consumedSuccessfully, failedAtChar: failedAtChar};
	});
var $author$project$Lib$Parser$Forest$Continue = function (a) {
	return {$: 'Continue', a: a};
};
var $author$project$Lib$Parser$Forest$ContinueWithValue = F2(
	function (a, b) {
		return {$: 'ContinueWithValue', a: a, b: b};
	});
var $author$project$Lib$Parser$Forest$Empty = {$: 'Empty'};
var $author$project$Lib$Parser$Forest$EndWithValue = function (a) {
	return {$: 'EndWithValue', a: a};
};
var $author$project$Lib$Parser$Forest$Root = function (a) {
	return {$: 'Root', a: a};
};
var $author$project$Lib$Parser$Forest$derive = F2(
	function (k, forest) {
		var dict0 = forest.a;
		var _v1 = A2($elm$core$Dict$get, k, dict0);
		if (_v1.$ === 'Just') {
			var edge = _v1.a;
			if (edge.$ === 'Leaf') {
				var v = edge.a;
				return $author$project$Lib$Parser$Forest$EndWithValue(v);
			} else {
				var maybev = edge.a;
				var dict1 = edge.b;
				if (maybev.$ === 'Just') {
					var v = maybev.a;
					return A2(
						$author$project$Lib$Parser$Forest$ContinueWithValue,
						v,
						$author$project$Lib$Parser$Forest$Root(dict1));
				} else {
					return $author$project$Lib$Parser$Forest$Continue(
						$author$project$Lib$Parser$Forest$Root(dict1));
				}
			}
		} else {
			return $author$project$Lib$Parser$Forest$Empty;
		}
	});
var $author$project$Lib$Parser$State$consumeForest = F2(
	function (forestToBeMatched, init_s) {
		var loop2 = F4(
			function (forest0, s, lastSuccessful_s, lastValue) {
				loop2:
				while (true) {
					var _v0 = $elm$core$String$uncons(s.input);
					if (_v0.$ === 'Just') {
						var _v1 = _v0.a;
						var c = _v1.a;
						var inputRemaining = _v1.b;
						var _v2 = A2($author$project$Lib$Parser$Forest$derive, c, forest0);
						switch (_v2.$) {
							case 'EndWithValue':
								var v = _v2.a;
								return $elm$core$Result$Ok(
									_Utils_Tuple2(
										A2(
											$author$project$Lib$Parser$State$moveByCharacter,
											c,
											A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
										v));
							case 'Continue':
								var forest1 = _v2.a;
								var $temp$forest0 = forest1,
									$temp$s = A2(
									$author$project$Lib$Parser$State$moveByCharacter,
									c,
									A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
									$temp$lastSuccessful_s = lastSuccessful_s,
									$temp$lastValue = lastValue;
								forest0 = $temp$forest0;
								s = $temp$s;
								lastSuccessful_s = $temp$lastSuccessful_s;
								lastValue = $temp$lastValue;
								continue loop2;
							case 'ContinueWithValue':
								var v = _v2.a;
								var forest1 = _v2.b;
								var new_s = A2(
									$author$project$Lib$Parser$State$moveByCharacter,
									c,
									A2($author$project$Lib$Parser$State$setInput, inputRemaining, s));
								var $temp$forest0 = forest1,
									$temp$s = new_s,
									$temp$lastSuccessful_s = new_s,
									$temp$lastValue = v;
								forest0 = $temp$forest0;
								s = $temp$s;
								lastSuccessful_s = $temp$lastSuccessful_s;
								lastValue = $temp$lastValue;
								continue loop2;
							default:
								return $elm$core$Result$Ok(
									_Utils_Tuple2(lastSuccessful_s, lastValue));
						}
					} else {
						return $elm$core$Result$Ok(
							_Utils_Tuple2(lastSuccessful_s, lastValue));
					}
				}
			});
		var loop1 = F3(
			function (forest0, s, reversed_strConsumedSoFar) {
				loop1:
				while (true) {
					var _v3 = $elm$core$String$uncons(s.input);
					if (_v3.$ === 'Just') {
						var _v4 = _v3.a;
						var c = _v4.a;
						var inputRemaining = _v4.b;
						var _v5 = A2($author$project$Lib$Parser$Forest$derive, c, forest0);
						switch (_v5.$) {
							case 'EndWithValue':
								var v = _v5.a;
								return $elm$core$Result$Ok(
									_Utils_Tuple2(
										A2(
											$author$project$Lib$Parser$State$moveByCharacter,
											c,
											A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
										v));
							case 'Continue':
								var forest1 = _v5.a;
								var $temp$forest0 = forest1,
									$temp$s = A2(
									$author$project$Lib$Parser$State$moveByCharacter,
									c,
									A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
									$temp$reversed_strConsumedSoFar = A2($elm$core$String$cons, c, reversed_strConsumedSoFar);
								forest0 = $temp$forest0;
								s = $temp$s;
								reversed_strConsumedSoFar = $temp$reversed_strConsumedSoFar;
								continue loop1;
							case 'ContinueWithValue':
								var v = _v5.a;
								var forest1 = _v5.b;
								var new_s = A2(
									$author$project$Lib$Parser$State$moveByCharacter,
									c,
									A2($author$project$Lib$Parser$State$setInput, inputRemaining, s));
								return A4(loop2, forest1, new_s, new_s, v);
							default:
								return $elm$core$Result$Err(
									A2(
										$author$project$Lib$Parser$State$throw,
										A2(
											$author$project$Lib$Parser$Error$ExpectedStringIn,
											$elm$core$String$reverse(reversed_strConsumedSoFar),
											$elm$core$Maybe$Just(c)),
										s));
						}
					} else {
						return $elm$core$Result$Err(
							A2(
								$author$project$Lib$Parser$State$throw,
								A2(
									$author$project$Lib$Parser$Error$ExpectedStringIn,
									$elm$core$String$reverse(reversed_strConsumedSoFar),
									$elm$core$Maybe$Nothing),
								s));
					}
				}
			});
		return A3(loop1, forestToBeMatched, init_s, '');
	});
var $author$project$Lib$Parser$Forest$empty = $author$project$Lib$Parser$Forest$Root($elm$core$Dict$empty);
var $author$project$Lib$Parser$Forest$Branch = F2(
	function (a, b) {
		return {$: 'Branch', a: a, b: b};
	});
var $author$project$Lib$Parser$Forest$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $author$project$Lib$Parser$Forest$edgeChain = F2(
	function (keys0, v) {
		if (!keys0.b) {
			return $author$project$Lib$Parser$Forest$Leaf(v);
		} else {
			var k0 = keys0.a;
			var keys1 = keys0.b;
			return A2(
				$author$project$Lib$Parser$Forest$Branch,
				$elm$core$Maybe$Nothing,
				A2(
					$elm$core$Dict$singleton,
					k0,
					A2($author$project$Lib$Parser$Forest$edgeChain, keys1, v)));
		}
	});
var $author$project$Lib$Parser$Forest$insertEdge = F3(
	function (keys0, v0, edge0) {
		if (edge0.$ === 'Leaf') {
			var v = edge0.a;
			if (!keys0.b) {
				return $author$project$Lib$Parser$Forest$Leaf(v0);
			} else {
				var k0 = keys0.a;
				var keys1 = keys0.b;
				return A2(
					$author$project$Lib$Parser$Forest$Branch,
					$elm$core$Maybe$Just(v),
					A2(
						$elm$core$Dict$singleton,
						k0,
						A2($author$project$Lib$Parser$Forest$edgeChain, keys1, v0)));
			}
		} else {
			var maybe_v = edge0.a;
			var dict = edge0.b;
			if (!keys0.b) {
				return A2(
					$author$project$Lib$Parser$Forest$Branch,
					$elm$core$Maybe$Just(v0),
					dict);
			} else {
				var k0 = keys0.a;
				var keys1 = keys0.b;
				return A2(
					$author$project$Lib$Parser$Forest$Branch,
					maybe_v,
					A3(
						$elm$core$Dict$update,
						k0,
						function (maybe_k) {
							if (maybe_k.$ === 'Just') {
								var edge1 = maybe_k.a;
								return $elm$core$Maybe$Just(
									A3($author$project$Lib$Parser$Forest$insertEdge, keys1, v0, edge1));
							} else {
								return $elm$core$Maybe$Just(
									A2($author$project$Lib$Parser$Forest$edgeChain, keys1, v0));
							}
						},
						dict));
			}
		}
	});
var $author$project$Lib$Parser$Forest$insert = F4(
	function (k0, keys0, v0, forest) {
		var dict = forest.a;
		return $author$project$Lib$Parser$Forest$Root(
			A3(
				$elm$core$Dict$update,
				k0,
				function (maybe_k) {
					if (maybe_k.$ === 'Just') {
						var edge = maybe_k.a;
						return $elm$core$Maybe$Just(
							A3($author$project$Lib$Parser$Forest$insertEdge, keys0, v0, edge));
					} else {
						return $elm$core$Maybe$Just(
							A2($author$project$Lib$Parser$Forest$edgeChain, keys0, v0));
					}
				},
				dict));
	});
var $author$project$Lib$Parser$Forest$fromList = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, forest) {
				var ks = _v0.a;
				var v = _v0.b;
				if (!ks.b) {
					return forest;
				} else {
					var k = ks.a;
					var ks1 = ks.b;
					return A4($author$project$Lib$Parser$Forest$insert, k, ks1, v, forest);
				}
			}),
		$author$project$Lib$Parser$Forest$empty,
		xs);
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$Lib$Parser$Forest$fromStringList = function (xs) {
	return $author$project$Lib$Parser$Forest$fromList(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var str = _v0.a;
				var v = _v0.b;
				return _Utils_Tuple2(
					$elm$core$String$toList(str),
					v);
			},
			xs));
};
var $author$project$Lib$Parser$Parser$stringIn = function (forest) {
	return $author$project$Lib$Parser$Parser$make(
		F2(
			function (_v0, s0) {
				return A2(
					$author$project$Lib$Parser$State$consumeForest,
					$author$project$Lib$Parser$Forest$fromStringList(forest),
					s0);
			}));
};
var $author$project$Calculus$Parser$functorOperatorKeyword = function () {
	var handleGap = F2(
		function (keyword0, gapError) {
			return $author$project$Calculus$Parser$ExpectedGapAfterFunctorOperator(
				{failedAtChar: gapError.failedAtChar, operatorKeyword: keyword0});
		});
	return A2(
		$author$project$Lib$Parser$Parser$o,
		$author$project$Calculus$Parser$spaces,
		A2(
			$author$project$Lib$Parser$Parser$andThen,
			function (keyword0) {
				if (keyword0.$ === 'FunctorVarUse') {
					return $author$project$Lib$Parser$Parser$return($author$project$Calculus$Parser$FunctorVarUse);
				} else {
					return A2(
						$author$project$Lib$Parser$Parser$o,
						A2(
							$author$project$Lib$Parser$Parser$mapError,
							handleGap(keyword0),
							$author$project$Calculus$Parser$keywordGap),
						$author$project$Lib$Parser$Parser$return(keyword0));
				}
			},
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedFunctorOperator,
				$author$project$Lib$Parser$Parser$stringIn(
					_List_fromArray(
						[
							_Utils_Tuple2('$', $author$project$Calculus$Parser$FunctorVarUse),
							_Utils_Tuple2('functor', $author$project$Calculus$Parser$FunctorLiteral)
						])))));
}();
var $author$project$Calculus$Parser$ExpectedFunctorIdentifierInFunctorParameter = function (a) {
	return {$: 'ExpectedFunctorIdentifierInFunctorParameter', a: a};
};
var $author$project$Calculus$Parser$ExpectedInterfaceInFunctorParameter = function (a) {
	return {$: 'ExpectedInterfaceInFunctorParameter', a: a};
};
var $author$project$Calculus$Parser$ExpectedTypingSymbolInFunctorParameter = function (a) {
	return {$: 'ExpectedTypingSymbolInFunctorParameter', a: a};
};
var $author$project$Calculus$Parser$ExpectedIdentifierCharacters = function (a) {
	return {$: 'ExpectedIdentifierCharacters', a: a};
};
var $author$project$Calculus$Parser$ExpectedIdentifierToStartWithNonDigit = function (a) {
	return {$: 'ExpectedIdentifierToStartWithNonDigit', a: a};
};
var $elm$core$Basics$not = _Basics_not;
var $author$project$Calculus$Parser$identifier = function () {
	var isPrintableChar = function (c) {
		var charCode = $elm$core$Char$toCode(c);
		return (32 <= charCode) && (charCode <= 126);
	};
	var excludedChars = A2(
		$elm$core$Set$union,
		$elm$core$Set$fromList(
			_List_fromArray(
				[
					_Utils_chr('$'),
					_Utils_chr('.'),
					_Utils_chr('('),
					_Utils_chr(')'),
					_Utils_chr('{'),
					_Utils_chr('}'),
					_Utils_chr('\''),
					_Utils_chr('\"'),
					_Utils_chr('/'),
					_Utils_chr('%'),
					_Utils_chr('='),
					_Utils_chr(';'),
					_Utils_chr('['),
					_Utils_chr(']')
				])),
		$author$project$Calculus$Parser$whitespaceChars);
	var isExcludedChar = function (c) {
		return A2($elm$core$Set$member, c, excludedChars);
	};
	var isInnerVarChar = function (c) {
		return (!isExcludedChar(c)) && isPrintableChar(c);
	};
	return A2(
		$author$project$Lib$Parser$Parser$o,
		$author$project$Calculus$Parser$spaces,
		A2(
			$author$project$Lib$Parser$Parser$andThen,
			function (c) {
				return $elm$core$Char$isDigit(c) ? $author$project$Lib$Parser$Parser$fail(
					$author$project$Calculus$Parser$ExpectedIdentifierToStartWithNonDigit(
						{failedAtChar: c})) : A2(
					$author$project$Lib$Parser$Parser$map,
					function (str) {
						return A2($elm$core$String$cons, c, str);
					},
					$author$project$Lib$Parser$Parser$allWhileTrue(isInnerVarChar));
			},
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedIdentifierCharacters,
				$author$project$Lib$Parser$Parser$anyCharSatisfying(isInnerVarChar))));
}();
var $author$project$Calculus$Parser$functorVarIntro = $author$project$Calculus$Parser$identifier;
var $author$project$Calculus$Parser$ExpectedGapAfterInterfaceKeyword = function (a) {
	return {$: 'ExpectedGapAfterInterfaceKeyword', a: a};
};
var $author$project$Calculus$Parser$ExpectedInterfaceKeyword = function (a) {
	return {$: 'ExpectedInterfaceKeyword', a: a};
};
var $author$project$Lib$Parser$Parser$identity = $author$project$Lib$Parser$Parser$return(
	function (x) {
		return x;
	});
var $author$project$Calculus$Base$AssumeModule = F2(
	function (a, b) {
		return {$: 'AssumeModule', a: a, b: b};
	});
var $author$project$Calculus$Base$AssumeTerm = F2(
	function (a, b) {
		return {$: 'AssumeTerm', a: a, b: b};
	});
var $author$project$Calculus$Parser$ExpectedInterfaceAssumption = function (a) {
	return {$: 'ExpectedInterfaceAssumption', a: a};
};
var $author$project$Calculus$Parser$ExpectedInterfaceLiteralInInterfaceAssumption = function (a) {
	return {$: 'ExpectedInterfaceLiteralInInterfaceAssumption', a: a};
};
var $author$project$Calculus$Parser$ExpectedInterfaceOpenBraces = function (a) {
	return {$: 'ExpectedInterfaceOpenBraces', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleIdentifierInInterfaceAssumption = function (a) {
	return {$: 'ExpectedModuleIdentifierInInterfaceAssumption', a: a};
};
var $author$project$Calculus$Parser$ExpectedSemicolonAfterInterfaceAssumption = function (a) {
	return {$: 'ExpectedSemicolonAfterInterfaceAssumption', a: a};
};
var $author$project$Calculus$Parser$ExpectedTermIdentifierInInterfaceAssumption = function (a) {
	return {$: 'ExpectedTermIdentifierInInterfaceAssumption', a: a};
};
var $author$project$Calculus$Parser$ExpectedTypeInInterfaceAssumption = function (a) {
	return {$: 'ExpectedTypeInInterfaceAssumption', a: a};
};
var $author$project$Calculus$Parser$ExpectedTypingSymbolInInterfaceAssumption = function (a) {
	return {$: 'ExpectedTypingSymbolInInterfaceAssumption', a: a};
};
var $author$project$Calculus$Base$Interface = function (assumptions) {
	return {assumptions: assumptions};
};
var $author$project$Calculus$Parser$AssumeFunctor = {$: 'AssumeFunctor'};
var $author$project$Calculus$Parser$AssumeModule = {$: 'AssumeModule'};
var $author$project$Calculus$Parser$AssumeTerm = {$: 'AssumeTerm'};
var $author$project$Calculus$Parser$AssumeType = {$: 'AssumeType'};
var $author$project$Calculus$Parser$ExpectedGapAfterInterfaceAssumptionKeyword = function (a) {
	return {$: 'ExpectedGapAfterInterfaceAssumptionKeyword', a: a};
};
var $author$project$Calculus$Parser$ExpectedInterfaceAssumptionKeyword = function (a) {
	return {$: 'ExpectedInterfaceAssumptionKeyword', a: a};
};
var $author$project$Calculus$Parser$interfaceAssumptionKeyword = A2(
	$author$project$Lib$Parser$Parser$o,
	$author$project$Calculus$Parser$spaces,
	A2(
		$author$project$Lib$Parser$Parser$o,
		A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedGapAfterInterfaceAssumptionKeyword, $author$project$Calculus$Parser$keywordGap),
		A2(
			$author$project$Lib$Parser$Parser$mapError,
			$author$project$Calculus$Parser$ExpectedInterfaceAssumptionKeyword,
			$author$project$Lib$Parser$Parser$stringIn(
				_List_fromArray(
					[
						_Utils_Tuple2('assume-term', $author$project$Calculus$Parser$AssumeTerm),
						_Utils_Tuple2('assume-type', $author$project$Calculus$Parser$AssumeType),
						_Utils_Tuple2('assume-module', $author$project$Calculus$Parser$AssumeModule),
						_Utils_Tuple2('assume-functor', $author$project$Calculus$Parser$AssumeFunctor)
					])))));
var $author$project$Calculus$Parser$moduleVarIntro = $author$project$Calculus$Parser$identifier;
var $author$project$Lib$Parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $author$project$Lib$Parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $author$project$Lib$Parser$Parser$loop = F2(
	function (x0, f) {
		return $author$project$Lib$Parser$Parser$make(
			F2(
				function (r, s0) {
					var _v0 = A3(
						$author$project$Lib$Parser$Parser$run,
						f(x0),
						r,
						s0);
					if (_v0.$ === 'Ok') {
						var _v1 = _v0.a;
						var s1 = _v1.a;
						var loopValue = _v1.b;
						if (loopValue.$ === 'Done') {
							var x1 = loopValue.a;
							return $elm$core$Result$Ok(
								_Utils_Tuple2(s1, x1));
						} else {
							var x1 = loopValue.a;
							return A3(
								$author$project$Lib$Parser$Parser$run,
								A2($author$project$Lib$Parser$Parser$loop, x1, f),
								r,
								s1);
						}
					} else {
						var error = _v0.a;
						return $elm$core$Result$Err(error);
					}
				}));
	});
var $author$project$Lib$Parser$Parser$repeatUntil = F2(
	function (toBeRepeatedParser, conditionParser) {
		return A2(
			$author$project$Lib$Parser$Parser$loop,
			_List_Nil,
			function (reversed_xs) {
				return A3(
					$author$project$Lib$Parser$Parser$ifSuccessIfError,
					function (_v0) {
						return $author$project$Lib$Parser$Parser$return(
							$author$project$Lib$Parser$Parser$Done(
								$elm$core$List$reverse(reversed_xs)));
					},
					function (_v1) {
						return A2(
							$author$project$Lib$Parser$Parser$map,
							function (x) {
								return $author$project$Lib$Parser$Parser$Loop(
									A2($elm$core$List$cons, x, reversed_xs));
							},
							toBeRepeatedParser);
					},
					conditionParser);
			});
	});
var $author$project$Calculus$Parser$semicolon = $author$project$Calculus$Parser$symbol(';');
var $elm$core$Debug$todo = _Debug_todo;
var $author$project$Calculus$Base$Arrow = F2(
	function (a, b) {
		return {$: 'Arrow', a: a, b: b};
	});
var $author$project$Calculus$Base$ConstBool = {$: 'ConstBool'};
var $author$project$Calculus$Base$ConstNat = {$: 'ConstNat'};
var $author$project$Calculus$Parser$ExpectedTypeOperator = function (a) {
	return {$: 'ExpectedTypeOperator', a: a};
};
var $author$project$Calculus$Base$Frozen = function (a) {
	return {$: 'Frozen', a: a};
};
var $author$project$Calculus$Base$List = function (a) {
	return {$: 'List', a: a};
};
var $author$project$Calculus$Base$Product = F2(
	function (a, b) {
		return {$: 'Product', a: a, b: b};
	});
var $author$project$Calculus$Base$Sum = F2(
	function (a, b) {
		return {$: 'Sum', a: a, b: b};
	});
var $author$project$Calculus$Base$TypeVarUse = function (a) {
	return {$: 'TypeVarUse', a: a};
};
var $author$project$Calculus$Parser$ExpectedTypeParens = function (a) {
	return {$: 'ExpectedTypeParens', a: a};
};
var $toastal$either$Either$Left = function (a) {
	return {$: 'Left', a: a};
};
var $toastal$either$Either$Right = function (a) {
	return {$: 'Right', a: a};
};
var $author$project$Calculus$Parser$ExpectedOpenParens = function (a) {
	return {$: 'ExpectedOpenParens', a: a};
};
var $author$project$Lib$Parser$Parser$DoneAndRevertChar = function (a) {
	return {$: 'DoneAndRevertChar', a: a};
};
var $author$project$Lib$Parser$Parser$NextChar = function (a) {
	return {$: 'NextChar', a: a};
};
var $author$project$Lib$Parser$Error$ExpectedNonEmptyInput = {};
var $author$project$Lib$Parser$State$consumeAnyChar = function (s) {
	var _v0 = $elm$core$String$uncons(s.input);
	if (_v0.$ === 'Just') {
		var _v1 = _v0.a;
		var c = _v1.a;
		var inputRemaining = _v1.b;
		return $elm$core$Result$Ok(
			_Utils_Tuple2(
				A2(
					$author$project$Lib$Parser$State$moveByCharacter,
					c,
					A2($author$project$Lib$Parser$State$setInput, inputRemaining, s)),
				c));
	} else {
		return $elm$core$Result$Err(
			A2($author$project$Lib$Parser$State$throw, $author$project$Lib$Parser$Error$ExpectedNonEmptyInput, s));
	}
};
var $author$project$Lib$Parser$Parser$loopChars = F3(
	function (init_x, onChar, onEmptyInput) {
		return $author$project$Lib$Parser$Parser$make(
			F2(
				function (r, init_s) {
					var loop0 = F2(
						function (s0, x0) {
							loop0:
							while (true) {
								var _v0 = $author$project$Lib$Parser$State$consumeAnyChar(s0);
								if (_v0.$ === 'Ok') {
									var _v1 = _v0.a;
									var s1 = _v1.a;
									var c = _v1.b;
									var _v2 = A2(onChar, c, x0);
									switch (_v2.$) {
										case 'DoneAndConsumeChar':
											var x1 = _v2.a;
											return $elm$core$Result$Ok(
												_Utils_Tuple2(s1, x1));
										case 'DoneAndRevertChar':
											var x1 = _v2.a;
											return $elm$core$Result$Ok(
												_Utils_Tuple2(s0, x1));
										case 'NextChar':
											var x1 = _v2.a;
											var $temp$s0 = s1,
												$temp$x0 = x1;
											s0 = $temp$s0;
											x0 = $temp$x0;
											continue loop0;
										default:
											var error = _v2.a;
											return $elm$core$Result$Err(
												A2(
													$author$project$Lib$Parser$Error$make,
													$author$project$Lib$Parser$State$getPosition(s1),
													error));
									}
								} else {
									var emptyInputError = _v0.a;
									var _v3 = onEmptyInput(x0);
									if (_v3.$ === 'Ok') {
										var x1 = _v3.a;
										return $elm$core$Result$Ok(
											_Utils_Tuple2(s0, x1));
									} else {
										var error = _v3.a;
										return $elm$core$Result$Err(
											A2(
												$author$project$Lib$Parser$Error$make,
												$author$project$Lib$Parser$State$getPosition(s0),
												error));
									}
								}
							}
						});
					return A2(loop0, init_s, init_x);
				}));
	});
var $author$project$Calculus$Parser$zeroOrMoreOpenParens = A3(
	$author$project$Lib$Parser$Parser$loopChars,
	0,
	F2(
		function (c, numOfOpenParens) {
			return $author$project$Calculus$Parser$isWhitespaceChar(c) ? $author$project$Lib$Parser$Parser$NextChar(numOfOpenParens) : (_Utils_eq(
				c,
				_Utils_chr('(')) ? $author$project$Lib$Parser$Parser$NextChar(numOfOpenParens + 1) : $author$project$Lib$Parser$Parser$DoneAndRevertChar(numOfOpenParens));
		}),
	$elm$core$Result$Ok);
var $author$project$Calculus$Parser$atleastOneOpenParens = function () {
	var handleFirstOpenParen = function (_v0) {
		var expected = _v0.expected;
		var consumedSuccessfully = _v0.consumedSuccessfully;
		var failedAtChar = _v0.failedAtChar;
		return $author$project$Calculus$Parser$ExpectedOpenParens(
			{failedAtChar: failedAtChar});
	};
	return A2(
		$author$project$Lib$Parser$Parser$map,
		function (numOfOpenParens) {
			return numOfOpenParens + 1;
		},
		A2(
			$author$project$Lib$Parser$Parser$ooo,
			$author$project$Calculus$Parser$zeroOrMoreOpenParens,
			A2(
				$author$project$Lib$Parser$Parser$o,
				$author$project$Calculus$Parser$spaces,
				A2(
					$author$project$Lib$Parser$Parser$o,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						handleFirstOpenParen,
						$author$project$Lib$Parser$Parser$string('(')),
					$author$project$Lib$Parser$Parser$identity))));
}();
var $author$project$Calculus$Parser$ExpectedClosingParens = function (a) {
	return {$: 'ExpectedClosingParens', a: a};
};
var $author$project$Lib$Parser$Parser$Fail = function (a) {
	return {$: 'Fail', a: a};
};
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$Calculus$Parser$closingParens = function (numOfExpectedClosingParens) {
	var handleFirstClosingParen = function (_v0) {
		var expected = _v0.expected;
		var consumedSuccessfully = _v0.consumedSuccessfully;
		var failedAtChar = _v0.failedAtChar;
		return $author$project$Calculus$Parser$ExpectedClosingParens(
			{failedAtChar: failedAtChar});
	};
	return (!numOfExpectedClosingParens) ? $author$project$Calculus$Parser$spaces : A2(
		$author$project$Lib$Parser$Parser$o,
		$author$project$Calculus$Parser$spaces,
		A2(
			$author$project$Lib$Parser$Parser$o,
			A3(
				$author$project$Lib$Parser$Parser$loopChars,
				1,
				F2(
					function (c, numOfClosingParens) {
						return (_Utils_cmp(numOfClosingParens, numOfExpectedClosingParens) > -1) ? $author$project$Lib$Parser$Parser$DoneAndRevertChar(numOfExpectedClosingParens) : ($author$project$Calculus$Parser$isWhitespaceChar(c) ? $author$project$Lib$Parser$Parser$NextChar(numOfClosingParens) : (_Utils_eq(
							c,
							_Utils_chr(')')) ? $author$project$Lib$Parser$Parser$NextChar(numOfClosingParens + 1) : $author$project$Lib$Parser$Parser$Fail(
							$author$project$Calculus$Parser$ExpectedClosingParens(
								{
									failedAtChar: $elm$core$Maybe$Just(c)
								}))));
					}),
				function (numOfClosingParens) {
					return (_Utils_cmp(numOfClosingParens, numOfExpectedClosingParens) > -1) ? $elm$core$Result$Ok(numOfClosingParens) : $elm$core$Result$Err(
						$author$project$Calculus$Parser$ExpectedClosingParens(
							{failedAtChar: $elm$core$Maybe$Nothing}));
				}),
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				handleFirstClosingParen,
				$author$project$Lib$Parser$Parser$string(')'))));
};
var $author$project$Calculus$Parser$mandatoryParens = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (numOfOpenParens) {
			return A2(
				$author$project$Lib$Parser$Parser$o,
				A2(
					$author$project$Lib$Parser$Parser$mapError,
					$toastal$either$Either$Left,
					$author$project$Calculus$Parser$closingParens(numOfOpenParens)),
				A2($author$project$Lib$Parser$Parser$mapError, $toastal$either$Either$Right, parser));
		},
		A2($author$project$Lib$Parser$Parser$mapError, $toastal$either$Either$Left, $author$project$Calculus$Parser$atleastOneOpenParens));
};
var $author$project$Calculus$Parser$mandatoryTypeTermParens = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$mapError,
		function (eitherMsg) {
			if (eitherMsg.$ === 'Left') {
				var msg = eitherMsg.a;
				return $author$project$Calculus$Parser$ExpectedTypeParens(msg);
			} else {
				var msg = eitherMsg.a;
				return msg;
			}
		},
		$author$project$Calculus$Parser$mandatoryParens(parser));
};
var $author$project$Calculus$Parser$optionalParens = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (numOfOpenParens) {
			return A2(
				$author$project$Lib$Parser$Parser$o,
				A2(
					$author$project$Lib$Parser$Parser$mapError,
					$toastal$either$Either$Left,
					$author$project$Calculus$Parser$closingParens(numOfOpenParens)),
				A2($author$project$Lib$Parser$Parser$mapError, $toastal$either$Either$Right, parser));
		},
		$author$project$Calculus$Parser$zeroOrMoreOpenParens);
};
var $author$project$Calculus$Parser$optionalTypeTermParens = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$mapError,
		function (eitherMsg) {
			if (eitherMsg.$ === 'Left') {
				var msg = eitherMsg.a;
				return $author$project$Calculus$Parser$ExpectedTypeParens(msg);
			} else {
				var msg = eitherMsg.a;
				return msg;
			}
		},
		$author$project$Calculus$Parser$optionalParens(parser));
};
var $author$project$Calculus$Parser$Arrow = {$: 'Arrow'};
var $author$project$Calculus$Parser$ConstBool = {$: 'ConstBool'};
var $author$project$Calculus$Parser$ConstNat = {$: 'ConstNat'};
var $author$project$Calculus$Parser$ExpectedOperatorKeyword = function (a) {
	return {$: 'ExpectedOperatorKeyword', a: a};
};
var $author$project$Calculus$Parser$Frozen = {$: 'Frozen'};
var $author$project$Calculus$Parser$List = {$: 'List'};
var $author$project$Calculus$Parser$Product = {$: 'Product'};
var $author$project$Calculus$Parser$Sum = {$: 'Sum'};
var $author$project$Calculus$Parser$TypeVarUse = {$: 'TypeVarUse'};
var $author$project$Calculus$Parser$ExpectedGapAfterOperatorKeyword = function (a) {
	return {$: 'ExpectedGapAfterOperatorKeyword', a: a};
};
var $author$project$Calculus$Parser$handleKeywordGapError = F2(
	function (operatorKeyword0, gapError) {
		return $author$project$Calculus$Parser$ExpectedGapAfterOperatorKeyword(
			{failedAtChar: gapError.failedAtChar, operatorKeyword: operatorKeyword0});
	});
var $author$project$Calculus$Parser$typeOperatorKeyword = A2(
	$author$project$Lib$Parser$Parser$o,
	$author$project$Calculus$Parser$spaces,
	A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (typeOperatorKeyword0) {
			if (typeOperatorKeyword0.$ === 'TypeVarUse') {
				return $author$project$Lib$Parser$Parser$return($author$project$Calculus$Parser$TypeVarUse);
			} else {
				return A2(
					$author$project$Lib$Parser$Parser$o,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						$author$project$Calculus$Parser$handleKeywordGapError(typeOperatorKeyword0),
						$author$project$Calculus$Parser$keywordGap),
					$author$project$Lib$Parser$Parser$return(typeOperatorKeyword0));
			}
		},
		A2(
			$author$project$Lib$Parser$Parser$mapError,
			$author$project$Calculus$Parser$ExpectedOperatorKeyword,
			$author$project$Lib$Parser$Parser$stringIn(
				_List_fromArray(
					[
						_Utils_Tuple2('$', $author$project$Calculus$Parser$TypeVarUse),
						_Utils_Tuple2('Product', $author$project$Calculus$Parser$Product),
						_Utils_Tuple2('Sum', $author$project$Calculus$Parser$Sum),
						_Utils_Tuple2('Arrow', $author$project$Calculus$Parser$Arrow),
						_Utils_Tuple2('Bool', $author$project$Calculus$Parser$ConstBool),
						_Utils_Tuple2('Nat', $author$project$Calculus$Parser$ConstNat),
						_Utils_Tuple2('List', $author$project$Calculus$Parser$List),
						_Utils_Tuple2('Frozen', $author$project$Calculus$Parser$Frozen)
					])))));
var $author$project$Calculus$Parser$ExpectedTypeIdentifier = function (a) {
	return {$: 'ExpectedTypeIdentifier', a: a};
};
var $author$project$Calculus$Parser$typeVarIntro = A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTypeIdentifier, $author$project$Calculus$Parser$identifier);
function $author$project$Calculus$Parser$cyclic$typeTerm() {
	var operator2 = function (f) {
		return $author$project$Calculus$Parser$mandatoryTypeTermParens(
			A2(
				$author$project$Lib$Parser$Parser$ooo,
				$author$project$Calculus$Parser$cyclic$typeTerm(),
				A2(
					$author$project$Lib$Parser$Parser$ooo,
					$author$project$Calculus$Parser$cyclic$typeTerm(),
					$author$project$Lib$Parser$Parser$return(f))));
	};
	var operator1 = function (f) {
		return $author$project$Calculus$Parser$mandatoryTypeTermParens(
			A2(
				$author$project$Lib$Parser$Parser$ooo,
				$author$project$Calculus$Parser$cyclic$typeTerm(),
				$author$project$Lib$Parser$Parser$return(f)));
	};
	var constant = function (c) {
		return A2(
			$author$project$Lib$Parser$Parser$map,
			function (_v1) {
				return c;
			},
			$author$project$Calculus$Parser$optionalTypeTermParens($author$project$Calculus$Parser$emptySequence));
	};
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (typeOperatorKeyword0) {
			switch (typeOperatorKeyword0.$) {
				case 'TypeVarUse':
					return A2($author$project$Lib$Parser$Parser$map, $author$project$Calculus$Base$TypeVarUse, $author$project$Calculus$Parser$typeVarIntro);
				case 'Product':
					return operator2($author$project$Calculus$Base$Product);
				case 'Sum':
					return operator2($author$project$Calculus$Base$Sum);
				case 'Arrow':
					return operator2($author$project$Calculus$Base$Arrow);
				case 'ConstBool':
					return constant($author$project$Calculus$Base$ConstBool);
				case 'ConstNat':
					return constant($author$project$Calculus$Base$ConstNat);
				case 'List':
					return operator1($author$project$Calculus$Base$List);
				default:
					return operator1($author$project$Calculus$Base$Frozen);
			}
		},
		A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTypeOperator, $author$project$Calculus$Parser$typeOperatorKeyword));
}
try {
	var $author$project$Calculus$Parser$typeTerm = $author$project$Calculus$Parser$cyclic$typeTerm();
	$author$project$Calculus$Parser$cyclic$typeTerm = function () {
		return $author$project$Calculus$Parser$typeTerm;
	};
} catch ($) {
	throw 'Some top-level definitions from `Calculus.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    typeTerm\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Calculus$Parser$varIntro = $author$project$Calculus$Parser$identifier;
function $author$project$Calculus$Parser$cyclic$interfaceLiteral() {
	return A2(
		$author$project$Lib$Parser$Parser$ooo,
		A2(
			$author$project$Lib$Parser$Parser$repeatUntil,
			A2(
				$author$project$Lib$Parser$Parser$o,
				A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedSemicolonAfterInterfaceAssumption, $author$project$Calculus$Parser$semicolon),
				A2(
					$author$project$Lib$Parser$Parser$mapError,
					$author$project$Calculus$Parser$ExpectedInterfaceAssumption,
					$author$project$Calculus$Parser$cyclic$interfaceAssumption())),
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedModuleClosingBraces,
				$author$project$Calculus$Parser$symbol('}'))),
		A2(
			$author$project$Lib$Parser$Parser$o,
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedInterfaceOpenBraces,
				$author$project$Calculus$Parser$symbol('{')),
			$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$Interface)));
}
function $author$project$Calculus$Parser$cyclic$interfaceAssumption() {
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (keyword0) {
			switch (keyword0.$) {
				case 'AssumeTerm':
					return A2(
						$author$project$Lib$Parser$Parser$ooo,
						A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTypeInInterfaceAssumption, $author$project$Calculus$Parser$typeTerm),
						A2(
							$author$project$Lib$Parser$Parser$o,
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								$author$project$Calculus$Parser$ExpectedTypingSymbolInInterfaceAssumption,
								$author$project$Calculus$Parser$symbol(':')),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifierInInterfaceAssumption, $author$project$Calculus$Parser$varIntro),
								$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$AssumeTerm))));
				case 'AssumeType':
					return _Debug_todo(
						'Calculus.Parser',
						{
							start: {line: 1766, column: 25},
							end: {line: 1766, column: 35}
						})('');
				case 'AssumeModule':
					return A2(
						$author$project$Lib$Parser$Parser$ooo,
						A2(
							$author$project$Lib$Parser$Parser$mapError,
							$author$project$Calculus$Parser$ExpectedInterfaceLiteralInInterfaceAssumption,
							$author$project$Calculus$Parser$cyclic$interfaceLiteral()),
						A2(
							$author$project$Lib$Parser$Parser$o,
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								$author$project$Calculus$Parser$ExpectedTypingSymbolInInterfaceAssumption,
								$author$project$Calculus$Parser$symbol(':')),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedModuleIdentifierInInterfaceAssumption, $author$project$Calculus$Parser$moduleVarIntro),
								$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$AssumeModule))));
				default:
					return _Debug_todo(
						'Calculus.Parser',
						{
							start: {line: 1775, column: 25},
							end: {line: 1775, column: 35}
						})('');
			}
		},
		$author$project$Calculus$Parser$interfaceAssumptionKeyword);
}
try {
	var $author$project$Calculus$Parser$interfaceLiteral = $author$project$Calculus$Parser$cyclic$interfaceLiteral();
	$author$project$Calculus$Parser$cyclic$interfaceLiteral = function () {
		return $author$project$Calculus$Parser$interfaceLiteral;
	};
	var $author$project$Calculus$Parser$interfaceAssumption = $author$project$Calculus$Parser$cyclic$interfaceAssumption();
	$author$project$Calculus$Parser$cyclic$interfaceAssumption = function () {
		return $author$project$Calculus$Parser$interfaceAssumption;
	};
} catch ($) {
	throw 'Some top-level definitions from `Calculus.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    interfaceLiteral\n  │     ↓\n  │    interfaceAssumption\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Calculus$Parser$keyword = function (string0) {
	return A2(
		$author$project$Lib$Parser$Parser$o,
		A2($author$project$Lib$Parser$Parser$mapError, $toastal$either$Either$Right, $author$project$Calculus$Parser$keywordGap),
		A2(
			$author$project$Lib$Parser$Parser$o,
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$toastal$either$Either$Left,
				$author$project$Lib$Parser$Parser$string(string0)),
			$author$project$Lib$Parser$Parser$unit));
};
var $author$project$Calculus$Parser$interface = function () {
	var handleKeyword = function (msg) {
		if (msg.$ === 'Left') {
			var expectedStringErr = msg.a;
			return $author$project$Calculus$Parser$ExpectedInterfaceKeyword(expectedStringErr);
		} else {
			var gapErr = msg.a;
			return $author$project$Calculus$Parser$ExpectedGapAfterInterfaceKeyword(gapErr);
		}
	};
	return A2(
		$author$project$Lib$Parser$Parser$ooo,
		$author$project$Calculus$Parser$interfaceLiteral,
		A2(
			$author$project$Lib$Parser$Parser$o,
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				handleKeyword,
				$author$project$Calculus$Parser$keyword('interface')),
			$author$project$Lib$Parser$Parser$identity));
}();
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Calculus$Parser$functorParameter = A2(
	$author$project$Lib$Parser$Parser$ooo,
	A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedInterfaceInFunctorParameter, $author$project$Calculus$Parser$interface),
	A2(
		$author$project$Lib$Parser$Parser$o,
		A2(
			$author$project$Lib$Parser$Parser$mapError,
			$author$project$Calculus$Parser$ExpectedTypingSymbolInFunctorParameter,
			$author$project$Calculus$Parser$symbol(':')),
		A2(
			$author$project$Lib$Parser$Parser$mapError,
			$author$project$Calculus$Parser$ExpectedFunctorIdentifierInFunctorParameter,
			A2(
				$author$project$Lib$Parser$Parser$ooo,
				$author$project$Calculus$Parser$functorVarIntro,
				$author$project$Lib$Parser$Parser$return($elm$core$Tuple$pair)))));
var $author$project$Calculus$Base$intToNatTerm = function (n) {
	return (!n) ? $author$project$Calculus$Base$ConstZero : $author$project$Calculus$Base$Succ(
		$author$project$Calculus$Base$intToNatTerm(n - 1));
};
var $author$project$Calculus$Parser$ExpectedParens = function (a) {
	return {$: 'ExpectedParens', a: a};
};
var $author$project$Calculus$Parser$mandatoryTermParens = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$mapError,
		function (eitherMsg) {
			if (eitherMsg.$ === 'Left') {
				var msg = eitherMsg.a;
				return $author$project$Calculus$Parser$ExpectedParens(msg);
			} else {
				var msg = eitherMsg.a;
				return msg;
			}
		},
		$author$project$Calculus$Parser$mandatoryParens(parser));
};
var $author$project$Calculus$Parser$ExpectedGapAfterModuleLetBindingKeyword = function (a) {
	return {$: 'ExpectedGapAfterModuleLetBindingKeyword', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleLetBindingKeyword = function (a) {
	return {$: 'ExpectedModuleLetBindingKeyword', a: a};
};
var $author$project$Calculus$Parser$LetFunctor = {$: 'LetFunctor'};
var $author$project$Calculus$Parser$LetModule = {$: 'LetModule'};
var $author$project$Calculus$Parser$LetTerm = {$: 'LetTerm'};
var $author$project$Calculus$Parser$LetType = {$: 'LetType'};
var $author$project$Calculus$Parser$moduleLetBindingKeyword = A2(
	$author$project$Lib$Parser$Parser$o,
	$author$project$Calculus$Parser$spaces,
	A2(
		$author$project$Lib$Parser$Parser$o,
		A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedGapAfterModuleLetBindingKeyword, $author$project$Calculus$Parser$keywordGap),
		A2(
			$author$project$Lib$Parser$Parser$mapError,
			$author$project$Calculus$Parser$ExpectedModuleLetBindingKeyword,
			$author$project$Lib$Parser$Parser$stringIn(
				_List_fromArray(
					[
						_Utils_Tuple2('let-term', $author$project$Calculus$Parser$LetTerm),
						_Utils_Tuple2('let-type', $author$project$Calculus$Parser$LetType),
						_Utils_Tuple2('let-module', $author$project$Calculus$Parser$LetModule),
						_Utils_Tuple2('let-functor', $author$project$Calculus$Parser$LetFunctor)
					])))));
var $author$project$Calculus$Parser$ExpectedGapAfterModuleOperator = function (a) {
	return {$: 'ExpectedGapAfterModuleOperator', a: a};
};
var $author$project$Calculus$Parser$ExpectedModuleOperator = function (a) {
	return {$: 'ExpectedModuleOperator', a: a};
};
var $author$project$Calculus$Parser$FunctorApplication = {$: 'FunctorApplication'};
var $author$project$Calculus$Parser$ModuleLiteralTerm = {$: 'ModuleLiteralTerm'};
var $author$project$Calculus$Parser$ModuleVarUse = {$: 'ModuleVarUse'};
var $author$project$Calculus$Parser$moduleOperatorKeyword = function () {
	var handleGap = F2(
		function (keyword0, gapError) {
			return $author$project$Calculus$Parser$ExpectedGapAfterModuleOperator(
				{failedAtChar: gapError.failedAtChar, operatorKeyword: keyword0});
		});
	return A2(
		$author$project$Lib$Parser$Parser$o,
		$author$project$Calculus$Parser$spaces,
		A2(
			$author$project$Lib$Parser$Parser$andThen,
			function (keyword0) {
				switch (keyword0.$) {
					case 'ModuleVarUse':
						return $author$project$Lib$Parser$Parser$return($author$project$Calculus$Parser$ModuleVarUse);
					case 'FunctorApplication':
						return $author$project$Lib$Parser$Parser$return($author$project$Calculus$Parser$FunctorApplication);
					default:
						return A2(
							$author$project$Lib$Parser$Parser$o,
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								handleGap(keyword0),
								$author$project$Calculus$Parser$keywordGap),
							$author$project$Lib$Parser$Parser$return(keyword0));
				}
			},
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedModuleOperator,
				$author$project$Lib$Parser$Parser$stringIn(
					_List_fromArray(
						[
							_Utils_Tuple2('$', $author$project$Calculus$Parser$ModuleVarUse),
							_Utils_Tuple2('module', $author$project$Calculus$Parser$ModuleLiteralTerm),
							_Utils_Tuple2('[', $author$project$Calculus$Parser$FunctorApplication)
						])))));
}();
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$pow = _Basics_pow;
var $author$project$Lib$Parser$Parser$second = F2(
	function (parser0, parser1) {
		return A2(
			$author$project$Lib$Parser$Parser$map,
			function (_v0) {
				var b = _v0.b;
				return b;
			},
			A2($author$project$Lib$Parser$Parser$pair, parser0, parser1));
	});
var $author$project$Lib$Parser$Parser$naturalNumber = function () {
	var charToInt = function (c) {
		return $elm$core$Char$toCode(c) - 48;
	};
	var digitStringToInt = function (str) {
		return A3(
			$elm$core$String$foldr,
			F2(
				function (c, _v0) {
					var x = _v0.a;
					var exponent = _v0.b;
					return _Utils_Tuple2(
						(A2($elm$core$Basics$pow, 10, exponent) * charToInt(c)) + x,
						exponent + 1);
				}),
			_Utils_Tuple2(0, 0),
			str).a;
	};
	return A2(
		$author$project$Lib$Parser$Parser$map,
		digitStringToInt,
		A2(
			$author$project$Lib$Parser$Parser$andThen,
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('0')) ? A2(
					$author$project$Lib$Parser$Parser$second,
					$author$project$Lib$Parser$Parser$allWhileTrue(
						function (d) {
							return _Utils_eq(
								d,
								_Utils_chr('0'));
						}),
					$author$project$Lib$Parser$Parser$allWhileTrue($elm$core$Char$isDigit)) : A2(
					$author$project$Lib$Parser$Parser$map,
					function (digits) {
						return _Utils_ap(
							digits,
							$elm$core$String$fromChar(c));
					},
					$author$project$Lib$Parser$Parser$allWhileTrue($elm$core$Char$isDigit));
			},
			$author$project$Lib$Parser$Parser$anyCharSatisfying($elm$core$Char$isDigit)));
}();
var $author$project$Calculus$Parser$Abstraction = {$: 'Abstraction'};
var $author$project$Calculus$Parser$Application = {$: 'Application'};
var $author$project$Calculus$Parser$ConstZero = {$: 'ConstZero'};
var $author$project$Calculus$Parser$Delay = {$: 'Delay'};
var $author$project$Calculus$Parser$FoldList = {$: 'FoldList'};
var $author$project$Calculus$Parser$Force = {$: 'Force'};
var $author$project$Calculus$Parser$Let = {$: 'Let'};
var $author$project$Calculus$Parser$LetBe = {$: 'LetBe'};
var $author$project$Calculus$Parser$MatchBool = {$: 'MatchBool'};
var $author$project$Calculus$Parser$MatchPair = {$: 'MatchPair'};
var $author$project$Calculus$Parser$MatchSum = {$: 'MatchSum'};
var $author$project$Calculus$Parser$ModuleAccess = {$: 'ModuleAccess'};
var $author$project$Calculus$Parser$NatLiteral = {$: 'NatLiteral'};
var $author$project$Calculus$Parser$VarUse = {$: 'VarUse'};
var $author$project$Calculus$Parser$operatorKeyword = A2(
	$author$project$Lib$Parser$Parser$o,
	$author$project$Calculus$Parser$spaces,
	A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (operatorKeyword0) {
			switch (operatorKeyword0.$) {
				case 'VarUse':
					return $author$project$Lib$Parser$Parser$return($author$project$Calculus$Parser$VarUse);
				case 'NatLiteral':
					return $author$project$Lib$Parser$Parser$return($author$project$Calculus$Parser$NatLiteral);
				case 'Application':
					return $author$project$Lib$Parser$Parser$return($author$project$Calculus$Parser$Application);
				default:
					return A2(
						$author$project$Lib$Parser$Parser$o,
						A2(
							$author$project$Lib$Parser$Parser$mapError,
							$author$project$Calculus$Parser$handleKeywordGapError(operatorKeyword0),
							$author$project$Calculus$Parser$keywordGap),
						$author$project$Lib$Parser$Parser$return(operatorKeyword0));
			}
		},
		A2(
			$author$project$Lib$Parser$Parser$mapError,
			$author$project$Calculus$Parser$ExpectedOperatorKeyword,
			$author$project$Lib$Parser$Parser$stringIn(
				_List_fromArray(
					[
						_Utils_Tuple2('$', $author$project$Calculus$Parser$VarUse),
						_Utils_Tuple2('true', $author$project$Calculus$Parser$ConstTrue),
						_Utils_Tuple2('false', $author$project$Calculus$Parser$ConstFalse),
						_Utils_Tuple2('match-bool', $author$project$Calculus$Parser$MatchBool),
						_Utils_Tuple2('pair', $author$project$Calculus$Parser$Pair),
						_Utils_Tuple2('match-pair', $author$project$Calculus$Parser$MatchPair),
						_Utils_Tuple2('left', $author$project$Calculus$Parser$Left),
						_Utils_Tuple2('right', $author$project$Calculus$Parser$Right),
						_Utils_Tuple2('match-sum', $author$project$Calculus$Parser$MatchSum),
						_Utils_Tuple2('[', $author$project$Calculus$Parser$Application),
						_Utils_Tuple2('\\', $author$project$Calculus$Parser$Abstraction),
						_Utils_Tuple2('zero', $author$project$Calculus$Parser$ConstZero),
						_Utils_Tuple2('0', $author$project$Calculus$Parser$NatLiteral),
						_Utils_Tuple2('succ', $author$project$Calculus$Parser$Succ),
						_Utils_Tuple2('fold-nat', $author$project$Calculus$Parser$FoldNat),
						_Utils_Tuple2('empty', $author$project$Calculus$Parser$ConstEmpty),
						_Utils_Tuple2('cons', $author$project$Calculus$Parser$Cons),
						_Utils_Tuple2('fold-list', $author$project$Calculus$Parser$FoldList),
						_Utils_Tuple2('let-be', $author$project$Calculus$Parser$LetBe),
						_Utils_Tuple2('let', $author$project$Calculus$Parser$Let),
						_Utils_Tuple2('delay', $author$project$Calculus$Parser$Delay),
						_Utils_Tuple2('force', $author$project$Calculus$Parser$Force),
						_Utils_Tuple2('/', $author$project$Calculus$Parser$ModuleAccess)
					])))));
var $author$project$Calculus$Parser$optionalTermParens = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$mapError,
		function (eitherMsg) {
			if (eitherMsg.$ === 'Left') {
				var msg = eitherMsg.a;
				return $author$project$Calculus$Parser$ExpectedParens(msg);
			} else {
				var msg = eitherMsg.a;
				return msg;
			}
		},
		$author$project$Calculus$Parser$optionalParens(parser));
};
var $author$project$Lib$Parser$Parser$repeat = function (parser) {
	return A2(
		$author$project$Lib$Parser$Parser$loop,
		_List_Nil,
		function (reversed_xs) {
			return A3(
				$author$project$Lib$Parser$Parser$ifSuccessIfError,
				$author$project$Lib$Parser$Parser$return,
				function (error) {
					return $author$project$Lib$Parser$Parser$return(
						$author$project$Lib$Parser$Parser$Done(
							$elm$core$List$reverse(reversed_xs)));
				},
				A2(
					$author$project$Lib$Parser$Parser$map,
					function (x) {
						return $author$project$Lib$Parser$Parser$Loop(
							A2($elm$core$List$cons, x, reversed_xs));
					},
					parser));
		});
};
var $author$project$Calculus$Parser$ExpectedSemicolon = function (a) {
	return {$: 'ExpectedSemicolon', a: a};
};
var $author$project$Calculus$Parser$semicolonTerm = A2(
	$author$project$Lib$Parser$Parser$mapError,
	A2($elm$core$Basics$composeL, $author$project$Calculus$Parser$ExpectedBindingTerm, $author$project$Calculus$Parser$ExpectedSemicolon),
	$author$project$Calculus$Parser$semicolon);
function $author$project$Calculus$Parser$cyclic$functorLiteral() {
	return A2(
		$author$project$Lib$Parser$Parser$o,
		A2(
			$author$project$Lib$Parser$Parser$mapError,
			$author$project$Calculus$Parser$ExpectedFunctorLiteralClosingBraces,
			$author$project$Calculus$Parser$symbol('}')),
		A2(
			$author$project$Lib$Parser$Parser$ooo,
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedModuleTermInFunctorBody,
				$author$project$Calculus$Parser$cyclic$moduleTerm()),
			A2(
				$author$project$Lib$Parser$Parser$ooo,
				A2(
					$author$project$Lib$Parser$Parser$repeatUntil,
					$author$project$Calculus$Parser$functorParameter,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						$author$project$Calculus$Parser$ExpectedDotAfterFunctorParameters,
						$author$project$Calculus$Parser$symbol('.'))),
				A2(
					$author$project$Lib$Parser$Parser$o,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						$author$project$Calculus$Parser$ExpectedFunctorLiteralOpenBraces,
						$author$project$Calculus$Parser$symbol('{')),
					$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$FunctorLiteral)))));
}
function $author$project$Calculus$Parser$cyclic$functorTerm() {
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (keyword0) {
			if (keyword0.$ === 'FunctorVarUse') {
				return A2(
					$author$project$Lib$Parser$Parser$map,
					$author$project$Calculus$Base$FunctorVarUse,
					A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedFunctorIdentifier, $author$project$Calculus$Parser$functorVarIntro));
			} else {
				return A2(
					$author$project$Lib$Parser$Parser$map,
					$author$project$Calculus$Base$FunctorLiteralTerm,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						$author$project$Calculus$Parser$ExpectedFunctorLiteral,
						$author$project$Calculus$Parser$cyclic$functorLiteral()));
			}
		},
		$author$project$Calculus$Parser$functorOperatorKeyword);
}
function $author$project$Calculus$Parser$cyclic$moduleLiteral() {
	return A2(
		$author$project$Lib$Parser$Parser$ooo,
		A2(
			$author$project$Lib$Parser$Parser$repeatUntil,
			A2(
				$author$project$Lib$Parser$Parser$o,
				A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedSemicolonAfterModuleLetBinding, $author$project$Calculus$Parser$semicolon),
				A2(
					$author$project$Lib$Parser$Parser$mapError,
					$author$project$Calculus$Parser$ExpectedModuleLetBinding,
					$author$project$Calculus$Parser$cyclic$moduleLetBinding())),
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedModuleClosingBraces,
				$author$project$Calculus$Parser$symbol('}'))),
		A2(
			$author$project$Lib$Parser$Parser$o,
			A2(
				$author$project$Lib$Parser$Parser$mapError,
				$author$project$Calculus$Parser$ExpectedModuleOpenBraces,
				$author$project$Calculus$Parser$symbol('{')),
			$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$ModuleLiteral)));
}
function $author$project$Calculus$Parser$cyclic$moduleLetBinding() {
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (keyword0) {
			switch (keyword0.$) {
				case 'LetTerm':
					return A2(
						$author$project$Lib$Parser$Parser$ooo,
						A2(
							$author$project$Lib$Parser$Parser$mapError,
							$author$project$Calculus$Parser$ExpectedTermInModuleLetBinding,
							$author$project$Calculus$Parser$cyclic$term()),
						A2(
							$author$project$Lib$Parser$Parser$o,
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								$author$project$Calculus$Parser$ExpectedEqualsInModuleLetBinding,
								$author$project$Calculus$Parser$symbol('=')),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifierInModuleLetBinding, $author$project$Calculus$Parser$varIntro),
								$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$LetTerm))));
				case 'LetType':
					return _Debug_todo(
						'Calculus.Parser',
						{
							start: {line: 1570, column: 25},
							end: {line: 1570, column: 35}
						})('');
				case 'LetModule':
					return A2(
						$author$project$Lib$Parser$Parser$ooo,
						A2(
							$author$project$Lib$Parser$Parser$mapError,
							$author$project$Calculus$Parser$ExpectedModuleTermInModuleLetBinding,
							$author$project$Calculus$Parser$cyclic$moduleTerm()),
						A2(
							$author$project$Lib$Parser$Parser$o,
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								$author$project$Calculus$Parser$ExpectedEqualsInModuleLetBinding,
								$author$project$Calculus$Parser$symbol('=')),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedModuleIdentifierInModuleLetBinding, $author$project$Calculus$Parser$moduleVarIntro),
								$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$LetModule))));
				default:
					return _Debug_todo(
						'Calculus.Parser',
						{
							start: {line: 1579, column: 25},
							end: {line: 1579, column: 35}
						})('');
			}
		},
		$author$project$Calculus$Parser$moduleLetBindingKeyword);
}
function $author$project$Calculus$Parser$cyclic$moduleTerm() {
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (keyword0) {
			switch (keyword0.$) {
				case 'ModuleVarUse':
					return A2(
						$author$project$Lib$Parser$Parser$map,
						$author$project$Calculus$Base$ModuleVarUse,
						A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedModuleIdentifier, $author$project$Calculus$Parser$moduleVarIntro));
				case 'ModuleLiteralTerm':
					return A2(
						$author$project$Lib$Parser$Parser$map,
						$author$project$Calculus$Base$ModuleLiteralTerm,
						$author$project$Calculus$Parser$cyclic$moduleLiteral());
				default:
					return A2(
						$author$project$Lib$Parser$Parser$ooo,
						A2(
							$author$project$Lib$Parser$Parser$repeatUntil,
							$author$project$Calculus$Parser$cyclic$moduleTerm(),
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								$author$project$Calculus$Parser$ExpectedClosingBracketsInFunctorApplication,
								$author$project$Calculus$Parser$symbol(']'))),
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2(
								$author$project$Lib$Parser$Parser$mapError,
								$author$project$Calculus$Parser$ExpectedFunctorTermInApplication,
								$author$project$Calculus$Parser$cyclic$functorTerm()),
							$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$FunctorApplication)));
			}
		},
		$author$project$Calculus$Parser$moduleOperatorKeyword);
}
function $author$project$Calculus$Parser$cyclic$term() {
	var varSeq2 = $author$project$Calculus$Parser$mandatoryTermParens(
		A2(
			$author$project$Lib$Parser$Parser$pair,
			A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifier, $author$project$Calculus$Parser$varIntro),
			A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifier, $author$project$Calculus$Parser$varIntro)));
	var varSeq1 = $author$project$Calculus$Parser$mandatoryTermParens(
		A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifier, $author$project$Calculus$Parser$varIntro));
	var varSeq0 = $author$project$Calculus$Parser$optionalTermParens($author$project$Calculus$Parser$emptySequence);
	var operator2 = function (f) {
		return $author$project$Calculus$Parser$mandatoryTermParens(
			A2(
				$author$project$Lib$Parser$Parser$ooo,
				$author$project$Calculus$Parser$cyclic$term(),
				A2(
					$author$project$Lib$Parser$Parser$ooo,
					$author$project$Calculus$Parser$cyclic$term(),
					$author$project$Lib$Parser$Parser$return(f))));
	};
	var operator1 = function (f) {
		return $author$project$Calculus$Parser$mandatoryTermParens(
			A2(
				$author$project$Lib$Parser$Parser$ooo,
				$author$project$Calculus$Parser$cyclic$term(),
				$author$project$Lib$Parser$Parser$return(f)));
	};
	var naturalNumberLiteral = A2(
		$author$project$Lib$Parser$Parser$map,
		$author$project$Calculus$Base$intToNatTerm,
		A2(
			$author$project$Lib$Parser$Parser$o,
			$author$project$Calculus$Parser$spaces,
			A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedNatConstant, $author$project$Lib$Parser$Parser$naturalNumber)));
	var handlePatternError = F2(
		function (patternKeyword, msg) {
			if (msg.$ === 'Left') {
				var expected = msg.a.expected;
				var consumedSuccessfully = msg.a.consumedSuccessfully;
				var failedAtChar = msg.a.failedAtChar;
				return $author$project$Calculus$Parser$ExpectedPattern(
					$author$project$Calculus$Parser$ExpectedPatternKeyword(
						{consumedSuccessfully: consumedSuccessfully, failedAtChar: failedAtChar, patternKeyword: patternKeyword}));
			} else {
				var gapError = msg.a;
				return $author$project$Calculus$Parser$ExpectedPattern(
					$author$project$Calculus$Parser$ExpectedGapAfterPatternKeyword(
						{failedAtChar: gapError.failedAtChar, patternKeyword: patternKeyword}));
			}
		});
	var pattern0 = F2(
		function (str, op) {
			return A2(
				$author$project$Lib$Parser$Parser$o,
				varSeq0,
				A2(
					$author$project$Lib$Parser$Parser$o,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						handlePatternError(op),
						$author$project$Calculus$Parser$keyword(str)),
					$author$project$Lib$Parser$Parser$unit));
		});
	var pattern1 = F2(
		function (str, op) {
			return A2(
				$author$project$Lib$Parser$Parser$ooo,
				varSeq1,
				A2(
					$author$project$Lib$Parser$Parser$o,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						handlePatternError(op),
						$author$project$Calculus$Parser$keyword(str)),
					$author$project$Lib$Parser$Parser$identity));
		});
	var pattern2 = F2(
		function (str, op) {
			return A2(
				$author$project$Lib$Parser$Parser$ooo,
				varSeq2,
				A2(
					$author$project$Lib$Parser$Parser$o,
					A2(
						$author$project$Lib$Parser$Parser$mapError,
						handlePatternError(op),
						$author$project$Calculus$Parser$keyword(str)),
					$author$project$Lib$Parser$Parser$identity));
		});
	var constant = function (c) {
		return A2(
			$author$project$Lib$Parser$Parser$map,
			function (_v20) {
				return c;
			},
			$author$project$Calculus$Parser$optionalTermParens($author$project$Calculus$Parser$emptySequence));
	};
	return A2(
		$author$project$Lib$Parser$Parser$andThen,
		function (operatorkeyword0) {
			switch (operatorkeyword0.$) {
				case 'VarUse':
					return A2(
						$author$project$Lib$Parser$Parser$map,
						$author$project$Calculus$Base$VarUse,
						A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifier, $author$project$Calculus$Parser$varIntro));
				case 'ConstTrue':
					return constant($author$project$Calculus$Base$ConstTrue);
				case 'ConstFalse':
					return constant($author$project$Calculus$Base$ConstFalse);
				case 'MatchBool':
					return $author$project$Calculus$Parser$optionalTermParens(
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2(
								$author$project$Calculus$Parser$binding,
								A2(pattern0, 'false', $author$project$Calculus$Parser$ConstFalse),
								$author$project$Calculus$Parser$cyclic$term()),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2(
									$author$project$Calculus$Parser$binding,
									A2(pattern0, 'true', $author$project$Calculus$Parser$ConstTrue),
									$author$project$Calculus$Parser$cyclic$term()),
								A2(
									$author$project$Lib$Parser$Parser$ooo,
									$author$project$Calculus$Parser$cyclic$term(),
									$author$project$Lib$Parser$Parser$return(
										F3(
											function (arg, _v1, _v2) {
												var branch0 = _v1.b;
												var branch1 = _v2.b;
												return A2(
													$author$project$Calculus$Base$MatchBool,
													arg,
													{
														falseBranch: {body: branch1},
														trueBranch: {body: branch0}
													});
											}))))));
				case 'Pair':
					return operator2($author$project$Calculus$Base$Pair);
				case 'MatchPair':
					return $author$project$Calculus$Parser$optionalTermParens(
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2(
								$author$project$Calculus$Parser$binding,
								A2(pattern2, 'pair', $author$project$Calculus$Parser$Pair),
								$author$project$Calculus$Parser$cyclic$term()),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								$author$project$Calculus$Parser$cyclic$term(),
								$author$project$Lib$Parser$Parser$return(
									F2(
										function (arg, _v3) {
											var _v4 = _v3.a;
											var var0 = _v4.a;
											var var1 = _v4.b;
											var body = _v3.b;
											return A2(
												$author$project$Calculus$Base$MatchPair,
												arg,
												{body: body, var0: var0, var1: var1});
										})))));
				case 'Left':
					return operator1($author$project$Calculus$Base$Left);
				case 'Right':
					return operator1($author$project$Calculus$Base$Right);
				case 'MatchSum':
					return $author$project$Calculus$Parser$optionalTermParens(
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2(
								$author$project$Calculus$Parser$binding,
								A2(pattern1, 'right', $author$project$Calculus$Parser$Right),
								$author$project$Calculus$Parser$cyclic$term()),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2(
									$author$project$Calculus$Parser$binding,
									A2(pattern1, 'left', $author$project$Calculus$Parser$Left),
									$author$project$Calculus$Parser$cyclic$term()),
								A2(
									$author$project$Lib$Parser$Parser$ooo,
									$author$project$Calculus$Parser$cyclic$term(),
									$author$project$Lib$Parser$Parser$return(
										F3(
											function (arg, _v5, _v6) {
												var leftVar = _v5.a;
												var leftBody = _v5.b;
												var rightVar = _v6.a;
												var rightBody = _v6.b;
												return A2(
													$author$project$Calculus$Base$MatchSum,
													arg,
													{
														leftBranch: {body: leftBody, _var: leftVar},
														rightBranch: {body: rightBody, _var: rightVar}
													});
											}))))));
				case 'Application':
					return A2(
						$author$project$Lib$Parser$Parser$o,
						A2(
							$author$project$Lib$Parser$Parser$mapError,
							$author$project$Calculus$Parser$ExpectedClosingOfApplication,
							$author$project$Calculus$Parser$symbol(']')),
						A2(
							$author$project$Lib$Parser$Parser$andThen,
							function (terms) {
								if (!terms.b) {
									return $author$project$Lib$Parser$Parser$fail(
										$author$project$Calculus$Parser$ExpectedAtleastTwoArgumentsToApplication(
											{got: 0}));
								} else {
									if (!terms.b.b) {
										return $author$project$Lib$Parser$Parser$fail(
											$author$project$Calculus$Parser$ExpectedAtleastTwoArgumentsToApplication(
												{got: 1}));
									} else {
										var fn0 = terms.a;
										var _v8 = terms.b;
										var arg0 = _v8.a;
										var args = _v8.b;
										var applicationWithListOfArgs = F2(
											function (fn, args0) {
												applicationWithListOfArgs:
												while (true) {
													if (!args0.b) {
														return fn;
													} else {
														var arg = args0.a;
														var args1 = args0.b;
														var $temp$fn = A2($author$project$Calculus$Base$Application, fn, arg),
															$temp$args0 = args1;
														fn = $temp$fn;
														args0 = $temp$args0;
														continue applicationWithListOfArgs;
													}
												}
											});
										return $author$project$Lib$Parser$Parser$return(
											A2(
												applicationWithListOfArgs,
												A2($author$project$Calculus$Base$Application, fn0, arg0),
												args));
									}
								}
							},
							$author$project$Lib$Parser$Parser$repeat(
								$author$project$Calculus$Parser$cyclic$term())));
				case 'Abstraction':
					var abstractionWithListOfVars = F2(
						function (vars0, body) {
							if (!vars0.b) {
								return body;
							} else {
								var _var = vars0.a;
								var vars1 = vars0.b;
								return $author$project$Calculus$Base$Abstraction(
									{
										body: A2(abstractionWithListOfVars, vars1, body),
										_var: _var
									});
							}
						});
					return $author$project$Calculus$Parser$optionalTermParens(
						A2(
							$author$project$Lib$Parser$Parser$andThen,
							function (_v11) {
								var vars = _v11.a;
								var body = _v11.b;
								if (!vars.b) {
									return $author$project$Lib$Parser$Parser$fail(
										$author$project$Calculus$Parser$ExpectedAtleastOneParameterToAbstraction(
											{got: 0}));
								} else {
									var var0 = vars.a;
									var vars1 = vars.b;
									return $author$project$Lib$Parser$Parser$return(
										$author$project$Calculus$Base$Abstraction(
											{
												body: A2(abstractionWithListOfVars, vars1, body),
												_var: var0
											}));
								}
							},
							A2(
								$author$project$Calculus$Parser$binding,
								A2(
									$author$project$Lib$Parser$Parser$mapError,
									$author$project$Calculus$Parser$ExpectedTermIdentifier,
									$author$project$Lib$Parser$Parser$repeat($author$project$Calculus$Parser$varIntro)),
								$author$project$Calculus$Parser$cyclic$term())));
				case 'ConstZero':
					return constant($author$project$Calculus$Base$ConstZero);
				case 'NatLiteral':
					return naturalNumberLiteral;
				case 'Succ':
					return operator1($author$project$Calculus$Base$Succ);
				case 'FoldNat':
					return $author$project$Calculus$Parser$optionalTermParens(
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2(
								$author$project$Calculus$Parser$binding,
								A2(pattern1, 'succ', $author$project$Calculus$Parser$Succ),
								$author$project$Calculus$Parser$cyclic$term()),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2(
									$author$project$Calculus$Parser$binding,
									A2(pattern0, 'zero', $author$project$Calculus$Parser$FoldNat),
									$author$project$Calculus$Parser$cyclic$term()),
								A2(
									$author$project$Lib$Parser$Parser$ooo,
									$author$project$Calculus$Parser$cyclic$term(),
									$author$project$Lib$Parser$Parser$return(
										F3(
											function (arg, _v13, _v14) {
												var zeroBody = _v13.b;
												var succVar = _v14.a;
												var succBody = _v14.b;
												return A2(
													$author$project$Calculus$Base$FoldNat,
													arg,
													{
														succBranch: {body: succBody, _var: succVar},
														zeroBranch: {body: zeroBody}
													});
											}))))));
				case 'ConstEmpty':
					return constant($author$project$Calculus$Base$ConstEmpty);
				case 'Cons':
					return operator2($author$project$Calculus$Base$Cons);
				case 'FoldList':
					return $author$project$Calculus$Parser$optionalTermParens(
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2(
								$author$project$Calculus$Parser$binding,
								A2(pattern2, 'cons', $author$project$Calculus$Parser$Cons),
								$author$project$Calculus$Parser$cyclic$term()),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2(
									$author$project$Calculus$Parser$binding,
									A2(pattern0, 'empty', $author$project$Calculus$Parser$ConstEmpty),
									$author$project$Calculus$Parser$cyclic$term()),
								A2(
									$author$project$Lib$Parser$Parser$ooo,
									$author$project$Calculus$Parser$cyclic$term(),
									$author$project$Lib$Parser$Parser$return(
										F3(
											function (arg, _v15, _v16) {
												var emptyBody = _v15.b;
												var _v17 = _v16.a;
												var consVar0 = _v17.a;
												var consVar1 = _v17.b;
												var consBody = _v16.b;
												return A2(
													$author$project$Calculus$Base$FoldList,
													arg,
													{
														consBranch: {body: consBody, var0: consVar0, var1: consVar1},
														emptyBranch: {body: emptyBody}
													});
											}))))));
				case 'LetBe':
					return $author$project$Calculus$Parser$optionalTermParens(
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2(
								$author$project$Calculus$Parser$binding,
								A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifier, $author$project$Calculus$Parser$varIntro),
								$author$project$Calculus$Parser$cyclic$term()),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								$author$project$Calculus$Parser$cyclic$term(),
								$author$project$Lib$Parser$Parser$return(
									F2(
										function (arg, _v18) {
											var _var = _v18.a;
											var body = _v18.b;
											return A2(
												$author$project$Calculus$Base$LetBe,
												arg,
												{body: body, _var: _var});
										})))));
				case 'Let':
					return A2(
						$author$project$Lib$Parser$Parser$ooo,
						$author$project$Calculus$Parser$cyclic$term(),
						A2(
							$author$project$Lib$Parser$Parser$o,
							$author$project$Calculus$Parser$semicolonTerm,
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								$author$project$Calculus$Parser$cyclic$term(),
								A2(
									$author$project$Lib$Parser$Parser$o,
									$author$project$Calculus$Parser$defEqualsTerm,
									A2(
										$author$project$Lib$Parser$Parser$ooo,
										A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifier, $author$project$Calculus$Parser$varIntro),
										$author$project$Lib$Parser$Parser$return(
											F3(
												function (_var, arg, body) {
													return A2(
														$author$project$Calculus$Base$LetBe,
														arg,
														{body: body, _var: _var});
												})))))));
				case 'Delay':
					return A2(
						$author$project$Lib$Parser$Parser$map,
						function (_v19) {
							var body = _v19.b;
							return $author$project$Calculus$Base$Delay(
								{body: body});
						},
						A2(
							$author$project$Calculus$Parser$binding,
							$author$project$Calculus$Parser$spaces,
							$author$project$Calculus$Parser$cyclic$term()));
				case 'Force':
					return operator1($author$project$Calculus$Base$Force);
				default:
					return $author$project$Calculus$Parser$mandatoryTermParens(
						A2(
							$author$project$Lib$Parser$Parser$ooo,
							A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedTermIdentifier, $author$project$Calculus$Parser$varIntro),
							A2(
								$author$project$Lib$Parser$Parser$ooo,
								A2(
									$author$project$Lib$Parser$Parser$mapError,
									$author$project$Calculus$Parser$ExpectedModuleTermInModuleAccess,
									$author$project$Calculus$Parser$cyclic$moduleTerm()),
								$author$project$Lib$Parser$Parser$return($author$project$Calculus$Base$ModuleAccess))));
			}
		},
		A2($author$project$Lib$Parser$Parser$mapError, $author$project$Calculus$Parser$ExpectedOperator, $author$project$Calculus$Parser$operatorKeyword));
}
try {
	var $author$project$Calculus$Parser$functorLiteral = $author$project$Calculus$Parser$cyclic$functorLiteral();
	$author$project$Calculus$Parser$cyclic$functorLiteral = function () {
		return $author$project$Calculus$Parser$functorLiteral;
	};
	var $author$project$Calculus$Parser$functorTerm = $author$project$Calculus$Parser$cyclic$functorTerm();
	$author$project$Calculus$Parser$cyclic$functorTerm = function () {
		return $author$project$Calculus$Parser$functorTerm;
	};
	var $author$project$Calculus$Parser$moduleLiteral = $author$project$Calculus$Parser$cyclic$moduleLiteral();
	$author$project$Calculus$Parser$cyclic$moduleLiteral = function () {
		return $author$project$Calculus$Parser$moduleLiteral;
	};
	var $author$project$Calculus$Parser$moduleLetBinding = $author$project$Calculus$Parser$cyclic$moduleLetBinding();
	$author$project$Calculus$Parser$cyclic$moduleLetBinding = function () {
		return $author$project$Calculus$Parser$moduleLetBinding;
	};
	var $author$project$Calculus$Parser$moduleTerm = $author$project$Calculus$Parser$cyclic$moduleTerm();
	$author$project$Calculus$Parser$cyclic$moduleTerm = function () {
		return $author$project$Calculus$Parser$moduleTerm;
	};
	var $author$project$Calculus$Parser$term = $author$project$Calculus$Parser$cyclic$term();
	$author$project$Calculus$Parser$cyclic$term = function () {
		return $author$project$Calculus$Parser$term;
	};
} catch ($) {
	throw 'Some top-level definitions from `Calculus.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    functorLiteral\n  │     ↓\n  │    functorTerm\n  │     ↓\n  │    moduleLiteral\n  │     ↓\n  │    moduleLetBinding\n  │     ↓\n  │    moduleTerm\n  │     ↓\n  │    term\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Lib$Parser$State$return = function (input) {
	return {
		input: input,
		position: {col: 1, line: 1}
	};
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Calculus$Parser$runModuleTerm = function (input) {
	return A2(
		$elm$core$Result$map,
		$elm$core$Tuple$second,
		A3(
			$author$project$Lib$Parser$Parser$run,
			$author$project$Calculus$Parser$moduleTerm,
			{},
			$author$project$Lib$Parser$State$return(input)));
};
var $author$project$Ui$Tab$Module$parseModule = function (model) {
	return _Utils_update(
		model,
		{
			parsedModule: $elm$core$Maybe$Just(
				$author$project$Calculus$Parser$runModuleTerm(model.moduleInput))
		});
};
var $author$project$Ui$Tab$Module$init = function () {
	var input1 = 'module {\n\n  let-module Nat = module {\n    let-term plus = \\{ x y .\n      fold-nat $x\n        { zero . $y }\n        { succ(state) . succ($state) }\n    };\n\n    let-term multiply = \\{ x y .\n      fold-nat $x\n        { zero . 00 }\n        { succ(state) . [$plus $y $state] }\n    };\n\n    let-term exp = \\{ base exponent .\n      fold-nat $exponent\n        { zero . 01 }\n        { succ(state) . [$multiply $base $state] }\n    };\n\n  };\n\n  let-module List = module {\n    let-term map = \\{ f xs .\n      fold-list $xs\n        { empty . empty }\n        { cons(x state) . cons([$f $x] $state) }\n    };\n\n    let-term concat = \\{ xs ys .\n      fold-list $xs\n        { empty . $ys }\n        { cons(x state) . cons($x $state) }\n    };\n\n    let-term singleton = \\{ x . cons($x empty) };\n\n    let-term and-then = \\{ f xs .\n      fold-list $xs\n        { empty . empty }\n        { cons(x state) . [$concat [$f $x] $state] }\n    };\n  };\n\n  let-term square = \\{ x . [/($Nat multiply) $x $x] };\n}\n';
	var input = input1;
	return $author$project$Ui$Control$InitContext$setModelTo(
		$author$project$Ui$Tab$Module$openModule(
			$author$project$Ui$Tab$Module$evalModule(
				$author$project$Ui$Tab$Module$parseModule(
					{env: $author$project$Calculus$Evaluation$Value$emptyEnvironment, evaledModule: $elm$core$Maybe$Nothing, evaledTerm: $elm$core$Maybe$Nothing, moduleInput: input, parsedModule: $elm$core$Maybe$Nothing, parsedTerm: $elm$core$Maybe$Nothing, replInput: ''}))));
}();
var $author$project$Calculus$Evaluation$Evaluation$eval0 = function (term) {
	return A2(
		$elm$core$Result$map,
		function (_v0) {
			var thunkContext = _v0.a.thunkContext;
			var value = _v0.b;
			return _Utils_Tuple2(thunkContext, value);
		},
		A3(
			$author$project$Lib$State$StatefulReaderWithErr$run,
			$author$project$Calculus$Evaluation$Evaluation$eval(term),
			$author$project$Calculus$Evaluation$Evaluation$initReadOnlyState,
			$author$project$Calculus$Evaluation$Evaluation$initMutState));
};
var $author$project$Calculus$Type$Inference$emptyContext = $elm$core$Dict$empty;
var $author$project$Calculus$Type$TypeVarContext$emptyEquations = $elm$core$Dict$empty;
var $mgold$elm_nonempty_list$List$Nonempty$Nonempty = F2(
	function (a, b) {
		return {$: 'Nonempty', a: a, b: b};
	});
var $mgold$elm_nonempty_list$List$Nonempty$singleton = function (x) {
	return A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, x, _List_Nil);
};
var $author$project$Lib$StackedSet$empty = $mgold$elm_nonempty_list$List$Nonempty$singleton($elm$core$Set$empty);
var $author$project$Calculus$Type$TypeVarContext$emptyTypeVarStack = $author$project$Lib$StackedSet$empty;
var $author$project$Calculus$Type$TypeVarContext$emptyContext = {equations: $author$project$Calculus$Type$TypeVarContext$emptyEquations, nextTypeVar: 0, typeVarStack: $author$project$Calculus$Type$TypeVarContext$emptyTypeVarStack};
var $author$project$Calculus$Type$Inference$emptyState = {context: $author$project$Calculus$Type$Inference$emptyContext, typeVarContext: $author$project$Calculus$Type$TypeVarContext$emptyContext};
var $author$project$Calculus$Type$TypeVarContext$ExpectedArrowType = {$: 'ExpectedArrowType'};
var $author$project$Calculus$Type$TypeVarContext$ExpectedFrozenType = {$: 'ExpectedFrozenType'};
var $author$project$Calculus$Type$TypeVarContext$ExpectedListType = {$: 'ExpectedListType'};
var $author$project$Calculus$Type$TypeVarContext$ExpectedSumType = {$: 'ExpectedSumType'};
var $author$project$Calculus$Base$ForAll = F2(
	function (a, b) {
		return {$: 'ForAll', a: a, b: b};
	});
var $author$project$Lib$State$StatefulWithErr$andThen = F2(
	function (f, stateful_a) {
		return function (state0) {
			var _v0 = stateful_a(state0);
			if (_v0.$ === 'Ok') {
				var _v1 = _v0.a;
				var state1 = _v1.a;
				var a = _v1.b;
				return A2(f, a, state1);
			} else {
				var err = _v0.a;
				return $elm$core$Result$Err(err);
			}
		};
	});
var $author$project$Lib$State$StatefulWithErr$join = function (stateful_stateful_a) {
	return A2(
		$author$project$Lib$State$StatefulWithErr$andThen,
		function (x) {
			return x;
		},
		stateful_stateful_a);
};
var $author$project$Lib$State$StatefulWithErr$map = F2(
	function (f, stateful_a0) {
		return function (state0) {
			var _v0 = stateful_a0(state0);
			if (_v0.$ === 'Ok') {
				var _v1 = _v0.a;
				var state1 = _v1.a;
				var a = _v1.b;
				return $elm$core$Result$Ok(
					_Utils_Tuple2(
						state1,
						f(a)));
			} else {
				var err = _v0.a;
				return $elm$core$Result$Err(err);
			}
		};
	});
var $author$project$Lib$State$StatefulWithErr$pair = F2(
	function (stateful_a, stateful_b) {
		return function (state0) {
			var _v0 = stateful_a(state0);
			if (_v0.$ === 'Ok') {
				var _v1 = _v0.a;
				var state1 = _v1.a;
				var a = _v1.b;
				var _v2 = stateful_b(state1);
				if (_v2.$ === 'Ok') {
					var _v3 = _v2.a;
					var state2 = _v3.a;
					var b = _v3.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							state2,
							_Utils_Tuple2(a, b)));
				} else {
					var err = _v2.a;
					return $elm$core$Result$Err(err);
				}
			} else {
				var err = _v0.a;
				return $elm$core$Result$Err(err);
			}
		};
	});
var $author$project$Lib$State$StatefulWithErr$map2 = F3(
	function (f, stateful_a0, stateful_a1) {
		return A2(
			$author$project$Lib$State$StatefulWithErr$map,
			function (_v0) {
				var a0 = _v0.a;
				var a1 = _v0.b;
				return A2(f, a0, a1);
			},
			A2($author$project$Lib$State$StatefulWithErr$pair, stateful_a0, stateful_a1));
	});
var $author$project$Lib$State$StatefulWithErr$andThen2 = F3(
	function (f, stateful_a0, stateful_a1) {
		return $author$project$Lib$State$StatefulWithErr$join(
			A3($author$project$Lib$State$StatefulWithErr$map2, f, stateful_a0, stateful_a1));
	});
var $author$project$Lib$State$StatefulWithErr$map3 = F4(
	function (f, stateful_a0, stateful_a1, stateful_a2) {
		return A2(
			$author$project$Lib$State$StatefulWithErr$map,
			function (_v0) {
				var a0 = _v0.a;
				var _v1 = _v0.b;
				var a1 = _v1.a;
				var a2 = _v1.b;
				return A3(f, a0, a1, a2);
			},
			A2(
				$author$project$Lib$State$StatefulWithErr$pair,
				stateful_a0,
				A2($author$project$Lib$State$StatefulWithErr$pair, stateful_a1, stateful_a2)));
	});
var $author$project$Lib$State$StatefulWithErr$andThen3 = F4(
	function (f, stateful_a0, stateful_a1, stateful_a2) {
		return $author$project$Lib$State$StatefulWithErr$join(
			A4($author$project$Lib$State$StatefulWithErr$map3, f, stateful_a0, stateful_a1, stateful_a2));
	});
var $author$project$Lib$State$StatefulWithErr$map4 = F5(
	function (f, stateful_a0, stateful_a1, stateful_a2, stateful_a3) {
		return A2(
			$author$project$Lib$State$StatefulWithErr$map,
			function (_v0) {
				var a0 = _v0.a;
				var _v1 = _v0.b;
				var a1 = _v1.a;
				var _v2 = _v1.b;
				var a2 = _v2.a;
				var a3 = _v2.b;
				return A4(f, a0, a1, a2, a3);
			},
			A2(
				$author$project$Lib$State$StatefulWithErr$pair,
				stateful_a0,
				A2(
					$author$project$Lib$State$StatefulWithErr$pair,
					stateful_a1,
					A2($author$project$Lib$State$StatefulWithErr$pair, stateful_a2, stateful_a3))));
	});
var $author$project$Lib$State$StatefulWithErr$andThen4 = F5(
	function (f, stateful_a0, stateful_a1, stateful_a2, stateful_a3) {
		return $author$project$Lib$State$StatefulWithErr$join(
			A5($author$project$Lib$State$StatefulWithErr$map4, f, stateful_a0, stateful_a1, stateful_a2, stateful_a3));
	});
var $author$project$Lib$State$StatefulWithErr$create = $elm$core$Basics$identity;
var $author$project$Calculus$Type$TypeVarContext$newTypeVar = function (n) {
	return _Utils_Tuple2(
		n + 1,
		$author$project$Calculus$Base$TypeVarUse(
			$elm$core$String$fromInt(n)));
};
var $mgold$elm_nonempty_list$List$Nonempty$head = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return x;
};
var $mgold$elm_nonempty_list$List$Nonempty$tail = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return xs;
};
var $author$project$Lib$StackedSet$mapTop = F2(
	function (f, stack) {
		return A2(
			$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
			f(
				$mgold$elm_nonempty_list$List$Nonempty$head(stack)),
			$mgold$elm_nonempty_list$List$Nonempty$tail(stack));
	});
var $author$project$Lib$StackedSet$pushElement = F2(
	function (x, stackedSet) {
		return A2(
			$author$project$Lib$StackedSet$mapTop,
			function (set) {
				return A2($elm$core$Set$insert, x, set);
			},
			stackedSet);
	});
var $author$project$Calculus$Type$TypeVarContext$pushTypeVar = F2(
	function (n, stack) {
		return A2(
			$author$project$Lib$StackedSet$pushElement,
			$elm$core$String$fromInt(n),
			stack);
	});
var $author$project$Calculus$Type$TypeVarContext$generateFreshVar = $author$project$Lib$State$StatefulWithErr$create(
	function (state0) {
		var nextTypeVar = state0.nextTypeVar;
		var typeVarStack = state0.typeVarStack;
		var _v0 = $author$project$Calculus$Type$TypeVarContext$newTypeVar(nextTypeVar);
		var nextTypeVar1 = _v0.a;
		var type1 = _v0.b;
		return $elm$core$Result$Ok(
			_Utils_Tuple2(
				_Utils_update(
					state0,
					{
						nextTypeVar: nextTypeVar1,
						typeVarStack: A2($author$project$Calculus$Type$TypeVarContext$pushTypeVar, nextTypeVar, typeVarStack)
					}),
				type1));
	});
var $author$project$Lib$State$StatefulWithErr$run = function (stateful_a0) {
	return stateful_a0;
};
var $author$project$Calculus$Type$Inference$liftUnification = function (unificationStateful) {
	return $author$project$Lib$State$StatefulWithErr$create(
		function (state) {
			var typeVarContext = state.typeVarContext;
			return A2(
				$elm$core$Result$map,
				function (_v0) {
					var typeVarContext1 = _v0.a;
					var a = _v0.b;
					return _Utils_Tuple2(
						_Utils_update(
							state,
							{typeVarContext: typeVarContext1}),
						a);
				},
				A2($author$project$Lib$State$StatefulWithErr$run, unificationStateful, typeVarContext));
		});
};
var $author$project$Calculus$Type$Inference$generateFreshVar = $author$project$Calculus$Type$Inference$liftUnification($author$project$Calculus$Type$TypeVarContext$generateFreshVar);
var $author$project$Lib$State$StatefulWithErr$get0 = function (f) {
	return function (state0) {
		return A2(f, state0, state0);
	};
};
var $author$project$Calculus$Type$Inference$getContext = function (f) {
	return $author$project$Lib$State$StatefulWithErr$get0(
		function (_v0) {
			var context = _v0.context;
			return f(context);
		});
};
var $author$project$Calculus$Type$TypeVarContext$generateFreshVarName = $author$project$Lib$State$StatefulWithErr$create(
	function (state0) {
		var nextTypeVar = state0.nextTypeVar;
		var typeVarStack = state0.typeVarStack;
		var _v0 = $author$project$Calculus$Type$TypeVarContext$newTypeVar(nextTypeVar);
		var nextTypeVar1 = _v0.a;
		return $elm$core$Result$Ok(
			_Utils_Tuple2(
				_Utils_update(
					state0,
					{
						nextTypeVar: nextTypeVar1,
						typeVarStack: A2($author$project$Calculus$Type$TypeVarContext$pushTypeVar, nextTypeVar, typeVarStack)
					}),
				$elm$core$String$fromInt(nextTypeVar)));
	});
var $author$project$Calculus$Type$Inference$generateFreshVarName = $author$project$Calculus$Type$Inference$liftUnification($author$project$Calculus$Type$TypeVarContext$generateFreshVarName);
var $author$project$Lib$State$StatefulWithErr$return = function (a) {
	return function (state0) {
		return $elm$core$Result$Ok(
			_Utils_Tuple2(state0, a));
	};
};
var $author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar = F3(
	function (var0, freshVar, type0) {
		switch (type0.$) {
			case 'TypeVarUse':
				var _var = type0.a;
				return _Utils_eq(_var, var0) ? $author$project$Lib$State$StatefulWithErr$return(
					$author$project$Calculus$Base$TypeVarUse(freshVar)) : $author$project$Lib$State$StatefulWithErr$return(
					$author$project$Calculus$Base$TypeVarUse(_var));
			case 'Product':
				var type1 = type0.a;
				var type2 = type0.b;
				return A3(
					$author$project$Lib$State$StatefulWithErr$map2,
					$author$project$Calculus$Base$Product,
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type1),
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type2));
			case 'Sum':
				var type1 = type0.a;
				var type2 = type0.b;
				return A3(
					$author$project$Lib$State$StatefulWithErr$map2,
					$author$project$Calculus$Base$Sum,
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type1),
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type2));
			case 'Arrow':
				var type1 = type0.a;
				var type2 = type0.b;
				return A3(
					$author$project$Lib$State$StatefulWithErr$map2,
					$author$project$Calculus$Base$Arrow,
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type1),
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type2));
			case 'ConstBool':
				return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstBool);
			case 'ConstNat':
				return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstNat);
			case 'List':
				var type1 = type0.a;
				return A2(
					$author$project$Lib$State$StatefulWithErr$map,
					$author$project$Calculus$Base$List,
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type1));
			case 'Frozen':
				var type1 = type0.a;
				return A2(
					$author$project$Lib$State$StatefulWithErr$map,
					$author$project$Calculus$Base$Frozen,
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type1));
			default:
				var _var = type0.a;
				var type1 = type0.b;
				return _Utils_eq(_var, var0) ? $author$project$Lib$State$StatefulWithErr$return(
					A2($author$project$Calculus$Base$ForAll, _var, type1)) : A2(
					$author$project$Lib$State$StatefulWithErr$map,
					$author$project$Calculus$Base$ForAll(_var),
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, var0, freshVar, type1));
		}
	});
var $author$project$Calculus$Type$Inference$instantiateForAll = function (type0) {
	if (type0.$ === 'ForAll') {
		var _var = type0.a;
		var type1 = type0.b;
		return A2(
			$author$project$Lib$State$StatefulWithErr$andThen,
			function (freshVarName) {
				return A2(
					$author$project$Lib$State$StatefulWithErr$andThen,
					function (type2) {
						return $author$project$Calculus$Type$Inference$instantiateForAll(type2);
					},
					A3($author$project$Calculus$Type$Inference$replaceTypeVarWithFreshVar, _var, freshVarName, type1));
			},
			$author$project$Calculus$Type$Inference$generateFreshVarName);
	} else {
		return $author$project$Lib$State$StatefulWithErr$return(type0);
	}
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Calculus$Type$Inference$lookupType = F2(
	function (varName, context0) {
		return A2(
			$elm$core$Maybe$andThen,
			$elm$core$List$head,
			A2($elm$core$Dict$get, varName, context0));
	});
var $author$project$Lib$State$StatefulWithErr$first = F2(
	function (stateful_a, stateful_b_ignored) {
		return A2(
			$author$project$Lib$State$StatefulWithErr$map,
			function (_v0) {
				var a = _v0.a;
				return a;
			},
			A2($author$project$Lib$State$StatefulWithErr$pair, stateful_a, stateful_b_ignored));
	});
var $author$project$Lib$State$StatefulWithErr$second = F2(
	function (stateful_a_ignored, stateful_b) {
		return A2(
			$author$project$Lib$State$StatefulWithErr$map,
			function (_v0) {
				var b = _v0.b;
				return b;
			},
			A2($author$project$Lib$State$StatefulWithErr$pair, stateful_a_ignored, stateful_b));
	});
var $author$project$Lib$State$StatefulWithErr$mid = F3(
	function (stateful_a_ignored, stateful_b, stateful_c_ignored) {
		return A2(
			$author$project$Lib$State$StatefulWithErr$second,
			stateful_a_ignored,
			A2($author$project$Lib$State$StatefulWithErr$first, stateful_b, stateful_c_ignored));
	});
var $author$project$Calculus$Type$TypeVarContext$InfiniteType = function (a) {
	return {$: 'InfiniteType', a: a};
};
var $author$project$Calculus$Type$TypeVarContext$lookupEquations = $elm$core$Dict$get;
var $author$project$Lib$State$StatefulWithErr$error = function (err) {
	return function (_v0) {
		return $elm$core$Result$Err(err);
	};
};
var $author$project$Calculus$Type$TypeVarContext$throwTypeError = $author$project$Lib$State$StatefulWithErr$error;
var $author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection = F2(
	function (type0, seenVars) {
		switch (type0.$) {
			case 'TypeVarUse':
				var n = type0.a;
				return A2($elm$core$Set$member, n, seenVars) ? $author$project$Calculus$Type$TypeVarContext$throwTypeError(
					_List_fromArray(
						[
							$author$project$Calculus$Type$TypeVarContext$InfiniteType(n)
						])) : $author$project$Lib$State$StatefulWithErr$get0(
					function (_v1) {
						var equations = _v1.equations;
						var _v2 = A2($author$project$Calculus$Type$TypeVarContext$lookupEquations, n, equations);
						if (_v2.$ === 'Just') {
							var type1 = _v2.a;
							return A2(
								$author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection,
								type1,
								A2($elm$core$Set$insert, n, seenVars));
						} else {
							return $author$project$Lib$State$StatefulWithErr$return(
								$author$project$Calculus$Base$TypeVarUse(n));
						}
					});
			case 'Product':
				var type1 = type0.a;
				var type2 = type0.b;
				return A3(
					$author$project$Lib$State$StatefulWithErr$map2,
					$author$project$Calculus$Base$Product,
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type1, seenVars),
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type2, seenVars));
			case 'Sum':
				var type1 = type0.a;
				var type2 = type0.b;
				return A3(
					$author$project$Lib$State$StatefulWithErr$map2,
					$author$project$Calculus$Base$Sum,
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type1, seenVars),
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type2, seenVars));
			case 'Arrow':
				var type1 = type0.a;
				var type2 = type0.b;
				return A3(
					$author$project$Lib$State$StatefulWithErr$map2,
					$author$project$Calculus$Base$Arrow,
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type1, seenVars),
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type2, seenVars));
			case 'ConstBool':
				return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstBool);
			case 'ConstNat':
				return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstNat);
			case 'List':
				var type1 = type0.a;
				return A2(
					$author$project$Lib$State$StatefulWithErr$map,
					$author$project$Calculus$Base$List,
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type1, seenVars));
			case 'Frozen':
				var type1 = type0.a;
				return A2(
					$author$project$Lib$State$StatefulWithErr$map,
					$author$project$Calculus$Base$Frozen,
					A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type1, seenVars));
			default:
				var typeVar = type0.a;
				var type1 = type0.b;
				return _Debug_todo(
					'Calculus.Type.TypeVarContext',
					{
						start: {line: 350, column: 13},
						end: {line: 350, column: 23}
					})('');
		}
	});
var $author$project$Calculus$Type$TypeVarContext$expandType = function (type0) {
	return A2($author$project$Calculus$Type$TypeVarContext$expandTypeWithCycleDetection, type0, $elm$core$Set$empty);
};
var $author$project$Calculus$Type$TypeVarContext$CantPopEmptyTypeVarContext = {$: 'CantPopEmptyTypeVarContext'};
var $mgold$elm_nonempty_list$List$Nonempty$fromList = function (ys) {
	if (ys.b) {
		var x = ys.a;
		var xs = ys.b;
		return $elm$core$Maybe$Just(
			A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Lib$StackedSet$destroyTop = function (stack0) {
	return A2(
		$elm$core$Maybe$map,
		function (stack1) {
			return _Utils_Tuple2(
				$mgold$elm_nonempty_list$List$Nonempty$head(stack0),
				stack1);
		},
		$mgold$elm_nonempty_list$List$Nonempty$fromList(
			$mgold$elm_nonempty_list$List$Nonempty$tail(stack0)));
};
var $author$project$Lib$StackedSet$popFrame = $author$project$Lib$StackedSet$destroyTop;
var $author$project$Calculus$Type$TypeVarContext$popTypeVarStackFrame = $author$project$Lib$State$StatefulWithErr$create(
	function (state) {
		var typeVarStack = state.typeVarStack;
		var _v0 = $author$project$Lib$StackedSet$popFrame(typeVarStack);
		if (_v0.$ === 'Just') {
			var _v1 = _v0.a;
			var vars = _v1.a;
			var newTypeVarStack = _v1.b;
			return $elm$core$Result$Ok(
				_Utils_Tuple2(
					_Utils_update(
						state,
						{typeVarStack: newTypeVarStack}),
					vars));
		} else {
			return $elm$core$Result$Err(
				_List_fromArray(
					[$author$project$Calculus$Type$TypeVarContext$CantPopEmptyTypeVarContext]));
		}
	});
var $author$project$Calculus$Type$TypeVarContext$popTypeVarStackFrameAndExpand = function (type0) {
	return A2(
		$author$project$Lib$State$StatefulWithErr$andThen,
		function (typeVars) {
			return A2(
				$author$project$Lib$State$StatefulWithErr$map,
				function (expandedType0) {
					return _Utils_Tuple2(typeVars, expandedType0);
				},
				$author$project$Calculus$Type$TypeVarContext$expandType(type0));
		},
		$author$project$Calculus$Type$TypeVarContext$popTypeVarStackFrame);
};
var $author$project$Calculus$Type$Inference$popTypeVarStackFrameAndExpand = function (type0) {
	return $author$project$Calculus$Type$Inference$liftUnification(
		$author$project$Calculus$Type$TypeVarContext$popTypeVarStackFrameAndExpand(type0));
};
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Calculus$Type$Inference$popVarFromContext = F2(
	function (varName, context0) {
		return A3(
			$elm$core$Dict$update,
			varName,
			$elm$core$Maybe$andThen($elm$core$List$tail),
			context0);
	});
var $mgold$elm_nonempty_list$List$Nonempty$cons = F2(
	function (y, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
			y,
			A2($elm$core$List$cons, x, xs));
	});
var $author$project$Lib$StackedSet$pushFrame = function (stackedSet) {
	return A2($mgold$elm_nonempty_list$List$Nonempty$cons, $elm$core$Set$empty, stackedSet);
};
var $author$project$Lib$State$StatefulWithErr$update0 = function (f) {
	return function (state0) {
		return $elm$core$Result$Ok(
			_Utils_Tuple2(
				f(state0),
				_Utils_Tuple0));
	};
};
var $author$project$Calculus$Type$TypeVarContext$pushTypeVarStackFrame0 = $author$project$Lib$State$StatefulWithErr$update0(
	function (state) {
		var typeVarStack = state.typeVarStack;
		return _Utils_update(
			state,
			{
				typeVarStack: $author$project$Lib$StackedSet$pushFrame(typeVarStack)
			});
	});
var $author$project$Calculus$Type$Inference$pushTypeVarStackFrame0 = $author$project$Calculus$Type$Inference$liftUnification($author$project$Calculus$Type$TypeVarContext$pushTypeVarStackFrame0);
var $author$project$Calculus$Type$Inference$pushVarToContext = F3(
	function (varName, type0, context0) {
		return A3(
			$elm$core$Dict$update,
			varName,
			function (maybeBinding) {
				if (maybeBinding.$ === 'Just') {
					var types0 = maybeBinding.a;
					return $elm$core$Maybe$Just(
						A2($elm$core$List$cons, type0, types0));
				} else {
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[type0]));
				}
			},
			context0);
	});
var $author$project$Calculus$Type$Inference$throwTypeError = $author$project$Lib$State$StatefulWithErr$error;
var $author$project$Calculus$Type$TypeVarContext$ExpectedBoolType = {$: 'ExpectedBoolType'};
var $author$project$Calculus$Type$TypeVarContext$ExpectedNatType = {$: 'ExpectedNatType'};
var $author$project$Calculus$Type$TypeVarContext$ExpectedProductType = {$: 'ExpectedProductType'};
var $author$project$Calculus$Type$TypeVarContext$expandTypeAtTypeVarName = function (typeVarName) {
	return $author$project$Lib$State$StatefulWithErr$get0(
		function (state0) {
			var _v0 = A2($author$project$Calculus$Type$TypeVarContext$lookupEquations, typeVarName, state0.equations);
			if (_v0.$ === 'Just') {
				var type0 = _v0.a;
				return A2(
					$author$project$Lib$State$StatefulWithErr$andThen,
					function (expandedType0) {
						return A2(
							$author$project$Lib$State$StatefulWithErr$second,
							$author$project$Lib$State$StatefulWithErr$update0(
								function (state1) {
									return _Utils_update(
										state1,
										{
											equations: A3($elm$core$Dict$insert, typeVarName, expandedType0, state1.equations)
										});
								}),
							$author$project$Lib$State$StatefulWithErr$return(
								$elm$core$Maybe$Just(expandedType0)));
					},
					$author$project$Calculus$Type$TypeVarContext$expandType(type0));
			} else {
				return $author$project$Lib$State$StatefulWithErr$return($elm$core$Maybe$Nothing);
			}
		});
};
var $elm$core$Set$singleton = function (key) {
	return $elm$core$Set$Set_elm_builtin(
		A2($elm$core$Dict$singleton, key, _Utils_Tuple0));
};
var $author$project$Calculus$Base$getTypeVars = function (type0) {
	getTypeVars:
	while (true) {
		switch (type0.$) {
			case 'TypeVarUse':
				var _var = type0.a;
				return $elm$core$Set$singleton(_var);
			case 'Product':
				var type1 = type0.a;
				var type2 = type0.b;
				return A2(
					$elm$core$Set$union,
					$author$project$Calculus$Base$getTypeVars(type1),
					$author$project$Calculus$Base$getTypeVars(type2));
			case 'Sum':
				var type1 = type0.a;
				var type2 = type0.b;
				return A2(
					$elm$core$Set$union,
					$author$project$Calculus$Base$getTypeVars(type1),
					$author$project$Calculus$Base$getTypeVars(type2));
			case 'Arrow':
				var type1 = type0.a;
				var type2 = type0.b;
				return A2(
					$elm$core$Set$union,
					$author$project$Calculus$Base$getTypeVars(type1),
					$author$project$Calculus$Base$getTypeVars(type2));
			case 'ConstBool':
				return $elm$core$Set$empty;
			case 'ConstNat':
				return $elm$core$Set$empty;
			case 'List':
				var type1 = type0.a;
				var $temp$type0 = type1;
				type0 = $temp$type0;
				continue getTypeVars;
			case 'Frozen':
				var type1 = type0.a;
				var $temp$type0 = type1;
				type0 = $temp$type0;
				continue getTypeVars;
			default:
				var _var = type0.a;
				var type1 = type0.b;
				return _Debug_todo(
					'Calculus.Base',
					{
						start: {line: 148, column: 13},
						end: {line: 148, column: 23}
					})('');
		}
	}
};
var $author$project$Lib$StackedSet$DeletePhaze1 = function (a) {
	return {$: 'DeletePhaze1', a: a};
};
var $author$project$Lib$StackedSet$DeletePhaze2 = function (a) {
	return {$: 'DeletePhaze2', a: a};
};
var $mgold$elm_nonempty_list$List$Nonempty$foldl = F3(
	function (f, b, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A3(
			$elm$core$List$foldl,
			f,
			b,
			A2($elm$core$List$cons, x, xs));
	});
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$remove, key, dict));
	});
var $author$project$Lib$StackedSet$removeFromSet = F2(
	function (a, set) {
		return A2($elm$core$Set$member, a, set) ? $elm$core$Maybe$Just(
			A2($elm$core$Set$remove, a, set)) : $elm$core$Maybe$Nothing;
	});
var $author$project$Lib$StackedSet$deleteElement = F2(
	function (a, stackedSet) {
		var update = F2(
			function (set0, state) {
				if (state.$ === 'DeletePhaze1') {
					var reversedTop = state.a.reversedTop;
					var _v2 = A2($author$project$Lib$StackedSet$removeFromSet, a, set0);
					if (_v2.$ === 'Just') {
						var set1 = _v2.a;
						return $author$project$Lib$StackedSet$DeletePhaze2(
							{mid: set1, reversedBottom: _List_Nil, reversedTop: reversedTop});
					} else {
						return $author$project$Lib$StackedSet$DeletePhaze1(
							{
								reversedTop: A2($elm$core$List$cons, set0, reversedTop)
							});
					}
				} else {
					var reversedTop = state.a.reversedTop;
					var mid = state.a.mid;
					var reversedBottom = state.a.reversedBottom;
					return $author$project$Lib$StackedSet$DeletePhaze2(
						{
							mid: mid,
							reversedBottom: A2($elm$core$List$cons, set0, reversedBottom),
							reversedTop: reversedTop
						});
				}
			});
		var initState = $author$project$Lib$StackedSet$DeletePhaze1(
			{reversedTop: _List_Nil});
		var finalState = A3($mgold$elm_nonempty_list$List$Nonempty$foldl, update, initState, stackedSet);
		if (finalState.$ === 'DeletePhaze1') {
			return $elm$core$Maybe$Nothing;
		} else {
			var reversedTop = finalState.a.reversedTop;
			var mid = finalState.a.mid;
			var reversedBottom = finalState.a.reversedBottom;
			return $elm$core$Maybe$Just(
				{
					bottom: $elm$core$List$reverse(reversedBottom),
					mid: mid,
					top: $elm$core$List$reverse(reversedTop)
				});
		}
	});
var $author$project$Lib$StackedSet$MovePhaze1 = function (a) {
	return {$: 'MovePhaze1', a: a};
};
var $author$project$Lib$StackedSet$MovePhaze2 = function (a) {
	return {$: 'MovePhaze2', a: a};
};
var $author$project$Lib$StackedSet$moveElement = F2(
	function (a, stackedSetWithHole) {
		var update = F2(
			function (set0, state) {
				if (state.$ === 'MovePhaze1') {
					var top = state.a;
					var _v2 = A2($author$project$Lib$StackedSet$removeFromSet, a, set0);
					if (_v2.$ === 'Just') {
						var set1 = _v2.a;
						return $author$project$Lib$StackedSet$MovePhaze2(
							A2($elm$core$List$cons, set1, top));
					} else {
						return $author$project$Lib$StackedSet$MovePhaze1(
							A2($elm$core$List$cons, set0, top));
					}
				} else {
					var top = state.a;
					return $author$project$Lib$StackedSet$MovePhaze2(
						A2($elm$core$List$cons, set0, top));
				}
			});
		var initState = $author$project$Lib$StackedSet$MovePhaze1(_List_Nil);
		var finalState = A3($elm$core$List$foldr, update, initState, stackedSetWithHole.top);
		if (finalState.$ === 'MovePhaze1') {
			var top = finalState.a;
			return {bottom: stackedSetWithHole.bottom, mid: stackedSetWithHole.mid, top: top};
		} else {
			var top = finalState.a;
			return {
				bottom: stackedSetWithHole.bottom,
				mid: A2($elm$core$Set$insert, a, stackedSetWithHole.mid),
				top: top
			};
		}
	});
var $author$project$Lib$StackedSet$moveElements = F2(
	function (elems, stackedSetWithHole) {
		var update = F2(
			function (a, state) {
				return A2($author$project$Lib$StackedSet$moveElement, a, state);
			});
		var initState = stackedSetWithHole;
		return A3(
			$elm$core$List$foldl,
			update,
			initState,
			$elm$core$Set$toList(elems));
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mgold$elm_nonempty_list$List$Nonempty$append = F2(
	function (_v0, _v1) {
		var x = _v0.a;
		var xs = _v0.b;
		var y = _v1.a;
		var ys = _v1.b;
		return A2(
			$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
			x,
			_Utils_ap(
				xs,
				A2($elm$core$List$cons, y, ys)));
	});
var $author$project$Lib$StackedSet$appendWithMid = F3(
	function (xs0, a, ys) {
		if (!xs0.b) {
			return A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, a, ys);
		} else {
			var x = xs0.a;
			var xs1 = xs0.b;
			return A2(
				$mgold$elm_nonempty_list$List$Nonempty$append,
				A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, x, xs1),
				A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, a, ys));
		}
	});
var $author$project$Lib$StackedSet$zip = function (_v0) {
	var top = _v0.top;
	var mid = _v0.mid;
	var bottom = _v0.bottom;
	return A3($author$project$Lib$StackedSet$appendWithMid, top, mid, bottom);
};
var $author$project$Lib$StackedSet$move = F3(
	function (a, elems, stackedSet) {
		return A2(
			$elm$core$Maybe$withDefault,
			stackedSet,
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeL,
					$author$project$Lib$StackedSet$zip,
					$author$project$Lib$StackedSet$moveElements(elems)),
				A2($author$project$Lib$StackedSet$deleteElement, a, stackedSet)));
	});
var $author$project$Calculus$Type$TypeVarContext$moveTypeVarStackFrame = $author$project$Lib$StackedSet$move;
var $author$project$Calculus$Type$TypeVarContext$extendEquations = F2(
	function (typeVarName, type0) {
		return $author$project$Lib$State$StatefulWithErr$update0(
			function (state) {
				var equations = state.equations;
				var typeVarStack = state.typeVarStack;
				return _Utils_update(
					state,
					{
						equations: A3($elm$core$Dict$insert, typeVarName, type0, equations),
						typeVarStack: A3(
							$author$project$Calculus$Type$TypeVarContext$moveTypeVarStackFrame,
							typeVarName,
							$author$project$Calculus$Base$getTypeVars(type0),
							typeVarStack)
					});
			});
	});
var $author$project$Calculus$Type$TypeVarContext$unification = F2(
	function (type0, type1) {
		var _v0 = _Utils_Tuple2(type0, type1);
		_v0$2:
		while (true) {
			switch (_v0.a.$) {
				case 'TypeVarUse':
					if (_v0.b.$ === 'TypeVarUse') {
						var id0 = _v0.a.a;
						var id1 = _v0.b.a;
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (_v1) {
								var maybeExpandedType0 = _v1.a;
								var maybeExpandedType1 = _v1.b;
								var _v2 = _Utils_Tuple2(maybeExpandedType0, maybeExpandedType1);
								if (_v2.a.$ === 'Just') {
									if (_v2.b.$ === 'Just') {
										var expandedType0 = _v2.a.a;
										var expandedType1 = _v2.b.a;
										return A2($author$project$Calculus$Type$TypeVarContext$unification, expandedType0, expandedType1);
									} else {
										var expandedType0 = _v2.a.a;
										var _v3 = _v2.b;
										return A2(
											$author$project$Lib$State$StatefulWithErr$second,
											A2($author$project$Calculus$Type$TypeVarContext$extendEquations, id1, expandedType0),
											$author$project$Lib$State$StatefulWithErr$return(expandedType0));
									}
								} else {
									if (_v2.b.$ === 'Just') {
										var _v4 = _v2.a;
										var expandedType1 = _v2.b.a;
										return A2(
											$author$project$Lib$State$StatefulWithErr$second,
											A2($author$project$Calculus$Type$TypeVarContext$extendEquations, id0, expandedType1),
											$author$project$Lib$State$StatefulWithErr$return(expandedType1));
									} else {
										var _v5 = _v2.a;
										var _v6 = _v2.b;
										return _Utils_eq(id0, id1) ? $author$project$Lib$State$StatefulWithErr$return(
											$author$project$Calculus$Base$TypeVarUse(id0)) : ((_Utils_cmp(id0, id1) < 0) ? A2(
											$author$project$Lib$State$StatefulWithErr$second,
											A2(
												$author$project$Calculus$Type$TypeVarContext$extendEquations,
												id0,
												$author$project$Calculus$Base$TypeVarUse(id1)),
											$author$project$Lib$State$StatefulWithErr$return(
												$author$project$Calculus$Base$TypeVarUse(id1))) : A2(
											$author$project$Lib$State$StatefulWithErr$second,
											A2(
												$author$project$Calculus$Type$TypeVarContext$extendEquations,
												id1,
												$author$project$Calculus$Base$TypeVarUse(id0)),
											$author$project$Lib$State$StatefulWithErr$return(
												$author$project$Calculus$Base$TypeVarUse(id1))));
									}
								}
							},
							A3(
								$author$project$Lib$State$StatefulWithErr$map2,
								$elm$core$Tuple$pair,
								$author$project$Calculus$Type$TypeVarContext$expandTypeAtTypeVarName(id0),
								$author$project$Calculus$Type$TypeVarContext$expandTypeAtTypeVarName(id1)));
					} else {
						var id0 = _v0.a.a;
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (maybeExpandedType0) {
								if (maybeExpandedType0.$ === 'Just') {
									var expandedType0 = maybeExpandedType0.a;
									return A2($author$project$Calculus$Type$TypeVarContext$unification, expandedType0, type1);
								} else {
									return A2(
										$author$project$Lib$State$StatefulWithErr$second,
										A2($author$project$Calculus$Type$TypeVarContext$extendEquations, id0, type1),
										$author$project$Lib$State$StatefulWithErr$return(type1));
								}
							},
							$author$project$Calculus$Type$TypeVarContext$expandTypeAtTypeVarName(id0));
					}
				case 'Product':
					switch (_v0.b.$) {
						case 'TypeVarUse':
							break _v0$2;
						case 'Product':
							var _v9 = _v0.a;
							var type00 = _v9.a;
							var type01 = _v9.b;
							var _v10 = _v0.b;
							var type10 = _v10.a;
							var type11 = _v10.b;
							return A3(
								$author$project$Lib$State$StatefulWithErr$map2,
								$author$project$Calculus$Base$Product,
								A2($author$project$Calculus$Type$TypeVarContext$unification, type00, type10),
								A2($author$project$Calculus$Type$TypeVarContext$unification, type01, type11));
						default:
							var _v11 = _v0.a;
							return $author$project$Calculus$Type$TypeVarContext$throwTypeError(
								_List_fromArray(
									[$author$project$Calculus$Type$TypeVarContext$ExpectedProductType]));
					}
				case 'Arrow':
					switch (_v0.b.$) {
						case 'TypeVarUse':
							break _v0$2;
						case 'Arrow':
							var _v12 = _v0.a;
							var type00 = _v12.a;
							var type01 = _v12.b;
							var _v13 = _v0.b;
							var type10 = _v13.a;
							var type11 = _v13.b;
							return A3(
								$author$project$Lib$State$StatefulWithErr$map2,
								$author$project$Calculus$Base$Arrow,
								A2($author$project$Calculus$Type$TypeVarContext$unification, type00, type10),
								A2($author$project$Calculus$Type$TypeVarContext$unification, type01, type11));
						default:
							var _v14 = _v0.a;
							return $author$project$Calculus$Type$TypeVarContext$throwTypeError(
								_List_fromArray(
									[$author$project$Calculus$Type$TypeVarContext$ExpectedArrowType]));
					}
				case 'Sum':
					switch (_v0.b.$) {
						case 'TypeVarUse':
							break _v0$2;
						case 'Sum':
							var _v15 = _v0.a;
							var type00 = _v15.a;
							var type01 = _v15.b;
							var _v16 = _v0.b;
							var type10 = _v16.a;
							var type11 = _v16.b;
							return A3(
								$author$project$Lib$State$StatefulWithErr$map2,
								$author$project$Calculus$Base$Sum,
								A2($author$project$Calculus$Type$TypeVarContext$unification, type00, type10),
								A2($author$project$Calculus$Type$TypeVarContext$unification, type01, type11));
						default:
							var _v17 = _v0.a;
							return $author$project$Calculus$Type$TypeVarContext$throwTypeError(
								_List_fromArray(
									[$author$project$Calculus$Type$TypeVarContext$ExpectedSumType]));
					}
				case 'ConstBool':
					switch (_v0.b.$) {
						case 'TypeVarUse':
							break _v0$2;
						case 'ConstBool':
							var _v18 = _v0.a;
							var _v19 = _v0.b;
							return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstBool);
						default:
							var _v20 = _v0.a;
							return $author$project$Calculus$Type$TypeVarContext$throwTypeError(
								_List_fromArray(
									[$author$project$Calculus$Type$TypeVarContext$ExpectedBoolType]));
					}
				case 'ConstNat':
					switch (_v0.b.$) {
						case 'TypeVarUse':
							break _v0$2;
						case 'ConstNat':
							var _v21 = _v0.a;
							var _v22 = _v0.b;
							return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstNat);
						default:
							var _v23 = _v0.a;
							return $author$project$Calculus$Type$TypeVarContext$throwTypeError(
								_List_fromArray(
									[$author$project$Calculus$Type$TypeVarContext$ExpectedNatType]));
					}
				case 'List':
					switch (_v0.b.$) {
						case 'TypeVarUse':
							break _v0$2;
						case 'List':
							var type00 = _v0.a.a;
							var type11 = _v0.b.a;
							return A2(
								$author$project$Lib$State$StatefulWithErr$map,
								$author$project$Calculus$Base$List,
								A2($author$project$Calculus$Type$TypeVarContext$unification, type00, type11));
						default:
							return $author$project$Calculus$Type$TypeVarContext$throwTypeError(
								_List_fromArray(
									[$author$project$Calculus$Type$TypeVarContext$ExpectedListType]));
					}
				case 'Frozen':
					switch (_v0.b.$) {
						case 'TypeVarUse':
							break _v0$2;
						case 'Frozen':
							var type00 = _v0.a.a;
							var type11 = _v0.b.a;
							return A2(
								$author$project$Lib$State$StatefulWithErr$map,
								$author$project$Calculus$Base$Frozen,
								A2($author$project$Calculus$Type$TypeVarContext$unification, type00, type11));
						default:
							return $author$project$Calculus$Type$TypeVarContext$throwTypeError(
								_List_fromArray(
									[$author$project$Calculus$Type$TypeVarContext$ExpectedFrozenType]));
					}
				default:
					if (_v0.b.$ === 'TypeVarUse') {
						break _v0$2;
					} else {
						var _v24 = _v0.a;
						return _Debug_todo(
							'Calculus.Type.TypeVarContext',
							{
								start: {line: 485, column: 13},
								end: {line: 485, column: 23}
							})('');
					}
			}
		}
		var id1 = _v0.b.a;
		return A2(
			$author$project$Lib$State$StatefulWithErr$andThen,
			function (maybeExpandedType1) {
				if (maybeExpandedType1.$ === 'Just') {
					var expandedType1 = maybeExpandedType1.a;
					return A2($author$project$Calculus$Type$TypeVarContext$unification, type0, expandedType1);
				} else {
					return A2(
						$author$project$Lib$State$StatefulWithErr$second,
						A2($author$project$Calculus$Type$TypeVarContext$extendEquations, id1, type0),
						$author$project$Lib$State$StatefulWithErr$return(type0));
				}
			},
			$author$project$Calculus$Type$TypeVarContext$expandTypeAtTypeVarName(id1));
	});
var $author$project$Calculus$Type$Inference$unify = F2(
	function (type0, type1) {
		return $author$project$Calculus$Type$Inference$liftUnification(
			A2($author$project$Calculus$Type$TypeVarContext$unification, type0, type1));
	});
var $author$project$Lib$State$StatefulWithErr$update = F2(
	function (nextState, stateful_a0) {
		return function (state0) {
			var _v0 = stateful_a0(state0);
			if (_v0.$ === 'Ok') {
				var _v1 = _v0.a;
				var state1 = _v1.a;
				var a = _v1.b;
				return $elm$core$Result$Ok(
					_Utils_Tuple2(
						nextState(state1),
						a));
			} else {
				var err = _v0.a;
				return $elm$core$Result$Err(err);
			}
		};
	});
var $author$project$Calculus$Type$Inference$updateContext = function (nextContext) {
	return $author$project$Lib$State$StatefulWithErr$update(
		function (state) {
			var context = state.context;
			return _Utils_update(
				state,
				{
					context: nextContext(context)
				});
		});
};
var $author$project$Calculus$Type$Inference$updateContext0 = function (nextContext) {
	return $author$project$Lib$State$StatefulWithErr$update0(
		function (state) {
			var context = state.context;
			return _Utils_update(
				state,
				{
					context: nextContext(context)
				});
		});
};
var $author$project$Calculus$Type$Inference$infer = function (term) {
	switch (term.$) {
		case 'VarUse':
			var varName = term.a;
			return $author$project$Calculus$Type$Inference$getContext(
				function (context0) {
					var _v2 = A2($author$project$Calculus$Type$Inference$lookupType, varName, context0);
					if (_v2.$ === 'Just') {
						var type0 = _v2.a;
						return $author$project$Calculus$Type$Inference$instantiateForAll(type0);
					} else {
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (typeVar) {
								return A2(
									$author$project$Calculus$Type$Inference$updateContext,
									function (context1) {
										return A3($author$project$Calculus$Type$Inference$pushVarToContext, varName, typeVar, context1);
									},
									$author$project$Lib$State$StatefulWithErr$return(typeVar));
							},
							$author$project$Calculus$Type$Inference$generateFreshVar);
					}
				});
		case 'Pair':
			var fst = term.a;
			var snd = term.b;
			return A3(
				$author$project$Lib$State$StatefulWithErr$map2,
				F2(
					function (typeFst, typeSnd) {
						return A2($author$project$Calculus$Base$Product, typeFst, typeSnd);
					}),
				$author$project$Calculus$Type$Inference$infer(fst),
				$author$project$Calculus$Type$Inference$infer(snd));
		case 'MatchPair':
			var arg = term.a;
			var var0 = term.b.var0;
			var var1 = term.b.var1;
			var body = term.b.body;
			return A4(
				$author$project$Lib$State$StatefulWithErr$andThen3,
				F3(
					function (argType, varType0, varType1) {
						return A2(
							$author$project$Lib$State$StatefulWithErr$second,
							A2(
								$author$project$Calculus$Type$Inference$unify,
								A2($author$project$Calculus$Base$Product, varType0, varType1),
								argType),
							A3(
								$author$project$Lib$State$StatefulWithErr$mid,
								$author$project$Calculus$Type$Inference$updateContext0(
									function (context) {
										return A3(
											$author$project$Calculus$Type$Inference$pushVarToContext,
											var1,
											varType1,
											A3($author$project$Calculus$Type$Inference$pushVarToContext, var0, varType0, context));
									}),
								$author$project$Calculus$Type$Inference$infer(body),
								$author$project$Calculus$Type$Inference$updateContext0(
									function (context) {
										return A2(
											$author$project$Calculus$Type$Inference$popVarFromContext,
											var0,
											A2($author$project$Calculus$Type$Inference$popVarFromContext, var1, context));
									})));
					}),
				$author$project$Calculus$Type$Inference$infer(arg),
				$author$project$Calculus$Type$Inference$generateFreshVar,
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'Abstraction':
			var _var = term.a._var;
			var body = term.a.body;
			return A2(
				$author$project$Lib$State$StatefulWithErr$andThen,
				function (typeVar) {
					return A2(
						$author$project$Lib$State$StatefulWithErr$map,
						function (typeBody) {
							return A2($author$project$Calculus$Base$Arrow, typeVar, typeBody);
						},
						A3(
							$author$project$Lib$State$StatefulWithErr$mid,
							$author$project$Calculus$Type$Inference$updateContext0(
								function (context) {
									return A3($author$project$Calculus$Type$Inference$pushVarToContext, _var, typeVar, context);
								}),
							$author$project$Calculus$Type$Inference$infer(body),
							$author$project$Calculus$Type$Inference$updateContext0(
								function (context) {
									return A2($author$project$Calculus$Type$Inference$popVarFromContext, _var, context);
								})));
				},
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'Application':
			var fn = term.a;
			var arg = term.b;
			return A4(
				$author$project$Lib$State$StatefulWithErr$andThen3,
				F3(
					function (typeFn0, typeArg, resultType0) {
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (typeFn1) {
								if (typeFn1.$ === 'Arrow') {
									var resultType1 = typeFn1.b;
									return $author$project$Lib$State$StatefulWithErr$return(resultType1);
								} else {
									return $author$project$Calculus$Type$Inference$throwTypeError(
										_List_fromArray(
											[$author$project$Calculus$Type$TypeVarContext$ExpectedArrowType]));
								}
							},
							A2(
								$author$project$Calculus$Type$Inference$unify,
								typeFn0,
								A2($author$project$Calculus$Base$Arrow, typeArg, resultType0)));
					}),
				$author$project$Calculus$Type$Inference$infer(fn),
				$author$project$Calculus$Type$Inference$infer(arg),
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'Left':
			var leftTerm = term.a;
			return A3(
				$author$project$Lib$State$StatefulWithErr$map2,
				$author$project$Calculus$Base$Sum,
				$author$project$Calculus$Type$Inference$infer(leftTerm),
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'Right':
			var rightTerm = term.a;
			return A3(
				$author$project$Lib$State$StatefulWithErr$map2,
				$author$project$Calculus$Base$Sum,
				$author$project$Calculus$Type$Inference$generateFreshVar,
				$author$project$Calculus$Type$Inference$infer(rightTerm));
		case 'MatchSum':
			var arg = term.a;
			var leftBranch = term.b.leftBranch;
			var rightBranch = term.b.rightBranch;
			return A4(
				$author$project$Lib$State$StatefulWithErr$andThen3,
				F3(
					function (typeArg, leftTypeVar, rightTypeVar) {
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (sumType) {
								if (sumType.$ === 'Sum') {
									var leftType = sumType.a;
									var rightType = sumType.b;
									return A3(
										$author$project$Lib$State$StatefulWithErr$andThen2,
										F2(
											function (typeLeftBody, typeRightBody) {
												return A2($author$project$Calculus$Type$Inference$unify, typeLeftBody, typeRightBody);
											}),
										A3(
											$author$project$Lib$State$StatefulWithErr$mid,
											$author$project$Calculus$Type$Inference$updateContext0(
												function (context) {
													return A3($author$project$Calculus$Type$Inference$pushVarToContext, leftBranch._var, leftType, context);
												}),
											$author$project$Calculus$Type$Inference$infer(leftBranch.body),
											$author$project$Calculus$Type$Inference$updateContext0(
												function (context) {
													return A2($author$project$Calculus$Type$Inference$popVarFromContext, leftBranch._var, context);
												})),
										A3(
											$author$project$Lib$State$StatefulWithErr$mid,
											$author$project$Calculus$Type$Inference$updateContext0(
												function (context) {
													return A3($author$project$Calculus$Type$Inference$pushVarToContext, rightBranch._var, rightType, context);
												}),
											$author$project$Calculus$Type$Inference$infer(rightBranch.body),
											$author$project$Calculus$Type$Inference$updateContext0(
												function (context) {
													return A2($author$project$Calculus$Type$Inference$popVarFromContext, rightBranch._var, context);
												})));
								} else {
									return $author$project$Calculus$Type$Inference$throwTypeError(
										_List_fromArray(
											[$author$project$Calculus$Type$TypeVarContext$ExpectedSumType]));
								}
							},
							A2(
								$author$project$Calculus$Type$Inference$unify,
								A2($author$project$Calculus$Base$Sum, leftTypeVar, rightTypeVar),
								typeArg));
					}),
				$author$project$Calculus$Type$Inference$infer(arg),
				$author$project$Calculus$Type$Inference$generateFreshVar,
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'ConstTrue':
			return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstBool);
		case 'ConstFalse':
			return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstBool);
		case 'MatchBool':
			var arg = term.a;
			var trueBranch = term.b.trueBranch;
			var falseBranch = term.b.falseBranch;
			return A2(
				$author$project$Lib$State$StatefulWithErr$second,
				A2(
					$author$project$Lib$State$StatefulWithErr$andThen,
					function (argType) {
						return A2($author$project$Calculus$Type$Inference$unify, argType, $author$project$Calculus$Base$ConstBool);
					},
					$author$project$Calculus$Type$Inference$infer(arg)),
				A3(
					$author$project$Lib$State$StatefulWithErr$andThen2,
					$author$project$Calculus$Type$Inference$unify,
					$author$project$Calculus$Type$Inference$infer(trueBranch.body),
					$author$project$Calculus$Type$Inference$infer(falseBranch.body)));
		case 'ConstZero':
			return $author$project$Lib$State$StatefulWithErr$return($author$project$Calculus$Base$ConstNat);
		case 'Succ':
			var term1 = term.a;
			return A2(
				$author$project$Lib$State$StatefulWithErr$andThen,
				function (type1) {
					return A2($author$project$Calculus$Type$Inference$unify, type1, $author$project$Calculus$Base$ConstNat);
				},
				$author$project$Calculus$Type$Inference$infer(term1));
		case 'FoldNat':
			var arg = term.a;
			var zeroBranch = term.b.zeroBranch;
			var succBranch = term.b.succBranch;
			var argInference = A2(
				$author$project$Lib$State$StatefulWithErr$andThen,
				function (argType) {
					return A2($author$project$Calculus$Type$Inference$unify, argType, $author$project$Calculus$Base$ConstNat);
				},
				$author$project$Calculus$Type$Inference$infer(arg));
			return A2(
				$author$project$Lib$State$StatefulWithErr$second,
				argInference,
				A2(
					$author$project$Lib$State$StatefulWithErr$andThen,
					function (baseType) {
						var loopBodyInference = A3(
							$author$project$Lib$State$StatefulWithErr$mid,
							$author$project$Calculus$Type$Inference$updateContext0(
								function (context) {
									return A3($author$project$Calculus$Type$Inference$pushVarToContext, succBranch._var, baseType, context);
								}),
							$author$project$Calculus$Type$Inference$infer(succBranch.body),
							$author$project$Calculus$Type$Inference$updateContext0(
								function (context) {
									return A2($author$project$Calculus$Type$Inference$popVarFromContext, succBranch._var, context);
								}));
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (loopBodyType) {
								return A2($author$project$Calculus$Type$Inference$unify, loopBodyType, baseType);
							},
							loopBodyInference);
					},
					$author$project$Calculus$Type$Inference$infer(zeroBranch.body)));
		case 'ConstEmpty':
			return A2(
				$author$project$Lib$State$StatefulWithErr$map,
				function (_var) {
					return $author$project$Calculus$Base$List(_var);
				},
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'Cons':
			var headTerm = term.a;
			var tailTerm = term.b;
			return A3(
				$author$project$Lib$State$StatefulWithErr$andThen2,
				F2(
					function (headType, tailType) {
						return A2(
							$author$project$Calculus$Type$Inference$unify,
							$author$project$Calculus$Base$List(headType),
							tailType);
					}),
				$author$project$Calculus$Type$Inference$infer(headTerm),
				$author$project$Calculus$Type$Inference$infer(tailTerm));
		case 'FoldList':
			var arg = term.a;
			var emptyBranch = term.b.emptyBranch;
			var consBranch = term.b.consBranch;
			return A5(
				$author$project$Lib$State$StatefulWithErr$andThen4,
				F4(
					function (stateType0, argType0, loopVar, stateVar) {
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (innerListVar) {
								return A2(
									$author$project$Lib$State$StatefulWithErr$andThen,
									function (argType1) {
										if (argType1.$ === 'List') {
											var innerType0 = argType1.a;
											return A3(
												$author$project$Lib$State$StatefulWithErr$andThen2,
												F2(
													function (stateType1, innerType1) {
														return A2(
															$author$project$Lib$State$StatefulWithErr$andThen,
															function (loopBodyType) {
																return A2($author$project$Calculus$Type$Inference$unify, loopBodyType, stateType1);
															},
															A3(
																$author$project$Lib$State$StatefulWithErr$mid,
																$author$project$Calculus$Type$Inference$updateContext0(
																	function (context) {
																		return A3(
																			$author$project$Calculus$Type$Inference$pushVarToContext,
																			consBranch.var1,
																			stateType1,
																			A3($author$project$Calculus$Type$Inference$pushVarToContext, consBranch.var0, innerType1, context));
																	}),
																$author$project$Calculus$Type$Inference$infer(consBranch.body),
																$author$project$Calculus$Type$Inference$updateContext0(
																	function (context) {
																		return A2(
																			$author$project$Calculus$Type$Inference$popVarFromContext,
																			consBranch.var0,
																			A2($author$project$Calculus$Type$Inference$popVarFromContext, consBranch.var1, context));
																	})));
													}),
												A2($author$project$Calculus$Type$Inference$unify, stateVar, stateType0),
												A2($author$project$Calculus$Type$Inference$unify, loopVar, innerType0));
										} else {
											return $author$project$Calculus$Type$Inference$throwTypeError(
												_List_fromArray(
													[$author$project$Calculus$Type$TypeVarContext$ExpectedListType]));
										}
									},
									A2(
										$author$project$Calculus$Type$Inference$unify,
										$author$project$Calculus$Base$List(innerListVar),
										argType0));
							},
							$author$project$Calculus$Type$Inference$generateFreshVar);
					}),
				$author$project$Calculus$Type$Inference$infer(emptyBranch.body),
				$author$project$Calculus$Type$Inference$infer(arg),
				$author$project$Calculus$Type$Inference$generateFreshVar,
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'Delay':
			var body = term.a.body;
			return A2(
				$author$project$Lib$State$StatefulWithErr$map,
				$author$project$Calculus$Base$Frozen,
				$author$project$Calculus$Type$Inference$infer(body));
		case 'Force':
			var body = term.a;
			return A3(
				$author$project$Lib$State$StatefulWithErr$andThen2,
				F2(
					function (bodyType0, freshVar) {
						return A2(
							$author$project$Lib$State$StatefulWithErr$andThen,
							function (bodyType1) {
								if (bodyType1.$ === 'Frozen') {
									var innerType = bodyType1.a;
									return $author$project$Lib$State$StatefulWithErr$return(innerType);
								} else {
									return $author$project$Calculus$Type$Inference$throwTypeError(
										_List_fromArray(
											[$author$project$Calculus$Type$TypeVarContext$ExpectedFrozenType]));
								}
							},
							A2(
								$author$project$Calculus$Type$Inference$unify,
								$author$project$Calculus$Base$Frozen(freshVar),
								bodyType0));
					}),
				$author$project$Calculus$Type$Inference$infer(body),
				$author$project$Calculus$Type$Inference$generateFreshVar);
		case 'LetBe':
			var exp = term.a;
			var _var = term.b._var;
			var body = term.b.body;
			return A2(
				$author$project$Lib$State$StatefulWithErr$andThen,
				function (closedExpType) {
					return A3(
						$author$project$Lib$State$StatefulWithErr$mid,
						$author$project$Calculus$Type$Inference$updateContext0(
							function (context) {
								return A3($author$project$Calculus$Type$Inference$pushVarToContext, _var, closedExpType, context);
							}),
						$author$project$Calculus$Type$Inference$infer(body),
						$author$project$Calculus$Type$Inference$updateContext0(
							function (context) {
								return A2($author$project$Calculus$Type$Inference$popVarFromContext, _var, context);
							}));
				},
				$author$project$Calculus$Type$Inference$inferAndClose(exp));
		default:
			var module0 = term.a;
			var _var = term.b;
			return _Debug_todo(
				'Calculus.Type.Inference',
				{
					start: {line: 669, column: 13},
					end: {line: 669, column: 23}
				})('');
	}
};
var $author$project$Calculus$Type$Inference$inferAndClose = function (term) {
	return A2(
		$author$project$Lib$State$StatefulWithErr$second,
		$author$project$Calculus$Type$Inference$pushTypeVarStackFrame0,
		A2(
			$author$project$Lib$State$StatefulWithErr$andThen,
			function (type0) {
				return A2(
					$author$project$Lib$State$StatefulWithErr$andThen,
					function (_v0) {
						var varsToBeClosed = _v0.a;
						var expandedType0 = _v0.b;
						var update = F2(
							function (typeVar, t) {
								return A2($author$project$Calculus$Base$ForAll, typeVar, t);
							});
						var initType = expandedType0;
						var finalType = A3(
							$elm$core$List$foldl,
							update,
							initType,
							$elm$core$Set$toList(varsToBeClosed));
						return $author$project$Lib$State$StatefulWithErr$return(finalType);
					},
					$author$project$Calculus$Type$Inference$popTypeVarStackFrameAndExpand(type0));
			},
			$author$project$Calculus$Type$Inference$infer(term)));
};
var $author$project$Calculus$Type$Inference$infer0 = function (term) {
	return A2(
		$elm$core$Result$map,
		function (_v0) {
			var state = _v0.a;
			var type0 = _v0.b;
			return _Utils_Tuple3(state.context, state.typeVarContext, type0);
		},
		A2(
			$author$project$Lib$State$StatefulWithErr$run,
			$author$project$Calculus$Type$Inference$infer(term),
			$author$project$Calculus$Type$Inference$emptyState));
};
var $author$project$Calculus$Parser$runTerm = function (input) {
	return A2(
		$elm$core$Result$map,
		$elm$core$Tuple$second,
		A3(
			$author$project$Lib$Parser$Parser$run,
			$author$project$Calculus$Parser$term,
			{},
			$author$project$Lib$Parser$State$return(input)));
};
var $author$project$Ui$Tab$Program$exampleBinding = function () {
	var input7 = 'delay {. 00}';
	var input6 = 'let twice = \\{ f x .\n    [$f [$f $x]]\n};\nlet plus-one = \\{ x . succ($x) };\nlet not = \\{ b . match-bool $b { true . false } { false . true } };\npair($twice $plus-one)\n';
	var input5 = 'let f = \\{ x . $x };\n$f';
	var input4 = '\\{ f p .\n    match-pair $p\n        { pair(x y) . [$f $x $y] }\n}\n';
	var input2 = '[ \\{x . succ($x)} 04 ]\n';
	var input1 = 'pair(\n    match-bool true { true . $a } { false . $b },\n    pair(\n        match-bool true { true . 00 } { false . $a },\n        match-bool true { true . 01 } { false . $b },\n    )\n)';
	var input0 = 'let flip = \\{ p .\n    match-pair $p\n        { pair(x y) . pair($y $x) }\n};\npair(\n    [$flip pair(00 01)],\n    [$flip pair(true false)]\n)\n';
	var input = input0;
	var termResult = $author$project$Calculus$Parser$runTerm(input);
	return {
		evaledTerm: function () {
			if (termResult.$ === 'Ok') {
				var term = termResult.a;
				return $elm$core$Maybe$Just(
					$author$project$Calculus$Evaluation$Evaluation$eval0(term));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}(),
		inferedType: function () {
			if (termResult.$ === 'Ok') {
				var term = termResult.a;
				return $elm$core$Maybe$Just(
					$author$project$Calculus$Type$Inference$infer0(term));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}(),
		input: input,
		parsedTerm: $elm$core$Maybe$Just(termResult)
	};
}();
var $author$project$Ui$Tab$Program$init = $author$project$Ui$Control$InitContext$setModelTo($author$project$Ui$Tab$Program$exampleBinding);
var $author$project$Ui$Tab$RegisterMachine$EditorMsg = function (a) {
	return {$: 'EditorMsg', a: a};
};
var $author$project$Ui$Tab$RegisterMachine$centerOfMemoryView = function (_v0) {
	var top = _v0.top;
	var bottom = _v0.bottom;
	return bottom + (((top - bottom) / 2) | 0);
};
var $author$project$RegisterMachine$Base$AssignLabel = F2(
	function (a, b) {
		return {$: 'AssignLabel', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$AssignOperation = F2(
	function (a, b) {
		return {$: 'AssignOperation', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$AssignRegister = F2(
	function (a, b) {
		return {$: 'AssignRegister', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$Constant = function (a) {
	return {$: 'Constant', a: a};
};
var $author$project$RegisterMachine$Base$ConstructPair = F3(
	function (a, b, c) {
		return {$: 'ConstructPair', a: a, b: b, c: c};
	});
var $author$project$RegisterMachine$Base$DualSecond = F2(
	function (a, b) {
		return {$: 'DualSecond', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$DualSetFirst = F2(
	function (a, b) {
		return {$: 'DualSetFirst', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$DualSetSecond = F2(
	function (a, b) {
		return {$: 'DualSetSecond', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$First = F2(
	function (a, b) {
		return {$: 'First', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$Halt = {$: 'Halt'};
var $author$project$RegisterMachine$Base$JumpToLabel = function (a) {
	return {$: 'JumpToLabel', a: a};
};
var $author$project$RegisterMachine$Base$JumpToLabelAtRegister = function (a) {
	return {$: 'JumpToLabelAtRegister', a: a};
};
var $author$project$RegisterMachine$Base$JumpToLabelIf = F2(
	function (a, b) {
		return {$: 'JumpToLabelIf', a: a, b: b};
	});
var $author$project$RegisterMachine$Machine$Label = function (a) {
	return {$: 'Label', a: a};
};
var $author$project$RegisterMachine$Base$MarkAsMoved = F2(
	function (a, b) {
		return {$: 'MarkAsMoved', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$MoveToDual = F2(
	function (a, b) {
		return {$: 'MoveToDual', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$Nil = {$: 'Nil'};
var $author$project$RegisterMachine$Base$Num = function (a) {
	return {$: 'Num', a: a};
};
var $author$project$RegisterMachine$Base$Operation = F2(
	function (a, b) {
		return {$: 'Operation', a: a, b: b};
	});
var $author$project$RegisterMachine$Machine$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $author$project$RegisterMachine$Base$Pop = function (a) {
	return {$: 'Pop', a: a};
};
var $author$project$RegisterMachine$Base$PushRegister = function (a) {
	return {$: 'PushRegister', a: a};
};
var $author$project$RegisterMachine$Base$Register = function (a) {
	return {$: 'Register', a: a};
};
var $author$project$RegisterMachine$Base$Second = F2(
	function (a, b) {
		return {$: 'Second', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$SwapMemory = {$: 'SwapMemory'};
var $author$project$RegisterMachine$Base$Uninitialized = {$: 'Uninitialized'};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $author$project$RegisterMachine$GarbageCollector$init = F3(
	function (name, registers, instructions) {
		return {
			controller: {
				instructions: instructions,
				registers: $elm$core$Set$fromList(registers)
			},
			initialRegisterEnvironment: $elm$core$Dict$fromList(
				A2(
					$elm$core$List$map,
					function (register) {
						return _Utils_Tuple2(register, $author$project$RegisterMachine$Base$Uninitialized);
					},
					registers)),
			name: name
		};
	});
var $author$project$RegisterMachine$GarbageCollector$controller = A3(
	$author$project$RegisterMachine$GarbageCollector$init,
	'garbage-collector',
	_List_fromArray(
		['xs', 'ys', 'main-pair', 'dual-pair', 'tmp', 'root', 'test', 'continue']),
	_List_fromArray(
		[
			$author$project$RegisterMachine$Machine$Label('initialization'),
			$author$project$RegisterMachine$Machine$Perform(
			A3(
				$author$project$RegisterMachine$Base$ConstructPair,
				'ys',
				$author$project$RegisterMachine$Base$Constant(
					$author$project$RegisterMachine$Base$Num(16)),
				$author$project$RegisterMachine$Base$Constant($author$project$RegisterMachine$Base$Nil))),
			$author$project$RegisterMachine$Machine$Perform(
			A3(
				$author$project$RegisterMachine$Base$ConstructPair,
				'xs',
				$author$project$RegisterMachine$Base$Constant(
					$author$project$RegisterMachine$Base$Num(32)),
				$author$project$RegisterMachine$Base$Register('ys'))),
			$author$project$RegisterMachine$Machine$Label('initializing root'),
			$author$project$RegisterMachine$Machine$Perform(
			A3(
				$author$project$RegisterMachine$Base$ConstructPair,
				'root',
				$author$project$RegisterMachine$Base$Register('xs'),
				$author$project$RegisterMachine$Base$Constant($author$project$RegisterMachine$Base$Nil))),
			$author$project$RegisterMachine$Machine$Perform(
			A3(
				$author$project$RegisterMachine$Base$ConstructPair,
				'root',
				$author$project$RegisterMachine$Base$Register('ys'),
				$author$project$RegisterMachine$Base$Register('root'))),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$AssignRegister, 'to-be-moved', 'root')),
			$author$project$RegisterMachine$Machine$Label('start garbage collection'),
			$author$project$RegisterMachine$Machine$Perform(
			A2(
				$author$project$RegisterMachine$Base$AssignOperation,
				'test',
				A2(
					$author$project$RegisterMachine$Base$Operation,
					'nil?',
					_List_fromArray(
						[
							$author$project$RegisterMachine$Base$Register('to-be-moved')
						])))),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'test', 'refresh root')),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$First, 'main-pair', 'to-be-moved')),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$Second, 'to-be-moved', 'to-be-moved')),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$AssignLabel, 'continue', 'start garbage collection')),
			$author$project$RegisterMachine$Machine$Label('move-pair'),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$First, 'tmp', 'main-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			A2(
				$author$project$RegisterMachine$Base$AssignOperation,
				'test',
				A2(
					$author$project$RegisterMachine$Base$Operation,
					'moved?',
					_List_fromArray(
						[
							$author$project$RegisterMachine$Base$Register('tmp')
						])))),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'test', 'already moved')),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$MoveToDual, 'dual-pair', 'main-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$MarkAsMoved, 'main-pair', 'dual-pair')),
			$author$project$RegisterMachine$Machine$Label('attempt to move first component'),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$AssignRegister, 'main-pair', 'tmp')),
			$author$project$RegisterMachine$Machine$Perform(
			A2(
				$author$project$RegisterMachine$Base$AssignOperation,
				'test',
				A2(
					$author$project$RegisterMachine$Base$Operation,
					'pair?',
					_List_fromArray(
						[
							$author$project$RegisterMachine$Base$Register('main-pair')
						])))),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'test', 'move first component')),
			$author$project$RegisterMachine$Machine$Label('attempt to move second component'),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$DualSecond, 'main-pair', 'dual-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			A2(
				$author$project$RegisterMachine$Base$AssignOperation,
				'test',
				A2(
					$author$project$RegisterMachine$Base$Operation,
					'pair?',
					_List_fromArray(
						[
							$author$project$RegisterMachine$Base$Register('main-pair')
						])))),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'test', 'move second component')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue')),
			$author$project$RegisterMachine$Machine$Label('move second component'),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$PushRegister('dual-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$PushRegister('continue')),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$AssignLabel, 'continue', 'after second call')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$JumpToLabel('move-pair')),
			$author$project$RegisterMachine$Machine$Label('after second call'),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$AssignRegister, 'tmp', 'dual-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$Pop('continue')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$Pop('dual-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			A2(
				$author$project$RegisterMachine$Base$DualSetSecond,
				'dual-pair',
				$author$project$RegisterMachine$Base$Register('tmp'))),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue')),
			$author$project$RegisterMachine$Machine$Label('move first component'),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$PushRegister('dual-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$PushRegister('continue')),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$AssignLabel, 'continue', 'after first call')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$JumpToLabel('move-pair')),
			$author$project$RegisterMachine$Machine$Label('after first call'),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$AssignRegister, 'tmp', 'dual-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$Pop('continue')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$Pop('dual-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			A2(
				$author$project$RegisterMachine$Base$DualSetFirst,
				'dual-pair',
				$author$project$RegisterMachine$Base$Register('tmp'))),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$JumpToLabel('attempt to move second component')),
			$author$project$RegisterMachine$Machine$Label('already moved'),
			$author$project$RegisterMachine$Machine$Perform(
			A2($author$project$RegisterMachine$Base$Second, 'dual-pair', 'main-pair')),
			$author$project$RegisterMachine$Machine$Perform(
			$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue')),
			$author$project$RegisterMachine$Machine$Label('refresh root'),
			$author$project$RegisterMachine$Machine$Label('done'),
			$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$SwapMemory),
			$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
		]));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $author$project$RegisterMachine$Base$ConstantValue = function (a) {
	return {$: 'ConstantValue', a: a};
};
var $author$project$RegisterMachine$Controllers$num = function (x) {
	return $author$project$RegisterMachine$Base$ConstantValue(
		$author$project$RegisterMachine$Base$Num(x));
};
var $elm$core$List$product = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$mul, 1, numbers);
};
var $author$project$RegisterMachine$Controllers$controller0_gcd = function () {
	var b = _List_fromArray(
		[3, 5, 11]);
	var a = _List_fromArray(
		[3, 5, 7]);
	return {
		controller: {
			instructions: _List_fromArray(
				[
					$author$project$RegisterMachine$Machine$Label('loop'),
					$author$project$RegisterMachine$Machine$Perform(
					A2(
						$author$project$RegisterMachine$Base$AssignOperation,
						'is-b-zero?',
						A2(
							$author$project$RegisterMachine$Base$Operation,
							'zero?',
							_List_fromArray(
								[
									$author$project$RegisterMachine$Base$Register('b')
								])))),
					$author$project$RegisterMachine$Machine$Perform(
					A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'is-b-zero?', 'done')),
					$author$project$RegisterMachine$Machine$Perform(
					A2(
						$author$project$RegisterMachine$Base$AssignOperation,
						'tmp',
						A2(
							$author$project$RegisterMachine$Base$Operation,
							'remainder',
							_List_fromArray(
								[
									$author$project$RegisterMachine$Base$Register('a'),
									$author$project$RegisterMachine$Base$Register('b')
								])))),
					$author$project$RegisterMachine$Machine$Perform(
					A2($author$project$RegisterMachine$Base$AssignRegister, 'a', 'b')),
					$author$project$RegisterMachine$Machine$Perform(
					A2($author$project$RegisterMachine$Base$AssignRegister, 'b', 'tmp')),
					$author$project$RegisterMachine$Machine$Perform(
					$author$project$RegisterMachine$Base$JumpToLabel('loop')),
					$author$project$RegisterMachine$Machine$Label('done'),
					$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
				]),
			registers: $elm$core$Set$fromList(
				_List_fromArray(
					['a', 'b', 'tmp', 'is-b-zero?', 'label-test']))
		},
		initialRegisterEnvironment: $elm$core$Dict$fromList(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'a',
					$author$project$RegisterMachine$Controllers$num(
						$elm$core$List$product(a))),
					_Utils_Tuple2(
					'b',
					$author$project$RegisterMachine$Controllers$num(
						$elm$core$List$product(b))),
					_Utils_Tuple2(
					'tmp',
					$author$project$RegisterMachine$Controllers$num(0)),
					_Utils_Tuple2(
					'is-b-zero?',
					$author$project$RegisterMachine$Controllers$num(0))
				])),
		name: $elm$core$String$concat(
			_List_fromArray(
				[
					'gcd(',
					A2(
					$elm$core$String$join,
					'*',
					A2($elm$core$List$map, $elm$core$String$fromInt, a)),
					', ',
					A2(
					$elm$core$String$join,
					'*',
					A2($elm$core$List$map, $elm$core$String$fromInt, b)),
					')'
				]))
	};
}();
var $author$project$RegisterMachine$Base$JumpToLabelAtRegisterIf = F2(
	function (a, b) {
		return {$: 'JumpToLabelAtRegisterIf', a: a, b: b};
	});
var $author$project$RegisterMachine$Controllers$controller10_append = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'xs',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(40)),
					$author$project$RegisterMachine$Base$Constant($author$project$RegisterMachine$Base$Nil))),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'xs',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(30)),
					$author$project$RegisterMachine$Base$Register('xs'))),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'xs',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(20)),
					$author$project$RegisterMachine$Base$Register('xs'))),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'xs',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(10)),
					$author$project$RegisterMachine$Base$Register('xs'))),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'ys',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(16)),
					$author$project$RegisterMachine$Base$Constant($author$project$RegisterMachine$Base$Nil))),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'ys',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(32)),
					$author$project$RegisterMachine$Base$Register('ys'))),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'ys',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(64)),
					$author$project$RegisterMachine$Base$Register('ys'))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignLabel, 'continue', 'done')),
				$author$project$RegisterMachine$Machine$Label('append'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'nil?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('xs')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelAtRegisterIf, 'done?', 'continue')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$First, 'x', 'xs')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$Second, 'xs', 'xs')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('x')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignLabel, 'continue', 'append-after-rec-call')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('append')),
				$author$project$RegisterMachine$Machine$Label('append-after-rec-call'),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('x')),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'ys',
					$author$project$RegisterMachine$Base$Register('x'),
					$author$project$RegisterMachine$Base$Register('ys'))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['xs', 'ys', 'x', 'done?', 'continue']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('continue', $author$project$RegisterMachine$Base$Uninitialized),
				_Utils_Tuple2('xs', $author$project$RegisterMachine$Base$Uninitialized),
				_Utils_Tuple2('ys', $author$project$RegisterMachine$Base$Uninitialized),
				_Utils_Tuple2('x', $author$project$RegisterMachine$Base$Uninitialized),
				_Utils_Tuple2('done?', $author$project$RegisterMachine$Base$Uninitialized)
			])),
	name: 'append'
};
var $author$project$RegisterMachine$Base$AssignConstant = F2(
	function (a, b) {
		return {$: 'AssignConstant', a: a, b: b};
	});
var $author$project$RegisterMachine$Controllers$controller1_remainder = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'a',
					$author$project$RegisterMachine$Base$Num(16))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'b',
					$author$project$RegisterMachine$Base$Num(3))),
				$author$project$RegisterMachine$Machine$Label('start'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'less-than?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('a'),
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'done?', 'done')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'a',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'sub',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('a'),
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('start')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['a', 'b', 'is-finished?']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'a',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'b',
				$author$project$RegisterMachine$Controllers$num(15)),
				_Utils_Tuple2(
				'done?',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'remainder'
};
var $author$project$RegisterMachine$Controllers$controller2_fct_iterative = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'counter',
					$author$project$RegisterMachine$Base$Num(5))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'state',
					$author$project$RegisterMachine$Base$Num(1))),
				$author$project$RegisterMachine$Machine$Label('loop'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'zero?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('counter')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'done?', 'done')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'state',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'mul',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('state'),
								$author$project$RegisterMachine$Base$Register('counter')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'counter',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'decrement',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('counter')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('loop')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['counter', 'state', 'done?']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'counter',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'state',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'done?',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'fct-iterative'
};
var $author$project$RegisterMachine$Controllers$controller3_gcd_with_inlined_remainder = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'a',
					$author$project$RegisterMachine$Base$Num((3 * 5) * 7))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'b',
					$author$project$RegisterMachine$Base$Num((3 * 5) * 5))),
				$author$project$RegisterMachine$Machine$Label('gcd-loop'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'zero?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'done?', 'done')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignRegister, 'remainder-result', 'a')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('remainder')),
				$author$project$RegisterMachine$Machine$Label('after-remainder-done'),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignRegister, 'a', 'b')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignRegister, 'b', 'remainder-result')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('gcd-loop')),
				$author$project$RegisterMachine$Machine$Label('remainder'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'remainder-done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'less-than?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('remainder-result'),
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'remainder-done?', 'after-remainder-done')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'remainder-result',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'sub',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('remainder-result'),
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('remainder')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['a', 'b', 'remainder-result', 'done?', 'remainder-done?']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'a',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'b',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'remainder-result',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'done?',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'remainder-done?',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'gcd-with-inlined-remainder'
};
var $author$project$RegisterMachine$Base$AssignCallAtLabel = F2(
	function (a, b) {
		return {$: 'AssignCallAtLabel', a: a, b: b};
	});
var $author$project$RegisterMachine$Controllers$controller4_gcd_with_inlined_remainder_using_jump = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'a',
					$author$project$RegisterMachine$Base$Num((3 * 5) * 7))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'b',
					$author$project$RegisterMachine$Base$Num((3 * 5) * 5))),
				$author$project$RegisterMachine$Machine$Label('gcd-loop'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'zero?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'done?', 'done')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignRegister, 'remainder-result', 'a')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignCallAtLabel, 'continue', 'remainder')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignRegister, 'a', 'b')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignRegister, 'b', 'remainder-result')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('gcd-loop')),
				$author$project$RegisterMachine$Machine$Label('remainder'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'remainder-done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'less-than?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('remainder-result'),
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelAtRegisterIf, 'remainder-done?', 'continue')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'remainder-result',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'sub',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('remainder-result'),
								$author$project$RegisterMachine$Base$Register('b')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('remainder')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['a', 'b', 'remainder-result', 'done?', 'remainder-done?', 'continue']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'a',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'b',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'remainder-result',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'done?',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'remainder-done?',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'continue',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'gcd-with-inlined-remainder-using-jump'
};
var $author$project$RegisterMachine$Controllers$controller6_fct_recursive = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'n',
					$author$project$RegisterMachine$Base$Num(5))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignCallAtLabel, 'continue', 'fct')),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt),
				$author$project$RegisterMachine$Machine$Label('fct'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'zero?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'done?', 'done')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('n')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'n',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'decrement',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignCallAtLabel, 'continue', 'fct')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('n')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'result',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'mul',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n'),
								$author$project$RegisterMachine$Base$Register('result')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'result',
					$author$project$RegisterMachine$Base$Num(1))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue'))
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['n', 'result', 'done?']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'n',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'result',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'done?',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'continue',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'fct-recursive'
};
var $author$project$RegisterMachine$Controllers$controller7_fibonacci_recursive = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignConstant,
					'n',
					$author$project$RegisterMachine$Base$Num(8))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignCallAtLabel, 'continue', 'fib')),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt),
				$author$project$RegisterMachine$Machine$Label('fib'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'less-than?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n'),
								$author$project$RegisterMachine$Base$Constant(
								$author$project$RegisterMachine$Base$Num(2))
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'done?', 'done')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'n',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'decrement',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('n')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignCallAtLabel, 'continue', 'fib')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('n')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'n',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'decrement',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('result')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$PushRegister('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignCallAtLabel, 'continue', 'fib')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('continue')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$Pop('tmp')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'result',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'add',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('result'),
								$author$project$RegisterMachine$Base$Register('tmp')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$AssignRegister, 'result', 'n')),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabelAtRegister('continue'))
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['n', 'result', 'tmp', 'done?', 'continue']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'n',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'result',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'tmp',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'done?',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'continue',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'fibonacci-recursive'
};
var $author$project$RegisterMachine$Base$SetFirst = F2(
	function (a, b) {
		return {$: 'SetFirst', a: a, b: b};
	});
var $author$project$RegisterMachine$Base$SetSecond = F2(
	function (a, b) {
		return {$: 'SetSecond', a: a, b: b};
	});
var $author$project$RegisterMachine$Controllers$nil = $author$project$RegisterMachine$Base$ConstantValue($author$project$RegisterMachine$Base$Nil);
var $author$project$RegisterMachine$Controllers$controller8_memory_test = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Label('memory_test'),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'p',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(16)),
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(32)))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$First, 'a', 'p')),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$Second, 'b', 'p')),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$SetFirst,
					'p',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(17)))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$SetSecond,
					'p',
					$author$project$RegisterMachine$Base$Constant(
						$author$project$RegisterMachine$Base$Num(33)))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'test',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'pair?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('p')
							])))),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['p', 'a', 'b', 'test']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('p', $author$project$RegisterMachine$Controllers$nil),
				_Utils_Tuple2(
				'a',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'b',
				$author$project$RegisterMachine$Controllers$num(0)),
				_Utils_Tuple2(
				'test',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'memory-test'
};
var $author$project$RegisterMachine$Controllers$controller9_range = {
	controller: {
		instructions: _List_fromArray(
			[
				$author$project$RegisterMachine$Machine$Label('start'),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'done?',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'zero?',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				A2($author$project$RegisterMachine$Base$JumpToLabelIf, 'done?', 'done')),
				$author$project$RegisterMachine$Machine$Perform(
				A3(
					$author$project$RegisterMachine$Base$ConstructPair,
					'xs',
					$author$project$RegisterMachine$Base$Register('n'),
					$author$project$RegisterMachine$Base$Register('xs'))),
				$author$project$RegisterMachine$Machine$Perform(
				A2(
					$author$project$RegisterMachine$Base$AssignOperation,
					'n',
					A2(
						$author$project$RegisterMachine$Base$Operation,
						'decrement',
						_List_fromArray(
							[
								$author$project$RegisterMachine$Base$Register('n')
							])))),
				$author$project$RegisterMachine$Machine$Perform(
				$author$project$RegisterMachine$Base$JumpToLabel('start')),
				$author$project$RegisterMachine$Machine$Label('done'),
				$author$project$RegisterMachine$Machine$Perform($author$project$RegisterMachine$Base$Halt)
			]),
		registers: $elm$core$Set$fromList(
			_List_fromArray(
				['xs', 'n', 'done?']))
	},
	initialRegisterEnvironment: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('xs', $author$project$RegisterMachine$Controllers$nil),
				_Utils_Tuple2(
				'n',
				$author$project$RegisterMachine$Controllers$num(5)),
				_Utils_Tuple2(
				'done?',
				$author$project$RegisterMachine$Controllers$num(0))
			])),
	name: 'range'
};
var $PaackEng$elm_ui_dropdown$Dropdown$State = function (a) {
	return {$: 'State', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$init = function (id) {
	return $PaackEng$elm_ui_dropdown$Dropdown$State(
		{filterText: '', focusedIndex: 0, id: id, isOpen: false});
};
var $author$project$RegisterMachine$Ui$Base$Halt = {$: 'Halt'};
var $author$project$RegisterMachine$Ui$Editor$TraversingInstructions = function (a) {
	return {$: 'TraversingInstructions', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$TraversingNodes = {$: 'TraversingNodes'};
var $author$project$RegisterMachine$Ui$Base$Instruction = F3(
	function (a, b, c) {
		return {$: 'Instruction', a: a, b: b, c: c};
	});
var $author$project$RegisterMachine$Ui$Base$OperationApplicationKind = {$: 'OperationApplicationKind'};
var $author$project$RegisterMachine$Ui$Base$Dynamic = {$: 'Dynamic'};
var $author$project$RegisterMachine$Ui$Base$Integer = {$: 'Integer'};
var $author$project$RegisterMachine$Ui$Base$LabelUse = {$: 'LabelUse'};
var $author$project$RegisterMachine$Ui$Base$Nil = {$: 'Nil'};
var $author$project$RegisterMachine$Ui$Base$RegisterUse = {$: 'RegisterUse'};
var $author$project$RegisterMachine$Ui$Base$argExpectation = _List_fromArray(
	[$author$project$RegisterMachine$Ui$Base$RegisterUse, $author$project$RegisterMachine$Ui$Base$LabelUse, $author$project$RegisterMachine$Ui$Base$Integer, $author$project$RegisterMachine$Ui$Base$Nil]);
var $author$project$RegisterMachine$Ui$Base$Node = F4(
	function (a, b, c, d) {
		return {$: 'Node', a: a, b: b, c: c, d: d};
	});
var $author$project$RegisterMachine$Ui$Base$UnfinishedNode = {$: 'UnfinishedNode'};
var $author$project$RegisterMachine$Ui$Base$emptyNode = F2(
	function (nodeKind, nodeExpectation) {
		return A4($author$project$RegisterMachine$Ui$Base$Node, nodeKind, $author$project$RegisterMachine$Ui$Base$UnfinishedNode, nodeExpectation, '');
	});
var $author$project$RegisterMachine$Ui$Editor$argDyn = A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Dynamic, $author$project$RegisterMachine$Ui$Base$argExpectation);
var $author$project$Lib$ZipList$fromList = F2(
	function (x, xs) {
		return _Utils_Tuple3(_List_Nil, x, xs);
	});
var $author$project$RegisterMachine$Ui$Base$ContainsUnfinishedNodes = {$: 'ContainsUnfinishedNodes'};
var $author$project$RegisterMachine$Ui$Base$initialInstructionValidity = $author$project$RegisterMachine$Ui$Base$ContainsUnfinishedNodes;
var $author$project$RegisterMachine$Ui$Base$Static = {$: 'Static'};
var $author$project$RegisterMachine$Ui$Base$OperationName = {$: 'OperationName'};
var $author$project$RegisterMachine$Ui$Base$operationNameExpectation = _List_fromArray(
	[$author$project$RegisterMachine$Ui$Base$OperationName]);
var $author$project$RegisterMachine$Ui$Editor$opName = A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$operationNameExpectation);
var $author$project$RegisterMachine$Ui$Base$RegisterName = {$: 'RegisterName'};
var $author$project$RegisterMachine$Ui$Base$registerExpectation = _List_fromArray(
	[$author$project$RegisterMachine$Ui$Base$RegisterName]);
var $author$project$RegisterMachine$Ui$Editor$src = A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$registerExpectation);
var $author$project$RegisterMachine$Ui$Editor$exampleInstruction0 = A3(
	$author$project$RegisterMachine$Ui$Base$Instruction,
	$author$project$RegisterMachine$Ui$Base$OperationApplicationKind,
	A2(
		$author$project$Lib$ZipList$fromList,
		$author$project$RegisterMachine$Ui$Editor$src,
		_List_fromArray(
			[$author$project$RegisterMachine$Ui$Editor$opName, $author$project$RegisterMachine$Ui$Editor$argDyn, $author$project$RegisterMachine$Ui$Editor$argDyn, $author$project$RegisterMachine$Ui$Editor$argDyn])),
	$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
var $author$project$RegisterMachine$Ui$Editor$exampleInstruction1 = A3(
	$author$project$RegisterMachine$Ui$Base$Instruction,
	$author$project$RegisterMachine$Ui$Base$OperationApplicationKind,
	A2(
		$author$project$Lib$ZipList$fromList,
		$author$project$RegisterMachine$Ui$Editor$src,
		_List_fromArray(
			[$author$project$RegisterMachine$Ui$Editor$opName, $author$project$RegisterMachine$Ui$Editor$argDyn])),
	$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
var $author$project$RegisterMachine$Ui$Base$LabelKind = {$: 'LabelKind'};
var $author$project$RegisterMachine$Ui$Base$Label = {$: 'Label'};
var $author$project$RegisterMachine$Ui$Base$labelExpectation = _List_fromArray(
	[$author$project$RegisterMachine$Ui$Base$Label]);
var $author$project$RegisterMachine$Ui$Editor$lbl = A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$labelExpectation);
var $author$project$RegisterMachine$Ui$Editor$exampleInstruction2 = A3(
	$author$project$RegisterMachine$Ui$Base$Instruction,
	$author$project$RegisterMachine$Ui$Base$LabelKind,
	A2($author$project$Lib$ZipList$fromList, $author$project$RegisterMachine$Ui$Editor$lbl, _List_Nil),
	$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
var $author$project$RegisterMachine$Ui$Editor$initDebugConsole = {instructionsRev: _List_Nil};
var $author$project$RegisterMachine$Ui$Editor$EmptyBoard = {$: 'EmptyBoard'};
var $author$project$RegisterMachine$Ui$Editor$initFragmentBoard = $author$project$RegisterMachine$Ui$Editor$EmptyBoard;
var $author$project$RegisterMachine$Ui$Editor$init = $author$project$Ui$Control$InitContext$setModelTo(
	{
		debugConsole: $author$project$RegisterMachine$Ui$Editor$initDebugConsole,
		dropdownModel: $PaackEng$elm_ui_dropdown$Dropdown$init('dropdown'),
		fragmentBoard: $author$project$RegisterMachine$Ui$Editor$initFragmentBoard,
		instructionMode: $author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes),
		instructions: A2(
			$author$project$Lib$ZipList$fromList,
			$author$project$RegisterMachine$Ui$Editor$exampleInstruction0,
			_List_fromArray(
				[$author$project$RegisterMachine$Ui$Editor$exampleInstruction1, $author$project$RegisterMachine$Ui$Editor$exampleInstruction2, $author$project$RegisterMachine$Ui$Base$Halt])),
		selectedInstructions: $elm$core$Maybe$Nothing,
		selectedOption: $elm$core$Maybe$Nothing
	});
var $author$project$Ui$Tab$RegisterMachine$initMemoryView = {bottom: 0, top: 10};
var $author$project$RegisterMachine$Machine$Zero = {$: 'Zero'};
var $elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			$elm$core$Array$initialize,
			n,
			function (_v0) {
				return e;
			});
	});
var $author$project$RegisterMachine$MemoryState$empty = function (maxSize) {
	return {
		maxSize: maxSize,
		memory: A2(
			$elm$core$Array$repeat,
			maxSize,
			_Utils_Tuple2($author$project$RegisterMachine$Base$Uninitialized, $author$project$RegisterMachine$Base$Uninitialized)),
		nextFreePointer: 0
	};
};
var $author$project$RegisterMachine$Stack$empty = _List_Nil;
var $author$project$RegisterMachine$Machine$LabelUsedMoreThanOnce = function (a) {
	return {$: 'LabelUsedMoreThanOnce', a: a};
};
var $author$project$RegisterMachine$Machine$UnknownRegister = function (a) {
	return {$: 'UnknownRegister', a: a};
};
var $author$project$Lib$Result$ignore = function (result) {
	return A2(
		$elm$core$Result$map,
		function (_v0) {
			return _Utils_Tuple0;
		},
		result);
};
var $author$project$Lib$Result$sequence = function (results0) {
	if (!results0.b) {
		return $elm$core$Result$Ok(_List_Nil);
	} else {
		var result = results0.a;
		var results1 = results0.b;
		return A2(
			$elm$core$Result$andThen,
			function (x) {
				return A2(
					$elm$core$Result$map,
					function (xs1) {
						return A2($elm$core$List$cons, x, xs1);
					},
					$author$project$Lib$Result$sequence(results1));
			},
			result);
	}
};
var $author$project$Lib$Result$tuple2 = F2(
	function (result_a, result_b) {
		if (result_a.$ === 'Ok') {
			var a = result_a.a;
			if (result_b.$ === 'Ok') {
				var b = result_b.a;
				return $elm$core$Result$Ok(
					_Utils_Tuple2(a, b));
			} else {
				var e = result_b.a;
				return $elm$core$Result$Err(e);
			}
		} else {
			var e = result_a.a;
			return $elm$core$Result$Err(e);
		}
	});
var $author$project$RegisterMachine$Machine$checkRegisters = F3(
	function (registers, _arguments, controller) {
		var checkRegister = function (register) {
			return A2($elm$core$Set$member, register, controller.registers) ? $elm$core$Result$Ok(_Utils_Tuple0) : $elm$core$Result$Err(
				$author$project$RegisterMachine$Machine$UnknownRegister(register));
		};
		var checkArg = function (arg) {
			if (arg.$ === 'Register') {
				var register = arg.a;
				return checkRegister(register);
			} else {
				return $elm$core$Result$Ok(_Utils_Tuple0);
			}
		};
		return $author$project$Lib$Result$ignore(
			A2(
				$author$project$Lib$Result$tuple2,
				$author$project$Lib$Result$sequence(
					A2($elm$core$List$map, checkRegister, registers)),
				$author$project$Lib$Result$sequence(
					A2($elm$core$List$map, checkArg, _arguments))));
	});
var $author$project$RegisterMachine$Machine$foldlMayFail = F3(
	function (update, state, actions0) {
		if (!actions0.b) {
			return $elm$core$Result$Ok(state);
		} else {
			var action = actions0.a;
			var actions1 = actions0.b;
			return A2(
				$elm$core$Result$andThen,
				function (newState) {
					return A3($author$project$RegisterMachine$Machine$foldlMayFail, update, newState, actions1);
				},
				A2(update, action, state));
		}
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $author$project$RegisterMachine$Machine$parse = function (controller) {
	var update = F2(
		function (labelOrInstruction, _v3) {
			var pointer = _v3.a;
			var machineInstructions = _v3.b;
			if (labelOrInstruction.$ === 'Label') {
				var label = labelOrInstruction.a;
				return A2($elm$core$Set$member, label, machineInstructions.labels) ? $elm$core$Result$Err(
					$author$project$RegisterMachine$Machine$LabelUsedMoreThanOnce(label)) : $elm$core$Result$Ok(
					_Utils_Tuple2(
						pointer,
						_Utils_update(
							machineInstructions,
							{
								labelToPosition: A3($elm$core$Dict$insert, label, pointer, machineInstructions.labelToPosition),
								labels: A2($elm$core$Set$insert, label, machineInstructions.labels)
							})));
			} else {
				var instruction = labelOrInstruction.a;
				return $elm$core$Result$Ok(
					_Utils_Tuple2(
						pointer + 1,
						_Utils_update(
							machineInstructions,
							{
								instructions: A2($elm$core$Array$push, instruction, machineInstructions.instructions)
							})));
			}
		});
	var initMachineInstructions = _Utils_Tuple2(
		0,
		{instructions: $elm$core$Array$empty, labelToPosition: $elm$core$Dict$empty, labels: $elm$core$Set$empty});
	var checkRegisterUse = function (instruction) {
		switch (instruction.$) {
			case 'AssignRegister':
				var target = instruction.a;
				var source = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target, source]),
					_List_Nil,
					controller);
			case 'AssignLabel':
				var target = instruction.a;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_Nil,
					controller);
			case 'AssignOperation':
				var target = instruction.a;
				var _v1 = instruction.b;
				var _arguments = _v1.b;
				return A3($author$project$RegisterMachine$Machine$checkRegisters, _List_Nil, _arguments, controller);
			case 'AssignConstant':
				var target = instruction.a;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_Nil,
					controller);
			case 'JumpToLabel':
				var label = instruction.a;
				return $elm$core$Result$Ok(_Utils_Tuple0);
			case 'JumpToLabelAtRegister':
				var target = instruction.a;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_Nil,
					controller);
			case 'JumpToLabelIf':
				var testRegister = instruction.a;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[testRegister]),
					_List_Nil,
					controller);
			case 'JumpToLabelAtRegisterIf':
				var testRegister = instruction.a;
				var target = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[testRegister, target]),
					_List_Nil,
					controller);
			case 'Halt':
				return $elm$core$Result$Ok(_Utils_Tuple0);
			case 'PushRegister':
				var register = instruction.a;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[register]),
					_List_Nil,
					controller);
			case 'PushConstant':
				return $elm$core$Result$Ok(_Utils_Tuple0);
			case 'PushLabel':
				var label = instruction.a;
				return $elm$core$Result$Ok(_Utils_Tuple0);
			case 'Pop':
				var target = instruction.a;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_Nil,
					controller);
			case 'AssignCallAtLabel':
				var target = instruction.a;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_Nil,
					controller);
			case 'AssignCallAtRegister':
				var target = instruction.a;
				var labelRegister = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target, labelRegister]),
					_List_Nil,
					controller);
			case 'ConstructPair':
				var target = instruction.a;
				var arg0 = instruction.b;
				var arg1 = instruction.c;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_fromArray(
						[arg0, arg1]),
					controller);
			case 'First':
				var target = instruction.a;
				var source = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target, source]),
					_List_Nil,
					controller);
			case 'Second':
				var target = instruction.a;
				var source = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target, source]),
					_List_Nil,
					controller);
			case 'SetFirst':
				var target = instruction.a;
				var arg = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_fromArray(
						[arg]),
					controller);
			case 'SetSecond':
				var target = instruction.a;
				var arg = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_fromArray(
						[arg]),
					controller);
			case 'DualFirst':
				var target = instruction.a;
				var source = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target, source]),
					_List_Nil,
					controller);
			case 'DualSecond':
				var target = instruction.a;
				var source = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target, source]),
					_List_Nil,
					controller);
			case 'DualSetFirst':
				var target = instruction.a;
				var arg = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_fromArray(
						[arg]),
					controller);
			case 'DualSetSecond':
				var target = instruction.a;
				var arg = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target]),
					_List_fromArray(
						[arg]),
					controller);
			case 'MoveToDual':
				var target = instruction.a;
				var source = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[target, source]),
					_List_Nil,
					controller);
			case 'MarkAsMoved':
				var toBeCollected = instruction.a;
				var referenceToDualMemory = instruction.b;
				return A3(
					$author$project$RegisterMachine$Machine$checkRegisters,
					_List_fromArray(
						[toBeCollected, referenceToDualMemory]),
					_List_Nil,
					controller);
			default:
				return $elm$core$Result$Ok(_Utils_Tuple0);
		}
	};
	return A2(
		$elm$core$Result$map,
		$elm$core$Tuple$second,
		A3($author$project$RegisterMachine$Machine$foldlMayFail, update, initMachineInstructions, controller.instructions));
};
var $author$project$RegisterMachine$Machine$makeMachine = F3(
	function (controller, env, operationsEnv) {
		return A2(
			$elm$core$Result$map,
			function (instructions) {
				return {
					env: env,
					instructionPointer: 0,
					instructions: instructions,
					memory: {
						memoryInUse: $author$project$RegisterMachine$Machine$Zero,
						memoryState0: $author$project$RegisterMachine$MemoryState$empty(4096),
						memoryState1: $author$project$RegisterMachine$MemoryState$empty(4096)
					},
					operationEnv: operationsEnv,
					stack: $author$project$RegisterMachine$Stack$empty
				};
			},
			$author$project$RegisterMachine$Machine$parse(controller));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Ui$Control$InitContext$mapCmd = F2(
	function (f, initContext0) {
		return function (config) {
			var _v0 = initContext0(config);
			var initState = _v0.a;
			var initCmd = _v0.b;
			return _Utils_Tuple2(
				initState,
				A2($elm$core$Platform$Cmd$map, f, initCmd));
		};
	});
var $author$project$Ui$Control$InitContext$mapModel = F2(
	function (f, initContext0) {
		return function (config) {
			var _v0 = initContext0(config);
			var initState = _v0.a;
			var initCmd = _v0.b;
			return _Utils_Tuple2(
				{
					model: f(initState.model),
					notifications: initState.notifications
				},
				initCmd);
		};
	});
var $author$project$Ui$Control$InitContext$tuple2 = F2(
	function (initContext0, initContext1) {
		return function (config) {
			var _v0 = initContext1(config);
			var initState1 = _v0.a;
			var initCmd1 = _v0.b;
			var _v1 = initContext0(config);
			var initState0 = _v1.a;
			var initCmd0 = _v1.b;
			return _Utils_Tuple2(
				{
					model: _Utils_Tuple2(initState0.model, initState1.model),
					notifications: {}
				},
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[initCmd0, initCmd1])));
		};
	});
var $author$project$Ui$Control$InitContext$ooo = F2(
	function (initContext_a, initContext_f) {
		return A2(
			$author$project$Ui$Control$InitContext$mapModel,
			function (_v0) {
				var model_f = _v0.a;
				var model_a = _v0.b;
				return model_f(model_a);
			},
			A2($author$project$Ui$Control$InitContext$tuple2, initContext_f, initContext_a));
	});
var $author$project$RegisterMachine$Machine$TheOperationExpectsIntegerArguments = {$: 'TheOperationExpectsIntegerArguments'};
var $author$project$RegisterMachine$Machine$WrongNumberOfArgumentsGivenToOperationExpected = function (a) {
	return {$: 'WrongNumberOfArgumentsGivenToOperationExpected', a: a};
};
var $author$project$RegisterMachine$Machine$makeOperation1 = function (op) {
	return function (xs) {
		if (xs.b && (!xs.b.b)) {
			var x = xs.a;
			return op(x);
		} else {
			return $elm$core$Result$Err(
				$author$project$RegisterMachine$Machine$WrongNumberOfArgumentsGivenToOperationExpected(1));
		}
	};
};
var $author$project$RegisterMachine$Machine$makeNumOperation1 = function (op) {
	return $author$project$RegisterMachine$Machine$makeOperation1(
		function (v) {
			if ((v.$ === 'ConstantValue') && (v.a.$ === 'Num')) {
				var x = v.a.a;
				return $elm$core$Result$Ok(
					$author$project$RegisterMachine$Base$ConstantValue(
						$author$project$RegisterMachine$Base$Num(
							op(x))));
			} else {
				return $elm$core$Result$Err($author$project$RegisterMachine$Machine$TheOperationExpectsIntegerArguments);
			}
		});
};
var $author$project$RegisterMachine$Machine$makeOperation2 = function (op) {
	return function (xs) {
		if ((xs.b && xs.b.b) && (!xs.b.b.b)) {
			var x = xs.a;
			var _v1 = xs.b;
			var y = _v1.a;
			return A2(op, x, y);
		} else {
			return $elm$core$Result$Err(
				$author$project$RegisterMachine$Machine$WrongNumberOfArgumentsGivenToOperationExpected(2));
		}
	};
};
var $author$project$RegisterMachine$Machine$makeNumOperation2 = function (op) {
	return $author$project$RegisterMachine$Machine$makeOperation2(
		F2(
			function (v0, v1) {
				var _v0 = _Utils_Tuple2(v0, v1);
				if ((((_v0.a.$ === 'ConstantValue') && (_v0.a.a.$ === 'Num')) && (_v0.b.$ === 'ConstantValue')) && (_v0.b.a.$ === 'Num')) {
					var x = _v0.a.a.a;
					var y = _v0.b.a.a;
					return $elm$core$Result$Ok(
						$author$project$RegisterMachine$Base$ConstantValue(
							$author$project$RegisterMachine$Base$Num(
								A2(op, x, y))));
				} else {
					return $elm$core$Result$Err($author$project$RegisterMachine$Machine$TheOperationExpectsIntegerArguments);
				}
			}));
};
var $author$project$Ui$Tab$RegisterMachine$operationEnv = function () {
	var boolToInt = function (b) {
		return b ? 1 : 0;
	};
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'sub',
				$author$project$RegisterMachine$Machine$makeNumOperation2(
					F2(
						function (x, y) {
							return x - y;
						}))),
				_Utils_Tuple2(
				'less-than?',
				$author$project$RegisterMachine$Machine$makeNumOperation2(
					F2(
						function (x, y) {
							return boolToInt(
								_Utils_cmp(x, y) < 0);
						}))),
				_Utils_Tuple2(
				'add',
				$author$project$RegisterMachine$Machine$makeNumOperation2(
					F2(
						function (x, y) {
							return x + y;
						}))),
				_Utils_Tuple2(
				'mul',
				$author$project$RegisterMachine$Machine$makeNumOperation2(
					F2(
						function (x, y) {
							return x * y;
						}))),
				_Utils_Tuple2(
				'zero?',
				$author$project$RegisterMachine$Machine$makeNumOperation1(
					function (x) {
						return boolToInt(!x);
					})),
				_Utils_Tuple2(
				'eq?',
				$author$project$RegisterMachine$Machine$makeNumOperation2(
					F2(
						function (x, y) {
							return boolToInt(
								_Utils_eq(x, y));
						}))),
				_Utils_Tuple2(
				'not',
				$author$project$RegisterMachine$Machine$makeNumOperation1(
					function (x) {
						return boolToInt(!x);
					})),
				_Utils_Tuple2(
				'decrement',
				$author$project$RegisterMachine$Machine$makeNumOperation1(
					function (x) {
						return x - 1;
					})),
				_Utils_Tuple2(
				'increment',
				$author$project$RegisterMachine$Machine$makeNumOperation1(
					function (x) {
						return x + 1;
					})),
				_Utils_Tuple2(
				'remainder',
				$author$project$RegisterMachine$Machine$makeNumOperation2(
					F2(
						function (x, y) {
							return x % y;
						}))),
				_Utils_Tuple2(
				'pair?',
				$author$project$RegisterMachine$Machine$makeOperation1(
					function (val) {
						if (val.$ === 'Pair') {
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(1)));
						} else {
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(0)));
						}
					})),
				_Utils_Tuple2(
				'nil?',
				$author$project$RegisterMachine$Machine$makeOperation1(
					function (val) {
						if ((val.$ === 'ConstantValue') && (val.a.$ === 'Nil')) {
							var _v2 = val.a;
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(1)));
						} else {
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(0)));
						}
					})),
				_Utils_Tuple2(
				'num?',
				$author$project$RegisterMachine$Machine$makeOperation1(
					function (val) {
						if ((val.$ === 'ConstantValue') && (val.a.$ === 'Num')) {
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(1)));
						} else {
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(0)));
						}
					})),
				_Utils_Tuple2(
				'moved?',
				$author$project$RegisterMachine$Machine$makeOperation1(
					function (val) {
						if (val.$ === 'Moved') {
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(1)));
						} else {
							return $elm$core$Result$Ok(
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(0)));
						}
					}))
			]));
}();
var $author$project$Ui$Tab$RegisterMachine$init = function () {
	var defaultSelectedController = $author$project$RegisterMachine$Controllers$controller7_fibonacci_recursive;
	var parsedMachine = A3($author$project$RegisterMachine$Machine$makeMachine, defaultSelectedController.controller, defaultSelectedController.initialRegisterEnvironment, $author$project$Ui$Tab$RegisterMachine$operationEnv);
	var controllers = _List_fromArray(
		[$author$project$RegisterMachine$Controllers$controller0_gcd, $author$project$RegisterMachine$Controllers$controller1_remainder, $author$project$RegisterMachine$Controllers$controller2_fct_iterative, $author$project$RegisterMachine$Controllers$controller3_gcd_with_inlined_remainder, $author$project$RegisterMachine$Controllers$controller4_gcd_with_inlined_remainder_using_jump, $author$project$RegisterMachine$Controllers$controller6_fct_recursive, $author$project$RegisterMachine$Controllers$controller7_fibonacci_recursive, $author$project$RegisterMachine$Controllers$controller8_memory_test, $author$project$RegisterMachine$Controllers$controller9_range, $author$project$RegisterMachine$Controllers$controller10_append, $author$project$RegisterMachine$GarbageCollector$controller]);
	return A2(
		$author$project$Ui$Control$InitContext$ooo,
		A2($author$project$Ui$Control$InitContext$mapCmd, $author$project$Ui$Tab$RegisterMachine$EditorMsg, $author$project$RegisterMachine$Ui$Editor$init),
		$author$project$Ui$Control$InitContext$setModelTo(
			function (editorModel) {
				return {
					controllerDropdownModel: $PaackEng$elm_ui_dropdown$Dropdown$init('controllers'),
					controllers: controllers,
					currentlyHighlightedCell: $author$project$Ui$Tab$RegisterMachine$centerOfMemoryView($author$project$Ui$Tab$RegisterMachine$initMemoryView),
					editorModel: editorModel,
					maybeRuntime: function () {
						if (parsedMachine.$ === 'Ok') {
							var machine = parsedMachine.a;
							return $elm$core$Maybe$Just(
								$elm$core$Result$Ok(machine));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}(),
					memoryView: $author$project$Ui$Tab$RegisterMachine$initMemoryView,
					parsedMachine: parsedMachine,
					selectedController: $elm$core$Maybe$Just(defaultSelectedController)
				};
			}));
}();
var $author$project$Ui$Main$RegisterMachineTab = {$: 'RegisterMachineTab'};
var $author$project$Ui$Main$initTab = $author$project$Ui$Main$RegisterMachineTab;
var $author$project$Ui$Main$init = A2(
	$author$project$Ui$Control$InitContext$ooo,
	A2($author$project$Ui$Control$InitContext$mapCmd, $author$project$Ui$Main$RegisterMachineMsg, $author$project$Ui$Tab$RegisterMachine$init),
	A2(
		$author$project$Ui$Control$InitContext$ooo,
		A2($author$project$Ui$Control$InitContext$mapCmd, $author$project$Ui$Main$HelpMsg, $author$project$Ui$Tab$Help$init),
		A2(
			$author$project$Ui$Control$InitContext$ooo,
			A2($author$project$Ui$Control$InitContext$mapCmd, $author$project$Ui$Main$ModuleMsg, $author$project$Ui$Tab$Module$init),
			A2(
				$author$project$Ui$Control$InitContext$ooo,
				A2($author$project$Ui$Control$InitContext$mapCmd, $author$project$Ui$Main$ProgramMsg, $author$project$Ui$Tab$Program$init),
				$author$project$Ui$Control$InitContext$setModelTo(
					F4(
						function (programModel, moduleModel, helpModel, registerMachineModel) {
							return {helpModel: helpModel, moduleModel: moduleModel, programModel: programModel, registerMachineModel: registerMachineModel, tab: $author$project$Ui$Main$initTab};
						}))))));
var $author$project$Ui$Control$Context$initConfig = {};
var $author$project$Main$initModel = function () {
	var _v0 = $author$project$Ui$Main$init($author$project$Ui$Control$Context$initConfig);
	var lambdaUiState = _v0.a;
	var lambdaUiCmd = _v0.b;
	return _Utils_Tuple2(
		{lambdaUiState: lambdaUiState},
		A2($elm$core$Platform$Cmd$map, $author$project$Main$LambdaUiMsg, lambdaUiCmd));
}();
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$div = _VirtualDom_node('div');
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $elm$core$Platform$Sub$map = _Platform_map;
var $author$project$RegisterMachine$Ui$Editor$ChangeInstructionTo = function (a) {
	return {$: 'ChangeInstructionTo', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$SetModeTo = function (a) {
	return {$: 'SetModeTo', a: a};
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$RegisterMachine$Ui$Base$AssignmentKind = {$: 'AssignmentKind'};
var $author$project$RegisterMachine$Ui$Base$HaltKind = {$: 'HaltKind'};
var $author$project$RegisterMachine$Ui$Base$JumpIfKind = {$: 'JumpIfKind'};
var $author$project$RegisterMachine$Ui$Base$JumpKind = {$: 'JumpKind'};
var $author$project$RegisterMachine$Ui$Base$PushKind = {$: 'PushKind'};
var $author$project$RegisterMachine$Ui$Editor$insertionModeKeyBindings = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('q', $author$project$RegisterMachine$Ui$Base$LabelKind),
			_Utils_Tuple2('l', $author$project$RegisterMachine$Ui$Base$LabelKind),
			_Utils_Tuple2('w', $author$project$RegisterMachine$Ui$Base$JumpKind),
			_Utils_Tuple2('e', $author$project$RegisterMachine$Ui$Base$JumpIfKind),
			_Utils_Tuple2('a', $author$project$RegisterMachine$Ui$Base$OperationApplicationKind),
			_Utils_Tuple2('s', $author$project$RegisterMachine$Ui$Base$AssignmentKind),
			_Utils_Tuple2('d', $author$project$RegisterMachine$Ui$Base$PushKind),
			_Utils_Tuple2('f', $author$project$RegisterMachine$Ui$Base$HaltKind)
		]));
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keyup');
var $author$project$RegisterMachine$Ui$Base$Down = {$: 'Down'};
var $author$project$RegisterMachine$Ui$Editor$SelectionMovement = function (a) {
	return {$: 'SelectionMovement', a: a};
};
var $author$project$RegisterMachine$Ui$Base$Up = {$: 'Up'};
var $author$project$RegisterMachine$Ui$Editor$selectionModeKeyBindings = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'k',
			$author$project$RegisterMachine$Ui$Editor$SelectionMovement($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'j',
			$author$project$RegisterMachine$Ui$Editor$SelectionMovement($author$project$RegisterMachine$Ui$Base$Down))
		]));
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$RegisterMachine$Ui$Editor$ConvertAssignmentToOperation = {$: 'ConvertAssignmentToOperation'};
var $author$project$RegisterMachine$Ui$Editor$DebugCurrentInstruction = {$: 'DebugCurrentInstruction'};
var $author$project$RegisterMachine$Ui$Editor$DeleteInstruction = {$: 'DeleteInstruction'};
var $author$project$RegisterMachine$Ui$Editor$DeleteNode = {$: 'DeleteNode'};
var $author$project$RegisterMachine$Ui$Editor$DuplicateInstruction = function (a) {
	return {$: 'DuplicateInstruction', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$EditingNode = {$: 'EditingNode'};
var $author$project$RegisterMachine$Ui$Editor$FragmentMovement = function (a) {
	return {$: 'FragmentMovement', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$InstructionEdit = {$: 'InstructionEdit'};
var $author$project$RegisterMachine$Ui$Editor$InstructionInsertion = function (a) {
	return {$: 'InstructionInsertion', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$InstructionMovement = function (a) {
	return {$: 'InstructionMovement', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$JumpToBoundaryInstruction = function (a) {
	return {$: 'JumpToBoundaryInstruction', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$JumpToBoundaryNode = function (a) {
	return {$: 'JumpToBoundaryNode', a: a};
};
var $author$project$RegisterMachine$Ui$Base$Left = {$: 'Left'};
var $author$project$RegisterMachine$Ui$Editor$NodeInsertion = function (a) {
	return {$: 'NodeInsertion', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$NodeMovement = function (a) {
	return {$: 'NodeMovement', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$PasteAndPopFragment = function (a) {
	return {$: 'PasteAndPopFragment', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$PasteFragment = function (a) {
	return {$: 'PasteFragment', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$PushFragment = {$: 'PushFragment'};
var $author$project$RegisterMachine$Ui$Base$Right = {$: 'Right'};
var $author$project$RegisterMachine$Ui$Editor$SelectingInstructions = {$: 'SelectingInstructions'};
var $author$project$RegisterMachine$Ui$Editor$SwapInstruction = function (a) {
	return {$: 'SwapInstruction', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$traverseModeKeyBindings = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'k',
			$author$project$RegisterMachine$Ui$Editor$InstructionMovement($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'j',
			$author$project$RegisterMachine$Ui$Editor$InstructionMovement($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2(
			'K',
			$author$project$RegisterMachine$Ui$Editor$SwapInstruction($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'J',
			$author$project$RegisterMachine$Ui$Editor$SwapInstruction($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2('i', $author$project$RegisterMachine$Ui$Editor$InstructionEdit),
			_Utils_Tuple2(
			'o',
			$author$project$RegisterMachine$Ui$Editor$InstructionInsertion($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2(
			'O',
			$author$project$RegisterMachine$Ui$Editor$InstructionInsertion($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'f',
			$author$project$RegisterMachine$Ui$Editor$DuplicateInstruction($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2(
			'F',
			$author$project$RegisterMachine$Ui$Editor$DuplicateInstruction($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'3',
			$author$project$RegisterMachine$Ui$Editor$JumpToBoundaryInstruction($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'4',
			$author$project$RegisterMachine$Ui$Editor$JumpToBoundaryInstruction($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2(
			's',
			$author$project$RegisterMachine$Ui$Editor$NodeMovement($author$project$RegisterMachine$Ui$Base$Left)),
			_Utils_Tuple2(
			'd',
			$author$project$RegisterMachine$Ui$Editor$NodeMovement($author$project$RegisterMachine$Ui$Base$Right)),
			_Utils_Tuple2(
			'e',
			$author$project$RegisterMachine$Ui$Editor$SetModeTo(
				$author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$EditingNode))),
			_Utils_Tuple2(
			'<',
			$author$project$RegisterMachine$Ui$Editor$NodeInsertion($author$project$RegisterMachine$Ui$Base$Left)),
			_Utils_Tuple2(
			',',
			$author$project$RegisterMachine$Ui$Editor$NodeInsertion($author$project$RegisterMachine$Ui$Base$Right)),
			_Utils_Tuple2('X', $author$project$RegisterMachine$Ui$Editor$DeleteInstruction),
			_Utils_Tuple2('x', $author$project$RegisterMachine$Ui$Editor$DeleteNode),
			_Utils_Tuple2('(', $author$project$RegisterMachine$Ui$Editor$ConvertAssignmentToOperation),
			_Utils_Tuple2(
			'#',
			$author$project$RegisterMachine$Ui$Editor$JumpToBoundaryNode($author$project$RegisterMachine$Ui$Base$Left)),
			_Utils_Tuple2(
			'$',
			$author$project$RegisterMachine$Ui$Editor$JumpToBoundaryNode($author$project$RegisterMachine$Ui$Base$Right)),
			_Utils_Tuple2('c', $author$project$RegisterMachine$Ui$Editor$PushFragment),
			_Utils_Tuple2(
			'p',
			$author$project$RegisterMachine$Ui$Editor$PasteFragment($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2(
			'P',
			$author$project$RegisterMachine$Ui$Editor$PasteFragment($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'v',
			$author$project$RegisterMachine$Ui$Editor$PasteAndPopFragment($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2(
			'V',
			$author$project$RegisterMachine$Ui$Editor$PasteAndPopFragment($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'5',
			$author$project$RegisterMachine$Ui$Editor$FragmentMovement($author$project$RegisterMachine$Ui$Base$Down)),
			_Utils_Tuple2(
			'6',
			$author$project$RegisterMachine$Ui$Editor$FragmentMovement($author$project$RegisterMachine$Ui$Base$Up)),
			_Utils_Tuple2(
			'm',
			$author$project$RegisterMachine$Ui$Editor$SetModeTo($author$project$RegisterMachine$Ui$Editor$SelectingInstructions)),
			_Utils_Tuple2('?', $author$project$RegisterMachine$Ui$Editor$DebugCurrentInstruction)
		]));
var $author$project$RegisterMachine$Ui$Editor$subscriptions = function (model) {
	return $elm$browser$Browser$Events$onKeyUp(
		A2(
			$elm$json$Json$Decode$andThen,
			function (keyCode) {
				var _v0 = model.instructionMode;
				switch (_v0.$) {
					case 'TraversingInstructions':
						var nodeMode = _v0.a;
						if (nodeMode.$ === 'TraversingNodes') {
							var _v2 = A2($elm$core$Dict$get, keyCode, $author$project$RegisterMachine$Ui$Editor$traverseModeKeyBindings);
							if (_v2.$ === 'Just') {
								var msg = _v2.a;
								return $elm$json$Json$Decode$succeed(msg);
							} else {
								return $elm$json$Json$Decode$fail('');
							}
						} else {
							if (keyCode === 'Escape') {
								return $elm$json$Json$Decode$succeed(
									$author$project$RegisterMachine$Ui$Editor$SetModeTo(
										$author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes)));
							} else {
								return $elm$json$Json$Decode$fail('');
							}
						}
					case 'InsertingInstruction':
						var _v4 = A2($elm$core$Dict$get, keyCode, $author$project$RegisterMachine$Ui$Editor$insertionModeKeyBindings);
						if (_v4.$ === 'Just') {
							var instructionKind = _v4.a;
							return $elm$json$Json$Decode$succeed(
								$author$project$RegisterMachine$Ui$Editor$ChangeInstructionTo(instructionKind));
						} else {
							if (keyCode === 'Escape') {
								return $elm$json$Json$Decode$succeed(
									$author$project$RegisterMachine$Ui$Editor$SetModeTo(
										$author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes)));
							} else {
								return $elm$json$Json$Decode$fail('');
							}
						}
					default:
						var _v6 = A2($elm$core$Dict$get, keyCode, $author$project$RegisterMachine$Ui$Editor$selectionModeKeyBindings);
						if (_v6.$ === 'Just') {
							var msg = _v6.a;
							return $elm$json$Json$Decode$succeed(msg);
						} else {
							if (keyCode === 'Escape') {
								return $elm$json$Json$Decode$succeed(
									$author$project$RegisterMachine$Ui$Editor$SetModeTo(
										$author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes)));
							} else {
								return $elm$json$Json$Decode$fail('');
							}
						}
				}
			},
			A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string)));
};
var $author$project$Ui$Tab$RegisterMachine$subscriptions = function (model) {
	return A2(
		$elm$core$Platform$Sub$map,
		$author$project$Ui$Tab$RegisterMachine$EditorMsg,
		$author$project$RegisterMachine$Ui$Editor$subscriptions(model.editorModel));
};
var $author$project$Ui$Main$subscriptions = function (model) {
	return A2(
		$elm$core$Platform$Sub$map,
		$author$project$Ui$Main$RegisterMachineMsg,
		$author$project$Ui$Tab$RegisterMachine$subscriptions(model.registerMachineModel));
};
var $author$project$Main$subscriptions = function (model) {
	return A2(
		$elm$core$Platform$Sub$map,
		$author$project$Main$LambdaUiMsg,
		$author$project$Ui$Main$subscriptions(model.lambdaUiState.model));
};
var $author$project$Ui$Control$Context$mapModelInState = F2(
	function (f, state1) {
		return {
			model: f(state1.model),
			notifications: state1.notifications
		};
	});
var $author$project$Ui$Control$Context$embed = F4(
	function (liftChildToParentMsg, projectParentToChild, embedChildIntoParent, child_context) {
		return F3(
			function (config, liftMsg, state) {
				var _v0 = A3(
					child_context,
					config,
					A2($elm$core$Basics$composeL, liftMsg, liftChildToParentMsg),
					A2($author$project$Ui$Control$Context$mapModelInState, projectParentToChild, state));
				var fullSubModel = _v0.a;
				var subCmd = _v0.b;
				return _Utils_Tuple2(
					A2(
						$author$project$Ui$Control$Context$mapModelInState,
						embedChildIntoParent(state.model),
						fullSubModel),
					subCmd);
			});
	});
var $author$project$Ui$Control$Context$update = function (f) {
	return F3(
		function (_v0, _v1, state) {
			return _Utils_Tuple2(
				_Utils_update(
					state,
					{
						model: f(state.model)
					}),
				$elm$core$Platform$Cmd$none);
		});
};
var $author$project$Ui$Control$Context$none = F3(
	function (_v0, _v1, state) {
		return _Utils_Tuple2(state, $elm$core$Platform$Cmd$none);
	});
var $author$project$Ui$Tab$Help$update = function (msg) {
	return $author$project$Ui$Control$Context$none;
};
var $author$project$Calculus$Evaluation$Evaluation$eval1 = F2(
	function (env, term) {
		return A2(
			$elm$core$Result$map,
			function (_v0) {
				var thunkContext = _v0.a.thunkContext;
				var value = _v0.b;
				return _Utils_Tuple2(thunkContext, value);
			},
			A3(
				$author$project$Lib$State$StatefulReaderWithErr$run,
				$author$project$Calculus$Evaluation$Evaluation$eval(term),
				env,
				$author$project$Calculus$Evaluation$Evaluation$initMutState));
	});
var $author$project$Ui$Tab$Module$update = function (msg) {
	switch (msg.$) {
		case 'ModuleInputChanged':
			var input = msg.a;
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return _Utils_update(
						model,
						{
							env: $author$project$Calculus$Evaluation$Value$emptyEnvironment,
							evaledTerm: $elm$core$Maybe$Nothing,
							moduleInput: input,
							parsedModule: $elm$core$Maybe$Just(
								$author$project$Calculus$Parser$runModuleTerm(input))
						});
				});
		case 'ModuleRunButtonClicked':
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return $author$project$Ui$Tab$Module$openModule(
						$author$project$Ui$Tab$Module$evalModule(
							_Utils_update(
								model,
								{env: $author$project$Calculus$Evaluation$Value$emptyEnvironment, evaledTerm: $elm$core$Maybe$Nothing})));
				});
		case 'ReplInputChanged':
			var input = msg.a;
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var parsedTerm = $elm$core$Maybe$Just(
						$author$project$Calculus$Parser$runTerm(input));
					return _Utils_update(
						model,
						{evaledTerm: $elm$core$Maybe$Nothing, parsedTerm: parsedTerm, replInput: input});
				});
		default:
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var _v1 = model.parsedTerm;
					if ((_v1.$ === 'Just') && (_v1.a.$ === 'Ok')) {
						var term = _v1.a.a;
						return _Utils_update(
							model,
							{
								evaledTerm: $elm$core$Maybe$Just(
									A2($author$project$Calculus$Evaluation$Evaluation$eval1, model.env, term))
							});
					} else {
						return model;
					}
				});
	}
};
var $author$project$Ui$Tab$Program$update = function (msg) {
	switch (msg.$) {
		case 'InputChanged':
			var input = msg.a;
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return _Utils_update(
						model,
						{
							evaledTerm: $elm$core$Maybe$Nothing,
							inferedType: $elm$core$Maybe$Nothing,
							input: input,
							parsedTerm: $elm$core$Maybe$Just(
								$author$project$Calculus$Parser$runTerm(input))
						});
				});
		case 'RunButtonClicked':
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var _v1 = model.parsedTerm;
					if ((_v1.$ === 'Just') && (_v1.a.$ === 'Ok')) {
						var term = _v1.a.a;
						return _Utils_update(
							model,
							{
								evaledTerm: $elm$core$Maybe$Just(
									$author$project$Calculus$Evaluation$Evaluation$eval0(term))
							});
					} else {
						return model;
					}
				});
		default:
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var _v2 = model.parsedTerm;
					if ((_v2.$ === 'Just') && (_v2.a.$ === 'Ok')) {
						var term = _v2.a.a;
						return _Utils_update(
							model,
							{
								inferedType: $elm$core$Maybe$Just(
									$author$project$Calculus$Type$Inference$infer0(term))
							});
					} else {
						return model;
					}
				});
	}
};
var $author$project$Ui$Tab$RegisterMachine$shiftBy = F2(
	function (delta, memoryView) {
		var bottom = memoryView.bottom;
		var top = memoryView.top;
		var _v0 = _Utils_Tuple2(bottom + delta, top + delta);
		var bottomNew = _v0.a;
		var topNew = _v0.b;
		return (bottomNew < 0) ? {bottom: 0, top: topNew - bottomNew} : {bottom: bottomNew, top: topNew};
	});
var $author$project$Ui$Tab$RegisterMachine$centerAt = F2(
	function (p, memoryView) {
		var oldCenter = $author$project$Ui$Tab$RegisterMachine$centerOfMemoryView(memoryView);
		return A2($author$project$Ui$Tab$RegisterMachine$shiftBy, p - oldCenter, memoryView);
	});
var $author$project$Ui$Tab$RegisterMachine$ControllerPicked = function (a) {
	return {$: 'ControllerPicked', a: a};
};
var $author$project$Ui$Tab$RegisterMachine$ControllersDropdownMsg = function (a) {
	return {$: 'ControllersDropdownMsg', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$Basic = {$: 'Basic'};
var $PaackEng$elm_ui_dropdown$Dropdown$Config = function (a) {
	return {$: 'Config', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$OnSelectSingleItem = function (a) {
	return {$: 'OnSelectSingleItem', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$SingleItem = function (a) {
	return {$: 'SingleItem', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$SingleItemToPrompt = function (a) {
	return {$: 'SingleItemToPrompt', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 'Empty'};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $PaackEng$elm_ui_dropdown$Dropdown$basic = function (_v0) {
	var itemsFromModel = _v0.itemsFromModel;
	var selectionFromModel = _v0.selectionFromModel;
	var dropdownMsg = _v0.dropdownMsg;
	var onSelectMsg = _v0.onSelectMsg;
	var itemToPrompt = _v0.itemToPrompt;
	var itemToElement = _v0.itemToElement;
	return $PaackEng$elm_ui_dropdown$Dropdown$Config(
		{
			closeButton: $mdgriffith$elm_ui$Element$text('▲'),
			containerAttributes: _List_Nil,
			dropdownMsg: dropdownMsg,
			dropdownType: $PaackEng$elm_ui_dropdown$Dropdown$Basic,
			emptyListElement: $mdgriffith$elm_ui$Element$none,
			filterPlaceholder: $elm$core$Maybe$Nothing,
			itemToElement: itemToElement,
			itemToText: function (_v1) {
				return '';
			},
			itemsFromModel: itemsFromModel,
			listAttributes: _List_Nil,
			onFilterChangeMsg: $elm$core$Maybe$Nothing,
			onSelectMsg: $PaackEng$elm_ui_dropdown$Dropdown$OnSelectSingleItem(onSelectMsg),
			openButton: $mdgriffith$elm_ui$Element$text('▼'),
			promptElement: A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
					]),
				$mdgriffith$elm_ui$Element$text('-- Select --')),
			searchAttributes: _List_Nil,
			selectAttributes: _List_Nil,
			selectionFromModel: A2($elm$core$Basics$composeR, selectionFromModel, $PaackEng$elm_ui_dropdown$Dropdown$SingleItem),
			selectionToPrompt: $PaackEng$elm_ui_dropdown$Dropdown$SingleItemToPrompt(itemToPrompt)
		});
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$roundEach = function (_v0) {
	var topLeft = _v0.topLeft;
	var topRight = _v0.topRight;
	var bottomLeft = _v0.bottomLeft;
	var bottomRight = _v0.bottomRight;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + ($elm$core$String$fromInt(topLeft) + ('-' + ($elm$core$String$fromInt(topRight) + ($elm$core$String$fromInt(bottomLeft) + ('-' + $elm$core$String$fromInt(bottomRight)))))),
			'border-radius',
			$elm$core$String$fromInt(topLeft) + ('px ' + ($elm$core$String$fromInt(topRight) + ('px ' + ($elm$core$String$fromInt(bottomRight) + ('px ' + ($elm$core$String$fromInt(bottomLeft) + 'px'))))))));
};
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $PaackEng$elm_ui_dropdown$Dropdown$withContainerAttributes = F2(
	function (attrs, _v0) {
		var config = _v0.a;
		return $PaackEng$elm_ui_dropdown$Dropdown$Config(
			_Utils_update(
				config,
				{containerAttributes: attrs}));
	});
var $PaackEng$elm_ui_dropdown$Dropdown$withListAttributes = F2(
	function (attrs, _v0) {
		var config = _v0.a;
		return $PaackEng$elm_ui_dropdown$Dropdown$Config(
			_Utils_update(
				config,
				{listAttributes: attrs}));
	});
var $PaackEng$elm_ui_dropdown$Dropdown$withSelectAttributes = F2(
	function (attrs, _v0) {
		var config = _v0.a;
		return $PaackEng$elm_ui_dropdown$Dropdown$Config(
			_Utils_update(
				config,
				{selectAttributes: attrs}));
	});
var $author$project$Ui$Tab$RegisterMachine$dropdownConfig = A2(
	$PaackEng$elm_ui_dropdown$Dropdown$withListAttributes,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Border$width(1),
			$mdgriffith$elm_ui$Element$Border$roundEach(
			{bottomLeft: 5, bottomRight: 5, topLeft: 0, topRight: 0}),
			$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
		]),
	A2(
		$PaackEng$elm_ui_dropdown$Dropdown$withSelectAttributes,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Border$rounded(5),
				A2($mdgriffith$elm_ui$Element$paddingXY, 16, 8),
				$mdgriffith$elm_ui$Element$spacing(10),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
			]),
		A2(
			$PaackEng$elm_ui_dropdown$Dropdown$withContainerAttributes,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(400))
				]),
			$PaackEng$elm_ui_dropdown$Dropdown$basic(
				{
					dropdownMsg: $author$project$Ui$Tab$RegisterMachine$ControllersDropdownMsg,
					itemToElement: F3(
						function (selected, highlighted, controllerExample) {
							var bgColor = selected ? A3($mdgriffith$elm_ui$Element$rgb255, 100, 100, 100) : A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255);
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Background$color(bgColor),
										$mdgriffith$elm_ui$Element$padding(8),
										$mdgriffith$elm_ui$Element$spacing(10),
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Font$size(16)
											]),
										$mdgriffith$elm_ui$Element$text(controllerExample.name))
									]));
						}),
					itemToPrompt: function (controllerExample) {
						return $mdgriffith$elm_ui$Element$text(controllerExample.name);
					},
					itemsFromModel: function (model) {
						return model.controllers;
					},
					onSelectMsg: $author$project$Ui$Tab$RegisterMachine$ControllerPicked,
					selectionFromModel: function (model) {
						return model.selectedController;
					}
				}))));
var $author$project$Ui$Tab$RegisterMachine$reset = function (model) {
	var _v0 = model.selectedController;
	if (_v0.$ === 'Just') {
		var controllerExample = _v0.a;
		var parsedMachine = A3($author$project$RegisterMachine$Machine$makeMachine, controllerExample.controller, controllerExample.initialRegisterEnvironment, $author$project$Ui$Tab$RegisterMachine$operationEnv);
		if (parsedMachine.$ === 'Ok') {
			var machine = parsedMachine.a;
			return _Utils_update(
				model,
				{
					maybeRuntime: $elm$core$Maybe$Just(
						$elm$core$Result$Ok(machine)),
					memoryView: $author$project$Ui$Tab$RegisterMachine$initMemoryView
				});
		} else {
			return _Utils_update(
				model,
				{maybeRuntime: $elm$core$Maybe$Nothing, memoryView: $author$project$Ui$Tab$RegisterMachine$initMemoryView});
		}
	} else {
		return model;
	}
};
var $author$project$Ui$Tab$RegisterMachine$resetRuntime = function (model) {
	return _Utils_update(
		model,
		{
			maybeRuntime: function () {
				var _v0 = model.parsedMachine;
				if (_v0.$ === 'Ok') {
					var machine = _v0.a;
					return $elm$core$Maybe$Just(
						$elm$core$Result$Ok(machine));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}()
		});
};
var $author$project$RegisterMachine$Machine$Dual = {$: 'Dual'};
var $author$project$RegisterMachine$Machine$FirstComponent = {$: 'FirstComponent'};
var $author$project$RegisterMachine$Base$InstructionAddress = function (a) {
	return {$: 'InstructionAddress', a: a};
};
var $author$project$RegisterMachine$Machine$LabelPointsToNothing = function (a) {
	return {$: 'LabelPointsToNothing', a: a};
};
var $author$project$RegisterMachine$Machine$Main = {$: 'Main'};
var $author$project$RegisterMachine$Machine$MemoryError = function (a) {
	return {$: 'MemoryError', a: a};
};
var $author$project$RegisterMachine$Base$Moved = {$: 'Moved'};
var $author$project$RegisterMachine$Base$Pair = function (a) {
	return {$: 'Pair', a: a};
};
var $author$project$RegisterMachine$Machine$SecondComponent = {$: 'SecondComponent'};
var $author$project$RegisterMachine$Machine$advanceInstructionPointer = function (machine) {
	return _Utils_update(
		machine,
		{instructionPointer: machine.instructionPointer + 1});
};
var $author$project$RegisterMachine$Machine$currentMemoryState = F2(
	function (memoryType, machine) {
		var _v0 = _Utils_Tuple2(memoryType, machine.memory.memoryInUse);
		if (_v0.a.$ === 'Main') {
			if (_v0.b.$ === 'Zero') {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return machine.memory.memoryState0;
			} else {
				var _v3 = _v0.a;
				var _v4 = _v0.b;
				return machine.memory.memoryState1;
			}
		} else {
			if (_v0.b.$ === 'Zero') {
				var _v5 = _v0.a;
				var _v6 = _v0.b;
				return machine.memory.memoryState1;
			} else {
				var _v7 = _v0.a;
				var _v8 = _v0.b;
				return machine.memory.memoryState0;
			}
		}
	});
var $author$project$RegisterMachine$MemoryState$InvalidMemoryAccessAt = function (a) {
	return {$: 'InvalidMemoryAccessAt', a: a};
};
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $author$project$RegisterMachine$MemoryState$get = F2(
	function (pointer, memoryState) {
		var memory = memoryState.memory;
		var _v0 = A2($elm$core$Array$get, pointer, memory);
		if (_v0.$ === 'Just') {
			var memoryCell = _v0.a;
			return $elm$core$Result$Ok(memoryCell);
		} else {
			return $elm$core$Result$Err(
				$author$project$RegisterMachine$MemoryState$InvalidMemoryAccessAt(pointer));
		}
	});
var $author$project$RegisterMachine$Machine$ExpectedPairInRegister = {$: 'ExpectedPairInRegister'};
var $author$project$RegisterMachine$Machine$UndefinedRegister = function (a) {
	return {$: 'UndefinedRegister', a: a};
};
var $author$project$RegisterMachine$Machine$getRegister = F2(
	function (register, machine) {
		var _v0 = A2($elm$core$Dict$get, register, machine.env);
		if (_v0.$ === 'Just') {
			var val = _v0.a;
			return $elm$core$Result$Ok(val);
		} else {
			return $elm$core$Result$Err(
				$author$project$RegisterMachine$Machine$UndefinedRegister(register));
		}
	});
var $author$project$RegisterMachine$Machine$getMemoryAddressAtRegister = F2(
	function (register, machine) {
		return A2(
			$elm$core$Result$andThen,
			function (value) {
				if (value.$ === 'Pair') {
					var pointer = value.a;
					return $elm$core$Result$Ok(pointer);
				} else {
					return $elm$core$Result$Err($author$project$RegisterMachine$Machine$ExpectedPairInRegister);
				}
			},
			A2($author$project$RegisterMachine$Machine$getRegister, register, machine));
	});
var $author$project$RegisterMachine$Machine$updateRegister = F3(
	function (register, val, machine) {
		return _Utils_update(
			machine,
			{
				env: A3($elm$core$Dict$insert, register, val, machine.env)
			});
	});
var $author$project$RegisterMachine$Machine$accessPair = F5(
	function (memoryCellComponent, memoryType, target, source, machine) {
		return A2(
			$elm$core$Result$andThen,
			function (pointer) {
				return A2(
					$elm$core$Result$map,
					function (_v0) {
						var a = _v0.a;
						var b = _v0.b;
						return {
							isFinished: false,
							machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
								function () {
									if (memoryCellComponent.$ === 'FirstComponent') {
										return A2($author$project$RegisterMachine$Machine$updateRegister, target, a);
									} else {
										return A2($author$project$RegisterMachine$Machine$updateRegister, target, b);
									}
								}()(machine))
						};
					},
					A2(
						$elm$core$Result$mapError,
						$author$project$RegisterMachine$Machine$MemoryError,
						A2(
							$author$project$RegisterMachine$MemoryState$get,
							pointer,
							A2($author$project$RegisterMachine$Machine$currentMemoryState, memoryType, machine))));
			},
			A2($author$project$RegisterMachine$Machine$getMemoryAddressAtRegister, source, machine));
	});
var $author$project$RegisterMachine$Machine$getInstruction = function (machine) {
	return A2($elm$core$Array$get, machine.instructionPointer, machine.instructions.instructions);
};
var $author$project$RegisterMachine$Machine$ExpectedInstructionAddressInRegister = {$: 'ExpectedInstructionAddressInRegister'};
var $author$project$RegisterMachine$Machine$getInstructionAddressAtRegister = F2(
	function (register, machine) {
		return A2(
			$elm$core$Result$andThen,
			function (value) {
				if (value.$ === 'InstructionAddress') {
					var pointer = value.a;
					return $elm$core$Result$Ok(pointer);
				} else {
					return $elm$core$Result$Err($author$project$RegisterMachine$Machine$ExpectedInstructionAddressInRegister);
				}
			},
			A2($author$project$RegisterMachine$Machine$getRegister, register, machine));
	});
var $author$project$RegisterMachine$Machine$getLabelPosition = F2(
	function (label, machine) {
		return A2($elm$core$Dict$get, label, machine.instructions.labelToPosition);
	});
var $author$project$RegisterMachine$Machine$UndefinedOperation = function (a) {
	return {$: 'UndefinedOperation', a: a};
};
var $author$project$RegisterMachine$Machine$getOperation = F2(
	function (operationName, machine) {
		var _v0 = A2($elm$core$Dict$get, operationName, machine.operationEnv);
		if (_v0.$ === 'Just') {
			var op = _v0.a;
			return $elm$core$Result$Ok(op);
		} else {
			return $elm$core$Result$Err(
				$author$project$RegisterMachine$Machine$UndefinedOperation(operationName));
		}
	});
var $author$project$RegisterMachine$Machine$getValueFromArgument = F2(
	function (argument, machine) {
		if (argument.$ === 'Register') {
			var register = argument.a;
			return A2($author$project$RegisterMachine$Machine$getRegister, register, machine);
		} else {
			var val = argument.a;
			return $elm$core$Result$Ok(
				$author$project$RegisterMachine$Base$ConstantValue(val));
		}
	});
var $author$project$RegisterMachine$Machine$halt = function (machine) {
	return {isFinished: true, machine: machine};
};
var $author$project$RegisterMachine$Machine$pointerJump = F2(
	function (pointer, machine) {
		return _Utils_update(
			machine,
			{instructionPointer: pointer});
	});
var $author$project$RegisterMachine$Machine$jump = F2(
	function (label, machine) {
		var _v0 = A2($author$project$RegisterMachine$Machine$getLabelPosition, label, machine);
		if (_v0.$ === 'Just') {
			var pointer = _v0.a;
			return A2($author$project$RegisterMachine$Machine$pointerJump, pointer, machine);
		} else {
			return machine;
		}
	});
var $author$project$RegisterMachine$MemoryState$MemoryExceeded = {$: 'MemoryExceeded'};
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $author$project$RegisterMachine$MemoryState$new = F2(
	function (memoryCell, memoryState) {
		var memory = memoryState.memory;
		var maxSize = memoryState.maxSize;
		var nextFreePointer = memoryState.nextFreePointer;
		return (_Utils_cmp(nextFreePointer + 1, maxSize) < 0) ? $elm$core$Result$Ok(
			_Utils_Tuple2(
				nextFreePointer,
				_Utils_update(
					memoryState,
					{
						memory: A3($elm$core$Array$set, nextFreePointer, memoryCell, memory),
						nextFreePointer: nextFreePointer + 1
					}))) : $elm$core$Result$Err($author$project$RegisterMachine$MemoryState$MemoryExceeded);
	});
var $author$project$RegisterMachine$Machine$PoppingEmptyStack = {$: 'PoppingEmptyStack'};
var $author$project$RegisterMachine$Stack$pop = function (stack0) {
	if (!stack0.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var val = stack0.a;
		var stack1 = stack0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(val, stack1));
	}
};
var $author$project$RegisterMachine$Machine$pop = function (machine) {
	var _v0 = $author$project$RegisterMachine$Stack$pop(machine.stack);
	if (_v0.$ === 'Just') {
		var _v1 = _v0.a;
		var val = _v1.a;
		var stack = _v1.b;
		return $elm$core$Result$Ok(
			_Utils_Tuple2(
				val,
				_Utils_update(
					machine,
					{stack: stack})));
	} else {
		return $elm$core$Result$Err($author$project$RegisterMachine$Machine$PoppingEmptyStack);
	}
};
var $author$project$RegisterMachine$Stack$push = F2(
	function (val, stack) {
		return A2($elm$core$List$cons, val, stack);
	});
var $author$project$RegisterMachine$Machine$push = F2(
	function (val, machine) {
		return _Utils_update(
			machine,
			{
				stack: A2($author$project$RegisterMachine$Stack$push, val, machine.stack)
			});
	});
var $author$project$RegisterMachine$MemoryState$set = F3(
	function (pointer, cell, memoryState) {
		var memory = memoryState.memory;
		return _Utils_update(
			memoryState,
			{
				memory: A3($elm$core$Array$set, pointer, cell, memory)
			});
	});
var $author$project$RegisterMachine$Machine$setDualMemoryStateOfMachine = F2(
	function (memoryState, machine) {
		var memory = machine.memory;
		var _v0 = memory.memoryInUse;
		if (_v0.$ === 'Zero') {
			return _Utils_update(
				machine,
				{
					memory: _Utils_update(
						memory,
						{memoryState1: memoryState})
				});
		} else {
			return _Utils_update(
				machine,
				{
					memory: _Utils_update(
						memory,
						{memoryState0: memoryState})
				});
		}
	});
var $author$project$RegisterMachine$Machine$setMemoryStateOfMachine = F3(
	function (memoryType, memoryState, machine) {
		var memory = machine.memory;
		var _v0 = _Utils_Tuple2(memoryType, memory.memoryInUse);
		if (_v0.a.$ === 'Main') {
			if (_v0.b.$ === 'Zero') {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return _Utils_update(
					machine,
					{
						memory: _Utils_update(
							memory,
							{memoryState0: memoryState})
					});
			} else {
				var _v3 = _v0.a;
				var _v4 = _v0.b;
				return _Utils_update(
					machine,
					{
						memory: _Utils_update(
							memory,
							{memoryState1: memoryState})
					});
			}
		} else {
			if (_v0.b.$ === 'Zero') {
				var _v5 = _v0.a;
				var _v6 = _v0.b;
				return _Utils_update(
					machine,
					{
						memory: _Utils_update(
							memory,
							{memoryState1: memoryState})
					});
			} else {
				var _v7 = _v0.a;
				var _v8 = _v0.b;
				return _Utils_update(
					machine,
					{
						memory: _Utils_update(
							memory,
							{memoryState0: memoryState})
					});
			}
		}
	});
var $elm_community$array_extra$Array$Extra$update = F3(
	function (index, alter, array) {
		var _v0 = A2($elm$core$Array$get, index, array);
		if (_v0.$ === 'Nothing') {
			return array;
		} else {
			var element = _v0.a;
			return A3(
				$elm$core$Array$set,
				index,
				alter(element),
				array);
		}
	});
var $author$project$RegisterMachine$MemoryState$update = F3(
	function (pointer, f, memoryState) {
		var memory = memoryState.memory;
		return _Utils_update(
			memoryState,
			{
				memory: A3($elm_community$array_extra$Array$Extra$update, pointer, f, memory)
			});
	});
var $author$project$RegisterMachine$Machine$setPair = F5(
	function (memoryCellComponent, memoryType, register, arg, machine) {
		return A2(
			$elm$core$Result$map,
			function (_v0) {
				var val = _v0.a;
				var pointer = _v0.b;
				return {
					isFinished: false,
					machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
						A3(
							$author$project$RegisterMachine$Machine$setMemoryStateOfMachine,
							memoryType,
							A3(
								$author$project$RegisterMachine$MemoryState$update,
								pointer,
								function (_v1) {
									var a = _v1.a;
									var b = _v1.b;
									if (memoryCellComponent.$ === 'FirstComponent') {
										return _Utils_Tuple2(val, b);
									} else {
										return _Utils_Tuple2(a, val);
									}
								},
								A2($author$project$RegisterMachine$Machine$currentMemoryState, memoryType, machine)),
							machine))
				};
			},
			A2(
				$author$project$Lib$Result$tuple2,
				A2($author$project$RegisterMachine$Machine$getValueFromArgument, arg, machine),
				A2($author$project$RegisterMachine$Machine$getMemoryAddressAtRegister, register, machine)));
	});
var $author$project$RegisterMachine$Machine$One = {$: 'One'};
var $author$project$RegisterMachine$Machine$swapMemory = function (machine) {
	var memory = machine.memory;
	return _Utils_update(
		machine,
		{
			memory: _Utils_update(
				memory,
				{
					memoryInUse: function () {
						var _v0 = memory.memoryInUse;
						if (_v0.$ === 'Zero') {
							return $author$project$RegisterMachine$Machine$One;
						} else {
							return $author$project$RegisterMachine$Machine$Zero;
						}
					}()
				})
		});
};
var $author$project$RegisterMachine$Machine$runOneStep = function (machine) {
	var _v0 = $author$project$RegisterMachine$Machine$getInstruction(machine);
	if (_v0.$ === 'Just') {
		var instruction = _v0.a;
		switch (instruction.$) {
			case 'AssignRegister':
				var target = instruction.a;
				var source = instruction.b;
				return A2(
					$elm$core$Result$map,
					function (val) {
						return {
							isFinished: false,
							machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
								A3($author$project$RegisterMachine$Machine$updateRegister, target, val, machine))
						};
					},
					A2($author$project$RegisterMachine$Machine$getRegister, source, machine));
			case 'AssignLabel':
				var target = instruction.a;
				var label = instruction.b;
				var _v2 = A2($author$project$RegisterMachine$Machine$getLabelPosition, label, machine);
				if (_v2.$ === 'Just') {
					var pointer = _v2.a;
					return $elm$core$Result$Ok(
						{
							isFinished: false,
							machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
								A3(
									$author$project$RegisterMachine$Machine$updateRegister,
									target,
									$author$project$RegisterMachine$Base$InstructionAddress(pointer),
									machine))
						});
				} else {
					return $elm$core$Result$Err(
						$author$project$RegisterMachine$Machine$LabelPointsToNothing(label));
				}
			case 'AssignOperation':
				var target = instruction.a;
				var _v3 = instruction.b;
				var opName = _v3.a;
				var args = _v3.b;
				var applyOp = function (op) {
					return A2(
						$elm$core$Result$map,
						function (output) {
							return {
								isFinished: false,
								machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
									A3($author$project$RegisterMachine$Machine$updateRegister, target, output, machine))
							};
						},
						A2(
							$elm$core$Result$andThen,
							op,
							$author$project$Lib$Result$sequence(
								A2(
									$elm$core$List$map,
									function (argument) {
										return A2($author$project$RegisterMachine$Machine$getValueFromArgument, argument, machine);
									},
									args))));
				};
				return A2(
					$elm$core$Result$andThen,
					applyOp,
					A2($author$project$RegisterMachine$Machine$getOperation, opName, machine));
			case 'AssignConstant':
				var target = instruction.a;
				var x = instruction.b;
				return $elm$core$Result$Ok(
					{
						isFinished: false,
						machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
							A3(
								$author$project$RegisterMachine$Machine$updateRegister,
								target,
								$author$project$RegisterMachine$Base$ConstantValue(x),
								machine))
					});
			case 'JumpToLabel':
				var label = instruction.a;
				return $elm$core$Result$Ok(
					{
						isFinished: false,
						machine: A2($author$project$RegisterMachine$Machine$jump, label, machine)
					});
			case 'JumpToLabelAtRegister':
				var register = instruction.a;
				return A2(
					$elm$core$Result$map,
					function (pointer) {
						return {
							isFinished: false,
							machine: A2($author$project$RegisterMachine$Machine$pointerJump, pointer, machine)
						};
					},
					A2($author$project$RegisterMachine$Machine$getInstructionAddressAtRegister, register, machine));
			case 'JumpToLabelIf':
				var testRegister = instruction.a;
				var label = instruction.b;
				return A2(
					$elm$core$Result$map,
					function (val) {
						return {
							isFinished: false,
							machine: _Utils_eq(
								val,
								$author$project$RegisterMachine$Base$ConstantValue(
									$author$project$RegisterMachine$Base$Num(1))) ? A2($author$project$RegisterMachine$Machine$jump, label, machine) : $author$project$RegisterMachine$Machine$advanceInstructionPointer(machine)
						};
					},
					A2($author$project$RegisterMachine$Machine$getRegister, testRegister, machine));
			case 'JumpToLabelAtRegisterIf':
				var testRegister = instruction.a;
				var target = instruction.b;
				return A2(
					$elm$core$Result$andThen,
					function (val) {
						return _Utils_eq(
							val,
							$author$project$RegisterMachine$Base$ConstantValue(
								$author$project$RegisterMachine$Base$Num(1))) ? A2(
							$elm$core$Result$map,
							function (pointer) {
								return {
									isFinished: false,
									machine: A2($author$project$RegisterMachine$Machine$pointerJump, pointer, machine)
								};
							},
							A2($author$project$RegisterMachine$Machine$getInstructionAddressAtRegister, target, machine)) : $elm$core$Result$Ok(
							{
								isFinished: false,
								machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(machine)
							});
					},
					A2($author$project$RegisterMachine$Machine$getRegister, testRegister, machine));
			case 'Halt':
				return $elm$core$Result$Ok(
					$author$project$RegisterMachine$Machine$halt(machine));
			case 'PushRegister':
				var register = instruction.a;
				return A2(
					$elm$core$Result$map,
					function (val) {
						return {
							isFinished: false,
							machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
								A2($author$project$RegisterMachine$Machine$push, val, machine))
						};
					},
					A2($author$project$RegisterMachine$Machine$getRegister, register, machine));
			case 'PushConstant':
				var val = instruction.a;
				return $elm$core$Result$Ok(
					{
						isFinished: false,
						machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
							A2(
								$author$project$RegisterMachine$Machine$push,
								$author$project$RegisterMachine$Base$ConstantValue(val),
								machine))
					});
			case 'PushLabel':
				var label = instruction.a;
				var _v4 = A2($author$project$RegisterMachine$Machine$getLabelPosition, label, machine);
				if (_v4.$ === 'Just') {
					var pointer = _v4.a;
					return $elm$core$Result$Ok(
						{
							isFinished: false,
							machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
								A2(
									$author$project$RegisterMachine$Machine$push,
									$author$project$RegisterMachine$Base$InstructionAddress(pointer),
									machine))
						});
				} else {
					return $elm$core$Result$Err(
						$author$project$RegisterMachine$Machine$LabelPointsToNothing(label));
				}
			case 'Pop':
				var target = instruction.a;
				return A2(
					$elm$core$Result$map,
					function (_v5) {
						var val = _v5.a;
						var newMachine = _v5.b;
						return {
							isFinished: false,
							machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
								A3($author$project$RegisterMachine$Machine$updateRegister, target, val, newMachine))
						};
					},
					$author$project$RegisterMachine$Machine$pop(machine));
			case 'AssignCallAtLabel':
				var target = instruction.a;
				var label = instruction.b;
				return $elm$core$Result$Ok(
					{
						isFinished: false,
						machine: A2(
							$author$project$RegisterMachine$Machine$jump,
							label,
							A3(
								$author$project$RegisterMachine$Machine$updateRegister,
								target,
								$author$project$RegisterMachine$Base$InstructionAddress(machine.instructionPointer + 1),
								machine))
					});
			case 'AssignCallAtRegister':
				var target = instruction.a;
				var labelRegister = instruction.b;
				return A2(
					$elm$core$Result$map,
					function (pointer) {
						return {
							isFinished: false,
							machine: A2(
								$author$project$RegisterMachine$Machine$pointerJump,
								pointer,
								A3(
									$author$project$RegisterMachine$Machine$updateRegister,
									target,
									$author$project$RegisterMachine$Base$InstructionAddress(machine.instructionPointer + 1),
									machine))
						};
					},
					A2($author$project$RegisterMachine$Machine$getInstructionAddressAtRegister, labelRegister, machine));
			case 'ConstructPair':
				var target = instruction.a;
				var arg0 = instruction.b;
				var arg1 = instruction.c;
				return A2(
					$elm$core$Result$andThen,
					function (_v6) {
						var value0 = _v6.a;
						var value1 = _v6.b;
						return A2(
							$elm$core$Result$map,
							function (_v7) {
								var newPairAddress = _v7.a;
								var newMemoryState = _v7.b;
								return {
									isFinished: false,
									machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
										A3(
											$author$project$RegisterMachine$Machine$updateRegister,
											target,
											$author$project$RegisterMachine$Base$Pair(newPairAddress),
											A3($author$project$RegisterMachine$Machine$setMemoryStateOfMachine, $author$project$RegisterMachine$Machine$Main, newMemoryState, machine)))
								};
							},
							A2(
								$elm$core$Result$mapError,
								$author$project$RegisterMachine$Machine$MemoryError,
								A2(
									$author$project$RegisterMachine$MemoryState$new,
									_Utils_Tuple2(value0, value1),
									A2($author$project$RegisterMachine$Machine$currentMemoryState, $author$project$RegisterMachine$Machine$Main, machine))));
					},
					A2(
						$author$project$Lib$Result$tuple2,
						A2($author$project$RegisterMachine$Machine$getValueFromArgument, arg0, machine),
						A2($author$project$RegisterMachine$Machine$getValueFromArgument, arg1, machine)));
			case 'First':
				var target = instruction.a;
				var source = instruction.b;
				return A5($author$project$RegisterMachine$Machine$accessPair, $author$project$RegisterMachine$Machine$FirstComponent, $author$project$RegisterMachine$Machine$Main, target, source, machine);
			case 'Second':
				var target = instruction.a;
				var source = instruction.b;
				return A5($author$project$RegisterMachine$Machine$accessPair, $author$project$RegisterMachine$Machine$SecondComponent, $author$project$RegisterMachine$Machine$Main, target, source, machine);
			case 'SetFirst':
				var register = instruction.a;
				var arg = instruction.b;
				return A5($author$project$RegisterMachine$Machine$setPair, $author$project$RegisterMachine$Machine$FirstComponent, $author$project$RegisterMachine$Machine$Main, register, arg, machine);
			case 'SetSecond':
				var register = instruction.a;
				var arg = instruction.b;
				return A5($author$project$RegisterMachine$Machine$setPair, $author$project$RegisterMachine$Machine$SecondComponent, $author$project$RegisterMachine$Machine$Main, register, arg, machine);
			case 'DualFirst':
				var target = instruction.a;
				var source = instruction.b;
				return A5($author$project$RegisterMachine$Machine$accessPair, $author$project$RegisterMachine$Machine$FirstComponent, $author$project$RegisterMachine$Machine$Dual, target, source, machine);
			case 'DualSecond':
				var target = instruction.a;
				var source = instruction.b;
				return A5($author$project$RegisterMachine$Machine$accessPair, $author$project$RegisterMachine$Machine$SecondComponent, $author$project$RegisterMachine$Machine$Dual, target, source, machine);
			case 'DualSetFirst':
				var register = instruction.a;
				var arg = instruction.b;
				return A5($author$project$RegisterMachine$Machine$setPair, $author$project$RegisterMachine$Machine$FirstComponent, $author$project$RegisterMachine$Machine$Dual, register, arg, machine);
			case 'DualSetSecond':
				var register = instruction.a;
				var arg = instruction.b;
				return A5($author$project$RegisterMachine$Machine$setPair, $author$project$RegisterMachine$Machine$SecondComponent, $author$project$RegisterMachine$Machine$Dual, register, arg, machine);
			case 'MoveToDual':
				var target = instruction.a;
				var source = instruction.b;
				return A2(
					$elm$core$Result$andThen,
					function (sourceAddress) {
						return A2(
							$elm$core$Result$map,
							function (_v8) {
								var addressOfNewPair = _v8.a;
								var newDualMemoryState = _v8.b;
								return {
									isFinished: false,
									machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
										A3(
											$author$project$RegisterMachine$Machine$updateRegister,
											target,
											$author$project$RegisterMachine$Base$Pair(addressOfNewPair),
											A2($author$project$RegisterMachine$Machine$setDualMemoryStateOfMachine, newDualMemoryState, machine)))
								};
							},
							A2(
								$elm$core$Result$andThen,
								function (memoryCell) {
									return A2(
										$elm$core$Result$mapError,
										$author$project$RegisterMachine$Machine$MemoryError,
										A2(
											$author$project$RegisterMachine$MemoryState$new,
											memoryCell,
											A2($author$project$RegisterMachine$Machine$currentMemoryState, $author$project$RegisterMachine$Machine$Dual, machine)));
								},
								A2(
									$elm$core$Result$mapError,
									$author$project$RegisterMachine$Machine$MemoryError,
									A2(
										$author$project$RegisterMachine$MemoryState$get,
										sourceAddress,
										A2($author$project$RegisterMachine$Machine$currentMemoryState, $author$project$RegisterMachine$Machine$Main, machine)))));
					},
					A2($author$project$RegisterMachine$Machine$getMemoryAddressAtRegister, source, machine));
			case 'MarkAsMoved':
				var toBeCollected = instruction.a;
				var referenceToDualMemory = instruction.b;
				return A2(
					$elm$core$Result$map,
					function (_v9) {
						var addressToBeCollected = _v9.a;
						var addressToDualMemory = _v9.b;
						return {
							isFinished: false,
							machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
								A3(
									$author$project$RegisterMachine$Machine$setMemoryStateOfMachine,
									$author$project$RegisterMachine$Machine$Main,
									A3(
										$author$project$RegisterMachine$MemoryState$set,
										addressToBeCollected,
										_Utils_Tuple2(
											$author$project$RegisterMachine$Base$Moved,
											$author$project$RegisterMachine$Base$Pair(addressToDualMemory)),
										A2($author$project$RegisterMachine$Machine$currentMemoryState, $author$project$RegisterMachine$Machine$Main, machine)),
									machine))
						};
					},
					A2(
						$author$project$Lib$Result$tuple2,
						A2($author$project$RegisterMachine$Machine$getMemoryAddressAtRegister, toBeCollected, machine),
						A2($author$project$RegisterMachine$Machine$getMemoryAddressAtRegister, referenceToDualMemory, machine)));
			default:
				return $elm$core$Result$Ok(
					{
						isFinished: false,
						machine: $author$project$RegisterMachine$Machine$advanceInstructionPointer(
							$author$project$RegisterMachine$Machine$swapMemory(machine))
					});
		}
	} else {
		return $elm$core$Result$Ok(
			$author$project$RegisterMachine$Machine$halt(machine));
	}
};
var $author$project$RegisterMachine$Machine$start = function (machine0) {
	return A2(
		$elm$core$Result$andThen,
		function (_v0) {
			var isFinished = _v0.isFinished;
			var machine = _v0.machine;
			return isFinished ? $elm$core$Result$Ok(machine) : $author$project$RegisterMachine$Machine$start(machine);
		},
		$author$project$RegisterMachine$Machine$runOneStep(machine0));
};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $PaackEng$elm_ui_dropdown$Dropdown$performEffect = function (effect) {
	if (effect.$ === 'Loopback') {
		var msg = effect.a;
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$identity,
			$elm$core$Task$succeed(msg));
	} else {
		var msg = effect.a;
		var id = effect.b;
		return A2(
			$elm$core$Task$attempt,
			msg,
			$elm$browser$Browser$Dom$focus(id));
	}
};
var $PaackEng$elm_ui_dropdown$Dropdown$DomFocus = F2(
	function (a, b) {
		return {$: 'DomFocus', a: a, b: b};
	});
var $PaackEng$elm_ui_dropdown$Dropdown$Loopback = function (a) {
	return {$: 'Loopback', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$OnDomFocus = function (a) {
	return {$: 'OnDomFocus', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$closeOnlyIfNotMultiSelect = F2(
	function (config, state) {
		var _v0 = config.dropdownType;
		if (_v0.$ === 'MultiSelect') {
			return state.isOpen;
		} else {
			return false;
		}
	});
var $PaackEng$elm_ui_dropdown$Dropdown$modifySelectedItems = F3(
	function (dropdownType, selectedItem, selectedItemsOld) {
		if (dropdownType.$ === 'MultiSelect') {
			return A2(
				$elm$core$List$any,
				$elm$core$Basics$eq(selectedItem),
				selectedItemsOld) ? A2(
				$elm$core$List$filter,
				$elm$core$Basics$neq(selectedItem),
				selectedItemsOld) : A2($elm$core$List$cons, selectedItem, selectedItemsOld);
		} else {
			return _List_fromArray(
				[selectedItem]);
		}
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $PaackEng$elm_ui_dropdown$Dropdown$selectedItemsAsList = F2(
	function (config, model) {
		var _v0 = config.selectionFromModel(model);
		if (_v0.$ === 'SingleItem') {
			var maybeItem = _v0.a;
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Maybe$map, $elm$core$List$singleton, maybeItem));
		} else {
			var listItems = _v0.a;
			return listItems;
		}
	});
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $PaackEng$elm_ui_dropdown$Dropdown$findFocusedItem = F4(
	function (itemToText, filterText, focusedIndex, items) {
		var loweredFilter = $elm$core$String$toLower(filterText);
		var maybeFocusedItemFold = F2(
			function (list, i) {
				maybeFocusedItemFold:
				while (true) {
					if (list.b) {
						var item = list.a;
						var tail = list.b;
						if (A2(
							$elm$core$String$contains,
							loweredFilter,
							$elm$core$String$toLower(
								itemToText(item)))) {
							return _Utils_eq(i, focusedIndex) ? $elm$core$Maybe$Just(item) : A2(maybeFocusedItemFold, tail, i + 1);
						} else {
							var $temp$list = tail,
								$temp$i = i;
							list = $temp$list;
							i = $temp$i;
							continue maybeFocusedItemFold;
						}
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}
			});
		return A2(maybeFocusedItemFold, items, 0);
	});
var $PaackEng$elm_ui_dropdown$Dropdown$updateSelectedItemsCommand = F2(
	function (onSelectMsg, selectedItemsNew) {
		var onSelectMsgWithItems = function () {
			if (onSelectMsg.$ === 'OnSelectSingleItem') {
				var itemToMsg = onSelectMsg.a;
				return itemToMsg(
					$elm$core$List$head(selectedItemsNew));
			} else {
				var itemsToMsg = onSelectMsg.a;
				return itemsToMsg(selectedItemsNew);
			}
		}();
		return _List_fromArray(
			[
				$PaackEng$elm_ui_dropdown$Dropdown$Loopback(onSelectMsgWithItems)
			]);
	});
var $PaackEng$elm_ui_dropdown$Dropdown$updateKeyDown = F4(
	function (config, key, model, state) {
		var items = config.itemsFromModel(model);
		var clampIndex = function (i) {
			return A3(
				$elm$core$Basics$clamp,
				0,
				$elm$core$List$length(items) - 1,
				i);
		};
		switch (key.$) {
			case 'ArrowDown':
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{
								focusedIndex: clampIndex(state.focusedIndex + 1),
								isOpen: true
							})),
					_List_Nil);
			case 'ArrowUp':
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{
								focusedIndex: clampIndex(state.focusedIndex - 1),
								isOpen: true
							})),
					_List_Nil);
			case 'Enter':
				return (!state.isOpen) ? _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{isOpen: true})),
					_List_Nil) : _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{isOpen: false})),
					function () {
						var _v1 = A4($PaackEng$elm_ui_dropdown$Dropdown$findFocusedItem, config.itemToText, state.filterText, state.focusedIndex, items);
						if (_v1.$ === 'Just') {
							var focusedItem = _v1.a;
							return A2(
								$PaackEng$elm_ui_dropdown$Dropdown$updateSelectedItemsCommand,
								config.onSelectMsg,
								A3(
									$PaackEng$elm_ui_dropdown$Dropdown$modifySelectedItems,
									config.dropdownType,
									focusedItem,
									A2($PaackEng$elm_ui_dropdown$Dropdown$selectedItemsAsList, config, model)));
						} else {
							return _List_Nil;
						}
					}());
			default:
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{isOpen: false})),
					_List_Nil);
		}
	});
var $PaackEng$elm_ui_dropdown$Dropdown$updateWithoutPerform = F4(
	function (_v0, msg, model, untouchedState) {
		var config = _v0.a;
		var state = untouchedState.a;
		switch (msg.$) {
			case 'OnDomFocus':
				return _Utils_Tuple2(untouchedState, _List_Nil);
			case 'OnBlur':
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{
								isOpen: A2($PaackEng$elm_ui_dropdown$Dropdown$closeOnlyIfNotMultiSelect, config, state)
							})),
					_List_Nil);
			case 'OnClickOutside':
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{isOpen: false})),
					_List_Nil);
			case 'OnClickPrompt':
				var isOpen = !state.isOpen;
				var effect = isOpen ? _List_fromArray(
					[
						A2(
						$PaackEng$elm_ui_dropdown$Dropdown$DomFocus,
						A2($elm$core$Basics$composeR, $PaackEng$elm_ui_dropdown$Dropdown$OnDomFocus, config.dropdownMsg),
						state.id + 'input-search')
					]) : _List_Nil;
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{filterText: '', focusedIndex: 0, isOpen: isOpen})),
					effect);
			case 'OnSelect':
				var item = msg.a;
				var selectedItemsNew = A3(
					$PaackEng$elm_ui_dropdown$Dropdown$modifySelectedItems,
					config.dropdownType,
					item,
					A2($PaackEng$elm_ui_dropdown$Dropdown$selectedItemsAsList, config, model));
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{
								isOpen: A2($PaackEng$elm_ui_dropdown$Dropdown$closeOnlyIfNotMultiSelect, config, state)
							})),
					A2($PaackEng$elm_ui_dropdown$Dropdown$updateSelectedItemsCommand, config.onSelectMsg, selectedItemsNew));
			case 'OnFilterTyped':
				var val = msg.a;
				return _Utils_Tuple2(
					$PaackEng$elm_ui_dropdown$Dropdown$State(
						_Utils_update(
							state,
							{filterText: val})),
					function () {
						var _v2 = config.onFilterChangeMsg;
						if (_v2.$ === 'Nothing') {
							return _List_Nil;
						} else {
							var onFilterChange = _v2.a;
							return _List_fromArray(
								[
									$PaackEng$elm_ui_dropdown$Dropdown$Loopback(
									onFilterChange(val))
								]);
						}
					}());
			default:
				var key = msg.a;
				return A4($PaackEng$elm_ui_dropdown$Dropdown$updateKeyDown, config, key, model, state);
		}
	});
var $PaackEng$elm_ui_dropdown$Dropdown$update = F4(
	function (config, msg, model, state) {
		return A2(
			$elm$core$Tuple$mapSecond,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$map($PaackEng$elm_ui_dropdown$Dropdown$performEffect),
				$elm$core$Platform$Cmd$batch),
			A4($PaackEng$elm_ui_dropdown$Dropdown$updateWithoutPerform, config, msg, model, state));
	});
var $author$project$RegisterMachine$Ui$Base$argNode = A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Dynamic, $author$project$RegisterMachine$Ui$Base$argExpectation);
var $author$project$RegisterMachine$Ui$Base$jumpArgExpectation = _List_fromArray(
	[$author$project$RegisterMachine$Ui$Base$RegisterUse, $author$project$RegisterMachine$Ui$Base$LabelUse]);
var $author$project$RegisterMachine$Ui$Base$registerUseExpectation = _List_fromArray(
	[$author$project$RegisterMachine$Ui$Base$RegisterUse]);
var $author$project$RegisterMachine$Ui$Base$initialInstruction = function (instructionKind) {
	switch (instructionKind.$) {
		case 'LabelKind':
			return A3(
				$author$project$RegisterMachine$Ui$Base$Instruction,
				instructionKind,
				A2(
					$author$project$Lib$ZipList$fromList,
					A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$labelExpectation),
					_List_Nil),
				$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
		case 'OperationApplicationKind':
			return A3(
				$author$project$RegisterMachine$Ui$Base$Instruction,
				instructionKind,
				A2(
					$author$project$Lib$ZipList$fromList,
					A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$registerExpectation),
					_List_fromArray(
						[
							A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$operationNameExpectation),
							A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Dynamic, $author$project$RegisterMachine$Ui$Base$argExpectation)
						])),
				$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
		case 'AssignmentKind':
			return A3(
				$author$project$RegisterMachine$Ui$Base$Instruction,
				instructionKind,
				A2(
					$author$project$Lib$ZipList$fromList,
					A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$registerExpectation),
					_List_fromArray(
						[
							A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$argExpectation)
						])),
				$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
		case 'JumpKind':
			return A3(
				$author$project$RegisterMachine$Ui$Base$Instruction,
				instructionKind,
				A2(
					$author$project$Lib$ZipList$fromList,
					A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$jumpArgExpectation),
					_List_Nil),
				$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
		case 'JumpIfKind':
			return A3(
				$author$project$RegisterMachine$Ui$Base$Instruction,
				instructionKind,
				A2(
					$author$project$Lib$ZipList$fromList,
					A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$registerUseExpectation),
					_List_fromArray(
						[
							A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$jumpArgExpectation)
						])),
				$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
		case 'HaltKind':
			return $author$project$RegisterMachine$Ui$Base$Halt;
		default:
			return A3(
				$author$project$RegisterMachine$Ui$Base$Instruction,
				instructionKind,
				A2(
					$author$project$Lib$ZipList$fromList,
					A2($author$project$RegisterMachine$Ui$Base$emptyNode, $author$project$RegisterMachine$Ui$Base$Static, $author$project$RegisterMachine$Ui$Base$argExpectation),
					_List_Nil),
				$author$project$RegisterMachine$Ui$Base$initialInstructionValidity);
	}
};
var $author$project$Lib$ZipList$current = function (_v0) {
	var x = _v0.b;
	return x;
};
var $author$project$Lib$ZipList$deleteAndFocusLeft = function (zipList) {
	var revLeft0 = zipList.a;
	var x0 = zipList.b;
	var right0 = zipList.c;
	if (!revLeft0.b) {
		if (!right0.b) {
			return zipList;
		} else {
			var x1 = right0.a;
			var right1 = right0.b;
			return _Utils_Tuple3(_List_Nil, x1, right1);
		}
	} else {
		var x1 = revLeft0.a;
		var revLeft1 = revLeft0.b;
		return _Utils_Tuple3(revLeft1, x1, right0);
	}
};
var $author$project$Lib$ZipList$deleteAndFocusRight = function (zipList) {
	var revLeft0 = zipList.a;
	var x0 = zipList.b;
	var right0 = zipList.c;
	if (!right0.b) {
		if (!revLeft0.b) {
			return zipList;
		} else {
			var x1 = revLeft0.a;
			var revLeft1 = revLeft0.b;
			return _Utils_Tuple3(revLeft1, x1, _List_Nil);
		}
	} else {
		var x1 = right0.a;
		var right1 = right0.b;
		return _Utils_Tuple3(revLeft0, x1, right1);
	}
};
var $author$project$RegisterMachine$Ui$Editor$deleteCurrentInstruction = function (model) {
	return _Utils_update(
		model,
		{
			instructions: function () {
				var _v0 = $author$project$Lib$ZipList$current(model.instructions);
				if (_v0.$ === 'FutureInstruction') {
					var direction = _v0.a;
					if (direction.$ === 'Up') {
						return $author$project$Lib$ZipList$deleteAndFocusLeft(model.instructions);
					} else {
						return $author$project$Lib$ZipList$deleteAndFocusRight(model.instructions);
					}
				} else {
					return $author$project$Lib$ZipList$deleteAndFocusRight(model.instructions);
				}
			}()
		});
};
var $author$project$Lib$ZipList$updateCurrent = F2(
	function (f, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			revLeft0,
			f(x0),
			right0);
	});
var $author$project$RegisterMachine$Ui$Editor$updateCurrentInstructionWithoutValidation = F2(
	function (f, model) {
		return _Utils_update(
			model,
			{
				instructions: A2($author$project$Lib$ZipList$updateCurrent, f, model.instructions)
			});
	});
var $author$project$RegisterMachine$Ui$Base$Atleast = function (a) {
	return {$: 'Atleast', a: a};
};
var $author$project$RegisterMachine$Ui$Base$Exactly = function (a) {
	return {$: 'Exactly', a: a};
};
var $author$project$Lib$ZipList$length = function (_v0) {
	var revLeft0 = _v0.a;
	var right0 = _v0.c;
	return ($elm$core$List$length(revLeft0) + $elm$core$List$length(right0)) + 1;
};
var $author$project$Lib$ZipList$map = F2(
	function (f, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			A2($elm$core$List$map, f, revLeft0),
			f(x0),
			A2($elm$core$List$map, f, right0));
	});
var $author$project$RegisterMachine$Ui$Base$ContainsErrorNodes = {$: 'ContainsErrorNodes'};
var $author$project$RegisterMachine$Ui$Base$EveryNodeIsValid = {$: 'EveryNodeIsValid'};
var $author$project$RegisterMachine$Ui$Validation$nodesToInstructionValidity = function (nodes) {
	var nonValidNodes = A2(
		$elm$core$List$filter,
		function (_v2) {
			var nodeValidity = _v2.b;
			if (nodeValidity.$ === 'ValidNode') {
				return false;
			} else {
				return true;
			}
		},
		nodes);
	if ($elm$core$List$isEmpty(nonValidNodes)) {
		return $author$project$RegisterMachine$Ui$Base$EveryNodeIsValid;
	} else {
		var containsErrorNode = A2(
			$elm$core$List$any,
			function (_v0) {
				var nodeValidity = _v0.b;
				if (nodeValidity.$ === 'ErrorNode') {
					return true;
				} else {
					return false;
				}
			},
			nonValidNodes);
		return containsErrorNode ? $author$project$RegisterMachine$Ui$Base$ContainsErrorNodes : $author$project$RegisterMachine$Ui$Base$ContainsUnfinishedNodes;
	}
};
var $author$project$Lib$ZipList$toList = function (_v0) {
	var revLeft = _v0.a;
	var x = _v0.b;
	var right0 = _v0.c;
	return _Utils_ap(
		$elm$core$List$reverse(revLeft),
		A2($elm$core$List$cons, x, right0));
};
var $author$project$RegisterMachine$Ui$Base$ErrorNode = {$: 'ErrorNode'};
var $author$project$RegisterMachine$Ui$Base$ValidNode = function (a) {
	return {$: 'ValidNode', a: a};
};
var $elm_community$maybe_extra$Maybe$Extra$isJust = function (m) {
	if (m.$ === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var $author$project$RegisterMachine$Ui$Validation$hasEntityKind = F2(
	function (text, entityKind) {
		switch (entityKind.$) {
			case 'RegisterName':
				return true;
			case 'RegisterUse':
				var _v1 = $elm$core$String$uncons(text);
				if (_v1.$ === 'Nothing') {
					return false;
				} else {
					var _v2 = _v1.a;
					var c = _v2.a;
					var text1 = _v2.b;
					return _Utils_eq(
						c,
						_Utils_chr('$'));
				}
			case 'Label':
				return true;
			case 'LabelUse':
				var _v3 = $elm$core$String$uncons(text);
				if (_v3.$ === 'Nothing') {
					return false;
				} else {
					var _v4 = _v3.a;
					var c = _v4.a;
					var text1 = _v4.b;
					return _Utils_eq(
						c,
						_Utils_chr(':'));
				}
			case 'Integer':
				return $elm_community$maybe_extra$Maybe$Extra$isJust(
					$elm$core$String$toInt(text));
			case 'Nil':
				return text === 'nil';
			default:
				return true;
		}
	});
var $author$project$RegisterMachine$Ui$Validation$isEmpty = $elm$core$String$isEmpty;
var $author$project$RegisterMachine$Ui$Validation$setNodeValidity = F2(
	function (nodeValidity, _v0) {
		var nodeKind = _v0.a;
		var nodeExpectation = _v0.c;
		var text = _v0.d;
		return A4($author$project$RegisterMachine$Ui$Base$Node, nodeKind, nodeValidity, nodeExpectation, text);
	});
var $author$project$RegisterMachine$Ui$Validation$validatedNode = function (node) {
	var allExpectations = node.c;
	var text = node.d;
	var loop = F2(
		function (entityKind0, expectations0) {
			loop:
			while (true) {
				if (A2($author$project$RegisterMachine$Ui$Validation$hasEntityKind, text, entityKind0)) {
					return A2(
						$author$project$RegisterMachine$Ui$Validation$setNodeValidity,
						$author$project$RegisterMachine$Ui$Base$ValidNode(entityKind0),
						node);
				} else {
					if (!expectations0.b) {
						return A2($author$project$RegisterMachine$Ui$Validation$setNodeValidity, $author$project$RegisterMachine$Ui$Base$ErrorNode, node);
					} else {
						var entityKind1 = expectations0.a;
						var expectations1 = expectations0.b;
						var $temp$entityKind0 = entityKind1,
							$temp$expectations0 = expectations1;
						entityKind0 = $temp$entityKind0;
						expectations0 = $temp$expectations0;
						continue loop;
					}
				}
			}
		});
	if ($author$project$RegisterMachine$Ui$Validation$isEmpty(text)) {
		return A2($author$project$RegisterMachine$Ui$Validation$setNodeValidity, $author$project$RegisterMachine$Ui$Base$UnfinishedNode, node);
	} else {
		if (!allExpectations.b) {
			return _Debug_todo(
				'RegisterMachine.Ui.Validation',
				{
					start: {line: 52, column: 17},
					end: {line: 52, column: 27}
				})('This should never get triggered assuming someone doesn\'t create empty node-expectation');
		} else {
			var entityKind = allExpectations.a;
			var expectations0 = allExpectations.b;
			return A2(loop, entityKind, expectations0);
		}
	}
};
var $author$project$RegisterMachine$Ui$Base$WrongArity = function (a) {
	return {$: 'WrongArity', a: a};
};
var $author$project$RegisterMachine$Ui$Validation$wrongArity = F2(
	function (expected, received) {
		return $author$project$RegisterMachine$Ui$Base$WrongArity(
			{expected: expected, received: received});
	});
var $author$project$RegisterMachine$Ui$Validation$validateInstruction = F2(
	function (instructionKind, nodes) {
		var validatedNodes = A2($author$project$Lib$ZipList$map, $author$project$RegisterMachine$Ui$Validation$validatedNode, nodes);
		var numOfNodes = $author$project$Lib$ZipList$length(nodes);
		var instructionValidity = $author$project$RegisterMachine$Ui$Validation$nodesToInstructionValidity(
			$author$project$Lib$ZipList$toList(validatedNodes));
		var checkArity = function (expectedArity) {
			if (expectedArity.$ === 'Atleast') {
				var expectedNumOfNodes = expectedArity.a;
				return (_Utils_cmp(numOfNodes, expectedNumOfNodes) > -1) ? instructionValidity : A2(
					$author$project$RegisterMachine$Ui$Validation$wrongArity,
					$author$project$RegisterMachine$Ui$Base$Atleast(expectedNumOfNodes),
					numOfNodes);
			} else {
				var expectedNumOfNodes = expectedArity.a;
				return _Utils_eq(numOfNodes, expectedNumOfNodes) ? instructionValidity : A2(
					$author$project$RegisterMachine$Ui$Validation$wrongArity,
					$author$project$RegisterMachine$Ui$Base$Exactly(expectedNumOfNodes),
					numOfNodes);
			}
		};
		return _Utils_Tuple2(
			validatedNodes,
			checkArity(
				function () {
					switch (instructionKind.$) {
						case 'LabelKind':
							return $author$project$RegisterMachine$Ui$Base$Exactly(1);
						case 'OperationApplicationKind':
							return $author$project$RegisterMachine$Ui$Base$Atleast(3);
						case 'AssignmentKind':
							return $author$project$RegisterMachine$Ui$Base$Exactly(2);
						case 'JumpKind':
							return $author$project$RegisterMachine$Ui$Base$Exactly(1);
						case 'JumpIfKind':
							return $author$project$RegisterMachine$Ui$Base$Exactly(2);
						case 'PushKind':
							return $author$project$RegisterMachine$Ui$Base$Exactly(1);
						default:
							return $author$project$RegisterMachine$Ui$Base$Exactly(0);
					}
				}()));
	});
var $author$project$RegisterMachine$Ui$Validation$validatedInstruction = F2(
	function (instructionKind, nodes) {
		var _v0 = A2($author$project$RegisterMachine$Ui$Validation$validateInstruction, instructionKind, nodes);
		var validatedNodes = _v0.a;
		var instructionValidity = _v0.b;
		return A3($author$project$RegisterMachine$Ui$Base$Instruction, instructionKind, validatedNodes, instructionValidity);
	});
var $author$project$RegisterMachine$Ui$Editor$validateCurrentInstruction = $author$project$RegisterMachine$Ui$Editor$updateCurrentInstructionWithoutValidation(
	function (instruction) {
		switch (instruction.$) {
			case 'Instruction':
				var instructionKind = instruction.a;
				var nodes = instruction.b;
				return A2($author$project$RegisterMachine$Ui$Validation$validatedInstruction, instructionKind, nodes);
			case 'Halt':
				return instruction;
			default:
				return instruction;
		}
	});
var $author$project$RegisterMachine$Ui$Editor$setModeToTraversing = function (model) {
	var _v0 = $author$project$Lib$ZipList$current(model.instructions);
	if (_v0.$ === 'FutureInstruction') {
		var direction = _v0.a;
		return $author$project$RegisterMachine$Ui$Editor$deleteCurrentInstruction(
			_Utils_update(
				model,
				{
					instructionMode: $author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes)
				}));
	} else {
		var _v1 = model.instructionMode;
		if (_v1.$ === 'InsertingInstruction') {
			return _Utils_update(
				model,
				{
					instructionMode: $author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes)
				});
		} else {
			return $author$project$RegisterMachine$Ui$Editor$validateCurrentInstruction(
				_Utils_update(
					model,
					{
						instructionMode: $author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes)
					}));
		}
	}
};
var $author$project$RegisterMachine$Ui$Editor$changeInstructionWithoutValidationTo = F2(
	function (instructionKind, model) {
		return $author$project$RegisterMachine$Ui$Editor$setModeToTraversing(
			A2(
				$author$project$RegisterMachine$Ui$Editor$updateCurrentInstructionWithoutValidation,
				function (_v0) {
					return $author$project$RegisterMachine$Ui$Base$initialInstruction(instructionKind);
				},
				model));
	});
var $author$project$RegisterMachine$Ui$Editor$isCurrentNodeStatic = function (nodes) {
	var _v0 = $author$project$Lib$ZipList$current(nodes);
	if (_v0.a.$ === 'Static') {
		var _v1 = _v0.a;
		return true;
	} else {
		return false;
	}
};
var $author$project$RegisterMachine$Ui$Editor$updateCurrentNodesWithoutValidation = function (f) {
	return $author$project$RegisterMachine$Ui$Editor$updateCurrentInstructionWithoutValidation(
		function (instruction) {
			if (instruction.$ === 'Instruction') {
				var instructionKind = instruction.a;
				var nodes = instruction.b;
				var validation = instruction.c;
				return A3(
					$author$project$RegisterMachine$Ui$Base$Instruction,
					instructionKind,
					A2(f, nodes, instruction),
					validation);
			} else {
				return instruction;
			}
		});
};
var $author$project$RegisterMachine$Ui$Editor$setCurrentNodesWithoutValidation = function (nodes) {
	return $author$project$RegisterMachine$Ui$Editor$updateCurrentNodesWithoutValidation(
		F2(
			function (_v0, _v1) {
				return nodes;
			}));
};
var $author$project$RegisterMachine$Ui$Editor$deleteCurrentNodeWithValidation = function (model) {
	var _v0 = $author$project$Lib$ZipList$current(model.instructions);
	if (_v0.$ === 'Instruction') {
		var instructionKind = _v0.a;
		var nodes = _v0.b;
		if ($author$project$RegisterMachine$Ui$Editor$isCurrentNodeStatic(nodes)) {
			return model;
		} else {
			if (instructionKind.$ === 'OperationApplicationKind') {
				return ($author$project$Lib$ZipList$length(nodes) <= 3) ? model : $author$project$RegisterMachine$Ui$Editor$validateCurrentInstruction(
					A2(
						$author$project$RegisterMachine$Ui$Editor$setCurrentNodesWithoutValidation,
						$author$project$Lib$ZipList$deleteAndFocusRight(nodes),
						model));
			} else {
				return $author$project$RegisterMachine$Ui$Editor$validateCurrentInstruction(
					A2(
						$author$project$RegisterMachine$Ui$Editor$setCurrentNodesWithoutValidation,
						$author$project$Lib$ZipList$deleteAndFocusRight(nodes),
						model));
			}
		}
	} else {
		return model;
	}
};
var $author$project$Lib$ZipList$duplicateLeft = function (_v0) {
	var revLeft0 = _v0.a;
	var x0 = _v0.b;
	var right0 = _v0.c;
	return _Utils_Tuple3(
		A2($elm$core$List$cons, x0, revLeft0),
		x0,
		right0);
};
var $author$project$Lib$ZipList$duplicateRight = function (_v0) {
	var revLeft0 = _v0.a;
	var x0 = _v0.b;
	var right0 = _v0.c;
	return _Utils_Tuple3(
		revLeft0,
		x0,
		A2($elm$core$List$cons, x0, right0));
};
var $author$project$RegisterMachine$Ui$Editor$duplicateInstruction = F2(
	function (direction, model) {
		if (direction.$ === 'Up') {
			return _Utils_update(
				model,
				{
					instructions: $author$project$Lib$ZipList$duplicateLeft(model.instructions)
				});
		} else {
			return _Utils_update(
				model,
				{
					instructions: $author$project$Lib$ZipList$duplicateRight(model.instructions)
				});
		}
	});
var $author$project$RegisterMachine$Ui$Editor$getCurrentInstruction = function (model) {
	return $author$project$Lib$ZipList$current(model.instructions);
};
var $author$project$RegisterMachine$Ui$Editor$getCurrentNodes = function (model) {
	var _v0 = $author$project$Lib$ZipList$current(model.instructions);
	if (_v0.$ === 'Instruction') {
		var nodes = _v0.b;
		return $elm$core$Maybe$Just(nodes);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Lib$ZipList$insertLeft = F2(
	function (y, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			A2($elm$core$List$cons, y, revLeft0),
			x0,
			right0);
	});
var $author$project$Lib$ZipList$insertRight = F2(
	function (y, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			revLeft0,
			x0,
			A2($elm$core$List$cons, y, right0));
	});
var $author$project$Lib$ZipList$left = function (zipList) {
	var revLeft0 = zipList.a;
	var x0 = zipList.b;
	var right0 = zipList.c;
	if (!revLeft0.b) {
		return zipList;
	} else {
		var x1 = revLeft0.a;
		var revLeft1 = revLeft0.b;
		return _Utils_Tuple3(
			revLeft1,
			x1,
			A2($elm$core$List$cons, x0, right0));
	}
};
var $author$project$Lib$ZipList$right = function (zipList) {
	var revLeft = zipList.a;
	var x0 = zipList.b;
	var right0 = zipList.c;
	if (!right0.b) {
		return zipList;
	} else {
		var x1 = right0.a;
		var right1 = right0.b;
		return _Utils_Tuple3(
			A2($elm$core$List$cons, x0, revLeft),
			x1,
			right1);
	}
};
var $author$project$RegisterMachine$Ui$Editor$setModeToEditing = function (model) {
	var _v0 = $author$project$Lib$ZipList$current(model.instructions);
	if (_v0.$ === 'Instruction') {
		return _Utils_update(
			model,
			{
				instructionMode: $author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$EditingNode)
			});
	} else {
		return model;
	}
};
var $author$project$RegisterMachine$Ui$Editor$insertAndEditNodeWithoutValidation = F2(
	function (direction, model) {
		var _v0 = $author$project$RegisterMachine$Ui$Editor$getCurrentNodes(model);
		if (_v0.$ === 'Just') {
			var nodes = _v0.a;
			var _v1 = $author$project$Lib$ZipList$current(nodes);
			if (_v1.a.$ === 'Dynamic') {
				var _v2 = _v1.a;
				return $author$project$RegisterMachine$Ui$Editor$setModeToEditing(
					A2(
						$author$project$RegisterMachine$Ui$Editor$setCurrentNodesWithoutValidation,
						function () {
							if (direction.$ === 'Left') {
								return $author$project$Lib$ZipList$left(
									A2(
										$author$project$Lib$ZipList$insertLeft,
										A4($author$project$RegisterMachine$Ui$Base$Node, $author$project$RegisterMachine$Ui$Base$Dynamic, $author$project$RegisterMachine$Ui$Base$UnfinishedNode, $author$project$RegisterMachine$Ui$Base$argExpectation, ''),
										nodes));
							} else {
								return $author$project$Lib$ZipList$right(
									A2(
										$author$project$Lib$ZipList$insertRight,
										A4($author$project$RegisterMachine$Ui$Base$Node, $author$project$RegisterMachine$Ui$Base$Dynamic, $author$project$RegisterMachine$Ui$Base$UnfinishedNode, $author$project$RegisterMachine$Ui$Base$argExpectation, ''),
										nodes));
							}
						}(),
						model));
			} else {
				return model;
			}
		} else {
			return model;
		}
	});
var $author$project$Lib$ZipList$insertAtEnd = F2(
	function (x, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			revLeft0,
			x0,
			_Utils_ap(
				right0,
				_List_fromArray(
					[x])));
	});
var $author$project$RegisterMachine$Ui$Base$FutureInstruction = function (a) {
	return {$: 'FutureInstruction', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$insertFutureInstruction = F2(
	function (direction, model) {
		return _Utils_update(
			model,
			{
				instructions: function () {
					if (direction.$ === 'Up') {
						return $author$project$Lib$ZipList$insertLeft(
							$author$project$RegisterMachine$Ui$Base$FutureInstruction($author$project$RegisterMachine$Ui$Base$Down));
					} else {
						return $author$project$Lib$ZipList$insertRight(
							$author$project$RegisterMachine$Ui$Base$FutureInstruction($author$project$RegisterMachine$Ui$Base$Up));
					}
				}()(model.instructions)
			});
	});
var $author$project$Lib$ZipList$jumpEnd = function (_v0) {
	jumpEnd:
	while (true) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		if (!right0.b) {
			return _Utils_Tuple3(revLeft0, x0, _List_Nil);
		} else {
			var x1 = right0.a;
			var right1 = right0.b;
			var $temp$_v0 = _Utils_Tuple3(
				A2($elm$core$List$cons, x0, revLeft0),
				x1,
				right1);
			_v0 = $temp$_v0;
			continue jumpEnd;
		}
	}
};
var $author$project$Lib$ZipList$jumpStart = function (_v0) {
	jumpStart:
	while (true) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		if (!revLeft0.b) {
			return _Utils_Tuple3(_List_Nil, x0, right0);
		} else {
			var x1 = revLeft0.a;
			var revLeft1 = revLeft0.b;
			var $temp$_v0 = _Utils_Tuple3(
				revLeft1,
				x1,
				A2($elm$core$List$cons, x0, right0));
			_v0 = $temp$_v0;
			continue jumpStart;
		}
	}
};
var $author$project$RegisterMachine$Ui$Editor$jumpToBoundaryInstruction = F2(
	function (direction, model) {
		if (direction.$ === 'Up') {
			return _Utils_update(
				model,
				{
					instructions: $author$project$Lib$ZipList$jumpStart(model.instructions)
				});
		} else {
			return _Utils_update(
				model,
				{
					instructions: $author$project$Lib$ZipList$jumpEnd(model.instructions)
				});
		}
	});
var $author$project$RegisterMachine$Ui$Editor$updateNodesOfCurrentInstructionWithoutValidation = F2(
	function (f, model) {
		return _Utils_update(
			model,
			{
				instructions: A2(
					$author$project$Lib$ZipList$updateCurrent,
					function (instruction) {
						if (instruction.$ === 'Instruction') {
							var kind = instruction.a;
							var nodes = instruction.b;
							var validation = instruction.c;
							return A3(
								$author$project$RegisterMachine$Ui$Base$Instruction,
								kind,
								f(nodes),
								validation);
						} else {
							return instruction;
						}
					},
					model.instructions)
			});
	});
var $author$project$RegisterMachine$Ui$Editor$jumpToBoundaryNode = function (direction) {
	if (direction.$ === 'Left') {
		return $author$project$RegisterMachine$Ui$Editor$updateNodesOfCurrentInstructionWithoutValidation($author$project$Lib$ZipList$jumpStart);
	} else {
		return $author$project$RegisterMachine$Ui$Editor$updateNodesOfCurrentInstructionWithoutValidation($author$project$Lib$ZipList$jumpEnd);
	}
};
var $elm$core$Debug$log = _Debug_log;
var $author$project$RegisterMachine$Ui$Editor$NonemptyBoard = function (a) {
	return {$: 'NonemptyBoard', a: a};
};
var $author$project$RegisterMachine$Ui$Editor$moveFragment = F2(
	function (direction, model) {
		var fragmentBoard = model.fragmentBoard;
		return _Utils_update(
			model,
			{
				fragmentBoard: function () {
					if (fragmentBoard.$ === 'EmptyBoard') {
						return $author$project$RegisterMachine$Ui$Editor$EmptyBoard;
					} else {
						var fragments = fragmentBoard.a;
						if (direction.$ === 'Up') {
							return $author$project$RegisterMachine$Ui$Editor$NonemptyBoard(
								$author$project$Lib$ZipList$left(fragments));
						} else {
							return $author$project$RegisterMachine$Ui$Editor$NonemptyBoard(
								$author$project$Lib$ZipList$right(fragments));
						}
					}
				}()
			});
	});
var $author$project$RegisterMachine$Ui$Editor$moveInstruction = F2(
	function (direction, model) {
		return _Utils_update(
			model,
			{
				instructions: function () {
					if (direction.$ === 'Up') {
						return $author$project$Lib$ZipList$left(model.instructions);
					} else {
						return $author$project$Lib$ZipList$right(model.instructions);
					}
				}()
			});
	});
var $author$project$Lib$ZipList$insertListLeft = F2(
	function (xs, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			_Utils_ap(
				$elm$core$List$reverse(xs),
				revLeft0),
			x0,
			right0);
	});
var $author$project$Lib$ZipList$insertListRight = F2(
	function (xs, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			revLeft0,
			x0,
			_Utils_ap(xs, right0));
	});
var $mgold$elm_nonempty_list$List$Nonempty$toList = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return A2($elm$core$List$cons, x, xs);
};
var $author$project$RegisterMachine$Ui$Editor$pasteFragment = F2(
	function (direction, model) {
		var fragmentBoard = model.fragmentBoard;
		var instructions = model.instructions;
		if (fragmentBoard.$ === 'EmptyBoard') {
			return model;
		} else {
			var fragments = fragmentBoard.a;
			return _Utils_update(
				model,
				{
					instructions: function () {
						if (direction.$ === 'Up') {
							return A2(
								$author$project$Lib$ZipList$insertListLeft,
								$mgold$elm_nonempty_list$List$Nonempty$toList(
									$author$project$Lib$ZipList$current(fragments)),
								instructions);
						} else {
							return A2(
								$author$project$Lib$ZipList$insertListRight,
								$mgold$elm_nonempty_list$List$Nonempty$toList(
									$author$project$Lib$ZipList$current(fragments)),
								instructions);
						}
					}()
				});
		}
	});
var $author$project$Lib$ZipList$isSingleton = function (_v0) {
	var revLeft0 = _v0.a;
	var x0 = _v0.b;
	var right0 = _v0.c;
	return $elm$core$List$isEmpty(revLeft0) && $elm$core$List$isEmpty(right0);
};
var $author$project$RegisterMachine$Ui$Editor$popFragment = function (model) {
	var fragmentBoard = model.fragmentBoard;
	if (fragmentBoard.$ === 'EmptyBoard') {
		return model;
	} else {
		var fragments = fragmentBoard.a;
		return _Utils_update(
			model,
			{
				fragmentBoard: $author$project$Lib$ZipList$isSingleton(fragments) ? $author$project$RegisterMachine$Ui$Editor$EmptyBoard : $author$project$RegisterMachine$Ui$Editor$NonemptyBoard(
					$author$project$Lib$ZipList$deleteAndFocusLeft(fragments))
			});
	}
};
var $author$project$RegisterMachine$Ui$Editor$pasteAndPopFragment = function (direction) {
	return A2(
		$elm$core$Basics$composeR,
		$author$project$RegisterMachine$Ui$Editor$pasteFragment(direction),
		$author$project$RegisterMachine$Ui$Editor$popFragment);
};
var $author$project$Lib$ZipList$cons = F2(
	function (x, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_Tuple3(
			_Utils_ap(
				revLeft0,
				_List_fromArray(
					[x])),
			x0,
			right0);
	});
var $author$project$Lib$ZipList$singleton = function (a) {
	return _Utils_Tuple3(_List_Nil, a, _List_Nil);
};
var $author$project$RegisterMachine$Ui$Editor$pushFragment = F2(
	function (fragment, model) {
		return _Utils_update(
			model,
			{
				fragmentBoard: function () {
					var _v0 = model.fragmentBoard;
					if (_v0.$ === 'EmptyBoard') {
						return $author$project$RegisterMachine$Ui$Editor$NonemptyBoard(
							$author$project$Lib$ZipList$singleton(fragment));
					} else {
						var fragments = _v0.a;
						return $author$project$RegisterMachine$Ui$Editor$NonemptyBoard(
							A2($author$project$Lib$ZipList$cons, fragment, fragments));
					}
				}()
			});
	});
var $author$project$Lib$ZipListSelection$Downwards = {$: 'Downwards'};
var $author$project$Lib$ZipListSelection$Upwards = {$: 'Upwards'};
var $author$project$Lib$ZipListSelection$down = function (zipListSelection0) {
	var revUps0 = zipListSelection0.a;
	var middle0 = zipListSelection0.b;
	var orientation = middle0.a;
	var downs0 = zipListSelection0.c;
	if (orientation.$ === 'Upwards') {
		var _v1 = middle0;
		var mids0 = _v1.b;
		if (!mids0.b.b) {
			var mid0 = mids0.a;
			if (!downs0.b) {
				return zipListSelection0;
			} else {
				var down0 = downs0.a;
				var downs1 = downs0.b;
				return _Utils_Tuple3(
					revUps0,
					_Utils_Tuple2(
						$author$project$Lib$ZipListSelection$Downwards,
						A2(
							$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
							down0,
							_List_fromArray(
								[mid0]))),
					downs1);
			}
		} else {
			var mid0 = mids0.a;
			var _v4 = mids0.b;
			var mid1 = _v4.a;
			var mids2 = _v4.b;
			return _Utils_Tuple3(
				A2($elm$core$List$cons, mid0, revUps0),
				_Utils_Tuple2(
					$author$project$Lib$ZipListSelection$Upwards,
					A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, mid1, mids2)),
				downs0);
		}
	} else {
		if (!downs0.b) {
			return zipListSelection0;
		} else {
			var down0 = downs0.a;
			var downs1 = downs0.b;
			var _v6 = middle0;
			var revMids0 = _v6.b;
			return _Utils_Tuple3(
				revUps0,
				_Utils_Tuple2(
					$author$project$Lib$ZipListSelection$Downwards,
					A2($mgold$elm_nonempty_list$List$Nonempty$cons, down0, revMids0)),
				downs1);
		}
	}
};
var $author$project$Lib$ZipListSelection$up = function (zipListSelection0) {
	var revUps0 = zipListSelection0.a;
	var middle0 = zipListSelection0.b;
	var orientation = middle0.a;
	var downs0 = zipListSelection0.c;
	if (orientation.$ === 'Upwards') {
		if (!revUps0.b) {
			return zipListSelection0;
		} else {
			var up0 = revUps0.a;
			var revUps1 = revUps0.b;
			var _v2 = middle0;
			var mids0 = _v2.b;
			return _Utils_Tuple3(
				revUps1,
				_Utils_Tuple2(
					$author$project$Lib$ZipListSelection$Upwards,
					A2($mgold$elm_nonempty_list$List$Nonempty$cons, up0, mids0)),
				downs0);
		}
	} else {
		var _v3 = middle0;
		var revMids0 = _v3.b;
		if (!revMids0.b.b) {
			var mid0 = revMids0.a;
			if (!revUps0.b) {
				return zipListSelection0;
			} else {
				var up0 = revUps0.a;
				var revUps1 = revUps0.b;
				return _Utils_Tuple3(
					revUps1,
					_Utils_Tuple2(
						$author$project$Lib$ZipListSelection$Upwards,
						A2(
							$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
							up0,
							_List_fromArray(
								[mid0]))),
					downs0);
			}
		} else {
			var mid0 = revMids0.a;
			var _v6 = revMids0.b;
			var mid1 = _v6.a;
			var revMids2 = _v6.b;
			return _Utils_Tuple3(
				revUps0,
				_Utils_Tuple2(
					$author$project$Lib$ZipListSelection$Downwards,
					A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, mid1, revMids2)),
				A2($elm$core$List$cons, mid0, downs0));
		}
	}
};
var $author$project$RegisterMachine$Ui$Editor$selectionMovement = F2(
	function (direction, model) {
		if (direction.$ === 'Up') {
			return _Utils_update(
				model,
				{
					selectedInstructions: A2($elm$core$Maybe$map, $author$project$Lib$ZipListSelection$up, model.selectedInstructions)
				});
		} else {
			return _Utils_update(
				model,
				{
					selectedInstructions: A2($elm$core$Maybe$map, $author$project$Lib$ZipListSelection$down, model.selectedInstructions)
				});
		}
	});
var $author$project$RegisterMachine$Ui$Editor$InsertingInstruction = {$: 'InsertingInstruction'};
var $author$project$RegisterMachine$Ui$Editor$setModeToInsertInstruction = function (model) {
	return _Utils_update(
		model,
		{instructionMode: $author$project$RegisterMachine$Ui$Editor$InsertingInstruction});
};
var $author$project$Lib$ZipListSelection$fromZipList = function (_v0) {
	var revLeft = _v0.a;
	var x = _v0.b;
	var right0 = _v0.c;
	return _Utils_Tuple3(
		revLeft,
		_Utils_Tuple2(
			$author$project$Lib$ZipListSelection$Upwards,
			$mgold$elm_nonempty_list$List$Nonempty$singleton(x)),
		right0);
};
var $author$project$RegisterMachine$Ui$Editor$setModeToSelectInstructions = function (model) {
	return _Utils_update(
		model,
		{
			instructionMode: $author$project$RegisterMachine$Ui$Editor$SelectingInstructions,
			selectedInstructions: $elm$core$Maybe$Just(
				$author$project$Lib$ZipListSelection$fromZipList(model.instructions))
		});
};
var $author$project$RegisterMachine$Ui$Validation$setNodeToOperationNameNode = function (_v0) {
	var nodeKind = _v0.a;
	var nodeValidity = _v0.b;
	var nodeExpectations = _v0.c;
	var text = _v0.d;
	return $author$project$RegisterMachine$Ui$Validation$validatedNode(
		A4($author$project$RegisterMachine$Ui$Base$Node, nodeKind, nodeValidity, $author$project$RegisterMachine$Ui$Base$operationNameExpectation, text));
};
var $author$project$Lib$ZipList$swapWithLeft = function (zipList) {
	var revLeft0 = zipList.a;
	var x0 = zipList.b;
	var right0 = zipList.c;
	if (!revLeft0.b) {
		return zipList;
	} else {
		var x1 = revLeft0.a;
		var revLeft1 = revLeft0.b;
		return _Utils_Tuple3(
			A2($elm$core$List$cons, x0, revLeft1),
			x1,
			right0);
	}
};
var $author$project$Lib$ZipList$swapWithRight = function (zipList) {
	var revLeft0 = zipList.a;
	var x0 = zipList.b;
	var right0 = zipList.c;
	if (!right0.b) {
		return zipList;
	} else {
		var x1 = right0.a;
		var right1 = right0.b;
		return _Utils_Tuple3(
			revLeft0,
			x1,
			A2($elm$core$List$cons, x0, right1));
	}
};
var $author$project$RegisterMachine$Ui$Editor$swapInstruction = F2(
	function (direction, model) {
		return A2(
			$author$project$RegisterMachine$Ui$Editor$moveInstruction,
			direction,
			_Utils_update(
				model,
				{
					instructions: function () {
						if (direction.$ === 'Up') {
							return $author$project$Lib$ZipList$swapWithLeft(model.instructions);
						} else {
							return $author$project$Lib$ZipList$swapWithRight(model.instructions);
						}
					}()
				}));
	});
var $author$project$RegisterMachine$Ui$Editor$traverseNodes = function (direction) {
	if (direction.$ === 'Left') {
		return $author$project$RegisterMachine$Ui$Editor$updateNodesOfCurrentInstructionWithoutValidation($author$project$Lib$ZipList$left);
	} else {
		return $author$project$RegisterMachine$Ui$Editor$updateNodesOfCurrentInstructionWithoutValidation($author$project$Lib$ZipList$right);
	}
};
var $author$project$RegisterMachine$Ui$Editor$updateCurrentNodeWithoutValidation = function (f) {
	return $author$project$RegisterMachine$Ui$Editor$updateCurrentInstructionWithoutValidation(
		function (instruction) {
			if (instruction.$ === 'Instruction') {
				var instructionKind = instruction.a;
				var nodes = instruction.b;
				var validation = instruction.c;
				return A3(
					$author$project$RegisterMachine$Ui$Base$Instruction,
					instructionKind,
					A2($author$project$Lib$ZipList$updateCurrent, f, nodes),
					validation);
			} else {
				return instruction;
			}
		});
};
var $author$project$Lib$ZipList$updateLast = F2(
	function (f, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		var updateLastInList = function (xs0) {
			if (!xs0.b) {
				return _List_Nil;
			} else {
				if (!xs0.b.b) {
					var x = xs0.a;
					return _List_fromArray(
						[
							f(x)
						]);
				} else {
					var x = xs0.a;
					var xs1 = xs0.b;
					return A2(
						$elm$core$List$cons,
						x,
						updateLastInList(xs1));
				}
			}
		};
		if (!right0.b) {
			return _Utils_Tuple3(
				revLeft0,
				f(x0),
				_List_Nil);
		} else {
			return _Utils_Tuple3(
				revLeft0,
				x0,
				updateLastInList(right0));
		}
	});
var $author$project$RegisterMachine$Ui$Editor$update = function (msg) {
	switch (msg.$) {
		case 'InstructionMovement':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$moveInstruction(direction));
		case 'SwapInstruction':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$swapInstruction(direction));
		case 'InstructionEdit':
			return $author$project$Ui$Control$Context$update($author$project$RegisterMachine$Ui$Editor$setModeToInsertInstruction);
		case 'InstructionInsertion':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				A2(
					$elm$core$Basics$composeR,
					$author$project$RegisterMachine$Ui$Editor$insertFutureInstruction(direction),
					A2(
						$elm$core$Basics$composeR,
						$author$project$RegisterMachine$Ui$Editor$moveInstruction(direction),
						$author$project$RegisterMachine$Ui$Editor$setModeToInsertInstruction)));
		case 'ChangeInstructionTo':
			var instructionKind = msg.a;
			return $author$project$Ui$Control$Context$update(
				A2(
					$elm$core$Basics$composeR,
					$author$project$RegisterMachine$Ui$Editor$changeInstructionWithoutValidationTo(instructionKind),
					$author$project$RegisterMachine$Ui$Editor$validateCurrentInstruction));
		case 'NodeMovement':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$traverseNodes(direction));
		case 'DeleteInstruction':
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return _Utils_update(
						model,
						{
							instructions: $author$project$Lib$ZipList$deleteAndFocusRight(model.instructions)
						});
				});
		case 'ConvertAssignmentToOperation':
			return $author$project$Ui$Control$Context$update(
				A2(
					$elm$core$Basics$composeR,
					$author$project$RegisterMachine$Ui$Editor$updateCurrentInstructionWithoutValidation(
						function (instruction) {
							var newInstruction = function () {
								if ((instruction.$ === 'Instruction') && (instruction.a.$ === 'AssignmentKind')) {
									var _v2 = instruction.a;
									var nodes = instruction.b;
									var validity = instruction.c;
									return A3(
										$author$project$RegisterMachine$Ui$Base$Instruction,
										$author$project$RegisterMachine$Ui$Base$OperationApplicationKind,
										A2(
											$author$project$Lib$ZipList$insertAtEnd,
											$author$project$RegisterMachine$Ui$Base$argNode,
											A2($author$project$Lib$ZipList$updateLast, $author$project$RegisterMachine$Ui$Validation$setNodeToOperationNameNode, nodes)),
										validity);
								} else {
									return instruction;
								}
							}();
							return newInstruction;
						}),
					$author$project$RegisterMachine$Ui$Editor$validateCurrentInstruction));
		case 'DuplicateInstruction':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				A2(
					$elm$core$Basics$composeR,
					$author$project$RegisterMachine$Ui$Editor$duplicateInstruction(direction),
					$author$project$RegisterMachine$Ui$Editor$moveInstruction(direction)));
		case 'JumpToBoundaryInstruction':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$jumpToBoundaryInstruction(direction));
		case 'SetModeTo':
			var instructionMode = msg.a;
			switch (instructionMode.$) {
				case 'TraversingInstructions':
					var nodeMode = instructionMode.a;
					if (nodeMode.$ === 'TraversingNodes') {
						return $author$project$Ui$Control$Context$update($author$project$RegisterMachine$Ui$Editor$setModeToTraversing);
					} else {
						return $author$project$Ui$Control$Context$update($author$project$RegisterMachine$Ui$Editor$setModeToEditing);
					}
				case 'InsertingInstruction':
					return $author$project$Ui$Control$Context$update($author$project$RegisterMachine$Ui$Editor$setModeToInsertInstruction);
				default:
					return $author$project$Ui$Control$Context$update($author$project$RegisterMachine$Ui$Editor$setModeToSelectInstructions);
			}
		case 'NodeEdit':
			var str = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$updateCurrentNodeWithoutValidation(
					function (_v5) {
						var nodeKind = _v5.a;
						var nodeValidation = _v5.b;
						var nodeExpectation = _v5.c;
						return A4($author$project$RegisterMachine$Ui$Base$Node, nodeKind, nodeValidation, nodeExpectation, str);
					}));
		case 'NodeInsertion':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$insertAndEditNodeWithoutValidation(direction));
		case 'DeleteNode':
			return $author$project$Ui$Control$Context$update($author$project$RegisterMachine$Ui$Editor$deleteCurrentNodeWithValidation);
		case 'PushFragment':
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var currentInstruction = $author$project$RegisterMachine$Ui$Editor$getCurrentInstruction(model);
					return A2(
						$author$project$RegisterMachine$Ui$Editor$pushFragment,
						$mgold$elm_nonempty_list$List$Nonempty$singleton(currentInstruction),
						model);
				});
		case 'PasteFragment':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$pasteFragment(direction));
		case 'PasteAndPopFragment':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$pasteAndPopFragment(direction));
		case 'FragmentMovement':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$moveFragment(direction));
		case 'SelectionMovement':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$selectionMovement(direction));
		case 'JumpToBoundaryNode':
			var direction = msg.a;
			return $author$project$Ui$Control$Context$update(
				$author$project$RegisterMachine$Ui$Editor$jumpToBoundaryNode(direction));
		case 'DebugCurrentInstruction':
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var debugConsole = model.debugConsole;
					var currentInstruction = $author$project$RegisterMachine$Ui$Editor$getCurrentInstruction(model);
					var _v6 = A2($elm$core$Debug$log, 'CURRENT-INSTRUCTION', currentInstruction);
					return _Utils_update(
						model,
						{
							debugConsole: _Utils_update(
								debugConsole,
								{
									instructionsRev: A2($elm$core$List$cons, currentInstruction, debugConsole.instructionsRev)
								})
						});
				});
		default:
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var debugConsole = model.debugConsole;
					return _Utils_update(
						model,
						{
							debugConsole: _Utils_update(
								debugConsole,
								{instructionsRev: _List_Nil})
						});
				});
	}
};
var $author$project$Ui$Control$Context$updateWithCommand = function (f) {
	return F3(
		function (_v0, liftMsg, state) {
			var _v1 = f(state.model);
			var newModel = _v1.a;
			var cmd = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					state,
					{model: newModel}),
				A2($elm$core$Platform$Cmd$map, liftMsg, cmd));
		});
};
var $author$project$Ui$Tab$RegisterMachine$update = function (msg) {
	switch (msg.$) {
		case 'Reset':
			return $author$project$Ui$Control$Context$update($author$project$Ui$Tab$RegisterMachine$resetRuntime);
		case 'Start':
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return _Utils_update(
						model,
						{
							maybeRuntime: A2(
								$elm$core$Maybe$map,
								$elm$core$Result$andThen($author$project$RegisterMachine$Machine$start),
								model.maybeRuntime)
						});
				});
		case 'RunOneStep':
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return _Utils_update(
						model,
						{
							maybeRuntime: A2(
								$elm$core$Maybe$map,
								function (resultMachine) {
									return A2(
										$elm$core$Result$map,
										function ($) {
											return $.machine;
										},
										A2($elm$core$Result$andThen, $author$project$RegisterMachine$Machine$runOneStep, resultMachine));
								},
								model.maybeRuntime)
						});
				});
		case 'MemoryAddressClicked':
			var p = msg.a;
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var newMemoryView = A2($author$project$Ui$Tab$RegisterMachine$centerAt, p, model.memoryView);
					return _Utils_update(
						model,
						{currentlyHighlightedCell: p, memoryView: newMemoryView});
				});
		case 'ShiftMemoryViewBy':
			var delta = msg.a;
			return $author$project$Ui$Control$Context$update(
				function (model) {
					var newMemoryView = A2($author$project$Ui$Tab$RegisterMachine$shiftBy, delta, model.memoryView);
					return _Utils_update(
						model,
						{memoryView: newMemoryView});
				});
		case 'ControllerPicked':
			var maybeControllerExample = msg.a;
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return $author$project$Ui$Tab$RegisterMachine$reset(
						_Utils_update(
							model,
							{selectedController: maybeControllerExample}));
				});
		case 'ControllersDropdownMsg':
			var dropdownMsg = msg.a;
			return $author$project$Ui$Control$Context$updateWithCommand(
				function (model) {
					var _v1 = A4($PaackEng$elm_ui_dropdown$Dropdown$update, $author$project$Ui$Tab$RegisterMachine$dropdownConfig, dropdownMsg, model, model.controllerDropdownModel);
					var newDropdownModel = _v1.a;
					var cmd = _v1.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{controllerDropdownModel: newDropdownModel}),
						cmd);
				});
		default:
			var editorMsg = msg.a;
			return A4(
				$author$project$Ui$Control$Context$embed,
				$author$project$Ui$Tab$RegisterMachine$EditorMsg,
				function ($) {
					return $.editorModel;
				},
				F2(
					function (model, editorModel) {
						return _Utils_update(
							model,
							{editorModel: editorModel});
					}),
				$author$project$RegisterMachine$Ui$Editor$update(editorMsg));
	}
};
var $author$project$Ui$Main$update = function (msg) {
	switch (msg.$) {
		case 'ChangeTab':
			var tab = msg.a;
			return $author$project$Ui$Control$Context$update(
				function (model) {
					return _Utils_update(
						model,
						{tab: tab});
				});
		case 'HelpMsg':
			var helpMsg = msg.a;
			return A4(
				$author$project$Ui$Control$Context$embed,
				$author$project$Ui$Main$HelpMsg,
				function ($) {
					return $.helpModel;
				},
				F2(
					function (model, helpModel) {
						return _Utils_update(
							model,
							{helpModel: helpModel});
					}),
				$author$project$Ui$Tab$Help$update(helpMsg));
		case 'ModuleMsg':
			var moduleMsg = msg.a;
			return A4(
				$author$project$Ui$Control$Context$embed,
				$author$project$Ui$Main$ModuleMsg,
				function ($) {
					return $.moduleModel;
				},
				F2(
					function (model, moduleModel) {
						return _Utils_update(
							model,
							{moduleModel: moduleModel});
					}),
				$author$project$Ui$Tab$Module$update(moduleMsg));
		case 'ProgramMsg':
			var programMsg = msg.a;
			return A4(
				$author$project$Ui$Control$Context$embed,
				$author$project$Ui$Main$ProgramMsg,
				function ($) {
					return $.programModel;
				},
				F2(
					function (model, programModel) {
						return _Utils_update(
							model,
							{programModel: programModel});
					}),
				$author$project$Ui$Tab$Program$update(programMsg));
		default:
			var registerMachineMsg = msg.a;
			return A4(
				$author$project$Ui$Control$Context$embed,
				$author$project$Ui$Main$RegisterMachineMsg,
				function ($) {
					return $.registerMachineModel;
				},
				F2(
					function (model, registerMachineModel) {
						return _Utils_update(
							model,
							{registerMachineModel: registerMachineModel});
					}),
				$author$project$Ui$Tab$RegisterMachine$update(registerMachineMsg));
	}
};
var $author$project$Main$update = F2(
	function (msg, model) {
		var lambdaUiMsg = msg.a;
		var _v1 = A4($author$project$Ui$Main$update, lambdaUiMsg, $author$project$Ui$Control$Context$initConfig, $author$project$Main$LambdaUiMsg, model.lambdaUiState);
		var lambdaUiState = _v1.a;
		var cmd = _v1.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{lambdaUiState: lambdaUiState}),
			cmd);
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 'Styled':
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.html, add, context));
							}),
						styles: styled.styles
					});
			case 'Unstyled':
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 'Text':
				var str = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return $mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var $mdgriffith$elm_ui$Element$map = $mdgriffith$elm_ui$Internal$Model$map;
var $author$project$Ui$Main$ChangeTab = function (a) {
	return {$: 'ChangeTab', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 'Button'};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 'NoAttribute'};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 'StyleClass') && (attr.b.$ === 'PseudoSelector')) && (attr.b.a.$ === 'Focus')) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 'Nothing') {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorPointer);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.onPress;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.seButton + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.noTextSelection)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 'Nothing') {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Ui$Style$Button$blue = A3($mdgriffith$elm_ui$Element$rgb255, 142, 207, 245);
var $author$project$Ui$Style$Button$buttonStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Background$color($author$project$Ui$Style$Button$blue),
		A2($mdgriffith$elm_ui$Element$paddingXY, 9, 4),
		$mdgriffith$elm_ui$Element$Border$rounded(2)
	]);
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$Ui$Main$tabToString = function (tab) {
	switch (tab.$) {
		case 'ProgramTab':
			return 'Program';
		case 'ModuleTab':
			return 'Module';
		case 'HelpTab':
			return 'Help';
		default:
			return 'Register Machine';
	}
};
var $author$project$Ui$Main$HelpTab = {$: 'HelpTab'};
var $author$project$Ui$Main$ModuleTab = {$: 'ModuleTab'};
var $author$project$Ui$Main$ProgramTab = {$: 'ProgramTab'};
var $author$project$Ui$Main$tabs = _List_fromArray(
	[$author$project$Ui$Main$ProgramTab, $author$project$Ui$Main$ModuleTab, $author$project$Ui$Main$HelpTab, $author$project$Ui$Main$RegisterMachineTab]);
var $author$project$Ui$Tab$Help$view = F2(
	function (config, model) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('example: `\\{ p . match-pair $p { pair(x y) . pair($y $x) } }`'),
					$mdgriffith$elm_ui$Element$text('which in more standard lambda notation would be something like: `\\p. case p of (x, y) -> (y, x)`'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('SYNTAX'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('Constants'),
					$mdgriffith$elm_ui$Element$text('  true, false'),
					$mdgriffith$elm_ui$Element$text('  zero'),
					$mdgriffith$elm_ui$Element$text('  00, 01, 02, 03, ... // nat literals have to start with 0 digit (`zero` is the same as `00`)'),
					$mdgriffith$elm_ui$Element$text('  empty // empty list'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('Variable Use'),
					$mdgriffith$elm_ui$Element$text('  $foo // when using a variable, you have to prepend a dollar sign to it'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('Simple Operators'),
					$mdgriffith$elm_ui$Element$text('  pair($e1 $e2)'),
					$mdgriffith$elm_ui$Element$text('  [$f $x] // function application'),
					$mdgriffith$elm_ui$Element$text('  [$f $x $y]'),
					$mdgriffith$elm_ui$Element$text('  left($e1)'),
					$mdgriffith$elm_ui$Element$text('  right($e2)'),
					$mdgriffith$elm_ui$Element$text('  succ($n)      // natural numbers successor function'),
					$mdgriffith$elm_ui$Element$text('  cons($x $xs) // consing of an element to a list'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('Bindings Operators'),
					$mdgriffith$elm_ui$Element$text('  \\{ x . $body }'),
					$mdgriffith$elm_ui$Element$text('  \\{ x y . $body }'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('  match-pair $pair-exp { pair(x y) . $body }'),
					$mdgriffith$elm_ui$Element$text('  match-bool $test-exp { true . $e1 } { false . $e2 } // if expression'),
					$mdgriffith$elm_ui$Element$text('  match-sum $sum-exp { left(x) . $e1 } { right(y) . $e2 }'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('  fold-nat $n { zero . $init-state } { succ(prev-state) . $next-state } // for-loop over natural numbers'),
					$mdgriffith$elm_ui$Element$text('  fold-list $xs { empty . $init-state } { cons(x prev-state) . $next-state } // for-loop over lists'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('  let-be $exp { x . $body }) // standard syntax `let x = exp in body`'),
					$mdgriffith$elm_ui$Element$text('  let x = $exp; $body // syntactic sugar for `let-be`'),
					$mdgriffith$elm_ui$Element$text(''),
					$mdgriffith$elm_ui$Element$text('  delay {. $body } // freezes computation'),
					$mdgriffith$elm_ui$Element$text('  force($thunk) // forces computation')
				]));
	});
var $author$project$Ui$Tab$Module$ModuleInputChanged = function (a) {
	return {$: 'ModuleInputChanged', a: a};
};
var $author$project$Ui$Tab$Module$ModuleRunButtonClicked = {$: 'ModuleRunButtonClicked'};
var $author$project$Ui$Tab$Module$ReplInputChanged = function (a) {
	return {$: 'ReplInputChanged', a: a};
};
var $author$project$Ui$Tab$Module$ReplRunButtonClicked = {$: 'ReplRunButtonClicked'};
var $mdgriffith$elm_ui$Element$Input$HiddenLabel = function (a) {
	return {$: 'HiddenLabel', a: a};
};
var $mdgriffith$elm_ui$Element$Input$labelHidden = $mdgriffith$elm_ui$Element$Input$HiddenLabel;
var $author$project$Calculus$Parser$allModuleLetBindingKeywords = _List_fromArray(
	[$author$project$Calculus$Parser$LetTerm, $author$project$Calculus$Parser$LetType, $author$project$Calculus$Parser$LetModule, $author$project$Calculus$Parser$LetFunctor]);
var $author$project$Calculus$Parser$consumedSuccessfullyToString = function (_v0) {
	var consumedSuccessfully = _v0.consumedSuccessfully;
	return $elm$core$String$concat(
		_List_fromArray(
			['consumed successfully: ', consumedSuccessfully]));
};
var $author$project$Calculus$Parser$failedAtCharToStringHelper = function (c) {
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'failed at char \'',
				_Utils_eq(
				c,
				_Utils_chr('\n')) ? '<new-line>' : (_Utils_eq(
				c,
				_Utils_chr(' ')) ? '<space>' : (_Utils_eq(
				c,
				_Utils_chr('\t')) ? '<tab>' : $elm$core$String$fromChar(c))),
				'`'
			]));
};
var $author$project$Calculus$Parser$failedAtMaybeCharToString = function (_v0) {
	var failedAtChar = _v0.failedAtChar;
	if (failedAtChar.$ === 'Just') {
		var c = failedAtChar.a;
		return $author$project$Calculus$Parser$failedAtCharToStringHelper(c);
	} else {
		return 'failed at <empty-input>';
	}
};
var $author$project$Calculus$Parser$expectedBindingTermToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedOpenBraces':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected open braces (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedDot':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected dot (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedClosingBraces':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected closing braces (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedDefEquals':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected def. equals symbol in let binding (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		default:
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected semicolon after let binding (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
	}
};
var $author$project$Calculus$Parser$failedAtCharToString = function (_v0) {
	var failedAtChar = _v0.failedAtChar;
	return $author$project$Calculus$Parser$failedAtCharToStringHelper(failedAtChar);
};
var $author$project$Calculus$Parser$expectedIdentifierIntroductionToString = F2(
	function (identifierKind, msg) {
		if (msg.$ === 'ExpectedIdentifierCharacters') {
			var expIden = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected to see ',
						identifierKind,
						' identifier character but ',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(expIden)
					]));
		} else {
			var failedAtCharError = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected ',
						identifierKind,
						' identifier to start with non-digit (',
						$author$project$Calculus$Parser$failedAtCharToString(failedAtCharError),
						')'
					]));
		}
	});
var $author$project$Calculus$Parser$expectedTypeToString = function (expectedType) {
	switch (expectedType.$) {
		case 'ExpectedTypeIdentifier':
			var expectedDecimalNaturalNumber = expectedType.a;
			return _Debug_todo(
				'Calculus.Parser',
				{
					start: {line: 1118, column: 13},
					end: {line: 1118, column: 23}
				})('');
		case 'ExpectedTypeVarUseToStartWithQuote':
			var expectedString = expectedType.a;
			return _Debug_todo(
				'Calculus.Parser',
				{
					start: {line: 1121, column: 13},
					end: {line: 1121, column: 23}
				})('');
		case 'ExpectedTypeOperator':
			var opKeyword = expectedType.a;
			return _Debug_todo(
				'Calculus.Parser',
				{
					start: {line: 1124, column: 13},
					end: {line: 1124, column: 23}
				})('');
		default:
			var expectedParens = expectedType.a;
			return _Debug_todo(
				'Calculus.Parser',
				{
					start: {line: 1127, column: 13},
					end: {line: 1127, column: 23}
				})('');
	}
};
var $author$project$Calculus$Parser$expectedInterfaceAssumptionToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedInterfaceAssumptionKeyword':
			var opKeyword = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected interface-assumption keyword (',
						$author$project$Calculus$Parser$consumedSuccessfullyToString(opKeyword),
						', ',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(opKeyword),
						')'
					]));
		case 'ExpectedGapAfterInterfaceAssumptionKeyword':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Failed to see a gap following it (',
						$author$project$Calculus$Parser$failedAtCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedTypingSymbolInInterfaceAssumption':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected typing symbol `:` after the identifier (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedTermIdentifierInInterfaceAssumption':
			var expectedIdentifierIntroduction = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'term', expectedIdentifierIntroduction);
		case 'ExpectedTypeInInterfaceAssumption':
			var expectedType = msg.a;
			return $author$project$Calculus$Parser$expectedTypeToString(expectedType);
		case 'ExpectedModuleIdentifierInInterfaceAssumption':
			var expectedIdentifierIntroduction = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'module', expectedIdentifierIntroduction);
		default:
			var expectedInterface = msg.a;
			return $author$project$Calculus$Parser$expectedInterfaceToString(expectedInterface);
	}
};
var $author$project$Calculus$Parser$expectedInterfaceToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedInterfaceKeyword':
			var opKeyword = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected interface keyword (',
						$author$project$Calculus$Parser$consumedSuccessfullyToString(opKeyword),
						', ',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(opKeyword),
						')'
					]));
		case 'ExpectedGapAfterInterfaceKeyword':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Succesfully parsed interface keyword `interface`, but failed to see a gap following it (',
						$author$project$Calculus$Parser$failedAtCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedInterfaceOpenBraces':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected open brace `{` (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedInterfaceAssumption':
			var expectedInterfaceAssumption = msg.a;
			return $author$project$Calculus$Parser$expectedInterfaceAssumptionToString(expectedInterfaceAssumption);
		case 'ExpectedSemicolonAfterInterfaceAssumption':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected semicolon after let binding (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		default:
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected closing brace `}` (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
	}
};
var $author$project$Calculus$Parser$operatorKeywordToString = function (op) {
	switch (op.$) {
		case 'VarUse':
			return '$';
		case 'ConstTrue':
			return 'true';
		case 'ConstFalse':
			return 'false';
		case 'MatchBool':
			return 'match-bool';
		case 'Pair':
			return 'pair';
		case 'MatchPair':
			return 'match-pair';
		case 'Left':
			return 'left';
		case 'Right':
			return 'right';
		case 'MatchSum':
			return 'match-sum';
		case 'Application':
			return '[';
		case 'Abstraction':
			return '\\';
		case 'ConstZero':
			return 'zero';
		case 'NatLiteral':
			return '0nat-literal';
		case 'Succ':
			return 'succ';
		case 'FoldNat':
			return 'fold-nat';
		case 'ConstEmpty':
			return 'empty';
		case 'Cons':
			return 'cons';
		case 'FoldList':
			return 'fold-list';
		case 'LetBe':
			return 'let-be';
		case 'Let':
			return 'let';
		case 'Delay':
			return 'delay';
		case 'Force':
			return 'force';
		default:
			return '@';
	}
};
var $author$project$Calculus$Parser$expectedOperatorKeywordToString = function (msg) {
	if (msg.$ === 'ExpectedOperatorKeyword') {
		var opKeyword = msg.a;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'Expected operator keyword (',
					$author$project$Calculus$Parser$consumedSuccessfullyToString(opKeyword),
					', ',
					$author$project$Calculus$Parser$failedAtMaybeCharToString(opKeyword),
					')'
				]));
	} else {
		var gapAfter = msg.a;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'Succesfully parsed operator keyword `',
					$author$project$Calculus$Parser$operatorKeywordToString(gapAfter.operatorKeyword),
					'`, but failed to see a gap following it (',
					$author$project$Calculus$Parser$failedAtCharToString(
					{failedAtChar: gapAfter.failedAtChar}),
					')'
				]));
	}
};
var $author$project$Calculus$Parser$expectedParensToString = function (msg) {
	if (msg.$ === 'ExpectedOpenParens') {
		var msg0 = msg.a;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'Expected open parentheses (',
					$author$project$Calculus$Parser$failedAtMaybeCharToString(msg0),
					')'
				]));
	} else {
		var msg0 = msg.a;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'Expected closing parentheses (',
					$author$project$Calculus$Parser$failedAtMaybeCharToString(msg0),
					')'
				]));
	}
};
var $author$project$Calculus$Parser$expectedPatternToString = function (msg) {
	if (msg.$ === 'ExpectedPatternKeyword') {
		var msg0 = msg.a;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'Expected the pattern keyword `',
					$author$project$Calculus$Parser$operatorKeywordToString(msg0.patternKeyword),
					'` (',
					$author$project$Calculus$Parser$consumedSuccessfullyToString(msg0),
					', ',
					$author$project$Calculus$Parser$failedAtMaybeCharToString(msg0),
					')'
				]));
	} else {
		var msg0 = msg.a;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'Expected a gap after the pattern keyword `',
					$author$project$Calculus$Parser$operatorKeywordToString(msg0.patternKeyword),
					'` (',
					$author$project$Calculus$Parser$failedAtMaybeCharToString(
					{
						failedAtChar: $elm$core$Maybe$Just(msg0.failedAtChar)
					}),
					')'
				]));
	}
};
var $author$project$Calculus$Parser$functorOperatorKeywordToString = function (opKeyword) {
	if (opKeyword.$ === 'FunctorVarUse') {
		return '$';
	} else {
		return 'functor';
	}
};
var $author$project$Calculus$Parser$moduleLetBindingKeywordToString = function (keyword0) {
	switch (keyword0.$) {
		case 'LetTerm':
			return 'let-term';
		case 'LetType':
			return 'let-type';
		case 'LetModule':
			return 'let-module';
		default:
			return 'let-functor';
	}
};
var $author$project$Calculus$Parser$moduleOperatorKeywordToString = function (keyword0) {
	switch (keyword0.$) {
		case 'ModuleVarUse':
			return '$';
		case 'ModuleLiteralTerm':
			return 'module';
		default:
			return '[';
	}
};
var $author$project$Calculus$Parser$expectedFunctorLiteralToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedFunctorLiteralOpenBraces':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected open brace `{` (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedFunctorIdentifierInFunctorParameter':
			var expectedIdentifierIntroduction = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'functor', expectedIdentifierIntroduction);
		case 'ExpectedTypingSymbolInFunctorParameter':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected typing symbol `:` between functor variable and its interface (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedInterfaceInFunctorParameter':
			var expectedInterface = msg.a;
			return $author$project$Calculus$Parser$expectedInterfaceToString(expectedInterface);
		case 'ExpectedDotAfterFunctorParameters':
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected a dot `.` after functor paramters (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
		case 'ExpectedModuleTermInFunctorBody':
			var expectedModuleTerm = msg.a;
			return $author$project$Calculus$Parser$expectedModuleTermToString(expectedModuleTerm);
		default:
			var failedAtChar = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected closing brace `}` (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtChar),
						')'
					]));
	}
};
var $author$project$Calculus$Parser$expectedFunctorTermToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedFunctorOperator':
			var opKeyword = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected functor operator keyword (',
						$author$project$Calculus$Parser$consumedSuccessfullyToString(opKeyword),
						', ',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(opKeyword),
						')'
					]));
		case 'ExpectedGapAfterFunctorOperator':
			var gapAfter = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Succesfully parsed functor operator keyword `',
						$author$project$Calculus$Parser$functorOperatorKeywordToString(gapAfter.operatorKeyword),
						'`, but failed to see a gap following it (',
						$author$project$Calculus$Parser$failedAtCharToString(
						{failedAtChar: gapAfter.failedAtChar}),
						')'
					]));
		case 'ExpectedFunctorIdentifier':
			var expectedIdentifierIntroduction = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'functor', expectedIdentifierIntroduction);
		default:
			var expectedFunctorLiteral = msg.a;
			return $author$project$Calculus$Parser$expectedFunctorLiteralToString(expectedFunctorLiteral);
	}
};
var $author$project$Calculus$Parser$expectedModuleLetBindingToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedModuleLetBindingKeyword':
			var err = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected module let binding keyword ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(such as ',
								A2(
								$elm$core$String$join,
								', ',
								A2(
									$elm$core$List$map,
									function (keyword0) {
										return $elm$core$String$concat(
											_List_fromArray(
												[
													'`',
													$author$project$Calculus$Parser$moduleLetBindingKeywordToString(keyword0),
													'`'
												]));
									},
									$author$project$Calculus$Parser$allModuleLetBindingKeywords)),
								')'
							])),
						' ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtMaybeCharToString(err),
								')'
							]))
					]));
		case 'ExpectedGapAfterModuleLetBindingKeyword':
			var failedAtCharError = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected a gap after the let-binding keyword ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtCharToString(failedAtCharError),
								')'
							]))
					]));
		case 'ExpectedEqualsInModuleLetBinding':
			var err = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected equals `=` symbol ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtMaybeCharToString(err),
								')'
							]))
					]));
		case 'ExpectedTermIdentifierInModuleLetBinding':
			var expectedIdentifierIntroduction = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'term', expectedIdentifierIntroduction);
		case 'ExpectedTermInModuleLetBinding':
			var expectedTerm = msg.a;
			return $author$project$Calculus$Parser$expectedTermToString(expectedTerm);
		case 'ExpectedModuleIdentifierInModuleLetBinding':
			var expectedIdentifierIntroduction = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'module', expectedIdentifierIntroduction);
		default:
			var expectedModuleTerm = msg.a;
			return $author$project$Calculus$Parser$expectedModuleTermToString(expectedModuleTerm);
	}
};
var $author$project$Calculus$Parser$expectedModuleTermToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedModuleOperator':
			var err = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected module operator keyword (',
						$author$project$Calculus$Parser$consumedSuccessfullyToString(err),
						', ',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(err),
						')'
					]));
		case 'ExpectedGapAfterModuleOperator':
			var err = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Succesfully parsed module operator keyword `',
						$author$project$Calculus$Parser$moduleOperatorKeywordToString(err.operatorKeyword),
						'`, but failed to see a gap following it (',
						$author$project$Calculus$Parser$failedAtCharToString(err),
						')'
					]));
		case 'ExpectedModuleIdentifier':
			var err = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'module', err);
		case 'ExpectedGapAfterModuleKeyword':
			var failedAtCharError = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected a gap after the `module` keyword ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtCharToString(failedAtCharError),
								')'
							]))
					]));
		case 'ExpectedModuleOpenBraces':
			var failedAtCharError = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected an open brace `{` after the `module` keyword ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtCharError),
								')'
							]))
					]));
		case 'ExpectedModuleLetBinding':
			var expectedModuleLetBinding = msg.a;
			return $author$project$Calculus$Parser$expectedModuleLetBindingToString(expectedModuleLetBinding);
		case 'ExpectedSemicolonAfterModuleLetBinding':
			var failedAtCharError = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected a semicolon `;` to separate the module let-bindings ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtCharError),
								')'
							]))
					]));
		case 'ExpectedModuleClosingBraces':
			var failedAtCharError = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected a closing brace `}` to end the module expression ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtCharError),
								')'
							]))
					]));
		case 'ExpectedFunctorTermInApplication':
			var expectedFunctorTerm = msg.a;
			return $author$project$Calculus$Parser$expectedFunctorTermToString(expectedFunctorTerm);
		default:
			var failedAtCharError = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected a closing bracket `]` to end the functor application ',
						$elm$core$String$concat(
						_List_fromArray(
							[
								'(',
								$author$project$Calculus$Parser$failedAtMaybeCharToString(failedAtCharError),
								')'
							]))
					]));
	}
};
var $author$project$Calculus$Parser$expectedTermToString = function (msg) {
	switch (msg.$) {
		case 'ExpectedOperator':
			var expectedOperatorKeyword = msg.a;
			return $author$project$Calculus$Parser$expectedOperatorKeywordToString(expectedOperatorKeyword);
		case 'ExpectedTermIdentifier':
			var expectedIdentifierIntroduction = msg.a;
			return A2($author$project$Calculus$Parser$expectedIdentifierIntroductionToString, 'term', expectedIdentifierIntroduction);
		case 'ExpectedParens':
			var expectedParens = msg.a;
			return $author$project$Calculus$Parser$expectedParensToString(expectedParens);
		case 'ExpectedBindingTerm':
			var expectedBindingTerm = msg.a;
			return $author$project$Calculus$Parser$expectedBindingTermToString(expectedBindingTerm);
		case 'ExpectedPattern':
			var expectedPattern = msg.a;
			return $author$project$Calculus$Parser$expectedPatternToString(expectedPattern);
		case 'ExpectedAtleastTwoArgumentsToApplication':
			var got = msg.a.got;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected atleast two arguments to application, instead got ',
						$elm$core$String$fromInt(got)
					]));
		case 'ExpectedAtleastOneParameterToAbstraction':
			var got = msg.a.got;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected atleast one parameter to abstraction, instead got ',
						$elm$core$String$fromInt(got)
					]));
		case 'ExpectedNatConstant':
			var msg0 = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected natural number literal (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(msg0),
						')'
					]));
		case 'ExpectedClosingOfApplication':
			var msg0 = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected closing of application (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(msg0),
						')'
					]));
		case 'ExpectedModuleTermInModuleAccess':
			var err = msg.a;
			return $author$project$Calculus$Parser$expectedModuleTermToString(err);
		default:
			var msg0 = msg.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Expected module access symbol `.` (',
						$author$project$Calculus$Parser$failedAtMaybeCharToString(msg0),
						')'
					]));
	}
};
var $author$project$Lib$Parser$Error$getPosition = function (error) {
	return error.position;
};
var $author$project$Calculus$Parser$moduleTermErrorToString = function (error) {
	var position = $author$project$Lib$Parser$Error$getPosition(error);
	var msg = $author$project$Lib$Parser$Error$getMsg(error);
	return $elm$core$String$concat(
		_List_fromArray(
			[
				$author$project$Calculus$Parser$expectedModuleTermToString(msg),
				' at (line=',
				$elm$core$String$fromInt(position.line),
				', col=',
				$elm$core$String$fromInt(position.col),
				')'
			]));
};
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 'TextArea'};
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 'LivePolite'};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 'HiddenLabel') {
			var labelText = label.a;
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asColumn,
				$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position.$) {
				case 'Above':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 'Below':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 'OnRight':
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
	$elm$core$Basics$composeL,
	$mdgriffith$elm_ui$Internal$Model$Attr,
	$elm$html$Html$Attributes$attribute('autocomplete'));
var $mdgriffith$elm_ui$Internal$Model$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 'Nearby', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 'Empty') {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Behind, element);
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 'MoveY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 'TransformComponent', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 'Nothing') {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 'Nothing') {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _v0.a;
		return $mdgriffith$elm_ui$Element$moveUp(
			$elm$core$Basics$floor(vSpace / 2));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.clip);
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		$mdgriffith$elm_ui$Element$Border$rounded(3),
		$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
		$mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$spacing(5),
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
	]);
var $mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 'Height') {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 'Label', a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 'HiddenLabel') {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Internal$Model$InFront = {$: 'InFront'};
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$InFront, element);
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return true;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 'HiddenLabel') {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (label.$ === 'Label') {
		var loc = label.a;
		switch (loc.$) {
			case 'OnRight':
				return false;
			case 'OnLeft':
				return false;
			case 'Above':
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {bottom: -box.bottom, left: -box.left, right: -box.right, top: -box.top};
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 'Fill':
				return true;
			case 'Content':
				return false;
			case 'Px':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 'Content':
				return false;
			case 'Px':
				return true;
			case 'Fill':
				return false;
			case 'Min':
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 'Nearby':
				return _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					});
			case 'Width':
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						input: A2($elm$core$List$cons, attr, els.input),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : (stacked ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					}) : _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					}));
			case 'Height':
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent),
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					}) : _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					})));
			case 'AlignX':
				return _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					});
			case 'AlignY':
				return _Utils_update(
					els,
					{
						fullParent: A2($elm$core$List$cons, attr, els.fullParent)
					});
			case 'StyleClass':
				switch (attr.b.$) {
					case 'SpacingStyle':
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent),
								input: A2($elm$core$List$cons, attr, els.input),
								parent: A2($elm$core$List$cons, attr, els.parent),
								wrapper: A2($elm$core$List$cons, attr, els.wrapper)
							});
					case 'PaddingStyle':
						var cls = attr.a;
						var _v2 = attr.b;
						var pad = _v2.a;
						var t = _v2.b;
						var r = _v2.c;
						var b = _v2.d;
						var l = _v2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									cover: A2($elm$core$List$cons, attr, els.cover),
									parent: A2($elm$core$List$cons, attr, els.parent)
								});
						} else {
							var newTop = t - A2($elm$core$Basics$min, t, b);
							var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newBottom = b - A2($elm$core$Basics$min, t, b);
							var reducedVerticalPadding = A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, r, newBottom, l),
									newTop,
									r,
									newBottom,
									l));
							return _Utils_update(
								els,
								{
									cover: A2($elm$core$List$cons, attr, els.cover),
									input: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.input)),
									parent: A2($elm$core$List$cons, reducedVerticalPadding, els.parent)
								});
						}
					case 'BorderWidth':
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								cover: A2($elm$core$List$cons, attr, els.cover),
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
					case 'Transform':
						return _Utils_update(
							els,
							{
								cover: A2($elm$core$List$cons, attr, els.cover),
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
					case 'FontSize':
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent)
							});
					case 'FontFamily':
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								fullParent: A2($elm$core$List$cons, attr, els.fullParent)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								parent: A2($elm$core$List$cons, attr, els.parent)
							});
				}
			case 'NoAttribute':
				return els;
			case 'Attr':
				var a = attr.a;
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
			case 'Describe':
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
			case 'Class':
				return _Utils_update(
					els,
					{
						parent: A2($elm$core$List$cons, attr, els.parent)
					});
			default:
				return _Utils_update(
					els,
					{
						input: A2($elm$core$List$cons, attr, els.input)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				cover: $elm$core$List$reverse(redist.cover),
				fullParent: $elm$core$List$reverse(redist.fullParent),
				input: $elm$core$List$reverse(redist.input),
				parent: $elm$core$List$reverse(redist.parent),
				wrapper: $elm$core$List$reverse(redist.wrapper)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{cover: _List_Nil, fullParent: _List_Nil, input: _List_Nil, parent: _List_Nil, wrapper: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 'Transparency', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_v0, forPlaceholder, on) {
		var placeholderAttrs = _v0.a;
		var placeholderEl = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents)),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$Border$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY);
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.type_, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.label),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'SpacingStyle')) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.type_;
			if (_v7.$ === 'TextInputNode') {
				var inputType = _v7.a;
				return false;
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						$mdgriffith$elm_ui$Element$Input$isConstrained,
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 'StyleClass') && (attr.b.$ === 'PaddingStyle')) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						bottom: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						left: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						right: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						top: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(t - 3))
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			$elm$core$Maybe$withDefault,
			{bottom: 0, left: 0, right: 0, top: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.type_;
				if (_v3.$ === 'TextInputNode') {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.type_;
					if (_v4.$ === 'TextInputNode') {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputText)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
								$mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								$mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									$elm$html$Html$Attributes$style,
									'margin',
									$mdgriffith$elm_ui$Element$Input$renderBox(
										$mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Input$value(textOptions.text),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.onChange)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.label),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.spellchecked),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.autofill))
						]),
					redistributed.input)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.type_;
			if (_v0.$ === 'TextArea') {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper)
								])),
						redistributed.parent),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asParagraph,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
												redistributed.wrapper)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.text === '') {
											var _v1 = textOptions.placeholder;
											if (_v1.$ === 'Nothing') {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.text === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.text + '\u00A0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _v0.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.parent,
										function () {
										var _v2 = textOptions.placeholder;
										if (_v2.$ === 'Nothing') {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.cover, textOptions.text === ''))
												]);
										}
									}()
									])))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.fullParent))),
			textOptions.label,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$multiline = F2(
	function (attrs, multi) {
		return A3(
			$mdgriffith$elm_ui$Element$Input$textHelper,
			{autofill: $elm$core$Maybe$Nothing, spellchecked: multi.spellcheck, type_: $mdgriffith$elm_ui$Element$Input$TextArea},
			attrs,
			{label: multi.label, onChange: multi.onChange, placeholder: multi.placeholder, text: multi.text});
	});
var $author$project$Calculus$Show$showEvaluationError = function (error) {
	switch (error.$) {
		case 'UndefinedVar':
			var termVarName = error.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['Use of undefined variable $', termVarName]));
		case 'UndefinedModule':
			var moduleVarName = error.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['Use of undefined module variable $', moduleVarName]));
		case 'UndefinedFunctor':
			var functorName = error.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['Use of undefined functor variable $', functorName]));
		case 'ExpectedPair':
			return 'Expected Pair';
		case 'ExpectedFunction':
			return 'Expected Function';
		case 'ExpectedLeftRight':
			return 'Expected Left/Right';
		case 'ExpectedBoolean':
			return 'Expected Boolean';
		case 'ExpectedNat':
			return 'Expected Number';
		case 'ExpectedList':
			return 'Expected List';
		case 'FailedToForceThunk':
			var thunkId = error.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Failed to force thunk with id := ',
						$elm$core$String$fromInt(thunkId)
					]));
		case 'ExpectedThunkClosure':
			return 'Expected Thunk Closure';
		case 'UnknownModuleField':
			var field = error.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['Unknown module-field access := ', field]));
		default:
			return 'Functor Application Error: Number of parameters is not equal to the number of arguments';
	}
};
var $author$project$Calculus$Show$showEvaluationErrors = function (errors) {
	return A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $author$project$Calculus$Show$showEvaluationError, errors));
};
var $author$project$Calculus$Show$natValToInt = function (natVal) {
	if (natVal.$ === 'ConstZero') {
		return 0;
	} else {
		var val1 = natVal.a;
		return 1 + $author$project$Calculus$Show$natValToInt(val1);
	}
};
var $author$project$Calculus$Show$showNatValue = function (natVal) {
	return $elm$core$String$fromInt(
		$author$project$Calculus$Show$natValToInt(natVal));
};
var $author$project$Calculus$Show$showType = function (type0) {
	switch (type0.$) {
		case 'TypeVarUse':
			var n = type0.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['$', n]));
		case 'Product':
			var type1 = type0.a;
			var type2 = type0.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(',
						$author$project$Calculus$Show$showType(type1),
						' , ',
						$author$project$Calculus$Show$showType(type2),
						')'
					]));
		case 'Sum':
			var type1 = type0.a;
			var type2 = type0.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'[',
						$author$project$Calculus$Show$showType(type1),
						' + ',
						$author$project$Calculus$Show$showType(type2),
						']'
					]));
		case 'Arrow':
			var type1 = type0.a;
			var type2 = type0.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(',
						$author$project$Calculus$Show$showType(type1),
						' -> ',
						$author$project$Calculus$Show$showType(type2),
						')'
					]));
		case 'ConstBool':
			return 'Bool';
		case 'ConstNat':
			return 'Nat';
		case 'List':
			var type1 = type0.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'List(',
						$author$project$Calculus$Show$showType(type1),
						')'
					]));
		case 'Frozen':
			var type1 = type0.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Frozen(',
						$author$project$Calculus$Show$showType(type1),
						')'
					]));
		default:
			var typeVar = type0.a;
			var type1 = type0.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Forall {',
						typeVar,
						' . ',
						$author$project$Calculus$Show$showType(type1),
						'}'
					]));
	}
};
var $author$project$Calculus$Show$showFunctorType = function (_v1) {
	var inputInterfaces = _v1.a;
	var outputInterface = _v1.b;
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'(-> [',
				A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$Calculus$Show$showInterface, inputInterfaces)),
				'] ',
				$author$project$Calculus$Show$showInterface(outputInterface),
				')'
			]));
};
var $author$project$Calculus$Show$showInterface = function (_interface) {
	var assumptions = _interface.assumptions;
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'(interface ',
				A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$Calculus$Show$showInterfaceAssumption, assumptions)),
				')'
			]));
};
var $author$project$Calculus$Show$showInterfaceAssumption = function (assumption) {
	switch (assumption.$) {
		case 'AssumeTerm':
			var termVarName = assumption.a;
			var type0 = assumption.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(assume-term ',
						termVarName,
						' ',
						$author$project$Calculus$Show$showType(type0),
						')'
					]));
		case 'AssumeType':
			var typeVarName = assumption.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['(assume-type ', typeVarName, ')']));
		case 'AssumeModule':
			var moduleVarName = assumption.a;
			var _interface = assumption.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(assume-module ',
						moduleVarName,
						' ',
						$author$project$Calculus$Show$showInterface(_interface),
						')'
					]));
		default:
			var functorName = assumption.a;
			var functorType = assumption.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(assume-functor ',
						functorName,
						' ',
						$author$project$Calculus$Show$showFunctorType(functorType),
						')'
					]));
	}
};
var $author$project$Calculus$Show$showFunctorTerm = function (functorTerm) {
	if (functorTerm.$ === 'FunctorVarUse') {
		var functorName = functorTerm.a;
		return $elm$core$String$concat(
			_List_fromArray(
				['$', functorName]));
	} else {
		var functorLiteral = functorTerm.a;
		var parameters = functorLiteral.parameters;
		var body = functorLiteral.body;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'(functor { ',
					A2(
					$elm$core$String$join,
					' ',
					A2(
						$elm$core$List$map,
						function (_v4) {
							var moduleName = _v4.a;
							var _interface = _v4.b;
							return $elm$core$String$concat(
								_List_fromArray(
									[
										'(: ',
										moduleName,
										' ',
										$author$project$Calculus$Show$showInterface(_interface),
										')'
									]));
						},
						parameters)),
					' . ',
					$author$project$Calculus$Show$showModuleTerm(body),
					' })'
				]));
	}
};
var $author$project$Calculus$Show$showModuleLiteral = function (module0) {
	var showModuleLetBinding = function (binding) {
		switch (binding.$) {
			case 'LetTerm':
				var _var = binding.a;
				var term = binding.b;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							'(',
							_var,
							' ',
							$author$project$Calculus$Show$showTerm(term),
							')'
						]));
			case 'LetModule':
				var _var = binding.a;
				var module1 = binding.b;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							'(',
							_var,
							' ',
							$author$project$Calculus$Show$showModuleTerm(module1),
							')'
						]));
			default:
				return _Debug_todo(
					'Calculus.Show',
					{
						start: {line: 745, column: 21},
						end: {line: 745, column: 31}
					})('');
		}
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'(module ',
				A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, showModuleLetBinding, module0.bindings)),
				')'
			]));
};
var $author$project$Calculus$Show$showModuleTerm = function (moduleTerm) {
	switch (moduleTerm.$) {
		case 'ModuleLiteralTerm':
			var module0 = moduleTerm.a;
			return $author$project$Calculus$Show$showModuleLiteral(module0);
		case 'ModuleVarUse':
			var moduleName = moduleTerm.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['$', moduleName]));
		default:
			var functorTerm = moduleTerm.a;
			var modules = moduleTerm.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(@ ',
						$author$project$Calculus$Show$showFunctorTerm(functorTerm),
						' ',
						A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, $author$project$Calculus$Show$showModuleTerm, modules)),
						')'
					]));
	}
};
var $author$project$Calculus$Show$showTerm = function (term) {
	switch (term.$) {
		case 'VarUse':
			var varname = term.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['$', varname]));
		case 'Pair':
			var fst = term.a;
			var snd = term.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(pair ',
						$author$project$Calculus$Show$showTerm(fst),
						' ',
						$author$project$Calculus$Show$showTerm(snd),
						')'
					]));
		case 'MatchPair':
			var arg = term.a;
			var var0 = term.b.var0;
			var var1 = term.b.var1;
			var body = term.b.body;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(match-pair ',
						$author$project$Calculus$Show$showTerm(arg),
						' { (pair ',
						var0,
						' ',
						var1,
						') . ',
						$author$project$Calculus$Show$showTerm(body),
						' })'
					]));
		case 'Abstraction':
			var _var = term.a._var;
			var body = term.a.body;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(fn { ',
						_var,
						' . ',
						$author$project$Calculus$Show$showTerm(body),
						' })'
					]));
		case 'Application':
			var fn = term.a;
			var arg = term.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(@ ',
						$author$project$Calculus$Show$showTerm(fn),
						' ',
						$author$project$Calculus$Show$showTerm(arg),
						')'
					]));
		case 'Left':
			var term1 = term.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(left ',
						$author$project$Calculus$Show$showTerm(term1),
						')'
					]));
		case 'Right':
			var term1 = term.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(right ',
						$author$project$Calculus$Show$showTerm(term1),
						')'
					]));
		case 'MatchSum':
			var arg = term.a;
			var leftBranch = term.b.leftBranch;
			var rightBranch = term.b.rightBranch;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(match-sum ',
						$author$project$Calculus$Show$showTerm(arg),
						' { (left ',
						leftBranch._var,
						') . ',
						$author$project$Calculus$Show$showTerm(leftBranch.body),
						' } { (right ',
						rightBranch._var,
						') . ',
						$author$project$Calculus$Show$showTerm(rightBranch.body),
						' })'
					]));
		case 'ConstTrue':
			return 'true';
		case 'ConstFalse':
			return 'false';
		case 'MatchBool':
			var arg = term.a;
			var trueBranch = term.b.trueBranch;
			var falseBranch = term.b.falseBranch;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(if ',
						$author$project$Calculus$Show$showTerm(arg),
						' { ',
						$author$project$Calculus$Show$showTerm(trueBranch.body),
						' } { ',
						$author$project$Calculus$Show$showTerm(falseBranch.body),
						' })'
					]));
		case 'ConstZero':
			return '0';
		case 'Succ':
			var term1 = term.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(succ ',
						$author$project$Calculus$Show$showTerm(term1),
						')'
					]));
		case 'FoldNat':
			var arg = term.a;
			var zeroBranch = term.b.zeroBranch;
			var succBranch = term.b.succBranch;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(loop-nat ',
						$author$project$Calculus$Show$showTerm(arg),
						' ',
						$author$project$Calculus$Show$showTerm(zeroBranch.body),
						' { ',
						succBranch._var,
						' . ',
						$author$project$Calculus$Show$showTerm(succBranch.body),
						' })'
					]));
		case 'ConstEmpty':
			return 'empty-list';
		case 'Cons':
			var headTerm = term.a;
			var tailTerm = term.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(cons ',
						$author$project$Calculus$Show$showTerm(headTerm),
						' ',
						$author$project$Calculus$Show$showTerm(tailTerm),
						')'
					]));
		case 'FoldList':
			var arg = term.a;
			var emptyBranch = term.b.emptyBranch;
			var consBranch = term.b.consBranch;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(list-loop ',
						$author$project$Calculus$Show$showTerm(arg),
						' ',
						$author$project$Calculus$Show$showTerm(emptyBranch.body),
						' { ',
						consBranch.var0,
						' ',
						consBranch.var1,
						' . ',
						$author$project$Calculus$Show$showTerm(consBranch.body),
						' })'
					]));
		case 'Delay':
			var body = term.a.body;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(fn { ',
						$author$project$Calculus$Show$showTerm(body),
						' })'
					]));
		case 'Force':
			var term1 = term.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(@ ',
						$author$project$Calculus$Show$showTerm(term1),
						')'
					]));
		case 'LetBe':
			var exp = term.a;
			var _var = term.b._var;
			var body = term.b.body;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(let ',
						$author$project$Calculus$Show$showTerm(exp),
						' { ',
						_var,
						' . ',
						$author$project$Calculus$Show$showTerm(body),
						' })'
					]));
		default:
			var module0 = term.a;
			var field = term.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(-> ',
						$author$project$Calculus$Show$showModuleTerm(module0),
						' ',
						field,
						')'
					]));
	}
};
var $author$project$Calculus$Show$showListValue = function (listValue) {
	if (listValue.$ === 'ConstEmpty') {
		return 'empty-list';
	} else {
		var headValue = listValue.a;
		var tailValue = listValue.b;
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'(cons ',
					$author$project$Calculus$Show$showValue(headValue),
					' ',
					$author$project$Calculus$Show$showValue(tailValue),
					')'
				]));
	}
};
var $author$project$Calculus$Show$showValue = function (val) {
	switch (val.$) {
		case 'Pair':
			var fst = val.a;
			var snd = val.b;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(pair ',
						$author$project$Calculus$Show$showValue(fst),
						' ',
						$author$project$Calculus$Show$showValue(snd),
						')'
					]));
		case 'Left':
			var val1 = val.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(left ',
						$author$project$Calculus$Show$showValue(val1),
						')'
					]));
		case 'Right':
			var val1 = val.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(right ',
						$author$project$Calculus$Show$showValue(val1),
						')'
					]));
		case 'Closure':
			var env = val.a.env;
			var _var = val.a._var;
			var body = val.a.body;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'(fn ',
						'[...]',
						' { ',
						_var,
						' . ',
						$author$project$Calculus$Show$showTerm(body),
						' })'
					]));
		case 'ConstTrue':
			return 'true';
		case 'ConstFalse':
			return 'false';
		case 'NatValue':
			var natVal = val.a;
			return $author$project$Calculus$Show$showNatValue(natVal);
		case 'ListValue':
			var listValue = val.a;
			return $author$project$Calculus$Show$showListValue(listValue);
		default:
			var thunkId = val.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'<thunk-id := ',
						$elm$core$String$fromInt(thunkId),
						'>'
					]));
	}
};
var $author$project$Calculus$Parser$termErrorToString = function (error) {
	var position = $author$project$Lib$Parser$Error$getPosition(error);
	var msg = $author$project$Lib$Parser$Error$getMsg(error);
	return $elm$core$String$concat(
		_List_fromArray(
			[
				$author$project$Calculus$Parser$expectedTermToString(msg),
				' at (line=',
				$elm$core$String$fromInt(position.line),
				', col=',
				$elm$core$String$fromInt(position.col),
				')'
			]));
};
var $author$project$Ui$Tab$Module$view = F2(
	function (config, model) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							$author$project$Ui$Style$Button$buttonStyle,
							{
								label: $mdgriffith$elm_ui$Element$text('Run'),
								onPress: $elm$core$Maybe$Just($author$project$Ui$Tab$Module$ModuleRunButtonClicked)
							}),
							A2(
							$mdgriffith$elm_ui$Element$Input$multiline,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height(
									$mdgriffith$elm_ui$Element$px(500)),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							{
								label: $mdgriffith$elm_ui$Element$Input$labelHidden('what is this?'),
								onChange: $author$project$Ui$Tab$Module$ModuleInputChanged,
								placeholder: $elm$core$Maybe$Nothing,
								spellcheck: false,
								text: model.moduleInput
							})
						])),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					function () {
						var _v0 = model.parsedModule;
						if (_v0.$ === 'Just') {
							var parsingModuleResult = _v0.a;
							if (parsingModuleResult.$ === 'Ok') {
								var module0 = parsingModuleResult.a;
								return A2(
									$mdgriffith$elm_ui$Element$column,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$Input$button,
											$author$project$Ui$Style$Button$buttonStyle,
											{
												label: $mdgriffith$elm_ui$Element$text('Run'),
												onPress: $elm$core$Maybe$Just($author$project$Ui$Tab$Module$ReplRunButtonClicked)
											}),
											A2(
											$mdgriffith$elm_ui$Element$Input$multiline,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$height(
													$mdgriffith$elm_ui$Element$px(45)),
													$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
												]),
											{
												label: $mdgriffith$elm_ui$Element$Input$labelHidden('what is this?'),
												onChange: $author$project$Ui$Tab$Module$ReplInputChanged,
												placeholder: $elm$core$Maybe$Nothing,
												spellcheck: false,
												text: model.replInput
											}),
											function () {
											var _v2 = model.parsedTerm;
											if (_v2.$ === 'Just') {
												var parsingResult = _v2.a;
												if (parsingResult.$ === 'Ok') {
													var term = parsingResult.a;
													var _v4 = model.evaledTerm;
													if (_v4.$ === 'Just') {
														var evaledResult = _v4.a;
														if (evaledResult.$ === 'Ok') {
															var _v6 = evaledResult.a;
															var thunkContext = _v6.a;
															var val = _v6.b;
															return A2(
																$mdgriffith$elm_ui$Element$column,
																_List_Nil,
																_List_fromArray(
																	[
																		$mdgriffith$elm_ui$Element$text(
																		$author$project$Calculus$Show$showValue(val))
																	]));
														} else {
															var errors = evaledResult.a;
															return $mdgriffith$elm_ui$Element$text(
																$author$project$Calculus$Show$showEvaluationErrors(errors));
														}
													} else {
														return $mdgriffith$elm_ui$Element$text('');
													}
												} else {
													var err = parsingResult.a;
													return $mdgriffith$elm_ui$Element$text(
														$author$project$Calculus$Parser$termErrorToString(err));
												}
											} else {
												return $mdgriffith$elm_ui$Element$text('');
											}
										}()
										]));
							} else {
								var err = parsingModuleResult.a;
								return $mdgriffith$elm_ui$Element$text(
									$author$project$Calculus$Parser$moduleTermErrorToString(err));
							}
						} else {
							return $mdgriffith$elm_ui$Element$text('');
						}
					}())
				]));
	});
var $author$project$Ui$Tab$Program$InferButtonClicked = {$: 'InferButtonClicked'};
var $author$project$Ui$Tab$Program$InputChanged = function (a) {
	return {$: 'InputChanged', a: a};
};
var $author$project$Ui$Tab$Program$RunButtonClicked = {$: 'RunButtonClicked'};
var $author$project$Ui$Tab$Program$isParsedSuccesfully = function (model) {
	var _v0 = model.parsedTerm;
	if ((_v0.$ === 'Just') && (_v0.a.$ === 'Ok')) {
		var term = _v0.a.a;
		return true;
	} else {
		return false;
	}
};
var $author$project$Calculus$Show$showEquations = function (equations) {
	return A2(
		$elm$core$String$join,
		'; ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var typeVarName = _v0.a;
				var type0 = _v0.b;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							typeVarName,
							' := ',
							$author$project$Calculus$Show$showType(type0)
						]));
			},
			$elm$core$Dict$toList(equations)));
};
var $author$project$Calculus$Show$showTermVarContext = function (termVarContext) {
	return A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var varname = _v0.a;
				var typeStack = _v0.b;
				var _v1 = $elm$core$List$head(typeStack);
				if (_v1.$ === 'Just') {
					var type0 = _v1.a;
					return _List_fromArray(
						[
							$elm$core$String$concat(
							_List_fromArray(
								[
									varname,
									' := ',
									$author$project$Calculus$Show$showType(type0)
								]))
						]);
				} else {
					return _List_Nil;
				}
			},
			$elm$core$Dict$toList(termVarContext)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Calculus$Show$showModuleValue = function (moduleValue) {
	var showModuleValueAssignment = function (binding) {
		switch (binding.$) {
			case 'AssignValue':
				var _var = binding.a;
				var value = binding.b;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							'(',
							_var,
							' ',
							$author$project$Calculus$Show$showValue(value),
							')'
						]));
			case 'AssignModuleValue':
				var _var = binding.a;
				var moduleValue1 = binding.b;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							'(',
							_var,
							' ',
							$author$project$Calculus$Show$showModuleValue(moduleValue1),
							')'
						]));
			default:
				return _Debug_todo(
					'Calculus.Show',
					{
						start: {line: 781, column: 21},
						end: {line: 781, column: 31}
					})('');
		}
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'(module ',
				A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, showModuleValueAssignment, moduleValue.assignments)),
				')'
			]));
};
var $author$project$Calculus$Show$showModuleEnvironment = function (env) {
	return A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var moduleName = _v0.a;
				var modules = _v0.b;
				var _v1 = $elm$core$List$head(modules);
				if (_v1.$ === 'Just') {
					var moduleValue = _v1.a;
					return _List_fromArray(
						[
							$elm$core$String$concat(
							_List_fromArray(
								[
									moduleName,
									' := ',
									$author$project$Calculus$Show$showModuleValue(moduleValue)
								]))
						]);
				} else {
					return _List_Nil;
				}
			},
			$elm$core$Dict$toList(env)));
};
var $author$project$Calculus$Show$showTermEnvironment = function (env) {
	return A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var varname = _v0.a;
				var vals = _v0.b;
				var _v1 = $elm$core$List$head(vals);
				if (_v1.$ === 'Just') {
					var val = _v1.a;
					return _List_fromArray(
						[
							$elm$core$String$concat(
							_List_fromArray(
								[
									varname,
									' := ',
									$author$project$Calculus$Show$showValue(val)
								]))
						]);
				} else {
					return _List_Nil;
				}
			},
			$elm$core$Dict$toList(env)));
};
var $author$project$Calculus$Show$showEnvironment = function (env) {
	return $elm$core$String$concat(
		_List_fromArray(
			[
				(!$elm$core$Dict$isEmpty(env.moduleEnv)) ? $elm$core$String$concat(
				_List_fromArray(
					[
						'[',
						$author$project$Calculus$Show$showModuleEnvironment(env.moduleEnv),
						']'
					])) : '',
				(!$elm$core$Dict$isEmpty(env.termEnv)) ? $elm$core$String$concat(
				_List_fromArray(
					[
						'[',
						$author$project$Calculus$Show$showTermEnvironment(env.termEnv),
						']'
					])) : ''
			]));
};
var $author$project$Calculus$Show$showThunks = function (_v0) {
	var thunks = _v0.thunks;
	return A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$map,
			function (_v1) {
				var thunkId = _v1.a;
				var thunk = _v1.b;
				if (thunk.$ === 'DelayedThunk') {
					var env = thunk.a.env;
					var body = thunk.a.body;
					return $elm$core$String$concat(
						_List_fromArray(
							[
								'<thunk-id(frozen) := ',
								$elm$core$String$fromInt(thunkId),
								'; ',
								$author$project$Calculus$Show$showEnvironment(env),
								' | ',
								$author$project$Calculus$Show$showTerm(body),
								'>'
							]));
				} else {
					var val = thunk.a;
					return $elm$core$String$concat(
						_List_fromArray(
							[
								'<thunk-id(forced) := ',
								$elm$core$String$fromInt(thunkId),
								' | ',
								$author$project$Calculus$Show$showValue(val),
								'>'
							]));
				}
			},
			$elm$core$Dict$toList(thunks)));
};
var $author$project$Calculus$Show$showTypeError = function (typeError) {
	switch (typeError.$) {
		case 'ExpectedProductType':
			return 'Expected Produc Type';
		case 'ExpectedArrowType':
			return 'Expected Arrow Type';
		case 'ExpectedNatType':
			return 'Expected Nat Type';
		case 'ExpectedSumType':
			return 'Expected Sum Type';
		case 'ExpectedMatchingTypesInCaseBranches':
			return 'Expected matching Types in Case-Expression Branches';
		case 'ExpectedBoolType':
			return 'Expected Bool Type';
		case 'ExpectedMatchingTypesInIfThenElseBranches':
			return 'Expected matching Types in If-Then-Else-Expression Branches';
		case 'ExpectedBaseUnifiesWithLoopBodyType':
			return 'Expected base unifies with loop-body Type';
		case 'ExpectedListType':
			return 'Expected List Type';
		case 'ExpectedFrozenType':
			return 'Expected Frozen Type';
		case 'InfiniteType':
			var typeVarName = typeError.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['Infinite Type detected: the type var ', '`', typeVarName, '`']));
		default:
			return 'Cant Pop Empty Type-Var-Context';
	}
};
var $mgold$elm_nonempty_list$List$Nonempty$map = F2(
	function (f, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
			f(x),
			A2($elm$core$List$map, f, xs));
	});
var $author$project$Lib$StackedSet$show = F2(
	function (toString, stackedSet) {
		var setToString = function (set) {
			return A2(
				$elm$core$String$join,
				', ',
				A2(
					$elm$core$List$map,
					toString,
					$elm$core$Set$toList(set)));
		};
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'|',
					A2(
					$elm$core$String$join,
					'| ',
					$elm$core$List$reverse(
						$mgold$elm_nonempty_list$List$Nonempty$toList(
							A2($mgold$elm_nonempty_list$List$Nonempty$map, setToString, stackedSet))))
				]));
	});
var $author$project$Calculus$Show$showTypeVarStack = $author$project$Lib$StackedSet$show($elm$core$Basics$identity);
var $author$project$Ui$Tab$Program$view = F2(
	function (config, model) {
		var heightPx = 300;
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							$author$project$Ui$Style$Button$buttonStyle,
							{
								label: $mdgriffith$elm_ui$Element$text('Run'),
								onPress: $author$project$Ui$Tab$Program$isParsedSuccesfully(model) ? $elm$core$Maybe$Just($author$project$Ui$Tab$Program$RunButtonClicked) : $elm$core$Maybe$Nothing
							}),
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							$author$project$Ui$Style$Button$buttonStyle,
							{
								label: $mdgriffith$elm_ui$Element$text('Infer'),
								onPress: $author$project$Ui$Tab$Program$isParsedSuccesfully(model) ? $elm$core$Maybe$Just($author$project$Ui$Tab$Program$InferButtonClicked) : $elm$core$Maybe$Nothing
							})
						])),
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$paddingEach(
							{bottom: 0, left: 0, right: 0, top: 5})
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$multiline,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height(
									$mdgriffith$elm_ui$Element$px(heightPx)),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							{
								label: $mdgriffith$elm_ui$Element$Input$labelHidden('what is this?'),
								onChange: $author$project$Ui$Tab$Program$InputChanged,
								placeholder: $elm$core$Maybe$Nothing,
								spellcheck: false,
								text: model.input
							}),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$height(
									$mdgriffith$elm_ui$Element$px(heightPx)),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$paddingEach(
									{bottom: 0, left: 10, right: 0, top: 0})
								]),
							A2(
								$mdgriffith$elm_ui$Element$column,
								_List_Nil,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$text('TERMS & VALUES'),
										$mdgriffith$elm_ui$Element$text(
										$elm$core$String$concat(
											_List_fromArray(
												[
													'term = ',
													function () {
													var _v0 = model.parsedTerm;
													if (_v0.$ === 'Nothing') {
														return '';
													} else {
														var result = _v0.a;
														if (result.$ === 'Ok') {
															var term = result.a;
															return $author$project$Calculus$Show$showTerm(term);
														} else {
															var err = result.a;
															return $author$project$Calculus$Parser$termErrorToString(err);
														}
													}
												}()
												]))),
										A2(
										$mdgriffith$elm_ui$Element$el,
										_List_Nil,
										function () {
											var _v2 = model.evaledTerm;
											if (_v2.$ === 'Nothing') {
												return $mdgriffith$elm_ui$Element$text('');
											} else {
												var result = _v2.a;
												if (result.$ === 'Ok') {
													var _v4 = result.a;
													var thunkContext = _v4.a;
													var val = _v4.b;
													return A2(
														$mdgriffith$elm_ui$Element$column,
														_List_Nil,
														_List_fromArray(
															[
																$mdgriffith$elm_ui$Element$text(
																$elm$core$String$concat(
																	_List_fromArray(
																		[
																			'next-thunk-id = ',
																			$elm$core$String$fromInt(thunkContext.nextThunkId)
																		]))),
																$mdgriffith$elm_ui$Element$text(
																$elm$core$String$concat(
																	_List_fromArray(
																		[
																			'thunk-context = ',
																			$author$project$Calculus$Show$showThunks(thunkContext)
																		]))),
																$mdgriffith$elm_ui$Element$text(
																$elm$core$String$concat(
																	_List_fromArray(
																		[
																			'value = ',
																			$author$project$Calculus$Show$showValue(val)
																		])))
															]));
												} else {
													var errors = result.a;
													return $mdgriffith$elm_ui$Element$text(
														$author$project$Calculus$Show$showEvaluationErrors(errors));
												}
											}
										}()),
										$mdgriffith$elm_ui$Element$text('TYPE INFERENCE'),
										A2(
										$mdgriffith$elm_ui$Element$column,
										_List_Nil,
										function () {
											var _v5 = model.inferedType;
											if (_v5.$ === 'Nothing') {
												return _List_Nil;
											} else {
												var result = _v5.a;
												if (result.$ === 'Ok') {
													var _v7 = result.a;
													var termVarContext = _v7.a;
													var typeVarContext = _v7.b;
													var nextTypeVar = typeVarContext.nextTypeVar;
													var typeVarStack = typeVarContext.typeVarStack;
													var equations = typeVarContext.equations;
													var type0 = _v7.c;
													return _List_fromArray(
														[
															$mdgriffith$elm_ui$Element$text(
															$elm$core$String$concat(
																_List_fromArray(
																	[
																		'term-var-context = ',
																		$author$project$Calculus$Show$showTermVarContext(termVarContext)
																	]))),
															$mdgriffith$elm_ui$Element$text(
															$elm$core$String$concat(
																_List_fromArray(
																	[
																		'next-type-var = ',
																		'\'' + $elm$core$String$fromInt(nextTypeVar)
																	]))),
															$mdgriffith$elm_ui$Element$text(
															$elm$core$String$concat(
																_List_fromArray(
																	[
																		'stack = ',
																		$author$project$Calculus$Show$showTypeVarStack(typeVarStack)
																	]))),
															$mdgriffith$elm_ui$Element$text(
															$elm$core$String$concat(
																_List_fromArray(
																	[
																		'equations = ',
																		$author$project$Calculus$Show$showEquations(equations)
																	]))),
															$mdgriffith$elm_ui$Element$text(
															$elm$core$String$concat(
																_List_fromArray(
																	[
																		'type = ',
																		$author$project$Calculus$Show$showType(type0)
																	]))),
															$mdgriffith$elm_ui$Element$text(
															$elm$core$String$concat(
																_List_fromArray(
																	[
																		'expanded-type = ',
																		function () {
																		var _v8 = A2(
																			$author$project$Lib$State$StatefulWithErr$run,
																			$author$project$Calculus$Type$TypeVarContext$expandType(type0),
																			typeVarContext);
																		if (_v8.$ === 'Ok') {
																			var _v9 = _v8.a;
																			var type1 = _v9.b;
																			return $author$project$Calculus$Show$showType(type1);
																		} else {
																			var typeErrors = _v8.a;
																			return A2(
																				$elm$core$String$join,
																				', ',
																				A2($elm$core$List$map, $author$project$Calculus$Show$showTypeError, typeErrors));
																		}
																	}()
																	])))
														]);
												} else {
													var typeErrors = result.a;
													return _List_fromArray(
														[
															$mdgriffith$elm_ui$Element$text(
															$elm$core$String$concat(
																_List_fromArray(
																	[
																		'type-error = ',
																		A2(
																		$elm$core$String$join,
																		', ',
																		A2($elm$core$List$map, $author$project$Calculus$Show$showTypeError, typeErrors))
																	])))
														]);
												}
											}
										}())
									])))
						]))
				]));
	});
var $author$project$Ui$Tab$RegisterMachine$Reset = {$: 'Reset'};
var $author$project$Ui$Tab$RegisterMachine$RunOneStep = {$: 'RunOneStep'};
var $author$project$Ui$Tab$RegisterMachine$Start = {$: 'Start'};
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Element$alignTop = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$Top);
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.bold);
var $author$project$Ui$Tab$RegisterMachine$headingSize = 20;
var $author$project$Ui$Tab$RegisterMachine$heading = function (str) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$size($author$project$Ui$Tab$RegisterMachine$headingSize),
				$mdgriffith$elm_ui$Element$Font$bold
			]),
		$mdgriffith$elm_ui$Element$text(str));
};
var $author$project$Ui$Tab$RegisterMachine$runTimeErrorToString = function (err) {
	switch (err.$) {
		case 'UndefinedRegister':
			var register = err.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['Undefined register $', register]));
		case 'UndefinedOperation':
			var operationName = err.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['Undefined operation ', operationName]));
		case 'WrongNumberOfArgumentsGivenToOperationExpected':
			var _int = err.a;
			return $elm$core$String$concat(
				_List_fromArray(
					[
						'Wrong number of arguments given to the operation. Expected ',
						$elm$core$String$fromInt(_int)
					]));
		case 'LabelPointsToNothing':
			var label = err.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['The label :', label, ' points to nothing']));
		case 'PoppingEmptyStack':
			return 'Popping empty stack';
		case 'TheOperationExpectsIntegerArguments':
			return 'The operation expects integer arguments';
		case 'ExpectedInstructionAddressInRegister':
			return 'Expected instruction address in the register';
		case 'ExpectedPairInRegister':
			return 'Expected pair in the register';
		default:
			var memoryError = err.a;
			switch (memoryError.$) {
				case 'MemoryExceeded':
					return 'Memory Exceeded';
				case 'InvalidMemoryAccessAt':
					var pointer = memoryError.a;
					return $elm$core$String$concat(
						_List_fromArray(
							[
								'Invalid memory access at #',
								$elm$core$String$fromInt(pointer)
							]));
				case 'ExpectedNumAt':
					var pointer = memoryError.a;
					return $elm$core$String$concat(
						_List_fromArray(
							[
								'Expected Num at #',
								$elm$core$String$fromInt(pointer)
							]));
				case 'ExpectedPairAt':
					var pointer = memoryError.a;
					return $elm$core$String$concat(
						_List_fromArray(
							[
								'Expected Pair at #',
								$elm$core$String$fromInt(pointer)
							]));
				default:
					var pointer = memoryError.a;
					return $elm$core$String$concat(
						_List_fromArray(
							[
								'Expected Nil at #',
								$elm$core$String$fromInt(pointer)
							]));
			}
	}
};
var $author$project$Ui$Tab$RegisterMachine$shouldDisplayEditor = false;
var $mdgriffith$elm_ui$Internal$Model$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Element$below = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, $mdgriffith$elm_ui$Internal$Model$Below, element);
};
var $PaackEng$elm_ui_dropdown$Dropdown$ariaRoleListbox = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$attribute, 'role', 'listbox'));
var $PaackEng$elm_ui_dropdown$Dropdown$OnSelect = function (a) {
	return {$: 'OnSelect', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$ariaRoleOption = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$attribute, 'role', 'option'));
var $PaackEng$elm_ui_dropdown$Dropdown$ariaSelected = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$attribute, 'aria-selected', 'true'));
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $PaackEng$elm_ui_dropdown$Dropdown$onClick = function (message) {
	return $mdgriffith$elm_ui$Element$Events$onClick(message);
};
var $PaackEng$elm_ui_dropdown$Dropdown$referenceDataName = 'data-dropdown-id';
var $PaackEng$elm_ui_dropdown$Dropdown$referenceAttr = function (model) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2($elm$html$Html$Attributes$attribute, $PaackEng$elm_ui_dropdown$Dropdown$referenceDataName, model.id));
};
var $PaackEng$elm_ui_dropdown$Dropdown$tabIndexAttr = function (tabIndex) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		$elm$html$Html$Attributes$tabindex(tabIndex));
};
var $PaackEng$elm_ui_dropdown$Dropdown$itemView = F5(
	function (config, selectedItems, state, i, item) {
		var selected = A2($elm$core$List$member, item, selectedItems);
		var itemAttrsBase = _List_fromArray(
			[
				$PaackEng$elm_ui_dropdown$Dropdown$onClick(
				config.dropdownMsg(
					$PaackEng$elm_ui_dropdown$Dropdown$OnSelect(item))),
				$PaackEng$elm_ui_dropdown$Dropdown$referenceAttr(state),
				$PaackEng$elm_ui_dropdown$Dropdown$tabIndexAttr(-1),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$PaackEng$elm_ui_dropdown$Dropdown$ariaRoleOption
			]);
		var itemAttrs = selected ? A2($elm$core$List$cons, $PaackEng$elm_ui_dropdown$Dropdown$ariaSelected, itemAttrsBase) : itemAttrsBase;
		var highlighed = _Utils_eq(i, state.focusedIndex);
		return A2(
			$mdgriffith$elm_ui$Element$el,
			itemAttrs,
			A3(config.itemToElement, selected, highlighed, item));
	});
var $PaackEng$elm_ui_dropdown$Dropdown$bodyView = F4(
	function (config, selectedItems, state, data) {
		if (state.isOpen) {
			var items = ($elm$core$List$length(data) >= 1) ? A2(
				$mdgriffith$elm_ui$Element$column,
				config.listAttributes,
				A2(
					$elm$core$List$indexedMap,
					A3($PaackEng$elm_ui_dropdown$Dropdown$itemView, config, selectedItems, state),
					data)) : A2($mdgriffith$elm_ui$Element$el, config.listAttributes, config.emptyListElement);
			var body = A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$htmlAttribute(
						A2($elm$html$Html$Attributes$style, 'flex-shrink', '1')),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$PaackEng$elm_ui_dropdown$Dropdown$ariaRoleListbox
					]),
				items);
			return body;
		} else {
			return $mdgriffith$elm_ui$Element$none;
		}
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $PaackEng$elm_ui_dropdown$Dropdown$idAttr = function (id) {
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		$elm$html$Html$Attributes$id(id));
};
var $PaackEng$elm_ui_dropdown$Dropdown$OnClickPrompt = {$: 'OnClickPrompt'};
var $PaackEng$elm_ui_dropdown$Dropdown$OnFilterTyped = function (a) {
	return {$: 'OnFilterTyped', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$OnKeyDown = function (a) {
	return {$: 'OnKeyDown', a: a};
};
var $PaackEng$elm_ui_dropdown$Dropdown$ariaExpanded = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$attribute, 'aria-expanded', 'true'));
var $PaackEng$elm_ui_dropdown$Dropdown$ariaHasPopup = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$attribute, 'aria-haspopup', 'listbox'));
var $PaackEng$elm_ui_dropdown$Dropdown$ariaRoleButton = $mdgriffith$elm_ui$Element$htmlAttribute(
	A2($elm$html$Html$Attributes$attribute, 'role', 'button'));
var $mdgriffith$elm_ui$Internal$Model$Focus = {$: 'Focus'};
var $mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
	function (a, b) {
		return {$: 'PseudoSelector', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$focus = $mdgriffith$elm_ui$Internal$Flag$flag(31);
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 'NoAttribute':
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 'Describe':
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 'AlignX':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 'AlignY':
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 'Width':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 'Height':
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 'Class':
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 'StyleClass':
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 'Nearby':
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 'Attr':
				var htmlAttr = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$removeNever = function (style) {
	return A2($mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, $elm$core$Basics$never, style);
};
var $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
	function (attr, _v0) {
		var styles = _v0.a;
		var trans = _v0.b;
		var _v1 = $mdgriffith$elm_ui$Internal$Model$removeNever(attr);
		switch (_v1.$) {
			case 'StyleClass':
				var style = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, style, styles),
					trans);
			case 'TransformComponent':
				var flag = _v1.a;
				var component = _v1.b;
				return _Utils_Tuple2(
					styles,
					A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component));
			default:
				return _Utils_Tuple2(styles, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function (attrs) {
	var _v0 = A3(
		$elm$core$List$foldl,
		$mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
		_Utils_Tuple2(_List_Nil, $mdgriffith$elm_ui$Internal$Model$Untransformed),
		attrs);
	var styles = _v0.a;
	var transform = _v0.b;
	return A2(
		$elm$core$List$cons,
		$mdgriffith$elm_ui$Internal$Model$Transform(transform),
		styles);
};
var $mdgriffith$elm_ui$Element$focused = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$focus,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			$mdgriffith$elm_ui$Internal$Model$Focus,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $PaackEng$elm_ui_dropdown$Dropdown$OnBlur = {$: 'OnBlur'};
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $PaackEng$elm_ui_dropdown$Dropdown$onBlurAttribute = F2(
	function (config, state) {
		var dataDecoder = A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['relatedTarget', 'attributes', $PaackEng$elm_ui_dropdown$Dropdown$referenceDataName, 'value']),
			$elm$json$Json$Decode$string);
		var attrToMsg = function (maybeAttr) {
			if (maybeAttr.$ === 'Just') {
				var attr = maybeAttr.a;
				return _Utils_eq(attr, state.id) ? $elm$json$Json$Decode$fail('') : $elm$json$Json$Decode$succeed(
					config.dropdownMsg($PaackEng$elm_ui_dropdown$Dropdown$OnBlur));
			} else {
				return $elm$json$Json$Decode$succeed(
					config.dropdownMsg($PaackEng$elm_ui_dropdown$Dropdown$OnBlur));
			}
		};
		return $mdgriffith$elm_ui$Element$htmlAttribute(
			A2(
				$elm$html$Html$Events$on,
				'blur',
				A2(
					$elm$json$Json$Decode$andThen,
					attrToMsg,
					$elm$json$Json$Decode$maybe(dataDecoder))));
	});
var $PaackEng$elm_ui_dropdown$Dropdown$ArrowDown = {$: 'ArrowDown'};
var $PaackEng$elm_ui_dropdown$Dropdown$ArrowUp = {$: 'ArrowUp'};
var $PaackEng$elm_ui_dropdown$Dropdown$Enter = {$: 'Enter'};
var $PaackEng$elm_ui_dropdown$Dropdown$Esc = {$: 'Esc'};
var $PaackEng$elm_ui_dropdown$Dropdown$onKeyDown = function (msg) {
	var stringToKey = function (str) {
		switch (str) {
			case 'ArrowDown':
				return $elm$json$Json$Decode$succeed($PaackEng$elm_ui_dropdown$Dropdown$ArrowDown);
			case 'ArrowUp':
				return $elm$json$Json$Decode$succeed($PaackEng$elm_ui_dropdown$Dropdown$ArrowUp);
			case 'Enter':
				return $elm$json$Json$Decode$succeed($PaackEng$elm_ui_dropdown$Dropdown$Enter);
			case 'Escape':
				return $elm$json$Json$Decode$succeed($PaackEng$elm_ui_dropdown$Dropdown$Esc);
			default:
				return $elm$json$Json$Decode$fail('not used key');
		}
	};
	var keyDecoder = A2(
		$elm$json$Json$Decode$andThen,
		stringToKey,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Element$htmlAttribute(
		A2(
			$elm$html$Html$Events$on,
			'keydown',
			A2($elm$json$Json$Decode$map, msg, keyDecoder)));
};
var $mdgriffith$elm_ui$Element$Input$Placeholder = F2(
	function (a, b) {
		return {$: 'Placeholder', a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$Input$placeholder = $mdgriffith$elm_ui$Element$Input$Placeholder;
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 'TextInputNode', a: a};
};
var $mdgriffith$elm_ui$Element$Input$search = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		autofill: $elm$core$Maybe$Nothing,
		spellchecked: false,
		type_: $mdgriffith$elm_ui$Element$Input$TextInputNode('search')
	});
var $PaackEng$elm_ui_dropdown$Dropdown$triggerView = F3(
	function (config, selectedItems, state) {
		var selectAttrs = A2(
			$elm$core$List$cons,
			$PaackEng$elm_ui_dropdown$Dropdown$onClick(
				config.dropdownMsg($PaackEng$elm_ui_dropdown$Dropdown$OnClickPrompt)),
			A2(
				$elm$core$List$cons,
				$PaackEng$elm_ui_dropdown$Dropdown$onKeyDown(
					A2($elm$core$Basics$composeL, config.dropdownMsg, $PaackEng$elm_ui_dropdown$Dropdown$OnKeyDown)),
				A2(
					$elm$core$List$cons,
					$PaackEng$elm_ui_dropdown$Dropdown$tabIndexAttr(0),
					A2(
						$elm$core$List$cons,
						$PaackEng$elm_ui_dropdown$Dropdown$ariaHasPopup,
						A2(
							$elm$core$List$cons,
							$PaackEng$elm_ui_dropdown$Dropdown$ariaRoleButton,
							A2(
								$elm$core$List$cons,
								$PaackEng$elm_ui_dropdown$Dropdown$referenceAttr(state),
								_Utils_ap(
									_Utils_eq(config.dropdownType, $PaackEng$elm_ui_dropdown$Dropdown$Basic) ? _List_fromArray(
										[
											A2($PaackEng$elm_ui_dropdown$Dropdown$onBlurAttribute, config, state)
										]) : _List_Nil,
									_Utils_ap(
										state.isOpen ? _List_fromArray(
											[$PaackEng$elm_ui_dropdown$Dropdown$ariaExpanded]) : _List_Nil,
										config.selectAttributes))))))));
		var searchInput = A2(
			$mdgriffith$elm_ui$Element$Input$search,
			A2(
				$elm$core$List$cons,
				$PaackEng$elm_ui_dropdown$Dropdown$idAttr(state.id + 'input-search'),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$focused(_List_Nil),
					A2(
						$elm$core$List$cons,
						A2($PaackEng$elm_ui_dropdown$Dropdown$onBlurAttribute, config, state),
						config.searchAttributes))),
			{
				label: $mdgriffith$elm_ui$Element$Input$labelHidden('Filter List'),
				onChange: A2($elm$core$Basics$composeL, config.dropdownMsg, $PaackEng$elm_ui_dropdown$Dropdown$OnFilterTyped),
				placeholder: A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$mdgriffith$elm_ui$Element$text,
						$mdgriffith$elm_ui$Element$Input$placeholder(_List_Nil)),
					config.filterPlaceholder),
				text: state.filterText
			});
		var prompt = A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			function () {
				if (!selectedItems.b) {
					return config.promptElement;
				} else {
					var xs = selectedItems;
					var _v3 = config.selectionToPrompt;
					if (_v3.$ === 'SingleItemToPrompt') {
						var f = _v3.a;
						var _v4 = $elm$core$List$head(xs);
						if (_v4.$ === 'Nothing') {
							return config.promptElement;
						} else {
							var x = _v4.a;
							return f(x);
						}
					} else {
						var f = _v3.a;
						return f(xs);
					}
				}
			}());
		var search = function () {
			var _v1 = config.dropdownType;
			switch (_v1.$) {
				case 'Basic':
					return prompt;
				case 'MultiSelect':
					return prompt;
				case 'Filterable':
					return searchInput;
				default:
					return searchInput;
			}
		}();
		var _v0 = state.isOpen ? _Utils_Tuple2(
			search,
			A2($mdgriffith$elm_ui$Element$el, _List_Nil, config.closeButton)) : _Utils_Tuple2(
			prompt,
			A2($mdgriffith$elm_ui$Element$el, _List_Nil, config.openButton));
		var promptOrSearch = _v0.a;
		var button = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$row,
			selectAttrs,
			_List_fromArray(
				[promptOrSearch, button]));
	});
var $PaackEng$elm_ui_dropdown$Dropdown$view = F3(
	function (_v0, model, _v1) {
		var config = _v0.a;
		var state = _v1.a;
		var selectedItems = A2($PaackEng$elm_ui_dropdown$Dropdown$selectedItemsAsList, config, model);
		var trigger = A3($PaackEng$elm_ui_dropdown$Dropdown$triggerView, config, selectedItems, state);
		var items = config.itemsFromModel(model);
		var filter = function (item) {
			return A2(
				$elm$core$String$contains,
				$elm$core$String$toLower(state.filterText),
				$elm$core$String$toLower(
					config.itemToText(item)));
		};
		var filteredData = A2($elm$core$List$filter, filter, items);
		var data = function () {
			var _v2 = config.dropdownType;
			switch (_v2.$) {
				case 'AutoCompleteHelper':
					return items;
				case 'Filterable':
					return filteredData;
				case 'Basic':
					return items;
				default:
					return items;
			}
		}();
		var body = A4($PaackEng$elm_ui_dropdown$Dropdown$bodyView, config, selectedItems, state, data);
		var containerAttrs = A2(
			$elm$core$List$cons,
			$PaackEng$elm_ui_dropdown$Dropdown$idAttr(state.id),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$below(body),
				config.containerAttributes));
		return A2(
			$mdgriffith$elm_ui$Element$column,
			containerAttrs,
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					trigger)
				]));
	});
var $author$project$Lib$ZipList$mapToList = F2(
	function (f, _v0) {
		var revLeft0 = _v0.a;
		var x0 = _v0.b;
		var right0 = _v0.c;
		return _Utils_ap(
			$elm$core$List$reverse(
				A2($elm$core$List$map, f.others, revLeft0)),
			A2(
				$elm$core$List$cons,
				f.current(x0),
				A2($elm$core$List$map, f.others, right0)));
	});
var $mgold$elm_nonempty_list$List$Nonempty$reverse = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	var revapp = function (_v1) {
		revapp:
		while (true) {
			var ls = _v1.a;
			var c = _v1.b;
			var rs = _v1.c;
			if (!rs.b) {
				return A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, c, ls);
			} else {
				var r = rs.a;
				var rss = rs.b;
				var $temp$_v1 = _Utils_Tuple3(
					A2($elm$core$List$cons, c, ls),
					r,
					rss);
				_v1 = $temp$_v1;
				continue revapp;
			}
		}
	};
	return revapp(
		_Utils_Tuple3(_List_Nil, x, xs));
};
var $author$project$Lib$ZipListSelection$current = function (_v0) {
	var middle = _v0.b;
	if (middle.a.$ === 'Upwards') {
		var _v2 = middle.a;
		var mids = middle.b;
		return mids;
	} else {
		var _v3 = middle.a;
		var revMids = middle.b;
		return $mgold$elm_nonempty_list$List$Nonempty$reverse(revMids);
	}
};
var $author$project$Lib$ZipListSelection$mapToList = F2(
	function (f, zipListSelection) {
		var revUps = zipListSelection.a;
		var downs = zipListSelection.c;
		return $elm$core$List$concat(
			_List_fromArray(
				[
					A2(
					$elm$core$List$map,
					f.others,
					$elm$core$List$reverse(revUps)),
					A2(
					$elm$core$List$map,
					f.current,
					$mgold$elm_nonempty_list$List$Nonempty$toList(
						$author$project$Lib$ZipListSelection$current(zipListSelection))),
					A2($elm$core$List$map, f.others, downs)
				]));
	});
var $author$project$RegisterMachine$Ui$Editor$ResetDebugConsole = {$: 'ResetDebugConsole'};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$RegisterMachine$Ui$Editor$NodeEdit = function (a) {
	return {$: 'NodeEdit', a: a};
};
var $author$project$RegisterMachine$Ui$Color$error = A3($mdgriffith$elm_ui$Element$rgb255, 255, 0, 0);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $author$project$Ui$InputCell$htmlInputCell = $elm$html$Html$node('input-cell');
var $author$project$Ui$InputCell$inputCell = F3(
	function (fontSize, text, onChange) {
		return $mdgriffith$elm_ui$Element$html(
			A2(
				$author$project$Ui$InputCell$htmlInputCell,
				_List_fromArray(
					[
						$elm$html$Html$Events$onInput(onChange),
						$elm$html$Html$Attributes$value(text),
						A2(
						$elm$html$Html$Attributes$style,
						'font-size',
						$elm$core$String$fromInt(fontSize) + 'px')
					]),
				_List_Nil));
	});
var $author$project$RegisterMachine$Ui$Color$label = A3($mdgriffith$elm_ui$Element$rgb255, 239, 151, 0);
var $author$project$RegisterMachine$Ui$Color$register = A3($mdgriffith$elm_ui$Element$rgb255, 54, 108, 235);
var $mdgriffith$elm_ui$Internal$Flag$borderStyle = $mdgriffith$elm_ui$Internal$Flag$flag(11);
var $mdgriffith$elm_ui$Element$Border$solid = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$borderStyle, $mdgriffith$elm_ui$Internal$Style$classes.borderSolid);
var $author$project$RegisterMachine$Ui$Editor$viewHole = function () {
	var r = 5;
	var d = 2 * r;
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(d)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(d)),
				$mdgriffith$elm_ui$Element$Border$rounded(r),
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 183, 183, 183))
			]),
		$mdgriffith$elm_ui$Element$text(''));
}();
var $author$project$RegisterMachine$Ui$Editor$viewNode = F4(
	function (isSelected, isInstructionSelected, nodeMode, _v0) {
		var nodeValidation = _v0.b;
		var nodeExpectation = _v0.c;
		var str = _v0.d;
		var viewStr = function (str0) {
			switch (nodeValidation.$) {
				case 'UnfinishedNode':
					return $author$project$RegisterMachine$Ui$Editor$viewHole;
				case 'ErrorNode':
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Background$color($author$project$RegisterMachine$Ui$Color$error)
							]),
						$mdgriffith$elm_ui$Element$text(str0));
				default:
					var entityKind = nodeValidation.a;
					switch (entityKind.$) {
						case 'RegisterName':
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$color($author$project$RegisterMachine$Ui$Color$register)
									]),
								$mdgriffith$elm_ui$Element$text(str0));
						case 'RegisterUse':
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$color($author$project$RegisterMachine$Ui$Color$register)
									]),
								$mdgriffith$elm_ui$Element$text(str0));
						case 'Label':
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$color($author$project$RegisterMachine$Ui$Color$label)
									]),
								$mdgriffith$elm_ui$Element$text(str0));
						case 'LabelUse':
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$color($author$project$RegisterMachine$Ui$Color$label)
									]),
								$mdgriffith$elm_ui$Element$text(str0));
						case 'Integer':
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(str0));
						case 'Nil':
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(str0));
						default:
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(str0));
					}
			}
		};
		if (isSelected && isInstructionSelected) {
			if (nodeMode.$ === 'TraversingNodes') {
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Border$width(1),
							$mdgriffith$elm_ui$Element$Border$solid
						]),
					viewStr(str));
			} else {
				return A3($author$project$Ui$InputCell$inputCell, 19, str, $author$project$RegisterMachine$Ui$Editor$NodeEdit);
			}
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				viewStr(str));
		}
	});
var $author$project$RegisterMachine$Ui$Editor$viewDebuggingConsole = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$Input$button,
				$author$project$Ui$Style$Button$buttonStyle,
				{
					label: $mdgriffith$elm_ui$Element$text('reset'),
					onPress: $elm$core$Maybe$Just($author$project$RegisterMachine$Ui$Editor$ResetDebugConsole)
				}),
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_Nil,
				A2(
					$elm$core$List$map,
					function (instruction) {
						switch (instruction.$) {
							case 'Instruction':
								var instructionKind = instruction.a;
								var _v1 = instruction.b;
								var revLeftNodes = _v1.a;
								var selectedNode = _v1.b;
								var rightNodes = _v1.c;
								var instructionValidity = instruction.c;
								var viewDebuggedNode = F2(
									function (isSelected, node) {
										var nodeKind = node.a;
										var nodeValidity = node.b;
										var nodeExpectations = node.c;
										var text = node.d;
										return A2(
											$mdgriffith$elm_ui$Element$row,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$spacing(5)
												]),
											_List_fromArray(
												[
													A2(
													$mdgriffith$elm_ui$Element$el,
													_List_fromArray(
														[$mdgriffith$elm_ui$Element$Font$bold]),
													$mdgriffith$elm_ui$Element$text('Node')),
													$mdgriffith$elm_ui$Element$text(
													function () {
														if (nodeKind.$ === 'Static') {
															return 'S';
														} else {
															return 'D';
														}
													}()),
													A2(
													$mdgriffith$elm_ui$Element$el,
													_List_fromArray(
														[$mdgriffith$elm_ui$Element$Font$bold]),
													$mdgriffith$elm_ui$Element$text('[ ')),
													A4($author$project$RegisterMachine$Ui$Editor$viewNode, isSelected, true, $author$project$RegisterMachine$Ui$Editor$TraversingNodes, node),
													A2(
													$mdgriffith$elm_ui$Element$row,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$mdgriffith$elm_ui$Element$el,
															_List_fromArray(
																[
																	$mdgriffith$elm_ui$Element$Font$bold,
																	$mdgriffith$elm_ui$Element$Font$color(
																	A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 1))
																]),
															$mdgriffith$elm_ui$Element$text(': {')),
															A2(
															$mdgriffith$elm_ui$Element$row,
															_List_Nil,
															A2(
																$elm$core$List$intersperse,
																$mdgriffith$elm_ui$Element$text(', '),
																A2(
																	$elm$core$List$map,
																	function (nodeExpectation) {
																		return $mdgriffith$elm_ui$Element$text(
																			function () {
																				switch (nodeExpectation.$) {
																					case 'RegisterName':
																						return 'reg-name';
																					case 'RegisterUse':
																						return 'reg-use';
																					case 'Label':
																						return 'label';
																					case 'LabelUse':
																						return 'label-use';
																					case 'Integer':
																						return 'int';
																					case 'Nil':
																						return 'nil';
																					default:
																						return 'op';
																				}
																			}());
																	},
																	nodeExpectations))),
															A2(
															$mdgriffith$elm_ui$Element$el,
															_List_fromArray(
																[
																	$mdgriffith$elm_ui$Element$Font$bold,
																	$mdgriffith$elm_ui$Element$Font$color(
																	A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 1))
																]),
															$mdgriffith$elm_ui$Element$text('}'))
														])),
													A2(
													$mdgriffith$elm_ui$Element$el,
													_List_fromArray(
														[$mdgriffith$elm_ui$Element$Font$bold]),
													$mdgriffith$elm_ui$Element$text(']'))
												]));
									});
								return A2(
									$mdgriffith$elm_ui$Element$row,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$spacing(10)
										]),
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Font$bold,
													$mdgriffith$elm_ui$Element$Font$color(
													A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 1))
												]),
											$mdgriffith$elm_ui$Element$text(
												function () {
													switch (instructionKind.$) {
														case 'LabelKind':
															return 'Label';
														case 'OperationApplicationKind':
															return 'OperationApplication';
														case 'AssignmentKind':
															return 'Assignment';
														case 'JumpKind':
															return 'Jump';
														case 'JumpIfKind':
															return 'JumpIf';
														case 'PushKind':
															return 'Push';
														default:
															return 'Halt';
													}
												}())),
											function () {
											switch (instructionValidity.$) {
												case 'EveryNodeIsValid':
													return A2(
														$mdgriffith$elm_ui$Element$el,
														_List_fromArray(
															[
																$mdgriffith$elm_ui$Element$Font$color(
																A3($mdgriffith$elm_ui$Element$rgb, 0, 1, 0))
															]),
														$mdgriffith$elm_ui$Element$text('all-valid'));
												case 'ContainsErrorNodes':
													return A2(
														$mdgriffith$elm_ui$Element$el,
														_List_fromArray(
															[
																$mdgriffith$elm_ui$Element$Font$color(
																A3($mdgriffith$elm_ui$Element$rgb, 1, 0, 0))
															]),
														$mdgriffith$elm_ui$Element$text('has-errors'));
												case 'ContainsUnfinishedNodes':
													return $mdgriffith$elm_ui$Element$text('unfinished');
												default:
													var expected = instructionValidity.a.expected;
													var received = instructionValidity.a.received;
													return $mdgriffith$elm_ui$Element$text(
														$elm$core$String$concat(
															_List_fromArray(
																[
																	'wrong-arity(expected ',
																	function () {
																	if (expected.$ === 'Atleast') {
																		var x = expected.a;
																		return 'atleast' + $elm$core$String$fromInt(x);
																	} else {
																		var x = expected.a;
																		return 'exactly' + $elm$core$String$fromInt(x);
																	}
																}(),
																	' received ',
																	$elm$core$String$fromInt(received),
																	')'
																])));
											}
										}(),
											A2(
											$mdgriffith$elm_ui$Element$row,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$spacing(10)
												]),
											A2(
												$elm$core$List$intersperse,
												A2(
													$mdgriffith$elm_ui$Element$el,
													_List_Nil,
													$mdgriffith$elm_ui$Element$text(',')),
												$elm$core$List$concat(
													_List_fromArray(
														[
															A2(
															$elm$core$List$map,
															viewDebuggedNode(false),
															$elm$core$List$reverse(revLeftNodes)),
															_List_fromArray(
															[
																A2(viewDebuggedNode, true, selectedNode)
															]),
															A2(
															$elm$core$List$map,
															viewDebuggedNode(false),
															rightNodes)
														]))))
										]));
							case 'Halt':
								return _Debug_todo(
									'RegisterMachine.Ui.Editor',
									{
										start: {line: 913, column: 33},
										end: {line: 913, column: 43}
									})('');
							default:
								var verticalDirection = instruction.a;
								return _Debug_todo(
									'RegisterMachine.Ui.Editor',
									{
										start: {line: 916, column: 33},
										end: {line: 916, column: 43}
									})('');
						}
					},
					$elm$core$List$reverse(model.debugConsole.instructionsRev)))
			]));
};
var $author$project$Lib$ZipList$mapToTaggedList = function (_v0) {
	var revLeft0 = _v0.a;
	var x0 = _v0.b;
	var right0 = _v0.c;
	var tagAsSelected = function (x) {
		return _Utils_Tuple2(true, x);
	};
	var tagAsNotSelected = function (x) {
		return _Utils_Tuple2(false, x);
	};
	return _Utils_ap(
		A2(
			$elm$core$List$map,
			tagAsNotSelected,
			$elm$core$List$reverse(revLeft0)),
		A2(
			$elm$core$List$cons,
			tagAsSelected(x0),
			A2($elm$core$List$map, tagAsNotSelected, right0)));
};
var $mdgriffith$elm_ui$Element$Font$heavy = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.textHeavy);
var $author$project$RegisterMachine$Ui$Editor$viewKeyword = function (name) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[$mdgriffith$elm_ui$Element$Font$heavy]),
		$mdgriffith$elm_ui$Element$text(name));
};
var $author$project$RegisterMachine$Ui$Editor$viewInstruction = F3(
	function (_v0, instructionMode, instruction) {
		var isInstructionSelected = _v0.isInstructionSelected;
		var isNodeSelected = _v0.isNodeSelected;
		var viewBareInstruction = function (nodeMode) {
			switch (instruction.$) {
				case 'Halt':
					return $author$project$RegisterMachine$Ui$Editor$viewKeyword('Halt');
				case 'FutureInstruction':
					return $author$project$RegisterMachine$Ui$Editor$viewKeyword('---should not be ever displayed---');
				default:
					var kind = instruction.a;
					var nodes = instruction.b;
					var validation = instruction.c;
					switch (kind.$) {
						case 'LabelKind':
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_Nil,
								_List_fromArray(
									[
										$author$project$RegisterMachine$Ui$Editor$viewKeyword('label '),
										A4(
										$author$project$RegisterMachine$Ui$Editor$viewNode,
										isNodeSelected,
										isInstructionSelected,
										nodeMode,
										$author$project$Lib$ZipList$current(nodes)),
										$author$project$RegisterMachine$Ui$Editor$viewKeyword(':')
									]));
						case 'OperationApplicationKind':
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_Nil,
								function () {
									var _v4 = $author$project$Lib$ZipList$mapToTaggedList(nodes);
									if (_v4.b && _v4.b.b) {
										var _v5 = _v4.a;
										var isSourceSelected = _v5.a;
										var source = _v5.b;
										var _v6 = _v4.b;
										var _v7 = _v6.a;
										var isOperationNameSelected = _v7.a;
										var operationName = _v7.b;
										var _arguments = _v6.b;
										return $elm$core$List$concat(
											_List_fromArray(
												[
													_List_fromArray(
													[
														A4($author$project$RegisterMachine$Ui$Editor$viewNode, isSourceSelected && isNodeSelected, isInstructionSelected, nodeMode, source),
														$author$project$RegisterMachine$Ui$Editor$viewKeyword(' <- '),
														A4($author$project$RegisterMachine$Ui$Editor$viewNode, isOperationNameSelected && isNodeSelected, isInstructionSelected, nodeMode, operationName),
														$author$project$RegisterMachine$Ui$Editor$viewKeyword('(')
													]),
													A2(
													$elm$core$List$intersperse,
													$author$project$RegisterMachine$Ui$Editor$viewKeyword(', '),
													A2(
														$elm$core$List$map,
														function (_v8) {
															var isArgSelected = _v8.a;
															var arg = _v8.b;
															return A4($author$project$RegisterMachine$Ui$Editor$viewNode, isArgSelected && isNodeSelected, isInstructionSelected, nodeMode, arg);
														},
														_arguments)),
													_List_fromArray(
													[
														$author$project$RegisterMachine$Ui$Editor$viewKeyword(')')
													])
												]));
									} else {
										return _List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('error when viewing OperationApplicationKind')
											]);
									}
								}());
						case 'AssignmentKind':
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_Nil,
								function () {
									var _v9 = $author$project$Lib$ZipList$mapToTaggedList(nodes);
									if ((_v9.b && _v9.b.b) && (!_v9.b.b.b)) {
										var _v10 = _v9.a;
										var isSourceSelected = _v10.a;
										var source = _v10.b;
										var _v11 = _v9.b;
										var _v12 = _v11.a;
										var isTargetSelected = _v12.a;
										var target = _v12.b;
										return _List_fromArray(
											[
												A4($author$project$RegisterMachine$Ui$Editor$viewNode, isSourceSelected && isNodeSelected, isInstructionSelected, nodeMode, source),
												$author$project$RegisterMachine$Ui$Editor$viewKeyword(' <- '),
												A4($author$project$RegisterMachine$Ui$Editor$viewNode, isTargetSelected && isNodeSelected, isInstructionSelected, nodeMode, target)
											]);
									} else {
										return _List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('error when viewing AssignmentKind')
											]);
									}
								}());
						case 'JumpKind':
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_Nil,
								function () {
									var _v13 = $author$project$Lib$ZipList$mapToTaggedList(nodes);
									if (_v13.b && (!_v13.b.b)) {
										var _v14 = _v13.a;
										var isArgSelected = _v14.a;
										var arg = _v14.b;
										return _List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('jump '),
												A4($author$project$RegisterMachine$Ui$Editor$viewNode, isArgSelected && isNodeSelected, isInstructionSelected, nodeMode, arg)
											]);
									} else {
										return _List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('error when viewing JumpKind')
											]);
									}
								}());
						case 'JumpIfKind':
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_Nil,
								function () {
									var _v15 = $author$project$Lib$ZipList$mapToTaggedList(nodes);
									if ((_v15.b && _v15.b.b) && (!_v15.b.b.b)) {
										var _v16 = _v15.a;
										var isTestSelected = _v16.a;
										var test = _v16.b;
										var _v17 = _v15.b;
										var _v18 = _v17.a;
										var isArgSelected = _v18.a;
										var arg = _v18.b;
										return _List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('if '),
												A4($author$project$RegisterMachine$Ui$Editor$viewNode, isTestSelected && isNodeSelected, isInstructionSelected, nodeMode, test),
												$author$project$RegisterMachine$Ui$Editor$viewKeyword(' jump '),
												A4($author$project$RegisterMachine$Ui$Editor$viewNode, isArgSelected && isNodeSelected, isInstructionSelected, nodeMode, arg)
											]);
									} else {
										return _List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('error when viewing JumpIfKind')
											]);
									}
								}());
						case 'HaltKind':
							return $author$project$RegisterMachine$Ui$Editor$viewKeyword('Halt');
						default:
							return A2(
								$mdgriffith$elm_ui$Element$row,
								_List_Nil,
								function () {
									var _v19 = $author$project$Lib$ZipList$mapToTaggedList(nodes);
									if (_v19.b && (!_v19.b.b)) {
										var _v20 = _v19.a;
										var isArgSelected = _v20.a;
										var arg = _v20.b;
										return _List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('push '),
												A4($author$project$RegisterMachine$Ui$Editor$viewNode, isArgSelected && isNodeSelected, isInstructionSelected, nodeMode, arg)
											]);
									} else {
										return _List_fromArray(
											[
												$mdgriffith$elm_ui$Element$text('error when viewing JumpKind')
											]);
									}
								}());
					}
			}
		};
		switch (instructionMode.$) {
			case 'InsertingInstruction':
				return isInstructionSelected ? A2(
					$mdgriffith$elm_ui$Element$column,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_Nil,
							A2(
								$elm$core$List$intersperse,
								$mdgriffith$elm_ui$Element$text(' '),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('q:'),
												$mdgriffith$elm_ui$Element$text('label')
											])),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('w:'),
												$mdgriffith$elm_ui$Element$text('jump')
											])),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('e:'),
												$mdgriffith$elm_ui$Element$text('if-jump')
											]))
									]))),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_Nil,
							A2(
								$elm$core$List$intersperse,
								$mdgriffith$elm_ui$Element$text(' '),
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('a:'),
												$mdgriffith$elm_ui$Element$text('apply')
											])),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('s:'),
												$mdgriffith$elm_ui$Element$text('assign')
											])),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('d:'),
												$mdgriffith$elm_ui$Element$text('push')
											])),
										A2(
										$mdgriffith$elm_ui$Element$row,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$RegisterMachine$Ui$Editor$viewKeyword('f:'),
												$mdgriffith$elm_ui$Element$text('halt')
											]))
									])))
						])) : viewBareInstruction($author$project$RegisterMachine$Ui$Editor$TraversingNodes);
			case 'TraversingInstructions':
				var nodeMode = instructionMode.a;
				return viewBareInstruction(nodeMode);
			default:
				return viewBareInstruction($author$project$RegisterMachine$Ui$Editor$TraversingNodes);
		}
	});
var $mdgriffith$elm_ui$Element$Border$widthXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$borderWidth,
			A5(
				$mdgriffith$elm_ui$Internal$Model$BorderWidth,
				'b-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var $mdgriffith$elm_ui$Element$Border$widthEach = function (_v0) {
	var bottom = _v0.bottom;
	var top = _v0.top;
	var left = _v0.left;
	var right = _v0.right;
	return (_Utils_eq(top, bottom) && _Utils_eq(left, right)) ? (_Utils_eq(top, right) ? $mdgriffith$elm_ui$Element$Border$width(top) : A2($mdgriffith$elm_ui$Element$Border$widthXY, left, top)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left))))))),
			top,
			right,
			bottom,
			left));
};
var $author$project$RegisterMachine$Ui$Editor$viewFragmentBoard = function (_v0) {
	var fragmentBoard = _v0.fragmentBoard;
	var viewFragment = function (fragment) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_Nil,
			A2(
				$elm$core$List$map,
				A2(
					$author$project$RegisterMachine$Ui$Editor$viewInstruction,
					{isInstructionSelected: false, isNodeSelected: false},
					$author$project$RegisterMachine$Ui$Editor$TraversingInstructions($author$project$RegisterMachine$Ui$Editor$TraversingNodes)),
				$mgold$elm_nonempty_list$List$Nonempty$toList(fragment)));
	};
	if (fragmentBoard.$ === 'EmptyBoard') {
		return $mdgriffith$elm_ui$Element$text('');
	} else {
		var fragments = fragmentBoard.a;
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(15)
				]),
			A2(
				$author$project$Lib$ZipList$mapToList,
				{
					current: function (currentFragment) {
						return A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Border$solid,
									$mdgriffith$elm_ui$Element$Border$widthEach(
									{bottom: 0, left: 1, right: 0, top: 0})
								]),
							viewFragment(currentFragment));
					},
					others: function (fragment) {
						return A2(
							$mdgriffith$elm_ui$Element$el,
							_List_Nil,
							viewFragment(fragment));
					}
				},
				fragments));
	}
};
var $author$project$RegisterMachine$Ui$Editor$view = function (model) {
	var instructions = model.instructions;
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_Nil,
		_List_fromArray(
			[
				function () {
				var _v0 = model.instructionMode;
				switch (_v0.$) {
					case 'TraversingInstructions':
						var nodeMode = _v0.a;
						if (nodeMode.$ === 'TraversingNodes') {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text('Moving'));
						} else {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text('Editing'));
						}
					case 'InsertingInstruction':
						return A2(
							$mdgriffith$elm_ui$Element$el,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('Inserting'));
					default:
						return A2(
							$mdgriffith$elm_ui$Element$el,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('Selecting'));
				}
			}(),
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_Nil,
				function () {
					var bgColor = A3($mdgriffith$elm_ui$Element$rgb255, 215, 215, 215);
					var _v2 = model.instructionMode;
					if (_v2.$ === 'SelectingInstructions') {
						var _v3 = model.selectedInstructions;
						if (_v3.$ === 'Just') {
							var instructionSelection = _v3.a;
							return A2(
								$author$project$Lib$ZipListSelection$mapToList,
								{
									current: function (instruction) {
										return A2(
											$mdgriffith$elm_ui$Element$el,
											_List_fromArray(
												[
													$mdgriffith$elm_ui$Element$Background$color(bgColor)
												]),
											A3(
												$author$project$RegisterMachine$Ui$Editor$viewInstruction,
												{isInstructionSelected: true, isNodeSelected: false},
												model.instructionMode,
												instruction));
									},
									others: function (instruction) {
										return A2(
											$mdgriffith$elm_ui$Element$el,
											_List_Nil,
											A3(
												$author$project$RegisterMachine$Ui$Editor$viewInstruction,
												{isInstructionSelected: false, isNodeSelected: false},
												model.instructionMode,
												instruction));
									}
								},
								instructionSelection);
						} else {
							return _List_fromArray(
								[
									$author$project$RegisterMachine$Ui$Editor$viewKeyword('---should not be ever displayed---')
								]);
						}
					} else {
						return A2(
							$author$project$Lib$ZipList$mapToList,
							{
								current: function (instruction) {
									return A2(
										$mdgriffith$elm_ui$Element$el,
										_List_fromArray(
											[
												$mdgriffith$elm_ui$Element$Background$color(bgColor)
											]),
										A3(
											$author$project$RegisterMachine$Ui$Editor$viewInstruction,
											{isInstructionSelected: true, isNodeSelected: true},
											model.instructionMode,
											instruction));
								},
								others: function (instruction) {
									return A2(
										$mdgriffith$elm_ui$Element$el,
										_List_Nil,
										A3(
											$author$project$RegisterMachine$Ui$Editor$viewInstruction,
											{isInstructionSelected: false, isNodeSelected: false},
											model.instructionMode,
											instruction));
								}
							},
							instructions);
					}
				}()),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$text('===Fragment Board===')),
				$author$project$RegisterMachine$Ui$Editor$viewFragmentBoard(model),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$text('===Debugging===')),
				$author$project$RegisterMachine$Ui$Editor$viewDebuggingConsole(model)
			]));
};
var $author$project$Ui$Tab$RegisterMachine$Label = function (a) {
	return {$: 'Label', a: a};
};
var $author$project$Ui$Tab$RegisterMachine$Perform = F2(
	function (a, b) {
		return {$: 'Perform', a: a, b: b};
	});
var $author$project$Ui$Tab$RegisterMachine$viewConstant = function (_const) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_Nil,
		_List_fromArray(
			[
				function () {
				if (_const.$ === 'Num') {
					var x = _const.a;
					return $mdgriffith$elm_ui$Element$text(
						$elm$core$String$fromInt(x));
				} else {
					return $mdgriffith$elm_ui$Element$text('nil');
				}
			}()
			]));
};
var $author$project$Ui$Tab$RegisterMachine$viewInstructions = F2(
	function (instructionPointer, instructionBlock) {
		var viewRegisterName = function (name) {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 0, 56, 186))
					]),
				$mdgriffith$elm_ui$Element$text(name));
		};
		var viewRegisterUse = function (name) {
			return viewRegisterName('$' + name);
		};
		var viewOperationUse = F2(
			function (name, args) {
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text(name)),
							$mdgriffith$elm_ui$Element$text('('),
							A2(
							$mdgriffith$elm_ui$Element$row,
							_List_Nil,
							A2(
								$elm$core$List$intersperse,
								$mdgriffith$elm_ui$Element$text(', '),
								args)),
							$mdgriffith$elm_ui$Element$text(')')
						]));
			});
		var viewOperationArgument = function (argument) {
			if (argument.$ === 'Register') {
				var register = argument.a;
				return viewRegisterUse(register);
			} else {
				var val = argument.a;
				return $author$project$Ui$Tab$RegisterMachine$viewConstant(val);
			}
		};
		var viewOperationApplication = F2(
			function (opName, _arguments) {
				return A2(
					viewOperationUse,
					opName,
					A2($elm$core$List$map, viewOperationArgument, _arguments));
			});
		var viewLabel = function (label) {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color(
						A3($mdgriffith$elm_ui$Element$rgb255, 239, 151, 0))
					]),
				$mdgriffith$elm_ui$Element$text(label));
		};
		var viewLabelIntroduction = function (label) {
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(8)
					]),
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$text('label '),
						A2(
						$mdgriffith$elm_ui$Element$row,
						_List_Nil,
						_List_fromArray(
							[
								viewLabel(label)
							]))
					]));
		};
		var viewLabelUse = function (label) {
			return viewLabel(':' + label);
		};
		var viewInstructionName = function (name) {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$Font$heavy]),
				$mdgriffith$elm_ui$Element$text(name));
		};
		var paddingLeft = function (px) {
			return $mdgriffith$elm_ui$Element$paddingEach(
				{bottom: 0, left: px, right: 0, top: 0});
		};
		var viewInstruction = F2(
			function (isFocused, instruction) {
				return A2(
					$mdgriffith$elm_ui$Element$row,
					$elm$core$List$concat(
						_List_fromArray(
							[
								_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spacing(8),
									paddingLeft(20)
								]),
								isFocused ? _List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 215, 215, 215))
								]) : _List_Nil
							])),
					function () {
						switch (instruction.$) {
							case 'AssignRegister':
								var target = instruction.a;
								var source = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										viewRegisterUse(source)
									]);
							case 'AssignLabel':
								var target = instruction.a;
								var label = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										viewLabelUse(label)
									]);
							case 'AssignOperation':
								var target = instruction.a;
								var _v4 = instruction.b;
								var opName = _v4.a;
								var args = _v4.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										A2(viewOperationApplication, opName, args)
									]);
							case 'AssignConstant':
								var target = instruction.a;
								var x = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										$author$project$Ui$Tab$RegisterMachine$viewConstant(x)
									]);
							case 'JumpToLabel':
								var label = instruction.a;
								return _List_fromArray(
									[
										viewInstructionName('jump'),
										viewLabelUse(label)
									]);
							case 'JumpToLabelAtRegister':
								var target = instruction.a;
								return _List_fromArray(
									[
										viewInstructionName('jump'),
										viewRegisterUse(target)
									]);
							case 'JumpToLabelIf':
								var testRegister = instruction.a;
								var label = instruction.b;
								return _List_fromArray(
									[
										viewInstructionName('if'),
										viewRegisterUse(testRegister),
										viewInstructionName('jump'),
										viewLabelUse(label)
									]);
							case 'JumpToLabelAtRegisterIf':
								var testRegister = instruction.a;
								var target = instruction.b;
								return _List_fromArray(
									[
										viewInstructionName('if'),
										viewRegisterUse(testRegister),
										viewInstructionName('jump'),
										viewRegisterUse(target)
									]);
							case 'Halt':
								return _List_fromArray(
									[
										viewInstructionName('halt')
									]);
							case 'PushRegister':
								var register = instruction.a;
								return _List_fromArray(
									[
										viewInstructionName('push'),
										viewRegisterUse(register)
									]);
							case 'PushConstant':
								var val = instruction.a;
								return _List_fromArray(
									[
										viewInstructionName('push'),
										$author$project$Ui$Tab$RegisterMachine$viewConstant(val)
									]);
							case 'PushLabel':
								var label = instruction.a;
								return _List_fromArray(
									[
										viewInstructionName('push'),
										viewLabelUse(label)
									]);
							case 'Pop':
								var target = instruction.a;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										viewInstructionName('pop-stack')
									]);
							case 'AssignCallAtLabel':
								var target = instruction.a;
								var label = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										viewInstructionName('call'),
										viewLabelUse(label)
									]);
							case 'AssignCallAtRegister':
								var target = instruction.a;
								var labelRegister = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										viewInstructionName('call'),
										viewRegisterUse(labelRegister)
									]);
							case 'ConstructPair':
								var target = instruction.a;
								var arg0 = instruction.b;
								var arg1 = instruction.c;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										A2(
										viewOperationApplication,
										'pair',
										_List_fromArray(
											[arg0, arg1]))
									]);
							case 'First':
								var target = instruction.a;
								var source = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										A2(
										viewOperationApplication,
										'first',
										_List_fromArray(
											[
												$author$project$RegisterMachine$Base$Register(source)
											]))
									]);
							case 'Second':
								var target = instruction.a;
								var source = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										A2(
										viewOperationApplication,
										'second',
										_List_fromArray(
											[
												$author$project$RegisterMachine$Base$Register(source)
											]))
									]);
							case 'SetFirst':
								var register = instruction.a;
								var arg = instruction.b;
								return _List_fromArray(
									[
										viewInstructionName('set-first'),
										viewRegisterName(register),
										viewOperationArgument(arg)
									]);
							case 'SetSecond':
								var register = instruction.a;
								var arg = instruction.b;
								return _List_fromArray(
									[
										viewInstructionName('set-second'),
										viewRegisterName(register),
										viewOperationArgument(arg)
									]);
							case 'DualFirst':
								var target = instruction.a;
								var source = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										A2(
										viewOperationApplication,
										'dual-first',
										_List_fromArray(
											[
												$author$project$RegisterMachine$Base$Register(source)
											]))
									]);
							case 'DualSecond':
								var target = instruction.a;
								var source = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										A2(
										viewOperationApplication,
										'dual-second',
										_List_fromArray(
											[
												$author$project$RegisterMachine$Base$Register(source)
											]))
									]);
							case 'DualSetFirst':
								var register = instruction.a;
								var arg = instruction.b;
								return _List_fromArray(
									[
										viewInstructionName('dual-set-first'),
										viewRegisterName(register),
										viewOperationArgument(arg)
									]);
							case 'DualSetSecond':
								var register = instruction.a;
								var arg = instruction.b;
								return _List_fromArray(
									[
										viewInstructionName('dual-set-second'),
										viewRegisterName(register),
										viewOperationArgument(arg)
									]);
							case 'MoveToDual':
								var target = instruction.a;
								var source = instruction.b;
								return _List_fromArray(
									[
										viewRegisterName(target),
										viewInstructionName('<-'),
										A2(
										viewOperationApplication,
										'move-to-dual',
										_List_fromArray(
											[
												$author$project$RegisterMachine$Base$Register(source)
											]))
									]);
							case 'MarkAsMoved':
								var toBeCollected = instruction.a;
								var referenceToDualMemory = instruction.b;
								return _List_fromArray(
									[
										viewInstructionName('mark'),
										viewRegisterUse(toBeCollected),
										viewInstructionName('as-moved-to'),
										viewRegisterUse(referenceToDualMemory)
									]);
							default:
								return _List_fromArray(
									[
										viewInstructionName('swap-memory')
									]);
						}
					}());
			});
		var convertInstructionBlock = function (instructions) {
			var update0 = F2(
				function (labelOrInstruction, _v2) {
					var position = _v2.a;
					var newInstructions = _v2.b;
					if (labelOrInstruction.$ === 'Label') {
						var label = labelOrInstruction.a;
						return _Utils_Tuple2(
							position,
							A2(
								$elm$core$List$cons,
								$author$project$Ui$Tab$RegisterMachine$Label(label),
								newInstructions));
					} else {
						var instruction = labelOrInstruction.a;
						return _Utils_Tuple2(
							position + 1,
							A2(
								$elm$core$List$cons,
								A2($author$project$Ui$Tab$RegisterMachine$Perform, position, instruction),
								newInstructions));
					}
				});
			return $elm$core$List$reverse(
				A3(
					$elm$core$List$foldl,
					update0,
					_Utils_Tuple2(0, _List_Nil),
					instructions).b);
		};
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			A2(
				$elm$core$List$map,
				function (labelOrInstruction) {
					if (labelOrInstruction.$ === 'Label') {
						var label = labelOrInstruction.a;
						return viewLabelIntroduction(label);
					} else {
						var position = labelOrInstruction.a;
						var instruction = labelOrInstruction.b;
						return A2(
							viewInstruction,
							_Utils_eq(instructionPointer, position),
							instruction);
					}
				},
				convertInstructionBlock(instructionBlock)));
	});
var $author$project$Ui$Tab$RegisterMachine$ShiftMemoryViewBy = function (a) {
	return {$: 'ShiftMemoryViewBy', a: a};
};
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$core$Array$toIndexedList = function (array) {
	var len = array.a;
	var helper = F2(
		function (entry, _v0) {
			var index = _v0.a;
			var list = _v0.b;
			return _Utils_Tuple2(
				index - 1,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(index, entry),
					list));
		});
	return A3(
		$elm$core$Array$foldr,
		helper,
		_Utils_Tuple2(len - 1, _List_Nil),
		array).b;
};
var $author$project$Ui$Tab$RegisterMachine$MemoryAddressClicked = function (a) {
	return {$: 'MemoryAddressClicked', a: a};
};
var $author$project$Ui$Tab$RegisterMachine$viewMemoryAddress = function (p) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Events$onClick(
				$author$project$Ui$Tab$RegisterMachine$MemoryAddressClicked(p)),
				$mdgriffith$elm_ui$Element$pointer
			]),
		$mdgriffith$elm_ui$Element$text(
			$elm$core$String$concat(
				_List_fromArray(
					[
						'#',
						$elm$core$String$fromInt(p)
					]))));
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
var $author$project$Ui$Tab$RegisterMachine$viewInstructionAddress = function (pointer) {
	return $mdgriffith$elm_ui$Element$text(
		$elm$core$String$concat(
			_List_fromArray(
				[
					':',
					$elm$core$String$fromInt(pointer)
				])));
};
var $author$project$Ui$Tab$RegisterMachine$viewValue = F2(
	function (value, model) {
		switch (value.$) {
			case 'ConstantValue':
				var constant = value.a;
				return $author$project$Ui$Tab$RegisterMachine$viewConstant(constant);
			case 'Pair':
				var memoryAddress = value.a;
				return $author$project$Ui$Tab$RegisterMachine$viewMemoryAddress(memoryAddress);
			case 'InstructionAddress':
				var instructionAddress = value.a;
				return $author$project$Ui$Tab$RegisterMachine$viewInstructionAddress(instructionAddress);
			case 'Uninitialized':
				return $mdgriffith$elm_ui$Element$text('');
			default:
				return $mdgriffith$elm_ui$Element$text('Moved');
		}
	});
var $author$project$Ui$Tab$RegisterMachine$viewMemoryCell = F3(
	function (memoryAddress, _v0, model) {
		var a = _v0.a;
		var b = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$solid,
					$mdgriffith$elm_ui$Element$Border$width(1),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(70))
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$column,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$centerX,
							A2($mdgriffith$elm_ui$Element$paddingXY, 0, 15),
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(50)),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							A2($author$project$Ui$Tab$RegisterMachine$viewValue, a, model),
							A2($author$project$Ui$Tab$RegisterMachine$viewValue, b, model)
						])),
					A2(
					$mdgriffith$elm_ui$Element$el,
					$elm$core$List$concat(
						_List_fromArray(
							[
								_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$centerX,
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0)),
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
								_Utils_eq(model.currentlyHighlightedCell, memoryAddress) ? _List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 255, 0, 0))
								]) : _List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255))
								])
							])),
					$mdgriffith$elm_ui$Element$text(
						$elm$core$String$concat(
							_List_fromArray(
								[
									'#',
									$elm$core$String$fromInt(memoryAddress)
								]))))
				]));
	});
var $author$project$Ui$Tab$RegisterMachine$viewMemoryState = F2(
	function (memoryState, model) {
		var viewMemorySegment = F2(
			function (a, b) {
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					A2(
						$elm$core$List$map,
						function (_v0) {
							var i = _v0.a;
							var memoryCell = _v0.b;
							return A3($author$project$Ui$Tab$RegisterMachine$viewMemoryCell, i + a, memoryCell, model);
						},
						$elm$core$Array$toIndexedList(
							A3($elm$core$Array$slice, a, b + 1, memoryState.memory))));
			});
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text('Next free address: '),
							$author$project$Ui$Tab$RegisterMachine$viewMemoryAddress(memoryState.nextFreePointer)
						])),
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							$author$project$Ui$Style$Button$buttonStyle,
							{
								label: $mdgriffith$elm_ui$Element$text('-1'),
								onPress: $elm$core$Maybe$Just(
									$author$project$Ui$Tab$RegisterMachine$ShiftMemoryViewBy(-1))
							}),
							A2(
							$mdgriffith$elm_ui$Element$Input$button,
							$author$project$Ui$Style$Button$buttonStyle,
							{
								label: $mdgriffith$elm_ui$Element$text('+1'),
								onPress: $elm$core$Maybe$Just(
									$author$project$Ui$Tab$RegisterMachine$ShiftMemoryViewBy(1))
							})
						])),
					A2(viewMemorySegment, model.memoryView.bottom, model.memoryView.top)
				]));
	});
var $author$project$Ui$Tab$RegisterMachine$viewRegisters = F2(
	function (registers, model) {
		var registerStyle = _List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 240, 0, 245)),
				$mdgriffith$elm_ui$Element$padding(20)
			]);
		var viewRegister = F2(
			function (name, val) {
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spacing(10)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width(
									$mdgriffith$elm_ui$Element$px(230))
								]),
							$mdgriffith$elm_ui$Element$text(name)),
							$mdgriffith$elm_ui$Element$text('<-'),
							A2(
							$mdgriffith$elm_ui$Element$el,
							registerStyle,
							A2($author$project$Ui$Tab$RegisterMachine$viewValue, val, model))
						]));
			});
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$spacing(5)
				]),
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var val = _v0.b;
					return A2(viewRegister, name, val);
				},
				registers));
	});
var $author$project$RegisterMachine$Stack$toList = function (stack) {
	return stack;
};
var $author$project$Ui$Tab$RegisterMachine$viewStack = F2(
	function (stack, model) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			A2(
				$elm$core$List$map,
				function (val) {
					return A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Border$width(1),
								$mdgriffith$elm_ui$Element$Border$solid,
								A2($mdgriffith$elm_ui$Element$paddingXY, 0, 15),
								$mdgriffith$elm_ui$Element$width(
								$mdgriffith$elm_ui$Element$px(50))
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$centerX,
										$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
									]),
								A2($author$project$Ui$Tab$RegisterMachine$viewValue, val, model))
							]));
				},
				$elm$core$List$reverse(
					$author$project$RegisterMachine$Stack$toList(stack))));
	});
var $author$project$Ui$Tab$RegisterMachine$view = F2(
	function (config, model) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$spacing(15)
				]),
			_List_fromArray(
				[
					$author$project$Ui$Tab$RegisterMachine$shouldDisplayEditor ? A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Border$width(1),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					A2(
						$mdgriffith$elm_ui$Element$map,
						$author$project$Ui$Tab$RegisterMachine$EditorMsg,
						$author$project$RegisterMachine$Ui$Editor$view(model.editorModel))) : $mdgriffith$elm_ui$Element$text(''),
					A3($PaackEng$elm_ui_dropdown$Dropdown$view, $author$project$Ui$Tab$RegisterMachine$dropdownConfig, model, model.controllerDropdownModel),
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$spacing(30)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignTop
								]),
							_List_fromArray(
								[
									function () {
									var _v0 = model.maybeRuntime;
									if (_v0.$ === 'Nothing') {
										return $mdgriffith$elm_ui$Element$text('');
									} else {
										if (_v0.a.$ === 'Err') {
											var runtimeError = _v0.a.a;
											return $mdgriffith$elm_ui$Element$text(
												$author$project$Ui$Tab$RegisterMachine$runTimeErrorToString(runtimeError));
										} else {
											var machine = _v0.a.a;
											var _v1 = model.selectedController;
											if (_v1.$ === 'Just') {
												var controllerExample = _v1.a;
												return A2(
													$mdgriffith$elm_ui$Element$column,
													_List_Nil,
													_List_fromArray(
														[
															$author$project$Ui$Tab$RegisterMachine$heading('Controller'),
															A2($author$project$Ui$Tab$RegisterMachine$viewInstructions, machine.instructionPointer, controllerExample.controller.instructions)
														]));
											} else {
												return $mdgriffith$elm_ui$Element$text('');
											}
										}
									}
								}()
								])),
							A2(
							$mdgriffith$elm_ui$Element$column,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignTop
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$row,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$mdgriffith$elm_ui$Element$Input$button,
											$author$project$Ui$Style$Button$buttonStyle,
											{
												label: $mdgriffith$elm_ui$Element$text('Reset'),
												onPress: $elm$core$Maybe$Just($author$project$Ui$Tab$RegisterMachine$Reset)
											}),
											A2(
											$mdgriffith$elm_ui$Element$Input$button,
											$author$project$Ui$Style$Button$buttonStyle,
											{
												label: $mdgriffith$elm_ui$Element$text('Start'),
												onPress: $elm$core$Maybe$Just($author$project$Ui$Tab$RegisterMachine$Start)
											}),
											A2(
											$mdgriffith$elm_ui$Element$Input$button,
											$author$project$Ui$Style$Button$buttonStyle,
											{
												label: $mdgriffith$elm_ui$Element$text('Run one step'),
												onPress: $elm$core$Maybe$Just($author$project$Ui$Tab$RegisterMachine$RunOneStep)
											})
										])),
									function () {
									var _v2 = model.maybeRuntime;
									if (_v2.$ === 'Nothing') {
										return $mdgriffith$elm_ui$Element$text('');
									} else {
										if (_v2.a.$ === 'Err') {
											var runtimeError = _v2.a.a;
											return $mdgriffith$elm_ui$Element$text(
												$author$project$Ui$Tab$RegisterMachine$runTimeErrorToString(runtimeError));
										} else {
											var machine = _v2.a.a;
											return A2(
												$mdgriffith$elm_ui$Element$column,
												_List_fromArray(
													[
														$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
														$mdgriffith$elm_ui$Element$spacing(20)
													]),
												_List_fromArray(
													[
														A2(
														$mdgriffith$elm_ui$Element$column,
														_List_Nil,
														_List_fromArray(
															[
																$author$project$Ui$Tab$RegisterMachine$heading('Registers'),
																A2(
																$author$project$Ui$Tab$RegisterMachine$viewRegisters,
																$elm$core$Dict$toList(machine.env),
																model)
															])),
														A2(
														$mdgriffith$elm_ui$Element$column,
														_List_Nil,
														_List_fromArray(
															[
																$author$project$Ui$Tab$RegisterMachine$heading('Memory'),
																A2(
																$author$project$Ui$Tab$RegisterMachine$viewMemoryState,
																A2($author$project$RegisterMachine$Machine$currentMemoryState, $author$project$RegisterMachine$Machine$Main, machine),
																model)
															])),
														A2(
														$mdgriffith$elm_ui$Element$column,
														_List_Nil,
														_List_fromArray(
															[
																$author$project$Ui$Tab$RegisterMachine$heading('Dual Memory'),
																A2(
																$author$project$Ui$Tab$RegisterMachine$viewMemoryState,
																A2($author$project$RegisterMachine$Machine$currentMemoryState, $author$project$RegisterMachine$Machine$Dual, machine),
																model)
															])),
														A2(
														$mdgriffith$elm_ui$Element$column,
														_List_Nil,
														_List_fromArray(
															[
																$author$project$Ui$Tab$RegisterMachine$heading('Stack'),
																A2($author$project$Ui$Tab$RegisterMachine$viewStack, machine.stack, model)
															]))
													]));
										}
									}
								}()
								]))
						]))
				]));
	});
var $author$project$Ui$Main$view = F2(
	function (config, model) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$padding(10)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					A2(
						$elm$core$List$map,
						function (tab) {
							return A2(
								$mdgriffith$elm_ui$Element$Input$button,
								$author$project$Ui$Style$Button$buttonStyle,
								{
									label: $mdgriffith$elm_ui$Element$text(
										$author$project$Ui$Main$tabToString(tab)),
									onPress: $elm$core$Maybe$Just(
										$author$project$Ui$Main$ChangeTab(tab))
								});
						},
						$author$project$Ui$Main$tabs)),
					function () {
					var _v0 = model.tab;
					switch (_v0.$) {
						case 'ProgramTab':
							return A2(
								$mdgriffith$elm_ui$Element$map,
								$author$project$Ui$Main$ProgramMsg,
								A2($author$project$Ui$Tab$Program$view, config, model.programModel));
						case 'ModuleTab':
							return A2(
								$mdgriffith$elm_ui$Element$map,
								$author$project$Ui$Main$ModuleMsg,
								A2($author$project$Ui$Tab$Module$view, config, model.moduleModel));
						case 'HelpTab':
							return A2(
								$mdgriffith$elm_ui$Element$map,
								$author$project$Ui$Main$HelpMsg,
								A2($author$project$Ui$Tab$Help$view, config, model.helpModel));
						default:
							return A2(
								$mdgriffith$elm_ui$Element$map,
								$author$project$Ui$Main$RegisterMachineMsg,
								A2($author$project$Ui$Tab$RegisterMachine$view, config, model.registerMachineModel));
					}
				}()
				]));
	});
var $author$project$Main$view = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$map,
		$author$project$Main$LambdaUiMsg,
		A2($author$project$Ui$Main$view, $author$project$Ui$Control$Context$initConfig, model.lambdaUiState.model));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{
		init: function (_v0) {
			return $author$project$Main$initModel;
		},
		subscriptions: $author$project$Main$subscriptions,
		update: $author$project$Main$update,
		view: function (model) {
			return A2(
				$mdgriffith$elm_ui$Element$layout,
				_List_Nil,
				$author$project$Main$view(model));
		}
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));