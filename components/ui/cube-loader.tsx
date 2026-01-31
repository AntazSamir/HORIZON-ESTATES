'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CubeLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string
}

export function CubeLoader({ className, size = '44px', ...props }: CubeLoaderProps) {
    return (
        <div className={cn("cube-spinner", className)} style={{ width: size, height: size }} {...props}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <style jsx>{`
        .cube-spinner {
         width: 44px;
         height: 44px;
         animation: spinner-y0fdc1 2s infinite ease;
         transform-style: preserve-3d;
        }

        .cube-spinner > div {
         background-color: color-mix(in srgb, currentColor 20%, transparent);
         height: 100%;
         position: absolute;
         width: 100%;
         border: 2px solid currentColor;
        }

        .cube-spinner div:nth-of-type(1) {
         transform: translateZ(-22px) rotateY(180deg);
        }

        .cube-spinner div:nth-of-type(2) {
         transform: rotateY(-270deg) translateX(50%);
         transform-origin: top right;
        }

        .cube-spinner div:nth-of-type(3) {
         transform: rotateY(270deg) translateX(-50%);
         transform-origin: center left;
        }

        .cube-spinner div:nth-of-type(4) {
         transform: rotateX(90deg) translateY(-50%);
         transform-origin: top center;
        }

        .cube-spinner div:nth-of-type(5) {
         transform: rotateX(-90deg) translateY(50%);
         transform-origin: bottom center;
        }

        .cube-spinner div:nth-of-type(6) {
         transform: translateZ(22px);
        }

        @keyframes spinner-y0fdc1 {
         0% {
          transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
         }

         50% {
          transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
         }

         100% {
          transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
         }
        }
      `}</style>
        </div>
    )
}
