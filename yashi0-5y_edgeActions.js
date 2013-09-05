/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      alert("即将开始下载数据包，页面可能空白一段时间，请勿切换到其它页面或程序。如果长时间无法显示内容，请刷新再试。by雅诗");
      var bgSound = new buzz.sound("tomorrow", {formats:["mp3","ogg"]});
      bgSound.bind("loadeddata",function(e){
        var stage = Edge.getComposition(compId).getStage();
        bgSound.v
        stage.play();
        if (!buzz.isSupported() && !buzz.isOGGSupported()) {
          alert("因为浏览器不兼容，所以声音无法播放");
      	}
      });
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_TXT-Pyashi}", "click", function(sym, e) {
         window.open("https://plus.google.com/105938465531761409080/about", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
        bgSound.play();
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-XiaoQiu}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://plus.google.com/113543130979764343312/about", "_blank");
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-jyuntang}", "click", function(sym, e) {
         window.open("https://plus.google.com/104845353464895979637/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-WuYue}", "click", function(sym, e) {
         window.open("https://plus.google.com/101975853170707139492/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-XuShu}", "click", function(sym, e) {
         window.open("https://plus.google.com/100742800346082897736/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-JiaDaHao}", "click", function(sym, e) {
         window.open("https://plus.google.com/100451406650884759770/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-TonyZhao}", "click", function(sym, e) {
         window.open("https://plus.google.com/104110374793724583010/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-XsummerXia}", "click", function(sym, e) {
         window.open("https://plus.google.com/104172795430787913441/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-YookkeiLau}", "click", function(sym, e) {
         window.open("https://plus.google.com/113792437341211627593/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-KeKai}", "click", function(sym, e) {
         window.open("https://plus.google.com/111426102884964589640/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-slb1}", "click", function(sym, e) {
         window.open("https://plus.google.com/109412783412541049142/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-Sora}", "click", function(sym, e) {
         window.open("https://plus.google.com/103385831457237566022/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-fzs}", "click", function(sym, e) {
         window.open("https://plus.google.com/113895415000742716094/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-MountainChen}", "click", function(sym, e) {
         window.open("https://plus.google.com/104603245338932141930/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-ARIAAOI}", "click", function(sym, e) {
         window.open("https://plus.google.com/106248969113271333267/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-kirikakuMori}", "click", function(sym, e) {
         window.open("https://plus.google.com/107463518008312765564/about", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-johnnyJo}", "click", function(sym, e) {
         window.open("https://plus.google.com/114624281327317570029/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-DaisukeMineko}", "click", function(sym, e) {
         window.open("https://plus.google.com/107149382339235648063/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-HuiChu}", "click", function(sym, e) {
         window.open("https://plus.google.com/106197906004045649936/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-TianShiHui}", "click", function(sym, e) {
         window.open("https://plus.google.com/102594404609241222783/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-SakuraChino}", "click", function(sym, e) {
         window.open("https://plus.google.com/111776961451728322864/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-BunnyLiu}", "click", function(sym, e) {
         window.open("https://plus.google.com/116739339917177742020/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-LenChan}", "click", function(sym, e) {
         window.open("https://plus.google.com/109854140371177498101/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-YiYing}", "click", function(sym, e) {
         window.open("https://plus.google.com/117502044191333255968/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-QiHui}", "click", function(sym, e) {
         window.open("https://plus.google.com/110550381379818305153/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-YouLan}", "click", function(sym, e) {
         window.open("https://plus.google.com/102725466404235496819/about", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-WangZhongYu}", "click", function(sym, e) {
         window.open("https://plus.google.com/104679502443008376703/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-LingNai}", "click", function(sym, e) {
         window.open("https://plus.google.com/101873829070855379840/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-GongZhu}", "click", function(sym, e) {
         window.open("https://plus.google.com/115509749248191707211/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-Ji}", "click", function(sym, e) {
         window.open("https://plus.google.com/115367789248200167129/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-XiaoJiu}", "click", function(sym, e) {
         window.open("https://plus.google.com/114226114136661643726/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-KT}", "click", function(sym, e) {
         window.open("https://plus.google.com/115765981820089103895/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-XueYin}", "click", function(sym, e) {
         window.open("https://plus.google.com/113583019971127595098/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_Text27}", "click", function(sym, e) {
         window.open("https://plus.google.com/105938465531761409080/posts/jLhYwPEwYwc", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         alert("将停止播放并切换到下载页面。进入后点击“Download ZIP”按钮即可。解压缩后打开“下载版点这里观看.htm”文件观看。");
         window.open("https://github.com/cxchope/KagurazakaYashi0.5StAnniversary", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-Wenli}", "click", function(sym, e) {
         window.open("https://plus.google.com/+神楽坂雯麗/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-LanLan}", "click", function(sym, e) {
         window.open("https://plus.google.com/108166216767915380992/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_T-MioAkiyama}", "click", function(sym, e) {
         window.open("https://plus.google.com/112406448635938550505/about", "_blank");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_GSC3}", "click", function(sym, e) {
         window.open("https://plus.google.com/communities/108664007656939503022", "_blank");
      
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-9612029");