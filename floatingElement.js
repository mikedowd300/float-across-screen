function floater() {
	if ($('#floatMe').css('animation-name') === 'bob'){
		$('#floatMe').css('animation-name','example');
	}
	else if($('#floatMe').css('animation-name') === 'example') {
	$('#floatMe').css('animation-name','example2');
	}else {
		$('#floatMe').css('animation-name','example');
	}
}