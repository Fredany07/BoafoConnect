import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Toaster from 'react-hot-toast';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import JobDetails from './Pages/JobSeeker/JobDetails';
import SavedJobs from './Pages/JobSeeker/SavedJobs';
import UserProfile from './Pages/JobSeeker/UserProfile'
import EmployerDashboard from './Pages/Employer/EmployerDashboard'
import JobPostingForm from './Pages/Employer/JobPostingForm'
import Applicationview from './Pages/Employer/Applicationview'
import EmployerProfilePage from './Pages/Employer/EmployerProfilePage'
import ManageJobs from './Pages/Employer/ManageJobs';
import Protectedroutes from './routes/Protectedroutes';
import { AuthProvider } from "./context/Authcontext";
import JobSeekerDashboard from './Pages/JobSeeker/JobSeekerDashboard';



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Job Seeker Routes */}
          <Route path='/find-jobs' element={<JobSeekerDashboard/>} />
          <Route path='/job/:jobid' element={<JobDetails />} />
          <Route path='/saved-jobs' element={<SavedJobs />} />
          <Route path='/user-profile' element={<UserProfile />} />

          {/* Employer Routes (Protected) */}
          <Route element={<Protectedroutes requireRole="employer" />}>
            <Route path='/employer' element={<EmployerDashboard />} />
            <Route path='/post-job' element={<JobPostingForm />} />
            <Route path='/applicants' element={<Applicationview />} />
            <Route path='/company-profile' element={<EmployerProfilePage />} />
            <Route path='/manage-jobs' element={<ManageJobs/>} />
          </Route>

          {/* Fallback Route */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>

      {/* Toaster Config */}
      <Toaster
        toastOptions={{
          className: '',
          style: {
            background: '#363636',
            fontSize: '13px',
          },
        }}
      />
  </AuthProvider>
  )
}

export default App
