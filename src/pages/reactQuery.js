import React from 'react';
import { useQuery } from 'react-query';
import Header from "../components/header";

const fetchPlanets = async() => {
    const res = await fetch('http://swapi.dev/api/planets');
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
                data.results.map(planet => (
                    <div style={styles.card}>
                        <div style={styles.txt}><b>{planet.name}</b></div>
                        <div style={styles.txt}>Population: {planet.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                        <div style={styles.txt}>Terrain: {planet.terrain}</div>
                    </div>
                ))
            )}

        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#1d1c1d',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header: {
        color: '#f5e100',
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
