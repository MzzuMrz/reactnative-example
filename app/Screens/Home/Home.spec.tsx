import React from 'react';
import { render } from '@testing-library/react-native';
import Page from './index'; // Ajusta la ruta de importación según sea necesario

// Mock de Constants de expo-constants para simular las variables de entorno
jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: {
      appName: 'Test App Name',
      color: '#000000',
    },
  },
}));

describe('Page component', () => {
  it('renders the welcome message with the app name', () => {
    const { getByText } = render(<Page />);
    expect(getByText('Welcome to')).toBeTruthy();
    expect(getByText('Test App Name')).toBeTruthy();
  });

  it('renders the default app name when no app name is provided', () => {
    // Restablecer el mock para este test y simular que no hay nombre de app proporcionado
    jest.mock('expo-constants', () => ({
      expoConfig: {
        extra: {},
      },
    }));

    const { getByText } = render(<Page />);
    expect(getByText('Welcome to')).toBeTruthy();
  });
});
