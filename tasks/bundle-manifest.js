// @ts-check
import {getDestDir, absolutePath} from './paths.js';
import {PLATFORM} from './platform.js';
import * as reload from './reload.js';
import {createTask} from './task.js';
import {readJSON, writeJSON, pathExistsSync} from './utils.js';

async function patchManifest(platform, debug, watch, test) {
    const pkg = await readJSON(absolutePath('package.json'));
    const manifest = await readJSON(absolutePath('src/manifest.json'));
    const manifestPatch = await readJSON(absolutePath(`src/manifest-${platform}.json`));
    const patched = {
        ...manifest,
        ...manifestPatch,
        version: pkg.version,
    };
    if (debug) {
        patched.name = platform === PLATFORM.CHROMIUM_MV3 ? 'Dark Reader MV3' : 'Dark Reader Firefox MV3';
        patched.description = `Debug build, platform: ${platform}, watch: ${watch ? 'yes' : 'no'}.`;
        patched.version = '1';
        patched.version_name = 'Debug';
    }
    if (platform === PLATFORM.CHROMIUM_MV3) {
        patched.browser_action = undefined;
    }
    if (debug && !test && platform === PLATFORM.CHROMIUM_MV3) {
        patched.permissions.push('tabs');
    }
    // Needed to test settings export and CSS theme export via a download
    if (test || debug) {
        if (!patched.permissions) {
            patched.permissions = [];
        }
        patched.permissions.push('downloads');
    }
    return patched;
}

async function manifests({platforms, debug, watch, test}) {
    const enabledPlatforms = Object.values(PLATFORM).filter((platform) => platform !== PLATFORM.API && platforms[platform]);
    for (const platform of enabledPlatforms) {
        const manifest = await patchManifest(platform, debug, watch, test);
        const destDir = getDestDir({debug, platform});
        await writeJSON(`${destDir}/manifest.json`, manifest);
    }
}

const bundleManifestTask = createTask(
    'bundle-manifest',
    manifests,
).addWatcher(
    ['src/manifest*.json'],
    async (changedFiles, _, buildPlatforms) => {
        const chrome = changedFiles.some((file) => file.endsWith('manifest.json'));
        const platforms = {};
        for (const platform of Object.values(PLATFORM)) {
            const changed = chrome || changedFiles.some((file) => file.endsWith(`manifest-${platform}.json`));
            platforms[platform] = changed && buildPlatforms[platform];
        }
        await manifests({platforms, debug: true, watch: true, test: false});
        reload.reload({type: reload.FULL});
    },
);

export default bundleManifestTask;
