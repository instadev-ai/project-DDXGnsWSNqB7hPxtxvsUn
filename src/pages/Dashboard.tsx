import DashboardLayout from "@/components/layout/DashboardLayout";
import { useTodo } from "@/context/TodoContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Clock } from "lucide-react";

const Dashboard = () => {
  const { todos, getCompletedTodos, getIncompleteTodos } = useTodo();
  
  const completedTodos = getCompletedTodos();
  const incompleteTodos = getIncompleteTodos();
  const completionRate = todos.length > 0 
    ? Math.round((completedTodos.length / todos.length) * 100) 
    : 0;

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Dashboard</h1>
        <p className="text-slate-400 mt-1">Overview of your tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
          <div className="h-1 bg-blue-500"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Total Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-3xl font-bold text-slate-100">{todos.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
          <div className="h-1 bg-emerald-500"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
              <span className="text-3xl font-bold text-slate-100">{completedTodos.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
          <div className="h-1 bg-amber-500"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-400">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Circle className="h-5 w-5 text-amber-400 mr-2" />
              <span className="text-3xl font-bold text-slate-100">{incompleteTodos.length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400"></div>
        <CardHeader>
          <CardTitle className="text-slate-100">Completion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-100 bg-slate-700">
                  {completionRate}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-700">
              <div
                style={{ width: `${completionRate}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
              ></div>
            </div>
          </div>
          
          <div className="text-center text-sm text-slate-400 mt-4">
            {todos.length === 0 ? (
              <p>No tasks added yet. Start by adding a task!</p>
            ) : completedTodos.length === todos.length ? (
              <p>All tasks completed! Great job!</p>
            ) : (
              <p>You have {incompleteTodos.length} tasks left to complete.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Dashboard;