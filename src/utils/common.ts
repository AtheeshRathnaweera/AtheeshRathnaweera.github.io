/**
 * Returns the duration between two dates as two-digit parts,
 * e.g. "02 yrs 01 mos", "08 mos", "03 yrs". Zero parts are omitted.
 */
export const getDuration = (from: string, to: string | Date = new Date()) => {
  const start = new Date(from);
  const end = to === "Present" ? new Date() : new Date(to);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  const pad = (n: number) => String(n).padStart(2, "0");
  const parts: string[] = [];
  if (years > 0) parts.push(`${pad(years)} yrs`);
  if (months > 0) parts.push(`${pad(months)} mos`);
  return parts.join(" ");
};
