import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/config/firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import axios from "axios";
import { UserDataContext } from "../../context/UserContext";

const SignUp = () => {
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { user,setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        const { data } = response;
        setUser(data); // Set user context
        toast.success("Signup Successful!");
        localStorage.setItem("token", data.token);
        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Signup failed.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const userData = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
      };
      localStorage .setItem("user", JSON.stringify(userData));
      
      toast.success("Successfully signed in with Google!");
      navigate("/dashboard"); // Redirect to a suitable page
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Failed to sign in with Google.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="text-sm text-gray-400">Enter your email to create your account</p>
        </div>
        <Button
          variant="outline"
          className="w-full border-gray-800 bg-black text-white hover:bg-gray-900"
          onClick={handleGoogleSignUp}
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black px-2 text-gray-400">Or continue with email</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">Name</Label>
            <Input
              id="name"
              type="name"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-gray-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-gray-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-200">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-gray-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-200">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-gray-600"
            />
          </div>
          <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
            Sign Up
          </Button>
          <div className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-white font-semibold hover:text-gray-300"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
