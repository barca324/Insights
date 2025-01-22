import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for routing

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto ">
        <div className="text-xl font-bold">Logo</div>
        
        <div className="hidden md:flex space-x-6  ">
          <Link to="/about-us" className="text-gray-400 py-2">About us</Link>
          <Link to="/sign-in">
          <Button className="px-4 py-2 bg-white text-black rounded-md border border-gray-300 hover:bg-gray-400 transition">Login</Button>

          </Link>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-400">Unlock Your Social Media Insights Today</h1>
          <p className="text-gray-400">Discover the power of your social media data with our comprehensive analytics platform. Make data-driven decisions for your online presence.</p>
          <div className="space-x-4">
            <Link to="/sign-up">
              <Button className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-400 transition">Get Started</Button>
            </Link>
            <Link to="/learn-more">
              <Button className="px-6 py-3 border bg-white text-black border-black rounded-md hover:bg-gray-400 transition">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg aspect-square"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Unlock the Power of Your Social Data</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-lg aspect-video"></div>
            <h3 className="text-xl font-semibold text-gray-400">Effortless Data Integration Across Platforms</h3>
            <p className="text-gray-400">Connect data from accounts and get key data.</p>
            <Link to="/get-started">
              <Button className="text-black underline">Get Started</Button>
            </Link>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-lg aspect-video"></div>
            <h3 className="text-xl font-semibold text-gray-400">In-Depth Analytics for Informed Decisions</h3>
            <p className="text-gray-400">Real-time data and insights keep you ahead.</p>
            <Link to="/learn-more">
              <Button className="text-gray-400underline">Learn More</Button>
            </Link>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-lg aspect-video"></div>
            <h3 className="text-xl font-semibold text-gray-400">Intuitive User Interface for All Skill Levels</h3>
            <p className="text-gray-400">Designed interface for a clear and simple flow.</p>
            <Link to="/learn-more">
              <Button className="underline text-black">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-400">Comprehensive Data Integration for Social Media</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-gray-400">YouTube Analytics</h3>
                <p className="text-gray-400">Track your video performance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-gray-400">LinkedIn Insights</h3>
                <p className="text-gray-400">Monitor professional engagement</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-gray-400">Twitter Engagement</h3>
                <p className="text-gray-400">Analyze your Twitter reach</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-gray-400">Instagram Metrics</h3>
                <p className="text-gray-400">Track Instagram performance</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg aspect-square"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-400">Discover the power of analytics with our all-in-one social media dashboard.</h2>
          <div className="flex space-x-4">
            <Link to="/previous-stats">
              <Button variant="outline" className="p-2 border rounded-full"><ArrowLeft size={24} /></Button>
            </Link>
            <Link to="/next-stats">
              <Button variant="outline" className="p-2 border rounded-full"><ArrowRight size={24} /></Button>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <span className="text-4xl font-bold text-gray-400">90%</span>
            <p className="text-gray-400">Increase in engagement</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-gray-400">75%</span>
            <p className="text-gray-400">Growth in followers</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gray-200 rounded-lg p-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold">Emily Johnson</p>
              <p className="text-gray-400">Social Media Manager</p>
            </div>
          </div>
          <p className="text-lg">"Using this platform transformed my social media strategy. The analytics provided are invaluable for me."</p>
        </div>
      </section>

      {/* Footer */}
      <footer className=" mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-white">Logo</h3>
              <div className="space-y-2">
                <Link to="/use-cases" className="text-gray-400">Use Cases</Link>
                <Link to="/key-metrics" className="text-gray-400">Key Metrics</Link>
                <Link to="/special-plans" className="text-gray-400">Special Plans</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/documentation" className="text-gray-400">Documentation</Link>
                <Link to="/community" className="text-gray-400">Community</Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-sm text-gray-400">
            <p>© 2024 - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
