import "./index.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Button } from 'datadash-components';

import { Button } from '../dist';

const App = () => {
  return (
    <div>
      <Button className="btn btn-sm"> Hello </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
