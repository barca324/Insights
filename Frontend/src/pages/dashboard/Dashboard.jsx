import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '@/config/firebase'
import { signOut } from 'firebase/auth'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
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
        <Button 
          onClick={handleLogout}
          variant="outline"
          className="px-4 py-2"
        >
          Logout
        </Button>
      </div>
      {/* Your dashboard content here */}
    </div>
  )
}

export default Dashboard