export type TRow = Record<string, string | number | boolean | string[]>;

export interface Column {
  id: string;
  label: string;
}

export interface TableProps<TRow> {
  columns: Column[];
  rows: TRow[];
}

export type TModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface TimelineElementProps {
  children: React.ReactNode;
}
