! function () {
    "use strict";

    function e(e) {
        try {
            if ("undefined" == typeof console) return;
            "error" in console ? console.error(e) : console.log(e)
        } catch (e) {}
    }

    function t(e) {
        return i.innerHTML = '<a href="' + e.replace(/"/g, "&quot;") + '"></a>', i.childNodes[0].getAttribute("href") || ""
    }

    function r(e, t) {
        var r = e.substr(t, 2);
        return parseInt(r, 16)
    }

    function n(n, o) {
        for (var c = "", a = r(n, o), i = o + 2; i < n.length; i += 2) {
            var f = r(n, i) ^ a;
            c += String.fromCharCode(f)
        }
        try {
            c = decodeURIComponent(escape(c))
        } catch (l) {
            e(l)
        }
        return t(c)
    }
    var o = "/cdn-cgi/l/email-protection#",
        c = ".__cf_email__",
        a = "data-cfemail",
        i = document.createElement("div");
    ! function () {
        for (var t = document.getElementsByTagName("a"), r = 0; r < t.length; r++) try {
            var c = t[r],
                a = c.href.indexOf(o);
            a > -1 && (c.href = "mailto:" + n(c.href, a + o.length))
        } catch (i) {
            e(i)
        }
    }(),
    function () {
        for (var t = document.querySelectorAll(c), r = 0; r < t.length; r++) try {
            var o = t[r],
                i = o.parentNode,
                f = o.getAttribute(a);
            if (f) {
                var l = n(f, 0),
                    u = document.createTextNode(l);
                i.replaceChild(u, o)
            }
        } catch (d) {
            e(d)
        }
    }()
}();
