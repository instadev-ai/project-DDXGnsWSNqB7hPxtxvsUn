import { Todo, useTodo } from "@/context/TodoContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodo();
  
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(todo.createdAt));

  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <Checkbox 
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
            className="mt-1"
          />
          <div className="flex-1">
            <label 
              htmlFor={`todo-${todo.id}`}
              className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.title}
            </label>
            <p className={`text-sm mt-1 ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {todo.description}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Created: {formattedDate}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end pt-0 pb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoItem;