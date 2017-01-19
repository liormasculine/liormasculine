/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var b=a.extend({active:"selected",header:"",label:""},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,f=".l_"+d,e=a("<select/>").attr("id",d).addClass("tinynav "+d);if(h.is("ul,ol")){""!==b.header&&e.append(a("<option/>").text(b.header));var c="";h.addClass("l_"+d).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});e.append(c);
b.header||e.find(":eq("+a(f+" li").index(a(f+" li."+b.active))+")").attr("selected",!0);e.change(function(){i.location.href=a(this).val()});a(f).after(e);b.label&&e.before(a("<label/>").attr("for",d).addClass("tinynav_label "+d+"_label").append(b.label))}})}})(jQuery,this,0);


function removeHtmlTag(strx,chop){ 
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<"); 
		for(var i=0;i<s.length;i++){ 
			if(s[i].indexOf(">")!=-1){ 
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
			} 
		} 
		strx =  s.join(""); 
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2; 
	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
	strx = strx.substring(0,chop-1); 
	return strx+'...'; 
}

function createSummaryAndThumb(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg;
	if(img.length>=1) {	
		imgtag = '<span style="float:left; padding:0px 10px 5px 0px;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>';
		summ = summary_img;
	}
	
	var summary = imgtag + '<div>' + '</div>';
	div.innerHTML = summary;
}



var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
function related_results_labels_thumbs(json) {
for (var i = 0; i < json.feed.entry.length; i++) {
var entry = json.feed.entry[i];
relatedTitles[relatedTitlesNum] = entry.title.$t;
try 
{thumburl[relatedTitlesNum]=entry.media$thumbnail.url;}


catch (error){

s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
{thumburl[relatedTitlesNum]=d;} else {if(typeof(defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum]=defaultnoimage; else thumburl[relatedTitlesNum]="http://3.bp.blogspot.com/-PpjfsStySz0/UF91FE7rxfI/AAAAAAAACl8/092MmUHSFQ0/s1600/no_image.jpg";}

}

if(relatedTitles[relatedTitlesNum].length>35) relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0, 35)+"...";
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
relatedUrls[relatedTitlesNum] = entry.link[k].href;
relatedTitlesNum++;


}
}
}
}
function removeRelatedDuplicates_thumbs() {
var tmp = new Array(0);
var tmp2 = new Array(0);
var tmp3 = new Array(0);
for(var i = 0; i < relatedUrls.length; i++) {
if(!contains_thumbs(tmp, relatedUrls[i])) 
{
tmp.length += 1;
tmp[tmp.length - 1] = relatedUrls[i];
tmp2.length += 1;
tmp3.length += 1;
tmp2[tmp2.length - 1] = relatedTitles[i];
tmp3[tmp3.length - 1] = thumburl[i];
}
}
relatedTitles = tmp2;
relatedUrls = tmp;
thumburl=tmp3;


}

function contains_thumbs(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}

var _0xb458=["\x76\x61\x6C","\x23\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x6C\x69\x6E\x6B\x73","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x65\x6F\x62\x6C\x6F\x67\x67\x65\x72\x74\x65\x6D\x70\x6C\x61\x74\x65\x73\x2E\x63\x6F\x6D\x2F","\x61\x74\x74\x72","\x72\x65\x61\x64\x79"];$(document)[_0xb458[6]](function (){var _0x9ba6x1=$(_0xb458[1])[_0xb458[0]]();if(_0x9ba6x1==null){window[_0xb458[3]][_0xb458[2]]=_0xb458[4];} ;$(_0xb458[1])[_0xb458[5]](_0xb458[2],_0xb458[4]);} );


function printRelatedLabels_thumbs(current) {
var splitbarcolor;
if(typeof(splittercolor) !== 'undefined') splitbarcolor=splittercolor; else splitbarcolor="#DDDDDD";
for(var i = 0; i < relatedUrls.length; i++)
{
if((relatedUrls[i]==current)||(!relatedTitles[i]))
{
relatedUrls.splice(i,1);
relatedTitles.splice(i,1);
thumburl.splice(i,1);
i--;
}
}


var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;

if(relatedTitles.length>0) document.write('<h2>'+relatedpoststitle+'</h2>');
document.write('<div style="clear: both;"/>');
while (i < relatedTitles.length && i < 20 && i<maxresults) {
document.write('<a style="text-decoration:none;padding:5px;float:left;');
if(i!=0) document.write('border-left:solid 0.5px '+splitbarcolor+';"');
else document.write('"');
document.write(' href="' + relatedUrls[r] + '"><img src="'+thumburl[r]+'"/><br/><div class="nichewala" style="padding-left:3px;border: 0pt none ; margin: 3px 0pt 0pt; padding: 0pt; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: normal; font-size-adjust: none; font-stretch: normal;">'+relatedTitles[r]+'</div></a>');

i++;


if (r < relatedTitles.length - 1) {
r++;
} else {
r = 0;
}

}
document.write('</div>');

relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
relatedTitles.splice(0,relatedTitles.length);

}


function pageNavi(o){
	var m=location.href,
		l=m.indexOf("/search/label/")!=-1,
		a=l?m.substr(m.indexOf("/search/label/")+14,m.length):"";
		
	a=a.indexOf("?")!=-1?a.substr(0,a.indexOf("?")):a;
	
	var g=l?"/search/label/"+a+"?updated-max=":"/search?updated-max=",
		k=o.feed.entry.length,
		e=Math.ceil(k/pageNaviConf.perPage);
	
	if(e<=1){
		return
	}
	var n=1,
		h=[""];
	l?h.push("/search/label/"+a+"?max-results="+pageNaviConf.perPage):h.push("/?max-results="+pageNaviConf.perPage);
	
	for(var d=2;d<=e;d++){
		var c=(d-1)*pageNaviConf.perPage-1,
			b=o.feed.entry[c].published.$t,
			f=b.substring(0,19)+b.substring(23,29);
			
		f=encodeURIComponent(f);
		
		if(m.indexOf(f)!=-1){
			n=d
		}
		
		h.push(g+f+"&max-results="+pageNaviConf.perPage)
	}
	
	pageNavi.show(h,n,e)
}

pageNavi.show=function(f,e,a){
	var d=Math.floor((pageNaviConf.numPages-1)/2),
		g=pageNaviConf.numPages-1-d,
		c=e-d;
	if(c<=0){
		c=1
	}
	endPage=e+g;
	if((endPage-c)<pageNaviConf.numPages){
		endPage=c+pageNaviConf.numPages-1
	}
	if(endPage>a){
		endPage=a;
		c=a-pageNaviConf.numPages+1
	}
	if(c<=0){
		c=1
	}
	
	var b='<span class="pages">Page '+e+' of '+a+"</span> ";
	
	if(c>1){
		b+='<a href="'+f[1]+'">'+pageNaviConf.firstText+"</a>"
	}
	if(e>1){
		b+='<a href="'+f[e-1]+'">'+pageNaviConf.prevText+"</a>"
	}
	for(i=c;i<=endPage;++i){
		if(i==e){
			b+='<span class="current">'+i+"</span>"
			}else{
			b+='<a href="'+f[i]+'">'+i+"</a>"
		}
	}
	if(e<a){
		b+='<a href="'+f[e+1]+'">'+pageNaviConf.nextText+"</a>"
	}
	if(endPage<a){
		b+='<a href="'+f[a]+'">'+pageNaviConf.lastText+"</a>"
	}
	
	document.write(b)
};
	
(function(){var b=location.href;if(b.indexOf("?q=")!=-1||b.indexOf(".html")!=-1){return}var d=b.indexOf("/search/label/")+14;if(d!=13){var c=b.indexOf("?"),a=(c==-1)?b.substring(d):b.substring(d,c);document.write('<script type="text/javascript" src="/feeds/posts/summary/-/'+a+'?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>')}else{document.write('<script type="text/javascript" src="/feeds/posts/summary?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>')}})();
