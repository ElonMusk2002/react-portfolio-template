import Head from 'next/head'
import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsSection from '@/components/Skills';
import StripeSection from '@/components/Stripe';
import ProjectSection from '@/components/Project';
import Contact from '@/components/Contact';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
        <Hero />
        <About />
        <SkillsSection />
        <StripeSection />
        <ProjectSection/>
        <Contact />
    </>
  );
}
