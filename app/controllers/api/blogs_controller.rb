class Api::BlogsController < ApplicationController
  def index

  	nutrition = HTTParty.get("https://www.googleapis.com/blogger/v3/blogs/blogId/posts",
  		{ blogId: ENV['BLOG_ID'],
  			fetchImages: true,
  			view: 'READER',
  			})
      render json: nutrition
  end
end
