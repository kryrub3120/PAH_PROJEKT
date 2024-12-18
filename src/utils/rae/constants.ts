export const RAE_QUARTERS: Record<1 | 2 | 3 | 4, { start: number; end: number }> = {
  1: { start: 1, end: 90 },
  2: { start: 91, end: 181 },
  3: { start: 182, end: 273 },
  4: { start: 274, end: 365 },
};

export const QUARTER_LABELS = {
  1: 'Q1 (Jan-Mar)',
  2: 'Q2 (Apr-Jun)',
  3: 'Q3 (Jul-Sep)',
  4: 'Q4 (Oct-Dec)',
};