import React from 'react';
import { useQuery } from 'react-query';
import Header from "../components/header";

const fetchPlanets = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res.json();
};

const ReactQuery = () => {
    const { data, status } = useQuery('planets', fetchPlanets);

    return (
        <div style={styles.container}>
            <Header />

            <h1 style={styles.header}>
                React Query
            </h1>

            {/* Loading */}
            {status === "loading" && <div>Loading...</div>}

            {/* Error */}
            {status === "error" && <div>Error fetching data</div>}

            {/* Success */}
            {status === "success" && (
                data.map(val => (
                    <div style={styles.card}>
                        <div style={styles.txt}>Id: {val.id}</div>
                        <div style={styles.txt}>Title: {val.title}</div>
                        <div style={styles.txt}>Completed: {val.completed ? "Done" : "Unfinished"}</div>
                    </div>
                ))
            )}

        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
    },
    card: {
        padding: '0.75rem 1rem',
        backgroundColor: '#555555',
        width: '350px',
        margin: '0 1rem 1rem 1rem',
        borderRadius: '5px',
    },
    txt: {
        color: 'white',
    },
};

export default ReactQuery;
