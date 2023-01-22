class AddColumnTodos < ActiveRecord::Migration[7.0]
  def change
    add_column :todos, :text, :string
  end
end
