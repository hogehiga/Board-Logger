require 'test_helper'

class ExplainControllerTest < ActionDispatch::IntegrationTest
  test "should get explain" do
    get explain_explain_url
    assert_response :success
  end

end
