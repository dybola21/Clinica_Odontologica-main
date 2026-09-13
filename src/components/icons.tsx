type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Dente — marca da clínica */
export function ToothMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M12 6.3c-1-.95-2.15-1.7-3.5-1.7C6.1 4.6 4.5 6.6 4.5 8.85c0 1.9.7 3.1 1.3 4.6.6 1.5.92 3.2 1.42 4.8.28.9.7 2.05 1.63 2.05 1.62 0 1.05-3.95 2.02-5.35.42-.6 1.64-.6 2.06 0 .97 1.4.4 5.35 2.02 5.35.93 0 1.35-1.15 1.63-2.05.5-1.6.83-3.3 1.42-4.8.6-1.5 1.3-2.7 1.3-4.6 0-2.25-1.6-4.25-4-4.25-1.35 0-2.5.75-3.3 1.7Z" />
    </svg>
  );
}

/** Bisturi — cirurgia bucomaxilofacial */
export function ScalpelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M20.6 3.4a2.35 2.35 0 0 0-3.32 0L7 13.65c-1.63 1.63-3.03 3.46-3.96 5.65l-.54 1.7 1.7-.54c2.19-.93 4.02-2.33 5.65-3.96L20.6 6.72a2.35 2.35 0 0 0 0-3.32Z" />
      <path d="M13.2 5.8l5 5" />
    </svg>
  );
}

/** ATM / ondas de dor — DTM e dor orofacial */
export function JointIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M7.7 7.7a6.1 6.1 0 0 0 0 8.6" />
      <path d="M16.3 7.7a6.1 6.1 0 0 1 0 8.6" />
      <path d="M4.9 4.9a10.1 10.1 0 0 0 0 14.2" />
      <path d="M19.1 4.9a10.1 10.1 0 0 1 0 14.2" />
    </svg>
  );
}

/** Dente clínico — procedimentos orais */
export function ToothIcon({ className }: IconProps) {
  return <ToothMark className={className} />;
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2.8l2.75 5.8 6.35.82-4.66 4.37 1.2 6.28L12 16.98l-5.64 3.09 1.2-6.28L2.9 9.42l6.35-.82L12 2.8Z" />
    </svg>
  );
}

export function GoogleG({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 5.04c1.62 0 3.06.56 4.2 1.64l3.12-3.12C17.46 1.8 14.96.75 12 .75 7.62.75 3.84 3.27 1.98 6.96l3.63 2.82C6.5 7.08 9 5.04 12 5.04z"
      />
      <path
        fill="#4285F4"
        d="M23.25 12.27c0-.92-.08-1.6-.26-2.31H12v4.19h6.44c-.13 1.08-.83 2.7-2.39 3.79l3.54 2.74c2.12-1.96 3.66-4.85 3.66-8.41z"
      />
      <path
        fill="#FBBC05"
        d="M5.61 14.22a7.2 7.2 0 0 1 0-4.44L1.98 6.96a11.97 11.97 0 0 0 0 10.08l3.63-2.82z"
      />
      <path
        fill="#34A853"
        d="M12 23.25c3.24 0 5.96-1.07 7.94-2.91l-3.54-2.74c-.95.66-2.22 1.12-4.4 1.12-3 0-5.5-2.04-6.39-4.5l-3.63 2.82c1.86 3.69 5.64 6.21 10.02 6.21z"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <path d="M12 21.2s-6.7-5.6-6.7-10.7a6.7 6.7 0 1 1 13.4 0c0 5.1-6.7 10.7-6.7 10.7Z" />
      <circle cx="12" cy="10.3" r="2.35" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.1 1.9" />
    </svg>
  );
}

export function CardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="2.2" />
      <path d="M2.6 9.6h18.8" />
      <path d="M6.4 14.6h4.2" />
    </svg>
  );
}

/** Aproximação (NFC) — ondas de contato */
export function NfcIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="5.4" cy="12" r="1" fill="currentColor" strokeWidth="0" />
      <path d="M8.8 8.6a5.6 5.6 0 0 1 0 6.8" />
      <path d="M12.2 6.2a9.6 9.6 0 0 1 0 11.6" />
      <path d="M15.6 3.8a13.6 13.6 0 0 1 0 16.4" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={1.8}>
      <path d="M4.5 12h15" />
      <path d="M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={1.8}>
      <path d="M6.5 17.5l11-11" />
      <path d="M8.5 6.5h9v9" />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={1.8}>
      <path d="M12 4.5v15" />
      <path d="M6 13.5l6 6 6-6" />
    </svg>
  );
}
