
import React from 'react';
import { ImageIcon, AlertTriangleIcon } from './Icons';

interface GeneratedImageProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const LoadingSkeleton: React.FC = () => (
    <div className="w-full h-full bg-slate-800 animate-pulse rounded-lg"></div>
);

const GeneratedImage: React.FC<GeneratedImageProps> = ({ imageUrl, isLoading, error }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex flex-col gap-4 min-h-[300px] lg:min-h-0">
       <h2 className="text-lg font-bold text-slate-200">3. Result</h2>
      <div className="relative w-full aspect-video bg-slate-800 rounded-lg flex justify-center items-center overflow-hidden">
        {isLoading && <LoadingSkeleton />}
        {!isLoading && error && (
            <div className="hidden lg:flex flex-col items-center text-center text-red-400 p-4">
                <AlertTriangleIcon className="w-12 h-12 text-red-500 mb-4" />
                <p className="font-bold text-lg">Generation Failed</p>
                <p className="text-sm text-red-400/80 max-w-sm">{error}</p>
            </div>
        )}
        {!isLoading && !error && imageUrl && (
            <img src={imageUrl} alt="Generated result" className="object-contain w-full h-full" />
        )}
        {!isLoading && !error && !imageUrl && (
          <div className="text-center text-slate-500">
            <ImageIcon className="w-12 h-12 mx-auto mb-4" />
            <p className="font-semibold">Your edited image will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratedImage;
