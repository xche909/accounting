function headerChanges(){
	// to change header position to fixed on scroll
	headerPosition();
	//to change header size on scroll 
	menuchangeonscroll();
}

// -------------------- header and nav resizing  --------------------
function menuchangeonscroll() {
	var headerdiv = document.getElementById('header');
	var navdiv = document.getElementById('nav');
	var sticky = header.offsetTop;
	var intakediv = document.getElementById('intake');
	var intakepos = intakediv.offsetTop;
	// console.log("intakepos"+intakepos);
	// console.log('headerpos'+sticky);

	if (window.pageYOffset > sticky) {
		// console.log('in onscroll if');

	// if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
	// if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
		header.classList.remove("headeroffscroll");
		header.classList.add("headeronscroll");
		navdiv.className = 'navonscroll';		
	} else if (window.pageYOffset <= sticky) {
		// console.log('in offscroll if');
	// } else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <=1) {
		header.classList.add("headeroffscroll");
		header.classList.remove("headeronscroll");
		navdiv.className = 'navoffscroll';
	}
}
function menuchangeonresize () {
	if ($(window).width() <= 1120) {
		$('ul#mainmenu-list li').addClass('fixedheight');
		$('a#dropdownselecta').addClass('fixedheight');
	} 
	else {
		if ($('ul#mainmenu-list li').hasClass('fixedheight'))
			{ $('ul#mainmenu-list li').removeClass('fixedheight');}
		if ($('#dropdownselect').hasClass('autoheight'))
			{ $('#dropdownselect').removeClass('autoheight');}
		if ($('#dropdownselecta').hasClass('fixedheight'))
			{ $('#dropdownselecta').removeClass('fixedheight');}
	}
}


function toggleNav () {
	jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.nav ul').toggleClass('active');

		e.preventDefault();
	});
}
// -------------------- navingation to url --------------------
function gotourl (url) {
	window.location.href = url;
}
// -------------------- opening url in specific ID --------------------
function openpage (pageurl,elementID,imageBGlink) {	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$.get(pageurl, function(data){
				document.getElementById(elementID).innerHTML = data;
				changeBGimage(imageBGlink);			
			});	
		}
	};
	xhttp.open("GET", pageurl, true);
	xhttp.send();
}
// -------------------- change backgroung image  --------------------
function changeBGimage (imageBGlink) {
	$('#banner-image-sm').attr('src',imageBGlink);
	
	// change banner image to background image
	// $('#banner-image-sm').attr('src',imageBGlink);
}
// -------------------- opening and closing the dropdown menu --------------------
function dropdownmenu () {
	var menuselect = document.getElementById('dropdownselecta');
	var elementID = document.getElementById('dropdownmenu');
	var ddopt = document.getElementsByClassName('dropdown-opt');	
	if ( (event.target != elementID) && (event.target.parentNode != elementID) && $('#dropdownmenu').hasClass('ddmopened') && (event.target != menuselect) && (event.target.parentNode != menuselect) && $('#dropdownmenu').hasClass('ddmopened'))
	{
		$('#dropdownmenu').toggleClass('ddmopened ddmclosed');
		// console.log('closed after body click');	
	}
	if (event.target == menuselect) 
	{
		if ($('#dropdownmenu').hasClass('ddmclosed')) 
		{
			$('#dropdownmenu').toggleClass('ddmclosed ddmopened');
			// console.log('opened');
			if ($(window).width() <= 1120) {
				$("#dropdownselect").removeClass('fixedheight').addClass('autoheight');
				var ddmheight = $("#dropdownmenu").height() + 'px';
				var ddmheightimp = ddmheight + '!important';
				$('#dropdownselect').css("height",ddmheightimp);
			}
		} 
		else 
		{ 
			$('#dropdownmenu').toggleClass('ddmopened ddmclosed');
			// console.log('closed after opening');
		}
	}
}

// 
function headerPosition() {
	var header = document.getElementById("header");
	var sticky = header.offsetTop;
	var servicesTop = document.getElementById('home-services').offsetTop;

	if (window.pageYOffset > sticky) {
		// console.log('servicesTop' + servicesTop);
		if (header.classList.contains('sticky')) {
		} else {
			document.getElementById('home-services').style.top =  $("header").height() +'px';
		}
		header.classList.add("sticky");
	} else {
		if (header.classList.contains('sticky')) {
			document.getElementById('home-services').style.top =  0 +'px';
			header.classList.remove("sticky");}
		// console.log('off header servicesTop' + servicesTop);

	}
}
//show info div
function showinfo (hideDiv, showDiv) {
	//hide button itself
	document.getElementById(hideDiv).style.display = 'none';
	//show Div for more info
	var element = document.getElementById(showDiv);
	element.style.display = 'block';
}
//show programme price
function showprice (programmeId) {
	var element = document.getElementById(programmeId);
	var elementId = $('#' + programmeId);
	switch(programmeId) {
		case "tf":
			price = "$5750";
			break;
		case "tp":
			price = "$5750";
			break;
		case "pf":
			price = "$6888";
			break;
		case "pp":
			price = "$6888";
			break;
		case "mf":
			price = "$----";
			break;
		case "mp":
			price = "$----";
			break;
	}
	// element.innerHTML = price;
	$(elementId).children('button').hide();
	$(elementId).children('.price').html(price);
	$(elementId).children('.price').show();
			// console.log('hide');
	// element.innerHTML = price;


	// $().children('button').hide();


}

// quoteBtn.style.display = 'none';
// var quoteDiv = document.getElementById('quote-div');
// 	quoteDiv.style.display = 'block';