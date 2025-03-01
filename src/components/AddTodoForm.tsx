import { useState } from "react";
import { useTodo } from "@/context/TodoContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div>
      <div className="mb-4">
        <CardTitle className="text-xl flex items-center text-slate-100">
          <PlusCircle className="mr-2 h-5 w-5 text-emerald-400" />
          Add New Task
        </CardTitle>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 focus-visible:ring-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Task description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 focus-visible:ring-emerald-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <Button 
            type="submit" 
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Add Task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;