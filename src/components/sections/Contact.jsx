import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const SERVICE_ID = "service_fsljoa4";
  const TEMPLATE_ID = "template_fouwp12";
  const PUBLIC_KEY = "d0U66sMSqxSpwdy9T"; // double-check in EmailJS dashboard

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debug logs
    console.log("🔑 SERVICE_ID:", SERVICE_ID);
    console.log("🔑 TEMPLATE_ID:", TEMPLATE_ID);
    console.log("🔑 PUBLIC_KEY:", PUBLIC_KEY);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY) // <-- FIXED
      .then(() => {
        alert("✅ Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("❌ EmailJS Error:", err);
        alert("Oops! Something went wrong. Please try again");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        <form id="form" className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Messagess
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
