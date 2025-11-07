import React, { useEffect, useRef, useState } from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        mx-auto w-full max-w-md rounded-2xl p-6 shadow-xl backdrop-blur
        border border-surface-light bg-white/90 text-text-dark
        dark:border-surface-alt dark:bg-zinc-900/60 dark:text-text
      "
    >
      {children}
    </div>
  );
}

export function Title({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold leading-tight">{children}</h1>
      {subtitle && <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</p>}
    </div>
  );
}

export function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
      {children}
    </label>
  );
}

export function Input({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  autoFocus,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  autoFocus?: boolean;
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      autoFocus={autoFocus}
      className="
        w-full rounded-xl border p-3 outline-none ring-0 transition
        border-zinc-300 bg-white placeholder-zinc-500 text-zinc-900
        focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200
        dark:border-zinc-700 dark:bg-white/10 dark:text-white dark:placeholder-white/60
        dark:focus:border-zinc-500 dark:focus:ring-white/20
      "
    />
  );
}

export function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "danger";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const base =
    "inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition disabled:opacity-50";
  const variants: Record<string, string> = {
  primary: "bg-brand-primary hover:bg-brand-dark text-text shadow-brand-glow",
  ghost: "bg-white/10 hover:bg-white/20 text-text-dark dark:text-text",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export function LinkButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-brand-primary underline-offset-4 hover:text-brand-dark hover:underline dark:text-brand-light"
    >
      {children}
    </button>
  );
}

// OTP input reutilizável
export function OtpInputs({
  length = 6,
  onComplete,
  isDisabled,
}: {
  length?: number;
  onComplete: (code: string) => void;
  isDisabled?: boolean;
}) {
  const [values, setValues] = useState<string[]>(Array.from({ length }, () => ""));
  const refs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const code = values.join("");
    if (code.length === length && !values.includes("")) onComplete(code);
  }, [values, length, onComplete]);

  return (
    <div className="mb-4 flex items-center justify-between gap-2">
      {values.map((v, i) => (
        <input
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          inputMode="numeric"
          maxLength={1}
          disabled={isDisabled}
          value={v}
          onChange={(e) => {
            const ch = e.target.value.replace(/\D/g, "").slice(-1);
            setValues((prev) => {
              const next = [...prev];
              next[i] = ch;
              return next;
            });
            if (ch && i < length - 1) refs.current[i + 1]?.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !values[i] && i > 0) refs.current[i - 1]?.focus();
          }}
          className="
            h-12 w-12 rounded-xl border text-center text-lg tracking-widest outline-none ring-0 transition
            border-zinc-300 bg-white text-zinc-900
            focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200
            dark:border-zinc-700 dark:bg-white/10 dark:text-white
            dark:focus:border-zinc-500 dark:focus:ring-white/20
          "
        />
      ))}
    </div>
  );
}
