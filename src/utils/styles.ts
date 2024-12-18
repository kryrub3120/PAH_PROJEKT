// Centralize common styles
export const commonStyles = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16',
  heading: {
    primary: 'text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl',
    secondary: 'text-3xl font-extrabold text-gray-900',
  },
  card: 'rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200',
  button: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 transition-colors',
    secondary: 'border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors',
  },
};

export const animations = {
  fadeIn: 'transition-opacity duration-200 ease-in-out',
  scale: 'transition-transform duration-200 hover:scale-105',
  slideIn: 'transition-transform duration-200 ease-in-out',
};