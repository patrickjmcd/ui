import { StoredPhoto } from './StoredPhoto';

export interface PhotoStrip {
  photos: StoredPhoto[];
  storedPath?: string;
}
