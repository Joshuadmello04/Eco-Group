import { useNavigate } from "react-router-dom"

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Dashboard
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/admin/testimonials")}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Manage Testimonials
          </button>

          <button
            onClick={() => navigate("/admin/contact")}
            className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
          >
            View Contact Messages
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
