// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9636){
var map__9637 = p__9636;
var map__9637__$1 = ((((!((map__9637 == null)))?(((((map__9637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9637):map__9637);
var m = map__9637__$1;
var n = cljs.core.get.call(null,map__9637__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9637__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9639_9661 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9640_9662 = null;
var count__9641_9663 = (0);
var i__9642_9664 = (0);
while(true){
if((i__9642_9664 < count__9641_9663)){
var f_9665 = cljs.core._nth.call(null,chunk__9640_9662,i__9642_9664);
cljs.core.println.call(null,"  ",f_9665);


var G__9666 = seq__9639_9661;
var G__9667 = chunk__9640_9662;
var G__9668 = count__9641_9663;
var G__9669 = (i__9642_9664 + (1));
seq__9639_9661 = G__9666;
chunk__9640_9662 = G__9667;
count__9641_9663 = G__9668;
i__9642_9664 = G__9669;
continue;
} else {
var temp__5457__auto___9670 = cljs.core.seq.call(null,seq__9639_9661);
if(temp__5457__auto___9670){
var seq__9639_9671__$1 = temp__5457__auto___9670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9639_9671__$1)){
var c__4351__auto___9672 = cljs.core.chunk_first.call(null,seq__9639_9671__$1);
var G__9673 = cljs.core.chunk_rest.call(null,seq__9639_9671__$1);
var G__9674 = c__4351__auto___9672;
var G__9675 = cljs.core.count.call(null,c__4351__auto___9672);
var G__9676 = (0);
seq__9639_9661 = G__9673;
chunk__9640_9662 = G__9674;
count__9641_9663 = G__9675;
i__9642_9664 = G__9676;
continue;
} else {
var f_9677 = cljs.core.first.call(null,seq__9639_9671__$1);
cljs.core.println.call(null,"  ",f_9677);


var G__9678 = cljs.core.next.call(null,seq__9639_9671__$1);
var G__9679 = null;
var G__9680 = (0);
var G__9681 = (0);
seq__9639_9661 = G__9678;
chunk__9640_9662 = G__9679;
count__9641_9663 = G__9680;
i__9642_9664 = G__9681;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9682 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9682);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9682)))?cljs.core.second.call(null,arglists_9682):arglists_9682));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9643_9683 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9644_9684 = null;
var count__9645_9685 = (0);
var i__9646_9686 = (0);
while(true){
if((i__9646_9686 < count__9645_9685)){
var vec__9647_9687 = cljs.core._nth.call(null,chunk__9644_9684,i__9646_9686);
var name_9688 = cljs.core.nth.call(null,vec__9647_9687,(0),null);
var map__9650_9689 = cljs.core.nth.call(null,vec__9647_9687,(1),null);
var map__9650_9690__$1 = ((((!((map__9650_9689 == null)))?(((((map__9650_9689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9650_9689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9650_9689):map__9650_9689);
var doc_9691 = cljs.core.get.call(null,map__9650_9690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9692 = cljs.core.get.call(null,map__9650_9690__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9688);

cljs.core.println.call(null," ",arglists_9692);

if(cljs.core.truth_(doc_9691)){
cljs.core.println.call(null," ",doc_9691);
} else {
}


var G__9693 = seq__9643_9683;
var G__9694 = chunk__9644_9684;
var G__9695 = count__9645_9685;
var G__9696 = (i__9646_9686 + (1));
seq__9643_9683 = G__9693;
chunk__9644_9684 = G__9694;
count__9645_9685 = G__9695;
i__9646_9686 = G__9696;
continue;
} else {
var temp__5457__auto___9697 = cljs.core.seq.call(null,seq__9643_9683);
if(temp__5457__auto___9697){
var seq__9643_9698__$1 = temp__5457__auto___9697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9643_9698__$1)){
var c__4351__auto___9699 = cljs.core.chunk_first.call(null,seq__9643_9698__$1);
var G__9700 = cljs.core.chunk_rest.call(null,seq__9643_9698__$1);
var G__9701 = c__4351__auto___9699;
var G__9702 = cljs.core.count.call(null,c__4351__auto___9699);
var G__9703 = (0);
seq__9643_9683 = G__9700;
chunk__9644_9684 = G__9701;
count__9645_9685 = G__9702;
i__9646_9686 = G__9703;
continue;
} else {
var vec__9652_9704 = cljs.core.first.call(null,seq__9643_9698__$1);
var name_9705 = cljs.core.nth.call(null,vec__9652_9704,(0),null);
var map__9655_9706 = cljs.core.nth.call(null,vec__9652_9704,(1),null);
var map__9655_9707__$1 = ((((!((map__9655_9706 == null)))?(((((map__9655_9706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9655_9706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9655_9706):map__9655_9706);
var doc_9708 = cljs.core.get.call(null,map__9655_9707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9709 = cljs.core.get.call(null,map__9655_9707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9705);

cljs.core.println.call(null," ",arglists_9709);

if(cljs.core.truth_(doc_9708)){
cljs.core.println.call(null," ",doc_9708);
} else {
}


var G__9710 = cljs.core.next.call(null,seq__9643_9698__$1);
var G__9711 = null;
var G__9712 = (0);
var G__9713 = (0);
seq__9643_9683 = G__9710;
chunk__9644_9684 = G__9711;
count__9645_9685 = G__9712;
i__9646_9686 = G__9713;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__9657 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9658 = null;
var count__9659 = (0);
var i__9660 = (0);
while(true){
if((i__9660 < count__9659)){
var role = cljs.core._nth.call(null,chunk__9658,i__9660);
var temp__5457__auto___9714__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___9714__$1)){
var spec_9715 = temp__5457__auto___9714__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9715));
} else {
}


var G__9716 = seq__9657;
var G__9717 = chunk__9658;
var G__9718 = count__9659;
var G__9719 = (i__9660 + (1));
seq__9657 = G__9716;
chunk__9658 = G__9717;
count__9659 = G__9718;
i__9660 = G__9719;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__9657);
if(temp__5457__auto____$1){
var seq__9657__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9657__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9657__$1);
var G__9720 = cljs.core.chunk_rest.call(null,seq__9657__$1);
var G__9721 = c__4351__auto__;
var G__9722 = cljs.core.count.call(null,c__4351__auto__);
var G__9723 = (0);
seq__9657 = G__9720;
chunk__9658 = G__9721;
count__9659 = G__9722;
i__9660 = G__9723;
continue;
} else {
var role = cljs.core.first.call(null,seq__9657__$1);
var temp__5457__auto___9724__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___9724__$2)){
var spec_9725 = temp__5457__auto___9724__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9725));
} else {
}


var G__9726 = cljs.core.next.call(null,seq__9657__$1);
var G__9727 = null;
var G__9728 = (0);
var G__9729 = (0);
seq__9657 = G__9726;
chunk__9658 = G__9727;
count__9659 = G__9728;
i__9660 = G__9729;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
