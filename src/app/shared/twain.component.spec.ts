import { TwainService } from './twain.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// import { TwainService } from './twain.service';
import { TwainComponent } from './twain.component';
import * as mockito from 'ts-mockito';

describe('TwainComponent', () => {

  let comp: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  const testQuote = 'Test Quote';

  // let twainService: TwainService; // the actually injected service
  const twainServiceMock = mockito.mock(TwainService);
  mockito.when(twainServiceMock.getQuote()).thenReturn(Promise.resolve(testQuote));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwainComponent],
      providers: [{ provide: TwainService, useValue: mockito.instance(twainServiceMock) }],
    });

    fixture = TestBed.createComponent(TwainComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges();

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.twain > i'));
    el = de.nativeElement;

  }));

  it('sollte den Text finden', async(() => {
    fixture.detectChanges();
    expect(el.innerText).toBe(testQuote);
  }));

});
