import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ServiceCatalog from "@/pages/ServiceCatalog";
import ServiceDetail from "@/pages/ServiceDetail";
import CategoryServices from "@/pages/CategoryServices";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import SearchResults from "@/pages/SearchResults";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServiceCatalog} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/categories/:slug" component={CategoryServices} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/search" component={SearchResults} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <Header />
        
        <main id="main-content" className="flex-grow">
          <Router />
        </main>
        
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
