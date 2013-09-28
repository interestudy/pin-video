

(function() {
    function a(a) {
        this.init.apply(this, a)
    }
    var b = {Linear: function(a, b, c, d) {
            return c * a / d + b
        },Quad: {easeIn: function(a, b, c, d) {
                return c * (a /= d) * a + b
            },easeOut: function(a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b
            },easeInOut: function(a, b, c, d) {
                return 1 > (a /= d / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
            }},Cubic: {easeIn: function(a, b, c, d) {
                return c * (a /= d) * a * a + b
            },easeOut: function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b
            },easeInOut: function(a, b, c, d) {
                return 1 > (a /= d / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
            }},Quart: {easeIn: function(a, b, c, 
            d) {
                return c * (a /= d) * a * a * a + b
            },easeOut: function(a, b, c, d) {
                return -c * ((a = a / d - 1) * a * a * a - 1) + b
            },easeInOut: function(a, b, c, d) {
                return 1 > (a /= d / 2) ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
            }},Quint: {easeIn: function(a, b, c, d) {
                return c * (a /= d) * a * a * a * a + b
            },easeOut: function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a * a * a + 1) + b
            },easeInOut: function(a, b, c, d) {
                return 1 > (a /= d / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
            }},Sine: {easeIn: function(a, b, c, d) {
                return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
            },easeOut: function(a, b, c, d) {
                return c * Math.sin(a / d * (Math.PI / 
                2)) + b
            },easeInOut: function(a, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
            }},Expo: {easeIn: function(a, b, c, d) {
                return 0 == a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
            },easeOut: function(a, b, c, d) {
                return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
            },easeInOut: function(a, b, c, d) {
                return 0 == a ? b : a == d ? b + c : 1 > (a /= d / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
            }},Circ: {easeIn: function(a, b, c, d) {
                return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
            },easeOut: function(a, b, c, d) {
                return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
            },easeInOut: function(a, b, c, d) {
                return 1 > 
                (a /= d / 2) ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
            }},Elastic: {easeIn: function(a, b, c, d, j, k) {
                if (0 == a)
                    return b;
                if (1 == (a /= d))
                    return b + c;
                k || (k = 0.3 * d);
                !j || j < Math.abs(c) ? (j = c, c = k / 4) : c = k / (2 * Math.PI) * Math.asin(c / j);
                return -(j * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - c) * 2 * Math.PI / k)) + b
            },easeOut: function(a, b, c, d, j, k) {
                if (0 == a)
                    return b;
                if (1 == (a /= d))
                    return b + c;
                k || (k = 0.3 * d);
                if (!j || j < Math.abs(c))
                    var j = c, l = k / 4;
                else
                    l = k / (2 * Math.PI) * Math.asin(c / j);
                return j * Math.pow(2, -10 * a) * Math.sin((a * d - l) * 2 * Math.PI / k) + 
                c + b
            },easeInOut: function(a, b, c, d, j, k) {
                if (0 == a)
                    return b;
                if (2 == (a /= d / 2))
                    return b + c;
                k || (k = d * 0.3 * 1.5);
                if (!j || j < Math.abs(c))
                    var j = c, l = k / 4;
                else
                    l = k / (2 * Math.PI) * Math.asin(c / j);
                return 1 > a ? -0.5 * j * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - l) * 2 * Math.PI / k) + b : 0.5 * j * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - l) * 2 * Math.PI / k) + c + b
            }},Back: {easeIn: function(a, b, c, d, j) {
                void 0 == j && (j = 1.70158);
                return c * (a /= d) * a * ((j + 1) * a - j) + b
            },easeOut: function(a, b, c, d, j) {
                void 0 == j && (j = 1.70158);
                return c * ((a = a / d - 1) * a * ((j + 1) * a + j) + 1) + b
            },easeInOut: function(a, 
            b, c, d, j) {
                void 0 == j && (j = 1.70158);
                return 1 > (a /= d / 2) ? c / 2 * a * a * (((j *= 1.525) + 1) * a - j) + b : c / 2 * ((a -= 2) * a * (((j *= 1.525) + 1) * a + j) + 2) + b
            }},Bounce: {easeIn: function(a, c, d, g) {
                return d - b.Bounce.easeOut(g - a, 0, d, g) + c
            },easeOut: function(a, b, c, d) {
                return (a /= d) < 1 / 2.75 ? c * 7.5625 * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
            },easeInOut: function(a, c, d, g) {
                return a < g / 2 ? 0.5 * b.Bounce.easeIn(2 * a, 0, d, g) + c : 0.5 * b.Bounce.easeOut(2 * a - g, 0, d, g) + 0.5 * 
                d + c
            }}}, c = {sub: function(a, b, c) {
            return c ? a.substring(b, b + c) : a.substring(b)
        },hex: function(a) {
            if (0 > a)
                return "00";
            if (255 < a)
                return "ff";
            a = "0" + a.toString(16);
            return a.substring(a.length - 2)
        },GetColors: function(a) {
            var a = a.replace("#", ""), b, d;
            3 < a.length ? (b = c.sub(a, 0, 2), d = c.sub(a, 2, 2), a = c.sub(a, 4, 2)) : (b = c.sub(a, 0, 1), d = c.sub(a, 1, 1), a = c.sub(a, 2, 1), b += b, d += d, a += a);
            return [parseInt(b, 16), parseInt(d, 16), parseInt(a, 16)]
        }}, d = {getElement: function(a) {
            return "string" == typeof a ? document.getElementById(a) : a
        },objType: function(a) {
            switch (Object.prototype.toString.call(a)) {
                case "[object Object]":
                    return "Object";
                case "[object Number]":
                    return "Number";
                case "[object Array]":
                    return "Array"
            }
        },getStyle: function(a, b) {
            var c;
            document.defaultView && (c = document.defaultView.getComputedStyle(a, null), "borderWidth" == b && (b = "borderLeftWidth"), c = b in c ? c[b] : c.getPropertyValue(b), "auto" == c && (c = "0px"));
            return a.style[b] || a.currentStyle && ("auto" == a.currentStyle[b] ? "0px" : a.currentStyle[b]) || c
        },getOriCss: function(a, b) {
            var h = [], g;
            for (g in b)
                if (b.hasOwnProperty(g))
                    if ("transparent" == d.getStyle(a, g) || /^#|rgb\(/.test(d.getStyle(a, g))) {
                        if ("transparent" == 
                        d.getStyle(a, g) && h.push([255, 255, 255]), /^#/.test(d.getStyle(a, g)) && h.push(c.GetColors(d.getStyle(a, g))), /^rgb\(/.test(d.getStyle(a, g))) {
                            var j = d.getStyle(a, g).replace(/^rgb\(([0-9]{0,3}),\s([0-9]{0,3}),\s([0-9]{0,3})\)/g, "$1 $2 $3").split(" ");
                            h.push([parseInt(j[0]), parseInt(j[1]), parseInt(j[2])])
                        }
                    } else
                        "opacity" == g ? h.push(100 * d.getStyle(a, g)) : h.push(parseInt(d.getStyle(a, g)));
            return h
        },getEndCss: function(a) {
            var b = [], d;
            for (d in a)
                a.hasOwnProperty(d) && ("opacity" == d ? b.push(100 * a[d]) : /^#/.test(a[d]) ? b.push(c.GetColors(a[d])) : 
                b.push(parseInt(a[d])));
            return b
        }};
    a.prototype = {init: function() {
            this.elem = d.getElement(arguments[0]);
            this.cssObj = arguments[1];
            this.cssOri = d.getOriCss(this.elem, arguments[1]);
            this.cssEnd = d.getEndCss(arguments[1]);
            this.durtime = arguments[2];
            this.animType = "Tween.Linear";
            this.funObj = null;
            this.onRestart = this.onPause = this.complete = this.start = !1;
            if (3 > arguments.length)
                throw Error("\u81f3\u5c11\u8981\u4f20\u51653\u4e2a\u53c2\u6570");
            if (4 == arguments.length) {
                if ("Object" == d.objType(arguments[3])) {
                    this.funObj = 
                    arguments[3];
                    for (var a in this.funObj) {
                        if ("start" == a.toString())
                            this.start = !0;
                        if ("complete" == a.toString())
                            this.complete = !0
                    }
                }
                if ("string" == typeof arguments[3])
                    this.animType = arguments[3]
            } else if (5 == arguments.length && (this.animType = arguments[3], "Object" == d.objType(arguments[4])))
                for (a in this.funObj = arguments[4], this.funObj) {
                    if ("start" == a.toString())
                        this.start = !0;
                    if ("complete" == a.toString())
                        this.complete = !0
                }
            this.startAnim()
        },startAnim: function() {
            this.start && this.funObj.start.call(this, this.elem);
            var a = 
            this, b = 0, h = [], g;
            for (g in this.cssObj)
                this.cssObj.hasOwnProperty(g) && h.push(g);
            (new Date).getTime();
            clearInterval(this.timer);
            this.timer = setInterval(function() {
                if (a.onPause)
                    clearInterval(a.timer);
                else if (b < a.durtime / 10) {
                    b++;
                    for (var g = 0; g < h.length; g++) {
                        var k, l;
                        "Array" != d.objType(a.cssOri[g]) && (k = a.cssOri[g]);
                        "Array" != d.objType(a.cssEnd[g]) && (l = a.cssEnd[g] - a.cssOri[g]);
                        var m = a.durtime / 10;
                        if ("Array" == d.objType(a.cssOri[g]) && "Array" == d.objType(a.cssEnd[g])) {
                            var n = a.cssOri[g][0], o = a.cssOri[g][1], r = a.cssOri[g][2], 
                            p = a.cssEnd[g][0] - a.cssOri[g][0], q = a.cssEnd[g][1] - a.cssOri[g][1];
                            k = a.cssEnd[g][2] - a.cssOri[g][2];
                            p = c.hex(Math.ceil(eval(a.animType)(b, n, p, m)));
                            q = c.hex(Math.ceil(eval(a.animType)(b, o, q, m)));
                            k = c.hex(Math.ceil(eval(a.animType)(b, r, k, m)));
                            a.elem.style[h[g]] = "#" + p + q + k
                        } else
                            a.elem.style[h[g]] = "opacity" == h[g].toString() ? Math.ceil(eval(a.animType)(b, k, l, m)) / 100 : Math.ceil(eval(a.animType)(b, k, l, m)) + "px"
                    }
                } else {
                    for (g = 0; g < h.length; g++)
                        "Array" == d.objType(a.cssOri[g]) && "Array" == d.objType(a.cssEnd[g]) ? (p = a.cssEnd[g][0], 
                        q = a.cssEnd[g][1], k = a.cssEnd[g][2], p = c.hex(Math.ceil(eval(a.animType)(b, n, p, m))), q = c.hex(Math.ceil(eval(a.animType)(b, o, q, m))), k = c.hex(Math.ceil(eval(a.animType)(b, r, k, m))), a.elem.style[h[g]] = "#" + p + q + k) : a.elem.style[h[g]] = "opacity" == h[g].toString() ? a.cssEnd[g] / 100 : a.cssEnd[g] + "px";
                    clearInterval(a.timer);
                    a.complete && a.funObj.complete.call(a, a.elem)
                }
            }, 10)
        },pause: function() {
            this.onPause = !0
        }};
    window.anim = function() {
        return new a(arguments)
    };
    window.Tween = b;
    window.color = c;
    window.fn = d
})();
function commentsPage(a) {
    window.scroll(0, 675);
    a && 1 == a ? Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004799&cpp=1000217&" + Math.random()) : Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004800&cpp=1000217&" + Math.random())
}
var pre = "", rpo = "", hasReply = !1, is_quote = !1, flagId = null, replyun = "", err = {"-1": "\u8bc4\u8bba\u53d1\u8868\u5931\u8d25\u3002","-8": "\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\u3002","-4": "\u60a8\u4e0d\u80fd\u8f93\u5165\u592a\u591a\u8bc4\u8bba\u5185\u5bb9\uff0c\u8bf7\u51cf\u5c11\u5185\u5bb9\u3002","-5": "\u8bf7\u91cd\u65b0\u767b\u5f55\u3002","-3": "\u60a8\u7684\u7528\u6237\u540d/\u5bc6\u7801\u8f93\u5165\u6709\u8bef\u3002","-2": "\u60a8\u5df2\u7ecf\u88ab\u9650\u5236\u53d1\u8868\u8bc4\u8bba\uff0c\u8bf7\u901a\u8fc7\u7f51\u7ad9\u5ba2\u670d\u53cd\u9988\u610f\u89c1\uff0c\u8c22\u8c22\u3002",
    "-400": "\u60a8\u5df2\u7ecf\u53d1\u8868\u4e86\u8be5\u8bc4\u8bba\uff0c\u8c22\u8c22\uff01","-7": "\u60a8\u7684\u8bc4\u8bba\u542b\u6709\u7f51\u7ad9\u7981\u6b62\u5185\u5bb9\uff0c\u8bf7\u4fee\u6539\uff0c\u8c22\u8c22\uff01","-9": "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801","-10": "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165","-11": "\u8bf7\u5c06\u6587\u5b57\u51cf\u5c11\u5230300\u5b57\u4ee5\u5185\u3002","-12": "\u60a8\u8fd8\u672a\u8d2d\u4e70\u672c\u8282\u76ee\uff0c\u8bf7\u8d2d\u4e70\u89c2\u770b\u540e\u518d\u53d1\u8868\u8bc4\u8bba\u3002",
    "-13": "\u5f53\u524d\u89c6\u9891\u4e0d\u5b58\u5728\u3002","-14": "\u5f53\u524d\u89c6\u9891\u88ab\u8bbe\u7f6e\u4e3a\u7981\u6b62\u8bc4\u8bba\u3002","-450": "\u60a8\u7684\u8bc4\u8bba\u542b\u6709\u7f51\u7ad9\u7981\u6b62\u5185\u5bb9\uff0c\u8bf7\u4fee\u6539\uff0c\u8c22\u8c22\uff01","-130": "\u5f53\u524d\u7528\u6237\u88ab\u7981\u6b62\u53d1\u5e03\u8bc4\u8bba\u3002","-131": "\u5f53\u524d\u89c6\u9891\u88ab\u7981\u6b62\u8bc4\u8bba\u3002"};
function commentNew(a, b, c, d) {
    if (islogin()) {
        pre = a ? "r_" : "";
        try {
            switch (parseInt(playmode)) {
                case 2:
                    Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4000495&cpp=1000217&" + Math.random());
                    break;
                case 3:
                    Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4000488&cpp=1000217&" + Math.random());
                    break;
                default:
                    Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4000481&cpp=1000217&" + Math.random())
            }
        } catch (e) {
        }
        $(pre + "content").focus();
        if (!1 == checkCommentsContent(pre))
            return !1;
        var a = $(pre + "content").value.replace("\uff1a", 
        ":"), f = window.videoId, h = "";
        if ($(pre + "verify_code_value") && $(pre + "verify_code_value").value)
            h = $(pre + "verify_code_value").value;
        window.flagId = c;
        window.is_quote = d ? !1 : !0;
        d = t_renren = t_sina = t_tencent = t_messenger = t_qzone = t_kaixin = 0;
        if ($(pre + "sync_ucenter"))
            d = $(pre + "sync_ucenter").value;
        if ($(pre + "sync_renren"))
            t_renren = $(pre + "sync_renren").value;
        if ($(pre + "sync_sina"))
            t_sina = $(pre + "sync_sina").value;
        if ($(pre + "sync_tencent"))
            t_tencent = $(pre + "sync_tencent").value;
        if ($(pre + "sync_messenger"))
            t_messenger = $(pre + 
            "sync_messenger").value;
        if ($(pre + "sync_qzone"))
            t_qzone = $(pre + "sync_qzone").value;
        if ($(pre + "sync_kaixin"))
            t_kaixin = $(pre + "sync_kaixin").value;
        Nova.QComments.comment({videoId: f,content: a,verify_code: h,reply_cid: b,soure_id: c,sync_ucenter: d,sync_renren: t_renren,sync_sina: t_sina,sync_tencent: t_tencent,sync_messenger: t_messenger,sync_qzone: t_qzone,sync_kaixin: t_kaixin}, commentsCallBack);
        return VideoComments.isInputting = !1
    }
    VideoComments.login("VideoComments.callback")
}
function commentsCallBack(a) {
    if (!1 != checkCommentsCallBackResult(a, pre)) {
        verify_code_comment(!0);
        try {
            $("reply_" + rpo) && Element.show("reply_" + rpo), Element.hide("replyCommentArea"), Element.hide(pre + "verify_code"), $(pre + "verify_code_value").value = ""
        } catch (b) {
        }
        showNewComments(a, $(pre + "content"));
        !empty(a.loginandcomment) && a.loginandcomment && showConnects();
        !empty(a.feedpublish) && 2 == a.feedpublish && FeedPublishTip("\u89c6\u9891\u8bc4\u8bba")
    }
}
var verify_code_src = "", verify_code_rpo = "", verify_code_type = "";
function verify_code_comment(a, b, c) {
    a && (verify_code_src = "", Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4002530&cpp=1000404&t=" + Math.random()));
    verify_code_rpo = b;
    verify_code_type = c;
    Nova.QVideo.isNeedVerify({}, verify_code_callback_comment)
}
function verify_code_callback_comment(a) {
    var b = "";
    verify_code_rpo && (b = verify_code_type ? "r_sub" : "r_");
    if (a) {
        if ("" == verify_code_src)
            verify_code_src = "/verify/?" + ((new Date).getTime() + "-" + Math.random()), $(b + "verify_code_value").value = "";
        if (0 > $(b + "verify_code_img").src.indexOf(verify_code_src) && "" != verify_code_src)
            $(b + "verify_code_img").src = verify_code_src;
        Element.show(b + "verify_code")
    } else
        Element.hide(b + "verify_code")
}
function checkCommentsContent(a) {
    var b = $(a + "content"), c = b.value;
    return c == b.defaultValue || 1 > c.replace(/(^\s*)|(\s*$)/g, "").length ? (showError(a + "com_overlay", a + "tips", "\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\u3002"), !1) : !0
}
function checkCommentsCallBackResult(a, b) {
    $(b + "content");
    var c;
    if (null == a)
        return !1;
    return 0 > a ? (showError(b + "com_overlay", b + "tips", err[a]), -3 == a && Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4002532&cpp=1000404&t=" + Math.random()), !1) : !0
}
function showError(a, b, c) {
    if ($(a))
        $(b).innerHTML = c, $(a).show(), setTimeout(function() {
            $(a).hide()
        }, 2E3);
    return !1
}
function showNewComments(a, b) {
    var c = $("div_new_comment");
    if ($("comment_none"))
        $("comment_none").style.display = "none";
    b.value = "";
    checkInputLenth(b);
    var d = "";
    window.is_quote ? $("quote_" + flagId) && (d = '<div class="quoteNew">' + $("quote_" + flagId).innerHTML + "</div>") : window.flagId && ($("content_" + flagId) ? d = '<div class="quoteNew"><div class="text"><p><a href="http://u.youku.com/' + encodeURIComponent(replyun.substr(1)) + '" target="_blank">' + replyun + "</a>\uff1a" + $("content_" + flagId).innerHTML + "</p></div></div>" : 
    $("quote_" + flagId) && (d = '<div class="quoteNew">' + $("quote_" + flagId).innerHTML + "</div>"));
    c.innerHTML = '<div class="comment"><div class="userPhoto"><a target="_blank" href="' + a.userlink + '"><img src="' + a.usericon + '"></a></div><div class="bar">\u6211</div><div class="con"><div style="margin-bottom:10px"><p>' + a.content + "<br></p></div>" + d + '<div class="panel"><span class="timestamp">\u521a\u521a</span><span class="via">\u6765\u81ea<em><a target="_blank" href="http://hz.youku.com/red/click.php?tp=1&amp;cp=4004585&amp;cpp=1000492&amp;url=http://www.youku.com/">\u4f18\u9177\u7f51</a></em></span></div></div></div>' + 
    c.innerHTML;
    if ($("comment_none_for_new"))
        $("comment_none_for_new").style.display = "block";
    updateTotalComment(1, !0);
    a && 2 == a.state ? window.scrollTo(0, Position.cumulativeOffset($("videobodycommentlist"))[1] - 65) : $("Comments") && window.scrollTo(0, Position.cumulativeOffset($("Comments"))[1] - 65);
    a && 2 == a.state && $("commentpop") && Element.show("commentpop")
}
function ctlentComments(a, b) {
    if (a.ctrlKey && 13 == a.keyCode || a.altKey && 83 == a.keyCode) {
        var c = $(b);
        c && c.click()
    }
}
function checkInputLenth(a) {
    var b = ltrim(a.value).length, a = a.parentNode.parentNode.getElementsByTagName("span")[1];
    a.innerHTML = b;
    a.style.color = 0 <= b && 300 >= b ? "#909090" : "#f00"
}
function updateTotalComment(a, b) {
    if (b && $("span_currcommenttotal1"))
        $("span_currcommenttotal1").innerHTML = (parseInt($("span_currcommenttotal1").innerHTML.replace(/\,/, "")) + a).toLocaleString().replace(/\.00$/g, "");
    b && (a += parseInt($("totalComment").innerHTML.replace(/\,/, "")));
    if ($("totalComment"))
        $("totalComment").innerHTML = a.toLocaleString().replace(/\.00$/g, "");
    $("allnum_cmt") && $("allnum_cmt").update("(" + a.toLocaleString().replace(/\.00$/g, "") + ")");
    if ($("span_commenttotal1"))
        $("span_commenttotal1").innerHTML = 
        a.toLocaleString().replace(/\.00$/g, "");
    if ($("pageCommentBar3") && $("pageCommentBar"))
        $("pageCommentBar3").innerHTML = $("pageCommentBar").innerHTML
}
function showConnects() {
    var a = $("connect_div");
    a && (nova_update("connect_div", "/v_vpcommentConnect"), a.show(), $("splite") && $("splite").show(), setTimeout(function() {
        if ($("r_connect_div"))
            $("r_connect_div").innerHTML = VideoComments.updateSyncPart($("connect_div").innerHTML, "org"), $("r_splite") && $("r_splite").show();
        if ($("r_subconnect_div"))
            $("r_subconnect_div").innerHTML = VideoComments.updateSyncPart($("connect_div").innerHTML, "sub"), $("r_subsplite") && $("r_subsplite").show()
    }, 300))
}
function commentSync(a) {
    1 == $(a).value ? ($(a).value = 0, $(a).up().className = "") : ($(a).value = 1, $(a).up().className = "selected")
}
function grinComments(a, b, c) {
    var d;
    if (!b || !((d = document.getElementById("comment_content_" + b)) && "textarea" == d.type))
        if (!b || !((d = document.getElementById("reply_content_" + b)) && "textarea" == d.type))
            if (b && (d = document.getElementById("r_content")) && "textarea" == d.type) {
                if ("sub" == c && (d = $("r_subcontent")), $("faces2"))
                    $("faces2").className = "facesNew faces_hide"
            } else if ((d = document.getElementById("content")) && "textarea" == d.type) {
                if ($("faces1"))
                    $("faces1").className = "facesNew faces_hide"
            } else if (!((d = document.getElementById("post_content")) && 
            "textarea" == d.type))
                if (!((d = document.getElementById("reply_content")) && "textarea" == d.type))
                    if (!((d = document.getElementById("edit_content")) && "textarea" == d.type))
                        return !1;
    if (document.selection)
        d.focus(), sel = document.selection.createRange(), sel.text = a, d.focus();
    else if (d.selectionStart || "0" == d.selectionStart) {
        b = d.selectionStart;
        c = d.selectionEnd;
        d.focus();
        var e = c;
        d.value = d.value.substring(0, b) + a + d.value.substring(c, d.value.length);
        e += a.length;
        d.selectionStart = e;
        d.selectionEnd = e
    } else
        d.focus(), d.value += 
        a
}
function changestyle(a, b, c) {
    var d = $("share_list_" + a);
    d && setTimeout(function() {
        if (c) {
            var e = $("tran_title").value;
            20 < e.length && (e = e.substring(0, 20) + "\u3002\u3002\u3002");
            e = "\u3010\u89c6\u9891\uff1a" + e + "\u3011";
            d.style.width = "120px";
            sinahref(a, b, e);
            youkuhref(a, b, e);
            tencenthref(a, b, e);
            renrenhref(a, b);
            qzonehref(a, b)
        } else
            d.style.width = "1px"
    }, 150)
}
function youkuhref(a, b, c) {
    var d = $("tran_youku").value + "?cmmtsid=" + a;
    if ($("content_" + b) && (b = $("content_" + b).innerHTML.replace(/@/g, "").stripTags(), b = b.length > 187 - c.length ? b.substring(0, 187 - c.length - 3) + "\u3002\u3002\u3002" : b, $("youku_weibo_" + a)))
        $("youku_weibo_" + a).href = "http://" + d + "&content=" + encodeURIComponent(c + "\u7684\u8fd9\u6761\u8bc4\u8bba\u4e0d\u9519\uff1a\u201c" + b + "\u201c")
}
function sinahref(a, b, c) {
    var d = $("tran_sina").value + "?cmmtsid=" + a;
    if ($("content_" + b) && (b = $("content_" + b).innerHTML.replace(/@/g, "").stripTags(), b = b.length > 111 - c.length ? b.substring(0, 111 - c.length - 3) + "\u3002\u3002\u3002" : b, $("sina_weibo_" + a)))
        $("sina_weibo_" + a).href = "http://" + d + "&title=" + encodeURIComponent(c + "\u7684\u8fd9\u6761\u8bc4\u8bba\u4e0d\u9519\uff1a\u201c" + b + "\u201c")
}
function tencenthref(a, b, c) {
    var d = $("tran_tencent_weibo").value + "?cmmtsid=" + a;
    if ($("content_" + b) && (b = $("content_" + b).innerHTML.replace(/@/g, "").stripTags(), b = b.length > 112 - c.length ? b.substring(0, 112 - c.length - 3) + "\u3002\u3002\u3002" : b, $("tencent_weibo_" + a)))
        $("tencent_weibo_" + a).href = "http://" + d + "&title=" + encodeURIComponent(c + "\u7684\u8fd9\u6761\u8bc4\u8bba\u4e0d\u9519\uff1a\u201c" + b + "\u201c\uff08\u5206\u4eab\u81ea @\u4f18\u9177\uff09")
}
function qzonehref(a, b) {
    var c = $("tran_qzone").value + encodeURIComponent("?cmmtsid=" + a);
    if ($("content_" + b)) {
        var d = $("content_" + b).innerHTML.replace(/@/g, "").stripTags(), d = 118 < d.length ? d.substring(0, 115) + "\u3002\u3002\u3002" : d;
        if ($("qzone_" + a))
            $("qzone_" + a).href = "http://" + c + "&desc=" + encodeURIComponent("\u5728\u4f18\u9177\u4e0a\u770b\u89c1\u8fd9\u6761\u8bc4\u8bba\u4e0d\u9519\uff1a\u201c" + d + "\u201c")
    }
}
function renrenhref(a, b) {
    var c = $("tran_renren").value + "?cmmtsid=" + a, d = $("tran_renren2").value + "?cmmtsid=" + a;
    if ($("content_" + b)) {
        var e = $("content_" + b).innerHTML.stripTags();
        if (!0 == Prototype.Browser.IE) {
            if ($("renren_" + a))
                $("renren_" + a).href = "http://" + d
        } else if ($("renren_" + a))
            $("renren_" + a).href = "http://" + c + "&description=" + encodeURIComponent(e)
    }
}
var comment_hz = {source: null,hzsource: null,init: function(a) {
        (a = $(a)) && Event.observe(a, "click", this.handler_event.bind(this))
    },handler_event: function(a) {
        this.hzsource = this.source = Element.extend(Event.element(a));
        if (a = this.hzsource.getAttribute("_hz"))
            try {
                this.parseHz(a)
            } catch (b) {
            }
    },parseHz: function(a) {
        "undefined" == typeof a || -1 == a.indexOf("#") || (a = a.split("#"), this.postHz(a[0], a[1]))
    },postHz: function(a, b) {
        if (0 < a && 0 < b) {
            var c = "http://hz.youku.com/red/click.php?tp=1&cp=" + a + "&cpp=" + b + "&time=" + Math.random() + 
            "&url=#", d = $("hzImg");
            if (null == d)
                d = new Image(1, 1), d.id = "hzImg", d.onload = function() {
                }, document.body.appendChild(d);
            d.src = c
        }
    }}, VideoComments = {replayNode: null,expandNode: null,replayLink: null,textfildeds: [],txtcomment: null,isInputting: !1,reply: function(a, b, c, d, e, f) {
        window.hasReply = !0;
        var h = "";
        if (!1 == d && $("del_" + a))
            return alert("\u539f\u8bc4\u8bba\u5df2\u5220\u9664,\u4e0d\u80fd\u8fdb\u884c\u56de\u590d\u3002"), !1;
        var g = Element.extend(Event.element(f || window.event)), j = Array.prototype.slice.call(arguments);
        if (g.hasClassName("reply_subcomment")) {
            h = $("subReplyArea") ? $("subReplyArea").up().getAttribute("id").substr(10) : 0;
            if ($("subReplyArea") && "none" != $("subReplyArea").style.display && a == parseInt(h))
                return this.cancle("sub"), !1;
            h = this._getReplyBox("sub");
            this._subCommentReply(h, j);
            $("splite") && $("r_subsplite") && $("splite").visible() && $("r_subsplite").show();
            this.init();
            setTimeout(function() {
                this.setRangePos($("r_subcontent"))
            }.bind(this), 300)
        } else {
            window.rpo = a;
            h = $("replyCommentArea") ? $("replyCommentArea").up().getAttribute("id").substr(7) : 
            0;
            if ($("replyCommentArea") && "block" == $("replyCommentArea").style.display && a == parseInt(h))
                return this.cancle("org"), !1;
            var h = this._getReplyBox("org"), k = g.getAttribute("data-replynum"), k = empty(k) || 0 == parseInt(k) ? !1 : !0;
            this._replyComment(h, j, k, g);
            $("splite") && $("r_splite") && $("splite").visible() && $("r_splite").show();
            this.init();
            setTimeout(function() {
                this.setRangePos($("r_content"))
            }.bind(this), 300)
        }
        DropMenus.init("videobodycommentlist");
        this.isInputting = !0;
        return !1
    },_replyComment: function(a, b, c, d) {
        var e = 
        "", f = b[0], h = b[1], g = b[2], j = b[3], b = b[4];
        $("replyCommentArea") ? ($("subcomments") && $("subcomments").remove(), $("subcommentsloading") && $("subcommentsloading").remove(), $("r_content").value = $("content").defaultValue, $("r_content").className = "defaultext", e = $("replyCommentArea")) : (a = '<div id="reply_div" class="commentAction commentReply">' + a + "</div>", e = document.createElement("div"), e.id = "replyCommentArea", e.className = "replyBox", e.innerHTML = a);
        d.up(5).appendChild(e);
        window.replyun = $("comment_name_quote_" + 
        f) ? $("comment_name_quote_" + f).innerHTML : "@" + $("comment_name_" + f).innerHTML;
        if (!j)
            d = " //@" + ($("comment_name_" + f) ? trim($("comment_name_" + f).innerHTML) : "") + ":" + trim($("content_" + f).innerHTML), $("r_content").value = d.replace(/<img[^>]+alt="([^\"]+)".*?>/img, "[$1]").replace(/<a[^<]+?>(.+?)<\/a>/img, "$1 ").stripTags().replace(/[\n\t\r]+/ig, " "), $("r_content").className = "";
        if (($("hotcomment").hasClassName("current") || "top" == b) && c)
            e.insert({bottom: '<div id="subcommentsloading"><div class="null"><img src="/v/img/loading_h8.gif"></div></div>'}), 
            this._subCommentDisplay(window.videoId, h);
        e.style.display = "block";
        $("r_content").focus();
        $("r_comment").onclick = function() {
            commentNew(f, h, g, j)
        }
    },_subCommentDisplay: function(a, b) {
        nova_call("http://" + COMMENT_DOMAIN + "/comments/~ajax/getSubCommentsContent.html", {videoid: a,sid: b,showid: window.showid}, "VideoComments.subCommentDisplayCallback", void 0, 1)
    },subCommentDisplayCallback: function(a) {
        $("subcommentsloading") && $("subcommentsloading").remove();
        if ($("subcomments")) {
            $("subcomments").remove();
            var b = VideoComments.getAbsPoint($("r_content").up(3));
            window.scroll(b.x, b.y)
        }
        $("replyCommentArea").insert({bottom: a.content})
    },getAbsPoint: function(a) {
        for (var b = a.offsetLeft, c = a.offsetTop; a = a.offsetParent; )
            b += a.offsetLeft, c += a.offsetTop;
        return {x: b,y: c}
    },_subCommentReply: function(a, b) {
        var c, d = $("subcomments").getAttribute("data-isOriginalComment"), e, f = b[0], h = b[1], g = b[2], j = b[3];
        $("subReplyArea") ? ($("r_subcontent").value = "", c = $("subReplyArea")) : (c = document.createElement("div"), c.id = "subReplyArea", c.className = "commentAction commentReply", c.innerHTML = a);
        $("subcomment" + f).appendChild(c);
        e = this._genDefaultReplyContent($("comment_name_" + f) ? $("comment_name_" + f).innerHTML : "", $("subcontent_" + f).innerHTML);
        "1" == d && (d = $("subcomments").getAttribute("data-originalSid"), d = this._genDefaultReplyContent($("comment_name_" + d) ? $("comment_name_" + d).innerHTML : "", $("content_" + d).innerHTML), e += d);
        c.show();
        $("r_subcontent").value = e;
        $("r_subcontent").className = "";
        $("r_subcontent").focus();
        $("r_content").blur();
        $("r_subcomment").onclick = function() {
            this._subCommentSubmit(f, 
            h, g, j)
        }.bind(this)
    },_subCommentSubmit: function(a, b, c) {
        if (islogin()) {
            a = $("r_subcontent").value.replace("\uff1a", ":");
            if (a == $("r_subcontent").defaultValue || 1 > a.replace(/(^\s*)|(\s*$)/g, "").length)
                return $("r_subcom_overlay").innerHTML = "\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\u3002", $("r_subcom_overlay").show(), setTimeout(function() {
                    $("r_subcom_overlay").hide()
                }, 2E3), !1;
            var d = window.videoId, e = "";
            if ($("r_subverify_code_value") && $("r_subverify_code_value").value)
                e = $("r_subverify_code_value").value;
            var f = 
            0, h = 0, g = 0, j = 0, k = 0, l = 0, m = 0;
            if ($("r_subsync_ucenter"))
                f = $("r_subsync_ucenter").value;
            if ($("r_subsync_renren"))
                h = $("r_subsync_renren").value;
            if ($("r_subsync_sina"))
                g = $("r_subsync_sina").value;
            if ($("r_subsync_tencent"))
                j = $("r_subsync_tencent").value;
            if ($("r_subsync_messenger"))
                k = $("r_subsync_messenger").value;
            if ($("r_subsync_qzone"))
                l = $("r_subsync_qzone").value;
            if ($("r_subsync_kaixin"))
                m = $("r_subsync_kaixin").value;
            Nova.QComments.comment({videoId: d,content: a,verify_code: e,reply_cid: b,soure_id: c,sync_ucenter: f,
                sync_renren: h,sync_sina: g,sync_tencent: j,sync_messenger: k,sync_qzone: l,sync_kaixin: m}, VideoComments.subCommentSubmitCallback);
            return VideoComments.isInputting = !1
        }
        VideoComments.login("VideoComments.callback")
    },subCommentSubmitCallback: function(a) {
        verify_code_comment(!0, window.rpo, "sub");
        if (null == a)
            return !1;
        if (0 > a)
            return $("r_subtips").innerHTML = err[a], $("r_subcom_overlay").show(), setTimeout(function() {
                $("r_subcom_overlay").hide()
            }, 2E3), !1;
        var b = '<div class="comment"><div class="bar">\u6211</div><div class="con"><div style="margin-bottom:10px"><p>' + 
        a.content + '<br></p></div><div class="panel"><span class="timestamp">\u521a\u521a</span><span class="via">\u6765\u81ea<em><a target="_blank" href="http://hz.youku.com/red/click.php?tp=1&amp;cp=4004585&amp;cpp=1000492&amp;url=http://www.youku.com/">\u4f18\u9177\u7f51</a></em></span></div></div></div>';
        $("subCommentRewrite").innerHTML = b + $("subCommentRewrite").innerHTML;
        VideoComments._updateCommentNums();
        $("subReplyArea").hide();
        $("r_subverify_code_value").value = "";
        2 == a.state && $("subcommentspop") && $("subcommentspop").show()
    },
    _updateCommentNums: function() {
        var a = $$(".subcmtcurrpagetotal"), b = $$(".subcmtpagetotal");
        if (a)
            for (var c = 0, d = a.length; c < d; c++)
                a[c].innerHTML = (parseInt(a[c].innerHTML.replace(/\,/, "")) + 1).toLocaleString().replace(/\.00$/g, "");
        if (b) {
            c = 0;
            for (d = b.length; c < d; c++)
                b[c].innerHTML = (parseInt(b[c].innerHTML.replace(/\,/, "")) + 1).toLocaleString().replace(/\.00$/g, "")
        }
        try {
            var e = $("replyCommentArea").previous().getElementsByClassName("com_reply")[0].down();
            if (e) {
                var f = parseInt(e.innerHTML.replace(/[^\d]*/ig, "")) + 
                1;
                e.innerHTML = "\u56de\u590d(" + f + ")"
            }
        } catch (h) {
        }
    },_genDefaultReplyContent: function(a, b) {
        return (" //@" + trim(a) + ":" + trim(b)).replace(/<img[^>]+alt="([^\"]+)".*?>/img, "[$1]").replace(/<a[^<]+?>(.+?)<\/a>/img, "$1 ").stripTags().replace(/[\n\t\r]+/ig, " ")
    },_getReplyBox: function(a) {
        var b, c;
        islogin() ? (b = get_username("all"), c = encodeURIComponent(b.username), b = '<div class="username"><span><a target="_blank" href="' + ("http://" + space_domain + "/user_show/uid_" + c + ".html") + '">' + b.username + "</a></span></div>") : b = '<div id="' + 
        ("sub" == a ? "loginSubAreaReply" : "loginAreaReply") + '" class="loginArea"><a onclick="VideoComments.login(\'VideoComments.callback\');return false;" href="#">\u767b\u5f55</a><span class="break">|</span><a target="_blank" href="http://hz.youku.com/red/click.php?tp=1&amp;cp=4002533&amp;cpp=1000404&amp;url=http://www.youku.com/user/signup">\u6ce8\u518c</a></div>';
        c = '<div id="' + ("sub" == a ? "r_subconnect_div" : "r_connect_div") + '" class="insert_share">' + $("connect_div").innerHTML + "</div>";
        c = this.updateSyncPart(c, 
        a);
        var d = "sub" == a ? "sub" : "org", d = '<div class="tool"><div class="insert_emoticon"><div class="dropmenu" index="2"><div class="handle"><a title="\u8868\u60c5" onclick="return false;" href="#"><span class="icon"><em>\u8868\u60c5</em></span>\u8868\u60c5</a></div><div class="panel"><div class="faces"><div class="ico__faces_act  ' + ("sub" == a ? "subcomment_emoticon" : "") + '"><a title="\u8d5e" href="#" class="o1" onclick="grinComments(\'[\u8d5e]\',' + rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u8d5e</em></a><a title="\u7a00\u996d" href="#" class="o2" onclick="grinComments(\'[\u7a00\u996d]\',' + 
        rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u7a00\u996d</em></a><a title="\u6124\u6012" href="#" class="o3" onclick="grinComments(\'[\u6124\u6012]\',' + rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u6012</em></a><a title="\u5410" href="#" class="o4" onclick="grinComments(\'[\u5410]\',' + rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u5410</em></a><a title="\u65e0\u8bed" href="#" class="o5" onclick="grinComments(\'[\u65e0\u8bed]\',' + rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u65e0\u8bed</em></a><a title="\u96be\u8fc7" href="#" class="o6" onclick="grinComments(\'[\u96be\u8fc7]\',' + 
        rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u96be\u8fc7</em></a><a title="\u6c57" href="#" class="o7" onclick="grinComments(\'[\u6c57]\',' + rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u6c57</em></a><a title="\u641e\u7b11" href="#" class="o8" onclick="grinComments(\'[\u641e\u7b11]\',' + rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u641e\u7b11</em></a><a title="\u725b" href="#" class="niu" onclick="grinComments(\'[\u725b]\',' + rpo + ",'" + d + '\'); DropMenus.hideall();return false;"><em>\u725b</em></a><a title="\u5f3a" href="#" class="qiang" onclick="grinComments(\'[\u5f3a]\',' + 
        rpo + ",'" + d + "'); DropMenus.hideall();return false;\"><em>\u5f3a</em></a></div></div></div></div></div></div>";
        return b + ("sub" == a ? '<div class="commentTextArea"><textarea class="defaultext" cols="40" rows="2" id="r_subcontent" name="r_subcontent" onKeyDown="ctlentComments(event,\'r_subcomment\');"></textarea></div><div class="wordlimit" id="r_subwordlimit"><span id="r_submaxinput" class="wordenter">0</span><span class="wordenter">/300</span></div><div id="commentTools" class="toolbar">' + d + '<div class="splite" id="r_subsplite" style="display:none"></div><div class="tool">' + 
        c + '</div><div class="action"><div class="form_btn form_btn_s form_btnmaj_s"><span class="form_btn_text" id="r_subcomment">\u56de\u590d</span></div><div class="form_btn form_btn_s form_btnsub_s" onclick="VideoComments.cancle(\'sub\');"><span class="form_btn_text">\u53d6\u6d88</span></div></div><div class="clear"></div></div><div class="com_overlay" id="r_subcom_overlay" style="display:none"><div class="com_overlay_con"><div class="tips" id="r_subtips"></div></div></div><div class="validate" id="r_subverify_code" style="display:none;"> \u9a8c\u8bc1\u7801: <input class="defaultext" type="text" onKeyDown="ctlentComments(event,\'r_subcomment\');" name="r_subverify_code_value" id="r_subverify_code_value" value="\u8f93\u5165\u53f3\u56fe\u7684\u5b57\u7b26" /> <span><img class="key" id="r_subverify_code_img"/></span> <span>\u770b\u4e0d\u6e05, <a href="#" onclick="verify_code_comment(true,rpo, \'sub\');return false;">\u70b9\u6b64\u5237\u65b0</a></span></div> <div class="clear"></div>' : 
        '<div class="commentTextArea"><textarea class="defaultext" cols="40" rows="2" id="r_content" name="r_content" onKeyDown="ctlentComments(event,\'r_comment\');"></textarea></div><div class="wordlimit" id="r_wordlimit"><span id="r_maxinput" class="wordenter">0</span><span class="wordenter">/300</span></div><div id="commentTools" class="toolbar">' + d + '<div class="splite" id="r_splite" style="display:none"></div><div class="tool">' + c + '</div><div class="action"><div class="form_btn form_btn_s form_btnmaj_s comment_commit"><span class="form_btn_text" id="r_comment">\u56de\u590d</span></div><div class="form_btn form_btn_s form_btnsub_s comment_commit" onclick="VideoComments.cancle(\'org\');"><span class="form_btn_text">\u53d6\u6d88</span></div></div><div class="clear"></div></div><div class="com_overlay" id="r_com_overlay" style="display:none"><div class="com_overlay_con"><div class="tips" id="r_tips"></div></div></div><div class="validate" id="r_verify_code" style="display:none;"> \u9a8c\u8bc1\u7801: <input class="defaultext" type="text" onKeyDown="ctlentComments(event,\'r_comment\');" name="r_verify_code_value" id="r_verify_code_value" value="\u8f93\u5165\u53f3\u56fe\u7684\u5b57\u7b26" /> <span><img class="key" id="r_verify_code_img"/></span> <span>\u770b\u4e0d\u6e05, <a href="#" onclick="verify_code_comment(true,rpo);return false;">\u70b9\u6b64\u5237\u65b0</a></span></div> <div class="clear"></div>')
    },
    updateSyncPart: function(a, b) {
        var c;
        c = "sub" == b ? "r_sub" : "r_";
        a = a.replace(/sync_renren/g, c + "sync_renren");
        a = a.replace(/sync_sina/g, c + "sync_sina");
        a = a.replace(/sync_tencent/g, c + "sync_tencent");
        a = a.replace(/sync_qzone/g, c + "sync_qzone");
        a = a.replace(/sync_messenger/g, c + "sync_messenger");
        a = a.replace(/sync_ucenter/g, c + "sync_ucenter");
        return a = a.replace(/sync_kaixin/g, c + "sync_kaixin")
    },cancle: function(a) {
        "sub" == a ? $("subReplyArea").hide() : (window.hasReply = !1, Element.show("reply_" + window.rpo), window.rpo = "", $("replyCommentArea").style.display = 
        "none");
        this.isInputting = !1
    },focus: function() {
        var a = this;
        setTimeout(function() {
            a.txtcomment.focus()
        }, 100);
        Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004798&cpp=1000217&" + Math.random())
    },moreclick: function() {
        var a = $("hotcomment");
        if (a)
            if ("function" == typeof a.click || "object" == typeof a.click)
                a.click();
            else {
                var b = document.createEvent("MouseEvents");
                b.initEvent("click", !0, !0);
                a.dispatchEvent(b)
            }
    },bind: function() {
        var a = this;
        for (i = 0; i < this.textfildeds.length; i++) {
            var b = this.textfildeds[i];
            if ("textarea" == b.type) {
                if (a = this, b.onfocus = function() {
                    var b = this.getAttribute("data-state");
                    if (!(b && "true" == b)) {
                        this.setAttribute("data-state", "true");
                        if (-1 != this.value.indexOf(this.defaultValue) && "" != this.className)
                            this.value = this.value.replace(this.defaultValue, ""), this.className = "", a.isInputting = !0;
                        "content" == this.id ? verify_code_comment() : "r_subcontent" == this.id ? verify_code_comment(!1, window.rpo, "sub") : verify_code_comment(!1, window.rpo);
                        checkInputLenth(this)
                    }
                }, b.onblur = function() {
                    if ("" == this.value)
                        this.value = 
                        this.defaultValue, this.className = "defaultext";
                    this.setAttribute("data-state", "false")
                }, b.onpropertychange = function() {
                    checkInputLenth(this)
                }, b.oninput = function() {
                    checkInputLenth(this)
                }, b.onkeyup = function() {
                    checkInputLenth(this)
                }, "r_subcontent" == b.id || "r_content" == b.id)
                    verify_code_comment(!1, window.rpo, "r_subcontent" == b.id ? "sub" : "")
            } else
                "password_fake" == b.id ? b.onfocus = function() {
                    this.style.display = "none";
                    document.getElementById("password").style.display = "inline";
                    document.getElementById("password").focus()
                } : 
                "password" == b.id ? b.onblur = function() {
                    if ("" == this.value)
                        this.style.display = "none", document.getElementById("password_fake").style.display = "inline"
                } : "r_password_fake" == b.id ? b.onfocus = function() {
                    this.style.display = "none";
                    document.getElementById("r_password").style.display = "inline";
                    document.getElementById("r_password").focus()
                } : "r_password" == b.id ? b.onblur = function() {
                    if ("" == this.value)
                        this.style.display = "none", document.getElementById("r_password_fake").style.display = "inline"
                } : (a = this, b.onfocus = function() {
                    if (this.value == 
                    this.defaultValue)
                        this.className = this.value = ""
                }, b.onblur = function() {
                    if ("" == this.value)
                        this.value = this.defaultValue, this.className = "defaultext"
                })
        }
    },init: function(a) {
        this.textfildeds = [];
        for (var b = $("commentArea").getElementsByTagName("INPUT"), c = $("commentArea").getElementsByTagName("TEXTAREA"), d = 0; d < b.length; d++)
            ("text" == b[d].type || "password" == b[d].type) && this.textfildeds.push(b[d]);
        for (d = 0; d < c.length; d++)
            this.textfildeds.push(c[d]);
        this.expandNode = $("commentexpand");
        this.replyNode = $("reply");
        this.txtcomment = 
        $("content");
        this.bind();
        !0 == a && this.callback()
    },setRangePos: function(a) {
        a.setSelectionRange ? (a.focus(), a.setSelectionRange(0, 0)) : a.createTextRange && (a.blur(), a = a.createTextRange(), a.collapse(!0), a.moveEnd("character", 0), a.moveStart("character", 0), a.select())
    },showAvatar: function(a, b) {
        nova_request(function(c) {
            if (-1 != c) {
                var d = document.createElement("DIV");
                d.style.display = "block";
                d.innerHTML = "<a href=" + a + ' target="_blank"><img title="' + b + '" src=' + c + "></a>";
                d.className = "userPhoto";
                $("commentAction").insertBefore(d, 
                $("commentAction").childNodes[0]);
                $("commentAction").className = "commentAction loginAfter"
            }
        }, "/QComments/~ajax/getUserIcon", {})
    },callback: function() {
        if (islogin()) {
            var a = get_username("all");
            encodeURIComponent(a.username);
            var a = a.username, b = "http://" + uc_domain + "/u/home";
            if ($("loginArea"))
                $("loginArea").innerHTML = "<span><a href=" + b + ">" + a + "</a></span>";
            if ($("loginAreaReply"))
                $("loginAreaReply").innerHTML = "<span><a href=" + b + ">" + a + "</a></span>";
            if ($("loginSubAreaReply"))
                $("loginSubAreaReply").innerHTML = 
                "<span><a href=" + b + ">" + a + "</a></span>";
            VideoComments.showAvatar(b, a);
            showConnects()
        }
    },login: function() {
        login()
    },isInputtingComment: function() {
        var a = !1;
        if (this.isInputting && ($("content") && $("content").value && 0 != $("content").value.indexOf($("content").defaultValue) || $("r_content") && $("r_content").value && 0 != $("r_content").value.indexOf($("content").defaultValue)))
            a = !0;
        var b = !1;
        $("notice_handle") && $("popnotice") && $("notice_handle").hasClassName("dropmenu_expand") && document.popnotice.noticeBoxAction && 
        document.popnotice.noticeBoxAction.isInputting && ($("popnotice").contentDocument ? $("popnotice").contentDocument : $("popnotice").contentWindow.document).getElementById("r_content").value && (b = !0);
        return a || b
    }};
if (!islogin())
    window.update_login_status_hook_comment = VideoComments.callback;
var DropMenus = {collection: [],init: function(a) {
        if (this.area = document.getElementById(a))
            this.find(), this.bind()
    },find: function() {
        for (var a = this.area.getElementsByTagName("div"), b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.className && "dropmenu" == c.className) {
                for (var d = c, e = null, f = null, c = c.getElementsByTagName("div"), h = 0; h < c.length; h++) {
                    var g = c[h];
                    if (g.className && ("handle" == g.className && (e = g), "panel" == g.className)) {
                        f = g;
                        break
                    }
                }
                e && f && this.collection.push({dom: d,handle: e,panel: f,status: "hide"})
            }
        }
    },bind: function() {
        function a(b) {
            return "DIV" == 
            b.tagName && b.className && "handle" == b.className || !b ? b : a(b.parentNode)
        }
        for (var b = this, c = 0; c < this.collection.length; c++) {
            var d = this.collection[c];
            d.dom.setAttribute("index", c);
            this._addEvent(d.handle, "click", function(c) {
                b._cancleBubble(c);
                c = (this == window ? a(event.srcElement) : this).parentNode;
                c = parseInt(c.getAttribute("index"));
                b.hideother(c);
                b.toggle(c)
            });
            this._addEvent(d.dom, "click", function(a) {
                b._cancleBubble(a)
            });
            this._addEvent(document.body, "click", function() {
                b.hideall()
            })
        }
    },_addEvent: function(a, b, 
    c) {
        if (window.addEventListener)
            if ("mouseenter" == b || "mouseleave" == b) {
                var d = function(a) {
                    var b = a.currentTarget, d = a.relatedTarget, g;
                    try {
                        g = b.contains ? b != d && b.contains(d) : !!(b.compareDocumentPosition(d) & 16)
                    } catch (j) {
                    }
                    !g && b != d && c.call(a.currentTarget, a)
                };
                "mouseenter" == b ? a.addEventListener("mouseover", d, !1) : a.addEventListener("mouseout", d, !1)
            } else
                a.addEventListener(b, c, !1);
        else
            window.attachEvent && a.attachEvent("on" + b, c)
    },_cancleBubble: function(a) {
        a = window.event || a;
        a.preventDefault ? (a.preventDefault(), a.stopPropagation()) : 
        (a.cancelBubble = !0, a.returnValue = !1)
    },show: function(a) {
        if ((a = this.collection[a]) && "hide" == a.status) {
            a.status = "show";
            var b = a.dom.getElementsByTagName("iframe")[0];
            if (!b)
                b = document.createElement("iframe"), b.className = "mask", b.frameBorder = "0", b.scrolling = "no", a.dom.appendChild(b);
            b.style.width = a.panel.offsetWidth + "px";
            b.style.height = a.panel.offsetHeight + "px";
            a.dom.className = "dropmenu dropmenu_expand"
        }
    },hide: function(a) {
        if ((a = this.collection[a]) && "show" == a.status)
            a.status = "hide", a.dom.className = "dropmenu"
    },
    toggle: function(a) {
        this.collection[a] && this.show(a)
    },hideother: function(a) {
        for (var b = 0; b < this.collection.length; b++)
            a != b && this.hide(b)
    },hideall: function() {
        for (var a = 0; a < this.collection.length; a++)
            this.hide(a)
    }}, Derivatives = {proInfo: null,proInfoDiv: "proInfo",productsWide: null,msgBoxChange: "derivatives_msgbox_change",msgBoxExpandDuration: 3E3,closeTipsHandler: "derivatives_tips_handler",tipsCookie: "DERIVA_TIPS",widePerPage: 3,diffSeconds: 1,listenTimer: null,occurTimes: null,init: function(a, b) {
        if (a && 0 < a.length && 
        void 0 != ShowCase) {
            var c = {parent: this.proInfoDiv,rotatetype: "proinfo",perpage: 1,initnum: 1,rect: 270,delay: 100,data: a};
            this.proInfo = new ShowCase(c);
            this.proInfoDiv = $(this.proInfoDiv);
            c.parent = "products-wide";
            c.rotatetype = "product";
            c.perpage = this.widePerPage;
            c.delay = 6E3;
            this.productsWide = new ShowCase(c);
            if (this.msgBoxChange = document.getElementById(this.msgBoxChange))
                this.msgBoxChange.parentNode.onclick = this.msgBoxClick();
            this.initTips();
            if (!(b && 0 == b)) {
                var d = window.resize, e = this;
                window.onresize = function() {
                    "function" == 
                    typeof d && d();
                    e.resizeWide()
                }
            }
        }
    },initTips: function() {
        var a = $(this.closeTipsHandler);
        if (a && !Nova.Cookie.get(this.tipsCookie)) {
            var b = this;
            a.parentNode.style.display = "block";
            a.onclick = function() {
                this.parentNode.style.display = "none";
                Nova.Cookie.set(b.tipsCookie, 1, 365)
            }
        }
    },msgBoxClick: function() {
        var a = this;
        return function() {
            var b = a.proInfoDiv.getElementsByTagName("ul")[0];
            ShowCase.clickStat(b.getAttribute("itemid"), 1);
            void 0 != window.ToggleShowList && (ToggleShowList.toggle(2), PlayerSider.open())
        }
    },resizeWide: function() {
        1346 > 
        (document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth) ? this.productsWide.reset({perpage: 2}) : this.productsWide.reset({perpage: 3})
    },getOccurTime: function(a) {
        nova_request(this.listen, "/v_getDerivativeShowTime/vid_" + a)
    },listen: function(a) {
        if (null != a) {
            this.occurTimes = a;
            var b = this;
            this.listenTimer = setInterval(function() {
                b.showDerivative()
            }, 1E3)
        }
    },showDerivative: function() {
        for (var a = this, b = 0, c = this.occurTimes.length; b < c; b++)
            if (Math.abs(this.occurTimes[b].showtime - Interact.getWatchTime()) <= 
            this.diffSeconds) {
                this.expandMsgbox();
                setTimeout(function() {
                    a.shrinkMsgbox()
                }, this.msgBoxExpandDuration);
                break
            }
    },expandMsgbox: function() {
        if (this.msgBoxChange)
            this.msgBoxChange.style.visibility = "visible"
    },shrinkMsgbox: function() {
        if (this.msgBoxChange)
            this.msgBoxChange.style.visibility = "hidden"
    }}, Display = {toggleText: function(a, b, c) {
        a = document.getElementById(a);
        b = document.getElementById(b);
        "none" != a.style.display ? (a.style.display = "none", b.style.display = "inline", c.innerHTML = "\u9690\u85cf\u8be6\u60c5") : 
        (a.style.display = "inline", b.style.display = "none", c.innerHTML = "\u663e\u793a\u8be6\u60c5")
    },changeType: function(a, b, c, d) {
        a = document.getElementById(a);
        b = document.getElementById(b);
        c = "string" == typeof c ? document.getElementById(c) : c;
        d = "string" == typeof d ? document.getElementById(d) : d;
        a.style.display = "block";
        b.style.display = "none";
        c.className = "type current";
        d.className = "type"
    },toggleBlock: function(a) {
        a = "string" == typeof a ? document.getElementById(a) : a;
        a.style.display = "none" != a.style.display ? "none" : "block"
    },
    changeBlock: function(a, b) {
        a = "string" == typeof a ? document.getElementById(a) : a;
        b = "string" == typeof b ? document.getElementById(b) : b;
        a.style.display = "block";
        b.style.display = "none"
    }}, copytoclip = 1;
function copyToClipboard(a, b) {
    var c = $(a);
    c.select();
    try {
        if (therange = void 0, 1 == copytoclip && (c.createTextRange && (therange = c.createTextRange()), therange = therange ? therange : document, therange.execCommand("Copy"))) {
            !1 != b && alert("\u590d\u5236\u6210\u529f\u3002\u73b0\u5728\u60a8\u53ef\u4ee5\u7c98\u8d34\uff08Ctrl+v\uff09\u5230Blog \u6216BBS\u4e2d\u4e86\u3002");
            return
        }
    } catch (d) {
    }
    alert("\u60a8\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u590d\u5236\u529f\u80fd\uff0c\u8bf7\u4f7f\u7528Ctrl+C\u6216\u9f20\u6807\u53f3\u952e\u3002")
}
function videoLogin() {
    var a = $("div_login");
    if (a)
        a.innerHTML = "";
    (a = $("login_div")) && a.hide();
    "undefined" != typeof paid && "1" == paid && top.location.reload()
}
function QueryString() {
    var a, b, c;
    c = location.href;
    b = c.lastIndexOf("/");
    c = c.substr(b + 1);
    c = c.split("?");
    b = c[0];
    1 < c.length && (a = c[1]);
    if (b) {
        b = b.split(".")[0];
        b = b.split("_");
        for (c = 0; c < b.length; c += 2)
            b[c] && b[c + 1] && (this[b[c]] = b[c + 1])
    }
    if (a) {
        var d = a.split("&");
        for (c = 0; c < d.length; c++)
            num = d[c].indexOf("="), 0 < num && (a = d[c].substring(0, num), b = d[c].substr(num + 1), this[a] = b)
    }
}
var pip_turn1, pip_turn2, pip_t;
function openPip() {
    pip_turn1.style.display = "none";
    pip_turn2.style.display = "block"
}
function closePip() {
    pip_turn2.style.display = "none";
    pip_turn1.style.display = "block"
}
function change_pip(a, b, c) {
    pip_turn1 = document.getElementById(a);
    pip_turn2 = document.getElementById(b);
    1 == c ? pip_t = setTimeout(openPip, 300) : (clearTimeout(pip_t), closePip())
}
function stop_change_pip() {
    clearTimeout(pip_t)
}
function change_flashAndImg_div(a, b) {
    var c = document.getElementById(a), d = document.getElementById(b);
    c.style.display = d.style.display;
    d.style.display = "none" == d.style.display ? "block" : "none"
}
function pop_register() {
    login("VideoComments.callback")
}
function activePage() {
    var a = parseInt((new Date).getTime() / 1E3) + 7200;
    1 == Nova.Cookie.get("P_F") && Nova.Cookie.set("P_T", a)
}
function v_charset_click(a) {
    activePage(a);
    charset_click_v(a)
}
function charset_click_v(a) {
    if (!a)
        a = window.event;
    var b = !0, a = a.target ? a.target : a.srcElement;
    a.onclick && (b = !1);
    if ("A" != a.tagName)
        a = a.parentNode;
    if (a && "A" == a.tagName) {
        var c = [];
        c[0] = a.charset ? a.charset : "";
        c[1] = a.getAttribute("_hzcharset") ? a.getAttribute("_hzcharset") : "";
        for (var d = 0; d < c.length; d++)
            if (!("" == c[d] || void 0 == c[d])) {
                var e = c[d];
                if (-1 !== e.indexOf("hz-"))
                    e = e.replace("hz-", ""), e = e.split("-"), f = e[0], cpp = "1000217", e[1] && (cpp = e[1]), e = "tp=1&cp=" + f + "&cpp=" + cpp, Log.log(1, e);
                else if (-1 !== e.indexOf("vc-")) {
                    var f = 
                    e.replace("vc-", ""), e = f;
                    Log.log(5, e)
                } else {
                    f = "";
                    e = e.replace("400-", "").replace("401-", "").replace("404-", "");
                    switch (parseInt(playmode)) {
                        case 2:
                            f = "401-";
                            break;
                        case 3:
                            f = "404-";
                            break;
                        default:
                            f = "400-"
                    }
                    e = f + e;
                    Log.log(4, "charset=" + e)
                }
            }
        a.onclick && (b = !1);
        return b
    }
    return !0
}
window.nova_init_hook_pop = function() {
    $("thxpop") && (1 != Nova.Cookie.get("v_pop") && Element.show("thxpop"), setTimeout('Element.hide("thxpop")', 5E3))
};
function checkComment() {
    "none" == $("comment_new").style.display && nova_call("/QVideo/~ajax/getVideoPlayInfo", {id: videoId,type: "comment"}, checkCommentCallback)
}
function checkCommentCallback(a) {
    if (null != a) {
        try {
            "object" != typeof a && (a = JSON.parse(a))
        } catch (b) {
            return
        }
        a.comment > currentCommentTime && Element.show("comment_new")
    }
}
var currentCommentTime = "", commentInterval = "";
function getVideoPageInfoCallback(a) {
    if (null != a) {
        try {
            "object" != typeof a && (a = JSON.parse(a))
        } catch (b) {
            return
        }
        1 == window.paid && a.permission ? -1 == a.permission ? Interact.disableUpDowned() : Interact.initUpDowned() : Interact.initUpDowned();
        if (a.vv && $("videoTotalPV"))
            $("videoTotalPV").innerHTML = pvFormat(a.vv);
        if (a.ss)
            window["atacaoadaea".replace(/a/g, "")] = a.ss, window["asacaoadaea".replace(/a/g, "")] = hcbt(a.ss);
        if (a.comment)
            Element.hide("comment_new"), currentCommentTime = a.comment, 300 > (new Date).getTime() / 1E3 - a.comment && 
            (clearInterval(commentInterval), commentInterval = setInterval(checkComment, 3E4)), nova_update("videobodycommentlist", "/v_vpcommentContent/videoid_" + videoId2 + "_time_" + a.comment + "_page_1.html?v2")
    }
}
function showResponse(a) {
    $("vpbar").innerHTML = a
}
function getVideoPageInfo() {
    var a = "vv";
    1 == window.paid && (a += ",permission");
    nova_request(getVideoPageInfoCallback, "/QVideo/~ajax/getVideoPlayInfo", {id: videoId,sid: showid,type: a,catid: catId});
    $("vprelationofficial") && nova_update("vprelationofficial", "/v_vprelationofficialv5/showid_" + showid + "_vid_" + videoId + "_ct_" + catId + "_t_" + (new Date).getTime());
    $("vpcommendvideos") && (a = "/v_vpcommendvideosv5/cid_" + catId + "_rid_" + Math.floor(1E3 * Math.random() % 30), nova_update("vpcommendvideos", a))
}
var currentCommentModify = "", currentSid = "";
function commentInfoCallback(a) {
    if (!(empty(a) || -1 == a))
        if ($$(".forbidden_comment").length)
            $("tab_inner").hide();
        else if (window.currentSid = a.last_sid, 0 < a.total) {
            if (300 <= a.total && !0 == cateFlag && 0 != a.last_hot_modify) {
                if ($("hotcomment"))
                    $("hotcomment").style.display = "block";
                $("cmt_more") && $("cmt_more").show()
            } else if ($("hotcomment"))
                $("hotcomment").style.display = "none";
            if (!("undefined" != typeof a.owner_count && 3 != playmode && 0 < a.owner_count) && $("ownercomment"))
                $("ownercomment").style.display = "none";
            currentCommentModify = 
            a.last_modify;
            currentHotCommentModify = empty(a.last_hot_modify) ? 0 : a.last_hot_modify;
            totalCommentAll = a.total;
            a = parseInt((new Date).getTime() / 1E3 - a.last_modify);
            1200 > a && (clearInterval(commentInterval), commentInterval = setInterval(checkComments, 300 > a ? 3E4 : 300 <= a && 600 > a ? 6E4 : 12E4));
            nova_call("http://" + COMMENT_DOMAIN + "/comments/~ajax/vpcommentContent.html", {videoid: videoId,sid: currentSid,last_modify: currentCommentModify,page: 1,version: "v1.18",commentSid: commentSid,showid: window.showid}, "displayComments", void 0, 
            1)
        } else {
            if ($("tab_inner"))
                $("tab_inner").style.display = "none";
            if ($("tab_inner_cmt"))
                $("tab_inner_cmt").style.display = "none";
            Element.hide("comment_new");
            displayEmptyComments()
        }
}
function displayHotComments(a) {
    if (a.con)
        $("videobodycommentlist").innerHTML = a.con;
    if (islogin() && a.poster && "string" == typeof a.poster) {
        var b = get_username("all");
        nova_request(function(a) {
            "object" == typeof a && a.target.each(function(a) {
                !0 == a.followed && $("follow_act_" + a.id) && $("follow_act_" + a.id).update("<span>\u5df2\u8ba2\u9605</span>")
            })
        }, "/QUcenter/~ajax/showFriend", {userId: b.userid,friendIds: a.poster})
    }
    comment_hz.init("DigestComments")
}
function checkComments() {
    "none" == $("comment_new").style.display && nova_call("http://" + COMMENT_DOMAIN + "/comments/~ajax/getStatus.html", {videoid: videoId,userid: video_owner,oldSid: currentSid}, "checkCommentsCallback", void 0, 1)
}
function checkCommentsCallback(a) {
    0 < a.new_count && Element.show("comment_new")
}
function displayComments(a) {
    if (a.con)
        $("videobodycommentlist").innerHTML = a.con;
    a.totalSize && updateTotalComment(a.totalSize);
    if (!empty(commentSid) && $("comment" + commentSid)) {
        var b = $("comment" + commentSid).previous("div", 0);
        "undefined" != b && b.scrollTo()
    }
    islogin() && a.poster && "string" == typeof a.poster && (b = get_username("all"), nova_request(function(a) {
        "object" == typeof a && a.target.each(function(a) {
            !0 == a.followed && $("follow_act_" + a.id) && $("follow_act_" + a.id).update("<span>\u5df2\u8ba2\u9605</span>")
        })
    }, "/QUcenter/~ajax/showFriend", 
    {userId: b.userid,friendIds: a.poster}));
    comment_hz.init("DigestComments");
    comment_hz.init("Comments");
    window.commentSid = null
}
function displayEmptyComments() {
    $("videobodycommentlist").innerHTML = ' <div class="null" id="comment_none"> <h3>\u6c99\u53d1\u7a7a\u7f3a\u4e2d\uff0c\u8fd8\u4e0d\u5feb\u62a2\uff5e</h3> </div> <span id="comment_none_for_new" style="display:none"> <div class="comments"> <div id="div_new_comment"></div> </div> </span>';
    updateTotalComment("0")
}
function loadCommentNew(a) {
    $("allcomment") && $("allcomment").addClassName("current");
    $("hotcomment") && $("hotcomment").removeClassName("current");
    $("ownercomment") && $("ownercomment").removeClassName("current");
    nova_call("http://" + COMMENT_DOMAIN + "/comments/~ajax/getStatus.html", {videoid: videoId,userid: null,oldSid: currentSid}, "loadCommentsCallback", void 0, 1);
    var b = "";
    switch (parseInt(catId)) {
        case 106:
            b = 4000587;
            break;
        case 102:
            b = 4000586;
            break;
        case 94:
            b = 4000585;
            break;
        case 87:
            b = 4000584;
            break;
        case 90:
            b = 4000583;
            break;
        case 88:
            b = 4000582;
            break;
        case 89:
            b = 4000581;
            break;
        case 103:
            b = 4000580;
            break;
        case 100:
            b = 4000579;
            break;
        case 99:
            b = 4000578;
            break;
        case 95:
            b = 4000577;
            break;
        case 92:
            b = 4000576;
            break;
        case 86:
            b = 4000575;
            break;
        case 105:
            b = 4000574;
            break;
        case 104:
            b = 4000573;
            break;
        case 84:
            b = 4000572;
            break;
        case 98:
            b = 4000571;
            break;
        case 91:
            b = 4000570;
            break;
        case 85:
            b = 4000569;
            break;
        case 96:
            b = 4000568;
            break;
        case 97:
            b = 4000567;
            break;
        case 84:
            b = 4004054
    }
    "" != b && Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=" + b + "&cpp=1000224&" + Math.random());
    $("Comments") && !a && window.scrollTo(0, Position.cumulativeOffset($("Comments"))[1] - 115)
}
function getVideoPageInfoCallbackMini(a) {
    if (null != a) {
        try {
            "object" != typeof a && (a = JSON.parse(a))
        } catch (b) {
            return
        }
        1 == window.paid && a.permission ? -1 == a.permission ? Interact.disableUpDowned() : Interact.initUpDowned() : Interact.initUpDowned()
    }
}
function loadCommentsCallback(a) {
    Element.hide("comment_new");
    currentCommentModify = a.last_modify;
    currentSid = a.last_sid;
    a = parseInt((new Date).getTime() / 1E3 - a.create_at);
    1200 > a && (clearInterval(commentInterval), commentInterval = setInterval(checkComments, 300 > a ? 3E4 : 300 <= a && 600 > a ? 6E4 : 12E4));
    nova_call("http://" + COMMENT_DOMAIN + "/comments/~ajax/vpcommentContent.html", {videoid: videoId,sid: currentSid,last_modify: currentCommentModify,page: 1,version: "v1.17",showid: window.showid}, "displayComments", void 0, 1)
}
var QTab = {drawerTabberInit: function() {
        var a = $A(document.getElementsByTagName("li"));
        a.each(function(a) {
            if (a.getAttribute("tabIdx"))
                a.onmouseover = QTab.drawerTabber
        });
        a.each(function(a) {
            if (a.getAttribute("tabIdx"))
                a.onmouseout = QTab.drawerTabber
        })
    },drawerTabber: function(a) {
        a = a ? a : window.event;
        if (0 >= a.type.indexOf("over"))
            return !1;
        for (a = Event.element(a); "LI" != a.nodeName; )
            a = a.parentNode;
        if (0 <= a.className.indexOf("current"))
            return !1;
        var b = Element.extend(a).previous("li.current");
        void 0 == b && (b = a.next("li.current"));
        QTab.switchTab(a.getAttribute("tabIdx"), b.getAttribute("tabIdx"))
    },switchTab: function(a, b) {
        if (isNaN(a) && isNaN(b)) {
            var c = $(a), d = $(b);
            $("th" + a).className = "current";
            $("th" + b).className = ""
        } else
            c = $("tabber" + a), d = $("tabber" + b);
        c && c.show();
        d && d.hide()
    }};
function time_format(a) {
    var b = 0, c = a % 60, b = Math.floor(a / 60);
    9 > b && (b = "0" + b);
    9 > c && (c = "0" + c);
    return b + ":" + c
}
function hideLoading() {
    $("vLoading").hide()
}
var comments_tab = function() {
    var a = {97: 4004803,96: 4004804,85: 4004805,100: 4004806,95: 4004807,87: 4004808,84: 4004809,92: 4004810}, b = $$("#tab_inner ul>li");
    b && b.invoke("observe", "click", function(c) {
        b.each(function(a) {
            a.removeClassName("current")
        });
        c = Event.findElement(c, "li");
        c.addClassName("current");
        var c = c.readAttribute("_to"), d = '<div class="null"><img src="' + imgServer + version + '/v/img/loading_h8.gif" /></div>';
        $("videobodycommentlist") && $("videobodycommentlist").update(d);
        "allcomment" == c ? nova_call("http://" + 
        COMMENT_DOMAIN + "/comments/~ajax/getStatus.html", {videoid: videoId,userid: video_owner,oldSid: -1}, "commentInfoCallback", void 0, 1) : "hotcomment" == c ? (nova_call("http://" + COMMENT_DOMAIN + "/comments/~ajax/hotCommentContent.html", {videoid: videoId,last_hot_modify: currentHotCommentModify,totalComment: totalCommentAll,version: "1.08",showid: window.showid}, "displayHotComments", void 0, 1), mainCateId && a[mainCateId] && Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=" + a[mainCateId] + "&cpp=1000223&" + Math.random())) : 
        "ownercomment" == c && (nova_call("http://" + COMMENT_DOMAIN + "/comments/~ajax/getVideoUserComments.html", {userid: video_owner,videoid: videoId,page: 1,playmode: playmode,last_modify: currentCommentModify}, "displayHotComments", void 0, 1), 1 == playmode ? Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4006003&cpp=1000587&" + Math.random()) : 2 == playmode && Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4006018&cpp=1000587&" + Math.random()))
    })
}, pvFormat = function(a) {
    var b = a.toString(), a = Math.abs(b).toString();
    if (4 > a.length)
        return "<label>\u64ad\u653e:</label><strong class='stat'>" + b + "</strong>";
    if (1E5 > a) {
        var c = 2;
        1E4 > a && (c = 1);
        a = b.substring(0, c);
        b = b.substring(c);
        return "<label>\u64ad\u653e:</label><strong class='stat'>" + a + "," + b + "</strong>"
    }
    if (1E8 > a) {
        var d, b = d = (a / 1E4).toString(), c = "";
        0 != a % 1E4 && (b = d.split(".")[0], a = d.split(".")[1].slice(0, 1), "0" != a && (c = "." + a));
        4 <= b.length && (c = "");
        return "<label>\u64ad\u653e:</label><strong class='stat'>" + (b + c) + "<em class='short'>\u4e07</em></strong>"
    }
    a = new Number(a / 1E8);
    a = a.toFixed(1);
    return "<label>\u64ad\u653e:</label><strong class='stat'>" + a + "<em class='short'>\u4ebf</em></strong>"
}, pureNumberFormat = function(a) {
    var b = a.toString(), a = Math.abs(b).toString();
    if (4 > a.length)
        return b;
    if (1E5 > a) {
        var c = 2;
        1E4 > a && (c = 1);
        a = b.substring(0, c);
        b = b.substring(c);
        return a + "," + b
    }
    if (1E8 > a) {
        var d, b = d = (a / 1E4).toString(), c = "";
        0 != a % 1E4 && (b = d.split(".")[0], a = d.split(".")[1].slice(0, 1), "0" != a && (c = "." + a));
        4 <= b.length && (c = "");
        return b + c + "\u4e07"
    }
    b = new Number(a / 1E8);
    b = b.toFixed(1);
    return b + "\u4ebf"
}, numberFormat = 
function(a) {
    num = a.toString();
    a = Math.abs(num).toString();
    if (4 > a.length)
        return num;
    var b = "";
    -1 != num.indexOf(".") && (b = "." + num.split(".")[1]);
    var c = a.length, d = c % 3, e = [], d = 0 == d ? 3 : d;
    e[0] = a.slice(0, d);
    for (var f = 1; d + 3 <= c; )
        e[f++] = a.slice(d, d + 3), d += 3;
    e = e.join(",");
    0 === num.indexOf("-") && (e = "-" + e);
    return e + b
}, warnTextarea = function(a) {
    if (a = document.getElementById(a))
        var b = 4, c = null, d = function() {
            var d = !0;
            color_orig = a.style.background;
            return function() {
                d ? (d = !1, a.style.background = color_orig) : (d = !0, a.style.background = 
                "#e7f5ff");
                if (0 >= b--)
                    try {
                        clearInterval(c)
                    } catch (f) {
                    }
            }.bind(a)
        }(), c = setInterval(d, 150)
}, followType = "user", followUser = function(a, b) {
    if (!(void 0 == a || null == a || 0 == a)) {
        void 0 == b && (b = "user");
        followType = b;
        "folder" == b && (b = "user");
        if (!islogin()) {
            var c = Nova.Cookie.get("yktk");
            if (!empty(c) && (c = decode64(decodeURIComponent(c).split("|")[3]), -1 < c.indexOf(",") && -1 < c.indexOf("nn:")))
                var d = c.split(",")[1].split(":")[1];
            if (empty(d)) {
                window.update_login_status_hook_comment = VideoComments.callback;
                openLoginDialog(followUser, 
                a, b);
                return
            }
        }
        Nova.addScript("http://" + UC_FOLLOW_HOST + "/u/friends/follow_" + a + "?type=" + b + "&uccb=" + (3 == arguments.length ? arguments[2] : "followUserCallback"))
    }
}, cmtFollow = function(a) {
    if ((void 0 == a.error || 0 > a.error || void 0 == a.friend) && void 0 != a.en && void 0 != a.zh) {
        if ("ERR_PARAMS" == a.en)
            a.zh = "\u4e0d\u80fd\u8ba2\u9605\u81ea\u5df1";
        alert(a.zh)
    } else
        $("follow_act_" + a.friend.id) && document.getElementById("follow_act_" + a.friend.id).update("<span>\u5df2\u8ba2\u9605</span>")
}, followUserCallback = function(a) {
    if ((void 0 == 
    a.error || 0 > a.error || void 0 == a.friend) && void 0 != a.en && "ERR_FRIENDSHIPS_EXIST" != a.en && void 0 != a.zh) {
        if ("ERR_PARAMS" == a.en)
            a.zh = "\u4e0d\u80fd\u8ba2\u9605\u81ea\u5df1";
        alert(a.zh)
    } else {
        a = '<span class="followed">\u5df2\u8ba2\u9605<span class="break">|</span>\u53bb\u770b<a href="http://i.youku.com/u/home?ut=3" target="_blank">\u8ba2\u9605\u66f4\u65b0</a></span>';
        if ("show" == followType) {
            var a = '<span class="followed">\u5df2\u8ffd\u5267<span class="splite">|</span>\u53bb<a href="http://i.youku.com/u/home?type=showfriends_timeline" target="_blank">\u7ba1\u7406</a></span>', 
            b = $("btnNotification");
            updateSubInfoInList(b)
        }
        if ($(followType + "_follow_info"))
            document.getElementById(followType + "_follow_info").innerHTML = a;
        if ($(followType + "_follow_info_paike"))
            document.getElementById(followType + "_follow_info_paike").innerHTML = '<span class="followed">\u5df2\u8ba2\u9605</span>'
    }
}, followPerformers = function(a) {
    if (!islogin()) {
        var b = Nova.Cookie.get("yktk");
        if (!empty(b) && (b = decode64(decodeURIComponent(b).split("|")[3]), -1 < b.indexOf(",") && -1 < b.indexOf("nn:")))
            var c = b.split(",")[1].split(":")[1];
        if (empty(c)) {
            openLoginDialog(followPerformers, a);
            return
        }
    }
    if (a)
        a = a.split(",");
    else {
        b = document.getElementsByName("performerids");
        a = [];
        for (c = 0; c < b.length; c++) {
            var d = b[c];
            d.checked && a.push(d.value)
        }
        if (0 == a.length)
            return alert("\u8bf7\u9009\u62e9\u9700\u8981\u8ba2\u9605\u7684\u660e\u661f"), !1
    }
    c = new Image;
    c.src = "http://" + UC_FOLLOW_HOST + "/u/~ajax/batchCreateFriend.html?id=" + a.join(",");
    c.onerror = function() {
    };
    if (c = document.getElementById("performers_follow"))
        c.innerHTML = '<span class="followed">\u5df2\u8ba2\u9605\u9009\u4e2d\u7684\u660e\u661f</span>';
    for (c = 0; c < a.length; c++)
        if (b = document.getElementById("performers_follow_" + a[c]))
            b.innerHTML = "<span class='followed'>\u5df2\u8ba2\u9605</span>"
}, checkFollowStatus = function(a, b, c) {
    if ("" == b) {
        var d = document.getElementById("vpvideoinfoBox");
        d && (b = d.getAttribute("owner"))
    }
    if (!b)
        return !1;
    b = b.split(",");
    void 0 == a && (a = "user");
    followType = a.split(",");
    islogin() || (c = 0);
    for (a = d = 0; a < followType.length; a++) {
        var e = $(followType[a] + "_follow_info"), f = $(followType[a] + "_follow_info_paike");
        if (e || f) {
            d = 1;
            if (1 != c) {
                if (e)
                    e.style.display = 
                    "";
                if (f)
                    f.style.display = ""
            }
            "folder" == followType[a] && b[0] != window.folderOwnerId && b.push(window.folderOwnerId)
        }
    }
    if (1 != c || 0 == d) {
        b = Nova.Cookie.get("FOLLOW_TIP");
        if (!b || 1 != b)
            if ((b = $$(".post-tips")) && 0 < b.length)
                for (a = 0; a < b.length; a++)
                    if (b[a])
                        b[a].style.display = "";
        return !1
    }
    a = get_username("all");
    c = 0;
    if (a)
        c = encodeUid(a.userid);
    else
        return !1;
    a = b[0];
    JSON.stringify(b);
    b = "http://yws.youku.com/users/js_show.jsonp?" + ("login_uid=" + c + "&uid=" + a + "&callback=checkFollowStatusCallback&t=" + Math.random());
    Nova.addScript(b)
}, 
checkFollowStatusCallback = function(a) {
    for (var b = 0; b < followType.length; b++) {
        if (a && 0 == a.e.code) {
            var c = a.data.friendship.following;
            if (!0 == c) {
                if ($(followType[b] + "_follow_info"))
                    document.getElementById(followType[b] + "_follow_info").innerHTML = '<span class="followed">\u5df2\u8ba2\u9605<span class="splite">|</span>\u53bb\u770b<a href="http://www.youku.com/u/home?type=showfriends_timeline" target="_blank">\u8ba2\u9605\u66f4\u65b0</a>';
                if ($(followType[b] + "_follow_info_paike"))
                    document.getElementById(followType[b] + 
                    "_follow_info_paike").innerHTML = '<span class="followed">\u5df2\u8ba2\u9605<span class="splite">|</span>\u53bb\u770b<a href="http://i.youku.com/u/home?ut=3" charset="hz-4008758-1000705" target="_blank">\u8ba2\u9605\u66f4\u65b0</a></span>';
                if ((window.folderOwnerId || "") == a.data.user.id && $("folder_follow_info"))
                    document.getElementById("folder_follow_info").innerHTML = '<span class="followed">\u5df2\u8ba2\u9605<span class="splite">|</span>\u53bb\u770b<a href="http://www.youku.com/u/home?type=showfriends_timeline" target="_blank">\u8ba2\u9605\u66f4\u65b0</a>'
            }
            var d = 
            $("user_fans_num");
            if (d)
                d.innerHTML = "\uff08\u7c89\u4e1d\u6570\uff1a" + pureNumberFormat(a.data.user.followers_count) + "\uff09"
        }
        if (!c && (d = Nova.Cookie.get("FOLLOW_TIP"), !d || 1 != d))
            if ((d = $$("#" + followType[b] + "_follow_info .post-tips")) && 0 < d.length && d[0])
                d[0].style.display = "";
        if ($(followType[b] + "_follow_info"))
            document.getElementById(followType[b] + "_follow_info").style.display = "";
        if ($(followType[b] + "_follow_info_paike"))
            document.getElementById(followType[b] + "_follow_info_paike").style.display = ""
    }
}, checkShowFollow = 
function(a, b) {
    if (1 != b || "" == a) {
        if ($("show_follow_info"))
            document.getElementById("show_follow_info").style.display = "";
        var c = Nova.Cookie.get("FOLLOW_TIP");
        if (!c || 1 != c)
            if (c = $$("#show_follow_info .post-tips"), 0 < c.length && c && c[0])
                c[0].style.display = "";
        return !1
    }
    var d = get_username("all"), c = "";
    d && (c = encodeUid(d.userid));
    d = "http://yws.youku.com/account/js_get_bind_user.jsonp?" + ("bind_type=2&bind_id=" + encodeUid(a) + "&callback=checkShowFollowCallback");
    "" != c && (d += "&login_uid=" + c + "&t=" + Math.random());
    Nova.addScript(d)
}, 
checkShowFollowCallback = function(a) {
    if (a.data && a.data.user && a.data.friendship) {
        var b = a.data.friendship.following;
        if (!0 == b) {
            if ($("show_follow_info"))
                document.getElementById("show_follow_info").innerHTML = '<span class="followed">\u5df2\u8ffd\u5267<span class="splite">|</span>\u53bb<a href="http://i.youku.com/u/home?type=showfriends_timeline" target="_blank">\u7ba1\u7406</a></span>';
            a = $("btnNotification");
            updateSubInfoInList(a)
        }
        if ($("show_follow_info"))
            document.getElementById("show_follow_info").style.display = 
            ""
    }
    if (!b && (b = Nova.Cookie.get("FOLLOW_TIP"), !b || 1 != b))
        if ((b = $$("#show_follow_info .post-tips")) && 0 < b.length && b[0])
            b[0].style.display = ""
}, closePostTip = function(a) {
    Nova.Cookie.set("FOLLOW_TIP", 1, 365);
    a.parentNode.parentNode.style.display = "none"
};
function video_page_mouse_event(a) {
    thisObj = a.target ? a.target : event.srcElement;
    "map_location" == thisObj.id || "map_location" == thisObj.parentNode.id || hideMap()
}
function toggleMap() {
    var a = document.getElementById("Map"), b = document.getElementById("map_mask"), c = document.getElementById("map_load");
    if ("none" == a.style.display) {
        b.style.display = "block";
        a.style.display = "block";
        if (!c.getAttribute("src"))
            c.src = c.getAttribute("_src");
        Event.observe(document, "mousedown", video_page_mouse_event)
    } else
        hideMap()
}
function hideMap() {
    var a = document.getElementById("Map");
    document.getElementById("map_mask").style.display = "none";
    a.style.display = "none"
}
var loadJS = function(a, b, c) {
    var d = document.createElement("script"), e = document.getElementsByTagName("head")[0];
    d.type = "text/javascript";
    d.src = a;
    d.onload = d.onreadystatechange = function() {
        if (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState)
            b && "function" == typeof b && b(), c && e.removeChild(d)
    };
    e.appendChild(d)
};
function hcbt(a) {
    var b = "";
    return b = genH(a)
}
function genH(a) {
    for (var b = !1, c = ""; !b; )
        c = randomString(20), hstr = a + c, hashcash = S(hstr), "00" == hashcash.substring(0, 2) && (b = !0);
    return c
}
function randomString(a) {
    for (var b = "", c = 0; c < a; c++)
        var d = Math.floor(61 * Math.random()), b = b + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".substring(d, d + 1);
    return b
}
function S(a) {
    function b(a, b) {
        return a << b | a >>> 32 - b
    }
    function c(a) {
        var b = "", c, d;
        for (c = 7; 0 <= c; c--)
            d = a >>> 4 * c & 15, b += d.toString(16);
        return b
    }
    var d, e, f = Array(80), h = 1732584193, g = 4023233417, j = 2562383102, k = 271733878, l = 3285377520, m, n, o, r, p, a = function(a) {
        for (var a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 
            63 | 128))
        }
        return b
    }(a);
    m = a.length;
    var q = [];
    for (d = 0; d < m - 3; d += 4)
        e = a.charCodeAt(d) << 24 | a.charCodeAt(d + 1) << 16 | a.charCodeAt(d + 2) << 8 | a.charCodeAt(d + 3), q.push(e);
    switch (m % 4) {
        case 0:
            d = 2147483648;
            break;
        case 1:
            d = a.charCodeAt(m - 1) << 24 | 8388608;
            break;
        case 2:
            d = a.charCodeAt(m - 2) << 24 | a.charCodeAt(m - 1) << 16 | 32768;
            break;
        case 3:
            d = a.charCodeAt(m - 3) << 24 | a.charCodeAt(m - 2) << 16 | a.charCodeAt(m - 1) << 8 | 128
    }
    for (q.push(d); 14 != q.length % 16; )
        q.push(0);
    q.push(m >>> 29);
    q.push(m << 3 & 4294967295);
    for (a = 0; a < q.length; a += 16) {
        for (d = 0; 16 > d; d++)
            f[d] = 
            q[a + d];
        for (d = 16; 79 >= d; d++)
            f[d] = b(f[d - 3] ^ f[d - 8] ^ f[d - 14] ^ f[d - 16], 1);
        e = h;
        m = g;
        n = j;
        o = k;
        r = l;
        for (d = 0; 19 >= d; d++)
            p = b(e, 5) + (m & n | ~m & o) + r + f[d] + 1518500249 & 4294967295, r = o, o = n, n = b(m, 30), m = e, e = p;
        for (d = 20; 39 >= d; d++)
            p = b(e, 5) + (m ^ n ^ o) + r + f[d] + 1859775393 & 4294967295, r = o, o = n, n = b(m, 30), m = e, e = p;
        for (d = 40; 59 >= d; d++)
            p = b(e, 5) + (m & n | m & o | n & o) + r + f[d] + 2400959708 & 4294967295, r = o, o = n, n = b(m, 30), m = e, e = p;
        for (d = 60; 79 >= d; d++)
            p = b(e, 5) + (m ^ n ^ o) + r + f[d] + 3395469782 & 4294967295, r = o, o = n, n = b(m, 30), m = e, e = p;
        h = h + e & 4294967295;
        g = g + m & 4294967295;
        j = j + n & 4294967295;
        k = k + o & 4294967295;
        l = l + r & 4294967295
    }
    p = c(h) + c(g) + c(j) + c(k) + c(l);
    return p.toLowerCase()
}
var swfiKuAdapter = null;
function getIkuAdapter() {
    if (!swfiKuAdapter && window.swfobject) {
        var a = {};
        a.data = "http://static.youku.com" + version + "/v/swf/ikuadapter.swf";
        if (!document.getElementById("ikuadapter") && document.createElement) {
            var b = document.createElement("div");
            b.setAttribute("id", "ikuadapter");
            b.style.width = "0px";
            b.style.height = "0px";
            var c = document.getElementById("player");
            c ? c.parentNode.insertBefore(b, c) : document.body.insertBefore(b, document.body.firstChild)
        }
        a.id = "ikuadapter_swf";
        a.width = "100%";
        a.height = "100%";
        swfobject.createSWF(a, 
        {allowscriptaccess: "always",allowNetworking: "all"}, {}, "ikuadapter", "9.0.115");
        swfiKuAdapter = document.getElementById("ikuadapter_swf")
    }
    return swfiKuAdapter
}
function getP2PState() {
    var a = "false", b = "flv";
    1 < arguments.length && (a = arguments[1]);
    2 < arguments.length && (b = arguments[2]);
    return null != (iku = getIkuAdapter()) && iku.getIkuState ? iku.getIkuState(a, b) : "0"
}
function getIkuId() {
    return null != (iku = getIkuAdapter()) && iku.getIkuId ? iku.getIkuId() : ""
}
function ikuExecute(a) {
    return null != (iku = getIkuAdapter()) && iku.execute ? iku.execute(a) : "f"
}
function playerStateChange(a, b) {
    return null != (iku = getIkuAdapter()) && iku.execute ? iku.execute("ikuadapter://|webplayer|notify|" + a + "|" + b + "|") : ""
}
var ikuAX;
function getIkuActiveX() {
    if (!ikuAX && -1 != navigator.userAgent.indexOf("MSIE") && window.ActiveXObject)
        try {
            ikuAX = new ActiveXObject("iKuAgent.KuAgent2")
        } catch (a) {
        }
    return ikuAX
}
function getP2PPortByActiveX() {
    return void 0 != (iku = getIkuActiveX()) ? iku.GetP2PPort() : ""
}
function getIkuIdByActiveX() {
    return void 0 != (iku = getIkuActiveX()) ? iku.Youku_Hao : ""
}
function ikuExecuteByActiveX(a) {
    try {
        if (void 0 != (iku = getIkuActiveX()))
            return iku.execute(a)
    } catch (b) {
    }
    return ""
}
function ikuNotExist(a) {
    "download" == a && window.open("http://c.youku.com/pc-client")
}
function getPlayerState() {
    return _player().getPlayerState()
}
(function() {
    var a = {fn: {updown: "fn_updown",up: "fn_up",down: "fn_down",share: "fn_share",share2: "fn_share2",favodownload: "fn_favodownload",download: "fn_download",download_disable: "fn_download_disabled",pcdown: "fn_pc_download",favorite: "fn_favorite",favo: "fn_favo",stat: "fn_stat",dimcode: "fn_dimcode"},panel: {share: "panel_share",stat: "panel_stat",down: "panel_down",dimcode: "panel_dimcode",handle_share: "handle_share",handle_stat: "handle_stat",handle_down: "handle_down",handle_dimcode: "handle_dimcode"},faved: !1,
        fav_process: !1,init: function() {
            this.fav_process = this.faved = !1;
            this.bind()
        },curpanel: "",bind: function() {
            var b = this, c;
            for (c in this.fn)
                if ($(this.fn[c]))
                    for (var d = $(this.fn[c]).getElementsByTagName("a"), e = 0; e < d.length; e++)
                        if ("null" == d[e].getAttribute("link"))
                            d[e].onclick = function() {
                                return !1
                            };
            $(this.fn.updown) && (this._addEvent($(this.fn.updown), "mouseenter", function() {
                var a = $(b.fn.updown);
                "true" != a.getAttribute("disabled") && b.addHover(a)
            }), this._addEvent($(this.fn.updown), "mouseleave", function() {
                var a = 
                $(b.fn.updown);
                "true" != a.getAttribute("disabled") && b.removeHover(a)
            }));
            $(this.fn.favodownload) && (this._addEvent($(this.fn.favodownload), "mouseenter", function() {
                var a = $(b.fn.favodownload);
                "true" != a.getAttribute("disabled") && b.addHover(a)
            }), this._addEvent($(this.fn.favodownload), "mouseleave", function() {
                var a = $(b.fn.favodownload);
                "true" != a.getAttribute("disabled") && b.removeHover(a)
            }));
            if ($(this.fn.favo))
                $(this.fn.favo).onclick = function() {
                    if (!a.faved && !a.fav_process)
                        Nova.QVideo.addFav({videoId: videoId2}, 
                        a.addFavCallBack), a.fav_process = !0
                };
            $(b.fn.favorite) && (this._addEvent($(this.fn.favorite), "mouseenter", function() {
                var a = $(b.fn.favorite);
                "true" != a.getAttribute("disabled") && b.addHover(a)
            }), this._addEvent($(this.fn.favorite), "mouseleave", function() {
                var a = $(b.fn.favorite);
                "true" != a.getAttribute("disabled") && b.removeHover(a)
            }));
            if ($(this.fn.share)) {
                this._addEvent($(this.fn.share), "mouseenter", function() {
                    var a = $(b.fn.share);
                    "true" != a.getAttribute("disabled") && b.addHover(a)
                });
                this._addEvent($(this.fn.share), 
                "mouseleave", function() {
                    var a = $(b.fn.share);
                    "true" != a.getAttribute("disabled") && b.removeHover(a)
                });
                if ($(this.fn.share2))
                    $(this.fn.share2).onclick = function() {
                        "" == b.curpanel ? b.showSharePanel() : "share" == b.curpanel ? b.hideSharePanel() : "stat" == b.curpanel ? b.hideStatPanel().showSharePanel() : "down" == b.curpanel ? b.hideDownloadPanel().showSharePanel() : "dimcode" == b.curpanel && b.hideDimcodePanel().showSharePanel()
                    };
                if ($(this.panel.handle_share))
                    $(this.panel.handle_share).onclick = function() {
                        b.hideSharePanel()
                    }
            }
            if ($(this.fn.stat) && 
            (this._addEvent($(this.fn.stat), "mouseenter", function() {
                var a = $(b.fn.stat);
                "true" != a.getAttribute("disabled") && b.addHover(a)
            }), this._addEvent($(this.fn.stat), "mouseleave", function() {
                var a = $(b.fn.stat);
                "true" != a.getAttribute("disabled") && b.removeHover(a)
            }), $(this.fn.stat).onclick = function() {
                "" == b.curpanel ? b.showStatPanel() : "stat" == b.curpanel ? b.hideStatPanel() : "share" == b.curpanel ? b.hideSharePanel().showStatPanel() : "down" == b.curpanel ? b.hideDownloadPanel().showStatPanel() : "dimcode" == b.curpanel && b.hideDimcodePanel().showStatPanel()
            }, 
            $(this.panel.handle_stat)))
                $(this.panel.handle_stat).onclick = function() {
                    b.hideStatPanel()
                };
            var f = $(this.fn.download);
            if (f) {
                c = navigator.userAgent;
                d = "";
                if (-1 != c.indexOf("iPad"))
                    d = "iPad", f.onclick = function() {
                        window.open("http://mobile.youku.com/index/wireless", "target=_blank");
                        return !1
                    };
                else if (-1 != c.indexOf("iPhone"))
                    d = "iPhone", f.onclick = function() {
                        window.open("http://mobile.youku.com/index/wireless", "target=_blank");
                        return !1
                    };
                else if (-1 != c.indexOf("Android"))
                    d = "Android", f.onclick = function() {
                        window.open("http://mobile.youku.com/index/wireless", 
                        "target=_blank");
                        return !1
                    };
                if ("" == d) {
                    this._addEvent(f, "mouseenter", function() {
                        "true" != f.getAttribute("disabled") && b.addHover(f)
                    });
                    this._addEvent(f, "mouseleave", function() {
                        "true" != f.getAttribute("disabled") && b.removeHover(f)
                    });
                    b._addEvent(f, "click", function() {
                        "" == b.curpanel ? b.showDownloadPanel() : "stat" == b.curpanel ? b.hideStatPanel().showDownloadPanel() : "share" == b.curpanel ? b.hideSharePanel().showDownloadPanel() : "dimcode" == b.curpanel ? b.hideDimcodePanel().showDownloadPanel() : "down" == b.curpanel && b.hideDownloadPanel()
                    });
                    if ($(b.panel.handle_down))
                        $(b.panel.handle_down).onclick = function() {
                            b.hideDownloadPanel()
                        };
                    if ($(b.fn.pcdown))
                        $(b.fn.pcdown).onclick = function() {
                            var a = "";
                            if (_player()) {
                                var b = _player().getNsData(), c = Nova.Cookie.get("ykss");
                                b && (a = "iku://|video|" + ("http://v.youku.com/v_show/id_" + (null != b.langVid ? b.langVid : b.vidEncoded) + ".html") + "|quality=" + b.quality + "|", null != c && (a += "ykss=" + c + "|"))
                            }
                            b = "";
                            if ("f" == ikuExecute(a) && (b = ikuExecuteByActiveX(a), !1 == b || "" == b))
                                return this.setAttribute("href", "http://c.youku.com/pc-client"), 
                                this.setAttribute("target", "_blank"), !0;
                            this.setAttribute("href", null);
                            this.setAttribute("target", null);
                            return !1
                        }
                }
            }
            var h = $(b.fn.dimcode);
            if (h) {
                this._addEvent(h, "mouseenter", function() {
                    "true" != h.getAttribute("disabled") && b.addHover(h)
                });
                this._addEvent(h, "mouseleave", function() {
                    "true" != h.getAttribute("disabled") && b.removeHover(h)
                });
                b._addEvent(h, "click", function() {
                    b.toggleDimcodePanel(b)
                });
                if ($(b.panel.handle_dimcode))
                    $(b.panel.handle_dimcode).onclick = function() {
                        b.hideDimcodePanel()
                    };
                if (c = $("dimcode_tips"))
                    "0" !== 
                    Nova.Cookie.get("SHOW_QR_TIP") ? $("dimcode_tips_handler").onclick = function() {
                        this.parentNode.style.display = "none";
                        Nova.Cookie.set("SHOW_QR_TIP", 0, 365)
                    } : c.style.display = "none"
            }
        },toggleDimcodePanel: function(a) {
            "" == a.curpanel ? a.showDimcodePanel() : "stat" == a.curpanel ? a.hideStatPanel().showDimcodePanel() : "share" == a.curpanel ? a.hideSharePanel().showDimcodePanel() : "down" == a.curpanel ? a.hideDownloadPanel().showDimcodePanel() : "dimcode" == a.curpanel && a.hideDimcodePanel()
        },updown: function(b) {
            if ("true" == $(this.fn.updown).getAttribute("disable"))
                return !1;
            if (!1 !== (act = Nova.Cookie.get("updown_" + videoId2)) && null != act)
                return a.showUpDowned(act);
            a.updownType = b;
            "undefined" != typeof tcode && "undefined" != typeof scode ? Nova.QVideo.updown({videoId: videoId2,type: b,t: tcode,s: scode}, this.updownCallback) : Nova.QVideo.updown({videoId: videoId2,type: b}, this.updownCallback)
        },updownCallback: function(b) {
            var c = "\u9876";
            "down" == a.updownType && (c = "\u8e29");
            -1 == b ? (alert("\u60a8\u5df2\u7ecf\u9876/\u8e29\u8fc7"), a.showUpDowned(0)) : -3 == b ? alert(c + "\u64cd\u4f5c\u5931\u8d25\u3002") : 
            -4 == b ? (alert("\u60a8\u4e0d\u80fd" + c + "\u81ea\u5df1\u7684\u89c6\u9891\u3002"), a.showUpDowned(0)) : (2 == b && FeedPublishTip(c), "down" == a.updownType ? a.showUpDowned(-1) : a.showUpDowned(1))
        },disableUpDowned: function() {
            $("fn_updown").addClassName("fn_disabled");
            $("fn_updown").setAttribute("disabled", !0);
            var a = 0;
            $("upVideoTimes") && (a = parseInt($("upVideoTimes").innerHTML.replace(/\,/g, "")));
            var c = 0;
            $("downVideoTimes") && (c = parseInt($("downVideoTimes").innerHTML.replace(/\,/g, "")));
            $("fn_updown").innerHTML = '<div class="fn2nd " ><span><em class="ico_up"></em><em class="stat" id="upVideoTimes">' + 
            a + '</em></span></div><div class="fn2nd" ><span><em class="ico_down"></em><em class="stat" id="downVideoTimes">' + c + "</em></span></div>";
            this.removeHover($(this.fn.updown))
        },initUpDowned: function() {
            $("fn_updown");
            var b = $("fn_up"), c = $("fn_down");
            if (b && c)
                b.onclick = function() {
                    a.updown("up")
                }, c.onclick = function() {
                    a.updown("down")
                };
            !1 !== (act = Nova.Cookie.get("updown_" + videoId2)) && null != act && a.showUpDowned(act)
        },showUpDowned: function(b) {
            if (0 == b || -1 == b || 1 == b) {
                var c = $(this.fn.updown), d = 0;
                $("upVideoTimes") && 
                (d = parseInt($("upVideoTimes").innerHTML.replace(/\,/g, "")));
                var e = 0;
                $("downVideoTimes") && (e = parseInt($("downVideoTimes").innerHTML.replace(/\,/g, "")));
                if (-1 == b)
                    "down" == a.updownType && (e += 1), c.innerHTML = '<span class="return"><em class="stat">\u9876' + numberFormat(d).substring(0, 10) + '\u3000</em><em class="ico_down"></em><em class="stat">\u5df2\u8e29' + numberFormat(e).substring(0, 10) + "</em></span>";
                else if (1 == b)
                    "up" == a.updownType && (d += 1), c.innerHTML = '<span class="return"><em class="ico_up"></em><em class="stat">\u5df2\u9876' + 
                    numberFormat(d).substring(0, 10) + '\u3000</em><em class="stat">\u8e29' + numberFormat(e).substring(0, 10) + "</em></span>";
                $(this.fn.updown).setAttribute("disabled", "true");
                $(this.fn.updown).className += " fn_return";
                this.removeHover(c);
                Nova.Cookie.set("updown_" + videoId2, b, 1)
            }
        },addFavCallBack: function(b) {
            a.fav_process = !1;
            collectedHtml = '<a href="http://i.youku.com/u/home?ut=91" target="_blank" charset="hz-4007613-1000217">\u5df2\u6536\u85cf</a>';
            var c = $(a.fn.favo);
            if (-1 == b)
                window.update_login_status_hook_comment = 
                VideoComments.callback, openLoginDialog(videoLogin);
            else if (-2 == b) {
                a.faved = !0;
                c.innerHTML = collectedHtml;
                try {
                    _player().setFavorite(!0)
                } catch (d) {
                }
            } else if (-3 == b)
                alert("\u6536\u85cf\u5931\u8d25");
            else if (-4 == b)
                alert("\u60a8\u4e0d\u80fd\u591f\u6536\u85cf\u81ea\u5df1\u7684\u89c6\u9891");
            else {
                2 == b && FeedPublishTip("\u6536\u85cf\u89c6\u9891");
                a.faved = !0;
                c.innerHTML = collectedHtml;
                b = [4000477, 4000491, 4000484, 4007645, 4007644];
                c = parseInt(window.playmode);
                0 < c && c <= b.length && Log.log(1, "tp=1&cp=" + b[c - 1] + "&cpp=1000217");
                try {
                    _player().setFavorite(!0)
                } catch (e) {
                }
            }
        },showStatPanel: function() {
            this.addExpand($(this.fn.stat));
            var b = $(this.fn.stat).getAttribute("charset");
            b && (b = b.replace("hz-", ""), Log.log(1, "tp=1&cp=" + b + "&cpp=1000217"));
            $("info_stat") && "true" != $("info_stat").getAttribute("return") && ($("info_stat").setAttribute("return", "true"), window.f ? nova_update("info_stat", "/v_vpactionInfo/id/" + videoId + "/pm/" + window.playmode + "/f/" + window.f, {}, "get", function() {
                $("video_vr") && a.videoVR();
                $("show_vr") && a.showVR()
            }) : nova_update("info_stat", 
            "/v_vpactionInfo/id/" + videoId + "/pm/" + window.playmode, {}, "get", function() {
                $("video_vr") && a.videoVR();
                $("show_vr") && a.showVR()
            }));
            $(this.panel.stat).style.display = "block";
            this.curpanel = "stat";
            return this
        },videoVR: function() {
            Nova.addScript("http://index.youku.com/dataapi/getData?num=100014&vid=" + window.videoId + "&jsoncallback=Interact.videoVRCallback")
        },videoVRCallback: function(a) {
            a && a.result.index ? document.getElementById("video_vr").innerHTML = numberFormat(a.result.index) : document.getElementById("video_vr").innerHTML = 
            "\u6682\u65e0"
        },showVR: function() {
            Nova.addScript("http://index.youku.com/dataapi/getData?num=100006&sid=" + window.showid_en + "&jsoncallback=Interact.showVRCallback")
        },showVRCallback: function(a) {
            a && a.result.index ? document.getElementById("show_vr").innerHTML = numberFormat(a.result.index) : document.getElementById("show_vr").innerHTML = "\u6682\u65e0"
        },hideStatPanel: function() {
            this.removeExpand($(this.fn.stat));
            $(this.panel.stat).style.display = "none";
            this.curpanel = "";
            return this
        },showSharePanel: function() {
            this.addExpand($(this.fn.share));
            $(this.panel.share).style.display = "block";
            this.curpanel = "share";
            return this
        },hideSharePanel: function() {
            this.removeExpand($(this.fn.share));
            $(this.panel.share).style.display = "none";
            this.curpanel = "";
            return this
        },showDownloadPanel: function() {
            this.addExpand($(this.fn.download));
            $(this.panel.down).style.display = "block";
            this.curpanel = "down";
            pushApp && pushApp.init();
            return this
        },hideDownloadPanel: function() {
            this.removeExpand($(this.fn.download));
            $(this.panel.down).style.display = "none";
            this.curpanel = "";
            return this
        },
        showDimcodePanel: function() {
            $(this.panel.dimcode).style.display = "block";
            this.curpanel = "dimcode";
            Log.log(1, "tp=1&cp=4007737&cpp=1000217");
            var a = this.getWatchTime();
            this.genDimcodePic(a);
            this.addExpand($(this.fn.dimcode));
            this.parseWatchTime(a);
            return this
        },getWatchTime: function() {
            var a = 0;
            try {
                var c = PlayerInfo(), a = parseInt(c.time)
            } catch (d) {
            }
            return a
        },parseWatchTime: function(a) {
            var c = parseInt(a / 3600), a = a % 3600, d = parseInt(a / 60), e = "";
            c && (e += c + "\u5c0f\u65f6");
            d && (e += d + "\u5206");
            e += a % 60 + "\u79d2";
            document.getElementById("dimcode_watch_time").innerHTML = 
            "\u5df2\u89c2\u770b\u5230 " + e
        },genDimcodePic: function(a) {
            this.genDimcodePicFromServer(a)
        },genDimcodePicFromServer: function(a) {
            var c = location.href, d = -1 == c.indexOf("?") ? "?" : "&", c = "/v_getUrlQRcode/?t=" + encodeURIComponent("http://hz.youku.com/red/click.php?tp=1&cp=4007653&cpp=1000217&url=" + encodeURIComponent(c + (d + "firsttime=" + a))) + "&cb=Interact.genQRCodeToPage";
            Nova.addScript(c)
        },genQRCodeToPage: function(a) {
            document.getElementById("dimcode_pic").innerHTML = '<i id="dimcode_play_icon" class="ico_play_dimcode" style="display:none"></i><img id="qrcode_img" width="116" height="116" src="">';
            var c = $("qrcode_img");
            c.onload = function() {
            };
            c.src = "http://qrcode.ykimg.com/qr?t=" + a + "&size=116"
        },genDimcodePicFromClient: function(a) {
            var c = location.href, d = -1 == c.indexOf("?") ? "?" : "&", c = "http://hz.youku.com/red/click.php?tp=1&cp=4007653&cpp=1000217&url=" + encodeURIComponent(c + (d + "firsttime=" + a));
            jQuery("#dimcode_pic").empty().append('<i id="dimcode_play_icon" class="ico_play_dimcode" style="display:none"></i>');
            a = "canvas";
            try {
                document.createElement("canvas").getContext("2d")
            } catch (e) {
                a = "table"
            }
            jQuery("#dimcode_pic").qrcode({render: a,
                foreground: "#555555",width: 135,height: 135,text: c});
            document.getElementById("dimcode_play_icon").style.display = "block"
        },hideDimcodePanel: function() {
            $(this.panel.dimcode).style.display = "none";
            this.removeExpand($(this.fn.dimcode));
            this.curpanel = "";
            return this
        },addHover: function(a) {
            if (-1 == a.className.indexOf("fn_hover"))
                a.className = -1 != a.className.indexOf("fn_expand") ? "fn fn_hover fn_expand" : "fn fn_hover";
            return this
        },removeHover: function(a) {
            a.className = a.className.replace(/ fn_hover/, "");
            return this
        },
        addExpand: function(a) {
            a.className += " fn_expand";
            return this
        },removeExpand: function(a) {
            a.className = a.className.replace(/ fn_expand/, "");
            return this
        },_addEvent: function(a, c, d) {
            if (window.addEventListener)
                if ("mouseenter" == c || "mouseleave" == c) {
                    var e = function(a) {
                        var b = a.currentTarget, c = a.relatedTarget, e;
                        try {
                            e = b.contains ? b != c && b.contains(c) : !!(b.compareDocumentPosition(c) & 16)
                        } catch (k) {
                        }
                        !e && b != c && d.call(a.currentTarget, a)
                    };
                    "mouseenter" == c ? a.addEventListener("mouseover", e, !1) : a.addEventListener("mouseout", 
                    e, !1)
                } else
                    a.addEventListener(c, d, !1);
            else
                window.attachEvent && a.attachEvent("on" + c, d)
        },_delEvent: function(a, c, d) {
            window.addEventListener ? a.removeEventListener(c, d, !0) : window.attachEvent && a.detachEvent("on" + c, d)
        }};
    window.Interact = a
})();
(function() {
    var a = {status: "on",auto_off: !1,changing: !1,mask: "playshow_mask",cookie: {name: "light",value: {on: "on",off: "off"},expires: 360},init: function() {
        },turn: function() {
            if (!0 == this.changing)
                return !1;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            if ("on" == this.status)
                this.off();
            else
                this.on()
        },on: function() {
            var b = document.getElementById("sideTool");
            if (b)
                b.style.display = "";
            this.auto_off = !1;
            this.status = "on";
            this.doAlpha("on", function() {
                a.changing = !1;
                document.getElementById("player").style.zIndex = 
                1E3
            });
            if ((b = $("playBox")) && -1 !== b.className.indexOf("play_area"))
                b.style.zIndex = 1E3, b.className = "play_area";
            (!window.musicDvd || 1 != window.musicDvd) && "on" != THX.real_mode && THX.off();
            setLight("on");
            PlayerColor("FFFFFF", "DEDEDE", 100)
        },off: function() {
            var a = $("playBox");
            if (a && -1 !== a.className.indexOf("play_area"))
                a.style.zIndex = 1400, a.className = "play_area play_dark";
            document.getElementById("player").style.zIndex = 1400;
            if (a = document.getElementById("sideTool"))
                a.style.display = "none";
            this.status = "off";
            this.auto_off = 
            !1;
            this.doAlpha("off");
            if (!window.musicDvd || 1 != window.musicDvd)
                THX.on();
            setLight("off");
            PlayerColor("000000", "000000", 40)
        },setOpacity: function(a, c) {
            if (a)
                document.all && a.filters ? a.filters.alpha.opacity = c : a.style.opacity = c / 100
        },doAlpha: function(b, c) {
            var d = this, e = document.getElementById(this.mask), f = 100, h = null, g = 0, j = -1;
            if ("off" == b)
                a.changing = !1, f = 0, this.setOpacity(e, 0), e.style.display = "block", j = -j;
            h = setInterval(function() {
                g += j;
                f += g;
                if (0 >= f || 100 <= f) {
                    0 > f ? f = 0 : 100 < f && (f = 100);
                    clearInterval(h);
                    if ("on" == b)
                        e.style.display = 
                        "none";
                    "function" == typeof c && c()
                }
                d.setOpacity(e, f)
            }, 25)
        },getStatus: function() {
            return this.status
        }};
    window.Light = a
})();
window.nova_init_hook_v5 = function() {
    new QueryString;
    if (-1 !== location.href.indexOf("_l_off"))
        Light.status = "on", Light.turn();
    getVideoPageInfo();
    nova_call("http://" + (window.COMMENT_DOMAIN || "comments.youku.com") + "/comments/~ajax/getStatus.html", {videoid: videoId,userid: video_owner,oldSid: -1}, "commentInfoCallback", void 0, 1);
    PlayList.HoverVP.init();
    SideTool.init();
    Event.observe(document, "click", v_charset_click)
};
(function() {
    var a = {extend: function(a, b) {
            for (var c in b)
                a[c] = b[c]
        },inherits: function(a, b) {
            var c = function() {
            };
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        },bind: function(a, b) {
            return function() {
                return b.apply(a, arguments)
            }
        },bindAsEventListener: function(a, b) {
            var c = Array.prototype.slice.call(arguments).slice(2);
            return function(d) {
                return b.apply(a, [d || window.event].concat(c))
            }
        },getCurrentStyle: function(a) {
            return a.currentStyle || document.defaultView.getComputedStyle(a, null)
        },addEventHandler: function(a, 
        b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
        },removeEventHandler: function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = null
        },show: function(a) {
            a.style.display = "video" === a.tagName.toLowerCase() ? "" : "block"
        },hide: function(a) {
            if (a)
                a.style.display = "none"
        },getLeftPosition: function(a) {
            for (var b = a.offsetLeft; a.offsetParent; )
                a = a.offsetParent, b += a.offsetLeft;
            return b
        },get: function(a) {
            return document.querySelector(a)
        }};
    (function() {
        var b = document.createElement("video"), c = {MP4: "video/mp4",OGG: "video/ogg",WEBM: "video/webm",HLS: "application/vnd.apple.mpegurl"}, d = {isIPAD: "iPad",isIPHONE: "iPhone",isIPOD: "iPod",isSonyDTV: "SonyDTV",isLEPAD: "lepad_hls",isMIUI: "MI-ONE",isAndroid4: "Android 4."};
        a.supportHTML5Video = !1;
        a.isIOS = !1;
        if (b.canPlayType) {
            a.supportHTML5Video = !0;
            for (var e in c)
                a["canPlay" + e] = b.canPlayType(c[e]) ? !0 : !1
        }
        for (var f in d)
            a[f] = -1 !== navigator.userAgent.indexOf(d[f]) ? !0 : !1;
        a.isIOS = a.isIPAD || a.isIPHONE || a.isIPOD;
        a.isSupport = a.isMIUI && a.isAndroid4 || a.isIOS || a.isLEPAD || a.isSonyDTV
    })();
    var b = {flv: "\u6807\u6e05",mp4: "\u9ad8\u6e05",hd2: "\u8d85\u6e05"}, c = function(b) {
        this._setting = {video: a.get("#youku-html5-player-video"),handlers: null};
        a.extend(this._setting, b);
        if (this._setting.video)
            this.video = this._setting.video, !a.isIOS && this.video.controls && this.video.removeAttribute("controls")
    };
    c.prototype = {show: function() {
            a.show(this.video)
        },hide: function() {
            a.hide(this.video)
        },play: function() {
            this.video.play()
        },pause: function() {
            this.video.pause()
        },
        setupControls: function(a) {
            return new d({video: a,player: this,init: function() {
                }})
        },hideControls: function() {
            this.controls.hide()
        },showControls: function() {
            this.controls.show()
        },removeControls: function() {
            this.controls.removeControls()
        },loadControls: function() {
            this.controls.loadControls()
        },retry: function(a, b) {
            var c = b || 0;
            clearTimeout(this.retryTimeout);
            if (this.video.pause && 300 > c) {
                var d = this;
                this.video.load();
                this.controls.seekTo(a);
                this.retryTimeout = setTimeout(function() {
                    d.retry(a, ++c)
                }, 500)
            }
        },showError: function(a) {
            if (!this.errorBox)
                this.errorBox = 
                document.createElement("div"), this.errorBox.style.cssText = "position:absolute;width:100%;top:50%;display:none;text-align:center;", this.video.parentNode.appendChild(this.errorBox);
            this.errorBox.innerHTML = a;
            this.errorBox.style.marginTop = "-" + this.errorBox.offsetHeight / 2 + "px";
            this.errorBox.style.display = "block"
        },onLoadStart: function() {
        },onCanPlay: function() {
        },onLoadedData: function() {
        },onLoadedMetaData: function() {
        },onAbort: function() {
        },onError: function() {
        },onPause: function() {
            this.controls.onPause()
        },onPlay: function() {
            this.video.controls && 
            this.removeControls();
            this.errorBox && a.hide(this.errorBox);
            this.controls.onPlay()
        },onVolumeChange: function() {
        },onPlaying: function() {
        },onSeeked: function() {
        },onSeeking: function() {
        },onDurationChange: function() {
        },onProgress: function() {
        },onRateChange: function() {
        },onTimeUpdate: function(a) {
            this.controls.onTimeUpdate(a)
        },onEnded: function() {
            var a = this.videoInfo.nextVideo;
            a.vidEncoded && this.startPlay(a.vidEncoded)
        },onBeginFullscreen: function() {
        },onEndFullscreen: function() {
            a.isIPHONE && this.video.pause()
        },detectIsPlaying: function(a) {
            var b = 
            a || 0, c = this;
            clearTimeout(this.timeoutTimer);
            if (0 === this.video.currentTime && 60 >= b)
                this.video.load(), this.play(), this.timeoutTimer = setTimeout(function() {
                    c.detectIsPlaying(++b)
                }, 1E3)
        },bindEvent: function() {
            var b = {loadstart: "onLoadStart",canplay: "onCanPlay",loadeddata: "onLoadedData",loadedmetadata: "onLoadedMetaData",abort: "onAbort",error: "onError",pause: "onPause",play: "onPlay",volumechange: "onVolumeChange",playing: "onPlaying",seeked: "onSeeked",seeking: "onSeeking",durationchange: "onDurationChange",progress: "onProgress",
                ratechange: "onRateChange",timeupdate: "onTimeUpdate",ended: "onEnded"};
            if (a.isIOS)
                b.webkitbeginfullscreen = "onBeginFullscreen", b.webkitendfullscreen = "onEndFullscreen";
            for (var c in b)
                a.addEventHandler(this.video, c, a.bindAsEventListener(this, this[b[c]]))
        }};
    var d = function(b) {
        this.setting = {debug: !1,video: null,player: null,controls: a.get(".controls"),buttons: {progressBar: a.get("#youku-html5-player-progressbar"),progressHandler: a.get("#youku-html5-player-progress-hd"),progressTime: a.get("#youku-html5-player-progress-tp"),
                progressTrack: a.get("#youku-html5-player-progress-trk"),play: a.get("#youku-html5-player-play"),currentTime: a.get("#youku-html5-player-currentTime"),totalTime: a.get("#youku-html5-player-totalTime"),fullscreen: a.get(".controls-fullscreen-button"),widescreen: a.get(".controls-widescreen-button"),playMode: a.get(".controls-playmode"),language: a.get(".controls-language")},classNames: {play: "start",pause: "pause"},videoInfo: {totalTime: 0,currentTime: 0,isPlaying: !1,videoType: "mp4"},init: function() {
            }};
        a.extend(this.setting, 
        b);
        if (this.setting.video) {
            this.video = this.setting.video;
            if (a.isIOS && (this.shadow = document.createElement("div"), this.shadow.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%", this.video.parentNode.insertBefore(this.shadow, this.video), a.get("#vpvideotitle .base")))
                a.get("#vpvideotitle .base").style.height = "0";
            this.buttons = this.setting.buttons;
            this.videoInfo = this.setting.videoInfo;
            this.player = this.setting.player;
            this.bindEvent()
        }
    };
    a.extend(d.prototype, {init: function(c) {
            a.extend(this.videoInfo, 
            c);
            this.buttons.currentTime.innerHTML = "00:00";
            this.buttons.totalTime.innerHTML = this.videoInfo.totalTime ? this.getTime(this.videoInfo.totalTime) : "00:00";
            this.resetProgress();
            this.buttons.play.className = this.setting.classNames.play;
            var c = this.videoInfo.currentVideo, d = "", e;
            for (e in b)
                c.streamtypes && -1 !== c.streamtypes.indexOf(e) && (d = e === this.videoInfo.videoType ? d + ('<div class="base-button" data-video-type = "' + e + '">\u2022 ' + b[e] + "</div>") : d + ('<div class="base-button" data-video-type = "' + e + '">' + b[e] + "</div>")), 
                this.buttons.playMode.innerHTML = d;
            if (c.dvd && c.dvd.audiolang) {
                e = c.dvd.audiolang;
                for (var d = [], f = 0; f < e.length; f++) {
                    var l = "", l = l + ('<div class="base-button" data-vid = "' + e[f].vid + '" '), l = l + ('data-language = "' + e[f].lang + '">');
                    e[f].vid === c.vidEncoded && (l += "\u2022 ");
                    l += e[f].lang + "</div>";
                    d[e[f].langid] = l
                }
                this.buttons.language.innerHTML = d.join("")
            }
            this.bindDynamicEvent()
        },bindEvent: function() {
            a.addEventHandler(this.buttons.progressBar, "click", a.bindAsEventListener(this, this.seek));
            a.addEventHandler(this.buttons.play, 
            "click", a.bindAsEventListener(this, this.play));
            a.addEventHandler(this.buttons.widescreen, "click", a.bindAsEventListener(this, this.switchWidescreen));
            a.addEventHandler(this.buttons.fullscreen, "click", a.bindAsEventListener(this, this.switchFullscreen));
            a.isIOS && (a.addEventHandler(this.buttons.progressHandler, "touchstart", a.bindAsEventListener(this, this.onTouchStart)), a.addEventHandler(this.shadow, "gesturechange", a.bindAsEventListener(this, this.onGestureChange)))
        },bindDynamicEvent: function() {
            for (var b = 
            this.buttons.playMode.getElementsByTagName("div"), c = this.buttons.language.getElementsByTagName("div"), d = 0; d < b.length; d++)
                a.addEventHandler(b[d], "click", a.bindAsEventListener(this, this.switchMode));
            for (d = 0; d < c.length; d++)
                a.addEventHandler(c[d], "click", a.bindAsEventListener(this, this.switchLanguage))
        },onGestureChange: function(a) {
            a.preventDefault();
            a.stopPropagation();
            1 < a.scale && this.switchFullscreen()
        },play: function() {
            this.video.paused ? this.video.play() : this.video.pause()
        },show: function(b) {
            b ? a.show(this.buttons[b]) : 
            a.show(this.setting.controls)
        },hide: function(b) {
            b ? a.hide(this.buttons[b]) : a.hide(this.setting.controls)
        },onPlay: function() {
            this.buttons.play.className = this.setting.classNames.pause
        },onPause: function() {
            this.buttons.play.className = this.setting.classNames.play
        },onTimeUpdate: function() {
            var a = this.video.currentTime;
            4 == this.video.readyState && this.setProgress(a)
        },switchFullscreen: function() {
            "function" == typeof this.video.webkitEnterFullScreen ? this.video.webkitEnterFullscreen() : this.switchFullWindow()
        },switchFullWindow: function() {
            if (/(^| )player-fullwindow( |$)/.test(a.get("#player_html5").className)) {
                var b = 
                a.get("#player_html5");
                b.className = b.className.replace(/(^| )player-fullwindow( |$)/, " ").replace(/^\s+|\s+$/g, "");
                b = a.get("#player_html5");
                b.parentNode.removeChild(b);
                a.get("#player").appendChild(b);
                a.get(".yk-header").style.display = "";
                a.get(".yk-footer").style.display = "";
                a.get(".sideTool").style.display = "";
                a.get(".s_main").style.display = "";
                this.buttons.widescreen.style.display = "";
                this.video.style.margin = "0 0";
                this.video.setAttribute("height", 458);
                a.get("#youku-html5-player-info").style.height = "";
                a.get("#player_html5").style.height = ""
            } else {
                b = a.get("#player_html5");
                /(^| )player-fullwindow( |$)/.test(b.className) || (b.className += " player-fullwindow");
                var b = Math.round(0.425 * window.innerWidth), c = Math.round((window.innerHeight - b - 40) / 2);
                this.video.setAttribute("height", b);
                this.video.style.margin = c + "px 0";
                b = a.get("#player_html5");
                b.parentNode.removeChild(b);
                document.body.appendChild(b);
                a.get(".s_main").style.display = "none";
                a.get(".yk-header").style.display = "none";
                a.get(".yk-footer").style.display = 
                "none";
                a.get(".sideTool").style.display = "none";
                this.buttons.widescreen.style.display = "none";
                a.get("#youku-html5-player-info").style.height = "100%";
                a.get("#player_html5").style.height = "100%"
            }
            this.video.ended || this.video.play()
        },switchWidescreen: function() {
            "on" === THX.mode ? (this.buttons.widescreen.innerHTML = "\u5bbd\u5c4f", THX.off()) : (this.buttons.widescreen.innerHTML = "\u6807\u5c4f", THX.on())
        },switchLanguage: function(a) {
            var a = a.target.dataset.vid, b = this.buttons.language.getElementsByTagName("div");
            if (this.videoInfo.currentVideo.vidEncoded === 
            a)
                return !1;
            for (var c = 0; c < b.length; c++)
                b[c].innerHTML = b[c].dataset.vid === a ? "\u2022 " + b[c].dataset.language : b[c].dataset.language;
            this.player.startPlay(a, "", this.video.currentTime)
        },switchMode: function(c) {
            c = c.target.dataset.videoType;
            if (this.videoInfo.videoType === c)
                return !1;
            for (var d = this.buttons.playMode.getElementsByTagName("div"), e = "", f = 0; f < d.length; f++)
                e = d[f].dataset.videoType, d[f].innerHTML = e === c ? "\u2022 " + b[e] : b[e];
            d = this.video.currentTime;
            e = this.video.src.replace(/type\/(flv|mp4|hd2)/, "type/" + 
            c);
            this.videoInfo.videoType = c;
            this.video.src = e;
            this.video.load();
            a.isIOS || this.video.play();
            this.video.ended && (d = 0);
            this.seekNext(d)
        },seekNext: function(a) {
            var b = this;
            this.switchTimer && clearTimeout(this.switchTimer);
            var c = this.video.seekable;
            this.video.currentTime < a && 1 == c.length && a < c.end(0) ? this.seekTo(a) : this.switchTimer = setTimeout(function() {
                b.seekNext(a)
            }, 100)
        },removeControls: function() {
            this.video.removeAttribute("controls")
        },loadControls: function() {
            this.video.setAttribute("controls", !0)
        },setProgress: function(a) {
            if (a && 
            this.videoInfo.totalTime && !(0 >= this.video.currentTime)) {
                var a = Math.min(Math.max(a, 0), this.videoInfo.totalTime), b = a / this.videoInfo.totalTime, c = this.buttons.progressBar.offsetWidth, d = this.buttons.progressHandler.offsetWidth, e = (b * (c - d) + d / 2) / c;
                this.buttons.progressHandler.style.left = 100 * Math.min(Math.max(b * (c - d) / c, 0), 1) + "%";
                this.buttons.progressTrack.style.width = 100 * Math.min(Math.max(e, 0), 1) + "%";
                this.buttons.currentTime.innerHTML = this.getTime(a)
            }
        },resetProgress: function() {
            this.buttons.progressHandler.style.left = 
            "0";
            this.buttons.progressTrack.style.width = "0"
        },getTime: function(a) {
            if (!a)
                return "00:00";
            var b = Math.floor(a), a = b % 60, b = Math.floor(b / 60);
            return (10 > b ? "0" + b : b) + ":" + (10 > a ? "0" + a : a)
        },seekTo: function(a) {
            a = Math.max(a || 0, 0);
            this.videoInfo.totalTime && (a = Math.min(a, this.videoInfo.totalTime - 5));
            this.video.currentTime = a;
            this.setProgress(a)
        },seek: function(a) {
            if (a.srcElement.id === this.buttons.progressHandler.id)
                return !1;
            this.seekTo(a.offsetX / (this.buttons.progressBar.offsetWidth - this.buttons.progressHandler.offsetWidth) * 
            this.videoInfo.totalTime)
        },onTouchStart: function(b) {
            if (1 != b.targetTouches.length)
                return !1;
            b.preventDefault();
            b.stopPropagation();
            this.startX = b.targetTouches[0].clientX;
            this.video.pause();
            this.isTouching = !0;
            this._onTouchMove = a.bindAsEventListener(this, this.onTouchMove);
            this._onTouchEnd = a.bindAsEventListener(this, this.onTouchEnd);
            a.addEventHandler(this.buttons.progressHandler, "touchmove", this._onTouchMove);
            a.addEventHandler(this.buttons.progressHandler, "touchend", this._onTouchEnd)
        },onTouchMove: function(a) {
            a.preventDefault();
            a.stopPropagation();
            if (1 != a.targetTouches.length)
                return !1;
            this._currentTime = this.video.currentTime + (a.targetTouches[0].clientX - this.startX) / (this.buttons.progressBar.offsetWidth - this.buttons.progressHandler.offsetWidth) * this.videoInfo.totalTime;
            this.setProgress(this._currentTime);
            return !1
        },onTouchEnd: function(b) {
            b.preventDefault();
            b.stopPropagation();
            if (0 < b.targetTouches.length)
                return !1;
            if (this.isTouching && this._currentTime)
                this.video.currentTime = Math.min(Math.max(this._currentTime, 0), this.videoInfo.totalTime - 
                5), this.video.play();
            this.isTouching = !1;
            a.removeEventHandler(this.buttons.progressHandler, "touchmove", this._onTouchMove);
            a.removeEventHandler(this.buttons.progressHandler, "touchend", this._onTouchEnd);
            return !1
        }});
    var e = function(b) {
        c.apply(this, arguments);
        this.setting = {video: a.get("#youku-html5-player-video"),ERRORS: {NOSUPPORT: "\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301HTML5\u89c6\u9891\u64ad\u653e,\u5efa\u8bae\u60a8\u4f7f\u7528Flash\u6765\u64ad\u653e\u89c6\u9891,\u4f53\u9a8c\u66f4\u4f73.",CANTPLAY: "\u6682\u65f6\u65e0\u6cd5\u64ad\u653e,\u8bf7\u7a0d\u540e\u518d\u6765\u89c2\u770b.\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u5237\u65b0\u5f53\u524d\u9875\u6765\u89e3\u51b3\u6b64\u95ee\u9898."}};
        a.extend(this.setting, b);
        this.videoInfo = {vid: 0,totalTime: 0,videoType: "",fileId: 0,currentVideo: null,nextVideo: null};
        if (this.setting.video)
            this.video = this.setting.video;
        this.controls = this.setupControls(this.video);
        this.bindEvent()
    };
    a.inherits(e, c);
    a.extend(e.prototype, {startPlay: function(b, c, d) {
            if (!a.supportHTML5Video || !a.canPlayMP4)
                return this.showError(this.setting.ERRORS.NOSUPPORT);
            if (!b)
                return this.showError(this.setting.ERRORS.CANTPLAY);
            var e = this.getRequestUrl(b, c), f = this;
            this.videoInfo.vid = b;
            this.videoInfo.currentTime = d;
            nova_call(e, {}, function(a) {
                a && a.data && a.data[0] && (a = a.data[0]);
                if ($("modeturn_on"))
                    $("modeturn_on").className = "", $("modeturn_on").href = "javascript:THX.turn();";
                f.init(a, c)
            })
        },init: function(b, c) {
            if (!b)
                return this.showError(this.setting.ERRORS.CANTPLAY);
            if (b.error) {
                if (-1 !== b.error.indexOf("\u5bc6\u7801")) {
                    this.hide();
                    this.showUnlockVideoPanel(b.error);
                    return
                }
                return this.showError(b.error)
            }
            this.hideUnlockVideoPanel();
            this.show();
            var d = this.getVideoInfo(b, c);
            if (d && d.videoSrc)
                this.video.src = 
                d.videoSrc, a.extend(this.videoInfo, d), this.controls.init(this.videoInfo), this.video.load(), this.videoInfo.currentTime && this.controls.seekNext(this.videoInfo.currentTime), a.isIOS || this.video.play()
        },getRequestUrl: function(a, b) {
            var c = "/player/getPlaylist/VideoIDS/" + a;
            2 == window.playmode && (c += "/Type/Folder/Fid/" + window.f + "/Pt/" + window.p + "/Ob/" + window.o);
            return c + (b ? "/password/" + b : "")
        },getVideoSrc: function(b, c, d, e) {
            if (!b || !c)
                return "";
            b = "/player/getM3U8" + ((b ? "/vid/" + b : "") + (c ? "/type/" + c : "")) + ("/ts/" + parseInt((new Date).getTime() / 
            1E3));
            if (a.isIPHONE || a.isIPOD)
                b += "/useKeyframe/0";
            return b + ((d ? "/password/" + d : "") + (e ? e : "") + "/v.m3u8")
        },getVideoInfo: function(b, c) {
            if (!b)
                return !1;
            var d = {videoType: "mp4",totalTime: 0,currentVideo: b,nextVideo: b.list_next};
            if (!b.streamfileids.mp4 || a.isIPHONE)
                d.videoType = "flv";
            a.extend(d, {vid: b.videoid,videoFileId: b.streamfileids[d.videoType],videoSegs: b.segs[d.videoType],videoSrc: this.getVideoSrc(b.videoid, d.videoType, c)});
            if (!d.videoFileId.length || 66 > d.videoFileId.length)
                return this.showError(b.error), 
                !1;
            if (d.videoSegs)
                for (var e = 0; e < d.videoSegs.length; e++)
                    d.totalTime += parseFloat(d.videoSegs[e].seconds);
            return d
        },showUnlockVideoPanel: function(b) {
            var c = "";
            if (!this.messageBox)
                this.messageBox = document.createElement("div"), this.messageBox.style.cssText = "position:absolute;width:240px;top:180px;margin-left:-120px;left:50%;text-align:left;line-height:30px;display:none", this.video.parentNode.appendChild(this.messageBox);
            this.messageBox.innerHTML = c + ((b || "") + '<br /><input type="password" id="youku-html5-player-password" value="" /> <button id="youku-html5-player-unlock">\u786e\u5b9a</button></div>');
            this.messageBox.style.display = "block";
            a.addEventHandler(a.get("#youku-html5-player-unlock"), "click", a.bindAsEventListener(this, this.unlockVideo))
        },hideUnlockVideoPanel: function() {
            if (this.messageBox)
                this.messageBox.style.display = "none"
        },unlockVideo: function() {
            var b = a.get("#youku-html5-player-password").value, c = this.videoInfo.vid;
            b && c && this.startPlay(c, b)
        }});
    var f = function() {
        var b = function(b) {
            var c = {hideControls: this.hideControls,showControls: this.showControls,removeControls: this.removeControls,loadControls: this.loadControls,
                hideVideo: this.hide,showVideo: this.show,video: this.video}, d;
            for (d in c)
                b[d] = "[object Function]" === Object.prototype.toString.call(c[d]) ? a.bind(this, c[d]) : c[d]
        };
        return {isIPAD: a.isIPAD,isIPHONE: a.isIPHONE,isIPOD: a.isIPOD,isLEPAD: a.isLEPAD,support: a.isSupport,play: function(a) {
                var c = new e;
                c.startPlay(a);
                b.call(c, this)
            }}
    }();
    window.player5 = f
})();
var playerId = "movie_player", playerStart = !1, pip_pre = !1;
function _player(a) {
    return $(a ? a : playerId)
}
function PlayerSeek(a) {
    a = isNaN(parseInt(a)) ? 0 : parseInt(a);
    playerStart && _player().nsseek(parseInt(a))
}
function recordPosition() {
    _player().recordPosition()
}
function PlayerContinuous(a) {
    _player().setContinuous(a)
}
function PlayerSeekMin(a, b) {
    var b = isNaN(parseInt(b)) ? 0 : parseInt(b), a = isNaN(parseInt(a)) ? 0 : parseInt(a), c = 60 * a + b;
    PlayerSeek(0 < c - 4 ? c - 4 : c)
}
function PlayerColor(a, b, c) {
    return _player().setSkinColor(a, b, c)
}
function setTHX(a) {
    _player() && _player().setTHX(a)
}
function setLight(a) {
    _player().setLight(a)
}
function setPlayerLoop(a) {
    _player().setLoop(a)
}
function PlayerPause(a) {
    playerStart && _player().pauseVideo(a)
}
function playModeSet(a) {
    return _player().playModeSet(a)
}
function PlayerShowType(a) {
    return _player().setShowType(void 0 == a ? 2 : a)
}
function PlayerInfo() {
    return _player().getNsData()
}
function PlayerResume() {
    Element.hide("ad_crazy");
    _player().PlayerResume()
}
function PlayerPause4ad() {
    _player().PlayerPause4ad()
}
function onPlayerSet(a) {
    Nova.Cookie.set("P_F", a.continuous);
    a = parseInt((new Date).getTime() / 1E3) + 7200;
    Nova.Cookie.set("P_T", a);
    pf_check();
    pm_check();
    PlayerSider.genListContent()
}
function onPlayerStart(a) {
    playerStart = !0;
    if (a.vid && a.vidEncoded && "undefined" != a.vid && "undefined" != a.vidEncoded && a.vid != window.videoId && window.videoId2 != a.vidEncoded) {
        window.videoId = a.vid;
        window.videoId2 = a.vidEncoded;
        loadCommentNew(1);
        if (3 == window.playmode) {
            var b = 1;
            Nova.Cookie.get("pmmode") && (b = Nova.Cookie.get("pmmode"));
            $("vpofficiallist") && nova_update("vpofficiallist", "/v_vpofficiallist/page_0_type_" + b + "_showid_" + window.showid + "_id_" + window.videoId + ".html");
            PlayerSider.updateShowTitle();
            window.showDerivatives && 
            Derivatives.getOccurTime(window.videoId)
        } else
            2 == window.playmode && ($("vpactionv5") && nova_update("vpactionv5", "/v_vpactionv5/playmode_" + window.playmode + "/vid/" + window.videoId + "/f/" + window.f + "/o/" + window.o + "/p/" + a.Pt + ".html"), $("vpvideoinfov5") && nova_update("vpvideoinfov5", "/v_vpvideoinfov5/playmode/" + window.playmode + "/id/" + a.vid + ".html"), setTimeout("checkFollowStatus('user','',1);", 500));
        2 != window.playmode && ($("vpactionv5") && nova_update("vpactionv5", "/v_vpactionv5/playmode_" + window.playmode + "/vid/" + 
        window.videoId + ".html"), $("vpvideomvinfov5") && nova_update("vpvideomvinfov5", "/v_vpvideomvinfov5/playmode/" + window.playmode + "/id/" + a.vid + ".html"), setTimeout("checkFollowStatus('user','',1);", 500));
        (2 == window.playmode || 5 == window.playmode) && PlayerSider.genListContent(1);
        setTimeout("nova_request(getVideoPageInfoCallback,'/QVideo/~ajax/getVideoPlayInfo',{id:window.videoId,type:'vv'});", 500);
        Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4001296&cpp=1000259&" + Math.random());
        try {
            if ("replaceState" in 
            history) {
                var c = "/v_show/id_" + window.videoId2 + ".html";
                window.f && (c += "?f=" + window.f);
                history.replaceState({url: c}, "", c)
            }
        } catch (d) {
        }
    } else
        4 == window.playmode && Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4002943&cpp=1000223&" + Math.random());
    Light.auto_off && Light.off();
    "" == $("ab_pip_pre").innerHTML.replace(/(^\s*)|(\s*$)/g, "") && "" == $("ab_569").innerHTML.replace(/(^\s*)|(\s*$)/g, "") && !1 == haveBanner ? (haveBanner = !0, ab_ad1()) : !1 == haveBanner && setTimeout("ab_ad1()", ab_ad_time)
}
function onTrialEnd() {
    window.trialEnd = !0
}
function onPlayerComplete(a) {
    if (!0 == window.trialEnd || a && !0 == a.loop)
        return !1;
    var b = Nova.Cookie.get("P_L_M"), c = Nova.Cookie.get("P_F"), d = parseInt(window.playmode), e = !1;
    if (2 == d && void 0 !== a.Pt)
        window.p = a.Pt;
    parseInt((new Date).getTime() / 1E3);
    if (1 == c) {
        var f = window.playerNextVid;
        if (f) {
            if (a.isFullScreen)
                _player().playVideoByID(f);
            else {
                if (1 == b)
                    return setTimeout("PlayerSeek(0)", 500), !1;
                a.vidEncoded = f;
                PlayerPlayNext(a)
            }
            return !1
        }
    }
    if (4 == d && 1 == c) {
        if (1 == b) {
            if (a.isFullScreen) {
                b = getPlayListRandomNext(window.videoId2, 
                b);
                if (null == b)
                    return !1;
                if (a = document.getElementById("playlist_" + b))
                    a.className = "current";
                _player().playVideoByID(b)
            } else {
                b = getPlayListRandomNext(window.videoId2, b);
                if (null == b)
                    return !1;
                a.vidEncoded = b;
                PlayerPlayNext(a)
            }
            return
        }
        if (2 == b || 3 == b) {
            b = getPlayListRandomNext(window.videoId2, b);
            if (null == b)
                return !1;
            if (a.isFullScreen) {
                $("vpvideoinfo") && b && nova_update("vpvideoinfo", "/v_vpvideoinfo/id_" + b + "/playmode_" + window.playmode);
                c = document.getElementById("playlist_" + window.videoId2);
                a = document.getElementById("playlist_" + 
                b);
                if (c)
                    c.className = "";
                if (a)
                    a.className = "current";
                upSubTitle(b, d);
                _player().playVideoByID(b)
            } else
                a.vidEncoded = b, PlayerPlayNext(a);
            return
        }
    }
    a.isFullScreen && a.vidEncoded && ($("vpvideoinfo") && nova_update("vpvideoinfo", "/v_vpvideoinfo/id_" + a.vidEncoded + "/playmode_" + window.playmode), upSubTitle(a.vidEncoded, d));
    1 == c && (e = PlayerPlayNext(a));
    if (!1 == e) {
        d = Light.getStatus();
        Light.on();
        if ("off" == d)
            Light.auto_off = !0;
        Nova.Cookie.get("cncmax_user") || (d = Nova.Cookie.get("u"), null == Nova.Cookie.get("isclose") && !(null != 
        d && "" != d) && (d = Nova.Cookie.get("view") || 0, 8 <= d || 0 > d ? (Nova.Cookie.set("view", 0, 1), setTimeout("pop_register()", 1E3)) : Nova.Cookie.set("view", ++d, 1)))
    }
}
function onPlayerError() {
}
function _isV(a) {
    return a && "" != a && null != a && "null" != a && "undefined" != a
}
var havePip = !1, haveBanner = !1;
function onPlayerPreAdInit(a, b) {
    if (a && a[b]) {
        var c = a[b];
        if (_isV(c.F1) && _isV(c.CU))
            c.F3 = 50, "swf" == c.F1.substring(c.F1.lastIndexOf(".") + 1, c.F1.length).toLowerCase() ? $("ab_pip_pre").innerHTML = '<div id="f1_ideaid" align="center" class="mod"><object type="application/x-shockwave-flash" data="' + c.F1 + "?url=" + escape(c.CU) + '" width="300" height="' + c.F3 + '"><param name="wmode" value="transparent"><param name="movie" value="' + c.F1 + "?url=" + escape(c.CU) + '" width="300" height="' + c.F3 + '" /><embed src="' + c.F1 + "?url=" + 
            escape(c.CU) + '" width="300" height="' + c.F3 + '" border="0" align="center" wmode="transparent"/></object></div>' : $("ab_pip_pre").innerHTML = '<div id="f1_ideaid" align="center" class="mod"><a href="' + c.CU + '" target="_blank"><img src="' + c.F1 + '" border="0" id="bas_ideaid"/></a></div>', havePip = !0, show_pip()
    }
    for (b += 1; b < a.length; b++)
        if (a[b] && (c = a[b], _isV(c.F1) && _isV(c.CU))) {
            havePip = !0;
            break
        }
    !havePip && !1 == haveBanner && (haveBanner = !0, ab_ad1())
}
var onPlayerLastAdInit = onPlayerPreAdInit;
function PlayerPlayPre(a) {
    if (a.isFullScreen)
        return !0;
    var b = "", c = "";
    try {
        b = Light.getStatus()
    } catch (d) {
    }
    "off" == b && (c = "_l_off");
    b = parseInt(playmode);
    if (2 == b) {
        if (empty(a.vidEncoded) || empty(a.Fid))
            return !1;
        b = "";
        0 == window.o && (b = "&o=0");
        window.location.href = "/v_show/id_" + a.vidEncoded + c + ".html?f=" + a.Fid + b
    } else {
        if (a.vidEncoded)
            preId = a.vidEncoded;
        if ("" == preId)
            return !1;
        window.location = 4 == b ? "/v_show/id_" + preId + "_type_99" + c + ".html" : "/v_show/id_" + preId + c + ".html"
    }
    return !0
}
function PlayerPlayNext(a) {
    if (a.isFullScreen)
        return !0;
    var b = "", c = "";
    try {
        b = Light.getStatus()
    } catch (d) {
    }
    "off" == b && (c = "_l_off");
    b = parseInt(playmode);
    if (2 == b) {
        if (empty(a.vidEncoded) || empty(a.Fid))
            return !1;
        b = "";
        0 == window.o && (b = "&o=0");
        window.location.href = "/v_show/id_" + a.vidEncoded + c + ".html?f=" + a.Fid + b
    } else {
        if (a.vidEncoded)
            nextId = a.vidEncoded;
        if ("" == nextId)
            return !1;
        4 == b ? window.location = "/v_show/id_" + nextId + "_type_99" + c + ".html" : (a = "/v_show/id_" + nextId + c + ".html", window.singerid && "0" != window.singerid && (a += 
        "?s=" + window.singerid), window.location = a)
    }
    return !0
}
function playModeCallback() {
}
function func_href() {
    return window.location.href
}
function func_referrer() {
    return document.referrer
}
function errCallback() {
}
function commentFocus() {
    window.scrollTo(0, 900);
    $("content").focus();
    Light.on()
}
function openMiniWin() {
    var a = PlayerInfo(), b = 0;
    a && a.time && (b = parseInt(a.time));
    window.open("/v_showMini/id_" + videoId2 + "_ft_" + b + ".html", "minWin_" + videoId, "height=400,width=480,resizable=yes,toolbar=no,menubar=no,scrollbars=no,location=no,status=no,alwaysRaised=yes,") && PlayerPause(!0)
}
function play() {
    if (PlayerH5.isSonyDTV)
        return player5.play(window.videoId), !1;
    if (PlayerH5.isSupport)
        return loadPlayerH5(), !1;
    Element.hide("player_html5");
    var a = -1 !== window.navigator.userAgent.toLowerCase().indexOf("android");
    a && -1 !== playerUrl.indexOf("loader") && (playerUrl = playerUrl.replace(/loader(.*)\.swf/, "player_touch.swf"));
    par = {allowFullScreen: !0};
    if (swfobject.ua.safari)
        par.wmode = "opaque";
    par.allowscriptaccess = "always";
    flashvarsObj = {};
    flashvarsObj.VideoIDS = videoId2;
    flashvarsObj.ShowId = showid;
    flashvarsObj.category = catId;
    flashvarsObj.Cp = cp;
    if (-1 != location.href.indexOf("_sthd3"))
        flashvarsObj.quality = "1080p", flashvarsObj.sv = "true", par.wmode = "direct", par.bgcolor = "#000000";
    if (-1 !== playerUrl.indexOf("player_yknpsv.swf"))
        par.wmode = "direct", par.bgcolor = "#000000", flashvarsObj.sv = "true";
    if (window.catId && "95" == window.catId && 5 != window.playmode)
        flashvarsObj.showloop = !0;
    try {
        var b = new QueryString;
        if (b.firsttime)
            flashvarsObj.firsttime = b.firsttime;
        if (b.ev)
            flashvarsObj.ev = b.ev;
        if (b.lang)
            flashvarsObj.lang = 
            b.lang;
        if (void 0 != b.adext)
            flashvarsObj.adext = b.adext, setTimeout(function() {
                PlayerPause(!0)
            }, 15E3), setTimeout(function() {
                PlayerPause(!1)
            }, 25E3), setTimeout(function() {
                var a = PlayerInfo();
                if ("undefined" != typeof a && null != a)
                    a = a.alltime, "undefined" != typeof a && null != a && PlayerSeek(a)
            }, 45E3)
    } catch (c) {
    }
    try {
        if ("off" == Light.getStatus())
            flashvarsObj.skincolor1 = "000000", flashvarsObj.skincolor2 = "4F4F4F", flashvarsObj.skinalpha = 40;
        flashvarsObj.Light = Light.getStatus()
    } catch (d) {
    }
    try {
        flashvarsObj.THX = THX.getStatus()
    } catch (e) {
    }
    flashvarsObj.unCookie = 
    window.logUnCookie;
    flashvarsObj.frame = window.logFrame;
    flashvarsObj.pvid = window.logPvid;
    flashvarsObj.uepflag = window.uepflag || 0;
    flashvarsObj.Tid = 0;
    flashvarsObj.VideoIDS = videoId2;
    flashvarsObj.isAutoPlay = !0;
    flashvarsObj.Version = version;
    flashvarsObj.show_ce = removePlayerSideControl ? 0 : 1;
    flashvarsObj.winType = a ? "touch" : "interior";
    if (window.f)
        flashvarsObj.Type = "Folder", flashvarsObj.Fid = window.f, flashvarsObj.Pt = window.p, flashvarsObj.Ob = window.o, flashvarsObj.plchid = window.folderCateWord || "";
    if (4 == window.playmode)
        flashvarsObj.Type = 
        "PlayList";
    a = document.referrer;
    if ("" == a)
        a = document.URL;
    b = document.createElement("A");
    b.href = a;
    embedid = encode64(["", videoId, b.hostname, b.pathname].join("\u0002"));
    flashvarsObj.embedid = embedid;
    if (-1 != navigator.userAgent.indexOf("MSIE"))
        flashvarsObj.ikuison = "1";
    a = "bc=" + (Nova.Cookie.get("_bc") || "") + "&pid=" + window.logPvid + "&unCookie=" + window.logUnCookie + "&frame=" + window.logFrame;
    a = window.f ? a + ("&type=1&fob=" + window.o + "&fpo=" + window.p) : a + "&type=0";
    "\u6b63\u7247" == window.showtype ? a += "&svt=1&stg=" + window.stage : 
    window.showid && (a += "&svt=0");
    a += "&emb=" + embedid + "&dn=\u7f51\u9875&hwc=1";
    a = -1 !== navigator.userAgent.indexOf("Android") ? a + "&mtype=adr" : a + "&mtype=oth";
    flashvarsObj.vext = encodeURIComponent(a);
    if (5 == window.playmode && (a = Nova.Cookie.get("P_L_M"), 1 == Nova.Cookie.get("P_F"))) {
        switch (a) {
            case "1":
                var f = 12;
                break;
            case "2":
                f = 10;
                break;
            case "3":
                f = 11
        }
        if (f)
            flashvarsObj.pb = f
    }
    if (f = Nova.Cookie.get("yktk"))
        try {
            var h = decode64(decodeURIComponent(f).split("|")[3]);
            if (-1 < h.indexOf(",") && -1 < h.indexOf("nn:") && -1 < h.indexOf("id:") && 
            -1 < h.indexOf("vip:")) {
                var g = h.split(",")[2].split(":")[1];
                if ("true" == g || !0 == g)
                    if (window.paid && 1 == window.paid) {
                        if (window.loadinglogo1 && -1 !== window.loadinglogo1.indexOf("http://"))
                            flashvarsObj.loadinglogo = window.loadinglogo1
                    } else if (window.loadinglogo2 && -1 !== window.loadinglogo2.indexOf("http://"))
                        flashvarsObj.loadinglogo = window.loadinglogo2
            }
        } catch (j) {
        }
    att = {};
    att.data = playerUrl;
    att.width = "100%";
    att.height = "100%";
    att.id = playerId;
    swfobject.createSWF(att, par, flashvarsObj, "player", "6.0", !0);
    getIkuAdapter()
}
var PlayerH5 = function() {
    var a = {}, b = {isIPAD: "iPad",isIPHONE: "iPhone",isIPOD: "iPod",isSonyDTV: "SonyDTV",isLEPAD: "lepad_hls",isMIUI: "MI-ONE",isAndroid4: "Android 4.",isWinPhone: "Windows Phone"}, c;
    for (c in b)
        a[c] = -1 !== navigator.userAgent.indexOf(b[c]) ? !0 : !1;
    a.isIOS = a.isIPAD || a.isIPHONE || a.isIPOD;
    a.isSupport = a.isAndroid4 || a.isIOS || a.isLEPAD || a.isSonyDTV || a.isMIUI || a.isWinPhone;
    return a
}();
function onPlayerReadyH5() {
    ykplayerH5 && !window.navigator.userAgent.match(/Android/i) && ykplayerH5.playVideo()
}
function onPlayerCompleteH5(a) {
    if (!a)
        return !1;
    window.videoId = a.vid;
    window.videoId2 = a.vidEncoded;
    if (a.Pt)
        window.p = a.Pt;
    ykplayerH5 && ykplayerH5.playVideoById(window.videoId);
    loadCommentNew(1);
    $("vpactionv5") && nova_update("vpactionv5", "/v_vpactionv5/playmode_" + window.playmode + "/vid/" + window.videoId + "/f/" + window.f + "/o/" + window.o + ".html");
    $("vpvideoinfov5") && nova_update("vpvideoinfov5", "/v_vpvideoinfov5/playmode/" + window.playmode + "/id/" + a.vid + ".html");
    setTimeout("checkFollowStatus('user','',1);", 500);
    (2 == 
    window.playmode || 5 == window.playmode) && PlayerSider.genListContent(1)
}
var loadPlayerH5 = function() {
    var a = document.getElementsByTagName("head")[0], b = document.createElement("script");
    b.setAttribute("type", "text/javascript");
    b.setAttribute("src", "http://player.youku.com/embed/unifull/unifull_.js");
    a.appendChild(b);
    var c = function() {
        var a = {id: "youku-player",vid: window.videoId,expand: 0,canWide: 0,paid: window.paid,client_id: "youkuplaypage",wintype: "interior",events: {onPlayerReady: onPlayerReadyH5,onPlayEnd: onPlayerCompleteH5},vvlogconfig: {rurl: window.document.referrer}};
        if (2 == 
        window.playmode)
            a.playlistconfig = {Type: "Folder",Fid: window.f,Ob: window.o};
        window.ykplayerH5 = new YKU.Player("player", a)
    };
    -1 !== window.navigator.userAgent.indexOf("MSIE") ? b.onreadystatechange = function() {
        ("loaded" == this.readyState || "complete" == this.readyState) && c()
    } : b.onload = function() {
        c()
    }
}, getQRCodeMap = function(a) {
    var b = "", c = 0;
    1 == a ? b = "http://hz.youku.com/red/click.php?tp=1&cp=4008161&cpp=1000703&url=" : (b = "http://hz.youku.com/red/click.php?tp=1&cp=4008160&cpp=1000703&url=", c = Interact.getWatchTime());
    a = "http://v.youku.com/v_show/id_" + window.videoId2 + ".html?firsttime=" + c;
    void 0 != window.f && "" != window.f && 0 != window.f && (a += "&f=" + window.f);
    b += a;
    a = new QRCode(-1, QRErrorCorrectLevel.H);
    a.addData(b);
    a.make();
    return a
}, playerVideoFav = function(a) {
    if (!a)
        return !1;
    Nova.QVideo.addFav({videoId: a}, Interact.addFavCallBack)
};
function item() {
    this.videoid = ""
}
function PlayListControl() {
    this.change = this.clean = 0;
    this.add = this.del = ""
}
function PlayList() {
}
var PlayList_list = "", PlayList_list_random = "";
PlayList.addUrl = "http://v.youku.com/QVideo/~ajax/setPlayListAll";
PlayList.getUrl = "http://v.youku.com/QVideo/~ajax/getPlayListAll";
PlayList.setRandomUrl = "http://v.youku.com/QVideo/~ajax/setPlayListRandom";
PlayList.delUrl = "http://v.youku.com/QVideo/~ajax/delPlayListById";
PlayList.cleanUrl = "http://v.youku.com/QVideo/~ajax/cleanPlayList";
PlayList.imageQls = new Image;
PlayList.cacheTag = [];
PlayList.imageQls.src = "http://static.youku.com/v/img/qls.gif";
PlayList.imageQlh = new Image;
PlayList.imageQlh.src = "http://static.youku.com/v/img/qlh.gif";
PlayList.imageQlsed = new Image;
PlayList.imageQlsed.src = "http://static.youku.com/v/img/qlsed.gif";
var PlayListGetCallback = function(a) {
    if (a.list)
        window.PlayList_list = a.list, window.PlayList_list_random = a.list_random
}, openPlayList = function(a) {
    window.open("http://v.youku.com/v_show/id_" + a + "_type_99.html", "newwindow")
};
PlayList.add = function(a, b) {
    if ("undefined" == a || "" == a || 0 == a || a instanceof Array && (0 == a.length || "undefined" == a.length))
        return !1;
    var c = [], d = 0;
    if (a instanceof Array) {
        if (!0 == PlayList.clickToFast())
            return !1;
        c = a;
        d = 1;
        fid = c[0]
    } else
        c[0] = a;
    nova_call(this.addUrl, {videoids: c.join(","),play: d,callback: b}, "PlayListAddCallback", null, !0);
    1 == d && setTimeout("openPlayList('" + fid + "')", 400)
};
window.nova_init_hook_playlist_init = function() {
    try {
        window.playmode && 4 == window.playmode && nova_call(PlayList.getUrl, {}, "PlayListGetCallback", null, !0)
    } catch (a) {
    }
};
var PlayListAddCallback = function(a) {
    if (1 == a.errno)
        return !1;
    1 == a.isMaxsize && Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4002944&cpp=1000223&" + Math.random());
    if (null == a.firstId) {
        window.PlayList_list = a.data.list;
        window.PlayList_list_random = a.data.list_random;
        var b = new PlayListControl;
        b.add = a.data.add;
        b.del = a.data.del;
        b.change = 1;
        Nova.Cookie.set("PlayList_control", JSON.stringify(b))
    }
    PlayListIndexCallback();
    PlayList.init();
    if (a.callback && "" != a.callback && "null" != a.callback && "undefined" != a.callback)
        try {
            eval(a.callback + 
            "()")
        } catch (c) {
        }
};
PlayList.clickToFast = function() {
    var a = parseInt(Nova.Cookie.get("PlayList_play_click")), b = parseInt((new Date).getTime() / 1E3);
    if (a + 2 >= b)
        return !0;
    Nova.Cookie.set("PlayList_play_click", b);
    return !1
};
PlayList.getAll = function() {
    try {
        for (var a = [], b = window.PlayList_list, c = 0; c < b.length; c++) {
            var d = new item;
            d.videoid = b[c];
            a.push(d)
        }
        if (a instanceof Array)
            return a;
        throw "false";
    } catch (e) {
        return []
    }
};
var PlayListSetRandomCallback = function(a) {
    a = a.data;
    if (a.list)
        window.PlayList_list = a.list, window.PlayList_list_random = a.list_random
};
PlayList.setAllRandom = function() {
    nova_call(this.setRandomUrl, {}, "PlayListSetRandomCallback", null, !0)
};
PlayList.getAllRandom = function() {
    try {
        for (var a = [], b = window.PlayList_list_random, c = 0; c < b.length; c++) {
            var d = new item;
            d.videoid = b[c];
            a.push(d)
        }
        if (a instanceof Array)
            return a;
        throw "false";
    } catch (e) {
        return []
    }
};
PlayList.check = function(a) {
    var b = this.getAll(), c = b.length;
    for (i = 0; i < c; i++)
        if (a == b[i].videoid)
            return !0;
    return !1
};
PlayList.del = function(a, b) {
    nova_call(this.delUrl, {videoid: a,callback: b}, "PlayListDelCallback", null, !0)
};
var PlayListDelCallback = function(a) {
    if (1 == a.errno)
        return !1;
    window.PlayList_list = a.data.list;
    window.PlayList_list_random = a.data.list_random;
    var b = new PlayListControl;
    b.del = a.data.del;
    b.change = 1;
    Nova.Cookie.set("PlayList_control", JSON.stringify(b));
    PlayListIndexCallback();
    if (a.callback && "" != a.callback && "null" != a.callback && "undefined" != a.callback)
        try {
            eval(a.callback + "()")
        } catch (c) {
        }
}, PlayListCleanCallback = function(a) {
    PlayListGetCallback(a);
    PlayListIndexCallback();
    var b = new PlayListControl;
    b.clean = 1;
    Nova.Cookie.set("PlayList_control", JSON.stringify(b));
    if (a.callback && "" != a.callback && "null" != a.callback && "undefined" != a.callback)
        try {
            eval(a.callback + "()")
        } catch (c) {
        }
};
PlayList.clean = function(a) {
    if (!1 == confirm("\u786e\u5b9a\u6e05\u7a7a\u70b9\u64ad\u5355\uff1f"))
        return !1;
    nova_call(this.cleanUrl, {callback: a}, "PlayListCleanCallback", null, !0);
    if (void 0 != a && "" != a && "function" == typeof a)
        try {
            a()
        } catch (b) {
        }
};
PlayList.list = function() {
};
PlayList.getNum = function() {
};
PlayList.render = function(a, b) {
    if (void 0 == a.id)
        var c = a;
    else {
        c = a.id.split("_");
        if (void 0 == c[1] || "" == c[1])
            return;
        c = c[1]
    }
    PlayList.check(c) ? "img" == a.nodeName.toLowerCase() && this.del(c) : PlayList.add(c);
    PlayList.init();
    if (void 0 != b && "" != b)
        try {
            b()
        } catch (d) {
        }
    Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4000554&cpp=1000223&" + Math.random())
};
PlayList.init = function() {
    try {
        if (0 == PlayList.cacheTag.length)
            var a = [document.getElementsByTagName("img"), document.getElementsByTagName("span")], b = !0;
        else
            a = [PlayList.cacheTag], b = !1;
        for (var c = this.getAll(), d = a.length; 0 < d--; )
            for (var e = a[d].length; 0 < e--; ) {
                var f = !1, h = a[d][e];
                if (!(void 0 == h.id || "" == h.id)) {
                    var g = h.id.split("_");
                    if (!("PlayListFlag" != g[0] || void 0 == g[1] || "" == g[1])) {
                        var j = g[1];
                        if (b)
                            PlayList.cacheTag = PlayList.cacheTag.concat(h);
                        for (var k = 0; k < c.length; k++)
                            if (j == c[k].videoid) {
                                f = !0;
                                break
                            }
                        if (void 0 == 
                        h.onclick || "" == h.onclick)
                            h.onclick = function() {
                                PlayList.render(this)
                            };
                        if (f)
                            if (h.title = "\u4ece\u70b9\u64ad\u5355\u79fb\u9664", h.onmouseout = function() {
                            }, h.onmouseover = function() {
                            }, "img" == h.nodeName.toLowerCase()) {
                                if (!(-1 < h.src.indexOf("qlus.gif")))
                                    h.style.display = "block", h.src = PlayList.imageQlsed.src
                            } else {
                                if ("span" == h.nodeName.toLowerCase()) {
                                    h.title = "\u5f00\u59cb\u64ad\u653e";
                                    h.className = "ico__listexist";
                                    try {
                                        var l = Element.extend(h).up("ul").down("a"), m = l.href.substr(0, l.href.indexOf("/", 7)) + "/v_show/id_" + 
                                        j + "_type_99.html";
                                        Element.extend(h).replace('<a id="PlayListFlag_' + j + '" title="' + h.title + '" target="_blank" class="' + h.className + '" href="' + m + '"></a>')
                                    } catch (n) {
                                    }
                                }
                            }
                        else if (h.title = "\u6dfb\u52a0\u5230\u70b9\u64ad\u5355", "img" == h.nodeName.toLowerCase()) {
                            if (!(-1 < h.src.indexOf("qlus.gif")))
                                h.style.display = "block", h.src = PlayList.imageQls.src, h.onmouseout = function() {
                                    this.src = PlayList.imageQls.src
                                }, h.onmouseover = function() {
                                    this.src = PlayList.imageQlh.src
                                }
                        } else if ("span" == h.nodeName.toLowerCase())
                            h.className = 
                            "ico__listquick", h.onmouseout = function() {
                                this.className = "ico__listquick"
                            }, h.onmouseover = function() {
                                this.className = "ico__listadd"
                            }
                    }
                }
            }
    } catch (o) {
    }
};
function PlayListIndexCallback() {
}
function PlayListIndexAdd(a) {
    var b = document.createElement("a");
    b.href = "/v/show/id/" + a.videoid;
    b.innerHTML = '<img style="margin:2px; padding:2px" src="' + a.logo + '" width="36" height="27" border="0" />';
    document.getElementById("PlayListIndexContenter").appendChild(b)
}
function PlayListSave() {
    islogin() ? PlayListSaveDialog() : login(PlayListSaveDialog)
}
function PlayListSaveDialog() {
    try {
        Dialog.cancelCallback()
    } catch (a) {
    }
    null != pop && pop.close();
    pop = new Popup({contentType: 1,isSupportDraging: !1,isReloadOnClose: !1,width: 580,height: 480});
    pop.setContent("title", "");
    pop.setContent("contentUrl", "/v/showPlayListSave");
    pop.build();
    pop.show()
}
window.nova_init_hook_playlist = function() {
    try {
        PlayList.init()
    } catch (a) {
    }
};
try {
    if (!0 == NovaOptions.compatibleMode)
        window.onload = window.nova_init_hook_share
} catch (e$$56) {
}
PlayList.tag = "PlayListTag";
PlayList.setPlayLogUrl = "http://v.youku.com/QVideo/~ajax/setPlayLog";
PlayList.getPlayLogUrl = "http://v.youku.com/QVideo/~ajax/getPlayLog";
PlayList.addTag = function() {
    return !1
};
PlayList.delTag = function(a) {
    var b = [];
    try {
        var c = JSON.parse(Nova.Cookie.get(PlayList.tag));
        c instanceof Array && (b = c)
    } catch (d) {
    }
    for (c = 0; c < b.length; c++)
        if (a.folderid && b[c].folderid == a.folderid || a.videoid && b[c].videoid == a.videoid) {
            b.splice(c, 1);
            break
        }
    Nova.Cookie.set(PlayList.tag, JSON.stringify(b), 15)
};
PlayList.getTagCallback = function(a) {
    playmode = window._playmode;
    callback = window._callback;
    args = window._args;
    switch (parseInt(playmode)) {
        case 2:
            if (args && void 0 != args.folderid)
                for (var b = 0; b < a.length; b++)
                    if (a[b].folderid == args.folderid) {
                        callback(a[b]);
                        break
                    }
            break;
        case 3:
            if (args && void 0 != args.showid)
                for (b = 0; b < a.length; b++)
                    if (a[b].showid == args.showid) {
                        callback(a[b]);
                        break
                    }
            break;
        default:
            if (args && void 0 != args.videoid)
                for (b = 0; b < a.length; b++)
                    if (a[b].videoid == args.videoid) {
                        callback(a[b]);
                        break
                    }
    }
};
PlayList.getTag = function() {
    try {
        JSON.parse(Nova.Cookie.get(PlayList.tag))
    } catch (a) {
    }
};
PlayList.getAllTag = function(a) {
    nova_call(this.getPlayLogUrl, {}, a, null, !0)
};
PlayList.flag = "PlayListFlag";
PlayList.HoverVP = function() {
};
PlayList.HoverVP.vmenuqueue = [];
PlayList.HoverVP.collection = [];
PlayList.HoverVP.collection.videos = [];
PlayList.HoverVP.init = function(a) {
    PlayList.HoverVP.walk(a);
    PlayList.HoverVP.bind()
};
PlayList.HoverVP.walk = function(a) {
    a ? ((a = document.getElementById(a)) ? a = document : PlayList.HoverVP.collection.videos = [], a = a.getElementsByTagName("UL")) : a = document.getElementsByTagName("UL");
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if ("v" == c.className || -1 != c.className.indexOf("v ")) {
            for (var c = c.getElementsByTagName("LI"), d = null, e = null, f = 0; f < c.length; f++) {
                var h = c[f];
                if ("v_menu" == h.className) {
                    d = h;
                    d.style.display = "none";
                    var g = 0, j = d.id.split("_");
                    if (j[0] == PlayList.flag && (void 0 != j[1] || "" != j[1]))
                        g = j[1];
                    PlayList.check(g) ? 
                    (d.style.display = "block", d.innerHTML = '<span class="ico__listexist" title="\u64ad\u653e\u8be5\u89c6\u9891"><a href="http://v.youku.com/v_show/id_' + g + '_type_99.html" target="_blank"></a></span>') : d.innerHTML = '<span class="ico__listadd" title="\u6dfb\u52a0\u5230\u70b9\u64ad\u5355"></span>'
                }
                "v_link" == h.className && (e = h)
            }
            d && e && PlayList.HoverVP.collection.videos.push({linker: e,vmenu: d})
        }
    }
};
PlayList.HoverVP.getvmenu = function(a) {
    for (var b = PlayList.HoverVP.collection.videos.length, c = 0; c < b; c++) {
        var d = PlayList.HoverVP.collection.videos[c];
        if (d.linker == a)
            return d.vmenu
    }
    return null
};
PlayList.HoverVP.getvlinker = function(a) {
    for (var b = PlayList.HoverVP.collection.videos.length, c = 0; c < b; c++) {
        var d = PlayList.HoverVP.collection.videos[c];
        if (d.vmenu == a)
            return d.linker
    }
    return null
};
PlayList.HoverVP.bind = function() {
    for (var a = PlayList.HoverVP.collection.videos.length, b = 0; b < a; b++) {
        var c = PlayList.HoverVP.collection.videos[b];
        c.linker.onmouseover = function() {
            PlayList.HoverVP.showvmenu(PlayList.HoverVP.getvmenu(this))
        };
        c.linker.onmouseout = function() {
            PlayList.HoverVP.hidevmenu(PlayList.HoverVP.getvmenu(this))
        };
        c.vmenu.onmouseover = function() {
            PlayList.HoverVP.showvmenu(this)
        };
        c.vmenu.onmouseout = function() {
            PlayList.HoverVP.hidevmenu(this)
        };
        c.vmenu.onclick = function() {
            PlayList.HoverVP.clickvmenu(this)
        }
    }
};
PlayList.HoverVP.vemenuisadded = function(a) {
    for (var b = 0, c = PlayList.HoverVP.vmenuqueue.length; b < c; b++)
        if (a == PlayList.HoverVP.vmenuqueue[b])
            return !0;
    return !1
};
PlayList.HoverVP.clickvmenu = function(a) {
    if (!PlayList.HoverVP.vemenuisadded()) {
        PlayList.HoverVP.vmenuqueue.push(a);
        if ("ico__listadd" == a.getElementsByTagName("span")[0].className) {
            var b = 0, c = a.id.split("_");
            if (c[0] == PlayList.flag && (void 0 != c[1] || "" != c[1]))
                b = c[1];
            PlayList.add(b);
            PlayListIndexCallback();
            a.innerHTML = '<span class="ico__listexist" title="\u64ad\u653e\u8be5\u89c6\u9891"><a href="http://v.youku.com/v_show/id_' + b + '_type_99.html" target="_blank"></a></span>'
        }
        a.onclick = null
    }
};
PlayList.HoverVP.showvmenu = function(a) {
    if (a) {
        var b = 0, c = a.id.split("_");
        if (c[0] == PlayList.flag && (void 0 != c[1] || "" != c[1]))
            b = c[1];
        if (!PlayList.check(b) && !PlayList.HoverVP.vemenuisadded(a))
            a.style.display = "block"
    }
};
PlayList.HoverVP.hidevmenu = function(a) {
    if (a) {
        var b = 0, c = a.id.split("_");
        if (c[0] == PlayList.flag && (void 0 != c[1] || "" != c[1]))
            b = c[1];
        if (!PlayList.check(b) && !PlayList.HoverVP.vemenuisadded(a))
            a.style.display = "none"
    }
};
PlayList.HoverVP.showvmenu = function(a) {
    if (a && !PlayList.HoverVP.vemenuisadded(a))
        a.style.display = "block"
};
var PlaylistGroup = {groupDiv: "groups_tab",more_handle: "more_handle",more_panel: "more_group_panel",listWrapDiv: "Dramalist_wrap",listLoadingDiv: "list_loading_div",tabId: "Drama",scrollBarId: "DramaScrollbar",tvlist: "tvlist",outerTabMax: 4,outerCurrent: 0,innerCurrent: -1,outerAnchors: [],innerAnchors: [],moreHandle: null,moreAnchor: null,clickStatStr: "tp=1&cp=4008024&cpp=1000705",loading: !1,init: function(a, b, c, d, e, f, h) {
        a ? this.genMonthsGroup(d, e, f) : this.genDigitGroup(b);
        this.bindEvent();
        this.outerAnchors.length && 
        (a ? this.switchTabByMonth(h, e, f) : this.switchTabByPage(c))
    },switchTabByMonth: function(a, b, c) {
        var d = -1;
        if (a - b < this.innerAnchors.length)
            d = a - firstMon, a = this.innerAnchors[d], this.moreAnchor.innerHTML = a.innerHTML + '<em class="ico_up_triangle"></em>', this.moreAnchor.setAttribute("from", a.getAttribute("from")), this.moreAnchor.setAttribute("to", a.getAttribute("to")), this.outerCurrent = this.outerTabMax - 1, this.innerCurrent = d, this.moreHandle.className = "current";
        else if (d = c - a, d < this.outerAnchors.length)
            this.outerAnchors[d].parentNode.className = 
            "current", this.outerCurrent = d
    },switchTabByPage: function(a) {
        var b = -1;
        if (a <= this.innerAnchors.length)
            b = a - 1, a = this.innerAnchors[b], this.moreAnchor.innerHTML = a.innerHTML + '<em class="ico_up_triangle"></em>', this.moreAnchor.setAttribute("page", a.getAttribute("page")), this.outerCurrent = this.outerTabMax - 1, this.innerCurrent = b, this.moreHandle.className = "current";
        else if (b = 0, b = this.outerAnchors.length == this.outerTabMax ? 0 == this.innerAnchors.length ? this.outerTabMax : this.outerTabMax - 1 : this.outerAnchors.length, 
        b -= a - this.innerAnchors.length, 0 <= b && b < this.outerAnchors.length)
            this.outerAnchors[b].parentNode.className = "current", this.outerCurrent = b
    },makeTabsSpace: function() {
        var a = document.getElementById(this.scrollBarId);
        a && (a.parentNode.className += " scroll-area-s")
    },genDigitGroup: function(a) {
        var b = Math.ceil(a / 100), c = a % 100, d = document.getElementById(this.groupDiv);
        if (d && 1 < b) {
            this.makeTabsSpace();
            d.style.display = "block";
            var e = d.getElementsByTagName("ul");
            if (2 == e.length) {
                var d = e[0], e = e[1], f = "", h = 1, g = this.outerTabMax - 
                2, j = b, k;
                0 < c && (f += '<li><a page="' + j-- + '">' + a + "-" + (a - c + 1) + "</a></li>", a -= c);
                for (; 0 < a; ) {
                    c = a - 100 + 1;
                    k = a;
                    f += '<li><a page="' + j-- + '">' + k + "-" + c + "</a></li>";
                    a -= 100;
                    if (h == g && b > this.outerTabMax) {
                        f += '<li id="more_handle"><a class="more">\u66f4\u591a<em class="ico_up_triangle"></em></a></li>';
                        break
                    }
                    h++
                }
                d.innerHTML = f;
                if (b > this.outerTabMax) {
                    for (f = ""; 0 < a; )
                        c = a - 100 + 1, k = a, f = '<li><a page="' + j-- + '">' + k + "-" + c + "</a></li>" + f, a -= 100;
                    e.innerHTML = f
                }
            }
        }
    },genMonthsGroup: function(a, b, c) {
        var d = document.getElementById(this.groupDiv), 
        e = c - b + 1;
        if (d && 1 < e) {
            this.makeTabsSpace();
            d.style.display = "block";
            var f = d.getElementsByTagName("ul");
            if (2 == f.length) {
                for (var d = f[0], f = f[1], h = "", g = this.outerTabMax - 1, j = c, k = 1; j >= b; j--, k++) {
                    var l = this.getMonthDays(a, j), m = 10 > j ? "0" + j : j, h = h + ('<li><a from="' + a + m + '01" to="' + a + m + l + '">' + j + "\u6708</a></li>");
                    if (e > this.outerTabMax && k == g) {
                        h += '<li class="current" id="more_handle"><a class="more">\u66f4\u591a<em class="ico_up_triangle"></em></a></li>';
                        break
                    }
                }
                d.innerHTML = h;
                if (e > this.outerTabMax) {
                    h = "";
                    j = b;
                    for (b = c - g; j <= 
                    b; j++)
                        m = 10 > j ? "0" + j : j, h += '<li><a from="' + a + m + '01" to="' + a + m + l + '">' + j + "\u6708</a></li>";
                    f.innerHTML = h
                }
            }
        }
    },getMonthDays: function(a, b) {
        var c;
        c = {1: "",3: "",5: "",7: "",8: "",10: "",12: ""};
        var d = 0;
        return 2 == b ? 0 == a % 4 ? 29 : 28 : b in c ? 31 : 30
    },bindEvent: function() {
        var a = document.getElementById(this.groupDiv).getElementsByTagName("ul"), b = 0 < a.length ? a[0] : !1, a = 1 < a.length ? a[1] : !1;
        if (b) {
            var c = b.getElementsByTagName("a");
            if (this.outerAnchors = c) {
                for (var d = c.length, b = 0; b < d; b++)
                    c[b].onclick = this.toggleOuterTabs(b);
                if (d == this.outerTabMax)
                    this.moreAnchor = 
                    c[d - 1]
            }
        }
        if (b = document.getElementById(this.more_handle)) {
            this.moreHandle = b;
            var e = this;
            b.onclick = function() {
                e.toggleMorePanel()
            }
        }
        if (a && (this.innerAnchors = c = a.getElementsByTagName("a"))) {
            b = 0;
            for (d = c.length; b < d; b++)
                c[b].onclick = this.toggleInnerTabs(b)
        }
        if (a = function(a, b) {
            var c = document.getElementsByName(b);
            if (0 < c.length)
                return c;
            for (var c = [], d = document.getElementsByTagName(a), e = 0; e < d.length; e++)
                d[e].getAttribute("name") == b && (c[c.length] = d[e]);
            return c
        }("div", this.tvlist)) {
            d = a.length;
            for (b = 0; b < d; b++)
                a[b].onmouseover = 
                function() {
                    var a = this.getAttribute("flag");
                    this.className = "item iHover";
                    window.attachEvent && !window.opera ? execScript("var vcardPoint") : window.eval("var vcardPoint");
                    vcardPoint = setTimeout(function() {
                        PlaylistGroup.toPopKandianLayer(a, d)
                    }, 300)
                }, a[b].onmouseout = function() {
                    this.className = "item";
                    var a = this.getAttribute("flag");
                    document.getElementById("vcard" + a).style.display = "none";
                    clearTimeout(window.vcardPoint)
                }
        }
    },toPopKandianLayer: function(a, b) {
        var c = "vcard" + a, d = document.getElementById(c);
        switch (a % 5) {
            case 1:
                d.className = 
                "vcard vcard1n";
                break;
            case 2:
                d.className = "vcard vcard2n";
                break;
            case 3:
                d.className = "vcard vcard3n";
                break;
            case 4:
                d.className = "vcard vcard4n";
                break;
            case 0:
                d.className = "vcard vcard5n";
                break;
            default:
                d.className = "vcard vcard3n"
        }
        var e = document.getElementById("chasing");
        if (Math.ceil(a / 5) + 3 > Math.ceil(b / 5) && (e && 4 < Math.ceil(b / 5) || !e && 5 < Math.ceil(b / 5)))
            d.className += " vcard_top";
        "" == d.innerHTML ? (e = d.getAttribute("vid"), nova_update(c, "/v_getVideoShowPointV5/vid_" + e, void 0, void 0, function(a) {
            if ("" != a)
                $$(".vcard").each(function(a) {
                    a.style.display = 
                    "none"
                }, i), d.style.display = "block"
        })) : ($$(".vcard").each(function(a) {
            a.style.display = "none"
        }, i), d.style.display = "block")
    },toggleMorePanel: function(a) {
        void 0 == a && (a = document.getElementById(this.more_panel));
        if (a)
            a.style.display = "none" == a.style.display ? "block" : "none", Log.log(1, this.clickStatStr)
    },closeMorePanel: function(a) {
        void 0 == a && (a = document.getElementById(this.more_panel));
        if (a)
            a.style.display = "none"
    },reload: function(a) {
        if (0 == ToggleShowList.currListIndex) {
            var b = null;
            if (this.outerCurrent == this.outerTabMax - 
            1)
                this.innerCurrent < this.innerAnchors.length - 1 && -1 < this.innerCurrent ? (b = this.innerAnchors[++this.innerCurrent], this.moreAnchor.innerHTML = b.innerHTML + '<em class="ico_up_triangle"></em>') : (this.outerAnchors[this.outerCurrent--].parentNode.className = "", this.outerAnchors[this.outerCurrent].parentNode.className = "current", b = this.outerAnchors[this.outerCurrent]);
            else if (0 < this.outerCurrent)
                this.outerAnchors[this.outerCurrent--].parentNode.className = "", this.outerAnchors[this.outerCurrent].parentNode.className = 
                "current", b = this.outerAnchors[this.outerCurrent];
            if (b) {
                var c = b.getAttribute("page"), d = b.getAttribute("from"), b = b.getAttribute("to"), e = "";
                null != c ? e = "page" + c : null != d && null != b && (e = "from_" + d + "_to_" + b);
                this.addListContents(e, a)
            }
        }
    },addListContents: function(a, b) {
        var c = $(this.listWrapDiv), d = $(this.listLoadingDiv);
        if (c && d) {
            d.style.display = "block";
            c.style.display = "none";
            PlayerSider.scrollToItem(0);
            for (var e = c.getElementsByTagName("div"), f = "listitem_" + a, h = null, g = 0, j = e.length; g < j; g++)
                if (e[g]) {
                    if (-1 != e[g].id.indexOf("listitem_"))
                        e[g].style.display = 
                        "none";
                    else if (-1 != e[g].id.indexOf("v5_wrap"))
                        e[g].innerHTML = "";
                    e[g].id == f && (h = e[g])
                }
            if (h)
                h.style.display = "block", d.style.display = "none", c.style.display = "block", ToggleShowList.resetSider(this.tabId), (f = $("item_" + window.videoId2)) && f.parentNode.parentNode == h || PlayerSider.scrollToItem(0), b && "function" == typeof b && b();
            else {
                var k = document.createElement("div"), l = this;
                k.setAttribute("id", f);
                c.appendChild(k);
                if (0 == a.indexOf("page"))
                    h = a.replace("page", ""), l.loading = !0, nova_update(f, "/v_vpofficiallistv5/id_" + 
                    videoId + "_showid_" + showid + "_page_" + h, void 0, void 0, function() {
                        k.style.display = "block";
                        d.style.display = "none";
                        c.style.display = "block";
                        ToggleShowList.resetSider(l.tabId);
                        l.loading = !1;
                        b && "function" == typeof b && b()
                    });
                else if (0 == a.indexOf("from") && (e = a.split("_"), 4 == e.length))
                    h = e[1], e = e[3], l.loading = !0, nova_update(f, "/v_vpofficiallistv5/id_" + videoId + "_showid_" + showid + "_from_" + h + "_to_" + e + "_lastmon_" + lastMon, void 0, void 0, function() {
                        k.style.display = "block";
                        d.style.display = "none";
                        c.style.display = "block";
                        ToggleShowList.resetSider(l.tabId);
                        l.loading = !1;
                        b && "function" == typeof b && b()
                    })
            }
        }
    },toggleOuterTabs: function(a) {
        var b = this;
        return function() {
            if (a == b.outerCurrent || b.loading)
                return !1;
            b.outerAnchors[b.outerCurrent].parentNode.className = "";
            this.parentNode.className = "current";
            b.outerCurrent = a;
            var c = this.getAttribute("from"), d = this.getAttribute("to"), e = this.getAttribute("page"), f = null;
            0 == a && (f = flySubscribe);
            $(b.listWrapDiv) && (null != e ? b.addListContents("page" + e, f) : null != c && null != d && b.addListContents("from_" + c + "_to_" + d, f));
            b.closeMorePanel();
            Log.log(1, b.clickStatStr)
        }
    },toggleInnerTabs: function(a) {
        var b = this;
        return function() {
            if (a == b.innerCurrent || b.loading)
                return !1;
            b.outerAnchors[b.outerCurrent].parentNode.className = "";
            b.outerCurrent = b.outerTabMax - 1;
            b.innerCurrent = a;
            var c = this.getAttribute("from"), d = this.getAttribute("to"), e = this.getAttribute("page");
            $(b.listWrapDiv) && (null != e ? b.addListContents("page" + e) : null != c && null != d && b.addListContents("from_" + c + "_to_" + d));
            if (b.moreAnchor) {
                if (null != e)
                    b.moreAnchor.setAttribute("page", e), b.moreAnchor.innerHTML = 
                    this.innerHTML + '<em class="ico_up_triangle"></em>';
                else if (null != c && null != d)
                    b.moreAnchor.setAttribute("from", c), b.moreAnchor.setAttribute("to", d), b.moreAnchor.innerHTML = this.innerHTML + '<em class="ico_up_triangle"></em>';
                b.moreHandle.className = "current"
            }
            b.closeMorePanel();
            Log.log(1, b.clickStatStr)
        }
    }}, ToggleShowList = {currListIndex: -1,clickStat: ["tp=1&cp=4008019&cpp=1000705", "tp=1&cp=4008020&cpp=1000705"],list: [],init: function(a) {
        a = document.getElementById(a).getElementsByTagName("li");
        this.list = [];
        for (var b = 
        0, c = a.length; b < c; b++)
            if (a[b].getAttribute("_to"))
                a[b].onclick = this.genListener(this.list.length), this.list.push(a[b])
    },toggle: function(a) {
        if (a != this.currListIndex)
            this.close(), this.open(a), this.currListIndex = a;
        0 <= a && a < this.clickStat.length && Log.log(1, this.clickStat[a])
    },open: function(a) {
        if (0 > a || a >= this.list.length)
            return !1;
        this.list[a].className = "current";
        var b = this.list[a].getAttribute("_to");
        document.getElementById(b).style.display = "";
        var c = $(b + "list_wrap");
        if (c)
            if ("1" == c.getAttribute("returned"))
                this.resetSider(b);
            else if ("relDrama" == b) {
                var d = this;
                nova_update(c, "/v_vpofficialsegmentv5/id_" + videoId + "_showid_" + showid, void 0, void 0, function() {
                    $(c).setAttribute("returned", 1);
                    d.resetSider(b)
                })
            }
    },close: function() {
        for (var a = 0; a < this.list.length; a++) {
            this.list[a].className = "";
            var b = this.list[a].getAttribute("_to");
            document.getElementById(b).style.display = "none"
        }
    },genListener: function(a) {
        var b = this;
        return function() {
            b.toggle(a)
        }
    },resetSider: function(a) {
        PlayerSiderWrapper(a + "_playlist", a + "list_wrap", a + "Scrollbar", 54)
    }}, 
AutoFoldList = {waitTime: 3,playerStartTimer: -1,timer: -1,beginTime: 0,checkInterval: 1,init: function() {
        this.playerStartTimer = setInterval("AutoFoldList.checkStartPlay()", 1E3)
    },checkStartPlay: function() {
        window.playerStart && (clearInterval(this.playerStartTimer), this.setCheck())
    },setCheck: function() {
        this.beginTime = Interact.getWatchTime();
        this.timer = setInterval("AutoFoldList.checkTime()", 1E3 * this.checkInterval)
    },checkTime: function() {
        if (Interact.getWatchTime() - this.beginTime >= this.waitTime)
            PlayerSider.status = 
            1, PlayerSider.turn(), clearInterval(this.timer)
    }}, flyNotify = function(a, b) {
    var c = document.createElement("DIV"), d = mouse_pos(a);
    pos_target = parseInt($("watching").offsetParent.offsetLeft + $("watching").offsetLeft);
    c.setAttribute("class", "flyLayout");
    c.style.left = d.x + "px";
    c.style.top = d.y + "px";
    document.body.appendChild(c);
    anim(c, {opacity: 0.3,top: "20px",width: "100px",height: "30px",left: pos_target - 20 + "px"}, 500, "Tween.Linear", {start: function() {
        },complete: function() {
            document.body.removeChild(c);
            b && "function" == 
            typeof b && b()
        }})
}, mouse_pos = function(a) {
    var b = {x: 0,y: 0};
    if ("undefined" != typeof window.pageYOffset)
        b.x = window.pageXOffset, b.y = window.pageYOffset;
    else if ("undefined" != typeof document.compatMode && "BackCompat" != document.compatMode)
        b.x = document.documentElement.scrollLeft, b.y = document.documentElement.scrollTop;
    else if ("undefined" != typeof document.body)
        b.x = document.body.scrollLeft, b.y = document.body.scrollTop;
    b.x += a.clientX;
    b.y += a.clientY;
    return b
}, animSubscribe = function(a, b, c, d) {
    var e = {clientX: d.clientX,
        clientY: d.clientY};
    QUcenter.follow(a + "_" + b, function(a) {
        if (1 == a || 2 == a) {
            flyNotify(e, function() {
            });
            updateSubInfoInList(c);
            if (a = $("show_follow_info"))
                a.innerHTML = '<span class="followed">\u5df2\u8ffd\u5267<span class="splite">|</span>\u53bb<a href="http://i.youku.com/u/home?type=showfriends_timeline" target="_blank">\u7ba1\u7406</a></span>';
            Log.log(1, "tp=1&cp=4008207&cpp=1000404")
        } else if (a = $("updateTip"))
            a.style.display = "block"
    })
}, normalSubscribe = function(a) {
    a && Nova.addScript("http://" + (window.v_domain || 
    "v.youku.com") + "/v_subscribeShow?showid=" + a + "&cb=flySubscribeCallback");
    return !1
}, flySubscribeCallback = function(a) {
    if (1 == a) {
        updateSubInfoInList($("btnNotification"));
        if (a = $("show_follow_info"))
            a.innerHTML = '<span class="followed">\u5df2\u8ffd\u5267<span class="splite">|</span>\u53bb<a href="http://i.youku.com/u/home?type=showfriends_timeline" target="_blank">\u7ba1\u7406</a></span>';
        Log.log(1, "tp=1&cp=4008207&cpp=1000404")
    } else if (a = $("updateTip"))
        a.style.display = "block"
}, flySubscribe = function() {
    var a = 
    $("btnNotification");
    if (a) {
        a.onclick = function() {
            islogin() ? normalSubscribe(window.showid) : login(normalSubscribe, window.showid);
            Log.log(1, "tp=1&cp=4008206&cpp=1000404")
        };
        var b = $("show_follow_info");
        if (b) {
            spans = b.getElementsByTagName("span");
            for (var b = 0, c = spans.length; b < c; b++)
                if ("followed" == spans[b].className) {
                    updateSubInfoInList(a);
                    break
                }
        }
    }
}, updateSubInfoInList = function(a) {
    if (a)
        a.parentNode.innerHTML = '<span class="followed">\u5df2\u8ffd\u5267</span>'
};
function feeInfo() {
    $("feeInfo") && nova_request(feeInfoCallback, "/v_vpvideoFeeInfov5", {showid: window.showid,t: Math.random()})
}
function feeInfoCallback(a) {
    "" !== a ? ($("DramaTab").innerHTML += '<li _to="feeInfo"><span>\u4ed8\u8d39\u4fe1\u606f</span></li>', $("feeInfo").innerHTML = a, ToggleShowList.init("DramaTab"), ToggleShowList.toggle(2), $("feeInfo").style.display = "block") : AutoFoldList.init()
}
var POPCOMMENT = {popwin: null,show: function(a) {
        if (!islogin())
            return login(), !1;
        null != this.popwin && this.popwin.close();
        empty(a) && (a = "reply");
        this.popwin = new Popup({contentType: 1,isSupportDraging: !1,isReloadOnClose: !1,width: 700,height: 460,boxstyle: "gray"});
        this.popwin.setContents({title: decodeURIComponent(Nova.Cookie.get("k")) + "\u7684\u65b0\u6d88\u606f",contentUrl: "http://" + COMMENT_MSG_DOMAIN + "/comments/pop/type_" + a + ".html"});
        this.popwin.build().show();
        closePopComment();
        "reply" == a ? Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4002362&cpp=1000404&" + 
        Math.random()) : Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4002363&cpp=1000404&" + Math.random());
        return !1
    },hide: function() {
        this.popwin.close()
    }}, pushApp = {unloginStr: '<div class="info">\u4f60\u9700\u8981\u540c\u65f6\u767b\u5f55\u7f51\u7ad9\u548c\u624b\u673aApp</div><div class="form_btn form_btn_l form_btnmaj_l" id="btn_pushToApp" onclick="pushApp.send();Log.log(1,\'tp=1&cp=4008981&cpp=1000217\');"><span class="form_btn_text">\u5f00\u59cb\u7f13\u5b58</span></div>',deviceStr: '%s<div class="clear"></div>',
    hasdevice: '<ul id="push_device_list">%s</ul><div class="aside" style="visibility:hidden"><a href="#" target="_blank">\u7ba1\u7406\u6211\u7684\u79fb\u52a8\u8bbe\u5907</a></div><div class="clear"></div><div class="action" id="push_device_action"><div class="form_btn form_btn_l form_btnmaj_l" onclick="pushApp.send();Log.log(1,\'tp=1&cp=4008981&cpp=1000217\');"><span class="form_btn_text">\u5f00\u59cb\u7f13\u5b58</span></div></div>',nodevice: '<ul><li class="cur"><div class="info">\u672a\u627e\u5230\u4f60\u7684\u624b\u673a</div></li></ul><div class="aside"><a href="javascript:;" onclick="pushApp.init();Log.log(1,\'tp=1&cp=4008984&cpp=1000217\');return false;">\u91cd\u65b0\u68c0\u6d4b</a></div><div class="clear"></div>',
    appDown: '<div class="appDown">\u9700\u8981\u5728\u624b\u673a\u4e0b\u8f7d\u5b89\u88c5\u4f18\u9177App\uff0c\u5e76\u767b\u5f55\u540e\u91cd\u65b0\u68c0\u6d4b<div class="aside appDownWrap"><img alt="\u4f18\u9177app\u4e8c\u7ef4\u7801" src="http://qrcode.ykimg.com/qr?t=http://youku.tv/FFeC3&size=100" width="78" height="78"><br>\u626b\u7801\u4e0b\u8f7d\u4f18\u9177App</div></div>',success: '<div class="success">\u89c6\u9891\u5df2\u63a8\u9001\uff0c\u8bf7\u5728\u624b\u673a\u67e5\u770b\u4f18\u9177App\u3002</div><br/><p><a href="javascript:;" onclick="pushApp.init();Log.log(1,\'tp=1&cp=4008982&cpp=1000217\');return false;">\u7f13\u5b58\u81f3\u5176\u4ed6\u79fb\u52a8\u8bbe\u5907</a></p>',
    fail: '<div class="fail">\u89c6\u9891\u63a8\u9001\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u3002</div><div class="form_btn form_btn_l form_btnmaj_l" id="btn_pushToApp" onclick="pushApp.init();Log.log(1,\'tp=1&cp=4008983&cpp=1000217\');"><span class="form_btn_text">\u91cd\u65b0\u4e0b\u8f7d</span></div>',loading: '<ul><li class="cur"><div class="ico__loading_16"></div>\u6b63\u5728\u68c0\u6d4b...</li></ul><div class="aside" style="visibility:hidden"></div><div class="clear"></div>',init: function() {
        this.toppanel = 
        document.getElementById("push_video");
        this.panel = document.getElementById("push_video_content");
        if (!islogin())
            return this.panel.innerHTML = this.unloginStr, 0 < $$(".appDown").length && _this.toppanel.removeChild($$(".appDown")[0]), !1;
        this.getDevices()
    },getDevices: function() {
        this.panel.innerHTML = this.loading;
        nova_request(pushApp.getDevicesCallback, "/QVideo/~ajax/getUserDevices", {r: Math.random()})
    },getDevicesCallback: function(a) {
        var b = pushApp, c = "";
        if (a && a.data) {
            cur = !1;
            for (var d = 0; d < a.data.length; d++)
                if (!a.data[d].device.match(/ipad|iphone|ipod/i) && 
                "" != a.data[d].device_remark && "" != a.data[d].guid) {
                    var e = '<li guid="' + a.data[d].guid + '" ';
                    cur || (e += ' class="cur" ', cur = !0);
                    e += ">";
                    e += a.data[d].device_remark;
                    e += "</li>";
                    c += e
                }
            if ("" == c)
                return b.panel.innerHTML = b.nodevice, 0 >= $$(".appDown").length && (b.toppanel.innerHTML += b.appDown), !1;
            c = b.hasdevice.replace("%s", c);
            1 < a.data.length && (c = '<i class="drophandle"></i>' + c);
            b.deviceStr = b.deviceStr.replace("%s", c);
            b.panel.innerHTML = b.deviceStr;
            b.panel.className = "select";
            b.panellist = document.getElementById("push_device_list");
            0 < $$(".appDown").length && b.toppanel.removeChild($$(".appDown")[0]);
            b.bind()
        } else
            return b.panel.innerHTML = b.nodevice, 0 >= $$(".appDown").length && (b.toppanel.innerHTML += b.appDown), !1
    },bind: function() {
        var a = this, b = document.getElementById("push_device_list");
        if (b)
            for (var c = b.getElementsByTagName("li"), b = 0; b < c.length; b++)
                c[b].onclick = function() {
                    if ("cur" == this.className)
                        return !1;
                    var a = c[0].getAttribute("guid"), b = c[0].innerHTML;
                    this.getAttribute("guid");
                    var f = this.innerHTML;
                    c[0].setAttribute("guid", a);
                    c[0].innerHTML = 
                    f;
                    this.setAttribute("guid", a);
                    this.innerHTML = b
                };
        if (this.panellist)
            this.panellist.onclick = function() {
                a.panel.className = -1 !== a.panel.className.indexOf("open") ? "select" : "open select"
            }, this.panellist.onmouseout = function() {
                a.panel.className = "select"
            }, this.panellist.onmouseover = function() {
                a.panel.className = "open select"
            }
    },send: function() {
        if (!islogin())
            return login("pushApp.init()"), !1;
        var a = this, b = document.getElementById("push_device_action");
        if (b)
            b.innerHTML = '<div class="ico__loading_16"></div>';
        b = document.getElementById("push_device_list");
        if (!b)
            return !1;
        b = b.getElementsByTagName("li");
        if (0 >= b.length)
            return !1;
        b = b[0].getAttribute("guid");
        nova_call("/QVideo/~ajax/sendVideoToAPP", {vid: window.videoId,guid: b,desc: "\u70b9\u51fb\u7f13\u5b58",showid: window.showid || 0}, function(b) {
            a.panel.innerHTML = 1 == b ? a.success : a.fail
        })
    }};
function QR8bitByte(a) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = a
}
QR8bitByte.prototype = {getLength: function() {
        return this.data.length
    },write: function(a) {
        for (var b = 0; b < this.data.length; b++)
            a.put(this.data.charCodeAt(b), 8)
    }};
function QRCode(a, b) {
    this.typeNumber = a;
    this.errorCorrectLevel = b;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = []
}
QRCode.prototype = {addData: function(a) {
        this.dataList.push(new QR8bitByte(a));
        this.dataCache = null
    },isDark: function(a, b) {
        if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b)
            throw Error(a + "," + b);
        return this.modules[a][b]
    },getModuleCount: function() {
        return this.moduleCount
    },make: function() {
        if (1 > this.typeNumber) {
            for (var a = 1, a = 1; 40 > a; a++) {
                for (var b = QRRSBlock.getRSBlocks(a, this.errorCorrectLevel), c = new QRBitBuffer, d = 0, e = 0; e < b.length; e++)
                    d += b[e].dataCount;
                for (e = 0; e < this.dataList.length; e++)
                    b = this.dataList[e], 
                    c.put(b.mode, 4), c.put(b.getLength(), QRUtil.getLengthInBits(b.mode, a)), b.write(c);
                if (c.getLengthInBits() <= 8 * d)
                    break
            }
            this.typeNumber = a
        }
        this.makeImpl(!1, this.getBestMaskPattern())
    },makeImpl: function(a, b) {
        this.moduleCount = 4 * this.typeNumber + 17;
        this.modules = Array(this.moduleCount);
        for (var c = 0; c < this.moduleCount; c++) {
            this.modules[c] = Array(this.moduleCount);
            for (var d = 0; d < this.moduleCount; d++)
                this.modules[c][d] = null
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, 
        this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(a, b);
        7 <= this.typeNumber && this.setupTypeNumber(a);
        if (null == this.dataCache)
            this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        this.mapData(this.dataCache, b)
    },setupPositionProbePattern: function(a, b) {
        for (var c = -1; 7 >= c; c++)
            if (!(-1 >= a + c || this.moduleCount <= a + c))
                for (var d = -1; 7 >= d; d++)
                    -1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = 0 <= c && 6 >= c && (0 == d || 6 == d) || 0 <= d && 6 >= 
                    d && (0 == c || 6 == c) || 2 <= c && 4 >= c && 2 <= d && 4 >= d ? !0 : !1)
    },getBestMaskPattern: function() {
        for (var a = 0, b = 0, c = 0; 8 > c; c++) {
            this.makeImpl(!0, c);
            var d = QRUtil.getLostPoint(this);
            if (0 == c || a > d)
                a = d, b = c
        }
        return b
    },createMovieClip: function(a, b, c) {
        a = a.createEmptyMovieClip(b, c);
        this.make();
        for (b = 0; b < this.modules.length; b++)
            for (var c = 1 * b, d = 0; d < this.modules[b].length; d++) {
                var e = 1 * d;
                this.modules[b][d] && (a.beginFill(0, 100), a.moveTo(e, c), a.lineTo(e + 1, c), a.lineTo(e + 1, c + 1), a.lineTo(e, c + 1), a.endFill())
            }
        return a
    },setupTimingPattern: function() {
        for (var a = 
        8; a < this.moduleCount - 8; a++)
            null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
        for (a = 8; a < this.moduleCount - 8; a++)
            null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
    },setupPositionAdjustPattern: function() {
        for (var a = QRUtil.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
            for (var c = 0; c < a.length; c++) {
                var d = a[b], e = a[c];
                if (null == this.modules[d][e])
                    for (var f = -2; 2 >= f; f++)
                        for (var h = -2; 2 >= h; h++)
                            this.modules[d + f][e + h] = -2 == f || 2 == f || -2 == h || 2 == h || 0 == f && 0 == h ? !0 : !1
            }
    },setupTypeNumber: function(a) {
        for (var b = 
        QRUtil.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
            var d = !a && 1 == (b >> c & 1);
            this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
        }
        for (c = 0; 18 > c; c++)
            d = !a && 1 == (b >> c & 1), this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
    },setupTypeInfo: function(a, b) {
        for (var c = QRUtil.getBCHTypeInfo(this.errorCorrectLevel << 3 | b), d = 0; 15 > d; d++) {
            var e = !a && 1 == (c >> d & 1);
            6 > d ? this.modules[d][8] = e : 8 > d ? this.modules[d + 1][8] = e : this.modules[this.moduleCount - 15 + d][8] = e
        }
        for (d = 0; 15 > d; d++)
            e = !a && 1 == (c >> d & 1), 8 > d ? this.modules[8][this.moduleCount - 
            d - 1] = e : 9 > d ? this.modules[8][15 - d - 1 + 1] = e : this.modules[8][15 - d - 1] = e;
        this.modules[this.moduleCount - 8][8] = !a
    },mapData: function(a, b) {
        for (var c = -1, d = this.moduleCount - 1, e = 7, f = 0, h = this.moduleCount - 1; 0 < h; h -= 2)
            for (6 == h && h--; ; ) {
                for (var g = 0; 2 > g; g++)
                    if (null == this.modules[d][h - g]) {
                        var j = !1;
                        f < a.length && (j = 1 == (a[f] >>> e & 1));
                        QRUtil.getMask(b, d, h - g) && (j = !j);
                        this.modules[d][h - g] = j;
                        e--;
                        -1 == e && (f++, e = 7)
                    }
                d += c;
                if (0 > d || this.moduleCount <= d) {
                    d -= c;
                    c = -c;
                    break
                }
            }
    }};
QRCode.PAD0 = 236;
QRCode.PAD1 = 17;
QRCode.createData = function(a, b, c) {
    for (var b = QRRSBlock.getRSBlocks(a, b), d = new QRBitBuffer, e = 0; e < c.length; e++) {
        var f = c[e];
        d.put(f.mode, 4);
        d.put(f.getLength(), QRUtil.getLengthInBits(f.mode, a));
        f.write(d)
    }
    for (e = a = 0; e < b.length; e++)
        a += b[e].dataCount;
    if (d.getLengthInBits() > 8 * a)
        throw Error("code length overflow. (" + d.getLengthInBits() + ">" + 8 * a + ")");
    for (d.getLengthInBits() + 4 <= 8 * a && d.put(0, 4); 0 != d.getLengthInBits() % 8; )
        d.putBit(!1);
    for (; !(d.getLengthInBits() >= 8 * a); ) {
        d.put(QRCode.PAD0, 8);
        if (d.getLengthInBits() >= 
        8 * a)
            break;
        d.put(QRCode.PAD1, 8)
    }
    return QRCode.createBytes(d, b)
};
QRCode.createBytes = function(a, b) {
    for (var c = 0, d = 0, e = 0, f = Array(b.length), h = Array(b.length), g = 0; g < b.length; g++) {
        var j = b[g].dataCount, k = b[g].totalCount - j, d = Math.max(d, j), e = Math.max(e, k);
        f[g] = Array(j);
        for (var l = 0; l < f[g].length; l++)
            f[g][l] = 255 & a.buffer[l + c];
        c += j;
        l = QRUtil.getErrorCorrectPolynomial(k);
        j = (new QRPolynomial(f[g], l.getLength() - 1)).mod(l);
        h[g] = Array(l.getLength() - 1);
        for (l = 0; l < h[g].length; l++)
            k = l + j.getLength() - h[g].length, h[g][l] = 0 <= k ? j.get(k) : 0
    }
    for (l = g = 0; l < b.length; l++)
        g += b[l].totalCount;
    c = Array(g);
    for (l = j = 0; l < d; l++)
        for (g = 0; g < b.length; g++)
            l < f[g].length && (c[j++] = f[g][l]);
    for (l = 0; l < e; l++)
        for (g = 0; g < b.length; g++)
            l < h[g].length && (c[j++] = h[g][l]);
    return c
};
for (var QRMode = {MODE_NUMBER: 1,MODE_ALPHA_NUM: 2,MODE_8BIT_BYTE: 4,MODE_KANJI: 8}, QRErrorCorrectLevel = {L: 1,M: 0,Q: 3,H: 2}, QRMaskPattern = {PATTERN000: 0,PATTERN001: 1,PATTERN010: 2,PATTERN011: 3,PATTERN100: 4,PATTERN101: 5,PATTERN110: 6,PATTERN111: 7}, QRUtil = {PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 
            30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],G15: 1335,G18: 7973,G15_MASK: 21522,getBCHTypeInfo: function(a) {
        for (var b = a << 10; 0 <= QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15); )
            b ^= 
            QRUtil.G15 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15);
        return (a << 10 | b) ^ QRUtil.G15_MASK
    },getBCHTypeNumber: function(a) {
        for (var b = a << 12; 0 <= QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18); )
            b ^= QRUtil.G18 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18);
        return a << 12 | b
    },getBCHDigit: function(a) {
        for (var b = 0; 0 != a; )
            b++, a >>>= 1;
        return b
    },getPatternPosition: function(a) {
        return QRUtil.PATTERN_POSITION_TABLE[a - 1]
    },getMask: function(a, b, c) {
        switch (a) {
            case QRMaskPattern.PATTERN000:
                return 0 == (b + c) % 
                2;
            case QRMaskPattern.PATTERN001:
                return 0 == b % 2;
            case QRMaskPattern.PATTERN010:
                return 0 == c % 3;
            case QRMaskPattern.PATTERN011:
                return 0 == (b + c) % 3;
            case QRMaskPattern.PATTERN100:
                return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
            case QRMaskPattern.PATTERN101:
                return 0 == b * c % 2 + b * c % 3;
            case QRMaskPattern.PATTERN110:
                return 0 == (b * c % 2 + b * c % 3) % 2;
            case QRMaskPattern.PATTERN111:
                return 0 == (b * c % 3 + (b + c) % 2) % 2;
            default:
                throw Error("bad maskPattern:" + a);
        }
    },getErrorCorrectPolynomial: function(a) {
        for (var b = new QRPolynomial([1], 0), c = 0; c < 
        a; c++)
            b = b.multiply(new QRPolynomial([1, QRMath.gexp(c)], 0));
        return b
    },getLengthInBits: function(a, b) {
        if (1 <= b && 10 > b)
            switch (a) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw Error("mode:" + a);
            }
        else if (27 > b)
            switch (a) {
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw Error("mode:" + a);
            }
        else if (41 > b)
            switch (a) {
                case QRMode.MODE_NUMBER:
                    return 14;
                case QRMode.MODE_ALPHA_NUM:
                    return 13;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw Error("mode:" + a);
            }
        else
            throw Error("type:" + b);
    },getLostPoint: function(a) {
        for (var b = a.getModuleCount(), c = 0, d = 0; d < b; d++)
            for (var e = 0; e < b; e++) {
                for (var f = 0, h = a.isDark(d, e), g = -1; 1 >= g; g++)
                    if (!(0 > d + g || b <= d + g))
                        for (var j = -1; 1 >= j; j++)
                            0 > e + j || b <= e + j || 0 == g && 0 == j || h == a.isDark(d + g, e + j) && f++;
                5 < f && (c += 3 + f - 5)
            }
        for (d = 0; d < b - 1; d++)
            for (e = 0; e < b - 1; e++)
                if (f = 0, a.isDark(d, e) && f++, a.isDark(d + 1, e) && f++, a.isDark(d, 
                e + 1) && f++, a.isDark(d + 1, e + 1) && f++, 0 == f || 4 == f)
                    c += 3;
        for (d = 0; d < b; d++)
            for (e = 0; e < b - 6; e++)
                a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
        for (e = 0; e < b; e++)
            for (d = 0; d < b - 6; d++)
                a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
        for (e = f = 0; e < b; e++)
            for (d = 0; d < b; d++)
                a.isDark(d, e) && f++;
        a = Math.abs(100 * f / b / b - 50) / 5;
        return c + 10 * a
    }}, QRMath = {glog: function(a) {
        if (1 > a)
            throw Error("glog(" + 
            a + ")");
        return QRMath.LOG_TABLE[a]
    },gexp: function(a) {
        for (; 0 > a; )
            a += 255;
        for (; 256 <= a; )
            a -= 255;
        return QRMath.EXP_TABLE[a]
    },EXP_TABLE: Array(256),LOG_TABLE: Array(256)}, i = 0; 8 > i; i++)
    QRMath.EXP_TABLE[i] = 1 << i;
for (i = 8; 256 > i; i++)
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for (i = 0; 255 > i; i++)
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
function QRPolynomial(a, b) {
    if (void 0 == a.length)
        throw Error(a.length + "/" + b);
    for (var c = 0; c < a.length && 0 == a[c]; )
        c++;
    this.num = Array(a.length - c + b);
    for (var d = 0; d < a.length - c; d++)
        this.num[d] = a[d + c]
}
QRPolynomial.prototype = {get: function(a) {
        return this.num[a]
    },getLength: function() {
        return this.num.length
    },multiply: function(a) {
        for (var b = Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++)
            for (var d = 0; d < a.getLength(); d++)
                b[c + d] ^= QRMath.gexp(QRMath.glog(this.get(c)) + QRMath.glog(a.get(d)));
        return new QRPolynomial(b, 0)
    },mod: function(a) {
        if (0 > this.getLength() - a.getLength())
            return this;
        for (var b = QRMath.glog(this.get(0)) - QRMath.glog(a.get(0)), c = Array(this.getLength()), d = 0; d < this.getLength(); d++)
            c[d] = 
            this.get(d);
        for (d = 0; d < a.getLength(); d++)
            c[d] ^= QRMath.gexp(QRMath.glog(a.get(d)) + b);
        return (new QRPolynomial(c, 0)).mod(a)
    }};
function QRRSBlock(a, b) {
    this.totalCount = a;
    this.dataCount = b
}
QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 
        44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 
        75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 
        117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 
        75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 
        54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
QRRSBlock.getRSBlocks = function(a, b) {
    var c = QRRSBlock.getRsBlockTable(a, b);
    if (void 0 == c)
        throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
    for (var d = c.length / 3, e = [], f = 0; f < d; f++)
        for (var h = c[3 * f + 0], g = c[3 * f + 1], j = c[3 * f + 2], k = 0; k < h; k++)
            e.push(new QRRSBlock(g, j));
    return e
};
QRRSBlock.getRsBlockTable = function(a, b) {
    switch (b) {
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 3]
    }
};
function QRBitBuffer() {
    this.buffer = [];
    this.length = 0
}
QRBitBuffer.prototype = {get: function(a) {
        return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
    },put: function(a, b) {
        for (var c = 0; c < b; c++)
            this.putBit(1 == (a >>> b - c - 1 & 1))
    },getLengthInBits: function() {
        return this.length
    },putBit: function(a) {
        var b = Math.floor(this.length / 8);
        this.buffer.length <= b && this.buffer.push(0);
        a && (this.buffer[b] |= 128 >>> this.length % 8);
        this.length++
    }};
function qScrollbar(a, b, c, d) {
    function e(a) {
        var b = 0;
        if (a.offsetParent)
            for (; a.offsetParent; )
                b += a.offsetTop, a = a.offsetParent;
        return b
    }
    var f = this;
    "object" !== typeof a && (a = document.getElementById(a));
    /android/gi.test(navigator.appVersion);
    /iphone|ipad/gi.test(navigator.appVersion);
    /hp-tablet/gi.test(navigator.appVersion);
    this.isOldIE = function(a) {
        var b = /MSIE ([\d.]+)/.exec(navigator.userAgent), c = !1;
        b && (c = parseInt(b[1]) <= a);
        return c
    };
    this.oldIE = this.isOldIE(8);
    this.reset = function() {
        this._parent = a;
        this._src = 
        new qScroller(b);
        this.auto = c ? c : !1;
        this.eventHandler = d ? d : function() {
        };
        this._up = this._findComponent("scrollbar-up", this._parent);
        this._down = this._findComponent("scrollbar-down", this._parent);
        this._yTrack = this._findComponent("scrollbar-track", this._parent);
        this._yHandle = this._findComponent("scrollbar-handle", this._yTrack);
        var f = parseInt(this._yTrack.offsetHeight * this._src.viewableHeight / this._src.totalHeight);
        this._trackTop = e(this._yTrack);
        this._trackHeight = this._yTrack.offsetHeight;
        this._handleHeight = 
        f;
        if (this._src.totalHeight >= this._src.viewableHeight)
            this._parent.style.visibility = "visible";
        try {
            this._yHandle.style.height = f + "px"
        } catch (g) {
        }
        this._y = this._x = 0;
        this._scrollDist = 5;
        this._tempTarget = this._grabPoint = this._selectFunc = this._scrollTimer = null;
        this._tempDistY = this._tempDistX = 0;
        this._disabled = !1;
        this._pos_start = 0;
        this._ratio = (this._src.totalHeight - this._src.viewableHeight) / (this._trackHeight - this._handleHeight);
        this.scrollCallbackUpFunc = null;
        this.scrollCallbackUpArgs = [];
        this.scrollCallbackdownFunc = 
        null;
        this.scrollCallbackdownArgs = [];
        this.scrollCallbackFunc = null;
        this.scrollCallbackArgs = [];
        this._yHandle.ondragstart = function() {
            return !1
        };
        this._yHandle.onmousedown = function() {
            return !1
        };
        this._removeEvent(this._src.content, "mousewheel", this._scrollbarWheel);
        this._addEvent(this._src.content, "mousewheel", this._scrollbarWheel);
        this._removeEvent(this._src.content, "DOMMouseScroll", this._scrollbarWheel);
        this._addEvent(this._src.content, "DOMMouseScroll", this._scrollbarWheel);
        this._removeEvent(this._yTrack, 
        "mousewheel", this._scrollbarWheel);
        this._addEvent(this._yTrack, "mousewheel", this._scrollbarWheel);
        this._removeEvent(this._yTrack, "DOMMouseScroll", this._scrollbarWheel);
        this._addEvent(this._yTrack, "DOMMouseScroll", this._scrollbarWheel);
        this._removeEvent(this._parent, "mousedown", this._scrollbarClick);
        this._addEvent(this._parent, "mousedown", this._scrollbarClick);
        this._removeEvent(this._src.content, "touchstart", this._scrollTouchStart);
        this._addEvent(this._src.content, "touchstart", this._scrollTouchStart);
        this._removeEvent(this._src.content, "touchend", this._scrollTouchEnd);
        this._addEvent(this._src.content, "touchend", this._scrollTouchEnd);
        this._removeEvent(this._src.content, "touchmove", this._scrollTouchMove);
        this._addEvent(this._src.content, "touchmove", this._scrollTouchMove);
        this._src.reset();
        with (this._yHandle.style)
            left = top = "0px";
        this._moveContent();
        if (this._src.totalHeight < this._src.viewableHeight) {
            if (this._disabled = !0, this._yHandle.style.visibility = "hidden", this.auto)
                this._parent.style.visibility = 
                "hidden"
        } else
            this._disabled = !1, this._yHandle.style.visibility = "visible", this._parent.style.visibility = "visible"
    };
    this.setScrollWheelCallback = function(a, b) {
        b || (b = 1);
        if (!a)
            return !1;
        var c = Array.prototype.slice.call(arguments, 2);
        1 == b ? (this.scrollCallbackUpFunc = a, this.scrollCallbackUpArgs = c) : 2 == b ? (this.scrollCallbackDownFunc = a, this.scrollCallbackDownArgs = c) : (this.scrollCallbackFunc = a, this.scrollCallbackArgs = c)
    };
    this._addEvent = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? 
        a.attachEvent("on" + b, c) : a["on" + b] = c
    };
    this._removeEvent = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = null
    };
    this._findComponent = function(a, b) {
        for (var c = b.childNodes, d = 0; d < c.length; d++)
            if (c[d].className && c[d].className == a)
                return c[d]
    };
    this._scrollbarClick = function(a) {
        if (f._disabled)
            return !1;
        a = a ? a : event;
        if (!a.target)
            a.target = a.srcElement;
        -1 < a.target.className.indexOf("scrollbar-up") ? f._scrollUp(a) : -1 < a.target.className.indexOf("scrollbar-down") ? 
        f._scrollDown(a) : -1 < a.target.className.indexOf("scrollbar-track") ? f._scrollTrack(a) : -1 < a.target.className.indexOf("scrollbar-handle") && f._scrollHandle(a);
        f._tempTarget = a.target;
        f._selectFunc = document.onselectstart;
        document.onselectstart = function() {
            return !1
        };
        f.eventHandler(a.target, "mousedown");
        f._addEvent(document, "mouseup", f._stopScroll, !1);
        f.runScrollCallback();
        return !1
    };
    this._scrollbarDrag = function(a) {
        a = a ? a : event;
        parseInt(f._yHandle.style.top);
        var b = e(f._yTrack), a = a.clientY + document.body.scrollTop - 
        b;
        with (f._yHandle.style)
            top = a >= f._trackHeight - f._handleHeight + f._grabPoint ? f._trackHeight - f._handleHeight + "px" : a <= f._grabPoint ? "0px" : a - f._grabPoint + "px", f._y = parseInt(top);
        f.runScrollCallback();
        f._moveContent()
    };
    this.reCalRatio = function() {
        if (this.oldIE)
            handleHeight = parseInt(this._yHandle.style.height), this._ratio = (this._src.content.offsetHeight - this._src.viewableHeight) / (this._trackHeight - handleHeight)
    };
    this._scrollbarWheel = function(a) {
        a = a ? a : event;
        a.stopPropagation && (a.preventDefault(), a.stopPropagation()) || 
        (a.cancelBubble = !0, a.returnValue = !1);
        var b = 0;
        a.wheelDelta ? (120 <= a.wheelDelta && (b = -1), -120 >= a.wheelDelta && (b = 1)) : a.detail && (b = 0 > a.detail ? -1 : 1);
        f.reCalRatio();
        f.scrollBy(0, 50 * b);
        f.runScrollCallback();
        a.returnValue = !1
    };
    this.runScrollCallback = function() {
        var a = f._yHandle.style.top, b = f._trackHeight - f._handleHeight + "px";
        if ("0px" == a) {
            if (null != this.scrollCallbackUpFunc)
                try {
                    eval(this.scrollCallbackUpFunc).apply(PlayerSider, this.scrollCallbackUpArgs)
                } catch (c) {
                }
        } else if (a == b && null != this.scrollCallbackDownFunc)
            try {
                eval(this.scrollCallbackDownFunc).apply(PlayerSider, 
                this.scrollCallbackDownArgs)
            } catch (d) {
            }
        if (null != this.scrollCallbackFunc)
            try {
                eval(this.scrollCallbackFunc).apply(PlayerSider, this.scrollCallbackArgs)
            } catch (e) {
            }
    };
    this._startScroll = function(a, b) {
        this._tempDistX = a;
        this._tempDistY = b;
        this._scrollTimer = window.setInterval(function() {
            f.scrollBy(f._tempDistX, f._tempDistY)
        }, 40)
    };
    this._stopScroll = function() {
        f._removeEvent(document, "mousemove", f._scrollbarDrag, !1);
        f._removeEvent(document, "mouseup", f._stopScroll, !1);
        document.onselectstart = f._selectFunc ? f._selectFunc : 
        function() {
            return !0
        };
        f._scrollTimer && window.clearInterval(f._scrollTimer);
        f.eventHandler(f._tempTarget, "mouseup")
    };
    this._scrollUp = function() {
        this._startScroll(0, -this._scrollDist)
    };
    this._scrollDown = function() {
        this._startScroll(0, this._scrollDist)
    };
    this._scrollTrack = function(a) {
        this._scroll(0, a.clientY + document.body.scrollTop - this._trackTop - this._handleHeight / 2)
    };
    this._scrollHandle = function(a) {
        this._grabPoint = a.clientY + document.body.scrollTop - e(this._yHandle);
        this._addEvent(document, "mousemove", this._scrollbarDrag, 
        !1)
    };
    this._scroll = function(a, b) {
        var c = this._handleHeight;
        this.oldIE && (c = parseInt(this._yHandle.style.height));
        b > this._trackHeight - c && (b = this._trackHeight - c);
        0 > b && (b = 0);
        this._yHandle.style.top = b + "px";
        this._y = b;
        this._moveContent()
    };
    this._scrollTouchStart = function(a) {
        f.pos_start = (this.hasTouch ? a.touches[0] : a).pageY
    };
    this._scrollTouchMove = function(a) {
        f.scrollBy(0, -((this.hasTouch ? a.touches[0] : a).pageY - f.pos_start));
        a.returnValue = !1
    };
    this._scrollTouchEnd = function() {
        f.runScrollCallback()
    };
    this._moveContent = 
    function() {
        this._src.scrollTo(0, Math.round(this._y * this._ratio))
    };
    this.scrollBy = function(a, b) {
        this._scroll(0, (-this._src._y + b) / this._ratio)
    };
    this.scrollTo = function(a, b) {
        this._scroll(0, b / this._ratio)
    };
    this.swapContent = function(a, b, c) {
        this._removeEvent(this._src.content, "mousewheel", this._scrollbarWheel, !1);
        this._src.swapContent(a, b, c);
        this.reset()
    };
    this.reset()
}
function qScroller(a, b, c) {
    var d = this;
    "object" !== typeof a && (a = document.getElementById(a));
    if (!a) {
        b = a.getElementsByTagName("div");
        for (c = 0; c < b.length; c++)
            -1 < b[c].className.indexOf("scroller-container") && (a = b[c])
    }
    var e = a.offsetParent, c = b = 0;
    if (e)
        b = e.offsetWidth, c = e.offsetHeight;
    this._setPos = function(b, c) {
        b < this.viewableWidth - this.totalWidth && (b = this.viewableWidth - this.totalWidth);
        0 < b && (b = 0);
        c < this.viewableHeight - this.totalHeight && (c = this.viewableHeight - this.totalHeight);
        0 < c && (c = 0);
        this._x = b;
        this._y = c;
        with (a.style)
            left = this._x + "px", top = this._y + "px"
    };
    this.reset = function() {
        this.content = a;
        this.totalHeight = a.offsetHeight;
        this.totalWidth = a.offsetWidth;
        this._y = this._x = 0;
        with (a.style)
            top = left = "0px"
    };
    this.scrollBy = function(a, b) {
        this._setPos(this._x + a, this._y + b)
    };
    this.scrollTo = function(a, b) {
        this._setPos(-a, -b)
    };
    this.stopScroll = function() {
        this.scrollTimer && window.clearInterval(this.scrollTimer)
    };
    this.startScroll = function(a, b) {
        this.stopScroll();
        this.scrollTimer = window.setInterval(function() {
            d.scrollBy(a, 
            b)
        }, 40)
    };
    this.swapContent = function(b, c, d) {
        a = b;
        for (var b = a.getElementsByTagName("div"), e = 0; e < b.length; e++)
            -1 < b[e].className.indexOf("scroller-container") && (a = b[e]);
        if (c)
            this.viewableWidth = c;
        if (d)
            this.viewableHeight = d;
        this.reset()
    };
    this.content = a;
    this.viewableWidth = b;
    this.viewableHeight = c;
    this.totalWidth = a.offsetWidth;
    this.totalHeight = a.offsetHeight;
    this.scrollTimer = null;
    this.reset()
}
var ShowCase = function(a) {
    if ("undefined" == typeof a)
        return !1;
    this.option = a = "object" == typeof a ? a : {};
    this.reset()
};
ShowCase.clickStat = function(a, b) {
    (new Image).src = "http://cps.youku.com/click.html?pf=1&sid=" + window.showid + "&vid=" + window.videoId + "&did=" + a + "&pid=" + b
};
ShowCase.clickPosNum = {btnLeft: 2,btnRight: 3,image: 4,name: 5,btnBuy: 6,shop: 7};
ShowCase.prototype = {reset: function(a) {
        if ("object" == typeof a)
            for (i in a)
                this.option[i] = a[i];
        option = this.option;
        this.parent = option.parent ? document.getElementById(option.parent) : "document";
        if (!this.parent)
            return !1;
        this.parent.innerHTML = "";
        this.stop();
        this.delay = option.delay ? option.delay : 6E3;
        this.rect = option.rect ? option.rect : this.parent.offsetWidth;
        this.rotatetype = option.rotatetype ? option.rotatetype : "product";
        this.perpage = option.perpage ? option.perpage : 2;
        this.initnum = option.initnum ? option.initnum : 1;
        this.data = 
        option.data ? "object" == typeof option.data ? option.data : [] : [];
        if (0 != this.data.length)
            this.total = this.data.length, this.pagesize = Math.ceil(this.total / this.perpage), this.pagenow = -1, this.pages = [], this.pagenums = [], this.timer = null, this.locked = !1, this.imgplace = "http://static.youku.com/index/img/spacer.gif", this.paused = !1, this.pos_start = 0, this.gestures = !1, this.init()
    },paging: function() {
        var a = document.createElement("DIV");
        a.className = "page";
        for (var b = 0; b < this.total; b++) {
            var c = this.data[b], d = document.createElement("UL");
            d.className = "item";
            d.setAttribute("sn", b + 1);
            d.setAttribute("itemid", c.pk_derivative);
            "product" == this.rotatetype ? itemStr = '<li class="i_img"><a target="_blank" href="' + c.url + '" title="' + c.title + '"><img src="' + c.img + '" /></li><li class="i_link"><a href="' + c.url + '" target="_blank">' + c.title + '</a></li><li class="i_desc"><span class="office">\u5b98\u65b9\u6388\u6743</span>' + c.shop + "</li>" : "proinfo" == this.rotatetype && (itemStr = '<li class="i_img"><a target="_blank" onclick="ShowCase.clickStat(' + c.pk_derivative + 
            "," + ShowCase.clickPosNum.image + ')"href="' + c.url + '" title="' + c.title + '"><img src="' + c.img + '" /></li><li class="i_link"><a href="' + c.url + '" target="_blank" onclick="ShowCase.clickStat(' + c.pk_derivative + "," + ShowCase.clickPosNum.name + ')">' + c.title + '</a></li><li class="i_price">\u70ed\u552e: <em>' + c.price + '\u5143</em></li><li class="i_act"><div class="form_btn form_btn_l form_btnpay_l"><a target="_blank" onclick="ShowCase.clickStat(' + c.pk_derivative + "," + ShowCase.clickPosNum.btnBuy + ')" href="' + c.buyurl + 
            '" class="form_btn_text">\u7acb\u5373\u8d2d\u4e70</a></div></li><li class="i_desc" onclick="ShowCase.clickStat(' + c.pk_derivative + "," + ShowCase.clickPosNum.shop + ')">' + c.shop + "</li>");
            d.innerHTML = itemStr;
            a.appendChild(d);
            if (0 == (b + 1) % this.perpage || b + 1 == this.total)
                this.pages.push(a), a.setAttribute("pagenum", Math.ceil((b + 1) / this.perpage)), a.className = "page", a = document.createElement("DIV")
        }
        for (b = 0; b < this.pagesize; b++)
            a = document.createElement("DIV"), a.setAttribute("pagenum", b + 1), this.pagenums.push(a), this.dompager.appendChild(a)
    },
    loadimage: function(a) {
        for (var a = this.pages[a - 1].getElementsByTagName("IMG"), b = 0; b < a.length; b++) {
            var c = a[b];
            c.getAttribute("_src") && (c.setAttribute("src", c.getAttribute("_src")), c.removeAttribute("_src"))
        }
    },initpage: function(a) {
        a = a > this.pagesize ? this.pagesize : 1 > a ? 1 : a;
        return this.domitems.appendChild(this.pages[a - 1])
    },turnpage: function(a, b) {
        if (!(this.locked || a == this.pagenow)) {
            this.locked = !0;
            var c = "";
            "auto" == b ? c = a > this.pagenow ? "left" : "right" : "keep-right" == b ? c = "right" : "keep-left" == b && (c = "left");
            this.pagenums[a - 
            1].className = "current";
            this.pagenums[this.pagenow - 1].className = "";
            if (1 == this.perpage)
                $("lower_shopname").innerHTML = this.data[a - 1].shop;
            this.initpage(a).style.left = "left" == c ? this.rect + "px" : -this.rect + "px";
            for (var d = this, e = "left" == c ? -this.rect : this.rect, f = "left" == c ? 0 : 0, c = 0; 300 >= c; c++)
                (function(a) {
                    window.setTimeout(function() {
                        d.domitems.style.left = e * a / 300 + f + "px"
                    }, a)
                })(c);
            setTimeout(function() {
                d.loadimage(a);
                d.pages[a - 1].style.left = "0px";
                d.domitems.style.left = "0px";
                d.domitems.removeChild(d.pages[d.pagenow - 
                1]);
                d.pagenow = a;
                d.locked = !1
            }, 300);
            "proinfo" == this.rotatetype && this.stop()
        }
    },prev: function(a) {
        this.turnpage(1 > this.pagenow - 1 ? this.pagesize : this.pagenow - 1, "undefined" == typeof a ? "auto" : a)
    },next: function(a) {
        this.turnpage(this.pagenow + 1 > this.pagesize ? 1 : this.pagenow + 1, "undefined" == typeof a ? "auto" : a)
    },start: function() {
        var a = this;
        if (a.paused)
            a.paused = !1;
        if (!this.timer)
            this.timer = setInterval(function() {
                a.paused || a.next("keep-left")
            }, this.delay)
    },stop: function() {
        clearInterval(this.timer);
        this.timer = null
    },pause: function() {
        this.paused = 
        !0
    },init: function() {
        this.dom = document.createElement("DIV");
        this.dom.className = "showcase";
        this.domitems = document.createElement("DIV");
        this.domitems.className = "pages";
        this.dompager = document.createElement("DIV");
        this.dompager.className = "pager";
        this.btnprev = document.createElement("DIV");
        this.btnprev.className = "btnprev";
        this.btnnext = document.createElement("DIV");
        this.btnnext.className = "btnnext";
        this.paging();
        this.dom.appendChild(this.domitems);
        this.dom.appendChild(this.dompager);
        this.dom.appendChild(this.btnprev);
        this.dom.appendChild(this.btnnext);
        this.parent.appendChild(this.dom);
        this.initpage(this.initnum);
        this.loadimage(this.initnum);
        this.pagenow = this.initnum;
        if ("product" == this.rotatetype)
            this.pagenums[this.initnum - 1].className = "current";
        this.bind();
        1 < this.pagesize && this.start()
    },btnClickStat: function(a) {
        var b = this.parent.getElementsByTagName("ul")[0];
        ShowCase.clickStat(b.getAttribute("itemid"), a)
    },bind: function() {
        var a = this, b = navigator.userAgent.toLowerCase().match(/ipad|iphone|ipod|itouch/i);
        if ("product" == 
        this.rotatetype)
            for (var c = 0; c < this.pagesize; c++)
                this.pagenums[c].ontouchstart = this.pagenums[c].onclick = function() {
                    var b = parseInt(this.getAttribute("pagenum"), 10);
                    a.turnpage(b, "auto")
                };
        else if ("proinfo" == this.rotatetype) {
            this.btnprev.style.visibility = "visible";
            this.btnnext.style.visibility = "visible";
            for (c = 0; c < this.pagesize; c++)
                this.pagenums[c].ontouchstart = this.pagenums[c].onclick = function() {
                    var b = parseInt(this.getAttribute("pagenum"), 10);
                    a.turnpage(b, "auto")
                }
        }
        this.btnprev.ontouchstart = this.btnprev.onclick = 
        function() {
            a.btnClickStat(2);
            a.prev("keep-right")
        };
        this.btnnext.ontouchstart = this.btnnext.onclick = function() {
            a.btnClickStat(3);
            a.next("keep-left")
        };
        if (b)
            this.dom.ontouchstart = function(b) {
                b = b.targetTouches[0];
                a.pos_start = b.pageX;
                a.stop()
            }, this.dom.ontouchend = this.dom.ontouchend = function() {
                a.start()
            }, this.dom.ontouchmove = function(b) {
                if (!a.gestures)
                    return b = b.targetTouches[0], b = b.pageX - a.pos_start, 50 <= b ? a.prev("keep-right") : -50 >= b && a.next("keep-left"), !1
            }, this.dompager.ontouchmove = function() {
                return !1
            }, 
            this.dom.ongesturestart = function() {
                a.gestures = !0
            }, this.dom.ongestureend = function() {
                a.gestures = !1
            };
        else if (this.dom.onmouseover = function() {
            a.stop()
        }, "circle" == this.rotatetype || "product" == this.rotatetype)
            this.dom.onmouseout = function() {
                a.start()
            }
    }};
var swfobject = function() {
    var a = navigator, b = function() {
        var b = a.userAgent.toLowerCase(), d = a.platform.toLowerCase(), e = d ? /win/.test(d) : /win/.test(b), d = d ? /mac/.test(d) : /mac/.test(b);
        /webkit/.test(b) && parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1"));
        var f = !1, h = !1, g = !1, j;
        (j = b.match(/msie ([\d.]+)/)) ? f = j[1] : b.match(/firefox\/([\d.]+)/) || ((j = b.match(/chrome\/([\d.]+)/)) ? h = j[1] : b.match(/opera.([\d.]+)/) || (j = b.match(/version\/([\d.]+).*safari/)) && (g = j[1]));
        return {ie: f,win: e,mac: d,safari: g,chrome: h}
    }();
    return {ua: b,createSWF: function(a, d, e, f, h, g) {
            h = {};
            if (d && "object" === typeof d)
                for (var j in d)
                    h[j] = d[j];
            if (e && "object" === typeof e)
                for (var k in e)
                    h.flashvars = "undefined" != typeof h.flashvars ? h.flashvars + ("&" + k + "=" + e[k]) : k + "=" + e[k];
            if (d = document.getElementById(f)) {
                if ("undefined" == typeof a.id)
                    a.id = f;
                var f = "", l;
                for (l in a)
                    if (a[l] != Object.prototype[l])
                        "data" == l.toLowerCase() ? h.movie = a[l] : "styleclass" == l.toLowerCase() ? f += ' class="' + a[l] + '"' : "classid" != l.toLowerCase() && (f += " " + l + '="' + a[l] + '"');
                var a = "", m;
                for (m in h)
                    h[m] != 
                    Object.prototype[m] && (a += '<param name="' + m + '" value="' + h[m] + '" />');
                m = "";
                m = b.ie && b.win ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' + f + ">" + a : '<object type="application/x-shockwave-flash" data="' + h.movie + '" ' + f + ">" + a;
                g && (m += '<div class="player_html5"><div class="picture"style="height:100%"><div style="line-height:460px;"><span style="font-size:18px">\u60a8\u8fd8\u6ca1\u6709\u5b89\u88c5flash\u64ad\u653e\u5668,\u8bf7\u70b9\u51fb<a href="http://www.adobe.com/go/getflash" target="_blank">\u8fd9\u91cc</a>\u5b89\u88c5</span></div></div></div>');
                d.innerHTML = m + "</object>"
            }
        }}
}(), THX = {thx: {id: "thxMODE"},mode: "off",real_mode: "off",handle_on: "modeturn_on",handle_off: "modeturn_off",init: function() {
    },getStatus: function() {
        return this.mode
    },on: function() {
        if (1 == window.playmode)
            this.mode = "on", $("playBox").addClassName("playarea_thx"), setTHX("on");
        if (1 == window.page_v5)
            return !1;
        this.mode = "on";
        $("playBox").addClassName("playBox_thx");
        setTHX("on")
    },off: function() {
        if (1 == window.playmode)
            this.mode = "off", $("playBox").removeClassName("playarea_thx"), setTHX("off");
        if (1 == window.page_v5)
            return !1;
        this.real_mode = this.mode = "off";
        $("playBox").removeClassName("playBox_thx");
        setTHX("off")
    },turn: function() {
        if ("on" == this.mode)
            this.off();
        else if ("off" == this.mode)
            this.on();
        $("player_sidebar") && PlayerSider.turn()
    }};
(function() {
    (function() {
        return function(a) {
            return (a || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "")
        }
    })();
    (function() {
        return function(a, b) {
            Array.property.push.apply(a, b);
            return a1
        }
    })();
    var a = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
    };
    (function() {
        var a = document.createElement("div");
        return function(b) {
            a.innerHTML = b;
            b = a.firstChild;
            a.removeChild(b);
            return b
        }
    })();
    var b = function(a, b) {
        RegExp("(^| )" + b + "( |$)").test(a.className) || (a.className += 
        " " + b)
    };
    window.removeClass = function(a, b) {
        a.className = a.className.replace(RegExp("(^| )" + b + "( |$)"), " ").replace(/^\s+|\s+$/g, "")
    };
    window.show = function(a) {
        if (a)
            a.style.display = "block"
    };
    window.hide = function(a) {
        if (a)
            a.style.display = "none"
    };
    var c = function() {
        var a = document.createElement("div");
        return function(b) {
            var c = b.charAt(0).toUpperCase() + b.slice(1), d = "Webkit Moz O ms".split(" "), c = (b + " " + d.join(c + " ") + c).split(" "), j;
            for (j in c)
                if (b = c[j], !~("" + b).indexOf("-") && void 0 !== a.style[b])
                    return !0;
            return !1
        }
    }(), 
    d = {sidebar: "player_sidebar",barCookie: "__list__",needCookie: !0,barTipCookie: "__listtips__",status: 0,changing: !1,loading: !1,playBoxCon: "playBox",playBoxId: "playerBox",playerClass: "playBox",playerClassThx: "playBox playBox_thx",listId: "playlist_list",listContentId: "vpvideoplaylistv5",listItemHeight: 96,scrollId: "Scrollbar",playlistMode: "playlist_mode",pl: 20,pn: 1,prePn: 0,nextPn: 0,pages: 0,contentTotal: 0,stopFront: !1,stopBack: !1,scrollbar: null,init: function(a) {
            this.listBox = document.getElementById(this.sidebar);
            this.playBox = document.getElementById(this.playBoxId);
            if (!this.listBox)
                return !1;
            this._sideShowControl(a)
        },turn: function() {
            if (!0 == this.changing)
                return !1;
            var a = $$("#" + this.sidebar + " .list_tips")[0];
            hide(a);
            this.changing = !0;
            1 == this.status ? this._fadeRight() : this._fadeLeft()
        },open: function() {
            0 == this.status && this.turn()
        },close: function() {
            1 == this.status && this.turn()
        },genListContent: function(a) {
            _this = this;
            var b = document.getElementById(this.listContentId);
            if (b && "none" != b.style.display) {
                var c = window.singerid || 
                0, g = window.videoId || 0, j = window.f || 0, k = window.o || 1;
                if (j) {
                    this.pl = 50;
                    var l = parseInt(window.p) || 1, m = parseInt(window.tp) || 0;
                    this.pn = Math.ceil((l + 1) / this.pl);
                    this.pages = Math.ceil((m + 1) / this.pl);
                    if (4 < this.pages)
                        this.pages = 4
                } else
                    this.pn = 1, this.pl = 100, this.pages = 2;
                "" == b.innerHTML || a && 1 == a ? (this.nextPn = this.prePn = 0, (b = $("loading_back")) && show(b), nova_update(this.listContentId, "/v_vpvideoplaylistv5/s_" + c + "_f_" + j + "_o_" + k + "_vid_" + g + "_pl_" + this.pl + "_pn_" + this.pn, "", "get", d.initListContent), a && setTimeout("PlayerSider.upTitle", 
                2E3)) : this.initListContent()
            }
        },upTitle: function() {
            var a = $("item_" + window.videoId2).getAttribute("title"), b = $("subtitle");
            if (b && "" != a && b.innerHTML != a)
                b.innerHTML = a, document.title = a
        },updateShowTitle: function() {
            if (currentEncodedVid) {
                var a = $("item_" + currentEncodedVid);
                if (a) {
                    var b = parseInt(a.getAttribute("seq")), a = a.getElementsByTagName("a");
                    a[0].className = a[0].className.replace("current", "");
                    if (1 == b)
                        PlaylistGroup.reload(function() {
                            d.upTitle();
                            var a = $("item_" + window.videoId2);
                            if (a)
                                a = a.getElementsByTagName("a"), 
                                a[0].className = a[0].className.replace("current", "") + " current"
                        });
                    else {
                        this.scrollToItem(b - 1);
                        var b = $("item_" + window.videoId2), a = b.getAttribute("title"), c = $("subtitle");
                        if (c && "" != a && c.innerHTML != a)
                            c.innerHTML = a, document.title = a, a = b.getElementsByTagName("a"), -1 == a[0].className.indexOf("current") && (a[0].className += " current")
                    }
                }
            }
            window.currentEncodedVid = window.videoId2
        },timesControl: function(a) {
            var b = (new Date).getTime();
            if (!window.lastControlTime)
                return window.lastControlTime = b, !0;
            if (b - window.lastControlTime < 
            a)
                return !1;
            window.lastControlTime = b;
            return !0
        },frontPageContent: function() {
            if (!1 == this.timesControl(2E3) || !0 == this.loading || !0 == this.stopFront)
                return !1;
            this.loading = !0;
            _this = this;
            var a = document.getElementById(this.listContentId);
            if (a) {
                var b = b || window.singerid || 0, c = c || window.videoId || 0, d = d || window.f || 0, j = j || window.o || 1;
                if (d) {
                    this.pl = 50;
                    var a = parseInt(window.p) || 1, k = parseInt(window.tp) || 0;
                    this.pn = Math.ceil((a + 1) / this.pl);
                    this.pages = Math.ceil((k + 1) / this.pl);
                    if (4 < this.pages)
                        this.pages = 4
                } else
                    this.pn = 1, 
                    this.pl = 100, this.pages = 2;
                if (4 < this.pn)
                    this.pn = 4;
                if (1 > this.pn - 1)
                    return this.stopFront = !0, this.loading = !1;
                this.prePn = 0 == this.prePn ? this.pn - 1 : this.prePn - 1;
                if (1 > this.prePn)
                    return this.loading = !1, this.stopFront = !0, !1;
                a = document.getElementById(this.listContentId);
                window.listContentInner = a.innerHTML;
                a.innerHTML = '<div class="loading_item"><img src="/v/img/loading_32.gif"><span class="info">\u6b63\u5728\u52a0\u8f7d\uff0c\u8bf7\u7a0d\u5019...</span></div>' + a.innerHTML;
                this.scrollbar.scrollTo(0, 0);
                nova_request(function(a) {
                    _this.loading = 
                    !1;
                    var b = document.getElementById(_this.listContentId);
                    if ("" == a || !a)
                        return b.innerHTML = window.listContentInner, _this.stopFront = !0, !1;
                    for (var c = (new Date).getTime(); 500 > (new Date).getTime() - c; )
                        ;
                    b.innerHTML = a + window.listContentInner;
                    _this.scrollbar.reset();
                    _this.scrollbar.setScrollWheelCallback("PlayerSider.frontPageContent", 1);
                    _this.scrollbar.setScrollWheelCallback("PlayerSider.backPageContent", 2);
                    _this.scrollbar.setScrollWheelCallback("PlayerSider.loadThumbs", 3);
                    _this.scrollbar.scrollTo(0, 49 * this.listItemHeight);
                    a = b.getElementsByTagName("LI");
                    _this.contentTotal = a.length;
                    _this.loadThumbs();
                    _this._initPlaylistMode()
                }, "/v_vpvideoplaylistv5", {s: b,f: d,o: j,vid: c,pl: this.pl,pn: this.prePn})
            }
        },backPageContent: function() {
            if (!1 == this.timesControl(2E3) || !0 == this.loading || !0 == this.stopBack)
                return !1;
            this.loading = !0;
            _this = this;
            var a = document.getElementById(this.listContentId);
            if (a) {
                var b = window.singerid || 0, c = window.videoId || 0, d = window.f || 0, j = window.o || 1;
                if (d) {
                    this.pl = 50;
                    var a = parseInt(window.p) || 1, k = parseInt(window.tp) || 
                    0;
                    this.pn = Math.ceil((a + 1) / this.pl);
                    this.pages = Math.ceil((k + 1) / this.pl);
                    if (4 < this.pages)
                        this.pages = 4
                } else
                    this.pn = 1, this.pl = 100, this.pages = 2;
                if (this.pn + 1 > this.pages)
                    return this.stopBack = !0, this.loading = !1;
                0 == this.nextPn ? this.nextPn = this.pn + 1 : this.nextPn++;
                if (this.nextPn > this.pages)
                    return this.loading = !1, this.stopBack = !0, !1;
                a = document.getElementById(this.listContentId);
                k = a.getElementsByTagName("LI");
                if (k.length < this.pl)
                    return this.loading = !1, this.stopBack = !0, !1;
                window.listContentInner = a.innerHTML;
                a.innerHTML += 
                '<div class="loading_item" ><img src="/v/img/loading_32.gif"><span class="info">\u6b63\u5728\u52a0\u8f7d\uff0c\u8bf7\u7a0d\u5019...</span></div>';
                this.scrollbar.reset();
                this.scrollbar.scrollTo(0, 200 * this.listItemHeight);
                this.contentTotal = k.length;
                nova_request(function(a) {
                    _this.loading = !1;
                    var b = document.getElementById(_this.listContentId);
                    if ("" == a || !a)
                        return _this.stopBack = !0, b.innerHTML = window.listContentInner, _this.scrollbar.reset(), _this.scrollbar.setScrollWheelCallback("PlayerSider.frontPageContent", 
                        1), _this.scrollbar.setScrollWheelCallback("PlayerSider.backPageContent", 2), _this.scrollbar.setScrollWheelCallback("PlayerSider.loadThumbs", 3), !1;
                    for (var c = (new Date).getTime(); 500 > (new Date).getTime() - c; )
                        ;
                    b.innerHTML = window.listContentInner + a;
                    _this.scrollbar.reset();
                    _this.scrollbar.setScrollWheelCallback("PlayerSider.frontPageContent", 1);
                    _this.scrollbar.setScrollWheelCallback("PlayerSider.backPageContent", 2);
                    _this.scrollbar.setScrollWheelCallback("PlayerSider.loadThumbs", 3);
                    _this.scrollbar.scrollTo(0, 
                    (_this.contentTotal - 3) * this.listItemHeight - 48);
                    a = b.getElementsByTagName("LI");
                    _this.contentTotal = a.length;
                    _this.loadThumbs();
                    _this._initPlaylistMode()
                }, "/v_vpvideoplaylistv5", {s: b,f: d,o: j,vid: c,pl: this.pl,pn: this.nextPn})
            }
        },initListContent: function() {
            var a = $("loading_back");
            a && hide(a);
            d._initPlaylistMode();
            d._initScrollBar();
            d.loadThumbs()
        },loadThumbs: function() {
            var a = document.getElementById(d.listId), b = document.getElementById(d.listContentId).getElementsByTagName("LI");
            if (!a || 0 == b.length)
                return !1;
            for (var a = -parseInt(a.style.top), c = Math.ceil(a / this.listItemHeight) - 1, a = c + 5 < b.length - 1 ? c + 5 : b.length - 1, c = 0 < c - 1 ? c - 1 : 0; c <= a; c++)
                if (!(null == b[c] || void 0 == b[c])) {
                    var g = b[c].getElementsByTagName("IMG");
                    if (0 < g.length) {
                        var g = g[0], j = g.getAttribute("_src");
                        if (null != j && g.src !== j)
                            g.src = j, g.removeAttribute("_src")
                    }
                }
        },setPlaylistMode: function(a) {
            try {
                var b = Nova.Cookie.get("P_L_M");
                Nova.Cookie.set("P_F", 1, 30);
                PlayerContinuous(1);
                for (var c = document.getElementById(d.playlistMode).getElementsByTagName("LI"), g = 0; g < c.length; g++)
                    document.getElementById("playmode" + 
                    (g + 1)).className = "";
                document.getElementById("playmode" + a).className = "current";
                if (b == a)
                    return !1;
                Nova.Cookie.set("P_L_M", a, 30);
                for (var j = window.playlistVids, g = b = 0; g < j.length; g++)
                    if (j[g] == window.videoId2) {
                        b = g;
                        break
                    }
                if (1 == a)
                    playerNextVid = window.videoId2;
                else if (2 == a)
                    g = b + 1, g == j.length ? playerNextVid = j[0] : j[g] && (playerNextVid = j[g]);
                else if (3 == a) {
                    var k = Math.floor(Math.random() * j.length);
                    k == b && (k = Math.floor(Math.random() * j.length));
                    playerNextVid = j[k]
                }
                window.playerNextVid = playerNextVid;
                1 == a ? setPlayerLoop(!0) : 
                setPlayerLoop(!1)
            } catch (l) {
                return !1
            }
        },_sideShowControl: function(a) {
            var c = Nova.Cookie.get(this.barCookie), h = $$("#" + this.sidebar + " .listArea")[0] || void 0, g = $$("#" + this.sidebar + " .expandCont")[0] || void 0, j = $$("#" + this.sidebar + " .expandCont .expandlink")[0] || void 0, k = document.getElementById(this.playBoxId);
            if (!h || !g)
                return !1;
            1 == c || !c ? (this.status = 1, show(h), hide(g), k.className = this.playerClass, this.listBox.style.width = "", removeClass(this.listBox, "expandBox"), this.genListContent(a)) : (this.status = 0, k.className = 
            this.playerClassThx, b(this.listBox, "expandBox"), show(g), b(j, "hover"), c = Nova.Cookie.get("P_L_M"), h = Nova.Cookie.get("P_F"), c && 1 == h && 2 != window.playmode && this.genListContent(a));
            g.onclick = function() {
                d.turn()
            };
            this._listControl()
        },_initPlaylistMode: function() {
            try {
                var a = document.getElementById(d.playlistMode);
                if (!a)
                    return !1;
                if (PlayerH5.isSupport)
                    return a.style.display = "none", !1;
                a.style.display = "block";
                var b = Nova.Cookie.get("P_L_M"), c = Nova.Cookie.get("P_F");
                !b && 1 == c && (b = 2, Nova.Cookie.set("P_L_M", b, 30));
                for (var g = a.getElementsByTagName("LI"), a = 0; a < g.length; a++)
                    document.getElementById("playmode" + (a + 1)).className = "";
                if (b && 1 == c)
                    document.getElementById("playmode" + b).className = "current";
                for (var j = document.getElementById(d.listContentId).getElementsByTagName("LI"), c = [], g = null, k = window.videoId2, l = 0, a = 0; a < j.length; a++) {
                    var m = j[a].getAttribute("id").replace("item_", "");
                    m == k && (l = a);
                    c.push(m)
                }
                if (1 == b)
                    g = k, setTimeout("setPlayerLoop(true)", 6E3);
                else if (2 == b)
                    b = l + 1, g = b == c.length ? c[0] : c[b], setTimeout("setPlayerLoop(false)", 
                    6E3);
                else if (3 == b) {
                    var n = Math.floor(Math.random() * c.length);
                    n == l && (n = Math.floor(Math.random() * c.length));
                    g = c[n];
                    setTimeout("setPlayerLoop(false)", 6E3)
                }
                window.playlistVids = c;
                window.playerNextVid = g
            } catch (o) {
                return !1
            }
        },_initScrollBar: function() {
            var a = document.getElementById(this.scrollId);
            if (!a)
                return !1;
            var b = document.getElementById("item_" + window.videoId2);
            b ? (b = b.getAttribute("seq"), "3" == window.playmode ? b -= 2 : b--) : b = 0;
            try {
                this.scrollbar = new qScrollbar(a, this.listId, !1)
            } catch (c) {
            }
            this.scrollbar.scrollTo(0, 
            b * this.listItemHeight);
            this.scrollbar.setScrollWheelCallback("PlayerSider.frontPageContent", 1);
            this.scrollbar.setScrollWheelCallback("PlayerSider.backPageContent", 2);
            this.scrollbar.setScrollWheelCallback("PlayerSider.loadThumbs", 3)
        },scrollToItem: function(a) {
            this.scrollbar.scrollTo(0, (a - 1) * this.listItemHeight)
        },_listControl: function() {
            var a = $$("#" + this.sidebar + " .listcontrol"), b = $$("#" + this.sidebar + " .listcontrol_side");
            0 < a.length && (a = a[0]);
            if (0 < b.length)
                b = b[0];
            else
                return !1;
            var c = window.playmode, 
            g = "tp=1&cp=4006411&cpp=1000595";
            3 == c && (g = "tp=1&cp=4008021&cpp=1000705");
            var j = "tp=1&cp=4006183&cpp=1000595";
            2 == c && (g = "tp=1&cp=4006643&cpp=1000631", j = "tp=1&cp=4006644&cpp=1000631");
            a.innerHTML = 1 == this.status ? '<div class="handle" onclick="Log.log(1, \'' + g + '\')"><a class="btn__hidelist"><em>\u6536\u8d77\u5217\u8868</em></a><label class="label">\u6536\u8d77\u5217\u8868</label></div>' : '<div class="handle handle_s" onclick="Log.log(1, \'' + j + '\')"><a href="javascript:void(0);" class="btn__showlist" title="\u5c55\u5f00\u5217\u8868"><em>\u5c55\u5f00\u5217\u8868</em></a></div>';
            a.style.display = "block";
            try {
                a.onclick = function() {
                    d.turn()
                }, b.onclick = function() {
                    d.turn()
                }
            } catch (k) {
                return !1
            }
        },_tipsControl: function() {
            if (1 == Nova.Cookie.get(this.barTipCookie))
                return !1;
            var b = $$("#" + this.playBoxCon + " .list_tips")[0], c = $$("#" + this.playBoxCon + " .list_tips .tips .handler")[0], h = $$("#" + this.playBoxCon + " .list_tips .tips .content")[0];
            if (!c || !h)
                return !1;
            h.innerHTML = 1 == this.status ? "\u70b9\u51fb\u8fd9\u91cc\u53ef\u4ee5\u9690\u85cf\u64ad\u653e\u5217\u8868" : "\u70b9\u51fb\u8fd9\u91cc\u53ef\u4ee5\u6253\u5f00\u64ad\u653e\u5217\u8868";
            try {
                show(b), setTimeout('hide($$("#"+PlayerSider.playBoxCon+" .list_tips")[0])', 4E3), a(c, "click", function() {
                    Nova.Cookie.set(d.barTipCookie, 1, 360);
                    hide(b)
                })
            } catch (g) {
                return !1
            }
        },_fadeLeft: function() {
            _this = this;
            _this.status = 1;
            this.needCookie && Nova.Cookie.set(this.barCookie, 1, 360);
            var a = document.getElementById(this.sidebar), f = document.getElementById(this.playBoxId), h = $$("#" + this.sidebar + " .listArea")[0], g = $$("#" + this.sidebar + " .expandCont")[0], j = $$("#" + this.sidebar + " .listmask")[0];
            j.style.display = "block";
            a.style.overflow = "hidden";
            if (c("animation"))
                return b(a, "moveleft"), setTimeout(function() {
                    show(h);
                    hide(g);
                    _this._listControl()
                }, 100), setTimeout(function() {
                    removeClass(a, "expandBox");
                    a.style.overflow = "";
                    j.style.display = "none";
                    removeClass(a, "moveleft");
                    f.className = _this.playerClass;
                    d.changing = !1;
                    _this.needCookie && _this.genListContent()
                }, 500), !1;
            var k = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;
            if (k) {
                var l = 0;
                show(h);
                hide(g);
                this._listControl();
                var m = function() {
                    removeClass(a, 
                    "expandBox");
                    a.style.width = _this._Quint.easeIn(l, 30, 300, 15) + "px";
                    15 > l ? (l++, Timer = setTimeout(m, 1)) : (a.style.overflow = "", j.style.display = "none", _this.genListContent(), f.className = _this.playerClass, window.clearInterval(Timer), d.changing = !1)
                };
                setTimeout(m, 100)
            }
        },_fadeRight: function() {
            _this = this;
            _this.status = 0;
            this.needCookie && Nova.Cookie.set(this.barCookie, 0, 360);
            var a = document.getElementById(this.sidebar), f = document.getElementById(this.playBoxId), h = $$("#" + this.sidebar + " .listArea")[0], g = $$("#" + this.sidebar + 
            " .expandCont")[0], j = $$("#" + this.sidebar + " .expandCont .expandlink")[0], k = $$("#" + this.sidebar + " .listmask")[0];
            k.style.display = "block";
            a.style.overflow = "hidden";
            f.className = this.playerClassThx;
            if (c("animation"))
                return b(a, "moveright"), setTimeout(function() {
                    _this._listControl();
                    b(a, "expandBox");
                    removeClass(a, "moveright");
                    hide(h);
                    show(g);
                    b(j, "hover");
                    a.style.overflow = "";
                    k.style.display = "none";
                    d.changing = !1
                }, 500), !1;
            if (f = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth) {
                var l = 
                0, m = function() {
                    a.style.width = _this._Quad.easeOut(l, 330, -300, 35) + "px";
                    35 > l ? (l++, Timer = setTimeout(m, 1)) : (_this._listControl(), b(a, "expandBox"), hide(h), show(g), b(j, "hover"), a.style.overflow = "", k.style.display = "none", window.clearInterval(Timer), d.changing = !1)
                };
                setTimeout(m, 100)
            }
        },_Quad: {easeOut: function(a, b, c, d) {
                return c * a / d + b
            }},_Quint: {easeIn: function(a, b, c, d) {
                return c * a / d + b
            }}};
    window.PageAuto = {autoWidth: 1255,init: function() {
            var b = this;
            this.reSizeBody();
            -1 < navigator.userAgent.indexOf("MSIE") && 9 > parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE") + 
            5)) && -1 == navigator.userAgent.indexOf("Opera") && this.reSizeSideTool();
            a(window, "resize", function() {
                b.reSizeBody();
                b.reSizeSideTool()
            })
        },reSizeBody: function() {
            var a = this._getClientRange().width, b = "page_v";
            2 == window.playmode ? b = "page_list" : 1 == window.playmode && (b = "page_ugc");
            document.body.className = a >= this.autoWidth ? b + " page_thx yk-w1190" : b + " yk-w970"
        },reSizeSideTool: function() {
            var a = this._getClientRange().width, b = document.getElementById("sideTool"), c = document.getElementById("sideToolDark");
            if (!b || !c)
                return !1;
            1024 >= a ? (b.className = "sideTool_s", c.className = "sideTool_s sideTool_dark") : (b.className = "sideTool", c.className = "sideTool sideTool_dark")
        },_getClientRange: function() {
            var a = 0, b = 0, a = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth, b = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
            return {width: a,height: b}
        }};
    window.SideTool = {tool: "sideTool",lightclose: "lightclose",lightopen: "lighton",openwindow: "openVideoSmallWindow",gotop: "goTop",
        init: function() {
            var a = this;
            this.sideT = document.getElementById(this.tool);
            if (PlayerH5.isSupport)
                return this.sideT.style.display = "none", !1;
            this.sideT.style.display = "";
            this.goTop = document.getElementById(this.gotop);
            this.openW = document.getElementById(this.openwindow);
            this.lightclose = document.getElementById(this.lightclose);
            this.lightopen = document.getElementById(this.lightopen);
            this.clientHeight = this.getWindowHeight();
            if (!this.sideT || !this.goTop || !this.openW || !this.lightclose)
                return !1;
            this.sideTool();
            window.onscroll = function() {
                a.sideTool()
            }
        },sideTool: function() {
            var a = this.sideT, b = this.goTop, c = this.openW, d = this.lightclose, j = this.lightopen, k = this.clientHeight, l = this.getScrollTop();
            if (6 == parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE") + 5)))
                a.style.top = l + k - a.offsetHeight - 20 + "px", j.style.top = l + k - 58 - 20 + "px";
            !l || !k || l < k / 2 ? b.style.display = "none" : (b.style.display = "block", b.onclick = function() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0
            });
            c.onclick = function() {
                openMiniWin()
            };
            d.onclick = function() {
                Light.turn()
            };
            j.onclick = function() {
                Light.turn()
            }
        },getWindowWidth: function() {
            return document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth
        },getWindowHeight: function() {
            return document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight
        },getScrollTop: function() {
            return document.documentElement ? document.documentElement.scrollTop + document.body.scrollTop : document.body.scrollTop
        }};
    window.PlayerSider = d;
    window.PlayerSiderWrapper = 
    function(a, b, c, g) {
        sider = d;
        sider.listId = a;
        sider.listContentId = b;
        sider.scrollId = c;
        sider.listItemHeight = g;
        sider.barCookie = "__show_list__";
        sider.needCookie = !1;
        sider.stopFront = !0;
        sider.stopBack = !0;
        sider.init()
    };
    window.videoInfo_tab = function() {
        var a = $$("#videoInfo_tabs ul>li");
        a && a.invoke("observe", "click", function(b) {
            a.each(function(a) {
                a.removeClassName("current");
                a = a.readAttribute("_to");
                $(a).hide()
            });
            b = Event.findElement(b, "li");
            b.addClassName("current");
            b = b.readAttribute("_to");
            $(b).show();
            if ($(b).empty())
                switch ($("vLoading_mvinfo").show(), 
                b) {
                    case "userInfo":
                        nova_update(b, "/v_vpvideoownerinfov5", {id: videoId,playmode: playmode}, "get", function() {
                            $("vLoading_mvinfo").hide()
                        })
                }
        })
    };
    window.closePostTipV5 = function() {
        Nova.Cookie.set("FOLLOW_TIP", 1, 365)
    }
})();
