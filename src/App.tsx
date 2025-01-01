import About from "./components/About";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Header />
            <Hero />
            <About />
            <Features />
        </main>
    );
}

export default App;
