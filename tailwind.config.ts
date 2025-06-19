import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: {
					DEFAULT: '#E5E7EB',
					dark: 'hsl(var(--border))',
				},
				input: {
					DEFAULT: '#E5E7EB',
					dark: 'hsl(var(--input))',
				},
				ring: {
					DEFAULT: '#2E7D32',
					dark: 'hsl(var(--ring))',
				},
				background: {
					DEFAULT: '#FFFFFF',
					dark: 'hsl(var(--background))',
				},
				foreground: {
					DEFAULT: '#22223A',
					dark: 'hsl(var(--foreground))',
				},
				primary: {
					DEFAULT: '#2E7D32',
					foreground: '#ffffff',
					dark: 'hsl(var(--primary))',
					'dark-foreground': 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: '#E6EFE9',
					foreground: '#2E7D32',
					dark: 'hsl(var(--secondary))',
					'dark-foreground': 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#ffffff',
					dark: 'hsl(var(--destructive))',
					'dark-foreground': 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: '#F3F4F6',
					foreground: '#6B7280',
					dark: 'hsl(var(--muted))',
					'dark-foreground': 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: '#8D6E63',
					foreground: '#ffffff',
					dark: 'hsl(var(--accent))',
					'dark-foreground': 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#22223A',
					dark: 'hsl(var(--popover))',
					'dark-foreground': 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#22223A',
					dark: 'hsl(var(--card))',
					'dark-foreground': 'hsl(var(--card-foreground))',
				},
				sidebar: {
					DEFAULT: '#F9FAFB',
					foreground: '#22223A',
					dark: 'hsl(var(--sidebar-background))',
					'dark-foreground': 'hsl(var(--sidebar-foreground))',
					primary: {
						DEFAULT: '#2E7D32',
						dark: 'hsl(var(--sidebar-primary))',
					},
					accent: {
						DEFAULT: '#8D6E63',
						dark: 'hsl(var(--sidebar-accent))',
					},
					border: {
						DEFAULT: '#E5E7EB',
						dark: 'hsl(var(--sidebar-border))',
					},
					ring: {
						DEFAULT: '#2E7D32',
						dark: 'hsl(var(--sidebar-ring))',
					},
				},
				mint: {
					DEFAULT: '#E6EFE9',
					dark: 'hsl(var(--accent))',
				},
			},
			fontFamily: {
				'serif': ['DM Serif Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
