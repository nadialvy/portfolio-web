import { getMetadataItems } from '../utils/metadata';

const metadataItems = getMetadataItems();

export const BASE_METADATA = {
  title: metadataItems.title,
  description: metadataItems.description,
  creator: 'Nadia Lovely',
  publisher: 'Nadia Lovely',
  keywords : [
    "Nadia Lovely",
    "Frontend Developer",
    "Digital Experiences",
    "Web Development",
    "Business Plan Competitions",
    "Software Development",
    "UX/UI Design",
    "Information Systems",
    "Freelance Developer",
    "Startup Projects",
    "Innovation",
    "Creative Solutions",
    "Tech Portfolio",
    "Project Management",
    "ITS",
    "Institut Teknologi Sepuluh Nopember",
    "Sepuluh Nopember Institute of Technology",
    "Sistem Informasi ITS"
  ],
  robots: 'follow, index',
  generator: 'Next.js',
  alternates: {
    canonical: metadataItems.pathname,
  },
  metadataBase: new URL('https://nadialvy.com/'),
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon/android-chrome-192x192.png',
  //       sizes: '192x192',
  //       type: 'image/png',
  //     },
  //     {
  //       url: '/favicon/favicon-32x32.png',
  //       sizes: '32x32',
  //       type: 'image/png',
  //     },
  //     {
  //       url: '/favicon/favicon-16x16.png',
  //       sizes: '16x16',
  //       type: 'image/png',
  //     },
  //   ],
  //   apple: {
  //     url: '/favicon/apple-touch-icon.png',
  //     sizes: '180x180',
  //     type: 'image/png',
  //   },
  // },
  openGraph: {
    title: metadataItems.title,
    description: metadataItems.description,
    url: metadataItems.pathname,
    siteName: 'Nadia Lovely',
    images: {
      url: metadataItems.ogUrl,
      alt: metadataItems.title,
    },
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataItems.title,
    description: metadataItems.description,
    creator: '@nadialovely',
    images: {
      url: metadataItems.ogUrl,
      alt: metadataItems.title,
    },
  },
};
