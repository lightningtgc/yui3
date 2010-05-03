YUI.add("graphics",function(D){function B(E){this._config=E;B.superclass.constructor.apply(this,arguments);}B.NAME="graphics";B.ATTRS={engine:{getter:function(){return this._engine;},validator:function(E){return(E=="canvas"||E=="vml");},setter:function(E){this._engine=this._getAPI(E);return this._engine;}}};D.extend(B,D.Base,{_config:null,_engine:null,_getAPI:function(G){var F,E=this._config;switch(G){case"canvas":F=new D.CanvasAPI(E);break;case"vml":F=new D.VMLAPI(E);break;}return F;},beginFill:function(E,F){var G=this.get("engine");return G.beginFill.apply(G,arguments);},beginGradientFill:function(K,E,F,I,L,M,H,J){var G=this.get("engine");return G.beginGradientFill.apply(G,arguments);},clear:function(){var E=this.get("engine");return E.clear.apply(E);},curveTo:function(G,F,I,H,E,K){var J=this.get("engine");return J.curveTo.apply(J,arguments);},drawCircle:function(F,H,E){var G=this.get("engine");return G.drawCircle.apply(G,arguments);},drawEllipse:function(E,I,F,G){var H=this.get("engine");return H.beginGradientFill.apply(H,arguments);},drawRectangle:function(E,I,F,G){var H=this.get("engine");return H.drawRectangle.apply(H,arguments);},drawRoundRect:function(E,K,F,G,I,H){var J=this.get("engine");return J.drawRoundRect.apply(J,arguments);},endFill:function(){var E=this.get("engine");return E.endFill.apply(E);},lineGradientStyle:function(K,E,F,I,L,M,H,J){var G=this.get("engine");return G.lineGradientStyle.apply(G,arguments);},lineStyle:function(L,I,H,K,M,G,E,J){var F=this.get("engine");return F.lineStyle.apply(F,arguments);},lineTo:function(E,G){var F=this.get("engine");return F.lineTo.apply(F,arguments);},moveTo:function(E,G){var F=this.get("engine");return F.moveTo.apply(F,arguments);}});D.Graphics=B;function A(E){A.superclass.constructor.apply(this,arguments);}A.NAME="canvasAPI";A.ATTRS={parent:{getter:function(){return this._parent;},setter:function(E){if(D.Lang.isString(E)){this._parent=document.getElementById(E);}else{this._parent=E;}return this._parent;}},canvas:{getter:function(){if(!this._canvas){this._setCanvas();}return this._canvas;}},context:{getter:function(){if(!this._context){this._context=this.get("canvas").getContext("2d");}return this._context;}},x:{getter:function(){return this._x;},setter:function(E){this._x=E;return E;},validator:function(E){return D.Lang.isNumber(E);}},y:{getter:function(){return this._y;},setter:function(E){this._y=E;return E;},validator:function(E){return D.Lang.isNumber(E);}},fillColor:{getter:function(){return this._fillColor;},setter:function(E){this._fillColor=E;return E;}},fillAlpha:{getter:function(){return this._fillAlpha;},setter:function(E){this._fillAlpha=E;return E;}},lineColor:{getter:function(){return this._lineColor;},setter:function(E){this._lineColor=E;return E;}},lineWidth:{getter:function(){return this._lineWidth;},setter:function(E){this._lineWidth=E;return E;},validator:function(E){return D.Lang.isNumber(E);}},lineAlpha:{getter:function(){return this._lineAlpha;},setter:function(E){this._lineAlpha=E;return E;},validator:function(E){return D.Lang.isNumber(E);}},fillType:{getter:function(){return this._fillType;},setter:function(E){this._fillType=E;return E;},validator:function(E){return(E==="solid"||E==="linear"||E==="radial");}}};D.extend(A,D.Base,{_setCanvas:function(){var E=this.get("parent");this._canvas=document.createElement("canvas");this._canvas.width=parseInt(this._parent.style.width,10)||E.width;this._canvas.height=parseInt(this._parent.style.height,10)||E.height;this._context=this._canvas.getContext("2d");E.appendChild(this._canvas);},_canvas:null,_context:null,fillType:"solid",_x:0,_y:0,_fillColor:null,_fillAlpha:1,_lineColor:null,_lineWidth:1,_lineAlpha:1,beginFill:function(F,G){var E=this.get("context");this.set("fillColor",F);this.set("fillAlpha",G);E.beginPath();E.fillStyle=F;},beginGradientFill:function(I,F,E,J,H,G,L,K){},clear:function(){this.set("fillColor",null);this.set("lineColor",null);this.set("lineWidth",1);this.set("fillAlpha",1);this.set("lineAlpha",1);},curveTo:function(H,G,J,I,E,K){var F=this.get("context");F.bezierCurveTo(arguments);},drawCircle:function(M,L,I){var J=0,F=360,H=false,K=this.get("lineColor"),G=this.get("lineWidth"),E=this.get("fillColor"),N=this.get("context");J*=(Math.PI/180);F*=(Math.PI/180);N.arc(M+I,L+I,I,J,F,H);},drawEllipse:function(F,H,G,E){},drawRectangle:function(E,L,G,I){var J=this.get("lineWidth"),H=this.get("fillColor"),K=this.get("lineColor"),F=this.get("context");if(H){F.fillRect(E,L,G,I);}if(K){F.strokeRect(E,L,G,I);}},drawRoundRect:function(L,K,M,H,J,G){var F=this.get("lineWidth"),E=this.get("fillColor"),I=this.get("lineColor"),N=this.get("context");N.moveTo(L,K+G);N.lineTo(L,K+H-G);N.quadraticCurveTo(L,K+H,L+J,K+H);N.lineTo(L+M-J,K+H);N.quadraticCurveTo(L+M,K+H,L+M,K+H-G);N.lineTo(L+M,K+G);N.quadraticCurveTo(L+M,K,L+M-J,K);N.lineTo(L+J,K);N.quadraticCurveTo(L,K,L,K+G);},endFill:function(){var E=this.get("context");if(this.get("lineColor")){E.stroke();}if(this.get("fillColor")){E.fill();}},lineGradientStyle:function(I,F,E,J,H,G,L,K){},lineStyle:function(K,H,G,J,L,F,E,I){var M=this.get("context");this.set("lineWidth",K);this.set("lineColor",H);this.set("lineAlpha",G);M.strokeStyle=H;M.lineWidth=K;},lineTo:function(E,G){var F=this.get("context");F.lineTo(E,G);this.set("x",E);this.set("y",G);},moveTo:function(E,G){var F=this.get("context");F.moveTo(E,G);this.set("x",E);this.set("y",G);}});D.CanvasAPI=A;function C(E){C.superclass.constructor.apply(this,arguments);}C.NAME="vmlAPI";C.ATTRS={parent:{getter:function(){return this._parent;},setter:function(E){if(D.Lang.isString(E)){this._parent=document.getElementById(E);}else{this._parent=E;}return this._parent;}},canvas:{getter:function(){if(!this._canvas){this._setCanvas();}return this._canvas;}},x:{getter:function(){return this._x;},setter:function(E){this._x=E;return E;},validator:function(E){return D.Lang.isNumber(E);}},y:{getter:function(){return this._y;},setter:function(E){this._y=E;return E;},validator:function(E){return D.Lang.isNumber(E);
}},fillColor:{getter:function(){return this._fillColor;},setter:function(E){this._fillColor=E;return E;}},fillAlpha:{getter:function(){return this._fillAlpha;},setter:function(E){this._fillAlpha=E;return E;}},lineColor:{getter:function(){return this._lineColor;},setter:function(E){this._lineColor=E;return E;}},lineWidth:{getter:function(){return this._lineWidth;},setter:function(E){this._lineWidth=E;return E;},validator:function(E){return D.Lang.isNumber(E);}},lineAlpha:{getter:function(){return this._lineAlpha;},setter:function(E){this._lineAlpha=E;return E;},validator:function(E){return D.Lang.isNumber(E);}}};D.extend(C,D.Base,{_canvas:null,_setCanvas:function(){var G=this.get("parent"),E=parseInt(G.style.width,10),F=parseInt(G.style.height,10);this._canvas=document.createElement("v:group");this._canvas.setAttribute("id","engine");this._canvas.style.width=E+"px";this._canvas.style.height=F+"px";this._canvas.setAttribute("coordsize",E+" "+F);G.appendChild(this._canvas);},_x:0,_y:0,_fillColor:null,_fillAlpha:1,_lineColor:null,_lineWidth:1,_lineAlpha:1,beginFill:function(E,F){this.set("fillColor",E);this.set("fillAlpha",F);},beginGradientFill:function(I,F,E,J,H,G,L,K){},clear:function(){},curveTo:function(G,F,I,H,E,J){},drawCircle:function(F,L,E){var I=E*2,K=this.get("lineColor"),J=this.get("lineWidth"),H=this.get("fillColor"),G=document.createElement("v:oval");G.setAttribute("strokeweight",J+"px");G.setAttribute("strokecolor",K);G.style.left=F+"px";G.style.top=L+"px";G.style.width=I+"px";G.style.height=I+"px";G.fillcolor=H;this.get("canvas").appendChild(G);},drawEllipse:function(E,H,F,G){},drawRectangle:function(E,L,F,H){var J=this.get("lineWidth"),G=this.get("fillColor"),K=this.get("lineColor"),I=document.createElement("v:rect");I.setAttribute("strokeweight",J+"px");I.style.width=F+"px";I.style.height=H+"px";I.style.top=L;I.style.left=E;I.fillcolor=G;I.strokecolor=K;this.get("canvas").appendChild(I);},drawRoundRect:function(E,J,F,G,I,H){},endFill:function(){},lineGradientStyle:function(I,F,E,J,H,G,L,K){},lineStyle:function(H,G,L,J,I,K,E,F){this.set("lineWidth",H);this.set("lineColor",G);this.set("lineAlpha",L);},lineTo:function(E,F){},moveTo:function(E,F){this.set("x",E);this.set("y",F);}});D.VMLAPI=C;},"@VERSION@");