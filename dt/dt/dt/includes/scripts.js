$(document).ready(function(){$("#capsule a[rel$='external']").attr("target","_blank"),$("#capsule input[type='text'], textarea").focus(function(){$(this).addClass("active")}),$("#capsule input[type='text'], textarea").blur(function(){$(this).removeClass("active")}),$("#capsule .calcRadio > input[type=radio]").click(function(){var t=$(this).parent().attr("id"),e=t+"_answer",n=0;$("#"+t+" > input[type=radio]:checked").each(function(){n+=parseFloat($(this).val())}),$("#"+e).val(n)}),url=$(".pager li.next a").attr("href"),$("#goNext").attr("href",url),animation_speed=800,animation_delay=800,$("#header, #intro_header").delay(animation_delay).animate({"margin-left":"0",opacity:"1"},animation_speed),$("#header, #intro_header").delay(animation_delay).animate({"margin-left":"0",opacity:"1"},animation_speed),$("#header_title, #intro_header_title").delay(animation_delay+800).animate({"margin-left":"40px",opacity:"1"},animation_speed),animation_delay=1600,$("div.slide-image img").length&&($("div.slide-image img").delay(animation_delay).animate({left:"-110px",opacity:"1"},animation_speed),animation_delay+=animation_delay),$("#capsule").hasClass("welcome_page")?($("#capsule p").delay(animation_delay).animate({"margin-top":"150px",opacity:"1"},animation_speed),animation_delay+=animation_delay,$("#capsule img").delay(animation_delay).animate({bottom:"70px",opacity:"1"},animation_speed,function(){$("html").attr("style","overflow: visible")})):($("#capsule p").length||$("#capsule ol").length||$("#capsule ul").length||$("#capsule h2").length)&&($("#capsule p, #intro_body, #capsule ul, #capsule ol, #capsule h2").delay(animation_delay+800).animate({"margin-top":"20px",opacity:"1"},animation_speed),$("#capsule li").delay(animation_delay+1800).animate({"margin-top":"+=10px",opacity:"1"},animation_speed,function(){$("html").attr("style","overflow: visible")}),animation_delay+=2600),$("img").delay(animation_delay).animate({right:"0",opacity:"1"},800,function(){$("html").attr("style","overflow: visible")}),$("#capsule label, #capsule div textarea, #capsule table").delay(animation_delay).animate({"margin-top":"10px",opacity:"1"},animation_speed,function(){$("html").attr("style","overflow: visible")}),$("li.next").click(function(){$("#capsule").fadeOut(),$(".slide-image").fadeOut()}),$("li.previous").click(function(){$("#capsule").fadeOut(),$(".slide-image").fadeOut()});var t=new Date,e=new Array;e[0]="January",e[1]="February",e[2]="March",e[3]="April",e[4]="May",e[5]="June",e[6]="July",e[7]="August",e[8]="September",e[9]="October",e[10]="November",e[11]="December";var e=e[t.getMonth()],n=t.getUTCDate(),i=t.getUTCFullYear();$("#input_date").val(e+" "+n+", "+i),target=document.getElementById("date_object"),null!=target&&(target.innerHTML=e+" "+n+", "+i)}),function(t){var e=6;t.fieldIdentifiers={toSelector:function(e){if(void 0===e)return"";var n=[],i=e.split(",");return t.each(i,function(){var t=this.split(".")[0];n.push('[name="'+t+'"]')}),n.join(",")},select:function(e){return t(t.fieldIdentifiers.toSelector(e))},responses:function(e){if(void 0===e)return[];var n=[];return t.each(e.split(","),function(){function e(){var r=t(this);if(r.is("select"))r.children("option:selected").each(e);else if(r.is(":not(:radio, :checkbox), :checked")){var o=r.val();if(void 0!==i[1]){var a=i[1]-1,s=r.val().split(",");o=s[a]}void 0!==o&&n.push(o)}}var i=this.split("."),r=t.fieldIdentifiers.select(i[0]);r.each(e)}),n}},t.fn.mapReduceWidget=function(e){return this.each(function(){var n=t(this).attr("readonly",!0),i=t(this).data("fields"),r=t(t.fieldIdentifiers.select(i));n.bind("mapReduce",function(){var r=t.fieldIdentifiers.responses(i);n.val(e.apply(this,[r])).change()}),r.change(function(){n.trigger("mapReduce")}),""===n.val()&&n.trigger("mapReduce")})},t.fn.sumWidget=function(){return this.mapReduceWidget(function(n){var i=0;t.each(n,function(){var t=parseFloat(this);i+=isNaN(t)?0:t});var r=Math.pow(10,e);return Math.round(i*r)/r})},t.fn.countWidget=function(){return this.mapReduceWidget(function(e){var n=0,i=t(this).data("values").split(",");return t.each(e,function(){-1!==t.inArray(this.toString(),i)&&n++}),n})}}(jQuery),function(t){var e={initialize:function(){var e=this.dropdownWidget("setText");return e.live("click",function(){var n=t(this);n.hasClass("down")?e.dropdownWidget("hide"):e.dropdownWidget("show",n)})},show:function(t){var e=this.dropdownWidget("answer",t);this.dropdownWidget("hide"),t.is(".hint, .fact")&&t.text("Click to Close"),e.stop(!0,!0).slideDown("slow"),t.addClass("down")},hide:function(){var e=this;return e.removeClass("down").dropdownWidget("setText").each(function(){e.dropdownWidget("answer",t(this)).stop(!0,!0).slideUp("slow")})},answer:function(e){return t("#"+e.attr("id")+"_answer")},setText:function(){return this.filter(".hint").text("Click for Hint"),this.filter(".fact").text("Click for Fact"),this}};t.fn.dropdownWidget=function(t){if(e[t])return e[t].apply(this,Array.prototype.slice.call(arguments,1));if(t)throw"Method "+t+" does not exist";return e.initialize.apply(this,arguments)}}(jQuery),$(function(){var t=$("#capsule");t.find("input.sum_widget").sumWidget(),t.find("input.count_widget").countWidget(),t.find(".hint, .fact, .show").dropdownWidget()});