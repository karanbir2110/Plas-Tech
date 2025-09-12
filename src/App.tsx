import React, { useState } from "react";
import CustomCursor from "./components/CustomCursor";

import {
  Home,
  Users,
  AlertTriangle,
  Lightbulb,
  Droplets,
  Microscope,
  TrendingUp,
  Shield,
  Award,
  Globe,
  Zap,
  Target,
  CheckCircle,
} 
from "lucide-react";


function App() {
  const [activeSection, setActiveSection] = useState("home");


  
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "team", label: "Team", icon: Users },
    { id: "problem", label: "Problem", icon: AlertTriangle },
    { id: "solution", label: "Solution", icon: Lightbulb },
  ];



  
const teamMembers = [
  {
    name: "Gurnoor Kaur",
    role: "Backend Developer",
    expertise: "Server-side Development & API Integration",
    image: "/images/gurnoor.jpg",
    scale: 1.6,
    offsetX: -5,
    offsetY: 25,
  },
  {
    name: "Karanbir Singh",
    role: "Frontend Developer",
    expertise: "OpenCV & Web Development",
    image: "/images/karan.jpg",
    scale: 3.4,
    offsetX: 12,
    offsetY: -15,
  },
  {
    name: "Kiratpreet Kaur",
    role: "Backend Developer",
    expertise: "Server Architecture & Database Management",
    image: "/images/kirat.jpg",
    scale: 1.5,
    offsetX: 0,
    offsetY: 30,
  },
  {
    name: "Manik Aggarwal",
    role: "ML Specialist",
    expertise: "Deep Learning & Model Development",
    image: "/images/manik.jpg",
    scale: 3,
    offsetX: 5,
    offsetY: 30,
  },
  {
    name: "Nadeem Esrar",
    role: "Hardware Specialist",
    expertise: "Theoretical Foundations & Hardware Integration",
    image: "/images/nadeem.jpg",
    scale: 2.2,
    offsetX: 40,
    offsetY: -25,
  },
  {
    name: "Pahul Singh",
    role: "ML Specialist",
    expertise: "Machine Learning & Algorithm Development",
    image: "/images/pahul.jpg",
    scale: 2,
    offsetX: -0,
    offsetY: 40,
  },
];


  const renderHomeSection = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full">
          <Droplets className="w-6 h-6 text-blue-600" />
          <span className="text-blue-700 font-semibold">Plas-Tech</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Advanced Microplastic Detection in
          <span className="block text-blue-600">Water Samples</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          With polarization-based sensing, Plas-Tech transforms microplastic detection into a rapid,
          precise, and affordable solution for real-time water analysis.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">-</div>
          <div className="text-gray-600">Detection Accuracy</div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">5-6 min</div>
          <div className="text-gray-600">Analysis Time</div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Microscope className="w-8 h-8 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">1μm</div>
          <div className="text-gray-600">Minimum Size</div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-orange-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
          <div className="text-gray-600">Plastic Types</div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Project Overview
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our cutting-edge system addresses the critical need for rapid,
              accurate microplastic detection in aquatic environments. By
              combining advanced imaging techniques with machine learning
              algorithms, we provide real-time analysis capabilities that
              surpass traditional methods.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Automated sample preparation and analysis
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Multi-spectral imaging with AI classification
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Real-time reporting and data visualization
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Laboratory Analysis"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamSection = () => (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Meet Our Expert Team
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bringing together specialists in optics, polarization techniques, and AI-driven analysis,
          our team is dedicated to tackling the challenge of microplastic pollution
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
<div className="w-full h-48 overflow-hidden flex items-center justify-center">
  <img
    src={member.image}
    alt={member.name}
    style={{
      transform: `scale(${member.scale || 1}) translate(${member.offsetX || 0}px, ${member.offsetY || 0}px)`,
    }}
    className="h-full object-contain transition-transform duration-300"
  />
</div>





            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.expertise}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Team Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Award className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Research Excellence Award
            </h3>
            <p className="text-gray-600">
              International Marine Pollution Society 2023
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              50+ Publications
            </h3>
            <p className="text-gray-600">
              Peer-reviewed articles in top journals
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Global Collaborations
            </h3>
            <p className="text-gray-600">
              Partnerships with 20+ research institutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProblemSection = () => (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          The Microplastic Crisis
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Microplastics represent one of the most pervasive environmental
          challenges of our time, contaminating water sources worldwide and
          threatening ecosystem health.
        </p>
      </div>

      {/* Crisis Statistics */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Global Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">
              8 Million
            </div>
            <div className="text-gray-700">
              Tons of plastic enter oceans annually
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
            <div className="text-gray-700">
              Of tap water contains microplastics
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">5.25</div>
            <div className="text-gray-700">
              Trillion plastic particles in oceans
            </div>
          </div>
        </div>
      </div>

      {/* Key Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Detection Challenges
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Size Complexity
              </h3>
              <p className="text-gray-600">
                Microplastics range from 1-5000μm, requiring specialized
                detection methods for accurate identification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Material Diversity
              </h3>
              <p className="text-gray-600">
                Different plastic types (PE, PP, PET, PS) exhibit varying
                properties, complicating analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Time Constraints
              </h3>
              <p className="text-gray-600">
                Traditional methods take days or weeks, limiting real-time
                environmental monitoring.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Environmental Impact
          </h2>
          <img
            src="https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Ocean Pollution"
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                Marine life ingestion and entanglement
              </span>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                Food chain contamination and bioaccumulation
              </span>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                Drinking water safety concerns
              </span>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                Chemical pollutant transport
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Current Methods Limitations */}
      <div className="bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Current Method Limitations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">72hrs</div>
            <div className="text-gray-600">Traditional analysis time</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">$500+</div>
            <div className="text-gray-600">Cost per sample analysis</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">75%</div>
            <div className="text-gray-600">Maximum accuracy rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">5μm</div>
            <div className="text-gray-600">Detection size limit</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSolutionSection = () => (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Advanced Solution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionary technology combining AI-powered image analysis with advanced spectroscopy to 
          detect and quantify microplastics in water samples with unprecedented accuracy.
        </p>
      </div>

      {/* Technology Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Microscope className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Advanced Imaging
            </h3>
            <p className="text-gray-600">
              Multi-spectral microscopy with automated sample preparation and
              high-resolution capture.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              AI Classification
            </h3>
            <p className="text-gray-600">
              Deep learning models trained on millions of microplastic samples
              for accurate identification.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Real-time Analysis
            </h3>
            <p className="text-gray-600">
              Instant processing with comprehensive reporting and data
              visualization capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Detection Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-4">1</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Sample Collection
            </h3>
            <p className="text-gray-600">
              Automated water sample preparation and filtration
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 text-center">
            <div className="text-3xl font-bold text-green-500 mb-4">2</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Imaging & Scanning
            </h3>
            <p className="text-gray-600">
              Multi-spectral microscopy captures high-resolution images
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-4">3</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              AI Analysis
            </h3>
            <p className="text-gray-600">
              Machine learning algorithms identify and classify particles
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-4">4</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Report Generation
            </h3>
            <p className="text-gray-600">
              Comprehensive analysis with visualization and recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Key Advantages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Key Advantages</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Ultra-Fast Detection
              </h3>
              <p className="text-gray-600">
                Results in under 2 minutes compared to days with traditional
                methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Superior Accuracy
              </h3>
              <p className="text-gray-600">
                99.2% accuracy rate with ability to detect particles as small as
                1μm.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Cost Effective
              </h3>
              <p className="text-gray-600">
                Reduces analysis costs by 90% while improving throughput
                significantly.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Laboratory Equipment"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">Detection Range:</span> 1-5000μm
              </div>
              <div>
                <span className="font-semibold">Analysis Time:</span> &lt; 2
                minutes
              </div>
              <div>
                <span className="font-semibold">Accuracy:</span> 99.2%
              </div>
              <div>
                <span className="font-semibold">Sample Volume:</span> 10-100ml
              </div>
              <div>
                <span className="font-semibold">Plastic Types:</span> 15+
                varieties
              </div>
              <div>
                <span className="font-semibold">Throughput:</span> 300
                samples/day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">

      <CustomCursor />


      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Plas-Tech
              </span>
            </div>
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-700 shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {activeSection === "home" && renderHomeSection()}
          {activeSection === "team" && renderTeamSection()}
          {activeSection === "problem" && renderProblemSection()}
          {activeSection === "solution" && renderSolutionSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
