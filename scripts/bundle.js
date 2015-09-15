(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var $redLink = $('a:first-child');
var $redSection = $('div:nth-child(2)');
var $greenLink = $('a:nth-child(2)');
var $greenSection = $('div:nth-child(3)');
var $blueLink = $('a:last-child');
var $blueSection = $('div:nth-child(4)');
var $allA = $('a');

$redLink.on('click', function () {
	var current = $(this);
	if (current) {
		$allA.css('background', '');
		current.css('background', 'red');
	}
	$redSection.css('display', 'block');
	$greenSection.css('display', 'none');
	$blueSection.css('display', 'none');
});
$greenLink.on('click', function () {
	var current = $(this);
	if (current) {
		$allA.css('background', '');
		current.css('background', 'green');
	}
	$greenSection.css('display', 'block');
	$redSection.css('display', 'none');
	$blueSection.css('display', 'none');
});
$blueLink.on('click', function () {
	var current = $(this);
	if (current) {
		$allA.css('background', '');
		current.css('background', 'blue');
	}
	$blueSection.css('display', 'block');
	$greenSection.css('display', 'none');
	$redSection.css('display', 'none');
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map