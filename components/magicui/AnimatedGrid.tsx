import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern"
// import SignupFormDemo from "../signup-form-demo";
import { GlareCardDemo } from "./Cards";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[700px] w-full items-center justify-start overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      {/* < GlareCardDemo/> */}

      {/* <SignupFormDemo/> */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
