export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622e296ae6bcc37180ae7dbe',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-mov3su6f',
                  apiId: '426a021b-cf28-4f60-b58d-1c51dc3d7b11'
                },
                {
                  buildHookId: '622e296a0deada124025a8e9',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ws5txejr',
                  apiId: 'a9187ab4-c017-4363-8311-dcd74ab8f8e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarkMetaSpark/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ws5txejr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
