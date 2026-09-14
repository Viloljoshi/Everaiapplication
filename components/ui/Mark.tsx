export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
      <path d="M4 4h8v8H4zM16 4h8v8h-8zM4 16h8v8H4z" fill="currentColor" />
      <path d="M16 16h8v8h-8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 23 23 17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Arrow({ direction = "right" }: { direction?: "right" | "down" | "up-right" }) {
  const path = direction === "down" ? "M8 3v10m0 0 4-4m-4 4-4-4" : direction === "up-right" ? "M4 12 12 4m0 0H6m6 0v6" : "M3 8h10m0 0-4-4m4 4-4 4";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d={path} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
