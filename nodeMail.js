<!DOCTYPE html>
<!-- saved from url=(0049)https://www.w3schools.com/nodejs/nodejs_email.asp -->
<html lang="fr" class="translated-ltr"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>E-mail Node.js</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="Keywords" content="HTML, Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, W3.CSS, XML, MySQL, Icons, NodeJS, React, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website">
<meta name="Description" content="Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.">
<meta property="og:image" content="https://www.w3schools.com/images/w3schools_logo_436_2.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="436">
<meta property="og:image:height" content="228">
<meta property="og:description" content="W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.">
<link rel="icon" href="https://www.w3schools.com/favicon.ico" type="image/x-icon">
<link rel="preload" href="https://www.w3schools.com/lib/fonts/fontawesome.woff2?14663396" as="font" type="font/woff2" crossorigin=""> 
<link rel="preload" href="https://www.w3schools.com/lib/fonts/source-code-pro-v14-latin-regular.woff2" as="font" type="font/woff2" crossorigin=""> 
<link rel="preload" href="https://www.w3schools.com/lib/fonts/roboto-mono-v13-latin-500.woff2" as="font" type="font/woff2" crossorigin=""> 
<link rel="preload" href="https://www.w3schools.com/lib/fonts/source-sans-pro-v14-latin-700.woff2" as="font" type="font/woff2" crossorigin=""> 
<link rel="preload" href="https://www.w3schools.com/lib/fonts/source-sans-pro-v14-latin-600.woff2" as="font" type="font/woff2" crossorigin=""> 
<link rel="preload" href="https://www.w3schools.com/lib/fonts/freckle-face-v9-latin-regular.woff2" as="font" type="font/woff2" crossorigin=""> 
<link rel="stylesheet" href="./nodeMail_files/w3schools30.css">

<script async="" src="./nodeMail_files/wrap.js"></script><script type="text/javascript" src="./nodeMail_files/config.js" async=""></script><script type="text/javascript" async="" src="./nodeMail_files/js"></script><script async="" src="./nodeMail_files/analytics.js"></script><script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3855518-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'GTM-WJ88MZ5');
ga('send', 'pageview');
var subjectFolder = location.pathname;
subjectFolder = subjectFolder.replace("/", "");
subjectFolder = subjectFolder.substr(0, subjectFolder.indexOf("/"));
</script>

<script src="./nodeMail_files/uic.js"></script>
<script data-cfasync="false" type="text/javascript">
var k42 = false;

// GPT slots
var gptAdSlots = [];
window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function() {
    var leaderMapping = googletag.sizeMapping().
      // Mobile ad
      addSize([0, 0], [320, 50]). 
      // Vertical Tablet ad
      addSize([512, 0], [468, 60]). 
      // Horizontal Tablet
      addSize([812, 0], [728, 90]).
      // Small Desktop
      addSize([1025, 0], [468, 60]).
      // Normal Desktop
      addSize([1182, 0], [728, 90]).
      // Large Desktop and bigger ad
      addSize([1457, 0], [[728, 90], [970, 90]]).build();
    gptAdSlots[0] = googletag.defineSlot('/16833175/MainLeaderboard', [[728, 90], [970, 90]], 'div-gpt-ad-1422003450156-2').
      defineSizeMapping(leaderMapping).addService(googletag.pubads());
    var skyMapping = googletag.sizeMapping().
      // Mobile ad
      addSize([0, 0], [320, 50]). 
      // Tablet ad
      addSize([983, 0], [120, 600]). 
      // Desktop
      addSize([1143, 0], [160, 600]).   
      // Large Desktop
      addSize([1683, 0], [[160, 600], [300, 600], [300, 1050]]).build();
    gptAdSlots[1] = googletag.defineSlot('/16833175/WideSkyScraper', [[160, 600], [300, 600], [300, 1050]], 'div-gpt-ad-1422003450156-5').
      defineSizeMapping(skyMapping).addService(googletag.pubads());
    var stickyMapping = googletag.sizeMapping().
      // Mobile ad
      addSize([0, 0], []). 
      // Tablet ad
      addSize([983, 0], [120, 600]). 
      // Desktop
      addSize([1143, 0], [160, 600]).   
      // Large Desktop
      addSize([1683, 0], [[160, 600], [300, 600], [300, 250]]).build();
    gptAdSlots[4] = googletag.defineSlot('/16833175/StickySkyScraper', [[300, 600], [120, 600], [300, 250], [160, 600]], 'div-gpt-ad-1472547360578-0').
      defineSizeMapping(stickyMapping).addService(googletag.pubads());
    var mcontMapping = googletag.sizeMapping().
      // Mobile ad
      addSize([0, 0], [[300, 250], [336, 280], [320, 50]]). 
      // Vertical Tablet ad
      addSize([522, 0], [[300, 250], [336, 280], [468, 60]]). 
      // Horizontal Tablet
      addSize([782, 0], [728, 90]).
      // Small Desktop
      addSize([1025, 0], [[300, 250], [336, 280], [468, 60]]).
      // Normal Desktop
      addSize([1167, 0], [728, 90]).
      // Large Desktop and bigger ad
      addSize([1472, 0], [[728, 90], [970, 90], [970, 250]]).build();
    gptAdSlots[5] = googletag.defineSlot('/16833175/MidContent', [[300, 250], [336, 280]], 'div-gpt-ad-1493883843099-0').
      defineSizeMapping(mcontMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
    var bmrMapping = googletag.sizeMapping().
      // Smaller
      addSize([0, 0], [[300, 250], [336, 280]]). 
      // Large Desktop
      addSize([1272, 0], [[300, 250], [336, 280], [970, 250]]).build();
      gptAdSlots[2] = googletag.defineSlot('/16833175/BottomMediumRectangle', [[300, 250], [336, 280], [970, 250]], 'div-gpt-ad-1422003450156-0').
      defineSizeMapping(bmrMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
    var rbmrMapping = googletag.sizeMapping().
      // Smaller
      addSize([0, 0], []). 
      // Large Desktop
      addSize([1007, 0], [[300, 250], [336, 280]]).build();
      gptAdSlots[3] = googletag.defineSlot('/16833175/RightBottomMediumRectangle', [[300, 250], [336, 280]], 'div-gpt-ad-1422003450156-3').
      defineSizeMapping(rbmrMapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
});  

</script>
<script data-cfasync="false" type="text/javascript">
    window.snigelPubConf = {
    "adengine": {

      "activeAdUnits": [],
      "additionalGptAdSlotIds": ["div-gpt-ad-1422003450156-2", "div-gpt-ad-1422003450156-5", "div-gpt-ad-1472547360578-0", "div-gpt-ad-1493883843099-0", "div-gpt-ad-1422003450156-0", "div-gpt-ad-1422003450156-3"]

  }
}
uic_r_a()
</script>
<script async="" data-cfasync="false" src="./nodeMail_files/loader.js" type="text/javascript"></script>
<script src="./nodeMail_files/my-learning.js"></script>
<script type="text/javascript">
var stickyadstatus = "";
function fix_stickyad() {
  document.getElementById("stickypos").style.position = "sticky";
  var elem = document.getElementById("stickyadcontainer");
  if (!elem) {return false;}
  if (document.getElementById("skyscraper")) {
    var skyWidth = Number(w3_getStyleValue(document.getElementById("skyscraper"), "width").replace("px", ""));  
    }
  else {
    var skyWidth = Number(w3_getStyleValue(document.getElementById("right"), "width").replace("px", ""));  
  }
  elem.style.width = skyWidth + "px";
  if (window.innerWidth <= 992) {
    elem.style.position = "";
    elem.style.top = stickypos + "px";
    return false;
  }
  var stickypos = document.getElementById("stickypos").offsetTop;
  var docTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var adHeight = Number(w3_getStyleValue(elem, "height").replace("px", ""));
  if (stickyadstatus == "") {
    if ((stickypos - docTop) < 60) {
      elem.style.position = "fixed";
      elem.style.top = "60px";
      stickyadstatus = "sticky";
      document.getElementById("stickypos").style.position = "sticky";

    }
  } else {
    if ((docTop + 60) - stickypos < 0) {  
      elem.style.position = "";
      elem.style.top = stickypos + "px";
      stickyadstatus = "";
      document.getElementById("stickypos").style.position = "static";
    }
  }
  if (stickyadstatus == "sticky") {
    if ((docTop + adHeight + 60) > document.getElementById("footer").offsetTop) {
      elem.style.position = "absolute";
      elem.style.top = (document.getElementById("footer").offsetTop - adHeight) + "px";
      document.getElementById("stickypos").style.position = "static";
    } else {
        elem.style.position = "fixed";
        elem.style.top = "60px";
        stickyadstatus = "sticky";
        document.getElementById("stickypos").style.position = "sticky";
    }
  }
}
function w3_getStyleValue(elmnt,style) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elmnt,null).getPropertyValue(style);
  } else {
    return elmnt.currentStyle[style];
  }
}
</script>

<link type="text/css" rel="stylesheet" charset="UTF-8" href="./nodeMail_files/translateelement.css"><script type="text/javascript" async="" src="./nodeMail_files/prebid.js"></script><script type="text/javascript" async="" src="./nodeMail_files/apstag.js"></script><script type="text/javascript" async="" src="./nodeMail_files/gpt.js"></script><script type="text/javascript" async="" src="./nodeMail_files/adngin.js"></script><script type="text/javascript" async="" src="./nodeMail_files/argus.js"></script><style type="text/css">.snigel-cmp-framework .sn-inner {background-color:#fffefe!important;}.snigel-cmp-framework .sn-b-def {border-color:#04aa6d!important;color:#04aa6d!important;}.snigel-cmp-framework .sn-b-def.sn-blue {color:#ffffff!important;background-color:#04aa6d!important;border-color:#04aa6d!important;}.snigel-cmp-framework .sn-selector ul li {color:#04aa6d!important;}.snigel-cmp-framework .sn-selector ul li:after {background-color:#04aa6d!important;}.snigel-cmp-framework .sn-footer-tab .sn-privacy a {color:#04aa6d!important;}.snigel-cmp-framework .sn-arrow:after,.snigel-cmp-framework .sn-arrow:before {background-color:#04aa6d!important;}.snigel-cmp-framework .sn-switch input:checked + span::before {background-color:#04aa6d!important;}#adconsent-usp-link {border: 1px solid #04aa6d!important;color:#04aa6d!important;}#adconsent-usp-banner-optout input:checked + .adconsent-usp-slider {background-color:#04aa6d!important;}#adconsent-usp-banner-btn {color:#ffffff;border: solid 1px #04aa6d!important;background-color:#04aa6d!important; }</style><meta http-equiv="origin-trial" content="AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><script src="./nodeMail_files/pubads_impl_2022061401.js" async=""></script><link rel="preload" href="./nodeMail_files/f(5).txt" as="script"><script type="text/javascript" src="./nodeMail_files/f(5).txt"></script><link rel="preload" href="./nodeMail_files/f(6).txt" as="script"><script type="text/javascript" src="./nodeMail_files/f(6).txt"></script><argprec0></argprec0><argprec1></argprec1><script src="./nodeMail_files/pubcid.min.js"></script><script src="./nodeMail_files/id5-api.js"></script><link rel="preload" href="./nodeMail_files/f(5).txt" as="script"><script type="text/javascript" src="./nodeMail_files/f(5).txt"></script><link rel="preload" href="./nodeMail_files/f(6).txt" as="script"><script type="text/javascript" src="./nodeMail_files/f(6).txt"></script></head><body>
<style>
#darkmodemenu {
  position:absolute;
  top:-40px;
  right:16px;
  padding:5px 20px 10px 18px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  z-index:-1;
  transition: top 0.2s;
  user-select: none;
}
#darkmodemenu input,#darkmodemenu label {
  cursor:pointer;
}
</style>
<script>
(
function setThemeMode() {
  var x = localStorage.getItem("preferredmode");
  var y = localStorage.getItem("preferredpagemode");  
  if (x == "dark") {
    document.body.className += " darktheme";
    ga('send', 'event', 'theme' , "darkcode");    
  }
  if (y == "dark") {
    document.body.className += " darkpagetheme";
    ga('send', 'event', 'theme' , "darkpage");
  }
})();
</script>
<div id="pagetop" class="w3-bar w3-card-2 notranslate">
  <a href="https://www.w3schools.com/" class="w3-bar-item w3-button w3-hover-none w3-left w3-padding-16" title="Home" style="width:77px">
    <i class="fa fa-logo ws-text-green ws-hover-text-green" style="position:relative;font-size:42px!important;"></i>
  </a>

<style>
.topnavmain_pro {
  background-color:#282A35;
  color:#fff;
}
body.darkpagetheme .topnavmain_pro {
  background-color:#fff;
  color:#000;
}
@media screen and (max-width: 1160px) {
  .ws-hide-1160 {
    display: none !important;
  }
}
</style>

  <a class="w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24" href="javascript:void(0)" onclick="w3_open_nav(&#39;tutorials&#39;)" id="navbtn_tutorials" title="Tutorials" style="width:116px">Tutorials <i class="fa fa-caret-down" style="font-size: 20px; display: inline;"></i><i class="fa fa-caret-up" style="display:none"></i></a>
  <a class="w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24" href="javascript:void(0)" onclick="w3_open_nav(&#39;references&#39;)" id="navbtn_references" title="References" style="width:132px">References <i class="fa fa-caret-down" style="font-size: 20px; display: inline;"></i><i class="fa fa-caret-up" style="display:none"></i></a>
  <a class="w3-bar-item w3-button w3-hide-small barex bar-item-hover w3-padding-24 ws-hide-800" href="javascript:void(0)" onclick="w3_open_nav(&#39;exercises&#39;)" id="navbtn_exercises" title="Exercises" style="width:118px">Exercises <i class="fa fa-caret-down" style="font-size: 20px; display: inline;"></i><i class="fa fa-caret-up" style="display:none"></i></a>
  <a class="w3-bar-item w3-button w3-hide-medium bar-item-hover w3-hide-small w3-padding-24 barex topnavmain_video" href="https://www.w3schools.com/videos/index.php" title="Video Tutorials" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Videos&#39; , &#39;fromTopnavMain&#39;)">Videos</a>
  <!--<a class="w3-bar-item w3-button w3-hide-medium bar-item-hover w3-hide-small w3-padding-24 barex" href="/pro/index.php" title="Go Pro" onclick="ga('send', 'event', 'Pro' , 'fromTopnavMainASP')">Pro <span class="ribbon-topnav ws-hide-1080">NEW</span></a>-->

  <a class="w3-bar-item w3-button bar-item-hover w3-padding-24" href="javascript:void(0)" onclick="w3_open()" id="navbtn_menu" title="Menu" style="width:93px">Menu <i class="fa fa-caret-down"></i><i class="fa fa-caret-up" style="display:none"></i></a>

  <div id="loginactioncontainer" class="w3-right w3-padding-16" style="margin-left:50px">
    <div id="mypagediv" style="display: none;"></div>
      <!-- <button id="w3loginbtn" style="border:none;display:none;cursor:pointer" class="login w3-right w3-hover-greener" onclick='w3_open_nav("login")'>LOG IN</button>-->
      <a id="w3loginbtn" class="w3-bar-item w3-btn bar-item-hover w3-right" style="display: inline; width: 130px; background-color: rgb(4, 170, 109); color: white; border-radius: 25px;" href="https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com" target="_self">Log in</a>
  </div>

  <div class="w3-right w3-padding-16">
    <!--<a class="w3-bar-item w3-button bar-icon-hover w3-right w3-hover-white w3-hide-large w3-hide-medium" href="javascript:void(0)" onclick="w3_open()" title="Menu"><i class='fa'>&#xf0c9;</i></a>
    -->
    <a class="w3-bar-item w3-button bar-item-hover w3-right w3-hide-small barex" style="width: 140px; border-radius: 25px; margin-right: 15px;" href="https://courses.w3schools.com/" target="_blank" id="cert_navbtn" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on courses in Main top navigation&#39;);" title="Courses">Paid Courses</a>
    <a class="w3-bar-item w3-button bar-item-hover w3-right ws-hide-900 w3-hide-small barex ws-pink" style="border-radius: 25px; margin-right: 15px;" href="https://www.w3schools.com/spaces" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;spacesFromTopnavMain&#39;, &#39;click&#39;);" title="Get Your Own Website With W3Schools Spaces">Website <span class="ribbon-topnav ws-hide-1160">NEW</span></a>
    <a class="w3-bar-item w3-button bar-item-hover w3-right ws-hide-900 w3-hide-small ws-hide-1066 barex topnavmain_pro" style="border-radius: 25px; margin-right: 15px;" href="https://www.w3schools.com/pro/index.php" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Pro&#39;, &#39;FromTopnavMain&#39;);" title="Go pro and unlock powerful features">Pro <span class="ribbon-topnav ws-hide-1160">NEW</span></a>    

  </div>  
</div>

<div style="display: none; position: fixed; z-index: 4; right: 52px; height: 44px; background-color: rgb(40, 42, 53); letter-spacing: normal; top: 0px;" id="googleSearch">
  <div class="gcse-search"></div>
</div>
<div style="display: none; position: fixed; z-index: 3; right: 111px; height: 44px; background-color: rgb(40, 42, 53); text-align: right; padding-top: 9px; top: 0px;" id="google_translate_element"></div>

<div class="w3-card-2 topnav notranslate" id="topnav" style="position: fixed; top: 0px;">
  <div style="overflow:auto;">
    <div class="w3-bar w3-left" style="width:100%;overflow:hidden;height:44px">
      <a href="javascript:void(0);" class="topnav-icons fa fa-menu w3-hide-large w3-left w3-bar-item w3-button" onclick="open_menu()" title="Menu"></a>
      <a href="https://www.w3schools.com/default.asp" class="topnav-icons fa fa-home w3-left w3-bar-item w3-button" title="Home"></a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/html/default.asp" title="HTML Tutorial" style="padding-left:18px!important;padding-right:18px!important;">HTML</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/css/default.asp" title="CSS Tutorial">CSS</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/js/default.asp" title="JavaScript Tutorial">JAVASCRIPT</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/sql/default.asp" title="SQL Tutorial">SQL</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/default.asp" title="Python Tutorial">PYTHON</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/php/default.asp" title="PHP Tutorial">PHP</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" title="Bootstrap Tutorial">BOOTSTRAP</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/howto/default.asp" title="How To">HOW TO</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS Tutorial">W3.CSS</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/java/default.asp" title="Java Tutorial">JAVA</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/jquery/default.asp" title="jQuery Tutorial">JQUERY</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/c/index.php" title="C Tutorial">C</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cpp/default.asp" title="C++ Tutorial">C++</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cs/index.php" title="C# Tutorial">C#</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/r/default.asp" title="R Tutorial">R</a>
      <a class="w3-bar-item w3-button" href="https://www.w3schools.com/react/default.asp" title="React Tutorial">React</a>
      <a href="javascript:void(0);" class="topnav-icons fa w3-right w3-bar-item w3-button" onclick="gSearch(this)" title="Search W3Schools"></a>
      <a href="javascript:void(0);" class="topnav-icons fa w3-right w3-bar-item w3-button" onclick="gTra(this)" title="Translate W3Schools"></a>
<!--      <a href='javascript:void(0);' class='topnav-icons fa w3-right w3-bar-item w3-button' onclick='changecodetheme(this)' title='Toggle Dark Code Examples'>&#xe80b;</a>-->
      <a href="javascript:void(0);" class="topnav-icons fa w3-right w3-bar-item w3-button" onmouseover="mouseoverdarkicon()" onmouseout="mouseoutofdarkicon()" onclick="changepagetheme(2)"></a>


      <!--
      <a class="w3-bar-item w3-button w3-right" id='topnavbtn_exercises' href='javascript:void(0);' onclick='w3_open_nav("exercises")' title='Exercises'>EXERCISES <i class='fa fa-caret-down'></i><i class='fa fa-caret-up' style='display:none'></i></a>
      -->
      
    </div>
    
<div id="darkmodemenu" class="ws-black" onmouseover="mouseoverdarkicon()" onmouseout="mouseoutofdarkicon()">
<input id="radio_darkpage" type="checkbox" name="radio_theme_mode" onclick="click_darkpage()"><label for="radio_darkpage"> Dark mode</label>
<br>
<input id="radio_darkcode" type="checkbox" name="radio_theme_mode" onclick="click_darkcode()"><label for="radio_darkcode"> Dark code</label>
</div>

<nav id="nav_tutorials" class="w3-hide-small" style="position: absolute; padding-bottom: 60px; display: none;">
 <div class="w3-content" style="max-width:1100px;font-size:18px">
 <span onclick="w3_close_nav(&#39;tutorials&#39;)" class="w3-button w3-xxxlarge w3-display-topright w3-hover-white sectionxsclosenavspan" style="padding-right:30px;padding-left:30px;">×</span><br>
 <div class="w3-row-padding w3-bar-block">
  <div class="w3-container" style="padding-left:13px">
   <h2 style="color:#FFF4A3;"><b>Tutorials</b></h2>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top">HTML and CSS</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/html/default.asp">Learn HTML</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/css/default.asp">Learn CSS</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/css/css_rwd_intro.asp" title="Responsive Web Design">Learn RWD</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp">Learn Bootstrap</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/w3css/default.asp">Learn W3.CSS</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/colors/default.asp">Learn Colors</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/icons/default.asp">Learn Icons</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/graphics/default.asp">Learn Graphics</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/graphics/svg_intro.asp">Learn SVG</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/graphics/canvas_intro.asp">Learn Canvas</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/howto/default.asp">Learn How To</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/sass/default.php">Learn Sass</a>   
   <div class="w3-hide-large w3-hide-small">
   <h3 class="w3-margin-top">Data Analytics</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/ai/default.asp">Learn AI</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/python_ml_getting_started.asp">Learn Machine Learning</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/datascience/default.asp">Learn Data Science</a> 
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/numpy/default.asp">Learn NumPy</a>       
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/pandas/default.asp">Learn Pandas</a>    
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/scipy/index.php">Learn SciPy</a>    
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/matplotlib_intro.asp">Learn Matplotlib</a>    
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/statistics/index.php">Learn Statistics</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/excel/index.php">Learn Excel</a>

   <h3 class="w3-margin-top">XML Tutorials</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/default.asp">Learn XML</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/ajax_intro.asp">Learn XML AJAX</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/dom_intro.asp">Learn XML DOM</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xml_dtd_intro.asp">Learn XML DTD</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/schema_intro.asp">Learn XML Schema</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xsl_intro.asp">Learn XSLT</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xpath_intro.asp">Learn XPath</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xquery_intro.asp">Learn XQuery</a>
  </div>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top">JavaScript</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/js/default.asp">Learn JavaScript</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/jquery/default.asp">Learn jQuery</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/react/default.asp">Learn React</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/angular/default.asp">Learn AngularJS</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/js/js_json_intro.asp">Learn JSON</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/js/js_ajax_intro.asp">Learn AJAX</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/appml/default.asp">Learn AppML</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/w3js/default.asp">Learn W3.JS</a>

   <h3 class="w3-margin-top">Programming</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/default.asp">Learn Python</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/java/default.asp">Learn Java</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/c/index.php">Learn C</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cpp/default.asp">Learn C++</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cs/index.php">Learn C#</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/r/default.asp">Learn R</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/kotlin/index.php">Learn Kotlin</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/go/index.php">Learn Go</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/django/index.php">Learn Django</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/typescript/index.php">Learn TypeScript</a>
  </div> 
 <div class="w3-col l3 m6">
   <h3 class="w3-margin-top">Server Side</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/sql/default.asp">Learn SQL</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/mysql/default.asp">Learn MySQL</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/php/default.asp">Learn PHP</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/asp/default.asp">Learn ASP</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/nodejs/default.asp">Learn Node.js</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp">Learn Raspberry Pi</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/git/default.asp">Learn Git</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/aws/index.php">Learn AWS Cloud</a>

   <h3 class="w3-margin-top">Web Building</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/spaces" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;spacesFromTutorialsAcc&#39;, &#39;click&#39;);" title="Get Your Own Website With W3schools Spaces">Create a Website <span class="ribbon-topnav ws-yellow">NEW</span></a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/where_to_start.asp">Where To Start</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/w3css/w3css_templates.asp">Web Templates</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/browsers/default.asp">Web Statistics</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cert/default.asp">Web Certificates</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/whatis/default.asp">Web Development</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/tryit/default.asp">Code Editor</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/typingspeed/default.asp">Test Your Typing Speed</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/codegame/index.html" target="_blank">Play a Code Game</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cybersecurity/index.php">Cyber Security</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/accessibility/index.php">Accessibility</a>
  </div>
  <div class="w3-col l3 m6 w3-hide-medium">
   <h3 class="w3-margin-top">Data Analytics</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/ai/default.asp">Learn AI</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/python_ml_getting_started.asp">Learn Machine Learning</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/datascience/default.asp">Learn Data Science</a> 
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/numpy/default.asp">Learn NumPy</a>    
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/pandas/default.asp">Learn Pandas</a>    
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/scipy/index.php">Learn SciPy</a>    
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/matplotlib_intro.asp">Learn Matplotlib</a>    
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/statistics/index.php">Learn Statistics</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/excel/index.php">Learn Excel</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/googlesheets/index.php">Learn Google Sheets</a>

   <h3 class="w3-margin-top">XML Tutorials</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/default.asp">Learn XML</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/ajax_intro.asp">Learn XML AJAX</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/dom_intro.asp">Learn XML DOM</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xml_dtd_intro.asp">Learn XML DTD</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/schema_intro.asp">Learn XML Schema</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xsl_intro.asp">Learn XSLT</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xpath_intro.asp">Learn XPath</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xquery_intro.asp">Learn XQuery</a>
  </div>
 </div>
 </div>
 <br class="hidesm">
</nav>

<nav id="nav_references" class="w3-hide-small" style="position: absolute; padding-bottom: 60px; display: none;">
 <div class="w3-content" style="max-width:1100px;font-size:18px">
 <span onclick="w3_close_nav(&#39;references&#39;)" class="w3-button w3-xxxlarge w3-display-topright w3-hover-white sectionxsclosenavspan" style="padding-right:30px;padding-left:30px;">×</span><br>
 <div class="w3-row-padding w3-bar-block">
 <div class="w3-container" style="padding-left:13px">
   <h2 style="color:#FFF4A3;"><b>References</b></h2>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top">HTML</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/tags/default.asp">HTML Tag Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/tags/ref_html_browsersupport.asp">HTML Browser Support</a>   
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/tags/ref_eventattributes.asp">HTML Event Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/colors/default.asp">HTML Color Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/tags/ref_attributes.asp">HTML Attribute Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/tags/ref_canvas.asp">HTML Canvas Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/graphics/svg_reference.asp">HTML SVG Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/graphics/google_maps_reference.asp">Google Maps Reference</a>
   <h3 class="w3-margin-top">CSS</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cssref/default.asp">CSS Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cssref/css3_browsersupport.asp">CSS Browser Support</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cssref/css_selectors.asp">CSS Selector Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp">Bootstrap 3 Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp">Bootstrap 4 Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/w3css/w3css_references.asp">W3.CSS Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/icons/icons_reference.asp">Icon Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/sass/sass_functions_string.php">Sass Reference</a>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top">JavaScript</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/jsref/default.asp">JavaScript Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/jsref/default.asp">HTML DOM Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/jquery/jquery_ref_overview.asp">jQuery Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/angular/angular_ref_directives.asp">AngularJS Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/appml/appml_reference.asp">AppML Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/w3js/w3js_references.asp">W3.JS Reference</a>

   <h3 class="w3-margin-top">Programming</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/python_reference.asp">Python Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/java/java_ref_keywords.asp">Java Reference</a>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top">Server Side</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/sql/sql_ref_keywords.asp">SQL Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/mysql/mysql_ref_functions.asp">MySQL Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/php/php_ref_overview.asp">PHP Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/asp/asp_ref_response.asp">ASP Reference</a>
   <h3 class="w3-margin-top">XML</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/dom_nodetype.asp">XML DOM Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/dom_http.asp">XML Http Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xsl_elementref.asp">XSLT Reference</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/schema_elements_ref.asp">XML Schema Reference</a>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top">Character Sets</h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/charsets/default.asp">HTML Character Sets</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/charsets/ref_html_ascii.asp">HTML ASCII</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/charsets/ref_html_ansi.asp">HTML ANSI</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/charsets/ref_html_ansi.asp">HTML Windows-1252</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/charsets/ref_html_8859.asp">HTML ISO-8859-1</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/charsets/ref_html_symbols.asp">HTML Symbols</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/charsets/ref_html_utf8.asp">HTML UTF-8</a>
  </div>
 </div>
 <br class="hidesm">
 </div>
</nav>

<nav id="nav_exercises" class="w3-hide-small" style="position: absolute; padding-bottom: 60px; display: none;">
 <div class="w3-content" style="max-width:1100px;font-size:18px">
 <span onclick="w3_close_nav(&#39;exercises&#39;)" class="w3-button w3-xxxlarge w3-display-topright w3-hover-white sectionxsclosenavspan" style="padding-right:30px;padding-left:30px;">×</span><br>
 <div class="w3-row-padding w3-bar-block">
 <div class="w3-container" style="padding-left:13px">
   <h2 style="color:#FFF4A3;"><b>Exercises and Quizzes</b></h2>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top"><a class="ws-btn ws-yellow w3-hover-text-white" style="width:155px;font-size:21px" href="https://www.w3schools.com/exercises/index.php">Exercises</a></h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/html/html_exercises.asp">HTML Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/css/css_exercises.asp">CSS Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/js/js_exercises.asp">JavaScript Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/sql/sql_exercises.asp">SQL Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/mysql/mysql_exercises.asp">MySQL Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/php/php_exercises.asp">PHP Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/python_exercises.asp">Python Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/numpy/numpy_exercises.asp">NumPy Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/pandas/pandas_exercises.asp">Pandas Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/scipy/scipy_exercises.php">SciPy Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/jquery/jquery_exercises.asp">jQuery Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/java/java_exercises.asp">Java Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cpp/cpp_exercises.asp">C++ Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cs/cs_exercises.asp">C# Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/r/r_exercises.asp">R Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/kotlin/kotlin_exercises.php">Kotlin Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/go/go_exercises.php">Go Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap/bootstrap_exercises.asp">Bootstrap Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap4/bootstrap_exercises.asp">Bootstrap 4 Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap5/bootstrap_exercises.php">Bootstrap 5 Exercises</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/git/git_exercises.asp">Git Exercises</a>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top"><a class="ws-btn ws-yellow w3-hover-text-white" style="width:135px;font-size:21px" href="https://www.w3schools.com/quiztest/default.asp">Quizzes</a></h3>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/html/html_quiz.asp" target="_top">HTML Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/css/css_quiz.asp" target="_top">CSS Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/js/js_quiz.asp" target="_top">JavaScript Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/sql/sql_quiz.asp" target="_top">SQL Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/mysql/mysql_quiz.asp" target="_top">MySQL Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/php/php_quiz.asp" target="_top">PHP Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/python_quiz.asp" target="_top">Python Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/numpy/numpy_quiz.asp" target="_top">NumPy Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/pandas/pandas_quiz.asp" target="_top">Pandas Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/python/scipy/scipy_quiz.php" target="_top">SciPy Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/jquery/jquery_quiz.asp" target="_top">jQuery Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/java/java_quiz.asp" target="_top">Java Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cpp/cpp_quiz.asp" target="_top">C++ Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cs/cs_quiz.asp" target="_top">C# Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/r/r_quiz.asp" target="_top">R Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/kotlin/kotlin_quiz.php" target="_top">Kotlin Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/xml/xml_quiz.asp" target="_top">XML Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap/bootstrap_quiz.asp" target="_top">Bootstrap Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap4/bootstrap_quiz.asp" target="_top">Bootstrap 4 Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/bootstrap5/bootstrap_quiz.php" target="_top">Bootstrap 5 Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/cybersecurity/cybersecurity_quiz.php">Cyber Security Quiz</a>
   <a class="w3-bar-item w3-button" href="https://www.w3schools.com/accessibility/accessibility_quiz.php">Accessibility Quiz</a>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top"><a class="ws-btn ws-yellow w3-hover-text-white" style="width:135px;font-size:21px" href="https://courses.w3schools.com/" target="_blank">Courses</a></h3>
<!-- cert
   <a class="w3-bar-item w3-button" href="/cert/cert_html_new.asp" target="_top">HTML Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_css.asp" target="_top">CSS Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_javascript.asp" target="_top">JavaScript Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_sql.asp" target="_top">SQL Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_php.asp" target="_top">PHP Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_python.asp" target="_top">Python Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_bootstrap.asp" target="_top">Bootstrap Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_jquery.asp" target="_top">jQuery Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_xml.asp" target="_top">XML Certificate</a>
-->  
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/html" target="_blank">HTML Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/css" target="_blank">CSS Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/javascript" target="_blank">JavaScript Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/programs/front-end" target="_blank">Front End Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/sql" target="_blank">SQL Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/php" target="_blank">PHP Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/python" target="_blank">Python Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/numpy-fundamentals" target="_blank">NumPy Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/pandas-fundamentals" target="_blank">Pandas Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/programs/data-analytics" target="_blank">Data Analytics Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/jquery" target="_blank">jQuery Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/java" target="_blank">Java Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/cplusplus" target="_blank">C++ Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/c-sharp" target="_blank">C# Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/r-fundamentals" target="_blank">R Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/xml" target="_blank">XML Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/introduction-to-cyber-security" target="_blank">Cyber Security Course</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/courses/accessibility-fundamentals" target="_blank">Accessibility Course</a>
  </div>
  <div class="w3-col l3 m6">
   <h3 class="w3-margin-top"><a class="ws-btn ws-yellow w3-hover-text-white" style="width:150px;font-size:21px" href="https://courses.w3schools.com/browse/certifications" target="_blank">Certificates</a></h3>
<!-- cert
   <a class="w3-bar-item w3-button" href="/cert/cert_html_new.asp" target="_top">HTML Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_css.asp" target="_top">CSS Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_javascript.asp" target="_top">JavaScript Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_sql.asp" target="_top">SQL Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_php.asp" target="_top">PHP Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_python.asp" target="_top">Python Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_bootstrap.asp" target="_top">Bootstrap Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_jquery.asp" target="_top">jQuery Certificate</a>
   <a class="w3-bar-item w3-button" href="/cert/cert_xml.asp" target="_top">XML Certificate</a>
-->  
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/html-certification-exam" target="_blank">HTML Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/css-certification-exam" target="_blank">CSS Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/javascript-certification-exam" target="_blank">JavaScript Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/front-end-certification-exam" target="_blank">Front End Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/sql-certification-exam" target="_blank">SQL Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/php-certification-exam" target="_blank">PHP Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/python-certificaftion-exam" target="_blank">Python Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/data-science-certification-exam" target="_blank">Data Science Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/bootstrap-3-certification-exam" target="_blank">Bootstrap 3 Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/bootstrap-4-certification-exam" target="_blank">Bootstrap 4 Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/jquery-certification-exam" target="_blank">jQuery Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/java-certification-exam" target="_blank">Java Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/c-certification-exam" target="_blank">C++ Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/react-certification-exam" target="_blank">React Certificate</a>
   <a class="w3-bar-item w3-button" href="https://courses.w3schools.com/browse/certifications/courses/xml-certification-exam" target="_blank">XML Certificate</a>
  </div>
 </div>
 <br class="hidesm">
 </div>
</nav>


  </div>
</div>

<div id="myAccordion" class="w3-card-2 w3-center w3-hide-large w3-hide-medium ws-grey" style="width: 100%; position: absolute; display: none; padding-top: 44px;">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-xxlarge w3-right"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">×</font></font></a><br>
  <div class="w3-container w3-padding-32">
    <a class="w3-button w3-block" style="font-size:22px;" onclick="open_xs_menu(&#39;tutorials&#39;);" href="javascript:void(0);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tutoriels</font></font><i class="fa fa-caret-down"></i></a>
    <div id="sectionxs_tutorials" class="w3-left-align w3-show" style="background-color:#282A35;color:white;"></div>
    <a class="w3-button w3-block" style="font-size:22px;" onclick="open_xs_menu(&#39;references&#39;)" href="javascript:void(0);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Références</font></font><i class="fa fa-caret-down"></i></a>
    <div id="sectionxs_references" class="w3-left-align w3-show" style="background-color:#282A35;color:white;"></div>
    <a class="w3-button w3-block" style="font-size:22px;" onclick="open_xs_menu(&#39;exercises&#39;)" href="javascript:void(0);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Des exercices</font></font><i class="fa fa-caret-down"></i></a>
    <div id="sectionxs_exercises" class="w3-left-align w3-show" style="background-color:#282A35;color:white;"></div>
    <a class="w3-button w3-block" style="font-size:22px;" href="https://www.w3schools.com/cert/default.asp" target="_blank"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cours payants</font></font></a>
    <a class="w3-button w3-block" style="font-size:22px;" href="https://www.w3schools.com/spaces" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;spacesFromTutorialsAcc&#39;, &#39;click&#39;);" title="Obtenez votre propre site Web avec les espaces W3schools"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Les espaces</font></font></a>
    <a class="w3-button w3-block" style="font-size:22px;" target="_blank" href="https://www.w3schools.com/videos/index.php" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Videos&#39; , &#39;fromTopnavMain&#39;)" title="Tutoriels vidéos"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vidéos</font></font></a>
    <a class="w3-button w3-block" style="font-size:22px;" href="https://shop.w3schools.com/" target="_blank"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Boutique</font></font></a>
    <a class="w3-button w3-block" style="font-size:22px;" href="https://www.w3schools.com/pro/index.php"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pro</font></font></a>
  </div>
</div>

<script>
(
function setThemeCheckboxes() {
  var x = localStorage.getItem("preferredmode");
  var y = localStorage.getItem("preferredpagemode");  
  if (x == "dark") {
    document.getElementById("radio_darkcode").checked = true;
    
  }
  if (y == "dark") {
    document.getElementById("radio_darkpage").checked = true;
  }
})();

function mouseoverdarkicon() {
  if(window.matchMedia("(pointer: coarse)").matches) {
    return false;
  }
  var a = document.getElementById("darkmodemenu");
  a.style.top = "44px";
}
function mouseoutofdarkicon() {
  var a = document.getElementById("darkmodemenu");
  a.style.top = "-40px";
}
function changepagetheme(n) {
  var a = document.getElementById("radio_darkcode");
  var b = document.getElementById("radio_darkpage");
  document.body.className = document.body.className.replace("darktheme", "");
  document.body.className = document.body.className.replace("darkpagetheme", "");    
  document.body.className = document.body.className.replace("  ", " ");
  if (a.checked && b.checked) {
    localStorage.setItem("preferredmode", "light");
    localStorage.setItem("preferredpagemode", "light");
    a.checked = false;
    b.checked = false;    
  } else {
    document.body.className += " darktheme";
    document.body.className += " darkpagetheme";  
    localStorage.setItem("preferredmode", "dark");
    localStorage.setItem("preferredpagemode", "dark");
    a.checked = true;
    b.checked = true;    
  }
}


function click_darkpage() {
  var b = document.getElementById("radio_darkpage");
  if (b.checked) {
    document.body.className += " darkpagetheme";
    document.body.className = document.body.className.replace("  ", " ");    
    localStorage.setItem("preferredpagemode", "dark");
  } else {
    document.body.className = document.body.className.replace("darkpagetheme", "");
    document.body.className = document.body.className.replace("  ", " ");    
    localStorage.setItem("preferredpagemode", "light");
  }
}

function click_darkcode() {
  var a = document.getElementById("radio_darkcode");
  if (a.checked) {
    document.body.className += " darktheme";
    document.body.className = document.body.className.replace("  ", " ");    
    localStorage.setItem("preferredmode", "dark");
  } else {
    document.body.className = document.body.className.replace("darktheme", "");
    document.body.className = document.body.className.replace("  ", " ");
    localStorage.setItem("preferredmode", "light");
  }
}
</script>

<div class="w3-sidebar w3-collapse" id="sidenav" style="top: 44px; display: none;">
  <div id="leftmenuinner" style="padding-top: 44px;">
    <div id="leftmenuinnerinner">
<!--  <a href='javascript:void(0)' onclick='close_menu()' class='w3-button w3-hide-large w3-large w3-display-topright' style='right:16px;padding:3px 12px;font-weight:bold;'>&times;</a>-->
<h2 class="left"><span class="left_h2"><font style="vertical-align: inherit;"></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tutoriel </font><span class="left_h2"><font style="vertical-align: inherit;">Node.js</font></span></font></h2>
<a target="_top" href="https://www.w3schools.com/nodejs/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js ACCUEIL</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_intro.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js Introduction</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_get_started.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js Démarrer</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_modules.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Modules Node.js</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_http.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Module HTTP Node.js</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_filesystem.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Système de fichiers Node.js</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_url.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Module URL Node.js</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_npm.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM Node.js</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_events.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Événements Node.js</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Télécharger des fichiers Node.js</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_email.asp" class="active"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">E-mail Node.js</font></font></a>
<br>
<h2 class="left"><span class="left_h2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> MySQL</font></font></h2>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MySQL Premiers pas</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Créer une base de données MySQL</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Créer une table MySQL</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Insertion MySQL dans</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_select.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MySQL Sélectionner à partir de</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_where.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MySQL Où</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_orderby.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trier MySQL par</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_delete.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Supprimer MySQL</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_drop_table.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Table de dépôt MySQL</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_update.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mise à jour MySQL</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_limit.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Limite MySQL</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mysql_join.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rejoindre MySQL</font></font></a>
<br>
<h2 class="left"><span class="left_h2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> MongoDB</font></font></h2>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MongoDB Commencer</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MongoDB Créer une base de données</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_createcollection.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Créer une collection MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Insertion MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trouver MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_query.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Requête MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_sort.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tri MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Supprimer MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_drop.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Collection de dépôt MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mise à jour MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_limit.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Limite MongoDB</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_mongodb_join.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rejoindre MongoDB</font></font></a>
<br>
<h2 class="left"><span class="left_h2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Framboise</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Pi</font></font></h2>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RasPi Commencer</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi_gpio_intro.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Présentation du GPIO RasPi</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi_blinking_led.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LED clignotante RasPi</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi_led_pushbutton.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LED et bouton-poussoir RasPi</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi_flowing_leds.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LED fluides RasPi</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi_webserver_websocket.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebSocket RasPi</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi_rgb_led_websocket.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebSocket LED RVB RasPi</font></font></a>
<a target="_top" href="https://www.w3schools.com/nodejs/nodejs_raspberrypi_components.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Composants RasPi</font></font></a>
<br>
<h2 class="left"><span class="left_h2"><font style="vertical-align: inherit;"></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Référence </font><span class="left_h2"><font style="vertical-align: inherit;">Node.js</font></span></font></h2>
<a target="_top" href="https://www.w3schools.com/nodejs/ref_modules.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Modules intégrés</font></font></a>

<!--
<a target="_top" href="ref_obj_buffer.asp">Buffer Object</a>
<a target="_top" href="ref_obj_eventemitter.asp">EventEmitter Object(events)</a>
<a target="_top" href="ref_obj_worker.asp">Worker Object(cluster)</a>
<a target="_top" href="ref_obj_cipher.asp">Cipher Object(crypto)</a>
<a target="_top" href="ref_obj_decipher.asp">Decipher Object(crypto)</a>
<a target="_top" href="ref_obj_decipher.asp">DiffieHellman Object(crypto)</a>
<a target="_top" href="ref_obj_decipher.asp">ECDH Object(crypto)</a>
<a target="_top" href="ref_obj_decipher.asp">Hash Object(crypto)</a>
<a target="_top" href="ref_obj_decipher.asp">Hmac Object(crypto)</a>
<a target="_top" href="ref_obj_decipher.asp">Sign Object(crypto)</a>
<a target="_top" href="ref_obj_decipher.asp">Verify Object(crypto)</a>
<a target="_top" href="ref_obj_socket.asp">Socket Object(dgram, net, tls)</a>
<a target="_top" href="ref_obj_readstream.asp">ReadStream Object(fs, stream)</a>
<a target="_top" href="ref_obj_writestream.asp">WriteStream Object(fs, stream)</a>
<a target="_top" href="ref_obj_server.asp">Server Object(http, https, net, tls)</a>
<a target="_top" href="ref_obj_agent.asp">Agent Object(http, https)</a>
<a target="_top" href="ref_obj_request.asp">Request Object(http)</a>
<a target="_top" href="ref_obj_response.asp">Response Object(http)</a>
<a target="_top" href="ref_obj_message.asp">Message Object(http)</a>
<a target="_top" href="ref_obj_interface.asp">Interface Object(readline)</a>
<a target="_top" href="ref_obj_url.asp">URL Object(url)</a>
<a target="_top" href="ref_obj_script.asp">Script Object(vm)</a>
-->
      <br><br>
    </div>
  </div>
</div>
<div class="w3-main w3-light-grey" id="belowtopnav" style="margin-left: 220px; padding-top: 44px;">
  <div class="w3-row w3-white">
    <div class="w3-col l10 m12" id="main">
      <div id="mainLeaderboard" style="overflow:hidden;">
        <!-- MainLeaderboard-->
        
        <div id="div-gpt-ad-1422003450156-2" data-google-query-id="CMml4cbRvPgCFTT01QodehEP4g">
          
        <div id="google_ads_iframe_/16833175/MainLeaderboard_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/16833175/MainLeaderboard_0" name="google_ads_iframe_/16833175/MainLeaderboard_0" title="Contenu publicitaire tiers" width="468" height="60" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Publicité" tabindex="0" data-google-container-id="1" style="border: 0px; vertical-align: bottom;" data-load-complete="true" src="./nodeMail_files/saved_resource.html"></iframe></div></div>

      </div>
<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js </font></font><span class="color_h1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envoyer un e-mail</font></font></span></h1>
<div class="w3-clear nextprev">
<a class="w3-left w3-btn" href="https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">❮ Précédent</font></font></a>
<a class="w3-right w3-btn" href="https://www.w3schools.com/nodejs/nodejs_mysql.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prochain ❯</font></font></a>
</div>
<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le module Nodemailer</font></font></h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le module Nodemailer permet d'envoyer facilement des emails depuis votre ordinateur.</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le module Nodemailer peut être téléchargé et installé à l'aide de npm&nbsp;:</font></font></p>
<div class="w3-example">
<div class="w3-code notranslate w3-black">
C:\Users\<em>Your Name</em>&gt;npm install nodemailer</div>
</div>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Après avoir téléchargé le module Nodemailer, vous pouvez inclure le module dans n'importe quelle application&nbsp;:</font></font></p>
<div class="w3-example">
<div class="w3-code notranslate jsHigh"><span class="jscolor" style="color:black"><span class="jsnumbercolor" style="color:red">
</span>  <span class="jskeywordcolor" style="color:mediumblue">var</span> nodemailer = require(<span class="jsstringcolor" style="color:brown">'nodemailer'</span>); </span></div>
</div>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envoyer un e-mail</font></font></h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vous êtes maintenant prêt à envoyer des e-mails depuis votre serveur.</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Utilisez le nom d'utilisateur et le mot de passe de votre fournisseur de messagerie sélectionné pour envoyer un e-mail. </font><font style="vertical-align: inherit;">Ce tutoriel va vous montrer comment utiliser votre compte Gmail pour envoyer un email :</font></font></p>
<div class="w3-example">
<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Exemple</font></font></h3>
<div class="w3-code notranslate jsHigh"><span class="jscolor" style="color:black"><span class="jsnumbercolor" style="color:red">
</span>  <span class="jskeywordcolor" style="color:mediumblue">var</span> nodemailer = require(<span class="jsstringcolor" style="color:brown">'nodemailer'</span>);<br><br><span class="jskeywordcolor" style="color:mediumblue">var</span> transporter = <span class="jsnumbercolor" style="color:red">
</span>  nodemailer.<span class="jspropertycolor" style="color:black">createTransport</span>({<br>&nbsp; service: <span class="jsstringcolor" style="color:brown">'gmail'</span>,<br>&nbsp; auth: {<br>&nbsp;&nbsp;&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  user: <span class="jsstringcolor" style="color:brown">'<em>youremail@gmail.com</em>'</span>,<br>&nbsp;&nbsp;&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  pass: <span class="jsstringcolor" style="color:brown">'<em>yourpassword</em>'</span><br>&nbsp; }<br>});<br><br><span class="jskeywordcolor" style="color:mediumblue">var</span> mailOptions = {<br>&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  from: <span class="jsstringcolor" style="color:brown">'<em>youremail@gmail.com</em>'</span>,<br>&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  to: <span class="jsstringcolor" style="color:brown">'<em>myfriend@yahoo.com</em>'</span>,<br>&nbsp; subject: <span class="jsstringcolor" style="color:brown">'Sending Email using Node.js'</span>,<br>&nbsp; text: <span class="jsnumbercolor" style="color:red">
</span>  <span class="jsstringcolor" style="color:brown">'That was easy!'</span><br>};<br><br>transporter.<span class="jspropertycolor" style="color:black">sendMail</span>(mailOptions, <span class="jsnumbercolor" style="color:red">
</span>  <span class="jskeywordcolor" style="color:mediumblue">function</span>(error, info){<br>&nbsp; <span class="jskeywordcolor" style="color:mediumblue">if</span> (error) {<br>&nbsp;&nbsp;&nbsp; console.<span class="jspropertycolor" style="color:black">log</span>(error);<br>&nbsp; } <span class="jskeywordcolor" style="color:mediumblue">else</span> {<br><span class="jsnumbercolor" style="color:red">
</span>  &nbsp;&nbsp;&nbsp;<span class="jsnumbercolor" style="color:red">
</span>  console.<span class="jspropertycolor" style="color:black">log</span>(<span class="jsstringcolor" style="color:brown">'Email sent: '</span> + info.<span class="jspropertycolor" style="color:black">response</span>);<br>&nbsp; }<br>}); </span></div>
</div>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Et c'est tout! </font><font style="vertical-align: inherit;">Maintenant, votre serveur est capable d'envoyer des e-mails.</font></font></p>
<hr>
<div id="midcontentadcontainer" style="overflow:auto;text-align:center">
<!-- MidContent -->
<!-- <p class="adtext">Advertisement</p> -->
        
  <div id="div-gpt-ad-1493883843099-0" style="" data-google-query-id="COLX4sbRvPgCFSAgBgAdtT4HaA">
    
  <div id="sn_ad_label_div-gpt-ad-1493883843099-0" class="sn_ad_label" style="color:#000000;font-size:12px;margin:0;text-align:center;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PUBLICITÉ</font></font></div><div id="google_ads_iframe_/16833175/MidContent_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/16833175/MidContent_0" name="google_ads_iframe_/16833175/MidContent_0" title="Contenu publicitaire tiers" width="468" height="280" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Publicité" tabindex="0" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="4" style="border: 0px; vertical-align: bottom;" data-load-complete="true" src="./nodeMail_files/saved_resource(1).html"></iframe></div></div>
  
</div>
<hr>
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Récepteurs multiples</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pour envoyer un e-mail à plusieurs destinataires, ajoutez-les à la propriété "to" de l'objet mailOptions, séparés par des virgules&nbsp;:</font></font></p>
<div class="w3-example">
<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Exemple</font></font></h3>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envoyer un e-mail à plusieurs adresses&nbsp;:</font></font></p>
<div class="w3-code notranslate jsHigh"><span class="jscolor" style="color:black"><span class="jsnumbercolor" style="color:red">
</span>  <span class="jskeywordcolor" style="color:mediumblue">var</span> mailOptions = {<br>&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  from: <span class="jsstringcolor" style="color:brown">'<em>youremail</em>@gmail.com'</span>,<br><strong>&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  to: </strong><span class="jsstringcolor" style="color:brown">'<em><strong>myfriend@yahoo.com</strong></em><strong>, </strong> <em>
  <strong>myotherfriend@yahoo.com</strong></em><strong>'</strong></span><strong>,<br><span class="jsnumbercolor" style="color:red">
</span>  </strong>&nbsp; subject: <span class="jsstringcolor" style="color:brown">'Sending Email using Node.js'</span>,<br>&nbsp; text: 
<span class="jsstringcolor" style="color:brown">'That was easy!'</span><br>} </span></div>
</div>


<hr>
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envoyer HTML</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pour envoyer du texte au format HTML dans votre e-mail, utilisez la propriété "html" au lieu de la propriété "text"&nbsp;:</font></font></p>
<div class="w3-example">
<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Exemple</font></font></h3>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Envoyer un e-mail contenant du HTML&nbsp;:</font></font></p>
<div class="w3-code notranslate jsHigh"><span class="jscolor" style="color:black"><span class="jsnumbercolor" style="color:red">
</span>  <span class="jskeywordcolor" style="color:mediumblue">var</span> mailOptions = {<br>&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  from: <span class="jsstringcolor" style="color:brown">'<em>youremail</em>@gmail.com'</span>,<br>&nbsp; <span class="jsnumbercolor" style="color:red">
</span>  to: <span class="jsstringcolor" style="color:brown">'<em>myfriend@yahoo.com</em>'</span>,<br><span class="jsnumbercolor" style="color:red">
</span>&nbsp; subject: <span class="jsstringcolor" style="color:brown">'Sending Email using Node.js'</span>,<br><strong>&nbsp; html: 
<span class="jsstringcolor" style="color:brown">'&lt;h1&gt;Welcome&lt;/h1&gt;&lt;p&gt;That was easy!&lt;/p&gt;'</span><br></strong>} </span></div>
</div>

<div class="w3-clear nextprev">
<a class="w3-left w3-btn" href="https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">❮ Précédent</font></font></a>
<a class="w3-right w3-btn" href="https://www.w3schools.com/nodejs/nodejs_mysql.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prochain ❯</font></font></a>
</div>
<div id="mypagediv2" style="position:relative;text-align:center;"></div>
<br>

</div>
<div class="w3-col l2 m12" id="right">

<div class="sidesection">
  <div id="skyscraper">
  
    <div id="div-gpt-ad-1422003450156-5" data-google-query-id="CK644cbRvPgCFeOSUQodh8kG4g" style="min-height: 0px;">
       
    <div id="sn_ad_label_div-gpt-ad-1422003450156-5" class="sn_ad_label" style="color:#000000;font-size:12px;margin:0;text-align:center;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PUBLICITÉ</font></font></div><div id="google_ads_iframe_/16833175/WideSkyScraper_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/16833175/WideSkyScraper_0" name="google_ads_iframe_/16833175/WideSkyScraper_0" title="Contenu publicitaire tiers" width="320" height="50" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Publicité" tabindex="0" data-google-container-id="2" style="border: 0px; vertical-align: bottom;" data-load-complete="true" src="./nodeMail_files/saved_resource(2).html"></iframe></div></div>
  
  </div>
</div>
  
<style>
.ribbon-vid {
  font-size:12px;
  font-weight:bold;
  padding: 6px 20px;
  left:-20px;
  top:-10px;
  text-align: center;
  color:black;
  border-radius:25px;
}
</style>

<div class="sidesection" id="video_sidesection">
  <div class="w3-center" style="padding-bottom:7px">
    <span class="ribbon-vid ws-yellow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NOUVEAU</font></font></span>
  </div>
  <p style="font-size: 14px;line-height: 1.5;font-family: Source Sans Pro;padding-left:4px;padding-right:4px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nous venons de lancer </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">les vidéos W3Schools</font></font></p>
  <a onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Videos&#39; , &#39;fromSidebar&#39;);" href="https://www.w3schools.com/videos/index.php" class="w3-hover-opacity"><img src="./nodeMail_files/htmlvideoad_footer.png" style="max-width:100%;padding:5px 10px 25px 10px" loading="lazy"></a>
  <a class="ws-button" style="font-size:16px;text-decoration: none !important;display: block !important; color:#FFC0C7!important;  width: 100%; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; paxdding-top: 10px; padding-bottom: 20px; font-family: &#39;Source Sans Pro&#39;, sans-serif; text-align: center;" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Videos&#39; , &#39;fromSidebar&#39;);" href="https://www.w3schools.com/videos/index.php"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Explorez maintenant</font></font></a>
</div>

<div class="sidesection">
<h4><a href="https://www.w3schools.com/colors/colors_picker.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PIPETTE À COULEURS</font></font></a></h4>
<a href="https://www.w3schools.com/colors/colors_picker.asp">
<img src="./nodeMail_files/colorpicker2000.png" alt="pipette à couleurs" loading="lazy">
</a>
</div>

<div class="sidesection">
<!--<h4>LIKE US</h4>-->
  <div class="sharethis" style="visibility: visible;">
    <a href="https://www.facebook.com/w3schoolscom/" target="_blank" title="Facebook"><span class="fa fa-facebook-square fa-2x"></span></a>
    <a href="https://www.instagram.com/w3schools.com_official/" target="_blank" title="Instagram"><span class="fa fa-instagram fa-2x"></span></a>
    <a href="https://www.linkedin.com/company/w3schools.com/" target="_blank" title="LinkedIn"><span class="fa fa-linkedin-square fa-2x"></span></a>
    <a href="https://discord.gg/6Z7UaRbUQM" target="_blank" title="Rejoignez la communauté W3schools sur Discord"><span class="fa fa-discord fa-2x"></span></a>    
  </div>
</div>

<!--
<div class="sidesection" style="border-radius:5px;color:#555;padding-top:1px;padding-bottom:8px;margin-left:auto;margin-right:auto;max-width:230px;background-color:#d4edda">
<p>Get your<br>certification today!</p>
<a href="/cert/default.asp" target="_blank">
<img src="/images/w3certified_logo_250.png" style="margin:0 12px 20px 10px;max-width:80%">
</a>
<a class="w3-btn w3-margin-bottom" style="text-decoration:none;border-radius:5px;"
href="/cert/default.asp" target="_blank">View options</a>
</div>
-->

<style>
#courses_get_started_btn {
text-decoration:none !important;
background-color:#04AA6D;
width:100%;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
padding-top:10px;
padding-bottom:10px;
font-family: 'Source Sans Pro', sans-serif;
}
#courses_get_started_btn:hover {
background-color:#059862!important;
}
</style>
<div id="internalCourses" class="sidesection">
<p style="font-size:18px;padding-left:2px;padding-right:2px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Obtenez une certification </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en suivant </font></font><br><span id="courses_subject_text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">un</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> cours aujourd'hui&nbsp;!</font></font></p>
<a id="courses_subject_img_link" href="https://courses.w3schools.com/" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on courses banner in ads column&#39;);">
<div style="padding:0 20px 20px 20px">
<svg id="w3_cert_badge2" style="margin:auto;width:85%" data-name="w3_cert_badge2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><defs><style>.cls-1{fill:#04aa6b;}.cls-2{font-size:23px;}.cls-2,.cls-3,.cls-4{fill:#fff;}.cls-2,.cls-3{font-family:RobotoMono-Medium, Roboto Mono;font-weight:500;}.cls-3{font-size:20.08px;}</style></defs><circle class="cls-1" cx="150" cy="150" r="146.47" transform="translate(-62.13 150) rotate(-45)"></circle><text class="cls-2" transform="translate(93.54 63.89) rotate(-29.5)">w</text><text class="cls-2" transform="translate(107.13 56.35) rotate(-20.8)">3</text><text class="cls-2" transform="matrix(0.98, -0.21, 0.21, 0.98, 121.68, 50.97)">s</text><text class="cls-2" transform="translate(136.89 47.84) rotate(-3.47)">c</text><text class="cls-2" transform="translate(152.39 47.03) rotate(5.12)">h</text><text class="cls-2" transform="translate(167.85 48.54) rotate(13.72)">o</text><text class="cls-2" transform="translate(182.89 52.35) rotate(22.34)">o</text><text class="cls-2" transform="matrix(0.86, 0.52, -0.52, 0.86, 197.18, 58.36)">l</text><text class="cls-2" transform="matrix(0.77, 0.64, -0.64, 0.77, 210.4, 66.46)">s</text><text class="cls-3" transform="translate(35.51 186.66) rotate(69.37)"> </text><text class="cls-3" transform="matrix(0.47, 0.88, -0.88, 0.47, 41.27, 201.28)">C</text><text class="cls-3" transform="matrix(0.58, 0.81, -0.81, 0.58, 48.91, 215.03)">E</text><text class="cls-3" transform="matrix(0.67, 0.74, -0.74, 0.67, 58.13, 227.36)">R</text><text class="cls-3" transform="translate(69.16 238.92) rotate(39.44)">T</text><text class="cls-3" transform="matrix(0.85, 0.53, -0.53, 0.85, 81.47, 248.73)">I</text><text class="cls-3" transform="translate(94.94 256.83) rotate(24.36)">F</text><text class="cls-3" transform="translate(109.34 263.09) rotate(16.83)">I</text><text class="cls-3" transform="translate(124.46 267.41) rotate(9.34)">E</text><text class="cls-3" transform="translate(139.99 269.73) rotate(1.88)">D</text><text class="cls-3" transform="translate(155.7 270.01) rotate(-5.58)"> </text><text class="cls-3" transform="translate(171.32 268.24) rotate(-13.06)"> </text><text class="cls-2" transform="translate(187.55 266.81) rotate(-21.04)">.</text><text class="cls-3" transform="translate(203.27 257.7) rotate(-29.24)"> </text><text class="cls-3" transform="translate(216.84 249.83) rotate(-36.75)"> </text><text class="cls-3" transform="translate(229.26 240.26) rotate(-44.15)">2</text><text class="cls-3" transform="translate(240.39 229.13) rotate(-51.62)">0</text><text class="cls-3" transform="translate(249.97 216.63) rotate(-59.17)">2</text><text class="cls-3" transform="matrix(0.4, -0.92, 0.92, 0.4, 257.81, 203.04)">2</text><path class="cls-4" d="M196.64,136.31s3.53,3.8,8.5,3.8c3.9,0,6.75-2.37,6.75-5.59,0-4-3.64-5.81-8-5.81h-2.59l-1.53-3.48,6.86-8.13a34.07,34.07,0,0,1,2.7-2.85s-1.11,0-3.33,0H194.79v-5.86H217.7v4.28l-9.19,10.61c5.18.74,10.24,4.43,10.24,10.92s-4.85,12.3-13.19,12.3a17.36,17.36,0,0,1-12.41-5Z"></path><path class="cls-4" d="M152,144.24l30.24,53.86,14.94-26.61L168.6,120.63H135.36l-13.78,24.53-13.77-24.53H77.93l43.5,77.46.15-.28.16.28Z"></path></svg>
</div>

</a>
<a class="w3-btn" id="courses_get_started_btn" href="https://courses.w3schools.com/" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on courses banner in ads column&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Commencer</font></font></a>
</div>
<script>
switch (subjectFolder) {
  case "cpp":
    subjectText = "C++";
    subjectLink = "https://courses.w3schools.com/courses/cplusplus";
    break;
  case "java":
    subjectText = "Java";
    subjectLink = "https://courses.w3schools.com/courses/java";
    break;
  case "bootstrap4":
    subjectText = "Bootstrap 4";
    subjectLink = "https://courses.w3schools.com/courses/bootstrap4";
    break;  
  case "xml":
    subjectText = "XML";
    subjectLink = "https://courses.w3schools.com/courses/xml";
    break;
  case "jquery":
    subjectText = "jQuery";
    subjectLink = "https://courses.w3schools.com/courses/jquery";
    break;
  case "accessibility":
    subjectText = "Accessibility";
    subjectLink = "https://courses.w3schools.com/courses/accessibility-fundamentals";
    break;
  case "bootstrap":
    subjectText = "Bootstrap 3";
    subjectLink = "https://courses.w3schools.com/courses/bootstrap-3-fundamentals";
    break;
  case "html":
    subjectText = "HTML";
    subjectLink = "https://courses.w3schools.com/courses/html";
    break;
  case "tags":
    subjectText = "HTML";
    subjectLink = "https://courses.w3schools.com/courses/html";
    break;
  case "css":
    subjectText = "CSS";
    subjectLink = "https://courses.w3schools.com/courses/css";
    break;
  case "cssref":
    subjectText = "CSS";
    subjectLink = "https://courses.w3schools.com/courses/css";
    break;
  case "js":
    subjectText = "JavaScript";
    subjectLink = "https://courses.w3schools.com/courses/javascript";
    break;
  case "jsref":
    subjectText = "JavaScript";
    subjectLink = "https://courses.w3schools.com/courses/javascript";
    break;
  case "react":
    subjectText = "React.js";
    subjectLink = "https://courses.w3schools.com/courses/react";
    break;
  case "sql":
    subjectText = "SQL";
    subjectLink = "https://courses.w3schools.com/courses/sql";
    break;
  case "python":
    subjectText = "Python";
    subjectLink = "https://courses.w3schools.com/courses/python";
    break;
  case "php":
    subjectText = "PHP";
    subjectLink = "https://courses.w3schools.com/courses/php";
    break;
  case "cybersecurity":
    subjectText = "Cyber Security";
    subjectLink = "https://courses.w3schools.com/courses/introduction-to-cyber-security";
    break;
  case "r":
    subjectText = "R";
    subjectLink = "https://courses.w3schools.com/courses/r-fundamentals";
    break;
  case "numpy":
    subjectText = "Numpy";
    subjectLink = "https://courses.w3schools.com/courses/numpy-fundamentals";
    break;
  case "pandas":
    subjectText = "Pandas";
    subjectLink = "https://courses.w3schools.com/courses/pandas-fundamentals";
    break;
  case "cs":
    subjectText = "C#";
    subjectLink = "https://courses.w3schools.com/courses/c-sharp";
    break;    
  default:
    subjectText = "a";
    subjectLink = "https://courses.w3schools.com/courses/";
}
if (subjectText != "a") {
  document.getElementById("courses_subject_text").innerHTML = "a " + subjectText + "<br>";
  document.getElementById("courses_subject_img_link").href = subjectLink;
  document.getElementById("courses_get_started_btn").href = subjectLink;
}
</script>

<!--
<div class="sidesection" style="margin-left:auto;margin-right:auto;max-width:230px">
<a href="https://shop.w3schools.com/" target="_blank" title="Buy W3Schools Merchandize">
  <img src="/images/tshirt.jpg" style="max-width:100%;">
</a>
</div>
-->

<div class="sidesection" id="moreAboutSubject">
</div>

<!--
<div id="sidesection_exercise" class="sidesection" style="background-color:#555555;max-width:200px;margin:auto;margin-bottom:32px">
  <div class="w3-container w3-text-white">
    <h4>Exercises</h4>
  </div>
  <div>
    <div class="w3-light-grey">
      <a target="_blank" href="/html/exercise.asp" style="padding-top:8px">HTML</a>
      <a target="_blank" href="/css/exercise.asp">CSS</a>
      <a target="_blank" href="/js/exercise_js.asp">JavaScript</a>
      <a target="_blank" href="/sql/exercise.asp">SQL</a>
      <a target="_blank" href="/php/exercise.asp">PHP</a>
      <a target="_blank" href="/python/exercise.asp">Python</a>
      <a target="_blank" href="/bootstrap/exercise_bs3.asp">Bootstrap</a>
      <a target="_blank" href="/jquery/exercise_jq.asp" style="padding-bottom:8px">jQuery</a>
    </div>
  </div>
</div>
-->

<div class="sidesection codegameright ws-turquoise" style="font-size:18px;font-family: &#39;Source Sans Pro&#39;, sans-serif;border-radius:5px;color:#FFC0C7;padding-top:12px;margin-left:auto;margin-right:auto;max-width:230px;">
<style>
.codegameright .w3-btn:link,.codegameright .w3-btn:visited {
  background-color:#04AA6D;
  border-radius:5px;
}
.codegameright .w3-btn:hover,.codegameright .w3-btn:active {
  background-color:#059862!important;
  text-decoration:none!important;
}
</style>
  <h4><a href="https://www.w3schools.com/codegame/index.html" class="w3-hover-text-black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JEU DE CODE</font></font></a></h4>
  <a href="https://www.w3schools.com/codegame/index.html" target="_blank" class="w3-hover-opacity"><img style="max-width:100%;margin:16px 0;" src="./nodeMail_files/w3lynx_200.png" alt="Jeu de codes" loading="lazy"></a>
  <a class="w3-btn w3-block ws-black" href="https://www.w3schools.com/codegame/index.html" target="_blank" style="padding-top:10px;padding-bottom:10px;margin-top:12px;border-top-left-radius: 0;border-top-right-radius: 0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jouer au jeu</font></font></a>
</div>

<!--

<div class="sidesection w3-light-grey" style="margin-left:auto;margin-right:auto;max-width:230px">
  <div class="w3-container w3-dark-grey">
    <h4><a href="/howto/default.asp" class="w3-hover-text-white">HOW TO</a></h4>
  </div>
  <div class="w3-container w3-left-align w3-padding-16">
    <a href="/howto/howto_js_tabs.asp">Tabs</a><br>
    <a href="/howto/howto_css_dropdown.asp">Dropdowns</a><br>
    <a href="/howto/howto_js_accordion.asp">Accordions</a><br>
    <a href="/howto/howto_js_sidenav.asp">Side Navigation</a><br>
    <a href="/howto/howto_js_topnav.asp">Top Navigation</a><br>
    <a href="/howto/howto_css_modals.asp">Modal Boxes</a><br>
    <a href="/howto/howto_js_progressbar.asp">Progress Bars</a><br>
    <a href="/howto/howto_css_parallax.asp">Parallax</a><br>
    <a href="/howto/howto_css_login_form.asp">Login Form</a><br>
    <a href="/howto/howto_html_include.asp">HTML Includes</a><br>
    <a href="/howto/howto_google_maps.asp">Google Maps</a><br>
    <a href="/howto/howto_js_rangeslider.asp">Range Sliders</a><br>
    <a href="/howto/howto_css_tooltip.asp">Tooltips</a><br>
    <a href="/howto/howto_js_slideshow.asp">Slideshow</a><br>
    <a href="/howto/howto_js_sort_list.asp">Sort List</a><br>
  </div>
</div>
-->

<!--
<div class="sidesection w3-round" style="margin-left:auto;margin-right:auto;max-width:230px">
  <div class="w3-container ws-black" style="border-top-right-radius:5px;border-top-left-radius:5px;">
    <h5><a href="/cert/default.asp" class="w3-hover-text-white">Certificates</a></h5>
  </div>
  <div class="w3-border" style="border-bottom-right-radius:5px;border-bottom-left-radius:5px;">
  <a href="/cert/cert_html.asp" class="w3-button ws-grey w3-block w3-border-bottom" style="text-decoration:none">HTML</a>
  <a href="/cert/cert_css.asp" class="w3-button ws-grey w3-block w3-border-bottom" style="text-decoration:none">CSS</a>
  <a href="/cert/cert_javascript.asp" class="w3-button ws-grey w3-block w3-border-bottom" style="text-decoration:none">JavaScript</a>
  <a href="/cert/cert_frontend.asp" class="w3-button ws-grey w3-block w3-border-bottom" style="text-decoration:none">Front End</a>
  <a href="/cert/cert_python.asp" class="w3-button ws-grey w3-block w3-border-bottom" style="text-decoration:none">Python</a>
  <a href="/cert/cert_sql.asp" class="w3-button ws-grey w3-block w3-border-bottom" style="text-decoration:none">SQL</a>
  <a href="/cert/default.asp" class="w3-button ws-grey w3-block" style="text-decoration:none;">And more</a>
  </div>
</div>
-->

<div id="stickypos" class="sidesection" style="text-align: center; position: sticky; top: 50px;">
  <div id="stickyadcontainer" style="width: 651.984px; top: 2132px;">
    <div style="position:relative;margin:auto;">
      
        <script>
        uic_r_k();
        function secondSnigel() { console.log("google") };
        </script><div id="div-gpt-ad-1472547360578-0" data-google-query-id="CObL5_LPvPgCFYTKUQodb88LgQ"><div id="sn_ad_label_div-gpt-ad-1472547360578-0" class="sn_ad_label" style="color:#000000;font-size:12px;margin:0;text-align:center;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PUBLICITÉ</font></font></div><div id="google_ads_iframe_/16833175/StickySkyScraper_0__container__" style="border: 0pt none; display: inline-block; width: 160px; height: 600px;"><iframe frameborder="0" src="./nodeMail_files/container.html" id="google_ads_iframe_/16833175/StickySkyScraper_0" title="Contenu publicitaire tiers" name="" scrolling="no" marginwidth="0" marginheight="0" width="160" height="600" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Publicité" tabindex="0" data-google-container-id="3" style="border: 0px; vertical-align: bottom;" data-load-complete="true"></iframe></div></div>
      
    </div>
  </div>
</div>

<script>
uic_r_c()
</script>

</div>
</div>
<div id="footer" class="footer w3-container w3-white">

<hr>

<div style="overflow:auto">
  <!-- BottomMediumRectangle -->
  <div class="bottomad" id="div-gpt-ad-1422003450156-0" data-google-query-id="CMXN4sbRvPgCFc4iBgAdS10Ohw">
    
  <div id="sn_ad_label_div-gpt-ad-1422003450156-0" class="sn_ad_label" style="color:#000000;font-size:12px;margin:0;text-align:center;">ADVERTISEMENT</div><div id="google_ads_iframe_/16833175/BottomMediumRectangle_0__container__" style="border: 0pt none; display: inline-block; width: 300px; height: 250px;"><iframe frameborder="0" src="./nodeMail_files/container(1).html" id="google_ads_iframe_/16833175/BottomMediumRectangle_0" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="300" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="5" style="border: 0px; vertical-align: bottom;" data-load-complete="true"></iframe></div></div>
  <!-- RightBottomMediumRectangle -->
  <div class="bottomad" id="div-gpt-ad-1422003450156-3" data-google-query-id="COnL5_LPvPgCFYTKUQodb88LgQ" style="display: none;">
    
  <div id="sn_ad_label_div-gpt-ad-1422003450156-3" class="sn_ad_label" style="color:#000000;font-size:12px;margin:0;text-align:center;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PUBLICITÉ</font></font></div><div id="google_ads_iframe_/16833175/RightBottomMediumRectangle_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/16833175/RightBottomMediumRectangle_0" name="google_ads_iframe_/16833175/RightBottomMediumRectangle_0" title="Contenu publicitaire tiers" width="336" height="280" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Publicité" tabindex="0" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="6" style="border: 0px; vertical-align: bottom;" data-load-complete="true" src="./nodeMail_files/saved_resource(3).html"></iframe></div></div>
</div>

<hr>
<div class="w3-row-padding w3-center w3-small" style="margin:0 -16px;">
<div class="w3-col l3 m3 s12">
<a class="w3-button ws-grey ws-hover-black w3-block w3-round" href="javascript:void(0);" onclick="displayError();return false" style="white-space:nowrap;text-decoration:none;margin-top:1px;margin-bottom:1px;font-size:15px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Signaler une erreur</font></font></a>
</div>
<!--
<div class="w3-col l3 m3 s12">
<a class="w3-button w3-light-grey w3-block" href="javascript:void(0);" target="_blank" onclick="printPage();return false;" style="text-decoration:none;margin-top:1px;margin-bottom:1px">PRINT PAGE</a>
</div>
-->
<div class="w3-col l3 m3 s12">
<a class="w3-button ws-grey ws-hover-black w3-block w3-round" href="https://www.w3schools.com/forum/default.asp" target="_blank" style="text-decoration:none;margin-top:1px;margin-bottom:1px;font-size:15px"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Forum</font></font></a>
</div>
<div class="w3-col l3 m3 s12">
<a class="w3-button ws-grey ws-hover-black w3-block w3-round" href="https://www.w3schools.com/about/default.asp" target="_top" style="text-decoration:none;margin-top:1px;margin-bottom:1px;font-size:15px"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">À propos de</font></font></a>
</div>
<div class="w3-col l3 m3 s12">
<a class="w3-button ws-grey ws-hover-black w3-block w3-round" href="https://shop.w3schools.com/" target="_blank" style="text-decoration:none;margin-top:1px;margin-bottom:1px;font-size:15px"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Boutique</font></font></a>
</div>

</div>
<hr>
<div class="ws-grey w3-padding w3-margin-bottom" id="err_form" style="display:none;position:relative">
<span onclick="this.parentElement.style.display=&#39;none&#39;" class="w3-button w3-display-topright w3-large"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">×</font></font></span>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Signaler une erreur</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Si vous souhaitez signaler une erreur, ou si vous souhaitez faire une suggestion, n'hésitez pas à nous envoyer un e-mail :</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">help@w3schools.com</font></font></p>
<br>

<!--
<h2>Your Suggestion:</h2>
<form>
<div class="w3-section">      
<label for="err_email">Your E-mail:</label>
<input class="w3-input w3-border" type="text" style="margin-top:5px;width:100%" id="err_email" name="err_email">
</div>
<div class="w3-section">      
<label for="err_email">Page address:</label>
<input class="w3-input w3-border" type="text" style="width:100%;margin-top:5px" id="err_url" name="err_url" disabled="disabled">
</div>
<div class="w3-section">
<label for="err_email">Description:</label>
<textarea rows="10" class="w3-input w3-border" id="err_desc" name="err_desc" style="width:100%;margin-top:5px;resize:vertical;"></textarea>
</div>
<div class="form-group">        
<button type="button" class="w3-button w3-dark-grey" onclick="sendErr()">Submit</button>
</div>
<br>
</form>
-->

</div>
<div class="w3-container ws-grey w3-padding" id="err_sent" style="display:none;position:relative">
<span onclick="this.parentElement.style.display=&#39;none&#39;" class="w3-button w3-display-topright"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">×</font></font></span>     
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Merci pour votre aide!</font></font></h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Votre message a été envoyé à W3Schools.</font></font></p>
</div>

<div class="w3-row w3-center w3-small">
<div class="w3-col l3 m6 s12">
<div class="top10">
<h5 style="font-family: &#39;Source Sans Pro&#39;, sans-serif;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Meilleurs tutoriels</font></font></h5>
<a href="https://www.w3schools.com/html/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tutoriel HTML Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/css/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/js/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/howto/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">How To Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/sql/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SQL Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/python/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Python Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/w3css/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3.CSS Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/php/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/java/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Java Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/cpp/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C++ Tutoriel </font></font></a><br>
<a href="https://www.w3schools.com/jquery/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><br>
</div>
</div>
<div class="w3-col l3 m6 s12">
<div class="top10">
<h5 style="font-family: &#39;Source Sans Pro&#39;, sans-serif;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Principales références</font></font></h5>
<a href="https://www.w3schools.com/tags/default.asp">HTML Reference</a><br>
<a href="https://www.w3schools.com/cssref/default.asp">CSS Reference</a><br>
<a href="https://www.w3schools.com/jsref/default.asp">JavaScript Reference</a><br>
<a href="https://www.w3schools.com/sql/sql_ref_keywords.asp">SQL Reference</a><br>
<a href="https://www.w3schools.com/python/python_reference.asp">Python Reference</a><br>
<a href="https://www.w3schools.com/w3css/w3css_references.asp">W3.CSS Reference</a><br>
<a href="https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp">Bootstrap Reference</a><br>
<a href="https://www.w3schools.com/php/php_ref_overview.asp">PHP Reference</a><br>
<a href="https://www.w3schools.com/colors/colors_names.asp">HTML Colors</a><br>
<a href="https://www.w3schools.com/java/java_ref_keywords.asp">Java Reference</a><br>
<a href="https://www.w3schools.com/angular/angular_ref_directives.asp">Angular Reference</a><br>
<a href="https://www.w3schools.com/jquery/jquery_ref_overview.asp">jQuery Reference</a><br>
</div>
</div>
<div class="w3-col l3 m6 s12">
<div class="top10">
<h5 style="font-family: &#39;Source Sans Pro&#39;, sans-serif;">Top Examples</h5>
<a href="https://www.w3schools.com/html/html_examples.asp">HTML Examples</a><br>
<a href="https://www.w3schools.com/css/css_examples.asp">CSS Examples</a><br>
<a href="https://www.w3schools.com/js/js_examples.asp">JavaScript Examples</a><br>
<a href="https://www.w3schools.com/howto/default.asp">How To Examples</a><br>
<a href="https://www.w3schools.com/sql/sql_examples.asp">SQL Examples</a><br>
<a href="https://www.w3schools.com/python/python_examples.asp">Python Examples</a><br>
<a href="https://www.w3schools.com/w3css/w3css_examples.asp">W3.CSS Examples</a><br>
<a href="https://www.w3schools.com/bootstrap/bootstrap_examples.asp">Bootstrap Examples</a><br>
<a href="https://www.w3schools.com/php/php_examples.asp">PHP Examples</a><br>
<a href="https://www.w3schools.com/java/java_examples.asp">Java Examples</a><br>
<a href="https://www.w3schools.com/xml/xml_examples.asp">XML Examples</a><br>
<a href="https://www.w3schools.com/jquery/jquery_examples.asp">jQuery Examples</a><br>
</div>
</div>
<div class="w3-col l3 m6 s12">
<div class="top10">
<!--
<h4>Web Certificates</h4>
<a href="/cert/default.asp">HTML Certificate</a><br>
<a href="/cert/default.asp">CSS Certificate</a><br>
<a href="/cert/default.asp">JavaScript Certificate</a><br>
<a href="/cert/default.asp">SQL Certificate</a><br>
<a href="/cert/default.asp">Python Certificate</a><br>
<a href="/cert/default.asp">PHP Certificate</a><br>
<a href="/cert/default.asp">Bootstrap Certificate</a><br>
<a href="/cert/default.asp">XML Certificate</a><br>
<a href="/cert/default.asp">jQuery Certificate</a><br>
<a href="//www.w3schools.com/cert/default.asp" class="w3-button w3-margin-top w3-dark-grey" style="text-decoration:none">
Get Certified &raquo;</a>
-->

<h5 style="font-family: &#39;Source Sans Pro&#39;, sans-serif;">Web Courses</h5>
<a href="https://courses.w3schools.com/courses/html" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on html course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cours HTML Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/css" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on css course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/javascript" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on javascript course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript Cours </font></font></a><br>
<a href="https://courses.w3schools.com/programs/front-end" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on Front End course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Front End Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/sql" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on sql course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SQL Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/python" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on python course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Python Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/php" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on php course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/jquery" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on jquery course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/java" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on Java course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Java Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/cplusplus" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on C++ course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C++ Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/c-sharp" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on bootstrap C# link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C# Cours </font></font></a><br>
<a href="https://courses.w3schools.com/courses/xml" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on xml course link in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XML</font></font></a><br>
<a href="https://courses.w3schools.com/" target="_blank" class="w3-button w3-margin-top ws-black ws-hover-black w3-round" style="text-decoration:none" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;Courses&#39; , &#39;Clicked on get certified button in footer&#39;);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Obtenir une certification "</font></font></a>

</div>
</div>        
</div>        

<hr>
<div class="w3-center w3-small w3-opacity"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
W3Schools est optimisé pour l'apprentissage et la formation. </font><font style="vertical-align: inherit;">Les exemples peuvent être simplifiés pour améliorer la lecture et l'apprentissage. </font><font style="vertical-align: inherit;">Les didacticiels, les références et les exemples sont constamment revus pour éviter les erreurs, mais nous ne pouvons pas garantir l'exactitude totale de tout le contenu. </font><font style="vertical-align: inherit;">En utilisant W3Schools, vous reconnaissez avoir lu et accepté nos </font></font><a href="https://www.w3schools.com/about/about_copyright.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">conditions d'utilisation</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> , 
 </font></font><a href="https://www.w3schools.com/about/about_privacy.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cookies et politique de confidentialité</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> . </font></font><br><br>
<a href="https://www.w3schools.com/about/about_copyright.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Copyright 1999-2022</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> par Refsnes Data. </font><font style="vertical-align: inherit;">Tous les droits sont réservés. </font></font><br>
<a href="https://www.w3schools.com/w3css/default.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3Schools est propulsé par W3.CSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .</font></font><br><br>
</div>
<div class="w3-center w3-small">
<a href="https://www.w3schools.com/">
    <i class="fa fa-logo ws-text-green ws-hover-text-green" style="position:relative;font-size:42px!important;"></i>
</a></div><a href="https://www.w3schools.com/">
<br><br>
</a></div><a href="https://www.w3schools.com/">

</a></div><div id="goog-gt-tt" class="skiptranslate" dir="ltr"><div style="padding: 8px;"><div><div class="logo"><img src="./nodeMail_files/translate_24dp.png" width="20" height="20" alt="Google Traduction"></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">Texte d'origine</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"><span class="activity-link">Proposer une meilleure traduction</span><span class="activity-link"></span></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"><div class="activity-root"></div></div></div><div class="status-message" style="display: none;"></div></div><a href="https://www.w3schools.com/">
<script src="./nodeMail_files/w3schools_footer.js"></script>

<script>
  MyLearning.loadUser('footer');
  function docReady(fn) {
    document.addEventListener("DOMContentLoaded", fn);
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      fn();
    }
  }
  uic_r_z();
  uic_r_d()
</script><iframe src="./nodeMail_files/container(2).html" style="visibility: hidden; display: none;"></iframe>

<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>  
<![endif]-->

</a><div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div><iframe name="__tcfapiLocator" style="display: none;" src="./nodeMail_files/saved_resource(4).html"></iframe><iframe name="__uspapiLocator" style="display: none;" src="./nodeMail_files/saved_resource(5).html"></iframe><iframe src="./nodeMail_files/aframe.html" width="0" height="0" style="display: none;"></iframe></body></html>