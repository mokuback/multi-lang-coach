import React, { useState, useRef, useEffect } from 'react';

interface GlassSelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface GlassSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: GlassSelectOption[];
  placeholder?: string;
  style?: React.CSSProperties;
}

const GlassSelect: React.FC<GlassSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = '',
  style: outerStyle = {},
}) => {
  const [open, setOpen] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = options.find(o => o.value === value);

  return (
    <div ref={dropRef} style={{ position: 'relative', ...outerStyle }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 0.75rem',
          gap: '0.5rem',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '0.5rem',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          fontSize: '0.95rem',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {current?.icon && <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>{current.icon}</span>}
          <span>{current ? current.label : placeholder}</span>
        </span>
        <span style={{
          transition: 'transform 0.2s',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          display: 'flex',
          alignItems: 'center',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '0.5rem',
          backdropFilter: 'blur(20px)',
          zIndex: 1000,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}>
          {options.map(opt => {
            const isHovered = hoveredValue === opt.value;
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                onMouseEnter={() => setHoveredValue(opt.value)}
                onMouseLeave={() => setHoveredValue(null)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.6rem 0.75rem',
                  background: isSelected
                    ? 'rgba(255,255,255,0.12)'
                    : isHovered
                    ? 'rgba(255,255,255,0.08)'
                    : 'transparent',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  textAlign: 'left',
                  transition: 'background 0.12s',
                }}
              >
                {opt.icon && <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>{opt.icon}</span>}
                <span>{opt.label}</span>
                {isSelected && (
                  <span style={{ marginLeft: 'auto', color: 'var(--accent-color)', display: 'flex', alignItems: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GlassSelect;
