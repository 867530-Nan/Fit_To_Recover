Rails.application.routes.draw do
	root 'static#index'

  namespace :api do
    get 'instagram/index', to: 'instagram#index'
  end


  namespace :api do
    resources :testimonial
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
