import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async() => {
    const res = await fetch('http://swapi.dev/api/planets');
    return res.json();
};

const ReactQuery = () => {
    const { data, status } = useQuery('planets', fetchPlanets);

    return (
        <div>
            <h1>React Query</h1>

            {/* Loading */}
            {status === "loading" && <div>Loading...</div>}

            {/* Error */}
            {status === "error" && <div>Error fetching data</div>}

            {/* Success */}
            {status === "success" && (
                data.results.map(planet => (
                    <div>
                        <div><b>{planet.name}</b></div>
                        <div>Population: {planet.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                        <div>Terrain: {planet.terrain}</div>
                        <br />
                    </div>
                ))
            )}

        </div>
    );
};

export default ReactQuery;
