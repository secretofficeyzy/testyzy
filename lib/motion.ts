export const easeOut = [0.22, 1, 0.36, 1] as const;

export const viewport = { once: true, margin: "-60px" as const };

export const revealTransition = (delay = 0, duration = 0.65) => ({
  duration,
  delay,
  ease: easeOut,
});
