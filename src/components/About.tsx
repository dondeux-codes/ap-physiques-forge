import { Award, Target, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-coach.jpg";

const About = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Clients Transformed" },
    { icon: Calendar, number: "5+", label: "Years Experience" },
    { icon: Award, number: "15+", label: "Certifications" },
    { icon: Target, number: "98%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="py-20 bg-intensity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-white mb-6">
              MEET YOUR
              <br />
              <span className="text-gradient">COACH</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm not here to sell you dreams. I'm here to deliver results through 
              science-backed programming, unwavering accountability, and the kind of 
              coaching that separates champions from everyone else.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gradient">{achievement.number}</div>
                  <div className="text-sm text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="AP Physiques Coach" 
              className="rounded-2xl shadow-intense"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;