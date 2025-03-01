import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shuffle, ThumbsUp, ThumbsDown } from "lucide-react";

function Gil() {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isPositive, setIsPositive] = useState<boolean | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generatePrediction = () => {
    setIsAnimating(true);
    
    // Clear previous prediction during animation
    setPrediction(null);
    
    // Random delay between 1-2 seconds for suspense
    setTimeout(() => {
      const willFuck = Math.random() >= 0.5;
      setIsPositive(willFuck);
      
      if (willFuck) {
        setPrediction("Gil is getting lucky today! 🎉");
      } else {
        setPrediction("Not today, Gil. Maybe tomorrow... 😔");
      }
      
      setIsAnimating(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Gil's Prediction Page</h1>
        <p className="text-slate-400 mt-1">Find out what fate has in store for Gil today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prediction Generator */}
        <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
          <div className="h-1 bg-purple-500"></div>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-100">
              <Shuffle className="mr-2 h-5 w-5 text-purple-400" />
              Gil's Fortune Teller
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[250px]">
            <Button 
              onClick={generatePrediction}
              disabled={isAnimating}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 px-8 rounded-xl text-lg mb-8"
            >
              {isAnimating ? (
                <span className="flex items-center">
                  <Shuffle className="mr-2 h-5 w-5 animate-spin" />
                  Predicting...
                </span>
              ) : (
                <span className="flex items-center">
                  <Shuffle className="mr-2 h-5 w-5" />
                  Will Gil Get Lucky Today?
                </span>
              )}
            </Button>
            
            <p className="text-slate-400 text-sm text-center">
              Click the button to find out Gil's fate for today
            </p>
          </CardContent>
        </Card>

        {/* Prediction Result */}
        <Card className="bg-slate-800 border-slate-700 shadow-lg overflow-hidden">
          <div className={`h-1 ${isPositive === null ? 'bg-slate-600' : isPositive ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-100">
              {isPositive === null ? (
                <span>Awaiting Prediction...</span>
              ) : isPositive ? (
                <span className="flex items-center">
                  <ThumbsUp className="mr-2 h-5 w-5 text-emerald-400" />
                  Positive Prediction
                </span>
              ) : (
                <span className="flex items-center">
                  <ThumbsDown className="mr-2 h-5 w-5 text-red-400" />
                  Negative Prediction
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center min-h-[250px]">
            {isAnimating ? (
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-slate-600 border-t-purple-500 rounded-full animate-spin mb-4"></div>
                <p className="text-slate-400">The stars are aligning...</p>
              </div>
            ) : prediction ? (
              <div className="text-center">
                <p className={`text-2xl font-bold mb-4 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {prediction}
                </p>
                <p className="text-slate-400 text-sm">
                  {isPositive 
                    ? "The universe has spoken favorably!" 
                    : "The cosmic forces suggest patience..."}
                </p>
              </div>
            ) : (
              <p className="text-slate-500 text-center">
                Click the button on the left to generate a prediction
              </p>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-slate-500 text-sm italic">
          Note: This prediction is purely for entertainment purposes. Past results do not guarantee future performance.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Gil;