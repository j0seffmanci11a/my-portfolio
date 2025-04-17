import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})

  const validate = () => {
    let errs = {}
    if (!form.name) errs.name = "Name is required"
    if (!form.email) errs.email = "Email is required"
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid"
    if (!form.message) errs.message = "Message is required"
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length === 0) {
      alert("Message sent!")
      setForm({ name: "", email: "", message: "" })
    } else {
      setErrors(errs)
    }
  }

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <textarea
          placeholder="Your Message"
          className="w-full border p-2"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        <button className="bg-green-700 text-white px-4 py-2 rounded">Send</button>
      </form>
      <div className="mt-4">
        <p>Or reach me at:</p>
        <a href="https://github.com/j0seffmanci11a" className="text-green-500"target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/joseff-mancilla-809b6b2b1" className="text-green-500 ml-2"target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
