Rails.application.routes.draw do
  get 'todos/getTodo'
  post 'todos/addTodo'
  post 'todos/updateTodo'
  post 'todos/deleteTodo'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
