import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'
import { AuthProvider, useAuth } from './context/AuthContext'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Loader from './components/Loader'
import Home from './pages/Home'

function App() {
  // const { loading } = useAuth();

  // if (loading) {
  //   return (<Loader fullScreen text="Preparing your experience…" />);
  // }

  return (
    <>
      <div className="min-h-screen">
        <AuthProvider>
          <Router>
            <Routes>
              <Route element={<PublicLayout />}>
                {/* <Route path='/' element={<Loader fullScreen text="Preparing your experience…" />
                } /> */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/events" element={<EventList />} /> */}
                {/* <Route path="/events/:id" element={<EventDetails />} /> */}
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route
                path="/dashboard"
              // element={
              //   <ProtectedRoute>
              //     <DashboardLayout />
              //   </ProtectedRoute>
              // }
              >
                {/* <Route index element={<DashboardHome />} /> */}
                {/* <Route path="events" element={<MyEvents />} /> */}
                {/* <Route path="events/new" element={<CreateEvent />} /> */}
              </Route>

            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
