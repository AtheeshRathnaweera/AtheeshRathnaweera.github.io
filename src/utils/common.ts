export const getDuration = (from: string, to: string | Date = new Date()) => {
  const start = new Date(from);
  const end = to === "Present" ? new Date() : new Date(to);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  let yearsStr = "";
  if (years > 0) {
    yearsStr = years + " yr" + (years > 1 ? "s" : "") + " ";
  }
  let monthsStr = "";
  if (months > 0) {
    monthsStr = months + " mo" + (months > 1 ? "s" : "");
  }
  return (yearsStr + monthsStr).trim();
};
