Rails.application.routes.draw do

  namespace :api do
    get 'blogs/index'
  end

  get 'instapics/index'

  get 'instapics/show'

  namespace :api do
    get 'instagram/index', to: 'instagram#index'
    get 'instagram/service', to: 'instagram#service'
  end


  namespace :api do
    resources :testimonials
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
