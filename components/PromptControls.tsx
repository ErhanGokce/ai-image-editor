
import React from 'react';
import { SparklesIcon } from './Icons';

interface PromptControlsProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  isDisabled: boolean;
}

const PromptControls: React.FC<PromptControlsProps> = ({
  prompt,
  setPrompt,
  onGenerate,
  isLoading,
  isDisabled,
}) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex flex-col gap-4">
      <h2 className="text-lg font-bold text-slate-200">2. Describe Your Edit</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., Add a retro filter, remove the person in the background, make it look like a watercolor painting..."
        className="w-full h-24 p-3 bg-slate-800 border border-slate-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
        disabled={isDisabled || isLoading}
      />
      <button
        onClick={onGenerate}
        disabled={isLoading || isDisabled || !prompt.trim()}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 font-bold text-white rounded-lg transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 disabled:from-slate-600 disabled:to-slate-600"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            Generate
          </>
        )}
      </button>
    </div>
  );
};

export default PromptControls;
