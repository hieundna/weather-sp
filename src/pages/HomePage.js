import '../styles/HomePage.scss';
import Summary from '../components/Summary/Summary';
import ChartWeather from '../components/ChartWeather/ChartWeather';
import { AppProvider } from '../contexts/context'

function HomePage() {
    return (
        <AppProvider>
            <div data-testid='container' className="container">
                <Summary />
                <ChartWeather />
            </div>
        </AppProvider>
    );
}

export default HomePage;
