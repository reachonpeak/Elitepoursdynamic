/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string; // Container classes
  imgClassName?: string; // Image elements classes
  style?: React.CSSProperties;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  loading?: 'lazy' | 'eager';
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '', 
  style, 
  referrerPolicy = 'no-referrer',
  loading = 'lazy'
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-brand-surface/40 ${className}`} style={style}>
      {/* Loading Skeleton Indicator */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-brand-border/20 animate-pulse flex items-center justify-center z-10">
          <div className="w-5 h-5 border-2 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Image Loading Error Fallback */}
      {error ? (
        <div className="absolute inset-0 bg-brand-surface flex items-center justify-center text-[10px] text-brand-text-muted font-mono z-10">
          Failed to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          referrerPolicy={referrerPolicy}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${imgClassName} ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } transition-all duration-700 ease-out`}
        />
      )}
    </div>
  );
}
