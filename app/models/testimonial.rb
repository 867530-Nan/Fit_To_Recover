class Testimonial < ApplicationRecord
	validates_presence_of :author, :date, :body, :subject
end
