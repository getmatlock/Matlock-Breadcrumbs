{
    properties: {
        link: 'https://github.com/angular/angular',
        name: 'Angular',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Angular_(application_platform)'
        }
    },
    tests: {
        strings: {
            page: [
                [
                    'ng-version="'
                ]
            ]
        },
        references: [
            [
                'ng.coreTokens',
                'ng.probe'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /ng-version="([^"]+)/i
            ]
        }
    }
}
