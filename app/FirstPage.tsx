"use client"
import React, { useState } from 'react'

import { currentUserAtom } from '@/lib/atoms';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import LandingPage from '@/components/LandingPage';

export default function FirstPage() {
    const [pageChange, setPageChange] = useState(true);
    const [currentUser] = useAtom(currentUserAtom);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setPageChange(false);
        }, 4000);

        if(pageChange) return;
        router.push(!currentUser ? '/auth/login' : '/dashboard');
    }, [currentUser, router, pageChange]);

    if(pageChange) return <LandingPage />;
}

