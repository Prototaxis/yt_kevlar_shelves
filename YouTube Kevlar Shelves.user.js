// ==UserScript==
// @name         YouTube Kevlar Shelves TV Chips
// @namespace    http://tampermonkey.net/
// @updateURL    https://github.com/Prototaxis/yt_kevlar_shelves/raw/tv_chips/YouTube%20Kevlar%20Shelves.user.js
// @downloadURL  https://github.com/Prototaxis/yt_kevlar_shelves/raw/tv_chips/YouTube%20Kevlar%20Shelves.user.js
// @version      0.3.9
// @description  This userscript restores YouTube homepage shelves
// @author       Prototaxis
// @match        *://*.youtube.com/*
// @icon         data:image/png;base64,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
// @run-at       document-start
// @grant        none
// ==/UserScript==
(() => {
  function getSapisidhash() {
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /* SHA-1 (FIPS 180-4) implementation in JavaScript                    (c) Chris Veness 2002-2019  */
    /*                                                                                   MIT Licence  */
    /* www.movable-type.co.uk/scripts/sha1.html                                                       */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

    /**
     * SHA-1 hash function reference implementation.
     *
     * This is an annotated direct implementation of FIPS 180-4, without any optimisations. It is
     * intended to aid understanding of the algorithm rather than for production use.
     *
     * While it could be used where performance is not critical, I would recommend using the ‘Web
     * Cryptography API’ (developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) for the browser,
     * or the ‘crypto’ library (nodejs.org/api/crypto.html#crypto_class_hash) in Node.js.
     *
     * See csrc.nist.gov/groups/ST/toolkit/secure_hashing.html
     *     csrc.nist.gov/groups/ST/toolkit/examples.html
     */
    class Sha1 {
      /**
       * Generates SHA-1 hash of string.
       *
       * @param   {string} msg - (Unicode) string to be hashed.
       * @param   {Object} [options]
       * @param   {string} [options.msgFormat=string] - Message format: 'string' for JavaScript string
       *   (gets converted to UTF-8 for hashing); 'hex-bytes' for string of hex bytes ('616263' ≡ 'abc') .
       * @param   {string} [options.outFormat=hex] - Output format: 'hex' for string of contiguous
       *   hex bytes; 'hex-w' for grouping hex bytes into groups of (4 byte / 8 character) words.
       * @returns {string} Hash of msg as hex character string.
       *
       * @example
       *   import Sha1 from './sha1.js';
       *   const hash = Sha1.hash('abc'); // 'a9993e364706816aba3e25717850c26c9cd0d89d'
       */
      static hash(msg, options) {
        const defaults = {
          msgFormat: "string",
          outFormat: "hex",
        };
        const opt = Object.assign(defaults, options);

        switch (opt.msgFormat) {
          default: // default is to convert string to UTF-8, as SHA only deals with byte-streams
          case "string":
            msg = utf8Encode(msg);
            break;
          case "hex-bytes":
            msg = hexBytesToString(msg);
            break; // mostly for running tests
        }

        // constants [§4.2.1]
        const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

        // initial hash value [§5.3.1]
        const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

        // PREPROCESSING [§6.1.1]

        msg += String.fromCharCode(0x80); // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

        // convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
        const l = msg.length / 4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length
        const N = Math.ceil(l / 16); // number of 16-integer-blocks required to hold 'l' ints
        const M = new Array(N);

        for (let i = 0; i < N; i++) {
          M[i] = new Array(16);
          for (let j = 0; j < 16; j++) {
            // encode 4 chars per integer, big-endian encoding
            M[i][j] =
              (msg.charCodeAt(i * 64 + j * 4 + 0) << 24) |
              (msg.charCodeAt(i * 64 + j * 4 + 1) << 16) |
              (msg.charCodeAt(i * 64 + j * 4 + 2) << 8) |
              (msg.charCodeAt(i * 64 + j * 4 + 3) << 0);
          } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
        }
        // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
        // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
        // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
        M[N - 1][14] = ((msg.length - 1) * 8) / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = ((msg.length - 1) * 8) & 0xffffffff;

        // HASH COMPUTATION [§6.1.2]

        for (let i = 0; i < N; i++) {
          const W = new Array(80);

          // 1 - prepare message schedule 'W'
          for (let t = 0; t < 16; t++) W[t] = M[i][t];
          for (let t = 16; t < 80; t++)
            W[t] = Sha1.ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);

          // 2 - initialise five working variables a, b, c, d, e with previous hash value
          let a = H[0],
            b = H[1],
            c = H[2],
            d = H[3],
            e = H[4];

          // 3 - main loop (use JavaScript '>>> 0' to emulate UInt32 variables)
          for (let t = 0; t < 80; t++) {
            const s = Math.floor(t / 20); // seq for blocks of 'f' functions and 'K' constants
            const T =
              (Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t]) >>> 0;
            e = d;
            d = c;
            c = Sha1.ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }

          // 4 - compute the new intermediate hash value (note 'addition modulo 2^32' – JavaScript
          // '>>> 0' coerces to unsigned UInt32 which achieves modulo 2^32 addition)
          H[0] = (H[0] + a) >>> 0;
          H[1] = (H[1] + b) >>> 0;
          H[2] = (H[2] + c) >>> 0;
          H[3] = (H[3] + d) >>> 0;
          H[4] = (H[4] + e) >>> 0;
        }

        // convert H0..H4 to hex strings (with leading zeros)
        for (let h = 0; h < H.length; h++)
          H[h] = ("00000000" + H[h].toString(16)).slice(-8);

        // concatenate H0..H4, with separator if required
        const separator = opt.outFormat == "hex-w" ? " " : "";

        return H.join(separator);

        /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

        function utf8Encode(str) {
          try {
            return new TextEncoder()
              .encode(str, "utf-8")
              .reduce((prev, curr) => prev + String.fromCharCode(curr), "");
          } catch (e) {
            // no TextEncoder available?
            return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
          }
        }

        function hexBytesToString(hexStr) {
          // convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
          const str = hexStr.replace(" ", ""); // allow space-separated groups
          return str == ""
            ? ""
            : str
                .match(/.{2}/g)
                .map((byte) => String.fromCharCode(parseInt(byte, 16)))
                .join("");
        }
      }

      /**
       * Function 'f' [§4.1.1].
       * @private
       */
      static f(s, x, y, z) {
        switch (s) {
          case 0:
            return (x & y) ^ (~x & z); // Ch()
          case 1:
            return x ^ y ^ z; // Parity()
          case 2:
            return (x & y) ^ (x & z) ^ (y & z); // Maj()
          case 3:
            return x ^ y ^ z; // Parity()
        }
      }

      /**
       * Rotates left (circular left shift) value x by n positions [§3.2.5].
       * @private
       */
      static ROTL(x, n) {
        return (x << n) | (x >>> (32 - n));
      }
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

    function gethash() {
      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");

        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }

        return "";
      }

      var time = Math.round(new Date() / 1000);
      var xorigin = "https://www.youtube.com";
      var sapisid = getCookie("SAPISID");

      var hash = Sha1.hash(time + " " + sapisid + " " + xorigin);

      return "SAPISIDHASH " + time + "_" + hash;
    }

    return gethash();
  }

  function uleb128(val) {
    // simple uleb128
    // strings are awful but this works with 64-bit numbers well
    // javascript bitwise operators are 32-bit, else we'd have a good solution
    var bin = val.toString(2);
    var pad = 7 - (bin.length % 7);
    if (pad !== 7) {
      bin = "0000000".substr(0, pad) + bin;
    }
    bin =
      "0" +
      bin
        .match(/.{7}/g)
        .map((a) => "1" + a)
        .join("")
        .slice(1);
    //if (typeof val === "bigint"){

    var hex = BigInt("0b" + bin).toString(16); //} else {

    //var hex = parseInt(bin, 2).toString(16);}
    hex = hex.length & 1 ? "0" + hex : hex;
    hex = hex.match(/.{2}/g).reverse().join("");

    return hex;
  }

  function uleb128toInt(val) {
    // val: hex string
    val = val.length & 1 ? "0" + val : val;
    var hex = val.match(/.{2}/g).reverse().join("");

    var bin = BigInt("0x" + hex).toString(2);
    var pad = 8 - (bin.length % 8);
    if (pad !== 8) {
      bin = "00000000".substr(0, pad) + bin;
    }

    bin = bin
      .match(/.{8}/g)
      .map((a) => a.slice(1))
      .join("");
    var integer = BigInt("0x" + bin);

    return integer;
  }

  function ulsh64(num, shift) {
    // javascript bad language
    // left shifting for large numbers
    // without overflow
    num = +num;
    if (shift <= 0) return num; // prevent freeze
    var bin = num.toString(2);
    var i;
    while (shift > 0) {
      bin += "0";
      shift--;
    }
    num = parseInt(bin, 2);
    return num;
  }

  function uor64(a, b) {
    a = +a;
    b = +b;
    var ba = a.toString(2),
      bb = b.toString(2);
    var lc = ba.length - bb.length;
    // holy shit this is fucking awful
    while (lc < 0) {
      ba = "0" + ba;
      lc++;
    }
    while (lc > 0) {
      bb = "0" + bb;
      lc--;
    }
    ba = ba.split("");
    bb = bb.split("");
    for (var i = 0, j = ba.length; i < j; i++) {
      ba[i] = parseInt(ba[i], 2) || parseInt(bb[i], 2);
    }
    ba = ba.join("");
    var num = parseInt(ba, 2);
    return num;
  }

  function floatbin(val) {
    // todo
  }

  function doublebin(val) {
    // todo
  }

  const WIRETYPE_VARINT = 0;
  const WIRETYPE_DOUBLE = 0;
  const WIRETYPE_LENGTH = 2;
  const WIRETYPE_GROUPSTART = 3;
  const WIRETYPE_GROUPEND = 4;
  const WIRETYPE_FLOAT = 5;

  const FIELD_NUM = 0;
  const FIELD_WIRETYPE = 1;
  const FIELD_NEST = 2;

  var quickPb = {
    // quick protobuf compiler with really messy code
    // enough for our needs
    compile: function (obj, fields) {
      var response = "";
      if (!fields) fields = quickPb.compileFields(obj);
      Object.keys(obj).forEach(function (key) {
        if (Array.isArray(obj[key])) {
          Object.keys(obj[key]).forEach(function (el) {
            response += quickPb.compileKvPair(
              `${key}_${el}`,
              obj[key][el],
              fields
            );
          });
        } else {
          response += quickPb.compileKvPair(key, obj[key], fields);
        }
      });
      return response.toLowerCase().replace(" ", ""); // normalise hex just in case
    },
    compileFields: function (obj) {
      var fields = {};
      Object.keys(obj).forEach(function (key) {
        var type,
          nest = null;
        switch (Array.isArray(obj[key])) {
          case true:
            Object.keys(obj[key]).forEach(function (el) {
              var type,
                nest = null;
              switch (typeof obj[key][el]) {
                case "object":
                  type = WIRETYPE_LENGTH;
                  nest = quickPb.compileFields(obj[key][el]);
                  break;
                case "string":
                  type = WIRETYPE_LENGTH;
                  break;
                case "bigint":
                  type = WIRETYPE_VARINT;
                  break;
                case "number":
                default:
                  switch (obj[key][el]) {
                    case Math.floor(obj[key][el]):
                      type = WIRETYPE_VARINT;
                      break;
                    // JS numbers are always double-precision floats,
                    // however we can store less precise doubles as
                    // a 32-bit float for compactness
                    case ((obj[key][el] * 1e7) | 0) / 1e7: // convert to float
                      type = WIRETYPE_FLOAT;
                      break;
                  }
                  break;
              }
              fields[`${key}_${el}`] = [key, type, nest];
            });
            break;
          default:
            switch (typeof obj[key]) {
              case "object":
                type = WIRETYPE_LENGTH;
                nest = quickPb.compileFields(obj[key]);
                break;
              case "string":
                type = WIRETYPE_LENGTH;
                break;
              case "bigint":
                type = WIRETYPE_VARINT;
                break;
              case "number":
              default:
                switch (obj[key]) {
                  case Math.floor(obj[key]):
                    type = WIRETYPE_VARINT;
                    break;
                  // JS numbers are always double-precision floats,
                  // however we can store less precise doubles as
                  // a 32-bit float for compactness
                  case ((obj[key] * 1e7) | 0) / 1e7: // convert to float
                    type = WIRETYPE_FLOAT;
                    break;
                }
                break;
            }
            fields[key] = [key, type, nest];
            break;
        }
      });
      return fields;
    },
    compileKvPair: function (key, val, fields) {
      if (!fields[key]) return "";
      var field = fields[key];
      var wireType = field[FIELD_WIRETYPE];
      var keyHeader = quickPb.compileKey(field);
      switch (wireType) {
        case WIRETYPE_VARINT: // varint
          return keyHeader + quickPb.compileVarint(val);
          break;
        case WIRETYPE_DOUBLE: // double (UNIMPLEMENTED)
        case WIRETYPE_LENGTH: // length delimited
          switch (typeof val) {
            case "object":
              return (
                keyHeader +
                quickPb.compileLd(quickPb.compile(val, field[FIELD_NEST]))
              );
              break;
            case "string":
            default:
              return keyHeader + quickPb.compileString(val);
              break;
          }
          break;
        case WIRETYPE_GROUPSTART: // group start (UNIMPLEMENTED)
        case WIRETYPE_GROUPEND: // group end (UNIMPLEMENTED)
        case WIRETYPE_FLOAT: // float (UNIMPLEMENTED)
          break;
      }
    },
    compileKey: function (keyField) {
      var num = keyField[FIELD_NUM];
      var wireType = keyField[FIELD_WIRETYPE];
      return quickPb.compileVarint(quickPb.getKey(num, wireType));
    },
    compileVarint: function (a) {
      return uleb128(a);
    },
    compileFloat: function (a) {
      // todo
    },
    compileDouble: function (a) {
      // todo
    },
    compileString: function (str) {
      return quickPb.compileLd(quickPb.toHex(str));
    },
    compileLd: function (hexString) {
      var ldLen = quickPb.getSize(hexString);
      return quickPb.compileVarint(ldLen) + hexString;
    },
    getSize: function (hexString) {
      var a = hexString.length;
      return (a + (a % 2)) / 2;
    },
    getKey: function (fieldNumber, wireType) {
      var shift = fieldNumber << 3;
      if (shift <= 0) {
        return uor64(ulsh64(fieldNumber, 3), wireType); // prevent int overflow
      }
      return shift | wireType;
    },
    toHex: function (str) {
      var hex,
        result = "";
      for (var i = 0; i < str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += (+(hex.length >= 2) && "") + hex;
      }
      return result;
    },
    decompile: function (str) {
      // todo
    },
  };

  function generatePb(params) {
    const b16tob64 = (str) =>
      btoa(
        str
          .match(/\w{2}/g)
          .map((a) => String.fromCharCode(parseInt(a, 16)))
          .join("")
      );
    var response = quickPb.compile(params);
    response = b16tob64(response)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/\=/g, "");
    return response;
  }

  var modifyPb = {
    basef: function ($str) {
      return atob(
        atob(
          atob($str.replace(/\_/g, "/").replace(/%3D/g, "").replace(/\-/g, "+"))
            .match(
              /\u00E2\u00A9\u0085\u00B2\u0002.*\u0012\u000FFEwhat_to_watch\u001A.{1,3}((?:C|w)[\w-%]+)(?:\u009a\u0002\u001abrowse-feedFEwhat_to_watch)?/
            )[1]
            .replace(/\-/g, "+")
            .replace(/\_/g, "/")
            .replace(/%3D/g, "")
        )
          .match(
            /(?:\u0008.{1})?.*(?:\u007a|\u00c2\u0004).{1,2}(G[\w-%]+)(?:\u00fa\u0006.*)?/
          )[1]
          .replace(/\-/g, "+")
          .replace(/\_/g, "/")
          .replace(/%3D/g, "")
      )
        .replace(
          /(.*)(?:\u00FA\u009C\u00C7\u00BD\u0009|\u008a\u0082\u00FA\u00DA\u0009).{1,2}\u0008.*/,
          "$1\u00DA\u00FA\u00CF\u0094\u000A\u0002\u0008\u0000"
        )
        .replace(
          /2[\n|.][\u0008\u001a]?[\s\S]*(Z[\s\S]\u000a[\s\S]\u000a\u0019yt_page_snapshot_regional\u0012[\s\S]*)/,
          "$1"
        );
    },
    home: function ($str, $client = 7) {
      return generatePb({
        15: btoa(
          this.basef($str).replace(
            /\u0000\u0001\u0000\u0001.\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0001\u0001/,
            `\u0000\u0001\u0000\u0001${String.fromCodePoint(
              $client
            )}\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0001\u0001`
          )
        )
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, ""),
      });
    },
    tv: function ($str, $type) {
      let ct = $type.length;
      return generatePb({
        72: btoa(
          this.basef($str)
            .replace(
              /\u005a(.)\u000A(.)\u000A\u0019yt_page_snapshot_regional/,
              (a, b, c) =>
                `\u005a${String.fromCharCode(
                  b.charCodeAt(0) + ct + 5
                )}\u000A${String.fromCharCode(
                  c.charCodeAt() + ct + 5
                )}\u000A\u0024yt_page_snapshot_livingroom_regional`
            )
            .replace(
              /\u001a(.)(.{15,18})FEwhat_to_watch\u0000\u0001\u0000\u0001.\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0001\u0001/,
              (a, b, c) =>
                `\u001a${String.fromCharCode(
                  b.charCodeAt() - 6 + ct
                )}${c}FEtopics_${$type}\u0000\u0001\u0000\u0001\u0007\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0001\u0001`
            )
        )
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, ""),
      });
    },
    token: function ($str, $mode) {
      let m = (typeof $mode == "number" ? "home" : "tv");
      return generatePb({
        80226972: {
          2: "FEwhat_to_watch",
          3: this[m]($str, $mode),
          35: "browse-feedFEwhat_to_watch",
        },
      });
    },
  };

  var requestTypeObj = {
    hpMatrix: {
      auth: true,
      link: "browse",
      client: {
        clientName: "7",
        clientVersion: "7.20220101",
      },
      params: {
        browseId: "FEwhat_to_watch",
      },
    },
    hpKevlar: {
      auth: true,
      link: "browse",
      client: {
        clientName: "1",
        clientVersion: "2.20220101",
      },
      params: {
        browseId: "FEwhat_to_watch",
      },
    },
  };

  var requestBodyBase = {
    context: {
      client: {
        hl: "en",
        gl: "US",
      },
    },
  };

  function requestHeaders(requestType) {
    let headers = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credientials: "same-origin",
      headers: {
        ...(requestTypeObj[requestType].auth && {
          ...(yt.config_.LOGGED_IN && {
            Authorization: getSapisidhash(),
          }),
          ...((yt.config_.DELEGATED_SESSION_ID ? true : false) && {
            "X-Goog-PageId": yt.config_.DELEGATED_SESSION_ID,
          }),
          "X-Goog-Visitor-Id": yt.config_.VISITOR_DATA,
          "X-Goog-AuthUser": +yt.config_.SESSION_INDEX,
        }),
        "X-Youtube-Client-Name": "1",
        "X-YOUTUBE-CLIENT-VERSION": "2.20180101",
      },
      redirect: "follow",
      referrerPolicy: "strict-origin-when-cross-origin",
    };
    return headers;
  }

  async function requestYoutubei($requestType, $bp = "") {
    var ot = requestTypeObj[$requestType];
    let url =
      "https://www.youtube.com/youtubei/v1/" +
      ot.link +
      "?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false";
    requestBodyBase.context.client = {
      ...requestBodyBase.context.client,
      ...ot.client,
    };
    let headers = requestHeaders($requestType);
    headers.body = JSON.stringify({
      ...requestBodyBase,
      ...ot.params,
      params: $bp,
    });
    var response = await fetch(url, headers);
    var responseJson = await response.json();
    return responseJson;
  }

  function cacheF(fn) {
    let cache = {};
    return async function() {
      if ('val' in cache) {
        console.log('Fetching from cache');
        return cache['val'];
      }
      else {
        console.log('Calculating result');
        let result = await fn();
        cache['val'] = await result;
        return await result;
      }
    }
  }

  async function base_getct() {
      let response = await requestYoutubei("hpMatrix");
      /*let token = await response.contents.singleColumnBrowseResultsRenderer.tabs[0]
      .tabRenderer.content.sectionListRenderer.continuations[1]
      .reloadContinuationData.continuation;
      let ct = modifyPb.token(await token); // ios shelves*/
      let token = await response.contents.tvBrowseRenderer.content
        .tvSecondaryNavRenderer.sections[0].tvSecondaryNavSectionRenderer
        .tabs[0].tabRenderer.content.tvSurfaceContentRenderer.content
        .sectionListRenderer.continuations[0].nextContinuationData.continuation;
      return {
        all: modifyPb.token(await token),
        music: modifyPb.tv(await token, "music"),
        movies: modifyPb.tv(await token, "movies"),
        gaming: modifyPb.tv(await token, "gaming"),
        news: modifyPb.tv(await token, "news"),
        live: modifyPb.tv(await token, "live"),
        sports: modifyPb.tv(await token, "sports"),
      }
  }

  const getct = cacheF(base_getct);
  
  var skeleton = {
    contents: {
      twoColumnBrowseResultsRenderer: {
        tabs: [
          {
            tabRenderer: {
              selected: true,
              content: {
                richGridRenderer: {
                  contents: [
                    {
                      continuationItemRenderer: {
                        ghostCards: { ghostGridRenderer: { rows: 2 } },
                      },
                    },
                  ],
                  targetId: "browse-feedFEwhat_to_watch",
                  reflowOptions: {
                    minimumRowsOfVideosAtStart: 2,
                    minimumRowsOfVideosBetweenSections: 1,
                  },
                },
              },
              tabIdentifier: "FEwhat_to_watch",
            },
          },
        ],
      },
    },
  };

  async function ctokenCommand() {
    return {
      contents: {
        twoColumnBrowseResultsRenderer: {
          tabs: [
            {
              tabRenderer: {
                selected: true,
                content: {
                  richGridRenderer: {
                    header: {
                      feedFilterChipBarRenderer: {
                        contents: [
                          {
                            chipCloudChipRenderer: {
                              style: {
                                styleType: "STYLE_HOME_FILTER",
                              },
                              text: {
                                runs: [
                                  {
                                    text: "All",
                                  },
                                ],
                              },
                              isSelected: true,
                            },
                          },
                          {
                            chipCloudChipRenderer: {
                              style: {
                                styleType: "STYLE_HOME_FILTER",
                              },
                              text: {
                                runs: [
                                  {
                                    text: "Music",
                                  },
                                ],
                              },
                              navigationEndpoint: {
                                commandMetadata: {
                                  webCommandMetadata: {
                                    sendPost: true,
                                    apiUrl: "/youtubei/v1/browse",
                                  },
                                },
                                continuationCommand: {
                                  token: await getct().music,
                                  request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                                  command: {
                                    showReloadUiCommand: {
                                      targetId: "browse-feedFEwhat_to_watch",
                                    },
                                  },
                                },
                              },
                              targetId: "feed_filter_chip_bar_second_chip",
                            },
                          },
                          {
                            chipCloudChipRenderer: {
                              style: {
                                styleType: "STYLE_HOME_FILTER",
                              },
                              text: {
                                runs: [
                                  {
                                    text: "Movies",
                                  },
                                ],
                              },
                              navigationEndpoint: {
                                commandMetadata: {
                                  webCommandMetadata: {
                                    sendPost: true,
                                    apiUrl: "/youtubei/v1/browse",
                                  },
                                },
                                continuationCommand: {
                                  token: await getct().movies,
                                  request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                                  command: {
                                    showReloadUiCommand: {
                                      targetId: "browse-feedFEwhat_to_watch",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          {
                            chipCloudChipRenderer: {
                              style: {
                                styleType: "STYLE_HOME_FILTER",
                              },
                              text: {
                                runs: [
                                  {
                                    text: "Gaming",
                                  },
                                ],
                              },
                              navigationEndpoint: {
                                commandMetadata: {
                                  webCommandMetadata: {
                                    sendPost: true,
                                    apiUrl: "/youtubei/v1/browse",
                                  },
                                },
                                continuationCommand: {
                                  token: await getct().gaming,
                                  request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                                  command: {
                                    showReloadUiCommand: {
                                      targetId: "browse-feedFEwhat_to_watch",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          {
                            chipCloudChipRenderer: {
                              style: {
                                styleType: "STYLE_HOME_FILTER",
                              },
                              text: {
                                runs: [
                                  {
                                    text: "News",
                                  },
                                ],
                              },
                              navigationEndpoint: {
                                commandMetadata: {
                                  webCommandMetadata: {
                                    sendPost: true,
                                    apiUrl: "/youtubei/v1/browse",
                                  },
                                },
                                continuationCommand: {
                                  token: await getct().news,
                                  request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                                  command: {
                                    showReloadUiCommand: {
                                      targetId: "browse-feedFEwhat_to_watch",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          {
                            chipCloudChipRenderer: {
                              style: {
                                styleType: "STYLE_HOME_FILTER",
                              },
                              text: {
                                runs: [
                                  {
                                    text: "Live",
                                  },
                                ],
                              },
                              navigationEndpoint: {
                                commandMetadata: {
                                  webCommandMetadata: {
                                    sendPost: true,
                                    apiUrl: "/youtubei/v1/browse",
                                  },
                                },
                                continuationCommand: {
                                  token: await getct().live,
                                  request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                                  command: {
                                    showReloadUiCommand: {
                                      targetId: "browse-feedFEwhat_to_watch",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          {
                            chipCloudChipRenderer: {
                              style: {
                                styleType: "STYLE_HOME_FILTER",
                              },
                              text: {
                                runs: [
                                  {
                                    text: "Sports",
                                  },
                                ],
                              },
                              navigationEndpoint: {
                                commandMetadata: {
                                  webCommandMetadata: {
                                    sendPost: true,
                                    apiUrl: "/youtubei/v1/browse",
                                  },
                                },
                                continuationCommand: {
                                  token: await getct().sports,
                                  request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                                  command: {
                                    showReloadUiCommand: {
                                      targetId: "browse-feedFEwhat_to_watch",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        ],
                        nextButton: {
                          buttonRenderer: {
                            style: "STYLE_DEFAULT",
                            size: "SIZE_DEFAULT",
                            isDisabled: false,
                            icon: {
                              iconType: "CHEVRON_RIGHT",
                            },
                            tooltip: "Next",
                            accessibilityData: {
                              accessibilityData: {
                                label: "Next",
                              },
                            },
                          },
                        },
                        previousButton: {
                          buttonRenderer: {
                            style: "STYLE_DEFAULT",
                            size: "SIZE_DEFAULT",
                            isDisabled: false,
                            icon: {
                              iconType: "CHEVRON_LEFT",
                            },
                            tooltip: "Previous",
                            accessibilityData: {
                              accessibilityData: {
                                label: "Previous",
                              },
                            },
                          },
                        },
                      },
                    },
                    contents: [
                      {
                        continuationItemRenderer: {
                          trigger: "CONTINUATION_TRIGGER_ON_ITEM_SHOWN",
                          continuationEndpoint: {
                            commandMetadata: {
                              webCommandMetadata: {
                                sendPost: true,
                                apiUrl: "/youtubei/v1/browse",
                              },
                            },
                            commandMetadata: {
                              webCommandMetadata: {
                                sendPost: true,
                                apiUrl: "/youtubei/v1/browse",
                              },
                            },
                            continuationCommand: {
                              token: await getct().all,
                              request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                            },
                          },
                          ghostCards: { ghostGridRenderer: { rows: 2 } },
                        },
                      },
                    ],
                    targetId: "browse-feedFEwhat_to_watch",
                    reflowOptions: {
                      minimumRowsOfVideosAtStart: 2,
                      minimumRowsOfVideosBetweenSections: 1,
                    },
                  },
                },
                tabIdentifier: "FEwhat_to_watch",
              },
            },
          ],
        },
      },
    };
  }

  document.addEventListener("yt-page-data-updated", async function (e) {
    if (e.detail.pageType == "home") {
      document.querySelector("[role='main']").data = {};
      document.querySelector("[role='main']").data = await skeleton;
      document.querySelector("[role='main']").data = await ctokenCommand();
    }
  });
})();
