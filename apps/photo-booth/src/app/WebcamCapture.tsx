
import Webcam from "react-webcam";
import { useRef, useCallback, useEffect } from 'react';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
};

interface WebcamCaptureProps {
  handleCapture: (imageSrc: string) => void;
}

const WebcamCapture = ({handleCapture}: WebcamCaptureProps) => {
    const webcamRef = useRef(null);

  const capture = useCallback(() => {
    // @ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);
    handleCapture(imageSrc);
  }, [handleCapture, webcamRef]);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      console.log(`You pressed ${e.code}.`);
      if (e.code === "Space") {
        capture();
      }
    }
    document.addEventListener("keydown", keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [capture]);



    return (
        <div className={"flex flex-col"}>
          <h1 className={"text-2xl"}>Photo Booth</h1>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
        </div>
    );
};

export default WebcamCapture;
