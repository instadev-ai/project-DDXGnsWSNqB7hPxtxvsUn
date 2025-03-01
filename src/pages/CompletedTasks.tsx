import DashboardLayout from "@/components/layout/DashboardLayout";
import { useTodo } from "@/context/TodoContext";
import TodoItem from "@/components/TodoItem";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompletedTasks = () => {
  const { getCompletedTodos } = useTodo();
  const completedTodos = getCompletedTodos();

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Completed Tasks</h1>
          <p className="text-gray-500">View your accomplishments</p>
        </div>
      </div>

      <div>
        {completedTodos.length === 0 ? (
          <Alert className="bg-gray-50">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              You haven't completed any tasks yet. Complete a task to see it here!
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-lg font-medium">
                You've completed {completedTodos.length} {completedTodos.length === 1 ? 'task' : 'tasks'}!
              </span>
            </div>
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CompletedTasks;