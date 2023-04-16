/*! For license information please see main.42f861bd.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, n, t) {
        var r = t(791),
          a = t(296);
        function l(e) {
          for (
            var n =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              t = 1;
            t < arguments.length;
            t++
          )
            n += "&args[]=" + encodeURIComponent(arguments[t]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function u(e, n) {
          s(e, n), s(e + "Capture", n);
        }
        function s(e, n) {
          for (i[e] = n, e = 0; e < n.length; e++) o.add(n[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, n, t, r, a, l, o) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var n = e[0];
            v[n] = new m(n, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, n, t, r) {
          var a = v.hasOwnProperty(n) ? v[n] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < n.length) ||
              ("o" !== n[0] && "O" !== n[0]) ||
              ("n" !== n[1] && "N" !== n[1])) &&
            ((function (e, n, t, r) {
              if (
                null === n ||
                "undefined" === typeof n ||
                (function (e, n, t, r) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== t
                          ? !t.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, n, t, r)
              )
                return !0;
              if (r) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, a, r) && (t = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(n) &&
                (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === t ? 3 !== a.type && "" : t)
              : ((n = a.attributeName),
                (r = a.attributeNamespace),
                null === t
                  ? e.removeAttribute(n)
                  : ((t =
                      3 === (a = a.type) || (4 === a && !0 === t)
                        ? ""
                        : "" + t),
                    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(g, y);
            v[n] = new m(n, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var n = e.replace(g, y);
              v[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(g, y);
            v[n] = new m(
              n,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          j = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          I = Object.assign;
        function D(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (t) {
              var n = t.stack.trim().match(/\n( *(at )?)/);
              F = (n && n[1]) || "";
            }
          return "\n" + F + e;
        }
        var U = !1;
        function A(e, n) {
          if (!e || U) return "";
          U = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (n)
              if (
                ((n = function () {
                  throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (s) {
                  r = s;
                }
                e.call(n.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = t);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function $(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case S:
              return "Portal";
            case E:
              return "Profiler";
            case _:
              return "StrictMode";
            case L:
              return "Suspense";
            case j:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = n.displayName || n.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (n = e.displayName || null)
                  ? n
                  : V(e.type) || "Memo";
              case T:
                (n = e._payload), (e = e._init);
                try {
                  return V(e(n));
                } catch (t) {}
            }
          return null;
        }
        function B(e) {
          var n = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (n.displayName || "Context") + ".Consumer";
            case 10:
              return (n._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = n.render).displayName || e.name || ""),
                n.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return n;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(n);
            case 8:
              return n === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof n)
                return n.displayName || n.name || null;
              if ("string" === typeof n) return n;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var n = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === n || "radio" === n)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var n = H(e) ? "checked" : "value",
                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                r = "" + e[n];
              if (
                !e.hasOwnProperty(n) &&
                "undefined" !== typeof t &&
                "function" === typeof t.get &&
                "function" === typeof t.set
              ) {
                var a = t.get,
                  l = t.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: t.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[n];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            r = "";
          return (
            e && (r = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== t && (n.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function Y(e, n) {
          var t = n.checked;
          return I({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != t ? t : e._wrapperState.initialChecked,
          });
        }
        function G(e, n) {
          var t = null == n.defaultValue ? "" : n.defaultValue,
            r = null != n.checked ? n.checked : n.defaultChecked;
          (t = W(null != n.value ? n.value : t)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: t,
              controlled:
                "checkbox" === n.type || "radio" === n.type
                  ? null != n.checked
                  : null != n.value,
            });
        }
        function X(e, n) {
          null != (n = n.checked) && b(e, "checked", n, !1);
        }
        function J(e, n) {
          X(e, n);
          var t = W(n.value),
            r = n.type;
          if (null != t)
            "number" === r
              ? ((0 === t && "" === e.value) || e.value != t) &&
                (e.value = "" + t)
              : e.value !== "" + t && (e.value = "" + t);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          n.hasOwnProperty("value")
            ? ee(e, n.type, t)
            : n.hasOwnProperty("defaultValue") &&
              ee(e, n.type, W(n.defaultValue)),
            null == n.checked &&
              null != n.defaultChecked &&
              (e.defaultChecked = !!n.defaultChecked);
        }
        function Z(e, n, t) {
          if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== n.value && null !== n.value)
              )
            )
              return;
            (n = "" + e._wrapperState.initialValue),
              t || n === e.value || (e.value = n),
              (e.defaultValue = n);
          }
          "" !== (t = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== t && (e.name = t);
        }
        function ee(e, n, t) {
          ("number" === n && K(e.ownerDocument) === e) ||
            (null == t
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
        }
        var ne = Array.isArray;
        function te(e, n, t, r) {
          if (((e = e.options), n)) {
            n = {};
            for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
            for (t = 0; t < e.length; t++)
              (a = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== a && (e[t].selected = a),
                a && r && (e[t].defaultSelected = !0);
          } else {
            for (t = "" + W(t), n = null, a = 0; a < e.length; a++) {
              if (e[a].value === t)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== n || e[a].disabled || (n = e[a]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function re(e, n) {
          if (null != n.dangerouslySetInnerHTML) throw Error(l(91));
          return I({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, n) {
          var t = n.value;
          if (null == t) {
            if (((t = n.children), (n = n.defaultValue), null != t)) {
              if (null != n) throw Error(l(92));
              if (ne(t)) {
                if (1 < t.length) throw Error(l(93));
                t = t[0];
              }
              n = t;
            }
            null == n && (n = ""), (t = n);
          }
          e._wrapperState = { initialValue: W(t) };
        }
        function le(e, n) {
          var t = W(n.value),
            r = W(n.defaultValue);
          null != t &&
            ((t = "" + t) !== e.value && (e.value = t),
            null == n.defaultValue &&
              e.defaultValue !== t &&
              (e.defaultValue = t)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var n = e.textContent;
          n === e._wrapperState.initialValue &&
            "" !== n &&
            null !== n &&
            (e.value = n);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, n) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(n)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, n) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = n;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + n.valueOf().toString() + "</svg>",
                    n = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, n);
                  });
                }
              : ce);
        function de(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
              return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, n, t) {
          return null == n || "boolean" === typeof n || "" === n
            ? ""
            : t ||
              "number" !== typeof n ||
              0 === n ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + n).trim()
            : n + "px";
        }
        function ve(e, n) {
          for (var t in ((e = e.style), n))
            if (n.hasOwnProperty(t)) {
              var r = 0 === t.indexOf("--"),
                a = me(t, n[t], r);
              "float" === t && (t = "cssFloat"),
                r ? e.setProperty(t, a) : (e[t] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[n] = pe[e]);
          });
        });
        var ge = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, n) {
          if (n) {
            if (
              ge[e] &&
              (null != n.children || null != n.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(l(60));
              if (
                "object" !== typeof n.dangerouslySetInnerHTML ||
                !("__html" in n.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != n.style && "object" !== typeof n.style)
              throw Error(l(62));
          }
        }
        function be(e, n) {
          if (-1 === e.indexOf("-")) return "string" === typeof n.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var ke = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          xe = null,
          _e = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Se) throw Error(l(280));
            var n = e.stateNode;
            n && ((n = wa(n)), Se(e.stateNode, e.type, n));
          }
        }
        function Ce(e) {
          xe ? (_e ? _e.push(e) : (_e = [e])) : (xe = e);
        }
        function Ne() {
          if (xe) {
            var e = xe,
              n = _e;
            if (((_e = xe = null), Ee(e), n))
              for (e = 0; e < n.length; e++) Ee(n[e]);
          }
        }
        function Pe(e, n) {
          return e(n);
        }
        function Le() {}
        var je = !1;
        function Oe(e, n, t) {
          if (je) return e(n, t);
          je = !0;
          try {
            return Pe(e, n, t);
          } finally {
            (je = !1), (null !== xe || null !== _e) && (Le(), Ne());
          }
        }
        function Te(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var r = wa(t);
          if (null === r) return null;
          t = r[n];
          e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && "function" !== typeof t) throw Error(l(231, n, typeof t));
          return t;
        }
        var ze = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            ze = !1;
          }
        function Me(e, n, t, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          Ie = null,
          De = !1,
          Ue = null,
          Ae = {
            onError: function (e) {
              (Fe = !0), (Ie = e);
            },
          };
        function $e(e, n, t, r, a, l, o, i, u) {
          (Fe = !1), (Ie = null), Me.apply(Ae, arguments);
        }
        function Ve(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 !== (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ve(e) !== e) throw Error(l(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = Ve(e))) throw Error(l(188));
                return n !== e ? null : e;
              }
              for (var t = e, r = n; ; ) {
                var a = t.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    t = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === t) return We(a), e;
                    if (o === r) return We(a), n;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (t.return !== r.return) (t = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === t) {
                      (i = !0), (t = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (t = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === t) {
                        (i = !0), (t = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (t = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (t.alternate !== r) throw Error(l(190));
              }
              if (3 !== t.tag) throw Error(l(188));
              return t.stateNode.current === t ? e : n;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var n = Qe(e);
            if (null !== n) return n;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          en = a.unstable_UserBlockingPriority,
          nn = a.unstable_NormalPriority,
          tn = a.unstable_LowPriority,
          rn = a.unstable_IdlePriority,
          an = null,
          ln = null;
        var on = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((un(e) / sn) | 0)) | 0;
              },
          un = Math.log,
          sn = Math.LN2;
        var cn = 64,
          fn = 4194304;
        function dn(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & t;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = dn(i)) : 0 !== (l &= o) && (r = dn(l));
          } else 0 !== (o = t & ~a) ? (r = dn(o)) : 0 !== l && (r = dn(l));
          if (0 === r) return 0;
          if (
            0 !== n &&
            n !== r &&
            0 === (n & a) &&
            ((a = r & -r) >= (l = n & -n) || (16 === a && 0 !== (4194240 & l)))
          )
            return n;
          if ((0 !== (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
            for (e = e.entanglements, n &= r; 0 < n; )
              (a = 1 << (t = 31 - on(n))), (r |= e[t]), (n &= ~a);
          return r;
        }
        function hn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return n + 5e3;
            default:
              return -1;
          }
        }
        function mn(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vn() {
          var e = cn;
          return 0 === (4194240 & (cn <<= 1)) && (cn = 64), e;
        }
        function gn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function yn(e, n, t) {
          (e.pendingLanes |= n),
            536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(n = 31 - on(n))] = t);
        }
        function bn(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t; ) {
            var r = 31 - on(t),
              a = 1 << r;
            (a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a);
          }
        }
        var kn = 0;
        function wn(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Sn,
          xn,
          _n,
          En,
          Cn,
          Nn = !1,
          Pn = [],
          Ln = null,
          jn = null,
          On = null,
          Tn = new Map(),
          zn = new Map(),
          Rn = [],
          Mn =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Fn(e, n) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ln = null;
              break;
            case "dragenter":
            case "dragleave":
              jn = null;
              break;
            case "mouseover":
            case "mouseout":
              On = null;
              break;
            case "pointerover":
            case "pointerout":
              Tn.delete(n.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zn.delete(n.pointerId);
          }
        }
        function In(e, n, t, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== n && null !== (n = ba(n)) && xn(n),
              e)
            : ((e.eventSystemFlags |= r),
              (n = e.targetContainers),
              null !== a && -1 === n.indexOf(a) && n.push(a),
              e);
        }
        function Dn(e) {
          var n = ya(e.target);
          if (null !== n) {
            var t = Ve(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = Be(t)))
                  return (
                    (e.blockedOn = n),
                    void Cn(e.priority, function () {
                      _n(t);
                    })
                  );
              } else if (
                3 === n &&
                t.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Un(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Gn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t)
              return null !== (n = ba(t)) && xn(n), (e.blockedOn = t), !1;
            var r = new (t = e.nativeEvent).constructor(t.type, t);
            (ke = r), t.target.dispatchEvent(r), (ke = null), n.shift();
          }
          return !0;
        }
        function An(e, n, t) {
          Un(e) && t.delete(n);
        }
        function $n() {
          (Nn = !1),
            null !== Ln && Un(Ln) && (Ln = null),
            null !== jn && Un(jn) && (jn = null),
            null !== On && Un(On) && (On = null),
            Tn.forEach(An),
            zn.forEach(An);
        }
        function Vn(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null),
            Nn ||
              ((Nn = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, $n)));
        }
        function Bn(e) {
          function n(n) {
            return Vn(n, e);
          }
          if (0 < Pn.length) {
            Vn(Pn[0], e);
            for (var t = 1; t < Pn.length; t++) {
              var r = Pn[t];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ln && Vn(Ln, e),
              null !== jn && Vn(jn, e),
              null !== On && Vn(On, e),
              Tn.forEach(n),
              zn.forEach(n),
              t = 0;
            t < Rn.length;
            t++
          )
            (r = Rn[t]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rn.length && null === (t = Rn[0]).blockedOn; )
            Dn(t), null === t.blockedOn && Rn.shift();
        }
        var Wn = k.ReactCurrentBatchConfig,
          Hn = !0;
        function Qn(e, n, t, r) {
          var a = kn,
            l = Wn.transition;
          Wn.transition = null;
          try {
            (kn = 1), Kn(e, n, t, r);
          } finally {
            (kn = a), (Wn.transition = l);
          }
        }
        function qn(e, n, t, r) {
          var a = kn,
            l = Wn.transition;
          Wn.transition = null;
          try {
            (kn = 4), Kn(e, n, t, r);
          } finally {
            (kn = a), (Wn.transition = l);
          }
        }
        function Kn(e, n, t, r) {
          if (Hn) {
            var a = Gn(e, n, t, r);
            if (null === a) Wr(e, n, r, Yn, t), Fn(e, r);
            else if (
              (function (e, n, t, r, a) {
                switch (n) {
                  case "focusin":
                    return (Ln = In(Ln, e, n, t, r, a)), !0;
                  case "dragenter":
                    return (jn = In(jn, e, n, t, r, a)), !0;
                  case "mouseover":
                    return (On = In(On, e, n, t, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Tn.set(l, In(Tn.get(l) || null, e, n, t, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      zn.set(l, In(zn.get(l) || null, e, n, t, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, n, t, r)
            )
              r.stopPropagation();
            else if ((Fn(e, r), 4 & n && -1 < Mn.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && Sn(l),
                  null === (l = Gn(e, n, t, r)) && Wr(e, n, r, Yn, t),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, n, r, null, t);
          }
        }
        var Yn = null;
        function Gn(e, n, t, r) {
          if (((Yn = null), null !== (e = ya((e = we(r))))))
            if (null === (n = Ve(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = Be(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated)
                return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (Yn = e), null;
        }
        function Xn(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case rn:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jn = null,
          Zn = null,
          et = null;
        function nt() {
          if (et) return et;
          var e,
            n,
            t = Zn,
            r = t.length,
            a = "value" in Jn ? Jn.value : Jn.textContent,
            l = a.length;
          for (e = 0; e < r && t[e] === a[e]; e++);
          var o = r - e;
          for (n = 1; n <= o && t[r - n] === a[l - n]; n++);
          return (et = a.slice(e, 1 < n ? 1 - n : void 0));
        }
        function tt(e) {
          var n = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === n && (e = 13)
              : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rt() {
          return !0;
        }
        function at() {
          return !1;
        }
        function lt(e) {
          function n(n, t, r, a, l) {
            for (var o in ((this._reactName = n),
            (this._targetInst = r),
            (this.type = t),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? rt
                : at),
              (this.isPropagationStopped = at),
              this
            );
          }
          return (
            I(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = rt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rt));
              },
              persist: function () {},
              isPersistent: rt,
            }),
            n
          );
        }
        var ot,
          it,
          ut,
          st = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ct = lt(st),
          ft = I({}, st, { view: 0, detail: 0 }),
          dt = lt(ft),
          pt = I({}, ft, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Et,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ut &&
                    (ut && "mousemove" === e.type
                      ? ((ot = e.screenX - ut.screenX),
                        (it = e.screenY - ut.screenY))
                      : (it = ot = 0),
                    (ut = e)),
                  ot);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : it;
            },
          }),
          ht = lt(pt),
          mt = lt(I({}, pt, { dataTransfer: 0 })),
          vt = lt(I({}, ft, { relatedTarget: 0 })),
          gt = lt(
            I({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yt = I({}, st, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bt = lt(yt),
          kt = lt(I({}, st, { data: 0 })),
          wt = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          St = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          xt = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _t(e) {
          var n = this.nativeEvent;
          return n.getModifierState
            ? n.getModifierState(e)
            : !!(e = xt[e]) && !!n[e];
        }
        function Et() {
          return _t;
        }
        var Ct = I({}, ft, {
            key: function (e) {
              if (e.key) {
                var n = wt[e.key] || e.key;
                if ("Unidentified" !== n) return n;
              }
              return "keypress" === e.type
                ? 13 === (e = tt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? St[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Et,
            charCode: function (e) {
              return "keypress" === e.type ? tt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nt = lt(Ct),
          Pt = lt(
            I({}, pt, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Lt = lt(
            I({}, ft, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Et,
            })
          ),
          jt = lt(
            I({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ot = I({}, pt, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tt = lt(Ot),
          zt = [9, 13, 27, 32],
          Rt = c && "CompositionEvent" in window,
          Mt = null;
        c && "documentMode" in document && (Mt = document.documentMode);
        var Ft = c && "TextEvent" in window && !Mt,
          It = c && (!Rt || (Mt && 8 < Mt && 11 >= Mt)),
          Dt = String.fromCharCode(32),
          Ut = !1;
        function At(e, n) {
          switch (e) {
            case "keyup":
              return -1 !== zt.indexOf(n.keyCode);
            case "keydown":
              return 229 !== n.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function $t(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vt = !1;
        var Bt = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wt(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === n ? !!Bt[e.type] : "textarea" === n;
        }
        function Ht(e, n, t, r) {
          Ce(r),
            0 < (n = Qr(n, "onChange")).length &&
              ((t = new ct("onChange", "change", null, t, r)),
              e.push({ event: t, listeners: n }));
        }
        var Qt = null,
          qt = null;
        function Kt(e) {
          Dr(e, 0);
        }
        function Yt(e) {
          if (q(ka(e))) return e;
        }
        function Gt(e, n) {
          if ("change" === e) return n;
        }
        var Xt = !1;
        if (c) {
          var Jt;
          if (c) {
            var Zt = "oninput" in document;
            if (!Zt) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zt = "function" === typeof er.oninput);
            }
            Jt = Zt;
          } else Jt = !1;
          Xt = Jt && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Qt && (Qt.detachEvent("onpropertychange", tr), (qt = Qt = null));
        }
        function tr(e) {
          if ("value" === e.propertyName && Yt(qt)) {
            var n = [];
            Ht(n, qt, e, we(e)), Oe(Kt, n);
          }
        }
        function rr(e, n, t) {
          "focusin" === e
            ? (nr(), (qt = t), (Qt = n).attachEvent("onpropertychange", tr))
            : "focusout" === e && nr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yt(qt);
        }
        function lr(e, n) {
          if ("click" === e) return Yt(n);
        }
        function or(e, n) {
          if ("input" === e || "change" === e) return Yt(n);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e === 1 / n)) ||
                  (e !== e && n !== n)
                );
              };
        function ur(e, n) {
          if (ir(e, n)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof n ||
            null === n
          )
            return !1;
          var t = Object.keys(e),
            r = Object.keys(n);
          if (t.length !== r.length) return !1;
          for (r = 0; r < t.length; r++) {
            var a = t[r];
            if (!f.call(n, a) || !ir(e[a], n[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, n) {
          var t,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((t = e + r.textContent.length), e <= n && t >= n))
                return { node: r, offset: n - e };
              e = t;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? fr(e, n.parentNode)
                  : "contains" in e
                  ? e.contains(n)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function dr() {
          for (var e = window, n = K(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = "string" === typeof n.contentWindow.location.href;
            } catch (r) {
              t = !1;
            }
            if (!t) break;
            n = K((e = n.contentWindow).document);
          }
          return n;
        }
        function pr(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (("input" === n &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === n ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var n = dr(),
            t = e.focusedElem,
            r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            fr(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && pr(t))
              if (
                ((n = r.start),
                void 0 === (e = r.end) && (e = n),
                "selectionStart" in t)
              )
                (t.selectionStart = n),
                  (t.selectionEnd = Math.min(e, t.value.length));
              else if (
                (e =
                  ((n = t.ownerDocument || document) && n.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = t.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(t, l));
                var o = cr(t, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((n = n.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(n), e.extend(o.node, o.offset))
                    : (n.setEnd(o.node, o.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); )
              1 === e.nodeType &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < n.length;
              t++
            )
              ((e = n[t]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function kr(e, n, t) {
          var r =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((n = new ct("onSelect", "select", null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = vr))));
        }
        function wr(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t["Webkit" + e] = "webkit" + n),
            (t["Moz" + e] = "moz" + n),
            t
          );
        }
        var Sr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          xr = {},
          _r = {};
        function Er(e) {
          if (xr[e]) return xr[e];
          if (!Sr[e]) return e;
          var n,
            t = Sr[e];
          for (n in t)
            if (t.hasOwnProperty(n) && n in _r) return (xr[e] = t[n]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Cr = Er("animationend"),
          Nr = Er("animationiteration"),
          Pr = Er("animationstart"),
          Lr = Er("transitionend"),
          jr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Tr(e, n) {
          jr.set(e, n), u(n, [e]);
        }
        for (var zr = 0; zr < Or.length; zr++) {
          var Rr = Or[zr];
          Tr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Tr(Cr, "onAnimationEnd"),
          Tr(Nr, "onAnimationIteration"),
          Tr(Pr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Lr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          );
        function Ir(e, n, t) {
          var r = e.type || "unknown-event";
          (e.currentTarget = t),
            (function (e, n, t, r, a, o, i, u, s) {
              if (($e.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(l(198));
                var c = Ie;
                (Fe = !1), (Ie = null), De || ((De = !0), (Ue = c));
              }
            })(r, n, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, n) {
          n = 0 !== (4 & n);
          for (var t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (n)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Ir(a, i, s), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Ir(a, i, s), (l = u);
                }
            }
          }
          if (De) throw ((e = Ue), (De = !1), (Ue = null), e);
        }
        function Ur(e, n) {
          var t = n[ma];
          void 0 === t && (t = n[ma] = new Set());
          var r = e + "__bubble";
          t.has(r) || (Br(n, e, 2, !1), t.add(r));
        }
        function Ar(e, n, t) {
          var r = 0;
          n && (r |= 4), Br(t, e, r, n);
        }
        var $r = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[$r]) {
            (e[$r] = !0),
              o.forEach(function (n) {
                "selectionchange" !== n &&
                  (Fr.has(n) || Ar(n, !1, e), Ar(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[$r] || ((n[$r] = !0), Ar("selectionchange", !1, n));
          }
        }
        function Br(e, n, t, r) {
          switch (Xn(n)) {
            case 1:
              var a = Qn;
              break;
            case 4:
              a = qn;
              break;
            default:
              a = Kn;
          }
          (t = a.bind(null, n, t, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(n, t, { capture: !0, passive: a })
                : e.addEventListener(n, t, !0)
              : void 0 !== a
              ? e.addEventListener(n, t, { passive: a })
              : e.addEventListener(n, t, !1);
        }
        function Wr(e, n, t, r, a) {
          var l = r;
          if (0 === (1 & n) && 0 === (2 & n) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = l,
              a = we(t),
              o = [];
            e: {
              var i = jr.get(e);
              if (void 0 !== i) {
                var u = ct,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tt(t)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nt;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vt);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vt);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vt;
                    break;
                  case "click":
                    if (2 === t.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = ht;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mt;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Lt;
                    break;
                  case Cr:
                  case Nr:
                  case Pr:
                    u = gt;
                    break;
                  case Lr:
                    u = jt;
                    break;
                  case "scroll":
                    u = dt;
                    break;
                  case "wheel":
                    u = Tt;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bt;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pt;
                }
                var c = 0 !== (4 & n),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Te(h, d)) &&
                        c.push(Hr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, t, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & n)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  t === ke ||
                  !(s = t.relatedTarget || t.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = t.relatedTarget || t.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = Ve(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = ht),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pt),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : ka(u)),
                  (p = null == s ? i : ka(s)),
                  ((i = new c(m, h + "leave", u, t, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", s, t, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(o, i, u, c, !1),
                  null !== s && null !== f && Kr(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? ka(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Gt;
              else if (Wt(i))
                if (Xt) v = or;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Ht(o, v, t, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? ka(r) : window),
                e)
              ) {
                case "focusin":
                  (Wt(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), kr(o, t, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  kr(o, t, a);
              }
              var y;
              if (Rt)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vt
                  ? At(e, t) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === t.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (It &&
                  "ko" !== t.locale &&
                  (Vt || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vt && (y = nt())
                    : ((Zn = "value" in (Jn = a) ? Jn.value : Jn.textContent),
                      (Vt = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new kt(b, e, null, t, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = $t(t)) && (b.data = y))),
                (y = Ft
                  ? (function (e, n) {
                      switch (e) {
                        case "compositionend":
                          return $t(n);
                        case "keypress":
                          return 32 !== n.which ? null : ((Ut = !0), Dt);
                        case "textInput":
                          return (e = n.data) === Dt && Ut ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (Vt)
                        return "compositionend" === e || (!Rt && At(e, n))
                          ? ((e = nt()), (et = Zn = Jn = null), (Vt = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(n.ctrlKey || n.altKey || n.metaKey) ||
                            (n.ctrlKey && n.altKey)
                          ) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case "compositionend":
                          return It && "ko" !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new kt("onBeforeInput", "beforeinput", null, t, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(o, n);
          });
        }
        function Hr(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function Qr(e, n) {
          for (var t = n + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Te(e, t)) && r.unshift(Hr(e, l, a)),
              null != (l = Te(e, n)) && r.push(Hr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, n, t, r, a) {
          for (var l = n._reactName, o = []; null !== t && t !== r; ) {
            var i = t,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Te(t, l)) && o.unshift(Hr(t, u, i))
                : a || (null != (u = Te(t, l)) && o.push(Hr(t, u, i)))),
              (t = t.return);
          }
          0 !== o.length && e.push({ event: n, listeners: o });
        }
        var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Gr, "");
        }
        function Jr(e, n, t) {
          if (((n = Xr(n)), Xr(e) !== n && t)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          na = null;
        function ta(e, n) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof n.children ||
            "number" === typeof n.children ||
            ("object" === typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, n) {
          var t = n,
            r = 0;
          do {
            var a = t.nextSibling;
            if ((e.removeChild(t), a && 8 === a.nodeType))
              if ("/$" === (t = a.data)) {
                if (0 === r) return e.removeChild(a), void Bn(n);
                r--;
              } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
            t = a;
          } while (t);
          Bn(n);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
              if ("/$" === n) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("$" === t || "$!" === t || "$?" === t) {
                if (0 === n) return e;
                n--;
              } else "/$" === t && n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var n = e[da];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[ha] || t[da])) {
              if (
                ((t = n.alternate),
                null !== n.child || (null !== t && null !== t.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((t = e[da])) return t;
                  e = ca(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ka(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          xa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > xa || ((e.current = Sa[xa]), (Sa[xa] = null), xa--);
        }
        function Ca(e, n) {
          xa++, (Sa[xa] = e.current), (e.current = n);
        }
        var Na = {},
          Pa = _a(Na),
          La = _a(!1),
          ja = Na;
        function Oa(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in t) l[a] = n[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                n),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ea(La), Ea(Pa);
        }
        function Ra(e, n, t) {
          if (Pa.current !== Na) throw Error(l(168));
          Ca(Pa, n), Ca(La, t);
        }
        function Ma(e, n, t) {
          var r = e.stateNode;
          if (
            ((n = n.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return t;
          for (var a in (r = r.getChildContext()))
            if (!(a in n)) throw Error(l(108, B(e) || "Unknown", a));
          return I({}, t, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (ja = Pa.current),
            Ca(Pa, e),
            Ca(La, La.current),
            !0
          );
        }
        function Ia(e, n, t) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          t
            ? ((e = Ma(e, n, ja)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(La),
              Ea(Pa),
              Ca(Pa, e))
            : Ea(La),
            Ca(La, t);
        }
        var Da = null,
          Ua = !1,
          Aa = !1;
        function $a(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Va() {
          if (!Aa && null !== Da) {
            Aa = !0;
            var e = 0,
              n = kn;
            try {
              var t = Da;
              for (kn = 1; e < t.length; e++) {
                var r = t[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ua = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Ze, Va), a);
            } finally {
              (kn = n), (Aa = !1);
            }
          }
          return null;
        }
        var Ba = [],
          Wa = 0,
          Ha = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Ga = 1,
          Xa = "";
        function Ja(e, n) {
          (Ba[Wa++] = Qa), (Ba[Wa++] = Ha), (Ha = e), (Qa = n);
        }
        function Za(e, n, t) {
          (qa[Ka++] = Ga), (qa[Ka++] = Xa), (qa[Ka++] = Ya), (Ya = e);
          var r = Ga;
          e = Xa;
          var a = 32 - on(r) - 1;
          (r &= ~(1 << a)), (t += 1);
          var l = 32 - on(n) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ga = (1 << (32 - on(n) + a)) | (t << a) | r),
              (Xa = l + e);
          } else (Ga = (1 << l) | (t << a) | r), (Xa = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function nl(e) {
          for (; e === Ha; )
            (Ha = Ba[--Wa]), (Ba[Wa] = null), (Qa = Ba[--Wa]), (Ba[Wa] = null);
          for (; e === Ya; )
            (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null);
        }
        var tl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, n) {
          var t = Os(5, null, null, 0);
          (t.elementType = "DELETED"),
            (t.stateNode = n),
            (t.return = e),
            null === (n = e.deletions)
              ? ((e.deletions = [t]), (e.flags |= 16))
              : n.push(t);
        }
        function il(e, n) {
          switch (e.tag) {
            case 5:
              var t = e.type;
              return (
                null !==
                  (n =
                    1 !== n.nodeType ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                      ? null
                      : n) &&
                ((e.stateNode = n), (tl = e), (rl = sa(n.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                ((e.stateNode = n), (tl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (n = 8 !== n.nodeType ? null : n) &&
                ((t = null !== Ya ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: n,
                  treeContext: t,
                  retryLane: 1073741824,
                }),
                ((t = Os(18, null, null, 0)).stateNode = n),
                (t.return = e),
                (e.child = t),
                (tl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sl(e) {
          if (al) {
            var n = rl;
            if (n) {
              var t = n;
              if (!il(e, n)) {
                if (ul(e)) throw Error(l(418));
                n = sa(t.nextSibling);
                var r = tl;
                n && il(e, n)
                  ? ol(r, t)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (tl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (tl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          tl = e;
        }
        function fl(e) {
          if (e !== tl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var n;
          if (
            ((n = 3 !== e.tag) &&
              !(n = 5 !== e.tag) &&
              (n =
                "head" !== (n = e.type) &&
                "body" !== n &&
                !ta(e.type, e.memoizedProps)),
            n && (n = rl))
          ) {
            if (ul(e)) throw (dl(), Error(l(418)));
            for (; n; ) ol(e, n), (n = sa(n.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ("/$" === t) {
                    if (0 === n) {
                      rl = sa(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = tl ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function dl() {
          for (var e = rl; e; ) e = sa(e.nextSibling);
        }
        function pl() {
          (rl = tl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = k.ReactCurrentBatchConfig;
        function vl(e, n) {
          if (e && e.defaultProps) {
            for (var t in ((n = I({}, n)), (e = e.defaultProps)))
              void 0 === n[t] && (n[t] = e[t]);
            return n;
          }
          return n;
        }
        var gl = _a(null),
          yl = null,
          bl = null,
          kl = null;
        function wl() {
          kl = bl = yl = null;
        }
        function Sl(e) {
          var n = gl.current;
          Ea(gl), (e._currentValue = n);
        }
        function xl(e, n, t) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
                : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function _l(e, n) {
          (yl = e),
            (kl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & n) && (ki = !0), (e.firstContext = null));
        }
        function El(e) {
          var n = e._currentValue;
          if (kl !== e)
            if (
              ((e = { context: e, memoizedValue: n, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return n;
        }
        var Cl = null;
        function Nl(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function Pl(e, n, t, r) {
          var a = n.interleaved;
          return (
            null === a
              ? ((t.next = t), Nl(n))
              : ((t.next = a.next), (a.next = t)),
            (n.interleaved = t),
            Ll(e, r)
          );
        }
        function Ll(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
            (e.childLanes |= n),
              null !== (t = e.alternate) && (t.childLanes |= n),
              (t = e),
              (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var jl = !1;
        function Ol(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Tl(e, n) {
          (e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zl(e, n) {
          return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Rl(e, n, t) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending;
            return (
              null === a ? (n.next = n) : ((n.next = a.next), (a.next = n)),
              (r.pending = n),
              Ll(e, t)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((n.next = n), Nl(r))
              : ((n.next = a.next), (a.next = n)),
            (r.interleaved = n),
            Ll(e, t)
          );
        }
        function Ml(e, n, t) {
          if (
            null !== (n = n.updateQueue) &&
            ((n = n.shared), 0 !== (4194240 & t))
          ) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        function Fl(e, n) {
          var t = e.updateQueue,
            r = e.alternate;
          if (null !== r && t === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: t.eventTime,
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: t.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (t = t.next);
              } while (null !== t);
              null === l ? (a = l = n) : (l = l.next = n);
            } else a = l = n;
            return (
              (t = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = t)
            );
          }
          null === (e = t.lastBaseUpdate)
            ? (t.firstBaseUpdate = n)
            : (e.next = n),
            (t.lastBaseUpdate = n);
        }
        function Il(e, n, t, r) {
          var a = e.updateQueue;
          jl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = n), (p = t), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      jl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (n = a.shared.interleaved))
            ) {
              a = n;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== n);
            } else null === l && (a.shared.lanes = 0);
            (Fu |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Dl(e, n, t) {
          if (((e = n.effects), (n.effects = null), null !== e))
            for (n = 0; n < e.length; n++) {
              var r = e[n],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = t), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Ul = new r.Component().refs;
        function Al(e, n, t, r) {
          (t =
            null === (t = t(r, (n = e.memoizedState))) || void 0 === t
              ? n
              : I({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var $l = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var r = es(),
              a = ns(e),
              l = zl(r, a);
            (l.payload = n),
              void 0 !== t && null !== t && (l.callback = t),
              null !== (n = Rl(e, l, a)) && (ts(n, e, a, r), Ml(n, e, a));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var r = es(),
              a = ns(e),
              l = zl(r, a);
            (l.tag = 1),
              (l.payload = n),
              void 0 !== t && null !== t && (l.callback = t),
              null !== (n = Rl(e, l, a)) && (ts(n, e, a, r), Ml(n, e, a));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = es(),
              r = ns(e),
              a = zl(t, r);
            (a.tag = 2),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (n = Rl(e, a, r)) && (ts(n, e, r, t), Ml(n, e, r));
          },
        };
        function Vl(e, n, t, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !n.prototype ||
                !n.prototype.isPureReactComponent ||
                !ur(t, r) ||
                !ur(a, l);
        }
        function Bl(e, n, t) {
          var r = !1,
            a = Na,
            l = n.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = El(l))
              : ((a = Ta(n) ? ja : Pa.current),
                (l = (r = null !== (r = n.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Na)),
            (n = new n(t, l)),
            (e.memoizedState =
              null !== n.state && void 0 !== n.state ? n.state : null),
            (n.updater = $l),
            (e.stateNode = n),
            (n._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            n
          );
        }
        function Wl(e, n, t, r) {
          (e = n.state),
            "function" === typeof n.componentWillReceiveProps &&
              n.componentWillReceiveProps(t, r),
            "function" === typeof n.UNSAFE_componentWillReceiveProps &&
              n.UNSAFE_componentWillReceiveProps(t, r),
            n.state !== e && $l.enqueueReplaceState(n, n.state, null);
        }
        function Hl(e, n, t, r) {
          var a = e.stateNode;
          (a.props = t), (a.state = e.memoizedState), (a.refs = Ul), Ol(e);
          var l = n.contextType;
          "object" === typeof l && null !== l
            ? (a.context = El(l))
            : ((l = Ta(n) ? ja : Pa.current), (a.context = Oa(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = n.getDerivedStateFromProps) &&
              (Al(e, n, l, t), (a.state = e.memoizedState)),
            "function" === typeof n.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((n = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              n !== a.state && $l.enqueueReplaceState(a, a.state, null),
              Il(e, t, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, n, t) {
          if (
            null !== (e = t.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(l(309));
                var r = t.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== n &&
                null !== n.ref &&
                "function" === typeof n.ref &&
                n.ref._stringRef === o
                ? n.ref
                : ((n = function (e) {
                    var n = a.refs;
                    n === Ul && (n = a.refs = {}),
                      null === e ? delete n[o] : (n[o] = e);
                  }),
                  (n._stringRef = o),
                  n);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!t._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, n) {
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(n).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Kl(e) {
          return (0, e._init)(e._payload);
        }
        function Yl(e) {
          function n(n, t) {
            if (e) {
              var r = n.deletions;
              null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
            }
          }
          function t(t, r) {
            if (!e) return null;
            for (; null !== r; ) n(t, r), (r = r.sibling);
            return null;
          }
          function r(e, n) {
            for (e = new Map(); null !== n; )
              null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                (n = n.sibling);
            return e;
          }
          function a(e, n) {
            return ((e = zs(e, n)).index = 0), (e.sibling = null), e;
          }
          function o(n, t, r) {
            return (
              (n.index = r),
              e
                ? null !== (r = n.alternate)
                  ? (r = r.index) < t
                    ? ((n.flags |= 2), t)
                    : r
                  : ((n.flags |= 2), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function i(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function u(e, n, t, r) {
            return null === n || 6 !== n.tag
              ? (((n = Is(t, e.mode, r)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function s(e, n, t, r) {
            var l = t.type;
            return l === x
              ? f(e, n, t.props.children, r, t.key)
              : null !== n &&
                (n.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === T &&
                    Kl(l) === n.type))
              ? (((r = a(n, t.props)).ref = Ql(e, n, t)), (r.return = e), r)
              : (((r = Rs(t.type, t.key, t.props, null, e.mode, r)).ref = Ql(
                  e,
                  n,
                  t
                )),
                (r.return = e),
                r);
          }
          function c(e, n, t, r) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Ds(t, e.mode, r)).return = e), n)
              : (((n = a(n, t.children || [])).return = e), n);
          }
          function f(e, n, t, r, l) {
            return null === n || 7 !== n.tag
              ? (((n = Ms(t, e.mode, r, l)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function d(e, n, t) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return ((n = Is("" + n, e.mode, t)).return = e), n;
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return (
                    ((t = Rs(n.type, n.key, n.props, null, e.mode, t)).ref = Ql(
                      e,
                      null,
                      n
                    )),
                    (t.return = e),
                    t
                  );
                case S:
                  return ((n = Ds(n, e.mode, t)).return = e), n;
                case T:
                  return d(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || M(n))
                return ((n = Ms(n, e.mode, t, null)).return = e), n;
              ql(e, n);
            }
            return null;
          }
          function p(e, n, t, r) {
            var a = null !== n ? n.key : null;
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return null !== a ? null : u(e, n, "" + t, r);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return t.key === a ? s(e, n, t, r) : null;
                case S:
                  return t.key === a ? c(e, n, t, r) : null;
                case T:
                  return p(e, n, (a = t._init)(t._payload), r);
              }
              if (ne(t) || M(t)) return null !== a ? null : f(e, n, t, r, null);
              ql(e, t);
            }
            return null;
          }
          function h(e, n, t, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(n, (e = e.get(t) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case T:
                  return h(e, n, t, (0, r._init)(r._payload), a);
              }
              if (ne(r) || M(r))
                return f(n, (e = e.get(t) || null), r, a, null);
              ql(n, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (
              var s = null, c = null, f = l, m = (l = 0), v = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, i[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && n(a, f),
                (l = o(g, l, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === i.length) return t(a, f), al && Ja(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((l = o(f, l, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return al && Ja(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (l = o(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return n(a, e);
                }),
              al && Ja(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = M(u);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var f = (c = null), m = i, v = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && n(a, m),
                (i = o(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return t(a, m), al && Ja(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = o(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return al && Ja(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return n(a, e);
                }),
              al && Ja(a, v),
              c
            );
          }
          return function e(r, l, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === x &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === x) {
                          if (7 === c.tag) {
                            t(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === T &&
                            Kl(s) === c.type)
                        ) {
                          t(r, c.sibling),
                            ((l = a(c, o.props)).ref = Ql(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        t(r, c);
                        break;
                      }
                      n(r, c), (c = c.sibling);
                    }
                    o.type === x
                      ? (((l = Ms(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Rs(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ql(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          t(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        t(r, l);
                        break;
                      }
                      n(r, l), (l = l.sibling);
                    }
                    ((l = Ds(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case T:
                  return e(r, l, (c = o._init)(o._payload), u);
              }
              if (ne(o)) return m(r, l, o, u);
              if (M(o)) return v(r, l, o, u);
              ql(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (t(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (t(r, l), ((l = Is(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : t(r, l);
          };
        }
        var Gl = Yl(!0),
          Xl = Yl(!1),
          Jl = {},
          Zl = _a(Jl),
          eo = _a(Jl),
          no = _a(Jl);
        function to(e) {
          if (e === Jl) throw Error(l(174));
          return e;
        }
        function ro(e, n) {
          switch ((Ca(no, n), Ca(eo, e), Ca(Zl, Jl), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : ue(null, "");
              break;
            default:
              n = ue(
                (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Zl), Ca(Zl, n);
        }
        function ao() {
          Ea(Zl), Ea(eo), Ea(no);
        }
        function lo(e) {
          to(no.current);
          var n = to(Zl.current),
            t = ue(n, e.type);
          n !== t && (Ca(eo, e), Ca(Zl, t));
        }
        function oo(e) {
          eo.current === e && (Ea(Zl), Ea(eo));
        }
        var io = _a(0);
        function uo(e) {
          for (var n = e; null !== n; ) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (
                null !== t &&
                (null === (t = t.dehydrated) ||
                  "$?" === t.data ||
                  "$!" === t.data)
              )
                return n;
            } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
              if (0 !== (128 & n.flags)) return n;
            } else if (null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
          return null;
        }
        var so = [];
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null;
          so.length = 0;
        }
        var fo = k.ReactCurrentDispatcher,
          po = k.ReactCurrentBatchConfig,
          ho = 0,
          mo = null,
          vo = null,
          go = null,
          yo = !1,
          bo = !1,
          ko = 0,
          wo = 0;
        function So() {
          throw Error(l(321));
        }
        function xo(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++)
            if (!ir(e[t], n[t])) return !1;
          return !0;
        }
        function _o(e, n, t, r, a, o) {
          if (
            ((ho = o),
            (mo = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : ui),
            (e = t(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (ko = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (go = vo = null),
                (n.updateQueue = null),
                (fo.current = si),
                (e = t(r, a));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (n = null !== vo && null !== vo.next),
            (ho = 0),
            (go = vo = mo = null),
            (yo = !1),
            n)
          )
            throw Error(l(300));
          return e;
        }
        function Eo() {
          var e = 0 !== ko;
          return (ko = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (mo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function No() {
          if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vo.next;
          var n = null === go ? mo.memoizedState : go.next;
          if (null !== n) (go = n), (vo = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (vo = e).memoizedState,
              baseState: vo.baseState,
              baseQueue: vo.baseQueue,
              queue: vo.queue,
              next: null,
            }),
              null === go ? (mo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function Po(e, n) {
          return "function" === typeof n ? n(e) : n;
        }
        function Lo(e) {
          var n = No(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var r = vo,
            a = r.baseQueue,
            o = t.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (t.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (mo.lanes |= f),
                  (Fu |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              ir(r, n.memoizedState) || (ki = !0),
              (n.memoizedState = r),
              (n.baseState = i),
              (n.baseQueue = s),
              (t.lastRenderedState = r);
          }
          if (null !== (e = t.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (Fu |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function jo(e) {
          var n = No(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var r = t.dispatch,
            a = t.pending,
            o = n.memoizedState;
          if (null !== a) {
            t.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, n.memoizedState) || (ki = !0),
              (n.memoizedState = o),
              null === n.baseQueue && (n.baseState = o),
              (t.lastRenderedState = o);
          }
          return [o, r];
        }
        function Oo() {}
        function To(e, n) {
          var t = mo,
            r = No(),
            a = n(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (ki = !0)),
            (r = r.queue),
            Wo(Mo.bind(null, t, r, e), [e]),
            r.getSnapshot !== n ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((t.flags |= 2048),
              Uo(9, Ro.bind(null, t, r, a, n), void 0, null),
              null === Lu)
            )
              throw Error(l(349));
            0 !== (30 & ho) || zo(t, n, a);
          }
          return a;
        }
        function zo(e, n, t) {
          (e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = mo.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (mo.updateQueue = n),
                (n.stores = [e]))
              : null === (t = n.stores)
              ? (n.stores = [e])
              : t.push(e);
        }
        function Ro(e, n, t, r) {
          (n.value = t), (n.getSnapshot = r), Fo(n) && Io(e);
        }
        function Mo(e, n, t) {
          return t(function () {
            Fo(n) && Io(e);
          });
        }
        function Fo(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !ir(e, t);
          } catch (r) {
            return !0;
          }
        }
        function Io(e) {
          var n = Ll(e, 1);
          null !== n && ts(n, e, 1, -1);
        }
        function Do(e) {
          var n = Co();
          return (
            "function" === typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = ti.bind(null, mo, e)),
            [n.memoizedState, e]
          );
        }
        function Uo(e, n, t, r) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
            null === (n = mo.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (mo.updateQueue = n),
                (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
            e
          );
        }
        function Ao() {
          return No().memoizedState;
        }
        function $o(e, n, t, r) {
          var a = Co();
          (mo.flags |= e),
            (a.memoizedState = Uo(1 | n, t, void 0, void 0 === r ? null : r));
        }
        function Vo(e, n, t, r) {
          var a = No();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== vo) {
            var o = vo.memoizedState;
            if (((l = o.destroy), null !== r && xo(r, o.deps)))
              return void (a.memoizedState = Uo(n, t, l, r));
          }
          (mo.flags |= e), (a.memoizedState = Uo(1 | n, t, l, r));
        }
        function Bo(e, n) {
          return $o(8390656, 8, e, n);
        }
        function Wo(e, n) {
          return Vo(2048, 8, e, n);
        }
        function Ho(e, n) {
          return Vo(4, 2, e, n);
        }
        function Qo(e, n) {
          return Vo(4, 4, e, n);
        }
        function qo(e, n) {
          return "function" === typeof n
            ? ((e = e()),
              n(e),
              function () {
                n(null);
              })
            : null !== n && void 0 !== n
            ? ((e = e()),
              (n.current = e),
              function () {
                n.current = null;
              })
            : void 0;
        }
        function Ko(e, n, t) {
          return (
            (t = null !== t && void 0 !== t ? t.concat([e]) : null),
            Vo(4, 4, qo.bind(null, n, e), t)
          );
        }
        function Yo() {}
        function Go(e, n) {
          var t = No();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && xo(n, r[1])
            ? r[0]
            : ((t.memoizedState = [e, n]), e);
        }
        function Xo(e, n) {
          var t = No();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && xo(n, r[1])
            ? r[0]
            : ((e = e()), (t.memoizedState = [e, n]), e);
        }
        function Jo(e, n, t) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (ki = !0)),
              (e.memoizedState = t))
            : (ir(t, n) ||
                ((t = vn()), (mo.lanes |= t), (Fu |= t), (e.baseState = !0)),
              n);
        }
        function Zo(e, n) {
          var t = kn;
          (kn = 0 !== t && 4 > t ? t : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), n();
          } finally {
            (kn = t), (po.transition = r);
          }
        }
        function ei() {
          return No().memoizedState;
        }
        function ni(e, n, t) {
          var r = ns(e);
          if (
            ((t = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(n, t);
          else if (null !== (t = Pl(e, n, t, r))) {
            ts(t, e, r, es()), li(t, n, r);
          }
        }
        function ti(e, n, t) {
          var r = ns(e),
            a = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(n, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = n.lastRenderedReducer)
            )
              try {
                var o = n.lastRenderedState,
                  i = l(o, t);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = n.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Nl(n))
                      : ((a.next = u.next), (u.next = a)),
                    void (n.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (t = Pl(e, n, a, r)) &&
              (ts(t, e, r, (a = es())), li(t, n, r));
          }
        }
        function ri(e) {
          var n = e.alternate;
          return e === mo || (null !== n && n === mo);
        }
        function ai(e, n) {
          bo = yo = !0;
          var t = e.pending;
          null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n);
        }
        function li(e, n, t) {
          if (0 !== (4194240 & t)) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        var oi = {
            readContext: El,
            useCallback: So,
            useContext: So,
            useEffect: So,
            useImperativeHandle: So,
            useInsertionEffect: So,
            useLayoutEffect: So,
            useMemo: So,
            useReducer: So,
            useRef: So,
            useState: So,
            useDebugValue: So,
            useDeferredValue: So,
            useTransition: So,
            useMutableSource: So,
            useSyncExternalStore: So,
            useId: So,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: El,
            useCallback: function (e, n) {
              return (Co().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: El,
            useEffect: Bo,
            useImperativeHandle: function (e, n, t) {
              return (
                (t = null !== t && void 0 !== t ? t.concat([e]) : null),
                $o(4194308, 4, qo.bind(null, n, e), t)
              );
            },
            useLayoutEffect: function (e, n) {
              return $o(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return $o(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = Co();
              return (
                (n = void 0 === n ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
              );
            },
            useReducer: function (e, n, t) {
              var r = Co();
              return (
                (n = void 0 !== t ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = ni.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: Do,
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = Do(!1),
                n = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Co().memoizedState = e), [n, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var r = mo,
                a = Co();
              if (al) {
                if (void 0 === t) throw Error(l(407));
                t = t();
              } else {
                if (((t = n()), null === Lu)) throw Error(l(349));
                0 !== (30 & ho) || zo(r, n, t);
              }
              a.memoizedState = t;
              var o = { value: t, getSnapshot: n };
              return (
                (a.queue = o),
                Bo(Mo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Uo(9, Ro.bind(null, r, o, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = Co(),
                n = Lu.identifierPrefix;
              if (al) {
                var t = Xa;
                (n =
                  ":" +
                  n +
                  "R" +
                  (t = (Ga & ~(1 << (32 - on(Ga) - 1))).toString(32) + t)),
                  0 < (t = ko++) && (n += "H" + t.toString(32)),
                  (n += ":");
              } else n = ":" + n + "r" + (t = wo++).toString(32) + ":";
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: El,
            useCallback: Go,
            useContext: El,
            useEffect: Wo,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Qo,
            useMemo: Xo,
            useReducer: Lo,
            useRef: Ao,
            useState: function () {
              return Lo(Po);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return Jo(No(), vo.memoizedState, e);
            },
            useTransition: function () {
              return [Lo(Po)[0], No().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: To,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: El,
            useCallback: Go,
            useContext: El,
            useEffect: Wo,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Qo,
            useMemo: Xo,
            useReducer: jo,
            useRef: Ao,
            useState: function () {
              return jo(Po);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              var n = No();
              return null === vo
                ? (n.memoizedState = e)
                : Jo(n, vo.memoizedState, e);
            },
            useTransition: function () {
              return [jo(Po)[0], No().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: To,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, n) {
          try {
            var t = "",
              r = n;
            do {
              (t += $(r)), (r = r.return);
            } while (r);
            var a = t;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: n, stack: a, digest: null };
        }
        function fi(e, n, t) {
          return {
            value: e,
            source: null,
            stack: null != t ? t : null,
            digest: null != n ? n : null,
          };
        }
        function di(e, n) {
          try {
            console.error(n.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function hi(e, n, t) {
          ((t = zl(-1, t)).tag = 3), (t.payload = { element: null });
          var r = n.value;
          return (
            (t.callback = function () {
              Wu || ((Wu = !0), (Hu = r)), di(0, n);
            }),
            t
          );
        }
        function mi(e, n, t) {
          (t = zl(-1, t)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = n.value;
            (t.payload = function () {
              return r(a);
            }),
              (t.callback = function () {
                di(0, n);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (t.callback = function () {
                di(0, n),
                  "function" !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = n.stack;
                this.componentDidCatch(n.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            t
          );
        }
        function vi(e, n, t) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(n, a);
          } else void 0 === (a = r.get(n)) && ((a = new Set()), r.set(n, a));
          a.has(t) || (a.add(t), (e = Es.bind(null, e, n, t)), n.then(e, e));
        }
        function gi(e) {
          do {
            var n;
            if (
              ((n = 13 === e.tag) &&
                (n = null === (n = e.memoizedState) || null !== n.dehydrated),
              n)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, n, t, r, a) {
          return 0 === (1 & e.mode)
            ? (e === n
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (t.flags |= 131072),
                  (t.flags &= -52805),
                  1 === t.tag &&
                    (null === t.alternate
                      ? (t.tag = 17)
                      : (((n = zl(-1, 1)).tag = 2), Rl(t, n, 1))),
                  (t.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = k.ReactCurrentOwner,
          ki = !1;
        function wi(e, n, t, r) {
          n.child = null === e ? Xl(n, null, t, r) : Gl(n, e.child, t, r);
        }
        function Si(e, n, t, r, a) {
          t = t.render;
          var l = n.ref;
          return (
            _l(n, a),
            (r = _o(e, n, t, r, l, a)),
            (t = Eo()),
            null === e || ki
              ? (al && t && el(n), (n.flags |= 1), wi(e, n, r, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, n, a))
          );
        }
        function xi(e, n, t, r, a) {
          if (null === e) {
            var l = t.type;
            return "function" !== typeof l ||
              Ts(l) ||
              void 0 !== l.defaultProps ||
              null !== t.compare ||
              void 0 !== t.defaultProps
              ? (((e = Rs(t.type, null, r, n, n.mode, a)).ref = n.ref),
                (e.return = n),
                (n.child = e))
              : ((n.tag = 15), (n.type = l), _i(e, n, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (t = null !== (t = t.compare) ? t : ur)(o, r) &&
              e.ref === n.ref
            )
              return Wi(e, n, a);
          }
          return (
            (n.flags |= 1),
            ((e = zs(l, r)).ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        function _i(e, n, t, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === n.ref) {
              if (((ki = !1), (n.pendingProps = r = l), 0 === (e.lanes & a)))
                return (n.lanes = e.lanes), Wi(e, n, a);
              0 !== (131072 & e.flags) && (ki = !0);
            }
          }
          return Ni(e, n, t, r, a);
        }
        function Ei(e, n, t) {
          var r = n.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & n.mode))
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(zu, Tu),
                (Tu |= t);
            else {
              if (0 === (1073741824 & t))
                return (
                  (e = null !== l ? l.baseLanes | t : t),
                  (n.lanes = n.childLanes = 1073741824),
                  (n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (n.updateQueue = null),
                  Ca(zu, Tu),
                  (Tu |= e),
                  null
                );
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : t),
                Ca(zu, Tu),
                (Tu |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | t), (n.memoizedState = null))
              : (r = t),
              Ca(zu, Tu),
              (Tu |= r);
          return wi(e, n, a, t), n.child;
        }
        function Ci(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
            ((n.flags |= 512), (n.flags |= 2097152));
        }
        function Ni(e, n, t, r, a) {
          var l = Ta(t) ? ja : Pa.current;
          return (
            (l = Oa(n, l)),
            _l(n, a),
            (t = _o(e, n, t, r, l, a)),
            (r = Eo()),
            null === e || ki
              ? (al && r && el(n), (n.flags |= 1), wi(e, n, t, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, n, a))
          );
        }
        function Pi(e, n, t, r, a) {
          if (Ta(t)) {
            var l = !0;
            Fa(n);
          } else l = !1;
          if ((_l(n, a), null === n.stateNode))
            Bi(e, n), Bl(n, t, r), Hl(n, t, r, a), (r = !0);
          else if (null === e) {
            var o = n.stateNode,
              i = n.memoizedProps;
            o.props = i;
            var u = o.context,
              s = t.contextType;
            "object" === typeof s && null !== s
              ? (s = El(s))
              : (s = Oa(n, (s = Ta(t) ? ja : Pa.current)));
            var c = t.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && Wl(n, o, r, s)),
              (jl = !1);
            var d = n.memoizedState;
            (o.state = d),
              Il(n, r, o, a),
              (u = n.memoizedState),
              i !== r || d !== u || La.current || jl
                ? ("function" === typeof c &&
                    (Al(n, t, c, r), (u = n.memoizedState)),
                  (i = jl || Vl(n, t, i, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (n.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (n.flags |= 4194308),
                      (n.memoizedProps = r),
                      (n.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (n.flags |= 4194308),
                  (r = !1));
          } else {
            (o = n.stateNode),
              Tl(e, n),
              (i = n.memoizedProps),
              (s = n.type === n.elementType ? i : vl(n.type, i)),
              (o.props = s),
              (f = n.pendingProps),
              (d = o.context),
              "object" === typeof (u = t.contextType) && null !== u
                ? (u = El(u))
                : (u = Oa(n, (u = Ta(t) ? ja : Pa.current)));
            var p = t.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Wl(n, o, r, u)),
              (jl = !1),
              (d = n.memoizedState),
              (o.state = d),
              Il(n, r, o, a);
            var h = n.memoizedState;
            i !== f || d !== h || La.current || jl
              ? ("function" === typeof p &&
                  (Al(n, t, p, r), (h = n.memoizedState)),
                (s = jl || Vl(n, t, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (n.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (n.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 1024),
                (r = !1));
          }
          return Li(e, n, t, r, l, a);
        }
        function Li(e, n, t, r, a, l) {
          Ci(e, n);
          var o = 0 !== (128 & n.flags);
          if (!r && !o) return a && Ia(n, t, !1), Wi(e, n, l);
          (r = n.stateNode), (bi.current = n);
          var i =
            o && "function" !== typeof t.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (n.flags |= 1),
            null !== e && o
              ? ((n.child = Gl(n, e.child, null, l)),
                (n.child = Gl(n, null, i, l)))
              : wi(e, n, i, l),
            (n.memoizedState = r.state),
            a && Ia(n, t, !0),
            n.child
          );
        }
        function ji(e) {
          var n = e.stateNode;
          n.pendingContext
            ? Ra(0, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Ra(0, n.context, !1),
            ro(e, n.containerInfo);
        }
        function Oi(e, n, t, r, a) {
          return pl(), hl(a), (n.flags |= 256), wi(e, n, t, r), n.child;
        }
        var Ti,
          zi,
          Ri,
          Mi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ii(e, n, t) {
          var r,
            a = n.pendingProps,
            o = io.current,
            i = !1,
            u = 0 !== (128 & n.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (n.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(io, 1 & o),
            null === e)
          )
            return (
              sl(n),
              null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & n.mode)
                    ? (n.lanes = 1)
                    : "$!" === e.data
                    ? (n.lanes = 8)
                    : (n.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = n.mode),
                      (i = n.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Fs(u, a, 0, null)),
                      (e = Ms(e, a, t, null)),
                      (i.return = n),
                      (e.return = n),
                      (i.sibling = e),
                      (n.child = i),
                      (n.child.memoizedState = Fi(t)),
                      (n.memoizedState = Mi),
                      e)
                    : Di(n, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, n, t, r, a, o, i) {
              if (t)
                return 256 & n.flags
                  ? ((n.flags &= -257), Ui(e, n, i, (r = fi(Error(l(422))))))
                  : null !== n.memoizedState
                  ? ((n.child = e.child), (n.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = n.mode),
                    (r = Fs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Ms(o, a, i, null)).flags |= 2),
                    (r.return = n),
                    (o.return = n),
                    (r.sibling = o),
                    (n.child = r),
                    0 !== (1 & n.mode) && Gl(n, e.child, null, i),
                    (n.child.memoizedState = Fi(i)),
                    (n.memoizedState = Mi),
                    o);
              if (0 === (1 & n.mode)) return Ui(e, n, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ui(e, n, i, (r = fi((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), ki || u)) {
                if (null !== (r = Lu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ll(e, a), ts(r, e, a, -1));
                }
                return ms(), Ui(e, n, i, (r = fi(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((n.flags |= 128),
                  (n.child = e.child),
                  (n = Ns.bind(null, e)),
                  (a._reactRetry = n),
                  null)
                : ((e = o.treeContext),
                  (rl = sa(a.nextSibling)),
                  (tl = n),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ka++] = Ga),
                    (qa[Ka++] = Xa),
                    (qa[Ka++] = Ya),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (Ya = n)),
                  (n = Di(n, r.children)),
                  (n.flags |= 4096),
                  n);
            })(e, n, u, a, r, o, t);
          if (i) {
            (i = a.fallback), (u = n.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && n.child !== o
                ? (((a = n.child).childLanes = 0),
                  (a.pendingProps = s),
                  (n.deletions = null))
                : ((a = zs(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = zs(r, i))
                : ((i = Ms(i, u, t, null)).flags |= 2),
              (i.return = n),
              (a.return = n),
              (a.sibling = i),
              (n.child = a),
              (a = i),
              (i = n.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fi(t)
                  : {
                      baseLanes: u.baseLanes | t,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~t),
              (n.memoizedState = Mi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = zs(i, { mode: "visible", children: a.children })),
            0 === (1 & n.mode) && (a.lanes = t),
            (a.return = n),
            (a.sibling = null),
            null !== e &&
              (null === (t = n.deletions)
                ? ((n.deletions = [e]), (n.flags |= 16))
                : t.push(e)),
            (n.child = a),
            (n.memoizedState = null),
            a
          );
        }
        function Di(e, n) {
          return (
            ((n = Fs(
              { mode: "visible", children: n },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = n)
          );
        }
        function Ui(e, n, t, r) {
          return (
            null !== r && hl(r),
            Gl(n, e.child, null, t),
            ((e = Di(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function Ai(e, n, t) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n), xl(e.return, n, t);
        }
        function $i(e, n, t, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: t,
                tailMode: a,
              })
            : ((l.isBackwards = n),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = t),
              (l.tailMode = a));
        }
        function Vi(e, n, t) {
          var r = n.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((wi(e, n, r.children, t), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (n.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = n.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ai(e, t, n);
                else if (19 === e.tag) Ai(e, t, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(io, r), 0 === (1 & n.mode))) n.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (t = n.child, a = null; null !== t; )
                  null !== (e = t.alternate) && null === uo(e) && (a = t),
                    (t = t.sibling);
                null === (t = a)
                  ? ((a = n.child), (n.child = null))
                  : ((a = t.sibling), (t.sibling = null)),
                  $i(n, !1, a, t, l);
                break;
              case "backwards":
                for (t = null, a = n.child, n.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    n.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = t), (t = a), (a = e);
                }
                $i(n, !0, t, null, l);
                break;
              case "together":
                $i(n, !1, null, null, void 0);
                break;
              default:
                n.memoizedState = null;
            }
          return n.child;
        }
        function Bi(e, n) {
          0 === (1 & n.mode) &&
            null !== e &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function Wi(e, n, t) {
          if (
            (null !== e && (n.dependencies = e.dependencies),
            (Fu |= n.lanes),
            0 === (t & n.childLanes))
          )
            return null;
          if (null !== e && n.child !== e.child) throw Error(l(153));
          if (null !== n.child) {
            for (
              t = zs((e = n.child), e.pendingProps), n.child = t, t.return = n;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((t = t.sibling = zs(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Hi(e, n) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                n = e.tail;
                for (var t = null; null !== n; )
                  null !== n.alternate && (t = n), (n = n.sibling);
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case "collapsed":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r
                  ? n || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            r = 0;
          if (n)
            for (var a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = t), n;
        }
        function qi(e, n, t) {
          var r = n.pendingProps;
          switch ((nl(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(n), null;
            case 1:
            case 17:
              return Ta(n.type) && za(), Qi(n), null;
            case 3:
              return (
                (r = n.stateNode),
                ao(),
                Ea(La),
                Ea(Pa),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fl(n)
                    ? (n.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & n.flags)) ||
                      ((n.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                Qi(n),
                null
              );
            case 5:
              oo(n);
              var a = to(no.current);
              if (((t = n.type), null !== e && null != n.stateNode))
                zi(e, n, t, r),
                  e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(l(166));
                  return Qi(n), null;
                }
                if (((e = to(Zl.current)), fl(n))) {
                  (r = n.stateNode), (t = n.type);
                  var o = n.memoizedProps;
                  switch (
                    ((r[da] = n), (r[pa] = o), (e = 0 !== (1 & n.mode)), t)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Ur(Mr[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      G(r, o), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Ur("invalid", r);
                  }
                  for (var u in (ye(t, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ur("scroll", r);
                    }
                  switch (t) {
                    case "input":
                      Q(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      Q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (n.updateQueue = r), null !== r && (n.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(t)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === t
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(t, { is: r.is }))
                        : ((e = u.createElement(t)),
                          "select" === t &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, t)),
                    (e[da] = n),
                    (e[pa] = r),
                    Ti(e, n),
                    (n.stateNode = e);
                  e: {
                    switch (((u = be(t, r)), t)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Ur(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = Y(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (o in (ye(t, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== t || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ur("scroll", e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (t) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? te(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              te(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (t) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return Qi(n), null;
            case 6:
              if (e && null != n.stateNode) Ri(0, n, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === n.stateNode)
                  throw Error(l(166));
                if (((t = to(no.current)), to(Zl.current), fl(n))) {
                  if (
                    ((r = n.stateNode),
                    (t = n.memoizedProps),
                    (r[da] = n),
                    (o = r.nodeValue !== t) && null !== (e = tl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, t, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, t, 0 !== (1 & e.mode));
                    }
                  o && (n.flags |= 4);
                } else
                  ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(
                    r
                  ))[da] = n),
                    (n.stateNode = r);
              }
              return Qi(n), null;
            case 13:
              if (
                (Ea(io),
                (r = n.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & n.mode) &&
                  0 === (128 & n.flags)
                )
                  dl(), pl(), (n.flags |= 98560), (o = !1);
                else if (((o = fl(n)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = n.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[da] = n;
                  } else
                    pl(),
                      0 === (128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4);
                  Qi(n), (o = !1);
                } else null !== ll && (os(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & n.flags ? n : null;
              }
              return 0 !== (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((n.child.flags |= 8192),
                    0 !== (1 & n.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Ru && (Ru = 3)
                        : ms())),
                  null !== n.updateQueue && (n.flags |= 4),
                  Qi(n),
                  null);
            case 4:
              return (
                ao(), null === e && Vr(n.stateNode.containerInfo), Qi(n), null
              );
            case 10:
              return Sl(n.type._context), Qi(n), null;
            case 19:
              if ((Ea(io), null === (o = n.memoizedState))) return Qi(n), null;
              if (((r = 0 !== (128 & n.flags)), null === (u = o.rendering)))
                if (r) Hi(o, !1);
                else {
                  if (0 !== Ru || (null !== e && 0 !== (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          n.flags |= 128,
                            Hi(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((n.updateQueue = r), (n.flags |= 4)),
                            n.subtreeFlags = 0,
                            r = t,
                            t = n.child;
                          null !== t;

                        )
                          (e = r),
                            ((o = t).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (t = t.sibling);
                        return Ca(io, (1 & io.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Vu &&
                    ((n.flags |= 128),
                    (r = !0),
                    Hi(o, !1),
                    (n.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((n.flags |= 128),
                      (r = !0),
                      null !== (t = e.updateQueue) &&
                        ((n.updateQueue = t), (n.flags |= 4)),
                      Hi(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return Qi(n), null;
                  } else
                    2 * Xe() - o.renderingStartTime > Vu &&
                      1073741824 !== t &&
                      ((n.flags |= 128),
                      (r = !0),
                      Hi(o, !1),
                      (n.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = n.child), (n.child = u))
                  : (null !== (t = o.last) ? (t.sibling = u) : (n.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((n = o.tail),
                  (o.rendering = n),
                  (o.tail = n.sibling),
                  (o.renderingStartTime = Xe()),
                  (n.sibling = null),
                  (t = io.current),
                  Ca(io, r ? (1 & t) | 2 : 1 & t),
                  n)
                : (Qi(n), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== n.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (n.flags |= 8192),
                r && 0 !== (1 & n.mode)
                  ? 0 !== (1073741824 & Tu) &&
                    (Qi(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : Qi(n),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, n.tag));
        }
        function Ki(e, n) {
          switch ((nl(n), n.tag)) {
            case 1:
              return (
                Ta(n.type) && za(),
                65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 3:
              return (
                ao(),
                Ea(La),
                Ea(Pa),
                co(),
                0 !== (65536 & (e = n.flags)) && 0 === (128 & e)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 5:
              return oo(n), null;
            case 13:
              if (
                (Ea(io),
                null !== (e = n.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === n.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 19:
              return Ea(io), null;
            case 4:
              return ao(), null;
            case 10:
              return Sl(n.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Ti = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (zi = function (e, n, t, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = n.stateNode), to(Zl.current);
              var l,
                o = null;
              switch (t) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (o = []);
                  break;
                case "select":
                  (a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(t, r), (t = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (t || (t = {}), (t[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (t || (t = {}), (t[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (t || (t = {}), (t[l] = s[l]));
                    } else t || (o || (o = []), o.push(c, t)), (t = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ur("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              t && (o = o || []).push("style", t);
              var c = o;
              (n.updateQueue = c) && (n.flags |= 4);
            }
          }),
          (Ri = function (e, n, t, r) {
            t !== r && (n.flags |= 4);
          });
        var Yi = !1,
          Gi = !1,
          Xi = "function" === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function Zi(e, n) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (r) {
                _s(e, n, r);
              }
            else t.current = null;
        }
        function eu(e, n, t) {
          try {
            t();
          } catch (r) {
            _s(e, n, r);
          }
        }
        var nu = !1;
        function tu(e, n, t) {
          var r = n.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && eu(n, t, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, n) {
          if (
            null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)
          ) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function au(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), "function" === typeof n ? n(e) : (n.current = e);
          }
        }
        function lu(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), lu(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (n = e.stateNode) &&
              (delete n[da],
              delete n[pa],
              delete n[ma],
              delete n[va],
              delete n[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType
                    ? (n = t.parentNode).insertBefore(e, t)
                    : (n = t).appendChild(e),
                  (null !== (t = t._reactRootContainer) && void 0 !== t) ||
                    null !== n.onclick ||
                    (n.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, n, t), e = e.sibling; null !== e; )
              uu(e, n, t), (e = e.sibling);
        }
        function su(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, n, t), e = e.sibling; null !== e; )
              su(e, n, t), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, n, t) {
          for (t = t.child; null !== t; ) pu(e, n, t), (t = t.sibling);
        }
        function pu(e, n, t) {
          if (ln && "function" === typeof ln.onCommitFiberUnmount)
            try {
              ln.onCommitFiberUnmount(an, t);
            } catch (i) {}
          switch (t.tag) {
            case 5:
              Gi || Zi(t, n);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, n, t),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (t = t.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(t)
                        : e.removeChild(t))
                    : cu.removeChild(t.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (t = t.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, t)
                      : 1 === e.nodeType && ua(e, t),
                    Bn(e))
                  : ua(cu, t.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = t.stateNode.containerInfo),
                (fu = !0),
                du(e, n, t),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gi &&
                null !== (r = t.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      eu(t, n, o),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, n, t);
              break;
            case 1:
              if (
                !Gi &&
                (Zi(t, n),
                "function" === typeof (r = t.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = t.memoizedProps),
                    (r.state = t.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  _s(t, n, i);
                }
              du(e, n, t);
              break;
            case 21:
              du(e, n, t);
              break;
            case 22:
              1 & t.mode
                ? ((Gi = (r = Gi) || null !== t.memoizedState),
                  du(e, n, t),
                  (Gi = r))
                : du(e, n, t);
              break;
            default:
              du(e, n, t);
          }
        }
        function hu(e) {
          var n = e.updateQueue;
          if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new Xi()),
              n.forEach(function (n) {
                var r = Ps.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(r, r));
              });
          }
        }
        function mu(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              try {
                var o = e,
                  i = n,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(l(160));
                pu(o, i, a), (cu = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                _s(a, n, c);
              }
            }
          if (12854 & n.subtreeFlags)
            for (n = n.child; null !== n; ) vu(n, e), (n = n.sibling);
        }
        function vu(e, n) {
          var t = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(n, e), gu(e), 4 & r)) {
                try {
                  tu(3, e, e.return), ru(3, e);
                } catch (v) {
                  _s(e, e.return, v);
                }
                try {
                  tu(5, e, e.return);
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 1:
              mu(n, e), gu(e), 512 & r && null !== t && Zi(t, t.return);
              break;
            case 5:
              if (
                (mu(n, e),
                gu(e),
                512 & r && null !== t && Zi(t, t.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== t ? t.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(a, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? te(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? te(a, !!o.multiple, o.defaultValue, !0)
                              : te(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (v) {
                    _s(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((mu(n, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (mu(n, e),
                gu(e),
                4 & r && null !== t && t.memoizedState.isDehydrated)
              )
                try {
                  Bn(n.containerInfo);
                } catch (v) {
                  _s(e, e.return, v);
                }
              break;
            case 4:
            default:
              mu(n, e), gu(e);
              break;
            case 13:
              mu(n, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    ($u = Xe())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== t && null !== t.memoizedState),
                1 & e.mode
                  ? ((Gi = (c = Gi) || f), mu(n, e), (Gi = c))
                  : mu(n, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Ji = e, f = e.child; null !== f; ) {
                    for (d = Ji = f; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          tu(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (t = p.return);
                            try {
                              (n = r),
                                (m.props = n.memoizedProps),
                                (m.state = n.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              _s(r, t, v);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : wu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(n, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function gu(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (ou(t)) {
                    var r = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    su(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, iu(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              _s(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function yu(e, n, t) {
          (Ji = e), bu(e, n, t);
        }
        function bu(e, n, t) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Yi;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Gi;
                i = Yi;
                var s = Gi;
                if (((Yi = o), (Gi = u) && !s))
                  for (Ji = a; null !== Ji; )
                    (u = (o = Ji).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = o), (Ji = u))
                        : Su(a);
                for (; null !== l; ) (Ji = l), bu(l, n, t), (l = l.sibling);
                (Ji = a), (Yi = i), (Gi = s);
              }
              ku(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Ji = l))
                : ku(e);
          }
        }
        function ku(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            if (0 !== (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 !== (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || ru(5, n);
                      break;
                    case 1:
                      var r = n.stateNode;
                      if (4 & n.flags && !Gi)
                        if (null === t) r.componentDidMount();
                        else {
                          var a =
                            n.elementType === n.type
                              ? t.memoizedProps
                              : vl(n.type, t.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            t.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = n.updateQueue;
                      null !== o && Dl(n, o, r);
                      break;
                    case 3:
                      var i = n.updateQueue;
                      if (null !== i) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Dl(n, i, t);
                      }
                      break;
                    case 5:
                      var u = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = u;
                        var s = n.memoizedProps;
                        switch (n.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && t.focus();
                            break;
                          case "img":
                            s.src && (t.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var c = n.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bn(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Gi || (512 & n.flags && au(n));
              } catch (p) {
                _s(n, n.return, p);
              }
            }
            if (n === e) {
              Ji = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), (Ji = t);
              break;
            }
            Ji = n.return;
          }
        }
        function wu(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            if (n === e) {
              Ji = null;
              break;
            }
            var t = n.sibling;
            if (null !== t) {
              (t.return = n.return), (Ji = t);
              break;
            }
            Ji = n.return;
          }
        }
        function Su(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            try {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  var t = n.return;
                  try {
                    ru(4, n);
                  } catch (u) {
                    _s(n, t, u);
                  }
                  break;
                case 1:
                  var r = n.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = n.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      _s(n, a, u);
                    }
                  }
                  var l = n.return;
                  try {
                    au(n);
                  } catch (u) {
                    _s(n, l, u);
                  }
                  break;
                case 5:
                  var o = n.return;
                  try {
                    au(n);
                  } catch (u) {
                    _s(n, o, u);
                  }
              }
            } catch (u) {
              _s(n, n.return, u);
            }
            if (n === e) {
              Ji = null;
              break;
            }
            var i = n.sibling;
            if (null !== i) {
              (i.return = n.return), (Ji = i);
              break;
            }
            Ji = n.return;
          }
        }
        var xu,
          _u = Math.ceil,
          Eu = k.ReactCurrentDispatcher,
          Cu = k.ReactCurrentOwner,
          Nu = k.ReactCurrentBatchConfig,
          Pu = 0,
          Lu = null,
          ju = null,
          Ou = 0,
          Tu = 0,
          zu = _a(0),
          Ru = 0,
          Mu = null,
          Fu = 0,
          Iu = 0,
          Du = 0,
          Uu = null,
          Au = null,
          $u = 0,
          Vu = 1 / 0,
          Bu = null,
          Wu = !1,
          Hu = null,
          Qu = null,
          qu = !1,
          Ku = null,
          Yu = 0,
          Gu = 0,
          Xu = null,
          Ju = -1,
          Zu = 0;
        function es() {
          return 0 !== (6 & Pu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== Ou
            ? Ou & -Ou
            : null !== ml.transition
            ? (0 === Zu && (Zu = vn()), Zu)
            : 0 !== (e = kn)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xn(e.type));
        }
        function ts(e, n, t, r) {
          if (50 < Gu) throw ((Gu = 0), (Xu = null), Error(l(185)));
          yn(e, t, r),
            (0 !== (2 & Pu) && e === Lu) ||
              (e === Lu && (0 === (2 & Pu) && (Iu |= t), 4 === Ru && is(e, Ou)),
              rs(e, r),
              1 === t &&
                0 === Pu &&
                0 === (1 & n.mode) &&
                ((Vu = Xe() + 500), Ua && Va()));
        }
        function rs(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (
              var t = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - on(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (i & t) && 0 === (i & r)) || (a[o] = hn(i, n))
                : u <= n && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, n);
          var r = pn(e, e === Lu ? Ou : 0);
          if (0 === r)
            null !== t && Ke(t),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((n = r & -r), e.callbackPriority !== n)) {
            if ((null != t && Ke(t), 1 === n))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), $a(e);
                  })(us.bind(null, e))
                : $a(us.bind(null, e)),
                oa(function () {
                  0 === (6 & Pu) && Va();
                }),
                (t = null);
            else {
              switch (wn(r)) {
                case 1:
                  t = Ze;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = rn;
              }
              t = Ls(t, as.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function as(e, n) {
          if (((Ju = -1), (Zu = 0), 0 !== (6 & Pu))) throw Error(l(327));
          var t = e.callbackNode;
          if (Ss() && e.callbackNode !== t) return null;
          var r = pn(e, e === Lu ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n) n = vs(e, r);
          else {
            n = r;
            var a = Pu;
            Pu |= 2;
            var o = hs();
            for (
              (Lu === e && Ou === n) ||
              ((Bu = null), (Vu = Xe() + 500), ds(e, n));
              ;

            )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            wl(),
              (Eu.current = o),
              (Pu = a),
              null !== ju ? (n = 0) : ((Lu = null), (Ou = 0), (n = Ru));
          }
          if (0 !== n) {
            if (
              (2 === n && 0 !== (a = mn(e)) && ((r = a), (n = ls(e, a))),
              1 === n)
            )
              throw ((t = Mu), ds(e, 0), is(e, r), rs(e, Xe()), t);
            if (6 === n) is(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var n = e; ; ) {
                      if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                          for (var r = 0; r < t.length; r++) {
                            var a = t[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                        (t.return = n), (n = t);
                      else {
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                          if (null === n.return || n.return === e) return !0;
                          n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (n = vs(e, r)) &&
                    0 !== (o = mn(e)) &&
                    ((r = o), (n = ls(e, o))),
                  1 === n))
              )
                throw ((t = Mu), ds(e, 0), is(e, r), rs(e, Xe()), t);
              switch (((e.finishedWork = a), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  ws(e, Au, Bu);
                  break;
                case 3:
                  if (
                    (is(e, r),
                    (130023424 & r) === r && 10 < (n = $u + 500 - Xe()))
                  ) {
                    if (0 !== pn(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ws.bind(null, e, Au, Bu), n);
                    break;
                  }
                  ws(e, Au, Bu);
                  break;
                case 4:
                  if ((is(e, r), (4194240 & r) === r)) break;
                  for (n = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - on(r);
                    (o = 1 << i), (i = n[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _u(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ws.bind(null, e, Au, Bu), r);
                    break;
                  }
                  ws(e, Au, Bu);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return rs(e, Xe()), e.callbackNode === t ? as.bind(null, e) : null;
        }
        function ls(e, n) {
          var t = Uu;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, n).flags |= 256),
            2 !== (e = vs(e, n)) && ((n = Au), (Au = t), null !== n && os(n)),
            e
          );
        }
        function os(e) {
          null === Au ? (Au = e) : Au.push.apply(Au, e);
        }
        function is(e, n) {
          for (
            n &= ~Du,
              n &= ~Iu,
              e.suspendedLanes |= n,
              e.pingedLanes &= ~n,
              e = e.expirationTimes;
            0 < n;

          ) {
            var t = 31 - on(n),
              r = 1 << t;
            (e[t] = -1), (n &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Pu)) throw Error(l(327));
          Ss();
          var n = pn(e, 0);
          if (0 === (1 & n)) return rs(e, Xe()), null;
          var t = vs(e, n);
          if (0 !== e.tag && 2 === t) {
            var r = mn(e);
            0 !== r && ((n = r), (t = ls(e, r)));
          }
          if (1 === t) throw ((t = Mu), ds(e, 0), is(e, n), rs(e, Xe()), t);
          if (6 === t) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            ws(e, Au, Bu),
            rs(e, Xe()),
            null
          );
        }
        function ss(e, n) {
          var t = Pu;
          Pu |= 1;
          try {
            return e(n);
          } finally {
            0 === (Pu = t) && ((Vu = Xe() + 500), Ua && Va());
          }
        }
        function cs(e) {
          null !== Ku && 0 === Ku.tag && 0 === (6 & Pu) && Ss();
          var n = Pu;
          Pu |= 1;
          var t = Nu.transition,
            r = kn;
          try {
            if (((Nu.transition = null), (kn = 1), e)) return e();
          } finally {
            (kn = r), (Nu.transition = t), 0 === (6 & (Pu = n)) && Va();
          }
        }
        function fs() {
          (Tu = zu.current), Ea(zu);
        }
        function ds(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), aa(t)), null !== ju))
            for (t = ju.return; null !== t; ) {
              var r = t;
              switch ((nl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  ao(), Ea(La), Ea(Pa), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ea(io);
                  break;
                case 10:
                  Sl(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              t = t.return;
            }
          if (
            ((Lu = e),
            (ju = e = zs(e.current, null)),
            (Ou = Tu = n),
            (Ru = 0),
            (Mu = null),
            (Du = Iu = Fu = 0),
            (Au = Uu = null),
            null !== Cl)
          ) {
            for (n = 0; n < Cl.length; n++)
              if (null !== (r = (t = Cl[n]).interleaved)) {
                t.interleaved = null;
                var a = r.next,
                  l = t.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                t.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function ps(e, n) {
          for (;;) {
            var t = ju;
            try {
              if ((wl(), (fo.current = oi), yo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (go = vo = mo = null),
                (bo = !1),
                (ko = 0),
                (Cu.current = null),
                null === t || null === t.return)
              ) {
                (Ru = 1), (Mu = n), (ju = null);
                break;
              }
              e: {
                var o = e,
                  i = t.return,
                  u = t,
                  s = n;
                if (
                  ((n = Ou),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      yi(h, i, u, 0, n),
                      1 & h.mode && vi(o, c, n),
                      (s = c);
                    var m = (n = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (n.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & n)) {
                    vi(o, c, n), ms();
                    break e;
                  }
                  s = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var g = gi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, n),
                      hl(ci(s, u));
                    break e;
                  }
                }
                (o = s = ci(s, u)),
                  4 !== Ru && (Ru = 2),
                  null === Uu ? (Uu = [o]) : Uu.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (n &= -n),
                        (o.lanes |= n),
                        Fl(o, hi(0, s, n));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (n &= -n),
                          (o.lanes |= n),
                          Fl(o, mi(o, u, n));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ks(t);
            } catch (k) {
              (n = k), ju === t && null !== t && (ju = t = t.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Eu.current;
          return (Eu.current = oi), null === e ? oi : e;
        }
        function ms() {
          (0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
            null === Lu ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Iu)) ||
              is(Lu, Ou);
        }
        function vs(e, n) {
          var t = Pu;
          Pu |= 2;
          var r = hs();
          for ((Lu === e && Ou === n) || ((Bu = null), ds(e, n)); ; )
            try {
              gs();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((wl(), (Pu = t), (Eu.current = r), null !== ju))
            throw Error(l(261));
          return (Lu = null), (Ou = 0), Ru;
        }
        function gs() {
          for (; null !== ju; ) bs(ju);
        }
        function ys() {
          for (; null !== ju && !Ye(); ) bs(ju);
        }
        function bs(e) {
          var n = xu(e.alternate, e, Tu);
          (e.memoizedProps = e.pendingProps),
            null === n ? ks(e) : (ju = n),
            (Cu.current = null);
        }
        function ks(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 === (32768 & n.flags))) {
              if (null !== (t = qi(t, n, Tu))) return void (ju = t);
            } else {
              if (null !== (t = Ki(t, n)))
                return (t.flags &= 32767), void (ju = t);
              if (null === e) return (Ru = 6), void (ju = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (ju = n);
            ju = n = e;
          } while (null !== n);
          0 === Ru && (Ru = 5);
        }
        function ws(e, n, t) {
          var r = kn,
            a = Nu.transition;
          try {
            (Nu.transition = null),
              (kn = 1),
              (function (e, n, t, r) {
                do {
                  Ss();
                } while (null !== Ku);
                if (0 !== (6 & Pu)) throw Error(l(327));
                t = e.finishedWork;
                var a = e.finishedLanes;
                if (null === t) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  t === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= n),
                      (e.mutableReadLanes &= n),
                      (e.entangledLanes &= n),
                      (n = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var a = 31 - on(t),
                        l = 1 << a;
                      (n[a] = 0), (r[a] = -1), (e[a] = -1), (t &= ~l);
                    }
                  })(e, o),
                  e === Lu && ((ju = Lu = null), (Ou = 0)),
                  (0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ls(nn, function () {
                      return Ss(), null;
                    })),
                  (o = 0 !== (15990 & t.flags)),
                  0 !== (15990 & t.subtreeFlags) || o)
                ) {
                  (o = Nu.transition), (Nu.transition = null);
                  var i = kn;
                  kn = 1;
                  var u = Pu;
                  (Pu |= 4),
                    (Cu.current = null),
                    (function (e, n) {
                      if (((ea = Hn), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var t = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (t =
                                ((t = e.ownerDocument) && t.defaultView) ||
                                window).getSelection && t.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              t = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                t.nodeType, o.nodeType;
                              } catch (w) {
                                t = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              n: for (;;) {
                                for (
                                  var h;
                                  d !== t ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break n;
                                  if (
                                    (p === t && ++c === a && (u = i),
                                    p === o && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              t =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (
                        na = { focusedElem: e, selectionRange: t },
                          Hn = !1,
                          Ji = n;
                        null !== Ji;

                      )
                        if (
                          ((e = (n = Ji).child),
                          0 !== (1028 & n.subtreeFlags) && null !== e)
                        )
                          (e.return = n), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            n = Ji;
                            try {
                              var m = n.alternate;
                              if (0 !== (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = n.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          n.elementType === n.type
                                            ? v
                                            : vl(n.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var k = n.stateNode.containerInfo;
                                    1 === k.nodeType
                                      ? (k.textContent = "")
                                      : 9 === k.nodeType &&
                                        k.documentElement &&
                                        k.removeChild(k.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              _s(n, n.return, w);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), (Ji = e);
                              break;
                            }
                            Ji = n.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, t),
                    vu(t, e),
                    hr(na),
                    (Hn = !!ea),
                    (na = ea = null),
                    (e.current = t),
                    yu(t, e, a),
                    Ge(),
                    (Pu = u),
                    (kn = i),
                    (Nu.transition = o);
                } else e.current = t;
                if (
                  (qu && ((qu = !1), (Ku = e), (Yu = a)),
                  (o = e.pendingLanes),
                  0 === o && (Qu = null),
                  (function (e) {
                    if (ln && "function" === typeof ln.onCommitFiberRoot)
                      try {
                        ln.onCommitFiberRoot(
                          an,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (n) {}
                  })(t.stateNode),
                  rs(e, Xe()),
                  null !== n)
                )
                  for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                    (a = n[t]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = Hu), (Hu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && Ss(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Xu
                      ? Gu++
                      : ((Gu = 0), (Xu = e))
                    : (Gu = 0),
                  Va();
              })(e, n, t, r);
          } finally {
            (Nu.transition = a), (kn = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Ku) {
            var e = wn(Yu),
              n = Nu.transition,
              t = kn;
            try {
              if (((Nu.transition = null), (kn = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (Yu = 0), 0 !== (6 & Pu)))
                  throw Error(l(331));
                var a = Pu;
                for (Pu |= 4, Ji = e.current; null !== Ji; ) {
                  var o = Ji,
                    i = o.child;
                  if (0 !== (16 & Ji.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var f = Ji;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              tu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Ji = d);
                          else
                            for (; null !== Ji; ) {
                              var p = (f = Ji).sibling,
                                h = f.return;
                              if ((lu(f), f === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Ji = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (o = Ji).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            tu(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Ji = y);
                        break e;
                      }
                      Ji = o.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var k = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== k)
                    (k.return = i), (Ji = k);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 !== (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (S) {
                          _s(u, u.return, S);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Ji = w);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (
                  ((Pu = a),
                  Va(),
                  ln && "function" === typeof ln.onPostCommitFiberRoot)
                )
                  try {
                    ln.onPostCommitFiberRoot(an, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (kn = t), (Nu.transition = n);
            }
          }
          return !1;
        }
        function xs(e, n, t) {
          (e = Rl(e, (n = hi(0, (n = ci(t, n)), 1)), 1)),
            (n = es()),
            null !== e && (yn(e, 1, n), rs(e, n));
        }
        function _s(e, n, t) {
          if (3 === e.tag) xs(e, e, t);
          else
            for (; null !== n; ) {
              if (3 === n.tag) {
                xs(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (n = Rl(n, (e = mi(n, (e = ci(t, e)), 1)), 1)),
                    (e = es()),
                    null !== n && (yn(n, 1, e), rs(n, e));
                  break;
                }
              }
              n = n.return;
            }
        }
        function Es(e, n, t) {
          var r = e.pingCache;
          null !== r && r.delete(n),
            (n = es()),
            (e.pingedLanes |= e.suspendedLanes & t),
            Lu === e &&
              (Ou & t) === t &&
              (4 === Ru ||
              (3 === Ru && (130023424 & Ou) === Ou && 500 > Xe() - $u)
                ? ds(e, 0)
                : (Du |= t)),
            rs(e, n);
        }
        function Cs(e, n) {
          0 === n &&
            (0 === (1 & e.mode)
              ? (n = 1)
              : ((n = fn), 0 === (130023424 & (fn <<= 1)) && (fn = 4194304)));
          var t = es();
          null !== (e = Ll(e, n)) && (yn(e, n, t), rs(e, t));
        }
        function Ns(e) {
          var n = e.memoizedState,
            t = 0;
          null !== n && (t = n.retryLane), Cs(e, t);
        }
        function Ps(e, n) {
          var t = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (t = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(n), Cs(e, t);
        }
        function Ls(e, n) {
          return qe(e, n);
        }
        function js(e, n, t, r) {
          (this.tag = e),
            (this.key = t),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Os(e, n, t, r) {
          return new js(e, n, t, r);
        }
        function Ts(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zs(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Os(e.tag, n, e.key, e.mode)).elementType =
                  e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
              null === n
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function Rs(e, n, t, r, a, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ts(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case x:
                return Ms(t.children, a, o, n);
              case _:
                (i = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Os(12, t, n, 2 | a)).elementType = E), (e.lanes = o), e
                );
              case L:
                return (
                  ((e = Os(13, t, n, a)).elementType = L), (e.lanes = o), e
                );
              case j:
                return (
                  ((e = Os(19, t, n, a)).elementType = j), (e.lanes = o), e
                );
              case z:
                return Fs(t, a, o, n);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case O:
                      i = 14;
                      break e;
                    case T:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((n = Os(i, t, n, a)).elementType = e),
            (n.type = r),
            (n.lanes = o),
            n
          );
        }
        function Ms(e, n, t, r) {
          return ((e = Os(7, e, r, n)).lanes = t), e;
        }
        function Fs(e, n, t, r) {
          return (
            ((e = Os(22, e, r, n)).elementType = z),
            (e.lanes = t),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Is(e, n, t) {
          return ((e = Os(6, e, null, n)).lanes = t), e;
        }
        function Ds(e, n, t) {
          return (
            ((n = Os(
              4,
              null !== e.children ? e.children : [],
              e.key,
              n
            )).lanes = t),
            (n.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            n
          );
        }
        function Us(e, n, t, r, a) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gn(0)),
            (this.expirationTimes = gn(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gn(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function As(e, n, t, r, a, l, o, i, u) {
          return (
            (e = new Us(e, n, t, i, u)),
            1 === n ? ((n = 1), !0 === l && (n |= 8)) : (n = 0),
            (l = Os(3, null, null, n)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: t,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ol(l),
            e
          );
        }
        function $s(e, n, t) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: n,
            implementation: t,
          };
        }
        function Vs(e) {
          if (!e) return Na;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (Ta(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (Ta(t)) return Ma(e, t, n);
          }
          return n;
        }
        function Bs(e, n, t, r, a, l, o, i, u) {
          return (
            ((e = As(t, r, !0, e, 0, l, 0, i, u)).context = Vs(null)),
            (t = e.current),
            ((l = zl((r = es()), (a = ns(t)))).callback =
              void 0 !== n && null !== n ? n : null),
            Rl(t, l, a),
            (e.current.lanes = a),
            yn(e, a, r),
            rs(e, r),
            e
          );
        }
        function Ws(e, n, t, r) {
          var a = n.current,
            l = es(),
            o = ns(a);
          return (
            (t = Vs(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = zl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (n.callback = r),
            null !== (e = Rl(a, n, o)) && (ts(e, a, o, l), Ml(e, a, o)),
            o
          );
        }
        function Hs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function qs(e, n) {
          Qs(e, n), (e = e.alternate) && Qs(e, n);
        }
        xu = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || La.current) ki = !0;
            else {
              if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                return (
                  (ki = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        ji(n), pl();
                        break;
                      case 5:
                        lo(n);
                        break;
                      case 1:
                        Ta(n.type) && Fa(n);
                        break;
                      case 4:
                        ro(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = n.type._context,
                          a = n.memoizedProps.value;
                        Ca(gl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = n.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(io, 1 & io.current), (n.flags |= 128), null)
                            : 0 !== (t & n.child.childLanes)
                            ? Ii(e, n, t)
                            : (Ca(io, 1 & io.current),
                              null !== (e = Wi(e, n, t)) ? e.sibling : null);
                        Ca(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (t & n.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vi(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (a = n.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), Ei(e, n, t);
                    }
                    return Wi(e, n, t);
                  })(e, n, t)
                );
              ki = 0 !== (131072 & e.flags);
            }
          else (ki = !1), al && 0 !== (1048576 & n.flags) && Za(n, Qa, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var r = n.type;
              Bi(e, n), (e = n.pendingProps);
              var a = Oa(n, Pa.current);
              _l(n, t), (a = _o(null, n, r, e, a, t));
              var o = Eo();
              return (
                (n.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    Ta(r) ? ((o = !0), Fa(n)) : (o = !1),
                    (n.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ol(n),
                    (a.updater = $l),
                    (n.stateNode = a),
                    (a._reactInternals = n),
                    Hl(n, r, e, t),
                    (n = Li(null, n, r, !0, o, t)))
                  : ((n.tag = 0),
                    al && o && el(n),
                    wi(null, n, a, t),
                    (n = n.child)),
                n
              );
            case 16:
              r = n.elementType;
              e: {
                switch (
                  (Bi(e, n),
                  (e = n.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (n.type = r),
                  (a = n.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ts(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vl(r, e)),
                  a)
                ) {
                  case 0:
                    n = Ni(null, n, r, e, t);
                    break e;
                  case 1:
                    n = Pi(null, n, r, e, t);
                    break e;
                  case 11:
                    n = Si(null, n, r, e, t);
                    break e;
                  case 14:
                    n = xi(null, n, r, vl(r.type, e), t);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return n;
            case 0:
              return (
                (r = n.type),
                (a = n.pendingProps),
                Ni(e, n, r, (a = n.elementType === r ? a : vl(r, a)), t)
              );
            case 1:
              return (
                (r = n.type),
                (a = n.pendingProps),
                Pi(e, n, r, (a = n.elementType === r ? a : vl(r, a)), t)
              );
            case 3:
              e: {
                if ((ji(n), null === e)) throw Error(l(387));
                (r = n.pendingProps),
                  (a = (o = n.memoizedState).element),
                  Tl(e, n),
                  Il(n, r, null, t);
                var i = n.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (n.updateQueue.baseState = o),
                    (n.memoizedState = o),
                    256 & n.flags)
                  ) {
                    n = Oi(e, n, r, t, (a = ci(Error(l(423)), n)));
                    break e;
                  }
                  if (r !== a) {
                    n = Oi(e, n, r, t, (a = ci(Error(l(424)), n)));
                    break e;
                  }
                  for (
                    rl = sa(n.stateNode.containerInfo.firstChild),
                      tl = n,
                      al = !0,
                      ll = null,
                      t = Xl(n, null, r, t),
                      n.child = t;
                    t;

                  )
                    (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((pl(), r === a)) {
                    n = Wi(e, n, t);
                    break e;
                  }
                  wi(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                lo(n),
                null === e && sl(n),
                (r = n.type),
                (a = n.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                ta(r, a)
                  ? (i = null)
                  : null !== o && ta(r, o) && (n.flags |= 32),
                Ci(e, n),
                wi(e, n, i, t),
                n.child
              );
            case 6:
              return null === e && sl(n), null;
            case 13:
              return Ii(e, n, t);
            case 4:
              return (
                ro(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                null === e ? (n.child = Gl(n, null, r, t)) : wi(e, n, r, t),
                n.child
              );
            case 11:
              return (
                (r = n.type),
                (a = n.pendingProps),
                Si(e, n, r, (a = n.elementType === r ? a : vl(r, a)), t)
              );
            case 7:
              return wi(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return wi(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (
                  ((r = n.type._context),
                  (a = n.pendingProps),
                  (o = n.memoizedProps),
                  (i = a.value),
                  Ca(gl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !La.current) {
                      n = Wi(e, n, t);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = n.child) && (o.return = n);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = zl(-1, t & -t)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= t),
                              null !== (s = o.alternate) && (s.lanes |= t),
                              xl(o.return, t, n),
                              (u.lanes |= t);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === n.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= t),
                          null !== (u = i.alternate) && (u.lanes |= t),
                          xl(i, t, n),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === n) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                wi(e, n, a.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (
                (a = n.type),
                (r = n.pendingProps.children),
                _l(n, t),
                (r = r((a = El(a)))),
                (n.flags |= 1),
                wi(e, n, r, t),
                n.child
              );
            case 14:
              return (
                (a = vl((r = n.type), n.pendingProps)),
                xi(e, n, r, (a = vl(r.type, a)), t)
              );
            case 15:
              return _i(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (r = n.type),
                (a = n.pendingProps),
                (a = n.elementType === r ? a : vl(r, a)),
                Bi(e, n),
                (n.tag = 1),
                Ta(r) ? ((e = !0), Fa(n)) : (e = !1),
                _l(n, t),
                Bl(n, r, a),
                Hl(n, r, a, t),
                Li(null, n, r, !0, e, t)
              );
            case 19:
              return Vi(e, n, t);
            case 22:
              return Ei(e, n, t);
          }
          throw Error(l(156, n.tag));
        };
        var Ks =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ys(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, n, t, r, a) {
          var l = t._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Hs(o);
                i.call(e);
              };
            }
            Ws(n, o, e, a);
          } else
            o = (function (e, n, t, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Hs(o);
                    l.call(e);
                  };
                }
                var o = Bs(n, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Hs(u);
                  i.call(e);
                };
              }
              var u = As(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Ws(n, u, t, r);
                }),
                u
              );
            })(t, n, e, a, r);
          return Hs(o);
        }
        (Gs.prototype.render = Ys.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(l(409));
            Ws(e, n, null, null);
          }),
          (Gs.prototype.unmount = Ys.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                cs(function () {
                  Ws(null, e, null, null);
                }),
                  (n[ha] = null);
              }
            }),
          (Gs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = En();
              e = { blockedOn: null, target: e, priority: n };
              for (
                var t = 0;
                t < Rn.length && 0 !== n && n < Rn[t].priority;
                t++
              );
              Rn.splice(t, 0, e), 0 === t && Dn(e);
            }
          }),
          (Sn = function (e) {
            switch (e.tag) {
              case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                  var t = dn(n.pendingLanes);
                  0 !== t &&
                    (bn(n, 1 | t),
                    rs(n, Xe()),
                    0 === (6 & Pu) && ((Vu = Xe() + 500), Va()));
                }
                break;
              case 13:
                cs(function () {
                  var n = Ll(e, 1);
                  if (null !== n) {
                    var t = es();
                    ts(n, e, 1, t);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (xn = function (e) {
            if (13 === e.tag) {
              var n = Ll(e, 134217728);
              if (null !== n) ts(n, e, 134217728, es());
              qs(e, 134217728);
            }
          }),
          (_n = function (e) {
            if (13 === e.tag) {
              var n = ns(e),
                t = Ll(e, n);
              if (null !== t) ts(t, e, n, es());
              qs(e, n);
            }
          }),
          (En = function () {
            return kn;
          }),
          (Cn = function (e, n) {
            var t = kn;
            try {
              return (kn = e), n();
            } finally {
              kn = t;
            }
          }),
          (Se = function (e, n, t) {
            switch (n) {
              case "input":
                if ((J(e, t), (n = t.name), "radio" === t.type && null != n)) {
                  for (t = e; t.parentNode; ) t = t.parentNode;
                  for (
                    t = t.querySelectorAll(
                      "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                    ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, t);
                break;
              case "select":
                null != (n = t.value) && te(e, !!t.multiple, n, !1);
            }
          }),
          (Pe = ss),
          (Le = cs);
        var nc = {
            usingClientEntryPoint: !1,
            Events: [ba, ka, wa, Ce, Ne, ss],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (an = ac.inject(rc)), (ln = ac);
            } catch (ce) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc),
          (n.createPortal = function (e, n) {
            var t =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xs(n)) throw Error(l(200));
            return $s(e, n, null, t);
          }),
          (n.createRoot = function (e, n) {
            if (!Xs(e)) throw Error(l(299));
            var t = !1,
              r = "",
              a = Ks;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (n = As(e, 1, !1, null, 0, t, 0, r, a)),
              (e[ha] = n.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Ys(n)
            );
          }),
          (n.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var n = e._reactInternals;
            if (void 0 === n) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = He(n)) ? null : e.stateNode);
          }),
          (n.flushSync = function (e) {
            return cs(e);
          }),
          (n.hydrate = function (e, n, t) {
            if (!Js(n)) throw Error(l(200));
            return ec(null, e, n, !0, t);
          }),
          (n.hydrateRoot = function (e, n, t) {
            if (!Xs(e)) throw Error(l(405));
            var r = (null != t && t.hydratedSources) || null,
              a = !1,
              o = "",
              i = Ks;
            if (
              (null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (n = Bs(n, null, e, 1, null != t ? t : null, a, 0, o, i)),
              (e[ha] = n.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (t = r[e])._getVersion)(t._source)),
                  null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, a])
                    : n.mutableSourceEagerHydrationData.push(t, a);
            return new Gs(n);
          }),
          (n.render = function (e, n, t) {
            if (!Js(n)) throw Error(l(200));
            return ec(null, e, n, !1, t);
          }),
          (n.unmountComponentAtNode = function (e) {
            if (!Js(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (n.unstable_batchedUpdates = ss),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
            if (!Js(t)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, n, t, !1, r);
          }),
          (n.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, n, t) {
        var r = t(164);
        (n.createRoot = r.createRoot), (n.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, n, t) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
              console.error(n);
            }
        })(),
          (e.exports = t(463));
      },
      374: function (e, n, t) {
        var r = t(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, n, t) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== t && (s = "" + t),
          void 0 !== n.key && (s = "" + n.key),
          void 0 !== n.ref && (c = n.ref),
          n))
            o.call(n, r) && !u.hasOwnProperty(r) && (l[r] = n[r]);
          if (e && e.defaultProps)
            for (r in (n = e.defaultProps)) void 0 === l[r] && (l[r] = n[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (n.Fragment = l), (n.jsx = s), (n.jsxs = s);
      },
      117: function (e, n) {
        var t = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = v),
            (this.updater = t || h);
        }
        function y() {}
        function b(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = v),
            (this.updater = t || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, n) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, n, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var k = (b.prototype = new y());
        (k.constructor = b), m(k, g.prototype), (k.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          x = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, n, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != n)
            for (a in (void 0 !== n.ref && (i = n.ref),
            void 0 !== n.key && (o = "" + n.key),
            n))
              S.call(n, a) && !_.hasOwnProperty(a) && (l[a] = n[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: t,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: x.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === t;
        }
        var N = /\/+/g;
        function P(e, n) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return n[e];
                  })
                );
              })("" + e.key)
            : n.toString(36);
        }
        function L(e, n, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case t:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + P(u, 0) : l),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  L(o, n, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, n) {
                      return {
                        $$typeof: t,
                        type: e.type,
                        key: n,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  n.push(o)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + P((i = e[s]), s);
              u += L(i, n, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += L((i = i.value), n, a, (c = l + P(i, s++)), o);
          else if ("object" === i)
            throw (
              ((n = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function j(e, n, t) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            L(e, r, "", "", function (e) {
              return n.call(t, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var n = e._result;
            (n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = n));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = n));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          z = { transition: null },
          R = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: x,
          };
        (n.Children = {
          map: j,
          forEach: function (e, n, t) {
            j(
              e,
              function () {
                n.apply(this, arguments);
              },
              t
            );
          },
          count: function (e) {
            var n = 0;
            return (
              j(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (n.Component = g),
          (n.Fragment = a),
          (n.Profiler = o),
          (n.PureComponent = b),
          (n.StrictMode = l),
          (n.Suspense = c),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (n.cloneElement = function (e, n, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((o = n.ref), (i = x.current)),
                void 0 !== n.key && (l = "" + n.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in n)
                S.call(n, s) &&
                  !_.hasOwnProperty(s) &&
                  (a[s] = void 0 === n[s] && void 0 !== u ? u[s] : n[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: t,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (n.createElement = E),
          (n.createFactory = function (e) {
            var n = E.bind(null, e);
            return (n.type = e), n;
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (n.isValidElement = C),
          (n.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: f, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = n;
            }
          }),
          (n.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (n.useCallback = function (e, n) {
            return T.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (n.useEffect = function (e, n) {
            return T.current.useEffect(e, n);
          }),
          (n.useId = function () {
            return T.current.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return T.current.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return T.current.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return T.current.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return T.current.useMemo(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return T.current.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (n.useState = function (e) {
            return T.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return T.current.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return T.current.useTransition();
          }),
          (n.version = "18.2.0");
      },
      791: function (e, n, t) {
        e.exports = t(117);
      },
      184: function (e, n, t) {
        e.exports = t(374);
      },
      813: function (e, n) {
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var r = (t - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, n))) break e;
            (e[r] = n), (e[t] = a), (t = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, t))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = t), (r = s))
                  : ((e[r] = u), (e[i] = t), (r = i));
              else {
                if (!(s < a && 0 > l(c, t))) break e;
                (e[r] = c), (e[s] = t), (r = s);
              }
            }
          }
          return n;
        }
        function l(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          n.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          n.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var n = r(c); null !== n; ) {
            if (null === n.callback) a(c);
            else {
              if (!(n.startTime <= e)) break;
              a(c), (n.sortIndex = n.expirationTime), t(s, n);
            }
            n = r(c);
          }
        }
        function w(e) {
          if (((v = !1), k(e), !m))
            if (null !== r(s)) (m = !0), z(S);
            else {
              var n = r(c);
              null !== n && R(w, n.startTime - e);
            }
        }
        function S(e, t) {
          (m = !1), v && ((v = !1), y(C), (C = -1)), (h = !0);
          var l = p;
          try {
            for (
              k(t), d = r(s);
              null !== d && (!(d.expirationTime > t) || (e && !L()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= t);
                (t = n.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  k(t);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && R(w, f.startTime - t), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          _ = !1,
          E = null,
          C = -1,
          N = 5,
          P = -1;
        function L() {
          return !(n.unstable_now() - P < N);
        }
        function j() {
          if (null !== E) {
            var e = n.unstable_now();
            P = e;
            var t = !0;
            try {
              t = E(!0, e);
            } finally {
              t ? x() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(j);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            T = O.port2;
          (O.port1.onmessage = j),
            (x = function () {
              T.postMessage(null);
            });
        } else
          x = function () {
            g(j, 0);
          };
        function z(e) {
          (E = e), _ || ((_ = !0), x());
        }
        function R(e, t) {
          C = g(function () {
            e(n.unstable_now());
          }, t);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            m || h || ((m = !0), z(S));
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, a, l) {
            var o = n.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  t(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(C), (C = -1)) : (v = !0), R(w, l - o)))
                : ((e.sortIndex = i), t(s, e), m || h || ((m = !0), z(S))),
              e
            );
          }),
          (n.unstable_shouldYield = L),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          });
      },
      296: function (e, n, t) {
        e.exports = t(813);
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var l = (n[r] = { exports: {} });
    return e[r](l, l.exports, t), l.exports;
  }
  (t.m = e),
    (t.d = function (e, n) {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.f = {}),
    (t.e = function (e) {
      return Promise.all(
        Object.keys(t.f).reduce(function (n, r) {
          return t.f[r](e, n), n;
        }, [])
      );
    }),
    (t.u = function (e) {
      return "static/js/" + e + ".5530211c.chunk.js";
    }),
    (t.miniCssF = function (e) {}),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (function () {
      var e = {},
        n = "mesto-react:";
      t.l = function (r, a, l, o) {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== l)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == n + l
              ) {
                i = f;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            t.nc && i.setAttribute("nonce", t.nc),
            i.setAttribute("data-webpack", n + l),
            (i.src = r)),
            (e[r] = [a]);
          var d = function (n, t) {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a &&
                  a.forEach(function (e) {
                    return e(t);
                  }),
                n)
              )
                return n(t);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = d.bind(null, i.onerror)),
            (i.onload = d.bind(null, i.onload)),
            u && document.head.appendChild(i);
        }
      };
    })(),
    (t.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.p = "/react-mesto-auth/"),
    (function () {
      var e = { 179: 0 };
      t.f.j = function (n, r) {
        var a = t.o(e, n) ? e[n] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var l = new Promise(function (t, r) {
              a = e[n] = [t, r];
            });
            r.push((a[2] = l));
            var o = t.p + t.u(n),
              i = new Error();
            t.l(
              o,
              function (r) {
                if (t.o(e, n) && (0 !== (a = e[n]) && (e[n] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + n + " failed.\n(" + l + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = l),
                    (i.request = o),
                    a[1](i);
                }
              },
              "chunk-" + n,
              n
            );
          }
      };
      var n = function (n, r) {
          var a,
            l,
            o = r[0],
            i = r[1],
            u = r[2],
            s = 0;
          if (
            o.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (a in i) t.o(i, a) && (t.m[a] = i[a]);
            if (u) u(t);
          }
          for (n && n(r); s < o.length; s++)
            (l = o[s]), t.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        r = (self.webpackChunkmesto_react = self.webpackChunkmesto_react || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e,
        n = t(791),
        r = t(250);
      function a(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function l(e, n) {
        if (e) {
          if ("string" === typeof e) return a(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? a(e, n)
              : void 0
          );
        }
      }
      function o(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                a,
                l,
                o,
                i = [],
                u = !0,
                s = !1;
              try {
                if (((l = (t = t.call(e)).next), 0 === n)) {
                  if (Object(t) !== t) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = l.call(t)).done) &&
                    (i.push(r.value), i.length !== n);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != t.return &&
                    ((o = t.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, n) ||
          l(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var u = function (e) {
        return e;
      };
      var s = "beforeunload",
        c = "popstate";
      function f(n) {
        void 0 === n && (n = {});
        var t = n.window,
          r = void 0 === t ? document.defaultView : t,
          a = r.history;
        function l() {
          var e = v(r.location.hash.substr(1)),
            n = e.pathname,
            t = void 0 === n ? "/" : n,
            l = e.search,
            o = void 0 === l ? "" : l,
            i = e.hash,
            s = void 0 === i ? "" : i,
            c = a.state || {};
          return [
            c.idx,
            u({
              pathname: t,
              search: o,
              hash: s,
              state: c.usr || null,
              key: c.key || "default",
            }),
          ];
        }
        var o = null;
        function f() {
          if (o) S.call(o), (o = null);
          else {
            var n = e.Pop,
              t = l(),
              r = t[0],
              a = t[1];
            if (S.length) {
              if (null != r) {
                var i = b - r;
                i &&
                  ((o = {
                    action: n,
                    location: a,
                    retry: function () {
                      P(-1 * i);
                    },
                  }),
                  P(i));
              }
            } else N(n);
          }
        }
        r.addEventListener(c, f),
          r.addEventListener("hashchange", function () {
            m(l()[1]) !== m(k) && f();
          });
        var g = e.Pop,
          y = l(),
          b = y[0],
          k = y[1],
          w = p(),
          S = p();
        function x(e) {
          return (
            (function () {
              var e = document.querySelector("base"),
                n = "";
              if (e && e.getAttribute("href")) {
                var t = r.location.href,
                  a = t.indexOf("#");
                n = -1 === a ? t : t.slice(0, a);
              }
              return n;
            })() +
            "#" +
            ("string" === typeof e ? e : m(e))
          );
        }
        function _(e, n) {
          return (
            void 0 === n && (n = null),
            u(
              i(
                { pathname: k.pathname, hash: "", search: "" },
                "string" === typeof e ? v(e) : e,
                { state: n, key: h() }
              )
            )
          );
        }
        function E(e, n) {
          return [{ usr: e.state, key: e.key, idx: n }, x(e)];
        }
        function C(e, n, t) {
          return (
            !S.length || (S.call({ action: e, location: n, retry: t }), !1)
          );
        }
        function N(e) {
          g = e;
          var n = l();
          (b = n[0]), (k = n[1]), w.call({ action: g, location: k });
        }
        function P(e) {
          a.go(e);
        }
        null == b && ((b = 0), a.replaceState(i({}, a.state, { idx: b }), ""));
        var L = {
          get action() {
            return g;
          },
          get location() {
            return k;
          },
          createHref: x,
          push: function n(t, l) {
            var o = e.Push,
              i = _(t, l);
            if (
              C(o, i, function () {
                n(t, l);
              })
            ) {
              var u = E(i, b + 1),
                s = u[0],
                c = u[1];
              try {
                a.pushState(s, "", c);
              } catch (f) {
                r.location.assign(c);
              }
              N(o);
            }
          },
          replace: function n(t, r) {
            var l = e.Replace,
              o = _(t, r);
            if (
              C(l, o, function () {
                n(t, r);
              })
            ) {
              var i = E(o, b),
                u = i[0],
                s = i[1];
              a.replaceState(u, "", s), N(l);
            }
          },
          go: P,
          back: function () {
            P(-1);
          },
          forward: function () {
            P(1);
          },
          listen: function (e) {
            return w.push(e);
          },
          block: function (e) {
            var n = S.push(e);
            return (
              1 === S.length && r.addEventListener(s, d),
              function () {
                n(), S.length || r.removeEventListener(s, d);
              }
            );
          },
        };
        return L;
      }
      function d(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function p() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (n) {
            return (
              e.push(n),
              function () {
                e = e.filter(function (e) {
                  return e !== n;
                });
              }
            );
          },
          call: function (n) {
            e.forEach(function (e) {
              return e && e(n);
            });
          },
        };
      }
      function h() {
        return Math.random().toString(36).substr(2, 8);
      }
      function m(e) {
        var n = e.pathname,
          t = void 0 === n ? "/" : n,
          r = e.search,
          a = void 0 === r ? "" : r,
          l = e.hash,
          o = void 0 === l ? "" : l;
        return (
          a && "?" !== a && (t += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (t += "#" === o.charAt(0) ? o : "#" + o),
          t
        );
      }
      function v(e) {
        var n = {};
        if (e) {
          var t = e.indexOf("#");
          t >= 0 && ((n.hash = e.substr(t)), (e = e.substr(0, t)));
          var r = e.indexOf("?");
          r >= 0 && ((n.search = e.substr(r)), (e = e.substr(0, r))),
            e && (n.pathname = e);
        }
        return n;
      }
      var g = (0, n.createContext)(null);
      var y = (0, n.createContext)(null);
      var b = (0, n.createContext)({ outlet: null, matches: [] });
      function k(e, n) {
        if (!e) throw new Error(n);
      }
      function w(e, n, t) {
        void 0 === t && (t = "/");
        var r = L(("string" === typeof n ? v(n) : n).pathname || "/", t);
        if (null == r) return null;
        var a = S(e);
        !(function (e) {
          e.sort(function (e, n) {
            return e.score !== n.score
              ? n.score - e.score
              : (function (e, n) {
                  var t =
                    e.length === n.length &&
                    e.slice(0, -1).every(function (e, t) {
                      return e === n[t];
                    });
                  return t ? e[e.length - 1] - n[n.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  n.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var l = null, o = 0; null == l && o < a.length; ++o)
          l = C(a[o], r);
        return l;
      }
      function S(e, n, t, r) {
        return (
          void 0 === n && (n = []),
          void 0 === t && (t = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var l = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            l.relativePath.startsWith("/") &&
              (l.relativePath.startsWith(r) || k(!1),
              (l.relativePath = l.relativePath.slice(r.length)));
            var o = j([r, l.relativePath]),
              i = t.concat(l);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && k(!1), S(e.children, n, i, o)),
              (null != e.path || e.index) &&
                n.push({ path: o, score: E(o, e.index), routesMeta: i });
          }),
          n
        );
      }
      var x = /^:\w+$/,
        _ = function (e) {
          return "*" === e;
        };
      function E(e, n) {
        var t = e.split("/"),
          r = t.length;
        return (
          t.some(_) && (r += -2),
          n && (r += 2),
          t
            .filter(function (e) {
              return !_(e);
            })
            .reduce(function (e, n) {
              return e + (x.test(n) ? 3 : "" === n ? 1 : 10);
            }, r)
        );
      }
      function C(e, n) {
        for (
          var t = e.routesMeta, r = {}, a = "/", l = [], o = 0;
          o < t.length;
          ++o
        ) {
          var i = t[o],
            u = o === t.length - 1,
            s = "/" === a ? n : n.slice(a.length) || "/",
            c = N(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = i.route;
          l.push({
            params: r,
            pathname: j([a, c.pathname]),
            pathnameBase: O(j([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = j([a, c.pathnameBase]));
        }
        return l;
      }
      function N(e, n) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var t = (function (e, n, t) {
            void 0 === n && (n = !1);
            void 0 === t && (t = !0);
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, n) {
                    return r.push(n), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (a += t ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            var l = new RegExp(a, n ? void 0 : "i");
            return [l, r];
          })(e.path, e.caseSensitive, e.end),
          r = o(t, 2),
          a = r[0],
          l = r[1],
          i = n.match(a);
        if (!i) return null;
        var u = i[0],
          s = u.replace(/(.)\/+$/, "$1"),
          c = i.slice(1);
        return {
          params: l.reduce(function (e, n, t) {
            if ("*" === n) {
              var r = c[t] || "";
              s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[n] = (function (e, n) {
                try {
                  return decodeURIComponent(e);
                } catch (t) {
                  return e;
                }
              })(c[t] || "")),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: s,
          pattern: e,
        };
      }
      function P(e, n, t) {
        var r,
          a = "string" === typeof e ? v(e) : e,
          l = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == l) r = t;
        else {
          var o = n.length - 1;
          if (l.startsWith("..")) {
            for (var i = l.split("/"); ".." === i[0]; ) i.shift(), (o -= 1);
            a.pathname = i.join("/");
          }
          r = o >= 0 ? n[o] : "/";
        }
        var u = (function (e, n) {
          void 0 === n && (n = "/");
          var t = "string" === typeof e ? v(e) : e,
            r = t.pathname,
            a = t.search,
            l = void 0 === a ? "" : a,
            o = t.hash,
            i = void 0 === o ? "" : o,
            u = r
              ? r.startsWith("/")
                ? r
                : (function (e, n) {
                    var t = n.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? t.length > 1 && t.pop()
                          : "." !== e && t.push(e);
                      }),
                      t.length > 1 ? t.join("/") : "/"
                    );
                  })(r, n)
              : n;
          return { pathname: u, search: T(l), hash: z(i) };
        })(a, r);
        return (
          l &&
            "/" !== l &&
            l.endsWith("/") &&
            !u.pathname.endsWith("/") &&
            (u.pathname += "/"),
          u
        );
      }
      function L(e, n) {
        if ("/" === n) return e;
        if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
        var t = e.charAt(n.length);
        return t && "/" !== t ? null : e.slice(n.length) || "/";
      }
      var j = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        O = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        T = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        z = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function R(e) {
        M() || k(!1);
        var t = (0, n.useContext)(g),
          r = t.basename,
          a = t.navigator,
          l = D(e),
          o = l.hash,
          i = l.pathname,
          u = l.search,
          s = i;
        if ("/" !== r) {
          var c = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? v(e).pathname
                : e.pathname;
            })(e),
            f = null != c && c.endsWith("/");
          s = "/" === i ? r + (f ? "/" : "") : j([r, i]);
        }
        return a.createHref({ pathname: s, search: u, hash: o });
      }
      function M() {
        return null != (0, n.useContext)(y);
      }
      function F() {
        return M() || k(!1), (0, n.useContext)(y).location;
      }
      function I() {
        M() || k(!1);
        var e = (0, n.useContext)(g),
          t = e.basename,
          r = e.navigator,
          a = (0, n.useContext)(b).matches,
          l = F().pathname,
          o = JSON.stringify(
            a.map(function (e) {
              return e.pathnameBase;
            })
          ),
          i = (0, n.useRef)(!1);
        return (
          (0, n.useEffect)(function () {
            i.current = !0;
          }),
          (0, n.useCallback)(
            function (e, n) {
              if ((void 0 === n && (n = {}), i.current))
                if ("number" !== typeof e) {
                  var a = P(e, JSON.parse(o), l);
                  "/" !== t && (a.pathname = j([t, a.pathname])),
                    (n.replace ? r.replace : r.push)(a, n.state);
                } else r.go(e);
            },
            [t, r, o, l]
          )
        );
      }
      function D(e) {
        var t = (0, n.useContext)(b).matches,
          r = F().pathname,
          a = JSON.stringify(
            t.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, n.useMemo)(
          function () {
            return P(e, JSON.parse(a), r);
          },
          [e, a, r]
        );
      }
      function U(e, t) {
        return (
          void 0 === t && (t = []),
          null == e
            ? null
            : e.reduceRight(function (r, a, l) {
                return (0,
                n.createElement)(b.Provider, { children: void 0 !== a.route.element ? a.route.element : r, value: { outlet: r, matches: t.concat(e.slice(0, l + 1)) } });
              }, null)
        );
      }
      function A(e) {
        var t = e.to,
          r = e.replace,
          a = e.state;
        M() || k(!1);
        var l = I();
        return (
          (0, n.useEffect)(function () {
            l(t, { replace: r, state: a });
          }),
          null
        );
      }
      function $(e) {
        k(!1);
      }
      function V(t) {
        var r = t.basename,
          a = void 0 === r ? "/" : r,
          l = t.children,
          o = void 0 === l ? null : l,
          i = t.location,
          u = t.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = t.navigator,
          f = t.static,
          d = void 0 !== f && f;
        M() && k(!1);
        var p = O(a),
          h = (0, n.useMemo)(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof i && (i = v(i));
        var m = i,
          b = m.pathname,
          w = void 0 === b ? "/" : b,
          S = m.search,
          x = void 0 === S ? "" : S,
          _ = m.hash,
          E = void 0 === _ ? "" : _,
          C = m.state,
          N = void 0 === C ? null : C,
          P = m.key,
          j = void 0 === P ? "default" : P,
          T = (0, n.useMemo)(
            function () {
              var e = L(w, p);
              return null == e
                ? null
                : { pathname: e, search: x, hash: E, state: N, key: j };
            },
            [p, w, x, E, N, j]
          );
        return null == T
          ? null
          : (0, n.createElement)(
              g.Provider,
              { value: h },
              (0, n.createElement)(y.Provider, {
                children: o,
                value: { location: T, navigationType: s },
              })
            );
      }
      function B(e) {
        var t = e.children,
          r = e.location;
        return (function (e, t) {
          M() || k(!1);
          var r,
            a = (0, n.useContext)(b).matches,
            l = a[a.length - 1],
            o = l ? l.params : {},
            i = (l && l.pathname, l ? l.pathnameBase : "/"),
            u = (l && l.route, F());
          if (t) {
            var s,
              c = "string" === typeof t ? v(t) : t;
            "/" === i ||
              (null == (s = c.pathname) ? void 0 : s.startsWith(i)) ||
              k(!1),
              (r = c);
          } else r = u;
          var f = r.pathname || "/",
            d = w(e, { pathname: "/" === i ? f : f.slice(i.length) || "/" });
          return U(
            d &&
              d.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, o, e.params),
                  pathname: j([i, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? i : j([i, e.pathnameBase]),
                });
              }),
            a
          );
        })(W(t), r);
      }
      function W(e) {
        var t = [];
        return (
          n.Children.forEach(e, function (e) {
            if ((0, n.isValidElement)(e))
              if (e.type !== n.Fragment) {
                e.type !== $ && k(!1);
                var r = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (r.children = W(e.props.children)),
                  t.push(r);
              } else t.push.apply(t, W(e.props.children));
          }),
          t
        );
      }
      function H() {
        return (
          (H =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
          H.apply(this, arguments)
        );
      }
      function Q(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (t = l[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
        return a;
      }
      var q = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
      function K(e) {
        var t = e.basename,
          r = e.children,
          a = e.window,
          l = (0, n.useRef)();
        null == l.current && (l.current = f({ window: a }));
        var i = l.current,
          u = o((0, n.useState)({ action: i.action, location: i.location }), 2),
          s = u[0],
          c = u[1];
        return (
          (0, n.useLayoutEffect)(
            function () {
              return i.listen(c);
            },
            [i]
          ),
          (0, n.createElement)(V, {
            basename: t,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: i,
          })
        );
      }
      var Y = (0, n.forwardRef)(function (e, t) {
        var r = e.onClick,
          a = e.reloadDocument,
          l = e.replace,
          o = void 0 !== l && l,
          i = e.state,
          u = e.target,
          s = e.to,
          c = Q(e, q),
          f = R(s),
          d = (function (e, t) {
            var r = void 0 === t ? {} : t,
              a = r.target,
              l = r.replace,
              o = r.state,
              i = I(),
              u = F(),
              s = D(e);
            return (0, n.useCallback)(
              function (n) {
                if (
                  0 === n.button &&
                  (!a || "_self" === a) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(n)
                ) {
                  n.preventDefault();
                  var t = !!l || m(u) === m(s);
                  i(e, { replace: t, state: o });
                }
              },
              [u, i, s, l, o, a, e]
            );
          })(s, { replace: o, state: i, target: u });
        return (0, n.createElement)(
          "a",
          H({}, c, {
            href: f,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || a || d(e);
            },
            ref: t,
            target: u,
          })
        );
      });
      function G(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function X(e) {
        return (
          (X =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          X(e)
        );
      }
      function J() {
        J = function () {
          return e;
        };
        var e = {},
          n = Object.prototype,
          t = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, n, t) {
              e[n] = t.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          l = a.iterator || "@@iterator",
          o = a.asyncIterator || "@@asyncIterator",
          i = a.toStringTag || "@@toStringTag";
        function u(e, n, t) {
          return (
            Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[n]
          );
        }
        try {
          u({}, "");
        } catch (P) {
          u = function (e, n, t) {
            return (e[n] = t);
          };
        }
        function s(e, n, t, a) {
          var l = n && n.prototype instanceof d ? n : d,
            o = Object.create(l.prototype),
            i = new E(a || []);
          return r(o, "_invoke", { value: w(e, t, i) }), o;
        }
        function c(e, n, t) {
          try {
            return { type: "normal", arg: e.call(n, t) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        e.wrap = s;
        var f = {};
        function d() {}
        function p() {}
        function h() {}
        var m = {};
        u(m, l, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(C([])));
        g && g !== n && t.call(g, l) && (m = g);
        var y = (h.prototype = d.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function (n) {
            u(e, n, function (e) {
              return this._invoke(n, e);
            });
          });
        }
        function k(e, n) {
          function a(r, l, o, i) {
            var u = c(e[r], e, l);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == X(f) && t.call(f, "__await")
                ? n.resolve(f.__await).then(
                    function (e) {
                      a("next", e, o, i);
                    },
                    function (e) {
                      a("throw", e, o, i);
                    }
                  )
                : n.resolve(f).then(
                    function (e) {
                      (s.value = e), o(s);
                    },
                    function (e) {
                      return a("throw", e, o, i);
                    }
                  );
            }
            i(u.arg);
          }
          var l;
          r(this, "_invoke", {
            value: function (e, t) {
              function r() {
                return new n(function (n, r) {
                  a(e, t, n, r);
                });
              }
              return (l = l ? l.then(r, r) : r());
            },
          });
        }
        function w(e, n, t) {
          var r = "suspendedStart";
          return function (a, l) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw l;
              return N();
            }
            for (t.method = a, t.arg = l; ; ) {
              var o = t.delegate;
              if (o) {
                var i = S(o, t);
                if (i) {
                  if (i === f) continue;
                  return i;
                }
              }
              if ("next" === t.method) t.sent = t._sent = t.arg;
              else if ("throw" === t.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), t.arg);
                t.dispatchException(t.arg);
              } else "return" === t.method && t.abrupt("return", t.arg);
              r = "executing";
              var u = c(e, n, t);
              if ("normal" === u.type) {
                if (
                  ((r = t.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: t.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (t.method = "throw"), (t.arg = u.arg));
            }
          };
        }
        function S(e, n) {
          var t = n.method,
            r = e.iterator[t];
          if (void 0 === r)
            return (
              (n.delegate = null),
              ("throw" === t &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = void 0),
                S(e, n),
                "throw" === n.method)) ||
                ("return" !== t &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + t + "' method"
                  )))),
              f
            );
          var a = c(r, e.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), f
            );
          var l = a.arg;
          return l
            ? l.done
              ? ((n[e.resultName] = l.value),
                (n.next = e.nextLoc),
                "return" !== n.method &&
                  ((n.method = "next"), (n.arg = void 0)),
                (n.delegate = null),
                f)
              : l
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              f);
        }
        function x(e) {
          var n = { tryLoc: e[0] };
          1 in e && (n.catchLoc = e[1]),
            2 in e && ((n.finallyLoc = e[2]), (n.afterLoc = e[3])),
            this.tryEntries.push(n);
        }
        function _(e) {
          var n = e.completion || {};
          (n.type = "normal"), delete n.arg, (e.completion = n);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var n = e[l];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function n() {
                  for (; ++r < e.length; )
                    if (t.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = h),
          r(y, "constructor", { value: h, configurable: !0 }),
          r(h, "constructor", { value: p, configurable: !0 }),
          (p.displayName = u(h, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var n = "function" == typeof e && e.constructor;
            return (
              !!n &&
              (n === p || "GeneratorFunction" === (n.displayName || n.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), u(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(k.prototype),
          u(k.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (n, t, r, a, l) {
            void 0 === l && (l = Promise);
            var o = new k(s(n, t, r, a), l);
            return e.isGeneratorFunction(t)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          b(y),
          u(y, i, "Generator"),
          u(y, l, function () {
            return this;
          }),
          u(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var n = Object(e),
              t = [];
            for (var r in n) t.push(r);
            return (
              t.reverse(),
              function e() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in n) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = C),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(_),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    t.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(t, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (n.next = t),
                  r && ((n.method = "next"), (n.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var l = this.tryEntries[a],
                  o = l.completion;
                if ("root" === l.tryLoc) return r("end");
                if (l.tryLoc <= this.prev) {
                  var i = t.call(l, "catchLoc"),
                    u = t.call(l, "finallyLoc");
                  if (i && u) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  } else if (i) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  t.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var l = a;
                  break;
                }
              }
              l &&
                ("break" === e || "continue" === e) &&
                l.tryLoc <= n &&
                n <= l.finallyLoc &&
                (l = null);
              var o = l ? l.completion : {};
              return (
                (o.type = e),
                (o.arg = n),
                l
                  ? ((this.method = "next"), (this.next = l.finallyLoc), f)
                  : this.complete(o)
              );
            },
            complete: function (e, n) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && n && (this.next = n),
                f
              );
            },
            finish: function (e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.finallyLoc === e)
                  return this.complete(t.completion, t.afterLoc), _(t), f;
              }
            },
            catch: function (e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.tryLoc === e) {
                  var r = t.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    _(t);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, t) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: t }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Z(e, n, t, r, a, l, o) {
        try {
          var i = e[l](o),
            u = i.value;
        } catch (s) {
          return void t(s);
        }
        i.done ? n(u) : Promise.resolve(u).then(r, a);
      }
      function ee(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, a) {
            var l = e.apply(n, t);
            function o(e) {
              Z(l, r, a, o, i, "next", e);
            }
            function i(e) {
              Z(l, r, a, o, i, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function ne(e) {
        var n = (function (e, n) {
          if ("object" !== X(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, n || "default");
            if ("object" !== X(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === n ? String : Number)(e);
        })(e, "string");
        return "symbol" === X(n) ? n : String(n);
      }
      function te(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, ne(r.key), r);
        }
      }
      var re = new ((function () {
          function e(n) {
            !(function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.headers = n.headers),
              (this.baseUrl = n.baseUrl);
          }
          var n, t, r;
          return (
            (n = e),
            (t = [
              {
                key: "_checkResponseStatus",
                value: function (e) {
                  return e.ok
                    ? e.json()
                    : Promise.reject("Error: ".concat(e.status));
                },
              },
              {
                key: "getUserInfo",
                value: function () {
                  var e = this;
                  return fetch("".concat(this.baseUrl, "/users/me"), {
                    method: "GET",
                    headers: this.headers,
                  }).then(function (n) {
                    return e._checkResponseStatus(n);
                  });
                },
              },
              {
                key: "editUserInfo",
                value: function (e) {
                  var n = this;
                  return fetch("".concat(this.baseUrl, "/users/me"), {
                    method: "PATCH",
                    headers: this.headers,
                    body: JSON.stringify({ name: e.name, about: e.about }),
                  }).then(function (e) {
                    return n._checkResponseStatus(e);
                  });
                },
              },
              {
                key: "createCard",
                value: function (e) {
                  var n = this;
                  return fetch("".concat(this.baseUrl, "/cards"), {
                    method: "POST",
                    headers: this.headers,
                    body: JSON.stringify(e),
                  }).then(function (e) {
                    return n._checkResponseStatus(e);
                  });
                },
              },
              {
                key: "deleteCard",
                value: function (e) {
                  var n = this;
                  return fetch("".concat(this.baseUrl, "/cards/").concat(e), {
                    method: "DELETE",
                    headers: this.headers,
                  }).then(function (e) {
                    return n._checkResponseStatus(e);
                  });
                },
              },
              {
                key: "getCardsList",
                value: function () {
                  var e = this;
                  return fetch("".concat(this.baseUrl, "/cards"), {
                    method: "GET",
                    headers: this.headers,
                  }).then(function (n) {
                    return e._checkResponseStatus(n);
                  });
                },
              },
              {
                key: "changeLikeCardStatus",
                value: function (e, n) {
                  var t = this;
                  return n
                    ? fetch(
                        "".concat(this.baseUrl, "/cards/").concat(e, "/likes"),
                        { method: "PUT", headers: this.headers }
                      ).then(function (e) {
                        return t._checkResponseStatus(e);
                      })
                    : fetch(
                        "".concat(this.baseUrl, "/cards/").concat(e, "/likes"),
                        { method: "DELETE", headers: this.headers }
                      ).then(function (e) {
                        return t._checkResponseStatus(e);
                      });
                },
              },
              {
                key: "updateAvatar",
                value: function (e) {
                  var n = this;
                  return fetch("".concat(this.baseUrl, "/users/me/avatar"), {
                    method: "PATCH",
                    headers: this.headers,
                    body: JSON.stringify({ avatar: e.avatar }),
                  }).then(function (e) {
                    return n._checkResponseStatus(e);
                  });
                },
              },
            ]) && te(n.prototype, t),
            r && te(n, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })())({
          baseUrl: "https://mesto.nomoreparties.co/v1/cohort-56",
          headers: {
            authorization: "92d2b0f4-0f2d-4b0a-a7d7-4567fc3463f5",
            "Content-Type": "application/json",
          },
        }),
        ae = t(184);
      var le = function (e) {
          var n = e.email,
            t = e.onSignOutClick;
          return (0, ae.jsxs)("header", {
            className: "header",
            children: [
              (0, ae.jsx)("div", { className: "header__logo" }),
              (0, ae.jsx)("div", {
                className: "header__navigation",
                children: (0, ae.jsxs)(B, {
                  children: [
                    (0, ae.jsx)($, {
                      path: "/",
                      element: (0, ae.jsxs)(ae.Fragment, {
                        children: [
                          (0, ae.jsx)("p", {
                            className: "header__user-email",
                            children: n,
                          }),
                          (0, ae.jsx)(Y, {
                            className: "header__link header__link_dark",
                            to: "/sign-in",
                            onClick: t,
                            children: "Sign out",
                          }),
                        ],
                      }),
                    }),
                    (0, ae.jsx)($, {
                      path: "/sign-in",
                      element: (0, ae.jsx)(Y, {
                        className: "header__link",
                        to: "/sign-up",
                        children: "Sign up",
                      }),
                    }),
                    (0, ae.jsx)($, {
                      path: "/sign-up",
                      element: (0, ae.jsx)(Y, {
                        className: "header__link",
                        to: "/sign-in",
                        children: "Sign in",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        oe = n.createContext();
      var ie = function (e) {
        var t = e.card,
          r = e.onCardClick,
          a = e.onCardLike,
          l = e.onCardDelete,
          o = (0, n.useContext)(oe),
          i = t.owner._id === (null === o || void 0 === o ? void 0 : o._id),
          u = t.likes.some(function (e) {
            return e._id === (null === o || void 0 === o ? void 0 : o._id);
          }),
          s = "element__like ".concat(u && "element__like_active");
        return (0, ae.jsxs)("article", {
          className: "element",
          children: [
            (0, ae.jsx)("img", {
              className: "element__image",
              src: t.link,
              alt: t.name,
              onClick: function () {
                r(t);
              },
            }),
            (0, ae.jsx)("h2", {
              className: "element__title",
              children: t.name,
            }),
            (0, ae.jsxs)("div", {
              className: "element__like-container",
              children: [
                (0, ae.jsx)("button", {
                  "aria-label": "Like",
                  className: s,
                  type: "button",
                  onClick: function () {
                    a(t);
                  },
                }),
                (0, ae.jsx)("span", {
                  className: "element__like-counter",
                  children: t.likes.length,
                }),
              ],
            }),
            i &&
              (0, ae.jsx)("button", {
                "aria-label": "Delete",
                className: "element__delete",
                type: "button",
                onClick: function () {
                  l(t);
                },
              }),
          ],
        });
      };
      var ue = function (e) {
        var t = e.cards,
          r = e.onCardLike,
          a = e.onCardDelete,
          l = e.onCardClick,
          o = e.onEditProfile,
          i = e.onAddPlace,
          u = e.onEditAvatar,
          s = (0, n.useContext)(oe),
          c = t.map(function (e) {
            return (0, ae.jsx)(
              ie,
              {
                card: e,
                onCardClick: function (e) {
                  return l(e);
                },
                onCardLike: function (e) {
                  return r(e);
                },
                onCardDelete: function (e) {
                  return a(e);
                },
              },
              e._id
            );
          });
        return (0, ae.jsxs)("main", {
          className: "content",
          children: [
            (0, ae.jsxs)("section", {
              className: "profile",
              children: [
                (0, ae.jsxs)("div", {
                  className: "profile__avatar-container",
                  children: [
                    (0, ae.jsx)("img", {
                      src: null === s || void 0 === s ? void 0 : s.avatar,
                      alt: "\u0410\u0432\u0442\u0430\u0440\u0430\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                      className: "profile__avatar",
                    }),
                    (0, ae.jsx)("button", {
                      "area-label": "Edit Profile Picture",
                      className: "profile__avatar-edit-button",
                      type: "button",
                      onClick: u,
                    }),
                  ],
                }),
                (0, ae.jsxs)("div", {
                  className: "profile__profile-info",
                  children: [
                    (0, ae.jsx)("h1", {
                      className: "profile__name",
                      children: null === s || void 0 === s ? void 0 : s.name,
                    }),
                    (0, ae.jsx)("p", {
                      className: "profile__job",
                      children: null === s || void 0 === s ? void 0 : s.about,
                    }),
                    (0, ae.jsx)("button", {
                      "aria-label": "Edit Profile Info",
                      className: "profile__edit-button",
                      type: "button",
                      onClick: o,
                    }),
                  ],
                }),
                (0, ae.jsx)("button", {
                  "aria-label": "Add Card",
                  className: "profile__add-button",
                  type: "button",
                  onClick: i,
                }),
              ],
            }),
            (0, ae.jsx)("section", { className: "elements", children: c }),
          ],
        });
      };
      var se = function () {
        return (0, ae.jsx)("footer", {
          className: "footer",
          children: (0, ae.jsxs)("p", {
            className: "footer__copyright",
            children: ["\xa9 ", new Date().getFullYear(), " Mesto Russia"],
          }),
        });
      };
      function ce(e) {
        var t = e.onSubmit,
          r = o((0, n.useState)(""), 2),
          a = r[0],
          l = r[1],
          i = o((0, n.useState)(""), 2),
          u = i[0],
          s = i[1],
          c = (0, n.useCallback)(
            function (e) {
              e.preventDefault(), t({ email: a, password: u });
            },
            [a, u, t]
          );
        return (0, ae.jsx)("main", {
          className: "login",
          children: (0, ae.jsxs)("div", {
            className: "login__container",
            children: [
              (0, ae.jsx)("h2", {
                className: "login__title",
                children: "Sign in",
              }),
              (0, ae.jsxs)("form", {
                className: "login__form",
                onSubmit: c,
                children: [
                  (0, ae.jsxs)("div", {
                    className: "login__inputs",
                    children: [
                      (0, ae.jsx)("input", {
                        id: "email",
                        name: "email",
                        className: "login__input",
                        type: "email",
                        required: !0,
                        placeholder: "Email",
                        value: a,
                        onChange: function (e) {
                          return l(e.target.value);
                        },
                      }),
                      (0, ae.jsx)("input", {
                        id: "password",
                        name: "password",
                        className: "login__input",
                        type: "password",
                        required: !0,
                        placeholder: "Password",
                        value: u,
                        onChange: function (e) {
                          return s(e.target.value);
                        },
                      }),
                    ],
                  }),
                  (0, ae.jsx)("button", {
                    type: "submit",
                    className: "login__submit",
                    children: "Sign in",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function fe(e) {
        var t = e.onSubmit,
          r = o((0, n.useState)(""), 2),
          a = r[0],
          l = r[1],
          i = o((0, n.useState)(""), 2),
          u = i[0],
          s = i[1],
          c = (0, n.useCallback)(
            function (e) {
              e.preventDefault(), t({ email: a, password: u });
            },
            [a, u, t]
          );
        return (0, ae.jsx)("main", {
          className: "login",
          children: (0, ae.jsxs)("div", {
            className: "login__container",
            children: [
              (0, ae.jsx)("h2", {
                className: "login__title",
                children: "Sign up",
              }),
              (0, ae.jsxs)("form", {
                className: "login__form",
                onSubmit: c,
                children: [
                  (0, ae.jsxs)("div", {
                    className: "login__inputs",
                    children: [
                      (0, ae.jsx)("input", {
                        id: "email",
                        name: "email",
                        className: "login__input",
                        type: "email",
                        required: !0,
                        placeholder: "Email",
                        value: a,
                        onChange: function (e) {
                          return l(e.target.value);
                        },
                      }),
                      (0, ae.jsx)("input", {
                        id: "password",
                        name: "password",
                        className: "login__input",
                        type: "password",
                        required: !0,
                        placeholder: "Password",
                        value: u,
                        onChange: function (e) {
                          return s(e.target.value);
                        },
                      }),
                    ],
                  }),
                  (0, ae.jsx)("button", {
                    type: "submit",
                    className: "login__submit",
                    children: "Sign up",
                  }),
                ],
              }),
              (0, ae.jsxs)("span", {
                className: "login__link-text",
                children: [
                  "Already a user?",
                  " ",
                  (0, ae.jsx)(Y, {
                    to: "/sign-in",
                    className: "login__link",
                    children: "Sign in",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function de(e) {
        var t = e.isOpen,
          r = e.card,
          a = e.onClose;
        return (
          (0, n.useEffect)(
            function () {
              function e(e) {
                "Escape" === e.key && a();
              }
              if (t)
                return (
                  document.addEventListener("keydown", e),
                  function () {
                    document.removeEventListener("keydown", e);
                  }
                );
            },
            [t]
          ),
          (0, ae.jsx)("div", {
            className: "popup popup_action_view-photo ".concat(
              r ? "popup_opened" : ""
            ),
            onClick: function (e) {
              e.target.classList.contains("popup") && a();
            },
            children: (0, ae.jsxs)("figure", {
              className: "popup__figure",
              children: [
                (0, ae.jsx)("img", {
                  className: "popup__image",
                  src: null === r || void 0 === r ? void 0 : r.link,
                  alt: null === r || void 0 === r ? void 0 : r.name,
                }),
                (0, ae.jsx)("figcaption", {
                  className: "popup__figcaption",
                  children: null === r || void 0 === r ? void 0 : r.name,
                }),
                (0, ae.jsx)("button", {
                  "aria-label": "Close",
                  type: "button",
                  className: "popup__close",
                  onClick: a,
                }),
              ],
            }),
          })
        );
      }
      function pe(e, n, t) {
        return (
          (n = ne(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function he(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function me(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? he(Object(t), !0).forEach(function (n) {
                pe(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : he(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function ve(e) {
        var t = o((0, n.useState)(e), 2),
          r = t[0],
          a = t[1];
        return {
          values: r,
          handleChange: function (e) {
            var n = e.target,
              t = n.value,
              l = n.name;
            a(me(me({}, r), {}, pe({}, l, t)));
          },
          setValues: a,
        };
      }
      function ge(e) {
        var t = e.name,
          r = e.title,
          a = e.isOpen,
          l = e.onClose,
          o = e.onSubmit,
          i = e.children,
          u = e.buttonText;
        return (
          (0, n.useEffect)(
            function () {
              function e(e) {
                "Escape" === e.key && l();
              }
              if (a)
                return (
                  document.addEventListener("keydown", e),
                  function () {
                    document.removeEventListener("keydown", e);
                  }
                );
            },
            [a]
          ),
          (0, ae.jsx)("div", {
            className: "popup popup_action_"
              .concat(t, " ")
              .concat(a ? "popup_opened" : ""),
            onClick: function (e) {
              e.target.classList.contains("popup") && l();
            },
            children: (0, ae.jsxs)("div", {
              className: "popup__container",
              children: [
                (0, ae.jsx)("button", {
                  "aria-label": "Close",
                  type: "button",
                  className: "popup__close",
                  onClick: l,
                }),
                (0, ae.jsx)("h2", { className: "popup__title", children: r }),
                (0, ae.jsxs)("form", {
                  className: "popup__form",
                  name: t,
                  onSubmit: o,
                  children: [
                    i,
                    (0, ae.jsx)("button", {
                      type: "submit",
                      className: "popup__save-button",
                      children: u,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function ye(e) {
        var t = e.isOpen,
          r = e.onOverlay,
          a = e.onClose,
          l = e.onUpdateUser,
          o = e.buttonText,
          i = (0, n.useContext)(oe),
          u = ve({}),
          s = u.values,
          c = u.handleChange,
          f = u.setValues;
        return (
          (0, n.useEffect)(
            function () {
              f({
                name: null === i || void 0 === i ? void 0 : i.name,
                about: null === i || void 0 === i ? void 0 : i.about,
              });
            },
            [i, t]
          ),
          (0, ae.jsxs)(ge, {
            title: "Edit profile",
            name: "edit-profile",
            isOpen: t,
            onOverlay: r,
            onClose: a,
            onSubmit: function (e) {
              e.preventDefault(), l(s);
            },
            buttonText: o,
            children: [
              (0, ae.jsxs)("label", {
                className: "popup__field",
                children: [
                  (0, ae.jsx)("input", {
                    type: "text",
                    value: s.name || "",
                    id: "name-input",
                    className: "popup__input popup__input_field_name",
                    name: "name",
                    placeholder: "Name",
                    required: !0,
                    minLength: "2",
                    maxLength: "40",
                    onChange: c,
                  }),
                  (0, ae.jsx)("span", {
                    className: "popup__input-error name-input-error",
                  }),
                ],
              }),
              (0, ae.jsxs)("label", {
                className: "popup__field",
                children: [
                  (0, ae.jsx)("input", {
                    type: "text",
                    value: s.about || "",
                    id: "job-input",
                    className: "popup__input popup__input_field_job",
                    name: "about",
                    placeholder: "About",
                    required: !0,
                    minLength: "2",
                    maxLength: "200",
                    onChange: c,
                  }),
                  (0, ae.jsx)("span", {
                    className: "popup__input-error job-input-error",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function be(e) {
        var t = e.isOpen,
          r = e.onOverlay,
          a = e.onClose,
          l = e.onUpdateAvatar,
          o = e.buttonText,
          i = (0, n.useRef)();
        return (
          (0, n.useEffect)(
            function () {
              i.current.value = "";
            },
            [t]
          ),
          (0, ae.jsx)(ge, {
            title: "Update avatar",
            name: "update-avatar",
            isOpen: t,
            onOverlay: r,
            onClose: a,
            onSubmit: function (e) {
              e.preventDefault(), l({ avatar: i.current.value });
            },
            buttonText: o,
            children: (0, ae.jsxs)("label", {
              className: "popup__field",
              children: [
                (0, ae.jsx)("input", {
                  type: "url",
                  ref: i,
                  id: "avatar-input",
                  className: "popup__input popup__input_field_avatar-link",
                  name: "avatar-link",
                  placeholder: "Image link",
                  required: !0,
                }),
                (0, ae.jsx)("span", {
                  className: "popup__input-error avatar-input-error",
                }),
              ],
            }),
          })
        );
      }
      function ke(e) {
        var t = e.isOpen,
          r = e.onOverlay,
          a = e.onClose,
          l = e.onAddPlace,
          o = e.buttonText,
          i = ve({}),
          u = i.values,
          s = i.handleChange,
          c = i.setValues;
        return (
          (0, n.useEffect)(
            function () {
              c({});
            },
            [t]
          ),
          (0, ae.jsxs)(ge, {
            title: "New place",
            name: "add-place",
            isOpen: t,
            onOverlay: r,
            onClose: a,
            onSubmit: function (e) {
              e.preventDefault(), l(u);
            },
            buttonText: o,
            children: [
              (0, ae.jsxs)("label", {
                className: "popup__field",
                children: [
                  (0, ae.jsx)("input", {
                    type: "text",
                    value: u.name || "",
                    id: "place-input",
                    className: "popup__input popup__input_field_place-name",
                    name: "name",
                    placeholder: "Name",
                    required: !0,
                    minLength: "2",
                    maxLength: "30",
                    onChange: s,
                  }),
                  (0, ae.jsx)("span", {
                    className: "popup__input-error place-input-error",
                  }),
                ],
              }),
              (0, ae.jsxs)("label", {
                className: "popup__field",
                children: [
                  (0, ae.jsx)("input", {
                    type: "url",
                    value: u.link || "",
                    id: "link-input",
                    className: "popup__input popup__input_field_image-link",
                    name: "link",
                    placeholder: "Image link",
                    required: !0,
                    onChange: s,
                  }),
                  (0, ae.jsx)("span", {
                    className: "popup__input-error link-input-error",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function we(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (t = l[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (t = l[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var Se = ["element"],
        xe = function (e) {
          var n = e.element,
            t = we(e, Se);
          return t.loggedIn
            ? (0, ae.jsx)(n, me({}, t))
            : (0, ae.jsx)(A, { to: "/sign-in", replace: !0 });
        },
        _e = "https://auth.nomoreparties.co",
        Ee = function (e) {
          return e.ok ? e.json() : Promise.reject("Error: ".concat(e.status));
        },
        Ce = (function () {
          var e = ee(
            J().mark(function e(n) {
              var t;
              return J().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch("".concat(_e, "/signup"), {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(n),
                        })
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", Ee(t));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Ne = (function () {
          var e = ee(
            J().mark(function e(n) {
              var t;
              return J().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch("".concat(_e, "/signin"), {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(n),
                        })
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", Ee(t));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Pe = (function () {
          var e = ee(
            J().mark(function e(n) {
              var t;
              return J().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch("".concat(_e, "/users/me"), {
                          method: "GET",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(n),
                          },
                        })
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", Ee(t));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      var Le =
        t.p + "static/media/signup-fail.df8eddf661ff88f2d0efd3d570d14309.svg";
      var je =
        t.p +
        "static/media/signup-success.1b6082f862eac35e2514460237d96ecc.svg";
      function Oe(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = e.status;
        return (0, ae.jsx)("div", {
          className: "popup ".concat(n ? "popup_opened" : ""),
          children: (0, ae.jsxs)("div", {
            className: "popup__container popup_action_signup-status",
            children: [
              (0, ae.jsx)("button", {
                className: "popup__close",
                type: "button",
                "aria-label": "Close",
                onClick: t,
              }),
              (0, ae.jsx)("img", { src: r ? je : Le }),
              (0, ae.jsx)("h2", {
                className: "popup__title popup__title_signup-status",
                children: r
                  ? "You have successfully signed up!"
                  : "Something went wrong! Try again.",
              }),
            ],
          }),
        });
      }
      var Te = function () {
          var e = o((0, n.useState)(null), 2),
            t = e[0],
            r = e[1],
            a = o((0, n.useState)(!1), 2),
            l = a[0],
            i = a[1],
            u = o((0, n.useState)(!1), 2),
            s = u[0],
            c = u[1],
            f = o((0, n.useState)(!1), 2),
            d = f[0],
            p = f[1],
            h = o((0, n.useState)(!1), 2),
            m = h[0],
            v = h[1],
            g = o((0, n.useState)(null), 2),
            y = g[0],
            b = g[1],
            k = o((0, n.useState)([]), 2),
            w = k[0],
            S = k[1],
            x = o((0, n.useState)(!1), 2),
            _ = x[0],
            E = x[1],
            C = o((0, n.useState)(!1), 2),
            N = C[0],
            P = C[1],
            L = o((0, n.useState)(!1), 2),
            j = L[0],
            O = L[1],
            T = o((0, n.useState)(!1), 2),
            z = T[0],
            R = T[1],
            M = o((0, n.useState)(!1), 2),
            F = M[0],
            D = M[1],
            U = o((0, n.useState)(!1), 2),
            A = U[0],
            V = U[1],
            W = o((0, n.useState)(""), 2),
            H = W[0],
            Q = W[1],
            q = I(),
            K = (0, n.useCallback)(
              (function () {
                var e = ee(
                  J().mark(function e(n) {
                    return J().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), Ce(n);
                            case 3:
                              D(!0), V(!0), q("/sign-in"), (e.next = 13);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                D(!0),
                                V(!1),
                                console.log(e.t0);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [q]
            ),
            Y = (0, n.useCallback)(
              (function () {
                var e = ee(
                  J().mark(function e(n) {
                    var t, r;
                    return J().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), Ne(n);
                            case 3:
                              (t = e.sent),
                                (r = t.token),
                                localStorage.setItem("jwt", r),
                                R(!0),
                                q("/"),
                                (e.next = 15);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                D(!0),
                                V(!1),
                                console.log(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    );
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [q]
            );
          function X() {
            p(!1), c(!1), i(!1), v(!1), b(null);
          }
          return (
            (0, n.useEffect)(
              function () {
                var e = localStorage.getItem("jwt");
                e &&
                  Pe(e)
                    .then(function (e) {
                      R(!0), Q(e.data.email), q("/");
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              },
              [q]
            ),
            (0, n.useEffect)(
              function () {
                z &&
                  Promise.all([re.getUserInfo(), re.getCardsList()])
                    .then(function (e) {
                      var n = o(e, 2),
                        t = n[0],
                        a = n[1];
                      r(t), S(a);
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              },
              [z]
            ),
            (0, ae.jsxs)(oe.Provider, {
              value: t,
              children: [
                (0, ae.jsx)(le, {
                  email: H,
                  onSignOutClick: function () {
                    localStorage.removeItem("jwt"),
                      q("/sign-in", { replace: !0 });
                  },
                }),
                (0, ae.jsxs)(B, {
                  children: [
                    (0, ae.jsx)($, {
                      path: "/",
                      element: (0, ae.jsx)(xe, {
                        element: ue,
                        loggedIn: z,
                        cards: w,
                        onCardLike: function (e) {
                          var n = e.likes.some(function (e) {
                            return e._id === t._id;
                          });
                          re.changeLikeCardStatus(e._id, !n)
                            .then(function (n) {
                              S(function (t) {
                                return t.map(function (t) {
                                  return t._id === e._id ? n : t;
                                });
                              });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                        onCardDelete: function (e) {
                          re.deleteCard(e._id)
                            .then(function () {
                              S(function (n) {
                                return n.filter(function (n) {
                                  return n._id !== e._id;
                                });
                              });
                            })
                            .catch(function (e) {
                              return console.log(e);
                            });
                        },
                        onCardClick: function (e) {
                          b(e), v(!0);
                        },
                        onEditProfile: function () {
                          i(!0);
                        },
                        onAddPlace: function () {
                          c(!0);
                        },
                        onEditAvatar: function () {
                          p(!0);
                        },
                      }),
                    }),
                    (0, ae.jsx)($, {
                      path: "/sign-in",
                      element: (0, ae.jsx)(ce, { onSubmit: Y }),
                    }),
                    (0, ae.jsx)($, {
                      path: "/sign-up",
                      element: (0, ae.jsx)(fe, { onSubmit: K }),
                    }),
                  ],
                }),
                (0, ae.jsx)(Oe, {
                  isOpen: F,
                  onClose: function () {
                    D(!1);
                  },
                  status: A,
                }),
                (0, ae.jsx)(de, { isOpen: m, card: y, onClose: X }),
                (0, ae.jsx)(ye, {
                  isOpen: l,
                  onClose: X,
                  onUpdateUser: function (e) {
                    E(!0),
                      re
                        .editUserInfo(e)
                        .then(function (e) {
                          r(e), X();
                        })
                        .catch(function (e) {
                          return console.log(e);
                        })
                        .finally(function () {
                          return E(!1);
                        });
                  },
                  buttonText: _ ? "Saving..." : "Save",
                }),
                (0, ae.jsx)(ke, {
                  isOpen: s,
                  onClose: X,
                  onAddPlace: function (e) {
                    P(!0),
                      re
                        .createCard(e)
                        .then(function (e) {
                          S([e].concat(G(w))), X();
                        })
                        .catch(function (e) {
                          return console.log(e);
                        })
                        .finally(function () {
                          return P(!1);
                        });
                  },
                  buttonText: N ? "Saving..." : "Save",
                }),
                (0, ae.jsx)(ge, {
                  title: "Are you sure?",
                  name: "delete-card",
                  buttonText: "Yes",
                }),
                (0, ae.jsx)(be, {
                  isOpen: d,
                  onClose: X,
                  onUpdateAvatar: function (e) {
                    O(!0),
                      re
                        .updateAvatar(e)
                        .then(function (e) {
                          r(e), X();
                        })
                        .catch(function (e) {
                          return console.log(e);
                        })
                        .finally(function () {
                          return O(!1);
                        });
                  },
                  buttonText: j ? "Saving..." : "Save",
                }),
                (0, ae.jsx)(se, {}),
              ],
            })
          );
        },
        ze = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(787)
              .then(t.bind(t, 787))
              .then(function (n) {
                var t = n.getCLS,
                  r = n.getFID,
                  a = n.getFCP,
                  l = n.getLCP,
                  o = n.getTTFB;
                t(e), r(e), a(e), l(e), o(e);
              });
        };
      r
        .createRoot(document.getElementById("root"))
        .render(
          (0, ae.jsx)(n.StrictMode, {
            children: (0, ae.jsx)(K, { children: (0, ae.jsx)(Te, {}) }),
          })
        ),
        ze();
    })();
})();
//# sourceMappingURL=main.42f861bd.js.map
