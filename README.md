# playwright-typescript-practice

This repository contains automated tests for a web application using Playwright with TypeScript.

## Test Plan

### MVP Test Coverage

#### Login
- [x] User authentication
    - [x] Valid username and password logs in
    - [x] Invalid username does not login
        - [x] Validate error message
    - [x] Valid username with invalid password does not login
        - [x] Validate error message
- [x] Field validation
    - [x] Username is required
        - [x] Error message if empty on submit
        - [x] Login button disabled if empty
    - [x] Password is required
        - [x] Error message if empty on submit
        - [x] Login button disabled if empty

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
