import React, { useState } from 'react';
import Button from '../components/Button';
import { contactChannels } from '../data/siteContent';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bedankt! We nemen contact op.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Plan een gesprek</h1>
          <p className="text-white/70">We reageren binnen één werkdag. Liever direct contact? Kies een kanaal.</p>
          <div className="space-y-4">
            {contactChannels.map((channel) => (
              <div key={channel.label}>
                <p className="text-white font-semibold">{channel.label}</p>
                {channel.href ? (
                  <a href={channel.href} className="text-white/80 block">{channel.value}</a>
                ) : (
                  <p className="text-white/80">{channel.value}</p>
                )}
                <p className="text-white/50 text-xs uppercase tracking-[0.3em]">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Naam" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white" required />
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="E-mail" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Vertel iets over uw project" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white h-32" required />
          <Button type="submit">Verstuur</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
