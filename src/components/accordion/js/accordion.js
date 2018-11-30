/**
 * @name          jQuery Boilerplate
 * @version       1.0
 * @lastmodified  2015-04-24
 * @package       html-css-js
 * @subpackage    jQuery plugin
 * @author        JR, VI
 *
 * based on: http://jqueryboilerplate.com/
 */

;
(function ($, window, document, undefined) {
	'use strict';

	var pluginName = 'accordion',
		defaults = {
			foo: 'bar'
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.$element = $(element);
		this.options = $.extend({}, defaults, options);
		this.init();
	}

	// methods
	var methods = {
		init: function () {
			// your init is goes here
			this.myFunction();
		},

		myFunction: function () {
			console.log('boilerplate - myFunction was executed');
			$('.accordion__text').hide();
			this.$element.on('click', function (event) {
				console.log(event.target.closest('section'));
				// $(event.target).closest('section').find('.accordion__content').removeClass('accordion--closed').addClass('accordion--opened');
				$(event.target).closest('section').find('.accordion__text').slideToggle(400);
			});
		}
	};

	// build
	$.extend(Plugin.prototype, methods);

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function (options) {
		this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));

				// trigger ready event on element
				$.triggerFailsafeEvent($(this), 'plugin_' + pluginName + '.ready');
			}
		});

		// trigger ready event globally
		if (this.length > 0) {
			$.triggerFailsafeEvent($(window), 'plugin_' + pluginName + '.ready_all');
		}

		return this;
	};

})(jQuery, window, document);
