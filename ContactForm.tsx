import React, { useState } from 'react';
import { sendDiscordMessage } from '../../utils/discord';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { SubmitButton } from './SubmitButton';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    discordUsername: '',
    issue: '',
    hasScreenshot: 'no'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendDiscordMessage({
        name: formData.name,
        discordUsername: formData.discordUsername,
        issue: formData.issue,
        hasScreenshot: formData.hasScreenshot === 'yes'
      });
      setSubmitStatus('success');
      setFormData({ name: '', discordUsername: '', issue: '', hasScreenshot: 'no' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Contact Administration
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <FormInput
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          
          <FormInput
            label="Discord Username"
            value={formData.discordUsername}
            onChange={(e) => setFormData({ ...formData, discordUsername: e.target.value })}
            required
          />
          
          <FormTextArea
            label="Issue Description"
            value={formData.issue}
            onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
            required
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Do you have a screenshot?
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="yes"
                  checked={formData.hasScreenshot === 'yes'}
                  onChange={(e) => setFormData({ ...formData, hasScreenshot: e.target.value })}
                  className="form-radio text-purple-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="no"
                  checked={formData.hasScreenshot === 'no'}
                  onChange={(e) => setFormData({ ...formData, hasScreenshot: e.target.value })}
                  className="form-radio text-purple-500"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <SubmitButton isSubmitting={isSubmitting} />

          {submitStatus === 'success' && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}