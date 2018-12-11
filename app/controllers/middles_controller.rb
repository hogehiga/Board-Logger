class MiddlesController < ApplicationController

  def create
    if board
      @middle = Middle.new(board_id: board.id, user_id: params[:user_id])
      @middle.save!
      redirect_to board_path
    else
      render file: Rails.root.join('public/404.html'), status: 404, layout: false, content_type: 'text/html'
    end
  end

  def destroy
    @middle = Middle.find(params[:id])
    @middle.delete
    redirect_to board_path
  end

  private

  def board
    Board.find_by(user_id: current_user.id, id: params[:board_id])
  end
end
