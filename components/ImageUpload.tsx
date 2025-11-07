
import React, { useRef } from 'react';
import { UploadIcon } from './Icons';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  imageUrl: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, imageUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex flex-col gap-4 h-full">
      <h2 className="text-lg font-bold text-slate-200">1. Upload Image</h2>
      <div
        onClick={handleClick}
        className="relative w-full aspect-video bg-slate-800 rounded-lg border-2 border-dashed border-slate-600 hover:border-blue-500 transition-colors duration-300 cursor-pointer flex justify-center items-center overflow-hidden group"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/webp"
        />
        {imageUrl ? (
          <>
            <img src={imageUrl} alt="Uploaded preview" className="object-contain w-full h-full" />
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">Click to change image</p>
            </div>
          </>
        ) : (
          <div className="text-center text-slate-400">
            <UploadIcon className="w-10 h-10 mx-auto mb-2" />
            <p className="font-semibold">Click to upload an image</p>
            <p className="text-sm">PNG, JPG, or WEBP</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
