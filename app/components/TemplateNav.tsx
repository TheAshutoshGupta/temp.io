import { NextPage } from 'next';
import CodeSnippet from './maintainance';

const codeString = `
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>Hello, world!</div>;

ReactDOM.render(<App />, document.getElementById('root'));
`;

const TemplateNav: NextPage = () => {
  return (
    <div>
      <h1>Code Snippet Example</h1>
      <CodeSnippet language="javascript" code={codeString} />
    </div>
  );
};

export default TemplateNav;
