"use client";
import { useState, useEffect } from "react";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import { organizationSchema, websiteSchema, storeSchema } from '@/config/seo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Critical Font Preloading */}
        <link
          rel="preload"
          href="/fonts/EuclidCircularA-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/EuclidCircularA-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/EuclidCircularA-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        
        {/* Preload LCP Image */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dxrerwrjk/image/upload/v1739648635/windows-11-pro-5-pc-1_fxkjzp.png"
          as="image"
          fetchPriority="high"
        />
        
        {/* Critical CSS inlined for performance */}
        <style>{`
          body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;margin:0;padding:0;line-height:1.6}
          .header-critical{position:fixed;top:0;left:0;right:0;z-index:9999;background:#fff;height:80px;border-bottom:1px solid #e5e7eb}
          .hero-critical{padding-top:80px;min-height:70vh;background:linear-gradient(135deg,#f8fafc 0%,#f1f5f9 100%)}
          .lcp-image-container{width:320px;height:320px;position:relative;margin:0 auto}
          @font-face{font-family:"Euclid Circular A";src:url("../fonts/EuclidCircularA-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}
          .container{max-width:1200px;margin:0 auto;padding:0 1rem}
          .flex{display:flex}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.text-center{text-align:center}.hidden{display:none}
          .btn-primary{background-color:#2563eb;color:white;padding:.75rem 1.5rem;border-radius:.5rem;border:none;cursor:pointer;font-weight:500;transition:background-color .2s ease}
          .btn-primary:hover{background-color:#1d4ed8}
          @media (max-width:768px){.container{padding:0 .5rem}.lcp-image-container{width:280px;height:280px}.hero-critical{min-height:60vh}}
          img{max-width:100%;height:auto}
          .loading-skeleton{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}
          @keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}
        `}</style>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(storeSchema),
          }}
        />
      </head>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <Header />
                    {children}

                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
