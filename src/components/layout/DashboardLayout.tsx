import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Menu, 
  LayoutDashboard, 
  CheckSquare, 
  ListTodo, 
  Home, 
  Wrench 
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" /> },
    { name: "Tasks", path: "/dashboard/tasks", icon: <ListTodo className="h-4 w-4 mr-2" /> },
    { name: "Completed", path: "/dashboard/completed", icon: <CheckSquare className="h-4 w-4 mr-2" /> },
    { name: "Tools", path: "/dashboard/tools", icon: <Wrench className="h-4 w-4 mr-2" /> },
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
        <h1 className="text-xl font-bold text-slate-100">Todo App</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-emerald-300 hover:bg-transparent">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-slate-800 border-r border-slate-700 p-0">
            <div className="flex flex-col gap-1 p-4">
              <div className="flex items-center px-4 py-3 mb-6 border-b border-slate-700">
                <Home className="h-5 w-5 text-emerald-400 mr-2" />
                <h2 className="text-lg font-bold text-slate-100">Todo App</h2>
              </div>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className={`justify-start rounded-lg mb-1 ${
                    isActive(item.path) 
                      ? "bg-slate-700 text-emerald-300" 
                      : "text-slate-300 hover:text-emerald-300 hover:bg-slate-800"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <div className="w-64 bg-slate-800 border-r border-slate-700 h-screen p-6 flex flex-col">
          <div className="flex items-center mb-8">
            <Home className="h-5 w-5 text-emerald-400 mr-2" />
            <h1 className="text-xl font-bold text-slate-100">Todo App</h1>
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className={`justify-start rounded-lg mb-1 ${
                  isActive(item.path) 
                    ? "bg-slate-700 text-emerald-300" 
                    : "text-slate-300 hover:text-emerald-300 hover:bg-slate-800"
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
                {item.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="p-8">{children}</div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;