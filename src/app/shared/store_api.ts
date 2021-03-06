export { getGlobalCases, getHistoricalCases, getCountryCases } from './store/shared.actions';
export { ISharedStore, ESharedActions } from './store/shared.state';
export {
	selectLayout,
	selectIsMobileLayout,
	selectIsTabletLayout,
	selectIsMobileTabletLayout,
	selectIsDesktopLayout,
	selectGlobalCases,
	selectGlobalCountries,
	selectLastUpdate,
	selectHistoricalCases
} from './store/shared.selectors';
