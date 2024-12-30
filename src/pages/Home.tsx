// import { Chatbot } from '../components/Chatbot';
import { useStore } from '../store/store';
import { Star, Brain, Target, Zap, Award, Shield, Globe } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';

export const Home = () => {
  const { ratings, articles } = useStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="relative bg-gradient-to-r from-blue-600 via-green-500 to-teal-800 text-white py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              <span className="block overflow-hidden whitespace-nowrap pr-2 animate-typewriter">
              Empowering Businesses with AI Excellence
              </span>
              <style>{`
              @keyframes typewriter {
                from { width: 0; }
                to { width: 100%; }
              }
              .animate-typewriter {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                border-right: 2px solid;
                animation: typewriter 4s steps(40) 1s 1 normal both,
                blinkTextCursor 500ms steps(40) infinite normal;
              }
              @keyframes blinkTextCursor {
                from { border-right-color: rgba(255, 255, 255, 0.75); }
                to { border-right-color: transparent; }
              }
              @media (max-width: 768px) {
                .animate-typewriter {
                animation: none;
                white-space: normal;
                border: none;
                }
              }
              `}</style>
            </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
        At AI Solutions, we harness the power of artificial intelligence to drive innovation,
        efficiency, and growth for your business.
          </p>
          <a
        href="/contact"
        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
        Get Started Today
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose AI Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Brain,
                title: 'Smart Automation',
                description:
                  'Automate repetitive tasks and workflows with intelligent AI solutions.',
              },
              {
                icon: Target,
                title: 'Precision Analytics',
                description:
                  'Get accurate insights and predictions for better decision making.',
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                description:
                  'Quick deployment with minimal disruption to your operations.',
              },
              {
                icon: Shield,
                title: 'Enhanced Security',
                description:
                  'Protect your data with advanced AI-driven security protocols.',
              },
              {
                icon: Globe,
                title: 'Global Accessibility',
                description:
                  'Reach a wider audience with AI that breaks down language barriers.',
              },
              {
                icon: Award,
                title: 'Proven Expertise',
                description:
                  'Benefit from our award-winning AI solutions recognized worldwide.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Past Portfolios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Turbo Farm',
            description: `Turbo Farm is an advanced agricultural solution that leverages the power of
            artificial intelligence (AI) to revolutionize traditional farming methods. Designed
            to optimize efficiency, sustainability, and productivity, Turbo Farm integrates
            cutting-edge technologies to transform every aspect of farming operations.`,
            features: [
          'Real-time monitoring and analysis of soil health, crop conditions, and weather patterns.',
          'Automated decision-making for irrigation.',
            ],
            imageUrl: 'https://datapopalliance.org/wp-content/uploads/2021/11/shutterstock_1707038896-scaled.jpg',
          },
          {
            title: 'Log AI',
            description: `An innovative inventory management solution powered by artificial intelligence,
            designed to streamline and optimize inventory operations for businesses of all
            sizes. With intelligent automation, real-time analytics, and predictive
            capabilities, Log AI transforms how organizations manage stock, supply chains,
            and operational logistics.`,
            features: [
          'Automatically adjusts inventory levels based on demand forecasting and sales trends.',
          'Tracks inventory across warehouses, stores, and delivery networks with precision.',
          'Leverages AI to forecast future demand patterns and seasonal trends.',
          'Seamlessly integrates with existing ERP, POS, and supply chain systems.',
            ],
            imageUrl: 'https://i.pinimg.com/736x/5e/b4/a9/5eb4a9e4db03e720cfd55bc34bf6ace8.jpg',
          },
          {
            title: 'Stockk',
            description: `Stockk is an AI-powered stock trading and investment tool designed to empower
            traders and investors with intelligent insights, real-time market analysis, and
            automated strategies. Whether you're a beginner or a seasoned investor, Stockk
            simplifies the complexities of stock trading while maximizing opportunities for
            growth and minimizing risks.`,
            features: [
          'Leverages advanced algorithms to analyze market trends, news, and historical data.',
          'Provides actionable insights and forecasts to help users make informed investment decisions.',
          'Suggests portfolio adjustments based on risk tolerance, goals, and market conditions.',
          'Accessible on multiple devices for seamless trading on the go.',
            ],
            imageUrl: 'https://img.freepik.com/free-photo/robot-showing-good-progress-graph_1048-3512.jpg',
          },
          {
            title: 'LaundriQ',
            description: `LaundriQ is a cutting-edge AI-powered solution designed to redefine laundry
            care by delivering unparalleled convenience, precision, and fabric protection.
            Developed in collaboration with Samsung washing machines, LaundriQ
            leverages advanced artificial intelligence to analyze fabric quality, optimize
            detergent usage, and select the ideal washing mode for every load.`,
            features: [
          'Uses AI to assess fabric type, condition, and quality in real-time.',
          'Ensures gentle yet effective care tailored to each garment.',
          'Precisely calculates the required detergent amount based on load size, fabric sensitivity, and soil level.',
          'Minimizes water and energy usage through smart load assessment and cycle adjustments.',
          'Connects with Samsung SmartThings for remote control and monitoring.',
            ],
            imageUrl: 'https://img.freepik.com/free-photo/job-profession-door-package-environment_1134-1021.jpg',
          },
        ].map((portfolio, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <img src={portfolio.imageUrl} alt={portfolio.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-3">{portfolio.title}</h3>
            <p className="text-gray-600 mb-4">{portfolio.description}</p>
            <ul className="list-disc list-inside text-gray-600">
          {portfolio.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
            </ul>
          </div>
        ))}

          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ratings.map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <p className="mb-4">"{testimonial.comment}"</p>
                <p className="font-bold">{testimonial.userName}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                      ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions? We'd love to hear from you. Reach out and we'll get back to you shortly.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
