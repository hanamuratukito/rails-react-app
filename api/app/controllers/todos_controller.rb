class TodosController < ApplicationController
  def getTodo
    render json: { todo: Todo.all }
  end
end
