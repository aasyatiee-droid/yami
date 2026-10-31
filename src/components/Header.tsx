import React from 'react';
import { Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';
import { playClickSound, toggleGlobalSound, isSoundEnabled } from '../utils/audio';

export const Header: React.FC = () => {
  const [soundOn, setSoundOn] = React.useState(isSoundEnabled());

  const handleSoundToggle = () => {
    const newState = toggleGlobalSound();
    setSoundOn(newState);
    playClickSound();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF7E8]/95 backdrop-blur-md border-b border-[#DCCCF4]/60 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-[#DCCCF4] flex items-center justify-center text-[#685080] font-bold shadow-xs">
            <Sparkles className="w-5 h-5 text-[#685080]" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#685080] whitespace-nowrap block">
              Rumah Ceria: Tutuplah Auratmu
            </span>
            <span className="text-[11px] font-bold text-[#8B70A6] block leading-none">
              Pendidikan Islam Tahun 4 · Bidang Adab (Unit 18)
            </span>
          </div>
        </div>

        {/* Center Tag / Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF7FD] px-3.5 py-1.5 rounded-full border border-[#DCCCF4] text-xs font-bold text-[#685080]">
          <BookOpen className="w-3.5 h-3.5 text-[#685080]" />
          <span>Nota Interaktif KSSR</span>
        </div>

        {/* Sound Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleSoundToggle}
            title={soundOn ? 'Matikan Bunyi' : 'Hidupkan Bunyi'}
            className="p-2 rounded-xl bg-white hover:bg-gray-50 text-[#685080] border border-[#DCCCF4] shadow-2xs transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            aria-label="Toggle sound"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-[#685080]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
            <span className="hidden sm:inline">{soundOn ? 'Bunyi Aktif' : 'Senyap'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
