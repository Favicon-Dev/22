import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  );
}