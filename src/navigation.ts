import {
  createSharedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "tr"] as const;

export const defaultLocale = "tr" as const;

// Use the default: `always`
export const localePrefix = "as-needed";

export const pathnames = {
  "/": "/",
  "/items/[...slug]": {
    tr: "/ilanlar/[...slug]",
    en: "/items/[...slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
