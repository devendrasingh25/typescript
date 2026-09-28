
import { ChaiCard } from "./components/Chaicard.tsx";
import "./App.css";

function App() {
    return (
        <>
            <div>
                <h1>Vite + React</h1>

                <ChaiCard
                    name="Masala Chai"
                    price={500}
                />
            </div>
        </>
    );
}

export default App;

