'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { currentUserAtom } from '@/lib/atoms';
import Image from 'next/image';

export function Header() {
  const [currentUser] = useAtom(currentUserAtom);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/benvily.png"
            alt="logo" 
            className="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14"
            width="30"
            height="30"
          />
          {/* <span className="text-xl font-bold">Benvily</span> */}
        </Link>

        <div className="flex items-center gap-4">
          {currentUser ? (
            <span className="text-sm text-muted-foreground">{currentUser.name}</span>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
