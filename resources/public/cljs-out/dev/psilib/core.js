// Compiled by ClojureScript 1.10.339 {}
goog.provide('psilib.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
psilib.core.multiply = (function psilib$core$multiply(a,b){
return (a * b);
});
psilib.core.get_app_element = (function psilib$core$get_app_element(){
return goog.dom.getElement("app");
});
psilib.core.click_input = (function psilib$core$click_input(){
return document.getElementById("demo").innerHTML = "Mouse Clicked";
});
psilib.core.clicking_action = psilib.core.click_input.call(null);
psilib.core.hello_world = (function psilib$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"A Theremin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Use your Gamepad"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#demo","p#demo",-2021923384),"Click me",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),psilib.core.clicking_action], null)], null)], null);
});
psilib.core.mount = (function psilib$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [psilib.core.hello_world], null),el);
});
psilib.core.mount_app_element = (function psilib$core$mount_app_element(){
var temp__5457__auto__ = psilib.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return psilib.core.mount.call(null,el);
} else {
return null;
}
});
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.inst_state !== 'undefined')){
} else {
psilib.core.inst_state = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"maxGain","maxGain",-870556319),new cljs.core.Keyword(null,"freq","freq",-1855845278),new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.Keyword(null,"maxFreq","maxFreq",-156105555),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"detune","detune",316572245),new cljs.core.Keyword(null,"gain","gain",1350925045),new cljs.core.Keyword(null,"minFreq","minFreq",1374378426),new cljs.core.Keyword(null,"minGain","minGain",1315753948)],[0.15,(3000),"sine",(6000),(0),(100),0.042,(2000),(0)]));
}
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.context !== 'undefined')){
} else {
psilib.core.context = (new window.AudioContext());
}
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.osc !== 'undefined')){
} else {
psilib.core.osc = psilib.core.context.createOscillator();
}
if((typeof psilib !== 'undefined') && (typeof psilib.core !== 'undefined') && (typeof psilib.core.amp !== 'undefined')){
} else {
psilib.core.amp = psilib.core.context.createGain();
}
psilib.core.osc.type = new cljs.core.Keyword(null,"osc","osc",218527081).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state));
psilib.core.osc.detune.value = new cljs.core.Keyword(null,"detune","detune",316572245).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state));
psilib.core.amp.gain.value = new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state));
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,psilib.core.inst_state)))){
cljs.core.println.call(null,"Yet To Start");

psilib.core.osc.start((0));

cljs.core.swap_BANG_.call(null,psilib.core.inst_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.inc);
} else {
}
psilib.core.osc.connect(psilib.core.amp);
psilib.core.amp.connect(psilib.core.context.destination);
psilib.core.mount_app_element.call(null);
psilib.core.on_reload = (function psilib$core$on_reload(){
return cljs.core.println.call(null,cljs.core.deref.call(null,psilib.core.inst_state));
});

//# sourceMappingURL=core.js.map
