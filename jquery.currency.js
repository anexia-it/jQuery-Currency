/*
 * jQuery Currency v0.6 ( January 2015 )
 * Simple, unobtrusive currency converting and formatting
 *
 * Copyright 2015, sMarty
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * http://coderspress.com
*
 */

(function ($) {

    $.fn.currency = function (method) {

        var methods = {

            init: function (options) {
                var settings = $.extend({}, this.currency.defaults, options);
                return this.each(function () {
                    var $element = $(this),
                        element = this;
                    var value = 0;

                    if ($element.is(':input')) {
                        value = $element.val();
                    } else {
                        value = $element.text();
                    }

                    if (helpers.isNumber(value)) {
                        if (settings.convertFrom != '') {

                            if ($element.is(':input')) {
                                $element.val(value + ' ' + settings.convertLoading);
                            } else {
                                $element.html(value + ' ' + settings.convertLoading);
                            }

                            $.post(settings.convertLocation, {
                                amount: value,
                                from: settings.convertFrom,
                                to: settings.region
                            }, function (data) {
                                value = data;

                                if ($element.is(':input')) {
                                    $element.val(helpers.format_currency(value, settings));
                                } else {
                                    $element.html(helpers.format_currency(value, settings));
                                }
                            });
                        } else {

                            if ($element.is(':input')) {
                                $element.val(helpers.format_currency(value, settings));
                            } else {
                                $element.html(helpers.format_currency(value, settings));
                            }

                        }
                    }
                });
            },
        }

        var helpers = {
            format_currency: function (amount, settings) {
                var bc = settings.region;
                var currency_before = '';
                var currency_after = '';
                if (bc == 'ALL') currency_before = 'ALL';
                if (bc == 'ARS') currency_before = 'ARS';
                if (bc == 'AWG') currency_before = 'AWG';
                if (bc == 'AUD') currency_before = 'AUD';
                if (bc == 'BSD') currency_before = 'BSD';
                if (bc == 'BBD') currency_before = 'BBD';
                if (bc == 'BYR') currency_before = 'BYR';
                if (bc == 'BZD') currency_before = 'BZD';
                if (bc == 'BMD') currency_before = 'BMD';
                if (bc == 'BOB') currency_before = 'BOB';
                if (bc == 'BAM') currency_before = 'BAM';
                if (bc == 'BWP') currency_before = 'BWP';
                if (bc == 'BRL') currency_before = 'BRL';
                if (bc == 'BND') currency_before = 'BND';
                if (bc == 'CAD') currency_before = 'CAD';
                if (bc == 'KYD') currency_before = 'KYD';
                if (bc == 'CLP') currency_before = 'CLP';
                if (bc == 'CNY') currency_before = 'CNY';
                if (bc == 'COP') currency_before = 'COP';
                if (bc == 'CRC') currency_before = 'CRC';
                if (bc == 'HRK') currency_before = 'HRK';
                if (bc == 'CZK') currency_before = 'CZK';
                if (bc == 'DKK') currency_before = 'DKK';
                if (bc == 'DOP') currency_before = 'DOP';
                if (bc == 'XCD') currency_before = 'XCD';
                if (bc == 'EGP') currency_before = 'EGP';
                if (bc == 'SVC') currency_before = 'SVC';
                if (bc == 'EEK') currency_before = 'EEK';
                if (bc == 'EUR') currency_before = 'EUR';
                if (bc == 'FKP') currency_before = 'FKP';
                if (bc == 'FJD') currency_before = 'FJD';
                if (bc == 'GBP') currency_before = 'GBP';
                if (bc == 'GHC') currency_before = 'GHC';
                if (bc == 'GIP') currency_before = 'GIP';
                if (bc == 'GTQ') currency_before = 'GTQ';
                if (bc == 'GGP') currency_before = 'GGP';
                if (bc == 'GYD') currency_before = 'GYD';
                if (bc == 'HNL') currency_before = 'HNL';
                if (bc == 'HKD') currency_before = 'HKD';
                if (bc == 'HUF') currency_before = 'HUF';
                if (bc == 'ISK') currency_before = 'ISK';
                if (bc == 'IDR') currency_before = 'IDR';
                if (bc == 'IMP') currency_before = 'IMP';
                if (bc == 'JMD') currency_before = 'JMD';
                if (bc == 'JPY') currency_before = 'JPY';
                if (bc == 'JEP') currency_before = 'JEP';
                if (bc == 'LVL') currency_before = 'LVL';
                if (bc == 'LBP') currency_before = 'LBP';
                if (bc == 'LRD') currency_before = 'LRD';
                if (bc == 'LTL') currency_before = 'LTL';
                if (bc == 'MYR') currency_before = 'MYR';
                if (bc == 'MXN') currency_before = 'MXN';
                if (bc == 'MZN') currency_before = 'MZN';
                if (bc == 'NAD') currency_before = 'NAD';
                if (bc == 'ANG') currency_before = 'ANG';
                if (bc == 'NZD') currency_before = 'NZD';
                if (bc == 'NIO') currency_before = 'NIO';
                if (bc == 'NOK') currency_before = 'NOK';
                if (bc == 'PAB') currency_before = 'PAB';
                if (bc == 'PYG') currency_before = 'PYG';
                if (bc == 'PEN') currency_before = 'PEN';
                if (bc == 'PLN') currency_before = 'PLN';
                if (bc == 'RON') currency_before = 'RON';
                if (bc == 'SHP') currency_before = 'SHP';
                if (bc == 'SGD') currency_before = 'SGD';
                if (bc == 'SBD') currency_before = 'SBD';
                if (bc == 'SOS') currency_before = 'SOS';
                if (bc == 'ZAR') currency_before = 'ZAR';
                if (bc == 'SEK') currency_before = 'SEK';
                if (bc == 'CHF') currency_before = 'CHF';
                if (bc == 'SRD') currency_before = 'SRD';
                if (bc == 'SYP') currency_before = 'SYP';
                if (bc == 'TWD') currency_before = 'TWD';
                if (bc == 'TTD') currency_before = 'TTD';
                if (bc == 'TRY') currency_before = 'TRY';
                if (bc == 'TRL') currency_before = 'TRL';
                if (bc == 'TVD') currency_before = 'TVD';
                if (bc == 'GBP') currency_before = 'GBP';
                if (bc == 'USD') currency_before = 'USD';
                if (bc == 'UYU') currency_before = 'UYU';
                if (bc == 'VEF') currency_before = 'VEF';
                if (bc == 'ZWD') currency_before = 'ZWD';
                
                if (currency_before != '') currency_before += ' ';
                var output = '';

                if (!settings.hidePrefix) output += currency_before;
                output += helpers.number_format(amount, settings.decimals, settings.decimal, settings.thousands);

                if (!settings.hidePostfix) output += currency_after;
                return output;
            },

            // Kindly borrowed from http://phpjs.org/functions/number_format
            number_format: function (number, decimals, dec_point, thousands_sep) {
                number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
                var n = !isFinite(+number) ? 0 : +number,
                    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                    s = '',
                    toFixedFix = function (n, prec) {
                        var k = Math.pow(10, prec);
                        return '' + Math.round(n * k) / k;
                    };

                // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

                if (s[0].length > 3) {
                    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
                }

                if ((s[1] || '').length < prec) {
                    s[1] = s[1] || '';
                    s[1] += new Array(prec - s[1].length + 1).join('0');
                }
                return s.join(dec);
            },
            isNumber: function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
        }

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method "' + method + '" does not exist in currency plugin!');
        }
    }

    $.fn.currency.defaults = {
        region: "USD", // The 3 digit ISO code you want to display your currency in
        thousands: ",", // Thousands separator
        decimal: ".", // Decimal separator
        decimals: 2, // How many decimals to show
        hidePrefix: false, // Hide any prefix
        hidePostfix: false, // Hide any postfix
        convertFrom: "", // If converting, the 3 digit ISO code you want to convert from,
        convertLoading: "(Converting...)", // Loading message appended to values while converting
        convertLocation: "convert.php" // Location of convert.php file
    }

    $.fn.currency.settings = {}

})(jQuery);
