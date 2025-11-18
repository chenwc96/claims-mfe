/******/ var __webpack_modules__ = ({

/***/ 42522:
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var moduleMap = {
	"./AppModule": () => {
		return __webpack_require__.e("src_app_app_module_ts").then(() => (() => ((__webpack_require__(/*! ./src/app/app.module.ts */ 36747)))));
	},
	"./ClaimModule": () => {
		return __webpack_require__.e("src_pages_claim_claim_module_ts-_76420").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim/claim.module.ts */ 39222)))));
	},
	"./ClaimTNCModule": () => {
		return __webpack_require__.e("src_pages_claim-tnc_claim-tnc_module_ts-_f5500").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-tnc/claim-tnc.module.ts */ 2625)))));
	},
	"./ClaimFormModule": () => {
		return __webpack_require__.e("src_pages_claim-form_claim-form_module_ts-_e11b0").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-form/claim-form.module.ts */ 86532)))));
	},
	"./ClaimFormEventModule": () => {
		return __webpack_require__.e("src_pages_claim-form-event_claim-form-event_module_ts-_6c180").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-form-event/claim-form-event.module.ts */ 16517)))));
	},
	"./ClaimFormDocModule": () => {
		return __webpack_require__.e("src_pages_claim-form-doc_claim-form-doc_module_ts-_9fc30").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-form-doc/claim-form-doc.module.ts */ 15590)))));
	},
	"./UploadDocModule": () => {
		return __webpack_require__.e("src_pages_upload-document_upload-document_module_ts-_04e90").then(() => (() => ((__webpack_require__(/*! ./src/pages/upload-document/upload-document.module */ 67007)))));
	},
	"./SampleDocModule": () => {
		return __webpack_require__.e("src_pages_sample-document_sample-document_module_ts-_98650").then(() => (() => ((__webpack_require__(/*! ./src/pages/sample-document/sample-document.module */ 64932)))));
	},
	"./PreviewUploadModule": () => {
		return __webpack_require__.e("src_pages_previewuploaded_previewuploaded_module_ts-_20b30").then(() => (() => ((__webpack_require__(/*! ./src/pages/previewuploaded/previewuploaded.module */ 66232)))));
	},
	"./ClaimFormReviewModule": () => {
		return __webpack_require__.e("src_pages_claim-form-review_claim-form-review_module_ts-_03dc0").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-form-review/claim-form-review.module.ts */ 36979)))));
	},
	"./ClaimFormSuccessModule": () => {
		return __webpack_require__.e("src_pages_claim-form-success_claim-form-success_module_ts-_6e530").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-form-success/claim-form-success.module.ts */ 25380)))));
	},
	"./ClaimHistoryModule": () => {
		return __webpack_require__.e("src_pages_claim-history_claim-history_module_ts-_6df70").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-history/claim-history.module.ts */ 81809)))));
	},
	"./ClaimHistoryDetailModule": () => {
		return __webpack_require__.e("src_pages_claim-history-detail_claim-history-detail_module_ts-_525f0").then(() => (() => ((__webpack_require__(/*! ./src/pages/claim-history-detail/claim-history-detail.module.ts */ 43624)))));
	},
	"./ComponentsModule": () => {
		return __webpack_require__.e("src_components_components_module_ts").then(() => (() => ((__webpack_require__(/*! ./src/components/components.module.ts */ 22066)))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/load script */
/******/ (() => {
/******/ 	var inProgress = {};
/******/ 	var dataWebpackPrefix = "claim:";
/******/ 	// loadScript function to load a script via script tag
/******/ 	__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 		if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 		var script, needAttach;
/******/ 		if(key !== undefined) {
/******/ 			var scripts = document.getElementsByTagName("script");
/******/ 			for(var i = 0; i < scripts.length; i++) {
/******/ 				var s = scripts[i];
/******/ 				if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 			}
/******/ 		}
/******/ 		if(!script) {
/******/ 			needAttach = true;
/******/ 			script = document.createElement('script');
/******/ 			script.type = "module";
/******/ 			script.charset = 'utf-8';
/******/ 			script.timeout = 120;
/******/ 			if (__webpack_require__.nc) {
/******/ 				script.setAttribute("nonce", __webpack_require__.nc);
/******/ 			}
/******/ 			script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 			script.src = __webpack_require__.tu(url);
/******/ 		}
/******/ 		inProgress[url] = [done];
/******/ 		var onScriptComplete = (prev, event) => {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var doneFns = inProgress[url];
/******/ 			delete inProgress[url];
/******/ 			script.parentNode && script.parentNode.removeChild(script);
/******/ 			doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 			if(prev) return prev(event);
/******/ 		};
/******/ 		var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 		script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 		script.onload = onScriptComplete.bind(null, script.onload);
/******/ 		needAttach && document.head.appendChild(script);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		if(!initScope) initScope = [];
/******/ 		// handling circular init calls
/******/ 		var initToken = initTokens[name];
/******/ 		if(!initToken) initToken = initTokens[name] = {};
/******/ 		if(initScope.indexOf(initToken) >= 0) return;
/******/ 		initScope.push(initToken);
/******/ 		// only runs once
/******/ 		if(initPromises[name]) return initPromises[name];
/******/ 		// creates a new share scope if needed
/******/ 		if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 		// runs all init snippets from all modules reachable
/******/ 		var scope = __webpack_require__.S[name];
/******/ 		var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 		var uniqueName = "claim";
/******/ 		var register = (name, version, factory, eager) => {
/******/ 			var versions = scope[name] = scope[name] || {};
/******/ 			var activeVersion = versions[version];
/******/ 			if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 		};
/******/ 		var initExternal = (id) => {
/******/ 			var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 			try {
/******/ 				var module = __webpack_require__(id);
/******/ 				if(!module) return;
/******/ 				var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 				if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 				var initResult = initFn(module);
/******/ 				if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 			} catch(err) { handleError(err); }
/******/ 		}
/******/ 		var promises = [];
/******/ 		switch(name) {
/******/ 			case "default": {
/******/ 				register("@angular/common", "15.2.10", () => (__webpack_require__.e("node_modules_angular_common_fesm2020_common_mjs-_ec490").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/common/fesm2020/common.mjs */ 94666))))));
/******/ 				register("@angular/core", "15.2.10", () => (__webpack_require__.e("node_modules_angular_core_fesm2020_core_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2020/core.mjs */ 22560))))));
/******/ 				register("@angular/forms", "15.2.10", () => (__webpack_require__.e("node_modules_angular_forms_fesm2020_forms_mjs-_2e340").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/forms/fesm2020/forms.mjs */ 2508))))));
/******/ 				register("@angular/router", "15.2.10", () => (__webpack_require__.e("node_modules_angular_router_fesm2020_router_mjs-_6f000").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/router/fesm2020/router.mjs */ 60124))))));
/******/ 				register("@capacitor/camera", "5.0.10", () => (__webpack_require__.e("node_modules_capacitor_camera_dist_esm_index_js-_c0b11").then(() => (() => (__webpack_require__(/*! ./node_modules/@capacitor/camera/dist/esm/index.js */ 4241))))));
/******/ 				register("@ionic/angular", "6.7.5", () => (__webpack_require__.e("node_modules_ionic_angular_fesm2015_ionic-angular_js-_e9c91").then(() => (() => (__webpack_require__(/*! ./node_modules/@ionic/angular/fesm2015/ionic-angular.js */ 93819))))));
/******/ 				register("@ngx-translate/core", "14.0.0", () => (__webpack_require__.e("node_modules_ngx-translate_core_fesm2020_ngx-translate-core_mjs-_ea9c1").then(() => (() => (__webpack_require__(/*! ./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs */ 38699))))));
/******/ 				register("@ngx-translate/http-loader", "7.0.0", () => (__webpack_require__.e("node_modules_ngx-translate_http-loader_fesm2020_ngx-translate-http-loader_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/@ngx-translate/http-loader/fesm2020/ngx-translate-http-loader.mjs */ 58319))))));
/******/ 				register("rxjs", "7.8.2", () => (__webpack_require__.e("node_modules_rxjs_dist_esm_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/rxjs/dist/esm/index.js */ 37288))))));
/******/ 			}
/******/ 			break;
/******/ 		}
/******/ 		if(!promises.length) return initPromises[name] = 1;
/******/ 		return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types policy */
/******/ (() => {
/******/ 	var policy;
/******/ 	__webpack_require__.tt = () => {
/******/ 		// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 		if (policy === undefined) {
/******/ 			policy = {
/******/ 				createScriptURL: (url) => (url)
/******/ 			};
/******/ 			if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 				policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 			}
/******/ 		}
/******/ 		return policy;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types script url */
/******/ (() => {
/******/ 	__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ (() => {
/******/ 	var parseVersion = (str) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 	}
/******/ 	var versionLt = (a, b) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 	}
/******/ 	var rangeToString = (range) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 	}
/******/ 	var satisfy = (range, version) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 	}
/******/ 	var ensureExistence = (scopeName, key) => {
/******/ 		var scope = __webpack_require__.S[scopeName];
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		return scope;
/******/ 	};
/******/ 	var findVersion = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var findSingletonVersionKey = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		return Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 		}, 0);
/******/ 	};
/******/ 	var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 		return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 	};
/******/ 	var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var findValidVersion = (scope, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			if (!satisfy(requiredVersion, b)) return a;
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 			"Available versions: " + Object.keys(versions).map((key) => {
/******/ 			return key + " from " + versions[key].from;
/******/ 		}).join(", ");
/******/ 	};
/******/ 	var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var entry = findValidVersion(scope, key, requiredVersion);
/******/ 		if(entry) return get(entry);
/******/ 		throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var get = (entry) => {
/******/ 		entry.loaded = 1;
/******/ 		return entry.get()
/******/ 	};
/******/ 	var init = (fn) => (function(scopeName, a, b, c) {
/******/ 		var promise = __webpack_require__.I(scopeName);
/******/ 		if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 		return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 	});
/******/ 	
/******/ 	var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findVersion(scope, key));
/******/ 	});
/******/ 	var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 	});
/******/ 	var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getValidVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 		return entry ? get(entry) : fallback();
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var installedModules = {};
/******/ 	var moduleToHandlerMapping = {
/******/ 		73011: () => (loadSingletonVersionCheckFallback("default", "@angular/router", [1,15,0,0], () => (__webpack_require__.e("node_modules_angular_router_fesm2020_router_mjs-_6f001").then(() => (() => (__webpack_require__(/*! @angular/router */ 60124))))))),
/******/ 		88906: () => (loadSingletonVersionCheckFallback("default", "@ionic/angular", [1,6,0,0], () => (__webpack_require__.e("node_modules_ionic_angular_fesm2015_ionic-angular_js-_e9c90").then(() => (() => (__webpack_require__(/*! @ionic/angular */ 93819))))))),
/******/ 		34984: () => (loadSingletonVersionCheckFallback("default", "@angular/core", [1,15,0,0], () => (__webpack_require__.e("node_modules_angular_core_fesm2020_core_mjs").then(() => (() => (__webpack_require__(/*! @angular/core */ 22560))))))),
/******/ 		44456: () => (loadSingletonVersionCheckFallback("default", "rxjs", [1,7,0,0], () => (__webpack_require__.e("node_modules_rxjs_dist_esm_index_js").then(() => (() => (__webpack_require__(/*! rxjs */ 37288))))))),
/******/ 		92725: () => (loadSingletonVersionCheckFallback("default", "@ngx-translate/core", [1,14,0,0], () => (__webpack_require__.e("node_modules_ngx-translate_core_fesm2020_ngx-translate-core_mjs-_ea9c0").then(() => (() => (__webpack_require__(/*! @ngx-translate/core */ 38699))))))),
/******/ 		81251: () => (loadSingletonVersionCheckFallback("default", "@ngx-translate/http-loader", [1,7,0,0], () => (__webpack_require__.e("node_modules_ngx-translate_http-loader_fesm2020_ngx-translate-http-loader_mjs").then(() => (() => (__webpack_require__(/*! @ngx-translate/http-loader */ 58319))))))),
/******/ 		23720: () => (loadSingletonVersionCheckFallback("default", "@angular/common", [1,15,0,0], () => (__webpack_require__.e("node_modules_angular_common_fesm2020_common_mjs-_ec491").then(() => (() => (__webpack_require__(/*! @angular/common */ 94666))))))),
/******/ 		96200: () => (loadSingletonVersionCheckFallback("default", "@angular/forms", [1,15,0,0], () => (__webpack_require__.e("node_modules_angular_forms_fesm2020_forms_mjs-_2e341").then(() => (() => (__webpack_require__(/*! @angular/forms */ 2508))))))),
/******/ 		96570: () => (loadSingletonVersionCheckFallback("default", "@capacitor/camera", [1,5,0,0], () => (__webpack_require__.e("node_modules_capacitor_camera_dist_esm_index_js-_c0b10").then(() => (() => (__webpack_require__(/*! @capacitor/camera */ 4241)))))))
/******/ 	};
/******/ 	// no consumes in initial chunks
/******/ 	var chunkMapping = {
/******/ 		"src_app_app_module_ts": [
/******/ 			73011,
/******/ 			88906,
/******/ 			34984,
/******/ 			44456,
/******/ 			92725,
/******/ 			81251,
/******/ 			23720
/******/ 		],
/******/ 		"src_pages_claim_claim_module_ts-_76420": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-tnc_claim-tnc_module_ts-_f5500": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			44456,
/******/ 			92725,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form_claim-form_module_ts-_e11b0": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-event_claim-form-event_module_ts-_6c180": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-doc_claim-form-doc_module_ts-_9fc30": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			96570,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456
/******/ 		],
/******/ 		"src_pages_upload-document_upload-document_module_ts-_04e90": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_sample-document_sample-document_module_ts-_98650": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			44456,
/******/ 			92725,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_previewuploaded_previewuploaded_module_ts-_20b30": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-review_claim-form-review_module_ts-_03dc0": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-success_claim-form-success_module_ts-_6e530": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-history_claim-history_module_ts-_6df70": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-history-detail_claim-history-detail_module_ts-_525f0": [
/******/ 			23720,
/******/ 			96200,
/******/ 			88906,
/******/ 			73011,
/******/ 			96570,
/******/ 			34984,
/******/ 			92725,
/******/ 			44456
/******/ 		],
/******/ 		"src_components_components_module_ts": [
/******/ 			23720,
/******/ 			34984,
/******/ 			88906,
/******/ 			73011,
/******/ 			92725,
/******/ 			96570,
/******/ 			44456
/******/ 		],
/******/ 		"node_modules_angular_common_fesm2020_common_mjs-_ec490": [
/******/ 			34984
/******/ 		],
/******/ 		"node_modules_angular_core_fesm2020_core_mjs": [
/******/ 			44456
/******/ 		],
/******/ 		"node_modules_angular_forms_fesm2020_forms_mjs-_2e340": [
/******/ 			23720,
/******/ 			34984,
/******/ 			44456
/******/ 		],
/******/ 		"node_modules_angular_router_fesm2020_router_mjs-_6f000": [
/******/ 			23720,
/******/ 			34984,
/******/ 			44456
/******/ 		],
/******/ 		"node_modules_ionic_angular_fesm2015_ionic-angular_js-_e9c91": [
/******/ 			34984,
/******/ 			96200,
/******/ 			44456,
/******/ 			73011,
/******/ 			23720
/******/ 		],
/******/ 		"node_modules_ngx-translate_core_fesm2020_ngx-translate-core_mjs-_ea9c1": [
/******/ 			34984,
/******/ 			44456
/******/ 		],
/******/ 		"node_modules_ionic_angular_fesm2015_ionic-angular_js-_e9c90": [
/******/ 			96200
/******/ 		],
/******/ 		"src_pages_claim_claim_module_ts-_76421": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form_claim-form_module_ts-_e11b1": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-tnc_claim-tnc_module_ts-_f5501": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-event_claim-form-event_module_ts-_6c181": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-doc_claim-form-doc_module_ts-_9fc31": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-review_claim-form-review_module_ts-_03dc1": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-form-success_claim-form-success_module_ts-_6e531": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-history_claim-history_module_ts-_6df71": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_claim-history-detail_claim-history-detail_module_ts-_525f1": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_upload-document_upload-document_module_ts-_04e91": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_sample-document_sample-document_module_ts-_98651": [
/******/ 			96200,
/******/ 			96570
/******/ 		],
/******/ 		"src_pages_previewuploaded_previewuploaded_module_ts-_20b31": [
/******/ 			96200,
/******/ 			96570
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 				var onFactory = (factory) => {
/******/ 					installedModules[id] = 0;
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				var onError = (error) => {
/******/ 					delete installedModules[id];
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						throw error;
/******/ 					}
/******/ 				};
/******/ 				try {
/******/ 					var promise = moduleToHandlerMapping[id]();
/******/ 					if(promise.then) {
/******/ 						promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 					} else onFactory(promise);
/******/ 				} catch(e) { onError(e); }
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"claim": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunkclaim"] = self["webpackChunkclaim"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __webpack_exports__ = __webpack_require__(42522);
/******/ var __webpack_exports__get = __webpack_exports__.get;
/******/ var __webpack_exports__init = __webpack_exports__.init;
/******/ export { __webpack_exports__get as get, __webpack_exports__init as init };
/******/ 

//# sourceMappingURL=remoteEntry.js.map