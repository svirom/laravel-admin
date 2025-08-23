import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import About from './components/About';

// Функція для "монтування" потрібного компонента на конкретний div
// window.mountReactComponent = (componentName, elementId) => {
//   const root = ReactDOM.createRoot(document.getElementById(elementId));
//   switch (componentName) {
//     case 'Home':
//       root.render(<Home />);
//       break;
//     case 'About':
//       root.render(<About />);
//       break;
//     default:
//       root.render(<div>Component not found</div>);
//   }
// };

const components = {
    Home,
    About,
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-react-component]').forEach(el => {
    const name = el.getAttribute('data-react-component');
    const Component = components[name];
    if (Component) {
      ReactDOM.createRoot(el).render(<Component />);
    }
  });
});
