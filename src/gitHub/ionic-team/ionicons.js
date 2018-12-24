{
    properties: {
        link: 'https://github.com/ionic-team/ionicons',
        platform: 'GitHub',
        tests: [
            'https://lto.network/',
            'https://ionicons.com/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /\bion ion-\b/i
                ]
            ]
        }
    }
}