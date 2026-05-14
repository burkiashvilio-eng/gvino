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
    <div className="site-wrapper">
      <TopBar />
      <LanguageBar current={lang} onChange={setLang} />
      <LogoCircle />
      <div className="spacer" />
      <div className="page">
        <Divider />
        <StoresSection lang={lang} />
        <SocialRow />
        <Footer />
      </div>
    </div>
  );
}
