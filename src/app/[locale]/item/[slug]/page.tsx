import { useTranslations } from "next-intl";

export default function Page({ params }: { params: { slug: string } }) {
  const t = useTranslations("ItemPage");
  return (
    <h1>
      {params.slug} {t("title")}
    </h1>
  );
}
