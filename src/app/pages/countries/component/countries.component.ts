import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { selectGlobalCases } from '@shared/store';
import { IGlobalCases } from '@shared/models';

import { AbstractCountriesService } from '../service/abstract-countries.service';

@Component({
	selector: 'covid-dashboard',
	templateUrl: './countries.component.html',
	styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {

	private readonly _subscriptions: Subscription[] = [];

	data$: Observable<IGlobalCases>;

	constructor(
		private _dashboardService: AbstractCountriesService,
		private _tranlsateService: TranslateService,
		private _store: Store
	) {}

	ngOnInit(): void {
		this._loadLiterals();
		this.data$ = this._store.pipe(select(selectGlobalCases));
	}

	_loadLiterals() {
		// const literalsSubscription = this._tranlsateService.onLangChange
		// 	.pipe(switchMap(() => forkJoin([
		// 		this._tranlsateService.get('select'),
		// 		this._tranlsateService.get('photo')
		// 	])))
		// 	.subscribe(([selectLiterals, photoLiterals]) => {
		// 		this.selectLiterals$.next(selectLiterals);
		// 		this.photoLiterals$.next(photoLiterals);
		// 	});
		// this._subscriptions.push(literalsSubscription);
	}

	ngOnDestroy() {
		this._subscriptions.forEach(subscription => {
			if (subscription.unsubscribe) {
				subscription.unsubscribe();
			}
		});
	}
}
