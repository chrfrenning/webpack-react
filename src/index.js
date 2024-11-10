import React from 'react';
import { createRoot } from 'react-dom/client';
import Toggle from './toggle';
import SettingsScreen from './settings';

const App = () => {
    return (
      <SettingsScreen />
    );
};

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
