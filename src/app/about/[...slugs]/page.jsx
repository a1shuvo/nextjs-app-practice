const AboutSlugPage = async ({ params }) => {
  const p = await params;

  return <div>slug: {p?.slugs[p?.slugs.length - 1]}</div>;
};

export default AboutSlugPage;
