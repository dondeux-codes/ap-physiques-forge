import { Award, Target, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-coach.jpg";

const About = () => {
  const achievements = [
    { icon: Users, number: "500+", label: "Clients Transformed" },
    { icon: Calendar, number: "5+", label: "Years Experience" },
    { icon: Award, number: "15+", label: "Certifications" },
    { icon: Target, number: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-intensity">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-white mb-6">
                MEET YOUR
                <br />
                <span className="text-gradient">COACH</span>
              </h1>
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

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-foreground mb-6">MY PHILOSOPHY</h2>
            <p className="text-xl text-muted-foreground">
              Elite results require elite standards. No shortcuts, no excuses.
            </p>
          </div>

          <div className="space-y-12">
            <div className="card-intense">
              <h3 className="text-2xl font-bold text-white mb-4">Precision Over Perfection</h3>
              <p className="text-gray-300 leading-relaxed">
                Perfect doesn't exist, but precise does. Every program is meticulously crafted 
                based on your specific goals, limitations, and lifestyle. We're not chasing 
                perfect—we're building sustainable systems that compound into extraordinary results.
              </p>
            </div>

            <div className="card-intense">
              <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-300 leading-relaxed">
                Feelings lie. Data doesn't. Every decision we make is backed by your progress 
                metrics, performance indicators, and objective measurements. We adjust based on 
                what your body is actually doing, not what we think it should be doing.
              </p>
            </div>

            <div className="card-intense">
              <h3 className="text-2xl font-bold text-white mb-4">Accountability Without Compromise</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm not your friend during training—I'm your coach. That means holding you to 
                the standards that will actually get you results, even when it's uncomfortable. 
                Elite results require elite commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 bg-intensity">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white mb-16">MY BACKGROUND</h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              <p>
                Five years ago, I was where many of my clients start—frustrated with mediocre 
                results from cookie-cutter programs and generic advice. I had the knowledge but 
                lacked the precision and accountability that separates good from great.
              </p>
              
              <p>
                That frustration drove me to develop a systematic approach to physique transformation 
                that eliminates guesswork and maximizes results. I've since helped over 500 individuals 
                achieve transformations they thought were impossible.
              </p>
              
              <p>
                My methodology combines exercise science, nutrition precision, and psychological 
                accountability into a comprehensive system. Every client gets a completely 
                customized approach—because your transformation should be as unique as you are.
              </p>
              
              <p>
                I don't believe in one-size-fits-all solutions. I believe in one-size-fits-you 
                solutions that are sustainable, scalable, and most importantly—effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;