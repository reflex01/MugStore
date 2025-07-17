import Link from "next/link";
import React from "react";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbPage {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  title: string;
  pages: string[] | BreadcrumbPage[];
  baseUrl?: string;
}

const Breadcrumb = ({ title, pages, baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com' }: BreadcrumbProps) => {
  // Generate structured data for breadcrumbs
  const generateBreadcrumbItems = () => {
    const items = [
      {
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ];

    if (pages.length > 0) {
      pages.forEach((page: string | BreadcrumbPage, index: number) => {
        const isPageObject = typeof page === 'object' && page !== null;
        const pageName = isPageObject ? (page as BreadcrumbPage).name : page as string;
        const pageHref = isPageObject ? (page as BreadcrumbPage).href : `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
        
        items.push({
          position: index + 2,
          name: pageName,
          item: `${baseUrl}${pageHref.startsWith('/') ? pageHref : `/${pageHref}`}`,
        });
      });
    }

    // Add current page
    items.push({
      position: items.length + 1,
      name: title,
      item: `${baseUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
    });

    return items;
  };
  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": generateBreadcrumbItems()
          }),
        }}
      />
      
      <div className="overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
        <div className="border-t border-gray-200">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 xl:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <h1 className="font-bold text-gray-900 text-2xl sm:text-3xl xl:text-4xl">
              {title}
            </h1>

            <nav className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <Link 
                href="/" 
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content="1" />
                <span itemProp="name">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </span>
                <link itemProp="item" href={baseUrl} />
              </Link>
              
              {pages.length > 0 && pages.map((page: string | BreadcrumbPage, index: number) => {
                const isLast = index === pages.length - 1;
                const isPageObject = typeof page === 'object' && page !== null;
                const pageName = isPageObject ? (page as BreadcrumbPage).name : page as string;
                const pageHref = isPageObject ? (page as BreadcrumbPage).href : `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
                const fullUrl = `${baseUrl}${pageHref.startsWith('/') ? pageHref : `/${pageHref}`}`;
                
                return (
                  <React.Fragment key={index}>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    {isLast ? (
                      <span 
                        className="text-blue-600 font-medium capitalize truncate max-w-[200px]"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                      >
                        <meta itemProp="position" content={String(index + 2)} />
                        <span itemProp="name">{pageName}</span>
                        <link itemProp="item" href={fullUrl} />
                      </span>
                    ) : (
                      <Link 
                        href={pageHref}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 capitalize"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                      >
                        <meta itemProp="position" content={String(index + 2)} />
                        <span itemProp="name">{pageName}</span>
                        <link itemProp="item" href={fullUrl} />
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
              
              {/* Current Page */}
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span 
                className="text-gray-800 font-medium truncate max-w-[200px]"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(pages.length + 2)} />
                <span itemProp="name">{title}</span>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Breadcrumb;
