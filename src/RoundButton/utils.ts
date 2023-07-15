import type { Theme } from '../styles';
import type { ButtonProps } from '../Button';

/** Get theme color based on color prop */
export const getColor = (
  colorName: ButtonProps['color'],
  shade: 'main' | 'dark' | 'light',
  theme: Theme
) => {
  const color = colorName || 'primary';

  return color === 'inherit' ? 'inherit' : theme.palette[color][shade];
};
