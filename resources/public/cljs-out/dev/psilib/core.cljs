(ns ^:figwheel-hooks psilib.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

;; BOILERPLATE
(defn multiply [a b] (* a b))

(defn get-app-element []
  (gdom/getElement "app"))

(defn click-input []
  (-> js/document
      (.getElementById "demo")
      (.-innerHTML)
      (set! "Mouse Clicked")))

(def clicking-action (click-input))

(defn hello-world []
  [:div
   [:h1 "A Theremin"]
   [:h3 "Use your Gamepad"]
   [:p#demo "Click me"
    {:onClick clicking-action}
    ]
   ])

;(js/alert "Am I not sconnected?a")

(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))


;; THEREMIN
;; Instrument State
(defonce inst-state (reagent/atom {:status 0
                                   :osc "sine"
                                   :detune 100
                                   :gain 0.042
                                   :maxGain 0.15
                                   :minGain 0
                                   :freq 3000
                                   :minFreq 2000
                                   :maxFreq 6000}))

;; Define Audio Context, Oscillator & Gain Node
(defonce context (js/window.AudioContext.))
(defonce osc (.createOscillator context))
(defonce amp (.createGain context))

;; Initialise Oscillator & Gain
(set! (.-type osc) (:osc @inst-state))
(set! (.-value (.-detune osc)) (:detune @inst-state))
(set! (.-value (.-gain amp)) (:gain @inst-state))

;; Start oscillator
(if (= 0 (:status @inst-state))
  (do (println "Yet To Start")
      (. osc start 0)
      (swap! inst-state update-in [:status] inc)))

;; Create Wiring
(. osc connect amp)
(. amp connect (.-destination context))

;; Have to call resume after some user gesture on the page, like a click
;; (. context resume)

;; HOOKS
;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (println @inst-state)
  ;; (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
