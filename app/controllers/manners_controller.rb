class MannersController < ApplicationController
  def create
    @manner = Manner.new(manner_params)
    @manner.save
    redirect_to boards_show_path(params[:manner]['board_id'])
  end

  private

  def manner_params
    params[:manner].permit(:board_id, :entry)
  end
end
