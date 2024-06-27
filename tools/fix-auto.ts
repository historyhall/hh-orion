import type {FileInfo, API} from 'jscodeshift';
import {fixDebugNamespace} from './lib/fixDebugNamespace';
import {sortImports} from './lib/sortImports';

export default function fixAuto(fileInfo: FileInfo, api: API) {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    sortImports(root, j);
    fixDebugNamespace(root, fileInfo);

    return root.toSource({quote: 'single'});
}