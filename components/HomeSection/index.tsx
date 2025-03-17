
import React from 'react';
import Button from '../Button';
import { ArrowRight, Scan, MessageCircle, Video } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 dark:from-blue-950/20 dark:via-transparent dark:to-indigo-950/20"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Chip component */}
      <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-border px-4 py-1.5 rounded-full inline-flex items-center space-x-1 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          <span className="text-xs font-medium">Redefining Business Networking</span>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight tracking-tight mb-6 max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
        Turn Your Business Card Into An <span className="text-primary">Interactive</span> AI Experience
      </h1>
      
      {/* Description */}
      <p className="text-muted-foreground text-center max-w-xl mb-8 text-lg animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
        Scan any business card to create an interactive 3D avatar that can answer questions about your business in real-time
      </p>
      
      {/* Call-to-action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
        <Button 
          to="/scan/9x3xaj6" 
          variant="primary" 
          size="lg"
          icon={<ArrowRight className="h-5 w-5" />}
        >
          Start Scanning
        </Button>
        <Button 
          to="/learn-more" 
          variant="secondary" 
          size="lg"
        >
          Learn More
        </Button>
      </div>

      {/* 3D card model */}
      <div className="relative mt-16 w-full max-w-lg aspect-[4/3] animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-40 bg-white dark:bg-gray-800 rounded-xl shadow-xl rotate-12 transform hover:rotate-0 transition-transform duration-500 animate-float">
            <div className="h-full w-full flex flex-col justify-between p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <div className="flex justify-between">
                <div className="text-white font-medium">XR Card</div>
                <div className="text-white/80 font-mono text-xs">AI Powered</div>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-white/90 text-xs font-mono">
                  <div>John Doe</div>
                  <div>Product Designer</div>
                </div>
                <div className="bg-white/20 rounded-full p-1">
                  <Scan className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Avatar visual hint */}
          <div className="absolute top-0 right-0 w-24 h-24 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-70 animate-pulse-soft"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full h-16 w-16 flex items-center justify-center">
                <div className="text-primary text-4xl">👤</div>
              </div>
            </div>
          </div>
          
          {/* Feature hints */}
          <div className="absolute bottom-0 left-0 flex space-x-2">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-lg">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-lg">
              <Video className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;