
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order using the Track Order page with your order ID, or check the tracking link sent to your email."
    },
    {
      question: "What is your return policy?",
      answer: "We offer 30-day returns on most items. Items must be in original condition with tags attached."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days, express shipping takes 2-3 days, and same-day delivery is available in select cities."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within India. International shipping will be available soon."
    },
    {
      question: "How can I cancel my order?",
      answer: "You can cancel your order within 2 hours of placing it by contacting our customer service team."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <div className="container mx-auto max-w-4xl py-12 px-6">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-stone-900 mb-4">
            Help Center
          </h1>
          <p className="text-stone-600 text-lg">We're here to help you with any questions or concerns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="adventure-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-olive-100 rounded-lg w-fit">
                <MessageCircle className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl">Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-stone-600 mb-4">
                Chat with our support team in real-time
              </p>
              <p className="text-center text-sm text-stone-500">Available 24/7</p>
            </CardContent>
          </Card>

          <Card className="adventure-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-olive-100 rounded-lg w-fit">
                <Phone className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl">Phone Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-stone-600 mb-4">
                Call us for immediate assistance
              </p>
              <p className="text-center text-sm font-semibold text-stone-900">+91-9876543210</p>
            </CardContent>
          </Card>

          <Card className="adventure-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-olive-100 rounded-lg w-fit">
                <Mail className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl">Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-stone-600 mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <p className="text-center text-sm font-semibold text-stone-900">support@gocart.com</p>
            </CardContent>
          </Card>
        </div>

        <Card className="adventure-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <HelpCircle className="h-6 w-6 mr-3" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription className="text-lg">Find quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-stone-200 pb-6 last:border-b-0">
                  <h3 className="font-semibold text-lg mb-3 text-stone-900">{faq.question}</h3>
                  <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpCenter;
