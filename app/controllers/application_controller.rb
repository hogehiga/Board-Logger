class ApplicationController < ActionController::Base
  include SessionsHelper
  include MiddlesHelper
  protect_from_forgery with: :exception
end
