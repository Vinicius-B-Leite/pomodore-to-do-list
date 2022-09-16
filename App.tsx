import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import ProvedorTema, { TemaConetxt } from './src/contexts/TemaContext';
import Home from './src/screens/home';
import { dark } from './src/theme/dark';
import CreateTask from './src/screens/createTask';
import Routes from './src/routes';



export default function App() {
  return ( 
    <ProvedorTema>
      <ThemeProvider theme={dark}>
        <Routes/>
      </ThemeProvider>
    </ProvedorTema>
  );
}
