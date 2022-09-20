import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import ProvedorTema, { TemaConetxt } from './src/contexts/TemaContext';
import Home from './src/screens/home';
import { dark } from './src/theme/dark';
import Routes from './src/routes';
import Contexts from './src/contexts';



export default function App() {
  return ( 
    <Contexts>
      <ThemeProvider theme={dark}>
        <Routes/>
      </ThemeProvider>
    </Contexts>
  );
}
