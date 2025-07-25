import { Target, Utensils, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Custom Training Plans",
      description: "Precision-designed programs tailored to your goals, experience level, and schedule. Every rep, set, and progression mapped for maximum results.",
      features: ["Personalized programming", "Weekly progressions", "Form video analysis", "Equipment adaptations"]
    },
    {
      icon: Utensils,
      title: "Nutrition Coaching",
      description: "No-nonsense nutrition strategies that work in the real world. Flexible meal planning that fits your lifestyle without sacrificing results.",
      features: ["Macro calculations", "Meal timing strategies", "Supplement guidance", "Recipe databases"]
    },
    {
      icon: MessageSquare,
      title: "Weekly Check-ins",
      description: "Direct access to your coach with detailed progress reviews, plan adjustments, and accountability that keeps you on track.",
      features: ["Progress photo analysis", "Measurement tracking", "Plan modifications", "Goal reassessment"]
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Data-driven approach to monitor your transformation. Track strength gains, body composition changes, and performance metrics.",
      features: ["Strength progressions", "Body composition analysis", "Performance metrics", "Monthly reports"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-intensity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6">
            ELITE COACHING
            <br />
            <span className="text-gradient">SYSTEM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every element of your transformation is strategically designed and continuously optimized. 
            No guesswork, no generic plans—just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-intense group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/plans" className="btn-cta group">
            View Coaching Plans
            <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;