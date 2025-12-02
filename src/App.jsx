import './App.css';
import MainProducts from './components/MainProducts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainProducts />
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
}

export default App;
