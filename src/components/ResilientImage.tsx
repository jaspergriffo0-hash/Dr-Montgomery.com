import { useState } from 'react';
import { Stethoscope } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#102A43] via-[#1B3B5A] to-[#244C73] p-8 text-center text-white ${className}`}
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10">
          <Stethoscope className="h-6 w-6 text-[#64B5F6]" aria-hidden="true" />
        </div>
        <p className="font-heading text-base font-semibold tracking-tight text-white">
          {fallbackTitle}
        </p>
        {fallbackSubtitle ? (
          <p className="mt-1 max-w-xs text-xs text-slate-300">{fallbackSubtitle}</p>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
