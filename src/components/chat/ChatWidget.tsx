import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const INITIAL_MESSAGES = [
  { text: "👋 Hello! How can I help you today?", isBot: true },
  { text: "I'm your 24/7 MedSync assistant. Feel free to ask any questions!", isBot: true }
];

const AUTO_RESPONSES: { [key: string]: string } = {
  "hello": "Hi there! How can I assist you with MedSync today?",
  "hi": "Hello! What can I help you with?",
  "help": "I can help you with:\n- Medical records\n- Device connectivity\n- Appointments\n- General inquiries\nWhat would you like to know more about?",
  "appointment": "To schedule an appointment, please go to the Appointments section or call us at 1-800-MEDSYNC.",
  "records": "Your medical records are securely stored and encrypted. You can access them anytime from your dashboard.",
  "contact": "You can reach us at support@medsync.com or call 1-800-MEDSYNC.",
  "default": "Thank you for your message. Our team will get back to you soon. For immediate assistance, please call 1-800-MEDSYNC."
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState("");

  const getBotResponse = (message: string) => {
    const lowercaseMsg = message.toLowerCase();
    for (const [key, response] of Object.entries(AUTO_RESPONSES)) {
      if (lowercaseMsg.includes(key)) {
        return response;
      }
    }
    return AUTO_RESPONSES.default;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { text: inputMessage, isBot: false };
    
    // Get bot response
    const botResponse = { text: getBotResponse(inputMessage), isBot: true };
    
    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage("");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 flex items-center gap-2"
      >
        <MessageCircle className="h-6 w-6" />
        <span>Chat with us</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[600px]">
      {/* Header */}
      <div className="bg-blue-600 p-4 rounded-t-lg flex justify-between items-center">
        <div className="text-white">
          <h3 className="font-semibold">MedSync Support</h3>
          <p className="text-sm text-blue-100">We typically reply instantly</p>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-blue-100"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
