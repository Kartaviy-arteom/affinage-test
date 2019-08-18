'use strict';

(function(){
	var nextBtn = document.querySelector('.btn--right');
	var previousBtn = document.querySelector('.btn--left');
	var galleryIndex = 0;
	var Screen = {
    	TABLET: 768,
    	DESKTOP: 1320
  	};

  	var getPixelRatioType = function() {
  		var deviceType = "";
		window.devicePixelRatio >=2 ? deviceType = "retina" : deviceType = "normal";
		return deviceType;
  	};

	var getScreenType = function () {
		var screenWidth = document.documentElement.clientWidth;
	    var screenType = '';
	    switch (true) {
	      case screenWidth < Screen.TABLET:
	        screenType = 'mobile';
	        break;
	      case screenWidth >= Screen.TABLET && screenWidth < Screen.DESKTOP:
	        screenType = 'tablet';
	        break;
	      case screenWidth >= Screen.DESKTOP:
	        screenType = 'desktop';
	        break;
	    }
	    return screenType;
  	};

  	var BackgroundsGalleryСontent = {
  		'desktop': {
  			"normal":["img/photo-bg-desktop@1x.jpg", "img/kaboompics-desktop@1x.jpg"],
  			"retina":["img/photo-bg-desktop@1x.jpg", "img/kaboompics-desktop@1x.jpg"]
  			},
		'tablet': {
			"normal":["img/photo-bg-tablet@1x.jpg", "img/kaboompics-tablet@1x.jpg"],
  			"retina":["img/photo-bg-tablet@2x.jpg", "img/kaboompics-tablet@2x.jpg"]
  			},
		'mobile': {
			"normal":["img/photo-bg-mobile@1x.jpg", "img/kaboompics-mobile@1x.jpg"],
  			"retina":["img/photo-bg-mobile@2x.jpg", "img/kaboompics-mobile@2x.jpg"]
  			}
  	};

  	var BackgroundsGallery = {
  		'desktop': {
  			"nearGallery": document.querySelector('.first-screen__letter--g'),
  			"distantGallery": document.querySelector('.first-screen')
  			},
  		'tablet': {
  			"nearGallery": document.querySelector('.first-screen__slider'),
  			"distantGallery": document.querySelector('.wrapper--middle')
  			},
  		'mobile': {
  			"nearGallery": document.querySelector('.first-screen__slider'),
  			"distantGallery": document.querySelector('.wrapper--middle')
  			}
  	};

  	var BackgroundsGalleryBlank = {
  		'desktop': {
  			"nearGallery": "linear-gradient(to right, rgba(247,230,17, 0.8) 50%, rgba(247,230,17, 0.8) 50%),",
  			"distantGallery": "linear-gradient(to right, rgba(247,230,17, 0.8) 50%, rgba(247,230,17, 0.8) 50%),"
  			},
  		'tablet': {
  			"nearGallery": "linear-gradient(135deg, rgba(247,230,17, 0.8) 60.5%, #F7E611 60.5%),",
  			"distantGallery": "linear-gradient(to right, rgba(247,230,17, 0.8) 50%, rgba(247,230,17, 0.8) 50%),"
  			},
  		'mobile': {
  			"nearGallery": "linear-gradient(135deg, rgba(247,230,17, 0.8) 60.5%, #F7E611 60.5%),",
  			"distantGallery": "linear-gradient(to right, rgba(247,230,17, 0.8) 50%, rgba(247,230,17, 0.8) 50%),"
  			}
  	};
  	var screenType = getScreenType();
  	var deviceType = getPixelRatioType();
	nextBtn.addEventListener('click', function(evt) {
		evt.preventDefault();
		var distantGallery = (BackgroundsGallery[screenType])["distantGallery"];
		distantGallery.style.backgroundImage = (BackgroundsGalleryBlank[screenType])["distantGallery"] + "url(" + ((BackgroundsGalleryСontent[screenType])[deviceType])[galleryIndex] + ")";
		galleryIndex += 1;
		if (galleryIndex > ((BackgroundsGalleryСontent[screenType])[deviceType]).length - 1) {
			galleryIndex = 0;
		};
		var nearGallery = (BackgroundsGallery[screenType])["nearGallery"];
		nearGallery.style.backgroundImage = (BackgroundsGalleryBlank[screenType])["nearGallery"] + "url(" + ((BackgroundsGalleryСontent[screenType])[deviceType])[galleryIndex] + ")";
		
	});

	previousBtn.addEventListener('click', function(evt) {
		evt.preventDefault();
		var distantGallery = (BackgroundsGallery[screenType])["distantGallery"];
		distantGallery.style.backgroundImage = (BackgroundsGalleryBlank[screenType])["distantGallery"] + "url(" + ((BackgroundsGalleryСontent[screenType])[deviceType])[galleryIndex] + ")";
		galleryIndex -= 1;
		if (galleryIndex < 0) {
			galleryIndex = ((BackgroundsGalleryСontent[screenType])[deviceType]).length- 1;
		};
		var nearGallery = (BackgroundsGallery[screenType])["nearGallery"];
		nearGallery.style.backgroundImage = (BackgroundsGalleryBlank[screenType])["nearGallery"] + "url(" + ((BackgroundsGalleryСontent[screenType])[deviceType])[galleryIndex] + ")";
	});		
})();