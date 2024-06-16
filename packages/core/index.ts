import { makeInstaller } from '@bin-element/utils';

import components from './components';

import '@bin-element/theme/index.css';
const installer = makeInstaller(components);

export * from '@bin-element/components';

export default installer;
