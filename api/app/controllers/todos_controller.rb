class TodosController < ApplicationController
  def getTodo
    render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  end

  def addTodo()
    todo = Todo.new
    todo.status = 1 # 未完了
    todo.text = params[:text]
    todo.isDeleted = 0
    todo.save
    render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  end

  def updateTodo()
    todo = Todo.find(params[:id])
    todo.update(status: params[:status])
    render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  end

  def deleteTodo()
    todo = Todo.find(params[:id])
    todo.update(isDeleted: true)
    render json: { incompleteTodos: Todo.where(isDeleted: false, status: 1), completeTodos: Todo.where(isDeleted: false, status: 2) }
  end
end
