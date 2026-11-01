import { useState } from 'react';
import './ImagePlaceholder.css';

interface Props {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ImagePlaceholder({
  src,
  alt = 'Fotografia de arquitetura',
  aspectRatio = '4/3',
  label = 'Fotografia',
  className = '',
  size = 'md',
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (src && !error) {
    return (
      <div
        className={`arch-image-wrap arch-image-wrap--${size} ${className}`}
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`arch-image ${loaded ? 'arch-image--loaded' : ''}`}
        />
        <div className={`arch-image-skeleton ${loaded ? 'arch-image-skeleton--hidden' : ''}`} />
      </div>
    );
  }

  return (
    <div
      className={`arch-image-fallback arch-image-fallback--${size} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className="arch-image-fallback__texture" />
      <span className="arch-image-fallback__tag">{label}</span>
    </div>
  );
}
