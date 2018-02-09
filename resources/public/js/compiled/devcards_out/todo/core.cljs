(ns todo.core
  (:require
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))
;; sablono -> creating component
;; devcard -> storybook

(enable-console-print!)
;;
(defn delete-item [state memory index]
  (swap! state assoc :memory
     (keep-indexed #(if (not= %1 index) %2) memory)))

(defn render-memory [state _ memory]
  (sab/html [:div {:id "memory-wrapper"}
              (map-indexed
                #(sab/html [:h1 {:class "memory-item"
                                 :key %1
                                 :on-click (fn []
                                              (delete-item state memory %1))} %2
                            ]) memory)
             ]))

;; reduce the list
;; if index is not matched, conj into new list

(defn render-counter-body [state counter memory]
  (sab/html [:div {:id "container"}
               [:button {:on-click #(swap! state update :counter inc)} "Increment"]
               [:h1
                {:id (if (< counter 0) "negative" "positive")
                 :on-click (fn [e] (swap! state #(-> %
                                                     (assoc :memory (conj memory counter))
                                                     (assoc :counter 0))))}
                counter]
               [:button {:on-click (fn [e] (swap! state update :counter dec))} "Decrement"]]))

(defn render-app [state]
  (let [memo @state
          counter (get memo :counter)
          memory (get memo :memory)]
    (sab/html [:div {:id "app"}
      (render-counter-body state counter memory)
      (render-memory state nil memory)])))



(defcard f-card
  (fn [state]
    (render-app state))
  {:counter 1}
  {:inspect-data true})

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
