import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import CompletedTasks from "./pages/CompletedTasks";
import Tools from "./pages/Tools";
import Gil from "./pages/Gil";
import NotFound from "./pages/NotFound";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

function App() {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/tasks" element={<Tasks />} />
          <Route path="/dashboard/completed" element={<CompletedTasks />} />
          <Route path="/dashboard/tools" element={<Tools />} />
          <Route path="/dashboard/gil" element={<Gil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
}

export default App;