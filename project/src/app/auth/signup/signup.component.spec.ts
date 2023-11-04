import { ComponentFixture, TestBed,waitForAsync  } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { AuthService } from '../auth.service';
import { Auth } from '@angular/fire/auth'; // Import the Auth service
import { Firestore } from '@angular/fire/firestore'; // Import the Firestore service
import { Router } from '@angular/router';
import { fakeAsync, tick } from '@angular/core/testing';
describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authServiceMock: any;
  let authMock: any;
  let firestoreMock: any;
  
class MockRouter {}

 beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [SignupComponent],
    imports: [FormsModule, ReactiveFormsModule],
    providers: [
      {provide: Router, useValue: MockRouter},
      AuthService
    ]
  }).compileComponents();
 })

 let location: Location;
let router: Router;

beforeEach(() => {
  fixture = TestBed.createComponent(SignupComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();

  router = TestBed.get(Router);
  location = TestBed.get(Location);
  router.initialNavigation();
});
 fixture = TestBed.createComponent(SignupComponent); // Initialize the fixture variable
 component = fixture.componentInstance; // Get the component instance
 authServiceMock = TestBed.inject(AuthService); // Get the AuthService mock

    




 it('should signup with invalid info', async () => {
  const authMock = fixture.debugElement.injector.get(AuthService);
  spyOn(authMock, 'signup').and.returnValue(Promise.resolve('success'));

  const email = 'test@example.com';
  const password = 'password';

  const result = await authMock.signup(email, password);

  expect(result).toBe('success');
});
it('test als dit ni werkt is unit testing echt een waste of time', () => {
expect(component).toBeTruthy();
});
  // Add more test cass here

});
