export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  return <h1>{params.slug?.join("/")} Items</h1>;
}
