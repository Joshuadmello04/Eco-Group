import LogoLoop from './LogoLoop';

// Import all logo images
import adaniLogo from '@/assets/client-logos/ADANI.png';
import alstomLogo from '@/assets/client-logos/ALSTOM.png';
import apcplLogo from '@/assets/client-logos/APCPL.png';
import bbLogo from '@/assets/client-logos/BB.png';
import bpdclLogo from '@/assets/client-logos/BPDCL.png';
import clpLogo from '@/assets/client-logos/CLP.png';
import dhbvnLogo from '@/assets/client-logos/DHBVN.png';
import essarLogo from '@/assets/client-logos/ESSAR.png';
import jswLogo from '@/assets/client-logos/JSW.png';
import npclLogo from '@/assets/client-logos/NPCL.png';
import ntpcLogo from '@/assets/client-logos/NTPC.png';
import relianceLogo from '@/assets/client-logos/RELIANCE.png';
import siemensLogo from '@/assets/client-logos/SIEMENS.png';
import toshibaLogo from '@/assets/client-logos/TOSHIBA.png';

const imageLogos = [
  { src: adaniLogo, alt: "Adani", href: "https://company1.com" },
  { src: alstomLogo, alt: "Alstom", href: "https://company1.com" },
  { src: apcplLogo, alt: "APCPL", href: "https://company1.com" },
  { src: bbLogo, alt: "BB", href: "https://company1.com" },
  { src: bpdclLogo, alt: "BPDCL", href: "https://company1.com" },
  { src: clpLogo, alt: "CLP", href: "https://company1.com" },
  { src: dhbvnLogo, alt: "DHBVN", href: "https://company1.com" },
  { src: essarLogo, alt: "ESSAR", href: "https://company1.com" },
  { src: jswLogo, alt: "JSW", href: "https://company1.com" },
  { src: npclLogo, alt: "NPCL", href: "https://company1.com" },
  { src: ntpcLogo, alt: "NTPC", href: "https://company1.com" },
  { src: relianceLogo, alt: "Reliance", href: "https://company1.com" },
  { src: siemensLogo, alt: "Siemens", href: "https://company1.com" },
  { src: toshibaLogo, alt: "Toshiba", href: "https://company1.com" },
];

export function LogoSlider() {
  return (
    <div style={{ height: '200px', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={imageLogos}
        speed={70}
        direction="right"
        logoHeight={90}
        gap={40}
        pauseOnHover
        scaleOnHover
        ariaLabel="Technology partners"
      />
    </div>
  );
}