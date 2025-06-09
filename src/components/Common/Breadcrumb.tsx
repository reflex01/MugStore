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
}

const Breadcrumb = ({ title, pages }: BreadcrumbProps) => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
      <div className="border-t border-gray-200">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 xl:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <h1 className="font-bold text-gray-900 text-2xl sm:text-3xl xl:text-4xl">
              {title}
            </h1>

            <nav className="flex items-center space-x-2 text-sm">
              <Link 
                href="/" 
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              
              {pages.length > 0 && pages.map((page, index) => {
                const isLast = index === pages.length - 1;
                const isPageObject = typeof page === 'object' && page !== null;
                const pageName = isPageObject ? (page as BreadcrumbPage).name : page as string;
                const pageHref = isPageObject ? (page as BreadcrumbPage).href : '#';
                
                return (
                  <React.Fragment key={index}>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    {isLast ? (
                      <span className="text-blue-600 font-medium capitalize truncate max-w-[200px]">
                        {pageName}
                      </span>
                    ) : (
                      <Link 
                        href={pageHref}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 capitalize"
                      >
                        {pageName}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
