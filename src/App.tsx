import React, { useState, useEffect } from 'react';
import { NoteCard } from './types';
import { INITIAL_NOTES } from './data/curriculumData';
import { Header } from './components/Header';
import { InteractiveNotes } from './components/InteractiveNotes';

export default function App() {
  // Persistent Notes
  const [notes, setNotes] = useState<NoteCard[]>(() => {
    try {
      const saved = localStorage.getItem('rumah_ceria_notes');
      return saved ? JSON.parse(saved) : INITIAL_NOTES;
    } catch {
      return INITIAL_NOTES;
    }
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('rumah_ceria_notes', JSON.stringify(notes));
    } catch {
      // Ignore
    }
  }, [notes]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E8] text-[#4A3B56]">
      {/* Header Bar */}
      <Header />

      {/* Main Content Area: Nota Adab */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <InteractiveNotes
          notes={notes}
          onUpdateNotes={(updated) => setNotes(updated)}
        />
      </main>

      {/* Clean Educational Footer */}
      <footer className="mt-auto border-t border-[#DCCCF4]/60 bg-white/80 py-5 px-4 sm:px-8 text-center text-xs text-[#8B70A6]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-bold text-[#685080]">
            <span>🌸 Rumah Ceria: Tutuplah Auratmu</span>
            <span>·</span>
            <span>Pendidikan Islam Tahun 4 (Bidang Adab - Unit 18)</span>
          </div>

          <div className="text-[11px] text-[#8B70A6] font-medium">
            <span>Berpandukan DSKP KSSR Semakan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
