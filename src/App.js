// import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "./App.css";

// import Inicio from "./componentes/Inicio/inicio";

// function App() {
//   return <Inicio />;
// }

// export default App;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Inicio from "./componentes/Inicio/inicio";
import { testApi } from "./services/api";

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await testApi();
                setMessage(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>React + Node.js + MySQL</h1>
                <p>{message}</p>
            </header>
            <Inicio />
        </div>
    );
}

export default App;

