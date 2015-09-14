'use strict';

var $redLink = $('#red-link');
var $redSection = $('#red-sec');
var $greenLink = $('#green-link');
var $greenSection = $('#green-sec');
var $blueLink = $('#blue-link');
var $blueSection = $('#blue-sec');
var $allA = $('a');

$redLink.on('click', function(){
	var current = $(this);
	if (current) {
		$allA.css('background', '');
		current.css('background', 'red');
	}
	$redSection.css('display', 'block');
	$greenSection.css('display','none');
	$blueSection.css('display', 'none');
})
$greenLink.on('click', function(){
	var current = $(this);
	if (current) {
		$allA.css('background', '');
		current.css('background', 'green');
	} 
	$greenSection.css('display', 'block');
	$redSection.css('display','none');
	$blueSection.css('display', 'none');
})
$blueLink.on('click', function(){
	var current = $(this);
	if (current) {
		$allA.css('background', '');
		current.css('background', 'blue');
	} 
	$blueSection.css('display', 'block');
	$greenSection.css('display','none');
	$redSection.css('display', 'none');
})