import './Main_page.css';

const MainPage = () => {
    const images = [
        { src: "./src/pictures/Img1.jpg", alt: "Изображение 1" },
        { src: "./src/pictures/Img2.png", alt: "Изображение 2" },
        { src: "./src/pictures/Img3.jpg", alt: "Изображение 3" },
        { src: "./src/pictures/Img4.jpg", alt: "Изображение 4" },
        { src: "./src/pictures/Img5.jpg", alt: "Изображение 5" },
        { src: "./src/pictures/Img6.jpg", alt: "Изображение 6" },
        { src: "./src/pictures/Img7.jpg", alt: "Изображение 7" },
        { src: "./src/pictures/Img8.jpg", alt: "Изображение 8" },
        { src: "./src/pictures/Img9.jpg", alt: "Изображение 9" },
        { src: "./src/pictures/Img10.jpg", alt: "Изображение 10" },
        { src: "./src/pictures/Img11.jpg", alt: "Изображение 11" },
        { src: "./src/pictures/Img12.jpg", alt: "Изображение 12" },
        { src: "./src/pictures/Img13.jpg", alt: "Изображение 13" },
    ];

    return (
        <div className="Page_img">
            {images.map((image, index) => (
                <img
                    key={index}
                    className="Img_item"
                    src={image.src}
                    alt={image.alt}
                />
            ))}
        </div>
    );
};

export default MainPage;