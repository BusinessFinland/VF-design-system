# Visual Language

On the basic level, visual language is expressed with *design tokens* - atoms of design systems. They are named enteties
that store visual design attributes. Technically, design tokens are expressed as CSS variables.


```css
:root {

  /* Colors */

  --vf-color-white: #ffffff;
  --vf-color-black: #404040;

  --vf-color-darkgray: #343a40;
  --vf-color-lightgray: #e7ebef;
  --vf-color-gray: #c7cace;

  --vf-color-red: #c12d3b;
  --vf-color-green: #0b7724;
  --vf-color-yellow: #ffc107;

  --vf-color-brand-primary: #ff64a5;
  --vf-color-brand-primary-dark: #d9558c;

  --vf-color-brand-blue: rgb(115, 200, 255);
  --vf-color-brand-pink: rgb(255, 100, 165);
  --vf-color-brand-orange: rgb(255, 145, 60);
  --vf-color-brand-green: rgb(65, 185, 0);


  /* Typography */
  
  --vf-font-size-base: 16px;
  --vf-font-size-small: 0.9rem;

  --vf-font-weight-thin: 300;
  --vf-font-weight-normal: 400;
  --vf-font-weight-bold: 700;

  --vf-font-family-brand: Avenir;
  --vf-font-family-fallback: "Helvetica Neue", Helvetica, Arial, sans-serif;

  --vf-font-family-serif: Georgia;
  --vf-font-family-serif-fallback: serif;

  --vf-line-height-base: 1.6;
  --vf-line-height-header: 1.15;


  /* Transitions */

  --vf-transition: .2s ease-out;

  /* Border Radius */

  --vf-border-radius-bubble: 2rem;
  --vf-border-radius-input: 0.25rem;


  /* Spacing */

  --vf-spacing-xxs: 0.15rem;
  --vf-spacing-xs: 0.25rem;
  --vf-spacing-sm: 0.5rem;
  --vf-spacing-md: 0.75rem;
  --vf-spacing-lg: 1rem;
  --vf-spacing-xl: 2rem;
  --vf-spacing-xxl: 3rem;


  /* Headers */

  --vf-header-1: 5.653rem;
  --vf-header-2: 3.998rem;
  --vf-header-3: 2.827rem;
  --vf-header-4: 1.999rem;
  --vf-header-5: 1.414rem;


  /* Breakpoints */

  --vf-breakpoint-sm: 576px;
  --vf-breakpoint-md: 768px;
  --vf-breakpoint-lg: 992px;
  --vf-breakpoint-xl: 1200px;
  
}
```
