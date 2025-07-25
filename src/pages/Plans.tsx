import { Check, Star, ArrowRight, Users, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Plans = () => {
  const plans = [
    {
      name: "Foundation",
      price: "$197",
      period: "/month",
      description: "Perfect for beginners ready to build sustainable habits and see real progress.",
      features: [
        "Custom training program",
        "Nutrition guidelines & macro targets",
        "Weekly check-ins",
        "Form video analysis",
        "Progress tracking tools",
        "Basic supplement guidance"
      ],
      recommended: false,
      icon: Users
    },
    {
      name: "Transformation",
      price: "$297",
      period: "/month",
      description: "For serious individuals ready to make dramatic changes with full support.",
      features: [
        "Everything in Foundation",
        "Daily nutrition coaching",
        "Bi-weekly program adjustments",
        "24/7 messaging support",
        "Meal planning assistance",
        "Advanced supplement protocols",
        "Monthly strategy calls"
      ],
      recommended: true,
      icon: Target
    },
    {
      name: "Elite",
      price: "$497",
      period: "/month",
      description: "Maximum support for those demanding the absolute best results possible.",
      features: [
        "Everything in Transformation",
        "Weekly 1-on-1 calls",
        "Custom meal plans",
        "Advanced body composition analysis",
        "Lifestyle optimization coaching",
        "Priority support (under 2 hours)",
        "Quarterly in-person assessment"
      ],
      recommended: false,
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-intensity">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">
            CHOOSE YOUR
            <br />
            <span className="text-gradient">TRANSFORMATION</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Every plan is designed to deliver results. The difference is the level of support 
            and speed of transformation you want to achieve.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative card-intense ${plan.recommended ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <plan.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.recommended 
                      ? 'btn-cta' 
                      : 'btn-secondary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-intensity">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white mb-16">COMMON QUESTIONS</h2>
          
          <div className="space-y-8">
            {[
              {
                question: "What's the minimum commitment?",
                answer: "All plans are month-to-month with no long-term contracts. However, meaningful transformations typically take 3-6 months of consistent effort."
              },
              {
                question: "Can I switch plans?",
                answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
              },
              {
                question: "What if I'm not satisfied?",
                answer: "If you're not completely satisfied within the first 30 days and have followed the program as prescribed, we'll provide a full refund."
              },
              {
                question: "Do you work with beginners?",
                answer: "Yes. Our Foundation plan is specifically designed for beginners, but we've successfully coached everyone from complete novices to competitive athletes."
              },
              {
                question: "Is this only for weight loss?",
                answer: "Not at all. We specialize in complete body recomposition—whether your goal is fat loss, muscle gain, strength building, or athletic performance."
              }
            ].map((faq, index) => (
              <div key={index} className="card-intense">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-foreground mb-6">READY TO START?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free consultation to discuss your goals and determine the best plan for your transformation.
          </p>
          <Link to="/contact" className="btn-cta">
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plans;