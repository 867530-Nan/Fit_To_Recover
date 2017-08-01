class Api::TestimonialsController < ApplicationController
	before_action :set_testimonial, only: [:update, :destroy]

  def index
  	render json: Testimonial.all
  end

  def update
  	if @testimonial.update(testimonial_params)
  		render json: @testimonial
  	else
  		render json: { errors: @testimonial.errors.full_messages }, status: :bad_request
  	end
  end

  def destroy
  	@testimonial.destroy
  end

  private

  def testimonial_params
  	params.require(:testimonial).permit(:body, :subject, :date)
  end

  def set_testimonial
  	@testimonial = Testimonial.find(params[:id])
  end
end
