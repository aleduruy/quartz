const devices = {
  small: 0,
  medium: 480,
  large: 768,
  wide: 900,
} as const

export const breakpoints = {
  tablet: `screen and (min-width: ${devices.medium}px)`,
  desktop: `screen and (min-width: ${devices.large}px)`,
} as const
