import React, { useState, useEffect, useRef } from 'react';
import { RobotCanvas } from './RobotCanvas';
import { Volume2, VolumeX, FastForward, Play, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';

interface RobotVoiceIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

interface ScriptLine {
  text: string;
  delayBefore?: number;
  pauseAfter?: number;
}

const SPEECH_SCRIPT: ScriptLine[] = [
  {
    text: "First, my name is Fozan.",
    pauseAfter: 1200,
  },
  {
    text: "Many students have useful skills, but they do not always have a clear platform to find real projects, clients, experience and opportunities.",
    pauseAfter: 1000,
  },
  {
    text: "That is why I created SkillSwap — a platform where students can showcase their skills, find work, connect with clients, exchange skills and grow together.",
    pauseAfter: 1000,
  },
  {
    text: "Welcome to SkillSwap.",
    pauseAfter: 1500,
  },
];

export const RobotVoiceIntro: React.FC<RobotVoiceIntroProps> = ({ onComplete, isOpen }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [synthAvailable, setSynthAvailable] = useState<boolean>(true);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const typingTimerRef = useRef<any>(null);
  const scriptTimerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      setSynthAvailable(false);
    }
    return () => {
      stopAllSpeech();
    };
  }, []);

  const stopAllSpeech = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    if (scriptTimerRef.current) clearTimeout(scriptTimerRef.current);
  };

  const speakText = (text: string, onEnd: () => void) => {
    if (isMuted || !synthRef.current) {
      // Just simulate speech duration
      const estimatedDuration = Math.max(2200, text.length * 55);
      const timer = setTimeout(() => {
        onEnd();
      }, estimatedDuration);
      scriptTimerRef.current = timer;
      return;
    }

    try {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Try to choose a high-quality natural English voice
      const voices = synthRef.current.getVoices();
      const englishVoice = voices.find(
        (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Guy'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.onend = () => {
        onEnd();
      };

      utterance.onerror = () => {
        onEnd();
      };

      synthRef.current.speak(utterance);
    } catch {
      onEnd();
    }
  };

  const typeWriterEffect = (fullText: string, onDone: () => void) => {
    let index = 0;
    setDisplayedText('');
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    const speed = Math.max(18, Math.min(35, 2000 / fullText.length));

    typingTimerRef.current = setInterval(() => {
      index++;
      setDisplayedText(fullText.slice(0, index));
      if (index >= fullText.length) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        onDone();
      }
    }, speed);
  };

  const runScriptStep = (lineIndex: number) => {
    if (lineIndex >= SPEECH_SCRIPT.length) {
      // Finished all lines!
      setIsSpeaking(false);
      const endTimer = setTimeout(() => {
        handleProceed();
      }, 1600);
      scriptTimerRef.current = endTimer;
      return;
    }

    setCurrentLineIndex(lineIndex);
    const line = SPEECH_SCRIPT[lineIndex];
    setIsSpeaking(true);

    typeWriterEffect(line.text, () => {
      // text is finished typing
    });

    speakText(line.text, () => {
      setIsSpeaking(false);
      const pause = line.pauseAfter || 1000;
      scriptTimerRef.current = setTimeout(() => {
        runScriptStep(lineIndex + 1);
      }, pause);
    });
  };

  const handleStartIntro = () => {
    setHasStarted(true);
    stopAllSpeech();
    runScriptStep(0);
  };

  const handleSkipIntro = () => {
    stopAllSpeech();
    handleProceed();
  };

  const handleReplayIntro = () => {
    stopAllSpeech();
    setIsTransitioning(false);
    setHasStarted(true);
    runScriptStep(0);
  };

  const handleProceed = () => {
    stopAllSpeech();
    setIsTransitioning(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (!isMuted && synthRef.current) {
      synthRef.current.cancel();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden transition-all duration-700 ${
        isTransitioning ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #E8F5FF 0%, #CDE9FC 60%, #BAE1F9 100%)',
      }}
    >
      {/* Top Bar Branding & Controls */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-brand-border/60 shadow-soft">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-brand-navy flex items-center justify-center text-white font-black text-sm shadow-blue-glow">
            SS
          </div>
          <div>
            <span className="font-extrabold text-brand-navy text-lg tracking-tight">SkillSwap</span>
            <span className="ml-2 text-xs font-semibold text-brand-primary bg-brand-lightBlue px-2 py-0.5 rounded-full border border-brand-sky">
              3D AI Host
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {hasStarted && (
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-white/80 hover:bg-white text-brand-navy border border-brand-border/80 shadow-soft transition-all hover:scale-105 active:scale-95"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-brand-mutedText" /> : <Volume2 className="w-5 h-5 text-brand-primary animate-pulse" />}
            </button>
          )}

          {hasStarted && (
            <button
              onClick={handleReplayIntro}
              className="px-3.5 py-2 rounded-full bg-white/80 hover:bg-white text-brand-navy text-xs font-semibold border border-brand-border/80 shadow-soft transition-all hover:scale-105 active:scale-95 flex items-center space-x-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-brand-primary" />
              <span>Replay</span>
            </button>
          )}

          <button
            onClick={handleSkipIntro}
            className="px-4 py-2 rounded-full bg-brand-navy hover:bg-brand-primary text-white text-xs font-bold tracking-wide shadow-soft-lg transition-all hover:scale-105 active:scale-95 flex items-center space-x-1.5"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center 3D Robot Experience */}
      <div className="relative w-full flex-1 flex items-center justify-center max-w-5xl">
        <RobotCanvas
          isSpeaking={isSpeaking}
          introStage={hasStarted ? 1 : 0}
          isTransitioningOut={isTransitioning}
        />

        {/* Speech Dialogue Bubble */}
        {hasStarted && (
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl z-20">
            <div className="bg-white/95 backdrop-blur-xl p-5 md:p-6 rounded-2xl border-2 border-brand-border shadow-soft-xl text-center relative transition-all">
              {/* Glowing pointer triangle */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-t-2 border-l-2 border-brand-border rotate-45" />

              {/* Speaker Indicator */}
              <div className="flex items-center justify-center space-x-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy">
                  Fozan &bull; SkillSwap AI Architect
                </span>
                {isSpeaking && (
                  <div className="flex items-center space-x-0.5 ml-2">
                    <span className="w-1 h-3 bg-brand-primary rounded animate-pulse" />
                    <span className="w-1 h-5 bg-brand-accent rounded animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-brand-primary rounded animate-pulse delay-150" />
                  </div>
                )}
              </div>

              {/* Typewritten Dialogue */}
              <p className="text-brand-darkText font-medium text-base md:text-lg min-h-[3.6rem] flex items-center justify-center leading-relaxed">
                {displayedText}
                <span className="inline-block w-2 h-5 bg-brand-primary ml-1 animate-pulse" />
              </p>

              {/* Progress Indicator */}
              <div className="flex justify-center items-center space-x-1.5 mt-4">
                {SPEECH_SCRIPT.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentLineIndex
                        ? 'w-8 bg-brand-primary'
                        : idx < currentLineIndex
                        ? 'w-3 bg-brand-border'
                        : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              {currentLineIndex === SPEECH_SCRIPT.length - 1 && (
                <button
                  onClick={handleProceed}
                  className="mt-4 inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-blue-glow transition-all hover:scale-105 active:scale-95"
                >
                  <span>Enter SkillSwap Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Start Overlay if not started yet */}
        {!hasStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[2px] z-30">
            <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl border-2 border-brand-border shadow-soft-xl max-w-md text-center mx-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-navy mx-auto flex items-center justify-center text-white mb-4 shadow-blue-glow">
                <Sparkles className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-navy mb-2">
                Meet Your 3D AI Host
              </h2>
              <p className="text-brand-mutedText text-sm mb-6 leading-relaxed">
                Experience the futuristic voice introduction by founder Fozan, explaining the problem, the vision, and the solution.
              </p>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleStartIntro}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-base shadow-blue-glow transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Start Introduction</span>
                </button>
                <button
                  onClick={handleSkipIntro}
                  className="w-full py-2.5 px-4 rounded-xl text-brand-mutedText hover:text-brand-navy hover:bg-brand-lightBlue text-xs font-semibold transition-all"
                >
                  Skip directly to website
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle Bottom Credits */}
      <div className="w-full max-w-7xl mx-auto px-6 pb-4 text-center z-10">
        <span className="text-xs font-medium text-brand-mutedText">
          “Fozan, web developer as a problem solver.” &bull; Learn. Connect. Collaborate. Earn.
        </span>
      </div>
    </div>
  );
};
