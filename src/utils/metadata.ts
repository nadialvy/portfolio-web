export const getMetadataItems = (
  templateTitle = '',
  templateDescription = '',
  slug = '',
) => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://nadialvy.com/'
      : 'http://localhost:3000';
  const pathname = baseUrl + slug;
  const title = templateTitle
    ? `${templateTitle} | Nadia Lovely`
    : 'Nadia Lovely';
  const description = templateDescription
    ? 'Nadia Lovely, a frontend developer passionate about crafting seamless digital experiences and turning ideas into impactful solutions. Explore her diverse portfolio and expertise.'
    : 'Nadia Lovely, a frontend developer passionate about crafting seamless digital experiences and turning ideas into impactful solutions. Explore her diverse portfolio and expertise.';
  const ogUrl = new URL(
    baseUrl + `/api/og?title=${templateTitle}&description=${description}`,
  ).href;

  return {
    title,
    templateTitle,
    description,
    pathname,
    ogUrl,
  };
};

export const generateTemplateMetadata = (
  templateTitle = '',
  templateDescription = '',
  slug = '',
) => {
  const metadataItems = getMetadataItems(
    templateTitle,
    templateDescription,
    slug,
  );
  return {
    title: metadataItems.title,
    alternates: {
      canonical: metadataItems.pathname,
    },
    openGraph: {
      url: metadataItems.pathname,
      images: metadataItems.ogUrl,
    },
    twitter: {
      images: metadataItems.ogUrl,
    },
  };
};
