(self["webpackChunkclaim"] = self["webpackChunkclaim"] || []).push([["src_pages_claim-tnc_claim-tnc_module_ts-_f5500"],{

/***/ 43454:
/*!*****************************************************************!*\
  !*** ./src/components/action-footer/action-footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionFooterComponent": () => (/* binding */ ActionFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__);


const _c0 = [[["", "label_placement", ""]], [["", "btn_placement", ""]], [["", "second_btn_placement", ""]]];
const _c1 = ["[label_placement]", "[btn_placement]", "[second_btn_placement]"];
let ActionFooterComponent = /*#__PURE__*/(() => {
  class ActionFooterComponent {
    constructor() {
      this.footerBG = "white";
    }
    ngOnInit() {}
    static {
      this.ɵfac = function ActionFooterComponent_Factory(t) {
        return new (t || ActionFooterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActionFooterComponent,
        selectors: [["app-action-footer"]],
        inputs: {
          footerBG: "footerBG"
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [[1, "ion-no-border"]],
        template: function ActionFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("background-color: " + ctx.footerBG);
          }
        },
        dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonFooter],
        styles: ["ion-footer[_ngcontent-%COMP%] {\n  padding: 15px 15px 20px 15px;\n  z-index: 1000;\n  position: sticky;\n  left: 0px;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2FjdGlvbi1mb290ZXIvYWN0aW9uLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuXHRwYWRkaW5nOiAxNXB4IDE1cHggMjBweCAxNXB4O1xuXHR6LWluZGV4OiAxMDAwO1xuXHRwb3NpdGlvbjogc3RpY2t5O1xuXHRsZWZ0OiAwcHg7XG5cdGJvdHRvbTogMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ActionFooterComponent;
})();

/***/ }),

/***/ 16186:
/*!*****************************************************************!*\
  !*** ./src/components/bottom-popout/bottom-popout.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomPopoutComponent": () => (/* binding */ BottomPopoutComponent)
/* harmony export */ });
/* harmony import */ var _Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 96570);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73011);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_services_translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/translate-config/translate-config.service */ 37059);
/* harmony import */ var src_services_claim_form_claim_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/claim-form/claim-form.service */ 27541);
/* harmony import */ var src_services_claim_review_form_claim_review_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/claim-review-form/claim-review-form.service */ 90899);
/* harmony import */ var src_services_url_url_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/url/url.service */ 95609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 23720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_11__);












function BottomPopoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "ion-header", 4)(2, "ion-toolbar")(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Upload Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-list", 5)(6, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BottomPopoutComponent_div_0_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r2.uploadDoc();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " take photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BottomPopoutComponent_div_0_Template_ion_item_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r4.selectImageFromLibrary();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " photo library ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BottomPopoutComponent_div_0_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r5.selectImageFromLibrary();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Upload from device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r0.translateConfigService.getCurrentLang() == "km" ? "title-label-km" : "title-label");
  }
}
function BottomPopoutComponent_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BottomPopoutComponent_ion_button_2_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.translateConfigService.getCurrentLang() == "km" ? "bottompopout-btn-label-km" : "bottompopout-btn-label");
  }
}
let BottomPopoutComponent = /*#__PURE__*/(() => {
  class BottomPopoutComponent {
    gotoHome() {
      this.modal.dismiss();
      this.router.navigateByUrl("/home", {
        replaceUrl: true
      });
    }
    closeModal() {
      this.modal.dismiss();
    }
    presentToast(_x, _x2) {
      var _this = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (position, msg, color = "dark-green") {
        const toast = yield _this.toastController.create({
          message: msg,
          duration: 2000,
          position: position,
          color: color
        });
        yield toast.present();
      }).apply(this, arguments);
    }
    uploadDoc() {
      this.urlService.setPreviousUrl(this.router.url);
      if (this.router.url.includes("claim-history-detail")) {
        this.navCtrl.navigateForward("/upload-doc/history", {
          replaceUrl: true,
          animated: true
        });
        return;
      }
      this.navCtrl.navigateForward("/upload-doc", {
        replaceUrl: true,
        animated: true
      });
    }
    selectImageWeb() {
      return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = event => {
          const file = event.target.files[0];
          if (!file) {
            reject(new Error('No file selected'));
            return;
          }
          const mime = file.type;
          const format = mime.split('/')[1] || 'unknown';
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              webPath: reader.result,
              format: format
            });
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        };
        input.onerror = () => {
          reject(new Error('File input error'));
        };
        input.click();
      });
    }
    selectImageFromLibrary() {
      var _this2 = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          var image;
          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() === 'web') {
            image = yield _this2.selectImageWeb();
            console.log(JSON.stringify(image));
          } else {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform) {
              yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.requestPermissions({
                permissions: ['photos']
              });
            }
            image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
              quality: 85,
              allowEditing: false,
              resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
              source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos
            });
          }
          const imageId = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
          _this2.urlService.setPreviousUrl(_this2.router.url);
          if (_this2.router.url.includes("history")) {
            const formData = _this2.claimReviewFormService.getCurrentValue();
            _this2.claimReviewFormService.updateFormData({
              documents: [...formData?.documents, {
                id: imageId,
                filename: Date.now().toString() + "_doc." + image.format,
                image: image.webPath
              }]
            });
            _this2.navCtrl.navigateForward(`/previewuploaded/history/${imageId}`, {
              replaceUrl: true,
              animated: true
            });
            return;
          }
          const formData = _this2.claimFormService.getCurrentValue();
          _this2.claimFormService.updateFormData({
            documents: [...formData?.documents, {
              id: imageId,
              filename: Date.now().toString() + "_doc." + image.format,
              image: image.webPath
            }]
          });
          _this2.navCtrl.navigateForward(`/previewuploaded/${imageId}`, {
            replaceUrl: true,
            animated: true
          });
        } catch (error) {
          console.error('Error selecting image from library:', error);
        }
      })();
    }
    constructor(navCtrl, translate, router, toastController, translateConfigService, claimFormService, claimReviewFormService, urlService) {
      this.navCtrl = navCtrl;
      this.translate = translate;
      this.router = router;
      this.toastController = toastController;
      this.translateConfigService = translateConfigService;
      this.claimFormService = claimFormService;
      this.claimReviewFormService = claimReviewFormService;
      this.urlService = urlService;
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      this.modalSize = this.screenHeight * this.size;
    }
    ngOnInit() {
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
    }
    static {
      this.ɵfac = function BottomPopoutComponent_Factory(t) {
        return new (t || BottomPopoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_7__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_claim_form_claim_form_service__WEBPACK_IMPORTED_MODULE_8__.ClaimFormService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_claim_review_form_claim_review_form_service__WEBPACK_IMPORTED_MODULE_9__.ClaimReviewFormService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_url_url_service__WEBPACK_IMPORTED_MODULE_10__.UrlService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: BottomPopoutComponent,
        selectors: [["app-bottom-popout"]],
        inputs: {
          type: "type",
          size: "size"
        },
        decls: 3,
        vars: 2,
        consts: [["class", "bottompopout-container", 4, "ngIf"], [1, "bottompopout-buttongroup-container"], ["class", "bottompopout-btn", "expand", "full", "fill", "solid", "color", "orange", 3, "click", 4, "ngIf"], [1, "bottompopout-container"], [1, "modal-title"], [1, "bottompopout-content"], ["lines", "full", "button", "true", "mode", "md", 3, "click"], ["text-wrap", "", "slot", "start"], ["slot", "end", 1, "mnlicon-Camera"], ["slot", "end", 1, "mnlicon-Duplicate"], ["slot", "end", 1, "mnlicon-KabanMore"], ["expand", "full", "fill", "solid", "color", "orange", 1, "bottompopout-btn", 3, "click"]],
        template: function BottomPopoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BottomPopoutComponent_div_0_Template, 18, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BottomPopoutComponent_ion_button_2_Template, 3, 2, "ion-button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.type == 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.type == 1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar],
        styles: [".bottompopout-container[_ngcontent-%COMP%] {\n  background: white;\n  height: -webkit-fill-available;\n  --overflow-y: scroll;\n  min-width: 322px;\n}\n\n.bottompopout-content[_ngcontent-%COMP%] {\n  padding: 0px 16px;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin: 0px;\n  margin-top: 16px;\n  margin-right: 16px;\n}\n\n.bottompopout-header[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --inner-padding: 0px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.bottompopout-thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n  width: 100%;\n  height: 40%;\n}\n\n.banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.content-label[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.content-label[_ngcontent-%COMP%]   .title-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  color: #282B3E;\n  margin-top: 0px;\n}\n.content-label[_ngcontent-%COMP%]   .title-label-km[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans Khmer Medium\";\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  color: #282B3E;\n  margin-top: 0px;\n}\n.content-label[_ngcontent-%COMP%]   .desc-label[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #282B3E;\n}\n.content-label[_ngcontent-%COMP%]   .desc-label-km[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-family: \"Noto Sans Khmer Light\";\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #282B3E;\n}\n\n.bottompopout-buttongroup-container[_ngcontent-%COMP%] {\n  background-color: white;\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  bottom: 16px;\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n}\n\n.bottompopout-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 56px;\n  --box-shadow: none;\n  --border-radius: 0px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: none;\n}\n\n.bottompopout-outlinebtn[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 56px;\n  --box-shadow: none;\n  --border-radius: 0px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  text-transform: none;\n  --color: #282b3e;\n  --color-focused: white;\n  --border-color: #ec6453;\n  --background-focused: #d05849;\n  --background-activated: #ec6453;\n}\n\n.bottompopout-btn-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: white;\n}\n\n.bottompopout-btn-label-km[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans Khmer Medium\";\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2JvdHRvbS1wb3BvdXQvYm90dG9tLXBvcG91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDRyxrQkFBQTtBQUNKOztBQUVBO0VBQ0Msb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNHLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFFQyxrQkFBQTtBQUFEO0FBRUM7RUFDQyx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBRjtBQUdDO0VBQ0MscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREY7QUFJQztFQUNDLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGRjtBQUtDO0VBQ0MsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU9BO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUFKRDs7QUFRQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBTEQ7O0FBUUE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNHLGdCQUFBO0VBQ0gsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUFMRDs7QUFRQTtFQUNDLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTEQ7O0FBUUE7RUFDQyxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxEIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbXBvcG91dC1jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0aGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuXHQtLW92ZXJmbG93LXk6IHNjcm9sbDtcblx0bWluLXdpZHRoOiAzMjJweDtcbn1cblxuLmJvdHRvbXBvcG91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuLmNsb3NlLWljb24ge1xuXHR3aWR0aDogMjRweDtcblx0aGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDBweDtcblx0bWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5ib3R0b21wb3BvdXQtaGVhZGVyIHtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0LS1pbm5lci1wYWRkaW5nOiAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uYm90dG9tcG9wb3V0LXRodW1ibmFpbCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xufVxuXG4uYmFubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb250ZW50LWxhYmVsIHtcblx0Ly8gb3ZlcmZsb3c6IHNjcm9sbDtcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXG5cdCYgLnRpdGxlLWxhYmVsIHtcblx0XHRmb250LWZhbWlseTogXCJNYW51bGlmZSBKSCBTYW5zIE9wdGltaXplZFwiO1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMnB4O1xuXHRcdGNvbG9yOiAjMjgyQjNFO1xuXHRcdG1hcmdpbi10b3A6IDBweDtcblx0fVxuXHRcblx0JiAudGl0bGUtbGFiZWwta20ge1xuXHRcdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLaG1lciBNZWRpdW1cIjtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRsaW5lLWhlaWdodDogMzJweDtcblx0XHRjb2xvcjogIzI4MkIzRTtcblx0XHRtYXJnaW4tdG9wOiAwcHg7XG5cdH1cblx0XG5cdCYgLmRlc2MtbGFiZWwge1xuXHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0Zm9udC1mYW1pbHk6IFwiTWFudWxpZmUgSkggU2FucyBPcHRpbWl6ZWRcIjtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRjb2xvcjogIzI4MkIzRTtcblx0fVxuXHRcblx0JiAuZGVzYy1sYWJlbC1rbSB7XG5cdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRmb250LWZhbWlseTogXCJOb3RvIFNhbnMgS2htZXIgTGlnaHRcIjtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRjb2xvcjogIzI4MkIzRTtcblx0fVxufVxuXG4uYm90dG9tcG9wb3V0LWJ1dHRvbmdyb3VwLWNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDogMTZweDtcblx0cmlnaHQ6IDE2cHg7XG5cdGJvdHRvbTogMTZweDtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOjhweDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Ly8gcGFkZGluZzogMHB4IDE2cHggMjZweCAxNnB4O1xufVxuXG4uYm90dG9tcG9wb3V0LWJ0biB7XG5cdG1hcmdpbjogMHB4O1xuXHRtaW4taGVpZ2h0OiA1NnB4O1xuXHQtLWJveC1zaGFkb3c6IG5vbmU7XG5cdC0tYm9yZGVyLXJhZGl1czogMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uYm90dG9tcG9wb3V0LW91dGxpbmVidG4ge1xuXHRtYXJnaW46IDBweDtcblx0bWluLWhlaWdodDogNTZweDtcblx0LS1ib3gtc2hhZG93OiBub25lO1xuXHQtLWJvcmRlci1yYWRpdXM6IDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWNvbG9yOiAjMjgyYjNlO1xuXHQtLWNvbG9yLWZvY3VzZWQ6IHdoaXRlO1xuXHQtLWJvcmRlci1jb2xvcjogI2VjNjQ1Mztcblx0LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNkMDU4NDk7XG5cdC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNlYzY0NTM7XG59XG5cbi5ib3R0b21wb3BvdXQtYnRuLWxhYmVsIHtcblx0Zm9udC1mYW1pbHk6IFwiTWFudWxpZmUgSkggU2FucyBPcHRpbWl6ZWRcIjtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tcG9wb3V0LWJ0bi1sYWJlbC1rbSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLaG1lciBNZWRpdW1cIjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6IHdoaXRlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return BottomPopoutComponent;
})();

/***/ }),

/***/ 98227:
/*!***********************************************************!*\
  !*** ./src/components/claim-card/claim-card.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimCardComponent": () => (/* binding */ ClaimCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);



let ClaimCardComponent = /*#__PURE__*/(() => {
  class ClaimCardComponent {
    constructor() {
      this.submitDate = '';
      this.lifeInsured = '';
      this.claimNo = '';
      this.claimStatus = '';
      this.claimType = '';
    }
    ngOnInit() {}
    static {
      this.ɵfac = function ClaimCardComponent_Factory(t) {
        return new (t || ClaimCardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClaimCardComponent,
        selectors: [["app-claim-card"]],
        inputs: {
          submitDate: "submitDate",
          lifeInsured: "lifeInsured",
          claimNo: "claimNo",
          claimStatus: "claimStatus",
          claimType: "claimType"
        },
        decls: 33,
        vars: 14,
        consts: [[1, "claim-card"], [1, "header-row"], [1, "claim-card-title"], [1, "claim-card-status-green"], ["mode", "ios", 1, "thin-divider", 2, "width", "90%", "margin-left", "auto", "margin-right", "auto"], [1, "claim-card-grid"], [1, "claim-card-row"], [1, "claim-card-col"], [1, "claim-card-label"], [1, "claim-card-value"]],
        template: function ClaimCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 0)(1, "ion-card-header", 1)(2, "ion-label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-item-divider", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card-content")(8, "ion-grid", 5)(9, "ion-row", 6)(10, "ion-col", 7)(11, "ion-label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col")(15, "ion-label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-row", 6)(18, "ion-col", 7)(19, "ion-label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 7)(23, "ion-label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-row", 6)(26, "ion-col", 7)(27, "ion-label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-col", 7)(31, "ion-label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.claimType, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.claimStatus, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "CLAIM_LIST_PAGE.CLAIM_NO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.claimNo, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, "CLAIM_LIST_PAGE.LIFE_INSURED"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lifeInsured, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 12, "CLAIM_LIST_PAGE.SUBMISSION_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitDate, " ");
          }
        },
        dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRow, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
        styles: [".thin-divider[_ngcontent-%COMP%] {\n  min-height: 1px;\n  --color: #ededed;\n}\n\n.claim-card[_ngcontent-%COMP%] {\n  border-radius: 0%;\n  box-shadow: none;\n  --background: white;\n  margin: 0px;\n  margin-bottom: 16px;\n  border: 1px solid #EDEDED;\n}\n.claim-card[_ngcontent-%COMP%]   .claim-card-title[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 24px;\n  color: #282B3E;\n}\n.claim-card[_ngcontent-%COMP%]   .claim-card-status-green[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #00A758;\n}\n.claim-card[_ngcontent-%COMP%]   .claim-card-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #5E6073;\n}\n.claim-card[_ngcontent-%COMP%]   .claim-card-value[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #282B3E;\n}\n.claim-card[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NsYWltLWNhcmQvY2xhaW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDUjtBQUVJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFEUjtBQUlJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUhSIiwic291cmNlc0NvbnRlbnQiOlsiLnRoaW4tZGl2aWRlciB7XG5cdG1pbi1oZWlnaHQ6IDFweDtcblx0LS1jb2xvcjogI2VkZWRlZDtcbn1cblxuLmNsYWltLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGJveC1zaGFkb3c6bm9uZTsgICBcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VERURFRDtcblxuICAgIC5jbGFpbS1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYW51bGlmZSBKSCBTYW5zIE9wdGltaXplZCc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjMjgyQjNFO1xuICAgIH1cblxuICAgIC5jbGFpbS1jYXJkLXN0YXR1cy1ncmVlbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFudWxpZmUgSkggU2FucyBPcHRpbWl6ZWQnO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzAwQTc1ODtcbiAgICB9XG5cbiAgICAuY2xhaW0tY2FyZC1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFudWxpZmUgSkggU2FucyBPcHRpbWl6ZWQnO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzVFNjA3MztcbiAgICB9XG5cbiAgICAuY2xhaW0tY2FyZC12YWx1ZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWFudWxpZmUgSkggU2FucyBPcHRpbWl6ZWQnO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI4MkIzRTtcbiAgICB9XG5cbiAgICAmIC5oZWFkZXItcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return ClaimCardComponent;
})();

/***/ }),

/***/ 22066:
/*!*********************************************!*\
  !*** ./src/components/components.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 23720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 76109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 73011);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _action_footer_action_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-footer/action-footer.component */ 43454);
/* harmony import */ var _claim_card_claim_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim-card/claim-card.component */ 98227);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bottom_popout_bottom_popout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bottom-popout/bottom-popout.component */ 16186);
/* harmony import */ var _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-select/custom-select.component */ 64110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);










let ComponentsModule = /*#__PURE__*/(() => {
  class ComponentsModule {
    static {
      this.ɵfac = function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
      });
    }
  }
  return ComponentsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_action_footer_action_footer_component__WEBPACK_IMPORTED_MODULE_4__.ActionFooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _claim_card_claim_card_component__WEBPACK_IMPORTED_MODULE_5__.ClaimCardComponent, _bottom_popout_bottom_popout_component__WEBPACK_IMPORTED_MODULE_7__.BottomPopoutComponent, _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_8__.CustomSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule],
    exports: [_action_footer_action_footer_component__WEBPACK_IMPORTED_MODULE_4__.ActionFooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _claim_card_claim_card_component__WEBPACK_IMPORTED_MODULE_5__.ClaimCardComponent, _bottom_popout_bottom_popout_component__WEBPACK_IMPORTED_MODULE_7__.BottomPopoutComponent, _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_8__.CustomSelectComponent]
  });
})();

/***/ }),

/***/ 64110:
/*!*****************************************************************!*\
  !*** ./src/components/custom-select/custom-select.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomSelectComponent": () => (/* binding */ CustomSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_services_translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/translate-config/translate-config.service */ 37059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 23720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);





function CustomSelectComponent_ion_item_6_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.translateConfigService.getCurrentLang() == "km" ? "selection-label-km" : "selection-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
  }
}
function CustomSelectComponent_ion_item_6_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.translateConfigService.getCurrentLang() == "km" ? "selected-label-km" : "selected-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
  }
}
function CustomSelectComponent_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSelectComponent_ion_item_6_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.selectItem(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSelectComponent_ion_item_6_ion_label_1_Template, 2, 3, "ion-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomSelectComponent_ion_item_6_ion_label_2_Template, 2, 3, "ion-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.selected);
  }
}
let CustomSelectComponent = /*#__PURE__*/(() => {
  class CustomSelectComponent {
    constructor(translate, translateConfigService, modalCtrl) {
      this.translate = translate;
      this.translateConfigService = translateConfigService;
      this.modalCtrl = modalCtrl;
      this.items = [];
      this.header = "";
    }
    ngOnInit() {}
    selectItem(item) {
      this.modalCtrl.dismiss(item);
    }
    dismiss() {
      this.modalCtrl.dismiss();
    }
    static {
      this.ɵfac = function CustomSelectComponent_Factory(t) {
        return new (t || CustomSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_2__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomSelectComponent,
        selectors: [["app-custom-select"]],
        inputs: {
          items: "items",
          header: "header"
        },
        decls: 7,
        vars: 4,
        consts: [["mode", "md"], [1, "selection-list"], ["button", "", "lines", "full", "class", "selection-container", "mode", "md", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "lines", "full", "mode", "md", 1, "selection-container", 3, "click"], [3, "class", 4, "ngIf"]],
        template: function CustomSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 0)(2, "ion-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content")(5, "ion-list", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomSelectComponent_ion_item_6_Template, 3, 2, "ion-item", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.translateConfigService.getCurrentLang() == "km" ? "title-label-km" : "title-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.header, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
        styles: [".selection-list[_ngcontent-%COMP%] {\n  padding-bottom: 350px;\n}\n\n.title-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 24px;\n  color: #282b3e;\n}\n\n.title-label-km[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans Khmer Light\";\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 24px;\n  color: #282b3e;\n}\n\n.selection-container[_ngcontent-%COMP%] {\n  --inner-padding-start: 5px;\n}\n\n.selection-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 24px;\n  color: #5e6073;\n  display: flex;\n  align-items: center;\n}\n\n.selection-label-km[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans Khmer Light\";\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 24px;\n  color: #5e6073;\n  display: flex;\n  align-items: center;\n}\n\n.selected-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #282b3e;\n  display: flex;\n  align-items: center;\n}\n\n.selected-label-km[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans Khmer Medium\";\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #282b3e;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2N1c3RvbS1zZWxlY3QvY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUVBO0VBQ0Msb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDQyx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUVBO0VBQ0Msb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGlvbi1saXN0IHtcblx0cGFkZGluZy1ib3R0b206IDM1MHB4O1xufVxuXG4udGl0bGUtbGFiZWwge1xuXHRmb250LWZhbWlseTogXCJNYW51bGlmZSBKSCBTYW5zIE9wdGltaXplZFwiO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRjb2xvcjogIzI4MmIzZTtcbn1cblxuLnRpdGxlLWxhYmVsLWttIHtcblx0Zm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEtobWVyIExpZ2h0XCI7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdGNvbG9yOiAjMjgyYjNlO1xufVxuXG4uc2VsZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA1cHg7XG59XG5cbi5zZWxlY3Rpb24tbGFiZWwge1xuXHRmb250LWZhbWlseTogXCJNYW51bGlmZSBKSCBTYW5zIE9wdGltaXplZFwiO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRjb2xvcjogIzVlNjA3Mztcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGlvbi1sYWJlbC1rbSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLaG1lciBMaWdodFwiO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRjb2xvcjogIzVlNjA3Mztcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGVkLWxhYmVsIHtcblx0Zm9udC1mYW1pbHk6IFwiTWFudWxpZmUgSkggU2FucyBPcHRpbWl6ZWRcIjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6ICMyODJiM2U7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZC1sYWJlbC1rbSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLaG1lciBNZWRpdW1cIjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6ICMyODJiM2U7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return CustomSelectComponent;
})();

/***/ }),

/***/ 76109:
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__);


const _c0 = [[["", "align_left", ""]], [["", "align_right", ""]]];
const _c1 = ["[align_left]", "[align_right]"];
let HeaderComponent = /*#__PURE__*/(() => {
  class HeaderComponent {
    constructor() {
      this.borderless = false;
      this.title = '';
    }
    ngOnInit() {}
    static {
      this.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        inputs: {
          borderless: "borderless",
          title: "title"
        },
        ngContentSelectors: _c1,
        decls: 7,
        vars: 3,
        consts: [["mode", "ios", 1, "ion-no-border"], ["mode", "ios"], ["lines", "none", 1, "header-item"], [1, "centered-title-label"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-item", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.borderless ? "borderless" : "bordered");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
        styles: [".bordered[_ngcontent-%COMP%] {\n  --background: white;\n  --border-width: 0px;\n  --min-height: 54px;\n  --border-style: none;\n  border-bottom: 1px solid #ededed;\n}\n\n.borderless[_ngcontent-%COMP%] {\n  --background: white;\n  --border-width: 0px;\n  --min-height: 54px;\n  --border-style: none;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  --inner-padding-top: 0px;\n  --inner-padding-end: 0px;\n  --inner-padding-bottom: 0px;\n  --padding-start: 0px;\n}\n\n.centered-title-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0px;\n  text-align: center;\n  width: 100%;\n  color: #282B3E;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNEOztBQUVBO0VBQ0Msd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNHLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0gsV0FBQTtFQUNBLGNBQUE7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXJlZCB7XG5cdC0tYmFja2dyb3VuZDogd2hpdGU7XG5cdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdC0tbWluLWhlaWdodDogNTRweDtcblx0LS1ib3JkZXItc3R5bGU6IG5vbmU7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxuXG4uYm9yZGVybGVzcyB7XG5cdC0tYmFja2dyb3VuZDogd2hpdGU7XG5cdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdC0tbWluLWhlaWdodDogNTRweDtcblx0LS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5oZWFkZXItaXRlbSB7XG5cdC0taW5uZXItcGFkZGluZy10b3A6IDBweDtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHQtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHg7XG5cdC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uY2VudGVyZWQtdGl0bGUtbGFiZWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDU7XG4gICAgZm9udC1mYW1pbHk6IFwiTWFudWxpZmUgSkggU2FucyBPcHRpbWl6ZWRcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdGNvbG9yOiAjMjgyQjNFO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return HeaderComponent;
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  assetURL: "https://claim-blush.vercel.app/",
  baseAEM: "https://preprod-ap.manulife.com.kh",
  tncenUrl: "/graphql/execute.json/insurance/getKHTermConditionsByLocale%3Blocale%3Den",
  tnckmUrl: "/graphql/execute.json/insurance/getKHTermConditionsByLocale%3Blocale%3Dkm",
  claimTNCUrl: "/graphql/execute.json/insurance/getKHTermConditionByPath%3BtermConditionPath%3D"
};

/***/ }),

/***/ 12078:
/*!*********************************************************!*\
  !*** ./src/pages/claim-tnc/claim-tnc-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimTncPageRoutingModule": () => (/* binding */ ClaimTncPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 73011);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _claim_tnc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-tnc.page */ 84100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




const routes = [{
  path: '',
  component: _claim_tnc_page__WEBPACK_IMPORTED_MODULE_1__.ClaimTncPage
}];
let ClaimTncPageRoutingModule = /*#__PURE__*/(() => {
  class ClaimTncPageRoutingModule {
    static {
      this.ɵfac = function ClaimTncPageRoutingModule_Factory(t) {
        return new (t || ClaimTncPageRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ClaimTncPageRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
      });
    }
  }
  return ClaimTncPageRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimTncPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ }),

/***/ 2625:
/*!*************************************************!*\
  !*** ./src/pages/claim-tnc/claim-tnc.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimTncPageModule": () => (/* binding */ ClaimTncPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 23720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 96200);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _claim_tnc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./claim-tnc-routing.module */ 12078);
/* harmony import */ var _claim_tnc_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./claim-tnc.page */ 84100);
/* harmony import */ var src_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/components.module */ 22066);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 59067);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_services_claimapi_claimapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/claimapi/claimapi.service */ 41230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);











let ClaimTncPageModule = /*#__PURE__*/(() => {
  class ClaimTncPageModule {
    static {
      this.ɵfac = function ClaimTncPageModule_Factory(t) {
        return new (t || ClaimTncPageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: ClaimTncPageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [_awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_7__.HTTP, src_services_claimapi_claimapi_service__WEBPACK_IMPORTED_MODULE_8__.ClaimApiService],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _claim_tnc_routing_module__WEBPACK_IMPORTED_MODULE_3__.ClaimTncPageRoutingModule, src_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule]
      });
    }
  }
  return ClaimTncPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ClaimTncPageModule, {
    declarations: [_claim_tnc_page__WEBPACK_IMPORTED_MODULE_4__.ClaimTncPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _claim_tnc_routing_module__WEBPACK_IMPORTED_MODULE_3__.ClaimTncPageRoutingModule, src_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule]
  });
})();

/***/ }),

/***/ 84100:
/*!***********************************************!*\
  !*** ./src/pages/claim-tnc/claim-tnc.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimTncPage": () => (/* binding */ ClaimTncPage)
/* harmony export */ });
/* harmony import */ var _Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 88906);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_services_claimapi_claimapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/claimapi/claimapi.service */ 41230);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_services_translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/translate-config/translate-config.service */ 37059);
/* harmony import */ var src_services_url_url_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/url/url.service */ 95609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 73011);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 23720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_action_footer_action_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/action-footer/action-footer.component */ 43454);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/header/header.component */ 76109);

















const _c0 = ["tnccontent"];
function ClaimTncPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.translateConfigService.getCurrentLang() == "km" ? "tnc-content-km" : "tnc-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.tncContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function ClaimTncPage_ion_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 9)(1, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Scroll to confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("disabled-action-footer-btn");
  }
}
function ClaimTncPage_ion_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClaimTncPage_ion_button_6_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.urlService.setPreviousUrl(ctx_r4.router.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("action-footer-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/claim-form");
  }
}
let ClaimTncPage = /*#__PURE__*/(() => {
  class ClaimTncPage {
    onScroll() {
      var _this = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.loaded) {
          return;
        }
        const scrollElement = yield _this.ionContent.getScrollElement();
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = scrollElement;
        // Use a threshold to account for floating point inaccuracies and mobile browser quirks
        const threshold = 20;
        if (scrollTop + clientHeight >= scrollHeight - threshold) {
          console.log('Scrolled to the bottom!');
          _this.enabledBtn = true;
        }
      })();
    }
    goBack() {
      if (this.prevUrl != null) {
        this.navCtrl.navigateBack(this.prevUrl, {
          replaceUrl: true,
          animated: true
        });
        this.urlService.removePreviousUrl();
        return;
      }
      this.navCtrl.navigateBack("/claim", {
        replaceUrl: true,
        animated: true
      });
    }
    getTNCList() {
      var _this2 = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        (yield _this2.claimApiService.getTNC()).subscribe(res => {
          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() == 'ios' || _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() == 'android') {
            const data = JSON.parse(res.data);
            console.log("TNC: ", JSON.stringify(res));
            _this2.getClaimsTNC(data.data.termConditionList.items[0]._path);
          } else {
            const data = res;
            console.log("TNC: ", JSON.stringify(res));
            _this2.getClaimsTNC(data.data.termConditionList.items[0]._path);
          }
        }, err => {
          console.log("tnc list error: ", JSON.stringify(err));
        });
      })();
    }
    getClaimsTNC(path) {
      var _this3 = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        (yield _this3.claimApiService.getClaimTNC(path)).subscribe(res => {
          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() == 'ios' || _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() == 'android') {
            const data = JSON.parse(res.data);
            console.log("Claim: ", JSON.stringify(res));
            _this3.tncContent = data.data.termConditionByPath.item.mainContent.html;
            _this3.tncContent = _this3._sanitizer.sanitize(1, _this3.tncContent);
            _this3.loaded = true;
          } else {
            const data = res;
            console.log("Claim: ", JSON.stringify(res));
            _this3.tncContent = data.data.termConditionByPath.item.mainContent.html;
            _this3.tncContent = _this3._sanitizer.sanitize(1, _this3.tncContent);
            _this3.loaded = true;
          }
        }, err => {
          console.log("claim tnc error: ", JSON.stringify(err));
        });
      })();
    }
    constructor(_sanitizer, navCtrl, translate, translateConfigService, claimApiService, urlService, router) {
      this._sanitizer = _sanitizer;
      this.navCtrl = navCtrl;
      this.translate = translate;
      this.translateConfigService = translateConfigService;
      this.claimApiService = claimApiService;
      this.urlService = urlService;
      this.router = router;
      this.tncenUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.baseAEM + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.tncenUrl;
      this.tnckmUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.baseAEM + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.tnckmUrl;
      this.tncContent = `
    <h1>I hereby DECLARE, UNDERSTAND and AGREE that:</h1>
    <p>1. I confirm that I am not a US citizen or have tax declaration obligation in USA or at least have one of the following indicia:</p>
      <ul>
      <li>US passport or US resident documents</li>
      <li>US tax identification number, or</li>
      <li>US birthplace, US telephone, US address at the of request for change.</li>
      </ul>
    <p>1. All information provided by me for this claim is completed and true to the best of my knowledge and belief.</p>
    <p>2. I confirm I am policyowner or beneficiary. The identity information I provide herein is owned by me as the policyowner or beneficiary as part of this claim submission process. I understand that "Submit eClaim application" is part of the claim process and I will not be entitled to any payment of claim until the entire claim process is considered by Manulife (Cambodia PLC) to be completed.</p>
    <p>3. I also hereby agree with and authorize Manulife to deduct from the claim payment, in the event that, I have any shortfall, for whatever reason. Manulife also has the right to reverse / claim back any incorrect payments caused by incorrect/ omission of required information provided in processing the claim.</p>
    <p>4. If a claim is submitted by me as policyowner or beneficiary, then I confirm that I have obtained the necessary authorization from the Insured to
    <p>(a) supply his/her information to Manulife; and</p>
    <p>(b) transfer all supplied information from Manulife to me. I also understand that the information requested in this claim is required in order for Manulife to process this claim.</p>
    <p>1. I understand that for the purpose of auditing any of my successful claim submission, I may be requested by Manulife to submit any or all original supporting document(s). If I receive such a request, I undertake and agree to immediately submit the Original Documents to Manulife. In the event that I fail to accede to such request or the submitted Original Documents are found to be untrue, fake or misleading, Manulife reserves all the rights including but without limitation not to accept any further eClaim application from me or the Dependent.</p>
    <p>2. I also undertake to notify Manulife if any event within 30 calendar days from the date of change.</p>
    <p>3. I agree to provide my mobile phone number to Manulife in order to keep I informed of any information related to my claim submission.</p>
    <p>4. I agree to allow and authorize Manulife to implement necessary acts subject to applicable law or regulation, including information that need to be collect and disclose my/our information to domestic and oversea authority, regulators to comply with any law requirements</p>
  `;
      this.enabledBtn = false;
      this.translateConfigService.getDefaultLanguage();
      console.log('Injected service instance:', this.claimApiService);
      console.log('Prototype methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.claimApiService)));
    }
    ngOnInit() {
      this.urlService.previousUrl$.subscribe(previousUrl => {
        this.previousUrl = previousUrl;
      });
      this.prevUrl = this.previousUrl[this.previousUrl.length - 1];
      if (this.prevUrl == null || this.prevUrl == undefined) {
        this.urlService.setPreviousUrl("/claim");
        this.prevUrl = "/claim";
      }
    }
    ionViewWillEnter() {
      var _this4 = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!navigator.onLine) {
          console.log("no internet");
          return;
        }
        _this4.tncContent = _this4._sanitizer.sanitize(1, _this4.tncContent);
        _this4.loaded = false;
        yield _this4.getTNCList();
      })();
    }
    static {
      this.ɵfac = function ClaimTncPage_Factory(t) {
        return new (t || ClaimTncPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_7__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_claimapi_claimapi_service__WEBPACK_IMPORTED_MODULE_5__.ClaimApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_url_url_service__WEBPACK_IMPORTED_MODULE_8__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ClaimTncPage,
        selectors: [["app-claim-tnc"]],
        viewQuery: function ClaimTncPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ionContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tnc_content = _t.first);
          }
        },
        decls: 7,
        vars: 7,
        consts: [[3, "borderless", "title"], ["align_left", "", "slot", "start", "defaultHref", "", "text", "", "mode", "ios", 1, "top-bar-back-icon", "mnlicon-Left", 3, "icon", "click"], ["ion-content", "", 3, "scrollEvents", "ionScroll"], ["class", "tnc-container", 4, "ngIf"], ["btn_placement", "", "expand", "full", "fill", "solid", "color", "gray", 3, "class", 4, "ngIf"], ["btn_placement", "", "expand", "full", "fill", "solid", "color", "orange", 3, "class", "routerLink", "click", 4, "ngIf"], [1, "tnc-container"], [3, "innerHTML"], ["tnccontent", ""], ["btn_placement", "", "expand", "full", "fill", "solid", "color", "gray"], [1, "disabled-action-footer-btn-label"], ["btn_placement", "", "expand", "full", "fill", "solid", "color", "orange", 3, "routerLink", "click"], [1, "action-footer-btn-label"]],
        template: function ClaimTncPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-header", 0)(1, "ion-back-button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClaimTncPage_Template_ion_back_button_click_1_listener() {
              return ctx.goBack();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function ClaimTncPage_Template_ion_content_ionScroll_2_listener() {
              return ctx.onScroll();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ClaimTncPage_div_3_Template, 3, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-action-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ClaimTncPage_ion_button_5_Template, 3, 2, "ion-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ClaimTncPage_ion_button_6_Template, 3, 3, "ion-button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("borderless", true)("title", "Terms and conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.enabledBtn);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.enabledBtn);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _components_action_footer_action_footer_component__WEBPACK_IMPORTED_MODULE_11__.ActionFooterComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent],
        styles: ["html.ios[_ngcontent-%COMP%] {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md[_ngcontent-%COMP%] {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody[_ngcontent-%COMP%] {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n\nhtml.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:first-of-type, html.ios[_ngcontent-%COMP%]   ion-modal.modal-sheet[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:first-of-type, html.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:first-of-type {\n  padding-top: 6px;\n}\n\n\nhtml.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type, html.ios[_ngcontent-%COMP%]   ion-modal.modal-sheet[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 6px;\n}\n\n\nhtml.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding-right: calc(var(--ion-safe-area-right) + 8px);\n  padding-left: calc(var(--ion-safe-area-left) + 8px);\n}\n\n\n@media screen and (min-width: 768px) {\n  html.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]:first-of-type {\n    --backdrop-opacity: 0.18;\n  }\n}\n\nion-modal.modal-default.show-modal[_ngcontent-%COMP%]    ~ ion-modal.modal-default[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0;\n  --box-shadow: none;\n}\n\n\nhtml.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]   .ion-page[_ngcontent-%COMP%] {\n  border-top-left-radius: var(--border-radius);\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n\n.ion-color-tertiary[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n\n.ion-color-success[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n.ion-color-warning[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n\n.ion-color-danger[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n\n.ion-color-light[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n\n.ion-color-dark[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\n\nion-modal[_ngcontent-%COMP%]    > .ion-page[_ngcontent-%COMP%] {\n  position: relative;\n  contain: layout style;\n  height: 100%;\n}\n\n.split-pane-visible[_ngcontent-%COMP%]    > .ion-page.split-pane-main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nion-route[_ngcontent-%COMP%], ion-route-redirect[_ngcontent-%COMP%], ion-router[_ngcontent-%COMP%], ion-select-option[_ngcontent-%COMP%], ion-nav-controller[_ngcontent-%COMP%], ion-menu-controller[_ngcontent-%COMP%], ion-action-sheet-controller[_ngcontent-%COMP%], ion-alert-controller[_ngcontent-%COMP%], ion-loading-controller[_ngcontent-%COMP%], ion-modal-controller[_ngcontent-%COMP%], ion-picker-controller[_ngcontent-%COMP%], ion-popover-controller[_ngcontent-%COMP%], ion-toast-controller[_ngcontent-%COMP%], .ion-page-hidden[_ngcontent-%COMP%], [hidden][_ngcontent-%COMP%] {\n  \n  display: none !important;\n}\n\n.ion-page-invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.can-go-back[_ngcontent-%COMP%]    > ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  display: block;\n}\n\nhtml.plt-ios.plt-hybrid[_ngcontent-%COMP%], html.plt-ios.plt-pwa[_ngcontent-%COMP%] {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html[_ngcontent-%COMP%] {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html[_ngcontent-%COMP%] {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html[_ngcontent-%COMP%] {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color[_ngcontent-%COMP%]   .ion-inherit-color[_ngcontent-%COMP%], ion-card-header.ion-color[_ngcontent-%COMP%]   .ion-inherit-color[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open[_ngcontent-%COMP%] {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios[_ngcontent-%COMP%]   .menu-content-reveal[_ngcontent-%COMP%] {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios[_ngcontent-%COMP%]   .menu-content-reveal[_ngcontent-%COMP%] {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md[_ngcontent-%COMP%]   .menu-content-reveal[_ngcontent-%COMP%] {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n.md[_ngcontent-%COMP%]   .menu-content-push[_ngcontent-%COMP%] {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\nion-accordion-group.accordion-group-expand-inset[_ngcontent-%COMP%]    > ion-accordion[_ngcontent-%COMP%]:first-of-type {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nion-accordion-group.accordion-group-expand-inset[_ngcontent-%COMP%]    > ion-accordion[_ngcontent-%COMP%]:last-of-type {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nion-accordion-group[_ngcontent-%COMP%]    > ion-accordion[_ngcontent-%COMP%]:last-of-type   ion-item[slot=header][_ngcontent-%COMP%] {\n  --border-width: 0px;\n}\n\nion-accordion.accordion-animated[_ngcontent-%COMP%]    > [slot=header][_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%] {\n  transition: 300ms transform cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  ion-accordion[_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%] {\n    \n    transition: none !important;\n  }\n}\n\nion-accordion.accordion-expanding[_ngcontent-%COMP%]    > [slot=header][_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%], ion-accordion.accordion-expanded[_ngcontent-%COMP%]    > [slot=header][_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\nion-accordion-group.accordion-group-expand-inset.md[_ngcontent-%COMP%]    > ion-accordion.accordion-previous[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%] {\n  --border-width: 0px;\n  --inner-border-width: 0px;\n}\n\nion-accordion-group.accordion-group-expand-inset.md[_ngcontent-%COMP%]    > ion-accordion.accordion-expanding[_ngcontent-%COMP%]:first-of-type, ion-accordion-group.accordion-group-expand-inset.md[_ngcontent-%COMP%]    > ion-accordion.accordion-expanded[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n\nion-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-date-and-time-value {\n  text-align: start;\n}\n\n\n.ion-datetime-button-overlay[_ngcontent-%COMP%] {\n  --width: fit-content;\n  --height: fit-content;\n}\n\n\n.ion-datetime-button-overlay[_ngcontent-%COMP%]   ion-datetime.datetime-grid[_ngcontent-%COMP%] {\n  width: 320px;\n  min-height: 320px;\n}\n\n\n\naudio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], progress[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\naudio[_ngcontent-%COMP%]:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea[_ngcontent-%COMP%]::placeholder {\n  padding-left: 2px;\n}\n\nform[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .ion-tappable[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%], [tappable] div[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%]   span[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  touch-action: manipulation;\n}\n\na[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[disabled][_ngcontent-%COMP%], button[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml[_ngcontent-%COMP%]:not(.hydrated)   body[_ngcontent-%COMP%] {\n  display: none;\n}\n\nhtml.ion-ce[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  display: block;\n}\n\nhtml.plt-pwa[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\nbody[_ngcontent-%COMP%] {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  \n  transform: translateZ(0);\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n\n\nhtml[_ngcontent-%COMP%] {\n  font-family: var(--ion-font-family);\n}\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 75%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\n\n\n\n.ion-hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.ion-hide-up[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.ion-hide-down[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media (min-width: 576px) {\n  .ion-hide-sm-up[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n\n\n.ion-no-padding[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding[_ngcontent-%COMP%] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding[_ngcontent-%COMP%] {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top[_ngcontent-%COMP%] {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start[_ngcontent-%COMP%] {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start[_ngcontent-%COMP%] {\n    padding-left: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end[_ngcontent-%COMP%] {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end[_ngcontent-%COMP%] {\n    padding-right: unset;\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom[_ngcontent-%COMP%] {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical[_ngcontent-%COMP%] {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal[_ngcontent-%COMP%] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal[_ngcontent-%COMP%] {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin[_ngcontent-%COMP%] {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin[_ngcontent-%COMP%] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin[_ngcontent-%COMP%] {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top[_ngcontent-%COMP%] {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start[_ngcontent-%COMP%] {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start[_ngcontent-%COMP%] {\n    margin-left: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end[_ngcontent-%COMP%] {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end[_ngcontent-%COMP%] {\n    margin-right: unset;\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom[_ngcontent-%COMP%] {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical[_ngcontent-%COMP%] {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal[_ngcontent-%COMP%] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal[_ngcontent-%COMP%] {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n\n\n.ion-float-left[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.ion-float-right[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.ion-float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ion-float-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-start[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.ion-float-end[_ngcontent-%COMP%] {\n  float: right !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ion-float-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-end[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n\n  .ion-float-sm-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-sm-start[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-sm-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-sm-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-sm-start[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-sm-end[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-sm-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-sm-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-sm-end[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n\n  .ion-float-md-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-md-start[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-md-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-md-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-md-start[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-md-end[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-md-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-md-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-md-end[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n\n  .ion-float-lg-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-lg-start[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-lg-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-lg-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-lg-start[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-lg-end[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-lg-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-lg-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-lg-end[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n\n  .ion-float-xl-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-xl-start[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-xl-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-xl-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-xl-start[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n\n  .ion-float-xl-end[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .ion-float-xl-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-xl-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-xl-end[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n}\n\n\n\n.ion-text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.ion-text-justify[_ngcontent-%COMP%] {\n  text-align: justify !important;\n}\n\n.ion-text-start[_ngcontent-%COMP%] {\n  text-align: start !important;\n}\n\n.ion-text-end[_ngcontent-%COMP%] {\n  text-align: end !important;\n}\n\n.ion-text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.ion-text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.ion-text-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify[_ngcontent-%COMP%] {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start[_ngcontent-%COMP%] {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end[_ngcontent-%COMP%] {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap[_ngcontent-%COMP%] {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify[_ngcontent-%COMP%] {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start[_ngcontent-%COMP%] {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end[_ngcontent-%COMP%] {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap[_ngcontent-%COMP%] {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify[_ngcontent-%COMP%] {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start[_ngcontent-%COMP%] {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end[_ngcontent-%COMP%] {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap[_ngcontent-%COMP%] {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify[_ngcontent-%COMP%] {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start[_ngcontent-%COMP%] {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end[_ngcontent-%COMP%] {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap[_ngcontent-%COMP%] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap[_ngcontent-%COMP%] {\n    white-space: normal !important;\n  }\n}\n\n\n\n.ion-text-uppercase[_ngcontent-%COMP%] {\n  \n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase[_ngcontent-%COMP%] {\n  \n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize[_ngcontent-%COMP%] {\n  \n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase[_ngcontent-%COMP%] {\n    \n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase[_ngcontent-%COMP%] {\n    \n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize[_ngcontent-%COMP%] {\n    \n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase[_ngcontent-%COMP%] {\n    \n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase[_ngcontent-%COMP%] {\n    \n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize[_ngcontent-%COMP%] {\n    \n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase[_ngcontent-%COMP%] {\n    \n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase[_ngcontent-%COMP%] {\n    \n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize[_ngcontent-%COMP%] {\n    \n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase[_ngcontent-%COMP%] {\n    \n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase[_ngcontent-%COMP%] {\n    \n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize[_ngcontent-%COMP%] {\n    \n    text-transform: capitalize !important;\n  }\n}\n\n\n\n.ion-align-self-start[_ngcontent-%COMP%] {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end[_ngcontent-%COMP%] {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center[_ngcontent-%COMP%] {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch[_ngcontent-%COMP%] {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline[_ngcontent-%COMP%] {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto[_ngcontent-%COMP%] {\n  align-self: auto !important;\n}\n\n.ion-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap[_ngcontent-%COMP%] {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse[_ngcontent-%COMP%] {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\n\n.ion-justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.ion-justify-content-end[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n.ion-justify-content-around[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly[_ngcontent-%COMP%] {\n  justify-content: space-evenly !important;\n}\n\n.ion-align-items-start[_ngcontent-%COMP%] {\n  align-items: flex-start !important;\n}\n\n.ion-align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.ion-align-items-end[_ngcontent-%COMP%] {\n  align-items: flex-end !important;\n}\n\n.ion-align-items-stretch[_ngcontent-%COMP%] {\n  align-items: stretch !important;\n}\n\n.ion-align-items-baseline[_ngcontent-%COMP%] {\n  align-items: baseline !important;\n}\n\n\n\n\n\n\n\n\n\n\n@font-face {\n  font-family: \"manulife-icons\";\n  src: url(\"https://www.manulife.com.kh/etc.clientlibs/coremfc/clientlibs/clientlib-site/resources/fonts/icons/manulife-icons.eot?jvge30\");\n  src: url(\"https://www.manulife.com.kh/etc.clientlibs/coremfc/clientlibs/clientlib-site/resources/fonts/icons/manulife-icons.eot?jvge30#iefix\") format(\"embedded-opentype\"), url(\"https://www.manulife.com.kh/etc.clientlibs/coremfc/clientlibs/clientlib-site/resources/fonts/icons/manulife-icons.ttf?jvge30\") format(\"truetype\"), url(\"https://www.manulife.com.kh/etc.clientlibs/coremfc/clientlibs/clientlib-site/resources/fonts/icons/manulife-icons.woff?jvge30\") format(\"woff\"), url(\"https://www.manulife.com.kh/etc.clientlibs/coremfc/clientlibs/clientlib-site/resources/fonts/icons/manulife-icons.svg?jvge30#manulife-icons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=mnlicon-][_ngcontent-%COMP%], [class*=\" mnlicon-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"manulife-icons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n}\n[class^=mnlicon-].white[_ngcontent-%COMP%]:before, [class*=\" mnlicon-\"].white[_ngcontent-%COMP%]:before {\n  color: #fff !important;\n}\n\n.mnlicon-keyboard_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\\e900\";\n}\n\n.mnlicon-chevron-right[_ngcontent-%COMP%]:before {\n  content: \"\\e901\";\n}\n\n.mnlicon-chevron-small-right[_ngcontent-%COMP%]:before {\n  content: \"\\e902\";\n}\n\n.mnlicon-chevron-thin-right[_ngcontent-%COMP%]:before {\n  content: \"\\e903\";\n}\n\n.mnlicon-navigate_next[_ngcontent-%COMP%]:before {\n  content: \"\\e904\";\n}\n\n.mnlicon-Advisor1[_ngcontent-%COMP%]:before {\n  content: \"\\e905\";\n}\n\n.mnlicon-Death[_ngcontent-%COMP%]:before {\n  content: \"\\e906\";\n}\n\n.mnlicon-Bill[_ngcontent-%COMP%]:before {\n  content: \"\\e907\";\n}\n\n.mnlicon-Conversation1[_ngcontent-%COMP%]:before {\n  content: \"\\e908\";\n}\n\n.mnlicon-Download[_ngcontent-%COMP%]:before {\n  content: \"\\e909\";\n}\n\n.mnlicon-Star[_ngcontent-%COMP%]:before {\n  content: \"\\e90a\";\n}\n\n.mnlicon-About[_ngcontent-%COMP%]:before {\n  content: \"\\e90b\";\n}\n\n.mnlicon-Briefcase[_ngcontent-%COMP%]:before {\n  content: \"\\e90c\";\n}\n\n.mnlicon-Blog2[_ngcontent-%COMP%]:before {\n  content: \"\\e90d\";\n}\n\n.mnlicon-Discount[_ngcontent-%COMP%]:before {\n  content: \"\\e90e\";\n}\n\n.mnlicon-Phone[_ngcontent-%COMP%]:before {\n  content: \"\\e90f\";\n}\n\n.mnlicon-Cart[_ngcontent-%COMP%]:before {\n  content: \"\\e910\";\n}\n\n.mnlicon-Question[_ngcontent-%COMP%]:before {\n  content: \"\\e911\";\n}\n\n.mnlicon-Active[_ngcontent-%COMP%]:before {\n  content: \"\\e912\";\n}\n\n.mnlicon-Chart1[_ngcontent-%COMP%]:before {\n  content: \"\\e913\";\n}\n\n.mnlicon-FundUnits[_ngcontent-%COMP%]:before {\n  content: \"\\e914\";\n}\n\n.mnlicon-CashBenefit[_ngcontent-%COMP%]:before {\n  content: \"\\e915\";\n}\n\n.mnlicon-Education[_ngcontent-%COMP%]:before {\n  content: \"\\e916\";\n}\n\n.mnlicon-Manulife[_ngcontent-%COMP%]:before {\n  content: \"\\e917\";\n}\n\n.mnlicon-FirstAid[_ngcontent-%COMP%]:before {\n  content: \"\\e918\";\n}\n\n.mnlicon-Import[_ngcontent-%COMP%]:before {\n  content: \"\\e919\";\n}\n\n.mnlicon-FormSimple[_ngcontent-%COMP%]:before {\n  content: \"\\e91a\";\n}\n\n.mnlicon-Health[_ngcontent-%COMP%]:before {\n  content: \"\\e91b\";\n}\n\n.mnlicon-MedicalReport[_ngcontent-%COMP%]:before {\n  content: \"\\e91c\";\n}\n\n.mnlicon-Mobile[_ngcontent-%COMP%]:before {\n  content: \"\\e91d\";\n}\n\n.mnlicon-Payment[_ngcontent-%COMP%]:before {\n  content: \"\\e91e\";\n}\n\n.mnlicon-Accumulate[_ngcontent-%COMP%]:before {\n  content: \"\\e91f\";\n}\n\n.mnlicon-AccelerateGrowth[_ngcontent-%COMP%]:before {\n  content: \"\\e920\";\n}\n\n.mnlicon-Document[_ngcontent-%COMP%]:before {\n  content: \"\\e921\";\n}\n\n.mnlicon-SaveFile[_ngcontent-%COMP%]:before {\n  content: \"\\e922\";\n}\n\n.mnlicon-PayTime[_ngcontent-%COMP%]:before {\n  content: \"\\e923\";\n}\n\n.mnlicon-Statement[_ngcontent-%COMP%]:before {\n  content: \"\\e924\";\n}\n\n.mnlicon-Handshake[_ngcontent-%COMP%]:before {\n  content: \"\\e925\";\n}\n\n.mnlicon-FormLong[_ngcontent-%COMP%]:before {\n  content: \"\\e926\";\n}\n\n.mnlicon-Login2[_ngcontent-%COMP%]:before {\n  content: \"\\e927\";\n}\n\n.mnlicon-Wallet[_ngcontent-%COMP%]:before {\n  content: \"\\e928\";\n}\n\n.mnlicon-Reimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\e929\";\n}\n\n.mnlicon-HusbandAndWifeAlternate[_ngcontent-%COMP%]:before {\n  content: \"\\e92a\";\n}\n\n.mnlicon-Sunny[_ngcontent-%COMP%]:before {\n  content: \"\\e92b\";\n}\n\n.mnlicon-Work[_ngcontent-%COMP%]:before {\n  content: \"\\e92c\";\n}\n\n.mnlicon-Stethoscope[_ngcontent-%COMP%]:before {\n  content: \"\\e92d\";\n}\n\n.mnlicon-Megaphone[_ngcontent-%COMP%]:before {\n  content: \"\\e92e\";\n}\n\n.mnlicon-Bank1[_ngcontent-%COMP%]:before {\n  content: \"\\e92f\";\n}\n\n.mnlicon-Trophy[_ngcontent-%COMP%]:before {\n  content: \"\\e930\";\n}\n\n.mnlicon-facebook[_ngcontent-%COMP%]:before {\n  content: \"\\e931\";\n}\n\n.mnlicon-Globe[_ngcontent-%COMP%]:before {\n  content: \"\\e932\";\n}\n\n.mnlicon-FormEmpty[_ngcontent-%COMP%]:before {\n  content: \"\\e933\";\n}\n\n.mnlicon-Promo[_ngcontent-%COMP%]:before {\n  content: \"\\e934\";\n}\n\n.mnlicon-Info[_ngcontent-%COMP%]:before {\n  content: \"\\e935\";\n}\n\n.mnlicon-Calculator[_ngcontent-%COMP%]:before {\n  content: \"\\e936\";\n}\n\n.mnlicon-Key[_ngcontent-%COMP%]:before {\n  content: \"\\e937\";\n}\n\n.mnlicon-Dollar[_ngcontent-%COMP%]:before {\n  content: \"\\e938\";\n}\n\n.mnlicon-Collaboration[_ngcontent-%COMP%]:before {\n  content: \"\\e939\";\n}\n\n.mnlicon-Buildings[_ngcontent-%COMP%]:before {\n  content: \"\\e93a\";\n}\n\n.mnlicon-Meter[_ngcontent-%COMP%]:before {\n  content: \"\\e93b\";\n}\n\n.mnlicon-CriticalIllness[_ngcontent-%COMP%]:before {\n  content: \"\\e93c\";\n}\n\n.mnlicon-Training[_ngcontent-%COMP%]:before {\n  content: \"\\e93d\";\n}\n\n.mnlicon-Family[_ngcontent-%COMP%]:before {\n  content: \"\\e93e\";\n}\n\n.mnlicon-Happy[_ngcontent-%COMP%]:before {\n  content: \"\\e93f\";\n}\n\n.mnlicon-MeetingRoom[_ngcontent-%COMP%]:before {\n  content: \"\\e940\";\n}\n\n.mnlicon-Wheelchair[_ngcontent-%COMP%]:before {\n  content: \"\\e941\";\n}\n\n.mnlicon-WheelChair[_ngcontent-%COMP%]:before {\n  content: \"\\e941\";\n}\n\n.mnlicon-Grandparents[_ngcontent-%COMP%]:before {\n  content: \"\\e942\";\n}\n\n.mnlicon-OutPatient[_ngcontent-%COMP%]:before {\n  content: \"\\e943\";\n}\n\n.mnlicon-RockingHorse[_ngcontent-%COMP%]:before {\n  content: \"\\e944\";\n}\n\n.mnlicon-Agent[_ngcontent-%COMP%]:before {\n  content: \"\\e945\";\n}\n\n.mnlicon-Ball[_ngcontent-%COMP%]:before {\n  content: \"\\e946\";\n}\n\n.mnlicon-History[_ngcontent-%COMP%]:before {\n  content: \"\\e947\";\n}\n\n.mnlicon-PeopleElder[_ngcontent-%COMP%]:before {\n  content: \"\\e948\";\n}\n\n.mnlicon-Info2[_ngcontent-%COMP%]:before {\n  content: \"\\e949\";\n}\n\n.mnlicon-Save2[_ngcontent-%COMP%]:before {\n  content: \"\\e94a\";\n}\n\n.mnlicon-Bank2[_ngcontent-%COMP%]:before {\n  content: \"\\e94b\";\n}\n\n.mnlicon-Solutions[_ngcontent-%COMP%]:before {\n  content: \"\\e94c\";\n}\n\n.mnlicon-PortfolioOptimization[_ngcontent-%COMP%]:before {\n  content: \"\\e94d\";\n}\n\n.mnlicon-Home2[_ngcontent-%COMP%]:before {\n  content: \"\\e94e\";\n}\n\n.mnlicon-Checklist[_ngcontent-%COMP%]:before {\n  content: \"\\e94f\";\n}\n\n.mnlicon-List[_ngcontent-%COMP%]:before {\n  content: \"\\e950\";\n}\n\n.mnlicon-Bicycle[_ngcontent-%COMP%]:before {\n  content: \"\\e951\";\n}\n\n.mnlicon-Save1[_ngcontent-%COMP%]:before {\n  content: \"\\e952\";\n}\n\n.mnlicon-Cells[_ngcontent-%COMP%]:before {\n  content: \"\\e953\";\n}\n\n.mnlicon-RollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\e954\";\n}\n\n.mnlicon-Hospital[_ngcontent-%COMP%]:before {\n  content: \"\\e955\";\n}\n\n.mnlicon-Balance[_ngcontent-%COMP%]:before {\n  content: \"\\e956\";\n}\n\n.mnlicon-Home1[_ngcontent-%COMP%]:before {\n  content: \"\\e957\";\n}\n\n.mnlicon-Syringe[_ngcontent-%COMP%]:before {\n  content: \"\\e958\";\n}\n\n.mnlicon-ChildBoy[_ngcontent-%COMP%]:before {\n  content: \"\\e959\";\n}\n\n.mnlicon-FemaleSymbol[_ngcontent-%COMP%]:before {\n  content: \"\\e95a\";\n}\n\n.mnlicon-CircleCheckmark[_ngcontent-%COMP%]:before {\n  content: \"\\e95b\";\n}\n\n.mnlicon-Plus[_ngcontent-%COMP%]:before {\n  content: \"\\e95c\";\n}\n\n.mnlicon-CareerAdvancement[_ngcontent-%COMP%]:before {\n  content: \"\\e95d\";\n}\n\n.mnlicon-BadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\e95e\";\n}\n\n.mnlicon-Alarm[_ngcontent-%COMP%]:before {\n  content: \"\\e95f\";\n}\n\n.mnlicon-MaleSymbol[_ngcontent-%COMP%]:before {\n  content: \"\\e960\";\n}\n\n.mnlicon-HospitalBed[_ngcontent-%COMP%]:before {\n  content: \"\\e961\";\n}\n\n.mnlicon-Active2[_ngcontent-%COMP%]:before {\n  content: \"\\e962\";\n}\n\n.mnlicon-LeavingAnInheritance[_ngcontent-%COMP%]:before {\n  content: \"\\e963\";\n}\n\n.mnlicon-Bonus[_ngcontent-%COMP%]:before {\n  content: \"\\e964\";\n}\n\n.mnlicon-Exchange[_ngcontent-%COMP%]:before {\n  content: \"\\e965\";\n}\n\n.mnlicon-AddFile[_ngcontent-%COMP%]:before {\n  content: \"\\e966\";\n}\n\n.mnlicon-Cash[_ngcontent-%COMP%]:before {\n  content: \"\\e967\";\n}\n\n.mnlicon-PaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\e968\";\n}\n\n.mnlicon-Target[_ngcontent-%COMP%]:before {\n  content: \"\\e969\";\n}\n\n.mnlicon-Woman[_ngcontent-%COMP%]:before {\n  content: \"\\e96a\";\n}\n\n.mnlicon-Man[_ngcontent-%COMP%]:before {\n  content: \"\\e96b\";\n}\n\n.mnlicon-MoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\e96c\";\n}\n\n.mnlicon-Compare[_ngcontent-%COMP%]:before {\n  content: \"\\e96d\";\n}\n\n.mnlicon-Calendar[_ngcontent-%COMP%]:before {\n  content: \"\\e96e\";\n}\n\n.mnlicon-Coin[_ngcontent-%COMP%]:before {\n  content: \"\\e96f\";\n}\n\n.mnlicon-PayInCash[_ngcontent-%COMP%]:before {\n  content: \"\\e970\";\n}\n\n.mnlicon-linkedin[_ngcontent-%COMP%]:before {\n  content: \"\\e971\";\n}\n\n.mnlicon-Cheque[_ngcontent-%COMP%]:before {\n  content: \"\\e972\";\n}\n\n.mnlicon-HistoryBadge[_ngcontent-%COMP%]:before {\n  content: \"\\e973\";\n}\n\n.mnlicon-Infinity[_ngcontent-%COMP%]:before {\n  content: \"\\e974\";\n}\n\n.mnlicon-BadgeUp[_ngcontent-%COMP%]:before {\n  content: \"\\e975\";\n}\n\n.mnlicon-Blog1[_ngcontent-%COMP%]:before {\n  content: \"\\e976\";\n}\n\n.mnlicon-Cashless[_ngcontent-%COMP%]:before {\n  content: \"\\e977\";\n}\n\n.mnlicon-Library[_ngcontent-%COMP%]:before {\n  content: \"\\e978\";\n}\n\n.mnlicon-Ambulance[_ngcontent-%COMP%]:before {\n  content: \"\\e979\";\n}\n\n.mnlicon-FormSearch[_ngcontent-%COMP%]:before {\n  content: \"\\e97a\";\n}\n\n.mnlicon-Conversation2[_ngcontent-%COMP%]:before {\n  content: \"\\e97b\";\n}\n\n.mnlicon-Email[_ngcontent-%COMP%]:before {\n  content: \"\\e97c\";\n}\n\n.mnlicon-Reception[_ngcontent-%COMP%]:before {\n  content: \"\\e97d\";\n}\n\n.mnlicon-Timeline[_ngcontent-%COMP%]:before {\n  content: \"\\e97e\";\n}\n\n.mnlicon-Location[_ngcontent-%COMP%]:before {\n  content: \"\\e97f\";\n}\n\n.mnlicon-CreditCard[_ngcontent-%COMP%]:before {\n  content: \"\\e980\";\n}\n\n.mnlicon-Id[_ngcontent-%COMP%]:before {\n  content: \"\\e981\";\n}\n\n.mnlicon-Dependent[_ngcontent-%COMP%]:before {\n  content: \"\\e982\";\n}\n\n.mnlicon-ExchangeRate[_ngcontent-%COMP%]:before {\n  content: \"\\e983\";\n}\n\n.mnlicon-Work2[_ngcontent-%COMP%]:before {\n  content: \"\\e984\";\n}\n\n.mnlicon-Upgrade[_ngcontent-%COMP%]:before {\n  content: \"\\e985\";\n}\n\n.mnlicon-PortfolioOptimization2[_ngcontent-%COMP%]:before {\n  content: \"\\e986\";\n}\n\n.mnlicon-Minus[_ngcontent-%COMP%]:before {\n  content: \"\\e987\";\n}\n\n.mnlicon-Login1[_ngcontent-%COMP%]:before {\n  content: \"\\e988\";\n}\n\n.mnlicon-Products[_ngcontent-%COMP%]:before {\n  content: \"\\e989\";\n}\n\n.mnlicon-AboutUs[_ngcontent-%COMP%]:before {\n  content: \"\\e98a\";\n}\n\n.mnlicon-PieChart1[_ngcontent-%COMP%]:before {\n  content: \"\\e98b\";\n}\n\n.mnlicon-FundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\e98c\";\n}\n\n.mnlicon-Heart[_ngcontent-%COMP%]:before {\n  content: \"\\e98d\";\n}\n\n.mnlicon-FullScreen[_ngcontent-%COMP%]:before {\n  content: \"\\e98e\";\n}\n\n.mnlicon-Diversification[_ngcontent-%COMP%]:before {\n  content: \"\\e98f\";\n}\n\n.mnlicon-Gift[_ngcontent-%COMP%]:before {\n  content: \"\\e990\";\n}\n\n.mnlicon-NoSmoking1[_ngcontent-%COMP%]:before {\n  content: \"\\e991\";\n}\n\n.mnlicon-BadgeCheckmark[_ngcontent-%COMP%]:before {\n  content: \"\\e992\";\n}\n\n.mnlicon-Idea[_ngcontent-%COMP%]:before {\n  content: \"\\e993\";\n}\n\n.mnlicon-Apple[_ngcontent-%COMP%]:before {\n  content: \"\\e994\";\n}\n\n.mnlicon-InPatient[_ngcontent-%COMP%]:before {\n  content: \"\\e995\";\n}\n\n.mnlicon-PriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\e996\";\n}\n\n.mnlicon-IncomeSupport[_ngcontent-%COMP%]:before {\n  content: \"\\e997\";\n}\n\n.mnlicon-FlexibilityAlternate[_ngcontent-%COMP%]:before {\n  content: \"\\e998\";\n}\n\n.mnlicon-PiggyBank[_ngcontent-%COMP%]:before {\n  content: \"\\e999\";\n}\n\n.mnlicon-AccelerateGrowth2[_ngcontent-%COMP%]:before {\n  content: \"\\e99a\";\n}\n\n.mnlicon-Passport[_ngcontent-%COMP%]:before {\n  content: \"\\e99b\";\n}\n\n.mnlicon-Live[_ngcontent-%COMP%]:before {\n  content: \"\\e99c\";\n}\n\n.mnlicon-Upload[_ngcontent-%COMP%]:before {\n  content: \"\\e99d\";\n}\n\n.mnlicon-Mcbl[_ngcontent-%COMP%]:before {\n  content: \"\\e99e\";\n}\n\n.mnlicon-EasyApplicationWithNoHealthCheckUp[_ngcontent-%COMP%]:before {\n  content: \"\\e99f\";\n}\n\n.mnlicon-ExpenseEfficiency[_ngcontent-%COMP%]:before {\n  content: \"\\e9a0\";\n}\n\n.mnlicon-Lock[_ngcontent-%COMP%]:before {\n  content: \"\\e9a1\";\n}\n\n.mnlicon-FirstAid2[_ngcontent-%COMP%]:before {\n  content: \"\\e9a2\";\n}\n\n.mnlicon-Reload[_ngcontent-%COMP%]:before {\n  content: \"\\e9a3\";\n}\n\n.mnlicon-Update[_ngcontent-%COMP%]:before {\n  content: \"\\e9a4\";\n}\n\n.mnlicon-Pill[_ngcontent-%COMP%]:before {\n  content: \"\\e9a5\";\n}\n\n.mnlicon-Like[_ngcontent-%COMP%]:before {\n  content: \"\\e9a6\";\n}\n\n.mnlicon-Safe[_ngcontent-%COMP%]:before {\n  content: \"\\e9a7\";\n}\n\n.mnlicon-FormCompleted[_ngcontent-%COMP%]:before {\n  content: \"\\e9a8\";\n}\n\n.mnlicon-Touch[_ngcontent-%COMP%]:before {\n  content: \"\\e9a9\";\n}\n\n.mnlicon-HighPerformingTeam[_ngcontent-%COMP%]:before {\n  content: \"\\e9aa\";\n}\n\n.mnlicon-Advisor2[_ngcontent-%COMP%]:before {\n  content: \"\\e9ab\";\n}\n\n.mnlicon-Car[_ngcontent-%COMP%]:before {\n  content: \"\\e9ac\";\n}\n\n.mnlicon-Airplane[_ngcontent-%COMP%]:before {\n  content: \"\\e9ad\";\n}\n\n.mnlicon-Communication[_ngcontent-%COMP%]:before {\n  content: \"\\e9ae\";\n}\n\n.mnlicon-Tooth[_ngcontent-%COMP%]:before {\n  content: \"\\e9af\";\n}\n\n.mnlicon-Baby[_ngcontent-%COMP%]:before {\n  content: \"\\e9b0\";\n}\n\n.mnlicon-Cashier[_ngcontent-%COMP%]:before {\n  content: \"\\e9b1\";\n}\n\n.mnlicon-GuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\e9b2\";\n}\n\n.mnlicon-DigitalCustomerLeader[_ngcontent-%COMP%]:before {\n  content: \"\\e9b3\";\n}\n\n.mnlicon-MobileLaptop[_ngcontent-%COMP%]:before {\n  content: \"\\e9b4\";\n}\n\n.mnlicon-Laptop[_ngcontent-%COMP%]:before {\n  content: \"\\e9b5\";\n}\n\n.mnlicon-ManWearingGlasses[_ngcontent-%COMP%]:before {\n  content: \"\\e9b6\";\n}\n\n.mnlicon-Person[_ngcontent-%COMP%]:before {\n  content: \"\\e9b7\";\n}\n\n.mnlicon-StairsUp[_ngcontent-%COMP%]:before {\n  content: \"\\e9b8\";\n}\n\n.mnlicon-Flag[_ngcontent-%COMP%]:before {\n  content: \"\\e9b9\";\n}\n\n.mnlicon-Award[_ngcontent-%COMP%]:before {\n  content: \"\\e9ba\";\n}\n\n.mnlicon-Watch[_ngcontent-%COMP%]:before {\n  content: \"\\e9bb\";\n}\n\n.mnlicon-Retirement[_ngcontent-%COMP%]:before {\n  content: \"\\e9bc\";\n}\n\n.mnlicon-GuaranteedDeathBenefits[_ngcontent-%COMP%]:before {\n  content: \"\\e9bd\";\n}\n\n.mnlicon-Tombstone[_ngcontent-%COMP%]:before {\n  content: \"\\e9bd\";\n}\n\n.mnlicon-TombStone[_ngcontent-%COMP%]:before {\n  content: \"\\e9bd\";\n}\n\n.mnlicon-ChartHistory[_ngcontent-%COMP%]:before {\n  content: \"\\e9be\";\n}\n\n.mnlicon-Leaf[_ngcontent-%COMP%]:before {\n  content: \"\\e9bf\";\n}\n\n.mnlicon-Camera[_ngcontent-%COMP%]:before {\n  content: \"\\e9c0\";\n}\n\n.mnlicon-Callback[_ngcontent-%COMP%]:before {\n  content: \"\\e9c1\";\n}\n\n.mnlicon-AccidentalDentalCare[_ngcontent-%COMP%]:before {\n  content: \"\\e9c2\";\n}\n\n.mnlicon-Cake[_ngcontent-%COMP%]:before {\n  content: \"\\e9c3\";\n}\n\n.mnlicon-Cafe[_ngcontent-%COMP%]:before {\n  content: \"\\e9c4\";\n}\n\n.mnlicon-Bus[_ngcontent-%COMP%]:before {\n  content: \"\\e9c5\";\n}\n\n.mnlicon-Brightness[_ngcontent-%COMP%]:before {\n  content: \"\\e9c6\";\n}\n\n.mnlicon-Brain[_ngcontent-%COMP%]:before {\n  content: \"\\e9c7\";\n}\n\n.mnlicon-Boy[_ngcontent-%COMP%]:before {\n  content: \"\\e9c8\";\n}\n\n.mnlicon-BoxingGlove[_ngcontent-%COMP%]:before {\n  content: \"\\e9c9\";\n}\n\n.mnlicon-BottomRight[_ngcontent-%COMP%]:before {\n  content: \"\\e9ca\";\n}\n\n.mnlicon-BottomLeft[_ngcontent-%COMP%]:before {\n  content: \"\\e9cb\";\n}\n\n.mnlicon-Bottle[_ngcontent-%COMP%]:before {\n  content: \"\\e9cc\";\n}\n\n.mnlicon-Bookmark[_ngcontent-%COMP%]:before {\n  content: \"\\e9cd\";\n}\n\n.mnlicon-Body[_ngcontent-%COMP%]:before {\n  content: \"\\e9ce\";\n}\n\n.mnlicon-Binoculars[_ngcontent-%COMP%]:before {\n  content: \"\\e9cf\";\n}\n\n.mnlicon-BeachBall[_ngcontent-%COMP%]:before {\n  content: \"\\e9d0\";\n}\n\n.mnlicon-Building[_ngcontent-%COMP%]:before {\n  content: \"\\e9d1\";\n}\n\n.mnlicon-Bandage[_ngcontent-%COMP%]:before {\n  content: \"\\e9d2\";\n}\n\n.mnlicon-BadgeX[_ngcontent-%COMP%]:before {\n  content: \"\\e9d3\";\n}\n\n.mnlicon-Artery[_ngcontent-%COMP%]:before {\n  content: \"\\e9d4\";\n}\n\n.mnlicon-ArrowRight[_ngcontent-%COMP%]:before {\n  content: \"\\e9d5\";\n}\n\n.mnlicon-ArrowLeft[_ngcontent-%COMP%]:before {\n  content: \"\\e9d6\";\n}\n\n.mnlicon-AngleUp[_ngcontent-%COMP%]:before {\n  content: \"\\e9d7\";\n}\n\n.mnlicon-AngleDown[_ngcontent-%COMP%]:before {\n  content: \"\\e9d8\";\n}\n\n.mnlicon-Aluminum[_ngcontent-%COMP%]:before {\n  content: \"\\e9d9\";\n}\n\n.mnlicon-Agile[_ngcontent-%COMP%]:before {\n  content: \"\\e9da\";\n}\n\n.mnlicon-ChangeOfLifeInsuredAlternate[_ngcontent-%COMP%]:before {\n  content: \"\\e9db\";\n}\n\n.mnlicon-ChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\e9dc\";\n}\n\n.mnlicon-Caution[_ngcontent-%COMP%]:before {\n  content: \"\\e9dd\";\n}\n\n.mnlicon-Carton[_ngcontent-%COMP%]:before {\n  content: \"\\e9de\";\n}\n\n.mnlicon-Carrot[_ngcontent-%COMP%]:before {\n  content: \"\\e9df\";\n}\n\n.mnlicon-CaretUp[_ngcontent-%COMP%]:before {\n  content: \"\\e9e0\";\n}\n\n.mnlicon-CaretDown[_ngcontent-%COMP%]:before {\n  content: \"\\e9e1\";\n}\n\n.mnlicon-Chart2[_ngcontent-%COMP%]:before {\n  content: \"\\e9e2\";\n}\n\n.mnlicon-Chart[_ngcontent-%COMP%]:before {\n  content: \"\\e9e3\";\n}\n\n.mnlicon-Chess[_ngcontent-%COMP%]:before {\n  content: \"\\e9e4\";\n}\n\n.mnlicon-Checkmark[_ngcontent-%COMP%]:before {\n  content: \"\\e9e5\";\n}\n\n.mnlicon-Check[_ngcontent-%COMP%]:before {\n  content: \"\\e9e5\";\n}\n\n.mnlicon-ChristmasTree[_ngcontent-%COMP%]:before {\n  content: \"\\e9e6\";\n}\n\n.mnlicon-ChildGirl[_ngcontent-%COMP%]:before {\n  content: \"\\e9e7\";\n}\n\n.mnlicon-ClothesHanger[_ngcontent-%COMP%]:before {\n  content: \"\\e9e8\";\n}\n\n.mnlicon-Clock[_ngcontent-%COMP%]:before {\n  content: \"\\e9e9\";\n}\n\n.mnlicon-Yearly[_ngcontent-%COMP%]:before {\n  content: \"\\e9e9\";\n}\n\n.mnlicon-CleanRoom[_ngcontent-%COMP%]:before {\n  content: \"\\e9ea\";\n}\n\n.mnlicon-CircleX[_ngcontent-%COMP%]:before {\n  content: \"\\e9eb\";\n}\n\n.mnlicon-ComplimentaryBenefits[_ngcontent-%COMP%]:before {\n  content: \"\\e9ec\";\n}\n\n.mnlicon-CommunicationsTower[_ngcontent-%COMP%]:before {\n  content: \"\\e9ed\";\n}\n\n.mnlicon-Comment[_ngcontent-%COMP%]:before {\n  content: \"\\e9ee\";\n}\n\n.mnlicon-ComingTogether[_ngcontent-%COMP%]:before {\n  content: \"\\e9ef\";\n}\n\n.mnlicon-Cloudy[_ngcontent-%COMP%]:before {\n  content: \"\\e9f0\";\n}\n\n.mnlicon-Coverage[_ngcontent-%COMP%]:before {\n  content: \"\\e9f1\";\n}\n\n.mnlicon-Corn[_ngcontent-%COMP%]:before {\n  content: \"\\e9f2\";\n}\n\n.mnlicon-CopyPaste[_ngcontent-%COMP%]:before {\n  content: \"\\e9f3\";\n}\n\n.mnlicon-DNA[_ngcontent-%COMP%]:before {\n  content: \"\\e9f4\";\n}\n\n.mnlicon-Digital[_ngcontent-%COMP%]:before {\n  content: \"\\e9f5\";\n}\n\n.mnlicon-Desktop[_ngcontent-%COMP%]:before {\n  content: \"\\e9f6\";\n}\n\n.mnlicon-Delete[_ngcontent-%COMP%]:before {\n  content: \"\\e9f7\";\n}\n\n.mnlicon-DeleteFile[_ngcontent-%COMP%]:before {\n  content: \"\\e9f8\";\n}\n\n.mnlicon-Debt[_ngcontent-%COMP%]:before {\n  content: \"\\e9f9\";\n}\n\n.mnlicon-DayView[_ngcontent-%COMP%]:before {\n  content: \"\\e9fa\";\n}\n\n.mnlicon-DateRange[_ngcontent-%COMP%]:before {\n  content: \"\\e9fb\";\n}\n\n.mnlicon-Date[_ngcontent-%COMP%]:before {\n  content: \"\\e9fc\";\n}\n\n.mnlicon-Dacadoo[_ngcontent-%COMP%]:before {\n  content: \"\\e9fd\";\n}\n\n.mnlicon-Crown[_ngcontent-%COMP%]:before {\n  content: \"\\e9fe\";\n}\n\n.mnlicon-EasyApplicationWithNoHealthCheck[_ngcontent-%COMP%]:before {\n  content: \"\\e9ff\";\n}\n\n.mnlicon-Earbuds[_ngcontent-%COMP%]:before {\n  content: \"\\ea00\";\n}\n\n.mnlicon-Duplicate[_ngcontent-%COMP%]:before {\n  content: \"\\ea01\";\n}\n\n.mnlicon-Drink[_ngcontent-%COMP%]:before {\n  content: \"\\ea02\";\n}\n\n.mnlicon-Down[_ngcontent-%COMP%]:before {\n  content: \"\\ea03\";\n}\n\n.mnlicon-ExcelPPTWordPDF[_ngcontent-%COMP%]:before {\n  content: \"\\ea04\";\n}\n\n.mnlicon-EstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\ea05\";\n}\n\n.mnlicon-Escalator[_ngcontent-%COMP%]:before {\n  content: \"\\ea06\";\n}\n\n.mnlicon-EPSSVG[_ngcontent-%COMP%]:before {\n  content: \"\\ea07\";\n}\n\n.mnlicon-EngagementRing[_ngcontent-%COMP%]:before {\n  content: \"\\ea08\";\n}\n\n.mnlicon-Emotions[_ngcontent-%COMP%]:before {\n  content: \"\\ea09\";\n}\n\n.mnlicon-EmergencyExit[_ngcontent-%COMP%]:before {\n  content: \"\\ea0a\";\n}\n\n.mnlicon-Elevator[_ngcontent-%COMP%]:before {\n  content: \"\\ea0b\";\n}\n\n.mnlicon-Eggs[_ngcontent-%COMP%]:before {\n  content: \"\\ea0c\";\n}\n\n.mnlicon-Edit[_ngcontent-%COMP%]:before {\n  content: \"\\ea0d\";\n}\n\n.mnlicon-Fax[_ngcontent-%COMP%]:before {\n  content: \"\\ea0e\";\n}\n\n.mnlicon-Eye2[_ngcontent-%COMP%]:before {\n  content: \"\\ea0f\";\n}\n\n.mnlicon-Eye[_ngcontent-%COMP%]:before {\n  content: \"\\ea10\";\n}\n\n.mnlicon-Export[_ngcontent-%COMP%]:before {\n  content: \"\\ea11\";\n}\n\n.mnlicon-Exit[_ngcontent-%COMP%]:before {\n  content: \"\\ea12\";\n}\n\n.mnlicon-Fire[_ngcontent-%COMP%]:before {\n  content: \"\\ea13\";\n}\n\n.mnlicon-FinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\ea14\";\n}\n\n.mnlicon-Filter[_ngcontent-%COMP%]:before {\n  content: \"\\ea15\";\n}\n\n.mnlicon-FileFolder[_ngcontent-%COMP%]:before {\n  content: \"\\ea16\";\n}\n\n.mnlicon-Ferry[_ngcontent-%COMP%]:before {\n  content: \"\\ea17\";\n}\n\n.mnlicon-Fish[_ngcontent-%COMP%]:before {\n  content: \"\\ea18\";\n}\n\n.mnlicon-FocusRoom[_ngcontent-%COMP%]:before {\n  content: \"\\ea19\";\n}\n\n.mnlicon-Flower[_ngcontent-%COMP%]:before {\n  content: \"\\ea1a\";\n}\n\n.mnlicon-FlexibleAccess[_ngcontent-%COMP%]:before {\n  content: \"\\ea1b\";\n}\n\n.mnlicon-Flexibility[_ngcontent-%COMP%]:before {\n  content: \"\\ea1c\";\n}\n\n.mnlicon-Frisbee[_ngcontent-%COMP%]:before {\n  content: \"\\ea1d\";\n}\n\n.mnlicon-Gear[_ngcontent-%COMP%]:before {\n  content: \"\\ea1e\";\n}\n\n.mnlicon-Game[_ngcontent-%COMP%]:before {\n  content: \"\\ea1f\";\n}\n\n.mnlicon-Growth2[_ngcontent-%COMP%]:before {\n  content: \"\\ea20\";\n}\n\n.mnlicon-Growth1[_ngcontent-%COMP%]:before {\n  content: \"\\ea21\";\n}\n\n.mnlicon-Girl[_ngcontent-%COMP%]:before {\n  content: \"\\ea22\";\n}\n\n.mnlicon-Height[_ngcontent-%COMP%]:before {\n  content: \"\\ea23\";\n}\n\n.mnlicon-HearingAid[_ngcontent-%COMP%]:before {\n  content: \"\\ea24\";\n}\n\n.mnlicon-Headset[_ngcontent-%COMP%]:before {\n  content: \"\\ea25\";\n}\n\n.mnlicon-Handwashing[_ngcontent-%COMP%]:before {\n  content: \"\\ea26\";\n}\n\n.mnlicon-HandWaving[_ngcontent-%COMP%]:before {\n  content: \"\\ea27\";\n}\n\n.mnlicon-Hamburger[_ngcontent-%COMP%]:before {\n  content: \"\\ea28\";\n}\n\n.mnlicon-HackySack[_ngcontent-%COMP%]:before {\n  content: \"\\ea29\";\n}\n\n.mnlicon-Gym[_ngcontent-%COMP%]:before {\n  content: \"\\ea2a\";\n}\n\n.mnlicon-Holiday2[_ngcontent-%COMP%]:before {\n  content: \"\\ea2b\";\n}\n\n.mnlicon-Hourglass[_ngcontent-%COMP%]:before {\n  content: \"\\ea2c\";\n}\n\n.mnlicon-Hotel[_ngcontent-%COMP%]:before {\n  content: \"\\ea2d\";\n}\n\n.mnlicon-IceCream[_ngcontent-%COMP%]:before {\n  content: \"\\ea2e\";\n}\n\n.mnlicon-Hypertargeting[_ngcontent-%COMP%]:before {\n  content: \"\\ea2f\";\n}\n\n.mnlicon-Kidneys[_ngcontent-%COMP%]:before {\n  content: \"\\ea30\";\n}\n\n.mnlicon-KeepSilent[_ngcontent-%COMP%]:before {\n  content: \"\\ea31\";\n}\n\n.mnlicon-KabanMore[_ngcontent-%COMP%]:before {\n  content: \"\\ea32\";\n}\n\n.mnlicon-JPGGIFPNG[_ngcontent-%COMP%]:before {\n  content: \"\\ea33\";\n}\n\n.mnlicon-Instrument[_ngcontent-%COMP%]:before {\n  content: \"\\ea34\";\n}\n\n.mnlicon-Link[_ngcontent-%COMP%]:before {\n  content: \"\\ea35\";\n}\n\n.mnlicon-Search[_ngcontent-%COMP%]:before {\n  content: \"\\ea36\";\n}\n\n.mnlicon-Left[_ngcontent-%COMP%]:before {\n  content: \"\\ea37\";\n}\n\n.mnlicon-Lungs[_ngcontent-%COMP%]:before {\n  content: \"\\ea38\";\n}\n\n.mnlicon-Love[_ngcontent-%COMP%]:before {\n  content: \"\\ea39\";\n}\n\n.mnlicon-MassageTherapy[_ngcontent-%COMP%]:before {\n  content: \"\\ea3a\";\n}\n\n.mnlicon-Mask2[_ngcontent-%COMP%]:before {\n  content: \"\\ea3b\";\n}\n\n.mnlicon-Mask1[_ngcontent-%COMP%]:before {\n  content: \"\\ea3c\";\n}\n\n.mnlicon-MarketingAutomation[_ngcontent-%COMP%]:before {\n  content: \"\\ea3d\";\n}\n\n.mnlicon-MapleLeaf[_ngcontent-%COMP%]:before {\n  content: \"\\ea3e\";\n}\n\n.mnlicon-Medicine[_ngcontent-%COMP%]:before {\n  content: \"\\ea3f\";\n}\n\n.mnlicon-Microphone[_ngcontent-%COMP%]:before {\n  content: \"\\ea40\";\n}\n\n.mnlicon-MentalHealth[_ngcontent-%COMP%]:before {\n  content: \"\\ea41\";\n}\n\n.mnlicon-Night[_ngcontent-%COMP%]:before {\n  content: \"\\ea42\";\n}\n\n.mnlicon-Neutral[_ngcontent-%COMP%]:before {\n  content: \"\\ea43\";\n}\n\n.mnlicon-Music[_ngcontent-%COMP%]:before {\n  content: \"\\ea44\";\n}\n\n.mnlicon-MP3[_ngcontent-%COMP%]:before {\n  content: \"\\ea45\";\n}\n\n.mnlicon-MOVMP4[_ngcontent-%COMP%]:before {\n  content: \"\\ea46\";\n}\n\n.mnlicon-Mouse[_ngcontent-%COMP%]:before {\n  content: \"\\ea47\";\n}\n\n.mnlicon-Paper[_ngcontent-%COMP%]:before {\n  content: \"\\ea48\";\n}\n\n.mnlicon-Pantry[_ngcontent-%COMP%]:before {\n  content: \"\\ea49\";\n}\n\n.mnlicon-OfficeBuilding[_ngcontent-%COMP%]:before {\n  content: \"\\ea4a\";\n}\n\n.mnlicon-NursingRoom[_ngcontent-%COMP%]:before {\n  content: \"\\ea4b\";\n}\n\n.mnlicon-Notification[_ngcontent-%COMP%]:before {\n  content: \"\\ea4c\";\n}\n\n.mnlicon-Pause2[_ngcontent-%COMP%]:before {\n  content: \"\\ea4d\";\n}\n\n.mnlicon-Pause1[_ngcontent-%COMP%]:before {\n  content: \"\\ea4e\";\n}\n\n.mnlicon-Path[_ngcontent-%COMP%]:before {\n  content: \"\\ea4f\";\n}\n\n.mnlicon-PartlySunny[_ngcontent-%COMP%]:before {\n  content: \"\\ea50\";\n}\n\n.mnlicon-Parking[_ngcontent-%COMP%]:before {\n  content: \"\\ea51\";\n}\n\n.mnlicon-People[_ngcontent-%COMP%]:before {\n  content: \"\\ea52\";\n}\n\n.mnlicon-PaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\ea53\";\n}\n\n.mnlicon-PharmacyDelivery[_ngcontent-%COMP%]:before {\n  content: \"\\ea54\";\n}\n\n.mnlicon-Percentage[_ngcontent-%COMP%]:before {\n  content: \"\\ea55\";\n}\n\n.mnlicon-PrescriptionOpened[_ngcontent-%COMP%]:before {\n  content: \"\\ea56\";\n}\n\n.mnlicon-PremiumDiscounts[_ngcontent-%COMP%]:before {\n  content: \"\\ea57\";\n}\n\n.mnlicon-PreferentialPremiumRates[_ngcontent-%COMP%]:before {\n  content: \"\\ea58\";\n}\n\n.mnlicon-PowerLineTower[_ngcontent-%COMP%]:before {\n  content: \"\\ea59\";\n}\n\n.mnlicon-Play2[_ngcontent-%COMP%]:before {\n  content: \"\\ea5a\";\n}\n\n.mnlicon-Play1[_ngcontent-%COMP%]:before {\n  content: \"\\ea5b\";\n}\n\n.mnlicon-PlateSpoon[_ngcontent-%COMP%]:before {\n  content: \"\\ea5c\";\n}\n\n.mnlicon-Plate[_ngcontent-%COMP%]:before {\n  content: \"\\ea5d\";\n}\n\n.mnlicon-Plastic[_ngcontent-%COMP%]:before {\n  content: \"\\ea5e\";\n}\n\n.mnlicon-PlanDesign[_ngcontent-%COMP%]:before {\n  content: \"\\ea5f\";\n}\n\n.mnlicon-Pipeline[_ngcontent-%COMP%]:before {\n  content: \"\\ea60\";\n}\n\n.mnlicon-Pin[_ngcontent-%COMP%]:before {\n  content: \"\\ea61\";\n}\n\n.mnlicon-Print[_ngcontent-%COMP%]:before {\n  content: \"\\ea62\";\n}\n\n.mnlicon-RockingChair[_ngcontent-%COMP%]:before {\n  content: \"\\ea63\";\n}\n\n.mnlicon-RocketShip[_ngcontent-%COMP%]:before {\n  content: \"\\ea64\";\n}\n\n.mnlicon-Robot[_ngcontent-%COMP%]:before {\n  content: \"\\ea65\";\n}\n\n.mnlicon-Road[_ngcontent-%COMP%]:before {\n  content: \"\\ea66\";\n}\n\n.mnlicon-Risk[_ngcontent-%COMP%]:before {\n  content: \"\\ea67\";\n}\n\n.mnlicon-Right[_ngcontent-%COMP%]:before {\n  content: \"\\ea68\";\n}\n\n.mnlicon-Retail[_ngcontent-%COMP%]:before {\n  content: \"\\ea69\";\n}\n\n.mnlicon-Restaurant[_ngcontent-%COMP%]:before {\n  content: \"\\ea6a\";\n}\n\n.mnlicon-RemoveFile[_ngcontent-%COMP%]:before {\n  content: \"\\ea6b\";\n}\n\n.mnlicon-Rain[_ngcontent-%COMP%]:before {\n  content: \"\\ea6c\";\n}\n\n.mnlicon-Puzzle[_ngcontent-%COMP%]:before {\n  content: \"\\ea6d\";\n}\n\n.mnlicon-Sad[_ngcontent-%COMP%]:before {\n  content: \"\\ea6e\";\n}\n\n.mnlicon-Ruler[_ngcontent-%COMP%]:before {\n  content: \"\\ea6f\";\n}\n\n.mnlicon-RoosterBank[_ngcontent-%COMP%]:before {\n  content: \"\\ea70\";\n}\n\n.mnlicon-RollOverPlan[_ngcontent-%COMP%]:before {\n  content: \"\\ea71\";\n}\n\n.mnlicon-Scissors[_ngcontent-%COMP%]:before {\n  content: \"\\ea72\";\n}\n\n.mnlicon-ScheduleView[_ngcontent-%COMP%]:before {\n  content: \"\\ea73\";\n}\n\n.mnlicon-Scale[_ngcontent-%COMP%]:before {\n  content: \"\\ea74\";\n}\n\n.mnlicon-SoundLow[_ngcontent-%COMP%]:before {\n  content: \"\\ea75\";\n}\n\n.mnlicon-SoundHigh[_ngcontent-%COMP%]:before {\n  content: \"\\ea76\";\n}\n\n.mnlicon-Sort[_ngcontent-%COMP%]:before {\n  content: \"\\ea77\";\n}\n\n.mnlicon-Soccer[_ngcontent-%COMP%]:before {\n  content: \"\\ea78\";\n}\n\n.mnlicon-Snow[_ngcontent-%COMP%]:before {\n  content: \"\\ea79\";\n}\n\n.mnlicon-Smoking[_ngcontent-%COMP%]:before {\n  content: \"\\ea7a\";\n}\n\n.mnlicon-Slippery[_ngcontent-%COMP%]:before {\n  content: \"\\ea7b\";\n}\n\n.mnlicon-Sleep[_ngcontent-%COMP%]:before {\n  content: \"\\ea7c\";\n}\n\n.mnlicon-SkippingRope[_ngcontent-%COMP%]:before {\n  content: \"\\ea7d\";\n}\n\n.mnlicon-Shower[_ngcontent-%COMP%]:before {\n  content: \"\\ea7e\";\n}\n\n.mnlicon-ShoppingCart[_ngcontent-%COMP%]:before {\n  content: \"\\ea7f\";\n}\n\n.mnlicon-Share[_ngcontent-%COMP%]:before {\n  content: \"\\ea80\";\n}\n\n.mnlicon-Stage[_ngcontent-%COMP%]:before {\n  content: \"\\ea81\";\n}\n\n.mnlicon-SprinklerSystem[_ngcontent-%COMP%]:before {\n  content: \"\\ea82\";\n}\n\n.mnlicon-Spotlight[_ngcontent-%COMP%]:before {\n  content: \"\\ea83\";\n}\n\n.mnlicon-SpellCheck[_ngcontent-%COMP%]:before {\n  content: \"\\ea84\";\n}\n\n.mnlicon-SpeechBubbles[_ngcontent-%COMP%]:before {\n  content: \"\\ea85\";\n}\n\n.mnlicon-SoundMedium[_ngcontent-%COMP%]:before {\n  content: \"\\ea86\";\n}\n\n.mnlicon-Tool2[_ngcontent-%COMP%]:before {\n  content: \"\\ea87\";\n}\n\n.mnlicon-Tool1[_ngcontent-%COMP%]:before {\n  content: \"\\ea88\";\n}\n\n.mnlicon-Toilet[_ngcontent-%COMP%]:before {\n  content: \"\\ea89\";\n}\n\n.mnlicon-Thunderstorm[_ngcontent-%COMP%]:before {\n  content: \"\\ea8a\";\n}\n\n.mnlicon-ThrowWaste[_ngcontent-%COMP%]:before {\n  content: \"\\ea8b\";\n}\n\n.mnlicon-Thermometer[_ngcontent-%COMP%]:before {\n  content: \"\\ea8c\";\n}\n\n.mnlicon-Theatre[_ngcontent-%COMP%]:before {\n  content: \"\\ea8d\";\n}\n\n.mnlicon-Tennis[_ngcontent-%COMP%]:before {\n  content: \"\\ea8e\";\n}\n\n.mnlicon-Talking[_ngcontent-%COMP%]:before {\n  content: \"\\ea8f\";\n}\n\n.mnlicon-Tablet[_ngcontent-%COMP%]:before {\n  content: \"\\ea90\";\n}\n\n.mnlicon-Switch[_ngcontent-%COMP%]:before {\n  content: \"\\ea91\";\n}\n\n.mnlicon-SwimmingPool[_ngcontent-%COMP%]:before {\n  content: \"\\ea92\";\n}\n\n.mnlicon-Surprised[_ngcontent-%COMP%]:before {\n  content: \"\\ea93\";\n}\n\n.mnlicon-Subway[_ngcontent-%COMP%]:before {\n  content: \"\\ea94\";\n}\n\n.mnlicon-Storage[_ngcontent-%COMP%]:before {\n  content: \"\\ea95\";\n}\n\n.mnlicon-WineGlasses[_ngcontent-%COMP%]:before {\n  content: \"\\ea96\";\n}\n\n.mnlicon-Windy[_ngcontent-%COMP%]:before {\n  content: \"\\ea97\";\n}\n\n.mnlicon-WindTurbine[_ngcontent-%COMP%]:before {\n  content: \"\\ea98\";\n}\n\n.mnlicon-Will[_ngcontent-%COMP%]:before {\n  content: \"\\ea99\";\n}\n\n.mnlicon-Wifi[_ngcontent-%COMP%]:before {\n  content: \"\\ea9a\";\n}\n\n.mnlicon-Webcast[_ngcontent-%COMP%]:before {\n  content: \"\\ea9b\";\n}\n\n.mnlicon-Waves[_ngcontent-%COMP%]:before {\n  content: \"\\ea9c\";\n}\n\n.mnlicon-Voltage[_ngcontent-%COMP%]:before {\n  content: \"\\ea9d\";\n}\n\n.mnlicon-VerySad[_ngcontent-%COMP%]:before {\n  content: \"\\ea9e\";\n}\n\n.mnlicon-VeryHappy[_ngcontent-%COMP%]:before {\n  content: \"\\ea9f\";\n}\n\n.mnlicon-Up[_ngcontent-%COMP%]:before {\n  content: \"\\eaa0\";\n}\n\n.mnlicon-Unlock[_ngcontent-%COMP%]:before {\n  content: \"\\eaa1\";\n}\n\n.mnlicon-UnionIndustrial[_ngcontent-%COMP%]:before {\n  content: \"\\eaa2\";\n}\n\n.mnlicon-TurnOff[_ngcontent-%COMP%]:before {\n  content: \"\\eaa3\";\n}\n\n.mnlicon-Tshirt[_ngcontent-%COMP%]:before {\n  content: \"\\eaa4\";\n}\n\n.mnlicon-Tree[_ngcontent-%COMP%]:before {\n  content: \"\\eaa5\";\n}\n\n.mnlicon-TransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eaa6\";\n}\n\n.mnlicon-TransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eaa7\";\n}\n\n.mnlicon-Train[_ngcontent-%COMP%]:before {\n  content: \"\\eaa8\";\n}\n\n.mnlicon-Tractor[_ngcontent-%COMP%]:before {\n  content: \"\\eaa9\";\n}\n\n.mnlicon-Top[_ngcontent-%COMP%]:before {\n  content: \"\\eaaa\";\n}\n\n.mnlicon-TopLeft[_ngcontent-%COMP%]:before {\n  content: \"\\eaab\";\n}\n\n.mnlicon-ZoomOut[_ngcontent-%COMP%]:before {\n  content: \"\\eaac\";\n}\n\n.mnlicon-ZoomIn[_ngcontent-%COMP%]:before {\n  content: \"\\eaad\";\n}\n\n.mnlicon-Yoyo[_ngcontent-%COMP%]:before {\n  content: \"\\eaae\";\n}\n\n.mnlicon-Write[_ngcontent-%COMP%]:before {\n  content: \"\\eaaf\";\n}\n\n.mnlicon-WomanWearingGlasses[_ngcontent-%COMP%]:before {\n  content: \"\\eab0\";\n}\n\n.mnlicon-twitter[_ngcontent-%COMP%]:before {\n  content: \"\\eab1\";\n}\n\n.mnlicon-JPWarning[_ngcontent-%COMP%]:before {\n  content: \"\\eab2\";\n}\n\n.mnlicon-youtube[_ngcontent-%COMP%]:before {\n  content: \"\\eab3\";\n}\n\n.mnlicon-zalo[_ngcontent-%COMP%]:before {\n  content: \"\\eab4\";\n}\n\n.mnlicon-instagram[_ngcontent-%COMP%]:before {\n  content: \"\\eab5\";\n}\n\n.mnlicon-wechat[_ngcontent-%COMP%]:before {\n  content: \"\\eab6\";\n}\n\n.mnlicon-messenger[_ngcontent-%COMP%]:before {\n  content: \"\\eab7\";\n}\n\n.mnlicon-line[_ngcontent-%COMP%]:before {\n  content: \"\\ebad\";\n}\n\n.mnlicon-JPProspects[_ngcontent-%COMP%]:before {\n  content: \"\\eab8\";\n}\n\n.mnlicon-JPPolicyHolders[_ngcontent-%COMP%]:before {\n  content: \"\\eab9\";\n}\n\n.mnlicon-JPCorporate[_ngcontent-%COMP%]:before {\n  content: \"\\eaba\";\n}\n\n.mnlicon-DongBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eabb\";\n}\n\n.mnlicon-DongBill[_ngcontent-%COMP%]:before {\n  content: \"\\eabc\";\n}\n\n.mnlicon-DongBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eabd\";\n}\n\n.mnlicon-DongCash[_ngcontent-%COMP%]:before {\n  content: \"\\eabe\";\n}\n\n.mnlicon-DongChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eabf\";\n}\n\n.mnlicon-DongCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eac0\";\n}\n\n.mnlicon-DongDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eac1\";\n}\n\n.mnlicon-DongEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eac2\";\n}\n\n.mnlicon-DongFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eac3\";\n}\n\n.mnlicon-DongFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eac4\";\n}\n\n.mnlicon-DongGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eac5\";\n}\n\n.mnlicon-DongMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eac6\";\n}\n\n.mnlicon-DongPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eac7\";\n}\n\n.mnlicon-DongPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eac8\";\n}\n\n.mnlicon-DongPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eac9\";\n}\n\n.mnlicon-DongPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eaca\";\n}\n\n.mnlicon-DongReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eacb\";\n}\n\n.mnlicon-DongRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eacc\";\n}\n\n.mnlicon-DongTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eacd\";\n}\n\n.mnlicon-DongTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eace\";\n}\n\n.mnlicon-Dong[_ngcontent-%COMP%]:before {\n  content: \"\\eacf\";\n}\n\n.mnlicon-EuroAgent[_ngcontent-%COMP%]:before {\n  content: \"\\ead0\";\n}\n\n.mnlicon-EuroBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\ead1\";\n}\n\n.mnlicon-EuroBill[_ngcontent-%COMP%]:before {\n  content: \"\\ead2\";\n}\n\n.mnlicon-EuroBonus[_ngcontent-%COMP%]:before {\n  content: \"\\ead3\";\n}\n\n.mnlicon-EuroCash[_ngcontent-%COMP%]:before {\n  content: \"\\ead4\";\n}\n\n.mnlicon-EuroChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\ead5\";\n}\n\n.mnlicon-EuroCoin[_ngcontent-%COMP%]:before {\n  content: \"\\ead6\";\n}\n\n.mnlicon-EuroDebt[_ngcontent-%COMP%]:before {\n  content: \"\\ead7\";\n}\n\n.mnlicon-EuroEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\ead8\";\n}\n\n.mnlicon-EuroFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\ead9\";\n}\n\n.mnlicon-EuroFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eada\";\n}\n\n.mnlicon-EuroGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eadb\";\n}\n\n.mnlicon-EuroMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eadc\";\n}\n\n.mnlicon-EuroPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eadd\";\n}\n\n.mnlicon-EuroPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eade\";\n}\n\n.mnlicon-EuroPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eadf\";\n}\n\n.mnlicon-EuroPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eae0\";\n}\n\n.mnlicon-EuroReimbursment[_ngcontent-%COMP%]:before {\n  content: \"\\eae1\";\n}\n\n.mnlicon-EuroRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eae2\";\n}\n\n.mnlicon-EuroTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eae3\";\n}\n\n.mnlicon-EuroTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eae4\";\n}\n\n.mnlicon-Euro[_ngcontent-%COMP%]:before {\n  content: \"\\eae5\";\n}\n\n.mnlicon-HongKongDollarAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eae6\";\n}\n\n.mnlicon-HongKongDollarBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eae7\";\n}\n\n.mnlicon-HongKongDollarBill[_ngcontent-%COMP%]:before {\n  content: \"\\eae8\";\n}\n\n.mnlicon-HongKongDollarBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eae9\";\n}\n\n.mnlicon-HongKongDollarCash[_ngcontent-%COMP%]:before {\n  content: \"\\eaea\";\n}\n\n.mnlicon-HongKongDollarChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eaeb\";\n}\n\n.mnlicon-HongKongDollarCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eaec\";\n}\n\n.mnlicon-HongKongDollarDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eaed\";\n}\n\n.mnlicon-HongKongDollarEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eaee\";\n}\n\n.mnlicon-HongKongDollarFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eaef\";\n}\n\n.mnlicon-HongKongDollarFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eaf0\";\n}\n\n.mnlicon-HongKongDollarGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eaf1\";\n}\n\n.mnlicon-HongKongDollarMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eaf2\";\n}\n\n.mnlicon-HongKongDollarPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eaf3\";\n}\n\n.mnlicon-HongKongDollarPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eaf4\";\n}\n\n.mnlicon-HongKongDollarPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eaf5\";\n}\n\n.mnlicon-HongKongDollarPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eaf6\";\n}\n\n.mnlicon-HongKongDollarReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eaf7\";\n}\n\n.mnlicon-HongKongDollarRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eaf8\";\n}\n\n.mnlicon-HongKongDollarTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eaf9\";\n}\n\n.mnlicon-HongKongDollarTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eafa\";\n}\n\n.mnlicon-HongKongDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eafb\";\n}\n\n.mnlicon-KyatAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eafc\";\n}\n\n.mnlicon-KyatBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eafd\";\n}\n\n.mnlicon-KyatBill[_ngcontent-%COMP%]:before {\n  content: \"\\eafe\";\n}\n\n.mnlicon-KyatBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eaff\";\n}\n\n.mnlicon-KyatCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb00\";\n}\n\n.mnlicon-KyatChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb01\";\n}\n\n.mnlicon-KyatCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb02\";\n}\n\n.mnlicon-KyatDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb03\";\n}\n\n.mnlicon-KyatEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb04\";\n}\n\n.mnlicon-KyatFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb05\";\n}\n\n.mnlicon-KyatFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eb06\";\n}\n\n.mnlicon-KyatGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb07\";\n}\n\n.mnlicon-KyatMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eb08\";\n}\n\n.mnlicon-KyatPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eb09\";\n}\n\n.mnlicon-KyatPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eb0a\";\n}\n\n.mnlicon-KyatPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eb0b\";\n}\n\n.mnlicon-KyatPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eb0c\";\n}\n\n.mnlicon-KyatReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eb0d\";\n}\n\n.mnlicon-KyatRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eb0e\";\n}\n\n.mnlicon-KyatTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eb0f\";\n}\n\n.mnlicon-KyatTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb10\";\n}\n\n.mnlicon-Kyat[_ngcontent-%COMP%]:before {\n  content: \"\\eb11\";\n}\n\n.mnlicon-NewTaiwanDollarAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eb12\";\n}\n\n.mnlicon-NewTaiwanDollarBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb13\";\n}\n\n.mnlicon-NewTaiwanDollarBill[_ngcontent-%COMP%]:before {\n  content: \"\\eb14\";\n}\n\n.mnlicon-NewTaiwanDollarBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eb15\";\n}\n\n.mnlicon-NewTaiwanDollarCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb16\";\n}\n\n.mnlicon-NewTaiwanDollarChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb17\";\n}\n\n.mnlicon-NewTaiwanDollarCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb18\";\n}\n\n.mnlicon-NewTaiwanDollarDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb19\";\n}\n\n.mnlicon-NewTaiwanDollarEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb1a\";\n}\n\n.mnlicon-NewTaiwanDollarFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb1b\";\n}\n\n.mnlicon-NewTaiwanDollarFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eb1c\";\n}\n\n.mnlicon-NewTaiwanDollarGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb1d\";\n}\n\n.mnlicon-NewTaiwanDollarMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eb1e\";\n}\n\n.mnlicon-NewTaiwanDollarPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eb1f\";\n}\n\n.mnlicon-NewTaiwanDollarPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eb20\";\n}\n\n.mnlicon-NewTaiwanDollarPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eb21\";\n}\n\n.mnlicon-NewTaiwanDollarPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eb22\";\n}\n\n.mnlicon-NewTaiwanDollarReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eb23\";\n}\n\n.mnlicon-NewTaiwanDollarRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eb24\";\n}\n\n.mnlicon-NewTaiwanDollarTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eb25\";\n}\n\n.mnlicon-NewTaiwanDollarTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb26\";\n}\n\n.mnlicon-NewTaiwanDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb27\";\n}\n\n.mnlicon-PesoAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eb28\";\n}\n\n.mnlicon-PesoBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb29\";\n}\n\n.mnlicon-PesoBill[_ngcontent-%COMP%]:before {\n  content: \"\\eb2a\";\n}\n\n.mnlicon-PesoBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eb2b\";\n}\n\n.mnlicon-PesoCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb2c\";\n}\n\n.mnlicon-PesoChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb2d\";\n}\n\n.mnlicon-PesoCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb2e\";\n}\n\n.mnlicon-PesoDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb2f\";\n}\n\n.mnlicon-PesoEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb30\";\n}\n\n.mnlicon-PesoFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb31\";\n}\n\n.mnlicon-PesoFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eb32\";\n}\n\n.mnlicon-PesoGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb33\";\n}\n\n.mnlicon-PesoMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eb34\";\n}\n\n.mnlicon-PesoPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eb35\";\n}\n\n.mnlicon-PesoPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eb36\";\n}\n\n.mnlicon-PesoPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eb37\";\n}\n\n.mnlicon-PesoPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eb38\";\n}\n\n.mnlicon-PesoReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eb39\";\n}\n\n.mnlicon-PesoRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eb3a\";\n}\n\n.mnlicon-PesoTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eb3b\";\n}\n\n.mnlicon-PesoTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb3c\";\n}\n\n.mnlicon-Peso[_ngcontent-%COMP%]:before {\n  content: \"\\eb3d\";\n}\n\n.mnlicon-RielAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eb3e\";\n}\n\n.mnlicon-RielBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb3f\";\n}\n\n.mnlicon-RielBill[_ngcontent-%COMP%]:before {\n  content: \"\\eb40\";\n}\n\n.mnlicon-RielBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eb41\";\n}\n\n.mnlicon-RielCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb42\";\n}\n\n.mnlicon-RielChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb43\";\n}\n\n.mnlicon-RielCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb44\";\n}\n\n.mnlicon-RielDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb45\";\n}\n\n.mnlicon-RielEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb46\";\n}\n\n.mnlicon-RielFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb47\";\n}\n\n.mnlicon-RielFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eb48\";\n}\n\n.mnlicon-RielGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb49\";\n}\n\n.mnlicon-RielMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eb4a\";\n}\n\n.mnlicon-RielPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eb4b\";\n}\n\n.mnlicon-RielPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eb4c\";\n}\n\n.mnlicon-RielPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eb4d\";\n}\n\n.mnlicon-RielPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eb4e\";\n}\n\n.mnlicon-RielReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eb4f\";\n}\n\n.mnlicon-RielRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eb50\";\n}\n\n.mnlicon-RielTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eb51\";\n}\n\n.mnlicon-RielTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb52\";\n}\n\n.mnlicon-Riel[_ngcontent-%COMP%]:before {\n  content: \"\\eb53\";\n}\n\n.mnlicon-RinggitAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eb54\";\n}\n\n.mnlicon-RinggitBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb55\";\n}\n\n.mnlicon-RinggitBill[_ngcontent-%COMP%]:before {\n  content: \"\\eb56\";\n}\n\n.mnlicon-RinggitBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eb57\";\n}\n\n.mnlicon-RinggitCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb58\";\n}\n\n.mnlicon-RinggitChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb59\";\n}\n\n.mnlicon-RinggitCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb5a\";\n}\n\n.mnlicon-RinggitDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb5b\";\n}\n\n.mnlicon-RinggitEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb5c\";\n}\n\n.mnlicon-RinggitFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb5d\";\n}\n\n.mnlicon-RinggitFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eb5e\";\n}\n\n.mnlicon-RinggitGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb5f\";\n}\n\n.mnlicon-RinggitMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eb60\";\n}\n\n.mnlicon-RinggitPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eb61\";\n}\n\n.mnlicon-RinggitPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eb62\";\n}\n\n.mnlicon-RinggitPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eb63\";\n}\n\n.mnlicon-RinggitPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eb64\";\n}\n\n.mnlicon-RinggitReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eb65\";\n}\n\n.mnlicon-RinggitRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eb66\";\n}\n\n.mnlicon-RinggitTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eb67\";\n}\n\n.mnlicon-RinggitTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb68\";\n}\n\n.mnlicon-Ringgit[_ngcontent-%COMP%]:before {\n  content: \"\\eb69\";\n}\n\n.mnlicon-RupiahAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eb6a\";\n}\n\n.mnlicon-RupiahBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb6b\";\n}\n\n.mnlicon-RupiahBill[_ngcontent-%COMP%]:before {\n  content: \"\\eb6c\";\n}\n\n.mnlicon-RupiahBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eb6d\";\n}\n\n.mnlicon-RupiahCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb6e\";\n}\n\n.mnlicon-RupiahChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb6f\";\n}\n\n.mnlicon-RupiahCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb70\";\n}\n\n.mnlicon-RupiahDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb71\";\n}\n\n.mnlicon-RupiahEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb72\";\n}\n\n.mnlicon-RupiahFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb73\";\n}\n\n.mnlicon-RupiahFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eb74\";\n}\n\n.mnlicon-RupiahGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb75\";\n}\n\n.mnlicon-RupiahMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eb76\";\n}\n\n.mnlicon-RupiahPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eb77\";\n}\n\n.mnlicon-RupiahPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eb78\";\n}\n\n.mnlicon-RupiahPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eb79\";\n}\n\n.mnlicon-RupiahPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eb7a\";\n}\n\n.mnlicon-RupiahReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eb7b\";\n}\n\n.mnlicon-RupiahRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eb7c\";\n}\n\n.mnlicon-RupiahTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eb7d\";\n}\n\n.mnlicon-RupiahTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb7e\";\n}\n\n.mnlicon-Rupiah[_ngcontent-%COMP%]:before {\n  content: \"\\eb7f\";\n}\n\n.mnlicon-SingaporeDollarAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eb80\";\n}\n\n.mnlicon-SingaporeDollarBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb81\";\n}\n\n.mnlicon-SingaporeDollarBill[_ngcontent-%COMP%]:before {\n  content: \"\\eb82\";\n}\n\n.mnlicon-SingaporeDollarBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eb83\";\n}\n\n.mnlicon-SingaporeDollarCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb84\";\n}\n\n.mnlicon-SingaporeDollarChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb85\";\n}\n\n.mnlicon-SingaporeDollarCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb86\";\n}\n\n.mnlicon-SingaporeDollarDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb87\";\n}\n\n.mnlicon-SingaporeDollarEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb88\";\n}\n\n.mnlicon-SingaporeDollarFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb89\";\n}\n\n.mnlicon-SingaporeDollarFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eb8a\";\n}\n\n.mnlicon-SingaporeDollarGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb8b\";\n}\n\n.mnlicon-SingaporeDollarMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eb8c\";\n}\n\n.mnlicon-SingaporeDollarPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eb8d\";\n}\n\n.mnlicon-SingaporeDollarPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eb8e\";\n}\n\n.mnlicon-SingaporeDollarPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eb8f\";\n}\n\n.mnlicon-SingaporeDollarPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eb90\";\n}\n\n.mnlicon-SingaporeDollarReimbursement[_ngcontent-%COMP%]:before {\n  content: \"\\eb91\";\n}\n\n.mnlicon-SingaporeDollarRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eb92\";\n}\n\n.mnlicon-SingaporeDollarTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eb93\";\n}\n\n.mnlicon-SingaporeDollarTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\eb94\";\n}\n\n.mnlicon-SingaporeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb95\";\n}\n\n.mnlicon-YenAgent[_ngcontent-%COMP%]:before {\n  content: \"\\eb96\";\n}\n\n.mnlicon-YenBadgeDollar[_ngcontent-%COMP%]:before {\n  content: \"\\eb97\";\n}\n\n.mnlicon-YenBill[_ngcontent-%COMP%]:before {\n  content: \"\\eb98\";\n}\n\n.mnlicon-YenBonus[_ngcontent-%COMP%]:before {\n  content: \"\\eb99\";\n}\n\n.mnlicon-YenCash[_ngcontent-%COMP%]:before {\n  content: \"\\eb9a\";\n}\n\n.mnlicon-YenChangeOfLifeInsured[_ngcontent-%COMP%]:before {\n  content: \"\\eb9b\";\n}\n\n.mnlicon-YenCoin[_ngcontent-%COMP%]:before {\n  content: \"\\eb9c\";\n}\n\n.mnlicon-YenDebt[_ngcontent-%COMP%]:before {\n  content: \"\\eb9d\";\n}\n\n.mnlicon-YenEstateLiquidity[_ngcontent-%COMP%]:before {\n  content: \"\\eb9e\";\n}\n\n.mnlicon-YenFinancialWellness[_ngcontent-%COMP%]:before {\n  content: \"\\eb9f\";\n}\n\n.mnlicon-YenFundSwitches[_ngcontent-%COMP%]:before {\n  content: \"\\eba0\";\n}\n\n.mnlicon-YenGuaranteedCost[_ngcontent-%COMP%]:before {\n  content: \"\\eba1\";\n}\n\n.mnlicon-YenMoneyBag[_ngcontent-%COMP%]:before {\n  content: \"\\eba2\";\n}\n\n.mnlicon-YenPayTime[_ngcontent-%COMP%]:before {\n  content: \"\\eba3\";\n}\n\n.mnlicon-YenPaymentDone[_ngcontent-%COMP%]:before {\n  content: \"\\eba4\";\n}\n\n.mnlicon-YenPaymentOrder[_ngcontent-%COMP%]:before {\n  content: \"\\eba5\";\n}\n\n.mnlicon-YenPriceMeter[_ngcontent-%COMP%]:before {\n  content: \"\\eba6\";\n}\n\n.mnlicon-YenReimbursment[_ngcontent-%COMP%]:before {\n  content: \"\\eba7\";\n}\n\n.mnlicon-YenRollOverFunds[_ngcontent-%COMP%]:before {\n  content: \"\\eba8\";\n}\n\n.mnlicon-YenTransferOfExistingAssets[_ngcontent-%COMP%]:before {\n  content: \"\\eba9\";\n}\n\n.mnlicon-YenTransparentInCost[_ngcontent-%COMP%]:before {\n  content: \"\\ebaa\";\n}\n\n.mnlicon-Yen[_ngcontent-%COMP%]:before {\n  content: \"\\ebab\";\n}\n\n.mnlicon-DongAgent[_ngcontent-%COMP%]:before {\n  content: \"\\ebac\";\n}\n\n\n\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n\n.swiper[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  \n  z-index: 1;\n}\n\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n\n.swiper-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n\n.swiper-pointer-events[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n\n.swiper-autoheight[_ngcontent-%COMP%], .swiper-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-backface-hidden[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  backface-visibility: hidden;\n}\n\n\n.swiper-3d[_ngcontent-%COMP%], .swiper-3d.swiper-css-mode[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none; \n  -ms-overflow-style: none; \n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n\n.swiper-horizontal.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n\n.swiper-vertical.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n\n.swiper-centered[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  height: 100%;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  width: 100%;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n\n[_ngcontent-%COMP%]:root {\n  \n}\n\n.swiper-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.swiper-pagination-disabled[_ngcontent-%COMP%]    > .swiper-pagination[_ngcontent-%COMP%], .swiper-pagination.swiper-pagination-disabled[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n.swiper-pagination-fraction[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%], .swiper-pagination-bullets.swiper-pagination-horizontal[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-main[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev-prev[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next-next[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  appearance: none;\n}\n\n.swiper-pagination-clickable[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%]:only-child {\n  display: none !important;\n}\n\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%], .swiper-pagination-vertical.swiper-pagination-bullets[_ngcontent-%COMP%] {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-pagination-vertical.swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%], .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-pagination-horizontal.swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%], .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms left;\n}\n\n.swiper-horizontal.swiper-rtl[_ngcontent-%COMP%]    > .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms right;\n}\n\n\n.swiper-pagination-progressbar[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl[_ngcontent-%COMP%]   .swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  transform-origin: right top;\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-horizontal[_ngcontent-%COMP%], .swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-vertical[_ngcontent-%COMP%], .swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%], .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.swiper-pagination-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n.swiper-scrollbar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-scrollbar-disabled[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%], .swiper-scrollbar.swiper-scrollbar-disabled[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%], .swiper-scrollbar.swiper-scrollbar-horizontal[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%], .swiper-scrollbar.swiper-scrollbar-vertical[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n\n.swiper-scrollbar-drag[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n\n.swiper-scrollbar-cursor-drag[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n.swiper-scrollbar-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.swiper-zoom-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > canvas[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n\n.swiper-slide-zoomed[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n\n@font-face {\n  font-family: \"Manulife JH Sans Optimized\";\n  src: url('ManulifeJHSansOptimized_3179380516.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Manulife JH Serif Optimized\";\n  src: url('ManulifeJHSerifOptimized-Italic_818470419.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Noto Sans Khmer Bold\";\n  src: url('NotoSansKhmer-Bold.ttf') format(\"truetype\");\n  font-feature-settings: \"liga\" 1, \"calt\" 1;\n}\n@font-face {\n  font-family: \"Noto Sans Khmer ExtraLight\";\n  src: url('NotoSansKhmer-ExtraLight.ttf') format(\"truetype\");\n  font-feature-settings: \"liga\" 1, \"calt\" 1;\n}\n@font-face {\n  font-family: \"Noto Sans Khmer Light\";\n  src: url('NotoSansKhmer-Light.ttf') format(\"truetype\");\n  font-feature-settings: \"liga\" 1, \"calt\" 1;\n}\n@font-face {\n  font-family: \"Noto Sans Khmer Medium\";\n  src: url('NotoSansKhmer-Medium.ttf') format(\"truetype\");\n  font-feature-settings: \"liga\" 1, \"calt\" 1;\n}\n@font-face {\n  font-family: \"manulife-icons\";\n  src: url('manulife-icons.ttf') format(\"truetype\");\n}\nbody[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f4f4f4;\n}\n\n.top-bar-back-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #282B3E;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 12px;\n}\n\n#claim-slider.swiper[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n#claim-slider[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  width: 222px;\n  height: 125px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n}\n\nion-modal#uploaddoc-bottompopup-modal[_ngcontent-%COMP%] {\n  --width: 100%;\n  --border-radius: 0px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n  --ion-backdrop-color: #282b3e;\n  --backdrop-opacity: 80%;\n}\n\nion-modal#uploaddoc-bottompopup-modal[_ngcontent-%COMP%]   .ion-page[_ngcontent-%COMP%] {\n  position: relative;\n  contain: layout style;\n  max-height: 350px;\n}\n\n.tnc-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.tnc-content[_ngcontent-%COMP%]     h1 {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0px;\n}\n.tnc-content[_ngcontent-%COMP%]     p {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0px;\n}\n\n.tnc-content-km[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.tnc-content-km[_ngcontent-%COMP%]     h1 {\n  font-family: \"Noto Sans Khmer Medium\";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0px;\n}\n.tnc-content-km[_ngcontent-%COMP%]     p {\n  font-family: \"Noto Sans Khmer Light\";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0px;\n}\n\n.disabled-action-footer-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  margin-bottom: 8px;\n  text-transform: none;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n  --border-radius: 0;\n}\n\n.disabled-action-footer-btn-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 24px;\n  text-align: center;\n  color: #5E6073;\n  --color: #5E6073;\n}\n\n.action-footer-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  margin-bottom: 8px;\n  text-transform: none;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n  --border-radius: 0;\n}\n\n.action-footer-btn-label[_ngcontent-%COMP%] {\n  font-family: \"Manulife JH Sans Optimized\";\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 24px;\n  text-align: center;\n  color: #ffffff;\n  --color: #ffffff;\n}\n/*# sourceMappingURL=core.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsNkZBQUE7QUNORjs7QURRQTtFQUNFLDBEQUFBO0FDTEY7O0FEUUE7RUFDRSwwQ0FBQTtBQ0xGOztBRFFBO0VBQ0UsdUNBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0FDTEY7O0FEVUE7Ozs7OztFQUFBO0FBT0E7OztFQUdFLGdCQUFBO0FDUEY7O0FEVUE7Ozs7Q0FBQTtBQUtBOztFQUVFLG1CQUFBO0FDUEY7O0FEVUE7Ozs7Q0FBQTtBQUtBO0VBQ0UscURBQUE7RUFDQSxtREFBQTtBQ1BGOztBRFVBOzs7RUFBQTtBQUlBO0VBQ0U7SUFDRSx3QkFBQTtFQ1BGO0FBQ0Y7QURVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQTJCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURXQTs7Ozs7Ozs7O0VBQUE7QUFVQTtFQUNFLDRDQUFBO0FDUkY7O0FEaUNFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDcEJGOztBRHdCRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ1hGOztBRGVFO0VBVEEsK0RBQUE7RUFDQSwyRUFBQTtFQUNBLHlFQUFBO0VBQ0EsMEZBQUE7RUFDQSxzRUFBQTtFQUNBLG9FQUFBO0FDRkY7O0FETUU7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNPRjs7QURIRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLG1GQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ2dCRjs7QURaRTtFQVRBLDZEQUFBO0VBQ0EseUVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ3lCRjs7QURyQkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUNrQ0Y7O0FEOUJFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDMkNGOztBRHZDRTtFQVRBLDJEQUFBO0VBQ0Esc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQ29ERjs7QUR2Q0E7RUVnTE0sT0YvS3VCO0VFZ0x2QixRRmhMaUI7RUV5TXJCLE1Gek1rQjtFRTBNbEIsU0YxTXdCO0VBRXhCLGFBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUdoSCtCO0FGMEpqQzs7QUR2Q0E7Ozs7Ozs7RUFBQTtBQVFBO0VBQ0Usa0JBQUE7RUFFQSxxQkFBQTtFQUVBLFlBQUE7QUN3Q0Y7O0FEckNBO0VBQ0Usa0JBQUE7QUN3Q0Y7O0FEckNBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSx5REFBQTtFQUNBLHdCQUFBO0FDd0NGOztBRHJDQTtFQUNFLFVBQUE7QUN3Q0Y7O0FEckNBO0VBQ0UsY0FBQTtBQ3dDRjs7QURqQ0E7RUFDRSw2QkFBQTtBQ29DRjs7QURqQ0E7RUFDRTtJQUNFLGlEQUFBO0VDb0NGO0FBQ0Y7QURoQ0E7RUFDRTtJQUNFLGtEQUFBO0lBQ0Esd0RBQUE7SUFDQSxvREFBQTtJQUNBLHNEQUFBO0VDa0NGO0FBQ0Y7QUQvQkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDaUNGO0FBQ0Y7QUQxQkE7O0VBRUUsY0FBQTtBQzRCRjs7QURyQkE7RUU0UU0saUNBQUE7QURuUE47O0FEckJBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBSUEsb0JBQUE7QUNxQkY7O0FEbEJBO0VBQ0UsMkNJalErQjtBSHNSakM7O0FEbEJBO0VBQ0UsMENJbFErQjtBSHVSakM7O0FEZEE7RUFDRSw0Q0toUjhCO0FKaVNoQzs7QURkQTtFQUNFLDRDS3BSOEI7QUpxU2hDOztBRGJBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ2dCRjs7QURkQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUNpQkY7O0FEZkE7RUFDRSxtQkFBQTtBQ2tCRjs7QURmQTtFQUNFLDJEQUFBO0FDa0JGOztBRGZBO0VBQ0U7SUFDRSwrQ0FBQTtJQUNBLDJCQUFBO0VDa0JGO0FBQ0Y7QURoQkE7Ozs7O0VBQUE7QUFNQTs7RUFFRSx5QkFBQTtBQ2tCRjs7QURmQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNrQkY7O0FEZkE7O0VBRUUsYUFBQTtBQ2tCRjs7QURaQTtFQUNFLGlCQUFBO0FDZUY7O0FEWkE7Ozs7O0VBQUE7QUFNQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNlRjs7QURaQTs7Ozs7O0VBQUE7QUFPQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ2VGOztBQUVBLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL2NvbXBvbmVudHMvbWVudS9tZW51Lmlvcy52YXJzXCI7XG5AaW1wb3J0IFwiLi4vY29tcG9uZW50cy9tZW51L21lbnUubWQudmFyc1wiO1xuXG4vLyBJb25pYyBGb250IEZhbWlseVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaHRtbC5pb3Mge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuaHRtbC5tZCB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIE1vZGFsIC0gQ2FyZCBTdHlsZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxuICogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4gKiB0b3Agb2YgdGhlIGhlYWRlci4gV2UgYWNjb21wbGlzaCB0aGlzIGJ5IHRhcmdldGluZ1xuICogdGhlIGZpcnN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiAqIEZvb3RlciBhbHNvIG5lZWRzIHRoaXMuIFdlIGRvIG5vdCBhZGp1c3QgdGhlIGJvdHRvbVxuICogcGFkZGluZyB0aG91Z2ggYmVjYXVzZSBvZiB0aGUgc2FmZSBhcmVhLlxuICovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtc2hlZXQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsIGlvbi1mb290ZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi8qKlxuKiBDYXJkIHN0eWxlIG1vZGFsIG5lZWRzIGFkZGl0aW9uYWwgcGFkZGluZyBvbiB0aGVcbiogYm90dG9tIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiogdGhlIGxhc3QgdG9vbGJhciBpbiB0aGUgaGVhZGVyLlxuKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLyoqXG4qIEFkZCBwYWRkaW5nIG9uIHRoZSBsZWZ0IGFuZCByaWdodFxuKiBvZiB0b29sYmFycyB3aGlsZSBhY2NvdW50aW5nIGZvclxuKiBzYWZlIGFyZWEgdmFsdWVzIHdoZW4gaW4gbGFuZHNjYXBlLlxuKi9cbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyA4cHgpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArIDhweCk7XG59XG5cbi8qKlxuICogQ2FyZCBzdHlsZSBtb2RhbCBvbiBpUGFkT1NcbiAqIHNob3VsZCBvbmx5IGhhdmUgYmFja2Ryb3Agb24gZmlyc3QgaW5zdGFuY2UuXG4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkOmZpcnN0LW9mLXR5cGUge1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogMC4xODtcbiAgfVxufVxuXG4vKipcbiAqIFN1YnNlcXVlbnQgbW9kYWxzIHNob3VsZCBub3QgaGF2ZSBhIGJhY2tkcm9wL2JveCBzaGFkb3dcbiAqIGFzIGl0IHdpbGwgY2F1c2UgdGhlIHNjcmVlbiB0byBhcHBlYXIgdG8gZ2V0IHByb2dyZXNzaXZlbHlcbiAqIGRhcmtlci4gV2l0aCBJb25pYyA2LCBkZWNsYXJhdGl2ZSBtb2RhbHMgbWFkZSBpdFxuICogcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBub24tcHJlc2VudGVkIG1vZGFscyBpbiB0aGUgRE9NLFxuICogc28gd2UgY291bGQgbm8gbG9uZ2VyIHJlbHkgb24gaW9uLW1vZGFsOmZpcnN0LW9mLXR5cGUuXG4gKiBIZXJlIHdlIGRpc2FibGUgdGhlIG9wYWNpdHkvYm94LXNoYWRvdyBmb3IgZXZlcnkgbW9kYWxcbiAqIHRoYXQgY29tZXMgYWZ0ZXIgdGhlIGZpcnN0IHByZXNlbnRlZCBtb2RhbC5cbiAqXG4gKiBOb3RlOiBpb24tbW9kYWw6bm90KC5vdmVybGF5LWhpZGRlbik6Zmlyc3Qtb2YtdHlwZVxuICogZG9lcyBub3QgbWF0Y2ggdGhlIGZpcnN0IG1vZGFsIHRvIG5vdCBoYXZlXG4gKiB0aGUgLm92ZXJsYXktaGlkZGVuIGNsYXNzLCBpdCB3aWxsIG1hdGNoIHRoZVxuICogZmlyc3QgbW9kYWwgaW4gZ2VuZXJhbCBvbmx5IGlmIGl0IGRvZXMgbm90XG4gKiBoYXZlIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MuXG4gKiBUaGUgOm50aC1jaGlsZCgpIHBzZXVkby1jbGFzcyBoYXMgc3VwcG9ydFxuICogZm9yIHNlbGVjdG9ycyB3aGljaCB3b3VsZCBoZWxwIHVzIGhlcmUuIEF0IHRoZVxuICogdGltZSBvZiB3cml0aW5nIGl0IGRvZXMgbm90IGhhdmUgZ3JlYXQgY3Jvc3MgYnJvd3NlclxuICogc3VwcG9ydC5cbiAqXG4gKiBOb3RlIDI6IFRoaXMgc2hvdWxkIG9ubHkgYXBwbHkgdG8gbm9uLWNhcmQgYW5kXG4gKiBub24tc2hlZXQgbW9kYWxzLiBDYXJkIGFuZCBzaGVldCBtb2RhbHMgaGF2ZSB0aGVpclxuICogb3duIGNyaXRlcmlhIGZvciBkaXNwbGF5aW5nIGJhY2tkcm9wcy9ib3ggc2hhZG93cy5cbiAqXG4gKiBEbyBub3QgdXNlIDpub3QoLm92ZXJsYXktaGlkZGVuKSBpbiBwbGFjZSBvZlxuICogLnNob3ctbW9kYWwgYmVjYXVzZSB0aGF0IHRyaWdnZXJzIGEgbWVtb3J5XG4gKiBsZWFrIGluIEJsaW5rOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNDE4NzY4XG4gKi9cbmlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0LnNob3ctbW9kYWwgfiBpb24tbW9kYWwubW9kYWwtZGVmYXVsdCB7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4vKipcbiAqIFRoaXMgd29ya3MgYXJvdW5kIGEgYnVnIGluIFdlYktpdCB3aGVyZSB0aGVcbiAqIGNvbnRlbnQgd2lsbCBvdmVyZmxvdyBvdXRzaWRlIG9mIHRoZSBib3R0b20gYm9yZGVyXG4gKiByYWRpdXMgd2hlbiByZS1wYWludGluZy4gQXMgbG9uZyBhcyBhIHNpbmdsZVxuICogYm9yZGVyIHJhZGl1cyB2YWx1ZSBpcyBzZXQgb24gLmlvbi1wYWdlLCB0aGlzXG4gKiBpc3N1ZSBkb2VzIG5vdCBoYXBwZW4uIFdlIHNldCB0aGUgdG9wIGxlZnQgcmFkaXVzXG4gKiBoZXJlIGJlY2F1c2UgdGhlIHRvcCBsZWZ0IGNvcm5lciB3aWxsIGFsd2F5cyBoYXZlIGFcbiAqIHJhZGl1cyBubyBtYXR0ZXIgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBiZWhhdmlvciBvbmx5IGFwcGxpZXMgdG8gY2FyZCBtb2RhbHMuXG4gKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIC5pb24tcGFnZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4vLyBJb25pYyBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbi8vIGNvbG9ycyBtYXBcblxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lKSB7XG4gICR2YWx1ZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XG5cbiAgJGJhc2U6IG1hcC1nZXQoJHZhbHVlLCBiYXNlKTtcbiAgJGNvbnRyYXN0OiBtYXAtZ2V0KCR2YWx1ZSwgY29udHJhc3QpO1xuICAkc2hhZGU6IG1hcC1nZXQoJHZhbHVlLCBzaGFkZSk7XG4gICR0aW50OiBtYXAtZ2V0KCR2YWx1ZSwgdGludCk7XG5cbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LCAjeyRiYXNlfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IsICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCwgI3skY29udHJhc3R9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IsICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUsICN7JHNoYWRlfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQsICN7JHRpbnR9KSAhaW1wb3J0YW50O1xufVxuXG5AZWFjaCAkY29sb3ItbmFtZSwgJHZhbHVlIGluICRjb2xvcnMge1xuICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSk7XG4gIH1cbn1cblxuXG4vLyBQYWdlIENvbnRhaW5lciBTdHJ1Y3R1cmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tcGFnZSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6ICR6LWluZGV4LXBhZ2UtY29udGFpbmVyO1xufVxuXG4vKipcbiAqIFdoZW4gbWFraW5nIGN1c3RvbSBkaWFsb2dzLCB1c2luZ1xuICogaW9uLWNvbnRlbnQgaXMgbm90IHJlcXVpcmVkLiBBcyBhIHJlc3VsdCxcbiAqIHNvbWUgZGV2ZWxvcGVycyBtYXkgd2lzaCB0byBoYXZlIGRpYWxvZ3NcbiAqIHRoYXQgYXJlIGF1dG9tYXRpY2FsbHkgc2l6ZWQgYnkgdGhlIGJyb3dzZXIuXG4gKiBUaGVzZSBjaGFuZ2VzIGFsbG93IGNlcnRhaW4gZGltZW5zaW9uIHZhbHVlc1xuICogc3VjaCBhcyBmaXQtY29udGVudCB0byB3b3JrIGNvcnJlY3RseS5cbiAqL1xuaW9uLW1vZGFsID4gLmlvbi1wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGNvbnRhaW46IGxheW91dCBzdHlsZTtcblxuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUgPiAuaW9uLXBhZ2Uuc3BsaXQtcGFuZS1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tcm91dGUsXG5pb24tcm91dGUtcmVkaXJlY3QsXG5pb24tcm91dGVyLFxuaW9uLXNlbGVjdC1vcHRpb24sXG5pb24tbmF2LWNvbnRyb2xsZXIsXG5pb24tbWVudS1jb250cm9sbGVyLFxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXG5pb24tbG9hZGluZy1jb250cm9sbGVyLFxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXG5pb24tcG9wb3Zlci1jb250cm9sbGVyLFxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXG4uaW9uLXBhZ2UtaGlkZGVuLFxuW2hpZGRlbl0ge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLy8gSW9uaWMgU2FmZSBNYXJnaW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xuICB9XG59XG5cbi8vIFRPRE86IHJlbW92ZSBvbmNlIFNhZmFyaSAxMS4yIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWRcbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cblxuXG4vLyBHbG9iYWwgQ2FyZCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmlvbi1jYXJkLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3IsXG5pb24tY2FyZC1oZWFkZXIuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5cbi8vIE1lbnUgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubWVudS1jb250ZW50IHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZTNkKDAsIDAsIDApKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblxuICAvLyB0aGUgY29udGFpbmluZyBlbGVtZW50IGl0c2VsZiBzaG91bGQgYmUgY2xpY2thYmxlIGJ1dFxuICAvLyBldmVyeXRoaW5nIGluc2lkZSBvZiBpdCBzaG91bGQgbm90IGNsaWNrYWJsZSB3aGVuIG1lbnUgaXMgb3BlblxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbDtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbC1ydGw7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcHVzaDtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtbWQtYm94LXNoYWRvdztcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LW1kLWJveC1zaGFkb3c7XG59XG5cbi8vIEFjY29yZGlvbiBTdHlsZXNcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbn1cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1hbmltYXRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGlvbi1hY2NvcmRpb24gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqXG4gKiBUaGUgPiBbc2xvdD1cImhlYWRlclwiXSBzZWxlY3RvciBlbnN1cmVzIHRoYXQgd2UgZG9cbiAqIG5vdCBtb2RpZnkgdG9nZ2xlIGljb25zIGZvciBhbnkgbmVzdGVkIGFjY29yZGlvbnMuIFRoZSBzdGF0ZVxuICogb2Ygb25lIGFjY29yZGlvbiBzaG91bGQgbm90IGFmZmVjdCBhbnkgYWNjb3JkaW9ucyBpbnNpZGVcbiAqIG9mIGEgbmVzdGVkIGFjY29yZGlvbiBncm91cC5cbiAqL1xuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nID4gW3Nsb3Q9XCJoZWFkZXJcIl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24sXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tcHJldmlvdXMgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZzpmaXJzdC1vZi10eXBlLFxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi8vIFNhZmFyaS9pT1MgMTUgY2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiBpbnB1dFt0eXBlPVwiZGF0ZVwiXS5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmcm9tIElvbmljIDUvU2FmYXJpIDE0IGRlc2lnbnMsXG4vLyB3ZSBvdmVycmlkZSB0aGUgYXBwZWFyYW5jZSBvbmx5IHdoZW4gdXNpbmcgd2l0aGluIGFuIGlvbi1pbnB1dC5cbmlvbi1pbnB1dCBpbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qKlxuICogVGhlIC5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgY2xhc3MgY29udGFpbnNcbiAqIHN0eWxlcyB0aGF0IGFsbG93IGFueSBtb2RhbC9wb3BvdmVyIHRvIGJlXG4gKiBzaXplZCBhY2NvcmRpbmcgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGRhdGV0aW1lXG4gKiB3aGVuIHVzZWQgd2l0aCBpb24tZGF0ZXRpbWUtYnV0dG9uLlxuICovXG4uaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IHtcbiAgLS13aWR0aDogZml0LWNvbnRlbnQ7XG4gIC0taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLyoqXG4gKiBUaGUgZ3JpZCB2YXJpYW50IGNhbiBzY2FsZSBkb3duIHdoZW4gaW5saW5lLlxuICogV2hlbiB1c2VkIGluIGEgYGZpdC1jb250ZW50YCBvdmVybGF5LCB0aGlzIGNhdXNlc1xuICogdGhlIG92ZXJsYXkgdG8gc2hyaW5rIHdoZW4gdGhlIG1vbnRoL3llYXIgcGlja2VyIGlzIG9wZW4uXG4gKiBFeHBsaWNpdGx5IHNldHRpbmcgdGhlIGRpbWVuc2lvbnMgbGV0cyB1cyBoYXZlIGEgY29uc2lzdGVudGx5XG4gKiBzaXplZCBncmlkIGludGVyZmFjZS5cbiAqL1xuLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSBpb24tZGF0ZXRpbWUuZGF0ZXRpbWUtZ3JpZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWluLWhlaWdodDogMzIwcHg7XG59XG4iLCJodG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuICogdG9wIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiAqIHRoZSBmaXJzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4gKiBGb290ZXIgYWxzbyBuZWVkcyB0aGlzLiBXZSBkbyBub3QgYWRqdXN0IHRoZSBib3R0b21cbiAqIHBhZGRpbmcgdGhvdWdoIGJlY2F1c2Ugb2YgdGhlIHNhZmUgYXJlYS5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tZm9vdGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4vKipcbiogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4qIGJvdHRvbSBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4qIHRoZSBsYXN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi8qKlxuKiBBZGQgcGFkZGluZyBvbiB0aGUgbGVmdCBhbmQgcmlnaHRcbiogb2YgdG9vbGJhcnMgd2hpbGUgYWNjb3VudGluZyBmb3Jcbiogc2FmZSBhcmVhIHZhbHVlcyB3aGVuIGluIGxhbmRzY2FwZS5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgOHB4KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyA4cHgpO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgb24gaVBhZE9TXG4gKiBzaG91bGQgb25seSBoYXZlIGJhY2tkcm9wIG9uIGZpcnN0IGluc3RhbmNlLlxuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG4gIH1cbn1cbi8qKlxuICogU3Vic2VxdWVudCBtb2RhbHMgc2hvdWxkIG5vdCBoYXZlIGEgYmFja2Ryb3AvYm94IHNoYWRvd1xuICogYXMgaXQgd2lsbCBjYXVzZSB0aGUgc2NyZWVuIHRvIGFwcGVhciB0byBnZXQgcHJvZ3Jlc3NpdmVseVxuICogZGFya2VyLiBXaXRoIElvbmljIDYsIGRlY2xhcmF0aXZlIG1vZGFscyBtYWRlIGl0XG4gKiBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIG5vbi1wcmVzZW50ZWQgbW9kYWxzIGluIHRoZSBET00sXG4gKiBzbyB3ZSBjb3VsZCBubyBsb25nZXIgcmVseSBvbiBpb24tbW9kYWw6Zmlyc3Qtb2YtdHlwZS5cbiAqIEhlcmUgd2UgZGlzYWJsZSB0aGUgb3BhY2l0eS9ib3gtc2hhZG93IGZvciBldmVyeSBtb2RhbFxuICogdGhhdCBjb21lcyBhZnRlciB0aGUgZmlyc3QgcHJlc2VudGVkIG1vZGFsLlxuICpcbiAqIE5vdGU6IGlvbi1tb2RhbDpub3QoLm92ZXJsYXktaGlkZGVuKTpmaXJzdC1vZi10eXBlXG4gKiBkb2VzIG5vdCBtYXRjaCB0aGUgZmlyc3QgbW9kYWwgdG8gbm90IGhhdmVcbiAqIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MsIGl0IHdpbGwgbWF0Y2ggdGhlXG4gKiBmaXJzdCBtb2RhbCBpbiBnZW5lcmFsIG9ubHkgaWYgaXQgZG9lcyBub3RcbiAqIGhhdmUgdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcy5cbiAqIFRoZSA6bnRoLWNoaWxkKCkgcHNldWRvLWNsYXNzIGhhcyBzdXBwb3J0XG4gKiBmb3Igc2VsZWN0b3JzIHdoaWNoIHdvdWxkIGhlbHAgdXMgaGVyZS4gQXQgdGhlXG4gKiB0aW1lIG9mIHdyaXRpbmcgaXQgZG9lcyBub3QgaGF2ZSBncmVhdCBjcm9zcyBicm93c2VyXG4gKiBzdXBwb3J0LlxuICpcbiAqIE5vdGUgMjogVGhpcyBzaG91bGQgb25seSBhcHBseSB0byBub24tY2FyZCBhbmRcbiAqIG5vbi1zaGVldCBtb2RhbHMuIENhcmQgYW5kIHNoZWV0IG1vZGFscyBoYXZlIHRoZWlyXG4gKiBvd24gY3JpdGVyaWEgZm9yIGRpc3BsYXlpbmcgYmFja2Ryb3BzL2JveCBzaGFkb3dzLlxuICpcbiAqIERvIG5vdCB1c2UgOm5vdCgub3ZlcmxheS1oaWRkZW4pIGluIHBsYWNlIG9mXG4gKiAuc2hvdy1tb2RhbCBiZWNhdXNlIHRoYXQgdHJpZ2dlcnMgYSBtZW1vcnlcbiAqIGxlYWsgaW4gQmxpbms6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE0MTg3NjhcbiAqL1xuaW9uLW1vZGFsLm1vZGFsLWRlZmF1bHQuc2hvdy1tb2RhbCB+IGlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0IHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKlxuICogVGhpcyB3b3JrcyBhcm91bmQgYSBidWcgaW4gV2ViS2l0IHdoZXJlIHRoZVxuICogY29udGVudCB3aWxsIG92ZXJmbG93IG91dHNpZGUgb2YgdGhlIGJvdHRvbSBib3JkZXJcbiAqIHJhZGl1cyB3aGVuIHJlLXBhaW50aW5nLiBBcyBsb25nIGFzIGEgc2luZ2xlXG4gKiBib3JkZXIgcmFkaXVzIHZhbHVlIGlzIHNldCBvbiAuaW9uLXBhZ2UsIHRoaXNcbiAqIGlzc3VlIGRvZXMgbm90IGhhcHBlbi4gV2Ugc2V0IHRoZSB0b3AgbGVmdCByYWRpdXNcbiAqIGhlcmUgYmVjYXVzZSB0aGUgdG9wIGxlZnQgY29ybmVyIHdpbGwgYWx3YXlzIGhhdmUgYVxuICogcmFkaXVzIG5vIG1hdHRlciB0aGUgcGxhdGZvcm0uXG4gKiBUaGlzIGJlaGF2aW9yIG9ubHkgYXBwbGllcyB0byBjYXJkIG1vZGFscy5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjM2RjMmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDYxLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMzZhYmUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItdGVydGlhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM1MjYwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCA4MiwgOTYsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNDg1NGUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzYzNzBmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zdWNjZXNzIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmYzQwOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAxOTYsIDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYWMwOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmY2EyMikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYW5nZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDIzNSwgNjgsIDkwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNjZjNjNGYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2VkNTc2YikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbWVkaXVtIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5YykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNDYsIDE0OCwgMTU2KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgIzlkOWZhNikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qKlxuICogV2hlbiBtYWtpbmcgY3VzdG9tIGRpYWxvZ3MsIHVzaW5nXG4gKiBpb24tY29udGVudCBpcyBub3QgcmVxdWlyZWQuIEFzIGEgcmVzdWx0LFxuICogc29tZSBkZXZlbG9wZXJzIG1heSB3aXNoIHRvIGhhdmUgZGlhbG9nc1xuICogdGhhdCBhcmUgYXV0b21hdGljYWxseSBzaXplZCBieSB0aGUgYnJvd3Nlci5cbiAqIFRoZXNlIGNoYW5nZXMgYWxsb3cgY2VydGFpbiBkaW1lbnNpb24gdmFsdWVzXG4gKiBzdWNoIGFzIGZpdC1jb250ZW50IHRvIHdvcmsgY29ycmVjdGx5LlxuICovXG5pb24tbW9kYWwgPiAuaW9uLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbnRhaW46IGxheW91dCBzdHlsZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7XG59XG5cbi5tZW51LWNvbnRlbnQtb3BlbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogLThweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDhweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQgPiBpb24tYWNjb3JkaW9uOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWFuaW1hdGVkID4gW3Nsb3Q9aGVhZGVyXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIHRyYW5zaXRpb246IDMwMG1zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBpb24tYWNjb3JkaW9uIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKlxuICogVGhlID4gW3Nsb3Q9XCJoZWFkZXJcIl0gc2VsZWN0b3IgZW5zdXJlcyB0aGF0IHdlIGRvXG4gKiBub3QgbW9kaWZ5IHRvZ2dsZSBpY29ucyBmb3IgYW55IG5lc3RlZCBhY2NvcmRpb25zLiBUaGUgc3RhdGVcbiAqIG9mIG9uZSBhY2NvcmRpb24gc2hvdWxkIG5vdCBhZmZlY3QgYW55IGFjY29yZGlvbnMgaW5zaWRlXG4gKiBvZiBhIG5lc3RlZCBhY2NvcmRpb24gZ3JvdXAuXG4gKi9cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyA+IFtzbG90PWhlYWRlcl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24sXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCA+IFtzbG90PWhlYWRlcl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1wcmV2aW91cyBpb24taXRlbVtzbG90PWhlYWRlcl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmc6Zmlyc3Qtb2YtdHlwZSxcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24taW5wdXQgaW5wdXQ6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4vKipcbiAqIFRoZSAuaW9uLWRhdGV0aW1lLWJ1dHRvbi1vdmVybGF5IGNsYXNzIGNvbnRhaW5zXG4gKiBzdHlsZXMgdGhhdCBhbGxvdyBhbnkgbW9kYWwvcG9wb3ZlciB0byBiZVxuICogc2l6ZWQgYWNjb3JkaW5nIHRvIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBkYXRldGltZVxuICogd2hlbiB1c2VkIHdpdGggaW9uLWRhdGV0aW1lLWJ1dHRvbi5cbiAqL1xuLmlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheSB7XG4gIC0td2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi8qKlxuICogVGhlIGdyaWQgdmFyaWFudCBjYW4gc2NhbGUgZG93biB3aGVuIGlubGluZS5cbiAqIFdoZW4gdXNlZCBpbiBhIGBmaXQtY29udGVudGAgb3ZlcmxheSwgdGhpcyBjYXVzZXNcbiAqIHRoZSBvdmVybGF5IHRvIHNocmluayB3aGVuIHRoZSBtb250aC95ZWFyIHBpY2tlciBpcyBvcGVuLlxuICogRXhwbGljaXRseSBzZXR0aW5nIHRoZSBkaW1lbnNpb25zIGxldHMgdXMgaGF2ZSBhIGNvbnNpc3RlbnRseVxuICogc2l6ZWQgZ3JpZCBpbnRlcmZhY2UuXG4gKi9cbi5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgaW9uLWRhdGV0aW1lLmRhdGV0aW1lLWdyaWQge1xuICB3aWR0aDogMzIwcHg7XG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNzcy5tYXAgKi9cbiIsIkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIiwiXG4vLyBHbG9iYWwgVXRpbGl0eSBGdW5jdGlvbnNcbkBpbXBvcnQgXCIuL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmdcIjtcblxuLy8gR2xvYmFsIENvbG9yIEZ1bmN0aW9uc1xuQGltcG9ydCBcIi4vaW9uaWMuZnVuY3Rpb25zLmNvbG9yXCI7XG5cbi8vIEdsb2JhbCBNaXhpbnNcbkBpbXBvcnQgXCIuL2lvbmljLm1peGluc1wiO1xuXG4vLyBEZWZhdWx0IFRoZW1lXG5AaW1wb3J0IFwiLi9pb25pYy50aGVtZS5kZWZhdWx0XCI7XG5cblxuLy8gRGVmYXVsdCBHZW5lcmFsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgICAgICAgdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGFwcCBkaXJlY3Rpb25cbiRhcHAtZGlyZWN0aW9uOiBudWxsICFkZWZhdWx0O1xuXG4vLyBIYWlybGluZXMgd2lkdGhcbiRoYWlybGluZXMtd2lkdGg6IC41NXB4ICFkZWZhdWx0O1xuXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vIFotSW5kZXhcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHcm91cGVkIGJ5IGVsZW1lbnRzIHdoaWNoIHdvdWxkIGJlIHNpYmxpbmdzXG5cbiR6LWluZGV4LW1lbnUtb3ZlcmxheTogICAgICAgICAgIDEwMDA7XG4kei1pbmRleC1vdmVybGF5OiAgICAgICAgICAgICAgICAxMDAxO1xuJHotaW5kZXgtY2xpY2stYmxvY2s6ICAgICAgICAgICAgOTk5OTk7XG5cbiR6LWluZGV4LWZpeGVkLWNvbnRlbnQ6ICAgICAgICAgIDk5OTtcbiR6LWluZGV4LXNjcm9sbC1jb250ZW50OiAgICAgICAgIDE7XG4kei1pbmRleC1yZWZyZXNoZXI6ICAgICAgICAgICAgICAtMTtcblxuJHotaW5kZXgtcGFnZS1jb250YWluZXI6ICAgICAgICAgMDtcbiR6LWluZGV4LXRvb2xiYXI6ICAgICAgICAgICAgICAgIDEwO1xuJHotaW5kZXgtdG9vbGJhci1iYWNrZ3JvdW5kOiAgICAgLTE7XG4kei1pbmRleC10b29sYmFyLWJ1dHRvbnM6ICAgICAgICA5OTtcblxuJHotaW5kZXgtYmFja2Ryb3A6ICAgICAgICAgICAgICAgMjtcbiR6LWluZGV4LW92ZXJsYXktd3JhcHBlcjogICAgICAgIDEwO1xuXG4kei1pbmRleC1pdGVtLW9wdGlvbnM6ICAgICAgICAgICAxO1xuJHotaW5kZXgtaXRlbS1pbnB1dDogICAgICAgICAgICAgMjtcbiR6LWluZGV4LWl0ZW0tZGl2aWRlcjogICAgICAgICAgIDEwMDtcblxuJHotaW5kZXgtcmVvcmRlci1zZWxlY3RlZDogICAgICAgMTAwO1xuIiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lcy9pb25pYy5nbG9iYWxzLmlvc1wiO1xuXG4vLyBpT1MgTWVudVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8vIEBwcm9wIC0gQmFja2dyb3VuZCBvZiB0aGUgbWVudVxuJG1lbnUtaW9zLWJhY2tncm91bmQ6ICAgICAgICAgICAgJGJhY2tncm91bmQtY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgY29sb3Igb2YgdGhlIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LWNvbG9yOiAgICAgIHJnYmEoMCwgMCwgMCwgLjA4KSAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3c6ICAgICAgICAgICAgLThweCAwIDQycHggJG1lbnUtaW9zLWJveC1zaGFkb3ctY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG1lbnUgaW4gcnRsIG1vZGVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXJ0bDogICAgICAgIDhweCAwIDQycHggJG1lbnUtaW9zLWJveC1zaGFkb3ctY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIHJldmVhbCBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1yZXZlYWw6ICAgICAkbWVudS1pb3MtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgcmV2ZWFsIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbC1ydGw6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJ0bCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgcHVzaCBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1wdXNoOiAgICAgICBudWxsICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBvdmVybGF5IG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LW92ZXJsYXk6ICAgIG51bGwgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vdGhlbWVzL2lvbmljLmdsb2JhbHMubWRcIjtcblxuLy8gTWF0ZXJpYWwgRGVzaWduIE1lbnVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vLyBAcHJvcCAtIEJhY2tncm91bmQgb2YgdGhlIG1lbnVcbiRtZW51LW1kLWJhY2tncm91bmQ6ICAgICAgICAgICAgJGJhY2tncm91bmQtY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG1lbnVcbiRtZW51LW1kLWJveC1zaGFkb3c6ICAgICAgICAgICAgNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCkgIWRlZmF1bHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9 */\n/*# sourceMappingURL=normalize.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOzs7O0VBSUUsd0JBQUE7QUNORjs7QURXQTtFQUNFLGFBQUE7RUFFQSxTQUFBO0FDVEY7O0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7O0FEcUJBO0VBQ0UsZUFBQTtBQ2xCRjs7QUR3QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDdkJGOztBRDJCQTtFQUNFLGNBQUE7QUN4QkY7O0FENEJBOzs7O0VBSUUsaUNBQUE7RUFDQSxjQUFBO0FDekJGOztBRHlDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUN0Q0Y7O0FEeUNBO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtBQ3hDRjs7QUQyQ0E7RUFDRSxpQkFBQTtBQ3hDRjs7QUQyQ0E7Ozs7RUFJRSxTQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUN6Q0Y7O0FEaURBOzs7RUFHRSxlQUFBO0VBRUEsMEJBQUE7QUMvQ0Y7O0FEbURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkUsMEJBQUE7QUNoREY7O0FEbURBOztFQUVFLG9CQUFBO0FDaERGOztBRG1EQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUNqREY7O0FEb0RBO0VBQ0UsZUFBQTtBQ2pERjs7QURxREE7OztFQUdFLGVBQUE7QUNsREY7O0FEc0RBOztFQUVFLFVBQUE7RUFFQSxTQUFBO0FDcERGOztBRDBEQTs7RUFFRSxZQUFBO0FDdkRGOztBRDZEQTs7RUFFRSx3QkFBQTtBQzFERjs7QURrRUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDL0RGOztBRGtFQTs7RUFFRSxVQUFBO0FDL0RGOztBQUVBLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vICEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzXG5cblxuLy8gSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gMS4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvLyAxXG59XG5cbi8vIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4vLyBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBoZWlnaHQ6IDA7XG59XG5cblxuLy8gVGV4dC1sZXZlbCBzZW1hbnRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy8gRW1iZWRkZWQgY29udGVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTWFrZXMgaXQgc28gdGhlIGltZyBkb2VzIG5vdCBmbG93IG91dHNpZGUgY29udGFpbmVyXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8vIEdyb3VwaW5nIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG5cbiAgYm9yZGVyLXdpZHRoOiAwO1xuXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vLyBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vLyBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cblxuLy8gRm9ybXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXG4vLyBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXG5cbi8vIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxuLy8gMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxubGFiZWwsXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgaGVpZ2h0OiBhdXRvO1xuXG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuZm9ybSxcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3Qge1xuICBtYXJnaW46IDA7IC8vIDNcblxuICBmb250OiBpbmhlcml0OyAvLyAyXG4gIGNvbG9yOiBpbmhlcml0OyAvLyAxXG59XG5cbi8vIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4vLyAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbi8vIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbi8vIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4vLyAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8vIDFcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7IC8vIDNcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLy8gMlxufVxuXG4vLyByZW1vdmUgMzAwbXMgZGVsYXlcbmEsXG5hIGRpdixcbmEgc3BhbixcbmEgaW9uLWljb24sXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbixcbmJ1dHRvbiBkaXYsXG5idXR0b24gc3BhbixcbmJ1dHRvbiBpb24taWNvbixcbmJ1dHRvbiBpb24tbGFiZWwsXG4uaW9uLXRhcHBhYmxlLFxuW3RhcHBhYmxlXSxcblt0YXBwYWJsZV0gZGl2LFxuW3RhcHBhYmxlXSBzcGFuLFxuW3RhcHBhYmxlXSBpb24taWNvbixcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbiBpb24tbGFiZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuW3RhcHBhYmxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbmFbZGlzYWJsZWRdLFxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxuLy8gYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbi8vIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cbi8vIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcbi8vIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5cbi8vIFRhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xuXG4vLyBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cbiIsImF1ZGlvLFxuY2FudmFzLFxucHJvZ3Jlc3MsXG52aWRlbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxubGFiZWwsXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG5mb3JtLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5hLFxuYSBkaXYsXG5hIHNwYW4sXG5hIGlvbi1pY29uLFxuYSBpb24tbGFiZWwsXG5idXR0b24sXG5idXR0b24gZGl2LFxuYnV0dG9uIHNwYW4sXG5idXR0b24gaW9uLWljb24sXG5idXR0b24gaW9uLWxhYmVsLFxuLmlvbi10YXBwYWJsZSxcblt0YXBwYWJsZV0sXG5bdGFwcGFibGVdIGRpdixcblt0YXBwYWJsZV0gc3Bhbixcblt0YXBwYWJsZV0gaW9uLWljb24sXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcbmlucHV0LFxudGV4dGFyZWEge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuYSBpb24tbGFiZWwsXG5idXR0b24gaW9uLWxhYmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5bdGFwcGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hW2Rpc2FibGVkXSxcbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmNzcy5tYXAgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=structure.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxzQkFBQTtFQUVBLDZDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtVQUFBLHNCQUFBO0FDVEY7O0FEWUE7RUFDRSxhQUFBO0FDVEY7O0FEWUE7RUFDRSxjQUFBO0FDVEY7O0FEWUE7RUFDRSxhQUFBO0FDVEY7O0FEWUE7RUV3Q0Usa0NBQUE7RUFDQSxtQ0FBQTtFQW9LRSxjRjNNYztFRTRNZCxlRjVNYztFRWdQaEIsYUZoUGdCO0VFaVBoQixnQkZqUGdCO0VFMk1kLGVGMU1lO0VFMk1mLGdCRjNNZTtFRStPakIsY0YvT2lCO0VFZ1BqQixpQkZoUGlCO0VBRWpCLGVBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7RUFvQkEsd0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO1VBQUEsc0JBQUE7QUNiRjs7QUFFQSx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cblxuLy8gU3RydWN0dXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRkcyBzdHJ1Y3R1cmFsIGNzcyB0byB0aGUgbmF0aXZlIGh0bWwgZWxlbWVudHNcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwuaW9uLWNlIGJvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHRtbC5wbHQtcHdhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIEBpbmNsdWRlIGZvbnQtc21vb3RoaW5nKCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcbiAgQGluY2x1ZGUgcGFkZGluZygwKTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gIC8qKlxuICAgKiBCZWNhdXNlIGJvZHkgaGFzIHBvc2l0aW9uOiBmaXhlZCxcbiAgICogaXQgc2hvdWxkIGJlIHByb21vdGVkIHRvIGl0cyBvd25cbiAgICogbGF5ZXIuXG4gICAqXG4gICAqIFdlYktpdCBkb2VzIG5vdCBhbHdheXMgcHJvbW90ZVxuICAgKiB0aGUgYm9keSB0byBpdHMgb3duIGxheWVyIG9uIHBhZ2VcbiAgICogbG9hZCBpbiBJb25pYyBhcHBzLiBPbmNlIHNjcm9sbGluZyBvblxuICAgKiBpb24tY29udGVudCBzdGFydHMsIFdlYktpdCB3aWxsIHByb21vdGVcbiAgICogYm9keS4gVW5mb3J0dW5hdGVseSwgdGhpcyBjYXVzZXMgYSByZS1wYWludFxuICAgKiB3aGljaCByZXN1bHRzIGluIHNjcm9sbGluZyBiZWluZyBoYWx0ZWRcbiAgICogdW50aWwgdGhlIG5leHQgdXNlciBnZXN0dXJlLlxuICAgKlxuICAgKiBUaGlzIGltcGFjdHMgdGhlIEN1c3RvbSBFbGVtZW50cyBidWlsZC5cbiAgICogVGhlIGxhenkgbG9hZGVkIGJ1aWxkIGNhdXNlcyB0aGUgYnJvd3NlciB0b1xuICAgKiByZS1wYWludCBkdXJpbmcgaHlkcmF0aW9uIHdoaWNoIGNhdXNlcyBXZWJLaXRcbiAgICogdG8gcHJvbW90ZSBib2R5IHRvIGl0cyBvd24gbGF5ZXIuXG4gICAqIEluIHRoZSBDRSBCdWlsZCwgdGhpcyBoeWRyYXRpb24gZG9lcyBub3RcbiAgICogaGFwcGVuLCBzbyB0aGUgYWRkaXRpb25hbCByZS1wYWludCBkb2VzIG5vdCBvY2N1ci5cbiAgICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG5cbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG5cbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcblxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG5odG1sOm5vdCguaHlkcmF0ZWQpIGJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLmlvbi1jZSBib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LXB3YSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAvKipcbiAgICogQmVjYXVzZSBib2R5IGhhcyBwb3NpdGlvbjogZml4ZWQsXG4gICAqIGl0IHNob3VsZCBiZSBwcm9tb3RlZCB0byBpdHMgb3duXG4gICAqIGxheWVyLlxuICAgKlxuICAgKiBXZWJLaXQgZG9lcyBub3QgYWx3YXlzIHByb21vdGVcbiAgICogdGhlIGJvZHkgdG8gaXRzIG93biBsYXllciBvbiBwYWdlXG4gICAqIGxvYWQgaW4gSW9uaWMgYXBwcy4gT25jZSBzY3JvbGxpbmcgb25cbiAgICogaW9uLWNvbnRlbnQgc3RhcnRzLCBXZWJLaXQgd2lsbCBwcm9tb3RlXG4gICAqIGJvZHkuIFVuZm9ydHVuYXRlbHksIHRoaXMgY2F1c2VzIGEgcmUtcGFpbnRcbiAgICogd2hpY2ggcmVzdWx0cyBpbiBzY3JvbGxpbmcgYmVpbmcgaGFsdGVkXG4gICAqIHVudGlsIHRoZSBuZXh0IHVzZXIgZ2VzdHVyZS5cbiAgICpcbiAgICogVGhpcyBpbXBhY3RzIHRoZSBDdXN0b20gRWxlbWVudHMgYnVpbGQuXG4gICAqIFRoZSBsYXp5IGxvYWRlZCBidWlsZCBjYXVzZXMgdGhlIGJyb3dzZXIgdG9cbiAgICogcmUtcGFpbnQgZHVyaW5nIGh5ZHJhdGlvbiB3aGljaCBjYXVzZXMgV2ViS2l0XG4gICAqIHRvIHByb21vdGUgYm9keSB0byBpdHMgb3duIGxheWVyLlxuICAgKiBJbiB0aGUgQ0UgQnVpbGQsIHRoaXMgaHlkcmF0aW9uIGRvZXMgbm90XG4gICAqIGhhcHBlbiwgc28gdGhlIGFkZGl0aW9uYWwgcmUtcGFpbnQgZG9lcyBub3Qgb2NjdXIuXG4gICAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnVjdHVyZS5jc3MubWFwICovXG4iLCJAbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbnRlbnQ6IFwiXCI7XG5cbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICBAY29udGVudDtcblxuICAvLyAkcm9vdDogI3smfTtcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAvLyAgICN7JHJvb3R9IHtcbiAgLy8gICAgIEBjb250ZW50O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAkcm9vdDogI3smfTtcblxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgfSBAZWxzZSB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgQGF0LXJvb3Qge1xuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICN7JHByb3B9LXRvcDogJHRvcDtcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICByaWdodDogJHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgdG9wOiAkdG9wO1xuICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAkb3RoZXItZGlyOiBudWxsO1xuXG4gIEBpZiAkZGlyID09IGx0ciB7XG4gICAgJG90aGVyLWRpcjogcnRsO1xuICB9IEBlbHNlIHtcbiAgICAkb3RoZXItZGlyOiBsdHI7XG4gIH1cblxuICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgZGlyZWN0aW9uOiAkZGlyO1xuICB9XG4gIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICRleHRyYTogbnVsbDtcblxuICAkeDogbnVsbDtcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */\n/*# sourceMappingURL=typography.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QkE7RUFDRSxtQ0FBQTtBQzdCRjs7QURnQ0E7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDN0JGOztBRGdDQTs7Ozs7O0VFOE9FLGdCRnhPZ0I7RUV5T2hCLG1CRnpPNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1MvQjtBRGlDQTtFRWlPRSxnQkZoT2dCO0VBRWhCLGVBMUM2QjtBQ1UvQjtBRG1DQTtFRTJORSxnQkYxTmdCO0VBRWhCLGVBN0M2QjtBQ1cvQjtBRHFDQTtFQUNFLGVBOUM2QjtBQ1cvQjs7QURzQ0E7RUFDRSxlQS9DNkI7QUNZL0I7O0FEc0NBO0VBQ0UsZUFoRDZCO0FDYS9COztBRHNDQTtFQUNFLGVBakQ2QjtBQ2MvQjs7QURzQ0E7RUFDRSxjQUFBO0FDbkNGOztBRHNDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN0Q0Y7O0FEeUNBO0VBQ0UsV0FBQTtBQ3RDRjs7QUR5Q0E7RUFDRSxlQUFBO0FDdENGOztBQUVBLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gVHlwb2dyYXBoeVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8vIEBwcm9wIC0gRm9udCB3ZWlnaHQgb2YgYWxsIGhlYWRpbmdzXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICAgNTAwICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBMaW5lIGhlaWdodCBvZiBhbGwgaGVhZGluZ3NcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgICAxLjIgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDFcbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyNnB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCAyXG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMjRweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgM1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDRcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCA1XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMThweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgNlxuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDE2cHggIWRlZmF1bHQ7XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBAaW5jbHVkZSBtYXJnaW4oMTZweCwgbnVsbCwgMTBweCwgbnVsbCk7XG5cbiAgZm9udC13ZWlnaHQ6ICRoZWFkaW5ncy1mb250LXdlaWdodDtcblxuICBsaW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xufVxuXG5oMSB7XG4gIEBpbmNsdWRlIG1hcmdpbigyMHB4LCBudWxsLCBudWxsLCBudWxsKTtcblxuICBmb250LXNpemU6ICRoMS1mb250LXNpemU7XG59XG5cbmgyIHtcbiAgQGluY2x1ZGUgbWFyZ2luKDE4cHgsIG51bGwsIG51bGwsIG51bGwpO1xuXG4gIGZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbn1cblxuaDMge1xuICBmb250LXNpemU6ICRoMy1mb250LXNpemU7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAkaDQtZm9udC1zaXplO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogJGg1LWZvbnQtc2l6ZTtcbn1cblxuaDYge1xuICBmb250LXNpemU6ICRoNi1mb250LXNpemU7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmb250LXNpemU6IDc1JTtcblxuICBsaW5lLWhlaWdodDogMDtcblxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLS41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLS4yNWVtO1xufVxuIiwiaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuaDMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXR5cG9ncmFwaHkuY3NzLm1hcCAqL1xuIiwiQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */\n/*# sourceMappingURL=display.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Rpc3BsYXkuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHdCQUFBO0FDTkY7O0FEZ0JJO0VBQ0Usd0JBQUE7QUNiTjs7QURvQkk7RUFDRSx3QkFBQTtBQ2pCTjs7QUNvSEk7RUY1R0E7SUFDRSx3QkFBQTtFQ0pKO0FBQ0Y7QUN1Skk7RUY3SUE7SUFDRSx3QkFBQTtFQ1BKO0FBQ0Y7QUN5R0k7RUY1R0E7SUFDRSx3QkFBQTtFQ01KO0FBQ0Y7QUM2SUk7RUY3SUE7SUFDRSx3QkFBQTtFQ0dKO0FBQ0Y7QUMrRkk7RUY1R0E7SUFDRSx3QkFBQTtFQ2dCSjtBQUNGO0FDbUlJO0VGN0lBO0lBQ0Usd0JBQUE7RUNhSjtBQUNGO0FDcUZJO0VGNUdBO0lBQ0Usd0JBQUE7RUMwQko7QUFDRjtBQ3lISTtFRjdJQTtJQUNFLHdCQUFBO0VDdUJKO0FBQ0Y7O0FBRUEsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBEaXNwbGF5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kaWZpZXMgZGlzcGxheSBvZiBhIHBhcnRpY3VsYXIgZWxlbWVudCBiYXNlZCBvbiB0aGUgZ2l2ZW4gY2xhc3Nlc1xuXG4uaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZHMgaGlkZGVuIGNsYXNzZXNcbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgaW9uLWhpZGUte2JwfS11cGAgY2xhc3NlcyBmb3IgaGlkaW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLWhpZGUjeyRpbmZpeH0tdXAge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYGlvbi1oaWRlLXticH0tZG93bmAgY2xhc3NlcyBmb3IgaGlkaW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLWhpZGUjeyRpbmZpeH0tZG93biB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS11cCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLWRvd24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWhpZGUtc20tdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5pb24taGlkZS1zbS1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWhpZGUtbWQtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5pb24taGlkZS1tZC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWhpZGUtbGctdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5pb24taGlkZS1sZy1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1oaWRlLXhsLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLXhsLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kaXNwbGF5LmNzcy5tYXAgKi9cbiIsIkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29udGVudDogXCJcIjtcblxuICBvcGFjaXR5OiAwO1xufVxuXG4vLyBGb250IHNtb290aGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcblxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gIEBjb250ZW50O1xuXG4gIC8vICRyb290OiAjeyZ9O1xuICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gIC8vICAgI3skcm9vdH0ge1xuICAvLyAgICAgQGNvbnRlbnQ7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICRyb290OiAjeyZ9O1xuXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgQGNvbnRlbnQ7XG59XG5cblxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICB9IEBlbHNlIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICBAYXQtcm9vdCB7XG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICYge1xuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBsZWZ0OiB1bnNldDtcbiAgICAgIHJpZ2h0OiB1bnNldDtcblxuICAgICAgbGVmdDogJGVuZDtcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICB0b3A6ICR0b3A7XG4gIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICRvdGhlci1kaXI6IG51bGw7XG5cbiAgQGlmICRkaXIgPT0gbHRyIHtcbiAgICAkb3RoZXItZGlyOiBydGw7XG4gIH0gQGVsc2Uge1xuICAgICRvdGhlci1kaXI6IGx0cjtcbiAgfVxuXG4gIEBpbmNsdWRlIGx0cigpIHtcbiAgICBkaXJlY3Rpb246ICRkaXI7XG4gIH1cbiAgQGluY2x1ZGUgcnRsKCkge1xuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcbiAgJGV4dHJhOiBudWxsO1xuXG4gICR4OiBudWxsO1xuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\n/*# sourceMappingURL=padding.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3BhZGRpbmcuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VDNk5FLGVEM05lO0VDNE5mLGdCRDVOZTtFQ2dRakIsY0RoUWlCO0VDaVFqQixpQkRqUWlCO0FFWm5COztBRmVBO0VBQ0UseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUN3TkUsc0NEM09NO0VDNE9OLHVDRDVPTTtFQzRRUixxQ0Q1UVE7RUM2UVIsd0NEN1FRO0FFV1Y7QURvT007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q0R6UEE7SUMyUEEsNENEM1BBO0VFb0JSO0FBQ0Y7O0FGR0E7RUFDRSx1Q0FBQTtFQ21QQSxxQ0Q1UVE7QUUwQlY7QUZJQTtFQUNFLHlDQUFBO0VDNE1FLHNDRDNPTTtBRThCVjtBRGlOTTtFQUNFO0lBRUksbUJBQUE7SUFPRiw4Q0R6UEE7RUVvQ1I7QUFDRjs7QUZEQTtFQUNFLHVDQUFBO0VDdU1FLHVDRDVPTTtBRTBDVjtBRHFNTTtFQUNFO0lBS0ksb0JBQUE7SUFNRiw0Q0QzUEE7RUVnRFI7QUFDRjs7QUZQQTtFQUNFLDBDQUFBO0VDa09BLHdDRDdRUTtBRXNEVjtBRk5BO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFQzBOQSxxQ0Q1UVE7RUM2UVIsd0NEN1FRO0FFNERWO0FGTEE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VDa0xFLHNDRDNPTTtFQzRPTix1Q0Q1T007QUVrRVY7QUQ2S007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFJRiw4Q0R6UEE7SUMyUEEsNENEM1BBO0VFMkVSO0FBQ0Y7O0FGVkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUNpS0UsY0QvSmM7RUNnS2QsZURoS2M7RUNvTWhCLGFEcE1nQjtFQ3FNaEIsZ0JEck1nQjtBRWVsQjs7QUZaQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VDNEpFLG9DRDFPSztFQzJPTCxxQ0QzT0s7RUMyUVAsbUNEM1FPO0VDNFFQLHNDRDVRTztBRWlHVDtBRDZJTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUlGLDRDRHhQRDtJQzBQQywwQ0QxUEQ7RUUwR1A7QUFDRjs7QUZ4QkE7RUFDRSxxQ0FBQTtFQ3VMQSxtQ0QzUU87QUVnSFQ7QUZ2QkE7RUFDRSx1Q0FBQTtFQ2dKRSxvQ0QxT0s7QUVvSFQ7QUQwSE07RUFDRTtJQUVJLGtCQUFBO0lBT0YsNENEeFBEO0VFMEhQO0FBQ0Y7O0FGNUJBO0VBQ0UscUNBQUE7RUMySUUscUNEM09LO0FFZ0lUO0FEOEdNO0VBQ0U7SUFLSSxtQkFBQTtJQU1GLDBDRDFQRDtFRXNJUDtBQUNGOztBRmxDQTtFQUNFLHdDQUFBO0VDc0tBLHNDRDVRTztBRTRJVDtBRmpDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUM4SkEsbUNEM1FPO0VDNFFQLHNDRDVRTztBRWtKVDtBRmhDQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUNzSEUsb0NEMU9LO0VDMk9MLHFDRDNPSztBRXdKVDtBRHNGTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUlGLDRDRHhQRDtJQzBQQywwQ0QxUEQ7RUVpS1A7QUFDRjs7QUFFQSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cblxuLy8gRWxlbWVudCBTcGFjZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgcGFkZGluZyBhbmQgbWFyZ2luIGF0dHJpYnV0ZXMgdG8gYmUgdXNlZCBvblxuLy8gYW55IGVsZW1lbnRcblxuJHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuXG4vLyBQYWRkaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLW5vLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgQGluY2x1ZGUgcGFkZGluZygwKTtcbn1cblxuLmlvbi1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcsIG51bGwsIG51bGwsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy1lbmQge1xuICAtLXBhZGRpbmctZW5kOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwobnVsbCwgJHBhZGRpbmcpO1xufVxuXG4uaW9uLXBhZGRpbmctYm90dG9tIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZyhudWxsLCBudWxsLCAkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nLCBudWxsLCAkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRwYWRkaW5nKTtcbn1cblxuXG4vLyBNYXJnaW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tbm8tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IDA7XG4gIC0tbWFyZ2luLWVuZDogMDtcbiAgLS1tYXJnaW4tdG9wOiAwO1xuICAtLW1hcmdpbi1ib3R0b206IDA7XG5cbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1lbmQ6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luKTtcbn1cblxuLmlvbi1tYXJnaW4tdG9wIHtcbiAgLS1tYXJnaW4tdG9wOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luLCBudWxsLCBudWxsLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tc3RhcnQge1xuICAtLW1hcmdpbi1zdGFydDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tZW5kIHtcbiAgLS1tYXJnaW4tZW5kOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsICRtYXJnaW4pO1xufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20ge1xuICAtLW1hcmdpbi1ib3R0b206ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luKG51bGwsIG51bGwsICRtYXJnaW4sIG51bGwpO1xufVxuXG4uaW9uLW1hcmdpbi12ZXJ0aWNhbCB7XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luLCBudWxsLCAkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1lbmQ6ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJG1hcmdpbik7XG59XG4iLCJAbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbnRlbnQ6IFwiXCI7XG5cbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICBAY29udGVudDtcblxuICAvLyAkcm9vdDogI3smfTtcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAvLyAgICN7JHJvb3R9IHtcbiAgLy8gICAgIEBjb250ZW50O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAkcm9vdDogI3smfTtcblxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgfSBAZWxzZSB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgQGF0LXJvb3Qge1xuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICN7JHByb3B9LXRvcDogJHRvcDtcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICByaWdodDogJHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgdG9wOiAkdG9wO1xuICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAkb3RoZXItZGlyOiBudWxsO1xuXG4gIEBpZiAkZGlyID09IGx0ciB7XG4gICAgJG90aGVyLWRpcjogcnRsO1xuICB9IEBlbHNlIHtcbiAgICAkb3RoZXItZGlyOiBsdHI7XG4gIH1cblxuICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgZGlyZWN0aW9uOiAkZGlyO1xuICB9XG4gIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICRleHRyYTogbnVsbDtcblxuICAkeDogbnVsbDtcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tbm8tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctc3RhcnQge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctZW5kIHtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctZW5kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1uby1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogMDtcbiAgLS1tYXJnaW4tZW5kOiAwO1xuICAtLW1hcmdpbi10b3A6IDA7XG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlvbi1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi10b3Age1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1zdGFydCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1lbmQge1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tZW5kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSB7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tdmVydGljYWwge1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5jc3MubWFwICovXG4iXSwic291cmNlUm9vdCI6IiJ9 */\n/*# sourceMappingURL=float-elements.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFJO0VDa2FFLHNCQUFBO0FDN2FOOztBRmVJO0VDOFpFLHVCQUFBO0FDemFOOztBRmVJO0VDNFlFLHNCQUFBO0FDdlpOO0FEMExXO0VBZ09MLHVCQUFBO0FDdlpOOztBRllJO0VDK1lFLHVCQUFBO0FDdlpOO0FEbUxXO0VBdU9MLHNCQUFBO0FDdlpOOztBRDBHSTtFRGpIQTtJQ2thRSxzQkFBQTtFQ3RaSjs7RUZSRTtJQzhaRSx1QkFBQTtFQ2xaSjs7RUZSRTtJQzRZRSxzQkFBQTtFQ2hZSjtFRG1LUztJQWdPTCx1QkFBQTtFQ2hZSjs7RUZYRTtJQytZRSx1QkFBQTtFQ2hZSjtFRDRKUztJQXVPTCxzQkFBQTtFQ2hZSjtBQUNGO0FEa0ZJO0VEakhBO0lDa2FFLHNCQUFBO0VDL1hKOztFRi9CRTtJQzhaRSx1QkFBQTtFQzNYSjs7RUYvQkU7SUM0WUUsc0JBQUE7RUN6V0o7RUQ0SVM7SUFnT0wsdUJBQUE7RUN6V0o7O0VGbENFO0lDK1lFLHVCQUFBO0VDeldKO0VEcUlTO0lBdU9MLHNCQUFBO0VDeldKO0FBQ0Y7QUQyREk7RURqSEE7SUNrYUUsc0JBQUE7RUN4V0o7O0VGdERFO0lDOFpFLHVCQUFBO0VDcFdKOztFRnRERTtJQzRZRSxzQkFBQTtFQ2xWSjtFRHFIUztJQWdPTCx1QkFBQTtFQ2xWSjs7RUZ6REU7SUMrWUUsdUJBQUE7RUNsVko7RUQ4R1M7SUF1T0wsc0JBQUE7RUNsVko7QUFDRjtBRG9DSTtFRGpIQTtJQ2thRSxzQkFBQTtFQ2pWSjs7RUY3RUU7SUM4WkUsdUJBQUE7RUM3VUo7O0VGN0VFO0lDNFlFLHNCQUFBO0VDM1RKO0VEOEZTO0lBZ09MLHVCQUFBO0VDM1RKOztFRmhGRTtJQytZRSx1QkFBQTtFQzNUSjtFRHVGUztJQXVPTCxzQkFBQTtFQzNUSjtBQUNGOztBQUVBLDZDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gRmxvYXQgRWxlbWVudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGZsb2F0IGNsYXNzZXMgYmFzZWQgb24gc2NyZWVuIHNpemVcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGAuaW9uLWZsb2F0LXticH0te3NpZGV9YCBjbGFzc2VzIGZvciBmbG9hdGluZyB0aGUgZWxlbWVudCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50IGFuZCBzaWRlXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1sZWZ0IHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KGxlZnQsICFpbXBvcnRhbnQpO1xuICAgIH1cblxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tcmlnaHQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQocmlnaHQsICFpbXBvcnRhbnQpO1xuICAgIH1cblxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tc3RhcnQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQoc3RhcnQsICFpbXBvcnRhbnQpO1xuICAgIH1cblxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tZW5kIHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KGVuZCwgIWltcG9ydGFudCk7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbnRlbnQ6IFwiXCI7XG5cbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICBAY29udGVudDtcblxuICAvLyAkcm9vdDogI3smfTtcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAvLyAgICN7JHJvb3R9IHtcbiAgLy8gICAgIEBjb250ZW50O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAkcm9vdDogI3smfTtcblxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgfSBAZWxzZSB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgQGF0LXJvb3Qge1xuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICN7JHByb3B9LXRvcDogJHRvcDtcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICByaWdodDogJHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgdG9wOiAkdG9wO1xuICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAkb3RoZXItZGlyOiBudWxsO1xuXG4gIEBpZiAkZGlyID09IGx0ciB7XG4gICAgJG90aGVyLWRpcjogcnRsO1xuICB9IEBlbHNlIHtcbiAgICAkb3RoZXItZGlyOiBsdHI7XG4gIH1cblxuICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgZGlyZWN0aW9uOiAkZGlyO1xuICB9XG4gIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICRleHRyYTogbnVsbDtcblxuICAkeDogbnVsbDtcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1mbG9hdC1tZC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWZsb2F0LWxnLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbG9hdC1lbGVtZW50cy5jc3MubWFwICovXG4iXSwic291cmNlUm9vdCI6IiJ9 */\n/*# sourceMappingURL=text-alignment.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFJO0VBQ0UsNkJBQUE7QUNaTjs7QURlSTtFQUNFLDhCQUFBO0FDWk47O0FEZUk7RUFDRSw0QkFBQTtBQ1pOOztBRGVJO0VBQ0UsMEJBQUE7QUNaTjs7QURlSTtFQUNFLDJCQUFBO0FDWk47O0FEZUk7RUFDRSw0QkFBQTtBQ1pOOztBRGVJO0VBQ0UsOEJBQUE7QUNaTjs7QURlSTtFQUNFLDhCQUFBO0FDWk47O0FDZ0dJO0VGakhBO0lBQ0UsNkJBQUE7RUNxQko7O0VEbEJFO0lBQ0UsOEJBQUE7RUNxQko7O0VEbEJFO0lBQ0UsNEJBQUE7RUNxQko7O0VEbEJFO0lBQ0UsMEJBQUE7RUNxQko7O0VEbEJFO0lBQ0UsMkJBQUE7RUNxQko7O0VEbEJFO0lBQ0UsNEJBQUE7RUNxQko7O0VEbEJFO0lBQ0UsOEJBQUE7RUNxQko7O0VEbEJFO0lBQ0UsOEJBQUE7RUNxQko7QUFDRjtBQzhESTtFRmpIQTtJQUNFLDZCQUFBO0VDc0RKOztFRG5ERTtJQUNFLDhCQUFBO0VDc0RKOztFRG5ERTtJQUNFLDRCQUFBO0VDc0RKOztFRG5ERTtJQUNFLDBCQUFBO0VDc0RKOztFRG5ERTtJQUNFLDJCQUFBO0VDc0RKOztFRG5ERTtJQUNFLDRCQUFBO0VDc0RKOztFRG5ERTtJQUNFLDhCQUFBO0VDc0RKOztFRG5ERTtJQUNFLDhCQUFBO0VDc0RKO0FBQ0Y7QUM2Qkk7RUZqSEE7SUFDRSw2QkFBQTtFQ3VGSjs7RURwRkU7SUFDRSw4QkFBQTtFQ3VGSjs7RURwRkU7SUFDRSw0QkFBQTtFQ3VGSjs7RURwRkU7SUFDRSwwQkFBQTtFQ3VGSjs7RURwRkU7SUFDRSwyQkFBQTtFQ3VGSjs7RURwRkU7SUFDRSw0QkFBQTtFQ3VGSjs7RURwRkU7SUFDRSw4QkFBQTtFQ3VGSjs7RURwRkU7SUFDRSw4QkFBQTtFQ3VGSjtBQUNGO0FDSkk7RUZqSEE7SUFDRSw2QkFBQTtFQ3dISjs7RURySEU7SUFDRSw4QkFBQTtFQ3dISjs7RURySEU7SUFDRSw0QkFBQTtFQ3dISjs7RURySEU7SUFDRSwwQkFBQTtFQ3dISjs7RURySEU7SUFDRSwyQkFBQTtFQ3dISjs7RURySEU7SUFDRSw0QkFBQTtFQ3dISjs7RURySEU7SUFDRSw4QkFBQTtFQ3dISjs7RURySEU7SUFDRSw4QkFBQTtFQ3dISjtBQUNGOztBQUVBLDZDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gVGV4dCBBbGlnbm1lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIHRleHQgYWxpZ25tZW50IGF0dHJpYnV0ZXMgYmFzZWQgb24gc2NyZWVuIHNpemVcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGAuaW9uLXRleHQte2JwfWAgY2xhc3NlcyBmb3IgYWxpZ25pbmcgdGhlIHRleHQgYmFzZWRcbiAgICAvLyBvbiB0aGUgYnJlYWtwb2ludFxuICAgIC5pb24tdGV4dCN7JGluZml4fS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWp1c3RpZnkge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1zdGFydCB7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1lbmQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1yaWdodCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1ub3dyYXAge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS13cmFwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC13cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tdGV4dC1tZC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLXRleHQtbGctY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC1hbGlnbm1lbnQuY3NzLm1hcCAqL1xuIiwiQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */\n/*# sourceMappingURL=text-transformation.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNaTjs7QURlSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNaTjs7QURlSTtFQUNFLHlEQUFBO0VBQ0EscUNBQUE7QUNaTjs7QUNpSEk7RUZqSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDSUo7O0VEREU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDSUo7O0VEREU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDSUo7QUFDRjtBQ2dHSTtFRmpIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNvQko7O0VEakJFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ29CSjs7RURqQkU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDb0JKO0FBQ0Y7QUNnRkk7RUZqSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDb0NKOztFRGpDRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNvQ0o7O0VEakNFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ29DSjtBQUNGO0FDZ0VJO0VGakhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ29ESjs7RURqREU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDb0RKOztFRGpERTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNvREo7QUFDRjs7QUFFQSxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIFRleHQgVHJhbnNmb3JtYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIHRleHQgdHJhbnNmb3JtIGF0dHJpYnV0ZXMgYmFzZWQgb24gc2NyZWVuIHNpemVcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGAuaW9uLXRleHQte2JwfWAgY2xhc3NlcyBmb3IgdHJhbnNmb3JtaW5nIHRoZSB0ZXh0IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tdXBwZXJjYXNlIHtcbiAgICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tbG93ZXJjYXNlIHtcbiAgICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tY2FwaXRhbGl6ZSB7XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi10ZXh0LXVwcGVyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbG93ZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1jYXBpdGFsaXplIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtdHJhbnNmb3JtYXRpb24uY3NzLm1hcCAqL1xuIiwiQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */\n/*# sourceMappingURL=flex-utils.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxpQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsK0JBQUE7QUNQRjs7QURVQTtFQUNFLDZCQUFBO0FDUEY7O0FEVUE7RUFDRSw4QkFBQTtBQ1BGOztBRFVBO0VBQ0UsK0JBQUE7QUNQRjs7QURVQTtFQUNFLDJCQUFBO0FDUEY7O0FEY0E7RUFDRSwwQkFBQTtBQ1hGOztBRGNBO0VBQ0UsNEJBQUE7QUNYRjs7QURjQTtFQUNFLGtDQUFBO0FDWEY7O0FEa0JBO0VBQ0Usc0NBQUE7QUNmRjs7QURrQkE7RUFDRSxrQ0FBQTtBQ2ZGOztBRGtCQTtFQUNFLG9DQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0NBQUE7QUNmRjs7QURrQkE7RUFDRSx5Q0FBQTtBQ2ZGOztBRGtCQTtFQUNFLHdDQUFBO0FDZkY7O0FEc0JBO0VBQ0Usa0NBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsOEJBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsZ0NBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsK0JBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsZ0NBQUE7QUNuQkY7O0FBRUEseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmxleCBVdGlsaXRpZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGZsZXggY2xhc3NlcyB0byBhbGlnbiBmbGV4IGNvbnRhaW5lcnNcbi8vIGFuZCBpdGVtc1xuXG4vLyBBbGlnbiBTZWxmXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuXG4vLyBGbGV4IFdyYXBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24td3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLW5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24td3JhcC1yZXZlcnNlIHtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbn1cblxuXG4vLyBKdXN0aWZ5IENvbnRlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG5cbi8vIEFsaWduIEl0ZW1zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cbiIsIi5pb24tYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxleC11dGlscy5jc3MubWFwICovXG4iXSwic291cmNlUm9vdCI6IiJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvaWNvbi9tYW51bGlmZS1pY29ucy5zY3NzIiwid2VicGFjazovLy4vc3JjL3BhZ2VzL2NsYWltLXRuYy9jbGFpbS10bmMucGFnZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXIuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9zY3JvbGxiYXIvc2Nyb2xsYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvem9vbS96b29tLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztFQUFBO0FBV0EsNERBQUE7QUFHQSx3Q0FBQTtBQU1BLGlEQUFBO0FBT0E7Ozs7O0VBQUE7QUFPQSwyREFBQTtBQUNBLDBEQUFBO0FDaENBO0VBQ0UsNkJBQUE7RUFDQSx3SUFBQTtFQUNBLHluQkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQzBCRjtBRHZCQTtFQUNFLCtFQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUMsc0JBQUE7QUN1Qkg7QUR0QkU7RUFDRSxzQkFBQTtBQ3dCSjs7QURwQkE7RUFDRSxnQkFBQTtBQ3VCRjs7QURyQkE7RUFDRSxnQkFBQTtBQ3dCRjs7QUR0QkE7RUFDRSxnQkFBQTtBQ3lCRjs7QUR2QkE7RUFDRSxnQkFBQTtBQzBCRjs7QUR4QkE7RUFDRSxnQkFBQTtBQzJCRjs7QUR6QkE7RUFDRSxnQkFBQTtBQzRCRjs7QUQxQkE7RUFDRSxnQkFBQTtBQzZCRjs7QUQzQkE7RUFDRSxnQkFBQTtBQzhCRjs7QUQ1QkE7RUFDRSxnQkFBQTtBQytCRjs7QUQ3QkE7RUFDRSxnQkFBQTtBQ2dDRjs7QUQ5QkE7RUFDRSxnQkFBQTtBQ2lDRjs7QUQvQkE7RUFDRSxnQkFBQTtBQ2tDRjs7QURoQ0E7RUFDRSxnQkFBQTtBQ21DRjs7QURqQ0E7RUFDRSxnQkFBQTtBQ29DRjs7QURsQ0E7RUFDRSxnQkFBQTtBQ3FDRjs7QURuQ0E7RUFDRSxnQkFBQTtBQ3NDRjs7QURwQ0E7RUFDRSxnQkFBQTtBQ3VDRjs7QURyQ0E7RUFDRSxnQkFBQTtBQ3dDRjs7QUR0Q0E7RUFDRSxnQkFBQTtBQ3lDRjs7QUR2Q0E7RUFDRSxnQkFBQTtBQzBDRjs7QUR4Q0E7RUFDRSxnQkFBQTtBQzJDRjs7QUR6Q0E7RUFDRSxnQkFBQTtBQzRDRjs7QUQxQ0E7RUFDRSxnQkFBQTtBQzZDRjs7QUQzQ0E7RUFDRSxnQkFBQTtBQzhDRjs7QUQ1Q0E7RUFDRSxnQkFBQTtBQytDRjs7QUQ3Q0E7RUFDRSxnQkFBQTtBQ2dERjs7QUQ5Q0E7RUFDRSxnQkFBQTtBQ2lERjs7QUQvQ0E7RUFDRSxnQkFBQTtBQ2tERjs7QURoREE7RUFDRSxnQkFBQTtBQ21ERjs7QURqREE7RUFDRSxnQkFBQTtBQ29ERjs7QURsREE7RUFDRSxnQkFBQTtBQ3FERjs7QURuREE7RUFDRSxnQkFBQTtBQ3NERjs7QURwREE7RUFDRSxnQkFBQTtBQ3VERjs7QURyREE7RUFDRSxnQkFBQTtBQ3dERjs7QUR0REE7RUFDRSxnQkFBQTtBQ3lERjs7QUR2REE7RUFDRSxnQkFBQTtBQzBERjs7QUR4REE7RUFDRSxnQkFBQTtBQzJERjs7QUR6REE7RUFDRSxnQkFBQTtBQzRERjs7QUQxREE7RUFDRSxnQkFBQTtBQzZERjs7QUQzREE7RUFDRSxnQkFBQTtBQzhERjs7QUQ1REE7RUFDRSxnQkFBQTtBQytERjs7QUQ3REE7RUFDRSxnQkFBQTtBQ2dFRjs7QUQ5REE7RUFDRSxnQkFBQTtBQ2lFRjs7QUQvREE7RUFDRSxnQkFBQTtBQ2tFRjs7QURoRUE7RUFDRSxnQkFBQTtBQ21FRjs7QURqRUE7RUFDRSxnQkFBQTtBQ29FRjs7QURsRUE7RUFDRSxnQkFBQTtBQ3FFRjs7QURuRUE7RUFDRSxnQkFBQTtBQ3NFRjs7QURwRUE7RUFDRSxnQkFBQTtBQ3VFRjs7QURyRUE7RUFDRSxnQkFBQTtBQ3dFRjs7QUR0RUE7RUFDRSxnQkFBQTtBQ3lFRjs7QUR2RUE7RUFDRSxnQkFBQTtBQzBFRjs7QUR4RUE7RUFDRSxnQkFBQTtBQzJFRjs7QUR6RUE7RUFDRSxnQkFBQTtBQzRFRjs7QUQxRUE7RUFDRSxnQkFBQTtBQzZFRjs7QUQzRUE7RUFDRSxnQkFBQTtBQzhFRjs7QUQ1RUE7RUFDRSxnQkFBQTtBQytFRjs7QUQ3RUE7RUFDRSxnQkFBQTtBQ2dGRjs7QUQ5RUE7RUFDRSxnQkFBQTtBQ2lGRjs7QUQvRUE7RUFDRSxnQkFBQTtBQ2tGRjs7QURoRkE7RUFDRSxnQkFBQTtBQ21GRjs7QURqRkE7RUFDRSxnQkFBQTtBQ29GRjs7QURsRkE7RUFDRSxnQkFBQTtBQ3FGRjs7QURuRkE7RUFDRSxnQkFBQTtBQ3NGRjs7QURwRkE7RUFDRSxnQkFBQTtBQ3VGRjs7QURyRkE7RUFDRSxnQkFBQTtBQ3dGRjs7QUR0RkE7RUFDRSxnQkFBQTtBQ3lGRjs7QUR2RkE7RUFDRSxnQkFBQTtBQzBGRjs7QUR4RkE7RUFDRSxnQkFBQTtBQzJGRjs7QUR6RkE7RUFDRSxnQkFBQTtBQzRGRjs7QUQxRkE7RUFDRSxnQkFBQTtBQzZGRjs7QUQzRkE7RUFDRSxnQkFBQTtBQzhGRjs7QUQ1RkE7RUFDRSxnQkFBQTtBQytGRjs7QUQ3RkE7RUFDRSxnQkFBQTtBQ2dHRjs7QUQ5RkE7RUFDRSxnQkFBQTtBQ2lHRjs7QUQvRkE7RUFDRSxnQkFBQTtBQ2tHRjs7QURoR0E7RUFDRSxnQkFBQTtBQ21HRjs7QURqR0E7RUFDRSxnQkFBQTtBQ29HRjs7QURsR0E7RUFDRSxnQkFBQTtBQ3FHRjs7QURuR0E7RUFDRSxnQkFBQTtBQ3NHRjs7QURwR0E7RUFDRSxnQkFBQTtBQ3VHRjs7QURyR0E7RUFDRSxnQkFBQTtBQ3dHRjs7QUR0R0E7RUFDRSxnQkFBQTtBQ3lHRjs7QUR2R0E7RUFDRSxnQkFBQTtBQzBHRjs7QUR4R0E7RUFDRSxnQkFBQTtBQzJHRjs7QUR6R0E7RUFDRSxnQkFBQTtBQzRHRjs7QUQxR0E7RUFDRSxnQkFBQTtBQzZHRjs7QUQzR0E7RUFDRSxnQkFBQTtBQzhHRjs7QUQ1R0E7RUFDRSxnQkFBQTtBQytHRjs7QUQ3R0E7RUFDRSxnQkFBQTtBQ2dIRjs7QUQ5R0E7RUFDRSxnQkFBQTtBQ2lIRjs7QUQvR0E7RUFDRSxnQkFBQTtBQ2tIRjs7QURoSEE7RUFDRSxnQkFBQTtBQ21IRjs7QURqSEE7RUFDRSxnQkFBQTtBQ29IRjs7QURsSEE7RUFDRSxnQkFBQTtBQ3FIRjs7QURuSEE7RUFDRSxnQkFBQTtBQ3NIRjs7QURwSEE7RUFDRSxnQkFBQTtBQ3VIRjs7QURySEE7RUFDRSxnQkFBQTtBQ3dIRjs7QUR0SEE7RUFDRSxnQkFBQTtBQ3lIRjs7QUR2SEE7RUFDRSxnQkFBQTtBQzBIRjs7QUR4SEE7RUFDRSxnQkFBQTtBQzJIRjs7QUR6SEE7RUFDRSxnQkFBQTtBQzRIRjs7QUQxSEE7RUFDRSxnQkFBQTtBQzZIRjs7QUQzSEE7RUFDRSxnQkFBQTtBQzhIRjs7QUQ1SEE7RUFDRSxnQkFBQTtBQytIRjs7QUQ3SEE7RUFDRSxnQkFBQTtBQ2dJRjs7QUQ5SEE7RUFDRSxnQkFBQTtBQ2lJRjs7QUQvSEE7RUFDRSxnQkFBQTtBQ2tJRjs7QURoSUE7RUFDRSxnQkFBQTtBQ21JRjs7QURqSUE7RUFDRSxnQkFBQTtBQ29JRjs7QURsSUE7RUFDRSxnQkFBQTtBQ3FJRjs7QURuSUE7RUFDRSxnQkFBQTtBQ3NJRjs7QURwSUE7RUFDRSxnQkFBQTtBQ3VJRjs7QURySUE7RUFDRSxnQkFBQTtBQ3dJRjs7QUR0SUE7RUFDRSxnQkFBQTtBQ3lJRjs7QUR2SUE7RUFDRSxnQkFBQTtBQzBJRjs7QUR4SUE7RUFDRSxnQkFBQTtBQzJJRjs7QUR6SUE7RUFDRSxnQkFBQTtBQzRJRjs7QUQxSUE7RUFDRSxnQkFBQTtBQzZJRjs7QUQzSUE7RUFDRSxnQkFBQTtBQzhJRjs7QUQ1SUE7RUFDRSxnQkFBQTtBQytJRjs7QUQ3SUE7RUFDRSxnQkFBQTtBQ2dKRjs7QUQ5SUE7RUFDRSxnQkFBQTtBQ2lKRjs7QUQvSUE7RUFDRSxnQkFBQTtBQ2tKRjs7QURoSkE7RUFDRSxnQkFBQTtBQ21KRjs7QURqSkE7RUFDRSxnQkFBQTtBQ29KRjs7QURsSkE7RUFDRSxnQkFBQTtBQ3FKRjs7QURuSkE7RUFDRSxnQkFBQTtBQ3NKRjs7QURwSkE7RUFDRSxnQkFBQTtBQ3VKRjs7QURySkE7RUFDRSxnQkFBQTtBQ3dKRjs7QUR0SkE7RUFDRSxnQkFBQTtBQ3lKRjs7QUR2SkE7RUFDRSxnQkFBQTtBQzBKRjs7QUR4SkE7RUFDRSxnQkFBQTtBQzJKRjs7QUR6SkE7RUFDRSxnQkFBQTtBQzRKRjs7QUQxSkE7RUFDRSxnQkFBQTtBQzZKRjs7QUQzSkE7RUFDRSxnQkFBQTtBQzhKRjs7QUQ1SkE7RUFDRSxnQkFBQTtBQytKRjs7QUQ3SkE7RUFDRSxnQkFBQTtBQ2dLRjs7QUQ5SkE7RUFDRSxnQkFBQTtBQ2lLRjs7QUQvSkE7RUFDRSxnQkFBQTtBQ2tLRjs7QURoS0E7RUFDRSxnQkFBQTtBQ21LRjs7QURqS0E7RUFDRSxnQkFBQTtBQ29LRjs7QURsS0E7RUFDRSxnQkFBQTtBQ3FLRjs7QURuS0E7RUFDRSxnQkFBQTtBQ3NLRjs7QURwS0E7RUFDRSxnQkFBQTtBQ3VLRjs7QURyS0E7RUFDRSxnQkFBQTtBQ3dLRjs7QUR0S0E7RUFDRSxnQkFBQTtBQ3lLRjs7QUR2S0E7RUFDRSxnQkFBQTtBQzBLRjs7QUR4S0E7RUFDRSxnQkFBQTtBQzJLRjs7QUR6S0E7RUFDRSxnQkFBQTtBQzRLRjs7QUQxS0E7RUFDRSxnQkFBQTtBQzZLRjs7QUQzS0E7RUFDRSxnQkFBQTtBQzhLRjs7QUQ1S0E7RUFDRSxnQkFBQTtBQytLRjs7QUQ3S0E7RUFDRSxnQkFBQTtBQ2dMRjs7QUQ5S0E7RUFDRSxnQkFBQTtBQ2lMRjs7QUQvS0E7RUFDRSxnQkFBQTtBQ2tMRjs7QURoTEE7RUFDRSxnQkFBQTtBQ21MRjs7QURqTEE7RUFDRSxnQkFBQTtBQ29MRjs7QURsTEE7RUFDRSxnQkFBQTtBQ3FMRjs7QURuTEE7RUFDRSxnQkFBQTtBQ3NMRjs7QURwTEE7RUFDRSxnQkFBQTtBQ3VMRjs7QURyTEE7RUFDRSxnQkFBQTtBQ3dMRjs7QUR0TEE7RUFDRSxnQkFBQTtBQ3lMRjs7QUR2TEE7RUFDRSxnQkFBQTtBQzBMRjs7QUR4TEE7RUFDRSxnQkFBQTtBQzJMRjs7QUR6TEE7RUFDRSxnQkFBQTtBQzRMRjs7QUQxTEE7RUFDRSxnQkFBQTtBQzZMRjs7QUQzTEE7RUFDRSxnQkFBQTtBQzhMRjs7QUQ1TEE7RUFDRSxnQkFBQTtBQytMRjs7QUQ3TEE7RUFDRSxnQkFBQTtBQ2dNRjs7QUQ5TEE7RUFDRSxnQkFBQTtBQ2lNRjs7QUQvTEE7RUFDRSxnQkFBQTtBQ2tNRjs7QURoTUE7RUFDRSxnQkFBQTtBQ21NRjs7QURqTUE7RUFDRSxnQkFBQTtBQ29NRjs7QURsTUE7RUFDRSxnQkFBQTtBQ3FNRjs7QURuTUE7RUFDRSxnQkFBQTtBQ3NNRjs7QURwTUE7RUFDRSxnQkFBQTtBQ3VNRjs7QURyTUE7RUFDRSxnQkFBQTtBQ3dNRjs7QUR0TUE7RUFDRSxnQkFBQTtBQ3lNRjs7QUR2TUE7RUFDRSxnQkFBQTtBQzBNRjs7QUR4TUE7RUFDRSxnQkFBQTtBQzJNRjs7QUR6TUE7RUFDRSxnQkFBQTtBQzRNRjs7QUQxTUE7RUFDRSxnQkFBQTtBQzZNRjs7QUQzTUE7RUFDRSxnQkFBQTtBQzhNRjs7QUQ1TUE7RUFDRSxnQkFBQTtBQytNRjs7QUQ3TUE7RUFDRSxnQkFBQTtBQ2dORjs7QUQ5TUE7RUFDRSxnQkFBQTtBQ2lORjs7QUQvTUE7RUFDRSxnQkFBQTtBQ2tORjs7QURoTkE7RUFDRSxnQkFBQTtBQ21ORjs7QURqTkE7RUFDRSxnQkFBQTtBQ29ORjs7QURsTkE7RUFDRSxnQkFBQTtBQ3FORjs7QURuTkE7RUFDRSxnQkFBQTtBQ3NORjs7QURwTkE7RUFDRSxnQkFBQTtBQ3VORjs7QURyTkE7RUFDRSxnQkFBQTtBQ3dORjs7QUR0TkE7RUFDRSxnQkFBQTtBQ3lORjs7QUR2TkE7RUFDRSxnQkFBQTtBQzBORjs7QUR4TkE7RUFDRSxnQkFBQTtBQzJORjs7QUR6TkE7RUFDRSxnQkFBQTtBQzRORjs7QUQxTkE7RUFDRSxnQkFBQTtBQzZORjs7QUQzTkE7RUFDRSxnQkFBQTtBQzhORjs7QUQ1TkE7RUFDRSxnQkFBQTtBQytORjs7QUQ3TkE7RUFDRSxnQkFBQTtBQ2dPRjs7QUQ5TkE7RUFDRSxnQkFBQTtBQ2lPRjs7QUQvTkE7RUFDRSxnQkFBQTtBQ2tPRjs7QURoT0E7RUFDRSxnQkFBQTtBQ21PRjs7QURqT0E7RUFDRSxnQkFBQTtBQ29PRjs7QURsT0E7RUFDRSxnQkFBQTtBQ3FPRjs7QURuT0E7RUFDRSxnQkFBQTtBQ3NPRjs7QURwT0E7RUFDRSxnQkFBQTtBQ3VPRjs7QURyT0E7RUFDRSxnQkFBQTtBQ3dPRjs7QUR0T0E7RUFDRSxnQkFBQTtBQ3lPRjs7QUR2T0E7RUFDRSxnQkFBQTtBQzBPRjs7QUR4T0E7RUFDRSxnQkFBQTtBQzJPRjs7QUR6T0E7RUFDRSxnQkFBQTtBQzRPRjs7QUQxT0E7RUFDRSxnQkFBQTtBQzZPRjs7QUQzT0E7RUFDRSxnQkFBQTtBQzhPRjs7QUQ1T0E7RUFDRSxnQkFBQTtBQytPRjs7QUQ3T0E7RUFDRSxnQkFBQTtBQ2dQRjs7QUQ5T0E7RUFDRSxnQkFBQTtBQ2lQRjs7QUQvT0E7RUFDRSxnQkFBQTtBQ2tQRjs7QURoUEE7RUFDRSxnQkFBQTtBQ21QRjs7QURqUEE7RUFDRSxnQkFBQTtBQ29QRjs7QURsUEE7RUFDRSxnQkFBQTtBQ3FQRjs7QURuUEE7RUFDRSxnQkFBQTtBQ3NQRjs7QURwUEE7RUFDRSxnQkFBQTtBQ3VQRjs7QURyUEE7RUFDRSxnQkFBQTtBQ3dQRjs7QUR0UEE7RUFDRSxnQkFBQTtBQ3lQRjs7QUR2UEE7RUFDRSxnQkFBQTtBQzBQRjs7QUR4UEE7RUFDRSxnQkFBQTtBQzJQRjs7QUR6UEE7RUFDRSxnQkFBQTtBQzRQRjs7QUQxUEE7RUFDRSxnQkFBQTtBQzZQRjs7QUQzUEE7RUFDRSxnQkFBQTtBQzhQRjs7QUQ1UEE7RUFDRSxnQkFBQTtBQytQRjs7QUQ3UEE7RUFDRSxnQkFBQTtBQ2dRRjs7QUQ5UEE7RUFDRSxnQkFBQTtBQ2lRRjs7QUQvUEE7RUFDRSxnQkFBQTtBQ2tRRjs7QURoUUE7RUFDRSxnQkFBQTtBQ21RRjs7QURqUUE7RUFDRSxnQkFBQTtBQ29RRjs7QURsUUE7RUFDRSxnQkFBQTtBQ3FRRjs7QURuUUE7RUFDRSxnQkFBQTtBQ3NRRjs7QURwUUE7RUFDRSxnQkFBQTtBQ3VRRjs7QURyUUE7RUFDRSxnQkFBQTtBQ3dRRjs7QUR0UUE7RUFDRSxnQkFBQTtBQ3lRRjs7QUR2UUE7RUFDRSxnQkFBQTtBQzBRRjs7QUR4UUE7RUFDRSxnQkFBQTtBQzJRRjs7QUR6UUE7RUFDRSxnQkFBQTtBQzRRRjs7QUQxUUE7RUFDRSxnQkFBQTtBQzZRRjs7QUQzUUE7RUFDRSxnQkFBQTtBQzhRRjs7QUQ1UUE7RUFDRSxnQkFBQTtBQytRRjs7QUQ3UUE7RUFDRSxnQkFBQTtBQ2dSRjs7QUQ5UUE7RUFDRSxnQkFBQTtBQ2lSRjs7QUQvUUE7RUFDRSxnQkFBQTtBQ2tSRjs7QURoUkE7RUFDRSxnQkFBQTtBQ21SRjs7QURqUkE7RUFDRSxnQkFBQTtBQ29SRjs7QURsUkE7RUFDRSxnQkFBQTtBQ3FSRjs7QURuUkE7RUFDRSxnQkFBQTtBQ3NSRjs7QURwUkE7RUFDRSxnQkFBQTtBQ3VSRjs7QURyUkE7RUFDRSxnQkFBQTtBQ3dSRjs7QUR0UkE7RUFDRSxnQkFBQTtBQ3lSRjs7QUR2UkE7RUFDRSxnQkFBQTtBQzBSRjs7QUR4UkE7RUFDRSxnQkFBQTtBQzJSRjs7QUR6UkE7RUFDRSxnQkFBQTtBQzRSRjs7QUQxUkE7RUFDRSxnQkFBQTtBQzZSRjs7QUQzUkE7RUFDRSxnQkFBQTtBQzhSRjs7QUQ1UkE7RUFDRSxnQkFBQTtBQytSRjs7QUQ3UkE7RUFDRSxnQkFBQTtBQ2dTRjs7QUQ5UkE7RUFDRSxnQkFBQTtBQ2lTRjs7QUQvUkE7RUFDRSxnQkFBQTtBQ2tTRjs7QURoU0E7RUFDRSxnQkFBQTtBQ21TRjs7QURqU0E7RUFDRSxnQkFBQTtBQ29TRjs7QURsU0E7RUFDRSxnQkFBQTtBQ3FTRjs7QURuU0E7RUFDRSxnQkFBQTtBQ3NTRjs7QURwU0E7RUFDRSxnQkFBQTtBQ3VTRjs7QURyU0E7RUFDRSxnQkFBQTtBQ3dTRjs7QUR0U0E7RUFDRSxnQkFBQTtBQ3lTRjs7QUR2U0E7RUFDRSxnQkFBQTtBQzBTRjs7QUR4U0E7RUFDRSxnQkFBQTtBQzJTRjs7QUR6U0E7RUFDRSxnQkFBQTtBQzRTRjs7QUQxU0E7RUFDRSxnQkFBQTtBQzZTRjs7QUQzU0E7RUFDRSxnQkFBQTtBQzhTRjs7QUQ1U0E7RUFDRSxnQkFBQTtBQytTRjs7QUQ3U0E7RUFDRSxnQkFBQTtBQ2dURjs7QUQ5U0E7RUFDRSxnQkFBQTtBQ2lURjs7QUQvU0E7RUFDRSxnQkFBQTtBQ2tURjs7QURoVEE7RUFDRSxnQkFBQTtBQ21URjs7QURqVEE7RUFDRSxnQkFBQTtBQ29URjs7QURsVEE7RUFDRSxnQkFBQTtBQ3FURjs7QURuVEE7RUFDRSxnQkFBQTtBQ3NURjs7QURwVEE7RUFDRSxnQkFBQTtBQ3VURjs7QURyVEE7RUFDRSxnQkFBQTtBQ3dURjs7QUR0VEE7RUFDRSxnQkFBQTtBQ3lURjs7QUR2VEE7RUFDRSxnQkFBQTtBQzBURjs7QUR4VEE7RUFDRSxnQkFBQTtBQzJURjs7QUR6VEE7RUFDRSxnQkFBQTtBQzRURjs7QUQxVEE7RUFDRSxnQkFBQTtBQzZURjs7QUQzVEE7RUFDRSxnQkFBQTtBQzhURjs7QUQ1VEE7RUFDRSxnQkFBQTtBQytURjs7QUQ3VEE7RUFDRSxnQkFBQTtBQ2dVRjs7QUQ5VEE7RUFDRSxnQkFBQTtBQ2lVRjs7QUQvVEE7RUFDRSxnQkFBQTtBQ2tVRjs7QURoVUE7RUFDRSxnQkFBQTtBQ21VRjs7QURqVUE7RUFDRSxnQkFBQTtBQ29VRjs7QURsVUE7RUFDRSxnQkFBQTtBQ3FVRjs7QURuVUE7RUFDRSxnQkFBQTtBQ3NVRjs7QURwVUE7RUFDRSxnQkFBQTtBQ3VVRjs7QURyVUE7RUFDRSxnQkFBQTtBQ3dVRjs7QUR0VUE7RUFDRSxnQkFBQTtBQ3lVRjs7QUR2VUE7RUFDRSxnQkFBQTtBQzBVRjs7QUR4VUE7RUFDRSxnQkFBQTtBQzJVRjs7QUR6VUE7RUFDRSxnQkFBQTtBQzRVRjs7QUQxVUE7RUFDRSxnQkFBQTtBQzZVRjs7QUQzVUE7RUFDRSxnQkFBQTtBQzhVRjs7QUQ1VUE7RUFDRSxnQkFBQTtBQytVRjs7QUQ3VUE7RUFDRSxnQkFBQTtBQ2dWRjs7QUQ5VUE7RUFDRSxnQkFBQTtBQ2lWRjs7QUQvVUE7RUFDRSxnQkFBQTtBQ2tWRjs7QURoVkE7RUFDRSxnQkFBQTtBQ21WRjs7QURqVkE7RUFDRSxnQkFBQTtBQ29WRjs7QURsVkE7RUFDRSxnQkFBQTtBQ3FWRjs7QURuVkE7RUFDRSxnQkFBQTtBQ3NWRjs7QURwVkE7RUFDRSxnQkFBQTtBQ3VWRjs7QURyVkE7RUFDRSxnQkFBQTtBQ3dWRjs7QUR0VkE7RUFDRSxnQkFBQTtBQ3lWRjs7QUR2VkE7RUFDRSxnQkFBQTtBQzBWRjs7QUR4VkE7RUFDRSxnQkFBQTtBQzJWRjs7QUR6VkE7RUFDRSxnQkFBQTtBQzRWRjs7QUQxVkE7RUFDRSxnQkFBQTtBQzZWRjs7QUQzVkE7RUFDRSxnQkFBQTtBQzhWRjs7QUQ1VkE7RUFDRSxnQkFBQTtBQytWRjs7QUQ3VkE7RUFDRSxnQkFBQTtBQ2dXRjs7QUQ5VkE7RUFDRSxnQkFBQTtBQ2lXRjs7QUQvVkE7RUFDRSxnQkFBQTtBQ2tXRjs7QURoV0E7RUFDRSxnQkFBQTtBQ21XRjs7QURqV0E7RUFDRSxnQkFBQTtBQ29XRjs7QURsV0E7RUFDRSxnQkFBQTtBQ3FXRjs7QURuV0E7RUFDRSxnQkFBQTtBQ3NXRjs7QURwV0E7RUFDRSxnQkFBQTtBQ3VXRjs7QURyV0E7RUFDRSxnQkFBQTtBQ3dXRjs7QUR0V0E7RUFDRSxnQkFBQTtBQ3lXRjs7QUR2V0E7RUFDRSxnQkFBQTtBQzBXRjs7QUR4V0E7RUFDRSxnQkFBQTtBQzJXRjs7QUR6V0E7RUFDRSxnQkFBQTtBQzRXRjs7QUQxV0E7RUFDRSxnQkFBQTtBQzZXRjs7QUQzV0E7RUFDRSxnQkFBQTtBQzhXRjs7QUQ1V0E7RUFDRSxnQkFBQTtBQytXRjs7QUQ3V0E7RUFDRSxnQkFBQTtBQ2dYRjs7QUQ5V0E7RUFDRSxnQkFBQTtBQ2lYRjs7QUQvV0E7RUFDRSxnQkFBQTtBQ2tYRjs7QURoWEE7RUFDRSxnQkFBQTtBQ21YRjs7QURqWEE7RUFDRSxnQkFBQTtBQ29YRjs7QURsWEE7RUFDRSxnQkFBQTtBQ3FYRjs7QURuWEE7RUFDRSxnQkFBQTtBQ3NYRjs7QURwWEE7RUFDRSxnQkFBQTtBQ3VYRjs7QURyWEE7RUFDRSxnQkFBQTtBQ3dYRjs7QUR0WEE7RUFDRSxnQkFBQTtBQ3lYRjs7QUR2WEE7RUFDRSxnQkFBQTtBQzBYRjs7QUR4WEE7RUFDRSxnQkFBQTtBQzJYRjs7QUR6WEE7RUFDRSxnQkFBQTtBQzRYRjs7QUQxWEE7RUFDRSxnQkFBQTtBQzZYRjs7QUQzWEE7RUFDRSxnQkFBQTtBQzhYRjs7QUQ1WEE7RUFDRSxnQkFBQTtBQytYRjs7QUQ3WEE7RUFDRSxnQkFBQTtBQ2dZRjs7QUQ5WEE7RUFDRSxnQkFBQTtBQ2lZRjs7QUQvWEE7RUFDRSxnQkFBQTtBQ2tZRjs7QURoWUE7RUFDRSxnQkFBQTtBQ21ZRjs7QURqWUE7RUFDRSxnQkFBQTtBQ29ZRjs7QURsWUE7RUFDRSxnQkFBQTtBQ3FZRjs7QURuWUE7RUFDRSxnQkFBQTtBQ3NZRjs7QURwWUE7RUFDRSxnQkFBQTtBQ3VZRjs7QURyWUE7RUFDRSxnQkFBQTtBQ3dZRjs7QUR0WUE7RUFDRSxnQkFBQTtBQ3lZRjs7QUR2WUE7RUFDRSxnQkFBQTtBQzBZRjs7QUR4WUE7RUFDRSxnQkFBQTtBQzJZRjs7QUR6WUE7RUFDRSxnQkFBQTtBQzRZRjs7QUQxWUE7RUFDRSxnQkFBQTtBQzZZRjs7QUQzWUE7RUFDRSxnQkFBQTtBQzhZRjs7QUQ1WUE7RUFDRSxnQkFBQTtBQytZRjs7QUQ3WUE7RUFDRSxnQkFBQTtBQ2daRjs7QUQ5WUE7RUFDRSxnQkFBQTtBQ2laRjs7QUQvWUE7RUFDRSxnQkFBQTtBQ2taRjs7QURoWkE7RUFDRSxnQkFBQTtBQ21aRjs7QURqWkE7RUFDRSxnQkFBQTtBQ29aRjs7QURsWkE7RUFDRSxnQkFBQTtBQ3FaRjs7QURuWkE7RUFDRSxnQkFBQTtBQ3NaRjs7QURwWkE7RUFDRSxnQkFBQTtBQ3VaRjs7QURyWkE7RUFDRSxnQkFBQTtBQ3daRjs7QUR0WkE7RUFDRSxnQkFBQTtBQ3laRjs7QUR2WkE7RUFDRSxnQkFBQTtBQzBaRjs7QUR4WkE7RUFDRSxnQkFBQTtBQzJaRjs7QUR6WkE7RUFDRSxnQkFBQTtBQzRaRjs7QUQxWkE7RUFDRSxnQkFBQTtBQzZaRjs7QUQzWkE7RUFDRSxnQkFBQTtBQzhaRjs7QUQ1WkE7RUFDRSxnQkFBQTtBQytaRjs7QUQ3WkE7RUFDRSxnQkFBQTtBQ2dhRjs7QUQ5WkE7RUFDRSxnQkFBQTtBQ2lhRjs7QUQvWkE7RUFDRSxnQkFBQTtBQ2thRjs7QURoYUE7RUFDRSxnQkFBQTtBQ21hRjs7QURqYUE7RUFDRSxnQkFBQTtBQ29hRjs7QURsYUE7RUFDRSxnQkFBQTtBQ3FhRjs7QURuYUE7RUFDRSxnQkFBQTtBQ3NhRjs7QURwYUE7RUFDRSxnQkFBQTtBQ3VhRjs7QURyYUE7RUFDRSxnQkFBQTtBQ3dhRjs7QUR0YUE7RUFDRSxnQkFBQTtBQ3lhRjs7QUR2YUE7RUFDRSxnQkFBQTtBQzBhRjs7QUR4YUE7RUFDRSxnQkFBQTtBQzJhRjs7QUR6YUE7RUFDRSxnQkFBQTtBQzRhRjs7QUQxYUE7RUFDRSxnQkFBQTtBQzZhRjs7QUQzYUE7RUFDRSxnQkFBQTtBQzhhRjs7QUQ1YUE7RUFDRSxnQkFBQTtBQythRjs7QUQ3YUE7RUFDRSxnQkFBQTtBQ2diRjs7QUQ5YUE7RUFDRSxnQkFBQTtBQ2liRjs7QUQvYUE7RUFDRSxnQkFBQTtBQ2tiRjs7QURoYkE7RUFDRSxnQkFBQTtBQ21iRjs7QURqYkE7RUFDRSxnQkFBQTtBQ29iRjs7QURsYkE7RUFDRSxnQkFBQTtBQ3FiRjs7QURuYkE7RUFDRSxnQkFBQTtBQ3NiRjs7QURwYkE7RUFDRSxnQkFBQTtBQ3ViRjs7QURyYkE7RUFDRSxnQkFBQTtBQ3diRjs7QUR0YkE7RUFDRSxnQkFBQTtBQ3liRjs7QUR2YkE7RUFDRSxnQkFBQTtBQzBiRjs7QUR4YkE7RUFDRSxnQkFBQTtBQzJiRjs7QUR6YkE7RUFDRSxnQkFBQTtBQzRiRjs7QUQxYkE7RUFDRSxnQkFBQTtBQzZiRjs7QUQzYkE7RUFDRSxnQkFBQTtBQzhiRjs7QUQ1YkE7RUFDRSxnQkFBQTtBQytiRjs7QUQ3YkE7RUFDRSxnQkFBQTtBQ2djRjs7QUQ5YkE7RUFDRSxnQkFBQTtBQ2ljRjs7QUQvYkE7RUFDRSxnQkFBQTtBQ2tjRjs7QURoY0E7RUFDRSxnQkFBQTtBQ21jRjs7QURqY0E7RUFDRSxnQkFBQTtBQ29jRjs7QURsY0E7RUFDRSxnQkFBQTtBQ3FjRjs7QURuY0E7RUFDRSxnQkFBQTtBQ3NjRjs7QURwY0E7RUFDRSxnQkFBQTtBQ3VjRjs7QURyY0E7RUFDRSxnQkFBQTtBQ3djRjs7QUR0Y0E7RUFDRSxnQkFBQTtBQ3ljRjs7QUR2Y0E7RUFDRSxnQkFBQTtBQzBjRjs7QUR4Y0E7RUFDRSxnQkFBQTtBQzJjRjs7QUR6Y0E7RUFDRSxnQkFBQTtBQzRjRjs7QUQxY0E7RUFDRSxnQkFBQTtBQzZjRjs7QUQzY0E7RUFDRSxnQkFBQTtBQzhjRjs7QUQ1Y0E7RUFDRSxnQkFBQTtBQytjRjs7QUQ3Y0E7RUFDRSxnQkFBQTtBQ2dkRjs7QUQ5Y0E7RUFDRSxnQkFBQTtBQ2lkRjs7QUQvY0E7RUFDRSxnQkFBQTtBQ2tkRjs7QURoZEE7RUFDRSxnQkFBQTtBQ21kRjs7QURqZEE7RUFDRSxnQkFBQTtBQ29kRjs7QURsZEE7RUFDRSxnQkFBQTtBQ3FkRjs7QURuZEE7RUFDRSxnQkFBQTtBQ3NkRjs7QURwZEE7RUFDRSxnQkFBQTtBQ3VkRjs7QURyZEE7RUFDRSxnQkFBQTtBQ3dkRjs7QUR0ZEE7RUFDRSxnQkFBQTtBQ3lkRjs7QUR2ZEE7RUFDRSxnQkFBQTtBQzBkRjs7QUR4ZEE7RUFDRSxnQkFBQTtBQzJkRjs7QUR6ZEE7RUFDRSxnQkFBQTtBQzRkRjs7QUQxZEE7RUFDRSxnQkFBQTtBQzZkRjs7QUQzZEE7RUFDRSxnQkFBQTtBQzhkRjs7QUQ1ZEE7RUFDRSxnQkFBQTtBQytkRjs7QUQ3ZEE7RUFDRSxnQkFBQTtBQ2dlRjs7QUQ5ZEE7RUFDRSxnQkFBQTtBQ2llRjs7QUQvZEE7RUFDRSxnQkFBQTtBQ2tlRjs7QURoZUE7RUFDRSxnQkFBQTtBQ21lRjs7QURqZUE7RUFDRSxnQkFBQTtBQ29lRjs7QURsZUE7RUFDRSxnQkFBQTtBQ3FlRjs7QURuZUE7RUFDRSxnQkFBQTtBQ3NlRjs7QURwZUE7RUFDRSxnQkFBQTtBQ3VlRjs7QURyZUE7RUFDRSxnQkFBQTtBQ3dlRjs7QUR0ZUE7RUFDRSxnQkFBQTtBQ3llRjs7QUR2ZUE7RUFDRSxnQkFBQTtBQzBlRjs7QUR4ZUE7RUFDRSxnQkFBQTtBQzJlRjs7QUR6ZUE7RUFDRSxnQkFBQTtBQzRlRjs7QUQxZUE7RUFDRSxnQkFBQTtBQzZlRjs7QUQzZUE7RUFDRSxnQkFBQTtBQzhlRjs7QUQ1ZUE7RUFDRSxnQkFBQTtBQytlRjs7QUQ3ZUE7RUFDRSxnQkFBQTtBQ2dmRjs7QUQ5ZUE7RUFDRSxnQkFBQTtBQ2lmRjs7QUQvZUE7RUFDRSxnQkFBQTtBQ2tmRjs7QURoZkE7RUFDRSxnQkFBQTtBQ21mRjs7QURqZkE7RUFDRSxnQkFBQTtBQ29mRjs7QURsZkE7RUFDRSxnQkFBQTtBQ3FmRjs7QURuZkE7RUFDRSxnQkFBQTtBQ3NmRjs7QURwZkE7RUFDRSxnQkFBQTtBQ3VmRjs7QURyZkE7RUFDRSxnQkFBQTtBQ3dmRjs7QUR0ZkE7RUFDRSxnQkFBQTtBQ3lmRjs7QUR2ZkE7RUFDRSxnQkFBQTtBQzBmRjs7QUR4ZkE7RUFDRSxnQkFBQTtBQzJmRjs7QUR6ZkE7RUFDRSxnQkFBQTtBQzRmRjs7QUQxZkE7RUFDRSxnQkFBQTtBQzZmRjs7QUQzZkE7RUFDRSxnQkFBQTtBQzhmRjs7QUQ1ZkE7RUFDRSxnQkFBQTtBQytmRjs7QUQ3ZkE7RUFDRSxnQkFBQTtBQ2dnQkY7O0FEOWZBO0VBQ0UsZ0JBQUE7QUNpZ0JGOztBRC9mQTtFQUNFLGdCQUFBO0FDa2dCRjs7QURoZ0JBO0VBQ0UsZ0JBQUE7QUNtZ0JGOztBRGpnQkE7RUFDRSxnQkFBQTtBQ29nQkY7O0FEbGdCQTtFQUNFLGdCQUFBO0FDcWdCRjs7QURuZ0JBO0VBQ0UsZ0JBQUE7QUNzZ0JGOztBRHBnQkE7RUFDRSxnQkFBQTtBQ3VnQkY7O0FEcmdCQTtFQUNFLGdCQUFBO0FDd2dCRjs7QUR0Z0JBO0VBQ0UsZ0JBQUE7QUN5Z0JGOztBRHZnQkE7RUFDRSxnQkFBQTtBQzBnQkY7O0FEeGdCQTtFQUNFLGdCQUFBO0FDMmdCRjs7QUR6Z0JBO0VBQ0UsZ0JBQUE7QUM0Z0JGOztBRDFnQkE7RUFDRSxnQkFBQTtBQzZnQkY7O0FEM2dCQTtFQUNFLGdCQUFBO0FDOGdCRjs7QUQ1Z0JBO0VBQ0UsZ0JBQUE7QUMrZ0JGOztBRDdnQkE7RUFDRSxnQkFBQTtBQ2doQkY7O0FEOWdCQTtFQUNFLGdCQUFBO0FDaWhCRjs7QUQvZ0JBO0VBQ0UsZ0JBQUE7QUNraEJGOztBRGhoQkE7RUFDRSxnQkFBQTtBQ21oQkY7O0FEamhCQTtFQUNFLGdCQUFBO0FDb2hCRjs7QURsaEJBO0VBQ0UsZ0JBQUE7QUNxaEJGOztBRG5oQkE7RUFDRSxnQkFBQTtBQ3NoQkY7O0FEcGhCQTtFQUNFLGdCQUFBO0FDdWhCRjs7QURyaEJBO0VBQ0UsZ0JBQUE7QUN3aEJGOztBRHRoQkE7RUFDRSxnQkFBQTtBQ3loQkY7O0FEdmhCQTtFQUNFLGdCQUFBO0FDMGhCRjs7QUR4aEJBO0VBQ0UsZ0JBQUE7QUMyaEJGOztBRHpoQkE7RUFDRSxnQkFBQTtBQzRoQkY7O0FEMWhCQTtFQUNFLGdCQUFBO0FDNmhCRjs7QUQzaEJBO0VBQ0UsZ0JBQUE7QUM4aEJGOztBRDVoQkE7RUFDRSxnQkFBQTtBQytoQkY7O0FEN2hCQTtFQUNFLGdCQUFBO0FDZ2lCRjs7QUQ5aEJBO0VBQ0UsZ0JBQUE7QUNpaUJGOztBRC9oQkE7RUFDRSxnQkFBQTtBQ2tpQkY7O0FEaGlCQTtFQUNFLGdCQUFBO0FDbWlCRjs7QURqaUJBO0VBQ0UsZ0JBQUE7QUNvaUJGOztBRGxpQkE7RUFDRSxnQkFBQTtBQ3FpQkY7O0FEbmlCQTtFQUNFLGdCQUFBO0FDc2lCRjs7QURwaUJBO0VBQ0UsZ0JBQUE7QUN1aUJGOztBRHJpQkE7RUFDRSxnQkFBQTtBQ3dpQkY7O0FEdGlCQTtFQUNFLGdCQUFBO0FDeWlCRjs7QUR2aUJBO0VBQ0UsZ0JBQUE7QUMwaUJGOztBRHhpQkE7RUFDRSxnQkFBQTtBQzJpQkY7O0FEemlCQTtFQUNFLGdCQUFBO0FDNGlCRjs7QUQxaUJBO0VBQ0UsZ0JBQUE7QUM2aUJGOztBRDNpQkE7RUFDRSxnQkFBQTtBQzhpQkY7O0FENWlCQTtFQUNFLGdCQUFBO0FDK2lCRjs7QUQ3aUJBO0VBQ0UsZ0JBQUE7QUNnakJGOztBRDlpQkE7RUFDRSxnQkFBQTtBQ2lqQkY7O0FEL2lCQTtFQUNFLGdCQUFBO0FDa2pCRjs7QURoakJBO0VBQ0UsZ0JBQUE7QUNtakJGOztBRGpqQkE7RUFDRSxnQkFBQTtBQ29qQkY7O0FEbGpCQTtFQUNFLGdCQUFBO0FDcWpCRjs7QURuakJBO0VBQ0UsZ0JBQUE7QUNzakJGOztBRHBqQkE7RUFDRSxnQkFBQTtBQ3VqQkY7O0FEcmpCQTtFQUNFLGdCQUFBO0FDd2pCRjs7QUR0akJBO0VBQ0UsZ0JBQUE7QUN5akJGOztBRHZqQkE7RUFDRSxnQkFBQTtBQzBqQkY7O0FEeGpCQTtFQUNFLGdCQUFBO0FDMmpCRjs7QUR6akJBO0VBQ0UsZ0JBQUE7QUM0akJGOztBRDFqQkE7RUFDRSxnQkFBQTtBQzZqQkY7O0FEM2pCQTtFQUNFLGdCQUFBO0FDOGpCRjs7QUQ1akJBO0VBQ0UsZ0JBQUE7QUMrakJGOztBRDdqQkE7RUFDRSxnQkFBQTtBQ2drQkY7O0FEOWpCQTtFQUNFLGdCQUFBO0FDaWtCRjs7QUQvakJBO0VBQ0UsZ0JBQUE7QUNra0JGOztBRGhrQkE7RUFDRSxnQkFBQTtBQ21rQkY7O0FEamtCQTtFQUNFLGdCQUFBO0FDb2tCRjs7QURsa0JBO0VBQ0UsZ0JBQUE7QUNxa0JGOztBRG5rQkE7RUFDRSxnQkFBQTtBQ3NrQkY7O0FEcGtCQTtFQUNFLGdCQUFBO0FDdWtCRjs7QURya0JBO0VBQ0UsZ0JBQUE7QUN3a0JGOztBRHRrQkE7RUFDRSxnQkFBQTtBQ3lrQkY7O0FEdmtCQTtFQUNFLGdCQUFBO0FDMGtCRjs7QUR4a0JBO0VBQ0UsZ0JBQUE7QUMya0JGOztBRHprQkE7RUFDRSxnQkFBQTtBQzRrQkY7O0FEMWtCQTtFQUNFLGdCQUFBO0FDNmtCRjs7QUQza0JBO0VBQ0UsZ0JBQUE7QUM4a0JGOztBRDVrQkE7RUFDRSxnQkFBQTtBQytrQkY7O0FEN2tCQTtFQUNFLGdCQUFBO0FDZ2xCRjs7QUQ5a0JBO0VBQ0UsZ0JBQUE7QUNpbEJGOztBRC9rQkE7RUFDRSxnQkFBQTtBQ2tsQkY7O0FEaGxCQTtFQUNFLGdCQUFBO0FDbWxCRjs7QURqbEJBO0VBQ0UsZ0JBQUE7QUNvbEJGOztBRGxsQkE7RUFDRSxnQkFBQTtBQ3FsQkY7O0FEbmxCQTtFQUNFLGdCQUFBO0FDc2xCRjs7QURwbEJBO0VBQ0UsZ0JBQUE7QUN1bEJGOztBRHJsQkE7RUFDRSxnQkFBQTtBQ3dsQkY7O0FEdGxCQTtFQUNFLGdCQUFBO0FDeWxCRjs7QUR2bEJBO0VBQ0UsZ0JBQUE7QUMwbEJGOztBRHhsQkE7RUFDRSxnQkFBQTtBQzJsQkY7O0FEemxCQTtFQUNFLGdCQUFBO0FDNGxCRjs7QUQxbEJBO0VBQ0UsZ0JBQUE7QUM2bEJGOztBRDNsQkE7RUFDRSxnQkFBQTtBQzhsQkY7O0FENWxCQTtFQUNFLGdCQUFBO0FDK2xCRjs7QUQ3bEJBO0VBQ0UsZ0JBQUE7QUNnbUJGOztBRDlsQkE7RUFDRSxnQkFBQTtBQ2ltQkY7O0FEL2xCQTtFQUNFLGdCQUFBO0FDa21CRjs7QURobUJBO0VBQ0UsZ0JBQUE7QUNtbUJGOztBRGptQkE7RUFDRSxnQkFBQTtBQ29tQkY7O0FEbG1CQTtFQUNFLGdCQUFBO0FDcW1CRjs7QURubUJBO0VBQ0UsZ0JBQUE7QUNzbUJGOztBRHBtQkE7RUFDRSxnQkFBQTtBQ3VtQkY7O0FEcm1CQTtFQUNFLGdCQUFBO0FDd21CRjs7QUR0bUJBO0VBQ0UsZ0JBQUE7QUN5bUJGOztBRHZtQkE7RUFDRSxnQkFBQTtBQzBtQkY7O0FEeG1CQTtFQUNFLGdCQUFBO0FDMm1CRjs7QUR6bUJBO0VBQ0UsZ0JBQUE7QUM0bUJGOztBRDFtQkE7RUFDRSxnQkFBQTtBQzZtQkY7O0FEM21CQTtFQUNFLGdCQUFBO0FDOG1CRjs7QUQ1bUJBO0VBQ0UsZ0JBQUE7QUMrbUJGOztBRDdtQkE7RUFDRSxnQkFBQTtBQ2duQkY7O0FEOW1CQTtFQUNFLGdCQUFBO0FDaW5CRjs7QUQvbUJBO0VBQ0UsZ0JBQUE7QUNrbkJGOztBRGhuQkE7RUFDRSxnQkFBQTtBQ21uQkY7O0FEam5CQTtFQUNFLGdCQUFBO0FDb25CRjs7QURsbkJBO0VBQ0UsZ0JBQUE7QUNxbkJGOztBRG5uQkE7RUFDRSxnQkFBQTtBQ3NuQkY7O0FEcG5CQTtFQUNFLGdCQUFBO0FDdW5CRjs7QURybkJBO0VBQ0UsZ0JBQUE7QUN3bkJGOztBRHRuQkE7RUFDRSxnQkFBQTtBQ3luQkY7O0FEdm5CQTtFQUNFLGdCQUFBO0FDMG5CRjs7QUR4bkJBO0VBQ0UsZ0JBQUE7QUMybkJGOztBRHpuQkE7RUFDRSxnQkFBQTtBQzRuQkY7O0FEMW5CQTtFQUNFLGdCQUFBO0FDNm5CRjs7QUQzbkJBO0VBQ0UsZ0JBQUE7QUM4bkJGOztBRDVuQkE7RUFDRSxnQkFBQTtBQytuQkY7O0FEN25CQTtFQUNFLGdCQUFBO0FDZ29CRjs7QUQ5bkJBO0VBQ0UsZ0JBQUE7QUNpb0JGOztBRC9uQkE7RUFDRSxnQkFBQTtBQ2tvQkY7O0FEaG9CQTtFQUNFLGdCQUFBO0FDbW9CRjs7QURqb0JBO0VBQ0UsZ0JBQUE7QUNvb0JGOztBRGxvQkE7RUFDRSxnQkFBQTtBQ3FvQkY7O0FEbm9CQTtFQUNFLGdCQUFBO0FDc29CRjs7QURwb0JBO0VBQ0UsZ0JBQUE7QUN1b0JGOztBRHJvQkE7RUFDRSxnQkFBQTtBQ3dvQkY7O0FEdG9CQTtFQUNFLGdCQUFBO0FDeW9CRjs7QUR2b0JBO0VBQ0UsZ0JBQUE7QUMwb0JGOztBRHhvQkE7RUFDRSxnQkFBQTtBQzJvQkY7O0FEem9CQTtFQUNFLGdCQUFBO0FDNG9CRjs7QUQxb0JBO0VBQ0UsZ0JBQUE7QUM2b0JGOztBRDNvQkE7RUFDRSxnQkFBQTtBQzhvQkY7O0FENW9CQTtFQUNFLGdCQUFBO0FDK29CRjs7QUQ3b0JBO0VBQ0UsZ0JBQUE7QUNncEJGOztBRDlvQkE7RUFDRSxnQkFBQTtBQ2lwQkY7O0FEL29CQTtFQUNFLGdCQUFBO0FDa3BCRjs7QURocEJBO0VBQ0UsZ0JBQUE7QUNtcEJGOztBRGpwQkE7RUFDRSxnQkFBQTtBQ29wQkY7O0FEbHBCQTtFQUNFLGdCQUFBO0FDcXBCRjs7QURucEJBO0VBQ0UsZ0JBQUE7QUNzcEJGOztBRHBwQkE7RUFDRSxnQkFBQTtBQ3VwQkY7O0FEcnBCQTtFQUNFLGdCQUFBO0FDd3BCRjs7QUR0cEJBO0VBQ0UsZ0JBQUE7QUN5cEJGOztBRHZwQkE7RUFDRSxnQkFBQTtBQzBwQkY7O0FEeHBCQTtFQUNFLGdCQUFBO0FDMnBCRjs7QUR6cEJBO0VBQ0UsZ0JBQUE7QUM0cEJGOztBRDFwQkE7RUFDRSxnQkFBQTtBQzZwQkY7O0FEM3BCQTtFQUNFLGdCQUFBO0FDOHBCRjs7QUQ1cEJBO0VBQ0UsZ0JBQUE7QUMrcEJGOztBRDdwQkE7RUFDRSxnQkFBQTtBQ2dxQkY7O0FEOXBCQTtFQUNFLGdCQUFBO0FDaXFCRjs7QUQvcEJBO0VBQ0UsZ0JBQUE7QUNrcUJGOztBRGhxQkE7RUFDRSxnQkFBQTtBQ21xQkY7O0FEanFCQTtFQUNFLGdCQUFBO0FDb3FCRjs7QURscUJBO0VBQ0UsZ0JBQUE7QUNxcUJGOztBRG5xQkE7RUFDRSxnQkFBQTtBQ3NxQkY7O0FEcHFCQTtFQUNFLGdCQUFBO0FDdXFCRjs7QURycUJBO0VBQ0UsZ0JBQUE7QUN3cUJGOztBRHRxQkE7RUFDRSxnQkFBQTtBQ3lxQkY7O0FEdnFCQTtFQUNFLGdCQUFBO0FDMHFCRjs7QUR4cUJBO0VBQ0UsZ0JBQUE7QUMycUJGOztBRHpxQkE7RUFDRSxnQkFBQTtBQzRxQkY7O0FEMXFCQTtFQUNFLGdCQUFBO0FDNnFCRjs7QUQzcUJBO0VBQ0UsZ0JBQUE7QUM4cUJGOztBRDVxQkE7RUFDRSxnQkFBQTtBQytxQkY7O0FEN3FCQTtFQUNFLGdCQUFBO0FDZ3JCRjs7QUQ5cUJBO0VBQ0UsZ0JBQUE7QUNpckJGOztBRC9xQkE7RUFDRSxnQkFBQTtBQ2tyQkY7O0FEaHJCQTtFQUNFLGdCQUFBO0FDbXJCRjs7QURqckJBO0VBQ0UsZ0JBQUE7QUNvckJGOztBRGxyQkE7RUFDRSxnQkFBQTtBQ3FyQkY7O0FEbnJCQTtFQUNFLGdCQUFBO0FDc3JCRjs7QURwckJBO0VBQ0UsZ0JBQUE7QUN1ckJGOztBRHJyQkE7RUFDRSxnQkFBQTtBQ3dyQkY7O0FEdHJCQTtFQUNFLGdCQUFBO0FDeXJCRjs7QUR2ckJBO0VBQ0UsZ0JBQUE7QUMwckJGOztBRHhyQkE7RUFDRSxnQkFBQTtBQzJyQkY7O0FEenJCQTtFQUNFLGdCQUFBO0FDNHJCRjs7QUQxckJBO0VBQ0UsZ0JBQUE7QUM2ckJGOztBRDNyQkE7RUFDRSxnQkFBQTtBQzhyQkY7O0FENXJCQTtFQUNFLGdCQUFBO0FDK3JCRjs7QUQ3ckJBO0VBQ0UsZ0JBQUE7QUNnc0JGOztBRDlyQkE7RUFDRSxnQkFBQTtBQ2lzQkY7O0FEL3JCQTtFQUNFLGdCQUFBO0FDa3NCRjs7QURoc0JBO0VBQ0UsZ0JBQUE7QUNtc0JGOztBRGpzQkE7RUFDRSxnQkFBQTtBQ29zQkY7O0FEbHNCQTtFQUNFLGdCQUFBO0FDcXNCRjs7QURuc0JBO0VBQ0UsZ0JBQUE7QUNzc0JGOztBRHBzQkE7RUFDRSxnQkFBQTtBQ3VzQkY7O0FEcnNCQTtFQUNFLGdCQUFBO0FDd3NCRjs7QUR0c0JBO0VBQ0UsZ0JBQUE7QUN5c0JGOztBRjN0RkEsV0FBQTtBR3hDQTs7Ozs7Ozs7OztFQUFBO0FBY0U7RUFDRSwyQkFBQTtFQUNBLDRzRUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QURtd0ZKO0FDL3ZGRTtFQUNFLDZCQUFBO0FEaXdGSjs7QUM5dkZBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QURpd0ZGOztBQy92RkE7RUFDRSxzQkFBQTtBRGt3RkY7O0FDaHdGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QURtd0ZGOztBQ2p3RkE7O0VBRUUsaUNBQUE7QURvd0ZGOztBQ2x3RkE7RUFDRSxtQkFBQTtBRHF3RkY7QUNwd0ZFO0VBQ0UsbUJBQUE7QURzd0ZKOztBQ253RkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FEc3dGRjs7QUNwd0ZBO0VBQ0Usa0JBQUE7QUR1d0ZGOztBQ3J3RkEsZ0JBQUE7QUFFRTs7RUFFRSxZQUFBO0FEdXdGSjtBQ3B3RkU7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FEc3dGSjs7QUNud0ZBO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtBRHN3RkY7O0FDcHdGQSxlQUFBO0FBRUU7RUFFRSxtQkFBQTtBRHF3Rko7QUNud0ZFOzs7Ozs7OztFQVFFLDRCQUFBO0FEcXdGSjtBQ253RkU7Ozs7O0VBS0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FEcXdGSjtBQ253RkU7RUFDRSwrQkFBQTtBRHF3Rko7QUNud0ZFO0VBQ0UsZ0ZBQUE7QURxd0ZKO0FDbndGRTtFQUNFLGlGQUFBO0FEcXdGSjtBQ253RkU7RUFDRSwrRUFBQTtBRHF3Rko7QUNud0ZFO0VBQ0Usa0ZBQUE7QURxd0ZKOztBQ2p3RkEsYUFBQTtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBLEVBQUEsZ0JBQUE7RUFDQSx3QkFBQSxFQUFBLG1DQUFBO0FEbXdGSjtBQ2x3Rkk7RUFDRSxhQUFBO0FEb3dGTjtBQ2p3RkU7RUFDRSw4QkFBQTtBRG13Rko7O0FDL3ZGRTtFQUNFLDZCQUFBO0FEa3dGSjs7QUM5dkZFO0VBQ0UsNkJBQUE7QURpd0ZKOztBQzd2RkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QURnd0ZKO0FDN3ZGSTtFQUNFLHlEQUFBO0FEK3ZGTjtBQzd2Rkk7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUQrdkZOO0FDM3ZGSTtFQUNFLHdEQUFBO0FENnZGTjtBQzN2Rkk7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7QUQ2dkZOO0FDenZGRTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7QUQydkZKOztBRS82RkU7RUFDRTs7Ozs7Ozs7OztHQUFBO0FGNDdGSjs7QUUvNkZBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FGazdGRjtBRWo3RkU7RUFDRSxVQUFBO0FGbTdGSjtBRWo3RkU7RUFFRSx3QkFBQTtBRms3Rko7O0FFLzZGQSxrQkFBQTtBQUNBOzs7O0VBSUUsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FGazdGRjs7QUVoN0ZBLFlBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBRm03RkY7QUVsN0ZFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBRm83Rko7QUVsN0ZFO0VBQ0UsbUJBQUE7QUZvN0ZKO0FFbDdGRTtFQUNFLG1CQUFBO0FGbzdGSjtBRWw3RkU7RUFDRSxzQkFBQTtBRm83Rko7QUVsN0ZFO0VBQ0Usc0JBQUE7QUZvN0ZKO0FFbDdGRTtFQUNFLHNCQUFBO0FGbzdGSjtBRWw3RkU7RUFDRSxzQkFBQTtBRm83Rko7O0FFajdGQTtFQUNFLHVGQUFBO0VBQ0EseUZBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSw4REFBQTtBRm83RkY7QUVuN0ZXO0VBQ1AsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRnE3Rko7O0FFbjdGRTtFQUNFLGVBQUE7QUZzN0ZKO0FFbjdGRTtFQUNFLHdCQUFBO0FGcTdGSjs7QUVsN0ZBO0VBQ0UsbURBQUE7RUFDQSxxRUFBQTtBRnE3RkY7O0FFbDdGQTs7RUFFRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0FGcTdGRjtBRXA3RkU7O0VBQ0UsMkRBQUE7RUFDQSxjQUFBO0FGdTdGSjtBRXI3RkU7O0VBQ0UsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBRnc3Rko7QUV2N0ZJOztFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7QUYwN0ZOOztBRXA3RkU7O0VBQ0UsNkRBQUE7QUZ3N0ZKO0FFdDdGRTs7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBRnk3Rko7QUV4N0ZJOztFQUNFLHVDQUFBO0FGMjdGTjs7QUV2N0ZBO0VBQ0Usd0NBQUE7QUYwN0ZGOztBRXg3RkEsYUFBQTtBQUNBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBRjI3RkY7QUUxN0ZFO0VBQ0UscUVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FGNDdGSjtBRTE3RkU7RUFDRSwyQkFBQTtBRjQ3Rko7QUUxN0ZFO0VBSUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBRnk3Rko7QUV2N0ZFO0VBSUUsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBRnM3Rko7O0FFbjdGQTtFQUNFLGFBQUE7QUZzN0ZGOztBRzVsR0EsY0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUgrbEdGO0FHOWxHRTtFQUVFLHdCQUFBO0FIK2xHSjtBRzdsR0U7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FIOGxHSjtBRzVsR0U7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FINmxHSjs7QUcxbEdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBSDZsR0Y7O0FHM2xHQTtFQUNFLFlBQUE7QUg4bEdGOztBRzVsR0E7RUFDRSxhQUFBO0FIK2xHRjs7QUl6b0dBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FKNG9HRjtBSTFvR0U7OztFQUdFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FKNG9HSjs7QUl4b0dBO0VBQ0UsWUFBQTtBSjJvR0Y7O0FGN21HQSxjQUFBO0FBQ0E7RUFDQyx5Q0FBQTtFQUNBLHFFQUFBO0FFZ25HRDtBRjdtR0E7RUFDQywwQ0FBQTtFQUNBLDRFQUFBO0FFK21HRDtBRjVtR0E7RUFDQyxtQ0FBQTtFQUNBLHFEQUFBO0VBQ0EseUNBQUE7QUU4bUdEO0FGM21HQTtFQUNDLHlDQUFBO0VBQ0EsMkRBQUE7RUFDQSx5Q0FBQTtBRTZtR0Q7QUYxbUdBO0VBQ0Msb0NBQUE7RUFDQSxzREFBQTtFQUNBLHlDQUFBO0FFNG1HRDtBRnptR0E7RUFDQyxxQ0FBQTtFQUNBLHVEQUFBO0VBQ0EseUNBQUE7QUUybUdEO0FGeG1HQTtFQUNDLDZCQUFBO0VBQ0EsaURBQUE7QUUwbUdEO0FGdG1HQTtFQUNDLGdCQUFBO0FFd21HRDs7QUZybUdBO0VBQ0ksK0JBQUE7QUV3bUdKOztBRnJtR0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUV3bUdKOztBRnJtR0E7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FFd21HRDs7QUZybUdBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUV3bUdEOztBRnJtR0E7RUFDRSxhQUFBO0FFd21HRjs7QUZybUdBLGdCQUFBO0FBQ0E7RUFDRSxxQkFBQTtBRXdtR0Y7O0FGcm1HQTtFQUNDLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBRXdtR0Q7O0FGcm1HQTtFQUNDLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBRXdtR0Q7O0FBOXVHQTtFQUNJLGFBQUE7QUFpdkdKO0FBL3VHSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWl2R1I7QUEvdUdJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBaXZHUjs7QUE3dUdBO0VBQ0ksYUFBQTtBQWd2R0o7QUE5dUdJO0VBQ0kscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBZ3ZHUjtBQTl1R0k7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFndkdSOztBQTV1R0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE4dUdEOztBQTN1R0E7RUFDSSx5Q0FBQTtFQUNILGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7QUE4dUdKOztBQTN1R0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE2dUdEOztBQTF1R0E7RUFDSSx5Q0FBQTtFQUNILGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0csZ0JBQUE7QUE2dUdKIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcCBHbG9iYWwgQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxuICogdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpcyBmaWxlIGNhbiBiZVxuICogdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgQ1NTL1Nhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQgQ1NTLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZ2xvYmFsIHN0eWxlc2hlZXRzLCB2aXNpdCB0aGUgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dsb2JhbC1zdHlsZXNoZWV0c1xuICovXG5cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJAaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3NcIjtcblxuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbkBpbXBvcnQgXCJAaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XG5AaW1wb3J0IFwiQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5AaW1wb3J0IFwiQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzXCI7XG5cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwiQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzXCI7XG5AaW1wb3J0IFwiQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xuQGltcG9ydCBcIkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJAaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcbkBpbXBvcnQgXCJAaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjtcblxuLyoqXG4gKiBJb25pYyBEYXJrIE1vZGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL2RhcmstbW9kZVxuICovXG5cbi8qIEBpbXBvcnQgXCJAaW9uaWMvYW5ndWxhci9jc3MvcGFsZXR0ZXMvZGFyay5hbHdheXMuY3NzXCI7ICovXG4vKiBAaW1wb3J0IFwiQGlvbmljL2FuZ3VsYXIvY3NzL3BhbGV0dGVzL2RhcmsuY2xhc3MuY3NzXCI7ICovXG4vLyBAaW1wb3J0IFwiQGlvbmljL2FuZ3VsYXIvY3NzL3BhbGV0dGVzL2Rhcmsuc3lzdGVtLmNzc1wiO1xuXG5AaW1wb3J0IFwiYXNzZXRzL2ljb24vbWFudWxpZmUtaWNvbnMuc2Nzc1wiO1xuXG4vKiBTd2lwZXIgKi9cbkBpbXBvcnQgXCJzd2lwZXIvc2Nzc1wiO1xuQGltcG9ydCBcInN3aXBlci9zY3NzL2F1dG9wbGF5XCI7XG5AaW1wb3J0IFwic3dpcGVyL3Njc3Mva2V5Ym9hcmRcIjtcbkBpbXBvcnQgXCJzd2lwZXIvc2Nzcy9wYWdpbmF0aW9uXCI7XG5AaW1wb3J0IFwic3dpcGVyL3Njc3Mvc2Nyb2xsYmFyXCI7XG5AaW1wb3J0IFwic3dpcGVyL3Njc3Mvem9vbVwiO1xuXG4vKiBmb250IGZhY2UgKi9cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJNYW51bGlmZSBKSCBTYW5zIE9wdGltaXplZFwiO1xuXHRzcmM6IHVybChhc3NldHMvZm9udC9NYW51bGlmZUpIU2Fuc09wdGltaXplZF8zMTc5MzgwNTE2LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJNYW51bGlmZSBKSCBTZXJpZiBPcHRpbWl6ZWRcIjtcblx0c3JjOiB1cmwoYXNzZXRzL2ZvbnQvTWFudWxpZmVKSFNlcmlmT3B0aW1pemVkLUl0YWxpY184MTg0NzA0MTkudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLaG1lciBCb2xkXCI7XG5cdHNyYzogdXJsKGFzc2V0cy9mb250L05vdG9TYW5zS2htZXItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuXHRmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJyAxLCAnY2FsdCcgMTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLaG1lciBFeHRyYUxpZ2h0XCI7XG5cdHNyYzogdXJsKGFzc2V0cy9mb250L05vdG9TYW5zS2htZXItRXh0cmFMaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuXHRmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJyAxLCAnY2FsdCcgMTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLaG1lciBMaWdodFwiO1xuXHRzcmM6IHVybChhc3NldHMvZm9udC9Ob3RvU2Fuc0tobWVyLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG5cdGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnIDEsICdjYWx0JyAxO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEtobWVyIE1lZGl1bVwiO1xuXHRzcmM6IHVybChhc3NldHMvZm9udC9Ob3RvU2Fuc0tobWVyLU1lZGl1bS50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuXHRmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJyAxLCAnY2FsdCcgMTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcIm1hbnVsaWZlLWljb25zXCI7XG5cdHNyYzogdXJsKGFzc2V0cy9mb250L21hbnVsaWZlLWljb25zLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbi8vIG1heCBhbmQgbWluIHdpZHRoXG5ib2R5IHtcblx0bWluLXdpZHRoOiAzMjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG5cbi50b3AtYmFyLWJhY2staWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMjgyQjNFO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuI2NsYWltLXNsaWRlci5zd2lwZXIge1xuXHRtYXJnaW4tbGVmdDogMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuI2NsYWltLXNsaWRlciAuc3dpcGVyLXNsaWRlIHtcblx0d2lkdGg6IDIyMnB4O1xuXHRoZWlnaHQ6IDEyNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogRm9yIEZpcmVmb3ggKi9cbioge1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbmlvbi1tb2RhbCN1cGxvYWRkb2MtYm90dG9tcG9wdXAtbW9kYWwge1xuXHQtLXdpZHRoOiAxMDAlO1xuXHQtLWJvcmRlci1yYWRpdXM6IDBweDtcblx0LS1ib3gtc2hhZG93OiAwIDI4cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cdC0taW9uLWJhY2tkcm9wLWNvbG9yOiAjMjgyYjNlO1xuXHQtLWJhY2tkcm9wLW9wYWNpdHk6IDgwJTtcbn1cblxuaW9uLW1vZGFsI3VwbG9hZGRvYy1ib3R0b21wb3B1cC1tb2RhbCAuaW9uLXBhZ2Uge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGNvbnRhaW46IGxheW91dCBzdHlsZTtcblx0bWF4LWhlaWdodDogMzUwcHg7XG59XG4iLCIvLyAkaWNvbnNQYXRoOiAnJHtyZXNvdXJjZVBhdGh9L2ZvbnRzL2ljb25zLyc7XG4kaWNvbnNQYXRoOiAnaHR0cHM6Ly93d3cubWFudWxpZmUuY29tLmtoL2V0Yy5jbGllbnRsaWJzL2NvcmVtZmMvY2xpZW50bGlicy9jbGllbnRsaWItc2l0ZS9yZXNvdXJjZXMvZm9udHMvaWNvbnMnO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdtYW51bGlmZS1pY29ucyc7XG4gIHNyYzogIHVybCgnI3skaWNvbnNQYXRofS9tYW51bGlmZS1pY29ucy5lb3Q/anZnZTMwJyk7XG4gIHNyYzogIHVybCgnI3skaWNvbnNQYXRofS9tYW51bGlmZS1pY29ucy5lb3Q/anZnZTMwI2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgIHVybCgnI3skaWNvbnNQYXRofS9tYW51bGlmZS1pY29ucy50dGY/anZnZTMwJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgIHVybCgnI3skaWNvbnNQYXRofS9tYW51bGlmZS1pY29ucy53b2ZmP2p2Z2UzMCcpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnI3skaWNvbnNQYXRofS9tYW51bGlmZS1pY29ucy5zdmc/anZnZTMwI21hbnVsaWZlLWljb25zJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IGJsb2NrO1xufVxuXG5bY2xhc3NePVwibW5saWNvbi1cIl0sIFtjbGFzcyo9XCIgbW5saWNvbi1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ21hbnVsaWZlLWljb25zJyAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxuICAgLyogY29sb3IgdmFyaWF0aW9ucyAgKi9cbiAgJi53aGl0ZTpiZWZvcmUgeyBcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBcbiAgfVxufVxuXG4ubW5saWNvbi1rZXlib2FyZF9hcnJvd19kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG59XG4ubW5saWNvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG59XG4ubW5saWNvbi1jaGV2cm9uLXNtYWxsLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG59XG4ubW5saWNvbi1jaGV2cm9uLXRoaW4tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MDNcIjtcbn1cbi5tbmxpY29uLW5hdmlnYXRlX25leHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MDRcIjtcbn1cbi5tbmxpY29uLUFkdmlzb3IxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTA1XCI7XG59XG4ubW5saWNvbi1EZWF0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkwNlwiO1xufVxuLm1ubGljb24tQmlsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkwN1wiO1xufVxuLm1ubGljb24tQ29udmVyc2F0aW9uMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkwOFwiO1xufVxuLm1ubGljb24tRG93bmxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MDlcIjtcbn1cbi5tbmxpY29uLVN0YXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MGFcIjtcbn1cbi5tbmxpY29uLUFib3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTBiXCI7XG59XG4ubW5saWNvbi1CcmllZmNhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MGNcIjtcbn1cbi5tbmxpY29uLUJsb2cyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTBkXCI7XG59XG4ubW5saWNvbi1EaXNjb3VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkwZVwiO1xufVxuLm1ubGljb24tUGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MGZcIjtcbn1cbi5tbmxpY29uLUNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MTBcIjtcbn1cbi5tbmxpY29uLVF1ZXN0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTExXCI7XG59XG4ubW5saWNvbi1BY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MTJcIjtcbn1cbi5tbmxpY29uLUNoYXJ0MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkxM1wiO1xufVxuLm1ubGljb24tRnVuZFVuaXRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTE0XCI7XG59XG4ubW5saWNvbi1DYXNoQmVuZWZpdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkxNVwiO1xufVxuLm1ubGljb24tRWR1Y2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTE2XCI7XG59XG4ubW5saWNvbi1NYW51bGlmZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkxN1wiO1xufVxuLm1ubGljb24tRmlyc3RBaWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MThcIjtcbn1cbi5tbmxpY29uLUltcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkxOVwiO1xufVxuLm1ubGljb24tRm9ybVNpbXBsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkxYVwiO1xufVxuLm1ubGljb24tSGVhbHRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTFiXCI7XG59XG4ubW5saWNvbi1NZWRpY2FsUmVwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTFjXCI7XG59XG4ubW5saWNvbi1Nb2JpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MWRcIjtcbn1cbi5tbmxpY29uLVBheW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MWVcIjtcbn1cbi5tbmxpY29uLUFjY3VtdWxhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MWZcIjtcbn1cbi5tbmxpY29uLUFjY2VsZXJhdGVHcm93dGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MjBcIjtcbn1cbi5tbmxpY29uLURvY3VtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTIxXCI7XG59XG4ubW5saWNvbi1TYXZlRmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkyMlwiO1xufVxuLm1ubGljb24tUGF5VGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkyM1wiO1xufVxuLm1ubGljb24tU3RhdGVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTI0XCI7XG59XG4ubW5saWNvbi1IYW5kc2hha2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MjVcIjtcbn1cbi5tbmxpY29uLUZvcm1Mb25nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTI2XCI7XG59XG4ubW5saWNvbi1Mb2dpbjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MjdcIjtcbn1cbi5tbmxpY29uLVdhbGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkyOFwiO1xufVxuLm1ubGljb24tUmVpbWJ1cnNlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkyOVwiO1xufVxuLm1ubGljb24tSHVzYmFuZEFuZFdpZmVBbHRlcm5hdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MmFcIjtcbn1cbi5tbmxpY29uLVN1bm55OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTJiXCI7XG59XG4ubW5saWNvbi1Xb3JrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTJjXCI7XG59XG4ubW5saWNvbi1TdGV0aG9zY29wZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkyZFwiO1xufVxuLm1ubGljb24tTWVnYXBob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTJlXCI7XG59XG4ubW5saWNvbi1CYW5rMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkyZlwiO1xufVxuLm1ubGljb24tVHJvcGh5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTMwXCI7XG59XG4ubW5saWNvbi1mYWNlYm9vazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkzMVwiO1xufVxuLm1ubGljb24tR2xvYmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MzJcIjtcbn1cbi5tbmxpY29uLUZvcm1FbXB0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkzM1wiO1xufVxuLm1ubGljb24tUHJvbW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MzRcIjtcbn1cbi5tbmxpY29uLUluZm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MzVcIjtcbn1cbi5tbmxpY29uLUNhbGN1bGF0b3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MzZcIjtcbn1cbi5tbmxpY29uLUtleTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkzN1wiO1xufVxuLm1ubGljb24tRG9sbGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTM4XCI7XG59XG4ubW5saWNvbi1Db2xsYWJvcmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTM5XCI7XG59XG4ubW5saWNvbi1CdWlsZGluZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5M2FcIjtcbn1cbi5tbmxpY29uLU1ldGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTNiXCI7XG59XG4ubW5saWNvbi1Dcml0aWNhbElsbG5lc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5M2NcIjtcbn1cbi5tbmxpY29uLVRyYWluaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTNkXCI7XG59XG4ubW5saWNvbi1GYW1pbHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5M2VcIjtcbn1cbi5tbmxpY29uLUhhcHB5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTNmXCI7XG59XG4ubW5saWNvbi1NZWV0aW5nUm9vbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk0MFwiO1xufVxuLm1ubGljb24tV2hlZWxjaGFpcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk0MVwiO1xufVxuLm1ubGljb24tV2hlZWxDaGFpcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk0MVwiO1xufVxuLm1ubGljb24tR3JhbmRwYXJlbnRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTQyXCI7XG59XG4ubW5saWNvbi1PdXRQYXRpZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTQzXCI7XG59XG4ubW5saWNvbi1Sb2NraW5nSG9yc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NDRcIjtcbn1cbi5tbmxpY29uLUFnZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTQ1XCI7XG59XG4ubW5saWNvbi1CYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTQ2XCI7XG59XG4ubW5saWNvbi1IaXN0b3J5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTQ3XCI7XG59XG4ubW5saWNvbi1QZW9wbGVFbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk0OFwiO1xufVxuLm1ubGljb24tSW5mbzI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NDlcIjtcbn1cbi5tbmxpY29uLVNhdmUyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTRhXCI7XG59XG4ubW5saWNvbi1CYW5rMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk0YlwiO1xufVxuLm1ubGljb24tU29sdXRpb25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTRjXCI7XG59XG4ubW5saWNvbi1Qb3J0Zm9saW9PcHRpbWl6YXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NGRcIjtcbn1cbi5tbmxpY29uLUhvbWUyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTRlXCI7XG59XG4ubW5saWNvbi1DaGVja2xpc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NGZcIjtcbn1cbi5tbmxpY29uLUxpc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NTBcIjtcbn1cbi5tbmxpY29uLUJpY3ljbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NTFcIjtcbn1cbi5tbmxpY29uLVNhdmUxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTUyXCI7XG59XG4ubW5saWNvbi1DZWxsczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk1M1wiO1xufVxuLm1ubGljb24tUm9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk1NFwiO1xufVxuLm1ubGljb24tSG9zcGl0YWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NTVcIjtcbn1cbi5tbmxpY29uLUJhbGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NTZcIjtcbn1cbi5tbmxpY29uLUhvbWUxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTU3XCI7XG59XG4ubW5saWNvbi1TeXJpbmdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTU4XCI7XG59XG4ubW5saWNvbi1DaGlsZEJveTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk1OVwiO1xufVxuLm1ubGljb24tRmVtYWxlU3ltYm9sOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTVhXCI7XG59XG4ubW5saWNvbi1DaXJjbGVDaGVja21hcms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NWJcIjtcbn1cbi5tbmxpY29uLVBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NWNcIjtcbn1cbi5tbmxpY29uLUNhcmVlckFkdmFuY2VtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTVkXCI7XG59XG4ubW5saWNvbi1CYWRnZURvbGxhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk1ZVwiO1xufVxuLm1ubGljb24tQWxhcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NWZcIjtcbn1cbi5tbmxpY29uLU1hbGVTeW1ib2w6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NjBcIjtcbn1cbi5tbmxpY29uLUhvc3BpdGFsQmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTYxXCI7XG59XG4ubW5saWNvbi1BY3RpdmUyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTYyXCI7XG59XG4ubW5saWNvbi1MZWF2aW5nQW5Jbmhlcml0YW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk2M1wiO1xufVxuLm1ubGljb24tQm9udXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NjRcIjtcbn1cbi5tbmxpY29uLUV4Y2hhbmdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTY1XCI7XG59XG4ubW5saWNvbi1BZGRGaWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTY2XCI7XG59XG4ubW5saWNvbi1DYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTY3XCI7XG59XG4ubW5saWNvbi1QYXltZW50RG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk2OFwiO1xufVxuLm1ubGljb24tVGFyZ2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTY5XCI7XG59XG4ubW5saWNvbi1Xb21hbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk2YVwiO1xufVxuLm1ubGljb24tTWFuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTZiXCI7XG59XG4ubW5saWNvbi1Nb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk2Y1wiO1xufVxuLm1ubGljb24tQ29tcGFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk2ZFwiO1xufVxuLm1ubGljb24tQ2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NmVcIjtcbn1cbi5tbmxpY29uLUNvaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NmZcIjtcbn1cbi5tbmxpY29uLVBheUluQ2FzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk3MFwiO1xufVxuLm1ubGljb24tbGlua2VkaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NzFcIjtcbn1cbi5tbmxpY29uLUNoZXF1ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk3MlwiO1xufVxuLm1ubGljb24tSGlzdG9yeUJhZGdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTczXCI7XG59XG4ubW5saWNvbi1JbmZpbml0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk3NFwiO1xufVxuLm1ubGljb24tQmFkZ2VVcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk3NVwiO1xufVxuLm1ubGljb24tQmxvZzE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NzZcIjtcbn1cbi5tbmxpY29uLUNhc2hsZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTc3XCI7XG59XG4ubW5saWNvbi1MaWJyYXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTc4XCI7XG59XG4ubW5saWNvbi1BbWJ1bGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5NzlcIjtcbn1cbi5tbmxpY29uLUZvcm1TZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5N2FcIjtcbn1cbi5tbmxpY29uLUNvbnZlcnNhdGlvbjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5N2JcIjtcbn1cbi5tbmxpY29uLUVtYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTdjXCI7XG59XG4ubW5saWNvbi1SZWNlcHRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5N2RcIjtcbn1cbi5tbmxpY29uLVRpbWVsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTdlXCI7XG59XG4ubW5saWNvbi1Mb2NhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk3ZlwiO1xufVxuLm1ubGljb24tQ3JlZGl0Q2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4MFwiO1xufVxuLm1ubGljb24tSWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ODFcIjtcbn1cbi5tbmxpY29uLURlcGVuZGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4MlwiO1xufVxuLm1ubGljb24tRXhjaGFuZ2VSYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTgzXCI7XG59XG4ubW5saWNvbi1Xb3JrMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4NFwiO1xufVxuLm1ubGljb24tVXBncmFkZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4NVwiO1xufVxuLm1ubGljb24tUG9ydGZvbGlvT3B0aW1pemF0aW9uMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4NlwiO1xufVxuLm1ubGljb24tTWludXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ODdcIjtcbn1cbi5tbmxpY29uLUxvZ2luMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4OFwiO1xufVxuLm1ubGljb24tUHJvZHVjdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ODlcIjtcbn1cbi5tbmxpY29uLUFib3V0VXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5OGFcIjtcbn1cbi5tbmxpY29uLVBpZUNoYXJ0MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4YlwiO1xufVxuLm1ubGljb24tRnVuZFN3aXRjaGVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOThjXCI7XG59XG4ubW5saWNvbi1IZWFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4ZFwiO1xufVxuLm1ubGljb24tRnVsbFNjcmVlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk4ZVwiO1xufVxuLm1ubGljb24tRGl2ZXJzaWZpY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOThmXCI7XG59XG4ubW5saWNvbi1HaWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTkwXCI7XG59XG4ubW5saWNvbi1Ob1Ntb2tpbmcxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTkxXCI7XG59XG4ubW5saWNvbi1CYWRnZUNoZWNrbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk5MlwiO1xufVxuLm1ubGljb24tSWRlYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk5M1wiO1xufVxuLm1ubGljb24tQXBwbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5OTRcIjtcbn1cbi5tbmxpY29uLUluUGF0aWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk5NVwiO1xufVxuLm1ubGljb24tUHJpY2VNZXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk5NlwiO1xufVxuLm1ubGljb24tSW5jb21lU3VwcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk5N1wiO1xufVxuLm1ubGljb24tRmxleGliaWxpdHlBbHRlcm5hdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5OThcIjtcbn1cbi5tbmxpY29uLVBpZ2d5QmFuazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTk5OVwiO1xufVxuLm1ubGljb24tQWNjZWxlcmF0ZUdyb3d0aDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5OWFcIjtcbn1cbi5tbmxpY29uLVBhc3Nwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTliXCI7XG59XG4ubW5saWNvbi1MaXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTljXCI7XG59XG4ubW5saWNvbi1VcGxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5OWRcIjtcbn1cbi5tbmxpY29uLU1jYmw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5OWVcIjtcbn1cbi5tbmxpY29uLUVhc3lBcHBsaWNhdGlvbldpdGhOb0hlYWx0aENoZWNrVXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5OWZcIjtcbn1cbi5tbmxpY29uLUV4cGVuc2VFZmZpY2llbmN5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWEwXCI7XG59XG4ubW5saWNvbi1Mb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWExXCI7XG59XG4ubW5saWNvbi1GaXJzdEFpZDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YTJcIjtcbn1cbi5tbmxpY29uLVJlbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlhM1wiO1xufVxuLm1ubGljb24tVXBkYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWE0XCI7XG59XG4ubW5saWNvbi1QaWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWE1XCI7XG59XG4ubW5saWNvbi1MaWtlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWE2XCI7XG59XG4ubW5saWNvbi1TYWZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWE3XCI7XG59XG4ubW5saWNvbi1Gb3JtQ29tcGxldGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWE4XCI7XG59XG4ubW5saWNvbi1Ub3VjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlhOVwiO1xufVxuLm1ubGljb24tSGlnaFBlcmZvcm1pbmdUZWFtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWFhXCI7XG59XG4ubW5saWNvbi1BZHZpc29yMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlhYlwiO1xufVxuLm1ubGljb24tQ2FyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWFjXCI7XG59XG4ubW5saWNvbi1BaXJwbGFuZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlhZFwiO1xufVxuLm1ubGljb24tQ29tbXVuaWNhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlhZVwiO1xufVxuLm1ubGljb24tVG9vdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YWZcIjtcbn1cbi5tbmxpY29uLUJhYnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YjBcIjtcbn1cbi5tbmxpY29uLUNhc2hpZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YjFcIjtcbn1cbi5tbmxpY29uLUd1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWIyXCI7XG59XG4ubW5saWNvbi1EaWdpdGFsQ3VzdG9tZXJMZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YjNcIjtcbn1cbi5tbmxpY29uLU1vYmlsZUxhcHRvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTliNFwiO1xufVxuLm1ubGljb24tTGFwdG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWI1XCI7XG59XG4ubW5saWNvbi1NYW5XZWFyaW5nR2xhc3NlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTliNlwiO1xufVxuLm1ubGljb24tUGVyc29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWI3XCI7XG59XG4ubW5saWNvbi1TdGFpcnNVcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTliOFwiO1xufVxuLm1ubGljb24tRmxhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTliOVwiO1xufVxuLm1ubGljb24tQXdhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YmFcIjtcbn1cbi5tbmxpY29uLVdhdGNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWJiXCI7XG59XG4ubW5saWNvbi1SZXRpcmVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWJjXCI7XG59XG4ubW5saWNvbi1HdWFyYW50ZWVkRGVhdGhCZW5lZml0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTliZFwiO1xufVxuLm1ubGljb24tVG9tYnN0b25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWJkXCI7XG59XG4ubW5saWNvbi1Ub21iU3RvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YmRcIjtcbn1cbi5tbmxpY29uLUNoYXJ0SGlzdG9yeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTliZVwiO1xufVxuLm1ubGljb24tTGVhZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTliZlwiO1xufVxuLm1ubGljb24tQ2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWMwXCI7XG59XG4ubW5saWNvbi1DYWxsYmFjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTljMVwiO1xufVxuLm1ubGljb24tQWNjaWRlbnRhbERlbnRhbENhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YzJcIjtcbn1cbi5tbmxpY29uLUNha2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YzNcIjtcbn1cbi5tbmxpY29uLUNhZmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YzRcIjtcbn1cbi5tbmxpY29uLUJ1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTljNVwiO1xufVxuLm1ubGljb24tQnJpZ2h0bmVzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTljNlwiO1xufVxuLm1ubGljb24tQnJhaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YzdcIjtcbn1cbi5tbmxpY29uLUJveTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTljOFwiO1xufVxuLm1ubGljb24tQm94aW5nR2xvdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5YzlcIjtcbn1cbi5tbmxpY29uLUJvdHRvbVJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWNhXCI7XG59XG4ubW5saWNvbi1Cb3R0b21MZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWNiXCI7XG59XG4ubW5saWNvbi1Cb3R0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5Y2NcIjtcbn1cbi5tbmxpY29uLUJvb2ttYXJrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWNkXCI7XG59XG4ubW5saWNvbi1Cb2R5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWNlXCI7XG59XG4ubW5saWNvbi1CaW5vY3VsYXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWNmXCI7XG59XG4ubW5saWNvbi1CZWFjaEJhbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZDBcIjtcbn1cbi5tbmxpY29uLUJ1aWxkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWQxXCI7XG59XG4ubW5saWNvbi1CYW5kYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWQyXCI7XG59XG4ubW5saWNvbi1CYWRnZVg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZDNcIjtcbn1cbi5tbmxpY29uLUFydGVyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlkNFwiO1xufVxuLm1ubGljb24tQXJyb3dSaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlkNVwiO1xufVxuLm1ubGljb24tQXJyb3dMZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWQ2XCI7XG59XG4ubW5saWNvbi1BbmdsZVVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWQ3XCI7XG59XG4ubW5saWNvbi1BbmdsZURvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZDhcIjtcbn1cbi5tbmxpY29uLUFsdW1pbnVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWQ5XCI7XG59XG4ubW5saWNvbi1BZ2lsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlkYVwiO1xufVxuLm1ubGljb24tQ2hhbmdlT2ZMaWZlSW5zdXJlZEFsdGVybmF0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlkYlwiO1xufVxuLm1ubGljb24tQ2hhbmdlT2ZMaWZlSW5zdXJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlkY1wiO1xufVxuLm1ubGljb24tQ2F1dGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlkZFwiO1xufVxuLm1ubGljb24tQ2FydG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWRlXCI7XG59XG4ubW5saWNvbi1DYXJyb3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZGZcIjtcbn1cbi5tbmxpY29uLUNhcmV0VXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZTBcIjtcbn1cbi5tbmxpY29uLUNhcmV0RG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTllMVwiO1xufVxuLm1ubGljb24tQ2hhcnQyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWUyXCI7XG59XG4ubW5saWNvbi1DaGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTllM1wiO1xufVxuLm1ubGljb24tQ2hlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZTRcIjtcbn1cbi5tbmxpY29uLUNoZWNrbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTllNVwiO1xufVxuLm1ubGljb24tQ2hlY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZTVcIjtcbn1cbi5tbmxpY29uLUNocmlzdG1hc1RyZWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZTZcIjtcbn1cbi5tbmxpY29uLUNoaWxkR2lybDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTllN1wiO1xufVxuLm1ubGljb24tQ2xvdGhlc0hhbmdlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTllOFwiO1xufVxuLm1ubGljb24tQ2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZTlcIjtcbn1cbi5tbmxpY29uLVllYXJseTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTllOVwiO1xufVxuLm1ubGljb24tQ2xlYW5Sb29tOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWVhXCI7XG59XG4ubW5saWNvbi1DaXJjbGVYOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWViXCI7XG59XG4ubW5saWNvbi1Db21wbGltZW50YXJ5QmVuZWZpdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZWNcIjtcbn1cbi5tbmxpY29uLUNvbW11bmljYXRpb25zVG93ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZWRcIjtcbn1cbi5tbmxpY29uLUNvbW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZWVcIjtcbn1cbi5tbmxpY29uLUNvbWluZ1RvZ2V0aGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWVmXCI7XG59XG4ubW5saWNvbi1DbG91ZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZjBcIjtcbn1cbi5tbmxpY29uLUNvdmVyYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWYxXCI7XG59XG4ubW5saWNvbi1Db3JuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWYyXCI7XG59XG4ubW5saWNvbi1Db3B5UGFzdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZjNcIjtcbn1cbi5tbmxpY29uLUROQTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlmNFwiO1xufVxuLm1ubGljb24tRGlnaXRhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlmNVwiO1xufVxuLm1ubGljb24tRGVza3RvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlmNlwiO1xufVxuLm1ubGljb24tRGVsZXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWY3XCI7XG59XG4ubW5saWNvbi1EZWxldGVGaWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWY4XCI7XG59XG4ubW5saWNvbi1EZWJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWY5XCI7XG59XG4ubW5saWNvbi1EYXlWaWV3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWZhXCI7XG59XG4ubW5saWNvbi1EYXRlUmFuZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZmJcIjtcbn1cbi5tbmxpY29uLURhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZmNcIjtcbn1cbi5tbmxpY29uLURhY2Fkb286YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5ZmRcIjtcbn1cbi5tbmxpY29uLUNyb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWZlXCI7XG59XG4ubW5saWNvbi1FYXN5QXBwbGljYXRpb25XaXRoTm9IZWFsdGhDaGVjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTlmZlwiO1xufVxuLm1ubGljb24tRWFyYnVkczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEwMFwiO1xufVxuLm1ubGljb24tRHVwbGljYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTAxXCI7XG59XG4ubW5saWNvbi1EcmluazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEwMlwiO1xufVxuLm1ubGljb24tRG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEwM1wiO1xufVxuLm1ubGljb24tRXhjZWxQUFRXb3JkUERGOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTA0XCI7XG59XG4ubW5saWNvbi1Fc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMDVcIjtcbn1cbi5tbmxpY29uLUVzY2FsYXRvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEwNlwiO1xufVxuLm1ubGljb24tRVBTU1ZHOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTA3XCI7XG59XG4ubW5saWNvbi1FbmdhZ2VtZW50UmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEwOFwiO1xufVxuLm1ubGljb24tRW1vdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMDlcIjtcbn1cbi5tbmxpY29uLUVtZXJnZW5jeUV4aXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMGFcIjtcbn1cbi5tbmxpY29uLUVsZXZhdG9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTBiXCI7XG59XG4ubW5saWNvbi1FZ2dzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTBjXCI7XG59XG4ubW5saWNvbi1FZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTBkXCI7XG59XG4ubW5saWNvbi1GYXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMGVcIjtcbn1cbi5tbmxpY29uLUV5ZTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMGZcIjtcbn1cbi5tbmxpY29uLUV5ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExMFwiO1xufVxuLm1ubGljb24tRXhwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTExXCI7XG59XG4ubW5saWNvbi1FeGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTEyXCI7XG59XG4ubW5saWNvbi1GaXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTEzXCI7XG59XG4ubW5saWNvbi1GaW5hbmNpYWxXZWxsbmVzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExNFwiO1xufVxuLm1ubGljb24tRmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTE1XCI7XG59XG4ubW5saWNvbi1GaWxlRm9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTE2XCI7XG59XG4ubW5saWNvbi1GZXJyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExN1wiO1xufVxuLm1ubGljb24tRmlzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExOFwiO1xufVxuLm1ubGljb24tRm9jdXNSb29tOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTE5XCI7XG59XG4ubW5saWNvbi1GbG93ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMWFcIjtcbn1cbi5tbmxpY29uLUZsZXhpYmxlQWNjZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTFiXCI7XG59XG4ubW5saWNvbi1GbGV4aWJpbGl0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExY1wiO1xufVxuLm1ubGljb24tRnJpc2JlZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExZFwiO1xufVxuLm1ubGljb24tR2VhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExZVwiO1xufVxuLm1ubGljb24tR2FtZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWExZlwiO1xufVxuLm1ubGljb24tR3Jvd3RoMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyMFwiO1xufVxuLm1ubGljb24tR3Jvd3RoMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyMVwiO1xufVxuLm1ubGljb24tR2lybDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyMlwiO1xufVxuLm1ubGljb24tSGVpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTIzXCI7XG59XG4ubW5saWNvbi1IZWFyaW5nQWlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTI0XCI7XG59XG4ubW5saWNvbi1IZWFkc2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTI1XCI7XG59XG4ubW5saWNvbi1IYW5kd2FzaGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyNlwiO1xufVxuLm1ubGljb24tSGFuZFdhdmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyN1wiO1xufVxuLm1ubGljb24tSGFtYnVyZ2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTI4XCI7XG59XG4ubW5saWNvbi1IYWNreVNhY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMjlcIjtcbn1cbi5tbmxpY29uLUd5bTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyYVwiO1xufVxuLm1ubGljb24tSG9saWRheTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMmJcIjtcbn1cbi5tbmxpY29uLUhvdXJnbGFzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyY1wiO1xufVxuLm1ubGljb24tSG90ZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMmRcIjtcbn1cbi5tbmxpY29uLUljZUNyZWFtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTJlXCI7XG59XG4ubW5saWNvbi1IeXBlcnRhcmdldGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyZlwiO1xufVxuLm1ubGljb24tS2lkbmV5czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEzMFwiO1xufVxuLm1ubGljb24tS2VlcFNpbGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEzMVwiO1xufVxuLm1ubGljb24tS2FiYW5Nb3JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTMyXCI7XG59XG4ubW5saWNvbi1KUEdHSUZQTkc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMzNcIjtcbn1cbi5tbmxpY29uLUluc3RydW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMzRcIjtcbn1cbi5tbmxpY29uLUxpbms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMzVcIjtcbn1cbi5tbmxpY29uLVNlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEzNlwiO1xufVxuLm1ubGljb24tTGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEzN1wiO1xufVxuLm1ubGljb24tTHVuZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMzhcIjtcbn1cbi5tbmxpY29uLUxvdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMzlcIjtcbn1cbi5tbmxpY29uLU1hc3NhZ2VUaGVyYXB5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTNhXCI7XG59XG4ubW5saWNvbi1NYXNrMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEzYlwiO1xufVxuLm1ubGljb24tTWFzazE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhM2NcIjtcbn1cbi5tbmxpY29uLU1hcmtldGluZ0F1dG9tYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhM2RcIjtcbn1cbi5tbmxpY29uLU1hcGxlTGVhZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEzZVwiO1xufVxuLm1ubGljb24tTWVkaWNpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhM2ZcIjtcbn1cbi5tbmxpY29uLU1pY3JvcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNDBcIjtcbn1cbi5tbmxpY29uLU1lbnRhbEhlYWx0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE0MVwiO1xufVxuLm1ubGljb24tTmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNDJcIjtcbn1cbi5tbmxpY29uLU5ldXRyYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNDNcIjtcbn1cbi5tbmxpY29uLU11c2ljOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTQ0XCI7XG59XG4ubW5saWNvbi1NUDM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNDVcIjtcbn1cbi5tbmxpY29uLU1PVk1QNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE0NlwiO1xufVxuLm1ubGljb24tTW91c2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNDdcIjtcbn1cbi5tbmxpY29uLVBhcGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTQ4XCI7XG59XG4ubW5saWNvbi1QYW50cnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNDlcIjtcbn1cbi5tbmxpY29uLU9mZmljZUJ1aWxkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTRhXCI7XG59XG4ubW5saWNvbi1OdXJzaW5nUm9vbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE0YlwiO1xufVxuLm1ubGljb24tTm90aWZpY2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTRjXCI7XG59XG4ubW5saWNvbi1QYXVzZTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNGRcIjtcbn1cbi5tbmxpY29uLVBhdXNlMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE0ZVwiO1xufVxuLm1ubGljb24tUGF0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE0ZlwiO1xufVxuLm1ubGljb24tUGFydGx5U3Vubnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNTBcIjtcbn1cbi5tbmxpY29uLVBhcmtpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNTFcIjtcbn1cbi5tbmxpY29uLVBlb3BsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE1MlwiO1xufVxuLm1ubGljb24tUGF5bWVudE9yZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTUzXCI7XG59XG4ubW5saWNvbi1QaGFybWFjeURlbGl2ZXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTU0XCI7XG59XG4ubW5saWNvbi1QZXJjZW50YWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTU1XCI7XG59XG4ubW5saWNvbi1QcmVzY3JpcHRpb25PcGVuZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNTZcIjtcbn1cbi5tbmxpY29uLVByZW1pdW1EaXNjb3VudHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNTdcIjtcbn1cbi5tbmxpY29uLVByZWZlcmVudGlhbFByZW1pdW1SYXRlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE1OFwiO1xufVxuLm1ubGljb24tUG93ZXJMaW5lVG93ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNTlcIjtcbn1cbi5tbmxpY29uLVBsYXkyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTVhXCI7XG59XG4ubW5saWNvbi1QbGF5MTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE1YlwiO1xufVxuLm1ubGljb24tUGxhdGVTcG9vbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE1Y1wiO1xufVxuLm1ubGljb24tUGxhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNWRcIjtcbn1cbi5tbmxpY29uLVBsYXN0aWM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNWVcIjtcbn1cbi5tbmxpY29uLVBsYW5EZXNpZ246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNWZcIjtcbn1cbi5tbmxpY29uLVBpcGVsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTYwXCI7XG59XG4ubW5saWNvbi1QaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNjFcIjtcbn1cbi5tbmxpY29uLVByaW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTYyXCI7XG59XG4ubW5saWNvbi1Sb2NraW5nQ2hhaXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNjNcIjtcbn1cbi5tbmxpY29uLVJvY2tldFNoaXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNjRcIjtcbn1cbi5tbmxpY29uLVJvYm90OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTY1XCI7XG59XG4ubW5saWNvbi1Sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTY2XCI7XG59XG4ubW5saWNvbi1SaXNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTY3XCI7XG59XG4ubW5saWNvbi1SaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE2OFwiO1xufVxuLm1ubGljb24tUmV0YWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTY5XCI7XG59XG4ubW5saWNvbi1SZXN0YXVyYW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTZhXCI7XG59XG4ubW5saWNvbi1SZW1vdmVGaWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTZiXCI7XG59XG4ubW5saWNvbi1SYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTZjXCI7XG59XG4ubW5saWNvbi1QdXp6bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNmRcIjtcbn1cbi5tbmxpY29uLVNhZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE2ZVwiO1xufVxuLm1ubGljb24tUnVsZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNmZcIjtcbn1cbi5tbmxpY29uLVJvb3N0ZXJCYW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTcwXCI7XG59XG4ubW5saWNvbi1Sb2xsT3ZlclBsYW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNzFcIjtcbn1cbi5tbmxpY29uLVNjaXNzb3JzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTcyXCI7XG59XG4ubW5saWNvbi1TY2hlZHVsZVZpZXc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNzNcIjtcbn1cbi5tbmxpY29uLVNjYWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTc0XCI7XG59XG4ubW5saWNvbi1Tb3VuZExvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE3NVwiO1xufVxuLm1ubGljb24tU291bmRIaWdoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTc2XCI7XG59XG4ubW5saWNvbi1Tb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTc3XCI7XG59XG4ubW5saWNvbi1Tb2NjZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNzhcIjtcbn1cbi5tbmxpY29uLVNub3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhNzlcIjtcbn1cbi5tbmxpY29uLVNtb2tpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhN2FcIjtcbn1cbi5tbmxpY29uLVNsaXBwZXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTdiXCI7XG59XG4ubW5saWNvbi1TbGVlcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE3Y1wiO1xufVxuLm1ubGljb24tU2tpcHBpbmdSb3BlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTdkXCI7XG59XG4ubW5saWNvbi1TaG93ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhN2VcIjtcbn1cbi5tbmxpY29uLVNob3BwaW5nQ2FydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE3ZlwiO1xufVxuLm1ubGljb24tU2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhODBcIjtcbn1cbi5tbmxpY29uLVN0YWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTgxXCI7XG59XG4ubW5saWNvbi1TcHJpbmtsZXJTeXN0ZW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhODJcIjtcbn1cbi5tbmxpY29uLVNwb3RsaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE4M1wiO1xufVxuLm1ubGljb24tU3BlbGxDaGVjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE4NFwiO1xufVxuLm1ubGljb24tU3BlZWNoQnViYmxlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE4NVwiO1xufVxuLm1ubGljb24tU291bmRNZWRpdW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhODZcIjtcbn1cbi5tbmxpY29uLVRvb2wyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTg3XCI7XG59XG4ubW5saWNvbi1Ub29sMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE4OFwiO1xufVxuLm1ubGljb24tVG9pbGV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTg5XCI7XG59XG4ubW5saWNvbi1UaHVuZGVyc3Rvcm06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhOGFcIjtcbn1cbi5tbmxpY29uLVRocm93V2FzdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhOGJcIjtcbn1cbi5tbmxpY29uLVRoZXJtb21ldGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYThjXCI7XG59XG4ubW5saWNvbi1UaGVhdHJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYThkXCI7XG59XG4ubW5saWNvbi1UZW5uaXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhOGVcIjtcbn1cbi5tbmxpY29uLVRhbGtpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhOGZcIjtcbn1cbi5tbmxpY29uLVRhYmxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE5MFwiO1xufVxuLm1ubGljb24tU3dpdGNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTkxXCI7XG59XG4ubW5saWNvbi1Td2ltbWluZ1Bvb2w6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhOTJcIjtcbn1cbi5tbmxpY29uLVN1cnByaXNlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE5M1wiO1xufVxuLm1ubGljb24tU3Vid2F5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTk0XCI7XG59XG4ubW5saWNvbi1TdG9yYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTk1XCI7XG59XG4ubW5saWNvbi1XaW5lR2xhc3NlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE5NlwiO1xufVxuLm1ubGljb24tV2luZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhOTdcIjtcbn1cbi5tbmxpY29uLVdpbmRUdXJiaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTk4XCI7XG59XG4ubW5saWNvbi1XaWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTk5XCI7XG59XG4ubW5saWNvbi1XaWZpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTlhXCI7XG59XG4ubW5saWNvbi1XZWJjYXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTliXCI7XG59XG4ubW5saWNvbi1XYXZlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE5Y1wiO1xufVxuLm1ubGljb24tVm9sdGFnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE5ZFwiO1xufVxuLm1ubGljb24tVmVyeVNhZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWE5ZVwiO1xufVxuLm1ubGljb24tVmVyeUhhcHB5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYTlmXCI7XG59XG4ubW5saWNvbi1VcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhMFwiO1xufVxuLm1ubGljb24tVW5sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWExXCI7XG59XG4ubW5saWNvbi1VbmlvbkluZHVzdHJpYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYTJcIjtcbn1cbi5tbmxpY29uLVR1cm5PZmY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYTNcIjtcbn1cbi5tbmxpY29uLVRzaGlydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhNFwiO1xufVxuLm1ubGljb24tVHJlZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhNVwiO1xufVxuLm1ubGljb24tVHJhbnNwYXJlbnRJbkNvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYTZcIjtcbn1cbi5tbmxpY29uLVRyYW5zZmVyT2ZFeGlzdGluZ0Fzc2V0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhN1wiO1xufVxuLm1ubGljb24tVHJhaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYThcIjtcbn1cbi5tbmxpY29uLVRyYWN0b3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYTlcIjtcbn1cbi5tbmxpY29uLVRvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhYVwiO1xufVxuLm1ubGljb24tVG9wTGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhYlwiO1xufVxuLm1ubGljb24tWm9vbU91dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhY1wiO1xufVxuLm1ubGljb24tWm9vbUluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWFkXCI7XG59XG4ubW5saWNvbi1Zb3lvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWFlXCI7XG59XG4ubW5saWNvbi1Xcml0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFhZlwiO1xufVxuLm1ubGljb24tV29tYW5XZWFyaW5nR2xhc3NlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFiMFwiO1xufVxuLm1ubGljb24tdHdpdHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFiMVwiO1xufVxuLm1ubGljb24tSlBXYXJuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWIyXCI7XG59XG4ubW5saWNvbi15b3V0dWJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWIzXCI7XG59XG4ubW5saWNvbi16YWxvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWI0XCI7XG59XG4ubW5saWNvbi1pbnN0YWdyYW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYjVcIjtcbn1cbi5tbmxpY29uLXdlY2hhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFiNlwiO1xufVxuLm1ubGljb24tbWVzc2VuZ2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWI3XCI7XG59XG4ubW5saWNvbi1saW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYmFkXCI7XG59XG4ubW5saWNvbi1KUFByb3NwZWN0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFiOFwiO1xufVxuLm1ubGljb24tSlBQb2xpY3lIb2xkZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWI5XCI7XG59XG4ubW5saWNvbi1KUENvcnBvcmF0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFiYVwiO1xufVxuLm1ubGljb24tRG9uZ0JhZGdlRG9sbGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWJiXCI7XG59XG4ubW5saWNvbi1Eb25nQmlsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFiY1wiO1xufVxuLm1ubGljb24tRG9uZ0JvbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWJkXCI7XG59XG4ubW5saWNvbi1Eb25nQ2FzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFiZVwiO1xufVxuLm1ubGljb24tRG9uZ0NoYW5nZU9mTGlmZUluc3VyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYmZcIjtcbn1cbi5tbmxpY29uLURvbmdDb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWMwXCI7XG59XG4ubW5saWNvbi1Eb25nRGVidDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFjMVwiO1xufVxuLm1ubGljb24tRG9uZ0VzdGF0ZUxpcXVpZGl0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFjMlwiO1xufVxuLm1ubGljb24tRG9uZ0ZpbmFuY2lhbFdlbGxuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWMzXCI7XG59XG4ubW5saWNvbi1Eb25nRnVuZFN3aXRjaGVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWM0XCI7XG59XG4ubW5saWNvbi1Eb25nR3VhcmFudGVlZENvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYzVcIjtcbn1cbi5tbmxpY29uLURvbmdNb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFjNlwiO1xufVxuLm1ubGljb24tRG9uZ1BheVRpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhYzdcIjtcbn1cbi5tbmxpY29uLURvbmdQYXltZW50RG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFjOFwiO1xufVxuLm1ubGljb24tRG9uZ1BheW1lbnRPcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFjOVwiO1xufVxuLm1ubGljb24tRG9uZ1ByaWNlTWV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhY2FcIjtcbn1cbi5tbmxpY29uLURvbmdSZWltYnVyc2VtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWNiXCI7XG59XG4ubW5saWNvbi1Eb25nUm9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFjY1wiO1xufVxuLm1ubGljb24tRG9uZ1RyYW5zZmVyT2ZFeGlzdGluZ0Fzc2V0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFjZFwiO1xufVxuLm1ubGljb24tRG9uZ1RyYW5zcGFyZW50SW5Db3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWNlXCI7XG59XG4ubW5saWNvbi1Eb25nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWNmXCI7XG59XG4ubW5saWNvbi1FdXJvQWdlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZDBcIjtcbn1cbi5tbmxpY29uLUV1cm9CYWRnZURvbGxhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFkMVwiO1xufVxuLm1ubGljb24tRXVyb0JpbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZDJcIjtcbn1cbi5tbmxpY29uLUV1cm9Cb251czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFkM1wiO1xufVxuLm1ubGljb24tRXVyb0Nhc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZDRcIjtcbn1cbi5tbmxpY29uLUV1cm9DaGFuZ2VPZkxpZmVJbnN1cmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWQ1XCI7XG59XG4ubW5saWNvbi1FdXJvQ29pbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFkNlwiO1xufVxuLm1ubGljb24tRXVyb0RlYnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZDdcIjtcbn1cbi5tbmxpY29uLUV1cm9Fc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZDhcIjtcbn1cbi5tbmxpY29uLUV1cm9GaW5hbmNpYWxXZWxsbmVzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFkOVwiO1xufVxuLm1ubGljb24tRXVyb0Z1bmRTd2l0Y2hlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFkYVwiO1xufVxuLm1ubGljb24tRXVyb0d1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWRiXCI7XG59XG4ubW5saWNvbi1FdXJvTW9uZXlCYWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZGNcIjtcbn1cbi5tbmxpY29uLUV1cm9QYXlUaW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWRkXCI7XG59XG4ubW5saWNvbi1FdXJvUGF5bWVudERvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZGVcIjtcbn1cbi5tbmxpY29uLUV1cm9QYXltZW50T3JkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZGZcIjtcbn1cbi5tbmxpY29uLUV1cm9QcmljZU1ldGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWUwXCI7XG59XG4ubW5saWNvbi1FdXJvUmVpbWJ1cnNtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWUxXCI7XG59XG4ubW5saWNvbi1FdXJvUm9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFlMlwiO1xufVxuLm1ubGljb24tRXVyb1RyYW5zZmVyT2ZFeGlzdGluZ0Fzc2V0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFlM1wiO1xufVxuLm1ubGljb24tRXVyb1RyYW5zcGFyZW50SW5Db3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWU0XCI7XG59XG4ubW5saWNvbi1FdXJvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWU1XCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhckFnZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWU2XCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhckJhZGdlRG9sbGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWU3XCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhckJpbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZThcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyQm9udXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZTlcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyQ2FzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFlYVwiO1xufVxuLm1ubGljb24tSG9uZ0tvbmdEb2xsYXJDaGFuZ2VPZkxpZmVJbnN1cmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWViXCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhckNvaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZWNcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyRGVidDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFlZFwiO1xufVxuLm1ubGljb24tSG9uZ0tvbmdEb2xsYXJFc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZWVcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyRmluYW5jaWFsV2VsbG5lc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZWZcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyRnVuZFN3aXRjaGVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWYwXCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhckd1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWYxXCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhck1vbmV5QmFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWYyXCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhclBheVRpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZjNcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyUGF5bWVudERvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZjRcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyUGF5bWVudE9yZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWY1XCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhclByaWNlTWV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZjZcIjtcbn1cbi5tbmxpY29uLUhvbmdLb25nRG9sbGFyUmVpbWJ1cnNlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFmN1wiO1xufVxuLm1ubGljb24tSG9uZ0tvbmdEb2xsYXJSb2xsT3ZlckZ1bmRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWY4XCI7XG59XG4ubW5saWNvbi1Ib25nS29uZ0RvbGxhclRyYW5zZmVyT2ZFeGlzdGluZ0Fzc2V0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFmOVwiO1xufVxuLm1ubGljb24tSG9uZ0tvbmdEb2xsYXJUcmFuc3BhcmVudEluQ29zdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFmYVwiO1xufVxuLm1ubGljb24tSG9uZ0tvbmdEb2xsYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhZmJcIjtcbn1cbi5tbmxpY29uLUt5YXRBZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFmY1wiO1xufVxuLm1ubGljb24tS3lhdEJhZGdlRG9sbGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWZkXCI7XG59XG4ubW5saWNvbi1LeWF0QmlsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWFmZVwiO1xufVxuLm1ubGljb24tS3lhdEJvbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYWZmXCI7XG59XG4ubW5saWNvbi1LeWF0Q2FzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwMFwiO1xufVxuLm1ubGljb24tS3lhdENoYW5nZU9mTGlmZUluc3VyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMDFcIjtcbn1cbi5tbmxpY29uLUt5YXRDb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjAyXCI7XG59XG4ubW5saWNvbi1LeWF0RGVidDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwM1wiO1xufVxuLm1ubGljb24tS3lhdEVzdGF0ZUxpcXVpZGl0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwNFwiO1xufVxuLm1ubGljb24tS3lhdEZpbmFuY2lhbFdlbGxuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjA1XCI7XG59XG4ubW5saWNvbi1LeWF0RnVuZFN3aXRjaGVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjA2XCI7XG59XG4ubW5saWNvbi1LeWF0R3VhcmFudGVlZENvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMDdcIjtcbn1cbi5tbmxpY29uLUt5YXRNb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwOFwiO1xufVxuLm1ubGljb24tS3lhdFBheVRpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMDlcIjtcbn1cbi5tbmxpY29uLUt5YXRQYXltZW50RG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwYVwiO1xufVxuLm1ubGljb24tS3lhdFBheW1lbnRPcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwYlwiO1xufVxuLm1ubGljb24tS3lhdFByaWNlTWV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMGNcIjtcbn1cbi5tbmxpY29uLUt5YXRSZWltYnVyc2VtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjBkXCI7XG59XG4ubW5saWNvbi1LeWF0Um9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwZVwiO1xufVxuLm1ubGljb24tS3lhdFRyYW5zZmVyT2ZFeGlzdGluZ0Fzc2V0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIwZlwiO1xufVxuLm1ubGljb24tS3lhdFRyYW5zcGFyZW50SW5Db3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjEwXCI7XG59XG4ubW5saWNvbi1LeWF0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjExXCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJBZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIxMlwiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyQmFkZ2VEb2xsYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMTNcIjtcbn1cbi5tbmxpY29uLU5ld1RhaXdhbkRvbGxhckJpbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMTRcIjtcbn1cbi5tbmxpY29uLU5ld1RhaXdhbkRvbGxhckJvbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjE1XCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJDYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjE2XCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJDaGFuZ2VPZkxpZmVJbnN1cmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjE3XCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJDb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjE4XCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJEZWJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjE5XCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJFc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMWFcIjtcbn1cbi5tbmxpY29uLU5ld1RhaXdhbkRvbGxhckZpbmFuY2lhbFdlbGxuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjFiXCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJGdW5kU3dpdGNoZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMWNcIjtcbn1cbi5tbmxpY29uLU5ld1RhaXdhbkRvbGxhckd1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjFkXCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJNb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIxZVwiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyUGF5VGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIxZlwiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyUGF5bWVudERvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMjBcIjtcbn1cbi5tbmxpY29uLU5ld1RhaXdhbkRvbGxhclBheW1lbnRPcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyMVwiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyUHJpY2VNZXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyMlwiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyUmVpbWJ1cnNlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyM1wiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyUm9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyNFwiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyVHJhbnNmZXJPZkV4aXN0aW5nQXNzZXRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjI1XCI7XG59XG4ubW5saWNvbi1OZXdUYWl3YW5Eb2xsYXJUcmFuc3BhcmVudEluQ29zdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyNlwiO1xufVxuLm1ubGljb24tTmV3VGFpd2FuRG9sbGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjI3XCI7XG59XG4ubW5saWNvbi1QZXNvQWdlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMjhcIjtcbn1cbi5tbmxpY29uLVBlc29CYWRnZURvbGxhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyOVwiO1xufVxuLm1ubGljb24tUGVzb0JpbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMmFcIjtcbn1cbi5tbmxpY29uLVBlc29Cb251czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyYlwiO1xufVxuLm1ubGljb24tUGVzb0Nhc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMmNcIjtcbn1cbi5tbmxpY29uLVBlc29DaGFuZ2VPZkxpZmVJbnN1cmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjJkXCI7XG59XG4ubW5saWNvbi1QZXNvQ29pbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIyZVwiO1xufVxuLm1ubGljb24tUGVzb0RlYnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMmZcIjtcbn1cbi5tbmxpY29uLVBlc29Fc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMzBcIjtcbn1cbi5tbmxpY29uLVBlc29GaW5hbmNpYWxXZWxsbmVzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIzMVwiO1xufVxuLm1ubGljb24tUGVzb0Z1bmRTd2l0Y2hlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIzMlwiO1xufVxuLm1ubGljb24tUGVzb0d1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjMzXCI7XG59XG4ubW5saWNvbi1QZXNvTW9uZXlCYWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMzRcIjtcbn1cbi5tbmxpY29uLVBlc29QYXlUaW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjM1XCI7XG59XG4ubW5saWNvbi1QZXNvUGF5bWVudERvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMzZcIjtcbn1cbi5tbmxpY29uLVBlc29QYXltZW50T3JkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViMzdcIjtcbn1cbi5tbmxpY29uLVBlc29QcmljZU1ldGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjM4XCI7XG59XG4ubW5saWNvbi1QZXNvUmVpbWJ1cnNlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIzOVwiO1xufVxuLm1ubGljb24tUGVzb1JvbGxPdmVyRnVuZHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViM2FcIjtcbn1cbi5tbmxpY29uLVBlc29UcmFuc2Zlck9mRXhpc3RpbmdBc3NldHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViM2JcIjtcbn1cbi5tbmxpY29uLVBlc29UcmFuc3BhcmVudEluQ29zdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIzY1wiO1xufVxuLm1ubGljb24tUGVzbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWIzZFwiO1xufVxuLm1ubGljb24tUmllbEFnZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjNlXCI7XG59XG4ubW5saWNvbi1SaWVsQmFkZ2VEb2xsYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViM2ZcIjtcbn1cbi5tbmxpY29uLVJpZWxCaWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjQwXCI7XG59XG4ubW5saWNvbi1SaWVsQm9udXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNDFcIjtcbn1cbi5tbmxpY29uLVJpZWxDYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjQyXCI7XG59XG4ubW5saWNvbi1SaWVsQ2hhbmdlT2ZMaWZlSW5zdXJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI0M1wiO1xufVxuLm1ubGljb24tUmllbENvaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNDRcIjtcbn1cbi5tbmxpY29uLVJpZWxEZWJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjQ1XCI7XG59XG4ubW5saWNvbi1SaWVsRXN0YXRlTGlxdWlkaXR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjQ2XCI7XG59XG4ubW5saWNvbi1SaWVsRmluYW5jaWFsV2VsbG5lc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNDdcIjtcbn1cbi5tbmxpY29uLVJpZWxGdW5kU3dpdGNoZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNDhcIjtcbn1cbi5tbmxpY29uLVJpZWxHdWFyYW50ZWVkQ29zdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI0OVwiO1xufVxuLm1ubGljb24tUmllbE1vbmV5QmFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjRhXCI7XG59XG4ubW5saWNvbi1SaWVsUGF5VGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI0YlwiO1xufVxuLm1ubGljb24tUmllbFBheW1lbnREb25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjRjXCI7XG59XG4ubW5saWNvbi1SaWVsUGF5bWVudE9yZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjRkXCI7XG59XG4ubW5saWNvbi1SaWVsUHJpY2VNZXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI0ZVwiO1xufVxuLm1ubGljb24tUmllbFJlaW1idXJzZW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNGZcIjtcbn1cbi5tbmxpY29uLVJpZWxSb2xsT3ZlckZ1bmRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjUwXCI7XG59XG4ubW5saWNvbi1SaWVsVHJhbnNmZXJPZkV4aXN0aW5nQXNzZXRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjUxXCI7XG59XG4ubW5saWNvbi1SaWVsVHJhbnNwYXJlbnRJbkNvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNTJcIjtcbn1cbi5tbmxpY29uLVJpZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNTNcIjtcbn1cbi5tbmxpY29uLVJpbmdnaXRBZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI1NFwiO1xufVxuLm1ubGljb24tUmluZ2dpdEJhZGdlRG9sbGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjU1XCI7XG59XG4ubW5saWNvbi1SaW5nZ2l0QmlsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI1NlwiO1xufVxuLm1ubGljb24tUmluZ2dpdEJvbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjU3XCI7XG59XG4ubW5saWNvbi1SaW5nZ2l0Q2FzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI1OFwiO1xufVxuLm1ubGljb24tUmluZ2dpdENoYW5nZU9mTGlmZUluc3VyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNTlcIjtcbn1cbi5tbmxpY29uLVJpbmdnaXRDb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjVhXCI7XG59XG4ubW5saWNvbi1SaW5nZ2l0RGVidDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI1YlwiO1xufVxuLm1ubGljb24tUmluZ2dpdEVzdGF0ZUxpcXVpZGl0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI1Y1wiO1xufVxuLm1ubGljb24tUmluZ2dpdEZpbmFuY2lhbFdlbGxuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjVkXCI7XG59XG4ubW5saWNvbi1SaW5nZ2l0RnVuZFN3aXRjaGVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjVlXCI7XG59XG4ubW5saWNvbi1SaW5nZ2l0R3VhcmFudGVlZENvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNWZcIjtcbn1cbi5tbmxpY29uLVJpbmdnaXRNb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI2MFwiO1xufVxuLm1ubGljb24tUmluZ2dpdFBheVRpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNjFcIjtcbn1cbi5tbmxpY29uLVJpbmdnaXRQYXltZW50RG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI2MlwiO1xufVxuLm1ubGljb24tUmluZ2dpdFBheW1lbnRPcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI2M1wiO1xufVxuLm1ubGljb24tUmluZ2dpdFByaWNlTWV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNjRcIjtcbn1cbi5tbmxpY29uLVJpbmdnaXRSZWltYnVyc2VtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjY1XCI7XG59XG4ubW5saWNvbi1SaW5nZ2l0Um9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI2NlwiO1xufVxuLm1ubGljb24tUmluZ2dpdFRyYW5zZmVyT2ZFeGlzdGluZ0Fzc2V0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI2N1wiO1xufVxuLm1ubGljb24tUmluZ2dpdFRyYW5zcGFyZW50SW5Db3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjY4XCI7XG59XG4ubW5saWNvbi1SaW5nZ2l0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjY5XCI7XG59XG4ubW5saWNvbi1SdXBpYWhBZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI2YVwiO1xufVxuLm1ubGljb24tUnVwaWFoQmFkZ2VEb2xsYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNmJcIjtcbn1cbi5tbmxpY29uLVJ1cGlhaEJpbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNmNcIjtcbn1cbi5tbmxpY29uLVJ1cGlhaEJvbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjZkXCI7XG59XG4ubW5saWNvbi1SdXBpYWhDYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjZlXCI7XG59XG4ubW5saWNvbi1SdXBpYWhDaGFuZ2VPZkxpZmVJbnN1cmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjZmXCI7XG59XG4ubW5saWNvbi1SdXBpYWhDb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjcwXCI7XG59XG4ubW5saWNvbi1SdXBpYWhEZWJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjcxXCI7XG59XG4ubW5saWNvbi1SdXBpYWhFc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNzJcIjtcbn1cbi5tbmxpY29uLVJ1cGlhaEZpbmFuY2lhbFdlbGxuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjczXCI7XG59XG4ubW5saWNvbi1SdXBpYWhGdW5kU3dpdGNoZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNzRcIjtcbn1cbi5tbmxpY29uLVJ1cGlhaEd1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjc1XCI7XG59XG4ubW5saWNvbi1SdXBpYWhNb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI3NlwiO1xufVxuLm1ubGljb24tUnVwaWFoUGF5VGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI3N1wiO1xufVxuLm1ubGljb24tUnVwaWFoUGF5bWVudERvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViNzhcIjtcbn1cbi5tbmxpY29uLVJ1cGlhaFBheW1lbnRPcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI3OVwiO1xufVxuLm1ubGljb24tUnVwaWFoUHJpY2VNZXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI3YVwiO1xufVxuLm1ubGljb24tUnVwaWFoUmVpbWJ1cnNlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI3YlwiO1xufVxuLm1ubGljb24tUnVwaWFoUm9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI3Y1wiO1xufVxuLm1ubGljb24tUnVwaWFoVHJhbnNmZXJPZkV4aXN0aW5nQXNzZXRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjdkXCI7XG59XG4ubW5saWNvbi1SdXBpYWhUcmFuc3BhcmVudEluQ29zdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI3ZVwiO1xufVxuLm1ubGljb24tUnVwaWFoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjdmXCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJBZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI4MFwiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyQmFkZ2VEb2xsYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViODFcIjtcbn1cbi5tbmxpY29uLVNpbmdhcG9yZURvbGxhckJpbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViODJcIjtcbn1cbi5tbmxpY29uLVNpbmdhcG9yZURvbGxhckJvbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjgzXCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJDYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjg0XCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJDaGFuZ2VPZkxpZmVJbnN1cmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjg1XCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJDb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjg2XCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJEZWJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjg3XCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJFc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViODhcIjtcbn1cbi5tbmxpY29uLVNpbmdhcG9yZURvbGxhckZpbmFuY2lhbFdlbGxuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjg5XCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJGdW5kU3dpdGNoZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViOGFcIjtcbn1cbi5tbmxpY29uLVNpbmdhcG9yZURvbGxhckd1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjhiXCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJNb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI4Y1wiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyUGF5VGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI4ZFwiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyUGF5bWVudERvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViOGVcIjtcbn1cbi5tbmxpY29uLVNpbmdhcG9yZURvbGxhclBheW1lbnRPcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI4ZlwiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyUHJpY2VNZXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI5MFwiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyUmVpbWJ1cnNlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI5MVwiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyUm9sbE92ZXJGdW5kczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI5MlwiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyVHJhbnNmZXJPZkV4aXN0aW5nQXNzZXRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjkzXCI7XG59XG4ubW5saWNvbi1TaW5nYXBvcmVEb2xsYXJUcmFuc3BhcmVudEluQ29zdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI5NFwiO1xufVxuLm1ubGljb24tU2luZ2Fwb3JlRG9sbGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjk1XCI7XG59XG4ubW5saWNvbi1ZZW5BZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWI5NlwiO1xufVxuLm1ubGljb24tWWVuQmFkZ2VEb2xsYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViOTdcIjtcbn1cbi5tbmxpY29uLVllbkJpbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViOThcIjtcbn1cbi5tbmxpY29uLVllbkJvbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjk5XCI7XG59XG4ubW5saWNvbi1ZZW5DYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjlhXCI7XG59XG4ubW5saWNvbi1ZZW5DaGFuZ2VPZkxpZmVJbnN1cmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjliXCI7XG59XG4ubW5saWNvbi1ZZW5Db2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjljXCI7XG59XG4ubW5saWNvbi1ZZW5EZWJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjlkXCI7XG59XG4ubW5saWNvbi1ZZW5Fc3RhdGVMaXF1aWRpdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViOWVcIjtcbn1cbi5tbmxpY29uLVllbkZpbmFuY2lhbFdlbGxuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYjlmXCI7XG59XG4ubW5saWNvbi1ZZW5GdW5kU3dpdGNoZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViYTBcIjtcbn1cbi5tbmxpY29uLVllbkd1YXJhbnRlZWRDb3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYmExXCI7XG59XG4ubW5saWNvbi1ZZW5Nb25leUJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWJhMlwiO1xufVxuLm1ubGljb24tWWVuUGF5VGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWJhM1wiO1xufVxuLm1ubGljb24tWWVuUGF5bWVudERvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViYTRcIjtcbn1cbi5tbmxpY29uLVllblBheW1lbnRPcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWJhNVwiO1xufVxuLm1ubGljb24tWWVuUHJpY2VNZXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWJhNlwiO1xufVxuLm1ubGljb24tWWVuUmVpbWJ1cnNtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYmE3XCI7XG59XG4ubW5saWNvbi1ZZW5Sb2xsT3ZlckZ1bmRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYmE4XCI7XG59XG4ubW5saWNvbi1ZZW5UcmFuc2Zlck9mRXhpc3RpbmdBc3NldHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViYTlcIjtcbn1cbi5tbmxpY29uLVllblRyYW5zcGFyZW50SW5Db3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlYmFhXCI7XG59XG4ubW5saWNvbi1ZZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGViYWJcIjtcbn1cbi5tbmxpY29uLURvbmdBZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWJhY1wiO1xufSIsIkBpbXBvcnQgXCIuLi8uLi9nbG9iYWwuc2Nzc1wiO1xuXG4udG5jLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAmIDo6bmctZGVlcCBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hbnVsaWZlIEpIIFNhbnMgT3B0aW1pemVkXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgfVxuICAgICYgOjpuZy1kZWVwIHAge1xuICAgICAgICBmb250LWZhbWlseTogJ01hbnVsaWZlIEpIIFNhbnMgT3B0aW1pemVkJztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB9XG59XG5cbi50bmMtY29udGVudC1rbSB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgICYgOjpuZy1kZWVwIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEtobWVyIE1lZGl1bVwiO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIH1cbiAgICAmIDo6bmctZGVlcCBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS2htZXIgTGlnaHQnO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIH1cbn1cblxuLmRpc2FibGVkLWFjdGlvbi1mb290ZXItYnRuIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNTZweDtcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdC0tcGFkZGluZy10b3A6IDI1cHg7XG5cdC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG5cdC0tYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmRpc2FibGVkLWFjdGlvbi1mb290ZXItYnRuLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJNYW51bGlmZSBKSCBTYW5zIE9wdGltaXplZFwiO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDE5cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1RTYwNzM7XG4gICAgLS1jb2xvcjogIzVFNjA3Mztcbn1cblxuLmFjdGlvbi1mb290ZXItYnRuIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNTZweDtcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdC0tcGFkZGluZy10b3A6IDI1cHg7XG5cdC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG5cdC0tYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmFjdGlvbi1mb290ZXItYnRuLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJNYW51bGlmZSBKSCBTYW5zIE9wdGltaXplZFwiO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDE5cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG59IiwiLyoqXG4gKiBTd2lwZXIgOC40LjdcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjMgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogSmFudWFyeSAzMCwgMjAyM1xuICovXG5cbkBpbXBvcnQgJ3N3aXBlci12YXJzLnNjc3MnO1xuQGF0LXJvb3Qge1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3N3aXBlci1pY29ucyc7XG4gICAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCBkMDlHUmdBQkFBQUFBQVpnQUJBQUFBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBR1JBQUFBQm9BQUFBY2k2cUhrVWRFUlVZQUFBV2dBQUFBSXdBQUFDUUFZQUJYUjFCUFV3QUFCaFFBQUFBdUFBQUFOdUFZNyt4SFUxVkNBQUFGeEFBQUFGQUFBQUJtMmZQY3pVOVRMeklBQUFIY0FBQUFTZ0FBQUdCUDlWNVJZMjFoY0FBQUFrUUFBQUNJQUFBQll0NkYwY0JqZG5RZ0FBQUN6QUFBQUFRQUFBQUVBQkVCUkdkaGMzQUFBQVdZQUFBQUNBQUFBQWovL3dBRFoyeDVaZ0FBQXl3QUFBRE1BQUFEMk1IdHJ5Vm9aV0ZrQUFBQmJBQUFBREFBQUFBMkUyK2VvV2hvWldFQUFBR2NBQUFBSHdBQUFDUUM5Z0R6YUcxMGVBQUFBaWdBQUFBWkFBQUFyZ0prQUJGc2IyTmhBQUFDMEFBQUFGb0FBQUJhRlFBVUdHMWhlSEFBQUFHOEFBQUFId0FBQUNBQWNBQkFibUZ0WlFBQUEvZ0FBQUU1QUFBQ1h2RmRCd2x3YjNOMEFBQUZOQUFBQUdJQUFBQ0U1czc0aFhqYVkyQmtZR0FBWXBmNUh1L2orVzIrTW5Bek1ZREF6YVg2UWpENi80Ly9CeGo1R0E4QXVSd01ZR2tBUHl3TDEzamFZMkJrWUdBODhQOEFneDRqKy84ZlFEWWZBMUFFQldnREFJQjJCT29BZU5wallHUmdZTkJoNEdkZ1lnQUJFTW5JQUJKellOQURDUUFBQ1dnQXNRQjQybU5nWWZ6Q09JR0JsWUdCMFljeGpZR0J3UjFLZjJXUVpHaGhZR0JpWUdWbWdBRkdCaVFRa09hYXd0REFvTUJReFhqZy93RUdQY1lEREE0d05VQTJDQ2d3c0FBQU80RUw2Z0FBZU5wajJNMGd5QUFDcXhnR05XQmtaMkQ0L3dNQSt4a0RkZ0FBQUhqYVkyQmdZR2FBWUJrR1JnWVFpQUh5R01GOEZnWUhJTTNEd01IQUJHUXJNT2d5V0RMRU0xVDkvdzhVQmZFTWdMekUvLy8vUC81Ly9mL1YveHYrcjRlYUFBZU1iQXh3SVVZbUlNSEVnS1lBWWpVY3NEQXdzTEt4YzNCeWNmUHc4akVRQS9nWkJBU0ZoRVZFeGNRbEpLV2taV1RsNUJVVWxaUlZWTlhVTlRRWkJnTUFBTVIrRStnQUVRRkVBQUFBS2dBcUFDb0FOQUErQUVnQVVnQmNBR1lBY0FCNkFJUUFqZ0NZQUtJQXJBQzJBTUFBeWdEVUFONEE2QUR5QVB3QkJnRVFBUm9CSkFFdUFUZ0JRZ0ZNQVZZQllBRnFBWFFCZmdHSUFaSUJuQUdtQWJJQnpnSHNBQUI0MnUyTk1RNkNVQXlHVzU2OHg5QW5lWVlnbTRNSmJoS0ZhRXhJT0FWWDhBcGV3U3Q0QmljNEFmZUFpZDNWT0JpeER4ZlBZRXphNU8rWGZpMDRZQURnZ2lVSVVMQ3VFSks4VmhPNGJTdnBkbmt0SEk1UUNZdGRpMnNsOFpuWGFIbHFVck5LemRLY1Q4Y2pscStyd1pTdklWY3pOaWV6c2ZuUC91em5tZlBGQk5PRE0ySzdNVFE0NVlFQVpxR1A4MUFtR0djRjNpUHFPb3AwcjFTUFRhVGJWa2ZVZTRIWGo5N3dZRSt5TndXWXh3V3U0djF1Z1dIZ28zUzFYZFpFVnFXTTdFVDBjZm5MR3hXZmtnUjQybzJQdldyRE1CU0ZqL0lITGFGMHpLalJnZGlWTXdTY05SQW9XVW9INzhZMmljQi95SVkwOUFuNkFIMkJkdS9VQit5eG9wWXNoUWlFdm52dTBkVVJnRHQ4UWVDOFBEdzdGcGppM2ZFQTR6L1BFSjZZT0I1aEtoNGRqM0V2WGh4UHFIL1NLVVkzcko3c3JaNEZabmgxUE1BdFBod1A2ZmwyUE1KTVBEZ2VRNHJZOFlUNkd6YW8wZUFFQTQwOUR1Z2dtVG5Gbk9jU0NpRWlMTWd4Q2lUSTZDcTVEWlVkM1FtcDEwdk8wTGFMVGQyY2pONGZPdW1sYzdsVVliU1FjWkZrdXRSRzdnNkpLWkt5MFJtZExZNjgwQ0RuRUorVU1rcEZGZTFSTjdueGRWcFhyQzRhVHRuYXVyT25ZZXJjWmcyWVZtTE4vZC9nY3pmRWltckUvZnMvYk91cTI5Wm1uOHRsb09SYVhnWmdHYTc4eU85L2NuWG0yQnBhR3ZxMjVEdjlTNEU5KzVTSWM5UHF1cEpLaFlGU1NsNDcrUWNyMW1ZTkFBQUFlTnB0dzBjS3drQUFBTURaSkE4UTdPVUp2a0xzUGZaNnpGVkVSUHk4cUhoMllFUiszaS9CUDgzdklCTEx5U3NvS2ltcnFLcXBhMmhwNitqcTZSc1lHaG1ibUpxWlN5MHNyYXh0Yk8zc0hSeWRuRU1VNHVSNnl4N0pKWHZlUDdXckR5Y0FBQUFBQUFILy93QUNlTnBqWUdSZ1lPQUJZaGtnWmdKQ1pnWk5Ca1lHTFFadElKc0ZMTVlBQUF3M0FMZ0FlTm9saXpFS2dEQVFCQ2NoUmJDMnNGRVIwWUQ2cVZRaUJDdi9IOWV6R0k2WjVYQkF3OENCSy9tNWlRUVZhdVZiWExuT3JNWnYyb0xkS0ZhOFBqdXJ1MmhKekdhYm1PU0x6Tk16dnV0cEIzTjQybU5nWkdCZzRHS1FZekJoWU14SkxNbGo0R0JnQVlvdy9QL1BBSkpoTE02c1NvV0tmV0NBQXdEQWpnYlJBQUI0Mm1OZ1lHQmtBSUliQ1pvNUlQcm1VbjBoR0EwQU84RUZUUUFBJylcbiAgICAgIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG59XG5AYXQtcm9vdCB7XG4gIDpyb290IHtcbiAgICAtLXN3aXBlci10aGVtZS1jb2xvcjogI3skdGhlbWVDb2xvcn07XG4gIH1cbn1cbi5zd2lwZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEZpeCBvZiBXZWJraXQgZmxpY2tlcmluZyAqL1xuICB6LWluZGV4OiAxO1xufVxuLnN3aXBlci12ZXJ0aWNhbCA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3dpcGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uc3dpcGVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSxcbi5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcbn1cbi5zd2lwZXItcG9pbnRlci1ldmVudHMge1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAmLnN3aXBlci12ZXJ0aWNhbCB7XG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcbiAgfVxufVxuLnN3aXBlci1zbGlkZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cbi5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLyogQXV0byBIZWlnaHQgKi9cbi5zd2lwZXItYXV0b2hlaWdodCB7XG4gICYsXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5zd2lwZXItd3JhcHBlciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBoZWlnaHQ7XG4gIH1cbn1cbi5zd2lwZXItYmFja2ZhY2UtaGlkZGVuIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi8qIDNEIEVmZmVjdHMgKi9cbi5zd2lwZXItM2Qge1xuICAmLFxuICAmLnN3aXBlci1jc3MtbW9kZSAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG4gIH1cbiAgLnN3aXBlci13cmFwcGVyLFxuICAuc3dpcGVyLXNsaWRlLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuICAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3cge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG59XG5cbi8qIENTUyBNb2RlICovXG4uc3dpcGVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xuICB9XG59XG4uc3dpcGVyLWhvcml6b250YWwuc3dpcGVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICB9XG59XG4uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgfVxufVxuLnN3aXBlci1jZW50ZXJlZCB7XG4gID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG9yZGVyOiA5OTk5O1xuICB9XG4gICYuc3dpcGVyLWhvcml6b250YWwge1xuICAgID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSk7XG4gICAgfVxuICAgID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpO1xuICAgIH1cbiAgfVxuICAmLnN3aXBlci12ZXJ0aWNhbCB7XG4gICAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpO1xuICAgIH1cbiAgICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKTtcbiAgICB9XG4gIH1cblxuICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXIgY2VudGVyO1xuICAgIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbiAgfVxufVxuXG5cblxuIiwiQGltcG9ydCAnLi4vLi4vc3dpcGVyLXZhcnMuc2Nzcyc7XG5AYXQtcm9vdCB7XG4gIDpyb290IHtcbiAgICAvKlxuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiA4cHg7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXdpZHRoOiA4cHg7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWhlaWdodDogOHB4O1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1pbmFjdGl2ZS1jb2xvcjogIzAwMDtcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtb3BhY2l0eTogMC4yO1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1vcGFjaXR5OiAxO1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1ob3Jpem9udGFsLWdhcDogNHB4O1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC12ZXJ0aWNhbC1nYXA6IDZweDtcbiAgKi9cbiAgfVxufVxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHotaW5kZXg6IDEwO1xuICAmLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgPiAmLFxuICAmLnN3aXBlci1wYWdpbmF0aW9uLWRpc2FibGVkIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIENvbW1vbiBTdHlsZXMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4uc3dpcGVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwge1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogQnVsbGV0cyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMDtcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xuICB9XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xuICB9XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQtbmV4dCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbiAgfVxufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtd2lkdGgsIHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1zaXplLCA4cHgpKTtcbiAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaGVpZ2h0LCB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSwgOHB4KSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtY29sb3IsICMwMDApO1xuICBvcGFjaXR5OiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtb3BhY2l0eSwgMC4yKTtcbiAgQGF0LXJvb3QgYnV0dG9uI3smfSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlICYge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6b25seS1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIG9wYWNpdHk6IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1vcGFjaXR5LCAxKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuXG4uc3dpcGVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsXG4uc3dpcGVyLXBhZ2luYXRpb24tdmVydGljYWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICBtYXJnaW46IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC12ZXJ0aWNhbC1nYXAsIDZweCkgMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAmLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHRvcDtcbiAgICB9XG4gIH1cbn1cbi5zd2lwZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLFxuLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIG1hcmdpbjogMCB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaG9yaXpvbnRhbC1nYXAsIDRweCk7XG4gIH1cbiAgJi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgbGVmdDtcbiAgICB9XG4gIH1cbn1cbi5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItcnRsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyByaWdodDtcbn1cbi8qIFByb2dyZXNzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICB9XG4gIC5zd2lwZXItcnRsICYgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgfVxuICAuc3dpcGVyLWhvcml6b250YWwgPiAmLFxuICAmLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwsXG4gIC5zd2lwZXItdmVydGljYWwgPiAmLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLFxuICAmLnN3aXBlci1wYWdpbmF0aW9uLXZlcnRpY2FsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuICAuc3dpcGVyLXZlcnRpY2FsID4gJixcbiAgJi5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbCxcbiAgLnN3aXBlci1ob3Jpem9udGFsID4gJi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSxcbiAgJi5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxufVxuLnN3aXBlci1wYWdpbmF0aW9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiLyogU2Nyb2xsYmFyICovXG4uc3dpcGVyLXNjcm9sbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAuc3dpcGVyLXNjcm9sbGJhci1kaXNhYmxlZCA+ICYsXG4gICYuc3dpcGVyLXNjcm9sbGJhci1kaXNhYmxlZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5zd2lwZXItaG9yaXpvbnRhbCA+ICYsXG4gICYuc3dpcGVyLXNjcm9sbGJhci1ob3Jpem9udGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMSU7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgei1pbmRleDogNTA7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxuICAuc3dpcGVyLXZlcnRpY2FsID4gJixcbiAgJi5zd2lwZXItc2Nyb2xsYmFyLXZlcnRpY2FsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDNweDtcbiAgICB0b3A6IDElO1xuICAgIHotaW5kZXg6IDUwO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA5OCU7XG4gIH1cbn1cbi5zd2lwZXItc2Nyb2xsYmFyLWRyYWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWcge1xuICBjdXJzb3I6IG1vdmU7XG59XG4uc3dpcGVyLXNjcm9sbGJhci1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIi5zd2lwZXItem9vbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gID4gaW1nLFxuICA+IHN2ZyxcbiAgPiBjYW52YXMge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbn1cblxuLnN3aXBlci1zbGlkZS16b29tZWQge1xuICBjdXJzb3I6IG1vdmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return ClaimTncPage;
})();

/***/ }),

/***/ 27541:
/*!*******************************************************!*\
  !*** ./src/services/claim-form/claim-form.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimFormService": () => (/* binding */ ClaimFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


const STORAGE_KEY = 'claimFormData';
let ClaimFormService = /*#__PURE__*/(() => {
  class ClaimFormService {
    constructor() {
      this.formDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getInitialData());
      this.formData$ = this.formDataSubject.asObservable();
      // Optional: Listen for storage changes (if multiple tabs)
      window.addEventListener('storage', event => {
        if (event.key === STORAGE_KEY) {
          this.formDataSubject.next(this.getInitialData());
        }
      });
    }
    // Get current form data as observable
    getFormData() {
      return this.formData$;
    }
    // Get current form data as plain object
    getCurrentValue() {
      return this.formDataSubject.value;
    }
    // Update specific fields (partial update)
    updateFormData(partialData) {
      const current = this.formDataSubject.value;
      const updated = {
        ...current,
        ...partialData
      };
      this.formDataSubject.next(updated);
      this.saveToStorage(updated);
    }
    // Replace entire form data
    setFormData(data) {
      this.formDataSubject.next(data);
      this.saveToStorage(data);
    }
    // Reset to initial empty state
    resetForm() {
      const emptyData = {
        insuredPerson: '',
        contactNumber: '',
        bankName: '',
        bankAccountNumber: '',
        holderName: '',
        claimType: '',
        dateOfEvent: '',
        causeOfEvent: '',
        documents: [],
        provideDocumentLater: false
      };
      this.formDataSubject.next(emptyData);
      localStorage.removeItem(STORAGE_KEY);
    }
    // Private helpers
    saveToStorage(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to save form data to localStorage', e);
      }
    }
    getInitialData() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.error('Failed to parse saved form data', e);
      }
      return this.getEmptyData();
    }
    getEmptyData() {
      return {
        insuredPerson: '',
        contactNumber: '',
        bankName: '',
        bankAccountNumber: '',
        holderName: '',
        claimType: '',
        dateOfEvent: '',
        causeOfEvent: '',
        documents: [],
        provideDocumentLater: false
      };
    }
    static {
      this.ɵfac = function ClaimFormService_Factory(t) {
        return new (t || ClaimFormService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ClaimFormService,
        factory: ClaimFormService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ClaimFormService;
})();

/***/ }),

/***/ 90899:
/*!*********************************************************************!*\
  !*** ./src/services/claim-review-form/claim-review-form.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimReviewFormService": () => (/* binding */ ClaimReviewFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


const STORAGE_KEY = 'claimReviewFormData';
let ClaimReviewFormService = /*#__PURE__*/(() => {
  class ClaimReviewFormService {
    constructor() {
      this.formDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getInitialData());
      this.formData$ = this.formDataSubject.asObservable();
      // Optional: Listen for storage changes (if multiple tabs)
      window.addEventListener('storage', event => {
        if (event.key === STORAGE_KEY) {
          this.formDataSubject.next(this.getInitialData());
        }
      });
    }
    // Get current form data as observable
    getFormData() {
      return this.formData$;
    }
    // Get current form data as plain object
    getCurrentValue() {
      return this.formDataSubject.value;
    }
    // Update specific fields (partial update)
    updateFormData(partialData) {
      const current = this.formDataSubject.value;
      const updated = {
        ...current,
        ...partialData
      };
      this.formDataSubject.next(updated);
      this.saveToStorage(updated);
    }
    // Replace entire form data
    setFormData(data) {
      this.formDataSubject.next(data);
      this.saveToStorage(data);
    }
    // Reset to initial empty state
    resetForm() {
      const emptyData = {
        insuredPerson: '',
        contactNumber: '',
        bankName: '',
        bankAccountNumber: '',
        holderName: '',
        claimType: '',
        dateOfEvent: '',
        causeOfEvent: '',
        documents: [],
        provideDocumentLater: false
      };
      this.formDataSubject.next(emptyData);
      localStorage.removeItem(STORAGE_KEY);
    }
    // Private helpers
    saveToStorage(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to save form data to localStorage', e);
      }
    }
    getInitialData() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.error('Failed to parse saved form data', e);
      }
      return this.getEmptyData();
    }
    getEmptyData() {
      return {
        insuredPerson: '',
        contactNumber: '',
        bankName: '',
        bankAccountNumber: '',
        holderName: '',
        claimType: '',
        dateOfEvent: '',
        causeOfEvent: '',
        documents: [],
        provideDocumentLater: false
      };
    }
    static {
      this.ɵfac = function ClaimReviewFormService_Factory(t) {
        return new (t || ClaimReviewFormService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ClaimReviewFormService,
        factory: ClaimReviewFormService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ClaimReviewFormService;
})();

/***/ }),

/***/ 41230:
/*!***************************************************!*\
  !*** ./src/services/claimapi/claimapi.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimApiService": () => (/* binding */ ClaimApiService)
/* harmony export */ });
/* harmony import */ var _Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 59067);
/* harmony import */ var _translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../translate-config/translate-config.service */ 37059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);










let ClaimApiService = /*#__PURE__*/(() => {
  class ClaimApiService {
    constructor(http, httpClient, translateConfigService, translate) {
      this.http = http;
      this.httpClient = httpClient;
      this.translateConfigService = translateConfigService;
      this.translate = translate;
      this.tncenUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseAEM + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tncenUrl;
      this.tnckmUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseAEM + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tnckmUrl;
    }
    /**
     * prestige club tnc
    * @returns
    */
    getClaimTNC(path) {
      var _this = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseAEM + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.claimTNCUrl + path;
        const body = {};
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
          "strict-transport-security": 'max-age=15768000',
          "x-xss-protection": '1; mode=block'
        });
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'ios' || _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'android') {
          _this.http.setDataSerializer("json");
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_this.http.get(url, body, {})).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timeout)(30000));
        }
        return _this.httpClient.get(url, {
          headers: headers
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timeout)(30000));
      })();
    }
    /**
     * get term and condition (TNC API)
     * @returns
     */
    getTNC() {
      var _this2 = this;
      return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const body = {};
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
          "strict-transport-security": 'max-age=15768000',
          "x-xss-protection": '1; mode=block'
        });
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'ios' || _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'android') {
          console.log("mobile");
          _this2.http.setDataSerializer("json");
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_this2.http.get(_this2.translateConfigService.getCurrentLang() == "km" ? _this2.tnckmUrl : _this2.tncenUrl, body, {})).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timeout)(30000));
          ;
        } else {
          console.log("web");
          return _this2.httpClient.get(_this2.translateConfigService.getCurrentLang() == "km" ? _this2.tnckmUrl : _this2.tncenUrl, {
            headers: headers
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timeout)(30000));
        }
      })();
    }
    static {
      this.ɵfac = function ClaimApiService_Factory(t) {
        return new (t || ClaimApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_translate_config_translate_config_service__WEBPACK_IMPORTED_MODULE_6__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: ClaimApiService,
        factory: ClaimApiService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ClaimApiService;
})();

/***/ }),

/***/ 37059:
/*!*******************************************************************!*\
  !*** ./src/services/translate-config/translate-config.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateConfigService": () => (/* binding */ TranslateConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 92725);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);


let TranslateConfigService = /*#__PURE__*/(() => {
  class TranslateConfigService {
    constructor(translate) {
      this.translate = translate;
      this.currentLang = localStorage.getItem("lang");
    }
    /**
     * get default app language
     * @returns
     */
    getDefaultLanguage() {
      if (this.currentLang) {
        this.translate.setDefaultLang(this.currentLang);
      } else {
        localStorage.setItem("lang", "en");
        this.currentLang = "en";
        this.translate.setDefaultLang(this.currentLang);
      }
      return this.currentLang;
    }
    /**
     * set current language
     * @param setLang
     */
    setLanguage(setLang) {
      this.translate.use(setLang);
      localStorage.setItem("lang", setLang);
    }
    /**
     * get current language
     * @returns
     */
    getCurrentLang() {
      return localStorage.getItem("lang");
    }
    static {
      this.ɵfac = function TranslateConfigService_Factory(t) {
        return new (t || TranslateConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TranslateConfigService,
        factory: TranslateConfigService.ɵfac,
        providedIn: "root"
      });
    }
  }
  return TranslateConfigService;
})();

/***/ }),

/***/ 95609:
/*!*****************************************!*\
  !*** ./src/services/url/url.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


let UrlService = /*#__PURE__*/(() => {
  class UrlService {
    constructor() {
      this.urlTree = [];
      this.disableBtn = false;
      this.previousUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.urlTree);
      this.previousUrl$ = this.previousUrl.asObservable();
      this.disableBackBtn = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.disableBtn);
      this.disableBackBtn$ = this.disableBackBtn.asObservable();
    }
    /**
     * disable back button
     */
    setDisableBackBtn(disable) {
      this.disableBtn = disable;
      this.disableBackBtn.next(this.disableBtn);
    }
    /**
     * save previous page url
     */
    setPreviousUrl(previousUrl) {
      this.urlTree.push(previousUrl);
      this.previousUrl.next(this.urlTree);
    }
    /**
     * delete previous page url
     */
    removePreviousUrl() {
      if (this.urlTree.length > 0) {
        this.urlTree.pop();
        this.previousUrl.next(this.urlTree);
      }
    }
    /**
     * delete all previous page url
     */
    clearAllUrl() {
      this.urlTree = [];
      this.previousUrl.next(this.urlTree);
    }
    static {
      this.ɵfac = function UrlService_Factory(t) {
        return new (t || UrlService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UrlService,
        factory: UrlService.ɵfac,
        providedIn: "root"
      });
    }
  }
  return UrlService;
})();

/***/ }),

/***/ 96881:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/awesome-cordova-plugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 92580);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 33627);


var AwesomeCordovaNativePlugin = /** @class */function () {
  function AwesomeCordovaNativePlugin() {}
  /**
   * Returns a boolean that indicates whether the plugin is installed
   *
   * @returns {boolean}
   */
  AwesomeCordovaNativePlugin.installed = function () {
    var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
    return isAvailable;
  };
  /**
   * Returns the original plugin object
   */
  AwesomeCordovaNativePlugin.getPlugin = function () {
    if (typeof window !== 'undefined') {
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
    }
    return null;
  };
  /**
   * Returns the plugin's name
   */
  AwesomeCordovaNativePlugin.getPluginName = function () {
    var pluginName = this.pluginName;
    return pluginName;
  };
  /**
   * Returns the plugin's reference
   */
  AwesomeCordovaNativePlugin.getPluginRef = function () {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  /**
   * Returns the plugin's install name
   */
  AwesomeCordovaNativePlugin.getPluginInstallName = function () {
    var plugin = this.plugin;
    return plugin;
  };
  /**
   * Returns the plugin's supported platforms
   */
  AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
    var platform = this.platforms;
    return platform;
  };
  AwesomeCordovaNativePlugin.pluginName = '';
  AwesomeCordovaNativePlugin.pluginRef = '';
  AwesomeCordovaNativePlugin.plugin = '';
  AwesomeCordovaNativePlugin.repo = '';
  AwesomeCordovaNativePlugin.platforms = [];
  AwesomeCordovaNativePlugin.install = '';
  return AwesomeCordovaNativePlugin;
}();


/***/ }),

/***/ 15712:
/*!*****************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/bootstrap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
  if (typeof process === 'undefined') {
    var win_1 = typeof window !== 'undefined' ? window : {};
    var DEVICE_READY_TIMEOUT_1 = 5000;
    // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.
    var before_1 = Date.now();
    var didFireReady_1 = false;
    win_1.document.addEventListener('deviceready', function () {
      console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
      didFireReady_1 = true;
    });
    setTimeout(function () {
      if (!didFireReady_1 && win_1.cordova) {
        console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
      }
    }, DEVICE_READY_TIMEOUT_1);
  }
}

/***/ }),

/***/ 92580:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/common.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

var ERR_CORDOVA_NOT_AVAILABLE = {
  error: 'cordova_not_available'
};
var ERR_PLUGIN_NOT_INSTALLED = {
  error: 'plugin_not_installed'
};
/**
 * @param callback
 */
function getPromise(callback) {
  var tryNativePromise = function () {
    if (Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };
  if (typeof window !== 'undefined' && window.angular) {
    var doc = window.document;
    var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
    if (injector) {
      var $q = injector.get('$q');
      return $q(function (resolve, reject) {
        callback(resolve, reject);
      });
    }
    console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
  }
  return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var pluginResult, rej;
  var p = getPromise(function (resolve, reject) {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return resolve(args);
      }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return reject(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }
    rej = reject;
  });
  // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error
  if (pluginResult && pluginResult.error) {
    p.catch(function () {});
    typeof rej === 'function' && rej(pluginResult.error);
  }
  return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapOtherPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return getPromise(function (resolve, reject) {
    var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({
        error: 'unexpected_error'
      });
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapObservable(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var pluginResult;
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return observer.next(args);
      }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return observer.error(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    }
    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }
    return function () {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }
          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
        console.warn(e);
      }
    };
  });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
  element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */
function checkAvailability(plugin, methodName, pluginName) {
  var pluginRef, pluginPackage;
  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }
  var pluginInstance = getPlugin(pluginRef);
  if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
    if (typeof window === 'undefined' || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }
    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }
  return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
  return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function setIndex(args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  // ignore resolve and reject in case sync
  if (opts.sync) {
    return args;
  }
  // If the plugin method expects myMethod(success, err, options)
  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    var obj = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    var setSuccessIndex = function () {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };
    var setErrorIndex = function () {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
      // defined and thus causing non expected behavior.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }
  return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.
  args = setIndex(args, opts, resolve, reject);
  var availabilityCheck = checkAvailability(pluginObj, methodName);
  if (availabilityCheck === true) {
    var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
    // eslint-disable-next-line prefer-spread
    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  args = setIndex(args, opts, resolve, reject);
  if (instanceAvailability(pluginObj, methodName)) {
    // eslint-disable-next-line prefer-spread
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
  }
}
/**
 * @param pluginRef
 */
function getPlugin(pluginRef) {
  if (typeof window !== 'undefined') {
    return get(window, pluginRef);
  }
  return null;
}
/**
 * @param element
 * @param path
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;
  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */
function pluginWarn(pluginName, plugin, method) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
  }
  if (plugin) {
    console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
  }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
  if (typeof process === 'undefined') {
    if (method) {
      console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    } else {
      console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
          pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return observer.next(args);
          }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return observer.error(args);
          });
        } else {
          pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
        }
        return function () {
          try {
            if (opts.clearWithArgs) {
              return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
            }
            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise(function (resolve, reject) {
        var result;
        if (opts.destruct) {
          result = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return resolve(args);
          }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return reject(args);
          });
        } else {
          result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }
        if (result && result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      var pluginResult_1, rej_1;
      var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return resolve(args);
          }, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return reject(args);
          });
        } else {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej_1 = reject;
      });
      // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error
      if (pluginResult_1 && pluginResult_1.error) {
        p.catch(function () {});
        typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
      }
      return p;
    }
  };
}

/***/ }),

/***/ 94479:
/*!********************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-function-override.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ 92580);


/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj, methodName) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_1__.checkAvailability)(pluginObj, methodName);
    if (availabilityCheck === true) {
      var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getPlugin)(pluginObj.constructor.getPluginRef());
      pluginInstance_1[methodName] = observer.next.bind(observer);
      return function () {
        return pluginInstance_1[methodName] = function () {};
      };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */
function cordovaFunctionOverride(pluginObj, methodName, args) {
  if (args === void 0) {
    args = [];
  }
  return overrideFunction(pluginObj, methodName);
}

/***/ }),

/***/ 65621:
/*!***********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-instance.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 92580);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordovaInstance(pluginObj, methodName, config, args) {
  args = Array.from(args);
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 58223:
/*!***********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova-property.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 92580);

/**
 * @param pluginObj
 * @param key
 */
function cordovaPropertyGet(pluginObj, key) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
  }
  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function cordovaPropertySet(pluginObj, key, value) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
  }
}

/***/ }),

/***/ 72413:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/cordova.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 92580);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordova(pluginObj, methodName, config, args) {
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 29641:
/*!************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/instance-property.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }
  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function instancePropertySet(pluginObj, key, value) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}

/***/ }),

/***/ 64230:
/*!*****************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/decorators/interfaces.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 49471:
/*!*************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 15712);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 96881);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 92580);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 72413);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 94479);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 65621);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 58223);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 29641);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 64230);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

/***/ }),

/***/ 33627:
/*!************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/util.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;
  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}
/**
 * @param callback
 * @private
 */
function getPromise(callback) {
  if (callback === void 0) {
    callback = function () {};
  }
  var tryNativePromise = function () {
    if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };
  return tryNativePromise();
}

/***/ }),

/***/ 59067:
/*!*****************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/http/ngx/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP": () => (/* binding */ HTTP)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 49471);




var HTTP = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(HTTP, _super);
  function HTTP() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  HTTP.prototype.getBasicAuthHeader = function (username, password) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "getBasicAuthHeader", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.useBasicAuth = function (username, password) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "useBasicAuth", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.getHeaders = function (host) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "getHeaders", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.setHeader = function (host, header, value) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "setHeader", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.getDataSerializer = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "getDataSerializer", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.setDataSerializer = function (serializer) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "setDataSerializer", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.setCookie = function (url, cookie) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "setCookie", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.clearCookies = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "clearCookies", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.removeCookies = function (url, cb) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "removeCookies", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.getCookieString = function (url) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "getCookieString", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.getRequestTimeout = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "getRequestTimeout", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.setRequestTimeout = function (timeout) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "setRequestTimeout", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.getFollowRedirect = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "getFollowRedirect", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.setFollowRedirect = function (follow) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "setFollowRedirect", {
      "sync": true
    }, arguments);
  };
  HTTP.prototype.setServerTrustMode = function (mode) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "setServerTrustMode", {}, arguments);
  };
  HTTP.prototype.setClientAuthMode = function (mode, options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "setClientAuthMode", {}, arguments);
  };
  HTTP.prototype.post = function (url, body, headers) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "post", {}, arguments);
  };
  HTTP.prototype.postSync = function (url, body, headers, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "post", {
      "methodName": "post",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.get = function (url, parameters, headers) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "get", {}, arguments);
  };
  HTTP.prototype.getSync = function (url, parameters, headers, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "get", {
      "methodName": "get",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.put = function (url, body, headers) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "put", {}, arguments);
  };
  HTTP.prototype.putSync = function (url, body, headers, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "put", {
      "methodName": "put",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.patch = function (url, body, headers) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "patch", {}, arguments);
  };
  HTTP.prototype.patchSync = function (url, body, headers, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "patch", {
      "methodName": "patch",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.delete = function (url, parameters, headers) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "delete", {}, arguments);
  };
  HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "delete", {
      "methodName": "delete",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.head = function (url, parameters, headers) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "head", {}, arguments);
  };
  HTTP.prototype.headSync = function (url, parameters, headers, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "head", {
      "methodName": "head",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.options = function (url, parameters, headers) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "options", {}, arguments);
  };
  HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "options", {
      "methodName": "options",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "uploadFile", {}, arguments);
  };
  HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "uploadFile", {
      "methodName": "uploadFile",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.downloadFile = function (url, body, headers, filePath) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "downloadFile", {}, arguments);
  };
  HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "downloadFile", {
      "methodName": "downloadFile",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.sendRequest = function (url, options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "sendRequest", {}, arguments);
  };
  HTTP.prototype.sendRequestSync = function (url, options, success, failure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "sendRequest", {
      "methodName": "sendRequest",
      "sync": true
    }, arguments);
  };
  HTTP.prototype.abort = function (requestId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordova)(this, "abort", {}, arguments);
  };
  Object.defineProperty(HTTP.prototype, "ErrorCode", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordovaPropertyGet)(this, "ErrorCode");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.cordovaPropertySet)(this, "ErrorCode", value);
    },
    enumerable: false,
    configurable: true
  });
  HTTP.ɵfac = /* @__PURE__ */function () {
    let ɵHTTP_BaseFactory;
    return function HTTP_Factory(t) {
      return (ɵHTTP_BaseFactory || (ɵHTTP_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](HTTP)))(t || HTTP);
    };
  }();
  HTTP.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HTTP,
    factory: HTTP.ɵfac
  });
  HTTP.pluginName = "HTTP";
  HTTP.plugin = "cordova-plugin-advanced-http";
  HTTP.pluginRef = "cordova.plugin.http";
  HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
  HTTP.platforms = ["Android", "iOS"];
  HTTP = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([], HTTP);
  return HTTP;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/***/ }),

/***/ 26549:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "buildRequestInit": () => (/* binding */ buildRequestInit),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };
  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };
  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };
  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};
const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;
const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;
  const config = webPlugin.config;
  const Plugins = cap.Plugins;
  if (!(config === null || config === void 0 ? void 0 : config.name)) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  }
  // TODO: add link to upgrade guide
  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};
var ExceptionCode = /*#__PURE__*/(() => {
  (function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
  })(ExceptionCode || (ExceptionCode = {}));
  return ExceptionCode;
})();
class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
const getPlatformId = win => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};
const createCapacitor = win => {
  var _a, _b, _c, _d, _e;
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */
  const capPlatforms = win.CapacitorPlatforms;
  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
  const defaultIsNativePlatform = () => getPlatform() !== 'web';
  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }
    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }
    return false;
  };
  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
  const defaultGetPluginHeader = pluginName => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };
  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
  const handleError = err => win.console.error(err);
  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };
  const registeredPlugins = new Map();
  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      });
      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = prop => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }
        return p;
      };
      // Some flair ✨
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });
        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();
      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;
          case 'toJSON':
            return () => ({});
          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;
          case 'removeListener':
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };
  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
  // Add in convertFileSrc for web, it will already be available in native context
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  // Deprecated props
  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};
const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};
    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }
  addListener(eventName, listenerFunc) {
    var _this = this;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listenerFunc);
    // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });
      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();
    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });
        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }
  removeAllListeners() {
    var _this2 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};
      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }
      _this2.windowListeners = {};
    })();
  }
  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    var _this3 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      _this3.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
}
const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
/**
 * Safely web decode a string value (inspired by js-cookie)
 * @param str The string value to decode
 */
const decode = str => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class CapacitorCookiesPluginWeb extends WebPlugin {
  getCookies() {
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(';').forEach(cookie => {
        if (cookie.length <= 0) return;
        // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="
        let [key, value] = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE');
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    })();
  }
  setCookie(options) {
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        // Clean & sanitize options
        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="
        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : '';
        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  deleteCookie(options) {
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearCookies() {
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearAllCookies() {
    var _this4 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
}
const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
});
// UTILITY FUNCTIONS
/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        // remove prefix "data:application/pdf;base64,"
        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(blob);
    });
  });
  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */
const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */
const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      // last character will always be "&" so slice it off
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, '');
  // Remove initial "&" from the reduce
  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */
const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra);
  // Get the content-type
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || '';
  // If body is already a string, then pass it through as-is.
  if (typeof options.data === 'string') {
    output.body = options.data;
  }
  // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes('multipart/form-data') || options.data instanceof FormData) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
// WEB IMPLEMENTATION
class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || '';
      // Default to 'text' responseType so no parsing happens
      let {
        responseType = 'text'
      } = response.ok ? options : {};
      // If the response content-type is json, force the response to be json
      if (contentType.includes('application/json')) {
        responseType = 'json';
      }
      let data;
      let blob;
      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case 'json':
          data = yield response.json();
          break;
        case 'document':
        case 'text':
        default:
          data = yield response.text();
      }
      // Convert fetch headers to Capacitor HttpHeaders
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    var _this5 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    var _this6 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    var _this7 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    var _this8 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    var _this9 = this;
    return (0,_Users_weechungchen_Desktop_kh_manulife_claim_module_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }
}
const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 63279:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPLETE_NOTIFICATION": () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   "createNotification": () => (/* binding */ createNotification),
/* harmony export */   "errorNotification": () => (/* binding */ errorNotification),
/* harmony export */   "nextNotification": () => (/* binding */ nextNotification)
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

/***/ }),

/***/ 90833:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 19904);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 26078);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 24585);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 60629);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 99057);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 92971);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 12309);







let Observable = /*#__PURE__*/(() => {
  class Observable {
    constructor(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    lift(operator) {
      const observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    }
    subscribe(observerOrNext, error, complete) {
      const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
        const {
          operator,
          source
        } = this;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
      });
      return subscriber;
    }
    _trySubscribe(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    }
    forEach(next, promiseCtor) {
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor((resolve, reject) => {
        const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
          next: value => {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        this.subscribe(subscriber);
      });
    }
    _subscribe(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    }
    [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
      return this;
    }
    pipe(...operations) {
      return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
    }
    toPromise(promiseCtor) {
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor((resolve, reject) => {
        let value;
        this.subscribe(x => value = x, err => reject(err), () => resolve(value));
      });
    }
  }
  Observable.create = subscribe => {
    return new Observable(subscribe);
  };
  return Observable;
})();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ 19904:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_OBSERVER": () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   "SafeSubscriber": () => (/* binding */ SafeSubscriber),
/* harmony export */   "Subscriber": () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 92971);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 26078);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 99057);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 84709);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 99635);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 63279);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 93542);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 12309);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop
};

/***/ }),

/***/ 26078:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_SUBSCRIPTION": () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   "Subscription": () => (/* binding */ Subscription),
/* harmony export */   "isSubscription": () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 92971);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 92524);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 39663);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ 99057:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/config.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ 54987:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromArrayLike": () => (/* binding */ fromArrayLike),
/* harmony export */   "fromAsyncIterable": () => (/* binding */ fromAsyncIterable),
/* harmony export */   "fromInteropObservable": () => (/* binding */ fromInteropObservable),
/* harmony export */   "fromIterable": () => (/* binding */ fromIterable),
/* harmony export */   "fromPromise": () => (/* binding */ fromPromise),
/* harmony export */   "fromReadableStreamLike": () => (/* binding */ fromReadableStreamLike),
/* harmony export */   "innerFrom": () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 99806);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 79548);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 90833);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 21331);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 80470);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 27785);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 23433);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 20181);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 92971);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 84709);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 24585);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 93945:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorSubscriber": () => (/* binding */ OperatorSubscriber),
/* harmony export */   "createOperatorSubscriber": () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 19904);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 63853:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/concatMap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatMap": () => (/* binding */ concatMap)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeMap */ 51353);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 92971);


function concatMap(project, resultSelector) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector) ? (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(project, resultSelector, 1) : (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(project, 1);
}

/***/ }),

/***/ 60116:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/filter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}

/***/ }),

/***/ 50635:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/map.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

/***/ }),

/***/ 99280:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeInternals": () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 54987);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 1817);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

/***/ }),

/***/ 51353:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeMap": () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 50635);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 54987);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ 99280);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 92971);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent));
}

/***/ }),

/***/ 93542:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutProvider": () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 67321:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSymbolIterator": () => (/* binding */ getSymbolIterator),
/* harmony export */   "iterator": () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 24585:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observable": () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 92524:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscriptionError": () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 27543);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});

/***/ }),

/***/ 39663:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrRemove": () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ 27543:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createErrorClass": () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ 12309:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "captureError": () => (/* binding */ captureError),
/* harmony export */   "errorContext": () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 99057);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ 1817:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeSchedule": () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

/***/ }),

/***/ 89173:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ 99806:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArrayLike": () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 80470:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAsyncIterable": () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 92971);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 92971:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ 21331:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInteropObservable": () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 24585);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 92971);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 23433:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIterable": () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 67321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 92971);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 79548:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPromise": () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 92971);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 20181:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isReadableStreamLike": () => (/* binding */ isReadableStreamLike),
/* harmony export */   "readableStreamLikeToAsyncGenerator": () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 92971);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 41944:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLift": () => (/* binding */ hasLift),
/* harmony export */   "operate": () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 92971);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 99635:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 60629:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "pipeFromArray": () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 89173);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 84709:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reportUnhandledError": () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 99057);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 93542);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ 27785:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInvalidObservableTypeError": () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

/***/ }),

/***/ 58987:
/*!********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2020/http.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_INTERCEPTORS": () => (/* binding */ HTTP_INTERCEPTORS),
/* harmony export */   "HttpBackend": () => (/* binding */ HttpBackend),
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient),
/* harmony export */   "HttpClientJsonpModule": () => (/* binding */ HttpClientJsonpModule),
/* harmony export */   "HttpClientModule": () => (/* binding */ HttpClientModule),
/* harmony export */   "HttpClientXsrfModule": () => (/* binding */ HttpClientXsrfModule),
/* harmony export */   "HttpContext": () => (/* binding */ HttpContext),
/* harmony export */   "HttpContextToken": () => (/* binding */ HttpContextToken),
/* harmony export */   "HttpErrorResponse": () => (/* binding */ HttpErrorResponse),
/* harmony export */   "HttpEventType": () => (/* binding */ HttpEventType),
/* harmony export */   "HttpFeatureKind": () => (/* binding */ HttpFeatureKind),
/* harmony export */   "HttpHandler": () => (/* binding */ HttpHandler),
/* harmony export */   "HttpHeaderResponse": () => (/* binding */ HttpHeaderResponse),
/* harmony export */   "HttpHeaders": () => (/* binding */ HttpHeaders),
/* harmony export */   "HttpParams": () => (/* binding */ HttpParams),
/* harmony export */   "HttpRequest": () => (/* binding */ HttpRequest),
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse),
/* harmony export */   "HttpResponseBase": () => (/* binding */ HttpResponseBase),
/* harmony export */   "HttpUrlEncodingCodec": () => (/* binding */ HttpUrlEncodingCodec),
/* harmony export */   "HttpXhrBackend": () => (/* binding */ HttpXhrBackend),
/* harmony export */   "HttpXsrfTokenExtractor": () => (/* binding */ HttpXsrfTokenExtractor),
/* harmony export */   "JsonpClientBackend": () => (/* binding */ JsonpClientBackend),
/* harmony export */   "JsonpInterceptor": () => (/* binding */ JsonpInterceptor),
/* harmony export */   "XhrFactory": () => (/* binding */ XhrFactory),
/* harmony export */   "provideHttpClient": () => (/* binding */ provideHttpClient),
/* harmony export */   "withInterceptors": () => (/* binding */ withInterceptors),
/* harmony export */   "withInterceptorsFromDi": () => (/* binding */ withInterceptorsFromDi),
/* harmony export */   "withJsonpSupport": () => (/* binding */ withJsonpSupport),
/* harmony export */   "withNoXsrfProtection": () => (/* binding */ withNoXsrfProtection),
/* harmony export */   "withRequestsMadeViaParent": () => (/* binding */ withRequestsMadeViaParent),
/* harmony export */   "withXsrfConfiguration": () => (/* binding */ withXsrfConfiguration),
/* harmony export */   "ɵHttpInterceptingHandler": () => (/* binding */ HttpInterceptorHandler),
/* harmony export */   "ɵHttpInterceptorHandler": () => (/* binding */ HttpInterceptorHandler)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 23720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 63853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/**
 * @license Angular v15.2.10
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */








/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
class HttpHandler {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {}

/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    this.normalizedNames = new Map();
    /**
     * Queued updates to be materialized the next initialization.
     */
    this.lazyUpdate = null;
    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map();
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':');
          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);
            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          assertValidHeaders(headers);
        }
        this.headers = new Map();
        Object.entries(headers).forEach(([name, values]) => {
          let headerValues;
          if (typeof values === 'string') {
            headerValues = [values];
          } else if (typeof values === 'number') {
            headerValues = [values.toString()];
          } else {
            headerValues = values.map(value => value.toString());
          }
          if (headerValues.length > 0) {
            const key = name.toLowerCase();
            this.headers.set(key, headerValues);
            this.maybeSetNormalizedName(name, key);
          }
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */
  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */
  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */
  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */
  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */
  append(name, value) {
    return this.clone({
      name,
      value,
      op: 'a'
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */
  set(name, value) {
    return this.clone({
      name,
      value,
      op: 's'
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */
  delete(name, value) {
    return this.clone({
      name,
      value,
      op: 'd'
    });
  }
  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }
  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }
      this.lazyInit = null;
      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }
  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }
  clone(update) {
    const clone = new HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }
  applyUpdate(update) {
    const key = update.name.toLowerCase();
    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value;
        if (typeof value === 'string') {
          value = [value];
        }
        if (value.length === 0) {
          return;
        }
        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;
      case 'd':
        const toDelete = update.value;
        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);
          if (!existing) {
            return;
          }
          existing = existing.filter(value => toDelete.indexOf(value) === -1);
          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }
        break;
    }
  }
  /**
   * @internal
   */
  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }
}
/**
 * Verifies that the headers object has the right shape: the values
 * must be either strings, numbers or arrays. Throws an error if an invalid
 * header value is present.
 */
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === 'string' || typeof value === 'number') && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. ` + `Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */
  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */
  decodeValue(value) {
    return decodeURIComponent(value);
  }
}
function paramParser(rawParams, codec) {
  const map = new Map();
  if (rawParams.length > 0) {
    // The `window.location.search` can be used while creating an instance of the `HttpParams` class
    // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
    // may start with the `?` char, so we strip it if it's present.
    const params = rawParams.replace(/^\?/, '').split('&');
    params.forEach(param => {
      const eqIdx = param.indexOf('=');
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }
  return map;
}
/**
 * Encode input string with standard encodeURIComponent and then un-encode specific characters.
 */
const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
  '40': '@',
  '3A': ':',
  '24': '$',
  '2C': ',',
  '3B': ';',
  '3D': '=',
  '3F': '?',
  '2F': '/'
};
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();
    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }
      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(key => {
        const value = options.fromObject[key];
        // convert the values to strings
        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */
  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */
  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */
  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */
  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */
  append(param, value) {
    return this.clone({
      param,
      value,
      op: 'a'
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */
  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach(param => {
      const value = params[param];
      if (Array.isArray(value)) {
        value.forEach(_value => {
          updates.push({
            param,
            value: _value,
            op: 'a'
          });
        });
      } else {
        updates.push({
          param,
          value: value,
          op: 'a'
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */
  set(param, value) {
    return this.clone({
      param,
      value,
      op: 's'
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */
  delete(param, value) {
    return this.clone({
      param,
      value,
      op: 'd'
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */
  toString() {
    this.init();
    return this.keys().map(key => {
      const eKey = this.encoder.encodeKey(key);
      // `a: ['1']` produces `'a=1'`
      // `b: []` produces `''`
      // `c: ['1', '2']` produces `'c=1&c=2'`
      return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value)).join('&');
    })
    // filter out empty values because `b: []` produces `''`
    // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
    .filter(param => param !== '').join('&');
  }
  clone(update) {
    const clone = new HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }
  init() {
    if (this.map === null) {
      this.map = new Map();
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;
          case 'd':
            if (update.value !== undefined) {
              let base = this.map.get(update.param) || [];
              const idx = base.indexOf(valueToString(update.value));
              if (idx !== -1) {
                base.splice(idx, 1);
              }
              if (base.length > 0) {
                this.map.set(update.param, base);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }
        }
      });
      this.cloneFrom = this.updates = null;
    }
  }
}

/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */
class HttpContextToken {
  constructor(defaultValue) {
    this.defaultValue = defaultValue;
  }
}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */
class HttpContext {
  constructor() {
    this.map = new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */
  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */
  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }
    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */
  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */
  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */
  keys() {
    return this.map.keys();
  }
}

/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;
    default:
      return true;
  }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */
    this.body = null;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */
    this.reportProgress = false;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */
    this.withCredentials = false;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */
    this.responseType = 'json';
    this.method = method.toUpperCase();
    // Next, need to figure out which argument holds the HttpRequestInit
    // options, if any.
    let options;
    // Check whether a body argument is expected. The only valid way to omit
    // the body argument is to use a known no-body method like GET.
    if (mightHaveBody(this.method) || !!fourth) {
      // Body is the third argument, options are the fourth.
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      // No body required, options are the third argument. The body stays null.
      options = third;
    }
    // If options have been passed, interpret them.
    if (options) {
      // Normalize reportProgress and withCredentials.
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials;
      // Override default response type of 'json' if one is provided.
      if (!!options.responseType) {
        this.responseType = options.responseType;
      }
      // Override headers if they're provided.
      if (!!options.headers) {
        this.headers = options.headers;
      }
      if (!!options.context) {
        this.context = options.context;
      }
      if (!!options.params) {
        this.params = options.params;
      }
    }
    // If no headers have been passed in, construct a new HttpHeaders instance.
    if (!this.headers) {
      this.headers = new HttpHeaders();
    }
    // If no context have been passed in, construct a new HttpContext instance.
    if (!this.context) {
      this.context = new HttpContext();
    }
    // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      // Encode the parameters to a string in preparation for inclusion in the URL.
      const params = this.params.toString();
      if (params.length === 0) {
        // No parameters, the visible URL is just the URL given at creation time.
        this.urlWithParams = url;
      } else {
        // Does the URL already have query parameters? Look for '?'.
        const qIdx = url.indexOf('?');
        // There are 3 cases to handle:
        // 1) No existing parameters -> append '?' followed by params.
        // 2) '?' exists and is followed by existing query string ->
        //    append '&' followed by params.
        // 3) '?' exists at the end of the url -> append params directly.
        // This basically amounts to determining the character, if any, with
        // which to join the URL and parameters.
        const sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */
  serializeBody() {
    // If no body is present, no need to serialize it.
    if (this.body === null) {
      return null;
    }
    // Check whether the body is already in a serialized form. If so,
    // it can just be returned directly.
    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body) || typeof this.body === 'string') {
      return this.body;
    }
    // Check whether the body is an instance of HttpUrlEncodedParams.
    if (this.body instanceof HttpParams) {
      return this.body.toString();
    }
    // Check whether the body is an object or array, and serialize with JSON if so.
    if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    }
    // Fall back on toString() for everything else.
    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */
  detectContentTypeHeader() {
    // An empty body has no content type.
    if (this.body === null) {
      return null;
    }
    // FormData bodies rely on the browser's content type assignment.
    if (isFormData(this.body)) {
      return null;
    }
    // Blobs usually have their own content type. If it doesn't, then
    // no type can be inferred.
    if (isBlob(this.body)) {
      return this.body.type || null;
    }
    // Array buffers have unknown contents and thus no type can be inferred.
    if (isArrayBuffer(this.body)) {
      return null;
    }
    // Technically, strings could be a form of JSON data, but it's safe enough
    // to assume they're plain strings.
    if (typeof this.body === 'string') {
      return 'text/plain';
    }
    // `HttpUrlEncodedParams` has its own content-type.
    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    // Arrays, objects, boolean and numbers will be encoded as JSON.
    if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
      return 'application/json';
    }
    // No type could be inferred.
    return null;
  }
  clone(update = {}) {
    // For method, url, and responseType, take the current value unless
    // it is overridden in the update hash.
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType;
    // The body is somewhat special - a `null` value in update.body means
    // whatever current body is present is being overridden with an empty
    // body, whereas an `undefined` value in update.body implies no
    // override.
    const body = update.body !== undefined ? update.body : this.body;
    // Carefully handle the boolean options to differentiate between
    // `false` and `undefined` in the update args.
    const withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
    const reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress;
    // Headers and params may be appended to if `setHeaders` or
    // `setParams` are used.
    let headers = update.headers || this.headers;
    let params = update.params || this.params;
    // Pass on context if needed
    const context = update.context ?? this.context;
    // Check whether the caller has asked to add headers.
    if (update.setHeaders !== undefined) {
      // Set every requested header.
      headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
    }
    // Check whether the caller has asked to set params.
    if (update.setParams) {
      // Set every requested param.
      params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
    }
    // Finally, construct the new HttpRequest using the pieces from above.
    return new HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials
    });
  }
}

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType = /*#__PURE__*/(() => {
  HttpEventType = HttpEventType || {};
  /**
   * The request was sent out over the wire.
   */
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  /**
   * An upload progress event was received.
   */
  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  /**
   * The response status code and headers were received.
   */
  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  /**
   * A download progress event was received.
   */
  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  /**
   * The full response including the body was received.
   */
  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  /**
   * A custom event from an interceptor or a backend.
   */
  HttpEventType[HttpEventType["User"] = 5] = "User";
  return HttpEventType;
})();
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200 /* HttpStatusCode.Ok */, defaultStatusText = 'OK') {
    // If the hash has values passed, use them to initialize the response.
    // Otherwise use the default values.
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== undefined ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null;
    // Cache the ok value to avoid defining a getter.
    this.ok = this.status >= 200 && this.status < 300;
  }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */
  clone(update = {}) {
    // Perform a straightforward initialization of the new HttpHeaderResponse,
    // overriding the current parameters with new ones if given.
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== undefined ? init.body : null;
  }
  clone(update = {}) {
    return new HttpResponse({
      body: update.body !== undefined ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
  constructor(init) {
    // Initialize with a default status of 0 / Unknown Error.
    super(init, 0, 'Unknown Error');
    this.name = 'HttpErrorResponse';
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */
    this.ok = false;
    // If the response was successful, then this was a parse error. Otherwise, it was
    // a protocol-level failure of some sort. Either the request failed in transit
    // or the server returned an unsuccessful status code.
    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
    }
    this.error = init.error || null;
  }
}

/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials
  };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/tour-of-heroes/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */
let HttpClient = /*#__PURE__*/(() => {
  class HttpClient {
    constructor(handler) {
      this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    request(first, url, options = {}) {
      let req;
      // First, check whether the primary argument is an instance of `HttpRequest`.
      if (first instanceof HttpRequest) {
        // It is. The other arguments must be undefined (per the signatures) and can be
        // ignored.
        req = first;
      } else {
        // It's a string, so it represents a URL. Construct a request based on it,
        // and incorporate the remaining arguments (assuming `GET` unless a method is
        // provided.
        // Figure out the headers.
        let headers = undefined;
        if (options.headers instanceof HttpHeaders) {
          headers = options.headers;
        } else {
          headers = new HttpHeaders(options.headers);
        }
        // Sort out parameters.
        let params = undefined;
        if (!!options.params) {
          if (options.params instanceof HttpParams) {
            params = options.params;
          } else {
            params = new HttpParams({
              fromObject: options.params
            });
          }
        }
        // Construct the request.
        req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
          headers,
          context: options.context,
          params,
          reportProgress: options.reportProgress,
          // By default, JSON is assumed to be returned for all calls.
          responseType: options.responseType || 'json',
          withCredentials: options.withCredentials
        });
      }
      // Start with an Observable.of() the initial request, and run the handler (which
      // includes all interceptors) inside a concatMap(). This way, the handler runs
      // inside an Observable chain, which causes interceptors to be re-run on every
      // subscription (this also makes retries re-run the handler, including interceptors).
      const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(req => this.handler.handle(req)));
      // If coming via the API signature which accepts a previously constructed HttpRequest,
      // the only option is to get the event stream. Otherwise, return the event stream if
      // that is what was requested.
      if (first instanceof HttpRequest || options.observe === 'events') {
        return events$;
      }
      // The requested stream contains either the full response or the body. In either
      // case, the first step is to filter the event stream to extract a stream of
      // responses(s).
      const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof HttpResponse));
      // Decide which stream to return.
      switch (options.observe || 'body') {
        case 'body':
          // The requested stream is the body. Map the response stream to the response
          // body. This could be done more simply, but a misbehaving interceptor might
          // transform the response body into a different format and ignore the requested
          // responseType. Guard against this by validating that the response is of the
          // requested type.
          switch (req.responseType) {
            case 'arraybuffer':
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
                // Validate that the body is an ArrayBuffer.
                if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                  throw new Error('Response is not an ArrayBuffer.');
                }
                return res.body;
              }));
            case 'blob':
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
                // Validate that the body is a Blob.
                if (res.body !== null && !(res.body instanceof Blob)) {
                  throw new Error('Response is not a Blob.');
                }
                return res.body;
              }));
            case 'text':
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
                // Validate that the body is a string.
                if (res.body !== null && typeof res.body !== 'string') {
                  throw new Error('Response is not a string.');
                }
                return res.body;
              }));
            case 'json':
            default:
              // No validation needed for JSON responses, as they can be of any type.
              return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => res.body));
          }
        case 'response':
          // The response stream was requested directly, so return it.
          return res$;
        default:
          // Guard against new future observe types being added.
          throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
      }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    delete(url, options = {}) {
      return this.request('DELETE', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    get(url, options = {}) {
      return this.request('GET', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    head(url, options = {}) {
      return this.request('HEAD', url, options);
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    jsonp(url, callbackParam) {
      return this.request('JSONP', url, {
        params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
        observe: 'body',
        responseType: 'json'
      });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilities of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    options(url, options = {}) {
      return this.request('OPTIONS', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    patch(url, body, options = {}) {
      return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    post(url, body, options = {}) {
      return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    put(url, body, options = {}) {
      return this.request('PUT', url, addBody(options, body));
    }
  }
  HttpClient.ɵfac = function HttpClient_Factory(t) {
    return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpHandler));
  };
  HttpClient.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpClient,
    factory: HttpClient.ɵfac
  });
  return HttpClient;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
/**
 * Constructs a `ChainedInterceptorFn` which adapts a legacy `HttpInterceptor` to the
 * `ChainedInterceptorFn` interface.
 */
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
/**
 * Constructs a `ChainedInterceptorFn` which wraps and invokes a functional interceptor in the given
 * injector.
 */
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  // clang-format off
  return (initialRequest, finalHandlerFn) => injector.runInContext(() => interceptorFn(initialRequest, downstreamRequest => chainTailFn(downstreamRequest, finalHandlerFn)));
  // clang-format on
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HTTP_INTERCEPTORS');
/**
 * A multi-provided token of `HttpInterceptorFn`s.
 */
const HTTP_INTERCEPTOR_FNS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HTTP_INTERCEPTOR_FNS');
/**
 * Creates an `HttpInterceptorFn` which lazily initializes an interceptor chain from the legacy
 * class-based interceptors and runs the request through it.
 */
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HTTP_INTERCEPTORS, {
        optional: true
      }) ?? [];
      // Note: interceptors are wrapped right-to-left so that final execution order is
      // left-to-right. That is, if `interceptors` is the array `[a, b, c]`, we want to
      // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
      // out.
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    return chain(req, handler);
  };
}
let HttpInterceptorHandler = /*#__PURE__*/(() => {
  class HttpInterceptorHandler extends HttpHandler {
    constructor(backend, injector) {
      super();
      this.backend = backend;
      this.injector = injector;
      this.chain = null;
    }
    handle(initialRequest) {
      if (this.chain === null) {
        const dedupedInterceptorFns = Array.from(new Set(this.injector.get(HTTP_INTERCEPTOR_FNS)));
        // Note: interceptors are wrapped right-to-left so that final execution order is
        // left-to-right. That is, if `dedupedInterceptorFns` is the array `[a, b, c]`, we want to
        // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
        // out.
        this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
      }
      return this.chain(initialRequest, downstreamRequest => this.backend.handle(downstreamRequest));
    }
  }
  HttpInterceptorHandler.ɵfac = function HttpInterceptorHandler_Factory(t) {
    return new (t || HttpInterceptorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
  };
  HttpInterceptorHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpInterceptorHandler,
    factory: HttpInterceptorHandler.ɵfac
  });
  return HttpInterceptorHandler;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
/**
 * When a pending <script> is unsubscribed we'll move it to this document, so it won't be
 * executed.
 */
let foreignDocument;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
// Error text given when a request is passed to the JsonpClientBackend that has
// headers set
const JSONP_ERR_HEADERS_NOT_SUPPORTED = 'JSONP requests do not support headers.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }
  return {};
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see {@link HttpHandler}
 * @see {@link HttpXhrBackend}
 *
 * @publicApi
 */
let JsonpClientBackend = /*#__PURE__*/(() => {
  class JsonpClientBackend {
    constructor(callbackMap, document) {
      this.callbackMap = callbackMap;
      this.document = document;
      /**
       * A resolved promise that can be used to schedule microtasks in the event handlers.
       */
      this.resolvedPromise = Promise.resolve();
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    nextCallback() {
      return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req) {
      // Firstly, check both the method and response type. If either doesn't match
      // then the request was improperly routed here and cannot be handled.
      if (req.method !== 'JSONP') {
        throw new Error(JSONP_ERR_WRONG_METHOD);
      } else if (req.responseType !== 'json') {
        throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
      }
      // Check the request headers. JSONP doesn't support headers and
      // cannot set any that were supplied.
      if (req.headers.keys().length > 0) {
        throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
      }
      // Everything else happens inside the Observable boundary.
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        // The first step to make a request is to generate the callback name, and replace the
        // callback placeholder in the URL with the name. Care has to be taken here to ensure
        // a trailing &, if matched, gets inserted back into the URL in the correct place.
        const callback = this.nextCallback();
        const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
        // Construct the <script> tag and point it at the URL.
        const node = this.document.createElement('script');
        node.src = url;
        // A JSONP request requires waiting for multiple callbacks. These variables
        // are closed over and track state across those callbacks.
        // The response object, if one has been received, or null otherwise.
        let body = null;
        // Whether the response callback has been called.
        let finished = false;
        // Set the response callback in this.callbackMap (which will be the window
        // object in the browser. The script being loaded via the <script> tag will
        // eventually call this callback.
        this.callbackMap[callback] = data => {
          // Data has been received from the JSONP script. Firstly, delete this callback.
          delete this.callbackMap[callback];
          // Set state to indicate data was received.
          body = data;
          finished = true;
        };
        // cleanup() is a utility closure that removes the <script> from the page and
        // the response callback from the window. This logic is used in both the
        // success, error, and cancellation paths, so it's extracted out for convenience.
        const cleanup = () => {
          // Remove the <script> tag if it's still on the page.
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
          // Remove the response callback from the callbackMap (window object in the
          // browser).
          delete this.callbackMap[callback];
        };
        // onLoad() is the success callback which runs after the response callback
        // if the JSONP script loads successfully. The event itself is unimportant.
        // If something went wrong, onLoad() may run without the response callback
        // having been invoked.
        const onLoad = event => {
          // We wrap it in an extra Promise, to ensure the microtask
          // is scheduled after the loaded endpoint has executed any potential microtask itself,
          // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
          this.resolvedPromise.then(() => {
            // Cleanup the page.
            cleanup();
            // Check whether the response callback has run.
            if (!finished) {
              // It hasn't, something went wrong with the request. Return an error via
              // the Observable error path. All JSONP errors have status 0.
              observer.error(new HttpErrorResponse({
                url,
                status: 0,
                statusText: 'JSONP Error',
                error: new Error(JSONP_ERR_NO_CALLBACK)
              }));
              return;
            }
            // Success. body either contains the response body or null if none was
            // returned.
            observer.next(new HttpResponse({
              body,
              status: 200 /* HttpStatusCode.Ok */,
              statusText: 'OK',
              url
            }));
            // Complete the stream, the response is over.
            observer.complete();
          });
        };
        // onError() is the error callback, which runs if the script returned generates
        // a Javascript error. It emits the error via the Observable error channel as
        // a HttpErrorResponse.
        const onError = error => {
          cleanup();
          // Wrap the error in a HttpErrorResponse.
          observer.error(new HttpErrorResponse({
            error,
            status: 0,
            statusText: 'JSONP Error',
            url
          }));
        };
        // Subscribe to both the success (load) and error events on the <script> tag,
        // and add it to the page.
        node.addEventListener('load', onLoad);
        node.addEventListener('error', onError);
        this.document.body.appendChild(node);
        // The request has now been successfully sent.
        observer.next({
          type: HttpEventType.Sent
        });
        // Cancellation handler.
        return () => {
          if (!finished) {
            this.removeListeners(node);
          }
          // And finally, clean up the page.
          cleanup();
        };
      });
    }
    removeListeners(script) {
      // Issue #34818
      // Changing <script>'s ownerDocument will prevent it from execution.
      // https://html.spec.whatwg.org/multipage/scripting.html#execute-the-script-block
      if (!foreignDocument) {
        foreignDocument = this.document.implementation.createHTMLDocument();
      }
      foreignDocument.adoptNode(script);
    }
  }
  JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
    return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  JsonpClientBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: JsonpClientBackend,
    factory: JsonpClientBackend.ɵfac
  });
  return JsonpClientBackend;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Identifies requests with the method JSONP and shifts them to the `JsonpClientBackend`.
 */
function jsonpInterceptorFn(req, next) {
  if (req.method === 'JSONP') {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(JsonpClientBackend).handle(req);
  }
  // Fall through for normal HTTP requests.
  return next(req);
}
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see {@link HttpInterceptor}
 *
 * @publicApi
 */
let JsonpInterceptor = /*#__PURE__*/(() => {
  class JsonpInterceptor {
    constructor(injector) {
      this.injector = injector;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param initialRequest The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(initialRequest, next) {
      return this.injector.runInContext(() => jsonpInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
    }
  }
  JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
    return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
  };
  JsonpInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: JsonpInterceptor,
    factory: JsonpInterceptor.ɵfac
  });
  return JsonpInterceptor;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }
  return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see {@link HttpHandler}
 * @see {@link JsonpClientBackend}
 *
 * @publicApi
 */
let HttpXhrBackend = /*#__PURE__*/(() => {
  class HttpXhrBackend {
    constructor(xhrFactory) {
      this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req) {
      // Quick check to give a better error message when a user attempts to use
      // HttpClient.jsonp() without installing the HttpClientJsonpModule
      if (req.method === 'JSONP') {
        throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
      }
      // Everything happens on Observable subscription.
      return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        // Start by setting up the XHR object with request method, URL, and withCredentials flag.
        const xhr = this.xhrFactory.build();
        xhr.open(req.method, req.urlWithParams);
        if (!!req.withCredentials) {
          xhr.withCredentials = true;
        }
        // Add all the requested headers.
        req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
        // Add an Accept header if one isn't present already.
        if (!req.headers.has('Accept')) {
          xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
        }
        // Auto-detect the Content-Type header if one isn't present already.
        if (!req.headers.has('Content-Type')) {
          const detectedType = req.detectContentTypeHeader();
          // Sometimes Content-Type detection fails.
          if (detectedType !== null) {
            xhr.setRequestHeader('Content-Type', detectedType);
          }
        }
        // Set the responseType if one was requested.
        if (req.responseType) {
          const responseType = req.responseType.toLowerCase();
          // JSON responses need to be processed as text. This is because if the server
          // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
          // xhr.response will be null, and xhr.responseText cannot be accessed to
          // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
          // is parsed by first requesting text and then applying JSON.parse.
          xhr.responseType = responseType !== 'json' ? responseType : 'text';
        }
        // Serialize the request body if one is present. If not, this will be set to null.
        const reqBody = req.serializeBody();
        // If progress events are enabled, response headers will be delivered
        // in two events - the HttpHeaderResponse event and the full HttpResponse
        // event. However, since response headers don't change in between these
        // two events, it doesn't make sense to parse them twice. So headerResponse
        // caches the data extracted from the response whenever it's first parsed,
        // to ensure parsing isn't duplicated.
        let headerResponse = null;
        // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
        // state, and memoizes it into headerResponse.
        const partialFromXhr = () => {
          if (headerResponse !== null) {
            return headerResponse;
          }
          const statusText = xhr.statusText || 'OK';
          // Parse headers from XMLHttpRequest - this step is lazy.
          const headers = new HttpHeaders(xhr.getAllResponseHeaders());
          // Read the response URL from the XMLHttpResponse instance and fall back on the
          // request URL.
          const url = getResponseUrl(xhr) || req.url;
          // Construct the HttpHeaderResponse and memoize it.
          headerResponse = new HttpHeaderResponse({
            headers,
            status: xhr.status,
            statusText,
            url
          });
          return headerResponse;
        };
        // Next, a few closures are defined for the various events which XMLHttpRequest can
        // emit. This allows them to be unregistered as event listeners later.
        // First up is the load event, which represents a response being fully available.
        const onLoad = () => {
          // Read response state from the memoized partial data.
          let {
            headers,
            status,
            statusText,
            url
          } = partialFromXhr();
          // The body will be read out if present.
          let body = null;
          if (status !== 204 /* HttpStatusCode.NoContent */) {
            // Use XMLHttpRequest.response if set, responseText otherwise.
            body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
          }
          // Normalize another potential bug (this one comes from CORS).
          if (status === 0) {
            status = !!body ? 200 /* HttpStatusCode.Ok */ : 0;
          }
          // ok determines whether the response will be transmitted on the event or
          // error channel. Unsuccessful status codes (not 2xx) will always be errors,
          // but a successful status code can still result in an error if the user
          // asked for JSON data and the body cannot be parsed as such.
          let ok = status >= 200 && status < 300;
          // Check whether the body needs to be parsed as JSON (in many cases the browser
          // will have done that already).
          if (req.responseType === 'json' && typeof body === 'string') {
            // Save the original body, before attempting XSSI prefix stripping.
            const originalBody = body;
            body = body.replace(XSSI_PREFIX, '');
            try {
              // Attempt the parse. If it fails, a parse error should be delivered to the user.
              body = body !== '' ? JSON.parse(body) : null;
            } catch (error) {
              // Since the JSON.parse failed, it's reasonable to assume this might not have been a
              // JSON response. Restore the original body (including any XSSI prefix) to deliver
              // a better error response.
              body = originalBody;
              // If this was an error request to begin with, leave it as a string, it probably
              // just isn't JSON. Otherwise, deliver the parsing error to the user.
              if (ok) {
                // Even though the response status was 2xx, this is still an error.
                ok = false;
                // The parse error contains the text of the body that failed to parse.
                body = {
                  error,
                  text: body
                };
              }
            }
          }
          if (ok) {
            // A successful response is delivered on the event stream.
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url: url || undefined
            }));
            // The full body has been received and delivered, no further events
            // are possible. This request is complete.
            observer.complete();
          } else {
            // An unsuccessful request is delivered on the error channel.
            observer.error(new HttpErrorResponse({
              // The error in this case is the response body (error from the server).
              error: body,
              headers,
              status,
              statusText,
              url: url || undefined
            }));
          }
        };
        // The onError callback is called when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc. These are actual errors, and are
        // transmitted on the error channel.
        const onError = error => {
          const {
            url
          } = partialFromXhr();
          const res = new HttpErrorResponse({
            error,
            status: xhr.status || 0,
            statusText: xhr.statusText || 'Unknown Error',
            url: url || undefined
          });
          observer.error(res);
        };
        // The sentHeaders flag tracks whether the HttpResponseHeaders event
        // has been sent on the stream. This is necessary to track if progress
        // is enabled since the event will be sent on only the first download
        // progress event.
        let sentHeaders = false;
        // The download progress event handler, which is only registered if
        // progress events are enabled.
        const onDownProgress = event => {
          // Send the HttpResponseHeaders event if it hasn't been sent already.
          if (!sentHeaders) {
            observer.next(partialFromXhr());
            sentHeaders = true;
          }
          // Start building the download progress event to deliver on the response
          // event stream.
          let progressEvent = {
            type: HttpEventType.DownloadProgress,
            loaded: event.loaded
          };
          // Set the total number of bytes in the event if it's available.
          if (event.lengthComputable) {
            progressEvent.total = event.total;
          }
          // If the request was for text content and a partial response is
          // available on XMLHttpRequest, include it in the progress event
          // to allow for streaming reads.
          if (req.responseType === 'text' && !!xhr.responseText) {
            progressEvent.partialText = xhr.responseText;
          }
          // Finally, fire the event.
          observer.next(progressEvent);
        };
        // The upload progress event handler, which is only registered if
        // progress events are enabled.
        const onUpProgress = event => {
          // Upload progress events are simpler. Begin building the progress
          // event.
          let progress = {
            type: HttpEventType.UploadProgress,
            loaded: event.loaded
          };
          // If the total number of bytes being uploaded is available, include
          // it.
          if (event.lengthComputable) {
            progress.total = event.total;
          }
          // Send the event.
          observer.next(progress);
        };
        // By default, register for load and error events.
        xhr.addEventListener('load', onLoad);
        xhr.addEventListener('error', onError);
        xhr.addEventListener('timeout', onError);
        xhr.addEventListener('abort', onError);
        // Progress events are only enabled if requested.
        if (req.reportProgress) {
          // Download progress is always enabled if requested.
          xhr.addEventListener('progress', onDownProgress);
          // Upload progress depends on whether there is a body to upload.
          if (reqBody !== null && xhr.upload) {
            xhr.upload.addEventListener('progress', onUpProgress);
          }
        }
        // Fire the request, and notify the event stream that it was fired.
        xhr.send(reqBody);
        observer.next({
          type: HttpEventType.Sent
        });
        // This is the return from the Observable function, which is the
        // request cancellation handler.
        return () => {
          // On a cancellation, remove all registered event listeners.
          xhr.removeEventListener('error', onError);
          xhr.removeEventListener('abort', onError);
          xhr.removeEventListener('load', onLoad);
          xhr.removeEventListener('timeout', onError);
          if (req.reportProgress) {
            xhr.removeEventListener('progress', onDownProgress);
            if (reqBody !== null && xhr.upload) {
              xhr.upload.removeEventListener('progress', onUpProgress);
            }
          }
          // Finally, abort the in-flight request.
          if (xhr.readyState !== xhr.DONE) {
            xhr.abort();
          }
        };
      });
    }
  }
  HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
    return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.XhrFactory));
  };
  HttpXhrBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpXhrBackend,
    factory: HttpXhrBackend.ɵfac
  });
  return HttpXhrBackend;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const XSRF_ENABLED = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('XSRF_ENABLED');
const XSRF_DEFAULT_COOKIE_NAME = 'XSRF-TOKEN';
const XSRF_COOKIE_NAME = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('XSRF_COOKIE_NAME', {
  providedIn: 'root',
  factory: () => XSRF_DEFAULT_COOKIE_NAME
});
const XSRF_DEFAULT_HEADER_NAME = 'X-XSRF-TOKEN';
const XSRF_HEADER_NAME = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('XSRF_HEADER_NAME', {
  providedIn: 'root',
  factory: () => XSRF_DEFAULT_HEADER_NAME
});
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
let HttpXsrfCookieExtractor = /*#__PURE__*/(() => {
  class HttpXsrfCookieExtractor {
    constructor(doc, platform, cookieName) {
      this.doc = doc;
      this.platform = platform;
      this.cookieName = cookieName;
      this.lastCookieString = '';
      this.lastToken = null;
      /**
       * @internal for testing
       */
      this.parseCount = 0;
    }
    getToken() {
      if (this.platform === 'server') {
        return null;
      }
      const cookieString = this.doc.cookie || '';
      if (cookieString !== this.lastCookieString) {
        this.parseCount++;
        this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵparseCookieValue"])(cookieString, this.cookieName);
        this.lastCookieString = cookieString;
      }
      return this.lastToken;
    }
  }
  HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
    return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](XSRF_COOKIE_NAME));
  };
  HttpXsrfCookieExtractor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpXsrfCookieExtractor,
    factory: HttpXsrfCookieExtractor.ɵfac
  });
  return HttpXsrfCookieExtractor;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  // Skip both non-mutating requests and absolute URLs.
  // Non-mutating requests don't require a token, and absolute URLs require special handling
  // anyway as the cookie set
  // on our origin is not the same as the token expected by another origin.
  if (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(XSRF_ENABLED) || req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
    return next(req);
  }
  const token = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HttpXsrfTokenExtractor).getToken();
  const headerName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(XSRF_HEADER_NAME);
  // Be careful not to overwrite an existing header of the same name.
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({
      headers: req.headers.set(headerName, token)
    });
  }
  return next(req);
}
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
let HttpXsrfInterceptor = /*#__PURE__*/(() => {
  class HttpXsrfInterceptor {
    constructor(injector) {
      this.injector = injector;
    }
    intercept(initialRequest, next) {
      return this.injector.runInContext(() => xsrfInterceptorFn(initialRequest, downstreamRequest => next.handle(downstreamRequest)));
    }
  }
  HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
    return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector));
  };
  HttpXsrfInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HttpXsrfInterceptor,
    factory: HttpXsrfInterceptor.ɵfac
  });
  return HttpXsrfInterceptor;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Identifies a particular kind of `HttpFeature`.
 *
 * @publicApi
 */
var HttpFeatureKind = /*#__PURE__*/(() => {
  HttpFeatureKind = HttpFeatureKind || {};
  HttpFeatureKind[HttpFeatureKind["Interceptors"] = 0] = "Interceptors";
  HttpFeatureKind[HttpFeatureKind["LegacyInterceptors"] = 1] = "LegacyInterceptors";
  HttpFeatureKind[HttpFeatureKind["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
  HttpFeatureKind[HttpFeatureKind["NoXsrfProtection"] = 3] = "NoXsrfProtection";
  HttpFeatureKind[HttpFeatureKind["JsonpSupport"] = 4] = "JsonpSupport";
  HttpFeatureKind[HttpFeatureKind["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
  return HttpFeatureKind;
})();
function makeHttpFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
/**
 * Configures Angular's `HttpClient` service to be available for injection.
 *
 * By default, `HttpClient` will be configured for injection with its default options for XSRF
 * protection of outgoing requests. Additional configuration options can be provided by passing
 * feature functions to `provideHttpClient`. For example, HTTP interceptors can be added using the
 * `withInterceptors(...)` feature.
 *
 * @see {@link withInterceptors}
 * @see {@link withInterceptorsFromDi}
 * @see {@link withXsrfConfiguration}
 * @see {@link withNoXsrfProtection}
 * @see {@link withJsonpSupport}
 * @see {@link withRequestsMadeViaParent}
 */
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map(f => f.ɵkind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : '');
    }
  }
  const providers = [HttpClient, HttpXhrBackend, HttpInterceptorHandler, {
    provide: HttpHandler,
    useExisting: HttpInterceptorHandler
  }, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: xsrfInterceptorFn,
    multi: true
  }, {
    provide: XSRF_ENABLED,
    useValue: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }];
  for (const feature of features) {
    providers.push(...feature.ɵproviders);
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeEnvironmentProviders)(providers);
}
/**
 * Adds one or more functional-style HTTP interceptors to the configuration of the `HttpClient`
 * instance.
 *
 * @see {@link HttpInterceptorFn}
 * @see {@link provideHttpClient}
 * @publicApi
 */
function withInterceptors(interceptorFns) {
  return makeHttpFeature(HttpFeatureKind.Interceptors, interceptorFns.map(interceptorFn => {
    return {
      provide: HTTP_INTERCEPTOR_FNS,
      useValue: interceptorFn,
      multi: true
    };
  }));
}
const LEGACY_INTERCEPTOR_FN = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('LEGACY_INTERCEPTOR_FN');
/**
 * Includes class-based interceptors configured using a multi-provider in the current injector into
 * the configured `HttpClient` instance.
 *
 * Prefer `withInterceptors` and functional interceptors instead, as support for DI-provided
 * interceptors may be phased out in a later release.
 *
 * @see {@link HttpInterceptor}
 * @see {@link HTTP_INTERCEPTORS}
 * @see {@link provideHttpClient}
 */
function withInterceptorsFromDi() {
  // Note: the legacy interceptor function is provided here via an intermediate token
  // (`LEGACY_INTERCEPTOR_FN`), using a pattern which guarantees that if these providers are
  // included multiple times, all of the multi-provider entries will have the same instance of the
  // interceptor function. That way, the `HttpINterceptorHandler` will dedup them and legacy
  // interceptors will not run multiple times.
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
    provide: LEGACY_INTERCEPTOR_FN,
    useFactory: legacyInterceptorFnFactory
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useExisting: LEGACY_INTERCEPTOR_FN,
    multi: true
  }]);
}
/**
 * Customizes the XSRF protection for the configuration of the current `HttpClient` instance.
 *
 * This feature is incompatible with the `withNoXsrfProtection` feature.
 *
 * @see {@link provideHttpClient}
 */
function withXsrfConfiguration({
  cookieName,
  headerName
}) {
  const providers = [];
  if (cookieName !== undefined) {
    providers.push({
      provide: XSRF_COOKIE_NAME,
      useValue: cookieName
    });
  }
  if (headerName !== undefined) {
    providers.push({
      provide: XSRF_HEADER_NAME,
      useValue: headerName
    });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
/**
 * Disables XSRF protection in the configuration of the current `HttpClient` instance.
 *
 * This feature is incompatible with the `withXsrfConfiguration` feature.
 *
 * @see {@link provideHttpClient}
 */
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
    provide: XSRF_ENABLED,
    useValue: false
  }]);
}
/**
 * Add JSONP support to the configuration of the current `HttpClient` instance.
 *
 * @see {@link provideHttpClient}
 */
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: jsonpInterceptorFn,
    multi: true
  }]);
}
/**
 * Configures the current `HttpClient` instance to make requests via the parent injector's
 * `HttpClient` instead of directly.
 *
 * By default, `provideHttpClient` configures `HttpClient` in its injector to be an independent
 * instance. For example, even if `HttpClient` is configured in the parent injector with
 * one or more interceptors, they will not intercept requests made via this instance.
 *
 * With this option enabled, once the request has passed through the current injector's
 * interceptors, it will be delegated to the parent injector's `HttpClient` chain instead of
 * dispatched directly, and interceptors in the parent configuration will be applied to the request.
 *
 * If there are several `HttpClient` instances in the injector hierarchy, it's possible for
 * `withRequestsMadeViaParent` to be used at multiple levels, which will cause the request to
 * "bubble up" until either reaching the root level or an `HttpClient` which was not configured with
 * this option.
 *
 * @see {@link provideHttpClient}
 * @developerPreview
 */
function withRequestsMadeViaParent() {
  return makeHttpFeature(HttpFeatureKind.RequestsMadeViaParent, [{
    provide: HttpBackend,
    useFactory: () => {
      const handlerFromParent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(HttpHandler, {
        skipSelf: true,
        optional: true
      });
      if (ngDevMode && handlerFromParent === null) {
        throw new Error('withRequestsMadeViaParent() can only be used when the parent injector also configures HttpClient');
      }
      return handlerFromParent;
    }
  }]);
}

/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
let HttpClientXsrfModule = /*#__PURE__*/(() => {
  class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable() {
      return {
        ngModule: HttpClientXsrfModule,
        providers: [withNoXsrfProtection().ɵproviders]
      };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options = {}) {
      return {
        ngModule: HttpClientXsrfModule,
        providers: withXsrfConfiguration(options).ɵproviders
      };
    }
  }
  HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) {
    return new (t || HttpClientXsrfModule)();
  };
  HttpClientXsrfModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HttpClientXsrfModule
  });
  HttpClientXsrfModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [HttpXsrfInterceptor, {
      provide: HTTP_INTERCEPTORS,
      useExisting: HttpXsrfInterceptor,
      multi: true
    }, {
      provide: HttpXsrfTokenExtractor,
      useClass: HttpXsrfCookieExtractor
    }, withXsrfConfiguration({
      cookieName: XSRF_DEFAULT_COOKIE_NAME,
      headerName: XSRF_DEFAULT_HEADER_NAME
    }).ɵproviders, {
      provide: XSRF_ENABLED,
      useValue: true
    }]
  });
  return HttpClientXsrfModule;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
let HttpClientModule = /*#__PURE__*/(() => {
  class HttpClientModule {}
  HttpClientModule.ɵfac = function HttpClientModule_Factory(t) {
    return new (t || HttpClientModule)();
  };
  HttpClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HttpClientModule
  });
  HttpClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [provideHttpClient(withInterceptorsFromDi())]
  });
  return HttpClientModule;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * @publicApi
 */
let HttpClientJsonpModule = /*#__PURE__*/(() => {
  class HttpClientJsonpModule {}
  HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) {
    return new (t || HttpClientJsonpModule)();
  };
  HttpClientJsonpModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HttpClientJsonpModule
  });
  HttpClientJsonpModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [withJsonpSupport().ɵproviders]
  });
  return HttpClientJsonpModule;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */
const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_0__.XhrFactory;

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 34497:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserModule": () => (/* binding */ BrowserModule),
/* harmony export */   "BrowserTransferStateModule": () => (/* binding */ BrowserTransferStateModule),
/* harmony export */   "By": () => (/* binding */ By),
/* harmony export */   "DomSanitizer": () => (/* binding */ DomSanitizer),
/* harmony export */   "EVENT_MANAGER_PLUGINS": () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   "EventManager": () => (/* binding */ EventManager),
/* harmony export */   "HAMMER_GESTURE_CONFIG": () => (/* binding */ HAMMER_GESTURE_CONFIG),
/* harmony export */   "HAMMER_LOADER": () => (/* binding */ HAMMER_LOADER),
/* harmony export */   "HammerGestureConfig": () => (/* binding */ HammerGestureConfig),
/* harmony export */   "HammerModule": () => (/* binding */ HammerModule),
/* harmony export */   "Meta": () => (/* binding */ Meta),
/* harmony export */   "REMOVE_STYLES_ON_COMPONENT_DESTROY": () => (/* binding */ REMOVE_STYLES_ON_COMPONENT_DESTROY),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "TransferState": () => (/* binding */ TransferState),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "bootstrapApplication": () => (/* binding */ bootstrapApplication),
/* harmony export */   "createApplication": () => (/* binding */ createApplication),
/* harmony export */   "disableDebugTools": () => (/* binding */ disableDebugTools),
/* harmony export */   "enableDebugTools": () => (/* binding */ enableDebugTools),
/* harmony export */   "makeStateKey": () => (/* binding */ makeStateKey),
/* harmony export */   "platformBrowser": () => (/* binding */ platformBrowser),
/* harmony export */   "provideProtractorTestingSupport": () => (/* binding */ provideProtractorTestingSupport),
/* harmony export */   "ɵBrowserDomAdapter": () => (/* binding */ BrowserDomAdapter),
/* harmony export */   "ɵBrowserGetTestability": () => (/* binding */ BrowserGetTestability),
/* harmony export */   "ɵDomEventsPlugin": () => (/* binding */ DomEventsPlugin),
/* harmony export */   "ɵDomRendererFactory2": () => (/* binding */ DomRendererFactory2),
/* harmony export */   "ɵDomSanitizerImpl": () => (/* binding */ DomSanitizerImpl),
/* harmony export */   "ɵDomSharedStylesHost": () => (/* binding */ DomSharedStylesHost),
/* harmony export */   "ɵHammerGesturesPlugin": () => (/* binding */ HammerGesturesPlugin),
/* harmony export */   "ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS": () => (/* binding */ INTERNAL_BROWSER_PLATFORM_PROVIDERS),
/* harmony export */   "ɵKeyEventsPlugin": () => (/* binding */ KeyEventsPlugin),
/* harmony export */   "ɵNAMESPACE_URIS": () => (/* binding */ NAMESPACE_URIS),
/* harmony export */   "ɵSharedStylesHost": () => (/* binding */ SharedStylesHost),
/* harmony export */   "ɵTRANSITION_ID": () => (/* binding */ TRANSITION_ID),
/* harmony export */   "ɵescapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "ɵflattenStyles": () => (/* binding */ flattenStyles),
/* harmony export */   "ɵgetDOM": () => (/* reexport safe */ _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"]),
/* harmony export */   "ɵinitDomAdapter": () => (/* binding */ initDomAdapter),
/* harmony export */   "ɵshimContentAttribute": () => (/* binding */ shimContentAttribute),
/* harmony export */   "ɵshimHostAttribute": () => (/* binding */ shimHostAttribute)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 23720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34984);
/**
 * @license Angular v15.2.10
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class GenericBrowserDomAdapter extends _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵDomAdapter"] {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
}

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵsetRootDomAdapter"])(new BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener, false);
    // Needed to follow Dart's subscription semantic, until fix of
    // https://code.google.com/p/dart/issues/detail?id=17406
    return () => {
      el.removeEventListener(evt, listener, false);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return window;
    }
    if (target === 'document') {
      return doc;
    }
    if (target === 'body') {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵparseCookieValue"])(document.cookie, name);
  }
}
let baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector('base');
  return baseElement ? baseElement.getAttribute('href') : null;
}
// based on urlUtils.js in AngularJS 1
let urlParsingNode;
function relativePath(url) {
  urlParsingNode = urlParsingNode || document.createElement('a');
  urlParsingNode.setAttribute('href', url);
  const pathName = urlParsingNode.pathname;
  return pathName.charAt(0) === '/' ? pathName : `/${pathName}`;
}

/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
const TRANSITION_ID = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('TRANSITION_ID');
function appInitializerFactory(transitionId, document, injector) {
  return () => {
    // Wait for all application initializers to be completed before removing the styles set by
    // the server.
    injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationInitStatus).donePromise.then(() => {
      const dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])();
      const styles = document.querySelectorAll(`style[ng-transition="${transitionId}"]`);
      for (let i = 0; i < styles.length; i++) {
        dom.remove(styles[i]);
      }
    });
  };
}
const SERVER_TRANSITION_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
  useFactory: appInitializerFactory,
  deps: [TRANSITION_ID, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector],
  multi: true
}];
class BrowserGetTestability {
  addToWindow(registry) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAngularTestability = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new Error('Could not find testability for element.');
      }
      return testability;
    };
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularTestabilities = () => registry.getAllTestabilities();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularRootElements = () => registry.getAllRootElements();
    const whenAllStable = (callback /** TODO #9100 */) => {
      const testabilities = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularTestabilities();
      let count = testabilities.length;
      let didWork = false;
      const decrement = function (didWork_ /** TODO #9100 */) {
        didWork = didWork || didWork_;
        count--;
        if (count == 0) {
          callback(didWork);
        }
      };
      testabilities.forEach(function (testability /** TODO #9100 */) {
        testability.whenStable(decrement);
      });
    };
    if (!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers = [];
    }
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers.push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
}

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */
let BrowserXhr = /*#__PURE__*/(() => {
  class BrowserXhr {
    build() {
      return new XMLHttpRequest();
    }
  }
  BrowserXhr.ɵfac = function BrowserXhr_Factory(t) {
    return new (t || BrowserXhr)();
  };
  BrowserXhr.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BrowserXhr,
    factory: BrowserXhr.ɵfac
  });
  return BrowserXhr;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */
const EVENT_MANAGER_PLUGINS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
let EventManager = /*#__PURE__*/(() => {
  class EventManager {
    /**
     * Initializes an instance of the event-manager service.
     */
    constructor(plugins, _zone) {
      this._zone = _zone;
      this._eventNameToPlugin = new Map();
      plugins.forEach(plugin => {
        plugin.manager = this;
      });
      this._plugins = plugins.slice().reverse();
    }
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */
    addEventListener(element, eventName, handler) {
      const plugin = this._findPluginFor(eventName);
      return plugin.addEventListener(element, eventName, handler);
    }
    /**
     * Registers a global handler for an event in a target view.
     *
     * @param target A target for global event notifications. One of "window", "document", or "body".
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns A callback function that can be used to remove the handler.
     * @deprecated No longer being used in Ivy code. To be removed in version 14.
     */
    addGlobalEventListener(target, eventName, handler) {
      const plugin = this._findPluginFor(eventName);
      return plugin.addGlobalEventListener(target, eventName, handler);
    }
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    getZone() {
      return this._zone;
    }
    /** @internal */
    _findPluginFor(eventName) {
      const plugin = this._eventNameToPlugin.get(eventName);
      if (plugin) {
        return plugin;
      }
      const plugins = this._plugins;
      for (let i = 0; i < plugins.length; i++) {
        const plugin = plugins[i];
        if (plugin.supports(eventName)) {
          this._eventNameToPlugin.set(eventName, plugin);
          return plugin;
        }
      }
      throw new Error(`No event manager plugin found for event ${eventName}`);
    }
  }
  EventManager.ɵfac = function EventManager_Factory(t) {
    return new (t || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };
  EventManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: EventManager,
    factory: EventManager.ɵfac
  });
  return EventManager;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class EventManagerPlugin {
  constructor(_doc) {
    this._doc = _doc;
  }
  addGlobalEventListener(element, eventName, handler) {
    const target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().getGlobalEventTarget(this._doc, element);
    if (!target) {
      throw new Error(`Unsupported event target ${target} for event ${eventName}`);
    }
    return this.addEventListener(target, eventName, handler);
  }
}
let SharedStylesHost = /*#__PURE__*/(() => {
  class SharedStylesHost {
    constructor() {
      this.usageCount = new Map();
    }
    addStyles(styles) {
      for (const style of styles) {
        const usageCount = this.changeUsageCount(style, 1);
        if (usageCount === 1) {
          this.onStyleAdded(style);
        }
      }
    }
    removeStyles(styles) {
      for (const style of styles) {
        const usageCount = this.changeUsageCount(style, -1);
        if (usageCount === 0) {
          this.onStyleRemoved(style);
        }
      }
    }
    onStyleRemoved(style) {}
    onStyleAdded(style) {}
    getAllStyles() {
      return this.usageCount.keys();
    }
    changeUsageCount(style, delta) {
      const map = this.usageCount;
      let usage = map.get(style) ?? 0;
      usage += delta;
      if (usage > 0) {
        map.set(style, usage);
      } else {
        map.delete(style);
      }
      return usage;
    }
    ngOnDestroy() {
      for (const style of this.getAllStyles()) {
        this.onStyleRemoved(style);
      }
      this.usageCount.clear();
    }
  }
  SharedStylesHost.ɵfac = function SharedStylesHost_Factory(t) {
    return new (t || SharedStylesHost)();
  };
  SharedStylesHost.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SharedStylesHost,
    factory: SharedStylesHost.ɵfac
  });
  return SharedStylesHost;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DomSharedStylesHost = /*#__PURE__*/(() => {
  class DomSharedStylesHost extends SharedStylesHost {
    constructor(doc) {
      super();
      this.doc = doc;
      // Maps all registered host nodes to a list of style nodes that have been added to the host node.
      this.styleRef = new Map();
      this.hostNodes = new Set();
      this.resetHostNodes();
    }
    onStyleAdded(style) {
      for (const host of this.hostNodes) {
        this.addStyleToHost(host, style);
      }
    }
    onStyleRemoved(style) {
      const styleRef = this.styleRef;
      const styleElements = styleRef.get(style);
      styleElements?.forEach(e => e.remove());
      styleRef.delete(style);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.styleRef.clear();
      this.resetHostNodes();
    }
    addHost(hostNode) {
      this.hostNodes.add(hostNode);
      for (const style of this.getAllStyles()) {
        this.addStyleToHost(hostNode, style);
      }
    }
    removeHost(hostNode) {
      this.hostNodes.delete(hostNode);
    }
    addStyleToHost(host, style) {
      const styleEl = this.doc.createElement('style');
      styleEl.textContent = style;
      host.appendChild(styleEl);
      const styleElRef = this.styleRef.get(style);
      if (styleElRef) {
        styleElRef.push(styleEl);
      } else {
        this.styleRef.set(style, [styleEl]);
      }
    }
    resetHostNodes() {
      const hostNodes = this.hostNodes;
      hostNodes.clear();
      // Re-add the head element back since this is the default host.
      hostNodes.add(this.doc.head);
    }
  }
  DomSharedStylesHost.ɵfac = function DomSharedStylesHost_Factory(t) {
    return new (t || DomSharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  DomSharedStylesHost.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DomSharedStylesHost,
    factory: DomSharedStylesHost.ɵfac
  });
  return DomSharedStylesHost;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/MathML/'
};
const COMPONENT_REGEX = /%COMP%/g;
const NG_DEV_MODE$1 = typeof ngDevMode === 'undefined' || !!ngDevMode;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
/**
 * The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = false;
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates whether styles
 * of destroyed components should be removed from DOM.
 *
 * By default, the value is set to `false`. This will be changed in the next major version.
 * @publicApi
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('RemoveStylesOnCompDestory', {
  providedIn: 'root',
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function flattenStyles(compId, styles) {
  // Cannot use `Infinity` as depth as `infinity` is not a number literal in TypeScript.
  // See: https://github.com/microsoft/TypeScript/issues/32277
  return styles.flat(100).map(s => s.replace(COMPONENT_REGEX, compId));
}
function decoratePreventDefault(eventHandler) {
  // `DebugNode.triggerEventHandler` needs to know if the listener was created with
  // decoratePreventDefault or is a listener added outside the Angular context so it can handle the
  // two differently. In the first case, the special '__ngUnwrap__' token is passed to the unwrap
  // the listener (see below).
  return event => {
    // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
    // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The debug_node
    // can inspect the listener toString contents for the existence of this special token. Because
    // the token is a string literal, it is ensured to not be modified by compiled code.
    if (event === '__ngUnwrap__') {
      return eventHandler;
    }
    const allowDefaultBehavior = eventHandler(event);
    if (allowDefaultBehavior === false) {
      // TODO(tbosch): move preventDefault into event plugins...
      event.preventDefault();
      event.returnValue = false;
    }
    return undefined;
  };
}
let DomRendererFactory2 = /*#__PURE__*/(() => {
  class DomRendererFactory2 {
    constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestory) {
      this.eventManager = eventManager;
      this.sharedStylesHost = sharedStylesHost;
      this.appId = appId;
      this.removeStylesOnCompDestory = removeStylesOnCompDestory;
      this.rendererByCompId = new Map();
      this.defaultRenderer = new DefaultDomRenderer2(eventManager);
    }
    createRenderer(element, type) {
      if (!element || !type) {
        return this.defaultRenderer;
      }
      const renderer = this.getOrCreateRenderer(element, type);
      // Renderers have different logic due to different encapsulation behaviours.
      // Ex: for emulated, an attribute is added to the element.
      if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
        renderer.applyToHost(element);
      } else if (renderer instanceof NoneEncapsulationDomRenderer) {
        renderer.applyStyles();
      }
      return renderer;
    }
    getOrCreateRenderer(element, type) {
      const rendererByCompId = this.rendererByCompId;
      let renderer = rendererByCompId.get(type.id);
      if (!renderer) {
        const eventManager = this.eventManager;
        const sharedStylesHost = this.sharedStylesHost;
        const removeStylesOnCompDestory = this.removeStylesOnCompDestory;
        switch (type.encapsulation) {
          case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.Emulated:
            renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestory);
            break;
          case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.ShadowDom:
            return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type);
          default:
            renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestory);
            break;
        }
        renderer.onDestroy = () => rendererByCompId.delete(type.id);
        rendererByCompId.set(type.id, renderer);
      }
      return renderer;
    }
    ngOnDestroy() {
      this.rendererByCompId.clear();
    }
    begin() {}
    end() {}
  }
  DomRendererFactory2.ɵfac = function DomRendererFactory2_Factory(t) {
    return new (t || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomSharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](REMOVE_STYLES_ON_COMPONENT_DESTROY));
  };
  DomRendererFactory2.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DomRendererFactory2,
    factory: DomRendererFactory2.ɵfac
  });
  return DomRendererFactory2;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class DefaultDomRenderer2 {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.data = Object.create(null);
    this.destroyNode = null;
  }
  destroy() {}
  createElement(name, namespace) {
    if (namespace) {
      // TODO: `|| namespace` was added in
      // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
      // support how Ivy passed around the namespace URI rather than short name at the time. It did
      // not, however extend the support to other parts of the system (setAttribute, setAttribute,
      // and the ServerRenderer). We should decide what exactly the semantics for dealing with
      // namespaces should be and make it consistent.
      // Related issues:
      // https://github.com/angular/angular/issues/44028
      // https://github.com/angular/angular/issues/44883
      return document.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return document.createElement(name);
  }
  createComment(value) {
    return document.createComment(value);
  }
  createText(value) {
    return document.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new Error(`The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = '';
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase) {
      // removeProperty has no effect when used on camelCased properties.
      el.style.removeProperty(style);
    } else {
      el.style[style] = '';
    }
  }
  setProperty(el, name, value) {
    NG_DEV_MODE$1 && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    NG_DEV_MODE$1 && checkNoSyntheticProp(event, 'listener');
    if (typeof target === 'string') {
      return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
    }
    return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
  }
}
const AT_CHARCODE = /*#__PURE__*/(() => '@'.charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new Error(`Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === 'TEMPLATE' && node.content !== undefined;
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component) {
    super(eventManager);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = flattenStyles(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement('style');
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
}
class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestory, compId = component.id) {
    super(eventManager);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestory = removeStylesOnCompDestory;
    this.rendererUsageCount = 0;
    this.styles = flattenStyles(compId, component.styles);
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
    this.rendererUsageCount++;
  }
  destroy() {
    if (!this.removeStylesOnCompDestory) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
    this.rendererUsageCount--;
    if (this.rendererUsageCount === 0) {
      this.onDestroy?.();
    }
  }
}
class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestory) {
    const compId = appId + '-' + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestory, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, '');
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}
let DomEventsPlugin = /*#__PURE__*/(() => {
  class DomEventsPlugin extends EventManagerPlugin {
    constructor(doc) {
      super(doc);
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    supports(eventName) {
      return true;
    }
    addEventListener(element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
      return () => this.removeEventListener(element, eventName, handler);
    }
    removeEventListener(target, eventName, callback) {
      return target.removeEventListener(eventName, callback);
    }
  }
  DomEventsPlugin.ɵfac = function DomEventsPlugin_Factory(t) {
    return new (t || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  DomEventsPlugin.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DomEventsPlugin,
    factory: DomEventsPlugin.ɵfac
  });
  return DomEventsPlugin;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Defines supported modifiers for key events.
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
// The following values are here for cross-browser compatibility and to match the W3C standard
// cf https://www.w3.org/TR/DOM-Level-3-Events-key/
const _keyMap = {
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
};
/**
 * Retrieves modifiers from key-event objects.
 */
const MODIFIER_KEY_GETTERS = {
  'alt': event => event.altKey,
  'control': event => event.ctrlKey,
  'meta': event => event.metaKey,
  'shift': event => event.shiftKey
};
/**
 * @publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */
let KeyEventsPlugin = /*#__PURE__*/(() => {
  class KeyEventsPlugin extends EventManagerPlugin {
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    constructor(doc) {
      super(doc);
    }
    /**
     * Reports whether a named key event is supported.
     * @param eventName The event name to query.
     * @return True if the named key event is supported.
     */
    supports(eventName) {
      return KeyEventsPlugin.parseEventName(eventName) != null;
    }
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
     */
    addEventListener(element, eventName, handler) {
      const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
      const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
      return this.manager.getZone().runOutsideAngular(() => {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
      });
    }
    /**
     * Parses the user provided full keyboard event definition and normalizes it for
     * later internal use. It ensures the string is all lowercase, converts special
     * characters to a standard spelling, and orders all the values consistently.
     *
     * @param eventName The name of the key event to listen for.
     * @returns an object with the full, normalized string, and the dom event name
     * or null in the case when the event doesn't match a keyboard event.
     */
    static parseEventName(eventName) {
      const parts = eventName.toLowerCase().split('.');
      const domEventName = parts.shift();
      if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
        return null;
      }
      const key = KeyEventsPlugin._normalizeKey(parts.pop());
      let fullKey = '';
      let codeIX = parts.indexOf('code');
      if (codeIX > -1) {
        parts.splice(codeIX, 1);
        fullKey = 'code.';
      }
      MODIFIER_KEYS.forEach(modifierName => {
        const index = parts.indexOf(modifierName);
        if (index > -1) {
          parts.splice(index, 1);
          fullKey += modifierName + '.';
        }
      });
      fullKey += key;
      if (parts.length != 0 || key.length === 0) {
        // returning null instead of throwing to let another plugin process the event
        return null;
      }
      // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
      //       The code must remain in the `result['domEventName']` form.
      // return {domEventName, fullKey};
      const result = {};
      result['domEventName'] = domEventName;
      result['fullKey'] = fullKey;
      return result;
    }
    /**
     * Determines whether the actual keys pressed match the configured key code string.
     * The `fullKeyCode` event is normalized in the `parseEventName` method when the
     * event is attached to the DOM during the `addEventListener` call. This is unseen
     * by the end user and is normalized for internal consistency and parsing.
     *
     * @param event The keyboard event.
     * @param fullKeyCode The normalized user defined expected key event string
     * @returns boolean.
     */
    static matchEventFullKeyCode(event, fullKeyCode) {
      let keycode = _keyMap[event.key] || event.key;
      let key = '';
      if (fullKeyCode.indexOf('code.') > -1) {
        keycode = event.code;
        key = 'code.';
      }
      // the keycode could be unidentified so we have to check here
      if (keycode == null || !keycode) return false;
      keycode = keycode.toLowerCase();
      if (keycode === ' ') {
        keycode = 'space'; // for readability
      } else if (keycode === '.') {
        keycode = 'dot'; // because '.' is used as a separator in event names
      }

      MODIFIER_KEYS.forEach(modifierName => {
        if (modifierName !== keycode) {
          const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
          if (modifierGetter(event)) {
            key += modifierName + '.';
          }
        }
      });
      key += keycode;
      return key === fullKeyCode;
    }
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    static eventCallback(fullKey, handler, zone) {
      return event => {
        if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
          zone.runGuarded(() => handler(event));
        }
      };
    }
    /** @internal */
    static _normalizeKey(keyName) {
      // TODO: switch to a Map if the mapping grows too much
      switch (keyName) {
        case 'esc':
          return 'escape';
        default:
          return keyName;
      }
    }
  }
  KeyEventsPlugin.ɵfac = function KeyEventsPlugin_Factory(t) {
    return new (t || KeyEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  KeyEventsPlugin.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: KeyEventsPlugin,
    factory: KeyEventsPlugin.ɵfac
  });
  return KeyEventsPlugin;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;
/**
 * Bootstraps an instance of an Angular application and renders a standalone component as the
 * application's root component. More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The root component passed into this function *must* be a standalone one (should have the
 * `standalone: true` flag in the `@Component` decorator config).
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   template: 'Hello world!'
 * })
 * class RootComponent {}
 *
 * const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
 * ```
 *
 * You can add the list of providers that should be available in the application injector by
 * specifying the `providers` field in an object passed as the second argument:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
 *   ]
 * });
 * ```
 *
 * The `importProvidersFrom` helper method can be used to collect all providers from any
 * existing NgModule (and transitively from all NgModules that it imports):
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(SomeNgModule)
 *   ]
 * });
 * ```
 *
 * Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
 * default. You can add [Testability](api/core/Testability) by getting the list of necessary
 * providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
 * array, for example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
 * ```
 *
 * @param rootComponent A reference to a standalone component that should be rendered.
 * @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function bootstrapApplication(rootComponent, options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinternalCreateApplication"])({
    rootComponent,
    ...createProvidersConfig(options)
  });
}
/**
 * Create an instance of an Angular application without bootstrapping any components. This is useful
 * for the situation where one wants to decouple application environment creation (a platform and
 * associated injectors) from rendering components on a screen. Components can be subsequently
 * bootstrapped on the returned `ApplicationRef`.
 *
 * @param options Extra configuration for the application environment, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function createApplication(options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinternalCreateApplication"])(createProvidersConfig(options));
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...(options?.providers ?? [])],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
/**
 * Returns a set of providers required to setup [Testability](api/core/Testability) for an
 * application bootstrapped using the `bootstrapApplication` function. The set of providers is
 * needed to support testing an application with Protractor (which relies on the Testability APIs
 * to be present).
 *
 * @returns An array of providers required to setup Testability for an application and make it
 *     available for testing using Protractor.
 *
 * @publicApi
 */
function provideProtractorTestingSupport() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideProtractorTestingSupport` call results in app code.
  return [...TESTABILITY_PROVIDERS];
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler();
}
function _document() {
  // Tell ivy about the global document
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetDocument"])(document);
  return document;
}
const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,
  useValue: _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵPLATFORM_BROWSER_ID"]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,
  useFactory: _document,
  deps: []
}];
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */
const platformBrowser = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
 * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
 * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
 * `BrowserModule` providers without referencing the module itself.
 */
const BROWSER_MODULE_PROVIDERS_MARKER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(NG_DEV_MODE ? 'BrowserModule Providers Marker' : '');
const TESTABILITY_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵTESTABILITY_GETTER"],
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵTESTABILITY"],
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵTESTABILITY_GETTER"]]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Testability,
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵTESTABILITY_GETTER"]]
}];
const BROWSER_MODULE_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵINJECTOR_SCOPE"],
  useValue: 'root'
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
}, {
  provide: DomRendererFactory2,
  useClass: DomRendererFactory2,
  deps: [EventManager, DomSharedStylesHost, _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID, REMOVE_STYLES_ON_COMPONENT_DESTROY]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: SharedStylesHost,
  useExisting: DomSharedStylesHost
}, {
  provide: DomSharedStylesHost,
  useClass: DomSharedStylesHost,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
}, {
  provide: EventManager,
  useClass: EventManager,
  deps: [EVENT_MANAGER_PLUGINS, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone]
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__.XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, NG_DEV_MODE ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
let BrowserModule = /*#__PURE__*/(() => {
  class BrowserModule {
    constructor(providersAlreadyPresent) {
      if (NG_DEV_MODE && providersAlreadyPresent) {
        throw new Error(`Providers from the \`BrowserModule\` have already been loaded. If you need access ` + `to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
      }
    }
    /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     */
    static withServerTransition(params) {
      return {
        ngModule: BrowserModule,
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID,
          useValue: params.appId
        }, {
          provide: TRANSITION_ID,
          useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID
        }, SERVER_TRANSITION_PROVIDERS]
      };
    }
  }
  BrowserModule.ɵfac = function BrowserModule_Factory(t) {
    return new (t || BrowserModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BROWSER_MODULE_PROVIDERS_MARKER, 12));
  };
  BrowserModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BrowserModule
  });
  BrowserModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationModule]
  });
  return BrowserModule;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Factory to create a `Meta` service instance for the current DOM document.
 */
function createMeta() {
  return new Meta((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */
let Meta = /*#__PURE__*/(() => {
  class Meta {
    constructor(_doc) {
      this._doc = _doc;
      this._dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])();
    }
    /**
     * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * If an existing element is found, it is returned and is not modified in any way.
     * @param tag The definition of a `<meta>` element to match or create.
     * @param forceCreation True to create a new element without checking whether one already exists.
     * @returns The existing element with the same attributes and values if found,
     * the new element if no match is found, or `null` if the tag parameter is not defined.
     */
    addTag(tag, forceCreation = false) {
      if (!tag) return null;
      return this._getOrCreateElement(tag, forceCreation);
    }
    /**
     * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * @param tags An array of tag definitions to match or create.
     * @param forceCreation True to create new elements without checking whether they already exist.
     * @returns The matching elements if found, or the new elements.
     */
    addTags(tags, forceCreation = false) {
      if (!tags) return [];
      return tags.reduce((result, tag) => {
        if (tag) {
          result.push(this._getOrCreateElement(tag, forceCreation));
        }
        return result;
      }, []);
    }
    /**
     * Retrieves a `<meta>` tag element in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching element, if any.
     */
    getTag(attrSelector) {
      if (!attrSelector) return null;
      return this._doc.querySelector(`meta[${attrSelector}]`) || null;
    }
    /**
     * Retrieves a set of `<meta>` tag elements in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching elements, if any.
     */
    getTags(attrSelector) {
      if (!attrSelector) return [];
      const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
      return list ? [].slice.call(list) : [];
    }
    /**
     * Modifies an existing `<meta>` tag element in the current HTML document.
     * @param tag The tag description with which to replace the existing tag content.
     * @param selector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     * If not supplied, matches a tag with the same `name` or `property` attribute value as the
     * replacement tag.
     * @return The modified element.
     */
    updateTag(tag, selector) {
      if (!tag) return null;
      selector = selector || this._parseSelector(tag);
      const meta = this.getTag(selector);
      if (meta) {
        return this._setMetaElementAttributes(tag, meta);
      }
      return this._getOrCreateElement(tag, true);
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param attrSelector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     */
    removeTag(attrSelector) {
      this.removeTagElement(this.getTag(attrSelector));
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param meta The tag definition to match against to identify an existing tag.
     */
    removeTagElement(meta) {
      if (meta) {
        this._dom.remove(meta);
      }
    }
    _getOrCreateElement(meta, forceCreation = false) {
      if (!forceCreation) {
        const selector = this._parseSelector(meta);
        // It's allowed to have multiple elements with the same name so it's not enough to
        // just check that element with the same name already present on the page. We also need to
        // check if element has tag attributes
        const elem = this.getTags(selector).filter(elem => this._containsAttributes(meta, elem))[0];
        if (elem !== undefined) return elem;
      }
      const element = this._dom.createElement('meta');
      this._setMetaElementAttributes(meta, element);
      const head = this._doc.getElementsByTagName('head')[0];
      head.appendChild(element);
      return element;
    }
    _setMetaElementAttributes(tag, el) {
      Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
      return el;
    }
    _parseSelector(tag) {
      const attr = tag.name ? 'name' : 'property';
      return `${attr}="${tag[attr]}"`;
    }
    _containsAttributes(tag, elem) {
      return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
    }
    _getMetaKeyMap(prop) {
      return META_KEYS_MAP[prop] || prop;
    }
  }
  Meta.ɵfac = function Meta_Factory(t) {
    return new (t || Meta)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  Meta.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: Meta,
    factory: function Meta_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createMeta();
      }
      return r;
    },
    providedIn: 'root'
  });
  return Meta;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */
const META_KEYS_MAP = {
  httpEquiv: 'http-equiv'
};

/**
 * Factory to create Title service.
 */
function createTitle() {
  return new Title((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
let Title = /*#__PURE__*/(() => {
  class Title {
    constructor(_doc) {
      this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    getTitle() {
      return this._doc.title;
    }
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle) {
      this._doc.title = newTitle || '';
    }
  }
  Title.ɵfac = function Title_Factory(t) {
    return new (t || Title)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  Title.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: Title,
    factory: function Title_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createTitle();
      }
      return r;
    },
    providedIn: 'root'
  });
  return Title;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for angularJS (via `goog.provide('ng....')`).
    const ng = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].ng = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].ng || {};
    ng[name] = value;
  }
}
const win = typeof window !== 'undefined' && window || {};
class ChangeDetectionPerfRecord {
  constructor(msPerTick, numTicks) {
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
class AngularProfiler {
  constructor(ref) {
    this.appRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
  }
  // tslint:disable:no-console
  /**
   * Exercises change detection in a loop and then prints the average amount of
   * time in milliseconds how long a single round of change detection takes for
   * the current state of the UI. It runs a minimum of 5 rounds for a minimum
   * of 500 milliseconds.
   *
   * Optionally, a user may pass a `config` parameter containing a map of
   * options. Supported options are:
   *
   * `record` (boolean) - causes the profiler to record a CPU profile while
   * it exercises the change detector. Example:
   *
   * ```
   * ng.profiler.timeChangeDetection({record: true})
   * ```
   */
  timeChangeDetection(config) {
    const record = config && config['record'];
    const profileName = 'Change Detection';
    // Profiler is not available in Android browsers without dev tools opened
    const isProfilerAvailable = win.console.profile != null;
    if (record && isProfilerAvailable) {
      win.console.profile(profileName);
    }
    const start = performanceNow();
    let numTicks = 0;
    while (numTicks < 5 || performanceNow() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }
    const end = performanceNow();
    if (record && isProfilerAvailable) {
      win.console.profileEnd(profileName);
    }
    const msPerTick = (end - start) / numTicks;
    win.console.log(`ran ${numTicks} change detection cycles`);
    win.console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }
}
function performanceNow() {
  return win.performance && win.performance.now ? win.performance.now() : new Date().getTime();
}
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}
function escapeHtml(text) {
  const escapedText = {
    '&': '&a;',
    '"': '&q;',
    '\'': '&s;',
    '<': '&l;',
    '>': '&g;'
  };
  return text.replace(/[&"'<>]/g, s => escapedText[s]);
}
function unescapeHtml(text) {
  const unescapedText = {
    '&a;': '&',
    '&q;': '"',
    '&s;': '\'',
    '&l;': '<',
    '&g;': '>'
  };
  return text.replace(/&[^;]+;/g, s => unescapedText[s]);
}
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
function makeStateKey(key) {
  return key;
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * The `TransferState` is available as an injectable token.
 * On the client, just inject this token using DI and use it, it will be lazily initialized.
 * On the server it's already included if `renderApplication` function is used. Otherwise, import
 * the `ServerTransferStateModule` module to make the `TransferState` available.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialized in a
 * non-lossy manner.
 *
 * @publicApi
 */
let TransferState = /*#__PURE__*/(() => {
  class TransferState {
    constructor() {
      this.store = {};
      this.onSerializeCallbacks = {};
      this.store = retrieveTransferredState((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID));
    }
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    get(key, defaultValue) {
      return this.store[key] !== undefined ? this.store[key] : defaultValue;
    }
    /**
     * Set the value corresponding to a key.
     */
    set(key, value) {
      this.store[key] = value;
    }
    /**
     * Remove a key from the store.
     */
    remove(key) {
      delete this.store[key];
    }
    /**
     * Test whether a key exists in the store.
     */
    hasKey(key) {
      return this.store.hasOwnProperty(key);
    }
    /**
     * Indicates whether the state is empty.
     */
    get isEmpty() {
      return Object.keys(this.store).length === 0;
    }
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    onSerialize(key, callback) {
      this.onSerializeCallbacks[key] = callback;
    }
    /**
     * Serialize the current state of the store to JSON.
     */
    toJson() {
      // Call the onSerialize callbacks and put those values into the store.
      for (const key in this.onSerializeCallbacks) {
        if (this.onSerializeCallbacks.hasOwnProperty(key)) {
          try {
            this.store[key] = this.onSerializeCallbacks[key]();
          } catch (e) {
            console.warn('Exception in onSerialize callback: ', e);
          }
        }
      }
      return JSON.stringify(this.store);
    }
  }
  TransferState.ɵfac = function TransferState_Factory(t) {
    return new (t || TransferState)();
  };
  TransferState.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TransferState,
    factory: TransferState.ɵfac,
    providedIn: 'root'
  });
  return TransferState;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function retrieveTransferredState(doc, appId) {
  // Locate the script tag with the JSON data transferred from the server.
  // The id of the script tag is set to the Angular appId + 'state'.
  const script = doc.getElementById(appId + '-state');
  let initialState = {};
  if (script && script.textContent) {
    try {
      // Avoid using any here as it triggers lint errors in google3 (any is not allowed).
      initialState = JSON.parse(unescapeHtml(script.textContent));
    } catch (e) {
      console.warn('Exception while restoring TransferState for app ' + appId, e);
    }
  }
  return initialState;
}
/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 * @deprecated no longer needed, you can inject the `TransferState` in an app without providing
 *     this module.
 */
let BrowserTransferStateModule = /*#__PURE__*/(() => {
  class BrowserTransferStateModule {}
  BrowserTransferStateModule.ɵfac = function BrowserTransferStateModule_Factory(t) {
    return new (t || BrowserTransferStateModule)();
  };
  BrowserTransferStateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BrowserTransferStateModule
  });
  BrowserTransferStateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  return BrowserTransferStateModule;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
class By {
  /**
   * Match all nodes.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
   */
  static all() {
    return () => true;
  }
  /**
   * Match elements by the given CSS selector.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
   */
  static css(selector) {
    return debugElement => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  /**
   * Match nodes that have the given directive present.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
   */
  static directive(type) {
    return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
  }
}
function elementMatches(n, selector) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}

/**
 * Supported HammerJS recognizer event names.
 */
const EVENT_NAMES = {
  // pan
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  // pinch
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  // press
  'press': true,
  'pressup': true,
  // rotate
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  // swipe
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  // tap
  'tap': true,
  'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see `HammerGestureConfig`
 *
 * @ngModule HammerModule
 * @publicApi
 */
const HAMMER_GESTURE_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
const HAMMER_LOADER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
let HammerGestureConfig = /*#__PURE__*/(() => {
  class HammerGestureConfig {
    constructor() {
      /**
       * A set of supported event names for gestures to be used in Angular.
       * Angular supports all built-in recognizers, as listed in
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      this.events = [];
      /**
       * Maps gesture event names to a set of configuration options
       * that specify overrides to the default values for specific properties.
       *
       * The key is a supported event name to be configured,
       * and the options object contains a set of properties, with override values
       * to be applied to the named recognizer event.
       * For example, to disable recognition of the rotate event, specify
       *  `{"rotate": {"enable": false}}`.
       *
       * Properties that are not present take the HammerJS default values.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       *
       */
      this.overrides = {};
    }
    /**
     * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    buildHammer(element) {
      const mc = new Hammer(element, this.options);
      mc.get('pinch').set({
        enable: true
      });
      mc.get('rotate').set({
        enable: true
      });
      for (const eventName in this.overrides) {
        mc.get(eventName).set(this.overrides[eventName]);
      }
      return mc;
    }
  }
  HammerGestureConfig.ɵfac = function HammerGestureConfig_Factory(t) {
    return new (t || HammerGestureConfig)();
  };
  HammerGestureConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HammerGestureConfig,
    factory: HammerGestureConfig.ɵfac
  });
  return HammerGestureConfig;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
let HammerGesturesPlugin = /*#__PURE__*/(() => {
  class HammerGesturesPlugin extends EventManagerPlugin {
    constructor(doc, _config, console, loader) {
      super(doc);
      this._config = _config;
      this.console = console;
      this.loader = loader;
      this._loaderPromise = null;
    }
    supports(eventName) {
      if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
        return false;
      }
      if (!window.Hammer && !this.loader) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` + `loaded and no custom loader has been specified.`);
        }
        return false;
      }
      return true;
    }
    addEventListener(element, eventName, handler) {
      const zone = this.manager.getZone();
      eventName = eventName.toLowerCase();
      // If Hammer is not present but a loader is specified, we defer adding the event listener
      // until Hammer is loaded.
      if (!window.Hammer && this.loader) {
        this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
        // This `addEventListener` method returns a function to remove the added listener.
        // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
        // than remove anything.
        let cancelRegistration = false;
        let deregister = () => {
          cancelRegistration = true;
        };
        zone.runOutsideAngular(() => this._loaderPromise.then(() => {
          // If Hammer isn't actually loaded when the custom loader resolves, give up.
          if (!window.Hammer) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
            }
            deregister = () => {};
            return;
          }
          if (!cancelRegistration) {
            // Now that Hammer is loaded and the listener is being loaded for real,
            // the deregistration function changes from canceling registration to
            // removal.
            deregister = this.addEventListener(element, eventName, handler);
          }
        }).catch(() => {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            this.console.warn(`The "${eventName}" event cannot be bound because the custom ` + `Hammer.JS loader failed.`);
          }
          deregister = () => {};
        }));
        // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
        // can change the behavior of `deregister` once the listener is added. Using a closure in
        // this way allows us to avoid any additional data structures to track listener removal.
        return () => {
          deregister();
        };
      }
      return zone.runOutsideAngular(() => {
        // Creating the manager bind events, must be done outside of angular
        const mc = this._config.buildHammer(element);
        const callback = function (eventObj) {
          zone.runGuarded(function () {
            handler(eventObj);
          });
        };
        mc.on(eventName, callback);
        return () => {
          mc.off(eventName, callback);
          // destroy mc to prevent memory leak
          if (typeof mc.destroy === 'function') {
            mc.destroy();
          }
        };
      });
    }
    isCustomEvent(eventName) {
      return this._config.events.indexOf(eventName) > -1;
    }
  }
  HammerGesturesPlugin.ɵfac = function HammerGesturesPlugin_Factory(t) {
    return new (t || HammerGesturesPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HAMMER_GESTURE_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HAMMER_LOADER, 8));
  };
  HammerGesturesPlugin.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: HammerGesturesPlugin,
    factory: HammerGesturesPlugin.ɵfac
  });
  return HammerGesturesPlugin;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's EventManager.
 *
 * @publicApi
 */
let HammerModule = /*#__PURE__*/(() => {
  class HammerModule {}
  HammerModule.ɵfac = function HammerModule_Factory(t) {
    return new (t || HammerModule)();
  };
  HammerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HammerModule
  });
  HammerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [{
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true,
      deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), HAMMER_LOADER]]
    }, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
      deps: []
    }]
  });
  return HammerModule;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
let DomSanitizer = /*#__PURE__*/(() => {
  class DomSanitizer {}
  DomSanitizer.ɵfac = function DomSanitizer_Factory(t) {
    return new (t || DomSanitizer)();
  };
  DomSanitizer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DomSanitizer,
    factory: function DomSanitizer_Factory(t) {
      let r = null;
      if (t) {
        r = new (t || DomSanitizer)();
      } else {
        r = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomSanitizerImpl);
      }
      return r;
    },
    providedIn: 'root'
  });
  return DomSanitizer;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function domSanitizerImplFactory(injector) {
  return new DomSanitizerImpl(injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
let DomSanitizerImpl = /*#__PURE__*/(() => {
  class DomSanitizerImpl extends DomSanitizer {
    constructor(_doc) {
      super();
      this._doc = _doc;
    }
    sanitize(ctx, value) {
      if (value == null) return null;
      switch (ctx) {
        case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.NONE:
          return value;
        case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "HTML" /* BypassType.Html */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
          }
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();
        case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.STYLE:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "Style" /* BypassType.Style */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
          }
          return value;
        case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.SCRIPT:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "Script" /* BypassType.Script */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
          }
          throw new Error('unsafe value used in a script context');
        case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "URL" /* BypassType.Url */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
          }
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵ_sanitizeUrl"])(String(value));
        case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.RESOURCE_URL:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL" /* BypassType.ResourceUrl */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
          }
          throw new Error(`unsafe value used in a resource URL context (see ${_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵXSS_SECURITY_URL"]})`);
        default:
          throw new Error(`Unexpected SecurityContext ${ctx} (see ${_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵXSS_SECURITY_URL"]})`);
      }
    }
    bypassSecurityTrustHtml(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustHtml"])(value);
    }
    bypassSecurityTrustStyle(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustStyle"])(value);
    }
    bypassSecurityTrustScript(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustScript"])(value);
    }
    bypassSecurityTrustUrl(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustUrl"])(value);
    }
    bypassSecurityTrustResourceUrl(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustResourceUrl"])(value);
    }
  }
  DomSanitizerImpl.ɵfac = function DomSanitizerImpl_Factory(t) {
    return new (t || DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  DomSanitizerImpl.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DomSanitizerImpl,
    factory: function DomSanitizerImpl_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = domSanitizerImplFactory(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
      }
      return r;
    },
    providedIn: 'root'
  });
  return DomSanitizerImpl;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser package.
 */
/**
 * @publicApi
 */
const VERSION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Version('15.2.10');

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */
// This file only reexports content of the `src` folder. Keep it that way.

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 71670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ 42321:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__addDisposableResource": () => (/* binding */ __addDisposableResource),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__disposeResources": () => (/* binding */ __disposeResources),
/* harmony export */   "__esDecorate": () => (/* binding */ __esDecorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__propKey": () => (/* binding */ __propKey),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__rewriteRelativeImportExtension": () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   "__runInitializers": () => (/* binding */ __runInitializers),
/* harmony export */   "__setFunctionName": () => (/* binding */ __setFunctionName),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

}])
//# sourceMappingURL=src_pages_claim-tnc_claim-tnc_module_ts-_f5500.js.map