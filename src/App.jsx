const App = () => {
    const broj = 3;
    

    return (
        <div>
            <div>
                {broj % 2 == 0 && <p>{broj} je paran</p>}
                {broj % 2 != 0 && <p>{broj} je neparan</p>}
            </div>
        </div>
    );
};

export default App;
