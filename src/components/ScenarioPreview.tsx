"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Check,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/components/animations";

/**
 * A genuinely interactive scenario, not a marketing mock-up.
 *
 * This is a small, self-contained implementation of the core SafeWork
 * training loop the client asked for in the requirements-gathering
 * sessions: clickable hazards on a scene, immediate feedback per click,
 * a running score, and a replay action. It intentionally does NOT try
 * to demonstrate the full product (login, modules, reporting) — those
 * are listed honestly as roadmap items elsewhere on the site. This one
 * piece is real and runnable.
 */

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
      "Pallets stacked above the racking's load height, or without shrink-wrap, can topple. This is a common cause of warehouse injury during put-away and picking.",
    top: "30%",
    left: "72%",
  },
  {
    id: "exit",
    label: "Obstructed fire exit",
    explanation:
      "Boxes left in front of an emergency exit block evacuation in an incident. Fire exits and the routes to them must be kept clear at all times.",
    top: "50%",
    left: "48%",
  },
];

const DECOYS = [
  { id: "decoy-1", top: "20%", left: "15%" },
  { id: "decoy-2", top: "78%", left: "80%" },
];

export function ScenarioPreview() {
  const [found, setFound] = useState<Record<string, HazardStatus>>({});
  const [activeFeedback, setActiveFeedback] = useState<Hazard | null>(null);
  const [missTick, setMissTick] = useState(0);
  const missTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const foundCount = Object.keys(found).length;
  const complete = foundCount === HAZARDS.length;

  function handleHazardClick(hazard: Hazard) {
    if (found[hazard.id]) return;
    setFound((prev) => ({ ...prev, [hazard.id]: "found" }));
    setActiveFeedback(hazard);
  }

  function handleMiss() {
    // Brief, low-friction acknowledgement rather than a penalty —
    // this mirrors the client's request for a low-pressure, quick
    // learning loop rather than a punitive quiz feel.
    setMissTick((n) => n + 1);
    if (missTimer.current) clearTimeout(missTimer.current);
    missTimer.current = setTimeout(() => setMissTick(0), 1200);
  }

  function reset() {
    setFound({});
    setActiveFeedback(null);
    setMissTick(0);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Header strip */}
      <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-100 bg-industrial-light">
        <div>
          <p className="text-sm font-bold text-industrial-black">
            Spot the hazards
          </p>
          <p className="text-xs text-gray-500">
            Tap anywhere in the loading bay you think looks unsafe.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-bold text-industrial-black bg-white border border-gray-200 rounded-full px-3 py-1">
            {foundCount} / {HAZARDS.length} found
          </span>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-industrial-black transition-colors"
            aria-label="Restart scenario"
          >
            <RotateCcw size={14} />
            Replay
          </button>
        </div>
      </div>

      {/* Scene */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-industrial-gray to-industrial-black overflow-hidden">
        {/* Simple warehouse floor illustration, built from CSS rather than a stock photo */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-industrial-light/90" />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 78px, rgba(15,23,42,0.15) 78px, rgba(15,23,42,0.15) 80px)",
          }}
        />
        {/* Racking */}
        <div className="absolute top-6 left-6 w-24 h-2/3 border-4 border-white/10 bg-white/5 rounded-sm" />
        <div className="absolute top-6 right-24 w-24 h-2/3 border-4 border-white/10 bg-white/5 rounded-sm" />

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
              style={{ top: hazard.top, left: hazard.left }}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all",
                isFound
                  ? "bg-brand-yellow text-industrial-black scale-100 shadow-lg"
                  : "bg-white/15 hover:bg-white/25 text-white scale-100 hover:scale-110 border-2 border-dashed border-white/40"
              )}
            >
              {isFound ? <Check size={20} /> : <AlertTriangle size={18} />}
            </button>
          );
        })}

        {/* Decoy / safe zones — clicking these gives a gentle miss, not a hazard */}
        {DECOYS.map((decoy) => (
          <button
            key={decoy.id}
            type="button"
            onClick={handleMiss}
            aria-label="Inspect area — looks clear"
            style={{ top: decoy.top, left: decoy.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full hover:bg-white/10 transition-colors"
          />
        ))}

        <AnimatePresence>
          {missTick > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-semibold text-white bg-industrial-black/80 px-3 py-1.5 rounded-full border border-white/10"
            >
              That area looks clear — try somewhere else
            </motion.div>
          )}
        </AnimatePresence>

        {complete && (
          <div className="absolute inset-0 flex items-center justify-center bg-industrial-black/70 backdrop-blur-sm">
            <div className="text-center px-6">
              <p className="text-white font-heading text-2xl font-bold mb-2">
                All hazards identified
              </p>
              <p className="text-gray-300 text-sm mb-5 max-w-xs mx-auto">
                In the full SafeWork module this result would be logged to
                the learner&apos;s progress record.
              </p>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-yellow text-industrial-black font-bold rounded-full text-sm hover:brightness-95 transition-all"
              >
                <RotateCcw size={16} />
                Try again
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Feedback panel — appears the moment a hazard is found */}
      <div className="px-6 py-5 border-t border-gray-100 min-h-[104px]">
        <AnimatePresence mode="wait">
          {activeFeedback ? (
            <motion.div
              key={activeFeedback.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-brand-yellow/20 text-brand-yellow-dark flex items-center justify-center shrink-0 mt-0.5">
                <Check size={16} />
              </div>
              <div>
                <p className="font-bold text-industrial-black text-sm mb-1">
                  {activeFeedback.label}
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
              <ChevronRight size={16} />
              Select a hotspot in the scene to see feedback appear here.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}