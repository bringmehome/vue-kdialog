webpackJsonp([0],{E5vP:function(t,n,e){var i=e("Ygik");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("d33dcdf6",i,!0,{})},EndO:function(t,n,e){var i=e("UWA0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("68cfcd46",i,!0,{})},UWA0:function(t,n,e){n=t.exports=e("UTlt")(!1),n.push([t.i,"",""])},Ygik:function(t,n,e){n=t.exports=e("UTlt")(!1),n.push([t.i,".input{width:236px;border:1px solid #999;padding:5px 10px;border-radius:4px;color:#333}",""])},ZPw6:function(t,n,e){n=t.exports=e("UTlt")(!1),n.push([t.i,"dl{height:30px;line-height:30px;margin-bottom:10px;white-space:nowrap}dd,dt{display:inline-block;vertical-align:top}dt{width:60px}.input{border:1px solid #999;padding:5px 10px;border-radius:4px;color:#333}li{padding:5px}.getit{height:22px;line-height:22px;margin-left:10px}",""])},fSq5:function(t,n,e){"use strict";function i(t){e("tppE")}function s(t){e("E5vP")}function a(t){e("EndO")}Object.defineProperty(n,"__esModule",{value:!0});var o={methods:{getit:function(){this.$toast({msg:"got it!"})}}},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"forms"},[e("li",[e("div",{staticClass:"title"},[t._v("This is a coupon"),e("span",{staticClass:"getit btn",on:{click:t.getit}},[t._v("Get it")])])]),e("li",[e("div",{staticClass:"title"},[t._v("This is a coupon"),e("span",{staticClass:"getit btn",on:{click:t.getit}},[t._v("Get it")])])]),e("li",[e("div",{staticClass:"title"},[t._v("This is a coupon"),e("span",{staticClass:"getit btn",on:{click:t.getit}},[t._v("Get it")])])])])},c=[],r={render:l,staticRenderFns:c},d=r,p=e("Z0/y"),u=i,h=p(o,d,!1,u,null,null),v=h.exports,g={data:function(){return{Age:""}}},_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"forms"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Age,expression:"Age"}],staticClass:"input",attrs:{type:"text",placeholder:"Your Age"},domProps:{value:t.Age},on:{input:function(n){n.target.composing||(t.Age=n.target.value)}}})])},m=[],f={render:_,staticRenderFns:m},b=f,x=e("Z0/y"),$=s,w=x(g,b,!1,$,null,null),k=w.exports,y={data:function(){return{init:!0,case_0:"\n      export default {\n          created:{\n              this.$alert({\n                  title: '<h3 style=\"margin-left:-12px;\">title with html</h3>',\n                  content: 'This is a alert!'\n              });\n          }\n      }",case_1:"\n      export default {\n          created:{\n              this.$alert({\n                  title: '<h3 style=\"margin-left:-12px;\">title with html</h3>',\n                  content: 'This is a alert! (width : 250px)',\n                  shadowClose: true,\n                  width: '250px',\n                  ok(dialog){\n                      dialog.content = '<h3 style=\"font-weight:bold;\">callback...</h3>';\n                      dialog.okText = 'OK';\n                  }\n              });\n          }\n      }",case_2:"\n      import componentA from 'A.vue';\n      export default {\n          created:{\n              this.$alert({\n                  title: 'Get your coupons',\n                  component: componentA,\n                  width: '230px',\n                  ok(dialog){\n                      console.log(dialog);\n                  }\n              });\n          }\n      }",case_3:'\n      <template>\n        <ul class="forms">\n            <li>\n                <div class="title">This is a coupon\n                    <span class="getit btn" @click="getit">Get it</span>\n                </div>\n                <div class="title">This is a coupon\n                    <span class="getit btn" @click="getit">Get it</span>\n                </div>\n                <div class="title">This is a coupon\n                    <span class="getit btn" @click="getit">Get it</span>\n                </div>\n            </li>\n        </ul>\n      </template>',case_4:"\n      import componentB from 'B.vue';\n      export default {\n          created:{\n              this.$bus.$on('okEvent', data => {\n                  if(data.$dialog.$children[0].Age == ''){\n                      data.$dialog.submiting = false;\n                      return this.$toast({ msg: 'Can't be empty' });\n                  }\n                  this.$toast({ msg: `Your Age is: ${data.$dialog.$children[0].Age}`, ok(toast){\n                      data.$dialog.close();\n                      toast.close();\n                  } });\n              });\n              this.$bus.$on('cancelEvent', data => {\n                  data.$dialog.close();\n                  console.log('closed by your hand');\n              });\n          }\n      }",case_5:'\n      <template>\n          <div class="forms">\n              <input class="input" type="text" v-model="Age" placeholder="Your Age">\n          </div>\n      </template>\n\n      <script>\n          export default {\n              data(){\n                  return{\n                      Age: \'\'\n                  }\n              },\n          };\n      <\/script>'}},created:function(){var t=this;window.addEventListener("click",function(){t.init||(t._loading.close(),t.init=!0)},!1),this.$bus.$on("okEvent",function(n){if(""==n.$dialog.$children[0].Age)return n.$dialog.submiting=!1,t.$toast({msg:"Can't be empty"});t.$toast({msg:"Your Age is: "+n.$dialog.$children[0].Age,ok:function(t){n.$dialog.close(),t.close()}})}),this.$bus.$on("cancelEvent",function(t){t.$dialog.close(),console.log("closed by your hand")})},methods:{alert:function(){this.$alert({title:'<h3 style="margin-left:-12px;">title with html</h3>',content:"This is a alert!"})},alert_callback:function(){this.$alert({title:'<h3 style="margin-left:-12px;">title with html</h3>',content:"This is a alert! (width : 250px)",shadowClose:!1,width:"250px",ok:function(t){t.content='<h2 style="font-weight:bold;">callback...</h2>',t.okText="OK"}})},alert_component:function(){this.$alert({title:"Get your coupons",component:v,width:"230px",ok:function(t){t.close()}})},alert_eventbus:function(){this.$confirm({title:"test for event bus",content:"click buttons bellow to show result.",component:k,okEvent:"okEvent",cancelEvent:"cancelEvent"})}}},A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pages"},[e("div",{staticClass:"alertEx"},[e("h2",[t._v("Normal Useage:")]),e("h3",[t._v("show alert")]),e("h4",[t._v("code:")]),e("pre",[e("code",[t._v("In your vue component:"),e("hr"),t._v(t._s(t.case_0))])]),e("h4",[t._v("test:")]),e("div",{staticClass:"btn_wrap paddingB50"},[e("span",{staticClass:"btn",on:{click:t.alert}},[t._v("simple alert")])]),e("h3",[t._v("alert with callback")]),e("h4",[t._v("code:")]),e("pre",[e("code",[t._v("In your vue component:"),e("hr"),t._v(t._s(t.case_1))])]),e("h4",[t._v("test:")]),e("div",{staticClass:"btn_wrap paddingB50"},[e("span",{staticClass:"btn",on:{click:t.alert_callback}},[t._v("alert with callback")])]),e("hr"),e("h2",[t._v("Advance Useage:")]),e("h3",[t._v("alert with component")]),e("h4",[t._v("code:")]),e("pre",[e("code",[t._v("In your vue component:"),e("hr"),t._v(t._s(t.case_2)),e("hr"),t._v("In componentA:\n"+t._s(t.case_3))])]),e("h4",[t._v("test:")]),e("div",{staticClass:"btn_wrap paddingB50"},[e("span",{staticClass:"btn",on:{click:t.alert_component}},[t._v("alert with component")])]),e("h3",[t._v("alert with event bus")]),e("h4",[t._v("code:")]),e("pre",[e("code",[t._v("First: In App.js\n  Vue.use(KeyDialog); // use KeyDialog\n  KeyDialog.eventbus(); // use event bus"),e("hr"),t._v("second: in your vue component:\n"+t._s(t.case_4)),e("hr"),t._v("In componentB:\n"+t._s(t.case_5))])]),e("h4",[t._v("test:")]),e("div",{staticClass:"btn_wrap paddingB50"},[e("span",{staticClass:"btn",on:{click:t.alert_eventbus}},[t._v("alert with eventbus")])])])])},C=[],E={render:A,staticRenderFns:C},T=E,I=e("Z0/y"),G=a,B=I(y,T,!1,G,null,null);n.default=B.exports},tppE:function(t,n,e){var i=e("ZPw6");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("0db5e332",i,!0,{})}});