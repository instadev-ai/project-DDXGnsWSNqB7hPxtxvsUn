import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  Clock, 
  Calendar, 
  Calculator, 
  Timer, 
  Shuffle, 
  Zap, 
  Lightbulb, 
  Trash
} from "lucide-react";

function Tools() {
  // Pomodoro Timer
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  
  // Random Task Generator
  const [randomTask, setRandomTask] = useState("");
  
  // Time Estimator
  const [taskDescription, setTaskDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState<number | null>(null);
  
  // Task Ideas
  const taskIdeas = [
    "Clean out your email inbox",
    "Update your resume",
    "Plan meals for the week",
    "Organize digital files",
    "Back up important documents",
    "Learn a new keyboard shortcut",
    "Write in a journal",
    "Read an article about productivity",
    "Stretch for 5 minutes",
    "Drink a glass of water"
  ];

  // Generate random task
  const generateRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * taskIdeas.length);
    setRandomTask(taskIdeas[randomIndex]);
  };

  // Estimate time for task
  const estimateTaskTime = () => {
    // Simple algorithm: 1 minute per word with some randomness
    const words = taskDescription.split(' ').length;
    const baseTime = words * 1;
    const randomFactor = Math.random() * 10 - 5; // -5 to +5 minutes
    const time = Math.max(5, Math.round(baseTime + randomFactor));
    setEstimatedTime(time);
  };

  // Toggle pomodoro timer
  const togglePomodoro = () => {
    setPomodoroActive(!pomodoroActive);
    // In a real app, we would implement the actual timer functionality here
  };

  // Reset pomodoro timer
  const resetPomodoro = () => {
    setPomodoroMinutes(25);
    setPomodoroSeconds(0);
    setPomodoroActive(false);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Productivity Tools</h1>
        <p className="text-gray-500">Helpful utilities to boost your productivity</p>
      </div>

      <Tabs defaultValue="pomodoro" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="pomodoro">Pomodoro Timer</TabsTrigger>
          <TabsTrigger value="random">Task Generator</TabsTrigger>
          <TabsTrigger value="estimator">Time Estimator</TabsTrigger>
        </TabsList>
        
        {/* Pomodoro Timer */}
        <TabsContent value="pomodoro">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Timer className="mr-2 h-5 w-5 text-blue-500" />
                Pomodoro Timer
              </CardTitle>
              <CardDescription>
                Use the Pomodoro Technique to work in focused intervals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="text-6xl font-bold mb-6">
                  {String(pomodoroMinutes).padStart(2, '0')}:{String(pomodoroSeconds).padStart(2, '0')}
                </div>
                <div className="flex gap-4 mb-6">
                  <Button 
                    onClick={togglePomodoro}
                    className={pomodoroActive ? "bg-red-500 hover:bg-red-600" : ""}
                  >
                    {pomodoroActive ? "Pause" : "Start"}
                  </Button>
                  <Button variant="outline" onClick={resetPomodoro}>
                    Reset
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                  <Button variant="ghost" onClick={() => setPomodoroMinutes(15)}>15 min</Button>
                  <Button variant="ghost" onClick={() => setPomodoroMinutes(25)}>25 min</Button>
                  <Button variant="ghost" onClick={() => setPomodoroMinutes(50)}>50 min</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 justify-center">
              Work in focused intervals, then take short breaks
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Random Task Generator */}
        <TabsContent value="random">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shuffle className="mr-2 h-5 w-5 text-purple-500" />
                Random Task Generator
              </CardTitle>
              <CardDescription>
                Need inspiration? Generate a random productive task
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-6 rounded-lg mb-6 w-full text-center min-h-[100px] flex items-center justify-center">
                  {randomTask ? (
                    <p className="text-xl">{randomTask}</p>
                  ) : (
                    <p className="text-gray-400">Your random task will appear here</p>
                  )}
                </div>
                <Button 
                  onClick={generateRandomTask}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Generate Random Task
                </Button>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 justify-center">
              Sometimes the best way to be productive is to just start something
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Time Estimator */}
        <TabsContent value="estimator">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-green-500" />
                Task Time Estimator
              </CardTitle>
              <CardDescription>
                Get an estimate of how long a task might take
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Describe your task in detail:
                  </label>
                  <Input
                    placeholder="E.g., Write a report about quarterly sales results"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={estimateTaskTime}
                  disabled={!taskDescription.trim()}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Estimate Time
                </Button>
                
                {estimatedTime !== null && (
                  <div className="bg-gray-50 p-4 rounded-lg text-center mt-4">
                    <p className="text-sm text-gray-500 mb-1">Estimated time:</p>
                    <p className="text-2xl font-bold text-green-600">{estimatedTime} minutes</p>
                    <p className="text-xs text-gray-400 mt-2">
                      This is just an estimate. Actual time may vary.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 justify-center">
              Better time estimation leads to better planning
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}

export default Tools;