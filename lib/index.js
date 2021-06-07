/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var symbols$3;
(function (symbols) {
    symbols.Arithmetics = Symbol["for"]('arithmetics');
})(symbols$3 || (symbols$3 = {}));

var symbols$2;
(function (symbols) {
    symbols.AdditiveGroup = Symbol["for"]('arithmetics-additive-group');
    symbols.VectorSpace = Symbol["for"]('arithmetics-vector-space');
    symbols.NormedVectorSpace = Symbol["for"]('arithmetics-normed-vector-space');
    symbols.UnitarySpace = Symbol["for"]('arithmetics-unitary-space');
    symbols.Ring = Symbol["for"]('arithmetics-ring');
    symbols.DivisionRing = Symbol["for"]('arithmetics-division-ring');
    symbols.NormedDivisionRing = Symbol["for"]('arithmetics-normed-division-ring');
    symbols.Real = Symbol["for"]('arithmetics-real');
})(symbols$2 || (symbols$2 = {}));

var symbols$1;
(function (symbols) {
    symbols.Tensor = Symbol["for"]('arithmetics-tensor');
})(symbols$1 || (symbols$1 = {}));

function isAdditiveGroup(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.AdditiveGroup];
}
function isDivisionRing(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.DivisionRing];
}
function isNormedDivisionRing(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.NormedDivisionRing];
}
function isNormedVectorSpace(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.NormedVectorSpace];
}
function isReal(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.Real];
}
function isRing(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.Ring];
}
function isUnitarySpace(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.UnitarySpace];
}
function isVectorSpace(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.VectorSpace];
}
function isTensor(x) {
    var _a;
    return (_a = x === null || x === void 0 ? void 0 : x[symbols.Arithmetics]) === null || _a === void 0 ? void 0 : _a[symbols.Tensor];
}

var symbols = __assign(__assign(__assign({}, symbols$3), symbols$2), symbols$1);

export { isAdditiveGroup, isDivisionRing, isNormedDivisionRing, isNormedVectorSpace, isReal, isRing, isTensor, isUnitarySpace, isVectorSpace, symbols };
