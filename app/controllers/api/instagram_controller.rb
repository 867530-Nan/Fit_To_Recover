class Api::InstagramController < ApplicationController
  def index
  	@popular = Instagram.media_popular
  end
end
