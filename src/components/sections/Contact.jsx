import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const SERVICE_ID = "service_fsljoa4";
  const TEMPLATE_ID = "template_fouwp12";
  const PUBLIC_KEY = "d0U66sMSqxSpwdy9T";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success or error message

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, { publicKey: PUBLIC_KEY })
      .then(() => {
        setLoading(false);
        setStatus({ type: "success", text: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
          // 🕒 clear after 5 seconds
  setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setLoading(false);
        setStatus({
          type: "error",
          text: "❌ Oops! Something went wrong. Please try again.",
        });
          // 🕒 clear after 5 seconds
  setTimeout(() => setStatus(null), 5000);
      });

  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        <form
          id="form"
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="example@gmail.com..."
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              rows={5}
              placeholder="Your message..."
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Inline success/error message */}
        {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.text}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
