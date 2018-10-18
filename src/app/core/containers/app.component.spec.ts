import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@nghm/router';
import { MatSidenavModule, MatListModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { AppRootComponent } from './app.component';

describe('AppRootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserTestingModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        NoopAnimationsModule,
        RouterModule
      ],
      declarations: [
        AppRootComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
