// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
});

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
});

$(document).ready(function(){	
	$('#membership-dialog').dialog({
		autoOpen: false,
		height: 500,
		width: 500,
		dialogClass: 'readmore-dialog'
	});	

	$('#open-membership').click(function(){
		$('#membership-dialog').dialog("open");
	});
})
