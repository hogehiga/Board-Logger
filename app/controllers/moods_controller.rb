class MoodsController < ApplicationController

  def create
    @mood = Mood.new(mood_prams)
    @mood.save
    redirect_to boards_show2_path(params[:mood]['board_id'])
  end

  def destroy
    @mood = Mood.find(params[:id])
    @mood.delete
    redirect_to boards_show2_path(@mood.board_id)
  end

  private

  def  mood_prams
    params[:mood].permit(:board_id, :mood)
  end
end
