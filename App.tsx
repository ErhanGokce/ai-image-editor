
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import PromptControls from './components/PromptControls';
import GeneratedImage from './components/GeneratedImage';
import { editImageWithGemini } from './services/geminiService';
import { fileToBase64 } from './utils/fileUtils';

const App: React.FC = () => {
  const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setOriginalImageFile(file);
    setOriginalImageUrl(URL.createObjectURL(file));
    setGeneratedImageUrl(null);
    setError(null);
  };
  
  const handleGenerate = useCallback(async () => {
    if (!originalImageFile || !prompt) {
      setError('Please upload an image and enter a prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    try {
      const { base64, mimeType } = await fileToBase64(originalImageFile);
      const generatedBase64 = await editImageWithGemini(base64, mimeType, prompt);
      setGeneratedImageUrl(`data:image/jpeg;base64,${generatedBase64}`);
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to generate image. ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [originalImageFile, prompt]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header />
      <main className="w-full max-w-7xl flex-grow flex flex-col gap-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <ImageUpload onImageUpload={handleImageUpload} imageUrl={originalImageUrl} />
            <PromptControls
              prompt={prompt}
              setPrompt={setPrompt}
              onGenerate={handleGenerate}
              isLoading={isLoading}
              isDisabled={!originalImageFile}
            />
          </div>
          <GeneratedImage imageUrl={generatedImageUrl} isLoading={isLoading} error={error} />
        </div>
        {error && !isLoading && (
            <div className="lg:hidden mt-4 text-center p-4 bg-red-900/50 text-red-300 border border-red-700 rounded-lg">
                {error}
            </div>
        )}
      </main>
    </div>
  );
};

export default App;
