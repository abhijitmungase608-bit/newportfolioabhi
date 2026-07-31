import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="text-xs text-gray-500 font-light">{label}</label>
        )}
        <input
          ref={ref}
          className={`w-full bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-300 placeholder-gray-500 ${className}`}
          {...props}
        />
        {error && <p className="text-red-400 text-xs">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;