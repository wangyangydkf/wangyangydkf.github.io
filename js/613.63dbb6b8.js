"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[613],{7613:function(t,n,i){i.r(n),i.d(n,{default:function(){return w}});var d=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"dt"},[n("div",{staticClass:"bddt",attrs:{id:"container"}})])}],a={data(){return{jwdlist:[{id:1,jind:104.594022,weid:31.094896,title:"本地"},{id:2,jind:102.24201,weid:34.97842,title:"德阳市位置"},{id:3,jind:104.597052,weid:31.094896,title:"文本内容标"},{id:4,jind:104.598062,weid:31.094896,title:"文本内容标"},{id:5,jind:104.599072,weid:31.094896,title:"文本内容标"}]}},mounted(){var t=new window.BMapGL.Map("container"),n=new window.BMapGL.Point(104.594022,31.094896);t.centerAndZoom(n,15);var i=new BMapGL.Marker(n);t.addOverlay(i);for(var d=0;d<this.jwdlist.length;d++){i=new window.BMapGL.Marker(new window.BMapGL.Point(this.jwdlist[d].jind,this.jwdlist[d].weid));t.addOverlay(i)}i.addEventListener("click",(function(){alert("您当前的位置")})),t.enableScrollWheelZoom(!0);var e=new window.BMapGL.ScaleControl;t.addControl(e);var a=new window.BMapGL.ZoomControl;t.addControl(a);var o=new window.BMapGL.CityListControl;t.addControl(o)}},o=a,r=i(1001),l=(0,r.Z)(o,d,e,!1,null,"7711ed68",null),w=l.exports}}]);
//# sourceMappingURL=613.63dbb6b8.js.map