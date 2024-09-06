'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon} from '@radix-ui/react-icons'



export default function ThemeToggle() {
    // Use 'useTheme' hook from 'next-themes' that I just installed from npm next-themes which gives access to functions 'setTheme' and 'revolvedTheme'
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

//if the components are mounted, then we return a button that when clicked, will toggle between light and dark mode
  return (
    <Button
      size='sm'
      variant='ghost' //has no background 
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' />
        ) : (
        <MoonIcon className='size-4 text-sky-950'/>
    )}
    <span className='sr-only'>Toggle theme</span>
    </Button>
  
  )

 
}