export interface IconPropsType {
  tag?: keyof HTMLElementTagNameMap;
  name: string;
  color?: string;
  dot?: boolean;
  size?: number | string;
  badge?: number | string;
  badgeColor?: string;
}
