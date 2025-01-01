import { SApp } from './styles/app.styles';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/constants.styles';
import { Timer } from '../pages/Timer';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <SApp>
                <Timer />
            </SApp>
        </ThemeProvider>
    );
}