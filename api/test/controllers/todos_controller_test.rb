require "test_helper"

class TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get getTodo" do
    get todos_getTodo_url
    assert_response :success
  end
end
