/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "on-tertiary-fixed-variant": "#004e5c",
              "primary-container": "#161b2b",
              "surface-container-lowest": "#ffffff",
              "tertiary-container": "#001f26",
              "on-surface-variant": "#46464c",
              "secondary": "#0058be",
              "error": "#ba1a1a",
              "surface-tint": "#595e71",
              "surface": "#f7f9fb",
              "on-primary-fixed-variant": "#414658",
              "on-secondary-container": "#fefcff",
              "on-tertiary-container": "#0090a9",
              "background": "#f7f9fb",
              "surface-container-low": "#f2f4f6",
              "outline-variant": "#c7c6cd",
              "on-primary-container": "#7f8398",
              "error-container": "#ffdad6",
              "primary-fixed": "#dee1f9",
              "on-tertiary": "#ffffff",
              "on-primary": "#ffffff",
              "primary-fixed-dim": "#c1c5dc",
              "inverse-on-surface": "#eff1f3",
              "surface-bright": "#f7f9fb",
              "secondary-container": "#2170e4",
              "surface-container-high": "#e6e8ea",
              "on-secondary": "#ffffff",
              "tertiary-fixed": "#acedff",
              "on-tertiary-fixed": "#001f26",
              "outline": "#76767d",
              "inverse-surface": "#2d3133",
              "on-primary-fixed": "#161b2b",
              "surface-container": "#eceef0",
              "surface-dim": "#d8dadc",
              "primary": "#000000",
              "surface-container-highest": "#e0e3e5",
              "on-background": "#191c1e",
              "secondary-fixed-dim": "#adc6ff",
              "tertiary": "#000000",
              "secondary-fixed": "#d8e2ff",
              "on-secondary-fixed-variant": "#004395",
              "surface-variant": "#e0e3e5",
              "tertiary-fixed-dim": "#4cd7f6",
              "on-error-container": "#93000a",
              "on-secondary-fixed": "#001a42",
              "on-error": "#ffffff",
              "inverse-primary": "#c1c5dc",
              "on-surface": "#191c1e"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "margin-mobile": "20px",
              "gutter": "24px",
              "container-max": "1280px",
              "margin-desktop": "40px",
              "stack-unit": "8px"
      },
      "fontFamily": {
              "display-lg": [
                      "Inter"
              ],
              "headline-md": [
                      "Inter"
              ],
              "code-sm": [
                      "Geist"
              ],
              "label-caps": [
                      "Geist"
              ],
              "body-lg": [
                      "Inter"
              ],
              "display-lg-mobile": [
                      "Inter"
              ],
              "body-md": [
                      "Inter"
              ]
      },
      "fontSize": {
              "display-lg": [
                      "48px",
                      {
                              "lineHeight": "1.1",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "800"
                      }
              ],
              "headline-md": [
                      "24px",
                      {
                              "lineHeight": "1.3",
                              "letterSpacing": "-0.01em",
                              "fontWeight": "700"
                      }
              ],
              "code-sm": [
                      "13px",
                      {
                              "lineHeight": "1.4",
                              "fontWeight": "400"
                      }
              ],
              "label-caps": [
                      "12px",
                      {
                              "lineHeight": "1",
                              "letterSpacing": "0.05em",
                              "fontWeight": "600"
                      }
              ],
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "1.6",
                              "fontWeight": "400"
                      }
              ],
              "display-lg-mobile": [
                      "32px",
                      {
                              "lineHeight": "1.2",
                              "letterSpacing": "-0.01em",
                              "fontWeight": "800"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "1.5",
                              "fontWeight": "400"
                      }
              ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
