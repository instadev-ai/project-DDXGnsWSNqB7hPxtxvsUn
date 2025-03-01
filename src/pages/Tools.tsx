import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useRef } from "react";
import { 
  Clock, 
  Calendar, 
  Calculator, 
  Timer, 
  Shuffle, 
  Zap, 
  Lightbulb, 
  Trash,
  Bell
} from "lucide-react";

function Tools() {
  // Pomodoro Timer
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Random Task Generator
  const [randomTask, setRandomTask] = useState("");
  
  // Time Estimator
  const [taskDescription, setTaskDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState<number | null>(null);
  
  // Task Ideas - Expanded list with more variety
  const taskIdeas = [
    // Productivity Tasks
    "Clean out your email inbox",
    "Update your resume",
    "Plan meals for the week",
    "Organize digital files",
    "Back up important documents",
    "Learn a new keyboard shortcut",
    "Write in a journal",
    "Read an article about productivity",
    "Stretch for 5 minutes",
    "Drink a glass of water",
    "Create a to-do list for tomorrow",
    "Unsubscribe from unwanted email newsletters",
    "Set up calendar reminders for upcoming events",
    "Organize your digital photos",
    "Update your password manager",
    
    // Personal Development
    "Read a chapter of a book",
    "Practice meditation for 10 minutes",
    "Learn 5 new vocabulary words",
    "Watch an educational video",
    "Practice a language on a learning app",
    "Write down three things you're grateful for",
    "Set a personal goal for the month",
    "Listen to an educational podcast",
    "Take an online assessment or quiz",
    "Research a topic you're curious about",
    "Create a vision board for your goals",
    "Write a letter to your future self",
    "Learn a new skill on YouTube",
    "Practice mindfulness for 5 minutes",
    "Review and update your personal budget",
    
    // Health & Wellness
    "Do a quick 7-minute workout",
    "Prepare a healthy snack",
    "Schedule your medical checkups",
    "Track your water intake today",
    "Go for a 15-minute walk",
    "Try a new healthy recipe",
    "Do a posture check and stretching",
    "Plan your exercise for the week",
    "Take a screen break and rest your eyes",
    "Practice deep breathing for 5 minutes",
    "Try a new yoga pose",
    "Make a smoothie with fruits and vegetables",
    "Check your step count for the day",
    "Stretch your neck and shoulders",
    "Write down your sleep schedule for the week",
    
    // Home Tasks
    "Declutter one small area",
    "Water your plants",
    "Make a grocery list",
    "Clean out your refrigerator",
    "Sort through mail and papers",
    "Wipe down kitchen counters",
    "Vacuum one room",
    "Organize one drawer",
    "Plan weekend activities",
    "Check smoke detector batteries",
    "Clean your microwave",
    "Dust your bookshelves",
    "Organize your spice rack",
    "Wash your bed sheets",
    "Clean your bathroom mirror"
  ];

  // Pomodoro Timer Logic
  useEffect(() => {
    if (pomodoroActive) {
      timerRef.current = setInterval(() => {
        if (pomodoroSeconds === 0) {
          if (pomodoroMinutes === 0) {
            clearInterval(timerRef.current as NodeJS.Timeout);
            setPomodoroActive(false);
            setTimerComplete(true);
            playAlarmSound();
            return;
          }
          setPomodoroMinutes(pomodoroMinutes - 1);
          setPomodoroSeconds(59);
        } else {
          setPomodoroSeconds(pomodoroSeconds - 1);
        }
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [pomodoroActive, pomodoroMinutes, pomodoroSeconds]);

  // Play a beep sound when timer completes
  const playAlarmSound = () => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    audio.play().catch(e => console.log('Audio play failed:', e));
  };

  // Toggle pomodoro timer
  const togglePomodoro = () => {
    setTimerComplete(false);
    setPomodoroActive(!pomodoroActive);
  };

  // Reset pomodoro timer
  const resetPomodoro = () => {
    setPomodoroMinutes(25);
    setPomodoroSeconds(0);
    setPomodoroActive(false);
    setTimerComplete(false);
  };

  // Set pomodoro duration
  const setPomodoroDuration = (minutes: number) => {
    setPomodoroMinutes(minutes);
    setPomodoroSeconds(0);
    setPomodoroActive(false);
    setTimerComplete(false);
  };

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
                <div className={`text-6xl font-bold mb-6 ${timerComplete ? 'text-green-500 animate-pulse' : ''}`}>
                  {String(pomodoroMinutes).padStart(2, '0')}:{String(pomodoroSeconds).padStart(2, '0')}
                </div>
                
                {timerComplete && (
                  <div className="flex items-center justify-center mb-6 bg-green-100 text-green-800 p-3 rounded-md">
                    <Bell className="h-5 w-5 mr-2 animate-bounce" />
                    <span>Time's up! Take a break.</span>
                  </div>
                )}
                
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
                  <Button 
                    variant={pomodoroMinutes === 15 ? "default" : "ghost"} 
                    onClick={() => setPomodoroDuration(15)}
                  >
                    15 min
                  </Button>
                  <Button 
                    variant={pomodoroMinutes === 25 ? "default" : "ghost"} 
                    onClick={() => setPomodoroDuration(25)}
                  >
                    25 min
                  </Button>
                  <Button 
                    variant={pomodoroMinutes === 50 ? "default" : "ghost"} 
                    onClick={() => setPomodoroDuration(50)}
                  >
                    50 min
                  </Button>
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