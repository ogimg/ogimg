'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  ThemeAnimationType,
  useModeAnimation,
} from 'react-theme-switch-animation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    isDarkMode: theme === 'dark',
    onDarkModeChange: (nextIsDark) => setTheme(nextIsDark ? 'dark' : 'light'),
  })

  return (
    <Button
      variant="ghost"
      size="icon"
      ref={ref}
      className={cn(
        'relative rounded-full border border-transparent p-2 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-sm',
        className,
      )}
      onClick={toggleSwitchTheme}
    >
      {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  )
}
