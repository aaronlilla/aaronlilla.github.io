type ClassValue = string | number | false | null | undefined | Record<string, boolean | undefined | null> | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const v of inputs) {
    if (!v) continue;
    if (typeof v === 'string' || typeof v === 'number') {
      out.push(String(v));
    } else if (Array.isArray(v)) {
      const inner = cn(...v);
      if (inner) out.push(inner);
    } else if (typeof v === 'object') {
      for (const [key, val] of Object.entries(v)) {
        if (val) out.push(key);
      }
    }
  }
  return out.join(' ');
}
