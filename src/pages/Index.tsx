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
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Header Navigation */}
      <header className="w-full bg-gray-800/80 backdrop-blur-sm p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-indigo-400 mr-2" />
            <h1 className="text-xl font-bold text-white">Hello World</h1>
          </div>
          
          <nav className="flex items-center space-x-1 sm:space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:bg-gray-700/70 hover:text-white"
              onClick={() => navigate('/dashboard')}
            >
              <LayoutDashboard className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:bg-gray-700/70 hover:text-white"
              onClick={() => navigate('/dashboard/tasks')}
            >
              <ListTodo className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Tasks</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:bg-gray-700/70 hover:text-white"
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
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">Hello World</h1>
            <p className="text-indigo-300 text-xl">Welcome to your beautiful website</p>
          </div>
          
          <Card className="backdrop-blur-sm bg-gray-800/50 border-none shadow-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white text-center">Get Started</CardTitle>
              <CardDescription className="text-center text-indigo-300">Your journey begins here</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300 text-center pb-2">
              <p>
                This enhanced website showcases modern design with beautiful dark mode aesthetics.
              </p>
              <p>
                Explore the possibilities of AI-powered web development. This entire website was created by artificial intelligence, 
                from concept to code, demonstrating how technology can simplify and enhance the creative process.
              </p>
              <p>
                The future of web design is here - where beautiful interfaces can be generated in seconds with just a simple prompt.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 pt-2">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg"
                    onClick={() => navigate('/dashboard')}>
                Explore
              </Button>
              <Button variant="outline" className="text-indigo-300 border-indigo-500 hover:bg-indigo-950 hover:text-indigo-200 transition-all duration-300">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center space-y-2">
            <p className="text-gray-400 text-sm">Created with ❤️ using React & Tailwind CSS</p>
            <p className="text-gray-400 text-sm">100% designed and developed by AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;