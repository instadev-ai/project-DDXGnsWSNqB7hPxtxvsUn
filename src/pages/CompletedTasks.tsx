import DashboardLayout from "@/components/layout/DashboardLayout";
import { useTodo } from "@/context/TodoContext";
import TodoItem from "@/components/TodoItem";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

const CompletedTasks = () => {
  const { getCompletedTodos } = useTodo();
  const completedTodos = getCompletedTodos();

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Completed Tasks</h1>
        <p className="text-slate-400 mt-1">View your accomplishments</p>
      </div>

      <div>
        {completedTodos.length === 0 ? (
          <Alert className="bg-slate-800 border-slate-700 text-slate-300">
            <CheckCircle className="h-4 w-4 text-slate-400" />
            <AlertDescription>
              You haven't completed any tasks yet. Complete a task to see it here!
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="mb-6 flex items-center p-4 bg-slate-800 border border-slate-700 rounded-xl">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
              <span className="text-lg font-medium text-slate-100">
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