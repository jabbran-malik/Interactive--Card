

A responsive React application that provides a real-time interactive credit card preview with form validation. Styled with Tailwind CSS, fully responsive, and works seamlessly across mobile and desktop screens.

Features

Real-time Card Preview

Updates instantly as you type.

Formats card number, cardholder name, expiry date, and CVC live.

Form Validation

Required fields cannot be blank.

Card number: digits only, 16 digits, Luhn algorithm check.

Expiry month: 01–12.

Expiry year: valid 2 digits, not expired.

CVC: 3 or 4 digits.

Error messages appear under each input field.

Completed State

Shows a success message when the form is valid and submitted.

Form hides automatically.

Reset Functionality

Continue button resets all fields and allows another submission.

Responsive Layout

Mobile: Cards on top, form below.

Desktop: Cards on left, form on right.

Tailwind Flex/Grid utilities ensure proper spacing and alignment.

Visual Design

Card front/back components implemented.

Backgrounds, gradients, spacing, and typography match modern design.

Ready to replace placeholder images with actual card assets.

Clean React Architecture

Component-based: CardPreview, CardForm, Completed.

Controlled inputs, lifted state in App.

Reusable validators and Tailwind classes.

Tech Stack

React – for UI components and state management

Tailwind CSS – for responsive styling and layout

JavaScript – for form validation and formatting logic
