import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersComponent } from './speakers.component';

describe('TaskAddComponent', () => {
	let component: SpeakersComponent;
	let fixture: ComponentFixture<SpeakersComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SpeakersComponent]
		});
		fixture = TestBed.createComponent(SpeakersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
