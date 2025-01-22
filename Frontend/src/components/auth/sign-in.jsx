import React, { useState,useContext} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from "@/config/firebase";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserDataContext } from "../../context/UserContext";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[userData,setUserData]=useState({});

  const navigate = useNavigate();
    const { user,setUser } = useContext(UserDataContext);
  


  const handleSubmit = async(e) => {
    e.preventDefault();
  

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setUserData({
      email:email,
      password:password
    })
    //console.log("hi",)
    console.log(userData)
   // console.log("Sign In submitted:", userData);
   // navigate('/dashboard');
   try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/login`, {
      email,
      password,
    });
    console.log("hello",response)

    if (response.status === 200) {
      const { data } = response;
      setUser(data); // Set user context
      toast.success("Login Sucessful!");
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    }
  } catch (error) {
    console.error("Error during login:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Login failed.");
  }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

       // Store user data
       localStorage.setItem('user', JSON.stringify({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName
      }));
      console.log("Google sign-in successful:", result.user);
      toast.success("Successfully signed in with Google!");
      navigate('/dashboard');
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Failed to sign in with Google");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">Welcome back</h2>
          <p className="text-sm text-gray-400">Enter your email to sign in to your account</p>
        </div>

        {/* Google Auth Button */}
        <Button
          variant="outline"
          className="w-full border-gray-800 bg-black text-white hover:bg-gray-900 hover:text-white"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black px-2 text-gray-400">Or continue with email</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={(e)=>{handleSubmit(e)}} className="space-y-4">
          

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-200">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
            />
          </div>

          <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
            Sign In
          </Button>

          <div className="text-center text-sm text-gray-400 mt-4">
            Create new account{' '}
            <Link
              to="/sign-up"
              className="text-white font-semibold hover:text-gray-300 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>


        </form>
      </div>
    </div>
  );
};

export default SignIn;
