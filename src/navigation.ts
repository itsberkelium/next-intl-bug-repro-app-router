import {
  createSharedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "tr"] as const;

export const defaultLocale = "tr" as const;

// Use the default: `always`
export const localePrefix = "always" as const;

export const pathnames = {
  "/": "/",
  "/items/[...slug]": {
    tr: "/ilanlar/[...slug]",
    en: "/items/[...slug]",
  },
  "/item/[slug]": {
    tr: "/ilan/[slug]",
    en: "/item/[slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
