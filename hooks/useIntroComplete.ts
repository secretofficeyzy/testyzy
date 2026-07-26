"use client";

import { useEffect, useState } from "react";
import {
  INTRO_COMPLETE_EVENT,
  hasSeenIntro,
} from "@/lib/intro";

export function useIntroComplete() {
  const [complete, setComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (hasSeenIntro()) {
      setComplete(true);
      return;
    }

    const onComplete = () => setComplete(true);
    window.addEventListener(INTRO_COMPLETE_EVENT, onComplete);
    return () => window.removeEventListener(INTRO_COMPLETE_EVENT, onComplete);
  }, []);

  return { complete, mounted, skipIntro: mounted && hasSeenIntro() };
}
