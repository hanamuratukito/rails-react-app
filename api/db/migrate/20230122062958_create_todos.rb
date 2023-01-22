class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.integer :status
      t.boolean :isDeleted

      t.timestamps
    end
  end
end
