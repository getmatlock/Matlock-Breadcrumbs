{
    dependencies: [
        'https://github.com/python/cpython'
    ],
    properties: {
        donate: {
            link: 'https://www.djangoproject.com/fundraising/'
        },
        link: 'https://github.com/django/django',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Django_(web_framework)'
        }
    },
    tests: {
        references: [
            [
                'window.django'
            ]
        ],
        strings: {
            page: [
                [
                    'csrfmiddlewaretoken'
                ]
            ]
        }
    }
}
