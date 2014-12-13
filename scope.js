/*
 * css.js
 *
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Jesús Manuel Germade Castiñeiras <jesus@germade.es>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */


(function (definition) {
	'use strict';
	
	if ( typeof window === 'undefined' ) {
		if ( typeof module !== 'undefined' ) {
			module.exports = definition();
		}
	} else {
		if ( window.fn ) {
			fn.define('Scope', definition );
		} else if( !window.Scope ) {
			window.Scope = definition();
		}
	}

})(function () {
	'use strict';

    function _copy (target, source) {
        for( var key in source ) {
            target[key] = source[key];
        }
    }

    function Scope (options) {
        _copy(this, options);
    }

    Scope.prototype.itself = function () {
        return this;
    };

    Scope.prototype.$new = function (options) {
        var S = function S () {
            _copy(this, options);
        };
        S.prototype = this.itself();
        _copy(S.prototype, Scope.prototype);
        return new S();
    };

    return Scope;
});
