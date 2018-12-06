module MiddlesHelper
  def accessboard(user)
    Middle.find_by(board_id: params[:id], user_id: user)
  end
end
