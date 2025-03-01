import { createContext, useContext, useState, ReactNode } from "react";

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  getCompletedTodos: () => Todo[];
  getIncompleteTodos: () => Todo[];
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "Complete project proposal",
      description: "Finish the project proposal for the client meeting",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Buy groceries",
      description: "Milk, eggs, bread, and vegetables",
      completed: true,
      createdAt: new Date(Date.now() - 86400000),
    },
    {
      id: "3",
      title: "Schedule dentist appointment",
      description: "Call Dr. Smith's office to schedule a checkup",
      completed: false,
      createdAt: new Date(Date.now() - 172800000),
    },
  ]);

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getCompletedTodos = () => {
    return todos.filter((todo) => todo.completed);
  };

  const getIncompleteTodos = () => {
    return todos.filter((todo) => !todo.completed);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        getCompletedTodos,
        getIncompleteTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};