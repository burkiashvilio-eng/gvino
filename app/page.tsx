'use client';

import { useState } from 'react';
import { Lang } from '@/lib/translations';
import TopBar from '@/components/TopBar';
import LanguageBar from '@/components/LanguageBar';
import LogoCircle from '@/components/LogoCircle';
import Divider from '@/components/Divider';
import StoresSection from '@/components/StoresSection';
import SocialRow from '@/components/SocialRow';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ka');

  return (
    <>
      <TopBar />
      <LanguageBar current={lang} onChange={setLang} />
      <div className="spacer" />
      <div className="page">
        <LogoCircle />
        <Divider />
        <StoresSection lang={lang} />
        <SocialRow />
        <Footer />
      </div>
    </>
  );
}
