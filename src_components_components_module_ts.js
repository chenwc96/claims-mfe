(self["webpackChunkclaim"] = self["webpackChunkclaim"] || []).push([["src_components_components_module_ts"],{

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

/***/ })

}])
//# sourceMappingURL=src_components_components_module_ts.js.map