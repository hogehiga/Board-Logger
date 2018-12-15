Rails.application.routes.draw do
  post 'positions/create'
  get 'positions/show'
  root 'home#index'

  get    '/login',   to: 'sessions#new',     as: 'login'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy', as: 'logout'

  resources :users do
    member do
      get :following, :followers
    end
  end

  get 'explain/explain'
  get 'boards/search', to: 'boards#search', as: 'boards_search'
  get 'boards/:id',  to: 'boards#index', as: 'board'
  get 'boards/show/:id', to: 'boards#show', as: 'boards_show'
  get 'boards/show2/:id', to: 'boards#show2', as: 'boards_show2'
  get 'boards/input/:id', to: 'boards#input', as: 'boards_input'
  post 'boards/create', to: 'boards#create'
  delete 'boards/:id', to: 'boards#destroy'

  post 'waves/create', to: 'wave#create', as: 'wave_create'
  post 'gmaps/create', to: 'gmap#create', as: 'gmap_create'
  post 'photos/create',  to: 'photos#create',  as: 'photo_create'
  post 'waves/mood', to: 'wave#createmood', as: 'mood_create'
  resources :manners, only: [:create]
  resources :middles, only: [:create, :destroy]

  resources :users do
    member do
      get :following, :followers
    end
  end
end
