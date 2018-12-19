Rails.application.routes.draw do
  root 'home#index'

  get    '/login',   to: 'sessions#new',     as: 'login'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy', as: 'logout'

  get 'explain/explain'
  get 'boards/search', to: 'boards#search', as: 'boards_search'
  get 'boards/myboard',  to: 'boards#index', as: 'board'
  get 'boards/show/:id', to: 'boards#show', as: 'boards_show'
  get 'boatds/wave_form/:id', to: 'boards#wave_form', as: 'wave_form'
  get 'boards/entry_form/:id', to: 'boards#entry_form', as: 'entry_form'
  get 'boards/mood_form/:id', to: 'boards#mood_form', as: 'mood_form'
  resources :boards, only: [:create, :destroy]

  resources :users
  resources :manners, only: [:create, :destroy]
  resources :middles, only: [:create, :destroy]
  resources :moods, only: [:create, :destroy]
  resources :waves, only: [:create, :destroy]
end
