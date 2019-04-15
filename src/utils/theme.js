import {css} from 'styled-components'

const primary = '#EE8422' // Primary brand / Interactive text / Border highlight / Emphasis background / Featured elements
const text01 = 'rgb(83, 66, 54)' // Primary text / Body copy
const text02 = '#666666' // Secondary text / Subtle text / Help text

const colors = {
  primary,
  text01,
  text02
}

export { colors}


//   🌌 Spacing Scale
//   ==========================================
//   Used for elements / components
//   1   ||  1px  ||  0.0625rem
//   2   ||  2px  ||  0.125rem
//   3   ||  4px  ||  0.25rem
//   4   ||  8px  ||  0.5rem
//   5   ||  12px ||  0.75rem
//   6   ||  16px ||  1rem
//   7   ||  24px ||  1.5rem
//   8   ||  32px ||  2rem
//   9   ||  40px ||  2.5rem
//   10  ||  48px ||  3rem
//   ==========================================
export const spacing = [0, '0.0625rem', '0.125rem', '0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem']

//   Layout Scale
//   ==========================================
//   Used for pages or big components
//   1  ||  16px  ||  1rem
//   2  ||  24px  ||  1.5rem
//   3  ||  32px  ||  2rem
//   4  ||  48px  ||  3rem
//   5  ||  64px  ||  4rem
//   6  ||  96px  ||  6rem
//   7  ||  160px ||  10rem
//   8  ||  240px ||  15rem
//   9  ||  000px ||  00rem
//   10 ||  000px ||  00rem
//   ==========================================
export const layoutScale = [0, '1rem', '1.5rem', '2rem', '3rem', '4rem', '6rem', '10rem', '15rem']


//   Type Scale
//   ==========================================
//   
//   1   ||  11px  ||  0.6875rem
//   2   ||  12px  ||  0.75rem
//   3   ||  14px  ||  0.875rem
//   4   ||  16px  ||  1rem
//   5   ||  18px  ||  1.125rem
//   6   ||  20px  ||  1.25rem
//   7   ||  24px  ||  1.5rem
//   8   ||  28px  ||  1.75rem
//   9   ||  36px  ||  2.25rem
//   10  ||  54px  ||  3.375rem
//   11  ||  76px  ||  4.75rem
//
//  'hero': 4.75rem, // 76px
//  'h1': 2.25rem, // 36px
//  'h2': 1.75rem, // 28px
//  'h3': 1.25rem, // 20px
//  'h4': 1.125rem, // 18px
//  'h5': 1rem, // 16px
//  'h6': 0.875rem, // 14px
//  'xs': 0.75rem, // 12px
//  'caption': 0.75rem, // 12px
//  'legal': 0.6875rem, // 11px
//  'p': 1rem, // 16px
//
//
//   Line Height
//   1  ||  16px / 1rem
//   2  ||  18px / 1.125rem
//   3  ||  22px / 1.375rem
//   4  ||  24px / 1.5rem
//   5  ||  26px / 1.625rem
//   6  ||  36px / 2.25rem
//   7  ||  44px / 2.75rem
//   8  ||  64px / 4rem
//   9  ||  88px / 5.5rem
//
//   ==========================================
export const typeScale = [0, '0.6875rem', '0.75rem', '0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.75rem', '2.25rem', '3.375rem', '4.75rem']

export const lineHeight = [0, '1rem', '1.125rem', '1.375rem', '1.5rem', '1.625rem', '2.25rem', '2.75rem', '4rem', '5.5rem']

export const fontCustom = `"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;`
export const fontSystem = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
export const fontDefault = [fontSystem]
export const fontRegular = 400
export const fontBold = 600


//-------------------------------------------
// 📑 Layer
// ------------------------------------------
//
//   Layer                 ||  Elevation
//   ==========================================
//   0 - Base              ||  0 (none)
//   1 - Flat              ||  1 (none)
//   2 - Raised            ||  2
//   3 - Overlay           ||  8
//   4 - Pop-out           ||  24
//   ==========================================
//   Custom: Global Header ||  undefine
//

const raised = '0 1px 2px 0 rgba(0,0,0,0.1)'
const button = '0 4px 8px 0 rgba(0,0,0,0.1)'
const overlay = '0 4px 8px 0 rgba(0,0,0,0.1)'
const popOut = '0 12px 24px 0 rgba(0,0,0,0.1)'

const boxShadows = {
    raised,
    button,
    overlay,
    popOut
}

export { boxShadows}


// Radius
const small = '0.125rem' // 2px
const medium = '0.35rem' // 4px
const large = '0.5rem' // 8px
const pill = '2rem' // 24px
const circle = '50%' // Used only on same width & height elements.

const radius = {
    small,
    medium,
    large,
    pill,
    circle
}

export { radius }

// Buttons
export const buttonRadius = [small]
export const buttonRounded = [pill]
export const buttonBorderWidth = '0.125rem' // 2px

const sizes = {
    xl: 1200, // 75rem // Extra large devices (large desktops, 1200px and up)
    lg: 1024, // 64rem // Large devices (desktops, 1024px and up)
    md: 768, // 48rem // Medium devices (tablets, 768px and up)
    sm: 576 // 36rem // Small devices (landscape phones, 576px and up)
 // xs: 575.98 // No media query for `xs` since everything is written from xs (mobile first)
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}rem) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})
  
  // Usage
  // ${media.md` styling here `}

// @media (min-width: ${sizes.md / 16}rem) and (max-width: ${sizes.lg / 16}rem) {}
  

// M o t i o n

// Duration
const fast = ' 150ms' // Used in small animations like button presses
const steady = ' 250ms' // Used in medium animations like popovers and tooltips
const slow = ' 450ms' // Used for larger components like modals
const slowest = ' 600ms' // Used in the largest animations like page transitions

const duration = {
  fast,
  steady,
  slow,
  slowest
}

export { duration }


// Easing
const inOut = ' ease-in-out'
const inBack = ' cubic-bezier(0.6, -0.28, 0.735, 0.045)'
const outBack = ' cubic-bezier(0.175, 0.885, 0.32, 1.275)'
const inOutBack = ' cubic-bezier(0.68, -0.55, 0.265, 1.55)'

const easing = {
  inOut,
  inBack,
  outBack,
  inOutBack
}

export { easing }


// Motion
const fastFx = [`all`, fast, inOut]
const steadyFx = [`all`, steady, inOut]
const inOutBackFx = [`all`, steady, inOutBack]
const slowestFx = [`all`, slowest, inOut]

const motion = {
  fastFx,
  steadyFx,
  inOutBackFx,
  slowestFx
}

export { motion }


const theme = {
    colors,
    spacing,
    layoutScale,
    fontCustom,
    fontSystem,
    fontDefault,
    typeScale,
    lineHeight,
    fontRegular,
    fontBold,
    radius,
    buttonRadius,
    buttonBorderWidth,
    buttonRounded,
    boxShadows,
    media,
    motion
}

export default theme