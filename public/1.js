(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Bus.js */ "./resources/js/Bus.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./resources/js/Components/Login.vue");
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Registration */ "./resources/js/Components/Registration.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Header",
  data: function data() {
    return {
      login_email: null,
      password: null,
      remember_me: true,
      email: ''
    };
  },
  components: {
    Login: _Login__WEBPACK_IMPORTED_MODULE_2__["default"],
    Registration: _Registration__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              axios.interceptors.response.use(function (response) {
                return response;
              }, function (error) {
                var status = error.response.status;

                if (status === 401) {
                  _this.$store.commit('auth/logout');
                }

                return Promise.reject(error);
              });
              _Bus_js__WEBPACK_IMPORTED_MODULE_1__["bus"].$on('ProductAddToCart', _this.addProductToCart);

              _this.$store.dispatch('cart/init').then(function (res) {});

              _this.$store.commit('auth/init');

              if (_this.guest) {
                _context.next = 9;
                break;
              }

              _context.next = 7;
              return axios.get('/api/auth/user').then(function (response) {
                return response.data.user;
              });

            case 7:
              user = _context.sent;

              _this.$store.commit('auth/login', user);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    addProductToCart: function addProductToCart(product) {
      this.$store.dispatch('cart/addProduct', product);
    },
    logout: function logout() {
      var _this2 = this;

      axios.post('/api/auth/logout').then(function (response) {
        return response.data;
      }).then(function (_ref) {
        var success = _ref.success;

        if (success) {
          _this2.$store.commit("auth/logout", []);
        }
      });
    }
  },
  computed: {
    guest: function guest() {
      return !this.$store.getters['auth/isLogged'];
    },
    isAdmin: function isAdmin() {
      return this.$store.getters['auth/user/isAdmin'];
    },
    user: function user() {
      return this.$store.getters['auth/user'];
    },
    countProducts: function countProducts() {
      return this.$store.getters['cart/countProducts'];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Login",
  data: function data() {
    return {
      form: {
        email: '',
        password: ''
      },
      badLogin: false,
      showOverlay: false,
      modalNoHide: false,
      allowReset: true
    };
  },
  methods: {
    toggleOverlay: function toggleOverlay() {
      this.showOverlay = !this.showOverlay;
      this.modalNoHide = this.showOverlay;
    },
    resetModal: function resetModal() {
      if (!this.allowReset) return;
      this.form.email = '';
      this.form.password = '';
      this.badLogin = false;
      this.showOverlay = false;
      this.modalNoHide = false;
      this.$refs.formObs.reset();
    },
    handleOk: function handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.allowReset = false;
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.$refs.formObs.validate().then(function (success) {
        if (!success) return;

        _this.$nextTick(function () {
          _this.login();
        });
      });
    },
    login: function login() {
      var _this2 = this;

      this.toggleOverlay();
      this.allowReset = true;
      axios.get('/sanctum/csrf-cookie').then(function (_) {
        axios.post('/api/auth/login', _this2.form).then(function (_ref) {
          var user = _ref.data.user;

          _this2.$store.commit('auth/login', user);

          _this2.toggleOverlay();

          _this2.resetModal();

          _this2.$bvModal.hide('modal');
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this2.toggleOverlay();

            _this2.badLogin = 'Логин или пароль не правильный, исправьте их и повторите попытку';
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Registration.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Registration.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Registration",
  data: function data() {
    return {
      form: {
        name: '',
        second_name: '',
        patronymic: '',
        email: '',
        login: '',
        password: '',
        c_password: ''
      },
      badRegistration: false,
      showOverlay: false,
      modalNoHide: false
    };
  },
  methods: {
    ucFirst: function ucFirst(value) {
      return value ? value[0].toUpperCase() + value.slice(1) : value;
    },
    toggleOverlay: function toggleOverlay() {
      this.showOverlay = !this.showOverlay;
      this.modalNoHide = this.showOverlay;
    },
    resetModal: function resetModal() {
      for (var fieldValue in this.form) {
        this.form[fieldValue] = '';
      }

      this.badRegistration = false;
      this.showOverlay = false;
      this.modalNoHide = false;
      this.$refs.formObs.reset();
    },
    handleOk: function handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.$refs.formObs.validate().then(function (success) {
        if (!success) {
          return;
        }

        _this.$nextTick(function () {
          _this.register();
        });
      });
    },
    register: function register() {
      var _this2 = this;

      this.toggleOverlay();
      axios.post('/api/auth/register', this.form).then(function (_ref) {
        var user = _ref.data.user;

        _this2.$bvModal.hide('modal');

        _this2.$store.commit('auth/login', user);

        _this2.resetModal();

        _this2.$bvModal.hide('modalRegister');

        _this2.toggleOverlay();
      })["catch"](function (error) {
        console.error(error);

        _this2.toggleOverlay();

        _this2.badRegistration = 'Пожалуйста обратитесь в тех. поддержку';
      });
    }
  },
  watch: {
    'form.name': function formName(value) {
      this.form.name = this.ucFirst(value);
    },
    'form.surname': function formSurname(value) {
      this.form.second_name = this.ucFirst(value);
    },
    'form.patronymic': function formPatronymic(value) {
      this.form.patronymic = this.ucFirst(value);
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.cart[data-v-5d3fd218] {\n    position: relative;\n    padding: 5px;\n}\n.cart-img[data-v-5d3fd218] {\n    width: 50px;\n    height: 50px;\n}\n.cart-count[data-v-5d3fd218] {\n    position: absolute;\n\n    padding: 3px;\n\n    background-color: white;\n    border-radius: 5px;\n    left: 0;\n    top: 0;\n}\n#brand[data-v-5d3fd218] {\n    font-size: 30px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=template&id=5d3fd218&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Header.vue?vue&type=template&id=5d3fd218&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "container-fluid p-0" }, [
    _c("nav", { staticClass: "navbar navbar-expand-lg navbar-light" }, [
      _c(
        "div",
        {
          staticClass: "collapse navbar-collapse d-flex justify-content-center",
          attrs: { id: "navbarSupportedContent" }
        },
        [
          _c("router-link", { attrs: { to: { name: "index" } } }, [
            _c("a", { staticClass: "navbar-brand", attrs: { id: "brand" } }, [
              _vm._v("Allete")
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "navbar-nav" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c("router-link", { attrs: { to: { name: "catalog" } } }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "" } }, [
                    _vm._v("Каталог")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3)
          ]),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _vm.guest
            ? _c("Login", { staticClass: "dropdown my-2 my-lg-0" })
            : _vm._e(),
          _vm._v(" "),
          _vm.guest
            ? _c("Registration", { staticClass: "dropdown my-2 my-lg-0" })
            : _c("ul", { staticClass: "topmenu" }, [
                _c("li", [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex",
                      attrs: {
                        id: "dropdownMenu3",
                        href: "#",
                        role: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "text-secondary my-auto nav-link",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.user.login) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-test ",
                        attrs: { src: "/contact.png", alt: "(" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "submenu" }, [
                    _c("li", { staticClass: "submenu-border-top" }, [
                      _c("a", { attrs: { href: "" } }, [_vm._v("Мой кабинет")])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "" } }, [_vm._v("Моя корзина")])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "" } }, [_vm._v("Мои заказы")])
                    ]),
                    _vm._v(" "),
                    _vm.isAdmin
                      ? _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "submenu-link",
                              attrs: { href: "" }
                            },
                            [_vm._v("Администрирование")]
                          ),
                          _vm._v(" "),
                          _c("ul", { staticClass: "submenu" }, [
                            _c("li", [
                              _c("a", { attrs: { href: "" } }, [
                                _vm._v("Новости")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "" } }, [
                                _vm._v("Товары")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "" } }, [
                                _vm._v("меню третьего уровня")
                              ])
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("li", [_c("div", { staticClass: "divider" })]),
                    _vm._v(" "),
                    _c("li", { staticClass: "submenu-border-bot" }, [
                      _c(
                        "form",
                        {
                          attrs: {
                            id: "logout-form",
                            action: "",
                            method: "POST"
                          },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.logout($event)
                            }
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "dropdown-item submenu-border-bot",
                              attrs: { type: "submit", name: "logout" }
                            },
                            [_vm._v("Выйти\n                                ")]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "cart mx-1" },
            [
              _c("img", {
                staticClass: "cart-img",
                attrs: { src: "/cart.png", alt: "(" }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "cart-count color-allete",
                domProps: { textContent: _vm._s(_vm.countProducts) }
              }),
              _vm._v(" "),
              _c("router-link", {
                staticClass: "stretched-link",
                attrs: { to: { name: "cart" } }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item hover-shadow-allete" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v("О нас")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v("Акции")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v("Сертификация")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v("Контакты")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "form-inline search-form" }, [
      _c("input", {
        staticClass: "form-control mr-sm-2 input-text-allete",
        attrs: { type: "search", placeholder: "Поиск", "aria-label": "Search" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "a",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal.modal",
              modifiers: { modal: true }
            }
          ],
          staticClass: "clickable btn-allete-1"
        },
        [_vm._v("Вход")]
      ),
      _vm._v(" "),
      _c("ValidationObserver", {
        ref: "formObs",
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var invalid = ref.invalid
              return [
                _c(
                  "b-modal",
                  {
                    attrs: {
                      id: "modal",
                      size: "sm",
                      title: "Вход",
                      "body-class": "position-static",
                      "no-close-on-backdrop": _vm.modalNoHide,
                      "no-close-on-esc": _vm.modalNoHide
                    },
                    on: { hide: _vm.resetModal, ok: _vm.handleOk },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "modal-footer",
                          fn: function(ref) {
                            var ok = ref.ok
                            var cancel = ref.cancel
                            return [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-allete",
                                  attrs: { disabled: invalid },
                                  on: {
                                    click: function($event) {
                                      return ok()
                                    }
                                  }
                                },
                                [_vm._v("Войти")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-allete btn-allete-bad",
                                  on: {
                                    click: function($event) {
                                      return cancel()
                                    }
                                  }
                                },
                                [_vm._v("Отмена")]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _c("b-overlay", {
                      staticClass: "rounded",
                      attrs: {
                        show: _vm.showOverlay,
                        rounded: "sm",
                        "no-wrap": ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-alert",
                      {
                        attrs: {
                          show: Boolean(_vm.badLogin),
                          variant: "danger"
                        }
                      },
                      [
                        _c("h4", { staticClass: "alert-heading" }, [
                          _vm._v("Ошибка аутентификации")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.badLogin) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form",
                      {
                        attrs: { fer: "form" },
                        on: {
                          submit: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.handleSubmit($event)
                          }
                        }
                      },
                      [
                        _c(
                          "b-form-group",
                          { attrs: { "label-for": "login" } },
                          [
                            _c("ValidationProvider", {
                              attrs: { rules: "required|max:25|email" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          staticClass: "input-text-allete",
                                          attrs: {
                                            id: "email",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback",
                                            placeholder: "Логин"
                                          },
                                          model: {
                                            value: _vm.form.email,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "email",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          { attrs: { "label-for": "password" } },
                          [
                            _c("ValidationProvider", {
                              attrs: { rules: "required|max:20" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          staticClass: "input-text-allete",
                                          attrs: {
                                            placeholder: "Пароль",
                                            id: "password",
                                            type: "password",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "password",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Registration.vue?vue&type=template&id=46504004&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Registration.vue?vue&type=template&id=46504004&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "a",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal.modalRegister",
              modifiers: { modalRegister: true }
            }
          ],
          staticClass: "clickable btn-allete-1 mx-1"
        },
        [_vm._v("Регистрация")]
      ),
      _vm._v(" "),
      _c("ValidationObserver", {
        ref: "formObs",
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var invalid = ref.invalid
              return [
                _c(
                  "b-modal",
                  {
                    attrs: {
                      id: "modalRegister",
                      title: "Регистрация",
                      "body-class": "position-static",
                      "no-close-on-backdrop": _vm.modalNoHide,
                      "no-close-on-esc": _vm.modalNoHide
                    },
                    on: { ok: _vm.handleOk, cancel: _vm.resetModal },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "modal-footer",
                          fn: function(ref) {
                            var ok = ref.ok
                            var cancel = ref.cancel
                            return [
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-allete",
                                  attrs: { disabled: invalid },
                                  on: {
                                    click: function($event) {
                                      return ok()
                                    }
                                  }
                                },
                                [_vm._v("Регистрация")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "btn-allete btn-allete-bad",
                                  on: {
                                    click: function($event) {
                                      return cancel()
                                    }
                                  }
                                },
                                [_vm._v("Отмена")]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _c("b-overlay", {
                      staticClass: "rounded",
                      attrs: {
                        show: _vm.showOverlay,
                        rounded: "sm",
                        "no-wrap": ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-alert",
                      {
                        attrs: {
                          show: Boolean(_vm.badRegistration),
                          variant: "danger"
                        }
                      },
                      [
                        _c("h4", { staticClass: "alert-heading" }, [
                          _vm._v("Ошибка решистрации")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.badRegistration) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form",
                      {
                        ref: "form",
                        on: {
                          submit: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.handleSubmit($event)
                          }
                        }
                      },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Имя",
                              description: "Это поле не обязательное",
                              "label-for": "name"
                            }
                          },
                          [
                            _c("ValidationProvider", {
                              attrs: { rules: "max:20" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "name",
                                            name: "name",
                                            type: "text",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "name",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Фамилия",
                              "label-for": "surname",
                              description: "Это поле не обязательное"
                            }
                          },
                          [
                            _c("ValidationProvider", {
                              attrs: { rules: "max:20|" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "surname",
                                            name: "surname",
                                            type: "text",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.second_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "second_name",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.second_name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Отчество",
                              "label-for": "patronymic",
                              description: "Это поле не обязательное"
                            }
                          },
                          [
                            _c("ValidationProvider", {
                              attrs: { rules: "max:20" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "patronymic",
                                            name: "patronymic",
                                            type: "text",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.patronymic,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "patronymic",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.patronymic"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          { attrs: { label: "Email", "label-for": "email" } },
                          [
                            _c("ValidationProvider", {
                              attrs: {
                                name: "Email",
                                rules: "required|max:20|email|unique:user,email"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.email,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "email",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          { attrs: { label: "Логин", "label-for": "login" } },
                          [
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required|max:25|min:4|unique:user,login"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "login",
                                            name: "login",
                                            type: "text",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.login,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "login",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.login"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: { label: "Пароль", "label-for": "password" }
                          },
                          [
                            _c("ValidationProvider", {
                              attrs: {
                                rules: "required|max:25|min:6",
                                vid: "password"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "password",
                                            name: "password",
                                            type: "password",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "password",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Подтверждение пароля",
                              "label-for": "c_password"
                            }
                          },
                          [
                            _c("ValidationProvider", {
                              attrs: {
                                rules:
                                  "required|max:25|min:6|confirmed:password"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var valid = ref.valid
                                      var errors = ref.errors
                                      var dirty = ref.dirty
                                      return [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "c_password",
                                            name: "c_password",
                                            type: "password",
                                            state: !dirty ? null : valid,
                                            "aria-describedby":
                                              "invalid-feedback"
                                          },
                                          model: {
                                            value: _vm.form.c_password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "c_password",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "form.c_password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "invalid-feedback" } },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(errors[0]) +
                                                "\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Header.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Header.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_5d3fd218_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=5d3fd218&scoped=true& */ "./resources/js/Components/Header.vue?vue&type=template&id=5d3fd218&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/Components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_5d3fd218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css& */ "./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_5d3fd218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_5d3fd218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d3fd218",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d3fd218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=style&index=0&id=5d3fd218&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d3fd218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d3fd218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d3fd218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d3fd218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_5d3fd218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Components/Header.vue?vue&type=template&id=5d3fd218&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Header.vue?vue&type=template&id=5d3fd218&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5d3fd218_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=5d3fd218&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Header.vue?vue&type=template&id=5d3fd218&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5d3fd218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5d3fd218_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_77a1bfae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=77a1bfae&scoped=true& */ "./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_77a1bfae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_77a1bfae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77a1bfae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_77a1bfae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=77a1bfae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Login.vue?vue&type=template&id=77a1bfae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_77a1bfae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_77a1bfae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Registration.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/Registration.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_46504004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=46504004&scoped=true& */ "./resources/js/Components/Registration.vue?vue&type=template&id=46504004&scoped=true&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/Components/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_46504004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_46504004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46504004",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Registration.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Registration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Registration.vue?vue&type=template&id=46504004&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/Registration.vue?vue&type=template&id=46504004&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_46504004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=46504004&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Registration.vue?vue&type=template&id=46504004&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_46504004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_46504004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);