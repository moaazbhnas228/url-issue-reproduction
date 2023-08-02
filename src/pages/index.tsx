import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "components/LocaleSwitcher";
import PageLayout from "components/PageLayout";
import Link from "next/link";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <PageLayout title={t("title")}>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <LocaleSwitcher />
    </PageLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  if (locale === "default") locale = "en";

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
