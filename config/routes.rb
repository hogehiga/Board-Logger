Rails.application.routes.draw do
  root 'home#index'

  get    '/login',   to: 'sessions#new',     as: 'login'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy', as: 'logout'

  get 'explain/explain'
  get 'boards/search', to: 'boards#search', as: 'boards_search'
  get 'boards/myboard',  to: 'boards#index', as: 'board'
  get 'boards/show/:id', to: 'boards#show', as: 'boards_show'
  get 'boards/show2/:id', to: 'boards#show2', as: 'boards_show2'
  get 'boards/input/:id', to: 'boards#input', as: 'boards_input'
  resources :boards, only: [:create, :destroy]

  resources :users
  resources :manners, only: [:create, :destroy]
  resources :middles, only: [:create, :destroy]
  resources :moods, only: [:create, :destroy]
  resources :photos, only: [:create, :destroy]
  resources :waves, only: [:create, :destroy]
end
