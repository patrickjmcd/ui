import { useState, useRef, useEffect } from "react";


interface LivePhotoProps {
    getData: () => void;
}

const ws_path =
  // "ws://" + window.location.host + window.location.pathname + "ws";
  // `ws://localhost:8000/ws`;
  `${process.env.NEXT_PUBLIC_WS_URL}/ws`;
function LivePhoto({ getData }: LivePhotoProps) {
    const [imgSrc, setImgSrc] = useState("");
    const webSocket = useRef(new WebSocket(ws_path));

    useEffect(() => {
        webSocket.current = new WebSocket(ws_path);
        webSocket.current.onopen = () => {
            webSocket.current.send("1");
        };
        webSocket.current.onmessage = (msg) => {
            setImgSrc(`data:image/jpg;base64,${msg.data}`);
            webSocket.current.send("1");
        };
        webSocket.current.onerror = (e) => {
            console.log(e);
            webSocket.current.send("1");
        };
        return () => webSocket.current.close();
    }, []);

    const snap = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/snap`, { method: "POST" });
        setTimeout(() => {
            getData();
        }, 500);
    };

    return (
        <div >
            <div>
                <div>
                    <img
                        alt="live camera view"
                        src={imgSrc}
                        title="Photo Booth"
                        style={{ maxHeight: "600px", objectFit: "cover" }}
                    />
                </div>
            </div>
            <div>
                <button
                    onClick={snap}
                    // variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                >
                    Snap a Pic!
                </button>
            </div>
        </div>
    );
}

export default LivePhoto;
