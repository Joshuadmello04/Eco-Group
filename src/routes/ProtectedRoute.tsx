import { Navigate } from "react-router-dom"

type Props = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("adminToken")

  if (!token) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute
