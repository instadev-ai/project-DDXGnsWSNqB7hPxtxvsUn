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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Tasks</h1>
        <p className="text-slate-400 mt-1">Manage your pending tasks</p>
      </div>

      <div className="mb-8 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <div className="h-1 bg-emerald-500"></div>
        <div className="p-6">
          <AddTodoForm />
        </div>
      </div>

      <div>
        {incompleteTodos.length === 0 ? (
          <Alert className="bg-slate-800 border-slate-700 text-slate-300">
            <AlertCircle className="h-4 w-4 text-slate-400" />
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