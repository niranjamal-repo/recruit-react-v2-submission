# Demo Instructions

## How to Run the Application

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Testing the Features

### 1. Burger Menu Navigation
- Click the burger menu icon (☰) in the top-left corner
- The navigation menu should slide in from the left
- Click "Close Menu" to return to the home view

### 2. Back Button Functionality
- Click the burger menu to open the navigation
- Click the back arrow (←) in the header
- You should be taken to the registration form

### 3. Registration Form
- Fill out the form fields (all are required)
- Test validation by submitting empty fields
- Test email validation with invalid email format
- Submit the form to see the success message

### 4. Responsive Design
- Resize your browser window to test different screen sizes
- The layout should adapt to mobile, tablet, and desktop views
- On mobile, the back button text is hidden to save space

### 5. Accessibility Features
- Use Tab key to navigate through interactive elements
- Use Enter/Space to activate buttons
- Screen readers should announce proper labels and roles
- Focus indicators should be visible on all interactive elements

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.
