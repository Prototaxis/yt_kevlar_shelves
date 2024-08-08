// ==UserScript==
// @name         YouTube Kevlar Shelves
// @namespace    http://tampermonkey.net/
// @updateURL    https://github.com/Prototaxis/yt_kevlar_shelves/raw/master/YouTube%20Kevlar%20Shelves.user.js
// @downloadURL  https://github.com/Prototaxis/yt_kevlar_shelves/raw/master/YouTube%20Kevlar%20Shelves.user.js
// @version      0.5.1
// @description  This userscript restores YouTube homepage shelves
// @author       Prototaxis
// @match        *://*.youtube.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgMSURBVHhe7Z2t0tRIGIX3mrgJ7oAbwKORWBwShcOgUCgEBoHBIBAYBAJBFQJBFeZbDkxqe9553vx2Jv1tn1P1VC1nOj2z6ZN0p9PJ989v3ZiuQdP0A5qmH9A0/YCm6Qc0TT+gafoBTdMPaJp+QNP0A5qmH9A0/YCm6Qc0TT+geXXu3Llz8+PHjxvShw8fcJsBff758+cL3r59i+XNGWgewqtXr05Nfq6fP3/+CQhtc//+/VOpS718+RK3MWegeQj37t27+fXr16n5zvX48WPc5sWLF6cS51I9d+/exW3MGWgexvv3709NeK43b95g+Y8fP55KnEv1UHlzAZqH8fDhw1MTnuvr168XZdUtZGeMR48eXZQ3CJqHosYmqb8vy6lbIFFYTAqah/Ls2bNTU57r+fPnZ+XULZA8+FsEmoeSXRKqvy/L0ZnCg7/FoHk4dHSXl4PZ5Z8Hf4tB83CyS8LhclDdAcmDv8Wg2QR0iTdcDtJnU4M/hUfbld2LQqaZxKdPn+I2HYBmE+hojlIjqxtQdxA1NvjL5gtKKQjZjCPNT8TuJuuWyjINgmYz0ECPTv9jg79scon06dOn2XU4AFeApnq/f/9++q//lN0wyiaWxhQvN4UDcBDZJWFUdq+ATv06W6jxBHUlNJZwAA5Et3XH9O3bN9xO4YlXEvq3zgpDGTUaBawsIxyAA8l27KBs8Eenf+oqaM5Bt6bLMg7AwWSjeB3RmjOgbWhK+fXr1xflaFD57t27szIOwMFkEz9a+UPlBQ0g5wYgNq4DcDBrAqDGjnIALkCzORyA3UCzOdYEgBrNAbgAzeZwAHYDzeZwAHYDzeZwAHYDzeZwAHYDzeZwAHYDzeZwAHYDzeZYEwCa43cALkCzOdYEQI0d5QBcgGZzOAC7gWZzrAmAbhNHzQ3AsPh0wAE4mDUB0ErfqHibV9Bj6bqTWJahAMT1g7SIVSrLNAiazbEmANQgWv1TLh7VqiFaePrgwYOzuigAUvkcQlamrKdB0GyONQEQtIBUS8hUn/jy5cvJ/U/yYj00nhikxSr0PYNiXY2BZnOsDUD21pEx0RKz7EnkOYp1NQaazbE2AGNvHSGpO6DnC6ZWJ+t3ZIp1NQaazbE2AEKLQ8dO0YNU19iTxervKUwaWI6daaiuhkCzObYEQOhMkPXV6vO19Dx7LKzkyZMnfxpc4wjVp6sFbacuQuMEguppCDSbQw2onRyJ6/fnMmxPn3UGmqYf0DT9gKbpBzRNP6Bp+gHNqzBcUo1NovxfpUtP3TvQ84sHv9UMzd3QNbOmWuc889+L9I4CzRccFAQ0d0F32ObMyPUqBeGAuQk0q6PTPb2Nw7rU2MuudgDNqqjxl9yQsS4XpOwImtXQad9H/jpd6d2FaFajxxF+LWmgPOcG1UbQrAKtybOW6Qp3E9Gsgo/+7dJZgPZtRdDcjG7fkrTiRsHYCi3kXCNNyMS6aZ3gkdr50hDNzWR/9KHW/4zqqSGt5Y91Z+v7j9LO3QCam6GHMiQHYLniAyiVQXMz9GCm5AAsV/YC60qguZnsIQkHYLk0Lom/sSJobiYLQDYIpDrUEMPCykhW/1I5AGxuZmkDUR21jvIxOQBsbsYBqCcHYEftHYDY5a2Zv3AAdtRYAHQTSyuW9DuEprb1uvkpDdvFJ4wHVJcada4cgCDVTeXL78x2WnzCKAuAGjp7DX02xyGp8ec+rJJNlkU5AEF7B2AOujYnLb2FqzPFlByAoGsFQN+vo53K0LOKayZssreKlHIAgq4RgHhDKP4JGfpzNHT0636+fAUpGxNMrZZyAIL2DgA1Lv1hqthwsS6t8tV2pdTvl2XE1EJZByBo7wDQ96qRYrmy4TT4i5/TYJHqmbr97AAEtRgAOkNk+yCW028dkwMQ1GIA6PscgAWiOhyAv3IAgloMAP0mjfpVVySWcwB+i+rQziLdlgDMxQH4LarDAfgrByDIAagKmptxAPIxQGTqFrEDEHRbArB0H2RyAIIcgKqguRkHwAE4/fx5ojpuUwDoVjDtAz3rp/pLsrUFgxyAoDkBoLl5sVcAdEMnfk77gOqZWhTiAATNCQDtaLFXAOjzuQHInqIa5AAEZQEojyRdWlGZOQHQffwoaoT4prP4li+9gTyKzkxTC00dgKAsAGpMLdLQvXltS2XmBEBo4cawmEOvhY8LPbXSJyou9qDfH/8ameqZemWeAxA0tvZOOzRbzSvmBmAK+m0KTHyli9b8DY+z0Yuf5qwMvpUBmOrXoqiOLADZAC9Cy69qBYBO75IamspnzHlQ5FYGYGztPInqyAIgjR3lYvjzLtGfEwCdvcbq12fZQk75c58LyEIUlXV5lUBzM3FHT4nqGAtAtlM0ENPZZ2ig+PlUAIYBoMYRtMpXn08dtfruuIq4RHXoqJ6rOG6oDJqb0Y5doqGfLJkaR+iSSiN/NarKa7CmhisV61SZUvEdQXGBpr5DDaBtdcSWl35TUl3aTr9PYdYYQN+fnT0y6UWbtI8rgWYVpla7WtNSoOPAsjJoVkGJt7ZJZx3atxVBsxprHoe2/krzA1OD3QqgWQ31fUv7POuvrvTCaDSrsvSKwNp95F+CZnWUZp8J5ukK/X4JmrugyZmpee+epQOEZi93Bs3d0CSIro3j9XrPUsPrqL/CgI9Ac3cUBKVdkz09hkGNPvzx6YMafgBN0w9omn5A0/QDmqYf0DT9gKbpBzRNP6Bp+gFN0w9omn5A0/QDmqYf0DT9gKbpgn9u/gVSJHYh7bGtbAAAAABJRU5ErkJggg
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

    (function (parent) {
        var __public__ = {};

        var Group = (function () {
            function Group(object) {
                if (!(this instanceof Group)) return new Group(object);
                if (instanceOf(object) != "Object")
                    throw new TypeError("'Group()' constructor only accepts objects.");
                for (var i in object) {
                    this[i] = object[i];
                }
            }

            return Group;
        })();

        var Len = (function () {
            function Len(object) {
                if (!(this instanceof Len)) return new Len(object);
                if (instanceOf(object) == "String") {
                    this.valueOf = function () {
                        return object;
                    }
                } else if (instanceOf(object) != "Object") {
                    throw new TypeError("'Len()' constructor only accepts objects and strings.");
                } else {
                    this.valueOf = function () {
                        return object;
                    }
                    for (var i in object) {
                        this[i] = object[i];
                    }
                }
                _raw = undefined;
            }

            var _raw;

            var getRaw = function () {
                var val = this.valueOf();
                if (instanceOf(val) === "String") {
                    return quickPb.stringToHex(this.valueOf());
                }
                if (instanceOf(val) === "Object") {
                    return quickPb.compile(val, null, false);
                }
            }

            Len.from = function (value) {
                var instance = new Len(hexToString(value));
                _raw = value;
                return instance;
            }

            Len.prototype.toString = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new String(hexToString(_raw));
            }

            Len.prototype.toPacked = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Packed(quickPb.decompilePacked(_raw));
            }

            Len.prototype.toMessage = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Message(quickPb.processArray(quickPb.decompileKvPair(_raw)));
            }

            Len.prototype.toBytes = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Bytes(_raw);
            }

            return Len;
        })();

        var Varint = (function () {
            function Varint(varint) {
                if (!(this instanceof Varint)) return new Varint(varint);
                switch (instanceOf(varint)) {
                    case "Boolean":
                        break;
                    case "Number":
                    case "String":
                        if (!isUint32(varint) && !isUint64(varint) && !isInt32(varint) && !isInt64(varint)) throw new RangeError("The 'varint' argument must be a valid int32, int64, uint32 or uint64 number, a boolean value or an enum.");
                        break;
                    case "Array":
                        return classArray(Varint, varint);
                    default:
                        throw new TypeError("'Varint()' constructor only accepts numbers or arrays of numbers.");
                }
                _raw = undefined;
                this.valueOf = function () {
                    return varint;
                };
            }

            Varint = extend(Varint, Number);

            var _raw;

            var getRaw = function () {
                return quickPb.compileVarint(this.valueOf(), true)
            }

            Varint.from = function (value) {
                var instance = new Varint(quickPb.decompileVarint(value, true, 0));
                _raw = value;
                return instance;
            }

            Varint.prototype.toBool = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Boolean(quickPb.decompileVarint(_raw, false, 0))
            }

            Varint.prototype.toUint32 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Uint32(quickPb.decompileVarint(_raw, false, 0))
            }

            Varint.prototype.toInt32 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Int32(quickPb.decompileVarint(_raw, false, 1))
            }

            Varint.prototype.toSint32 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Sint32(quickPb.decompileVarint(_raw, false, 2))
            }

            Varint.prototype.toUint64 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Uint64(quickPb.decompileVarint(_raw, true, 0))
            }

            Varint.prototype.toInt64 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Int64(quickPb.decompileVarint(_raw, true, 1))
            }

            Varint.prototype.toSint64 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Sint64(quickPb.decompileVarint(_raw, true, 2))
            }

            return Varint;
        })();

        var I32 = (function () {
            function I32(i32) {
                if (!(this instanceof I32)) return new I32(i32);
                switch (instanceOf(i32)) {
                    case "Number":
                        if (!isUint32(i32) && !isInt32(i32) && !isFloat(i32)) throw new RangeError("The 'i32' argument must be a valid float, int32, or uint32 number.");
                        break;
                    case "Array":
                        return classArray(I32, i32);
                    default:
                        throw new TypeError("'I32()' constructor only accepts numbers or arrays of numbers.");
                }
                _raw = undefined;
                this.valueOf = function () {
                    return i32;
                };
            }

            I32 = extend(I32, Number);

            var _raw;

            var getRaw = function () {
                val = this.valueOf();
                if (isUint32(val) || isInt32(val)) {
                    return int32ToHex(val);
                }
                if (isFloat(val)) {
                    return floatToHex(val);
                }
            }

            I32.from = function (value) {
                var instance = new I32(hexToUint32(value));
                _raw = value;
                return instance;
            }

            I32.prototype.toFloat = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Float(hexToFloat32(_raw, true));
            }

            I32.prototype.toFixed32 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Fixed32(hexToUint32(_raw));
            }

            I32.prototype.toSfixed32 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Sfixed32(hexToInt32(_raw));
            }

            return I32;
        })()

        var I64 = (function () {
            function I64(i64) {
                if (!(this instanceof I64)) return new I64(i64);
                switch (instanceOf(i64)) {
                    case "String":
                    case "Number":
                        if (!isUint64(i64) && !isInt64(i64) && !isDouble(i64)) throw new RangeError("The 'i64' argument must be a valid double, int64, or uint64 number.");
                        break;
                    case "Array":
                        return classArray(I64, i64);
                    default:
                        throw new TypeError("'I64()' constructor only accepts numbers/strings or arrays of numbers/strings.");
                }
                _raw = undefined;
                this.valueOf = function () {
                    return i64;
                };
            }

            I64 = extend(I64, Number);

            var _raw;

            var getRaw = function () {
                val = this.valueOf();
                if (isUint64(val) || isInt64(val)) {
                    return int64ToHex(val);
                }
                if (isDouble(val)) {
                    return doubleToHex(val);
                }
            }

            I64.from = function (value) {
                var instance = new I64(hexToUint64(value));
                _raw = value;
                return instance;
            }

            I64.prototype.toDouble = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Double(hexToFloat64(_raw, true));
            }

            I64.prototype.toFixed64 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Fixed64(hexToUint64(_raw));
            }

            I64.prototype.toSfixed64 = function () {
                if (_raw === undefined) _raw = getRaw.call(this);
                return new Sfixed64(hexToInt64(_raw));
            }

            return I64;
        })();

        // Child classes corresponding to data types
        // LEN
        function Message(object) {
            if (!(this instanceof Message)) return new Message(object);
            if (instanceOf(object) != "Object" && instanceOf(object) != "Array")
                throw new TypeError("'Message()' constructor only accepts objects and arrays.");
            for (var i in object) {
                this[i] = object[i];
            }
        }

        function Str(str) {
            if (!(this instanceof Str)) return new Str(str);
            if (instanceOf(object) != "String")
                throw new TypeError("'Str()' constructor only accepts strings.");
            this.valueOf = function () {
                return str;
            };
        }

        function Packed(array) {
            if (!(this instanceof Packed)) return new Packed(array);
            if (instanceOf(array) != "Array")
                throw new TypeError("'Packed()' constructor only accepts arrays.");
            for (var i in array) {
                this[i] = array[i];
            }
        }

        function Bytes(bytes, encodeAsBase64) {
            if (!(this instanceof Bytes)) return new Bytes(bytes);
            if (encodeAsBase64 === undefined) encodeAsBase64 = false;
            bytesError = new TypeError("'Bytes()' constructor only accepts bytes in decimal form, strings containing binary or hexadecimal bytes or arrays containing bytes.");
            switch (instanceOf(bytes)) {
                case "Number":
                    bytes = padHex(bytes.toString(16));
                    break;
                case "String":
                    switch (true) {
                        case !!bytes.match(/^0b[0-1]*$/i):
                            bytes = padBin(bytes.slice(2));
                            if (bytes) {
                                bytes = bytes.match(/[0-1]{8}/g)
                                    .map(function (a) { return padHex(parseInt(a, 2).toString(16)) })
                                    .join("")
                            }
                            break;
                        case !!bytes.match(/^0x[0-9a-f]*$/i):
                            bytes = padHex(bytes.slice(2));
                            break;
                        case !!bytes.match(/^[0-9a-f]+$/i):
                            bytes = padHex(bytes);
                            break;
                        default:
                            bytes = "";
                            throw bytesError;
                    }
                    break;
                case "Array":
                    for (var i = 0, j = bytes.length; i < j; i++) {
                        switch (instanceOf(bytes[i])) {
                            case "Number":
                                bytes[i] = padHex(bytes[i].toString(16));
                                break;
                            case "String":
                                switch (true) {
                                    case !!bytes[i].match(/^0b[0-1]*$/i):
                                        bytes[i] = padBin(bytes[i].slice(2));
                                        if (bytes[i]) {
                                            bytes[i] = bytes[i].match(/[0-1]{8}/g)
                                                .map(function (a) { return padHex(parseInt(a, 2).toString(16)) })
                                                .join("")
                                        }
                                        break;
                                    case !!bytes[i].match(/^0x[0-9a-f]*$/i):
                                        bytes[i] = padHex(bytes[i].slice(2));
                                        break;
                                    case !!bytes[i].match(/^[0-9a-f]+$/i):
                                        bytes[i] = padHex(bytes[i]);
                                        break;
                                    default:
                                        throw bytesError;
                                }
                                break;
                            default:
                                throw bytesError;
                        }
                    }
                    bytes = Array.prototype.join.call(bytes, "");
                    break;
                default:
                    throw bytesError;
            }
            this.valueOf = function () {
                return this.toString();
            };
            this.toString = function () {
                if (encodeAsBase64) return b16tob64(bytes);
                return bytes;
            };
        }

        // I32
        function Float(float) {
            if (!(this instanceof Float)) return new Float(float);
            switch (instanceOf(float)) {
                case "String":
                    if (!(/^0x/i.test(float))) throw new TypeError("'Float()' constructor only accepts numbers in (hexa)decimal form or arrays of numbers.");
                    break;
                case "Number":
                    if (!isFloat(float)) throw new RangeError("The 'float' argument must have an absolute value between 2^-149 and 2^128-1, or be positive/negative 0, NaN or Infinity.");
                    break;
                case "Array":
                    return classArray(Float, float);
                default:
                    throw new TypeError("'Float()' constructor only accepts numbers in (hexa)decimal form or arrays of numbers.");
            }
            this.valueOf = function () {
                return float;
            };
        }

        function Fixed32(fixed32) {
            if (!(this instanceof Fixed32)) return new Fixed32(fixed32);
            switch (instanceOf(fixed32)) {
                case "Number":
                    if (!isUint32(fixed32)) throw new RangeError("The 'fixed32' argument must be between 0 and 2^32-1.");
                    break;
                case "Array":
                    return classArray(Fixed32, fixed32);
                default:
                    throw new TypeError("'Fixed32()' constructor only accepts numbers or arrays of numbers.");
            }
            this.valueOf = function () {
                return fixed32;
            };
        }

        function Sfixed32(sfixed32) {
            if (!(this instanceof Sfixed32)) return new Sfixed32(sfixed32);
            switch (instanceOf(sfixed32)) {
                case "Number":
                    if (!isInt32(sfixed32)) throw new RangeError("The 'sfixed32' argument must be between -2^31 and 2^31-1.");
                    break;
                case "Array":
                    return classArray(Sfixed32, sfixed32);
                default:
                    throw new TypeError("'Sfixed32()' constructor only accepts numbers or arrays of numbers.");
            }
            this.valueOf = function () {
                return sfixed32;
            };
        }

        // I64
        function Double(double) {
            if (!(this instanceof Double)) return new Double(double);
            switch (instanceOf(double)) {
                case "Number":
                    if (!isDouble(double)) throw new RangeError("The 'double' argument must have an absolute value between 2^-1074 and 2^1024-1, or be positive/negative 0, NaN or Infinity.");
                    break;
                case "String":
                    if (!(/^0x/i.test(double))) throw new TypeError("'Double()' constructor only accepts numbers in (hexa)decimal form or arrays of numbers.");
                    break;
                case "Array":
                    return classArray(Double, double);
                default:
                    throw new TypeError("'Double()' constructor only accepts numbers in (hexa)decimal form or arrays of numbers.");
            }
            this.valueOf = function () {
                return double;
            };
        }

        function Fixed64(fixed64) {
            if (!(this instanceof Fixed64)) return new Fixed64(fixed64);
            switch (instanceOf(fixed64)) {
                case "String":
                case "Number":
                    if (!isUint64(fixed64)) throw new RangeError("The 'fixed64' argument must be between 0 and 2^64-1.");
                    break;
                case "Array":
                    return classArray(Fixed64, fixed64);
                default:
                    throw new TypeError("'Fixed64()' constructor only accepts numbers/strings or arrays of numbers/strings.");
            }
            this.valueOf = function () {
                return this.toString();
            };
            this.toString = function () {
                return fixed64;
            };
        }

        function Sfixed64(sfixed64) {
            if (!(this instanceof Sfixed64)) return new Sfixed64(sfixed64);
            switch (instanceOf(sfixed64)) {
                case "String":
                case "Number":
                    if (!isInt64(sfixed64)) throw new RangeError("The 'sfixed64' argument must be between -2^63 and 2^63-1.");
                    break;
                case "Array":
                    return classArray(Sfixed64, sfixed64);
                default:
                    throw new TypeError("'Sfixed64()' constructor only accepts numbers/strings or arrays of numbers/strings.");
            }
            this.valueOf = function () {
                return this.toString();
            };
            this.toString = function () {
                return sfixed64;
            };
        }

        // VARINT
        function Bool(bool) {
            if (!(this instanceof Bool)) return new Bool(bool);
            switch (instanceOf(bool)) {
                case "Number":
                    switch (bool) {
                        case 0:
                            bool = false;
                            break;
                        case 1:
                            bool = true;
                            break;
                        default:
                            throw new RangeError("The 'bool' argument must be a valid boolean value (true/false), or a corresponding number/string (0/1, '0'/'1', 'true'/'false', 'True'/'False').");
                    }
                case "String":
                    switch (bool) {
                        case "1":
                        case "true":
                        case "True":
                            bool = true;
                            break;
                        case "0":
                        case "false":
                        case "False":
                            bool = false;
                            break;
                        default:
                            throw new RangeError("The 'bool' argument must be a valid boolean value (true/false), or a corresponding number/string (0/1, '0'/'1', 'true'/'false', 'True'/'False').");
                    }
                    break;
                case "Boolean":
                    break;
                case "Array":
                    return classArray(Bool, bool);
                default:
                    throw new TypeError("'Bool()' constructor only accepts booleans, numbers or strings.");
            }
            this.valueOf = function () {
                return bool;
            }
        }

        function Uint32(uint32) {
            if (!(this instanceof Uint32)) return new Uint32(uint32);
            switch (instanceOf(uint32)) {
                case "Number":
                    if (!isUint32(uint32)) throw new RangeError("The 'uint32' argument must be between 0 and 2^32-1.");
                    break;
                case "Array":
                    return classArray(Uint32, uint32);
                default:
                    throw new TypeError("'Uint32()' constructor only accepts numbers or arrays of numbers.");
            }
            this.valueOf = function () {
                return uint32;
            };
        }

        function Int32(int32) {
            if (!(this instanceof Int32)) return new Int32(int32);
            switch (instanceOf(int32)) {
                case "Number":
                    if (!isInt32(int32)) throw new RangeError("The 'int32' argument must be between -2^31 and 2^31-1.");
                    break;
                case "Array":
                    return classArray(Int32, int32);
                default:
                    throw new TypeError("'Int32()' constructor only accepts numbers or arrays of numbers.");
            }
            this.valueOf = function () {
                return int32;
            };
        }

        function Sint32(sint32) {
            if (!(this instanceof Sint32)) return new Sint32(sint32);
            switch (instanceOf(sint32)) {
                case "Number":
                    if (!isInt32(sint32)) throw new RangeError("The 'sint32' argument must be between -2^31 and 2^31-1.");
                    break;
                case "Array":
                    return classArray(Sint32, sint32);
                default:
                    throw new TypeError("'Sint32()' constructor only accepts numbers or arrays of numbers.");
            }
            this.valueOf = function () {
                return sint32;
            };
        }

        function Uint64(uint64) {
            if (!(this instanceof Uint64)) return new Uint64(uint64);
            switch (instanceOf(uint64)) {
                case "String":
                case "Number":
                    if (!isUint64(uint64)) throw new RangeError("The 'uint64' argument must be between 0 and 2^64-1.");
                    break;
                case "Array":
                    return classArray(Uint64, uint64);
                default:
                    throw new TypeError("'Uint64()' constructor only accepts numbers/strings or arrays of numbers/strings.");
            }
            this.valueOf = function () {
                return this.toString();
            };
            this.toString = function () {
                return uint64;
            };
        }

        function Int64(int64) {
            if (!(this instanceof Int64)) return new Int64(int64);
            switch (instanceOf(int64)) {
                case "String":
                case "Number":
                    if (!isInt64(int64)) throw new RangeError("The 'int64' argument must be between -2^63 and 2^63-1.");
                    break;
                case "Array":
                    return classArray(Int64, int64);
                default:
                    throw new TypeError("'Int64()' constructor only accepts numbers/strings or arrays of numbers/strings.");
            }
            this.valueOf = function () {
                return this.toString();
            };
            this.toString = function () {
                return int64;
            };
        }

        function Sint64(sint64) {
            if (!(this instanceof Sint64)) return new Sint64(sint64);
            switch (instanceOf(sint64)) {
                case "String":
                case "Number":
                    if (!isInt64(sint64)) throw new RangeError("The 'sint64' argument must be between -2^63 and 2^63-1.");
                    break;
                case "Array":
                    return classArray(Sint64, sint64);
                default:
                    throw new TypeError("'Sint64()' constructor only accepts numbers/strings or arrays of numbers/strings.");
            }
            this.valueOf = function () {
                return this.toString();
            };
            this.toString = function () {
                return sint64;
            };
        }

        // Len: parent class that extends Object
        Message = extend(Message, Len);
        Str = extend(Str, Len);
        Packed = extend(Packed, Len);
        Bytes = extend(Bytes, Len);
        // Maps: todo

        // I32 = extend(I32, Number); // parent class
        Float = extend(Float, I32);
        Fixed32 = extend(Fixed32, I32);
        Sfixed32 = extend(Sfixed32, I32);

        // I64 = extend(I64, Number); // parent class
        Double = extend(Double, I64);
        Fixed64 = extend(Fixed64, I64);
        Sfixed64 = extend(Sfixed64, I64);

        // Varint = extend(Varint, Number); // parent class
        Bool = extend(Bool, Varint);
        Int32 = extend(Int32, Varint);
        Int64 = extend(Int64, Varint);
        Uint32 = extend(Uint32, Varint);
        Uint64 = extend(Uint64, Varint);
        Sint32 = extend(Sint32, Varint);
        Sint64 = extend(Sint64, Varint);
        // Enum: todo

        function padBin(bin, buffer) {
            if (buffer === undefined) buffer = 8;
            var pad = buffer - (bin.length % buffer);
            if (pad !== buffer) {
                return Array(buffer + 1).join("0").substr(0, pad) + bin;
            }
            return bin;
        }

        function padHex(hex) {
            hex = hex.length & 1 ? "0" + hex : hex;
            return hex;
        }

        function extend(child, parent) {
            child.prototype = Object.create(parent.prototype, {
                constructor: {
                    value: child,
                    enumerable: false,
                    writable: true,
                },
            });

            return child;
        }

        function classArray(cls, array) {
            var arr = [];
            for (var i = 0, j = array.length; i < j; i++) {
                arr.push(cls(array[i]));
            }
            return arr;
        }

        function instanceOf(object) {
            var instanceName = Object.prototype.toString.call(object).match(/\[object (\w+)\]/)[1];
            if (instanceName === "Object") instanceName = object.constructor.name;

            return instanceName;
        }

        function isDouble(double) {
            return (
                (Math.abs(double) === 0 ||
                    (Math.abs(double) >= Number.MIN_VALUE
                        && Math.abs(double) <= Number.MAX_VALUE)
                    || Math.abs(double) === Infinity
                    || isNaN(double)
                ) && instanceOf(double) === "Number"
            )
        }

        function isFloat(float) {
            return (
                (Math.abs(float) === 0 ||
                    (Math.abs(float) >= 1.40129846E-45
                        && Math.abs(float) <= 3.40282347E+38)
                    || Math.abs(float) === Infinity
                    || isNaN(float)
                ) && instanceOf(float) === "Number"
            )
        }

        function isUint32(uint32) {
            return (uint32 >>> 0 === uint32);
        }

        function isInt32(int32) {
            return (~~int32 === int32);
        }

        function isUint64(uint64) {
            uint64 = uint64.toString();
            if (!/^\d+$/.test(uint64)) return false;

            if (uint64.length < 20) return true;
            if (uint64.length > 20) return false;

            var part1 = parseInt(uint64.slice(0, 10));
            var part2 = parseInt(uint64.slice(10));
            return (part1 < 1844674407 || (part1 === 1844674407 && part2 <= 3709551615));
        }

        function isInt64(int64) {
            int64 = int64.toString();
            if (!/^0$|^[-]?[1-9]\d*$/.test(int64)) return false;

            var isNegative = (int64[0] === '-');
            if (isNegative) int64 = int64.slice(1);

            if (int64.length < 19) return true;
            if (int64.length > 19) return false;

            var part1 = parseInt(int64.slice(0, 10));
            var part2 = parseInt(int64.slice(10));
            return (part1 < 9223372036 || (part1 === 9223372036 && part2 <= isNegative + 854775807));
        }

        // 1. Largest safe integer natively supported in JavaScript
        function isSafeInteger(int) { // All JavaScript numbers are double precision floats
            var safeint = Math.pow(2, 53) - 1;
            return ((int < safeint) && (int > -safeint));
        }

        // 2. Big endian <-> little endiaN converter for 32-bit integers
        function swap32(val) {
            return (
                ((val & 0xff) << 24) |
                ((val & 0xff00) << 8) |
                ((val >> 8) & 0xff00) |
                ((val >> 24) & 0xff)
            );
        }

        // 3. Custom binary operators for 64-bit integers
        function ulsh64(num, shift) {
            // left shifting for large numbers
            // without overflow
            num = +num;
            if (shift <= 0) return num; // prevent freeze
            var bin = num.toString(2);
            while (shift > 0) {
                bin += "0";
                shift--;
            }
            num = parseInt(bin, 2);
            return num;
        }

        function ursh64(num, shift) {
            num = +num;
            if (shift <= 0) return num;
            var bin = num.toString(2);
            while (shift > 0) {
                bin = "0" + bin.slice(0, -1);
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

        function uand64(a, b) {
            a = +a;
            b = +b;
            var ba = a.toString(2);
            var bb = b.toString(2);
            var lc = ba.length - bb.length;
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
                ba[i] = parseInt(ba[i], 2) && parseInt(bb[i], 2);
            }
            ba = ba.join("");
            var num = parseInt(ba, 2);
            return num;
        }

        function not64(bin) {
            bin = padBin(bin, 64);
            var bin1 = bin.slice(0, 32);
            var bin2 = bin.slice(32);
            bin1 = padBin((~parseInt(bin1, 2) >>> 0).toString(2), 32);
            bin2 = padBin((~parseInt(bin2, 2) >>> 0).toString(2), 32);

            return bin1 + bin2;
        }

        function addone64(bin) {
            bin = padBin(bin, 64);
            bin = bin.split("");
            var i = bin.length;
            while (i--) {
                if (bin[i] === "0") {
                    bin[i] = "1";
                    break;
                }
                bin[i] = "0";
            }
            return bin.join("");
        }

        function takeone64(bin) {
            bin = padBin(bin, 64);
            bin = bin.split("");
            var i = bin.length;
            while (i--) {
                if (bin[i] === "1") {
                    bin[i] = "0";
                    break;
                }
                bin[i] = "1";
            }
            return bin.join("");
        }

        // 4. Hexadecimal payload encoders
        function floatToHex(val) {
            var view = new DataView(new ArrayBuffer(4));
            view.setFloat32(0, val, true);
            var int = "";

            for (var i = 0; i < 4; i++) {
                int += padHex(view.getUint8(i).toString(16));
            }

            return int.toString(16);
        }

        function doubleToHex(val) {
            var view = new DataView(new ArrayBuffer(8));
            view.setFloat64(0, val, true);
            var int = "";

            for (var i = 0; i < 8; i++) {
                int += padHex(view.getUint8(i).toString(16));
            }

            return int.toString(16);
        }

        function int32ToHex(num) {
            var dec = num;
            dec = swap32(dec) >>> 0;
            var hex = dec.toString(16);

            while (hex.length % 8) {
                hex = "0" + hex;
            }

            return hex;
        }

        function int53ToBin(val) {
            var negative = (val < 0);
            val = padBin(negative
                ? (((Math.pow(2, 53) - 1) + val) + 1).toString(2)
                : val.toString(2));
            val = padBin(val, 56)
            val = (negative ? "11111111111" : "00000000000") + val.slice(3);
            return val;
        }

        function int64ToHex(str) {
            str = str + "";
            if (str === "0") return Array(16).fill("0").join("");
            var negative = false;

            if (~str.indexOf("-")) {
                str = str.slice(1);
                negative = true;
            }

            var dec = str.toString().split(""),
                sum = [],
                hex = [],
                i,
                s;

            while (dec.length) {
                s = 1 * dec.shift();
                for (i = 0; s || i < sum.length; i++) {
                    s += (sum[i] || 0) * 10;
                    sum[i] = s % 16;
                    s = (s - sum[i]) / 16;
                }
            }

            while (sum.length) {
                hex.push(sum.pop().toString(16));
            }

            while (hex.length % 16) {
                hex.unshift(0);
            }

            hex = hex
                .join("")
                .match(/[0-9a-f]{2}/gi);
            if (negative) {
                hex = addone64(not64(hex.map(function (a) { return padBin(parseInt(a, 16).toString(2)) }).join("")))
                    .match(/[0-1]{8}/g).map(function (a) { return padHex(parseInt(a, 2).toString(16)) });
            }
            return hex
                .reverse()
                .join("");
        }

        function leb128(val, bignum, zigzag) {
            var bin = "", hex = "";

            if (bignum) {
                if (isInt32(+val) || isUint32(+val)) {
                    bin = (zigzag ? toSint32(+val).toString(2) : ((+val < 0) ? Array(33).join(1) : "") + (+val >>> 0).toString(2));
                } else if ((isSafeInteger(+val) && !zigzag) || (isSafeInteger(+val * 2) && zigzag)) {
                    if (zigzag) {
                        bin = toSint53(+val).toString(2);
                    } else {
                        bin = int53ToBin(+val);
                    }
                } else {
                    val = zigzag ? sint64ToHex(val) : int64ToHex(val);
                    bin = (val
                        .match(/[0-9a-f]{2}/gi)
                        .reverse()
                        .map(function (a) {
                            return padBin(parseInt(a, 16).toString(2));
                        }));
                    for (var i = 0, j = bin.length - 1; i < j && bin[i] === "00000000"; i++) { };
                    bin = bin.slice(i).join("");
                    for (var i = 0, j = bin.length - 1; i < j && bin[i] === "0"; i++) { };
                    bin = bin.slice(i);
                }
            } else {
                bin = (zigzag ? toSint32(+val).toString(2) : ((+val < 0) ? Array(33).join(1) : "") + (+val >>> 0).toString(2));
            }

            bin = padBin(bin, 7);
            bin = "0" + bin
                .match(/[0-1]{7}/g)
                .map(function (a) {
                    return "1" + a;
                })
                .join("")
                .slice(1);

            bin = padBin(bin);

            hex = bin.match(/[0-1]{8}/g).map(function (a) {
                return padHex(parseInt(a, 2).toString(16));
            });

            hex = hex.reverse().join("");

            return hex;
        }

        function leb128ToInt(hex, int64, signed) {
            hex = padHex(hex).match(/[0-9a-f]{2}/gi).reverse();

            var bin = padBin(
                hex
                    .map(function (a) {
                        return padBin(parseInt(a, 16).toString(2)).slice(1);
                    })
                    .join("")
            );

            var nuhex = bin
                .match(/[0-1]{8}/g)
                .map(function (a) {
                    return padHex(parseInt(a, 2).toString(16));
                })
                .join("");

            if (nuhex.length > 16) nuhex = nuhex.slice(-16);

            if (int64) {
                var preVal = parseInt(nuhex, 16);
                if (isUint32(preVal)) {
                } else if (isSafeInteger(preVal)) {
                    switch (signed) {
                        case 0:
                            return parseInt(nuhex, 16);
                        case 1:
                            return hexToInt64(nuhex.match(/[0-9a-f]{2}/gi).reverse().join(""));
                        case 2:
                            return fromSint53(parseInt(nuhex, 16));
                    }
                } else {
                    switch (signed) {
                        case 0:
                            return hexToUint64(nuhex.match(/[0-9a-f]{2}/gi).reverse().join(""));
                        case 1:
                            return hexToInt64(nuhex.match(/[0-9a-f]{2}/gi).reverse().join(""));
                        case 2:
                            return hexToSint64(nuhex.match(/[0-9a-f]{2}/gi).reverse().join(""));
                    }
                }
            }

            switch (signed) {
                case 0:
                    return parseInt(nuhex, 16);
                case 1:
                    return ~~parseInt(nuhex, 16);
                case 2:
                    return fromSint32(parseInt(nuhex, 16));
            }
        }

        /*
        function bigint_uleb128(val) {
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
                    .match(/[0-1]{7}/g)
                    .map(function (a) {
                        return "1" + a;
                    })
                    .join("")
                    .slice(1);
            var hex =
                typeof val === "bigint"
                    ? BigInt("0b" + bin).toString(16)
                    : parseInt(bin, 2).toString(16);
            hex = hex.length & 1 ? "0" + hex : hex;
            hex = hex.match(/[0-9a-f]{2}/gi).reverse().join("");
    
            return hex;
        }
        */

        // 5. Hexadecimal payload decoders
        function hexToString(hex) {
            var str = "";
            for (var i = 0; i < hex.length; i += 2) {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            }
            return str;
        }

        function hexToFloat32(hex, nanHex) {
            if (nanHex === undefined) nanHex = false;
            hex = padHex(hex);
            var view = new DataView(new ArrayBuffer(4));
            var bytes = parseInt(hex, 16);
            view.setUint32(0, bytes, true);
            var float = view.getFloat32(0);

            return isNaN(float) && nanHex
                ? "0x" + hex.match(/[0-9a-f]{2}/gi).reverse().join("")
                : float;
        }

        function hexToFloat64(hex, nanHex) {
            if (nanHex === undefined) nanHex = false;
            hex = padHex(hex);
            var hexb = hex.match(/[0-9a-f]{8}/gi);
            var view = new DataView(new ArrayBuffer(8));
            var bytes = [];
            bytes[0] = parseInt(hexb[1], 16);
            bytes[1] = parseInt(hexb[0], 16);
            view.setUint32(0, bytes[0], true);
            view.setUint32(4, bytes[1], true);
            var double = view.getFloat64(0);

            return isNaN(double) && nanHex
                ? "0x" + hex.match(/[0-9a-f]{2}/gi).reverse().join("")
                : double;
        }

        function hexToUint32(hex) {
            hex = padHex(hex);
            var val = swap32(parseInt(hex, 16)) >>> 0;
            return val;
        }

        function hexToInt32(hex) {
            hex = padHex(hex);
            var val = swap32(parseInt(hex, 16));
            return val;
        }

        function hexToUint64(val) {
            function add(x, y) {
                var c = 0,
                    r = [];
                var x = x.split("").map(Number);
                var y = y.split("").map(Number);
                while (x.length || y.length) {
                    var s = (x.pop() || 0) + (y.pop() || 0) + c;
                    r.unshift(s < 10 ? s : s - 10);
                    c = s < 10 ? 0 : 1;
                }
                if (c) r.unshift(c);
                return r.join("");
            }

            var dec = "0";
            val = val
                .match(/[0-9a-f]{2}/gi)
                .reverse()
                .join("")
                .split("");
            for (var chr in val) {
                var n = parseInt(val[chr], 16);
                for (var t = 8; t; t >>= 1) {
                    dec = add(dec, dec);
                    if (n & t) dec = add(dec, "1");
                }
            }
            return dec;
        }

        function hexToInt64(val) {
            function add(x, y) {
                var c = 0,
                    r = [];
                var x = x.split("").map(Number);
                var y = y.split("").map(Number);
                while (x.length || y.length) {
                    var s = (x.pop() || 0) + (y.pop() || 0) + c;
                    r.unshift(s < 10 ? s : s - 10);
                    c = s < 10 ? 0 : 1;
                }
                if (c) r.unshift(c);
                return r.join("");
            }

            var dec = "0";
            var isNegative = (parseInt(val.slice(-2), 16) > 0x7f);
            val = val
                .match(/[0-9a-f]{2}/gi)
                .reverse();
            if (isNegative) {
                val = not64(takeone64(val.map(function (a) { return padBin(parseInt(a, 16).toString(2)) }).join("")))
                    .match(/[0-1]{8}/g).map(function (a) { return padHex(parseInt(a, 2).toString(16)) });
            }
            val = val
                .join("")
                .split("");
            for (var chr in val) {
                var n = parseInt(val[chr], 16);
                for (var t = 8; t; t >>= 1) {
                    dec = add(dec, dec);
                    if (n & t) dec = add(dec, "1");
                }
            }
            return (isNegative ? "-" + dec : dec);
        }

        /*
        function legacy_hexToFloat32(hex, nanHex) {
            if (nanHex === undefined) nanHex = false;
            hex = padHex(hex);
            var bytes = swap32(parseInt(hex, 16));
            var sign = bytes & 0x80000000 ? -1 : 1;
            var exponent = ((bytes >> 23) & 0xff) - 127;
            var mantissa = bytes & ~(-1 << 23);
    
            if (exponent == 128)
                return mantissa
                    ? nanHex
                        ? "0x" + hex.match(/[0-9a-f]{2}/gi).reverse().join("")
                        : Number.NaN
                    : sign * Number.POSITIVE_INFINITY;
    
            if (exponent == -127) {
                if (mantissa == 0) return sign * 0.0;
                exponent = -126;
                mantissa /= 1 << 23;
            } else mantissa = (mantissa | (1 << 23)) / (1 << 23);
    
            return sign * mantissa * Math.pow(2, exponent);
        }
    
        function legacy_hexToFloat64(hex, nanHex) {
            if (nanHex === undefined) nanHex = false;
            hex = padHex(hex);
            var hexb = hex.match(/[0-9a-f]{8}/gi);
            var bytes = [];
            bytes[0] = swap32(parseInt(hexb[1], 16));
            bytes[1] = swap32(parseInt(hexb[0], 16));
            var sign = bytes[0] & 0x80000000 ? -1 : 1;
            var exponent = ((bytes[0] >> 20) & 0x7fff) - 1023;
            var mantissa = [bytes[0] & ~(-1 << 20), bytes[1]];
    
            if (exponent == 1024)
                return mantissa[0] || mantissa[1]
                    ? nanHex
                        ? "0x" + hex.match(/[0-9a-f]{2}/gi).reverse().join("")
                        : Number.NaN
                    : sign * Number.POSITIVE_INFINITY;
    
            if (exponent == -1023) {
                if (!(mantissa[0] || mantissa[1])) return sign * 0.0;
                exponent = -1022;
                mantissa = mantissa[0] / (1 << 20) + mantissa[1] / Math.pow(2, 52);
            } else
                mantissa =
                    (mantissa[0] | (1 << 20)) / (1 << 20) + mantissa[1] / Math.pow(2, 52);
    
            return sign * mantissa * Math.pow(2, exponent);
        }
    
        function bigint_hexToUleint64(val) {
            val = padHex(val);
            if (!isSafeInteger(val)) {
                var hex = "0x" + val.match(/[0-9a-f]{2}/gi).reverse().join("");
                return BigInt(hex, 16);
            } else if (~~val != val) {
                var hex = val.match(/[0-9a-f]{2}/gi).reverse().join("");
                return parseInt(hex, 16);
            } else {
                return swap32(parseInt(val, 16));
            }
        }
    
        function bigint_uleb128ToInt(val, int64) {
            if (int64 === undefined) int64 = true;
            val = val.length & 1 ? "0" + val : val;
            var hex = val.match(/[0-9a-f]{2}/gi).reverse();
    
            var bin = hex.map(function (a) {
                return padBin(parseInt(a, 16).toString(2));
            });
    
            bin = bin
                .map(function (a) {
                    return a.slice(1);
                })
                .join("");
            var integer = +("0b" + bin);
            if (int64) {
                if (!isSafeInteger(integer)) {
                    integer = BigInt("0b" + bin);
                }
            }
            return integer;
        }
        */

        // 6. ZigZag encoding and decoding functions.
        function toSint32(num) {
            return (num << 1) ^ (num >> 31);
        }

        function toSint53(num) {
            return (num < 0) ? 2 * Math.abs(num) - 1 : 2 * num;
        }

        function fromSint32(num) {
            return (num >>> 1) ^ (~(num & 1) + 1);
        }

        function fromSint53(num) {
            return (num & 1) ? (num + 1) / -2 : num / 2;
        }

        function sint64ToHex(num) {
            num += "";
            var isNegative = false;
            if (num[0] === "-") {
                isNegative = true;
            }
            var hex = int64ToHex(num);
            var bin = hex.match(/[0-9a-f]{2}/gi)
                .map(function (a) { return padBin(parseInt(a, 16).toString(2)) });
            bin[0] += "0";
            bin[bin.length - 1] = bin[bin.length - 1].slice(1);
            if (isNegative) bin = not64(bin.reverse().join("")).match(/[0-1]{2}/g).reverse();
            hex = (padBin(bin.reverse().join(""), 64)
                .match(/[0-1]{8}/g)
                .reverse()
                .map(function (a) { return padHex(parseInt(a, 2).toString(16)) })
                .join(""));
            return hex;
        }

        function hexToSint64(hex) {
            var isNegative;
            var bin = hex.match(/[0-9a-f]{2}/gi)
                .map(function (a) { return padBin(parseInt(a, 16).toString(2)) });

            isNegative = (bin[0].slice(-1) === "1");
            bin[0] = bin[0].slice(0, -1);
            bin[bin.length - 1] = "0" + bin[bin.length - 1];
            if (isNegative) bin = not64(bin.reverse().join("")).match(/[0-1]{2}/g).reverse();
            hex = (padBin(bin.reverse().join(""), 64)
                .match(/[0-1]{8}/g)
                .reverse()
                .map(function (a) { return padHex(parseInt(a, 2).toString(16)) })
                .join(""));

            return hexToInt64(hex);
        }

        // 7. Base64 <-> Base16 converters.
        function b16tob64(str) {
            return (btoa(
                str
                    .match(/[0-9a-f]{2}/gi)
                    .map(function (a) {
                        return String.fromCharCode(parseInt(a, 16));
                    })
                    .join("")
            )
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/\=/g, ""));
        }

        function b64tob16(str) {
            str = str.replace(/\-/g, "+").replace(/\_/g, "/").replace(/%3D/g, "");
            return window
                .atob(str)
                .split("")
                .map(function (aChar) {
                    return ("0" + aChar.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
                .toUpperCase();
        }

        // 8. Protobuf wire type and field constants
        var WIRETYPE_VARINT = 0;
        var WIRETYPE_DOUBLE = 1;
        var WIRETYPE_LENGTH = 2;
        var WIRETYPE_GROUPSTART = 3;
        var WIRETYPE_GROUPEND = 4;
        var WIRETYPE_FLOAT = 5;

        var FIELD_NUM = 0;
        var FIELD_WIRETYPE = 1;
        var FIELD_NEST = 2;

        var quickPb = {
            // quick protobuf compiler with really messy code
            compile: function (obj, fields, base64) {
                var response = "";
                if (base64 === undefined) {
                    base64 = ((fields === undefined) ? true : false);
                }
                if (!fields) fields = quickPb.compileFields(obj);
                for (var key in obj) {
                    if (instanceOf(obj[key]) == "Array") {
                        for (var el in obj[key]) {
                            response += quickPb.compileKvPair(
                                key + "_" + el,
                                obj[key][el],
                                fields
                            );
                        }
                    } else {
                        response += quickPb.compileKvPair(key, obj[key], fields);
                    }
                }
                response = response.toLowerCase().replace(" ", ""); // normalise hex just in case
                if (base64) response = b16tob64(response);

                return response;
            },
            compileFields: function (obj) {
                var fields = {};
                for (var key in obj) {
                    var type,
                        nest = null;
                    switch (instanceOf(obj[key])) {
                        case "Array":
                            for (var el = 0, max = obj[key].length; el < max; el++) {
                                var type,
                                    nest = null;
                                switch (instanceOf(obj[key][el])) {
                                    case "Object":
                                        type = WIRETYPE_LENGTH;
                                        nest = quickPb.compileFields(obj[key][el]);
                                        break;
                                    case "Group":
                                        type = WIRETYPE_GROUPSTART;
                                        nest = quickPb.compileFields(obj[key][el]);
                                        break;
                                    case "Packed":
                                    case "String":
                                    case "Bytes":
                                        type = WIRETYPE_LENGTH;
                                        break;
                                    case "Uint32":
                                    case "Int32":
                                    case "Sint32":
                                    case "Uint64":
                                    case "Int64":
                                    case "Sint64":
                                    case "Boolean":
                                        type = WIRETYPE_VARINT;
                                        break;
                                    case "Float":
                                    case "Fixed32":
                                    case "Sfixed32":
                                        type = WIRETYPE_FLOAT;
                                        break;
                                    case "Double":
                                    case "Fixed64":
                                    case "Sfixed64":
                                        type = WIRETYPE_DOUBLE;
                                        break;
                                    case "Number":
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
                                            default:
                                                type = WIRETYPE_DOUBLE;
                                                break;
                                        }
                                        break;
                                }
                                fields[key + "_" + el] = [key, type, nest];
                            }
                            break;
                        case "Object":
                            type = WIRETYPE_LENGTH;
                            nest = quickPb.compileFields(obj[key]);
                            break;
                        case "Group":
                            type = WIRETYPE_GROUPSTART;
                            nest = quickPb.compileFields(obj[key]);
                            break;
                        case "String":
                        case "Packed":
                        case "Bytes":
                            type = WIRETYPE_LENGTH;
                            break;
                        case "Uint32":
                        case "Int32":
                        case "Sint32":
                        case "Uint64":
                        case "Int64":
                        case "Sint64":
                        case "Boolean":
                            type = WIRETYPE_VARINT;
                            break;
                        case "Float":
                        case "Fixed32":
                        case "Sfixed32":
                            type = WIRETYPE_FLOAT;
                            break;
                        case "Double":
                        case "Fixed64":
                        case "Sfixed64":
                            type = WIRETYPE_DOUBLE;
                            break;
                        case "Number":
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
                                default:
                                    type = WIRETYPE_DOUBLE;
                                    break;
                            }
                            break;
                    }
                    fields[key] = [key, type, nest];
                }
                return fields;
            },
            compileKvPair: function (key, val, fields) {
                if (!fields[key]) return "";
                var field = fields[key];
                var wireType = field[FIELD_WIRETYPE];
                var keyHeader = quickPb.compileKey(field);
                switch (wireType) {
                    case WIRETYPE_VARINT:
                        switch (instanceOf(val)) {
                            case "Uint32":
                            case "Int32":
                            case "Number":
                                return keyHeader + quickPb.compileVarint(val);
                            case "Int64":
                            case "Uint64":
                                return keyHeader + quickPb.compileVarint(val, true);
                            case "Sint32":
                                return keyHeader + quickPb.compileVarint(val, false, true);
                            case "Sint64":
                                return keyHeader + quickPb.compileVarint(val, true, true);
                            case "Boolean":
                            default:
                                return keyHeader + quickPb.compileVarint(+val);
                        }
                    case WIRETYPE_DOUBLE:
                        switch (instanceOf(val)) {
                            case "Fixed64":
                            case "Sfixed64":
                                return keyHeader + quickPb.compileInt64(val);
                            case "Double":
                            default:
                                if (typeof val.valueOf() === "string")
                                    return keyHeader + padHex(val + "").match(/[0-9a-f]{2}/gi).reverse().join("").toLowerCase();
                                return keyHeader + quickPb.compileDouble(val);
                        }
                    case WIRETYPE_LENGTH:
                        switch (instanceOf(val)) {
                            case "Packed":
                                return keyHeader + quickPb.compilePacked(val);
                            case "Object":
                                return (
                                    keyHeader +
                                    quickPb.compileLd(quickPb.compile(val, field[FIELD_NEST]))
                                );
                            case "Bytes":
                                return keyHeader + quickPb.compileLd(val.toString());
                            case "String":
                            default:
                                return keyHeader + quickPb.compileString(val);
                        }
                    case WIRETYPE_GROUPSTART:
                        return (
                            keyHeader +
                            quickPb.compile(val, field[FIELD_NEST]) +
                            quickPb.compileKey([key, WIRETYPE_GROUPEND])
                        );
                    case WIRETYPE_FLOAT:
                        switch (instanceOf(val)) {
                            case "Fixed32":
                            case "Sfixed32":
                                return keyHeader + quickPb.compileInt32(val);
                            case "Float":
                            default:
                                if (typeof val.valueOf() === "string")
                                    return keyHeader + padHex(val + "").match(/[0-9a-f]{2}/gi).reverse().join("").toLowerCase();
                                return keyHeader + quickPb.compileFloat(val);
                        }
                }
            },
            compileKey: function (keyField) {
                var num = keyField[FIELD_NUM];
                var wireType = keyField[FIELD_WIRETYPE];
                return quickPb.compileVarint(quickPb.getKey(num, wireType));
            },
            compileVarint: function (a, bignum, signed) {
                if (bignum === undefined) bignum = !signed && (a < 0); // non-zigzag negative varint32 numbers use 10 bytes so we have to use bignum here
                if (signed === undefined) signed = false;
                return leb128(a, bignum, signed);
            },
            compilePacked: function (a) {
                var payload = "";
                switch (instanceOf(a[0])) {
                    case "Number":
                        switch (a[0]) {
                            case Math.floor(a[0]):
                                for (var i in a) {
                                    payload += quickPb.compileVarint(a[i]);
                                }
                                break;
                            case ((a[0] * 1e7) | 0) / 1e7:
                                for (var i in a) {
                                    payload += quickPb.compileFloat(a[i]);
                                }
                                break;
                            default:
                                for (var i in a) {
                                    payload += quickPb.compileDouble(a[i]);
                                }
                                break;
                        }
                        break;
                    case "Uint32":
                    case "Int32":
                        for (var i in a) {
                            payload += quickPb.compileVarint(a[i], true);
                        }
                        break;
                    case "Sint32":
                        for (var i in a) {
                            payload += quickPb.compileVarint(a[i], false, true);
                        }
                        break;
                    case "Uint64":
                    case "Int64":
                        for (var i in a) {
                            payload += quickPb.compileVarint(a[i], true);
                        }
                        break;
                    case "Sint64":
                        for (var i in a) {
                            payload += quickPb.compileVarint(a[i], true, true);
                        }
                        break;
                    case "Boolean":
                        for (var i in a) {
                            payload += quickPb.compileVarint(+a[i]);
                        }
                        break;
                    case "Fixed32":
                    case "Sfixed32":
                        for (var i in a) {
                            payload += quickPb.compileInt32(a[i]);
                        }
                        break;
                    case "Fixed64":
                    case "Sfixed64":
                        for (var i in a) {
                            payload += quickPb.compileInt64(a[i]);
                        }
                        break;
                    case "Float":
                        for (var i in a) {
                            if (typeof val.valueOf() === "string") {
                                payload += padHex(a[i] + "").match(/[0-9a-f]{2}/gi).reverse().join("").toLowerCase();
                            } else
                                payload += quickPb.compileFloat(a[i]);
                        }
                        break;
                    case "Double":
                        for (var i in a) {
                            if (typeof val.valueOf() === "string") {
                                payload += padHex(a[i] + "").match(/[0-9a-f]{2}/gi).reverse().join("").toLowerCase();
                            } else
                                payload += quickPb.compileDouble(a[i]);
                        }
                        break;
                }

                return quickPb.compileLd(payload);
            },
            compileFloat: function (a) {
                return floatToHex(a);
            },
            compileDouble: function (a) {
                return doubleToHex(a);
            },
            compileInt32: function (a) {
                return int32ToHex(a);
            },
            compileInt64: function (a) {
                if (isInt32(+a) || isUint32(+a)) {
                    return int32ToHex(a) + (+a < 0 ? "FFFFFFFF" : "00000000");
                }
                return int64ToHex(a);
            },
            compileString: function (str) {
                return quickPb.compileLd(quickPb.stringToHex(str));
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
            stringToHex: function (str) {
                var hex,
                    result = "";
                for (var i = 0; i < str.length; i++) {
                    hex = str.charCodeAt(i).toString(16);
                    result += (+(hex.length >= 2) && "") + hex;
                }
                return result;
            },
            parseKey: function (val) {
                var wireType = val & 7;
                if (wireType < 6) {
                    var num = val >>> 3;
                    if (!isUint32(val)) {
                        return [ursh64(val, 3), wireType];
                    }
                    return [num, wireType];
                }
                //console.log("Invalid wiretype.");
                return -1;
            },
            decompileVarint: function (val, bignum, signed) {
                return leb128ToInt(val, bignum, signed);
            },
            seekVarint: function (hex, int64, signed) {
                if (int64 === undefined) int64 = true;
                if (signed === undefined) signed = 0;
                var val = [];
                var i = 0;
                if (!hex) return -1;
                hex = padHex(hex);
                hex = hex.match(/[0-9a-f]{2}/gi);
                hex = hex.map(function (a) {
                    return parseInt(a, 16);
                });
                do {
                    if (hex[i] < 0x80) {
                        val.push(hex[i]);
                        break;
                    }
                    if (i == hex.length - 1) {
                        //console.log("Failed to seek uleb128.");
                        return -1;
                    }
                    val.push(hex[i]);
                    i++;
                } while (i < hex.length);
                var output = val
                    .map(function (a) {
                        return padHex(a.toString(16));
                    })
                    .join("");
                output = quickPb.decompileVarint(output, int64, signed);
                return [output, i + 1];
            },
            decompileKey: function (str) {
                var keyPos = quickPb.seekVarint(str, false);
                var numType = quickPb.parseKey(keyPos[0]);
                if (!~keyPos || !~numType) {
                    return -1;
                }
                var num = numType[0];
                var wireType = numType[1];
                return [num, wireType, keyPos[1]];
            },
            decompileDouble: function (str, int) {
                if (int) return hexToUint64(str);
                return hexToFloat64(str, true);
            },
            decompileFloat: function (str, int) {
                if (int) return hexToUint32(str);
                return hexToFloat32(str, true);
            },
            processArray: function (arr) {
                return arr.reduce(function (obj, item) {
                    var key = item[0];
                    var value = item[1];

                    if (obj[key] === undefined) {
                        obj[key] =
                            value instanceof Array ? quickPb.processArray(value) : value;
                    } else {
                        if (!(obj[key] instanceof Array)) {
                            obj[key] = [obj[key]];
                        }

                        obj[key].push(
                            value instanceof Array ? quickPb.processArray(value) : value
                        );
                    }

                    return obj;
                }, {});
            },
            decompileB64Pb: function (str, groups, int) {
                //console.log(hexToString(str));
                try {
                    var response = quickPb.decompileKvPair(b64tob16(hexToString(str)), groups, int);
                } catch (e) {
                    return hexToString(str);
                }
                if (instanceOf(response) === "String") {
                    return hexToString(str);
                }
                return ({ nestedPb: quickPb.processArray(response) });
            },
            decompilePacked: function (a) {
                var arr = [];
                var valPos = [];
                a = padHex(a);
                while (a.length > 0) {
                    valPos = quickPb.seekVarint(a);
                    if (!~valPos) return -1;
                    arr.push(valPos[0]);
                    a = a.slice(valPos[1] * 2);
                }
                return arr;
            },
            decompileKvPair: function (str, groups, int, key) {
                var obj = [];
                var hex_ = padHex(str);
                var hex = hex_;
                var brk = false;
                while (hex.length > 0) {
                    var arr = [];
                    var pos = 0;
                    var keyObj = quickPb.decompileKey(hex);
                    if (!~keyObj) return hexToString(hex_);
                    arr.push(keyObj[0]);
                    //arr.push(keyObj[1]);
                    pos = keyObj[2];
                    hex = hex.slice(pos * 2);
                    switch (keyObj[1]) {
                        case WIRETYPE_VARINT:
                            var valPos = quickPb.seekVarint(hex);
                            if (!~valPos) return hexToString(hex_);
                            arr.push(valPos[0]);
                            pos = valPos[1];
                            break;
                        case WIRETYPE_LENGTH:
                            var lenPos = quickPb.seekVarint(hex, false);
                            if (!~lenPos) return hexToString(hex_);
                            pos = lenPos[0] + lenPos[1];
                            var hexLd = hex.slice(lenPos[1] * 2, pos * 2);
                            if (pos == lenPos[1]) {
                                arr.push("");
                            } else {
                                if (lenPos[0] > hexLd.length) {
                                    return hexToString(hex_);
                                } else {
                                    var LdResponse = quickPb.decompileKvPair(hexLd, groups, int);
                                    if (instanceOf(LdResponse) == "String") {
                                        LdResponse = quickPb.decompileB64Pb(hexLd, groups, int);
                                    }
                                    arr.push(LdResponse);
                                };
                            }
                            break;
                        case WIRETYPE_DOUBLE:
                            pos = 8;
                            if (hex.length < pos * 2) return hexToString(hex_);
                            var hexL = hex.slice(0, pos * 2);
                            if (pos > hexL.length) {
                                return hexToString(hex_);
                            } else {
                                arr.push(quickPb.decompileDouble(hexL, int));
                            }
                            break;
                        case WIRETYPE_FLOAT:
                            pos = 4;
                            if (hex.length < pos * 2) return hexToString(hex_);
                            var hexL = hex.slice(0, pos * 2);
                            if (pos > hexL.length) {
                                return hexToString(hex_);
                            } else {
                                arr.push(quickPb.decompileFloat(hexL, int));
                            }
                            break;
                        case WIRETYPE_GROUPSTART:
                            if (groups) {
                                var objPos = quickPb.decompileKvPair(hex, true, int, keyObj[0]);
                                if (objPos.obj === undefined) return hexToString(hex_);
                                pos = objPos.keyObj;
                                arr.push(objPos.obj);
                                break;
                            }
                        case WIRETYPE_GROUPEND:
                            if (groups) {
                                if (keyObj[0] == key) {
                                    pos = 0;
                                    brk = true;
                                    break;
                                } else return hexToString(hex_);
                            }
                        default:
                            //console.log("The input string contains an invalid data type.");
                            return hexToString(hex_);
                    }
                    hex = hex.slice(pos * 2);
                    if (brk) return { obj: obj, keyObj: (hex_.length - hex.length) / 2 };
                    obj.push(arr);
                }
                if (key !== undefined && !brk) return hexToString(hex_);
                return obj;
            },
            decompile: function (str, base64, decodeGroups, decodeAsInt) {
                // 'Groups' data type decoding is not enabled by default
                // but if the usual protobuf parsing fails, the function
                // attempts to parse this deprecated wire type unless
                // the user explicitly sets 'decodeGroups' to false.
                if (base64 === undefined) base64 = true;
                if (decodeGroups === undefined) decodeGroups = "implicitFalse";
                decodeGroups = Boolean("implicitFalse" && decodeGroups);
                if (decodeAsInt === undefined) decodeAsInt = true;


                if (!str) {
                    console.log("Empty string.\n");
                    return {};
                }
                var obj = {};
                var input = base64 ? b64tob16(str) : str;
                obj = quickPb.decompileKvPair(input, decodeGroups, decodeAsInt); // first pass
                if ((instanceOf(obj) == "String") && decodeGroups) {
                    obj = quickPb.decompileKvPair(input, true, decodeAsInt); // second pass with groups enabled
                    if (instanceOf(obj) == "String") {
                        console.error("Invalid protobuf string.\n");
                        return obj;
                    }
                }
                if (instanceOf(obj) == "String") {
                    console.error("Invalid protobuf string.\n");
                    return obj;
                }
                obj = quickPb.processArray(obj);
                return obj;
            },
        };

        __public__.Group = Group;
        __public__.Len = Len;
        __public__.Varint = Varint;
        __public__.I32 = I32;
        __public__.I64 = I64;
        __public__.Message = Message;
        __public__.Str = Str;
        __public__.Bool = Bool;
        __public__.Packed = Packed;
        __public__.Float = Float;
        __public__.Double = Double;
        __public__.Sfixed32 = Sfixed32;
        __public__.Sfixed64 = Sfixed64;
        __public__.Fixed32 = Fixed32;
        __public__.Fixed64 = Fixed64;
        __public__.Int32 = Int32;
        __public__.Int64 = Int64;
        __public__.Uint32 = Uint32;
        __public__.Uint64 = Uint64;
        __public__.Sint32 = Sint32;
        __public__.Sint64 = Sint64;
        __public__.Bytes = Bytes;
        __public__.decodePb = quickPb.decompile;
        __public__.generatePb = quickPb.compile;

        for (var member in __public__) {
            parent[member] = __public__[member];
        }

    })(this);

    function modifyPb(conti, clientId) {
        if (typeof clientName == "undefined") clientId = 5;
        var webv1Conti = decodePb(conti)[80226972][3].nestedPb[15].nestedPb;
        var userKey = webv1Conti[11][1][2];
        var deepLayer = webv1Conti[11][1][3];
        deepLayer = deepLayer.replace(/FEwhat_to_watch\u0000\u0001\u0001./, "FEwhat_to_watch\u0000\u0001\u0001" + String.fromCharCode(clientId));
        var snapshotToken = webv1Conti[12];
        snapshotToken[3][1] = Uint64(snapshotToken[3][1]);
        snapshotToken[3][2] = Fixed32(snapshotToken[3][2]);
        snapshotToken[3][3] = Fixed32(snapshotToken[3][3]);
        snapshotToken[4][1] = Uint64(snapshotToken[4][1]);
        snapshotToken[4][2] = Fixed32(snapshotToken[4][2]);
        snapshotToken[4][3] = Fixed32(snapshotToken[4][3]);

        var finalConti = generatePb({
            15: generatePb({
                11: {
                    1: {
                        1: "yt_page_snapshot_regional",
                        2: userKey,
                        3: deepLayer
                    }
                },
                12: snapshotToken,
                318126543: {
                    1: 0
                }
            })
        });
        console.log(finalConti);
        return finalConti;
    }

    var requestTypeObj = {
        hpMatrix: {
            auth: true,
            link: "browse",
            client: {
                clientName: "5",
                clientVersion: "18.02",
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
                clientVersion: "2." + (new Date).toISOString().replace(/-/g, "").slice(0, 8),
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
                "X-YOUTUBE-CLIENT-VERSION": "2." + (new Date).toISOString().replace(/-/g, "").slice(0, 8),
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

    async function getct() {
        let response = await requestYoutubei("hpMatrix");
        let token = await response.contents.singleColumnBrowseResultsRenderer.tabs[0]
            .tabRenderer.content.sectionListRenderer.continuations[0]
            .nextContinuationData.continuation;
        let ct = modifyPb(await token);
        return ct;
    }

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
                                    layoutSizing: "RICH_GRID_LAYOUT_SIZING_COMPACT",
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

    async function hardCommand() {
        var token = await getct();
        let response = await requestYoutubei("hpKevlar", token);
        response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.layoutSizing = "RICH_GRID_LAYOUT_SIZING_COMPACT";
        for (var i = 0; i < response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents.length; i++) {
            if (response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents[i].richSectionRenderer) {
                response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents[i].richSectionRenderer.content.richShelfRenderer.layoutSizing = "RICH_GRID_LAYOUT_SIZING_COMPACT";
            }
        }
        return response;
    }

    /*async function ctokenCommand() {
    return await ({"onResponseReceivedActions": [
    {
      "clickTrackingParams": "CAAQhGciEwig_5KT_OOHAxXbwUIFHTcsAWo=",
      "navigateAction": {
        "endpoint": {
          "clickTrackingParams": "",
          "commandMetadata": {
            "webCommandMetadata": {
              "url": "/",
              "webPageType": "WEB_PAGE_TYPE_BROWSE",
              "rootVe": 3854,
              "apiUrl": "/youtubei/v1/browse"
            }
          },
          "browseEndpoint": {
            "browseId": "FEwhat_to_watch",
            "params": await getct()
          }
        }
      }
    }
  ]})
  }*/

    document.addEventListener("yt-page-data-updated", async function (e) {
        if (e.detail.pageType == "home") {
            document.querySelector("[role='main']").data = {};
            document.querySelector("[role='main']").data = await skeleton;
            document.querySelector("[role='main']").data = await hardCommand();
        }
    })
})()
