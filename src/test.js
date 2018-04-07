// @flow

import type { Map as MapType } from 'immutable';
import { Map } from 'immutable';

const map: MapType<string, number> = Map({ test: 1234 });
console.log(map.toJS());
