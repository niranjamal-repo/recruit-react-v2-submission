# Recruit React V2

A one-page React application built for a recruitment assignment, featuring responsive design, accessibility features, and comprehensive testing.

## Features

- **Burger Menu Navigation**: Click the burger icon to show/hide the navigation menu
- **Back Button Functionality**: Click the back button to navigate to the registration form
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Form Validation**: Client-side validation with error messages
- **Unit Tests**: Comprehensive test coverage for all components

## Requirements Met

### Navigation
- ✅ Click on burger icon shows menu
- ✅ Click on back shows register card form

### Technical Requirements
- ✅ React with TypeScript
- ✅ SCSS for styling
- ✅ Unit tests with Jest and React Testing Library
- ✅ Clean, maintainable code
- ✅ Responsive design
- ✅ Accessibility features

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EdenCoNz/recruit-react-v2.git
cd recruit-react-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

- `npm start` - Runs the app in development mode with Vite
- `npm run dev` - Alternative command to start development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm test` - Runs the test suite with Vitest
- `npm run coverage` - Runs tests with coverage report

## Project Structure

```
recruit-react-v2/
├── src/
│   ├── components/
│   │   ├── Header.tsx         // Burger icon
│   │   ├── MenuView.tsx       // Menu and back arrow
│   │   └── RegisterCardForm.tsx // The form logic
│   ├── styles/
│   │   └── App.scss           // All required SCSS styling
│   ├── utils/
│   │   └── validateForm.ts    // Validation logic helper
│   ├── types.ts               // TypeScript definitions
│   └── App.tsx                // Main application component
└── package.json (existing setup)
```

## Testing

The project includes comprehensive unit tests for all components:

- **Header Component**: Tests menu toggle, back button, and accessibility
- **Menu Component**: Tests navigation items and close functionality
- **RegisterCard Component**: Tests form validation, submission, and error handling
- **App Component**: Tests overall navigation flow and state management

Run tests with:
```bash
npm test
```

Run tests with coverage:
```bash
npm run coverage
```

## Accessibility Features

- ARIA labels and roles for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Color contrast compliance
- Skip links for keyboard users

## Responsive Design

The application is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: Below 480px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Built with React 18 and TypeScript
- Styled with SCSS modules
- Bundled with Vite for fast development and optimized builds
- Tested with Vitest and React Testing Library
- Follows modern React patterns with hooks
- Implements proper error boundaries and validation
- Hot Module Replacement (HMR) for instant updates during development

## Assignment Completion

This implementation fulfills all the specified requirements:

1. **Functional Requirements**: ✅
   - Burger menu toggle functionality
   - Back button navigation to registration form

2. **Technical Requirements**: ✅
   - React with TypeScript
   - SCSS styling
   - No external component libraries used

3. **Quality Requirements**: ✅
   - Comprehensive unit tests
   - Clean, maintainable code
   - Responsive design
   - Accessibility features

The application demonstrates modern React development practices, proper state management, comprehensive testing, and attention to user experience and accessibility.
