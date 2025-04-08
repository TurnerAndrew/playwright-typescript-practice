# playwright-typescript-practice

This repository contains automated tests for a web application using Playwright with TypeScript.

## Test Plan

### MVP Test Coverage

#### Login
- [ ] User authentication
-- [ ] Valid username and password logs in
-- [ ] Invalid username does not login
--- [ ] Validate error message
-- [ ] Valid username with invalid password does not login
--- [ ] Validate error message
- [ ] Login validation

#### Products
- [ ] Add to cart functionality
- [ ] Remove products from listing
- [ ] Sort products (by price, name, etc.)
- [ ] View product details
- [ ] Verify cart icon displays correct item count

#### Navigation
- [ ] About page access
- [ ] App state persistence
- [ ] Logout functionality

#### Cart
- [ ] Remove items from cart
- [ ] Change item quantity
- [ ] Continue shopping flow
- [ ] Proceed to checkout

#### Checkout
- [ ] Customer information fields
- [ ] Cancel checkout process
- [ ] Continue checkout flow
- [ ] Verify total calculation accuracy
- [ ] Complete purchase flow
- [ ] Thank you confirmation screen
- [ ] Navigate back to home
