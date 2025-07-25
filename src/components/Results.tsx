import { TrendingUp, Target, Clock } from "lucide-react";
import transformationImage from "@/assets/transformation-gallery.jpg";

const Results = () => {
  const stats = [
    { icon: TrendingUp, metric: "Average Weight Loss", value: "35lbs", timeframe: "16 weeks" },
    { icon: Target, metric: "Body Fat Reduction", value: "15%", timeframe: "12 weeks" },
    { icon: Clock, metric: "Strength Increase", value: "125%", timeframe: "20 weeks" },
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">
            CLIENT
            <br />
            <span className="text-gradient">TRANSFORMATIONS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data doesn't lie. These are the real numbers from real clients who committed 
            to the process and achieved extraordinary transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={transformationImage}
              alt="Client transformation results"
              className="rounded-2xl shadow-intense w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-intense group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{stat.metric}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-gradient">{stat.value}</span>
                      <span className="text-sm text-gray-400">in {stat.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-8">
            Ready to become the next success story?
          </p>
          <a href="/contact" className="btn-cta">
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;