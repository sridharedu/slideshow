# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Here’s what we’ve achieved so far — this is your **presentation system milestone summary**:

---

### ✅ Slide Presentation System — Built So Far

#### 1. **Wrapper Component (SlideViewer / SlideWrapper)**

* Renders slides from a structured array of `slide` objects
* Modern responsive design with:

    * Rounded card layout
    * Soft background gradient
    * Centered content with padding

#### 2. **Slide Structure**

Each slide supports:

* `title`: main heading
* `points`: mixed bullet list and code lines
* `note`: speaker-only extra info (highlighted box)
* (future-ready for tags, images, quotes, subtitles)

#### 3. **Code + Bullet Hybrid Rendering**

* Supports multiline ` ```java ... ``` ` code blocks
* Auto-renders code in monospaced blocks with styles
* Text lines rendered with spacing and clarity

#### 4. **Keyboard Navigation**

* `→`, `space`, `d` = next slide
* `←`, `a` = previous slide
* Mouse click buttons also supported

#### 5. **Speaker Notes**

* `note` shows up in a highlighted section below points
* Doesn't break layout or logic if missing
* Clean and readable (yellow box, italic content)

#### 6. **Production-Ready UX**

* Accessible styling with contrast
* Smooth layout on all screen sizes
* No external dependencies required

---

### 🧠 Ready for Next?

We can now easily add:

* [ ] `tags`: visual indicators, filters, auto-theme
* [ ] `quote`, `subtitle`, `image` support
* [ ] print/export slide deck as PDF
* [ ] dark mode / toggleable theme
* [ ] markdown slide ingestion (via `.md` parser)

Just say what you want to add or improve next — you're running a solid, real-world slide platform.
