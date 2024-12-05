interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Lucca\'s Running Page',
  siteUrl: 'https://luyangk.github.io/lucca_running_page/',
  logo: 'https://s2.loli.net/2024/12/04/SKlYA1xqfwVOW8b.png',
  description: 'Personal running site',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.lucca-lu.top/',
    },
    {
      name: 'About',
      url: 'https://blog.lucca-lu.top/about',
    },
  ],
};

export default data;
