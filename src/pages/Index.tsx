import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-blue-600">Hello World!</CardTitle>
          <CardDescription className="text-center">Welcome to your new website</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            This is a simple Hello World website built with React and Tailwind CSS.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;