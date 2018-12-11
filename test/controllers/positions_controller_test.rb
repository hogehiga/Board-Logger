require 'test_helper'

class PositionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get positions_create_url
    assert_response :success
  end

  test "should get show" do
    get positions_show_url
    assert_response :success
  end

end
