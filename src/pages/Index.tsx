import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  CheckSquare, 
  ListTodo,
  Home
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-600 via-blue-700 to-teal-500">
      {/* Header Navigation */}
      <header className="w-full bg-white/10 backdrop-blur-sm p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-white mr-2" />
            <h1 className="text-xl font-bold text-white">Hello World</h1>
          </div>
          
          <nav className="flex items-center space-x-1 sm:space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/dashboard')}
            >
              <LayoutDashboard className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/dashboard/tasks')}
            >
              <ListTodo className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Tasks</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white/20"
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
            <p className="text-white text-xl opacity-90">Welcome to your beautiful website</p>
          </div>
          
          <Card className="backdrop-blur-sm bg-white/10 border-none shadow-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-white text-center">Get Started</CardTitle>
              <CardDescription className="text-center text-white/80">Your journey begins here</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-white/90 text-center pb-2">
              <p>
                This enhanced website showcases modern design with beautiful gradients and glass-like effects.
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
              <Button className="bg-white text-indigo-600 hover:bg-white/90 transition-all duration-300 shadow-lg"
                    onClick={() => navigate('/dashboard')}>
                Explore
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 transition-all duration-300">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center space-y-2">
            <p className="text-white/70 text-sm">Created with ❤️ using React & Tailwind CSS</p>
            <p className="text-white/70 text-sm">100% designed and developed by AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;