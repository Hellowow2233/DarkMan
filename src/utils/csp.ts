enum CSP {
    NONE = "'none'",
    SELF = "'self'"
}

export function prepareCSPMV3(): chrome.runtime.ManifestV3['content_security_policy'] {
    const result: any = {};
    const policy: any = {
        extension_pages: {
            'default-src': [CSP.NONE],
            'script-src': [CSP.SELF],
            'style-src': [CSP.SELF],
            'img-src': [
                '*',
                'data:',
            ],
            'connect-src': ['*'],
            'media-src': [CSP.NONE],
            'child-src': [CSP.NONE],
            'worker-src': [CSP.NONE],
            'object-src': [CSP.NONE],
        },
    };
    for (const p in policy) {
        const outputs: string[] = [];
        for (const directive in policy[p]) {
            outputs.push(`${directive} ${policy[p][directive].join(' ')}`);
        }
        result[p] = outputs.join('; ');
    }
    return result;
}
