/******/!function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var a=n(1),i=n(2),r=n(3),o=n(4),s=n(5),l=n(6),c=n(7),u=n(8),g=n(9),p=n(10),d=n(11);angular.module("myMessageFront",["ui.router","ui.bootstrap","toastr","satellizer"]).constant("API_URL","http://10.148.52.115:5000/").constant("malarkey",malarkey).constant("moment",moment).config(a.config).config(i.routerConfig).run(r.runBlock).service("githubContributor",u.GithubContributorService).service("webDevTec",g.WebDevTecService).controller("MainController",o.MainController).controller("AuthController",s.AuthController).controller("NavbarController",l.NavbarController).directive("acmeNavbar",p.NavbarDirective).directive("acmeMalarkey",d.MalarkeyDirective).directive("compareTo",c.CompareToDirective)},function(t,e){"use strict";function n(t,e,n,a){"ngInject";t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0,n.signupUrl=a+"auth/register",n.loginUrl=a+"auth/login"}n.$inject=["$logProvider","toastrConfig","$authProvider","API_URL"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=n},function(t,e){"use strict";function n(t,e){"ngInject";t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("logs",{url:"/logs",templateUrl:"app/logs/logs.html",controller:"MainController",controllerAs:"main"}).state("auth",{url:"/auth",templateUrl:"app/auth/auth.html",controller:"AuthController",controllerAs:"auth"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=n},function(t,e){"use strict";function n(t){"ngInject";t.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(e,"__esModule",{value:!0}),e.runBlock=n},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.MainController=function(){function t(e,a){n(this,t);this.$http=e,this.$window=a,this.getMessages(),this.getSubjects()}return a(t,[{key:"reloadData",value:function(){this.$window.location.reload()}},{key:"getMessages",value:function(){var t=this;this.$http.get("http://localhost:5000/api/message").then(function(e){t.messages=e.data})}},{key:"postpassMessages",value:function(){this.subject.status="pass",this.$http.post("http://localhost:5000/api/message",{id:this.subject._id,msg:this.subject.msg,status:this.subject.status}),this.reloadData()}},{key:"postfailMessages",value:function(){this.subject.status="fail",this.$http.post("http://localhost:5000/api/message",{msg:this.subject.msg,status:this.subject.status}),this.reloadData()}},{key:"getSubjects",value:function(){var t=this;this.$http.get("http://localhost:5000/api/subject").then(function(e){t.subject=e.data[0]})}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.AuthController=function(){function t(e){"ngInject";n(this,t),this.$auth=e}return t.$inject=["$auth"],a(t,[{key:"register",value:function(){var t=this;this.$auth.signup(this.user).then(function(e){t.$auth.setToken(e)})}},{key:"login",value:function(){var t=this;this.$auth.login(this.login.user).then(function(e){t.$auth.setToken(e)})}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.NavbarController=function(){function t(e){"ngInject";n(this,t),this.$auth=e,this.isAuthenticated=e.isAuthenticated}return t.$inject=["$auth"],a(t,[{key:"logout",value:function(){this.$auth.logout()}}]),t}()},function(t,e){"use strict";function n(t){"ngInject";return{require:"ngModel",link:function(e,n,a,i){var r=t(a.compareTo),o=t(a.ngModel);e.$watch(a.ngModel,function(t){i.$setValidity(a.name,t===r(e))}),e.$watch(a.compareTo,function(t){i.$setValidity(a.name,t===o(e))})}}}n.$inject=["$parse"],Object.defineProperty(e,"__esModule",{value:!0}),e.CompareToDirective=n},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.GithubContributorService=function(){function t(e,a){"ngInject";n(this,t),this.$log=e,this.$http=a,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],a(t,[{key:"getContributors",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;return this.$http.get(this.apiHost+"/contributors?per_page="+e).then(function(t){return t.data})["catch"](function(e){t.$log.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))})}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.WebDevTecService=function(){function t(){"ngInject";n(this,t),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"}]}return a(t,[{key:"getTec",value:function(){return this.data}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return t}Object.defineProperty(e,"__esModule",{value:!0}),e.NavbarDirective=a;var i=function r(t){"ngInject";n(this,r),this.relativeDate=t(this.creationDate).fromNow()};i.$inject=["moment"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){"ngInject";function e(e,n,a,i){var r=void 0,o=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){o.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(t){o.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:r,controllerAs:"vm"};return n}a.$inject=["malarkey"],Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();e.MalarkeyDirective=a;var r=function(){function t(e,a){"ngInject";n(this,t),this.$log=e,this.contributors=[],this.activate(a)}return t.$inject=["$log","githubContributor"],i(t,[{key:"activate",value:function(t){var e=this;return this.getContributors(t).then(function(){e.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(t){var e=this;return t.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}}]),t}()}]),angular.module("myMessageFront").run(["$templateCache",function(t){t.put("app/auth/auth.html",'<div class=container><div class=col-md-6><div class="panel panel-default"><div class=panel-heading>Login</div><div class=panel-body><form ng-submit=auth.login()><div class=form-group><label>Email address</label><input type=email class=form-control ng-model=auth.login.user.email></div><div class=form-group><label>Password</label><input type=password class=form-control ng-model=auth.login.user.pwd></div><button type=submit class="btn btn-default">Submit</button></form></div></div></div><div class=col-md-6><div class="panel panel-default"><div class=panel-heading>Register</div><div class=panel-body><form name=register ng-submit=auth.register()><div class=form-group><label>Email address</label><input type=email class=form-control ng-model=auth.user.email></div><div class=form-group><label>Password</label><input type=password class=form-control name=pwd ng-model=auth.user.pwd></div><div class=form-group><label>Password Confirm</label><input type=password class=form-control compare-to=auth.user.pwd name=pwdConfirm ng-model=pwdConfirm></div><span ng-show="register.pwdConfirm.$dirty && register.pwdConfirm.$invalid">Passwords do not match</span> <button ng-disabled=register.pwdConfirm.$invalid type=submit class="btn btn-default">Submit</button></form></div></div></div></div>'),t.put("app/logs/logs.html",'<div class="panel panel-default"><div class=panel-heading>Recently added</div><div class=panel-body><ul class=list-group><div ng-controller=MainController><li class=list-group-item data-ng-repeat="message in main.messages | orderBy:\'id\':true">{{message.msg}} {{message.status}} {{message.user.email}}</li></div></ul></div></div>'),t.put("app/main/main.html",'<div class=container><style>img {\n            width: 400px;\n        }</style><div class="panel panel-default" style="width: 2900px"><div class=panel-heading>{{main.subject.msg}}_axial</div><div class=panel-body><div ng-app="" ng-init="slices=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"><div ng-repeat="arr in slices"><img ng-src=./dicom/axial_{{main.subject.msg}}_ba_{{arr}}.png> <img ng-src=./dicom/axial_{{main.subject.msg}}_01_{{arr}}.png> <img ng-src=./dicom/axial_{{main.subject.msg}}_02_{{arr}}.png> <img ng-src=./dicom/axial_{{main.subject.msg}}_03_{{arr}}.png> <img ng-src=./dicom/axial_{{main.subject.msg}}_04_{{arr}}.png> <img ng-src=./dicom/axial_{{main.subject.msg}}_05_{{arr}}.png> <img ng-src=./dicom/axial_{{main.subject.msg}}_06_{{arr}}.png></div></div></div><div class="panel panel-default" style="width: 2900px"><div class=panel-heading>{{main.subject.msg}}_sagittal</div><div class=panel-body><div ng-app="" ng-init="slices=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"><div ng-repeat="arr in slices"><img ng-src=./dicom/sagittal_{{main.subject.msg}}_ba_1.png> <img ng-src=./dicom/sagittal_{{main.subject.msg}}_01_1.png> <img ng-src=./dicom/sagittal_{{main.subject.msg}}_02_1.png> <img ng-src=./dicom/sagittal_{{main.subject.msg}}_03_1.png> <img ng-src=./dicom/sagittal_{{main.subject.msg}}_04_1.png> <img ng-src=./dicom/sagittal_{{main.subject.msg}}_05_1.png> <img ng-src=./dicom/sagittal_{{main.subject.msg}}_06_1.png></div></div></div><div class="panel panel-default" style="width: 2900px"><div class=panel-heading>{{main.subject.msg}}_coronal</div><div class=panel-body><div ng-app="" ng-init="slices=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"><div ng-repeat="arr in slices"><img ng-src=./dicom/coronal_{{main.subject.msg}}_ba_{{arr}}.png> <img ng-src=./dicom/coronal_{{main.subject.msg}}_01_{{arr}}.png> <img ng-src=./dicom/coronal_{{main.subject.msg}}_02_{{arr}}.png> <img ng-src=./dicom/coronal_{{main.subject.msg}}_03_{{arr}}.png> <img ng-src=./dicom/coronal_{{main.subject.msg}}_04_{{arr}}.png> <img ng-src=./dicom/coronal_{{main.subject.msg}}_05_{{arr}}.png> <img ng-src=./dicom/coronal_{{main.subject.msg}}_06_{{arr}}.png></div></div></div><div class="panel panel-default"><div class=panel-heading>Did subject<bold>{{main.subject.msg}}</bold>pass?</div><div class=panel-body><div class=input-group><!--textarea class="form-control custom-control" rows=3 style="resize:none" ng-model="main.message"></textarea--> <span class="input-group-addon btn btn-primary" ng-click=main.postpassMessages()>Pass</span> <span class="input-group-addon btn btn-primary" ng-click=main.postfailMessages()>Fail</span></div></div></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav ng-controller="NavbarController as nav" class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li class=Logs><a ng-href=#/logs>Logs</a></li><li ng-hide=nav.isAuthenticated()><a ui-sref=auth>Login</a></li><li ng-show=nav.isAuthenticated()><a ng-click=nav.logout()>Logout</a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-c2844ad26e.js.map
