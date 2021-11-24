// TODO: отрефачить, чтобы либа для cookies грузилась в head, а отсюда удалить

/*
* jQuery Cookie
*/
;

(function ($, document) {
  var pluses = /\+/g;

  function raw(s) {
    return s;
  }

  function decoded(s) {
    return decodeURIComponent(s.replace(pluses, ' '));
  }

  $.cookie = function (key, value, options) {
    // key and at least value given, set cookie...
    if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
      options = $.extend({}, $.cookie.defaults, options);

      if (value == null) {
        options.expires = -1;
      }

      if (typeof options.expires === 'number') {
        var days = options.expires,
            t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = String(value);
      return document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
    } // key and possibly options given, get cookie...


    options = value || $.cookie.defaults || {};
    var decode = options.raw ? raw : decoded;
    var cookies = document.cookie.split('; ');

    for (var i = 0, parts; parts = cookies[i] && cookies[i].split('='); i++) {
      if (decode(parts.shift()) === key) {
        return decode(parts.join('='));
      }
    }

    return null;
  };

  $.cookie.defaults = {};
})(jQuery, document);

var months_localized = {
  'ru': ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  'fr': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  'bg': ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
  'nl': ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  'pt': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  'de': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  'tr': ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  'it': ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  'hu': ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
  'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  'id': ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  'ms': ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  'hi': ['जनवर', 'फरबर', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
  'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  'ro': ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  'pl': ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'],
  'sr': ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
  'cs': ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
  'sk': ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'],
  'el': ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
  'th': ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
  'vi': ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Bốn', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám'],
  'fil': ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'],
  'ar': ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  'ur': ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  'nb': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nn': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'no': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'nb_NO': ['Januar', 'Februar', 'Mars ', 'April ', 'May ', 'Juni ', 'Juli ', 'August ', 'September ', 'Oktober ', 'November ', 'Desember '],
  'km': ['មករា', 'កុម្ភៈ', 'មិនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', '‘វិច្ឆិកា', 'ធ្នូ'],
  'zh': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};
var days_localized = {
  'ru': ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  'fr': ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  'bg': ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
  'nl': ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  'pt': ['Domingo', 'Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado'],
  'de': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  'tr': ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  'it': ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
  'hu': ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
  'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  'hi': ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार', 'रविवार'],
  'ms': ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  'id': ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  'es': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  'ro': ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
  'pl': ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
  'sr': ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
  'cs': ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  'sk': ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'],
  'el': ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
  'th': ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
  'vi': ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
  'ar': ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'],
  'fil': ['Linggo', 'Lunes', 'Martes', 'Miyerkoles', 'Huebes', 'Biyernes', 'Sabado'],
  'ur': ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  'nb': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'nn': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'no': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'nb_NO': ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Friday', 'Lørdag'],
  'km': ['អាទិត្យ', 'ច័ន្ធ', 'អង្គារ៍', 'ពុធ', 'ព្រហស្បិ៍', 'សុក្រ', 'សៅរ៍'],
  'zh': ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
};

var AdcLandDate = function AdcLandDate(_ref) {
  var shift = _ref.shift,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'dtime_nums' : _ref$mode,
      _ref$old = _ref.old,
      old = _ref$old === void 0 ? true : _ref$old,
      _ref$euFormat = _ref.euFormat,
      euFormat = _ref$euFormat === void 0 ? 1 : _ref$euFormat,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index;
  this._mode = mode; // для rdate 0, чтобы не указывать сдвиг на каждом элементе

  this._shift = ~['rdate'].indexOf(mode) || isNaN(+shift) || !shift ? 0 : +shift;
  this._oldMethod = old;
  this._euFormat = !!+euFormat;
  this._indexOfCollection = index;

  this._compileDate(this._shift);
};

AdcLandDate.prototype._compileDate = function (shift) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  this._day = date;

  this._day.setDate(this._day.getDate() + (isNaN(+shift) ? 0 : shift) + (this._oldMethod && this._mode !== 'dtimes' ? 1 : 0));
};

AdcLandDate.prototype._getLocalizedEntity = getLocalizedEntity;

AdcLandDate.prototype._formatNum = function (num) {
  return ('0' + num).slice(-2);
};

AdcLandDate.prototype.getDate = function () {
  var _this = this;

  var modes = {
    'dtime_nums': function dtime_nums() {
      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear()
      };
    },
    'dtime': function dtime() {
      return {
        weekDay: _this._getLocalizedEntity(_this._day, 'day'),
        day: _this._day.getDate(),
        month: _this._getLocalizedEntity(_this._day, 'month'),
        year: _this._day.getFullYear()
      };
    },
    'dtimes': function dtimes() {
      return {
        day: _this._day.getDate(),
        month: _this._getLocalizedEntity(_this._day, 'month')
      };
    },
    'ryear': function ryear() {
      return {
        year: _this._day.getFullYear()
      };
    },
    'rstart': function rstart() {
      _this._compileDate(_this._shift, new Date(parseInt($.cookie('randDate'))));

      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear()
      };
    },
    'rdate': function rdate(x) {
      var z = x >= 16 ? 16 : x;
      var savedDate = new Date(parseInt($.cookie('randDate')));
      var nextDate = new Date(savedDate.getTime() + z * (12 + z) * (60 + x) * 60 * (1000 + x));
      if (x >= 31) nextDate = new Date(savedDate.getTime() + 2494600000 + x * 150000);

      _this._compileDate(_this._shift, nextDate);

      return {
        day: _this._formatNum(_this._day.getDate()),
        month: _this._formatNum(_this._day.getMonth() + 1),
        year: _this._day.getFullYear(),
        hours: _this._formatNum(_this._day.getHours()),
        minutes: _this._formatNum(_this._day.getMinutes()),
        seconds: _this._formatNum(_this._day.getSeconds())
      };
    }
  };
  return modes[this._mode](this._indexOfCollection);
};

AdcLandDate.prototype.toString = function () {
  var _this2 = this;

  var outputDate = this.getDate(this._indexOfCollection);
  var strings = {
    'dtime_nums': function dtime_nums() {
      return _this2._euFormat ? "".concat(outputDate.day, ".").concat(outputDate.month, ".").concat(outputDate.year) : "".concat(outputDate.month, ".").concat(outputDate.day, ".").concat(outputDate.year);
    },
    'dtime': function dtime() {
      return "".concat(outputDate.weekDay, " ").concat(outputDate.day, ", ").concat(outputDate.month, " ").concat(outputDate.year);
    },
    'dtimes': function dtimes() {
      return "".concat(outputDate.day, " ").concat(outputDate.month);
    },
    'ryear': function ryear() {
      return outputDate.year;
    },
    'rstart': function rstart() {
      return "".concat(outputDate.day, "/").concat(outputDate.month, "/").concat(outputDate.year);
    },
    'rdate': function rdate() {
      return "".concat(outputDate.day, ".").concat(outputDate.month, ".").concat(outputDate.year, " - ").concat(outputDate.hours, ":").concat(outputDate.minutes);
    }
  };
  return strings[this._mode] ? strings[this._mode]() : '';
};

AdcLandDate.init = function () {
  var DAY = 24 * 60 * 60;
  var MONTH = 30 * DAY;
  if (!$.cookie('randDate')) $.cookie('randDate', new Date().getTime() - MONTH * 1000, {
    expires: 1
  });
};

function getLocalizedEntity(date, entity) {
  date = new Date(date);
  var defLang = 'en';
  var locale = window.lang_locale || defLang;
  var configs = {
    month: {
      dict: months_localized,
      method: 'getMonth'
    },
    day: {
      dict: days_localized,
      method: 'getDay'
    }
  };
  var config = configs[entity];
  if (!config) return 'Unknown entity';
  return config.dict[config.dict[locale] ? locale : defLang][date[config.method]()];
}

function dtime_nums(shift, euFormat) {
  var date = new AdcLandDate({
    shift: shift,
    euFormat: euFormat
  });
  document.write(date.toString());
}

function dtime(shift) {
  var date = new AdcLandDate({
    mode: 'dtime',
    shift: shift
  });
  document.write(date.toString());
}

function dtimes(shift) {
  var date = new AdcLandDate({
    mode: 'dtimes',
    shift: shift
  });
  document.write(date.toString());
}

AdcLandDate.init();
$(function () {
  $.fn.adcLandDate = function (mode) {
    var $collection = this;
    $collection.each(function (i) {
      var el = $collection.eq(i);
      var shift = el.attr('data-date-shift');
      var euFormat = el.attr('data-date-eu');
      var date = new AdcLandDate({
        mode: mode,
        shift: shift,
        old: false,
        index: i,
        euFormat: euFormat
      });
      el.text(date.toString());
    });
  };

  $('.ryear, .nowyear').adcLandDate('ryear');
  $('.rstart, .startdate').adcLandDate('rstart');
  $('.rdate, .ypdate').adcLandDate('rdate');
  $('.dtime').adcLandDate('dtime');
  $('.dtime_nums').adcLandDate('dtime_nums');
  $('.dtimes').adcLandDate('dtimes');
});