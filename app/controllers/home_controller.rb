class HomeController < ApplicationController
  def index
    current_user
    if logged_in?
      # ログインしていたらそのUserのページに行く
      redirect_to board_path
    end
  end
end
