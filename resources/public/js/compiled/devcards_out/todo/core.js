// Compiled by ClojureScript 1.9.229 {}
goog.provide('todo.core');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
todo.core.delete_item = (function todo$core$delete_item(state,memory,index){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.keep_indexed.call(null,(function (p1__29550_SHARP_,p2__29551_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__29550_SHARP_,index)){
return p2__29551_SHARP_;
} else {
return null;
}
}),memory));
});
todo.core.render_memory = (function todo$core$render_memory(state,_,memory){
return React.createElement("div",({"id": "memory-wrapper"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,(function (p1__29552_SHARP_,p2__29553_SHARP_){
return React.createElement("h1",({"key": p1__29552_SHARP_, "onClick": (function (){
return todo.core.delete_item.call(null,state,memory,p1__29552_SHARP_);
}), "className": "memory-item"}),sablono.interpreter.interpret.call(null,p2__29553_SHARP_));
}),memory)));
});
todo.core.render_counter_body = (function todo$core$render_counter_body(state,counter,memory){
return React.createElement("div",({"id": "container"}),React.createElement("button",({"onClick": (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.inc);
})}),"Increment"),React.createElement("h1",({"id": (((counter < (0)))?"negative":"positive"), "onClick": (function (e){
return cljs.core.swap_BANG_.call(null,state,(function (p1__29554_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__29554_SHARP_,new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.conj.call(null,memory,counter)),new cljs.core.Keyword(null,"counter","counter",804008177),(0));
}));
})}),sablono.interpreter.interpret.call(null,counter)),React.createElement("button",({"onClick": (function (e){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.dec);
})}),"Decrement"));
});
todo.core.render_app = (function todo$core$render_app(state){
var memo = cljs.core.deref.call(null,state);
var counter = cljs.core.get.call(null,memo,new cljs.core.Keyword(null,"counter","counter",804008177));
var memory = cljs.core.get.call(null,memo,new cljs.core.Keyword(null,"memory","memory",-1449401430));
return React.createElement("div",({"id": "app"}),sablono.interpreter.interpret.call(null,todo.core.render_counter_body.call(null,state,counter,memory)),sablono.interpreter.interpret.call(null,todo.core.render_memory.call(null,state,null,memory)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo.core","todo.core",-637202944),new cljs.core.Keyword(null,"f-card","f-card",1479485976)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"f-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state){
return todo.core.render_app.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),(1)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
todo.core.main = (function todo$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
todo.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1518161430996