class WaveController < ApplicationController
  def create
    @wave = Wave.new(wave_prams)
    @wave.save
    redirect_to boards_input_path(params[:wave]['board_id'])
  end

  def createmood
    @mood = Mood.new(params[:mood].permit(:board_id, :mood))
    @mood.save
    redirect_to boards_input_path(params[:mood]['board_id'])
  end

  private

def  wave_prams
  params[:wave].permit(:board_id, :status, :comment, :windway, :shore, :windpower, :swell, :swellway, :bottom)
end

end
