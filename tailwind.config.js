/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Inter"],
      },
      fontSize: {
        h1: ["22px", "24px"],
        h2: ["19px", "22px"],
        h3: ["16px", "20px"],
        p: ["13px", "18px"],
        caption: ["11px", "16px"],
        caption2: ["9px", "16px"],
      },
      textColor: {
        "primary-50": "#EBF5FF",
        "primary-100": "#E1EFFE",
        "primary-200": "#C3DDFD",
        "primary-300": "#A4CAFE",
        "primary-400": "#76A9FA",
        "primary-500": "#3F83F8",
        "primary-600": "#1C64F2",
        "primary-700": "#1A56DB",
        "primary-800": "#1E429F",
        "primary-900": "#233876",
        "content-primary-light": "#111928",
        "content-primary-dark": "#F3F4F6",
        "content-secondary-light": "#6B7280",
        "content-secondary-dark": "#6B7280",
        "content-tetriary-light": "#9CA3AF",
        "content-tetriary-dark": "#4B5563",
        "action-hover-light": "#1119280A",
        "action-hover-dark": "#FFFFFF0F",
        "action-select-light": "#1119280F",
        "action-select-dark": "#FFFFFF1A",
        "surface-overlay-light": "#FFFFFF",
        "surface-overlay-dark": "#111928",
        "surface-alt-light": "#E5E7EB",
        "surface-alt-dark": "#1F2A37",
        "surface-base-light": "#F9FAFB",
        "surface-base-dark": "#0E121A",
        "success-dark": "#0E9F6E",
        "success-light": "#057A55",
      },
      backgroundColor: {
        "content-primary-light": "#111928",
        "content-secondary-light": "#6B7280",
        "content-tetriary-light": "#9CA3AF",
        "content-primary-dark": "#F3F4F6",
        "content-secondary-dark": "#6B7280",
        "content-tetriary-dark": "#4B5563",
        "action-hover-light": "#1119280A",
        "action-hover-dark": "#FFFFFF0F",
        "action-select-light": "#1119280F",
        "action-select-dark": "#FFFFFF1A",
        "surface-overlay-light": "#FFFFFF",
        "surface-overlay-dark": "#111928",
        "surface-alt-light": "#E5E7EB",
        "surface-alt-dark": "#1F2A37",
        "surface-base-light": "#F9FAFB",
        "surface-base-dark": "#0E121A",
        "success-dark": "#0E9F6E",
        "success-light": "#057A55",
      },
    },
  },
  plugins: [],
};
