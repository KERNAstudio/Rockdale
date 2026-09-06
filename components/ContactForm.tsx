"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-lg border border-border bg-off-white px-4 py-2.5 text-sm text-navy placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rockdale-blue";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please enter your name and a short message.");
      return;
    }
    setError("");
    const text = `Hi, I'm ${name}${phone.trim() ? ` (${phone.trim()})` : ""}. ${message}`;
    const url = `https://api.whatsapp.com/send?phone=919704920595&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-navy mb-1.5">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Optional"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to ask?"
          className={inputClasses}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-medium px-6 py-3 hover:bg-deep-blue transition-colors"
      >
        Send via WhatsApp
      </button>
      <p className="text-xs text-muted">
        This opens WhatsApp with your message pre-filled to Rockdale School.
      </p>
    </form>
  );
}
