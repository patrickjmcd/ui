'use client';
import { useEffect, useState } from 'react';
import { TabStrip } from '@ui/components';
import WebcamCapture from './WebcamCapture';
import { StoredPhoto } from '../interface/StoredPhoto';
import { PhotoStrip } from '../interface/PhotoStrip';
import CurrentPhotoStrip from './CurrentPhotoStrip';


const App = () => {
  const [sessionPhotos, setSessionPhotos] = useState<StoredPhoto[]>([]);
  const [photoStrips, setPhotoStrips] = useState<PhotoStrip[]>([]);
  const [selectedTab, setSelectedTab] = useState('live');

  const pushOntoStoredPhotos = (photo: StoredPhoto) => {
    setSessionPhotos([...sessionPhotos, photo]);
  };

  const saveStrip = async (strip: PhotoStrip) => {
    console.log('saveStrip', strip);
    try {
      const response = await fetch(`http://localhost:3000/api/strip`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fileNames: strip.photos.map(photo => photo.storedPath) })
      });
      if (response.ok) {
        const responseBody = await response.json();
        const newStrip = { ...strip, storedPath: responseBody.file };
        setPhotoStrips([...photoStrips, newStrip]);
      }
    } catch (e) {
      console.log(e);
      setPhotoStrips([...photoStrips, strip]);
    }
  };

  useEffect(() => {
    if (sessionPhotos.length === 4) {
      const photoStrip = {
        photos: sessionPhotos,
        timestamp: new Date().toISOString()
      };
      saveStrip(photoStrip);
      setSessionPhotos([]);
    }

  }, [photoStrips, sessionPhotos]);




  const saveImage = async (image: string) => {
    console.log('saveImage', image);
    const now = new Date();
    try {
      const response = await fetch(`http://localhost:3000/api/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, fileName: `${now.getTime()}.jpg` })
      });
      if (response.ok) {
        const responseBody = await response.json();
        pushOntoStoredPhotos({ data: image, filename: `${now.getTime()}.jpg`, storedPath: responseBody.file });
      }
    } catch (e) {
        console.log(e);
        pushOntoStoredPhotos({ data: image, filename: `${now.getTime()}.jpg` });
      }
    }

    return (
      <div className={'flex flex-col'}>
        <TabStrip
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabs={[
            { id: 'live', label: 'Live Photos' },
            { id: 'strips', label: 'Photo Strips', alertCount: 1 },
          ]}
        />
        {selectedTab === 'live' && (
          <div>
            <WebcamCapture handleCapture={saveImage} />
            {/*<LivePhoto getData={fetchData} />*/}

            {/*<PhotoStripCapture*/}
            {/*  photos={sessionPhotos}*/}
            {/*  clearData={clearCapture} />*/}
            <div>
              <CurrentPhotoStrip photos={sessionPhotos} />
            </div>
          </div>
        )}
        {selectedTab === 'strips' && (
          <div>
            {/*<PhotoStrips photos={photoStrips.} />*/}
          </div>
        )}
      </div>
    );
  };

  export default App;
