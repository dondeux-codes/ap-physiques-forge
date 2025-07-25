import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, TrendingUp } from "lucide-react";
import transformationImage from "@/assets/transformation-gallery.jpg";

const Transformations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations = [
    {
      name: "Marcus",
      timeframe: "16 weeks",
      results: "Lost 45lbs, Gained Muscle",
      image: transformationImage,
      stats: { weight: "-45lbs", bodyfat: "-12%", strength: "+85%" },
      quote: "AP Physiques didn't just change my body—it changed my entire mindset. The accountability and precision coaching made all the difference."
    },
    {
      name: "Sarah",
      timeframe: "12 weeks",
      results: "Body Recomposition",
      image: transformationImage,
      stats: { weight: "-8lbs", bodyfat: "-18%", strength: "+120%" },
      quote: "I thought I knew how to train and eat. AP showed me what elite-level coaching actually looks like. Results speak for themselves."
    },
    {
      name: "David",
      timeframe: "20 weeks",
      results: "Complete Transformation",
      image: transformationImage,
      stats: { weight: "-60lbs", bodyfat: "-20%", strength: "+150%" },
      quote: "Two decades of yo-yo dieting ended here. This isn't just a program—it's a complete lifestyle overhaul that actually works."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section id="transformations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">
            REAL PEOPLE.
            <br />
            <span className="text-gradient">REAL RESULTS.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't stock photos or unrealistic expectations. These are real clients who committed 
            to the process and achieved extraordinary transformations.
          </p>
        </div>

        {/* Transformation Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-card border border-border shadow-intense">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={transformations[currentIndex].image}
                  alt={`${transformations[currentIndex].name} transformation`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(transformations[currentIndex].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-gray-300 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {transformations[currentIndex].name}
                  </h3>
                  <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {transformations[currentIndex].timeframe}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {transformations[currentIndex].results}
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg text-foreground leading-relaxed mb-8 italic">
                  "{transformations[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-8">
            Ready to write your own success story?
          </p>
          <a href="/contact" className="btn-cta">
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transformations;