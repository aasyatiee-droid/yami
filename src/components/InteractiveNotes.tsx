import React, { useState } from 'react';
import { NoteCard } from '../types';
import { Volume2, VolumeX, ArrowLeft, ArrowRight, Sparkles, BookOpen, Edit3, Check, RotateCcw, Award } from 'lucide-react';
import { playClickSound, speakText, stopSpeaking, playFanfareSound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface InteractiveNotesProps {
  notes: NoteCard[];
  onUpdateNotes?: (updatedNotes: NoteCard[]) => void;
}

export const InteractiveNotes: React.FC<InteractiveNotesProps> = ({
  notes,
  onUpdateNotes,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableNotes, setEditableNotes] = useState<NoteCard[]>(notes);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const currentCard = editableNotes[currentIndex];

  const handleNext = () => {
    stopSpeaking();
    setIsSpeaking(false);
    playClickSound();
    if (currentIndex < editableNotes.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    stopSpeaking();
    setIsSpeaking(false);
    playClickSound();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSpeak = () => {
    playClickSound();
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const textToRead = `${currentCard.title}. ${currentCard.content}. ${currentCard.bulletPoints.join('. ')}. ${currentCard.keyTakeaway}`;
      speakText(textToRead, () => {
        setIsSpeaking(false);
      });
    }
  };

  const handleSaveEdit = (newContent: string, newTakeaway: string) => {
    const updated = editableNotes.map((n, i) =>
      i === currentIndex ? { ...n, content: newContent, keyTakeaway: newTakeaway } : n
    );
    setEditableNotes(updated);
    if (onUpdateNotes) onUpdateNotes(updated);
    setIsEditing(false);
    playClickSound();
  };

  const handleCompleteAll = () => {
    stopSpeaking();
    setIsSpeaking(false);
    playFanfareSound();
    try {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    } catch {
      // Ignore
    }
    setCurrentIndex(0);
  };

  const themeColors = {
    lavender: 'bg-[#FAF7FD] border-[#DCCCF4]',
    pink: 'bg-[#FFF9FC] border-[#F6D6E6]',
    blue: 'bg-[#F5FAFE] border-[#CDE8F8]',
    mint: 'bg-[#F7FCF9] border-[#D5EBDD]',
    cream: 'bg-[#FFFDF7] border-[#FDE68A]',
  };

  const badgeColors = {
    lavender: 'bg-[#DCCCF4] text-[#685080]',
    pink: 'bg-[#F6D6E6] text-[#831843]',
    blue: 'bg-[#CDE8F8] text-[#0369A1]',
    mint: 'bg-[#D5EBDD] text-[#065F46]',
    cream: 'bg-[#FEF08A] text-[#92400E]',
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="storybook-card p-5 sm:p-6 bg-white border-2 border-[#DCCCF4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#DCCCF4] flex items-center justify-center text-[#685080] shadow-2xs">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#685080]">
              Nota Adab: Tutuplah Auratmu
            </h2>
            <p className="text-xs sm:text-sm text-[#8B70A6] font-medium">
              Pendidikan Islam Tahun 4 · Bidang Adab (Unit 18)
            </p>
          </div>
        </div>

        {/* Controls: Voice Reader, Font Size, and Edit */}
        <div className="flex items-center gap-2">
          {/* Audio voice recitation */}
          <button
            onClick={handleSpeak}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isSpeaking
                ? 'bg-amber-400 text-amber-950 animate-pulse'
                : 'bg-[#FAF7FD] text-[#685080] hover:bg-[#DCCCF4]/50 border border-[#DCCCF4]'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span>{isSpeaking ? 'Berhenti Suara' : 'Dengar Suara'}</span>
          </button>

          {/* Font size toggle */}
          <button
            onClick={() => {
              playClickSound();
              setFontSize(f => (f === 'normal' ? 'large' : 'normal'));
            }}
            className="px-3 py-2 rounded-xl bg-white hover:bg-gray-50 text-[#685080] text-xs font-bold border border-[#DCCCF4] cursor-pointer"
            title="Ubah Saiz Tulisan"
          >
            {fontSize === 'normal' ? 'A+' : 'A-'}
          </button>

          {/* Edit note button for teacher */}
          <button
            onClick={() => {
              playClickSound();
              setIsEditing(!isEditing);
            }}
            className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold cursor-pointer"
            title="Kemaskini Nota (Guru)"
          >
            <Edit3 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Jump Topic Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {editableNotes.map((note, idx) => (
          <button
            key={note.id}
            onClick={() => {
              stopSpeaking();
              setIsSpeaking(false);
              playClickSound();
              setCurrentIndex(idx);
            }}
            className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
              idx === currentIndex
                ? 'bg-[#685080] text-white shadow-xs'
                : 'bg-white text-[#685080] hover:bg-[#FAF7FD] border border-[#DCCCF4]/60'
            }`}
          >
            <span>Kad {idx + 1}: {note.badge}</span>
          </button>
        ))}
      </div>

      {/* Progress Bar & Page Counter */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#685080]">
          <span>Topik {currentIndex + 1} daripada {editableNotes.length}</span>
          <span className="bg-[#DCCCF4]/60 px-3 py-0.5 rounded-full">
            {Math.round(((currentIndex + 1) / editableNotes.length) * 100)}% Selesai
          </span>
        </div>
        <div className="w-full h-2.5 bg-gray-200/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#DCCCF4] via-[#F472B6] to-[#685080] rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / editableNotes.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Digital Note Card Presentation */}
      <div className={`storybook-card p-6 sm:p-9 border-2 transition-all duration-300 shadow-md ${themeColors[currentCard.colorTheme]}`}>
        {/* Card Header & Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200/70">
          <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${badgeColors[currentCard.colorTheme]}`}>
            {currentCard.badge}
          </span>
          <span className="text-xs font-extrabold text-gray-500">
            Kad {currentIndex + 1} / {editableNotes.length}
          </span>
        </div>

        {/* Card Title & Subtitle */}
        <div className="mt-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A3B56] tracking-tight">
            {currentCard.title}
          </h3>
          <p className="text-sm font-semibold text-[#8B70A6] mt-1">
            {currentCard.subtitle}
          </p>
        </div>

        {/* Content Section / Teacher Edit View */}
        {isEditing ? (
          <div className="mt-6 space-y-4 bg-white p-5 rounded-2xl border border-gray-300">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">
                Kandungan Penerangan:
              </label>
              <textarea
                id="editContent"
                defaultValue={currentCard.content}
                rows={4}
                className="w-full p-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#685080]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">
                Rumusan Utama:
              </label>
              <input
                id="editTakeaway"
                type="text"
                defaultValue={currentCard.keyTakeaway}
                className="w-full p-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-3.5 py-1.5 rounded-xl bg-gray-100 text-xs font-bold"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  const contentEl = document.getElementById('editContent') as HTMLTextAreaElement;
                  const takeawayEl = document.getElementById('editTakeaway') as HTMLInputElement;
                  handleSaveEdit(contentEl.value, takeawayEl.value);
                }}
                className="px-4 py-1.5 rounded-xl bg-[#685080] text-white text-xs font-bold flex items-center gap-1"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            <p className={`text-[#4A3B56] leading-relaxed font-medium ${fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
              {currentCard.content}
            </p>

            {/* If Arabic text exists (Dalil Naqli or Doa) */}
            {currentCard.arabicText && (
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border-2 border-[#DCCCF4] shadow-xs text-center space-y-3">
                <p className="font-arabic text-2xl sm:text-4xl text-[#2E1C38] leading-loose">
                  {currentCard.arabicText}
                </p>
                {currentCard.transliteration && (
                  <p className="text-xs sm:text-sm italic text-gray-600 font-serif">
                    “{currentCard.transliteration}”
                  </p>
                )}
                {currentCard.translation && (
                  <p className="text-xs sm:text-sm font-semibold text-[#685080] bg-[#FAF7FD] p-3 rounded-xl border border-[#DCCCF4]/60">
                    {currentCard.translation}
                  </p>
                )}
              </div>
            )}

            {/* Bullet Points */}
            <div className="space-y-2.5 pt-2">
              {currentCard.bulletPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/80 p-3 rounded-2xl border border-white shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-[#DCCCF4] text-[#685080] text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    ✦
                  </span>
                  <span className={`text-[#4A3B56] font-medium leading-snug ${fontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Takeaway Callout */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-[#FFF7E8] to-[#FFFBEB] border border-[#FDE68A] flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <span className="text-[11px] font-black text-[#92400E] uppercase tracking-wider block">
                  Rumusan Penting
                </span>
                <span className={`font-bold text-[#78350F] ${fontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                  {currentCard.keyTakeaway}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Bottom Strip */}
        <div className="mt-8 pt-5 border-t border-gray-200/70 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed text-gray-400 bg-gray-100'
                : 'bg-white hover:bg-gray-50 text-[#685080] border border-[#DCCCF4] shadow-xs'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <div className="flex items-center gap-1.5">
            {editableNotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  stopSpeaking();
                  setIsSpeaking(false);
                  playClickSound();
                  setCurrentIndex(idx);
                }}
                className={`h-3 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 bg-[#685080]'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          {currentIndex === editableNotes.length - 1 ? (
            <button
              onClick={handleCompleteAll}
              className="px-5 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-md flex items-center gap-2 transition-transform transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Ulang Semula</span>
              <RotateCcw className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm bg-[#685080] hover:bg-[#56406C] text-white shadow-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Seterusnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
