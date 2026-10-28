import { useState } from "react"
import emailjs from "@emailjs/browser"
import Icon from "./Icon"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.")
      console.error("Error sending email:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="success-message">
        <Icon name="check" className="success-icon" />
        <p>Message envoyé avec succès! Je vous répondrai dès que possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
          className="form-textarea"
        />
      </div>
      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            <Icon name="send" size={16} className="submit-icon" />
            Envoyer
          </>
        )}
      </button>
    </form>
  )
}
