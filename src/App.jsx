import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import OTP from './pages/OTP'
import DragAndDrop from './pages/DragAndDrop';
import DataTable from './pages/DataTable';

function App() {

  const location = useLocation();

  return (
    <>
    {location.pathname === '/' && <Navigate to="/otp-form" />}
      {/* {location.pathname === '/' &&
         <div className="bg-gray-800 text-white h-screen p-6 flex flex-col items-center">
         <h2 className="text-2xl font-bold mb-6">Machine Code React</h2>
         <div className="flex flex-col items-center space-y-4">
           <Link 
             to="/otp-form" 
             className="block bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-lg font-medium"
           >
             OTP
           </Link>
           <Link 
             to="/course-list" 
             className="block bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-lg font-medium"
           >
             Drag & Drop
           </Link>
           <Link 
             to="/batches" 
             className="block bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-lg font-medium"
           >
             Data Table
           </Link>
         </div>
       </div>} */}

      <Routes>
        <Route path="/otp-form" element={<OTP />} />
        <Route path="/course-list" element={<DragAndDrop />} />
        <Route path="/batches" element={<DataTable />} />
      </Routes>
    </>
  )
}

export default App
