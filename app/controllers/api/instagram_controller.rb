class Api::InstagramController < ApplicationController
  def index
  	passcode = ENV['INSTAGRAM_ACCESS_TOKEN']
  	the_data = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=#{passcode}")
  	binding.pry
      render json: the_data
  end
end
