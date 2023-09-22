# NAMASTE REACT 02

# Parcel
- Dev Build
- Lazy Dev Builds
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles





/**
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *       - RestaurantCard
 *            - Img
 *            - Name of Res, Star Rating, cuisine, delivery time
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */


Two Types of Export/Import

- Default Export / Import

export default <name of variable|component>;
import Component from "path";

- Named Export / Import

export const Component;
import { Component } from "path";

# React Hooks
  (Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()



# 2 types Routing in web apps
  - Client Side Routing
  - Server Side Routing

# Higher order component
Higher order component is a function that takes the component and return the components.

Higher order component takes component as a input than it  enhances the component (it adds extra features to the component) and returns it back.


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux 
- Build our store
- Connect our store to our application (app)
- Slice (cartSlice)
- dispatch (action)
- Selector


# Types of testing (developer)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest configuration --> npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - Install @testing-library/jest-dom - npm i -D @testing-library/jest-dom

