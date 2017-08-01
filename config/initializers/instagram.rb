require "instagram"
	Instagram.configure do |config|
			config.client_id = ENV['INSTAGRAM_API_ID']
			config.access_token = ENV['INSTAGRAM_ACCESS_TOKEN']
			config.client_secret = ENV['INSTAGRAM_API_SECRET']
		end