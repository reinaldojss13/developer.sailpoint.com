module.exports = [
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        // /docs/oldDoc -> /docs/newDoc
        {
          to: '/developerdays',
          from: '/conf',
        },
      ],
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'idn',
      path: 'products/idn',
      routeBasePath: 'idn',
      editUrl:
        'https://github.com/sailpoint-oss/developer-community-site/edit/main/',
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
      sidebarPath: require.resolve('./products/idn/sidebar.js'),
      docItemComponent: '@theme/ApiItem',
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'iiq',
      path: 'products/iiq',
      routeBasePath: 'iiq',
      editUrl:
        'https://github.com/sailpoint-oss/developer-community-site/edit/main/',
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
      sidebarPath: require.resolve('./products/iiq/sidebar.js'),
      docItemComponent: '@theme/ApiItem',
    },
  ],
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'GTM-TSD78J',
      anonymizeIP: false,
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'idn-api',
      docsPluginId: 'idn',
      config: {
        idn_v3: {
          specPath: 'static/api-specs/idn/sailpoint-api.v3.yaml',
          outputDir: 'products/idn/api/v3',
          downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.v3.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
        idn_beta: {
          specPath: 'static/api-specs/idn/sailpoint-api.beta.yaml',
          outputDir: 'products/idn/api/beta',
          downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.beta.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
      },
    },
  ],
  [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'iiq-api',
      docsPluginId: 'iiq',
      config: {
        iiq: {
          specPath: 'static/api-specs/iiq/sailpoint-api.iiq.yaml',
          outputDir: 'products/iiq/api',
          downloadUrl: 'https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/iiq/sailpoint-api.iiq.yaml',
          sidebarOptions: {
            groupPathsBy: 'tag',
            categoryLinkSource: 'tag',
          },
          template: 'api.mustache',
        },
      },
    },
  ],
];
