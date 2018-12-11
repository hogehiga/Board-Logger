class WavesController < ApplicationController

  def create
    @wave = Wave.new(wave_prams)
    @wave.save
    redirect_to boards_input_path(params[:wave]['board_id'])
  end

  def destroy
    @wave = Wave.find(params[:id])
    @wave.delete
    redirect_to boards_show2_path(@wave.board_id)
  end

  private

  def  wave_prams
    params[:wave].permit(:board_id, :status, :comment, :windway, :shore, :windpower, :swell, :swellway, :bottom)
  end
end
