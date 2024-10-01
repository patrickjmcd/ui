import { StoredPhoto } from '../interface/StoredPhoto';


interface CurrentPhotoStripProps {
  photos: StoredPhoto[];
}

const CurrentPhotoStrip = ({photos}: CurrentPhotoStripProps) => {
  return (
    <div className={"flex flex-row"}>
      {photos.map((photo, index) => (
        <div key={index} className={"flex flex-col"}>
          <img src={photo.data} className={"w-32 h-32"} />
          <p>{photo.filename}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrentPhotoStrip;
