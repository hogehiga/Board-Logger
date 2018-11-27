class PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    if @photo.image != nil
        uploaded_binary_data = photo_params[:image].read
        encoded_data = Base64.strict_encode64(uploaded_binary_data)
        @photo[:image] = encoded_data
        @photo.save
    end

    redirect_to boards_show_path(@photo.manner.board.id)
  end

  private

  def photo_params
    params.require(:photo).permit(:image, :manner_id)
  end

end
