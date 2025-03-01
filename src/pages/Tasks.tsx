import DashboardLayout from "@/components/layout/DashboardLayout";
import { useTodo } from "@/context/TodoContext";
import TodoItem from "@/components/TodoItem";
import AddTodoForm from "@/components/AddTodoForm";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Tasks = () => {
  const { getIncompleteTodos } = useTodo();
  const incompleteTodos = getIncompleteTodos();

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <p className="text-gray-500">Manage your pending tasks</p>
      </div>

      <AddTodoForm />

      <div>
        {incompleteTodos.length === 0 ? (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              You don't have any pending tasks. Add a new task to get started!
            </AlertDescription>
          </Alert>
        ) : (
          incompleteTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default Tasks;