{
    properties: {
        link: 'https://github.com/meteor/meteor',
        platform: 'GitHub',
        examples: [
            'https://www.meteor.com/'
        ],
        name: 'Meteor',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Meteor_(web_framework)'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+__meteor-css__/i
                ]
            ]
        },
        references: [
            [
                'window.Meteor'
            ]
        ]
    },
    versions: {
        statements: [
            'window.Meteor.release.split(\'@\').pop()'
        ]
    }
}
