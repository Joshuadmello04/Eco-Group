import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

type ContactMessage = {
  id: number
  name: string
  email: string
  phone: string
  company: string | null
  subject: string
  message: string
  createdAt: string
}

const AdminContactMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null)
  const navigate = useNavigate()

  const fetchMessages = async () => {
    const token = localStorage.getItem("adminToken")

const res = await fetch("http://localhost:5000/api/admin/contact", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

    const data = await res.json()
    setMessages(data)
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const confirmDelete = async () => {
    if (!deleteTarget) return

    await fetch(
      `http://localhost:5000/api/admin/contact/${deleteTarget}`,
      { method: "DELETE" }
    )

    setDeleteTarget(null)
    fetchMessages()
  }

  const handleLogout = () => {
    // Clear any authentication tokens or session data here
    navigate("/")
  }

  return (
    <div className="min-h-screen p-8 bg-muted">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Admin – Contact Messages
        </h1>

        <button
          onClick={handleLogout}
          className="rounded-md bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid gap-6">
        {messages.map(m => (
          <Card key={m.id} className="border-l-4 border-l-accent">
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-[1fr_160px] gap-6">

              {/* CONTENT */}
              <div>
                <h2 className="font-bold text-lg mb-1">
                  {m.subject}
                </h2>

                <p className="text-sm text-gray-600 mb-2">
                  {m.name} • {m.email} • {m.phone}
                </p>

                {m.company && (
                  <p className="text-sm text-gray-500 mb-2">
                    Company: {m.company}
                  </p>
                )}

                <p className="text-gray-700 whitespace-pre-line">
                  {m.message}
                </p>

                <p className="text-xs text-gray-400 mt-3">
                  Received: {new Date(m.createdAt).toLocaleString()}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col gap-3 justify-start">
                <button
                  onClick={() => setDeleteTarget(m.id)}
                  className="rounded-md px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-700"
                >
                  Delete
                </button>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

      {/* DELETE CONFIRM MODAL */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">
              Delete this message?
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 rounded-md border hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminContactMessages
