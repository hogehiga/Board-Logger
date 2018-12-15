class PositionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    binding.pry
  end

  def show
  end
end
