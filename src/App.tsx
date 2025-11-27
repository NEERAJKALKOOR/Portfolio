import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Spline from "@splinetool/react-spline";

const queryClient = new QueryClient();

const App = () => (
  <div className="relative min-h-screen font-sans">
    {/* Background Layer */}
    <div className="fixed inset-0 w-full h-full z-[-2]">
      {/* Gradient goes below */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />

      {/* Spline sits above gradient */}
      <div className="absolute inset-0 z-[-1]">
        <Spline
          scene="https://prod.spline.design/ZpP-ns3yGAmW63uc/scene.splinecode"
                  // scene="https://prod.spline.design/QWZXWn1dDnoxOWGR/scene.splinecode"
          onLoad={() => console.log("Spline loaded successfully")}
          onError={(error) => console.error("Spline failed to load:", error)}
        />
      </div>

      {/* Overlay to darken for readability */}
      <div className="absolute inset-0 bg-black/0 z-0"></div>
    </div>

    {/* React App content */}
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
