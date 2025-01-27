import { SApp } from './styles/app.styles';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/constants.styles';
import { AppRouter } from './routes/routes';
import { Header } from '../widgets/Header/Header';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <SApp>
                <Header />
                <AppRouter />
            </SApp>
        </ThemeProvider>
    );
}