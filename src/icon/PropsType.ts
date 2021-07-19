export interface IconPropsType {
  tag?: keyof HTMLElementTagNameMap | string;
  theme?: 'single' | 'multi';
  name: string;
  color?: string;
  dot?: boolean;
  size?: number | string;
  badge?: number | string;
}
