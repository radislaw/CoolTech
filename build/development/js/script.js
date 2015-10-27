//***************************Accordeon toggle************************
var accordeonToggle = (function() {

	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		var trigger = $('.accordeon__trigger');
		trigger.on('click', _itemToggle);
		trigger.on('hover', _viewArrow);
		trigger.on('mouseleave', _removeArrow);
	};


	var _itemToggle = function(){
		var $this = $(this);

		$this.toggleClass('hide-margin');

		var _accordeonItem = $this.closest('.accordeon__item');
		var _accordeonHide = _accordeonItem.find('.accordeon__item__toggle');

		_accordeonHide.slideToggle();
	};

	var _removeArrow = function() {
		$(this).removeClass('hide-widget').removeClass('show-widget')
	};

	var _viewArrow = function(){
		var $this = $(this);


		var _accordeonItem = $this.closest('.accordeon__item');
		var _accordeonHide = _accordeonItem.find('.accordeon__item__toggle');

		if(_accordeonHide.is(':visible')) {
			console.log('visible');

			//var currentTrigger = $(this).closest('.accordeon__item').find('.accordeon__trigger');

			$this.removeClass('show-widget').addClass('hide-widget')
		} else {
			console.log('hidden');

			$this.removeClass('hide-widget').addClass('show-widget')
		}



	};
	return {
		init: init
	};

})();

accordeonToggle.init();
//*******************************************************************

// **********************Rest filters********************************
var resetFilter = (function(){

	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		$('.accordeon__reset-filter').on('click', _reset);
	};


	var _reset = function(e){

		e.preventDefault();

		var $this = $(this);

		var _accordeonItem = $this.closest('.accordeon__item');
		var _input = _accordeonItem.find('input');

		_input.each(function(){
			$(this).prop('checked', false);
		})

	};

	return {
		init: init
	};

})();

resetFilter.init();
//*******************************************************************

//*******************************Radio*******************************
var oneRadio = (function(){
	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		$('.list-radio__input-radio--origin').on('change', _unselect);
	};

	var _unselect = function(){
		var $this = $(this);

		var parentRadio = $this.closest('.list-radio');
		var otherRadio = parentRadio.find('input[type=radio]');

		otherRadio.not(this).prop('checked', false)
	};

	return {
		init: init
	};
})();

oneRadio.init();
//*******************************************************************

//************************ColorPicker*********************************

var setColorPicker = (function(){
	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		_setColor();
	};

	var _setColor = function(){

		var colorPick = $('.list-colors__link');

		colorPick.each(function(){

			var $this = $(this);

			var color = $this.attr('data-color');

			$this.css('background', color);
		});



	};

	return {
		init: init
	};
})();

setColorPicker.init();
//*******************************************************************

//*************************rangePrice********************************
var rangePrice = (function(){
	var init = function(){
		_setUpListners();
	};



	var _setUpListners = function(){
		_changePrice();
	};

	var inputStart = $('.price-field_start').find('.price-field__input');
	var inputEnd = $('.price-field_end').find('.price-field__input');
	var sliderInterval = $('.slider-interval');

	var _changePrice = function(){
		sliderInterval.slider({
			range: true,
			min: 0,
			max: 26000,
			values: [0, 26000],
			slide: function(event, ui) {
				inputStart.val(sliderInterval.slider('values', 0));
				inputEnd.val(sliderInterval.slider('values', 1));
			}
		})

	};



	return {
		init: init
	};
})();

rangePrice.init();
//*******************************************************************

//********************Change view************************************

var changeView = (function(){
	var init = function(){
		_setUpListners();
	};


	var _setUpListners = function(){
		$('.view-list__link').on('click', _addClass);
		_setDefaultView();
	};

	var _setDefaultView = function(){
		$('.view-list__item_detailed')
			.closest('.view-list__item')
			.addClass('active');
	};

	var _addClass = function(e){
		e.preventDefault();

		var $this = $(this);

		var cardProduct = $('.card-product');

		var viewItem = $this.closest('.view-list__item');

		if(viewItem.hasClass('view-list__item_detailed')){
			viewItem.addClass('active');
			$('.view-list__item').not(viewItem).removeClass('active');

			cardProduct.each( function(){
				$(this).removeClass('card-product_tile-view card-product_list-view');
			} )
		}else if(viewItem.hasClass('view-list__item_tile')){
			viewItem.addClass('active');
			$('.view-list__item').not(viewItem).removeClass('active');

			cardProduct.each( function(){
				$(this).removeClass('card-product_list-view')
					.addClass('card-product_tile-view');
			} )
		} else if(viewItem.hasClass('view-list__item_list')){
			viewItem.addClass('active');
			$('.view-list__item').not(viewItem).removeClass('active');

			var descriptionText = $('.description-product__text');

			descriptionText.each(function(){
				var $this = $(this);
				var newText = $this.text().substr(0, 38) + '...';
				$this.text(newText);
			});

			cardProduct.each( function(){
				$(this).removeClass('card-product_tile-view')
					.addClass('card-product_list-view');
			} )
		}

		var _cutDescription = function() {
			$('description-product__text').each(function(){
			})
		};
		_cutDescription();
	};



	return {
		init: init
	};
})();

changeView.init();
//*******************************************************************

//********************setColumn**************************************
var setColumn = (function(){
	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		_setCol();
	};

	var _setCol = function(){
		$('.important-info__inner').columnize({
			width: 530
		})
	};

	return {
		init: init
	};
})();

setColumn.init();
//*******************************************************************

//**********************sliderPoster*********************************
var sliderPoster = (function(){

	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		_setDefaultPoster();
		$('.slider-product__controls-list__item__img').on('click',_changeImg);
	};

	var _setDefaultPoster = function(){
		var controlsList = $('.slider-product__controls-list');
		controlsList.each(function(){
			$(this).find('.slider-product__controls-list__item')
				.first()
				.addClass('active');
		})

	};

	var _changeImg = function(e){

		e.preventDefault();

		$('.slider-product__controls-list')
			.find('.slider-product__controls-list__item')
			.first()
			.addClass('active');


		var $this = $(this);

		var currentControl = $this.closest('.slider-product__controls-list__item');
		currentControl.addClass('active');

		$this.closest('.slider-product__controls-list')
			.find('.slider-product__controls-list__item')
			.not(currentControl)
			.removeClass('active');

		var controls = $this.closest('.slider-product__controls-list').find('.slider-product__controls-list__item__img');

		var index = controls.index($this) + 1;

		var _mainImg = $this.closest('.card-product__slider').find('.slider-product__main-img');

		_mainImg.attr('src', 'img/phone-poster-' + index+ '.jpg');



	};

	return {
		init: init
	};

})();

sliderPoster.init();
//*******************************************************************

//********************Select*****************************************

var setSelect = (function(){
	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		_select();
	};

	var _select = function(){
		$('.filter__select').select2();
	};

	return {
		init: init
	};
})();

setSelect.init();

//*******************************************************************
