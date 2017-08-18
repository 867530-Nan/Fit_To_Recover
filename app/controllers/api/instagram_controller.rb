class Api::InstagramController < ApplicationController
  def index
  	the_data = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=",
  	{query:
  				{access_token: ENV['INSTAGRAM_ACCESS_TOKEN'],
  					count: 	'8'}
  				})
      render json: the_data
  end
end
