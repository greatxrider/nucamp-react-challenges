import { useState, useEffect } from "react";
import "./App.css";

const request = `https://pokeapi.co/api/v2/pokemon?limit=10`;

function App() {
    const [isLoading, setLoading] = useState(true); //pending
    const [data, setData] = useState(null); // fullfilled
    const [errMsg, setErrMsg] = useState(""); // rejected

    useEffect(() => {
        fetch(request)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response;
            })
            .then((response) => response.json())
            .then((fetchedData) => {
                setTimeout(() => {
                    setLoading(false);
                    setData(fetchedData);
                    setErrMsg("");
                }, 3000);
            })
            .catch((err) => {
                setLoading(false);
                setErrMsg(err.toString());
            });
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (errMsg) {
        return (
            <div>
                <h1>whoopsie!: that was a bad request</h1>
                <p>{errMsg}</p>
            </div>
        );
    }

    return (
        <div>
            {data && (
                <div>
                    <h1>top 10 poke</h1>
                    {data.results.map((item, idx) => (
                        <div key={idx}>{item.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
