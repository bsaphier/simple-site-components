## React-SSC (Simple Site Components)
###### A collection of design components for creating a responsive website.
[![npm](https://img.shields.io/npm/v/react-ssc.svg)](https://www.npmjs.com/package/react-ssc)


# !Still being developed. Anything can change!
##### If you include this package as a dependency in your project, be wary that a future version may work in very different ways...


## Installation / Setup
```bash
npm i react-ssc || yarn add react-ssc
```
Most components are stateless and only handle styling. For now, this package does not export the stylesheets by default and so you must import them seperate from the main library. If you are using bundler like Webpack, the entry point is a good place to do this:
```javascript
import SSC from 'react-ssc';      // import the component library
import 'react-ssc/dist/lib.css';  // import the stylesheets

...

class App extends React.Component {
  render() {
    return (
      <SSC.Container>
        ...
      </SSC.Container>
    );
  }
}
```
