import { useTranslations } from "next-intl";

export default function Page({ params }: { params: { slug?: string[] } }) {
  const t = useTranslations("ItemsPage");
  return (
    <h1>
      {params.slug?.join("/")} {t("title")}
    </h1>
  );
}
