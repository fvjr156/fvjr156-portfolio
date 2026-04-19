import type React from "react";

export type XCenteredLayoutProps = {
  children: React.ReactNode;
  herobg?: boolean;
  particles?: boolean;
};

export type ProjectsProps = {
  data: Record<string, any>;
  header: string;
  id?: string;
  projectIconBarShowTriggerRef: any;
  selectedIndex: number;
};

export type ToolbarProps = {
  visible: boolean;
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
};

export type BtnThemeToggleProps = {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
};

export type ShinyTextProps = {
  children: React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: string;
  delay?: number;
};

export type GradientStyleProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  WebkitBackgroundClip?: string;
  backgroundClip?: string;
  WebkitTextFillColor?: string;
};

export type ParticlesProps = {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  pixelRatio?: number;
  className?: string;
};

export type HeroProps = {
  data: Record<string, any>;
  isScrolled: boolean;
  theme: string;
  id?: string;
};

export type CertificatesProps = {
  data: Record<string, any>;
  id: string;
};

export type AosData = {
  animType: string;
  animdelay: number;
  animDuration: number;
  once: boolean;
};

export type AccordionProps = {
  open: boolean;
  children: React.ReactNode;
  styles: React.CSSProperties;
  aosData: AosData;
};
