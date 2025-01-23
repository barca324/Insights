import React, { useContext } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { auth } from '@/config/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { UserDataContext } from '@/context/UserContext';
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  console.log(user)

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user')
      setUser(null);
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error logging out');
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout} variant="outline" className="px-4 py-2 bg-black text-white">
          Logout
        </Button>
      </div>
     

      
      <div className="flex items-center justify-center text-lg">
        Welcome {user.name}
        
        
      </div>
     

      
      <div className='text-3xl flex items-center justify-center mt-5'>
        Which application insight would you like us to fetch?
      </div>
      <div className='flex items-center justify-center gap-8 mt-12'>
       <Link to='/instagram'><IoLogoInstagram size={50}/></Link>
       <Link to='/twitter'><FaXTwitter size={50}/></Link>
      </div>
      
      
     

    </div>
  );
};

export default Dashboard; // This is the default export
