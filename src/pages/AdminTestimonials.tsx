import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Testimonial = {
  id: number
  quote: string
  company: string
  author: string
  isActive: boolean
}

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [form, setForm] = useState({
    quote: "",
    company: "",
    author: "",
  })
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null)
  const navigate = useNavigate()

  const fetchTestimonials = async () => {
    const res = await fetch("http://localhost:5000/api/testimonials")
    const data = await res.json()
    setTestimonials(data)
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const addTestimonial = async () => {
    if (!form.quote || !form.company || !form.author) {
      alert("Fill all fields")
      return
    }

    const ok = confirm("Add this testimonial?")
    if (!ok) return

    await fetch("http://localhost:5000/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    setForm({ quote: "", company: "", author: "" })
    fetchTestimonials()
  }

  const toggleActive = async (t: Testimonial) => {
    await fetch(`http://localhost:5000/api/testimonials/${t.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quote: t.quote,
        company: t.company,
        author: t.author,
        isActive: !t.isActive,
      }),
    })

    fetchTestimonials()
  }

  const confirmDelete = async () => {
    if (!deleteTarget) return

    await fetch(`http://localhost:5000/api/testimonials/${deleteTarget}`, {
      method: "DELETE",
    })

    setDeleteTarget(null)
    fetchTestimonials()
  }

  const handleLogout = () => {
    // Clear any authentication tokens or session data here
    navigate("/")
  }

  return (
    <div className="min-h-screen p-8 bg-muted">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin – Testimonials</h1>
        <button
          onClick={handleLogout}
          className="rounded-md bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* ADD FORM */}
      <Card className="mb-10">
        <CardContent className="p-6 space-y-4">
          <Textarea
            placeholder="Quote"
            value={form.quote}
            onChange={e => setForm({ ...form, quote: e.target.value })}
          />
          <Input
            placeholder="Company"
            value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })}
          />
          <Input
            placeholder="Author / Designation"
            value={form.author}
            onChange={e => setForm({ ...form, author: e.target.value })}
          />

          <button
            onClick={addTestimonial}
            className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Add Testimonial
          </button>
        </CardContent>
      </Card>

      {/* LIST */}
      <div className="grid gap-6">
        {testimonials.map(t => (
          <Card key={t.id} className="border-l-4 border-l-blue-600">
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6">
              
              {/* CONTENT */}
              <div>
                <p className="italic text-gray-700 mb-3 leading-relaxed">
                  {t.quote}
                </p>
                <p className="font-semibold text-blue-700">{t.company}</p>
                <p className="text-sm text-gray-500 mb-2">{t.author}</p>

                <span
                  className={`inline-block text-xs font-bold px-2 py-1 rounded ${
                    t.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {t.isActive ? "ACTIVE" : "INACTIVE"}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => toggleActive(t)}
                  className={`rounded-md px-4 py-2 font-semibold text-white transition ${
                    t.isActive
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {t.isActive ? "Deactivate" : "Activate"}
                </button>

                <button
                  onClick={() => setDeleteTarget(t.id)}
                  className="rounded-md px-4 py-2 font-semibold text-white bg-red-600 hover:bg-red-700"
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
              Delete this testimonial?
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
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

export default AdminTestimonials
