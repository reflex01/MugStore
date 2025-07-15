import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Popular",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 4,
    title: "pages",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 41,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 42,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 43,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 44,
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 45,
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 46,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 47,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 48,
        title: "Error",
        newTab: false,
        path: "/error",
      },
      {
        id: 49,
        title: "Mail Success",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 5,
    title: "blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 51,
        title: "Blog Grid with sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 52,
        title: "Blog Grid",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 53,
        title: "Blog details with sidebar",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 54,
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
