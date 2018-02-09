// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28710 = [];
var len__25923__auto___28716 = arguments.length;
var i__25924__auto___28717 = (0);
while(true){
if((i__25924__auto___28717 < len__25923__auto___28716)){
args28710.push((arguments[i__25924__auto___28717]));

var G__28718 = (i__25924__auto___28717 + (1));
i__25924__auto___28717 = G__28718;
continue;
} else {
}
break;
}

var G__28712 = args28710.length;
switch (G__28712) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28710.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28713 = (function (f,blockable,meta28714){
this.f = f;
this.blockable = blockable;
this.meta28714 = meta28714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28715,meta28714__$1){
var self__ = this;
var _28715__$1 = this;
return (new cljs.core.async.t_cljs$core$async28713(self__.f,self__.blockable,meta28714__$1));
});

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28715){
var self__ = this;
var _28715__$1 = this;
return self__.meta28714;
});

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28714","meta28714",1478388474,null)], null);
});

cljs.core.async.t_cljs$core$async28713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28713";

cljs.core.async.t_cljs$core$async28713.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28713");
});

cljs.core.async.__GT_t_cljs$core$async28713 = (function cljs$core$async$__GT_t_cljs$core$async28713(f__$1,blockable__$1,meta28714){
return (new cljs.core.async.t_cljs$core$async28713(f__$1,blockable__$1,meta28714));
});

}

return (new cljs.core.async.t_cljs$core$async28713(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28722 = [];
var len__25923__auto___28725 = arguments.length;
var i__25924__auto___28726 = (0);
while(true){
if((i__25924__auto___28726 < len__25923__auto___28725)){
args28722.push((arguments[i__25924__auto___28726]));

var G__28727 = (i__25924__auto___28726 + (1));
i__25924__auto___28726 = G__28727;
continue;
} else {
}
break;
}

var G__28724 = args28722.length;
switch (G__28724) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28722.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28729 = [];
var len__25923__auto___28732 = arguments.length;
var i__25924__auto___28733 = (0);
while(true){
if((i__25924__auto___28733 < len__25923__auto___28732)){
args28729.push((arguments[i__25924__auto___28733]));

var G__28734 = (i__25924__auto___28733 + (1));
i__25924__auto___28733 = G__28734;
continue;
} else {
}
break;
}

var G__28731 = args28729.length;
switch (G__28731) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28729.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28736 = [];
var len__25923__auto___28739 = arguments.length;
var i__25924__auto___28740 = (0);
while(true){
if((i__25924__auto___28740 < len__25923__auto___28739)){
args28736.push((arguments[i__25924__auto___28740]));

var G__28741 = (i__25924__auto___28740 + (1));
i__25924__auto___28740 = G__28741;
continue;
} else {
}
break;
}

var G__28738 = args28736.length;
switch (G__28738) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28736.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28743 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28743);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28743,ret){
return (function (){
return fn1.call(null,val_28743);
});})(val_28743,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28744 = [];
var len__25923__auto___28747 = arguments.length;
var i__25924__auto___28748 = (0);
while(true){
if((i__25924__auto___28748 < len__25923__auto___28747)){
args28744.push((arguments[i__25924__auto___28748]));

var G__28749 = (i__25924__auto___28748 + (1));
i__25924__auto___28748 = G__28749;
continue;
} else {
}
break;
}

var G__28746 = args28744.length;
switch (G__28746) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28744.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25763__auto___28751 = n;
var x_28752 = (0);
while(true){
if((x_28752 < n__25763__auto___28751)){
(a[x_28752] = (0));

var G__28753 = (x_28752 + (1));
x_28752 = G__28753;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28754 = (i + (1));
i = G__28754;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28758 = (function (alt_flag,flag,meta28759){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28759 = meta28759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28760,meta28759__$1){
var self__ = this;
var _28760__$1 = this;
return (new cljs.core.async.t_cljs$core$async28758(self__.alt_flag,self__.flag,meta28759__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28760){
var self__ = this;
var _28760__$1 = this;
return self__.meta28759;
});})(flag))
;

cljs.core.async.t_cljs$core$async28758.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28758.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28759","meta28759",-685215842,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28758";

cljs.core.async.t_cljs$core$async28758.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28758");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28758 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28758(alt_flag__$1,flag__$1,meta28759){
return (new cljs.core.async.t_cljs$core$async28758(alt_flag__$1,flag__$1,meta28759));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28758(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28764 = (function (alt_handler,flag,cb,meta28765){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28765 = meta28765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28766,meta28765__$1){
var self__ = this;
var _28766__$1 = this;
return (new cljs.core.async.t_cljs$core$async28764(self__.alt_handler,self__.flag,self__.cb,meta28765__$1));
});

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28766){
var self__ = this;
var _28766__$1 = this;
return self__.meta28765;
});

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28765","meta28765",1969521871,null)], null);
});

cljs.core.async.t_cljs$core$async28764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28764";

cljs.core.async.t_cljs$core$async28764.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28764");
});

cljs.core.async.__GT_t_cljs$core$async28764 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28764(alt_handler__$1,flag__$1,cb__$1,meta28765){
return (new cljs.core.async.t_cljs$core$async28764(alt_handler__$1,flag__$1,cb__$1,meta28765));
});

}

return (new cljs.core.async.t_cljs$core$async28764(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28767_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28768_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28768_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24848__auto__ = wport;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28769 = (i + (1));
i = G__28769;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24848__auto__ = ret;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24836__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___28775 = arguments.length;
var i__25924__auto___28776 = (0);
while(true){
if((i__25924__auto___28776 < len__25923__auto___28775)){
args__25930__auto__.push((arguments[i__25924__auto___28776]));

var G__28777 = (i__25924__auto___28776 + (1));
i__25924__auto___28776 = G__28777;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28772){
var map__28773 = p__28772;
var map__28773__$1 = ((((!((map__28773 == null)))?((((map__28773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);
var opts = map__28773__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28770){
var G__28771 = cljs.core.first.call(null,seq28770);
var seq28770__$1 = cljs.core.next.call(null,seq28770);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28771,seq28770__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28778 = [];
var len__25923__auto___28828 = arguments.length;
var i__25924__auto___28829 = (0);
while(true){
if((i__25924__auto___28829 < len__25923__auto___28828)){
args28778.push((arguments[i__25924__auto___28829]));

var G__28830 = (i__25924__auto___28829 + (1));
i__25924__auto___28829 = G__28830;
continue;
} else {
}
break;
}

var G__28780 = args28778.length;
switch (G__28780) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28778.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28665__auto___28832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___28832){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___28832){
return (function (state_28804){
var state_val_28805 = (state_28804[(1)]);
if((state_val_28805 === (7))){
var inst_28800 = (state_28804[(2)]);
var state_28804__$1 = state_28804;
var statearr_28806_28833 = state_28804__$1;
(statearr_28806_28833[(2)] = inst_28800);

(statearr_28806_28833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (1))){
var state_28804__$1 = state_28804;
var statearr_28807_28834 = state_28804__$1;
(statearr_28807_28834[(2)] = null);

(statearr_28807_28834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (4))){
var inst_28783 = (state_28804[(7)]);
var inst_28783__$1 = (state_28804[(2)]);
var inst_28784 = (inst_28783__$1 == null);
var state_28804__$1 = (function (){var statearr_28808 = state_28804;
(statearr_28808[(7)] = inst_28783__$1);

return statearr_28808;
})();
if(cljs.core.truth_(inst_28784)){
var statearr_28809_28835 = state_28804__$1;
(statearr_28809_28835[(1)] = (5));

} else {
var statearr_28810_28836 = state_28804__$1;
(statearr_28810_28836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (13))){
var state_28804__$1 = state_28804;
var statearr_28811_28837 = state_28804__$1;
(statearr_28811_28837[(2)] = null);

(statearr_28811_28837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (6))){
var inst_28783 = (state_28804[(7)]);
var state_28804__$1 = state_28804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28804__$1,(11),to,inst_28783);
} else {
if((state_val_28805 === (3))){
var inst_28802 = (state_28804[(2)]);
var state_28804__$1 = state_28804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28804__$1,inst_28802);
} else {
if((state_val_28805 === (12))){
var state_28804__$1 = state_28804;
var statearr_28812_28838 = state_28804__$1;
(statearr_28812_28838[(2)] = null);

(statearr_28812_28838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (2))){
var state_28804__$1 = state_28804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28804__$1,(4),from);
} else {
if((state_val_28805 === (11))){
var inst_28793 = (state_28804[(2)]);
var state_28804__$1 = state_28804;
if(cljs.core.truth_(inst_28793)){
var statearr_28813_28839 = state_28804__$1;
(statearr_28813_28839[(1)] = (12));

} else {
var statearr_28814_28840 = state_28804__$1;
(statearr_28814_28840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (9))){
var state_28804__$1 = state_28804;
var statearr_28815_28841 = state_28804__$1;
(statearr_28815_28841[(2)] = null);

(statearr_28815_28841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (5))){
var state_28804__$1 = state_28804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28816_28842 = state_28804__$1;
(statearr_28816_28842[(1)] = (8));

} else {
var statearr_28817_28843 = state_28804__$1;
(statearr_28817_28843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (14))){
var inst_28798 = (state_28804[(2)]);
var state_28804__$1 = state_28804;
var statearr_28818_28844 = state_28804__$1;
(statearr_28818_28844[(2)] = inst_28798);

(statearr_28818_28844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (10))){
var inst_28790 = (state_28804[(2)]);
var state_28804__$1 = state_28804;
var statearr_28819_28845 = state_28804__$1;
(statearr_28819_28845[(2)] = inst_28790);

(statearr_28819_28845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28805 === (8))){
var inst_28787 = cljs.core.async.close_BANG_.call(null,to);
var state_28804__$1 = state_28804;
var statearr_28820_28846 = state_28804__$1;
(statearr_28820_28846[(2)] = inst_28787);

(statearr_28820_28846[(1)] = (10));


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
});})(c__28665__auto___28832))
;
return ((function (switch__28553__auto__,c__28665__auto___28832){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_28824 = [null,null,null,null,null,null,null,null];
(statearr_28824[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_28824[(1)] = (1));

return statearr_28824;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_28804){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_28804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e28825){if((e28825 instanceof Object)){
var ex__28557__auto__ = e28825;
var statearr_28826_28847 = state_28804;
(statearr_28826_28847[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28848 = state_28804;
state_28804 = G__28848;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_28804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_28804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___28832))
})();
var state__28667__auto__ = (function (){var statearr_28827 = f__28666__auto__.call(null);
(statearr_28827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___28832);

return statearr_28827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___28832))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29036){
var vec__29037 = p__29036;
var v = cljs.core.nth.call(null,vec__29037,(0),null);
var p = cljs.core.nth.call(null,vec__29037,(1),null);
var job = vec__29037;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28665__auto___29223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___29223,res,vec__29037,v,p,job,jobs,results){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___29223,res,vec__29037,v,p,job,jobs,results){
return (function (state_29044){
var state_val_29045 = (state_29044[(1)]);
if((state_val_29045 === (1))){
var state_29044__$1 = state_29044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29044__$1,(2),res,v);
} else {
if((state_val_29045 === (2))){
var inst_29041 = (state_29044[(2)]);
var inst_29042 = cljs.core.async.close_BANG_.call(null,res);
var state_29044__$1 = (function (){var statearr_29046 = state_29044;
(statearr_29046[(7)] = inst_29041);

return statearr_29046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29044__$1,inst_29042);
} else {
return null;
}
}
});})(c__28665__auto___29223,res,vec__29037,v,p,job,jobs,results))
;
return ((function (switch__28553__auto__,c__28665__auto___29223,res,vec__29037,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0 = (function (){
var statearr_29050 = [null,null,null,null,null,null,null,null];
(statearr_29050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__);

(statearr_29050[(1)] = (1));

return statearr_29050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1 = (function (state_29044){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29051){if((e29051 instanceof Object)){
var ex__28557__auto__ = e29051;
var statearr_29052_29224 = state_29044;
(statearr_29052_29224[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29225 = state_29044;
state_29044 = G__29225;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = function(state_29044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1.call(this,state_29044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___29223,res,vec__29037,v,p,job,jobs,results))
})();
var state__28667__auto__ = (function (){var statearr_29053 = f__28666__auto__.call(null);
(statearr_29053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___29223);

return statearr_29053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___29223,res,vec__29037,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29054){
var vec__29055 = p__29054;
var v = cljs.core.nth.call(null,vec__29055,(0),null);
var p = cljs.core.nth.call(null,vec__29055,(1),null);
var job = vec__29055;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25763__auto___29226 = n;
var __29227 = (0);
while(true){
if((__29227 < n__25763__auto___29226)){
var G__29058_29228 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29058_29228) {
case "compute":
var c__28665__auto___29230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29227,c__28665__auto___29230,G__29058_29228,n__25763__auto___29226,jobs,results,process,async){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (__29227,c__28665__auto___29230,G__29058_29228,n__25763__auto___29226,jobs,results,process,async){
return (function (state_29071){
var state_val_29072 = (state_29071[(1)]);
if((state_val_29072 === (1))){
var state_29071__$1 = state_29071;
var statearr_29073_29231 = state_29071__$1;
(statearr_29073_29231[(2)] = null);

(statearr_29073_29231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (2))){
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29071__$1,(4),jobs);
} else {
if((state_val_29072 === (3))){
var inst_29069 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29071__$1,inst_29069);
} else {
if((state_val_29072 === (4))){
var inst_29061 = (state_29071[(2)]);
var inst_29062 = process.call(null,inst_29061);
var state_29071__$1 = state_29071;
if(cljs.core.truth_(inst_29062)){
var statearr_29074_29232 = state_29071__$1;
(statearr_29074_29232[(1)] = (5));

} else {
var statearr_29075_29233 = state_29071__$1;
(statearr_29075_29233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (5))){
var state_29071__$1 = state_29071;
var statearr_29076_29234 = state_29071__$1;
(statearr_29076_29234[(2)] = null);

(statearr_29076_29234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (6))){
var state_29071__$1 = state_29071;
var statearr_29077_29235 = state_29071__$1;
(statearr_29077_29235[(2)] = null);

(statearr_29077_29235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (7))){
var inst_29067 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29078_29236 = state_29071__$1;
(statearr_29078_29236[(2)] = inst_29067);

(statearr_29078_29236[(1)] = (3));


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
});})(__29227,c__28665__auto___29230,G__29058_29228,n__25763__auto___29226,jobs,results,process,async))
;
return ((function (__29227,switch__28553__auto__,c__28665__auto___29230,G__29058_29228,n__25763__auto___29226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0 = (function (){
var statearr_29082 = [null,null,null,null,null,null,null];
(statearr_29082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__);

(statearr_29082[(1)] = (1));

return statearr_29082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1 = (function (state_29071){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29083){if((e29083 instanceof Object)){
var ex__28557__auto__ = e29083;
var statearr_29084_29237 = state_29071;
(statearr_29084_29237[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29238 = state_29071;
state_29071 = G__29238;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = function(state_29071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1.call(this,state_29071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__;
})()
;})(__29227,switch__28553__auto__,c__28665__auto___29230,G__29058_29228,n__25763__auto___29226,jobs,results,process,async))
})();
var state__28667__auto__ = (function (){var statearr_29085 = f__28666__auto__.call(null);
(statearr_29085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___29230);

return statearr_29085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(__29227,c__28665__auto___29230,G__29058_29228,n__25763__auto___29226,jobs,results,process,async))
);


break;
case "async":
var c__28665__auto___29239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29227,c__28665__auto___29239,G__29058_29228,n__25763__auto___29226,jobs,results,process,async){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (__29227,c__28665__auto___29239,G__29058_29228,n__25763__auto___29226,jobs,results,process,async){
return (function (state_29098){
var state_val_29099 = (state_29098[(1)]);
if((state_val_29099 === (1))){
var state_29098__$1 = state_29098;
var statearr_29100_29240 = state_29098__$1;
(statearr_29100_29240[(2)] = null);

(statearr_29100_29240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (2))){
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(4),jobs);
} else {
if((state_val_29099 === (3))){
var inst_29096 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29098__$1,inst_29096);
} else {
if((state_val_29099 === (4))){
var inst_29088 = (state_29098[(2)]);
var inst_29089 = async.call(null,inst_29088);
var state_29098__$1 = state_29098;
if(cljs.core.truth_(inst_29089)){
var statearr_29101_29241 = state_29098__$1;
(statearr_29101_29241[(1)] = (5));

} else {
var statearr_29102_29242 = state_29098__$1;
(statearr_29102_29242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (5))){
var state_29098__$1 = state_29098;
var statearr_29103_29243 = state_29098__$1;
(statearr_29103_29243[(2)] = null);

(statearr_29103_29243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (6))){
var state_29098__$1 = state_29098;
var statearr_29104_29244 = state_29098__$1;
(statearr_29104_29244[(2)] = null);

(statearr_29104_29244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (7))){
var inst_29094 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29105_29245 = state_29098__$1;
(statearr_29105_29245[(2)] = inst_29094);

(statearr_29105_29245[(1)] = (3));


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
});})(__29227,c__28665__auto___29239,G__29058_29228,n__25763__auto___29226,jobs,results,process,async))
;
return ((function (__29227,switch__28553__auto__,c__28665__auto___29239,G__29058_29228,n__25763__auto___29226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0 = (function (){
var statearr_29109 = [null,null,null,null,null,null,null];
(statearr_29109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__);

(statearr_29109[(1)] = (1));

return statearr_29109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1 = (function (state_29098){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29110){if((e29110 instanceof Object)){
var ex__28557__auto__ = e29110;
var statearr_29111_29246 = state_29098;
(statearr_29111_29246[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29247 = state_29098;
state_29098 = G__29247;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = function(state_29098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1.call(this,state_29098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__;
})()
;})(__29227,switch__28553__auto__,c__28665__auto___29239,G__29058_29228,n__25763__auto___29226,jobs,results,process,async))
})();
var state__28667__auto__ = (function (){var statearr_29112 = f__28666__auto__.call(null);
(statearr_29112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___29239);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(__29227,c__28665__auto___29239,G__29058_29228,n__25763__auto___29226,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29248 = (__29227 + (1));
__29227 = G__29248;
continue;
} else {
}
break;
}

var c__28665__auto___29249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___29249,jobs,results,process,async){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___29249,jobs,results,process,async){
return (function (state_29134){
var state_val_29135 = (state_29134[(1)]);
if((state_val_29135 === (1))){
var state_29134__$1 = state_29134;
var statearr_29136_29250 = state_29134__$1;
(statearr_29136_29250[(2)] = null);

(statearr_29136_29250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (2))){
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29134__$1,(4),from);
} else {
if((state_val_29135 === (3))){
var inst_29132 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29134__$1,inst_29132);
} else {
if((state_val_29135 === (4))){
var inst_29115 = (state_29134[(7)]);
var inst_29115__$1 = (state_29134[(2)]);
var inst_29116 = (inst_29115__$1 == null);
var state_29134__$1 = (function (){var statearr_29137 = state_29134;
(statearr_29137[(7)] = inst_29115__$1);

return statearr_29137;
})();
if(cljs.core.truth_(inst_29116)){
var statearr_29138_29251 = state_29134__$1;
(statearr_29138_29251[(1)] = (5));

} else {
var statearr_29139_29252 = state_29134__$1;
(statearr_29139_29252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (5))){
var inst_29118 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29134__$1 = state_29134;
var statearr_29140_29253 = state_29134__$1;
(statearr_29140_29253[(2)] = inst_29118);

(statearr_29140_29253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (6))){
var inst_29115 = (state_29134[(7)]);
var inst_29120 = (state_29134[(8)]);
var inst_29120__$1 = cljs.core.async.chan.call(null,(1));
var inst_29121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29122 = [inst_29115,inst_29120__$1];
var inst_29123 = (new cljs.core.PersistentVector(null,2,(5),inst_29121,inst_29122,null));
var state_29134__$1 = (function (){var statearr_29141 = state_29134;
(statearr_29141[(8)] = inst_29120__$1);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29134__$1,(8),jobs,inst_29123);
} else {
if((state_val_29135 === (7))){
var inst_29130 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
var statearr_29142_29254 = state_29134__$1;
(statearr_29142_29254[(2)] = inst_29130);

(statearr_29142_29254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (8))){
var inst_29120 = (state_29134[(8)]);
var inst_29125 = (state_29134[(2)]);
var state_29134__$1 = (function (){var statearr_29143 = state_29134;
(statearr_29143[(9)] = inst_29125);

return statearr_29143;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29134__$1,(9),results,inst_29120);
} else {
if((state_val_29135 === (9))){
var inst_29127 = (state_29134[(2)]);
var state_29134__$1 = (function (){var statearr_29144 = state_29134;
(statearr_29144[(10)] = inst_29127);

return statearr_29144;
})();
var statearr_29145_29255 = state_29134__$1;
(statearr_29145_29255[(2)] = null);

(statearr_29145_29255[(1)] = (2));


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
});})(c__28665__auto___29249,jobs,results,process,async))
;
return ((function (switch__28553__auto__,c__28665__auto___29249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0 = (function (){
var statearr_29149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__);

(statearr_29149[(1)] = (1));

return statearr_29149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1 = (function (state_29134){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29150){if((e29150 instanceof Object)){
var ex__28557__auto__ = e29150;
var statearr_29151_29256 = state_29134;
(statearr_29151_29256[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29257 = state_29134;
state_29134 = G__29257;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = function(state_29134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1.call(this,state_29134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___29249,jobs,results,process,async))
})();
var state__28667__auto__ = (function (){var statearr_29152 = f__28666__auto__.call(null);
(statearr_29152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___29249);

return statearr_29152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___29249,jobs,results,process,async))
);


var c__28665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto__,jobs,results,process,async){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto__,jobs,results,process,async){
return (function (state_29190){
var state_val_29191 = (state_29190[(1)]);
if((state_val_29191 === (7))){
var inst_29186 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29192_29258 = state_29190__$1;
(statearr_29192_29258[(2)] = inst_29186);

(statearr_29192_29258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (20))){
var state_29190__$1 = state_29190;
var statearr_29193_29259 = state_29190__$1;
(statearr_29193_29259[(2)] = null);

(statearr_29193_29259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (1))){
var state_29190__$1 = state_29190;
var statearr_29194_29260 = state_29190__$1;
(statearr_29194_29260[(2)] = null);

(statearr_29194_29260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (4))){
var inst_29155 = (state_29190[(7)]);
var inst_29155__$1 = (state_29190[(2)]);
var inst_29156 = (inst_29155__$1 == null);
var state_29190__$1 = (function (){var statearr_29195 = state_29190;
(statearr_29195[(7)] = inst_29155__$1);

return statearr_29195;
})();
if(cljs.core.truth_(inst_29156)){
var statearr_29196_29261 = state_29190__$1;
(statearr_29196_29261[(1)] = (5));

} else {
var statearr_29197_29262 = state_29190__$1;
(statearr_29197_29262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (15))){
var inst_29168 = (state_29190[(8)]);
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29190__$1,(18),to,inst_29168);
} else {
if((state_val_29191 === (21))){
var inst_29181 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29198_29263 = state_29190__$1;
(statearr_29198_29263[(2)] = inst_29181);

(statearr_29198_29263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (13))){
var inst_29183 = (state_29190[(2)]);
var state_29190__$1 = (function (){var statearr_29199 = state_29190;
(statearr_29199[(9)] = inst_29183);

return statearr_29199;
})();
var statearr_29200_29264 = state_29190__$1;
(statearr_29200_29264[(2)] = null);

(statearr_29200_29264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (6))){
var inst_29155 = (state_29190[(7)]);
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29190__$1,(11),inst_29155);
} else {
if((state_val_29191 === (17))){
var inst_29176 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
if(cljs.core.truth_(inst_29176)){
var statearr_29201_29265 = state_29190__$1;
(statearr_29201_29265[(1)] = (19));

} else {
var statearr_29202_29266 = state_29190__$1;
(statearr_29202_29266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (3))){
var inst_29188 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29190__$1,inst_29188);
} else {
if((state_val_29191 === (12))){
var inst_29165 = (state_29190[(10)]);
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29190__$1,(14),inst_29165);
} else {
if((state_val_29191 === (2))){
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29190__$1,(4),results);
} else {
if((state_val_29191 === (19))){
var state_29190__$1 = state_29190;
var statearr_29203_29267 = state_29190__$1;
(statearr_29203_29267[(2)] = null);

(statearr_29203_29267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (11))){
var inst_29165 = (state_29190[(2)]);
var state_29190__$1 = (function (){var statearr_29204 = state_29190;
(statearr_29204[(10)] = inst_29165);

return statearr_29204;
})();
var statearr_29205_29268 = state_29190__$1;
(statearr_29205_29268[(2)] = null);

(statearr_29205_29268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (9))){
var state_29190__$1 = state_29190;
var statearr_29206_29269 = state_29190__$1;
(statearr_29206_29269[(2)] = null);

(statearr_29206_29269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (5))){
var state_29190__$1 = state_29190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29207_29270 = state_29190__$1;
(statearr_29207_29270[(1)] = (8));

} else {
var statearr_29208_29271 = state_29190__$1;
(statearr_29208_29271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (14))){
var inst_29168 = (state_29190[(8)]);
var inst_29170 = (state_29190[(11)]);
var inst_29168__$1 = (state_29190[(2)]);
var inst_29169 = (inst_29168__$1 == null);
var inst_29170__$1 = cljs.core.not.call(null,inst_29169);
var state_29190__$1 = (function (){var statearr_29209 = state_29190;
(statearr_29209[(8)] = inst_29168__$1);

(statearr_29209[(11)] = inst_29170__$1);

return statearr_29209;
})();
if(inst_29170__$1){
var statearr_29210_29272 = state_29190__$1;
(statearr_29210_29272[(1)] = (15));

} else {
var statearr_29211_29273 = state_29190__$1;
(statearr_29211_29273[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (16))){
var inst_29170 = (state_29190[(11)]);
var state_29190__$1 = state_29190;
var statearr_29212_29274 = state_29190__$1;
(statearr_29212_29274[(2)] = inst_29170);

(statearr_29212_29274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (10))){
var inst_29162 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29213_29275 = state_29190__$1;
(statearr_29213_29275[(2)] = inst_29162);

(statearr_29213_29275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (18))){
var inst_29173 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29214_29276 = state_29190__$1;
(statearr_29214_29276[(2)] = inst_29173);

(statearr_29214_29276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (8))){
var inst_29159 = cljs.core.async.close_BANG_.call(null,to);
var state_29190__$1 = state_29190;
var statearr_29215_29277 = state_29190__$1;
(statearr_29215_29277[(2)] = inst_29159);

(statearr_29215_29277[(1)] = (10));


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
}
}
}
}
});})(c__28665__auto__,jobs,results,process,async))
;
return ((function (switch__28553__auto__,c__28665__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0 = (function (){
var statearr_29219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__);

(statearr_29219[(1)] = (1));

return statearr_29219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1 = (function (state_29190){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29220){if((e29220 instanceof Object)){
var ex__28557__auto__ = e29220;
var statearr_29221_29278 = state_29190;
(statearr_29221_29278[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29279 = state_29190;
state_29190 = G__29279;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__ = function(state_29190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1.call(this,state_29190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28554__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto__,jobs,results,process,async))
})();
var state__28667__auto__ = (function (){var statearr_29222 = f__28666__auto__.call(null);
(statearr_29222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto__);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto__,jobs,results,process,async))
);

return c__28665__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29280 = [];
var len__25923__auto___29283 = arguments.length;
var i__25924__auto___29284 = (0);
while(true){
if((i__25924__auto___29284 < len__25923__auto___29283)){
args29280.push((arguments[i__25924__auto___29284]));

var G__29285 = (i__25924__auto___29284 + (1));
i__25924__auto___29284 = G__29285;
continue;
} else {
}
break;
}

var G__29282 = args29280.length;
switch (G__29282) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29280.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29287 = [];
var len__25923__auto___29290 = arguments.length;
var i__25924__auto___29291 = (0);
while(true){
if((i__25924__auto___29291 < len__25923__auto___29290)){
args29287.push((arguments[i__25924__auto___29291]));

var G__29292 = (i__25924__auto___29291 + (1));
i__25924__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var G__29289 = args29287.length;
switch (G__29289) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29287.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29294 = [];
var len__25923__auto___29347 = arguments.length;
var i__25924__auto___29348 = (0);
while(true){
if((i__25924__auto___29348 < len__25923__auto___29347)){
args29294.push((arguments[i__25924__auto___29348]));

var G__29349 = (i__25924__auto___29348 + (1));
i__25924__auto___29348 = G__29349;
continue;
} else {
}
break;
}

var G__29296 = args29294.length;
switch (G__29296) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29294.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28665__auto___29351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___29351,tc,fc){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___29351,tc,fc){
return (function (state_29322){
var state_val_29323 = (state_29322[(1)]);
if((state_val_29323 === (7))){
var inst_29318 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29324_29352 = state_29322__$1;
(statearr_29324_29352[(2)] = inst_29318);

(statearr_29324_29352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (1))){
var state_29322__$1 = state_29322;
var statearr_29325_29353 = state_29322__$1;
(statearr_29325_29353[(2)] = null);

(statearr_29325_29353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (4))){
var inst_29299 = (state_29322[(7)]);
var inst_29299__$1 = (state_29322[(2)]);
var inst_29300 = (inst_29299__$1 == null);
var state_29322__$1 = (function (){var statearr_29326 = state_29322;
(statearr_29326[(7)] = inst_29299__$1);

return statearr_29326;
})();
if(cljs.core.truth_(inst_29300)){
var statearr_29327_29354 = state_29322__$1;
(statearr_29327_29354[(1)] = (5));

} else {
var statearr_29328_29355 = state_29322__$1;
(statearr_29328_29355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (13))){
var state_29322__$1 = state_29322;
var statearr_29329_29356 = state_29322__$1;
(statearr_29329_29356[(2)] = null);

(statearr_29329_29356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (6))){
var inst_29299 = (state_29322[(7)]);
var inst_29305 = p.call(null,inst_29299);
var state_29322__$1 = state_29322;
if(cljs.core.truth_(inst_29305)){
var statearr_29330_29357 = state_29322__$1;
(statearr_29330_29357[(1)] = (9));

} else {
var statearr_29331_29358 = state_29322__$1;
(statearr_29331_29358[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (3))){
var inst_29320 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29322__$1,inst_29320);
} else {
if((state_val_29323 === (12))){
var state_29322__$1 = state_29322;
var statearr_29332_29359 = state_29322__$1;
(statearr_29332_29359[(2)] = null);

(statearr_29332_29359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (2))){
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(4),ch);
} else {
if((state_val_29323 === (11))){
var inst_29299 = (state_29322[(7)]);
var inst_29309 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29322__$1,(8),inst_29309,inst_29299);
} else {
if((state_val_29323 === (9))){
var state_29322__$1 = state_29322;
var statearr_29333_29360 = state_29322__$1;
(statearr_29333_29360[(2)] = tc);

(statearr_29333_29360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (5))){
var inst_29302 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29303 = cljs.core.async.close_BANG_.call(null,fc);
var state_29322__$1 = (function (){var statearr_29334 = state_29322;
(statearr_29334[(8)] = inst_29302);

return statearr_29334;
})();
var statearr_29335_29361 = state_29322__$1;
(statearr_29335_29361[(2)] = inst_29303);

(statearr_29335_29361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (14))){
var inst_29316 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29336_29362 = state_29322__$1;
(statearr_29336_29362[(2)] = inst_29316);

(statearr_29336_29362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (10))){
var state_29322__$1 = state_29322;
var statearr_29337_29363 = state_29322__$1;
(statearr_29337_29363[(2)] = fc);

(statearr_29337_29363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (8))){
var inst_29311 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
if(cljs.core.truth_(inst_29311)){
var statearr_29338_29364 = state_29322__$1;
(statearr_29338_29364[(1)] = (12));

} else {
var statearr_29339_29365 = state_29322__$1;
(statearr_29339_29365[(1)] = (13));

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
});})(c__28665__auto___29351,tc,fc))
;
return ((function (switch__28553__auto__,c__28665__auto___29351,tc,fc){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_29343 = [null,null,null,null,null,null,null,null,null];
(statearr_29343[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_29343[(1)] = (1));

return statearr_29343;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_29322){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29344){if((e29344 instanceof Object)){
var ex__28557__auto__ = e29344;
var statearr_29345_29366 = state_29322;
(statearr_29345_29366[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29367 = state_29322;
state_29322 = G__29367;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_29322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___29351,tc,fc))
})();
var state__28667__auto__ = (function (){var statearr_29346 = f__28666__auto__.call(null);
(statearr_29346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___29351);

return statearr_29346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___29351,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto__){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto__){
return (function (state_29431){
var state_val_29432 = (state_29431[(1)]);
if((state_val_29432 === (7))){
var inst_29427 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29433_29454 = state_29431__$1;
(statearr_29433_29454[(2)] = inst_29427);

(statearr_29433_29454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (1))){
var inst_29411 = init;
var state_29431__$1 = (function (){var statearr_29434 = state_29431;
(statearr_29434[(7)] = inst_29411);

return statearr_29434;
})();
var statearr_29435_29455 = state_29431__$1;
(statearr_29435_29455[(2)] = null);

(statearr_29435_29455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (4))){
var inst_29414 = (state_29431[(8)]);
var inst_29414__$1 = (state_29431[(2)]);
var inst_29415 = (inst_29414__$1 == null);
var state_29431__$1 = (function (){var statearr_29436 = state_29431;
(statearr_29436[(8)] = inst_29414__$1);

return statearr_29436;
})();
if(cljs.core.truth_(inst_29415)){
var statearr_29437_29456 = state_29431__$1;
(statearr_29437_29456[(1)] = (5));

} else {
var statearr_29438_29457 = state_29431__$1;
(statearr_29438_29457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (6))){
var inst_29418 = (state_29431[(9)]);
var inst_29411 = (state_29431[(7)]);
var inst_29414 = (state_29431[(8)]);
var inst_29418__$1 = f.call(null,inst_29411,inst_29414);
var inst_29419 = cljs.core.reduced_QMARK_.call(null,inst_29418__$1);
var state_29431__$1 = (function (){var statearr_29439 = state_29431;
(statearr_29439[(9)] = inst_29418__$1);

return statearr_29439;
})();
if(inst_29419){
var statearr_29440_29458 = state_29431__$1;
(statearr_29440_29458[(1)] = (8));

} else {
var statearr_29441_29459 = state_29431__$1;
(statearr_29441_29459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (3))){
var inst_29429 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29431__$1,inst_29429);
} else {
if((state_val_29432 === (2))){
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(4),ch);
} else {
if((state_val_29432 === (9))){
var inst_29418 = (state_29431[(9)]);
var inst_29411 = inst_29418;
var state_29431__$1 = (function (){var statearr_29442 = state_29431;
(statearr_29442[(7)] = inst_29411);

return statearr_29442;
})();
var statearr_29443_29460 = state_29431__$1;
(statearr_29443_29460[(2)] = null);

(statearr_29443_29460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (5))){
var inst_29411 = (state_29431[(7)]);
var state_29431__$1 = state_29431;
var statearr_29444_29461 = state_29431__$1;
(statearr_29444_29461[(2)] = inst_29411);

(statearr_29444_29461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (10))){
var inst_29425 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29445_29462 = state_29431__$1;
(statearr_29445_29462[(2)] = inst_29425);

(statearr_29445_29462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (8))){
var inst_29418 = (state_29431[(9)]);
var inst_29421 = cljs.core.deref.call(null,inst_29418);
var state_29431__$1 = state_29431;
var statearr_29446_29463 = state_29431__$1;
(statearr_29446_29463[(2)] = inst_29421);

(statearr_29446_29463[(1)] = (10));


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
});})(c__28665__auto__))
;
return ((function (switch__28553__auto__,c__28665__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28554__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28554__auto____0 = (function (){
var statearr_29450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29450[(0)] = cljs$core$async$reduce_$_state_machine__28554__auto__);

(statearr_29450[(1)] = (1));

return statearr_29450;
});
var cljs$core$async$reduce_$_state_machine__28554__auto____1 = (function (state_29431){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29451){if((e29451 instanceof Object)){
var ex__28557__auto__ = e29451;
var statearr_29452_29464 = state_29431;
(statearr_29452_29464[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29465 = state_29431;
state_29431 = G__29465;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28554__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28554__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28554__auto____0;
cljs$core$async$reduce_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28554__auto____1;
return cljs$core$async$reduce_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto__))
})();
var state__28667__auto__ = (function (){var statearr_29453 = f__28666__auto__.call(null);
(statearr_29453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto__);

return statearr_29453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto__))
);

return c__28665__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29466 = [];
var len__25923__auto___29518 = arguments.length;
var i__25924__auto___29519 = (0);
while(true){
if((i__25924__auto___29519 < len__25923__auto___29518)){
args29466.push((arguments[i__25924__auto___29519]));

var G__29520 = (i__25924__auto___29519 + (1));
i__25924__auto___29519 = G__29520;
continue;
} else {
}
break;
}

var G__29468 = args29466.length;
switch (G__29468) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29466.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto__){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto__){
return (function (state_29493){
var state_val_29494 = (state_29493[(1)]);
if((state_val_29494 === (7))){
var inst_29475 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29495_29522 = state_29493__$1;
(statearr_29495_29522[(2)] = inst_29475);

(statearr_29495_29522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (1))){
var inst_29469 = cljs.core.seq.call(null,coll);
var inst_29470 = inst_29469;
var state_29493__$1 = (function (){var statearr_29496 = state_29493;
(statearr_29496[(7)] = inst_29470);

return statearr_29496;
})();
var statearr_29497_29523 = state_29493__$1;
(statearr_29497_29523[(2)] = null);

(statearr_29497_29523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (4))){
var inst_29470 = (state_29493[(7)]);
var inst_29473 = cljs.core.first.call(null,inst_29470);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29493__$1,(7),ch,inst_29473);
} else {
if((state_val_29494 === (13))){
var inst_29487 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29498_29524 = state_29493__$1;
(statearr_29498_29524[(2)] = inst_29487);

(statearr_29498_29524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (6))){
var inst_29478 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29478)){
var statearr_29499_29525 = state_29493__$1;
(statearr_29499_29525[(1)] = (8));

} else {
var statearr_29500_29526 = state_29493__$1;
(statearr_29500_29526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (3))){
var inst_29491 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29493__$1,inst_29491);
} else {
if((state_val_29494 === (12))){
var state_29493__$1 = state_29493;
var statearr_29501_29527 = state_29493__$1;
(statearr_29501_29527[(2)] = null);

(statearr_29501_29527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (2))){
var inst_29470 = (state_29493[(7)]);
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29470)){
var statearr_29502_29528 = state_29493__$1;
(statearr_29502_29528[(1)] = (4));

} else {
var statearr_29503_29529 = state_29493__$1;
(statearr_29503_29529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (11))){
var inst_29484 = cljs.core.async.close_BANG_.call(null,ch);
var state_29493__$1 = state_29493;
var statearr_29504_29530 = state_29493__$1;
(statearr_29504_29530[(2)] = inst_29484);

(statearr_29504_29530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (9))){
var state_29493__$1 = state_29493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29505_29531 = state_29493__$1;
(statearr_29505_29531[(1)] = (11));

} else {
var statearr_29506_29532 = state_29493__$1;
(statearr_29506_29532[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (5))){
var inst_29470 = (state_29493[(7)]);
var state_29493__$1 = state_29493;
var statearr_29507_29533 = state_29493__$1;
(statearr_29507_29533[(2)] = inst_29470);

(statearr_29507_29533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (10))){
var inst_29489 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29508_29534 = state_29493__$1;
(statearr_29508_29534[(2)] = inst_29489);

(statearr_29508_29534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (8))){
var inst_29470 = (state_29493[(7)]);
var inst_29480 = cljs.core.next.call(null,inst_29470);
var inst_29470__$1 = inst_29480;
var state_29493__$1 = (function (){var statearr_29509 = state_29493;
(statearr_29509[(7)] = inst_29470__$1);

return statearr_29509;
})();
var statearr_29510_29535 = state_29493__$1;
(statearr_29510_29535[(2)] = null);

(statearr_29510_29535[(1)] = (2));


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
});})(c__28665__auto__))
;
return ((function (switch__28553__auto__,c__28665__auto__){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_29514 = [null,null,null,null,null,null,null,null];
(statearr_29514[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_29514[(1)] = (1));

return statearr_29514;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_29493){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29515){if((e29515 instanceof Object)){
var ex__28557__auto__ = e29515;
var statearr_29516_29536 = state_29493;
(statearr_29516_29536[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29537 = state_29493;
state_29493 = G__29537;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_29493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_29493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto__))
})();
var state__28667__auto__ = (function (){var statearr_29517 = f__28666__auto__.call(null);
(statearr_29517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto__);

return statearr_29517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto__))
);

return c__28665__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25511__auto__ = (((_ == null))?null:_);
var m__25512__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,_);
} else {
var m__25512__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29763 = (function (mult,ch,cs,meta29764){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29764 = meta29764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29765,meta29764__$1){
var self__ = this;
var _29765__$1 = this;
return (new cljs.core.async.t_cljs$core$async29763(self__.mult,self__.ch,self__.cs,meta29764__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29765){
var self__ = this;
var _29765__$1 = this;
return self__.meta29764;
});})(cs))
;

cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29763.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29763.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29764","meta29764",138827435,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29763";

cljs.core.async.t_cljs$core$async29763.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29763");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29763 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29763(mult__$1,ch__$1,cs__$1,meta29764){
return (new cljs.core.async.t_cljs$core$async29763(mult__$1,ch__$1,cs__$1,meta29764));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29763(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28665__auto___29988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___29988,cs,m,dchan,dctr,done){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___29988,cs,m,dchan,dctr,done){
return (function (state_29900){
var state_val_29901 = (state_29900[(1)]);
if((state_val_29901 === (7))){
var inst_29896 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29902_29989 = state_29900__$1;
(statearr_29902_29989[(2)] = inst_29896);

(statearr_29902_29989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (20))){
var inst_29799 = (state_29900[(7)]);
var inst_29811 = cljs.core.first.call(null,inst_29799);
var inst_29812 = cljs.core.nth.call(null,inst_29811,(0),null);
var inst_29813 = cljs.core.nth.call(null,inst_29811,(1),null);
var state_29900__$1 = (function (){var statearr_29903 = state_29900;
(statearr_29903[(8)] = inst_29812);

return statearr_29903;
})();
if(cljs.core.truth_(inst_29813)){
var statearr_29904_29990 = state_29900__$1;
(statearr_29904_29990[(1)] = (22));

} else {
var statearr_29905_29991 = state_29900__$1;
(statearr_29905_29991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (27))){
var inst_29848 = (state_29900[(9)]);
var inst_29841 = (state_29900[(10)]);
var inst_29768 = (state_29900[(11)]);
var inst_29843 = (state_29900[(12)]);
var inst_29848__$1 = cljs.core._nth.call(null,inst_29841,inst_29843);
var inst_29849 = cljs.core.async.put_BANG_.call(null,inst_29848__$1,inst_29768,done);
var state_29900__$1 = (function (){var statearr_29906 = state_29900;
(statearr_29906[(9)] = inst_29848__$1);

return statearr_29906;
})();
if(cljs.core.truth_(inst_29849)){
var statearr_29907_29992 = state_29900__$1;
(statearr_29907_29992[(1)] = (30));

} else {
var statearr_29908_29993 = state_29900__$1;
(statearr_29908_29993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (1))){
var state_29900__$1 = state_29900;
var statearr_29909_29994 = state_29900__$1;
(statearr_29909_29994[(2)] = null);

(statearr_29909_29994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (24))){
var inst_29799 = (state_29900[(7)]);
var inst_29818 = (state_29900[(2)]);
var inst_29819 = cljs.core.next.call(null,inst_29799);
var inst_29777 = inst_29819;
var inst_29778 = null;
var inst_29779 = (0);
var inst_29780 = (0);
var state_29900__$1 = (function (){var statearr_29910 = state_29900;
(statearr_29910[(13)] = inst_29779);

(statearr_29910[(14)] = inst_29780);

(statearr_29910[(15)] = inst_29778);

(statearr_29910[(16)] = inst_29777);

(statearr_29910[(17)] = inst_29818);

return statearr_29910;
})();
var statearr_29911_29995 = state_29900__$1;
(statearr_29911_29995[(2)] = null);

(statearr_29911_29995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (39))){
var state_29900__$1 = state_29900;
var statearr_29915_29996 = state_29900__$1;
(statearr_29915_29996[(2)] = null);

(statearr_29915_29996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (4))){
var inst_29768 = (state_29900[(11)]);
var inst_29768__$1 = (state_29900[(2)]);
var inst_29769 = (inst_29768__$1 == null);
var state_29900__$1 = (function (){var statearr_29916 = state_29900;
(statearr_29916[(11)] = inst_29768__$1);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29769)){
var statearr_29917_29997 = state_29900__$1;
(statearr_29917_29997[(1)] = (5));

} else {
var statearr_29918_29998 = state_29900__$1;
(statearr_29918_29998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (15))){
var inst_29779 = (state_29900[(13)]);
var inst_29780 = (state_29900[(14)]);
var inst_29778 = (state_29900[(15)]);
var inst_29777 = (state_29900[(16)]);
var inst_29795 = (state_29900[(2)]);
var inst_29796 = (inst_29780 + (1));
var tmp29912 = inst_29779;
var tmp29913 = inst_29778;
var tmp29914 = inst_29777;
var inst_29777__$1 = tmp29914;
var inst_29778__$1 = tmp29913;
var inst_29779__$1 = tmp29912;
var inst_29780__$1 = inst_29796;
var state_29900__$1 = (function (){var statearr_29919 = state_29900;
(statearr_29919[(13)] = inst_29779__$1);

(statearr_29919[(14)] = inst_29780__$1);

(statearr_29919[(15)] = inst_29778__$1);

(statearr_29919[(16)] = inst_29777__$1);

(statearr_29919[(18)] = inst_29795);

return statearr_29919;
})();
var statearr_29920_29999 = state_29900__$1;
(statearr_29920_29999[(2)] = null);

(statearr_29920_29999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (21))){
var inst_29822 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29924_30000 = state_29900__$1;
(statearr_29924_30000[(2)] = inst_29822);

(statearr_29924_30000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (31))){
var inst_29848 = (state_29900[(9)]);
var inst_29852 = done.call(null,null);
var inst_29853 = cljs.core.async.untap_STAR_.call(null,m,inst_29848);
var state_29900__$1 = (function (){var statearr_29925 = state_29900;
(statearr_29925[(19)] = inst_29852);

return statearr_29925;
})();
var statearr_29926_30001 = state_29900__$1;
(statearr_29926_30001[(2)] = inst_29853);

(statearr_29926_30001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (32))){
var inst_29841 = (state_29900[(10)]);
var inst_29843 = (state_29900[(12)]);
var inst_29842 = (state_29900[(20)]);
var inst_29840 = (state_29900[(21)]);
var inst_29855 = (state_29900[(2)]);
var inst_29856 = (inst_29843 + (1));
var tmp29921 = inst_29841;
var tmp29922 = inst_29842;
var tmp29923 = inst_29840;
var inst_29840__$1 = tmp29923;
var inst_29841__$1 = tmp29921;
var inst_29842__$1 = tmp29922;
var inst_29843__$1 = inst_29856;
var state_29900__$1 = (function (){var statearr_29927 = state_29900;
(statearr_29927[(22)] = inst_29855);

(statearr_29927[(10)] = inst_29841__$1);

(statearr_29927[(12)] = inst_29843__$1);

(statearr_29927[(20)] = inst_29842__$1);

(statearr_29927[(21)] = inst_29840__$1);

return statearr_29927;
})();
var statearr_29928_30002 = state_29900__$1;
(statearr_29928_30002[(2)] = null);

(statearr_29928_30002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (40))){
var inst_29868 = (state_29900[(23)]);
var inst_29872 = done.call(null,null);
var inst_29873 = cljs.core.async.untap_STAR_.call(null,m,inst_29868);
var state_29900__$1 = (function (){var statearr_29929 = state_29900;
(statearr_29929[(24)] = inst_29872);

return statearr_29929;
})();
var statearr_29930_30003 = state_29900__$1;
(statearr_29930_30003[(2)] = inst_29873);

(statearr_29930_30003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (33))){
var inst_29859 = (state_29900[(25)]);
var inst_29861 = cljs.core.chunked_seq_QMARK_.call(null,inst_29859);
var state_29900__$1 = state_29900;
if(inst_29861){
var statearr_29931_30004 = state_29900__$1;
(statearr_29931_30004[(1)] = (36));

} else {
var statearr_29932_30005 = state_29900__$1;
(statearr_29932_30005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (13))){
var inst_29789 = (state_29900[(26)]);
var inst_29792 = cljs.core.async.close_BANG_.call(null,inst_29789);
var state_29900__$1 = state_29900;
var statearr_29933_30006 = state_29900__$1;
(statearr_29933_30006[(2)] = inst_29792);

(statearr_29933_30006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (22))){
var inst_29812 = (state_29900[(8)]);
var inst_29815 = cljs.core.async.close_BANG_.call(null,inst_29812);
var state_29900__$1 = state_29900;
var statearr_29934_30007 = state_29900__$1;
(statearr_29934_30007[(2)] = inst_29815);

(statearr_29934_30007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (36))){
var inst_29859 = (state_29900[(25)]);
var inst_29863 = cljs.core.chunk_first.call(null,inst_29859);
var inst_29864 = cljs.core.chunk_rest.call(null,inst_29859);
var inst_29865 = cljs.core.count.call(null,inst_29863);
var inst_29840 = inst_29864;
var inst_29841 = inst_29863;
var inst_29842 = inst_29865;
var inst_29843 = (0);
var state_29900__$1 = (function (){var statearr_29935 = state_29900;
(statearr_29935[(10)] = inst_29841);

(statearr_29935[(12)] = inst_29843);

(statearr_29935[(20)] = inst_29842);

(statearr_29935[(21)] = inst_29840);

return statearr_29935;
})();
var statearr_29936_30008 = state_29900__$1;
(statearr_29936_30008[(2)] = null);

(statearr_29936_30008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (41))){
var inst_29859 = (state_29900[(25)]);
var inst_29875 = (state_29900[(2)]);
var inst_29876 = cljs.core.next.call(null,inst_29859);
var inst_29840 = inst_29876;
var inst_29841 = null;
var inst_29842 = (0);
var inst_29843 = (0);
var state_29900__$1 = (function (){var statearr_29937 = state_29900;
(statearr_29937[(27)] = inst_29875);

(statearr_29937[(10)] = inst_29841);

(statearr_29937[(12)] = inst_29843);

(statearr_29937[(20)] = inst_29842);

(statearr_29937[(21)] = inst_29840);

return statearr_29937;
})();
var statearr_29938_30009 = state_29900__$1;
(statearr_29938_30009[(2)] = null);

(statearr_29938_30009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (43))){
var state_29900__$1 = state_29900;
var statearr_29939_30010 = state_29900__$1;
(statearr_29939_30010[(2)] = null);

(statearr_29939_30010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (29))){
var inst_29884 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29940_30011 = state_29900__$1;
(statearr_29940_30011[(2)] = inst_29884);

(statearr_29940_30011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (44))){
var inst_29893 = (state_29900[(2)]);
var state_29900__$1 = (function (){var statearr_29941 = state_29900;
(statearr_29941[(28)] = inst_29893);

return statearr_29941;
})();
var statearr_29942_30012 = state_29900__$1;
(statearr_29942_30012[(2)] = null);

(statearr_29942_30012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (6))){
var inst_29832 = (state_29900[(29)]);
var inst_29831 = cljs.core.deref.call(null,cs);
var inst_29832__$1 = cljs.core.keys.call(null,inst_29831);
var inst_29833 = cljs.core.count.call(null,inst_29832__$1);
var inst_29834 = cljs.core.reset_BANG_.call(null,dctr,inst_29833);
var inst_29839 = cljs.core.seq.call(null,inst_29832__$1);
var inst_29840 = inst_29839;
var inst_29841 = null;
var inst_29842 = (0);
var inst_29843 = (0);
var state_29900__$1 = (function (){var statearr_29943 = state_29900;
(statearr_29943[(29)] = inst_29832__$1);

(statearr_29943[(10)] = inst_29841);

(statearr_29943[(12)] = inst_29843);

(statearr_29943[(20)] = inst_29842);

(statearr_29943[(21)] = inst_29840);

(statearr_29943[(30)] = inst_29834);

return statearr_29943;
})();
var statearr_29944_30013 = state_29900__$1;
(statearr_29944_30013[(2)] = null);

(statearr_29944_30013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (28))){
var inst_29859 = (state_29900[(25)]);
var inst_29840 = (state_29900[(21)]);
var inst_29859__$1 = cljs.core.seq.call(null,inst_29840);
var state_29900__$1 = (function (){var statearr_29945 = state_29900;
(statearr_29945[(25)] = inst_29859__$1);

return statearr_29945;
})();
if(inst_29859__$1){
var statearr_29946_30014 = state_29900__$1;
(statearr_29946_30014[(1)] = (33));

} else {
var statearr_29947_30015 = state_29900__$1;
(statearr_29947_30015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (25))){
var inst_29843 = (state_29900[(12)]);
var inst_29842 = (state_29900[(20)]);
var inst_29845 = (inst_29843 < inst_29842);
var inst_29846 = inst_29845;
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29846)){
var statearr_29948_30016 = state_29900__$1;
(statearr_29948_30016[(1)] = (27));

} else {
var statearr_29949_30017 = state_29900__$1;
(statearr_29949_30017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (34))){
var state_29900__$1 = state_29900;
var statearr_29950_30018 = state_29900__$1;
(statearr_29950_30018[(2)] = null);

(statearr_29950_30018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (17))){
var state_29900__$1 = state_29900;
var statearr_29951_30019 = state_29900__$1;
(statearr_29951_30019[(2)] = null);

(statearr_29951_30019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (3))){
var inst_29898 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29900__$1,inst_29898);
} else {
if((state_val_29901 === (12))){
var inst_29827 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29952_30020 = state_29900__$1;
(statearr_29952_30020[(2)] = inst_29827);

(statearr_29952_30020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (2))){
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(4),ch);
} else {
if((state_val_29901 === (23))){
var state_29900__$1 = state_29900;
var statearr_29953_30021 = state_29900__$1;
(statearr_29953_30021[(2)] = null);

(statearr_29953_30021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (35))){
var inst_29882 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29954_30022 = state_29900__$1;
(statearr_29954_30022[(2)] = inst_29882);

(statearr_29954_30022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (19))){
var inst_29799 = (state_29900[(7)]);
var inst_29803 = cljs.core.chunk_first.call(null,inst_29799);
var inst_29804 = cljs.core.chunk_rest.call(null,inst_29799);
var inst_29805 = cljs.core.count.call(null,inst_29803);
var inst_29777 = inst_29804;
var inst_29778 = inst_29803;
var inst_29779 = inst_29805;
var inst_29780 = (0);
var state_29900__$1 = (function (){var statearr_29955 = state_29900;
(statearr_29955[(13)] = inst_29779);

(statearr_29955[(14)] = inst_29780);

(statearr_29955[(15)] = inst_29778);

(statearr_29955[(16)] = inst_29777);

return statearr_29955;
})();
var statearr_29956_30023 = state_29900__$1;
(statearr_29956_30023[(2)] = null);

(statearr_29956_30023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (11))){
var inst_29777 = (state_29900[(16)]);
var inst_29799 = (state_29900[(7)]);
var inst_29799__$1 = cljs.core.seq.call(null,inst_29777);
var state_29900__$1 = (function (){var statearr_29957 = state_29900;
(statearr_29957[(7)] = inst_29799__$1);

return statearr_29957;
})();
if(inst_29799__$1){
var statearr_29958_30024 = state_29900__$1;
(statearr_29958_30024[(1)] = (16));

} else {
var statearr_29959_30025 = state_29900__$1;
(statearr_29959_30025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (9))){
var inst_29829 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29960_30026 = state_29900__$1;
(statearr_29960_30026[(2)] = inst_29829);

(statearr_29960_30026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (5))){
var inst_29775 = cljs.core.deref.call(null,cs);
var inst_29776 = cljs.core.seq.call(null,inst_29775);
var inst_29777 = inst_29776;
var inst_29778 = null;
var inst_29779 = (0);
var inst_29780 = (0);
var state_29900__$1 = (function (){var statearr_29961 = state_29900;
(statearr_29961[(13)] = inst_29779);

(statearr_29961[(14)] = inst_29780);

(statearr_29961[(15)] = inst_29778);

(statearr_29961[(16)] = inst_29777);

return statearr_29961;
})();
var statearr_29962_30027 = state_29900__$1;
(statearr_29962_30027[(2)] = null);

(statearr_29962_30027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (14))){
var state_29900__$1 = state_29900;
var statearr_29963_30028 = state_29900__$1;
(statearr_29963_30028[(2)] = null);

(statearr_29963_30028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (45))){
var inst_29890 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29964_30029 = state_29900__$1;
(statearr_29964_30029[(2)] = inst_29890);

(statearr_29964_30029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (26))){
var inst_29832 = (state_29900[(29)]);
var inst_29886 = (state_29900[(2)]);
var inst_29887 = cljs.core.seq.call(null,inst_29832);
var state_29900__$1 = (function (){var statearr_29965 = state_29900;
(statearr_29965[(31)] = inst_29886);

return statearr_29965;
})();
if(inst_29887){
var statearr_29966_30030 = state_29900__$1;
(statearr_29966_30030[(1)] = (42));

} else {
var statearr_29967_30031 = state_29900__$1;
(statearr_29967_30031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (16))){
var inst_29799 = (state_29900[(7)]);
var inst_29801 = cljs.core.chunked_seq_QMARK_.call(null,inst_29799);
var state_29900__$1 = state_29900;
if(inst_29801){
var statearr_29968_30032 = state_29900__$1;
(statearr_29968_30032[(1)] = (19));

} else {
var statearr_29969_30033 = state_29900__$1;
(statearr_29969_30033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (38))){
var inst_29879 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29970_30034 = state_29900__$1;
(statearr_29970_30034[(2)] = inst_29879);

(statearr_29970_30034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (30))){
var state_29900__$1 = state_29900;
var statearr_29971_30035 = state_29900__$1;
(statearr_29971_30035[(2)] = null);

(statearr_29971_30035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (10))){
var inst_29780 = (state_29900[(14)]);
var inst_29778 = (state_29900[(15)]);
var inst_29788 = cljs.core._nth.call(null,inst_29778,inst_29780);
var inst_29789 = cljs.core.nth.call(null,inst_29788,(0),null);
var inst_29790 = cljs.core.nth.call(null,inst_29788,(1),null);
var state_29900__$1 = (function (){var statearr_29972 = state_29900;
(statearr_29972[(26)] = inst_29789);

return statearr_29972;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29973_30036 = state_29900__$1;
(statearr_29973_30036[(1)] = (13));

} else {
var statearr_29974_30037 = state_29900__$1;
(statearr_29974_30037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (18))){
var inst_29825 = (state_29900[(2)]);
var state_29900__$1 = state_29900;
var statearr_29975_30038 = state_29900__$1;
(statearr_29975_30038[(2)] = inst_29825);

(statearr_29975_30038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (42))){
var state_29900__$1 = state_29900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29900__$1,(45),dchan);
} else {
if((state_val_29901 === (37))){
var inst_29859 = (state_29900[(25)]);
var inst_29768 = (state_29900[(11)]);
var inst_29868 = (state_29900[(23)]);
var inst_29868__$1 = cljs.core.first.call(null,inst_29859);
var inst_29869 = cljs.core.async.put_BANG_.call(null,inst_29868__$1,inst_29768,done);
var state_29900__$1 = (function (){var statearr_29976 = state_29900;
(statearr_29976[(23)] = inst_29868__$1);

return statearr_29976;
})();
if(cljs.core.truth_(inst_29869)){
var statearr_29977_30039 = state_29900__$1;
(statearr_29977_30039[(1)] = (39));

} else {
var statearr_29978_30040 = state_29900__$1;
(statearr_29978_30040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29901 === (8))){
var inst_29779 = (state_29900[(13)]);
var inst_29780 = (state_29900[(14)]);
var inst_29782 = (inst_29780 < inst_29779);
var inst_29783 = inst_29782;
var state_29900__$1 = state_29900;
if(cljs.core.truth_(inst_29783)){
var statearr_29979_30041 = state_29900__$1;
(statearr_29979_30041[(1)] = (10));

} else {
var statearr_29980_30042 = state_29900__$1;
(statearr_29980_30042[(1)] = (11));

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
});})(c__28665__auto___29988,cs,m,dchan,dctr,done))
;
return ((function (switch__28553__auto__,c__28665__auto___29988,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28554__auto__ = null;
var cljs$core$async$mult_$_state_machine__28554__auto____0 = (function (){
var statearr_29984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29984[(0)] = cljs$core$async$mult_$_state_machine__28554__auto__);

(statearr_29984[(1)] = (1));

return statearr_29984;
});
var cljs$core$async$mult_$_state_machine__28554__auto____1 = (function (state_29900){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_29900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e29985){if((e29985 instanceof Object)){
var ex__28557__auto__ = e29985;
var statearr_29986_30043 = state_29900;
(statearr_29986_30043[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30044 = state_29900;
state_29900 = G__30044;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28554__auto__ = function(state_29900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28554__auto____1.call(this,state_29900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28554__auto____0;
cljs$core$async$mult_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28554__auto____1;
return cljs$core$async$mult_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___29988,cs,m,dchan,dctr,done))
})();
var state__28667__auto__ = (function (){var statearr_29987 = f__28666__auto__.call(null);
(statearr_29987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___29988);

return statearr_29987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___29988,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30045 = [];
var len__25923__auto___30048 = arguments.length;
var i__25924__auto___30049 = (0);
while(true){
if((i__25924__auto___30049 < len__25923__auto___30048)){
args30045.push((arguments[i__25924__auto___30049]));

var G__30050 = (i__25924__auto___30049 + (1));
i__25924__auto___30049 = G__30050;
continue;
} else {
}
break;
}

var G__30047 = args30045.length;
switch (G__30047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30045.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,state_map);
} else {
var m__25512__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,mode);
} else {
var m__25512__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___30062 = arguments.length;
var i__25924__auto___30063 = (0);
while(true){
if((i__25924__auto___30063 < len__25923__auto___30062)){
args__25930__auto__.push((arguments[i__25924__auto___30063]));

var G__30064 = (i__25924__auto___30063 + (1));
i__25924__auto___30063 = G__30064;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30056){
var map__30057 = p__30056;
var map__30057__$1 = ((((!((map__30057 == null)))?((((map__30057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);
var opts = map__30057__$1;
var statearr_30059_30065 = state;
(statearr_30059_30065[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30057,map__30057__$1,opts){
return (function (val){
var statearr_30060_30066 = state;
(statearr_30060_30066[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30057,map__30057__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30061_30067 = state;
(statearr_30061_30067[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30052){
var G__30053 = cljs.core.first.call(null,seq30052);
var seq30052__$1 = cljs.core.next.call(null,seq30052);
var G__30054 = cljs.core.first.call(null,seq30052__$1);
var seq30052__$2 = cljs.core.next.call(null,seq30052__$1);
var G__30055 = cljs.core.first.call(null,seq30052__$2);
var seq30052__$3 = cljs.core.next.call(null,seq30052__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30053,G__30054,G__30055,seq30052__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30233 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30234){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30234 = meta30234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30235,meta30234__$1){
var self__ = this;
var _30235__$1 = this;
return (new cljs.core.async.t_cljs$core$async30233(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30234__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30235){
var self__ = this;
var _30235__$1 = this;
return self__.meta30234;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30234","meta30234",990429961,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30233";

cljs.core.async.t_cljs$core$async30233.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30233");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30233 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30233(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30234){
return (new cljs.core.async.t_cljs$core$async30233(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30234));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30233(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28665__auto___30398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___30398,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___30398,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30335){
var state_val_30336 = (state_30335[(1)]);
if((state_val_30336 === (7))){
var inst_30251 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30337_30399 = state_30335__$1;
(statearr_30337_30399[(2)] = inst_30251);

(statearr_30337_30399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (20))){
var inst_30263 = (state_30335[(7)]);
var state_30335__$1 = state_30335;
var statearr_30338_30400 = state_30335__$1;
(statearr_30338_30400[(2)] = inst_30263);

(statearr_30338_30400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (27))){
var state_30335__$1 = state_30335;
var statearr_30339_30401 = state_30335__$1;
(statearr_30339_30401[(2)] = null);

(statearr_30339_30401[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (1))){
var inst_30239 = (state_30335[(8)]);
var inst_30239__$1 = calc_state.call(null);
var inst_30241 = (inst_30239__$1 == null);
var inst_30242 = cljs.core.not.call(null,inst_30241);
var state_30335__$1 = (function (){var statearr_30340 = state_30335;
(statearr_30340[(8)] = inst_30239__$1);

return statearr_30340;
})();
if(inst_30242){
var statearr_30341_30402 = state_30335__$1;
(statearr_30341_30402[(1)] = (2));

} else {
var statearr_30342_30403 = state_30335__$1;
(statearr_30342_30403[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (24))){
var inst_30309 = (state_30335[(9)]);
var inst_30286 = (state_30335[(10)]);
var inst_30295 = (state_30335[(11)]);
var inst_30309__$1 = inst_30286.call(null,inst_30295);
var state_30335__$1 = (function (){var statearr_30343 = state_30335;
(statearr_30343[(9)] = inst_30309__$1);

return statearr_30343;
})();
if(cljs.core.truth_(inst_30309__$1)){
var statearr_30344_30404 = state_30335__$1;
(statearr_30344_30404[(1)] = (29));

} else {
var statearr_30345_30405 = state_30335__$1;
(statearr_30345_30405[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (4))){
var inst_30254 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30254)){
var statearr_30346_30406 = state_30335__$1;
(statearr_30346_30406[(1)] = (8));

} else {
var statearr_30347_30407 = state_30335__$1;
(statearr_30347_30407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (15))){
var inst_30280 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30280)){
var statearr_30348_30408 = state_30335__$1;
(statearr_30348_30408[(1)] = (19));

} else {
var statearr_30349_30409 = state_30335__$1;
(statearr_30349_30409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (21))){
var inst_30285 = (state_30335[(12)]);
var inst_30285__$1 = (state_30335[(2)]);
var inst_30286 = cljs.core.get.call(null,inst_30285__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30287 = cljs.core.get.call(null,inst_30285__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30288 = cljs.core.get.call(null,inst_30285__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30335__$1 = (function (){var statearr_30350 = state_30335;
(statearr_30350[(13)] = inst_30287);

(statearr_30350[(12)] = inst_30285__$1);

(statearr_30350[(10)] = inst_30286);

return statearr_30350;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30335__$1,(22),inst_30288);
} else {
if((state_val_30336 === (31))){
var inst_30317 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30317)){
var statearr_30351_30410 = state_30335__$1;
(statearr_30351_30410[(1)] = (32));

} else {
var statearr_30352_30411 = state_30335__$1;
(statearr_30352_30411[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (32))){
var inst_30294 = (state_30335[(14)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30335__$1,(35),out,inst_30294);
} else {
if((state_val_30336 === (33))){
var inst_30285 = (state_30335[(12)]);
var inst_30263 = inst_30285;
var state_30335__$1 = (function (){var statearr_30353 = state_30335;
(statearr_30353[(7)] = inst_30263);

return statearr_30353;
})();
var statearr_30354_30412 = state_30335__$1;
(statearr_30354_30412[(2)] = null);

(statearr_30354_30412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (13))){
var inst_30263 = (state_30335[(7)]);
var inst_30270 = inst_30263.cljs$lang$protocol_mask$partition0$;
var inst_30271 = (inst_30270 & (64));
var inst_30272 = inst_30263.cljs$core$ISeq$;
var inst_30273 = (inst_30271) || (inst_30272);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30273)){
var statearr_30355_30413 = state_30335__$1;
(statearr_30355_30413[(1)] = (16));

} else {
var statearr_30356_30414 = state_30335__$1;
(statearr_30356_30414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (22))){
var inst_30294 = (state_30335[(14)]);
var inst_30295 = (state_30335[(11)]);
var inst_30293 = (state_30335[(2)]);
var inst_30294__$1 = cljs.core.nth.call(null,inst_30293,(0),null);
var inst_30295__$1 = cljs.core.nth.call(null,inst_30293,(1),null);
var inst_30296 = (inst_30294__$1 == null);
var inst_30297 = cljs.core._EQ_.call(null,inst_30295__$1,change);
var inst_30298 = (inst_30296) || (inst_30297);
var state_30335__$1 = (function (){var statearr_30357 = state_30335;
(statearr_30357[(14)] = inst_30294__$1);

(statearr_30357[(11)] = inst_30295__$1);

return statearr_30357;
})();
if(cljs.core.truth_(inst_30298)){
var statearr_30358_30415 = state_30335__$1;
(statearr_30358_30415[(1)] = (23));

} else {
var statearr_30359_30416 = state_30335__$1;
(statearr_30359_30416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (36))){
var inst_30285 = (state_30335[(12)]);
var inst_30263 = inst_30285;
var state_30335__$1 = (function (){var statearr_30360 = state_30335;
(statearr_30360[(7)] = inst_30263);

return statearr_30360;
})();
var statearr_30361_30417 = state_30335__$1;
(statearr_30361_30417[(2)] = null);

(statearr_30361_30417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (29))){
var inst_30309 = (state_30335[(9)]);
var state_30335__$1 = state_30335;
var statearr_30362_30418 = state_30335__$1;
(statearr_30362_30418[(2)] = inst_30309);

(statearr_30362_30418[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (6))){
var state_30335__$1 = state_30335;
var statearr_30363_30419 = state_30335__$1;
(statearr_30363_30419[(2)] = false);

(statearr_30363_30419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (28))){
var inst_30305 = (state_30335[(2)]);
var inst_30306 = calc_state.call(null);
var inst_30263 = inst_30306;
var state_30335__$1 = (function (){var statearr_30364 = state_30335;
(statearr_30364[(7)] = inst_30263);

(statearr_30364[(15)] = inst_30305);

return statearr_30364;
})();
var statearr_30365_30420 = state_30335__$1;
(statearr_30365_30420[(2)] = null);

(statearr_30365_30420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (25))){
var inst_30331 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30366_30421 = state_30335__$1;
(statearr_30366_30421[(2)] = inst_30331);

(statearr_30366_30421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (34))){
var inst_30329 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30367_30422 = state_30335__$1;
(statearr_30367_30422[(2)] = inst_30329);

(statearr_30367_30422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (17))){
var state_30335__$1 = state_30335;
var statearr_30368_30423 = state_30335__$1;
(statearr_30368_30423[(2)] = false);

(statearr_30368_30423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (3))){
var state_30335__$1 = state_30335;
var statearr_30369_30424 = state_30335__$1;
(statearr_30369_30424[(2)] = false);

(statearr_30369_30424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (12))){
var inst_30333 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30335__$1,inst_30333);
} else {
if((state_val_30336 === (2))){
var inst_30239 = (state_30335[(8)]);
var inst_30244 = inst_30239.cljs$lang$protocol_mask$partition0$;
var inst_30245 = (inst_30244 & (64));
var inst_30246 = inst_30239.cljs$core$ISeq$;
var inst_30247 = (inst_30245) || (inst_30246);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30247)){
var statearr_30370_30425 = state_30335__$1;
(statearr_30370_30425[(1)] = (5));

} else {
var statearr_30371_30426 = state_30335__$1;
(statearr_30371_30426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (23))){
var inst_30294 = (state_30335[(14)]);
var inst_30300 = (inst_30294 == null);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30300)){
var statearr_30372_30427 = state_30335__$1;
(statearr_30372_30427[(1)] = (26));

} else {
var statearr_30373_30428 = state_30335__$1;
(statearr_30373_30428[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (35))){
var inst_30320 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30320)){
var statearr_30374_30429 = state_30335__$1;
(statearr_30374_30429[(1)] = (36));

} else {
var statearr_30375_30430 = state_30335__$1;
(statearr_30375_30430[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (19))){
var inst_30263 = (state_30335[(7)]);
var inst_30282 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30263);
var state_30335__$1 = state_30335;
var statearr_30376_30431 = state_30335__$1;
(statearr_30376_30431[(2)] = inst_30282);

(statearr_30376_30431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (11))){
var inst_30263 = (state_30335[(7)]);
var inst_30267 = (inst_30263 == null);
var inst_30268 = cljs.core.not.call(null,inst_30267);
var state_30335__$1 = state_30335;
if(inst_30268){
var statearr_30377_30432 = state_30335__$1;
(statearr_30377_30432[(1)] = (13));

} else {
var statearr_30378_30433 = state_30335__$1;
(statearr_30378_30433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (9))){
var inst_30239 = (state_30335[(8)]);
var state_30335__$1 = state_30335;
var statearr_30379_30434 = state_30335__$1;
(statearr_30379_30434[(2)] = inst_30239);

(statearr_30379_30434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (5))){
var state_30335__$1 = state_30335;
var statearr_30380_30435 = state_30335__$1;
(statearr_30380_30435[(2)] = true);

(statearr_30380_30435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (14))){
var state_30335__$1 = state_30335;
var statearr_30381_30436 = state_30335__$1;
(statearr_30381_30436[(2)] = false);

(statearr_30381_30436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (26))){
var inst_30295 = (state_30335[(11)]);
var inst_30302 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30295);
var state_30335__$1 = state_30335;
var statearr_30382_30437 = state_30335__$1;
(statearr_30382_30437[(2)] = inst_30302);

(statearr_30382_30437[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (16))){
var state_30335__$1 = state_30335;
var statearr_30383_30438 = state_30335__$1;
(statearr_30383_30438[(2)] = true);

(statearr_30383_30438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (38))){
var inst_30325 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30384_30439 = state_30335__$1;
(statearr_30384_30439[(2)] = inst_30325);

(statearr_30384_30439[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (30))){
var inst_30287 = (state_30335[(13)]);
var inst_30286 = (state_30335[(10)]);
var inst_30295 = (state_30335[(11)]);
var inst_30312 = cljs.core.empty_QMARK_.call(null,inst_30286);
var inst_30313 = inst_30287.call(null,inst_30295);
var inst_30314 = cljs.core.not.call(null,inst_30313);
var inst_30315 = (inst_30312) && (inst_30314);
var state_30335__$1 = state_30335;
var statearr_30385_30440 = state_30335__$1;
(statearr_30385_30440[(2)] = inst_30315);

(statearr_30385_30440[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (10))){
var inst_30239 = (state_30335[(8)]);
var inst_30259 = (state_30335[(2)]);
var inst_30260 = cljs.core.get.call(null,inst_30259,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30261 = cljs.core.get.call(null,inst_30259,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30262 = cljs.core.get.call(null,inst_30259,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30263 = inst_30239;
var state_30335__$1 = (function (){var statearr_30386 = state_30335;
(statearr_30386[(16)] = inst_30262);

(statearr_30386[(7)] = inst_30263);

(statearr_30386[(17)] = inst_30260);

(statearr_30386[(18)] = inst_30261);

return statearr_30386;
})();
var statearr_30387_30441 = state_30335__$1;
(statearr_30387_30441[(2)] = null);

(statearr_30387_30441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (18))){
var inst_30277 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30388_30442 = state_30335__$1;
(statearr_30388_30442[(2)] = inst_30277);

(statearr_30388_30442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (37))){
var state_30335__$1 = state_30335;
var statearr_30389_30443 = state_30335__$1;
(statearr_30389_30443[(2)] = null);

(statearr_30389_30443[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (8))){
var inst_30239 = (state_30335[(8)]);
var inst_30256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30239);
var state_30335__$1 = state_30335;
var statearr_30390_30444 = state_30335__$1;
(statearr_30390_30444[(2)] = inst_30256);

(statearr_30390_30444[(1)] = (10));


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
});})(c__28665__auto___30398,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28553__auto__,c__28665__auto___30398,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28554__auto__ = null;
var cljs$core$async$mix_$_state_machine__28554__auto____0 = (function (){
var statearr_30394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30394[(0)] = cljs$core$async$mix_$_state_machine__28554__auto__);

(statearr_30394[(1)] = (1));

return statearr_30394;
});
var cljs$core$async$mix_$_state_machine__28554__auto____1 = (function (state_30335){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_30335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e30395){if((e30395 instanceof Object)){
var ex__28557__auto__ = e30395;
var statearr_30396_30445 = state_30335;
(statearr_30396_30445[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30446 = state_30335;
state_30335 = G__30446;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28554__auto__ = function(state_30335){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28554__auto____1.call(this,state_30335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28554__auto____0;
cljs$core$async$mix_$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28554__auto____1;
return cljs$core$async$mix_$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___30398,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28667__auto__ = (function (){var statearr_30397 = f__28666__auto__.call(null);
(statearr_30397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___30398);

return statearr_30397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___30398,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30447 = [];
var len__25923__auto___30450 = arguments.length;
var i__25924__auto___30451 = (0);
while(true){
if((i__25924__auto___30451 < len__25923__auto___30450)){
args30447.push((arguments[i__25924__auto___30451]));

var G__30452 = (i__25924__auto___30451 + (1));
i__25924__auto___30451 = G__30452;
continue;
} else {
}
break;
}

var G__30449 = args30447.length;
switch (G__30449) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30447.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30455 = [];
var len__25923__auto___30580 = arguments.length;
var i__25924__auto___30581 = (0);
while(true){
if((i__25924__auto___30581 < len__25923__auto___30580)){
args30455.push((arguments[i__25924__auto___30581]));

var G__30582 = (i__25924__auto___30581 + (1));
i__25924__auto___30581 = G__30582;
continue;
} else {
}
break;
}

var G__30457 = args30455.length;
switch (G__30457) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30455.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24848__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24848__auto__,mults){
return (function (p1__30454_SHARP_){
if(cljs.core.truth_(p1__30454_SHARP_.call(null,topic))){
return p1__30454_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30454_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30458 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30459){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30459 = meta30459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30460,meta30459__$1){
var self__ = this;
var _30460__$1 = this;
return (new cljs.core.async.t_cljs$core$async30458(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30459__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30460){
var self__ = this;
var _30460__$1 = this;
return self__.meta30459;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30459","meta30459",-1949616569,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30458";

cljs.core.async.t_cljs$core$async30458.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30458");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30458 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30458(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30459){
return (new cljs.core.async.t_cljs$core$async30458(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30459));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30458(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28665__auto___30584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___30584,mults,ensure_mult,p){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___30584,mults,ensure_mult,p){
return (function (state_30532){
var state_val_30533 = (state_30532[(1)]);
if((state_val_30533 === (7))){
var inst_30528 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30534_30585 = state_30532__$1;
(statearr_30534_30585[(2)] = inst_30528);

(statearr_30534_30585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (20))){
var state_30532__$1 = state_30532;
var statearr_30535_30586 = state_30532__$1;
(statearr_30535_30586[(2)] = null);

(statearr_30535_30586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (1))){
var state_30532__$1 = state_30532;
var statearr_30536_30587 = state_30532__$1;
(statearr_30536_30587[(2)] = null);

(statearr_30536_30587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (24))){
var inst_30511 = (state_30532[(7)]);
var inst_30520 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30511);
var state_30532__$1 = state_30532;
var statearr_30537_30588 = state_30532__$1;
(statearr_30537_30588[(2)] = inst_30520);

(statearr_30537_30588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (4))){
var inst_30463 = (state_30532[(8)]);
var inst_30463__$1 = (state_30532[(2)]);
var inst_30464 = (inst_30463__$1 == null);
var state_30532__$1 = (function (){var statearr_30538 = state_30532;
(statearr_30538[(8)] = inst_30463__$1);

return statearr_30538;
})();
if(cljs.core.truth_(inst_30464)){
var statearr_30539_30589 = state_30532__$1;
(statearr_30539_30589[(1)] = (5));

} else {
var statearr_30540_30590 = state_30532__$1;
(statearr_30540_30590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (15))){
var inst_30505 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30541_30591 = state_30532__$1;
(statearr_30541_30591[(2)] = inst_30505);

(statearr_30541_30591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (21))){
var inst_30525 = (state_30532[(2)]);
var state_30532__$1 = (function (){var statearr_30542 = state_30532;
(statearr_30542[(9)] = inst_30525);

return statearr_30542;
})();
var statearr_30543_30592 = state_30532__$1;
(statearr_30543_30592[(2)] = null);

(statearr_30543_30592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (13))){
var inst_30487 = (state_30532[(10)]);
var inst_30489 = cljs.core.chunked_seq_QMARK_.call(null,inst_30487);
var state_30532__$1 = state_30532;
if(inst_30489){
var statearr_30544_30593 = state_30532__$1;
(statearr_30544_30593[(1)] = (16));

} else {
var statearr_30545_30594 = state_30532__$1;
(statearr_30545_30594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (22))){
var inst_30517 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30517)){
var statearr_30546_30595 = state_30532__$1;
(statearr_30546_30595[(1)] = (23));

} else {
var statearr_30547_30596 = state_30532__$1;
(statearr_30547_30596[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (6))){
var inst_30463 = (state_30532[(8)]);
var inst_30511 = (state_30532[(7)]);
var inst_30513 = (state_30532[(11)]);
var inst_30511__$1 = topic_fn.call(null,inst_30463);
var inst_30512 = cljs.core.deref.call(null,mults);
var inst_30513__$1 = cljs.core.get.call(null,inst_30512,inst_30511__$1);
var state_30532__$1 = (function (){var statearr_30548 = state_30532;
(statearr_30548[(7)] = inst_30511__$1);

(statearr_30548[(11)] = inst_30513__$1);

return statearr_30548;
})();
if(cljs.core.truth_(inst_30513__$1)){
var statearr_30549_30597 = state_30532__$1;
(statearr_30549_30597[(1)] = (19));

} else {
var statearr_30550_30598 = state_30532__$1;
(statearr_30550_30598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (25))){
var inst_30522 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30551_30599 = state_30532__$1;
(statearr_30551_30599[(2)] = inst_30522);

(statearr_30551_30599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (17))){
var inst_30487 = (state_30532[(10)]);
var inst_30496 = cljs.core.first.call(null,inst_30487);
var inst_30497 = cljs.core.async.muxch_STAR_.call(null,inst_30496);
var inst_30498 = cljs.core.async.close_BANG_.call(null,inst_30497);
var inst_30499 = cljs.core.next.call(null,inst_30487);
var inst_30473 = inst_30499;
var inst_30474 = null;
var inst_30475 = (0);
var inst_30476 = (0);
var state_30532__$1 = (function (){var statearr_30552 = state_30532;
(statearr_30552[(12)] = inst_30473);

(statearr_30552[(13)] = inst_30476);

(statearr_30552[(14)] = inst_30474);

(statearr_30552[(15)] = inst_30475);

(statearr_30552[(16)] = inst_30498);

return statearr_30552;
})();
var statearr_30553_30600 = state_30532__$1;
(statearr_30553_30600[(2)] = null);

(statearr_30553_30600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (3))){
var inst_30530 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30532__$1,inst_30530);
} else {
if((state_val_30533 === (12))){
var inst_30507 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30554_30601 = state_30532__$1;
(statearr_30554_30601[(2)] = inst_30507);

(statearr_30554_30601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (2))){
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(4),ch);
} else {
if((state_val_30533 === (23))){
var state_30532__$1 = state_30532;
var statearr_30555_30602 = state_30532__$1;
(statearr_30555_30602[(2)] = null);

(statearr_30555_30602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (19))){
var inst_30463 = (state_30532[(8)]);
var inst_30513 = (state_30532[(11)]);
var inst_30515 = cljs.core.async.muxch_STAR_.call(null,inst_30513);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30532__$1,(22),inst_30515,inst_30463);
} else {
if((state_val_30533 === (11))){
var inst_30473 = (state_30532[(12)]);
var inst_30487 = (state_30532[(10)]);
var inst_30487__$1 = cljs.core.seq.call(null,inst_30473);
var state_30532__$1 = (function (){var statearr_30556 = state_30532;
(statearr_30556[(10)] = inst_30487__$1);

return statearr_30556;
})();
if(inst_30487__$1){
var statearr_30557_30603 = state_30532__$1;
(statearr_30557_30603[(1)] = (13));

} else {
var statearr_30558_30604 = state_30532__$1;
(statearr_30558_30604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (9))){
var inst_30509 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30559_30605 = state_30532__$1;
(statearr_30559_30605[(2)] = inst_30509);

(statearr_30559_30605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (5))){
var inst_30470 = cljs.core.deref.call(null,mults);
var inst_30471 = cljs.core.vals.call(null,inst_30470);
var inst_30472 = cljs.core.seq.call(null,inst_30471);
var inst_30473 = inst_30472;
var inst_30474 = null;
var inst_30475 = (0);
var inst_30476 = (0);
var state_30532__$1 = (function (){var statearr_30560 = state_30532;
(statearr_30560[(12)] = inst_30473);

(statearr_30560[(13)] = inst_30476);

(statearr_30560[(14)] = inst_30474);

(statearr_30560[(15)] = inst_30475);

return statearr_30560;
})();
var statearr_30561_30606 = state_30532__$1;
(statearr_30561_30606[(2)] = null);

(statearr_30561_30606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (14))){
var state_30532__$1 = state_30532;
var statearr_30565_30607 = state_30532__$1;
(statearr_30565_30607[(2)] = null);

(statearr_30565_30607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (16))){
var inst_30487 = (state_30532[(10)]);
var inst_30491 = cljs.core.chunk_first.call(null,inst_30487);
var inst_30492 = cljs.core.chunk_rest.call(null,inst_30487);
var inst_30493 = cljs.core.count.call(null,inst_30491);
var inst_30473 = inst_30492;
var inst_30474 = inst_30491;
var inst_30475 = inst_30493;
var inst_30476 = (0);
var state_30532__$1 = (function (){var statearr_30566 = state_30532;
(statearr_30566[(12)] = inst_30473);

(statearr_30566[(13)] = inst_30476);

(statearr_30566[(14)] = inst_30474);

(statearr_30566[(15)] = inst_30475);

return statearr_30566;
})();
var statearr_30567_30608 = state_30532__$1;
(statearr_30567_30608[(2)] = null);

(statearr_30567_30608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (10))){
var inst_30473 = (state_30532[(12)]);
var inst_30476 = (state_30532[(13)]);
var inst_30474 = (state_30532[(14)]);
var inst_30475 = (state_30532[(15)]);
var inst_30481 = cljs.core._nth.call(null,inst_30474,inst_30476);
var inst_30482 = cljs.core.async.muxch_STAR_.call(null,inst_30481);
var inst_30483 = cljs.core.async.close_BANG_.call(null,inst_30482);
var inst_30484 = (inst_30476 + (1));
var tmp30562 = inst_30473;
var tmp30563 = inst_30474;
var tmp30564 = inst_30475;
var inst_30473__$1 = tmp30562;
var inst_30474__$1 = tmp30563;
var inst_30475__$1 = tmp30564;
var inst_30476__$1 = inst_30484;
var state_30532__$1 = (function (){var statearr_30568 = state_30532;
(statearr_30568[(12)] = inst_30473__$1);

(statearr_30568[(13)] = inst_30476__$1);

(statearr_30568[(14)] = inst_30474__$1);

(statearr_30568[(15)] = inst_30475__$1);

(statearr_30568[(17)] = inst_30483);

return statearr_30568;
})();
var statearr_30569_30609 = state_30532__$1;
(statearr_30569_30609[(2)] = null);

(statearr_30569_30609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (18))){
var inst_30502 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30570_30610 = state_30532__$1;
(statearr_30570_30610[(2)] = inst_30502);

(statearr_30570_30610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (8))){
var inst_30476 = (state_30532[(13)]);
var inst_30475 = (state_30532[(15)]);
var inst_30478 = (inst_30476 < inst_30475);
var inst_30479 = inst_30478;
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30479)){
var statearr_30571_30611 = state_30532__$1;
(statearr_30571_30611[(1)] = (10));

} else {
var statearr_30572_30612 = state_30532__$1;
(statearr_30572_30612[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28665__auto___30584,mults,ensure_mult,p))
;
return ((function (switch__28553__auto__,c__28665__auto___30584,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_30532){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_30532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e30577){if((e30577 instanceof Object)){
var ex__28557__auto__ = e30577;
var statearr_30578_30613 = state_30532;
(statearr_30578_30613[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30614 = state_30532;
state_30532 = G__30614;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_30532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_30532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___30584,mults,ensure_mult,p))
})();
var state__28667__auto__ = (function (){var statearr_30579 = f__28666__auto__.call(null);
(statearr_30579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___30584);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___30584,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30615 = [];
var len__25923__auto___30618 = arguments.length;
var i__25924__auto___30619 = (0);
while(true){
if((i__25924__auto___30619 < len__25923__auto___30618)){
args30615.push((arguments[i__25924__auto___30619]));

var G__30620 = (i__25924__auto___30619 + (1));
i__25924__auto___30619 = G__30620;
continue;
} else {
}
break;
}

var G__30617 = args30615.length;
switch (G__30617) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30615.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30622 = [];
var len__25923__auto___30625 = arguments.length;
var i__25924__auto___30626 = (0);
while(true){
if((i__25924__auto___30626 < len__25923__auto___30625)){
args30622.push((arguments[i__25924__auto___30626]));

var G__30627 = (i__25924__auto___30626 + (1));
i__25924__auto___30626 = G__30627;
continue;
} else {
}
break;
}

var G__30624 = args30622.length;
switch (G__30624) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30622.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30629 = [];
var len__25923__auto___30700 = arguments.length;
var i__25924__auto___30701 = (0);
while(true){
if((i__25924__auto___30701 < len__25923__auto___30700)){
args30629.push((arguments[i__25924__auto___30701]));

var G__30702 = (i__25924__auto___30701 + (1));
i__25924__auto___30701 = G__30702;
continue;
} else {
}
break;
}

var G__30631 = args30629.length;
switch (G__30631) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30629.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28665__auto___30704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___30704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___30704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30670){
var state_val_30671 = (state_30670[(1)]);
if((state_val_30671 === (7))){
var state_30670__$1 = state_30670;
var statearr_30672_30705 = state_30670__$1;
(statearr_30672_30705[(2)] = null);

(statearr_30672_30705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (1))){
var state_30670__$1 = state_30670;
var statearr_30673_30706 = state_30670__$1;
(statearr_30673_30706[(2)] = null);

(statearr_30673_30706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (4))){
var inst_30634 = (state_30670[(7)]);
var inst_30636 = (inst_30634 < cnt);
var state_30670__$1 = state_30670;
if(cljs.core.truth_(inst_30636)){
var statearr_30674_30707 = state_30670__$1;
(statearr_30674_30707[(1)] = (6));

} else {
var statearr_30675_30708 = state_30670__$1;
(statearr_30675_30708[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (15))){
var inst_30666 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
var statearr_30676_30709 = state_30670__$1;
(statearr_30676_30709[(2)] = inst_30666);

(statearr_30676_30709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (13))){
var inst_30659 = cljs.core.async.close_BANG_.call(null,out);
var state_30670__$1 = state_30670;
var statearr_30677_30710 = state_30670__$1;
(statearr_30677_30710[(2)] = inst_30659);

(statearr_30677_30710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (6))){
var state_30670__$1 = state_30670;
var statearr_30678_30711 = state_30670__$1;
(statearr_30678_30711[(2)] = null);

(statearr_30678_30711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (3))){
var inst_30668 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30670__$1,inst_30668);
} else {
if((state_val_30671 === (12))){
var inst_30656 = (state_30670[(8)]);
var inst_30656__$1 = (state_30670[(2)]);
var inst_30657 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30656__$1);
var state_30670__$1 = (function (){var statearr_30679 = state_30670;
(statearr_30679[(8)] = inst_30656__$1);

return statearr_30679;
})();
if(cljs.core.truth_(inst_30657)){
var statearr_30680_30712 = state_30670__$1;
(statearr_30680_30712[(1)] = (13));

} else {
var statearr_30681_30713 = state_30670__$1;
(statearr_30681_30713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (2))){
var inst_30633 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30634 = (0);
var state_30670__$1 = (function (){var statearr_30682 = state_30670;
(statearr_30682[(9)] = inst_30633);

(statearr_30682[(7)] = inst_30634);

return statearr_30682;
})();
var statearr_30683_30714 = state_30670__$1;
(statearr_30683_30714[(2)] = null);

(statearr_30683_30714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (11))){
var inst_30634 = (state_30670[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30670,(10),Object,null,(9));
var inst_30643 = chs__$1.call(null,inst_30634);
var inst_30644 = done.call(null,inst_30634);
var inst_30645 = cljs.core.async.take_BANG_.call(null,inst_30643,inst_30644);
var state_30670__$1 = state_30670;
var statearr_30684_30715 = state_30670__$1;
(statearr_30684_30715[(2)] = inst_30645);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30670__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (9))){
var inst_30634 = (state_30670[(7)]);
var inst_30647 = (state_30670[(2)]);
var inst_30648 = (inst_30634 + (1));
var inst_30634__$1 = inst_30648;
var state_30670__$1 = (function (){var statearr_30685 = state_30670;
(statearr_30685[(10)] = inst_30647);

(statearr_30685[(7)] = inst_30634__$1);

return statearr_30685;
})();
var statearr_30686_30716 = state_30670__$1;
(statearr_30686_30716[(2)] = null);

(statearr_30686_30716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (5))){
var inst_30654 = (state_30670[(2)]);
var state_30670__$1 = (function (){var statearr_30687 = state_30670;
(statearr_30687[(11)] = inst_30654);

return statearr_30687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30670__$1,(12),dchan);
} else {
if((state_val_30671 === (14))){
var inst_30656 = (state_30670[(8)]);
var inst_30661 = cljs.core.apply.call(null,f,inst_30656);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30670__$1,(16),out,inst_30661);
} else {
if((state_val_30671 === (16))){
var inst_30663 = (state_30670[(2)]);
var state_30670__$1 = (function (){var statearr_30688 = state_30670;
(statearr_30688[(12)] = inst_30663);

return statearr_30688;
})();
var statearr_30689_30717 = state_30670__$1;
(statearr_30689_30717[(2)] = null);

(statearr_30689_30717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (10))){
var inst_30638 = (state_30670[(2)]);
var inst_30639 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30670__$1 = (function (){var statearr_30690 = state_30670;
(statearr_30690[(13)] = inst_30638);

return statearr_30690;
})();
var statearr_30691_30718 = state_30670__$1;
(statearr_30691_30718[(2)] = inst_30639);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30670__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (8))){
var inst_30652 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
var statearr_30692_30719 = state_30670__$1;
(statearr_30692_30719[(2)] = inst_30652);

(statearr_30692_30719[(1)] = (5));


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
});})(c__28665__auto___30704,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28553__auto__,c__28665__auto___30704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_30696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30696[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_30696[(1)] = (1));

return statearr_30696;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_30670){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_30670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e30697){if((e30697 instanceof Object)){
var ex__28557__auto__ = e30697;
var statearr_30698_30720 = state_30670;
(statearr_30698_30720[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30721 = state_30670;
state_30670 = G__30721;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_30670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_30670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___30704,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28667__auto__ = (function (){var statearr_30699 = f__28666__auto__.call(null);
(statearr_30699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___30704);

return statearr_30699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___30704,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30723 = [];
var len__25923__auto___30781 = arguments.length;
var i__25924__auto___30782 = (0);
while(true){
if((i__25924__auto___30782 < len__25923__auto___30781)){
args30723.push((arguments[i__25924__auto___30782]));

var G__30783 = (i__25924__auto___30782 + (1));
i__25924__auto___30782 = G__30783;
continue;
} else {
}
break;
}

var G__30725 = args30723.length;
switch (G__30725) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30723.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28665__auto___30785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___30785,out){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___30785,out){
return (function (state_30757){
var state_val_30758 = (state_30757[(1)]);
if((state_val_30758 === (7))){
var inst_30737 = (state_30757[(7)]);
var inst_30736 = (state_30757[(8)]);
var inst_30736__$1 = (state_30757[(2)]);
var inst_30737__$1 = cljs.core.nth.call(null,inst_30736__$1,(0),null);
var inst_30738 = cljs.core.nth.call(null,inst_30736__$1,(1),null);
var inst_30739 = (inst_30737__$1 == null);
var state_30757__$1 = (function (){var statearr_30759 = state_30757;
(statearr_30759[(7)] = inst_30737__$1);

(statearr_30759[(8)] = inst_30736__$1);

(statearr_30759[(9)] = inst_30738);

return statearr_30759;
})();
if(cljs.core.truth_(inst_30739)){
var statearr_30760_30786 = state_30757__$1;
(statearr_30760_30786[(1)] = (8));

} else {
var statearr_30761_30787 = state_30757__$1;
(statearr_30761_30787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (1))){
var inst_30726 = cljs.core.vec.call(null,chs);
var inst_30727 = inst_30726;
var state_30757__$1 = (function (){var statearr_30762 = state_30757;
(statearr_30762[(10)] = inst_30727);

return statearr_30762;
})();
var statearr_30763_30788 = state_30757__$1;
(statearr_30763_30788[(2)] = null);

(statearr_30763_30788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (4))){
var inst_30727 = (state_30757[(10)]);
var state_30757__$1 = state_30757;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30757__$1,(7),inst_30727);
} else {
if((state_val_30758 === (6))){
var inst_30753 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30764_30789 = state_30757__$1;
(statearr_30764_30789[(2)] = inst_30753);

(statearr_30764_30789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (3))){
var inst_30755 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30757__$1,inst_30755);
} else {
if((state_val_30758 === (2))){
var inst_30727 = (state_30757[(10)]);
var inst_30729 = cljs.core.count.call(null,inst_30727);
var inst_30730 = (inst_30729 > (0));
var state_30757__$1 = state_30757;
if(cljs.core.truth_(inst_30730)){
var statearr_30766_30790 = state_30757__$1;
(statearr_30766_30790[(1)] = (4));

} else {
var statearr_30767_30791 = state_30757__$1;
(statearr_30767_30791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (11))){
var inst_30727 = (state_30757[(10)]);
var inst_30746 = (state_30757[(2)]);
var tmp30765 = inst_30727;
var inst_30727__$1 = tmp30765;
var state_30757__$1 = (function (){var statearr_30768 = state_30757;
(statearr_30768[(11)] = inst_30746);

(statearr_30768[(10)] = inst_30727__$1);

return statearr_30768;
})();
var statearr_30769_30792 = state_30757__$1;
(statearr_30769_30792[(2)] = null);

(statearr_30769_30792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (9))){
var inst_30737 = (state_30757[(7)]);
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30757__$1,(11),out,inst_30737);
} else {
if((state_val_30758 === (5))){
var inst_30751 = cljs.core.async.close_BANG_.call(null,out);
var state_30757__$1 = state_30757;
var statearr_30770_30793 = state_30757__$1;
(statearr_30770_30793[(2)] = inst_30751);

(statearr_30770_30793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (10))){
var inst_30749 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30771_30794 = state_30757__$1;
(statearr_30771_30794[(2)] = inst_30749);

(statearr_30771_30794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (8))){
var inst_30737 = (state_30757[(7)]);
var inst_30736 = (state_30757[(8)]);
var inst_30727 = (state_30757[(10)]);
var inst_30738 = (state_30757[(9)]);
var inst_30741 = (function (){var cs = inst_30727;
var vec__30732 = inst_30736;
var v = inst_30737;
var c = inst_30738;
return ((function (cs,vec__30732,v,c,inst_30737,inst_30736,inst_30727,inst_30738,state_val_30758,c__28665__auto___30785,out){
return (function (p1__30722_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30722_SHARP_);
});
;})(cs,vec__30732,v,c,inst_30737,inst_30736,inst_30727,inst_30738,state_val_30758,c__28665__auto___30785,out))
})();
var inst_30742 = cljs.core.filterv.call(null,inst_30741,inst_30727);
var inst_30727__$1 = inst_30742;
var state_30757__$1 = (function (){var statearr_30772 = state_30757;
(statearr_30772[(10)] = inst_30727__$1);

return statearr_30772;
})();
var statearr_30773_30795 = state_30757__$1;
(statearr_30773_30795[(2)] = null);

(statearr_30773_30795[(1)] = (2));


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
});})(c__28665__auto___30785,out))
;
return ((function (switch__28553__auto__,c__28665__auto___30785,out){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_30777 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30777[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_30777[(1)] = (1));

return statearr_30777;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_30757){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_30757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e30778){if((e30778 instanceof Object)){
var ex__28557__auto__ = e30778;
var statearr_30779_30796 = state_30757;
(statearr_30779_30796[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30797 = state_30757;
state_30757 = G__30797;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_30757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_30757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___30785,out))
})();
var state__28667__auto__ = (function (){var statearr_30780 = f__28666__auto__.call(null);
(statearr_30780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___30785);

return statearr_30780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___30785,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30798 = [];
var len__25923__auto___30847 = arguments.length;
var i__25924__auto___30848 = (0);
while(true){
if((i__25924__auto___30848 < len__25923__auto___30847)){
args30798.push((arguments[i__25924__auto___30848]));

var G__30849 = (i__25924__auto___30848 + (1));
i__25924__auto___30848 = G__30849;
continue;
} else {
}
break;
}

var G__30800 = args30798.length;
switch (G__30800) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30798.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28665__auto___30851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___30851,out){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___30851,out){
return (function (state_30824){
var state_val_30825 = (state_30824[(1)]);
if((state_val_30825 === (7))){
var inst_30806 = (state_30824[(7)]);
var inst_30806__$1 = (state_30824[(2)]);
var inst_30807 = (inst_30806__$1 == null);
var inst_30808 = cljs.core.not.call(null,inst_30807);
var state_30824__$1 = (function (){var statearr_30826 = state_30824;
(statearr_30826[(7)] = inst_30806__$1);

return statearr_30826;
})();
if(inst_30808){
var statearr_30827_30852 = state_30824__$1;
(statearr_30827_30852[(1)] = (8));

} else {
var statearr_30828_30853 = state_30824__$1;
(statearr_30828_30853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (1))){
var inst_30801 = (0);
var state_30824__$1 = (function (){var statearr_30829 = state_30824;
(statearr_30829[(8)] = inst_30801);

return statearr_30829;
})();
var statearr_30830_30854 = state_30824__$1;
(statearr_30830_30854[(2)] = null);

(statearr_30830_30854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (4))){
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30824__$1,(7),ch);
} else {
if((state_val_30825 === (6))){
var inst_30819 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30831_30855 = state_30824__$1;
(statearr_30831_30855[(2)] = inst_30819);

(statearr_30831_30855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (3))){
var inst_30821 = (state_30824[(2)]);
var inst_30822 = cljs.core.async.close_BANG_.call(null,out);
var state_30824__$1 = (function (){var statearr_30832 = state_30824;
(statearr_30832[(9)] = inst_30821);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30824__$1,inst_30822);
} else {
if((state_val_30825 === (2))){
var inst_30801 = (state_30824[(8)]);
var inst_30803 = (inst_30801 < n);
var state_30824__$1 = state_30824;
if(cljs.core.truth_(inst_30803)){
var statearr_30833_30856 = state_30824__$1;
(statearr_30833_30856[(1)] = (4));

} else {
var statearr_30834_30857 = state_30824__$1;
(statearr_30834_30857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (11))){
var inst_30801 = (state_30824[(8)]);
var inst_30811 = (state_30824[(2)]);
var inst_30812 = (inst_30801 + (1));
var inst_30801__$1 = inst_30812;
var state_30824__$1 = (function (){var statearr_30835 = state_30824;
(statearr_30835[(10)] = inst_30811);

(statearr_30835[(8)] = inst_30801__$1);

return statearr_30835;
})();
var statearr_30836_30858 = state_30824__$1;
(statearr_30836_30858[(2)] = null);

(statearr_30836_30858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (9))){
var state_30824__$1 = state_30824;
var statearr_30837_30859 = state_30824__$1;
(statearr_30837_30859[(2)] = null);

(statearr_30837_30859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (5))){
var state_30824__$1 = state_30824;
var statearr_30838_30860 = state_30824__$1;
(statearr_30838_30860[(2)] = null);

(statearr_30838_30860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (10))){
var inst_30816 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30839_30861 = state_30824__$1;
(statearr_30839_30861[(2)] = inst_30816);

(statearr_30839_30861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (8))){
var inst_30806 = (state_30824[(7)]);
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30824__$1,(11),out,inst_30806);
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
});})(c__28665__auto___30851,out))
;
return ((function (switch__28553__auto__,c__28665__auto___30851,out){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_30843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30843[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_30843[(1)] = (1));

return statearr_30843;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_30824){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_30824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e30844){if((e30844 instanceof Object)){
var ex__28557__auto__ = e30844;
var statearr_30845_30862 = state_30824;
(statearr_30845_30862[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30863 = state_30824;
state_30824 = G__30863;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_30824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_30824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___30851,out))
})();
var state__28667__auto__ = (function (){var statearr_30846 = f__28666__auto__.call(null);
(statearr_30846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___30851);

return statearr_30846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___30851,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30871 = (function (map_LT_,f,ch,meta30872){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30872 = meta30872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30873,meta30872__$1){
var self__ = this;
var _30873__$1 = this;
return (new cljs.core.async.t_cljs$core$async30871(self__.map_LT_,self__.f,self__.ch,meta30872__$1));
});

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30873){
var self__ = this;
var _30873__$1 = this;
return self__.meta30872;
});

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30874 = (function (map_LT_,f,ch,meta30872,_,fn1,meta30875){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30872 = meta30872;
this._ = _;
this.fn1 = fn1;
this.meta30875 = meta30875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30876,meta30875__$1){
var self__ = this;
var _30876__$1 = this;
return (new cljs.core.async.t_cljs$core$async30874(self__.map_LT_,self__.f,self__.ch,self__.meta30872,self__._,self__.fn1,meta30875__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30876){
var self__ = this;
var _30876__$1 = this;
return self__.meta30875;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30874.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30874.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30864_SHARP_){
return f1.call(null,(((p1__30864_SHARP_ == null))?null:self__.f.call(null,p1__30864_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30874.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30872","meta30872",1029820285,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30871","cljs.core.async/t_cljs$core$async30871",822388449,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30875","meta30875",-1196137195,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30874";

cljs.core.async.t_cljs$core$async30874.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30874");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30874 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30874(map_LT___$1,f__$1,ch__$1,meta30872__$1,___$2,fn1__$1,meta30875){
return (new cljs.core.async.t_cljs$core$async30874(map_LT___$1,f__$1,ch__$1,meta30872__$1,___$2,fn1__$1,meta30875));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30874(self__.map_LT_,self__.f,self__.ch,self__.meta30872,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24836__auto__ = ret;
if(cljs.core.truth_(and__24836__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24836__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30872","meta30872",1029820285,null)], null);
});

cljs.core.async.t_cljs$core$async30871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30871";

cljs.core.async.t_cljs$core$async30871.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30871");
});

cljs.core.async.__GT_t_cljs$core$async30871 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30871(map_LT___$1,f__$1,ch__$1,meta30872){
return (new cljs.core.async.t_cljs$core$async30871(map_LT___$1,f__$1,ch__$1,meta30872));
});

}

return (new cljs.core.async.t_cljs$core$async30871(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30880 = (function (map_GT_,f,ch,meta30881){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30881 = meta30881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30882,meta30881__$1){
var self__ = this;
var _30882__$1 = this;
return (new cljs.core.async.t_cljs$core$async30880(self__.map_GT_,self__.f,self__.ch,meta30881__$1));
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30882){
var self__ = this;
var _30882__$1 = this;
return self__.meta30881;
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30881","meta30881",553961452,null)], null);
});

cljs.core.async.t_cljs$core$async30880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30880";

cljs.core.async.t_cljs$core$async30880.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30880");
});

cljs.core.async.__GT_t_cljs$core$async30880 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30880(map_GT___$1,f__$1,ch__$1,meta30881){
return (new cljs.core.async.t_cljs$core$async30880(map_GT___$1,f__$1,ch__$1,meta30881));
});

}

return (new cljs.core.async.t_cljs$core$async30880(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30886 = (function (filter_GT_,p,ch,meta30887){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30887 = meta30887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30888,meta30887__$1){
var self__ = this;
var _30888__$1 = this;
return (new cljs.core.async.t_cljs$core$async30886(self__.filter_GT_,self__.p,self__.ch,meta30887__$1));
});

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30888){
var self__ = this;
var _30888__$1 = this;
return self__.meta30887;
});

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30887","meta30887",1611802753,null)], null);
});

cljs.core.async.t_cljs$core$async30886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30886";

cljs.core.async.t_cljs$core$async30886.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30886");
});

cljs.core.async.__GT_t_cljs$core$async30886 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30886(filter_GT___$1,p__$1,ch__$1,meta30887){
return (new cljs.core.async.t_cljs$core$async30886(filter_GT___$1,p__$1,ch__$1,meta30887));
});

}

return (new cljs.core.async.t_cljs$core$async30886(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30889 = [];
var len__25923__auto___30933 = arguments.length;
var i__25924__auto___30934 = (0);
while(true){
if((i__25924__auto___30934 < len__25923__auto___30933)){
args30889.push((arguments[i__25924__auto___30934]));

var G__30935 = (i__25924__auto___30934 + (1));
i__25924__auto___30934 = G__30935;
continue;
} else {
}
break;
}

var G__30891 = args30889.length;
switch (G__30891) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30889.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28665__auto___30937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___30937,out){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___30937,out){
return (function (state_30912){
var state_val_30913 = (state_30912[(1)]);
if((state_val_30913 === (7))){
var inst_30908 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30914_30938 = state_30912__$1;
(statearr_30914_30938[(2)] = inst_30908);

(statearr_30914_30938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (1))){
var state_30912__$1 = state_30912;
var statearr_30915_30939 = state_30912__$1;
(statearr_30915_30939[(2)] = null);

(statearr_30915_30939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (4))){
var inst_30894 = (state_30912[(7)]);
var inst_30894__$1 = (state_30912[(2)]);
var inst_30895 = (inst_30894__$1 == null);
var state_30912__$1 = (function (){var statearr_30916 = state_30912;
(statearr_30916[(7)] = inst_30894__$1);

return statearr_30916;
})();
if(cljs.core.truth_(inst_30895)){
var statearr_30917_30940 = state_30912__$1;
(statearr_30917_30940[(1)] = (5));

} else {
var statearr_30918_30941 = state_30912__$1;
(statearr_30918_30941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (6))){
var inst_30894 = (state_30912[(7)]);
var inst_30899 = p.call(null,inst_30894);
var state_30912__$1 = state_30912;
if(cljs.core.truth_(inst_30899)){
var statearr_30919_30942 = state_30912__$1;
(statearr_30919_30942[(1)] = (8));

} else {
var statearr_30920_30943 = state_30912__$1;
(statearr_30920_30943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (3))){
var inst_30910 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30912__$1,inst_30910);
} else {
if((state_val_30913 === (2))){
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30912__$1,(4),ch);
} else {
if((state_val_30913 === (11))){
var inst_30902 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30921_30944 = state_30912__$1;
(statearr_30921_30944[(2)] = inst_30902);

(statearr_30921_30944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (9))){
var state_30912__$1 = state_30912;
var statearr_30922_30945 = state_30912__$1;
(statearr_30922_30945[(2)] = null);

(statearr_30922_30945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (5))){
var inst_30897 = cljs.core.async.close_BANG_.call(null,out);
var state_30912__$1 = state_30912;
var statearr_30923_30946 = state_30912__$1;
(statearr_30923_30946[(2)] = inst_30897);

(statearr_30923_30946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (10))){
var inst_30905 = (state_30912[(2)]);
var state_30912__$1 = (function (){var statearr_30924 = state_30912;
(statearr_30924[(8)] = inst_30905);

return statearr_30924;
})();
var statearr_30925_30947 = state_30912__$1;
(statearr_30925_30947[(2)] = null);

(statearr_30925_30947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30913 === (8))){
var inst_30894 = (state_30912[(7)]);
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30912__$1,(11),out,inst_30894);
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
});})(c__28665__auto___30937,out))
;
return ((function (switch__28553__auto__,c__28665__auto___30937,out){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_30929 = [null,null,null,null,null,null,null,null,null];
(statearr_30929[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_30929[(1)] = (1));

return statearr_30929;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_30912){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_30912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e30930){if((e30930 instanceof Object)){
var ex__28557__auto__ = e30930;
var statearr_30931_30948 = state_30912;
(statearr_30931_30948[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30949 = state_30912;
state_30912 = G__30949;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_30912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_30912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___30937,out))
})();
var state__28667__auto__ = (function (){var statearr_30932 = f__28666__auto__.call(null);
(statearr_30932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___30937);

return statearr_30932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___30937,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30950 = [];
var len__25923__auto___30953 = arguments.length;
var i__25924__auto___30954 = (0);
while(true){
if((i__25924__auto___30954 < len__25923__auto___30953)){
args30950.push((arguments[i__25924__auto___30954]));

var G__30955 = (i__25924__auto___30954 + (1));
i__25924__auto___30954 = G__30955;
continue;
} else {
}
break;
}

var G__30952 = args30950.length;
switch (G__30952) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30950.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto__){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto__){
return (function (state_31122){
var state_val_31123 = (state_31122[(1)]);
if((state_val_31123 === (7))){
var inst_31118 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
var statearr_31124_31165 = state_31122__$1;
(statearr_31124_31165[(2)] = inst_31118);

(statearr_31124_31165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (20))){
var inst_31088 = (state_31122[(7)]);
var inst_31099 = (state_31122[(2)]);
var inst_31100 = cljs.core.next.call(null,inst_31088);
var inst_31074 = inst_31100;
var inst_31075 = null;
var inst_31076 = (0);
var inst_31077 = (0);
var state_31122__$1 = (function (){var statearr_31125 = state_31122;
(statearr_31125[(8)] = inst_31076);

(statearr_31125[(9)] = inst_31077);

(statearr_31125[(10)] = inst_31074);

(statearr_31125[(11)] = inst_31099);

(statearr_31125[(12)] = inst_31075);

return statearr_31125;
})();
var statearr_31126_31166 = state_31122__$1;
(statearr_31126_31166[(2)] = null);

(statearr_31126_31166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (1))){
var state_31122__$1 = state_31122;
var statearr_31127_31167 = state_31122__$1;
(statearr_31127_31167[(2)] = null);

(statearr_31127_31167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (4))){
var inst_31063 = (state_31122[(13)]);
var inst_31063__$1 = (state_31122[(2)]);
var inst_31064 = (inst_31063__$1 == null);
var state_31122__$1 = (function (){var statearr_31128 = state_31122;
(statearr_31128[(13)] = inst_31063__$1);

return statearr_31128;
})();
if(cljs.core.truth_(inst_31064)){
var statearr_31129_31168 = state_31122__$1;
(statearr_31129_31168[(1)] = (5));

} else {
var statearr_31130_31169 = state_31122__$1;
(statearr_31130_31169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (15))){
var state_31122__$1 = state_31122;
var statearr_31134_31170 = state_31122__$1;
(statearr_31134_31170[(2)] = null);

(statearr_31134_31170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (21))){
var state_31122__$1 = state_31122;
var statearr_31135_31171 = state_31122__$1;
(statearr_31135_31171[(2)] = null);

(statearr_31135_31171[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (13))){
var inst_31076 = (state_31122[(8)]);
var inst_31077 = (state_31122[(9)]);
var inst_31074 = (state_31122[(10)]);
var inst_31075 = (state_31122[(12)]);
var inst_31084 = (state_31122[(2)]);
var inst_31085 = (inst_31077 + (1));
var tmp31131 = inst_31076;
var tmp31132 = inst_31074;
var tmp31133 = inst_31075;
var inst_31074__$1 = tmp31132;
var inst_31075__$1 = tmp31133;
var inst_31076__$1 = tmp31131;
var inst_31077__$1 = inst_31085;
var state_31122__$1 = (function (){var statearr_31136 = state_31122;
(statearr_31136[(14)] = inst_31084);

(statearr_31136[(8)] = inst_31076__$1);

(statearr_31136[(9)] = inst_31077__$1);

(statearr_31136[(10)] = inst_31074__$1);

(statearr_31136[(12)] = inst_31075__$1);

return statearr_31136;
})();
var statearr_31137_31172 = state_31122__$1;
(statearr_31137_31172[(2)] = null);

(statearr_31137_31172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (22))){
var state_31122__$1 = state_31122;
var statearr_31138_31173 = state_31122__$1;
(statearr_31138_31173[(2)] = null);

(statearr_31138_31173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (6))){
var inst_31063 = (state_31122[(13)]);
var inst_31072 = f.call(null,inst_31063);
var inst_31073 = cljs.core.seq.call(null,inst_31072);
var inst_31074 = inst_31073;
var inst_31075 = null;
var inst_31076 = (0);
var inst_31077 = (0);
var state_31122__$1 = (function (){var statearr_31139 = state_31122;
(statearr_31139[(8)] = inst_31076);

(statearr_31139[(9)] = inst_31077);

(statearr_31139[(10)] = inst_31074);

(statearr_31139[(12)] = inst_31075);

return statearr_31139;
})();
var statearr_31140_31174 = state_31122__$1;
(statearr_31140_31174[(2)] = null);

(statearr_31140_31174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (17))){
var inst_31088 = (state_31122[(7)]);
var inst_31092 = cljs.core.chunk_first.call(null,inst_31088);
var inst_31093 = cljs.core.chunk_rest.call(null,inst_31088);
var inst_31094 = cljs.core.count.call(null,inst_31092);
var inst_31074 = inst_31093;
var inst_31075 = inst_31092;
var inst_31076 = inst_31094;
var inst_31077 = (0);
var state_31122__$1 = (function (){var statearr_31141 = state_31122;
(statearr_31141[(8)] = inst_31076);

(statearr_31141[(9)] = inst_31077);

(statearr_31141[(10)] = inst_31074);

(statearr_31141[(12)] = inst_31075);

return statearr_31141;
})();
var statearr_31142_31175 = state_31122__$1;
(statearr_31142_31175[(2)] = null);

(statearr_31142_31175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (3))){
var inst_31120 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31122__$1,inst_31120);
} else {
if((state_val_31123 === (12))){
var inst_31108 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
var statearr_31143_31176 = state_31122__$1;
(statearr_31143_31176[(2)] = inst_31108);

(statearr_31143_31176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (2))){
var state_31122__$1 = state_31122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31122__$1,(4),in$);
} else {
if((state_val_31123 === (23))){
var inst_31116 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
var statearr_31144_31177 = state_31122__$1;
(statearr_31144_31177[(2)] = inst_31116);

(statearr_31144_31177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (19))){
var inst_31103 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
var statearr_31145_31178 = state_31122__$1;
(statearr_31145_31178[(2)] = inst_31103);

(statearr_31145_31178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (11))){
var inst_31088 = (state_31122[(7)]);
var inst_31074 = (state_31122[(10)]);
var inst_31088__$1 = cljs.core.seq.call(null,inst_31074);
var state_31122__$1 = (function (){var statearr_31146 = state_31122;
(statearr_31146[(7)] = inst_31088__$1);

return statearr_31146;
})();
if(inst_31088__$1){
var statearr_31147_31179 = state_31122__$1;
(statearr_31147_31179[(1)] = (14));

} else {
var statearr_31148_31180 = state_31122__$1;
(statearr_31148_31180[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (9))){
var inst_31110 = (state_31122[(2)]);
var inst_31111 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31122__$1 = (function (){var statearr_31149 = state_31122;
(statearr_31149[(15)] = inst_31110);

return statearr_31149;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31150_31181 = state_31122__$1;
(statearr_31150_31181[(1)] = (21));

} else {
var statearr_31151_31182 = state_31122__$1;
(statearr_31151_31182[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (5))){
var inst_31066 = cljs.core.async.close_BANG_.call(null,out);
var state_31122__$1 = state_31122;
var statearr_31152_31183 = state_31122__$1;
(statearr_31152_31183[(2)] = inst_31066);

(statearr_31152_31183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (14))){
var inst_31088 = (state_31122[(7)]);
var inst_31090 = cljs.core.chunked_seq_QMARK_.call(null,inst_31088);
var state_31122__$1 = state_31122;
if(inst_31090){
var statearr_31153_31184 = state_31122__$1;
(statearr_31153_31184[(1)] = (17));

} else {
var statearr_31154_31185 = state_31122__$1;
(statearr_31154_31185[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (16))){
var inst_31106 = (state_31122[(2)]);
var state_31122__$1 = state_31122;
var statearr_31155_31186 = state_31122__$1;
(statearr_31155_31186[(2)] = inst_31106);

(statearr_31155_31186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31123 === (10))){
var inst_31077 = (state_31122[(9)]);
var inst_31075 = (state_31122[(12)]);
var inst_31082 = cljs.core._nth.call(null,inst_31075,inst_31077);
var state_31122__$1 = state_31122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31122__$1,(13),out,inst_31082);
} else {
if((state_val_31123 === (18))){
var inst_31088 = (state_31122[(7)]);
var inst_31097 = cljs.core.first.call(null,inst_31088);
var state_31122__$1 = state_31122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31122__$1,(20),out,inst_31097);
} else {
if((state_val_31123 === (8))){
var inst_31076 = (state_31122[(8)]);
var inst_31077 = (state_31122[(9)]);
var inst_31079 = (inst_31077 < inst_31076);
var inst_31080 = inst_31079;
var state_31122__$1 = state_31122;
if(cljs.core.truth_(inst_31080)){
var statearr_31156_31187 = state_31122__$1;
(statearr_31156_31187[(1)] = (10));

} else {
var statearr_31157_31188 = state_31122__$1;
(statearr_31157_31188[(1)] = (11));

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
}
}
}
}
}
}
});})(c__28665__auto__))
;
return ((function (switch__28553__auto__,c__28665__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28554__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28554__auto____0 = (function (){
var statearr_31161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31161[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28554__auto__);

(statearr_31161[(1)] = (1));

return statearr_31161;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28554__auto____1 = (function (state_31122){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_31122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e31162){if((e31162 instanceof Object)){
var ex__28557__auto__ = e31162;
var statearr_31163_31189 = state_31122;
(statearr_31163_31189[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31190 = state_31122;
state_31122 = G__31190;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28554__auto__ = function(state_31122){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28554__auto____1.call(this,state_31122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28554__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28554__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto__))
})();
var state__28667__auto__ = (function (){var statearr_31164 = f__28666__auto__.call(null);
(statearr_31164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto__);

return statearr_31164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto__))
);

return c__28665__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31191 = [];
var len__25923__auto___31194 = arguments.length;
var i__25924__auto___31195 = (0);
while(true){
if((i__25924__auto___31195 < len__25923__auto___31194)){
args31191.push((arguments[i__25924__auto___31195]));

var G__31196 = (i__25924__auto___31195 + (1));
i__25924__auto___31195 = G__31196;
continue;
} else {
}
break;
}

var G__31193 = args31191.length;
switch (G__31193) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31191.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31198 = [];
var len__25923__auto___31201 = arguments.length;
var i__25924__auto___31202 = (0);
while(true){
if((i__25924__auto___31202 < len__25923__auto___31201)){
args31198.push((arguments[i__25924__auto___31202]));

var G__31203 = (i__25924__auto___31202 + (1));
i__25924__auto___31202 = G__31203;
continue;
} else {
}
break;
}

var G__31200 = args31198.length;
switch (G__31200) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31198.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31205 = [];
var len__25923__auto___31256 = arguments.length;
var i__25924__auto___31257 = (0);
while(true){
if((i__25924__auto___31257 < len__25923__auto___31256)){
args31205.push((arguments[i__25924__auto___31257]));

var G__31258 = (i__25924__auto___31257 + (1));
i__25924__auto___31257 = G__31258;
continue;
} else {
}
break;
}

var G__31207 = args31205.length;
switch (G__31207) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31205.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28665__auto___31260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___31260,out){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___31260,out){
return (function (state_31231){
var state_val_31232 = (state_31231[(1)]);
if((state_val_31232 === (7))){
var inst_31226 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31233_31261 = state_31231__$1;
(statearr_31233_31261[(2)] = inst_31226);

(statearr_31233_31261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (1))){
var inst_31208 = null;
var state_31231__$1 = (function (){var statearr_31234 = state_31231;
(statearr_31234[(7)] = inst_31208);

return statearr_31234;
})();
var statearr_31235_31262 = state_31231__$1;
(statearr_31235_31262[(2)] = null);

(statearr_31235_31262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (4))){
var inst_31211 = (state_31231[(8)]);
var inst_31211__$1 = (state_31231[(2)]);
var inst_31212 = (inst_31211__$1 == null);
var inst_31213 = cljs.core.not.call(null,inst_31212);
var state_31231__$1 = (function (){var statearr_31236 = state_31231;
(statearr_31236[(8)] = inst_31211__$1);

return statearr_31236;
})();
if(inst_31213){
var statearr_31237_31263 = state_31231__$1;
(statearr_31237_31263[(1)] = (5));

} else {
var statearr_31238_31264 = state_31231__$1;
(statearr_31238_31264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (6))){
var state_31231__$1 = state_31231;
var statearr_31239_31265 = state_31231__$1;
(statearr_31239_31265[(2)] = null);

(statearr_31239_31265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (3))){
var inst_31228 = (state_31231[(2)]);
var inst_31229 = cljs.core.async.close_BANG_.call(null,out);
var state_31231__$1 = (function (){var statearr_31240 = state_31231;
(statearr_31240[(9)] = inst_31228);

return statearr_31240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31231__$1,inst_31229);
} else {
if((state_val_31232 === (2))){
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31231__$1,(4),ch);
} else {
if((state_val_31232 === (11))){
var inst_31211 = (state_31231[(8)]);
var inst_31220 = (state_31231[(2)]);
var inst_31208 = inst_31211;
var state_31231__$1 = (function (){var statearr_31241 = state_31231;
(statearr_31241[(10)] = inst_31220);

(statearr_31241[(7)] = inst_31208);

return statearr_31241;
})();
var statearr_31242_31266 = state_31231__$1;
(statearr_31242_31266[(2)] = null);

(statearr_31242_31266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (9))){
var inst_31211 = (state_31231[(8)]);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31231__$1,(11),out,inst_31211);
} else {
if((state_val_31232 === (5))){
var inst_31208 = (state_31231[(7)]);
var inst_31211 = (state_31231[(8)]);
var inst_31215 = cljs.core._EQ_.call(null,inst_31211,inst_31208);
var state_31231__$1 = state_31231;
if(inst_31215){
var statearr_31244_31267 = state_31231__$1;
(statearr_31244_31267[(1)] = (8));

} else {
var statearr_31245_31268 = state_31231__$1;
(statearr_31245_31268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (10))){
var inst_31223 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31246_31269 = state_31231__$1;
(statearr_31246_31269[(2)] = inst_31223);

(statearr_31246_31269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (8))){
var inst_31208 = (state_31231[(7)]);
var tmp31243 = inst_31208;
var inst_31208__$1 = tmp31243;
var state_31231__$1 = (function (){var statearr_31247 = state_31231;
(statearr_31247[(7)] = inst_31208__$1);

return statearr_31247;
})();
var statearr_31248_31270 = state_31231__$1;
(statearr_31248_31270[(2)] = null);

(statearr_31248_31270[(1)] = (2));


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
});})(c__28665__auto___31260,out))
;
return ((function (switch__28553__auto__,c__28665__auto___31260,out){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_31252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31252[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_31252[(1)] = (1));

return statearr_31252;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_31231){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_31231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e31253){if((e31253 instanceof Object)){
var ex__28557__auto__ = e31253;
var statearr_31254_31271 = state_31231;
(statearr_31254_31271[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31272 = state_31231;
state_31231 = G__31272;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_31231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_31231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___31260,out))
})();
var state__28667__auto__ = (function (){var statearr_31255 = f__28666__auto__.call(null);
(statearr_31255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___31260);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___31260,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31273 = [];
var len__25923__auto___31343 = arguments.length;
var i__25924__auto___31344 = (0);
while(true){
if((i__25924__auto___31344 < len__25923__auto___31343)){
args31273.push((arguments[i__25924__auto___31344]));

var G__31345 = (i__25924__auto___31344 + (1));
i__25924__auto___31344 = G__31345;
continue;
} else {
}
break;
}

var G__31275 = args31273.length;
switch (G__31275) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31273.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28665__auto___31347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___31347,out){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___31347,out){
return (function (state_31313){
var state_val_31314 = (state_31313[(1)]);
if((state_val_31314 === (7))){
var inst_31309 = (state_31313[(2)]);
var state_31313__$1 = state_31313;
var statearr_31315_31348 = state_31313__$1;
(statearr_31315_31348[(2)] = inst_31309);

(statearr_31315_31348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (1))){
var inst_31276 = (new Array(n));
var inst_31277 = inst_31276;
var inst_31278 = (0);
var state_31313__$1 = (function (){var statearr_31316 = state_31313;
(statearr_31316[(7)] = inst_31277);

(statearr_31316[(8)] = inst_31278);

return statearr_31316;
})();
var statearr_31317_31349 = state_31313__$1;
(statearr_31317_31349[(2)] = null);

(statearr_31317_31349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (4))){
var inst_31281 = (state_31313[(9)]);
var inst_31281__$1 = (state_31313[(2)]);
var inst_31282 = (inst_31281__$1 == null);
var inst_31283 = cljs.core.not.call(null,inst_31282);
var state_31313__$1 = (function (){var statearr_31318 = state_31313;
(statearr_31318[(9)] = inst_31281__$1);

return statearr_31318;
})();
if(inst_31283){
var statearr_31319_31350 = state_31313__$1;
(statearr_31319_31350[(1)] = (5));

} else {
var statearr_31320_31351 = state_31313__$1;
(statearr_31320_31351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (15))){
var inst_31303 = (state_31313[(2)]);
var state_31313__$1 = state_31313;
var statearr_31321_31352 = state_31313__$1;
(statearr_31321_31352[(2)] = inst_31303);

(statearr_31321_31352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (13))){
var state_31313__$1 = state_31313;
var statearr_31322_31353 = state_31313__$1;
(statearr_31322_31353[(2)] = null);

(statearr_31322_31353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (6))){
var inst_31278 = (state_31313[(8)]);
var inst_31299 = (inst_31278 > (0));
var state_31313__$1 = state_31313;
if(cljs.core.truth_(inst_31299)){
var statearr_31323_31354 = state_31313__$1;
(statearr_31323_31354[(1)] = (12));

} else {
var statearr_31324_31355 = state_31313__$1;
(statearr_31324_31355[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (3))){
var inst_31311 = (state_31313[(2)]);
var state_31313__$1 = state_31313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31313__$1,inst_31311);
} else {
if((state_val_31314 === (12))){
var inst_31277 = (state_31313[(7)]);
var inst_31301 = cljs.core.vec.call(null,inst_31277);
var state_31313__$1 = state_31313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31313__$1,(15),out,inst_31301);
} else {
if((state_val_31314 === (2))){
var state_31313__$1 = state_31313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31313__$1,(4),ch);
} else {
if((state_val_31314 === (11))){
var inst_31293 = (state_31313[(2)]);
var inst_31294 = (new Array(n));
var inst_31277 = inst_31294;
var inst_31278 = (0);
var state_31313__$1 = (function (){var statearr_31325 = state_31313;
(statearr_31325[(7)] = inst_31277);

(statearr_31325[(8)] = inst_31278);

(statearr_31325[(10)] = inst_31293);

return statearr_31325;
})();
var statearr_31326_31356 = state_31313__$1;
(statearr_31326_31356[(2)] = null);

(statearr_31326_31356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (9))){
var inst_31277 = (state_31313[(7)]);
var inst_31291 = cljs.core.vec.call(null,inst_31277);
var state_31313__$1 = state_31313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31313__$1,(11),out,inst_31291);
} else {
if((state_val_31314 === (5))){
var inst_31277 = (state_31313[(7)]);
var inst_31281 = (state_31313[(9)]);
var inst_31278 = (state_31313[(8)]);
var inst_31286 = (state_31313[(11)]);
var inst_31285 = (inst_31277[inst_31278] = inst_31281);
var inst_31286__$1 = (inst_31278 + (1));
var inst_31287 = (inst_31286__$1 < n);
var state_31313__$1 = (function (){var statearr_31327 = state_31313;
(statearr_31327[(12)] = inst_31285);

(statearr_31327[(11)] = inst_31286__$1);

return statearr_31327;
})();
if(cljs.core.truth_(inst_31287)){
var statearr_31328_31357 = state_31313__$1;
(statearr_31328_31357[(1)] = (8));

} else {
var statearr_31329_31358 = state_31313__$1;
(statearr_31329_31358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (14))){
var inst_31306 = (state_31313[(2)]);
var inst_31307 = cljs.core.async.close_BANG_.call(null,out);
var state_31313__$1 = (function (){var statearr_31331 = state_31313;
(statearr_31331[(13)] = inst_31306);

return statearr_31331;
})();
var statearr_31332_31359 = state_31313__$1;
(statearr_31332_31359[(2)] = inst_31307);

(statearr_31332_31359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (10))){
var inst_31297 = (state_31313[(2)]);
var state_31313__$1 = state_31313;
var statearr_31333_31360 = state_31313__$1;
(statearr_31333_31360[(2)] = inst_31297);

(statearr_31333_31360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31314 === (8))){
var inst_31277 = (state_31313[(7)]);
var inst_31286 = (state_31313[(11)]);
var tmp31330 = inst_31277;
var inst_31277__$1 = tmp31330;
var inst_31278 = inst_31286;
var state_31313__$1 = (function (){var statearr_31334 = state_31313;
(statearr_31334[(7)] = inst_31277__$1);

(statearr_31334[(8)] = inst_31278);

return statearr_31334;
})();
var statearr_31335_31361 = state_31313__$1;
(statearr_31335_31361[(2)] = null);

(statearr_31335_31361[(1)] = (2));


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
});})(c__28665__auto___31347,out))
;
return ((function (switch__28553__auto__,c__28665__auto___31347,out){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_31339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31339[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_31339[(1)] = (1));

return statearr_31339;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_31313){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_31313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e31340){if((e31340 instanceof Object)){
var ex__28557__auto__ = e31340;
var statearr_31341_31362 = state_31313;
(statearr_31341_31362[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31363 = state_31313;
state_31313 = G__31363;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_31313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_31313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___31347,out))
})();
var state__28667__auto__ = (function (){var statearr_31342 = f__28666__auto__.call(null);
(statearr_31342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___31347);

return statearr_31342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___31347,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31364 = [];
var len__25923__auto___31438 = arguments.length;
var i__25924__auto___31439 = (0);
while(true){
if((i__25924__auto___31439 < len__25923__auto___31438)){
args31364.push((arguments[i__25924__auto___31439]));

var G__31440 = (i__25924__auto___31439 + (1));
i__25924__auto___31439 = G__31440;
continue;
} else {
}
break;
}

var G__31366 = args31364.length;
switch (G__31366) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31364.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28665__auto___31442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28665__auto___31442,out){
return (function (){
var f__28666__auto__ = (function (){var switch__28553__auto__ = ((function (c__28665__auto___31442,out){
return (function (state_31408){
var state_val_31409 = (state_31408[(1)]);
if((state_val_31409 === (7))){
var inst_31404 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31410_31443 = state_31408__$1;
(statearr_31410_31443[(2)] = inst_31404);

(statearr_31410_31443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (1))){
var inst_31367 = [];
var inst_31368 = inst_31367;
var inst_31369 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31408__$1 = (function (){var statearr_31411 = state_31408;
(statearr_31411[(7)] = inst_31369);

(statearr_31411[(8)] = inst_31368);

return statearr_31411;
})();
var statearr_31412_31444 = state_31408__$1;
(statearr_31412_31444[(2)] = null);

(statearr_31412_31444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (4))){
var inst_31372 = (state_31408[(9)]);
var inst_31372__$1 = (state_31408[(2)]);
var inst_31373 = (inst_31372__$1 == null);
var inst_31374 = cljs.core.not.call(null,inst_31373);
var state_31408__$1 = (function (){var statearr_31413 = state_31408;
(statearr_31413[(9)] = inst_31372__$1);

return statearr_31413;
})();
if(inst_31374){
var statearr_31414_31445 = state_31408__$1;
(statearr_31414_31445[(1)] = (5));

} else {
var statearr_31415_31446 = state_31408__$1;
(statearr_31415_31446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (15))){
var inst_31398 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31416_31447 = state_31408__$1;
(statearr_31416_31447[(2)] = inst_31398);

(statearr_31416_31447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (13))){
var state_31408__$1 = state_31408;
var statearr_31417_31448 = state_31408__$1;
(statearr_31417_31448[(2)] = null);

(statearr_31417_31448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (6))){
var inst_31368 = (state_31408[(8)]);
var inst_31393 = inst_31368.length;
var inst_31394 = (inst_31393 > (0));
var state_31408__$1 = state_31408;
if(cljs.core.truth_(inst_31394)){
var statearr_31418_31449 = state_31408__$1;
(statearr_31418_31449[(1)] = (12));

} else {
var statearr_31419_31450 = state_31408__$1;
(statearr_31419_31450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (3))){
var inst_31406 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31408__$1,inst_31406);
} else {
if((state_val_31409 === (12))){
var inst_31368 = (state_31408[(8)]);
var inst_31396 = cljs.core.vec.call(null,inst_31368);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31408__$1,(15),out,inst_31396);
} else {
if((state_val_31409 === (2))){
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31408__$1,(4),ch);
} else {
if((state_val_31409 === (11))){
var inst_31372 = (state_31408[(9)]);
var inst_31376 = (state_31408[(10)]);
var inst_31386 = (state_31408[(2)]);
var inst_31387 = [];
var inst_31388 = inst_31387.push(inst_31372);
var inst_31368 = inst_31387;
var inst_31369 = inst_31376;
var state_31408__$1 = (function (){var statearr_31420 = state_31408;
(statearr_31420[(7)] = inst_31369);

(statearr_31420[(11)] = inst_31388);

(statearr_31420[(12)] = inst_31386);

(statearr_31420[(8)] = inst_31368);

return statearr_31420;
})();
var statearr_31421_31451 = state_31408__$1;
(statearr_31421_31451[(2)] = null);

(statearr_31421_31451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (9))){
var inst_31368 = (state_31408[(8)]);
var inst_31384 = cljs.core.vec.call(null,inst_31368);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31408__$1,(11),out,inst_31384);
} else {
if((state_val_31409 === (5))){
var inst_31369 = (state_31408[(7)]);
var inst_31372 = (state_31408[(9)]);
var inst_31376 = (state_31408[(10)]);
var inst_31376__$1 = f.call(null,inst_31372);
var inst_31377 = cljs.core._EQ_.call(null,inst_31376__$1,inst_31369);
var inst_31378 = cljs.core.keyword_identical_QMARK_.call(null,inst_31369,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31379 = (inst_31377) || (inst_31378);
var state_31408__$1 = (function (){var statearr_31422 = state_31408;
(statearr_31422[(10)] = inst_31376__$1);

return statearr_31422;
})();
if(cljs.core.truth_(inst_31379)){
var statearr_31423_31452 = state_31408__$1;
(statearr_31423_31452[(1)] = (8));

} else {
var statearr_31424_31453 = state_31408__$1;
(statearr_31424_31453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (14))){
var inst_31401 = (state_31408[(2)]);
var inst_31402 = cljs.core.async.close_BANG_.call(null,out);
var state_31408__$1 = (function (){var statearr_31426 = state_31408;
(statearr_31426[(13)] = inst_31401);

return statearr_31426;
})();
var statearr_31427_31454 = state_31408__$1;
(statearr_31427_31454[(2)] = inst_31402);

(statearr_31427_31454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (10))){
var inst_31391 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31428_31455 = state_31408__$1;
(statearr_31428_31455[(2)] = inst_31391);

(statearr_31428_31455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (8))){
var inst_31372 = (state_31408[(9)]);
var inst_31376 = (state_31408[(10)]);
var inst_31368 = (state_31408[(8)]);
var inst_31381 = inst_31368.push(inst_31372);
var tmp31425 = inst_31368;
var inst_31368__$1 = tmp31425;
var inst_31369 = inst_31376;
var state_31408__$1 = (function (){var statearr_31429 = state_31408;
(statearr_31429[(14)] = inst_31381);

(statearr_31429[(7)] = inst_31369);

(statearr_31429[(8)] = inst_31368__$1);

return statearr_31429;
})();
var statearr_31430_31456 = state_31408__$1;
(statearr_31430_31456[(2)] = null);

(statearr_31430_31456[(1)] = (2));


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
});})(c__28665__auto___31442,out))
;
return ((function (switch__28553__auto__,c__28665__auto___31442,out){
return (function() {
var cljs$core$async$state_machine__28554__auto__ = null;
var cljs$core$async$state_machine__28554__auto____0 = (function (){
var statearr_31434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31434[(0)] = cljs$core$async$state_machine__28554__auto__);

(statearr_31434[(1)] = (1));

return statearr_31434;
});
var cljs$core$async$state_machine__28554__auto____1 = (function (state_31408){
while(true){
var ret_value__28555__auto__ = (function (){try{while(true){
var result__28556__auto__ = switch__28553__auto__.call(null,state_31408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28556__auto__;
}
break;
}
}catch (e31435){if((e31435 instanceof Object)){
var ex__28557__auto__ = e31435;
var statearr_31436_31457 = state_31408;
(statearr_31436_31457[(5)] = ex__28557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31458 = state_31408;
state_31408 = G__31458;
continue;
} else {
return ret_value__28555__auto__;
}
break;
}
});
cljs$core$async$state_machine__28554__auto__ = function(state_31408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28554__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28554__auto____1.call(this,state_31408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28554__auto____0;
cljs$core$async$state_machine__28554__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28554__auto____1;
return cljs$core$async$state_machine__28554__auto__;
})()
;})(switch__28553__auto__,c__28665__auto___31442,out))
})();
var state__28667__auto__ = (function (){var statearr_31437 = f__28666__auto__.call(null);
(statearr_31437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28665__auto___31442);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28667__auto__);
});})(c__28665__auto___31442,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518073858907