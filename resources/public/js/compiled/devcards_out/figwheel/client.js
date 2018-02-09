// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36937 = [];
var len__25923__auto___36940 = arguments.length;
var i__25924__auto___36941 = (0);
while(true){
if((i__25924__auto___36941 < len__25923__auto___36940)){
args36937.push((arguments[i__25924__auto___36941]));

var G__36942 = (i__25924__auto___36941 + (1));
i__25924__auto___36941 = G__36942;
continue;
} else {
}
break;
}

var G__36939 = args36937.length;
switch (G__36939) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36937.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36945 = arguments.length;
var i__25924__auto___36946 = (0);
while(true){
if((i__25924__auto___36946 < len__25923__auto___36945)){
args__25930__auto__.push((arguments[i__25924__auto___36946]));

var G__36947 = (i__25924__auto___36946 + (1));
i__25924__auto___36946 = G__36947;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36944){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36944));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36949 = arguments.length;
var i__25924__auto___36950 = (0);
while(true){
if((i__25924__auto___36950 < len__25923__auto___36949)){
args__25930__auto__.push((arguments[i__25924__auto___36950]));

var G__36951 = (i__25924__auto___36950 + (1));
i__25924__auto___36950 = G__36951;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36948){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36948));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36952){
var map__36955 = p__36952;
var map__36955__$1 = ((((!((map__36955 == null)))?((((map__36955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36955):map__36955);
var message = cljs.core.get.call(null,map__36955__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36955__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24848__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24836__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24836__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24836__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28665__auto___37117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___37117,ch){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___37117,ch){
return (function (state_37086){
var state_val_37087 = (state_37086[(1)]);
if((state_val_37087 === (7))){
var inst_37082 = (state_37086[(2)]);
var state_37086__$1 = state_37086;
var statearr_37088_37118 = state_37086__$1;
(statearr_37088_37118[(2)] = inst_37082);

(statearr_37088_37118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (1))){
var state_37086__$1 = state_37086;
var statearr_37089_37119 = state_37086__$1;
(statearr_37089_37119[(2)] = null);

(statearr_37089_37119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (4))){
var inst_37039 = (state_37086[(7)]);
var inst_37039__$1 = (state_37086[(2)]);
var state_37086__$1 = (function (){var statearr_37090 = state_37086;
(statearr_37090[(7)] = inst_37039__$1);

return statearr_37090;
})();
if(cljs.core.truth_(inst_37039__$1)){
var statearr_37091_37120 = state_37086__$1;
(statearr_37091_37120[(1)] = (5));

} else {
var statearr_37092_37121 = state_37086__$1;
(statearr_37092_37121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (15))){
var inst_37046 = (state_37086[(8)]);
var inst_37061 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37046);
var inst_37062 = cljs.core.first.call(null,inst_37061);
var inst_37063 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37062);
var inst_37064 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37063)].join('');
var inst_37065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37064);
var state_37086__$1 = state_37086;
var statearr_37093_37122 = state_37086__$1;
(statearr_37093_37122[(2)] = inst_37065);

(statearr_37093_37122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (13))){
var inst_37070 = (state_37086[(2)]);
var state_37086__$1 = state_37086;
var statearr_37094_37123 = state_37086__$1;
(statearr_37094_37123[(2)] = inst_37070);

(statearr_37094_37123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (6))){
var state_37086__$1 = state_37086;
var statearr_37095_37124 = state_37086__$1;
(statearr_37095_37124[(2)] = null);

(statearr_37095_37124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (17))){
var inst_37068 = (state_37086[(2)]);
var state_37086__$1 = state_37086;
var statearr_37096_37125 = state_37086__$1;
(statearr_37096_37125[(2)] = inst_37068);

(statearr_37096_37125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (3))){
var inst_37084 = (state_37086[(2)]);
var state_37086__$1 = state_37086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37086__$1,inst_37084);
} else {
if((state_val_37087 === (12))){
var inst_37045 = (state_37086[(9)]);
var inst_37059 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37045,opts);
var state_37086__$1 = state_37086;
if(cljs.core.truth_(inst_37059)){
var statearr_37097_37126 = state_37086__$1;
(statearr_37097_37126[(1)] = (15));

} else {
var statearr_37098_37127 = state_37086__$1;
(statearr_37098_37127[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (2))){
var state_37086__$1 = state_37086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37086__$1,(4),ch);
} else {
if((state_val_37087 === (11))){
var inst_37046 = (state_37086[(8)]);
var inst_37051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37052 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37046);
var inst_37053 = cljs.core.async.timeout.call(null,(1000));
var inst_37054 = [inst_37052,inst_37053];
var inst_37055 = (new cljs.core.PersistentVector(null,2,(5),inst_37051,inst_37054,null));
var state_37086__$1 = state_37086;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37086__$1,(14),inst_37055);
} else {
if((state_val_37087 === (9))){
var inst_37046 = (state_37086[(8)]);
var inst_37072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37073 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37046);
var inst_37074 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37073);
var inst_37075 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37074)].join('');
var inst_37076 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37075);
var state_37086__$1 = (function (){var statearr_37099 = state_37086;
(statearr_37099[(10)] = inst_37072);

return statearr_37099;
})();
var statearr_37100_37128 = state_37086__$1;
(statearr_37100_37128[(2)] = inst_37076);

(statearr_37100_37128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (5))){
var inst_37039 = (state_37086[(7)]);
var inst_37041 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37042 = (new cljs.core.PersistentArrayMap(null,2,inst_37041,null));
var inst_37043 = (new cljs.core.PersistentHashSet(null,inst_37042,null));
var inst_37044 = figwheel.client.focus_msgs.call(null,inst_37043,inst_37039);
var inst_37045 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37044);
var inst_37046 = cljs.core.first.call(null,inst_37044);
var inst_37047 = figwheel.client.autoload_QMARK_.call(null);
var state_37086__$1 = (function (){var statearr_37101 = state_37086;
(statearr_37101[(8)] = inst_37046);

(statearr_37101[(9)] = inst_37045);

return statearr_37101;
})();
if(cljs.core.truth_(inst_37047)){
var statearr_37102_37129 = state_37086__$1;
(statearr_37102_37129[(1)] = (8));

} else {
var statearr_37103_37130 = state_37086__$1;
(statearr_37103_37130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (14))){
var inst_37057 = (state_37086[(2)]);
var state_37086__$1 = state_37086;
var statearr_37104_37131 = state_37086__$1;
(statearr_37104_37131[(2)] = inst_37057);

(statearr_37104_37131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (16))){
var state_37086__$1 = state_37086;
var statearr_37105_37132 = state_37086__$1;
(statearr_37105_37132[(2)] = null);

(statearr_37105_37132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (10))){
var inst_37078 = (state_37086[(2)]);
var state_37086__$1 = (function (){var statearr_37106 = state_37086;
(statearr_37106[(11)] = inst_37078);

return statearr_37106;
})();
var statearr_37107_37133 = state_37086__$1;
(statearr_37107_37133[(2)] = null);

(statearr_37107_37133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37087 === (8))){
var inst_37045 = (state_37086[(9)]);
var inst_37049 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37045,opts);
var state_37086__$1 = state_37086;
if(cljs.core.truth_(inst_37049)){
var statearr_37108_37134 = state_37086__$1;
(statearr_37108_37134[(1)] = (11));

} else {
var statearr_37109_37135 = state_37086__$1;
(statearr_37109_37135[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28665__auto___37117,ch))
;
return ((function (switch__28553__auto__,c__28665__auto___37117,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28554__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28554__auto____0 = (function (){
var statearr_37113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37113[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28554__auto__);

(statearr_37113[(1)] = (1));

return statearr_37113;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28554__auto____1 = (function (state_37086){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_37086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e37114){if((e37114 instanceof Object)){
var ex__28557__auto__ = e37114;
var statearr_37115_37136 = state_37086;
(statearr_37115_37136[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37137 = state_37086;
state_37086 = G__37137;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28554__auto__ = function(state_37086){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28554__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28554__auto____1.call(this,state_37086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28554__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28554__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___37117,ch))
})();
var state__28667__auto__ = (function (){var statearr_37116 = f__28666__auto__.call(null);
(statearr_37116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___37117);

return statearr_37116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___37117,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37138_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37138_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37141 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37141){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37140){if((e37140 instanceof Error)){
var e = e37140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37141], null));
} else {
var e = e37140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37141))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37142){
var map__37151 = p__37142;
var map__37151__$1 = ((((!((map__37151 == null)))?((((map__37151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37151):map__37151);
var opts = map__37151__$1;
var build_id = cljs.core.get.call(null,map__37151__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37151,map__37151__$1,opts,build_id){
return (function (p__37153){
var vec__37154 = p__37153;
var seq__37155 = cljs.core.seq.call(null,vec__37154);
var first__37156 = cljs.core.first.call(null,seq__37155);
var seq__37155__$1 = cljs.core.next.call(null,seq__37155);
var map__37157 = first__37156;
var map__37157__$1 = ((((!((map__37157 == null)))?((((map__37157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37157):map__37157);
var msg = map__37157__$1;
var msg_name = cljs.core.get.call(null,map__37157__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37155__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37154,seq__37155,first__37156,seq__37155__$1,map__37157,map__37157__$1,msg,msg_name,_,map__37151,map__37151__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37154,seq__37155,first__37156,seq__37155__$1,map__37157,map__37157__$1,msg,msg_name,_,map__37151,map__37151__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37151,map__37151__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37165){
var vec__37166 = p__37165;
var seq__37167 = cljs.core.seq.call(null,vec__37166);
var first__37168 = cljs.core.first.call(null,seq__37167);
var seq__37167__$1 = cljs.core.next.call(null,seq__37167);
var map__37169 = first__37168;
var map__37169__$1 = ((((!((map__37169 == null)))?((((map__37169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37169):map__37169);
var msg = map__37169__$1;
var msg_name = cljs.core.get.call(null,map__37169__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37167__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37171){
var map__37183 = p__37171;
var map__37183__$1 = ((((!((map__37183 == null)))?((((map__37183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37183):map__37183);
var on_compile_warning = cljs.core.get.call(null,map__37183__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37183__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37183,map__37183__$1,on_compile_warning,on_compile_fail){
return (function (p__37185){
var vec__37186 = p__37185;
var seq__37187 = cljs.core.seq.call(null,vec__37186);
var first__37188 = cljs.core.first.call(null,seq__37187);
var seq__37187__$1 = cljs.core.next.call(null,seq__37187);
var map__37189 = first__37188;
var map__37189__$1 = ((((!((map__37189 == null)))?((((map__37189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37189):map__37189);
var msg = map__37189__$1;
var msg_name = cljs.core.get.call(null,map__37189__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37187__$1;
var pred__37191 = cljs.core._EQ_;
var expr__37192 = msg_name;
if(cljs.core.truth_(pred__37191.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37192))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37191.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37192))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37183,map__37183__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto__,msg_hist,msg_names,msg){
return (function (state_37420){
var state_val_37421 = (state_37420[(1)]);
if((state_val_37421 === (7))){
var inst_37340 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37340)){
var statearr_37422_37472 = state_37420__$1;
(statearr_37422_37472[(1)] = (8));

} else {
var statearr_37423_37473 = state_37420__$1;
(statearr_37423_37473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (20))){
var inst_37414 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37424_37474 = state_37420__$1;
(statearr_37424_37474[(2)] = inst_37414);

(statearr_37424_37474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (27))){
var inst_37410 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37425_37475 = state_37420__$1;
(statearr_37425_37475[(2)] = inst_37410);

(statearr_37425_37475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (1))){
var inst_37333 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37333)){
var statearr_37426_37476 = state_37420__$1;
(statearr_37426_37476[(1)] = (2));

} else {
var statearr_37427_37477 = state_37420__$1;
(statearr_37427_37477[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (24))){
var inst_37412 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37428_37478 = state_37420__$1;
(statearr_37428_37478[(2)] = inst_37412);

(statearr_37428_37478[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (4))){
var inst_37418 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37420__$1,inst_37418);
} else {
if((state_val_37421 === (15))){
var inst_37416 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37429_37479 = state_37420__$1;
(statearr_37429_37479[(2)] = inst_37416);

(statearr_37429_37479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (21))){
var inst_37369 = (state_37420[(2)]);
var inst_37370 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37371 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37370);
var state_37420__$1 = (function (){var statearr_37430 = state_37420;
(statearr_37430[(7)] = inst_37369);

return statearr_37430;
})();
var statearr_37431_37480 = state_37420__$1;
(statearr_37431_37480[(2)] = inst_37371);

(statearr_37431_37480[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (31))){
var inst_37399 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37399)){
var statearr_37432_37481 = state_37420__$1;
(statearr_37432_37481[(1)] = (34));

} else {
var statearr_37433_37482 = state_37420__$1;
(statearr_37433_37482[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (32))){
var inst_37408 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37434_37483 = state_37420__$1;
(statearr_37434_37483[(2)] = inst_37408);

(statearr_37434_37483[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (33))){
var inst_37395 = (state_37420[(2)]);
var inst_37396 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37397 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37396);
var state_37420__$1 = (function (){var statearr_37435 = state_37420;
(statearr_37435[(8)] = inst_37395);

return statearr_37435;
})();
var statearr_37436_37484 = state_37420__$1;
(statearr_37436_37484[(2)] = inst_37397);

(statearr_37436_37484[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (13))){
var inst_37354 = figwheel.client.heads_up.clear.call(null);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(16),inst_37354);
} else {
if((state_val_37421 === (22))){
var inst_37375 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37376 = figwheel.client.heads_up.append_warning_message.call(null,inst_37375);
var state_37420__$1 = state_37420;
var statearr_37437_37485 = state_37420__$1;
(statearr_37437_37485[(2)] = inst_37376);

(statearr_37437_37485[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (36))){
var inst_37406 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37438_37486 = state_37420__$1;
(statearr_37438_37486[(2)] = inst_37406);

(statearr_37438_37486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (29))){
var inst_37386 = (state_37420[(2)]);
var inst_37387 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37388 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37387);
var state_37420__$1 = (function (){var statearr_37439 = state_37420;
(statearr_37439[(9)] = inst_37386);

return statearr_37439;
})();
var statearr_37440_37487 = state_37420__$1;
(statearr_37440_37487[(2)] = inst_37388);

(statearr_37440_37487[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (6))){
var inst_37335 = (state_37420[(10)]);
var state_37420__$1 = state_37420;
var statearr_37441_37488 = state_37420__$1;
(statearr_37441_37488[(2)] = inst_37335);

(statearr_37441_37488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (28))){
var inst_37382 = (state_37420[(2)]);
var inst_37383 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37384 = figwheel.client.heads_up.display_warning.call(null,inst_37383);
var state_37420__$1 = (function (){var statearr_37442 = state_37420;
(statearr_37442[(11)] = inst_37382);

return statearr_37442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(29),inst_37384);
} else {
if((state_val_37421 === (25))){
var inst_37380 = figwheel.client.heads_up.clear.call(null);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(28),inst_37380);
} else {
if((state_val_37421 === (34))){
var inst_37401 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(37),inst_37401);
} else {
if((state_val_37421 === (17))){
var inst_37360 = (state_37420[(2)]);
var inst_37361 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37362 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37361);
var state_37420__$1 = (function (){var statearr_37443 = state_37420;
(statearr_37443[(12)] = inst_37360);

return statearr_37443;
})();
var statearr_37444_37489 = state_37420__$1;
(statearr_37444_37489[(2)] = inst_37362);

(statearr_37444_37489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (3))){
var inst_37352 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37352)){
var statearr_37445_37490 = state_37420__$1;
(statearr_37445_37490[(1)] = (13));

} else {
var statearr_37446_37491 = state_37420__$1;
(statearr_37446_37491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (12))){
var inst_37348 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37447_37492 = state_37420__$1;
(statearr_37447_37492[(2)] = inst_37348);

(statearr_37447_37492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (2))){
var inst_37335 = (state_37420[(10)]);
var inst_37335__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37420__$1 = (function (){var statearr_37448 = state_37420;
(statearr_37448[(10)] = inst_37335__$1);

return statearr_37448;
})();
if(cljs.core.truth_(inst_37335__$1)){
var statearr_37449_37493 = state_37420__$1;
(statearr_37449_37493[(1)] = (5));

} else {
var statearr_37450_37494 = state_37420__$1;
(statearr_37450_37494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (23))){
var inst_37378 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37378)){
var statearr_37451_37495 = state_37420__$1;
(statearr_37451_37495[(1)] = (25));

} else {
var statearr_37452_37496 = state_37420__$1;
(statearr_37452_37496[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (35))){
var state_37420__$1 = state_37420;
var statearr_37453_37497 = state_37420__$1;
(statearr_37453_37497[(2)] = null);

(statearr_37453_37497[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (19))){
var inst_37373 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37373)){
var statearr_37454_37498 = state_37420__$1;
(statearr_37454_37498[(1)] = (22));

} else {
var statearr_37455_37499 = state_37420__$1;
(statearr_37455_37499[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (11))){
var inst_37344 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37456_37500 = state_37420__$1;
(statearr_37456_37500[(2)] = inst_37344);

(statearr_37456_37500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (9))){
var inst_37346 = figwheel.client.heads_up.clear.call(null);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(12),inst_37346);
} else {
if((state_val_37421 === (5))){
var inst_37337 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37420__$1 = state_37420;
var statearr_37457_37501 = state_37420__$1;
(statearr_37457_37501[(2)] = inst_37337);

(statearr_37457_37501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (14))){
var inst_37364 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37364)){
var statearr_37458_37502 = state_37420__$1;
(statearr_37458_37502[(1)] = (18));

} else {
var statearr_37459_37503 = state_37420__$1;
(statearr_37459_37503[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (26))){
var inst_37390 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37390)){
var statearr_37460_37504 = state_37420__$1;
(statearr_37460_37504[(1)] = (30));

} else {
var statearr_37461_37505 = state_37420__$1;
(statearr_37461_37505[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (16))){
var inst_37356 = (state_37420[(2)]);
var inst_37357 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37358 = figwheel.client.heads_up.display_exception.call(null,inst_37357);
var state_37420__$1 = (function (){var statearr_37462 = state_37420;
(statearr_37462[(13)] = inst_37356);

return statearr_37462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(17),inst_37358);
} else {
if((state_val_37421 === (30))){
var inst_37392 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37393 = figwheel.client.heads_up.display_warning.call(null,inst_37392);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(33),inst_37393);
} else {
if((state_val_37421 === (10))){
var inst_37350 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37463_37506 = state_37420__$1;
(statearr_37463_37506[(2)] = inst_37350);

(statearr_37463_37506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (18))){
var inst_37366 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37367 = figwheel.client.heads_up.display_exception.call(null,inst_37366);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(21),inst_37367);
} else {
if((state_val_37421 === (37))){
var inst_37403 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37464_37507 = state_37420__$1;
(statearr_37464_37507[(2)] = inst_37403);

(statearr_37464_37507[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (8))){
var inst_37342 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,(11),inst_37342);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28665__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28553__auto__,c__28665__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto____0 = (function (){
var statearr_37468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37468[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto__);

(statearr_37468[(1)] = (1));

return statearr_37468;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto____1 = (function (state_37420){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_37420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e37469){if((e37469 instanceof Object)){
var ex__28557__auto__ = e37469;
var statearr_37470_37508 = state_37420;
(statearr_37470_37508[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37509 = state_37420;
state_37420 = G__37509;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto__ = function(state_37420){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto____1.call(this,state_37420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto__,msg_hist,msg_names,msg))
})();
var state__28667__auto__ = (function (){var statearr_37471 = f__28666__auto__.call(null);
(statearr_37471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto__);

return statearr_37471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto__,msg_hist,msg_names,msg))
);

return c__28665__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28665__auto___37572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___37572,ch){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___37572,ch){
return (function (state_37555){
var state_val_37556 = (state_37555[(1)]);
if((state_val_37556 === (1))){
var state_37555__$1 = state_37555;
var statearr_37557_37573 = state_37555__$1;
(statearr_37557_37573[(2)] = null);

(statearr_37557_37573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (2))){
var state_37555__$1 = state_37555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37555__$1,(4),ch);
} else {
if((state_val_37556 === (3))){
var inst_37553 = (state_37555[(2)]);
var state_37555__$1 = state_37555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37555__$1,inst_37553);
} else {
if((state_val_37556 === (4))){
var inst_37543 = (state_37555[(7)]);
var inst_37543__$1 = (state_37555[(2)]);
var state_37555__$1 = (function (){var statearr_37558 = state_37555;
(statearr_37558[(7)] = inst_37543__$1);

return statearr_37558;
})();
if(cljs.core.truth_(inst_37543__$1)){
var statearr_37559_37574 = state_37555__$1;
(statearr_37559_37574[(1)] = (5));

} else {
var statearr_37560_37575 = state_37555__$1;
(statearr_37560_37575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (5))){
var inst_37543 = (state_37555[(7)]);
var inst_37545 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37543);
var state_37555__$1 = state_37555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37555__$1,(8),inst_37545);
} else {
if((state_val_37556 === (6))){
var state_37555__$1 = state_37555;
var statearr_37561_37576 = state_37555__$1;
(statearr_37561_37576[(2)] = null);

(statearr_37561_37576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (7))){
var inst_37551 = (state_37555[(2)]);
var state_37555__$1 = state_37555;
var statearr_37562_37577 = state_37555__$1;
(statearr_37562_37577[(2)] = inst_37551);

(statearr_37562_37577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37556 === (8))){
var inst_37547 = (state_37555[(2)]);
var state_37555__$1 = (function (){var statearr_37563 = state_37555;
(statearr_37563[(8)] = inst_37547);

return statearr_37563;
})();
var statearr_37564_37578 = state_37555__$1;
(statearr_37564_37578[(2)] = null);

(statearr_37564_37578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28665__auto___37572,ch))
;
return ((function (switch__28553__auto__,c__28665__auto___37572,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28554__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28554__auto____0 = (function (){
var statearr_37568 = [null,null,null,null,null,null,null,null,null];
(statearr_37568[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28554__auto__);

(statearr_37568[(1)] = (1));

return statearr_37568;
});
var figwheel$client$heads_up_plugin_$_state_machine__28554__auto____1 = (function (state_37555){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_37555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e37569){if((e37569 instanceof Object)){
var ex__28557__auto__ = e37569;
var statearr_37570_37579 = state_37555;
(statearr_37570_37579[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37580 = state_37555;
state_37555 = G__37580;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28554__auto__ = function(state_37555){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28554__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28554__auto____1.call(this,state_37555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28554__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28554__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___37572,ch))
})();
var state__28667__auto__ = (function (){var statearr_37571 = f__28666__auto__.call(null);
(statearr_37571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___37572);

return statearr_37571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___37572,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto__){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto__){
return (function (state_37601){
var state_val_37602 = (state_37601[(1)]);
if((state_val_37602 === (1))){
var inst_37596 = cljs.core.async.timeout.call(null,(3000));
var state_37601__$1 = state_37601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37601__$1,(2),inst_37596);
} else {
if((state_val_37602 === (2))){
var inst_37598 = (state_37601[(2)]);
var inst_37599 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37601__$1 = (function (){var statearr_37603 = state_37601;
(statearr_37603[(7)] = inst_37598);

return statearr_37603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37601__$1,inst_37599);
} else {
return null;
}
}
});})(c__28665__auto__))
;
return ((function (switch__28553__auto__,c__28665__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28554__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28554__auto____0 = (function (){
var statearr_37607 = [null,null,null,null,null,null,null,null];
(statearr_37607[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28554__auto__);

(statearr_37607[(1)] = (1));

return statearr_37607;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28554__auto____1 = (function (state_37601){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_37601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e37608){if((e37608 instanceof Object)){
var ex__28557__auto__ = e37608;
var statearr_37609_37611 = state_37601;
(statearr_37609_37611[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37612 = state_37601;
state_37601 = G__37612;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28554__auto__ = function(state_37601){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28554__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28554__auto____1.call(this,state_37601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28554__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28554__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto__))
})();
var state__28667__auto__ = (function (){var statearr_37610 = f__28666__auto__.call(null);
(statearr_37610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto__);

return statearr_37610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto__))
);

return c__28665__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37635){
var state_val_37636 = (state_37635[(1)]);
if((state_val_37636 === (1))){
var inst_37629 = cljs.core.async.timeout.call(null,(2000));
var state_37635__$1 = state_37635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37635__$1,(2),inst_37629);
} else {
if((state_val_37636 === (2))){
var inst_37631 = (state_37635[(2)]);
var inst_37632 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37633 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37632);
var state_37635__$1 = (function (){var statearr_37637 = state_37635;
(statearr_37637[(7)] = inst_37631);

return statearr_37637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37635__$1,inst_37633);
} else {
return null;
}
}
});})(c__28665__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28553__auto__,c__28665__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto____0 = (function (){
var statearr_37641 = [null,null,null,null,null,null,null,null];
(statearr_37641[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto__);

(statearr_37641[(1)] = (1));

return statearr_37641;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto____1 = (function (state_37635){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_37635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e37642){if((e37642 instanceof Object)){
var ex__28557__auto__ = e37642;
var statearr_37643_37645 = state_37635;
(statearr_37643_37645[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37646 = state_37635;
state_37635 = G__37646;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto__ = function(state_37635){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto____1.call(this,state_37635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28667__auto__ = (function (){var statearr_37644 = f__28666__auto__.call(null);
(statearr_37644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto__);

return statearr_37644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto__,figwheel_version,temp__4657__auto__))
);

return c__28665__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37647){
var map__37651 = p__37647;
var map__37651__$1 = ((((!((map__37651 == null)))?((((map__37651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37651):map__37651);
var file = cljs.core.get.call(null,map__37651__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37651__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37651__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37653 = "";
var G__37653__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37653),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37653);
var G__37653__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37653__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37653__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__37653__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37653__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37654){
var map__37661 = p__37654;
var map__37661__$1 = ((((!((map__37661 == null)))?((((map__37661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37661):map__37661);
var ed = map__37661__$1;
var formatted_exception = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37663_37667 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37664_37668 = null;
var count__37665_37669 = (0);
var i__37666_37670 = (0);
while(true){
if((i__37666_37670 < count__37665_37669)){
var msg_37671 = cljs.core._nth.call(null,chunk__37664_37668,i__37666_37670);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37671);

var G__37672 = seq__37663_37667;
var G__37673 = chunk__37664_37668;
var G__37674 = count__37665_37669;
var G__37675 = (i__37666_37670 + (1));
seq__37663_37667 = G__37672;
chunk__37664_37668 = G__37673;
count__37665_37669 = G__37674;
i__37666_37670 = G__37675;
continue;
} else {
var temp__4657__auto___37676 = cljs.core.seq.call(null,seq__37663_37667);
if(temp__4657__auto___37676){
var seq__37663_37677__$1 = temp__4657__auto___37676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37663_37677__$1)){
var c__25659__auto___37678 = cljs.core.chunk_first.call(null,seq__37663_37677__$1);
var G__37679 = cljs.core.chunk_rest.call(null,seq__37663_37677__$1);
var G__37680 = c__25659__auto___37678;
var G__37681 = cljs.core.count.call(null,c__25659__auto___37678);
var G__37682 = (0);
seq__37663_37667 = G__37679;
chunk__37664_37668 = G__37680;
count__37665_37669 = G__37681;
i__37666_37670 = G__37682;
continue;
} else {
var msg_37683 = cljs.core.first.call(null,seq__37663_37677__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37683);

var G__37684 = cljs.core.next.call(null,seq__37663_37677__$1);
var G__37685 = null;
var G__37686 = (0);
var G__37687 = (0);
seq__37663_37667 = G__37684;
chunk__37664_37668 = G__37685;
count__37665_37669 = G__37686;
i__37666_37670 = G__37687;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37688){
var map__37691 = p__37688;
var map__37691__$1 = ((((!((map__37691 == null)))?((((map__37691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37691):map__37691);
var w = map__37691__$1;
var message = cljs.core.get.call(null,map__37691__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24836__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24836__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37703 = cljs.core.seq.call(null,plugins);
var chunk__37704 = null;
var count__37705 = (0);
var i__37706 = (0);
while(true){
if((i__37706 < count__37705)){
var vec__37707 = cljs.core._nth.call(null,chunk__37704,i__37706);
var k = cljs.core.nth.call(null,vec__37707,(0),null);
var plugin = cljs.core.nth.call(null,vec__37707,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37713 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37703,chunk__37704,count__37705,i__37706,pl_37713,vec__37707,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37713.call(null,msg_hist);
});})(seq__37703,chunk__37704,count__37705,i__37706,pl_37713,vec__37707,k,plugin))
);
} else {
}

var G__37714 = seq__37703;
var G__37715 = chunk__37704;
var G__37716 = count__37705;
var G__37717 = (i__37706 + (1));
seq__37703 = G__37714;
chunk__37704 = G__37715;
count__37705 = G__37716;
i__37706 = G__37717;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37703);
if(temp__4657__auto__){
var seq__37703__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37703__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37703__$1);
var G__37718 = cljs.core.chunk_rest.call(null,seq__37703__$1);
var G__37719 = c__25659__auto__;
var G__37720 = cljs.core.count.call(null,c__25659__auto__);
var G__37721 = (0);
seq__37703 = G__37718;
chunk__37704 = G__37719;
count__37705 = G__37720;
i__37706 = G__37721;
continue;
} else {
var vec__37710 = cljs.core.first.call(null,seq__37703__$1);
var k = cljs.core.nth.call(null,vec__37710,(0),null);
var plugin = cljs.core.nth.call(null,vec__37710,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37722 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37703,chunk__37704,count__37705,i__37706,pl_37722,vec__37710,k,plugin,seq__37703__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37722.call(null,msg_hist);
});})(seq__37703,chunk__37704,count__37705,i__37706,pl_37722,vec__37710,k,plugin,seq__37703__$1,temp__4657__auto__))
);
} else {
}

var G__37723 = cljs.core.next.call(null,seq__37703__$1);
var G__37724 = null;
var G__37725 = (0);
var G__37726 = (0);
seq__37703 = G__37723;
chunk__37704 = G__37724;
count__37705 = G__37725;
i__37706 = G__37726;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37727 = [];
var len__25923__auto___37734 = arguments.length;
var i__25924__auto___37735 = (0);
while(true){
if((i__25924__auto___37735 < len__25923__auto___37734)){
args37727.push((arguments[i__25924__auto___37735]));

var G__37736 = (i__25924__auto___37735 + (1));
i__25924__auto___37735 = G__37736;
continue;
} else {
}
break;
}

var G__37729 = args37727.length;
switch (G__37729) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37727.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37730_37738 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37731_37739 = null;
var count__37732_37740 = (0);
var i__37733_37741 = (0);
while(true){
if((i__37733_37741 < count__37732_37740)){
var msg_37742 = cljs.core._nth.call(null,chunk__37731_37739,i__37733_37741);
figwheel.client.socket.handle_incoming_message.call(null,msg_37742);

var G__37743 = seq__37730_37738;
var G__37744 = chunk__37731_37739;
var G__37745 = count__37732_37740;
var G__37746 = (i__37733_37741 + (1));
seq__37730_37738 = G__37743;
chunk__37731_37739 = G__37744;
count__37732_37740 = G__37745;
i__37733_37741 = G__37746;
continue;
} else {
var temp__4657__auto___37747 = cljs.core.seq.call(null,seq__37730_37738);
if(temp__4657__auto___37747){
var seq__37730_37748__$1 = temp__4657__auto___37747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37730_37748__$1)){
var c__25659__auto___37749 = cljs.core.chunk_first.call(null,seq__37730_37748__$1);
var G__37750 = cljs.core.chunk_rest.call(null,seq__37730_37748__$1);
var G__37751 = c__25659__auto___37749;
var G__37752 = cljs.core.count.call(null,c__25659__auto___37749);
var G__37753 = (0);
seq__37730_37738 = G__37750;
chunk__37731_37739 = G__37751;
count__37732_37740 = G__37752;
i__37733_37741 = G__37753;
continue;
} else {
var msg_37754 = cljs.core.first.call(null,seq__37730_37748__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37754);

var G__37755 = cljs.core.next.call(null,seq__37730_37748__$1);
var G__37756 = null;
var G__37757 = (0);
var G__37758 = (0);
seq__37730_37738 = G__37755;
chunk__37731_37739 = G__37756;
count__37732_37740 = G__37757;
i__37733_37741 = G__37758;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37763 = arguments.length;
var i__25924__auto___37764 = (0);
while(true){
if((i__25924__auto___37764 < len__25923__auto___37763)){
args__25930__auto__.push((arguments[i__25924__auto___37764]));

var G__37765 = (i__25924__auto___37764 + (1));
i__25924__auto___37764 = G__37765;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37760){
var map__37761 = p__37760;
var map__37761__$1 = ((((!((map__37761 == null)))?((((map__37761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37761):map__37761);
var opts = map__37761__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37759){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37759));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37767){if((e37767 instanceof Error)){
var e = e37767;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37767;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37771){
var map__37772 = p__37771;
var map__37772__$1 = ((((!((map__37772 == null)))?((((map__37772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37772):map__37772);
var msg_name = cljs.core.get.call(null,map__37772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518073864959