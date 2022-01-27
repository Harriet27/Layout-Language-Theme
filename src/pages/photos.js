import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from "../components/Layouts/MainLayout";
import { getAllPhotos } from '../redux/actions/photoAction';

const Photos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPhotos());
    }, []);

    const photoList = useSelector((state) => state.photo.photosList);
    const list = photoList.slice(0, 20);

    const renderPhotos = () => {
        return list.map((val) => (
            <div
                key={val.id}
                style={styles.content}
            >
                <div style={{fontWeight: "bold"}}>
                    {val.title}
                </div>
                <div>
                    {val.url}
                </div>
                <div>
                    <img src={val.thumbnailUrl} alt={val.thumbnail} />
                </div>
            </div>
        ));
    };

    return (
        <MainLayout>
            <div style={styles.root}>
                {renderPhotos()}
            </div>
        </MainLayout>
    );
};

const styles = {
    root: {
        marginTop: "1rem",
    },
    content: {
        marginBottom: "1rem",
        padding: "0.75rem",
        borderRadius: "5px",
        width: "25rem",
        backgroundColor: "ghostwhite",
    },
};

export default Photos;
