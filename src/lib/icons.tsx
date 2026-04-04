import {
  Activity,
  Award,
  Heart,
  Scissors,
  Shield,
  Sparkles,
  Sun,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { offerings, pillars } from "@/config/brand";

type OfferingIconName = (typeof offerings)[number]["icon"];
type PillarIconName = (typeof pillars)[number]["icon"];

export const offeringIcons: Record<OfferingIconName, LucideIcon> = {
  zap: Zap,
  activity: Activity,
  sun: Sun,
  sparkles: Sparkles,
  heart: Heart,
  scissors: Scissors,
};

export const pillarIcons: Record<PillarIconName, LucideIcon> = {
  award: Award,
  heart: Heart,
  shield: Shield,
  sun: Sun,
};
