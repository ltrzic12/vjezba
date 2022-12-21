const App = () => {
    const broj = 5;

    

    return (
        <div>
            <div>
                {(broj % 2 == 0 && broj !== 0) && <p>{broj} je paran.</p>}
                {(broj % 2 != 0 && broj !== 0) && <p>{broj} je neparan.</p>}
                {broj === 0 && <p>Zadani broj je nula.</p>}
            </div>
        </div>
    );
};

export default App;
