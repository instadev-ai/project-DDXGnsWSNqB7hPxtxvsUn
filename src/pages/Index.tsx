import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  CheckSquare, 
  ListTodo,
  Home
} from "lucide-react";

function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      {/* Header Navigation */}
      <header className="w-full border-b border-slate-700 p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-emerald-400 mr-2" />
            <h1 className="text-xl font-bold text-white">Hello World</h1>
          </div>
          
          <nav className="flex items-center space-x-1 sm:space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-300 hover:text-emerald-300 hover:bg-transparent"
              onClick={() => navigate('/dashboard')}
            >
              <LayoutDashboard className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-300 hover:text-emerald-300 hover:bg-transparent"
              onClick={() => navigate('/dashboard/tasks')}
            >
              <ListTodo className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Tasks</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-300 hover:text-emerald-300 hover:bg-transparent"
              onClick={() => navigate('/dashboard/completed')}
            >
              <CheckSquare className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Completed</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-3">Hello World</h1>
            <p className="text-emerald-300 text-xl font-light">Welcome to your beautiful website</p>
          </div>
          
          <Card className="border border-slate-700 bg-slate-800 shadow-xl rounded-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white text-center">Get Started</CardTitle>
              <CardDescription className="text-center text-slate-400">Your journey begins here</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300 text-center pb-2">
              <p>
                This enhanced website showcases modern design with beautiful custom aesthetics.
              </p>
              <p>
                Explore the possibilities of AI-powered web development. This entire website was created by artificial intelligence, 
                from concept to code, demonstrating how technology can simplify and enhance the creative process.
              </p>
              <p>
                The future of web design is here - where beautiful interfaces can be generated in seconds with just a simple prompt.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 pt-2 pb-6">
              <Button 
                className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 rounded-full px-6"
                onClick={() => navigate('/dashboard')}
              >
                Explore
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white rounded-full px-6"
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-12 text-center space-y-2">
            <p className="text-slate-500 text-sm">Created with ❤️ using React & Tailwind CSS</p>
            <p className="text-slate-500 text-sm">100% designed and developed by AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;