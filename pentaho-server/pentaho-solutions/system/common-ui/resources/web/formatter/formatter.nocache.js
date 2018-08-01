function formatter(){
  var $wnd_0 = window, $doc_0 = document, $stats = $wnd_0.__gwtStatsEvent?function(a){
    return $wnd_0.__gwtStatsEvent(a);
  }
  :null, $sessionId_0 = $wnd_0.__gwtStatsSessionId?$wnd_0.__gwtStatsSessionId:null, scriptsDone, loadDone, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:'formatter', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'begin'});
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc_0.getElementById('formatter');
      var frameWnd = iframe.contentWindow;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name_0){
          return computePropValue(name_0);
        }
        ;
      }
      formatter = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, 'formatter', base, softPermutationId);
      $stats && $stats({moduleName:'formatter', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'end'});
    }
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url + 'clear.cache.gif';
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('formatter.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryMarkerScript(){
      var thisScript;
      if (typeof isBodyLoaded == 'undefined' || !isBodyLoaded()) {
        var markerId = '__gwt_marker_formatter';
        var markerScript;
        $doc_0.write('<script id="' + markerId + '"><\/script>');
        markerScript = $doc_0.getElementById(markerId);
        thisScript = markerScript && markerScript.previousSibling;
        while (thisScript && thisScript.tagName != 'SCRIPT') {
          thisScript = thisScript.previousSibling;
        }
        if (markerScript) {
          markerScript.parentNode.removeChild(markerScript);
        }
        if (thisScript && thisScript.src) {
          return getDirectoryOfFile(thisScript.src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryMarkerScript();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    base = tempBase;
    return tempBase;
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content_0;
      if (name_0) {
        name_0 = name_0.replace('formatter::', '');
        if (name_0.indexOf('::') >= 0) {
          continue;
        }
        if (name_0 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_0 = content_0.substring(0, eq);
              value = content_0.substring(eq + 1);
            }
             else {
              name_0 = content_0;
              value = '';
            }
            metaProps[name_0] = value;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  function __gwt_isKnownPropertyValue(propName, propValue){
    return propValue in values[propName];
  }

  function __gwt_getMetaProperty(name_0){
    var value = metaProps[name_0];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc_0.createElement('iframe');
      iframe.src = "javascript:''";
      iframe.id = 'formatter';
      iframe.style.cssText = 'position:absolute;width:0;height:0;border:none';
      iframe.tabIndex = -1;
      $doc_0.body.appendChild(iframe);
      $stats && $stats({moduleName:'formatter', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'moduleRequested'});
      iframe.contentWindow.location.replace(base + initialHtml);
    }
  }

  providers['locale'] = function(){
    var locale = null;
    var rtlocale = 'default';
    try {
      if (!locale) {
        var queryParam = location.search;
        var qpStart = queryParam.indexOf('locale=');
        if (qpStart >= 0) {
          var value = queryParam.substring(qpStart + 7);
          var end = queryParam.indexOf('&', qpStart);
          if (end < 0) {
            end = queryParam.length;
          }
          locale = queryParam.substring(qpStart + 7, end);
        }
      }
      if (!locale) {
        locale = __gwt_getMetaProperty('locale');
      }
      if (!locale) {
        locale = $wnd_0['__gwt_Locale'];
      }
      if (locale) {
        rtlocale = locale;
      }
      while (locale && !__gwt_isKnownPropertyValue('locale', locale)) {
        var lastIndex = locale.lastIndexOf('_');
        if (lastIndex < 0) {
          locale = null;
          break;
        }
        locale = locale.substring(0, lastIndex);
      }
    }
     catch (e) {
      alert('Unexpected exception in locale detection, using default: ' + e);
    }
    $wnd_0['__gwt_Locale'] = rtlocale;
    return locale || 'default';
  }
  ;
  values['locale'] = {ar:0, de:1, 'default':2, en:3, en_GB:4, en_US:5, es:6, fi:7, fr:8, it:9, ja:10, ko:11, nl:12, no:13, pt:14, ru:15, sv:16, zh_CN:17, zh_TW:18};
  providers['user.agent'] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (function(){
      return ua.indexOf('opera') != -1;
    }
    ())
      return 'opera';
    if (function(){
      return ua.indexOf('webkit') != -1;
    }
    ())
      return 'safari';
    if (function(){
      return ua.indexOf('msie') != -1 && $doc_0.documentMode >= 9;
    }
    ())
      return 'ie9';
    if (function(){
      return ua.indexOf('msie') != -1 && $doc_0.documentMode >= 8;
    }
    ())
      return 'ie8';
    if (function(){
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3)
        return makeVersion(result) >= 6000;
    }
    ())
      return 'ie6';
    if (function(){
      return ua.indexOf('gecko') != -1;
    }
    ())
      return 'gecko1_8';
    return 'unknown';
  }
  ;
  values['user.agent'] = {gecko1_8:0, ie6:1, ie8:2, ie9:3, opera:4, safari:5};
  formatter.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  formatter.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:'formatter', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'end'});
    maybeStartModule();
  }
  ;
  processMetas();
  computeScriptBase();
  var strongName;
  var initialHtml;
  if (isHostedMode()) {
    if ($wnd_0.external && ($wnd_0.external.initModule && $wnd_0.external.initModule('formatter'))) {
      $wnd_0.location.reload();
      return;
    }
    initialHtml = 'hosted.html?formatter';
    strongName = '';
  }
  $stats && $stats({moduleName:'formatter', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'selectingPermutation'});
  if (!isHostedMode()) {
    try {
      unflattenKeylistIntoAnswers(['zh_CN', 'safari'], '0AD1CF50FD1790F2F6973241CC28CAD8');
      unflattenKeylistIntoAnswers(['ja', 'ie6'], '0D6FD0C0015BB1F567E1AC80D15695A4');
      unflattenKeylistIntoAnswers(['fi', 'opera'], '0DC7A29FE70782ECE0EB75BAF5598DF6');
      unflattenKeylistIntoAnswers(['fr', 'ie6'], '0E5B508B166D1A946D9E0DE040CE9D8E');
      unflattenKeylistIntoAnswers(['fi', 'ie8'], '0F98E56122C6C09DDBB4ECF4DD565431');
      unflattenKeylistIntoAnswers(['ru', 'ie6'], '0FD6BA2BF05429593AF8621D99A457DC');
      unflattenKeylistIntoAnswers(['default', 'ie8'], '1379791300354ACCAAFED430CF108C60');
      unflattenKeylistIntoAnswers(['default', 'ie6'], '14873DB5DBD9B4A115C6CF6D4A2CC3D3');
      unflattenKeylistIntoAnswers(['ko', 'safari'], '168098423EC98667E936581D9A7F6816');
      unflattenKeylistIntoAnswers(['sv', 'opera'], '16DEB5139CF6603CBC33DE1C2A21D8E5');
      unflattenKeylistIntoAnswers(['fr', 'ie8'], '185EC6C6E45CCA9367EE4B1C003EBAAE');
      unflattenKeylistIntoAnswers(['es', 'gecko1_8'], '1B02598131EA1F3789E08428F17003A4');
      unflattenKeylistIntoAnswers(['default', 'gecko1_8'], '1BB7DFCD20D396CB7460D624EEBCC9E2');
      unflattenKeylistIntoAnswers(['fr', 'ie9'], '1D634AA42377BC6DE693FF86E1638C96');
      unflattenKeylistIntoAnswers(['pt', 'ie8'], '1F488E52599A552FD8BC229E182E0C41');
      unflattenKeylistIntoAnswers(['fr', 'gecko1_8'], '202803613447AD6A1824F96E663A933A');
      unflattenKeylistIntoAnswers(['de', 'ie9'], '2134089DCA0CF8B7A649135B75780D8C');
      unflattenKeylistIntoAnswers(['sv', 'ie9'], '257662F0188C0BF7AA857D4F8540E671');
      unflattenKeylistIntoAnswers(['es', 'safari'], '25997759739FC072B1C511BF0083D8EF');
      unflattenKeylistIntoAnswers(['ja', 'opera'], '2606013E60863635371F6BB33EEB14DD');
      unflattenKeylistIntoAnswers(['zh_CN', 'opera'], '27D97BE934F444A8435622D948FAF119');
      unflattenKeylistIntoAnswers(['nl', 'opera'], '2CC2C2D6CF6D73E23478BD01FB4E3729');
      unflattenKeylistIntoAnswers(['pt', 'ie6'], '2DD108678E76A5DBCA3F9713B3D80C1F');
      unflattenKeylistIntoAnswers(['zh_CN', 'gecko1_8'], '2DE55B609071565837249E82D20711CE');
      unflattenKeylistIntoAnswers(['pt', 'ie9'], '2EAAC1A555D2FC85786BBB05F70486DE');
      unflattenKeylistIntoAnswers(['zh_CN', 'ie6'], '31FD2A13302789E3D8CA67BC991AAD46');
      unflattenKeylistIntoAnswers(['nl', 'gecko1_8'], '3233365510E9DAAFBC5F6A1B3F2DD0FE');
      unflattenKeylistIntoAnswers(['en', 'ie9'], '38EDC3A785D8F7FFF85D4809CC6E9E9B');
      unflattenKeylistIntoAnswers(['en_US', 'ie9'], '38EDC3A785D8F7FFF85D4809CC6E9E9B');
      unflattenKeylistIntoAnswers(['de', 'gecko1_8'], '3950BACA2BC262C532A34681AC1CFD14');
      unflattenKeylistIntoAnswers(['en_GB', 'ie9'], '39994CC3A4D0DB89DA9EE7FD643AA617');
      unflattenKeylistIntoAnswers(['en_GB', 'opera'], '3AECFA6673932DA896F6029FC6B4D881');
      unflattenKeylistIntoAnswers(['ru', 'gecko1_8'], '3C152DEFCBD7BDA7CF095468F4C42E19');
      unflattenKeylistIntoAnswers(['ja', 'ie9'], '3C3E687815C1608C349B7E847339D361');
      unflattenKeylistIntoAnswers(['en', 'gecko1_8'], '3C8B824D3E132E68772D1BAE990AFBAE');
      unflattenKeylistIntoAnswers(['en_US', 'gecko1_8'], '3C8B824D3E132E68772D1BAE990AFBAE');
      unflattenKeylistIntoAnswers(['nl', 'ie8'], '3DE521E8BBA7630E89E0EBB872148B48');
      unflattenKeylistIntoAnswers(['no', 'safari'], '3E73496E39C4F933B4F09F5461FFB0DC');
      unflattenKeylistIntoAnswers(['ko', 'ie9'], '3F3D07D4DB7F45FAA04637C815540C0E');
      unflattenKeylistIntoAnswers(['no', 'ie8'], '4138DFBA9E88CC1ABF856ACCB3902850');
      unflattenKeylistIntoAnswers(['en_GB', 'ie8'], '4154C560693315F8A7F6E544AE1B9DAF');
      unflattenKeylistIntoAnswers(['zh_TW', 'ie9'], '437947A0EF78833178E90836781BD4C8');
      unflattenKeylistIntoAnswers(['ru', 'safari'], '466FAF54618A29B62503111C584A63BD');
      unflattenKeylistIntoAnswers(['fi', 'ie6'], '47DBC6E66DEDF49E73504F5074961EA6');
      unflattenKeylistIntoAnswers(['en', 'ie8'], '4B74463C8CF31B1F10C899D0E24074F5');
      unflattenKeylistIntoAnswers(['en_US', 'ie8'], '4B74463C8CF31B1F10C899D0E24074F5');
      unflattenKeylistIntoAnswers(['fi', 'safari'], '4E0E1BBF9CE745E56EBD0DFCC97D7DAB');
      unflattenKeylistIntoAnswers(['pt', 'gecko1_8'], '530ACABD0B32B5F959E3EB3A3A5A65A3');
      unflattenKeylistIntoAnswers(['sv', 'safari'], '547B3E1171969A89BE680ACECC39503E');
      unflattenKeylistIntoAnswers(['en_GB', 'gecko1_8'], '55701FFCA9B6E4468E49FB1418B3186F');
      unflattenKeylistIntoAnswers(['ru', 'opera'], '55A252095C384B81443664CFD0EB4EC4');
      unflattenKeylistIntoAnswers(['zh_TW', 'opera'], '55E478E04FF99404AC0B9D171B1B78E5');
      unflattenKeylistIntoAnswers(['ko', 'opera'], '5824DEAB50FBACF96641BD5857E47D7B');
      unflattenKeylistIntoAnswers(['it', 'ie8'], '5838A275CFEDBD4110F554125926F8BB');
      unflattenKeylistIntoAnswers(['it', 'opera'], '5E783BE7D1195F5723D144480DCA679C');
      unflattenKeylistIntoAnswers(['es', 'opera'], '5EF5154A1B50327610A027BA42EA920E');
      unflattenKeylistIntoAnswers(['nl', 'ie6'], '5F081DE163BD53A6EB514F940652A390');
      unflattenKeylistIntoAnswers(['pt', 'opera'], '6211B535F878EC2774B85F0190653BB3');
      unflattenKeylistIntoAnswers(['ar', 'safari'], '64AE6F57EB7F26D0BED3F14ABD248747');
      unflattenKeylistIntoAnswers(['no', 'ie9'], '682DC9B0637F9C5E0A4B12569DFD71B1');
      unflattenKeylistIntoAnswers(['sv', 'ie8'], '68BC3573F7C5A0571817505A9313F0E9');
      unflattenKeylistIntoAnswers(['en', 'opera'], '6B1428EE5114CC4D5A3ECDB468459F1C');
      unflattenKeylistIntoAnswers(['en_US', 'opera'], '6B1428EE5114CC4D5A3ECDB468459F1C');
      unflattenKeylistIntoAnswers(['ja', 'ie8'], '6D154BCE5682AAE8F07AE7A2A5DD7F84');
      unflattenKeylistIntoAnswers(['zh_TW', 'ie6'], '70173E4690B437822FC2DD201F84E437');
      unflattenKeylistIntoAnswers(['ar', 'opera'], '744024004A4A8B689E34333F1176F220');
      unflattenKeylistIntoAnswers(['de', 'opera'], '760BB35A396FA12E9DB3965082F6A3BD');
      unflattenKeylistIntoAnswers(['ko', 'gecko1_8'], '7656938B9D2B6DE3D8368912E27E0030');
      unflattenKeylistIntoAnswers(['ru', 'ie9'], '7691A347CEED34617B9EDE3ACB3BF978');
      unflattenKeylistIntoAnswers(['en', 'safari'], '7AD643B925D69700380DC266F4B8632D');
      unflattenKeylistIntoAnswers(['en_US', 'safari'], '7AD643B925D69700380DC266F4B8632D');
      unflattenKeylistIntoAnswers(['de', 'ie6'], '7AF9ABC7931442A5B36F031F3E411BD6');
      unflattenKeylistIntoAnswers(['zh_TW', 'ie8'], '7DB359DF531236FA309BDED5DB08CBBF');
      unflattenKeylistIntoAnswers(['ko', 'ie6'], '829CE6AD123E7E6ACBACA7006813D9E8');
      unflattenKeylistIntoAnswers(['no', 'opera'], '831513C47C280C0781EE7FDB52887324');
      unflattenKeylistIntoAnswers(['ar', 'gecko1_8'], '8A1BDDE7E51D5F0CB8571210C3C1DCB5');
      unflattenKeylistIntoAnswers(['ar', 'ie8'], '90317863CF3AFD58F425EDDF4A630935');
      unflattenKeylistIntoAnswers(['nl', 'safari'], '97947ABD9FB466F87F160BF499B0A3C6');
      unflattenKeylistIntoAnswers(['default', 'safari'], '97A3F48B99DF55C635622EC4E052C0E2');
      unflattenKeylistIntoAnswers(['ru', 'ie8'], '97DE338E187A66617104E32FAB0D942E');
      unflattenKeylistIntoAnswers(['en', 'ie6'], '985BA45E3895FE69E1187158CD0F4723');
      unflattenKeylistIntoAnswers(['en_US', 'ie6'], '985BA45E3895FE69E1187158CD0F4723');
      unflattenKeylistIntoAnswers(['fi', 'gecko1_8'], '986A1BB6FE86B73CF23B47B61361A3AD');
      unflattenKeylistIntoAnswers(['fr', 'safari'], '9C1CE11C778F571C25FB62D3155F5B60');
      unflattenKeylistIntoAnswers(['es', 'ie6'], 'A0D0E1898A359D23205A99A8DC3A9279');
      unflattenKeylistIntoAnswers(['de', 'safari'], 'A2011649D94B667A2012E7E7449AD5BC');
      unflattenKeylistIntoAnswers(['no', 'ie6'], 'A2E5DC070F335B62B946735FC1973F09');
      unflattenKeylistIntoAnswers(['ja', 'gecko1_8'], 'A5EB9A224978BA886917EEE572CF1092');
      unflattenKeylistIntoAnswers(['fr', 'opera'], 'A803451DF112D05D708134754E3528BE');
      unflattenKeylistIntoAnswers(['zh_CN', 'ie9'], 'A9BBC71C5955570E140B0EA7CBDDA049');
      unflattenKeylistIntoAnswers(['default', 'opera'], 'A9BF86D9D8C30B94C14C99A481837DA7');
      unflattenKeylistIntoAnswers(['es', 'ie8'], 'AFAF107FB2A6D0CD9586B86AFCC460F8');
      unflattenKeylistIntoAnswers(['no', 'gecko1_8'], 'BC868DD09CC6057DC24769377AFBB6F0');
      unflattenKeylistIntoAnswers(['pt', 'safari'], 'BD49AA05E455309E072F459DA94416D2');
      unflattenKeylistIntoAnswers(['it', 'safari'], 'BE023A15DC924B75C613730D160CEBAB');
      unflattenKeylistIntoAnswers(['en_GB', 'safari'], 'C02EE035CE5FF22A272A53ED2FA672A0');
      unflattenKeylistIntoAnswers(['ko', 'ie8'], 'C19EE319A562C87E7988DB1D0ADFAF82');
      unflattenKeylistIntoAnswers(['it', 'ie6'], 'C92457ACED2D9198BD56D026E5FD9B42');
      unflattenKeylistIntoAnswers(['nl', 'ie9'], 'C9EA1F17F9B2451E9AA9EC8743D4F9DF');
      unflattenKeylistIntoAnswers(['fi', 'ie9'], 'D6302B7414C092371997B0DC3BCA0538');
      unflattenKeylistIntoAnswers(['es', 'ie9'], 'D97B59396E065302DED6D2134C6DDBB1');
      unflattenKeylistIntoAnswers(['ar', 'ie6'], 'D98ECFAA4BA618CADBCF24CA3C70536E');
      unflattenKeylistIntoAnswers(['sv', 'gecko1_8'], 'E01EC46BE10CC2B6B65D548221322726');
      unflattenKeylistIntoAnswers(['sv', 'ie6'], 'E36F6F1393002886D431F1453ED295BF');
      unflattenKeylistIntoAnswers(['zh_TW', 'safari'], 'E390E98CBFA97000D7499D9384B0CC8F');
      unflattenKeylistIntoAnswers(['en_GB', 'ie6'], 'E8FCA7ADEAC4FD576BEFBCE9CA990CD9');
      unflattenKeylistIntoAnswers(['zh_TW', 'gecko1_8'], 'EA30C42ACEB49EEA068FD7D37965F82B');
      unflattenKeylistIntoAnswers(['default', 'ie9'], 'EAB1085A13BFB142B46277B93579E61C');
      unflattenKeylistIntoAnswers(['de', 'ie8'], 'EB1950A751F826F1131296E95AD56004');
      unflattenKeylistIntoAnswers(['ar', 'ie9'], 'EC3B6B2B4C2C3F40924978E9F70CF601');
      unflattenKeylistIntoAnswers(['zh_CN', 'ie8'], 'F25D0E2D9E0F95DAE9CF5397785CD3BC');
      unflattenKeylistIntoAnswers(['it', 'ie9'], 'F2E8B6C16908DCC0F27FEE77603D913E');
      unflattenKeylistIntoAnswers(['ja', 'safari'], 'F2EEB208CA56F455063B6EFD87FE7B86');
      unflattenKeylistIntoAnswers(['it', 'gecko1_8'], 'FB6C37E7F83C21AFA132F5DA0F16D1B7');
      strongName = answers[computePropValue('locale')][computePropValue('user.agent')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = Number(strongName.substring(idx + 1));
        strongName = strongName.substring(0, idx);
      }
      initialHtml = strongName + '.cache.html';
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:'formatter', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'end'});
  $stats && $stats({moduleName:'formatter', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'begin'});
  $doc_0.write('<script defer="defer">formatter.onInjectionDone(\'formatter\')<\/script>');
}

formatter();
