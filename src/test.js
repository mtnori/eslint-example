// @flow

import type { Map as MapType } from 'immutable';
import { Map } from 'immutable';
import sum from './test2';

const map: MapType<string, number> = Map({ test: 1234 });
console.log(map.toJS());

sum(1, 1);
