/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var _arguments = arguments;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function equal(array1, array2) {
	    return array1.length === array2.length && array1.every(function (element, index) {
	        return element === array2[index];
	    });
	}
	
	var awesomeStub = function awesomeStub(obj, functionName) {
	    var originalFunction = obj[functionName];
	    var list = [];
	    var answerFunc = undefined;
	    obj[functionName] = function () {
	        var args = Array.from(_arguments);
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var item = _step.value;
	
	                if (equal(item.args, args)) {
	                    return item.value;
	                }
	            }
	            //if answers exists, then return answerFunction.
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        if (answerFunc) {
	            return answerFunc(_arguments);
	        }
	    };
	
	    var stub = {
	        restore: function restore() {
	            obj[functionName] = originalFunction;
	            return stub;
	        },
	        answers: function answers(fn) {
	            answerFunc = fn;
	            return stub;
	        },
	        returns: function returns(value) {
	            if (list.length == 0) {
	                obj[functionName] = function () {
	                    return value;
	                };
	            } else {
	                //get the last item from the list, and set the item's value to the passed value
	                list[list.length - 1].value = value;
	            }
	            return stub;
	        },
	        calledWith: function calledWith() {
	            var a = Array.prototype.slice.call(_arguments);
	            list.push({ args: a });
	            return stub;
	        }
	    };
	    return stub;
	};
	
	var awesomeMock = exports.awesomeMock = function awesomeMock(obj) {
	
	    var mockObject = {};
	    var list = []; // contains a list of {functionName: fu, cases: [ {input: params, output: value}]}
	    var functionName = undefined;
	
	    var setFunction = function setFunction() {
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	            var _loop = function _loop() {
	                var item = _step2.value;
	
	                obj[item.functionName] = function () {
	                    return item.value;
	                };
	            };
	
	            for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                _loop();
	            }
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                    _iterator2.return();
	                }
	            } finally {
	                if (_didIteratorError2) {
	                    throw _iteratorError2;
	                }
	            }
	        }
	    };
	    var functions = Object.getOwnPropertyNames(obj);
	
	    var _loop2 = function _loop2(i) {
	        mockObject[functions[i]] = function () {
	            functionName = functions[i];
	            return {
	                returns: function returns(value) {
	                    list.push({ functionName: functionName, value: value }); //check if the function exists, yes: then add
	                    setFunction();
	                    return mockObject;
	                }
	            };
	        };
	    };
	
	    for (var i in functions) {
	        _loop2(i);
	    }
	
	    return mockObject;
	};
	
	exports.default = awesomeStub;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTA4Mzc2ZjA1YjVmMzAzNWYxNTkiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9hd2Vzb21lU3R1Yi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQSxVQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCO0FBQzNCLFlBQU8sT0FBTyxNQUFQLEtBQWtCLE9BQU8sTUFBUCxJQUFpQixPQUFPLEtBQVAsQ0FBYSxVQUFDLE9BQUQsRUFBVSxLQUFWO2dCQUFvQixZQUFZLE9BQU8sS0FBUCxDQUFaO01BQXBCLENBQWhELENBRG9CO0VBQS9COztBQUlBLEtBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxHQUFELEVBQU0sWUFBTixFQUF3QjtBQUN4QyxTQUFNLG1CQUFtQixJQUFJLFlBQUosQ0FBbkIsQ0FEa0M7QUFFeEMsU0FBSSxPQUFPLEVBQVAsQ0FGb0M7QUFHeEMsU0FBSSxzQkFBSixDQUh3QztBQUl4QyxTQUFJLFlBQUosSUFBb0IsWUFBTTtBQUN0QixhQUFJLE9BQU8sTUFBTSxJQUFOLFlBQVAsQ0FEa0I7Ozs7OztBQUV0QixrQ0FBZ0IsOEJBQWhCLG9HQUFzQjtxQkFBZCxtQkFBYzs7QUFDbEIscUJBQUcsTUFBTSxLQUFLLElBQUwsRUFBVyxJQUFqQixDQUFILEVBQTJCO0FBQ3ZCLDRCQUFPLEtBQUssS0FBTCxDQURnQjtrQkFBM0I7Y0FESjs7Ozs7Ozs7Ozs7Ozs7O1VBRnNCOztBQVF0QixhQUFHLFVBQUgsRUFBZTtBQUNYLG9CQUFPLHNCQUFQLENBRFc7VUFBZjtNQVJnQixDQUpvQjs7QUFpQnhDLFNBQU0sT0FBTztBQUNYLGtCQUFTLG1CQUFNO0FBQ1gsaUJBQUksWUFBSixJQUFvQixnQkFBcEIsQ0FEVztBQUVYLG9CQUFPLElBQVAsQ0FGVztVQUFOO0FBSVQsa0JBQVMsaUJBQUMsRUFBRCxFQUFRO0FBQ2YsMEJBQWEsRUFBYixDQURlO0FBRWYsb0JBQU8sSUFBUCxDQUZlO1VBQVI7QUFJVCxrQkFBUyxpQkFBQyxLQUFELEVBQVc7QUFDaEIsaUJBQUcsS0FBSyxNQUFMLElBQWUsQ0FBZixFQUFrQjtBQUNqQixxQkFBSSxZQUFKLElBQW9CLFlBQU07QUFDdEIsNEJBQU8sS0FBUCxDQURzQjtrQkFBTixDQURIO2NBQXJCLE1BSU07O0FBRUYsc0JBQUssS0FBSyxNQUFMLEdBQWMsQ0FBZCxDQUFMLENBQXNCLEtBQXRCLEdBQThCLEtBQTlCLENBRkU7Y0FKTjtBQVFBLG9CQUFPLElBQVAsQ0FUZ0I7VUFBWDtBQVdULHFCQUFZLHNCQUFNO0FBQ2QsaUJBQU0sSUFBSSxNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsWUFBSixDQURRO0FBRWQsa0JBQUssSUFBTCxDQUFVLEVBQUMsTUFBTSxDQUFOLEVBQVgsRUFGYztBQUdkLG9CQUFPLElBQVAsQ0FIYztVQUFOO01BcEJSLENBakJrQztBQTJDeEMsWUFBTyxJQUFQLENBM0N3QztFQUF4Qjs7QUE4Q2IsS0FBTSxvQ0FBYyxTQUFkLFdBQWMsQ0FBQyxHQUFELEVBQVM7O0FBRWhDLFNBQUksYUFBYSxFQUFiLENBRjRCO0FBR2hDLFNBQUksT0FBTyxFQUFQO0FBSDRCLFNBSTVCLHdCQUFKLENBSmdDOztBQU1oQyxTQUFNLGNBQWMsU0FBZCxXQUFjLEdBQU07Ozs7Ozs7cUJBQ2Q7O0FBQ0oscUJBQUksS0FBSyxZQUFMLENBQUosR0FBeUIsWUFBTTtBQUMzQiw0QkFBTyxLQUFLLEtBQUwsQ0FEb0I7a0JBQU47OztBQUQ3QixtQ0FBZ0IsK0JBQWhCLHdHQUFzQjs7Y0FBdEI7Ozs7Ozs7Ozs7Ozs7O1VBRHNCO01BQU4sQ0FOWTtBQWFoQyxTQUFJLFlBQVksT0FBTyxtQkFBUCxDQUEyQixHQUEzQixDQUFaLENBYjRCOztrQ0FleEI7QUFDSixvQkFBVyxVQUFVLENBQVYsQ0FBWCxJQUEyQixZQUFNO0FBQzdCLDRCQUFlLFVBQVUsQ0FBVixDQUFmLENBRDZCO0FBRTdCLG9CQUFPO0FBQ0gsMEJBQVMsaUJBQUMsS0FBRCxFQUFXO0FBQ2hCLDBCQUFLLElBQUwsQ0FBVyxFQUFDLDBCQUFELEVBQWUsWUFBZixFQUFYO0FBRGdCLGdDQUVoQixHQUZnQjtBQUdoQiw0QkFBTyxVQUFQLENBSGdCO2tCQUFYO2NBRGIsQ0FGNkI7VUFBTjtPQWhCQzs7QUFlaEMsVUFBSSxJQUFJLENBQUosSUFBUyxTQUFiLEVBQXdCO2dCQUFoQixHQUFnQjtNQUF4Qjs7QUFjQSxZQUFPLFVBQVAsQ0E3QmdDO0VBQVQ7O21CQWlDWixZIiwiZmlsZSI6Ii4vdGVzdC9hd2Vzb21lQ29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDEwODM3NmYwNWI1ZjMwMzVmMTU5XG4gKiovIiwiZnVuY3Rpb24gZXF1YWwoYXJyYXkxLCBhcnJheTIpIHtcbiAgICByZXR1cm4gYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aCAmJiBhcnJheTEuZXZlcnkoKGVsZW1lbnQsIGluZGV4KSA9PiBlbGVtZW50ID09PSBhcnJheTJbaW5kZXhdKTtcbn1cblxuY29uc3QgYXdlc29tZVN0dWIgPSAob2JqLCBmdW5jdGlvbk5hbWUpICA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxGdW5jdGlvbiA9IG9ialtmdW5jdGlvbk5hbWVdIDtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGxldCBhbnN3ZXJGdW5jO1xuICAgIG9ialtmdW5jdGlvbk5hbWVdID0gKCkgPT4ge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgICAgIGlmKGVxdWFsKGl0ZW0uYXJncywgYXJncykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2lmIGFuc3dlcnMgZXhpc3RzLCB0aGVuIHJldHVybiBhbnN3ZXJGdW5jdGlvbi5cbiAgICAgICAgaWYoYW5zd2VyRnVuYykge1xuICAgICAgICAgICAgcmV0dXJuIGFuc3dlckZ1bmMoYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdHViID0ge1xuICAgICAgcmVzdG9yZTogKCkgPT4ge1xuICAgICAgICAgIG9ialtmdW5jdGlvbk5hbWVdID0gb3JpZ2luYWxGdW5jdGlvbjtcbiAgICAgICAgICByZXR1cm4gc3R1YjtcbiAgICAgIH0sXG4gICAgICBhbnN3ZXJzOiAoZm4pID0+IHtcbiAgICAgICAgYW5zd2VyRnVuYyA9IGZuO1xuICAgICAgICByZXR1cm4gc3R1YjtcbiAgICAgIH0sXG4gICAgICByZXR1cm5zOiAodmFsdWUpID0+IHtcbiAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgIG9ialtmdW5jdGlvbk5hbWVdID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgLy9nZXQgdGhlIGxhc3QgaXRlbSBmcm9tIHRoZSBsaXN0LCBhbmQgc2V0IHRoZSBpdGVtJ3MgdmFsdWUgdG8gdGhlIHBhc3NlZCB2YWx1ZVxuICAgICAgICAgICAgICBsaXN0W2xpc3QubGVuZ3RoIC0gMV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0dWI7XG4gICAgICB9LFxuICAgICAgY2FsbGVkV2l0aDogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgIGxpc3QucHVzaCh7YXJnczogYX0pO1xuICAgICAgICAgIHJldHVybiBzdHViO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHN0dWI7XG59O1xuXG5leHBvcnQgY29uc3QgYXdlc29tZU1vY2sgPSAob2JqKSA9PiB7XG5cbiAgICBsZXQgbW9ja09iamVjdCA9IHt9O1xuICAgIGxldCBsaXN0ID0gW107IC8vIGNvbnRhaW5zIGEgbGlzdCBvZiB7ZnVuY3Rpb25OYW1lOiBmdSwgY2FzZXM6IFsge2lucHV0OiBwYXJhbXMsIG91dHB1dDogdmFsdWV9XX1cbiAgICBsZXQgZnVuY3Rpb25OYW1lO1xuXG4gICAgY29uc3Qgc2V0RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgICAgICBvYmpbaXRlbS5mdW5jdGlvbk5hbWVdID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSA7XG4gICAgbGV0IGZ1bmN0aW9ucyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgICBmb3IobGV0IGkgaW4gZnVuY3Rpb25zKSB7XG4gICAgICAgIG1vY2tPYmplY3RbZnVuY3Rpb25zW2ldXSA9ICgpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuczogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCgge2Z1bmN0aW9uTmFtZSwgdmFsdWV9KTsgLy9jaGVjayBpZiB0aGUgZnVuY3Rpb24gZXhpc3RzLCB5ZXM6IHRoZW4gYWRkXG4gICAgICAgICAgICAgICAgICAgIHNldEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2NrT2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIG1vY2tPYmplY3Q7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF3ZXNvbWVTdHViO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGVzdC9hd2Vzb21lU3R1Yi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=