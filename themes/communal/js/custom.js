!function(e){e.fn.hoverIntent=function(t,n,i){var o={interval:100,sensitivity:7,timeout:0};o="object"==typeof t?e.extend(o,t):e.isFunction(n)?e.extend(o,{over:t,out:n,selector:i}):e.extend(o,{over:t,out:t,selector:n});var a,r,s,c,d=function(e){a=e.pageX,r=e.pageY},u=function(t,n){return n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.abs(s-a)+Math.abs(c-r)<o.sensitivity?(e(n).off("mousemove.hoverIntent",d),n.hoverIntent_s=1,o.over.apply(n,[t])):(s=a,c=r,n.hoverIntent_t=setTimeout(function(){u(t,n)},o.interval),void 0)},l=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=0,o.out.apply(t,[e])},_=function(t){var n=jQuery.extend({},t),i=this;i.hoverIntent_t&&(i.hoverIntent_t=clearTimeout(i.hoverIntent_t)),"mouseenter"==t.type?(s=n.pageX,c=n.pageY,e(i).on("mousemove.hoverIntent",d),1!=i.hoverIntent_s&&(i.hoverIntent_t=setTimeout(function(){u(n,i)},o.interval))):(e(i).off("mousemove.hoverIntent",d),1==i.hoverIntent_s&&(i.hoverIntent_t=setTimeout(function(){l(n,i)},o.timeout)))};return this.on({"mouseenter.hoverIntent":_,"mouseleave.hoverIntent":_},o.selector)}}(jQuery),function(e){function t(e,t,o){var a=e[0],r=/er/.test(o)?_indeterminate:/bl/.test(o)?f:l,s=o==_update?{checked:a[l],disabled:a[f],indeterminate:"true"==e.attr(_indeterminate)||"false"==e.attr(_determinate)}:a[r];if(/^(ch|di|in)/.test(o)&&!s)n(e,r);else if(/^(un|en|de)/.test(o)&&s)i(e,r);else if(o==_update)for(var c in s)s[c]?n(e,c,!0):i(e,c,!0);else t&&"toggle"!=o||(t||e[_callback]("ifClicked"),s?a[_type]!==u&&i(e,r):n(e,r))}function n(t,n,o){var h=t[0],p=t.parent(),v=n==l,m=n==_indeterminate,b=n==f,y=m?_determinate:v?_:"enabled",k=a(t,y+r(h[_type])),g=a(t,n+r(h[_type]));if(!0!==h[n]){if(!o&&n==l&&h[_type]==u&&h.name){var C=t.closest("form"),I='input[name="'+h.name+'"]',I=C.length?C.find(I):e(I);I.each(function(){this!==h&&e(this).data(c)&&i(e(this),n)})}m?(h[n]=!0,h[l]&&i(t,l,"force")):(o||(h[n]=!0),v&&h[_indeterminate]&&i(t,_indeterminate,!1)),s(t,v,n,o)}h[f]&&a(t,_cursor,!0)&&p.find("."+d).css(_cursor,"default"),p[_add](g||a(t,n)||""),p.attr("role")&&!m&&p.attr("aria-"+(b?f:l),"true"),p[_remove](k||a(t,y)||"")}function i(e,t,n){var i=e[0],o=e.parent(),c=t==l,u=t==_indeterminate,h=t==f,p=u?_determinate:c?_:"enabled",v=a(e,p+r(i[_type])),m=a(e,t+r(i[_type]));!1!==i[t]&&((u||!n||"force"==n)&&(i[t]=!1),s(e,c,p,n)),!i[f]&&a(e,_cursor,!0)&&o.find("."+d).css(_cursor,"pointer"),o[_remove](m||a(e,t)||""),o.attr("role")&&!u&&o.attr("aria-"+(h?f:l),"false"),o[_add](v||a(e,p)||"")}function o(t,n){t.data(c)&&(t.parent().html(t.attr("style",t.data(c).s||"")),n&&t[_callback](n),t.off(".i").unwrap(),e(_label+'[for="'+t[0].id+'"]').add(t.closest(_label)).off(".i"))}function a(e,t,n){return e.data(c)?e.data(c).o[t+(n?"":"Class")]:void 0}function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t,n,i){i||(t&&e[_callback]("ifToggled"),e[_callback]("ifChanged")[_callback]("if"+r(n)))}var c="iCheck",d=c+"-helper",u="radio",l="checked",_="un"+l,f="disabled";_determinate="determinate",_indeterminate="in"+_determinate,_update="update",_type="type",_click="click",_touch="touchbegin.i touchend.i",_add="addClass",_remove="removeClass",_callback="trigger",_label="label",_cursor="cursor",_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent),e.fn[c]=function(a,r){var s='input[type="checkbox"], input[type="'+u+'"]',_=e(),h=function(t){t.each(function(){var t=e(this);_=_.add(t.is(s)?t:t.find(s))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),h(this),_.each(function(){var n=e(this);"destroy"==a?o(n,"ifDestroyed"):t(n,!0,a),e.isFunction(r)&&r()});if("object"!=typeof a&&a)return this;var p=e.extend({checkedClass:l,disabledClass:f,indeterminateClass:_indeterminate,labelHover:!0},a),v=p.handle,m=p.hoverClass||"hover",b=p.focusClass||"focus",y=p.activeClass||"active",k=!!p.labelHover,g=p.labelHoverClass||"hover",C=0|(""+p.increaseArea).replace("%","");return("checkbox"==v||v==u)&&(s='input[type="'+v+'"]'),-50>C&&(C=-50),h(this),_.each(function(){var a=e(this);o(a);var r=this,s=r.id,_=-C+"%",h=100+2*C+"%",h={position:"absolute",top:_,left:_,display:"block",width:h,height:h,margin:0,padding:0,background:"#fff",border:0,opacity:0},_=_mobile?{position:"absolute",visibility:"hidden"}:C?h:{position:"absolute",opacity:0},v="checkbox"==r[_type]?p.checkboxClass||"icheckbox":p.radioClass||"i"+u,I=e(_label+'[for="'+s+'"]').add(a.closest(_label)),w=!!p.aria,x=c+"-"+Math.random().toString(36).substr(2,6),T='<div class="'+v+'" '+(w?'role="'+r[_type]+'" ':"");w&&I.each(function(){T+='aria-labelledby="',this.id?T+=this.id:(this.id=x,T+=x),T+='"'}),T=a.wrap(T+"/>")[_callback]("ifCreated").parent().append(p.insert),h=e('<ins class="'+d+'"/>').css(h).appendTo(T),a.data(c,{o:p,s:a.attr("style")}).css(_),p.inheritClass&&T[_add](r.className||""),p.inheritID&&s&&T.attr("id",c+"-"+s),"static"==T.css("position")&&T.css("position","relative"),t(a,!0,_update),I.length&&I.on(_click+".i mouseover.i mouseout.i "+_touch,function(n){var i=n[_type],o=e(this);if(!r[f]){if(i==_click){if(e(n.target).is("a"))return;t(a,!1,!0)}else k&&(/ut|nd/.test(i)?(T[_remove](m),o[_remove](g)):(T[_add](m),o[_add](g)));if(!_mobile)return!1;n.stopPropagation()}}),a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[_type];return e=e.keyCode,t==_click?!1:"keydown"==t&&32==e?(r[_type]==u&&r[l]||(r[l]?i(a,l):n(a,l)),!1):void("keyup"==t&&r[_type]==u?!r[l]&&n(a,l):/us|ur/.test(t)&&T["blur"==t?_remove:_add](b))}),h.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(e){var n=e[_type],i=/wn|up/.test(n)?y:m;if(!r[f]){if(n==_click?t(a,!1,!0):(/wn|er|in/.test(n)?T[_add](i):T[_remove](i+" "+y),I.length&&k&&i==m&&I[/ut|nd/.test(n)?_remove:_add](g)),!_mobile)return!1;e.stopPropagation()}})})}}(window.jQuery||window.Zepto),function(e){e(function(){e("input").iCheck(),e(".js-sidebar").hoverIntent(function(t){e(t.currentTarget).addClass("is-open")},function(t){e(t.currentTarget).removeClass("is-open")})})}(jQuery,window,document);