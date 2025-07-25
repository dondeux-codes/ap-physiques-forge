import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coach.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AP Physiques Coach" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-white mb-6 animate-glow">
            NO FLUFF.
            <br />
            <span className="text-gradient">JUST RESULTS.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elite physique coaching for people who don't quit. Transform your body with 
            precision programming, no-nonsense nutrition, and accountability that delivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact" className="btn-cta group">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="btn-ghost group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Success Stories
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Transformations" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
              { number: "5★", label: "Client Rating" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-intense text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;