'use client'

import React from 'react'

interface ThemeToggleProps {
    isDark: boolean
    toggle: () => void
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="theme-checkbox"
                checked={isDark}
                onChange={toggle}
                aria-label="Toggle theme"
            />
            <style jsx>{`
        .theme-checkbox {
          --toggle-size: 10px; /* Scaled down from 16px to fit nav better */
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 6.25em;
          height: 3.125em;
          background: -webkit-gradient(linear, left top, right top, color-stop(50%, #f1f5f9), color-stop(50%, #0d9488)) no-repeat;
          background: -o-linear-gradient(left, #f1f5f9 50%, #0d9488 50%) no-repeat;
          background: linear-gradient(to right, #f1f5f9 50%, #0d9488 50%) no-repeat;
          background-size: 205%;
          background-position: 0;
          -webkit-transition: 0.4s;
          -o-transition: 0.4s;
          transition: 0.4s;
          border-radius: 99em;
          position: relative;
          cursor: pointer;
          font-size: var(--toggle-size);
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .theme-checkbox::before {
          content: "";
          width: 2.25em;
          height: 2.25em;
          position: absolute;
          top: 0.438em;
          left: 0.438em;
          background: -webkit-gradient(linear, left top, right top, color-stop(50%, #f1f5f9), color-stop(50%, #0d9488)) no-repeat;
          background: -o-linear-gradient(left, #f1f5f9 50%, #0d9488 50%) no-repeat;
          background: linear-gradient(to right, #f1f5f9 50%, #0d9488 50%) no-repeat;
          background-size: 205%;
          background-position: 100%;
          border-radius: 50%;
          -webkit-transition: 0.4s;
          -o-transition: 0.4s;
          transition: 0.4s;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .theme-checkbox:checked::before {
          left: calc(100% - 2.25em - 0.438em);
          background-position: 0;
        }

        .theme-checkbox:checked {
          background-position: 100%;
        }
      `}</style>
        </div>
    )
}
