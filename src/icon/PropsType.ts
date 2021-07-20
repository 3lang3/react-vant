export interface IconPropsType {
  tag?: keyof HTMLElementTagNameMap | string;
  name: string;
  color?: string;
  dot?: boolean;
  size?: number | string;
  badge?: number | string;
  badgeColor?: string;
}
