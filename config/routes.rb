Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'
  post '/posts', to: 'posts#create'
  delete '/posts/:id', to: 'posts#delete'
  put '/posts/:id', to: 'posts#update'

end
