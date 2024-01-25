import React , { CSSProperties }from 'react';
import { Spin } from "antd"; 
import {  useSectorsDomain } from "src/domain/sectors/sectors.domain";


const styles: Record<string, CSSProperties>  = {
    container: {
        width: "17rem",
        height: "17rem",
        backgroundColor: "#EEE",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        fontSize: "1.7rem",
        textAlign: "center",
        margin: "0.5rem",
        fontWeight: "bold",
    },
    count: {
        fontSize: "1.5rem",
        textAlign: "center",
        margin: "0.5rem",
        color: "#666",
    },
    error: {
        textAlign: 'center',
    },
};

export const SectorsListWidget: React.FC = () => {
    const { sectors, isLoading, error } = useSectorsDomain();

    if (isLoading) {
        return <Spin style={{ margin: "auto" }} />;
    }

    if (error) {
        // Personaliza este mensaje de error según tus necesidades
        return <div style={styles.error}>Error loading sectors: {error.message}</div>;
    }

    return (
        <>
            {sectors.map((sector) => (
                <div key={sector.id} style={styles.container}>
                    <h3 style={styles.title}>{sector.name}</h3>
                    <h5 style={styles.count}>{sector.count}</h5> {/* Asegúrate de que `count` sea una propiedad válida */}
                </div>
            ))}
        </>
    );
};
