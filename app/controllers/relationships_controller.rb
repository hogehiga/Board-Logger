class RelationshipsController < ApplicationController

  def create
    user = User.find(params[:followed_id])
    current_user.follow(user) unless Relationship.find_by(followed_id: params[:followed_id])
    Middle.create(user_id: params[:followed_id], board_id: params[:board_id])

    redirect_to board_path(current_user.id)
  end

  def destroy
    board = Middle.find_by(user_id: params[:user_id], board_id: params[:board_id])
    board.delete
    board.save

    middle = Middle.where(user_id: params[:user_id])
    judge = 0

    middle.each do |f|
      if f.board.user == current_user
        judge = 1
        break
      end
    end

    if judge == 0
      user = Relationship.find(params[:id]).followed
      current_user.unfollow(user)
    end
    redirect_to board_path(current_user.id)
  end
end
