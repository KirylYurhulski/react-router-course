import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Error404 } from './pages/error/404'
import { Layout } from './components/ui/Layout'
import { Single as SinglePost } from './components/ui/Posts/Single'
import { RequireAuth } from './hoc/RequireAuth'
import { Dashboard } from './pages/admin/Dashboard'
import { UserProvider } from './context/UserContext'
import { Login } from './pages/admin/Login'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SinglePost />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="contact-us"
            element={<Navigate to={'/contact'} replace />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </UserProvider>
  )
}

export default App
