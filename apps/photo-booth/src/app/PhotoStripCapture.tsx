

interface PhotoStripCaptureProps {
    photos: string[];
    clearData: () => void;
}

const PhotoStripCapture = ({ photos, clearData }: PhotoStripCaptureProps) => {
    const photoImages = photos.map((p) => {
        return (
            <div key={p}>
                <div>
                    <img
                        alt="photobooth pic"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/images/${p}`}
                        title={p}
                    />
                </div>
            </div>
        );
    });
    return (
        <div >
            <div>
                <button
                    onClick={clearData}
                    color="secondary"
                >
                    Clear current photo strip
                </button>
            </div>

            {photoImages}
        </div>
    );
};

export default PhotoStripCapture;
