"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

const navItems = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "How to Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="NovaToken Logo"
        leftButtonText="Menu"
        rightButtonText="Contact"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => {}}
        className="navbar"
      />
      <div id="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to NovaToken"
          subtitle="Your gateway to the future of finance"
          contractAddress="0x123456"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>
      <div id="about" className="scroll-mt-24">
        <SocialsAbout
          title="About NovaToken"
          descriptions={[
            "NovaToken is designed for the next generation of financial transactions.",
            "Join us in revolutionizing the way we think about cryptocurrencies."
          ]}
        />
      </div>
      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy NovaToken"
          steps={[
            { title: "Step 1", description: "Create a crypto wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase ETH", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Exchange ETH for NovaToken", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Our token distribution and utilities"
          kpiItems={[
            { value: "10M", description: "Total Supply" },
            { value: "5M", description: "Circulating Supply" },
            { value: "50%", description: "Locked for 1 Year" }
          ]}
        />
      </div>
      <div id="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="NovaToken Logo"
          logoText="NovaToken"
          className="footer-class"
          svgClassName="footer-svg-class"
        />
      </div>
    </SiteThemeProvider>
  );
}