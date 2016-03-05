# React Close On Escape

Simple HOC to close enclosed react component on press of escape key (or really call on any function but please use for closing thank you)

## use
`npm install react-close-on-escape --save`

```jsx
import CloseOnEscape from 'react-close-on-escape';

const Component = ({ onEscape }) => <CloseOnEscape onEscape={onEscape}><span>some stuff here</span></CloseOnEscape>;
```

:wave:
