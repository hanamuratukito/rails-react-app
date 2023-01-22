class TodosController < ApplicationController
  def getTodo
    render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  end
  # def addTodo(text)
  #   todo = Todo.new
  #   todo.status = 1 # 未完了
  #   todo.text = text
  #   todo.isDeleted = 0
  #   todo.save
  #   render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  # end
  # def updateTodo(id, status)
  #   todo = todo.find(id)
  #   todo.update(status: status)
  #   render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  # end
  # def deleteTodo(id)
  #   todo = todo.find(id)
  #   todo.update(isDeleted: true)
  #   render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  # end
end
