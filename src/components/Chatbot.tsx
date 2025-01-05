import { useState } from 'react';
import { Send } from 'lucide-react';
import { BsRobot } from "react-icons/bs";
import ReactMarkdown from 'react-markdown';

// import OpenAI from 'openai';
// import { base } from 'framer-motion/client';

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
//   baseURL: 'https://integrate.api.nvidia.com/v1',

// });

const initialSuggestions = [
  { text: "What services do you offer?", key: "services" },
  { text: "How much do your solutions cost?", key: "pricing" },
  { text: "Can you help with my business?", key: "help" }
];

const responses = {
  services: "We offer AI-powered solutions including:\n- Business Automation\n- Data Analysis\n- Digital Transformation\n- Custom AI Solutions",
  pricing: "Our pricing varies based on your specific needs. Would you like to schedule a consultation?",
  help: "We'd love to help! Could you tell us more about your business needs?",
  default: "I'm here to help! Feel free to ask about our services, pricing, or how we can help your business."
};

const Aisolutions = `AI-Solution is a fictitious start-up company based in Sunderland. AI-Solutions leverages AI to assist
various industries with software solutions to rapidly and proactively address issues that can impact
the digital employee experience, thus speeding up design, engineering, and innovation. AI-Solutions
has distinguished itself by integrating an AI-powered virtual assistant that responds to users' inquiries
and provides AI-based, affordable prototyping solutions. This unique selling point sets them apart
from their competitors and is sure to pique customer's interest. The company's mission is to innovate,
promote, and deliver the future of the digital employee experience, with a strong focus on supporting
people at work. This commitment is at the core of the global expansion and aims to make a worldwide
impact.`;

const Pastportfolio = `
const portfolioProjects = [
  {
    id: '1',
    title: 'Turbo Farm',
    description: 'Turbo Farm is an advanced agricultural solution that leverages the power of artificial intelligence (AI) to revolutionize traditional farming methods. Designed to optimize efficiency, sustainability, and productivity, Turbo Farm integrates cutting-edge technologies to transform every aspect of farming operations.',
    keyFeatures: [
      'Real-time monitoring and analysis of soil health, crop conditions, and weather patterns.',
      'Automated decision-making for irrigation.'
    ]
  },
  {
    id: '2',
    title: 'Log AI',
    description: 'An innovative inventory management solution powered by artificial intelligence, designed to streamline and optimize inventory operations for businesses of all sizes. With intelligent automation, real-time analytics, and predictive capabilities, Log AI transforms how organizations manage stock, supply chains, and operational logistics.',
    keyFeatures: [
      'Automatically adjusts inventory levels based on demand forecasting and sales trends.',
      'Tracks inventory across warehouses, stores, and delivery networks with precision.',
      'Leverages AI to forecast future demand patterns and seasonal trends.',
      'Seamlessly integrates with existing ERP, POS, and supply chain systems.'
    ]
  },
  {
    id: '3',
    title: 'Stockk',
    description: 'Stockk is an AI-powered stock trading and investment tool designed to empower traders and investors with intelligent insights, real-time market analysis, and automated strategies. Whether you're a beginner or a seasoned investor, Stockk simplifies the complexities of stock trading while maximizing opportunities for growth and minimizing risks.',
    keyFeatures: [
      'Leverages advanced algorithms to analyze market trends, news, and historical data.',
      'Provides actionable insights and forecasts to help users make informed investment decisions.',
      'Suggests portfolio adjustments based on risk tolerance, goals, and market conditions.',
      'Accessible on multiple devices for seamless trading on the go.'
    ]
  },
  {
    id: '4',
    title: 'LaundriQ',
    description: 'LaundriQ is a cutting-edge AI-powered solution designed to redefine laundry care by delivering unparalleled convenience, precision, and fabric protection. Developed in collaboration with Samsung washing machines, LaundriQ leverages advanced artificial intelligence to analyze fabric quality, optimize detergent usage, and select the ideal washing mode for every load.',
    keyFeatures: [
      'Uses AI to assess fabric type, condition, and quality in real-time.',
      'Ensures gentle yet effective care tailored to each garment.',
      'Precisely calculates the required detergent amount based on load size, fabric sensitivity, and soil level.',
      'Minimizes water and energy usage through smart load assessment and cycle adjustments.',
      'Connects with Samsung SmartThings for remote control and monitoring.'
    ]
  }
];
`;

const contact = `
Form link: [Contact Form](/contact)
Contact us for more information:
email: contact@ai-solutions.com, 
phone: +44 123 456 7890
location: 123 AI Street, Sunderland, SR1 1AA, United Kingdom
`;

const getAIResponse = async (text: string) => {
  const systemprompt = `"You are an AI assistant for AI-Solution. Provide concise and clear responses. if someone asks about the company, you can provide information about the company, past projects, and contact details. but don't provide any personal information and fake informations."`;
  const aboutcompany = { Aisolutions, Pastportfolio};
  const prompt = `
    User query: "${text}"
  `;

  try {
    const response = await fetch('http://localhost:5000/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
      body: JSON.stringify({
        model: "meta/llama-3.2-3b-instruct",
        messages: [
          { "role": "system", "content": systemprompt,"about": aboutcompany, "context": "AI-Solution", "contact": contact },
          { "role": "user", "content": prompt }
        ],
        temperature: 0.2,
        top_p: 0.7,
        max_tokens: 1024,
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 402) {
        return "Payment required. Please check your API subscription.";
      }
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder('utf-8');
    let aiResponse = '';

    while (true) {
      const { done, value } = await reader?.read() || {};
      if (done) break;
      aiResponse += decoder.decode(value, { stream: true });
    }

    console.log('Raw AI Response:', aiResponse); // Log the raw response

    const jsonResponse = aiResponse.split('\n')
  .filter(line => line.trim().startsWith('data: ') && !line.includes('[DONE]'))
  .map(line => {
    const jsonPart = line.trim().substring(6);
    try {
      return JSON.parse(jsonPart);
    } catch (err) {
      console.error('Error parsing JSON chunk:', err);
      return null;
    }
  })
  .filter(Boolean);

    const aiMessage = jsonResponse.map(obj => obj.choices?.[0]?.delta?.content).join('') || "Sorry, I couldn't process your request.";
    return aiMessage;

  } catch (error) {
    console.error('Error fetching AI response:', error);
    return "There was an error processing your request. Please try again later.";
  }

};



export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(initialSuggestions);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    const userMessage = { text, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    
    // Get AI response
    getAIResponse(text).then(aiResponse => {
      if (typeof aiResponse === 'string') {
        const response = { 
          text: aiResponse,
          isUser: false 
        };
        
        setMessages(prev => [...prev, response]);
      }
      setLoading(false);
      updateSuggestions(text);
    }).catch(() => {
      const response = { 
        text: responses.default,
        isUser: false 
      };
      
      setMessages(prev => [...prev, response]);
      setLoading(false);
      updateSuggestions('default');
    });
    
    setInput('');
  };

  const updateSuggestions = (key: string) => {
    if (key === 'services') {
      setSuggestions([
        { text: "Tell me more about Business Automation", key: "business_automation" },
        { text: "What is Digital Transformation?", key: "digital_transformation" }
      ]);
    } else if (key === 'pricing') {
      setSuggestions([
        { text: "Can I get a detailed quote?", key: "quote" },
        { text: "Do you offer discounts?", key: "discounts" }
      ]);
    } else {
      setSuggestions(initialSuggestions);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
      <div className="bg-white rounded-lg shadow-xl w-96 h-[32rem] flex flex-col">
        <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-bold">AI Assistant</h3>
        <button type="button" onClick={() => setIsOpen(false)} className="text-white">&times;</button>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 && (
          <div className="space-y-2">
          <p className="text-gray-600">Hello! How can I help you today?</p>
          <div className="space-y-2">
            {suggestions.map((suggestion) => (
            <button type="button"
              key={suggestion.key}
              onClick={() => handleSend(suggestion.text)}
              className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {suggestion.text}
            </button>
            ))}
          </div>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
          <div className={`inline-block p-2 rounded-lg ${
            msg.isUser ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}>
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
          </div>
        ))}
        {loading && (
          <div className="text-center text-gray-500">AI Assistant is typing...</div>
        )}
        </div>
        
        <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Type your message..."
          />
          <button
          type="button"
          title='Send Message'
          onClick={() => handleSend()}
          className="bg-indigo-600 text-white p-2 rounded-lg"
          >
          <Send className="h-5 w-5" />
          </button>
        </div>
        </div>
      </div>
      ) : (
        <button
          type="button"
          title='Open Chatbot'
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors animate-bounce"
        >
          <BsRobot className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};