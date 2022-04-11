import React from 'react';
import { useQuery } from 'react-query';
import Header from "../components/header";
import MainLayout from "../components/Layouts/MainLayout";

const fetchPlanets = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res.json();
};

const ReactQuery = () => {
    const { data, status } = useQuery('planets', fetchPlanets);

    return (
        <MainLayout>
            <div style={styles.container}>
                <h1 style={styles.header}>
                    React Query
                </h1>
                {status === "loading" && <div>Loading...</div>}
                {status === "error" && <div>Error fetching data</div>}
                {status === "success" && (
                    data.map(val => (
                        <div style={styles.card}>
                            <div style={styles.txt}>
                                Id: {val.id}
                            </div>
                            <div style={styles.txt}>
                                Title: {val.title}
                            </div>
                            <div style={styles.txt}>
                                Completed: {val.completed ? "Done" : "Unfinished"}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </MainLayout>
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
