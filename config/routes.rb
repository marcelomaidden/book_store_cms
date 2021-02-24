Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users

  post 'sign_in', to: 'users#sign_in'

  post 'check_credentials', to: 'users#check_credentials'
end
