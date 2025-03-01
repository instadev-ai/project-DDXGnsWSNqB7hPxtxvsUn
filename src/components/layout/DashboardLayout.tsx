import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

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
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/dashboard/tasks" },
    { name: "Completed", path: "/dashboard/completed" },
    { name: "Home", path: "/" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold">Todo App</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <div className="w-64 bg-white h-screen shadow-sm p-6 flex flex-col">
          <h1 className="text-2xl font-bold mb-8">Todo App</h1>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                className="justify-start"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-1">
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