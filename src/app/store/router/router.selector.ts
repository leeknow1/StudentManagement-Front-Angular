import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateModel } from "./custom.serializer";
import { RouterReducerState } from "@ngrx/router-store";

const getRouterState = createFeatureSelector<RouterReducerState<RouterStateModel>>('router');

export const getRouterParamId = createSelector(getRouterState, (state) => {
    return state.state.params['id'];
})