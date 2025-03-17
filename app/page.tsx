import React from 'react';
import { ArrowRight, Globe, Scan, MessageCircle } from 'lucide-react';

import Header from '@/components/Header';
import FeatureCard from '@/components/FeatureCard';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <div className="flex-1 pt-24 lg:pt-32">
        <div className="container px-4 md:px-6 space-y-16 max-w-7xl mx-auto">
          {/* Main Hero */}
          <div className="flex flex-col items-center text-center space-y-8 py-12">
            <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
              Introducing XR Card
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
              Your Business Card <span className="text-primary">Comes to Life</span> with AI
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Turn ordinary business cards into interactive experiences. Scan to create your 3D avatar that talks about your business in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/scan/9x3xaj6" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Start Scanning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    How It Works
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="text-sm font-semibold">Simple 3-step process</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>1. Scan your business card with our app</li>
                        <li>2. We create a 3D avatar of you</li>
                        <li>3. Your avatar answers questions in real-time</li>
                      </ul>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          
          {/* Floating Card Preview */}
          <div className="relative h-80 w-full max-w-3xl mx-auto my-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform rotate-2 opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform -rotate-2 opacity-10"></div>
            <div className="relative h-full w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="text-white text-center px-4">
                <h2 className="text-2xl font-bold mb-2">Your 3D Avatar</h2>
                <p className="text-white/80">Interactive, intelligent, and always ready to represent you</p>
                <div className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-white/10 backdrop-blur-sm px-6 text-sm font-medium text-white shadow transition-colors hover:bg-white/20">
                <Link href="/scan/9x3xaj6" > <Scan className="mr-2 h-4 w-4" /> Scan to preview   </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Revolutionary Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our XR business cards transform networking with cutting-edge technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <FeatureCard 
                icon={<Scan className="h-5 w-5" />}
                title="Quick Scanning"
                description="Instantly scan any business card and bring it to life with our AR technology"
              />
              <FeatureCard 
                icon={<MessageCircle className="h-5 w-5" />}
                title="AI Conversations"
                description="Talk with the 3D avatar and get real-time information about the business"
                className="md:translate-y-4"
              />
              <FeatureCard 
                icon={<Globe className="h-5 w-5" />}
                title="Global Networking"
                description="Connect with professionals worldwide in a more engaging and memorable way"
              />
            </div>
          </div>
          
          {/* CTA */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-8 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to transform your networking?</h3>
              <p className="text-muted-foreground max-w-2xl">
                Join thousands of professionals already using XR Card to stand out from the crowd
              </p>
              <Link href="/scan/9x3xaj6" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Try It Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row px-4 md:px-6 max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2023 XR Card. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* <Link href="/features" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Pricing
            </Link> */}
            <Link href="/scan/9x3xaj6" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Scan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;