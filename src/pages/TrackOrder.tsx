
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Package } from "lucide-react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setTrackingResult(`Order ${orderId} is currently being processed and will be shipped within 2-3 business days.`);
    }
  };

  return (
    <div className="min-h-screen bg-off-white">
      <div className="container mx-auto max-w-2xl py-12 px-6">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="adventure-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-6 p-4 bg-olive-100 rounded-lg w-fit">
              <Package className="h-8 w-8 text-olive-600" />
            </div>
            <CardTitle className="text-3xl font-semibold text-stone-900">Track Your Order</CardTitle>
            <CardDescription className="text-stone-600 text-lg">
              Enter your order ID to get the latest updates on your package
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="orderId" className="text-stone-900 font-medium">Order ID</Label>
                <Input
                  id="orderId"
                  type="text"
                  placeholder="Enter your order ID (e.g., GO123456789)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="h-12 bg-stone-50 border-stone-200 focus:border-olive-500 focus:ring-olive-500"
                  required
                />
              </div>
              
              <Button type="submit" className="adventure-button w-full h-12 text-lg">
                Track Order
              </Button>
            </form>

            {trackingResult && (
              <div className="mt-8 p-6 bg-stone-50 border border-stone-200 rounded-lg">
                <h3 className="font-semibold text-stone-900 mb-3 text-lg">Order Status</h3>
                <p className="text-stone-700 leading-relaxed">{trackingResult}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrackOrder;
