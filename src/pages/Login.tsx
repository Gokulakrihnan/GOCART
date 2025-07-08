import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Lock,
  ShoppingBag,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });

    toast({
      title: "✅ Welcome back!",
      description: "You have successfully logged in to GoCart",
      duration: 3000,
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-dark-purple relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-vibrant-pink/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-48 h-48 bg-muted-coral/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-deep-blue-purple/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <Card className="w-full max-w-lg creative-card relative z-10">
        <CardHeader className="text-center space-y-8 pb-8">
          <div className="mx-auto w-20 h-20 gradient-creative rounded-2xl flex items-center justify-center shadow-2xl">
            <ShoppingBag className="h-10 w-10 text-light-gray" />
          </div>
          <div className="space-y-4">
            <CardTitle className="text-4xl font-display font-black text-light-gray tracking-tight">
              Welcome to
            </CardTitle>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-3xl font-display font-black text-light-gray">
                Go
              </span>
              <span className="script-text text-2xl font-script font-bold">
                Cart
              </span>
            </div>
            <CardDescription className="text-lg text-muted-coral font-medium">
              Sign in to continue your shopping journey
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <Label
                htmlFor="email"
                className="text-base font-bold text-light-gray"
              >
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-coral h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="creative-input pl-16 h-14 text-lg"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label
                htmlFor="password"
                className="text-base font-bold text-light-gray"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-coral h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="creative-input pl-16 pr-16 h-14 text-lg"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-muted-coral hover:text-vibrant-pink transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-2 border-vibrant-pink text-vibrant-pink focus:ring-vibrant-pink bg-deep-blue-purple"
                />
                <span className="text-muted-coral font-medium">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-muted-coral hover:text-vibrant-pink font-semibold transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* ✅ Styled Sign In button matches Add to Cart */}
            <Button
              type="submit"
              className="w-full h-14 text-xl font-black rounded-full bg-light-gray text-dark-purple hover:bg-dark-purple hover:text-light-gray border-2 border-light-gray transition-all duration-300"
            >
              Sign In
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </form>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t-2 border-deep-blue-purple" />
              </div>
              <div className="relative flex justify-center text-base">
                <span className="px-6 bg-deep-blue-purple text-muted-coral font-semibold">
                  or
                </span>
              </div>
            </div>

            <Link
              to="/"
              className="block w-full text-center py-4 px-6 border-2 border-muted-coral rounded-full text-muted-coral font-bold hover:bg-muted-coral hover:text-dark-purple transition-all duration-300 transform hover:scale-105"
            >
              Continue shopping without logging in
            </Link>
          </div>

          <div className="text-center pt-6">
            <p className="text-muted-coral">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-vibrant-pink hover:text-light-gray font-bold transition-colors"
              >
                Sign up for free
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
