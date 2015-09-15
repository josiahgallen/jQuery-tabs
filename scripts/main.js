'use strict';

var $redLink = $('a:first-child');
var $redSection = $('div:nth-child(2)');
var $greenLink = $('a:nth-child(2)');
var $greenSection = $('div:nth-child(3)');
var $blueLink = $('a:last-child');
var $blueSection = $('div:nth-child(4)');
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

