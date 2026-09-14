"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Check,
  RotateCcw,
  ChevronRight,
  Target,
} from "lucide-react";
import { cn } from "@/components/animations";

type HazardStatus = "unfound" | "found";

interface Hazard {
  id: string;
  label: string;
  explanation: string;
  top: string;
  left: string;
}

const HAZARDS: Hazard[] = [
  {
    id: "spill",
    label: "Unmarked liquid spill",
    explanation:
      "A spill left without a warning sign or barrier is a slip hazard. Standard practice is to isolate the area and display a wet-floor sign until it is cleared.",
    top: "68%",
    left: "22%",
  },
  {
    id: "stack",
    label: "Unstable pallet stack",
    explanation:
      "Pallets stacked above the racking's load height, or without shrink-wrap, can topple. This can create a serious risk during put-away and picking activities.",
    top: "30%",
    left: "72%",
  },
  {
    id: "exit",
    label: "Obstructed fire exit",
    explanation:
      "Boxes left in front of an emergency exit can block evacuation during an incident. Fire exits and the routes to them should be kept clear.",
    top: "50%",
    left: "48%",
  },
];

const DECOYS = [
  {
    id: "decoy-1",
    top: "20%",
    left: "15%",
  },
  {
    id: "decoy-2",
    top: "78%",
    left: "80%",
  },
];

export function ScenarioPreview() {
  const [found, setFound] = useState<Record<string, HazardStatus>>({});
  const [activeFeedback, setActiveFeedback] = useState<Hazard | null>(null);
  const [missTick, setMissTick] = useState(0);

  const missTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const foundCount = Object.keys(found).length;
  const totalHazards = HAZARDS.length;
  const complete = foundCount === totalHazards;

  const progressPercentage = Math.round(
    (foundCount / totalHazards) * 100
  );

  function handleHazardClick(hazard: Hazard) {
    if (found[hazard.id]) return;

    setFound((prev) => ({
      ...prev,
      [hazard.id]: "found",
    }));

    setActiveFeedback(hazard);
  }

  function handleMiss() {
    setMissTick((n) => n + 1);

    if (missTimer.current) {
      clearTimeout(missTimer.current);
    }

    missTimer.current = setTimeout(() => {
      setMissTick(0);
    }, 1200);
  }

  function reset() {
    if (missTimer.current) {
      clearTimeout(missTimer.current);
    }

    setFound({});
    setActiveFeedback(null);
    setMissTick(0);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Scenario Header */}
      <div className="px-6 py-5 border-b border-gray-100 bg-industrial-light">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target
                size={18}
                className="text-brand-cyan"
                aria-hidden="true"
              />

              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
                Interactive Prototype
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-heading font-bold text-industrial-black">
              Warehouse Loading Bay
            </h3>

            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Identify the workplace hazards before normal warehouse activity
              begins.
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto text-sm font-bold text-gray-600 hover:text-industrial-black transition-colors"
            aria-label="Restart safety scenario"
          >
            <RotateCcw size={15} aria-hidden="true" />
            Replay
          </button>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-industrial-black">
              Scenario progress
            </span>

            <span className="text-gray-500">
              {foundCount} / {totalHazards} hazards identified
            </span>
          </div>

          <div
            className="h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={totalHazards}
            aria-valuenow={foundCount}
            aria-label="Scenario progress"
          >
            <motion.div
              className="h-full bg-brand-cyan rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.35 }}
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="px-6 py-4 border-b border-gray-100 bg-white">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
            <AlertTriangle size={16} aria-hidden="true" />
          </div>

          <div>
            <p className="text-sm font-bold text-industrial-black">
              Your task
            </p>

            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Inspect the loading bay and select the areas that represent
              potential safety hazards.
            </p>
          </div>
        </div>
      </div>

      {/* Warehouse Scene */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-industrial-gray to-industrial-black overflow-hidden">
        {/* Warehouse floor */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-industrial-light/90" />

        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 78px, rgba(15,23,42,0.15) 78px, rgba(15,23,42,0.15) 80px)",
          }}
        />

        {/* Background warehouse structures */}
        <div className="absolute top-6 left-6 w-24 h-2/3 border-4 border-white/10 bg-white/5 rounded-sm" />

        <div className="absolute top-6 right-24 w-24 h-2/3 border-4 border-white/10 bg-white/5 rounded-sm" />

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-2 border-t-2 border-white/10" />

        {/* Hazard hotspots */}
        {HAZARDS.map((hazard) => {
          const isFound = Boolean(found[hazard.id]);

          return (
            <button
              key={hazard.id}
              type="button"
              onClick={() => handleHazardClick(hazard)}
              aria-pressed={isFound}
              aria-label={
                isFound
                  ? `${hazard.label} — identified`
                  : "Unidentified area, tap to inspect"
              }
              style={{
                top: hazard.top,
                left: hazard.left,
              }}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-cyan/40",
                isFound
                  ? "bg-brand-yellow text-industrial-black scale-100 shadow-lg"
                  : "bg-white/15 hover:bg-white/25 text-white scale-100 hover:scale-110 border-2 border-dashed border-white/40"
              )}
            >
              {isFound ? (
                <Check size={20} aria-hidden="true" />
              ) : (
                <AlertTriangle size={18} aria-hidden="true" />
              )}
            </button>
          );
        })}

        {/* Safe / decoy zones */}
        {DECOYS.map((decoy) => (
          <button
            key={decoy.id}
            type="button"
            onClick={handleMiss}
            aria-label="Inspect area — looks clear"
            style={{
              top: decoy.top,
              left: decoy.left,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-cyan/30"
          />
        ))}

        {/* Miss message */}
        <AnimatePresence>
          {missTick > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-semibold text-white bg-industrial-black/80 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap"
              role="status"
            >
              That area looks clear — try somewhere else.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Completion */}
        <AnimatePresence>
          {complete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-industrial-black/75 backdrop-blur-sm p-6"
              role="status"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="text-center max-w-md"
              >
                <div className="w-14 h-14 rounded-full bg-brand-yellow text-industrial-black flex items-center justify-center mx-auto mb-5">
                  <Check size={28} aria-hidden="true" />
                </div>

                <p className="text-brand-yellow text-sm font-bold uppercase tracking-widest mb-2">
                  Scenario Complete
                </p>

                <h4 className="text-white font-heading text-2xl md:text-3xl font-bold mb-3">
                  All hazards identified
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  You identified {foundCount} out of {totalHazards} hazards in
                  this warehouse scenario.
                </p>

                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-yellow text-industrial-black font-bold rounded-full text-sm hover:brightness-95 transition-all focus:outline-none focus:ring-4 focus:ring-brand-yellow/40"
                >
                  <RotateCcw size={16} aria-hidden="true" />
                  Try again
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Feedback Panel */}
      <div className="px-6 py-6 border-t border-gray-100 min-h-[132px]">
        <AnimatePresence mode="wait">
          {activeFeedback ? (
            <motion.div
              key={activeFeedback.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3"
              role="status"
              aria-live="polite"
            >
              <div className="w-9 h-9 rounded-full bg-brand-yellow/20 text-brand-yellow-dark flex items-center justify-center shrink-0 mt-0.5">
                <Check size={17} aria-hidden="true" />
              </div>

              <div>
                <p className="font-bold text-industrial-black text-sm mb-1">
                  Hazard identified: {activeFeedback.label}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {activeFeedback.explanation}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 text-gray-400 text-sm"
            >
              <ChevronRight size={16} aria-hidden="true" />

              <span>
                Select a hotspot in the scene to receive immediate safety
                feedback.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}