
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, RefreshCw, Clock, Shield } from "lucide-react";

const Returns = () => {
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
            Returns & Refunds
          </h1>
          <p className="text-stone-600 text-lg">Easy returns and hassle-free refunds at GoCart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="adventure-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-olive-100 rounded-lg w-fit">
                <RefreshCw className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl">30-Day Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-stone-600">
                Return any item within 30 days of purchase for a full refund
              </p>
            </CardContent>
          </Card>

          <Card className="adventure-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-olive-100 rounded-lg w-fit">
                <Clock className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl">Quick Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-stone-600">
                Refunds processed within 3-5 business days after we receive your return
              </p>
            </CardContent>
          </Card>

          <Card className="adventure-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-olive-100 rounded-lg w-fit">
                <Shield className="h-8 w-8 text-olive-600" />
              </div>
              <CardTitle className="text-xl">Quality Guarantee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-stone-600">
                If you're not satisfied with your purchase, we'll make it right
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="adventure-card">
          <CardHeader>
            <CardTitle className="text-2xl">How to Return an Item</CardTitle>
            <CardDescription className="text-lg">Follow these simple steps to return your purchase</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-olive-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">1. Contact Us</h3>
                <p className="text-stone-600">Email us at returns@gocart.com with your order number and reason for return.</p>
              </div>
              <div className="border-l-4 border-olive-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">2. Get Return Label</h3>
                <p className="text-stone-600">We'll send you a prepaid return shipping label within 24 hours.</p>
              </div>
              <div className="border-l-4 border-olive-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">3. Pack & Ship</h3>
                <p className="text-stone-600">Pack the item securely in its original packaging and attach the return label.</p>
              </div>
              <div className="border-l-4 border-olive-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">4. Get Refunded</h3>
                <p className="text-stone-600">Once we receive and inspect your return, we'll process your refund.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Returns;
