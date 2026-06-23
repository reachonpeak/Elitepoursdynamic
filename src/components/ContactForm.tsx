/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Send, UploadCloud, Clock, Mail, Phone, MapPin, CheckCircle, FileText, X, ArrowRight } from 'lucide-react';
import { businessDetails } from '../data/websiteData';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  prefilledQuoteDetails: {
    serviceName: string;
    area: number;
    details: string;
  } | null;
  onClearPrefilledQuote: () => void;
}

export default function ContactForm({ prefilledQuoteDetails, onClearPrefilledQuote }: ContactFormProps) {
  const [formData, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [attachments, setAttachments] = useState<{ name: string; size: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync estimate data with message body
  useEffect(() => {
    if (prefilledQuoteDetails) {
      setForm((prev) => ({
        ...prev,
        message: `${prev.message}\n\n[Attached Design Estimate]\nType: ${prefilledQuoteDetails.serviceName}\nTarget area: ${prefilledQuoteDetails.area} sqm\nParameters:\n${prefilledQuoteDetails.details}`.trim()
      }));
    }
  }, [prefilledQuoteDetails]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f: File) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`
      }));
      setAttachments(prev => [...prev, ...newFiles]);
    }
  };

  const handleRemoveAttachment = (idx: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== idx));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid structured email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile or structural contact number is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Please specify site street address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate SMTP delivery network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form variables
      setForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
      setAttachments([]);
      onClearPrefilledQuote();
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-white text-brand-text relative border-t border-brand-border/40 font-sans shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_bottom,rgba(224,123,57,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form Box - Left Column with Scroll Trigger */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 bg-brand-surface border border-brand-border p-6 sm:p-10 rounded-sm relative shadow-sm"
          >
            
            {/* success state display overlay card */}
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
                <div className="h-16 w-16 bg-brand-text/5 border border-brand-text/15 text-brand-text rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <CheckCircle className="h-9 w-9" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-brand-text">Quote Request Received!</h3>
                  <p className="text-brand-text-muted mt-3 text-sm max-w-sm leading-relaxed font-light font-sans">
                    Our Melbourne estimators have received your specifications. We are auditing structural loading parameters. A supervisor will call or email you back in **under 2 business hours**.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="group inline-flex items-center gap-3.5 rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <span>Submit Another Quote</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2.5 mb-3">
                    <span className="block w-5 h-[2px] bg-brand-accent animate-pulse" />
                    <span className="font-display text-[10px] tracking-[0.25em] text-brand-accent uppercase font-bold">
                      Direct Request
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-text mb-2">
                    Request Free On-Site Measure
                  </h3>
                  <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-light font-sans">
                    Fill out your dimensions. Attach terrain drawings, landscaping layout sketches, or digital files. All Melbourne on-site measure assessments are **100% free of charge**.
                  </p>
                </div>

                {/* Prefilled Quote details indicator banner */}
                {prefilledQuoteDetails && (
                  <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-sm p-4 flex justify-between items-start animate-fade-in shadow-sm">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold block mb-1">
                        INTEGRATED CALCULATOR COST ATTACHED
                      </span>
                      <p className="text-sm font-bold text-brand-text leading-normal font-display tracking-wide uppercase">
                        {prefilledQuoteDetails.serviceName} (~{prefilledQuoteDetails.area} sqm)
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onClearPrefilledQuote}
                      className="p-1.5 text-brand-text-muted hover:text-brand-text rounded-sm bg-white border border-brand-border shadow-sm"
                      aria-label="Clear estimate selections"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-brand-text uppercase tracking-[0.15em] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Karan Khara"
                      className={`w-full bg-white border text-sm rounded-sm py-3.5 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-all ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-brand-border/60'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-mono">{errors.name}</span>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-brand-text uppercase tracking-[0.15em] block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0455 217 023"
                      className={`w-full bg-white border text-sm rounded-sm py-3.5 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-brand-border/60'
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 font-mono">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-brand-text uppercase tracking-[0.15em] block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. karan@khara.com"
                      className={`w-full bg-white border text-sm rounded-sm py-3.5 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-all ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-brand-border/60'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-mono">{errors.email}</span>}
                  </div>

                  {/* Site Address field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-brand-text uppercase tracking-[0.15em] block">
                      Site Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. Wollert, Victoria"
                      className={`w-full bg-white border text-sm rounded-sm py-3.5 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-all ${
                        errors.address ? 'border-red-500 bg-red-50 animate-pulse' : 'border-brand-border/60'
                      }`}
                    />
                    {errors.address && <span className="text-[10px] text-red-500 font-mono">{errors.address}</span>}
                  </div>
                </div>

                {/* Message Text area */}
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold text-brand-text uppercase tracking-[0.15em] block">
                    Describe your Project Details *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide targets, subgrade status, existing driveway crossover configurations, etc..."
                    className="w-full bg-white border border-brand-border/60 text-sm rounded-sm py-3.5 px-4 text-brand-text focus:outline-none focus:border-brand-accent transition-colors resize-y min-h-[110px]"
                  />
                </div>

                {/* File Attachment interface */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-semibold text-brand-text uppercase tracking-[0.15em] block">
                    Upload Project Photos
                  </span>

                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  />

                  {/* Drag drop zone click card */}
                  <button
                    type="button"
                    onClick={handleFileUploadClick}
                    className="w-full bg-white hover:bg-brand-surface border border-dashed border-brand-border hover:border-brand-text-muted py-7 px-4 rounded-sm flex flex-col items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
                  >
                    <UploadCloud className="h-7 w-7 text-brand-text-dim" />
                    <span className="text-xs text-brand-text-muted font-sans text-center">
                      <span className="text-brand-accent font-bold block mb-0.5">Click to Upload Project Photos</span>
                      Photos will be sent to the owners via email along with your other details
                    </span>
                  </button>

                  {/* Attachment vault count tracker */}
                  {attachments.length > 0 && (
                    <div className="space-y-2 mt-2">
                      <p className="text-[10px] font-mono text-brand-text-muted uppercase">Uploaded Files ({attachments.length}):</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {attachments.map((file, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-brand-border p-2.5 rounded-sm flex items-center justify-between text-xs text-brand-text shadow-sm"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <FileText className="h-4 w-4 text-brand-accent shrink-0" />
                              <span className="truncate text-brand-text">{file.name}</span>
                              <span className="text-[10px] text-brand-text-muted font-mono">({file.size})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveAttachment(idx)}
                              className="text-brand-text hover:text-brand-accent p-1 cursor-pointer"
                              aria-label="Remove file"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-between rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs sm:text-sm font-semibold transition-all hover:gap-4.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2.5 pl-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Transmitting specifications...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Request for Estimate</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                        <Send className="h-4 w-4 text-black" />
                      </span>
                    </>
                  )}
                </button>

              </form>
            )}

          </motion.div>

          {/* Contact Details, hours & hours Table - Right Column with Scroll Trigger */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick Contacts details list card */}
            <div className="bg-brand-surface border border-brand-border p-6 sm:p-8 rounded-sm shadow-sm">
              <h4 className="font-display text-lg font-bold uppercase text-brand-text tracking-wider mb-6">Contact &amp; Support Info</h4>
              
              <div className="space-y-6">
                {/* phone connection details */}
                <div className="flex gap-4">
                  <div className="bg-white border border-brand-border text-brand-accent h-10 w-10 rounded-sm flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="h-5 w-5 fill-current stroke-none" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-brand-text-muted uppercase block">DIRECT PHONE</span>
                    <a
                      href={businessDetails.phoneRaw}
                      className="text-sm font-bold text-brand-text hover:text-brand-accent transition-colors font-mono"
                    >
                      {businessDetails.phone}
                    </a>
                  </div>
                </div>

                {/* email connection details */}
                <div className="flex gap-4">
                  <div className="bg-white border border-brand-border text-brand-accent h-10 w-10 rounded-sm flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-brand-text-muted uppercase block">EMAIL CORRESPONDENCE</span>
                    <a
                      href={businessDetails.emailRaw}
                      className="text-sm font-bold text-brand-text hover:text-brand-accent transition-colors break-all font-mono"
                    >
                      {businessDetails.email}
                    </a>
                  </div>
                </div>

                {/* Address base details */}
                <div className="flex gap-4">
                  <div className="bg-white border border-brand-border text-brand-accent h-10 w-10 rounded-sm flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-brand-text-muted uppercase block">OPERATIONAL TERRITORY</span>
                    <span className="text-sm font-normal text-brand-text-dim">
                      {businessDetails.address}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Location Map Card */}
            <div className="bg-brand-surface border border-brand-border p-6 sm:p-8 rounded-sm shadow-sm flex flex-col gap-4">
              <h4 className="font-display text-lg font-bold uppercase text-brand-text tracking-wide flex items-center gap-2">
                <MapPin className="h-4.5 w-4.5 text-brand-text" />
                <span>Our Wollert Precinct Base</span>
              </h4>
              <p className="text-xs text-brand-text-muted leading-relaxed font-light">
                We are headquartered in Wollert, servicing Melbourne's growing northern and western suburbs with premium heavy-duty concrete foundations and aggregate driveways.
              </p>
              
              <div className="relative w-full h-[220px] rounded-sm overflow-hidden border border-brand-border shadow-inner group">
                <iframe
                  title="Elite Pour Dynamics Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.4550882655383!2d144.9963884!3d-37.5935919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64dac0ac363d1%3A0x8fd5c6ae8e89b955!2sElitepour%20dynamics!5e0!3m2!1sen!2sau!4v1718360000000!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  className="border-0 filter grayscale-[15%] contrast-[105%] transition-all group-hover:grayscale-0 duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={businessDetails.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-between rounded-full bg-[#161412] hover:bg-black text-white py-1.5 pl-6 pr-1.5 text-xs font-semibold transition-all hover:gap-4.5 cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Navigate to Google Maps</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 text-black animate-pulse" />
                </span>
              </a>
            </div>

            {/* Hours table card layout */}
            <div className="bg-brand-surface border border-brand-border p-6 sm:p-8 rounded-sm shadow-sm">
              <h4 className="font-display text-lg font-bold uppercase text-brand-text tracking-wide mb-4 flex items-center gap-2">
                <Clock className="h-4.5 w-4.5 text-brand-accent" />
                <span>Operating Business Hours</span>
              </h4>
              
              <div className="divide-y divide-brand-border/50 text-xs font-sans">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex justify-between py-3">
                    <span className="text-brand-text-muted">{day}</span>
                    <span className="text-brand-text font-mono">09:00 am – 06:00 pm</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
