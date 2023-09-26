import type { Feature } from "$lib/utils/types";
import image from '$lib/images/features/43ft-5-Slide-5th-Wheel-Trailer.png';

export default [ 
  {
    name: 'Celebrity Trailers',
    description:'The New Standard in American Celebrity Trailers',
    image: image,
    tags: [{ label: 'Celebrity trailers' }]
  }, 
  // {
  //   name: 'Themeable',
  //   description:
  //     'You can easily theme the entire website by changing just a few colors in the _themes.scss file.',
  //   image: 'images/features/themeable.jpg',
  //   tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }]
  // }, 
  // {
  //   name: 'Extensible',
  //   description:
  //     'Components are built to be reused, and you can build new pages and layouts without much CSS knowledge. You can see all components in Histoire by running "npm run story:dev"',
  //   image: 'images/features/extensible.jpg',
  // }, 
  // {
  //   name: 'Well Optimized',
  //   description:
  //     'Images are automatically optimized and lazy loaded, to ensure the website loads as fast as possible regardless of connection speed.',
  //   image: 'images/features/optimized.jpg',
  //   tags: [{ label: 'Powered by Image Transmutation' }]
  // }, 
  // {
  //   name: 'Light and Dark Modes',
  //   description:
  //     'This template was built with dark mode in mind. It can swap between themes automatically (based on system settings) or manually. Both themes can be tweaked in the _themes.scss file.',
  //   image: 'images/features/light-dark.jpg',
  // },
  // {
  //   name: 'Open Source',
  //   description:
  //     'All code is open source, which means you can copy and modify it to your heart\'s content. All I ask is that you make your code open too so that knowledge can be passed on.',
  //   image: 'images/features/open-source.jpg'
  // },
] as Feature[];