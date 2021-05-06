import { ExportStore } from '../../../model/store/ExportStore';
import { reducers, featureKey } from './reducer';
import { effects } from './effect';

export const store: ExportStore = {
    featureKey,
    reducers,
    effects,
};
