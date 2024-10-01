import { useState } from "react";

const reprintStrip = (filename: string) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/reprint`, {
        method: "POST",
        body: JSON.stringify({ filename }),
    });
};

interface PhotoStripsProps {
    photos: string[];
}

const PhotoStrips = ({ photos }: PhotoStripsProps) => {
    const [openPhotoModal, setOpenPhotoModal] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const handleOpen = (img: string) => {
        setOpenPhotoModal(true);
        setModalImage(img);
    };

    const handleClose = () => {
        setOpenPhotoModal(false);
    };
    const photoImages = photos.map((p) => {
        return (
            <div key={p}>
                <div key={p}>
                    <img
                        alt="photobooth pic"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/images/${p}`}
                        title={p}
                        onClick={() => handleOpen(p)}
                    />
                    <button
                        onClick={() => reprintStrip(p)}
                        color="Primary"
                        style={{ marginBottom: "10px" }}
                    >
                        Re-Print
                    </button>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div>
                {photoImages}
            </div>
            <div
                // // open={openPhotoModal}
                // onClose={handleClose}
                // aria-labelledby="simple-modal-title"
                // aria-describedby="simple-modal-description"
            >
                <div>
                    <div>
                        <div>
                            <div>
                                <img
                                    alt="photobooth pic"
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/images/${modalImage}`}
                                    title={modalImage}
                                    height="400px"
                                />
                                <button
                                    onClick={() => reprintStrip(modalImage)}
                                    color="Primary"
                                    style={{ marginBottom: "10px" }}
                                >
                                    Re-Print
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoStrips;
