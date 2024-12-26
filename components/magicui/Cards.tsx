"use client"
import Link from "next/link";
import { GlareCard } from "../ui/glare-card";
import ShimmerButton from "../ui/shimmer-button";


export function GlareCardDemo() {
  return (
    <div className="h-full md:h-full w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-6">
      <GlareCard className="flex flex-col items-start justify-center">
        <div className="flex flex-col items-start text-start gap-2">
          <div className="p-6 rounded-md text-start max-w-sm">
            <h3 className="text-lg font-bold text-gray-400">For Website Development</h3>
            <h2 className="text-4xl font-bold mt-2">Website Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1"><span className="text-lg">After Discussion</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Basic To Advanced Projects Development</li>
              <li>Testing And Deployment</li>
              <li>Business Problem Solving</li>
              <li>Dedicated Zoom Meeting</li>
              <li>Continuous Support and Maintenance</li>
            </ul>
          </div>
        </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-center bg-slate-950">
        <div className="flex flex-col items-start text-start gap-8">
          <div className="p-6 rounded-lg text-start max-w-sm">
            <h3 className="text-lg font-bold text-gray-400">For App Development</h3>
            <h2 className="text-4xl font-bold mt-2">App Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1"><span className="text-lg">After Discussion</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>App Development</li>
              <li>Testing And Deployment</li>
              <li>Business Problem Solving</li>
              <li>Dedicated Zoom Meeting</li>
              <li>Continuous Support and Maintenance</li>
            </ul>
          </div>
        </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-center bg-slate-950">
        <div className="flex flex-col items-start text-start gap-8">
          <div className="p-6 rounded-lg text-start max-w-sm">
            <h3 className="text-lg font-bold text-gray-400">For Collab To Build Tech</h3>
            <h2 className="text-4xl font-bold mt-2">Collab With Me</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1"><span className="text-lg">Let's Start a New Project Together</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              
              
              <ShimmerButton className="shadow-2xl w-full max-w-xs">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg cursor-pointer">
                <h4>Contact With Me</h4>
              </span>
            </ShimmerButton>
              
              
            </ul>
          </div>
        </div>
      </GlareCard>
    </div>
  );
}
