import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { services } from './service';

import { store } from './store';

@NgModule({
    providers: [...services],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(store.featureKey, store.reducers),
        EffectsModule.forFeature([...store.effects]),
    ],
})
export class SharedExerciseModule {}
