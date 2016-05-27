Rails.application.routes.draw do
  root to: 'static_pages#root'
  match '/signout' => 'sessions#destroy', :via => :delete

  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resources :people, only: :index
    
    resource :session, only: [:show, :create, :destroy]
    resources :friendships, only: [:update, :index, :create, :show, :destroy]
    resources :posts, only: [:index, :show, :create, :destroy]
  end
end
