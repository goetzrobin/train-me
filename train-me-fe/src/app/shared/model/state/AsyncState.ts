import { AsyncStateStatus } from './AsyncStateStatus';

export interface AsyncState {
    status: AsyncStateStatus;
}

export interface AsyncCRUDState {
    createStatus: AsyncStateStatus;
    readStatus: AsyncStateStatus;
    updateStatus: AsyncStateStatus;
    deleteStatus: AsyncStateStatus;
}

export const intitalAsyncCRUDState: AsyncCRUDState = {
    createStatus: AsyncStateStatus.IDLE,
    readStatus: AsyncStateStatus.IDLE,
    updateStatus: AsyncStateStatus.IDLE,
    deleteStatus: AsyncStateStatus.IDLE,
}
