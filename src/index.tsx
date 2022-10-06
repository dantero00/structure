import { createRoot } from 'react-dom/client';

import { routeEnvironment as isProduction } from './config/variables_environment';
import React from 'react';

declare var PRODUCTION: boolean;

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <p>prueba</p>
    </React.StrictMode>
  )
}

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<Root />);