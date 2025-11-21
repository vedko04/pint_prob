import './Main_page.css';
import { useEffect, useState } from "react";

const MainPage = () => {
    const [images, setImages] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://api.slingacademy.com/v1/sample-data/photos");
        const data = await res.json();
        setImages(data.photos);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="Page_img">
            {images.map((photo) => (
                <img
                    className="Img_item"
                    key={photo.id}
                    src={photo.url}
                />
            ))}
            {images.map((photo) => (
                <img
                    className="Img_item"
                    key={photo.id}
                    src={photo.url}
                />
            ))}
            {images.map((photo) => (
                <img
                    className="Img_item"
                    key={photo.id}
                    src={photo.url}
                />
            ))}
            {images.map((photo) => (
                <img
                    className="Img_item"
                    key={photo.id}
                    src={photo.url}
                />
            ))}
            {images.map((photo) => (
                <img
                    className="Img_item"
                    key={photo.id}
                    src={photo.url}
                />
            ))}
        </div>
    );
};

export default MainPage;
