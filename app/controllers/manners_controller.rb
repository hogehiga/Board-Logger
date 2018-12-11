class MannersController < ApplicationController
  def create
    @manner = Manner.new(manner_params)
    @manner.save
    redirect_to boards_show2_path(params[:manner]['board_id'])
  end

  def destroy
    @manner = Manner.find(params[:id])
    @manner.delete
    redirect_to boards_show2_path(params[:manner]['board_id'])
  end

  private

  def manner_params
    params[:manner].permit(:board_id, :entry)
  end
end
