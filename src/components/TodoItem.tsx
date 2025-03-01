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
    <Card className="mb-4 bg-slate-800 border-slate-700 overflow-hidden">
      <div className={`h-1 ${todo.completed ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <Checkbox 
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
            className="mt-1 border-slate-600"
          />
          <div className="flex-1">
            <label 
              htmlFor={`todo-${todo.id}`}
              className={`text-lg font-medium ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}
            >
              {todo.title}
            </label>
            <p className={`text-sm mt-1 ${todo.completed ? 'text-slate-500' : 'text-slate-400'}`}>
              {todo.description}
            </p>
            <p className="text-xs text-slate-500 mt-2">
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
          className="text-red-400 hover:text-red-300 hover:bg-slate-700"
        >
          <Trash className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoItem;