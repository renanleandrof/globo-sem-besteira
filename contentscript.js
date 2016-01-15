/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

 
 $('.glb-hl-style-entretenimento').each(function(){ $(this).hide();});
 $('.etc-column').each(function(){ $(this).hide();});
 $('.entretenimento').each(function(){ $(this).hide();});
 $('.famosos-style').each(function(){ $(this).hide();});
 $('.tvg').each(function(){ $(this).hide();});
 
 if ($("div#urgente").html().indexOf("bbb") != -1) {
	$("div#urgente").hide();
 } 
 
 
  var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-37763628-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
