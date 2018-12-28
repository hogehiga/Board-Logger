require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "the truth" do
    assert true
  end

  test "とりあえず完全一致で検索可能" do
    user_1_name =users(:search_test_one).name
    user_2_name =users(:search_test_two).name
    k = User.search(user_2_name, user_1_name).count
    assert_equal 1, k
  end

  test "検索で引っかかっても、自分自身は除外される" do
    k = User.search('search_test', users(:search_test_one).name).count
    assert_equal 1, k
  end

  test "空白で検索すると一件も引っかからない(現状のAPIだと呼び出し元が毎回nilチェックしないといけない)" do
    assert_not User.search('', users(:search_test_one))
  end

  test "空白で検索すると一件も引っかからない(こっちのほうがnilチェック不要なので、呼び出し元にとっては扱いやすいAPIだと思う)" do
    k = User.search('', users(:search_test_one).name).count
    assert_equal 0, k
  end

end
