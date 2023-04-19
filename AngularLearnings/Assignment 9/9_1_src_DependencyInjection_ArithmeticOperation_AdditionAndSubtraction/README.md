Create the application which contains one service as Arithmetic.
Arithmetic service contains 2 methods names as add and Sub.

Both of this method accepts two integers and perform addition and subtraction respectively.
We have to create one child component named as Demo nder app component which uses Arithmetic service using Dependency Injection.

That means from the service addd and sub should be called from Demo component by passing some  hardcoded values. And display the result of additiona dnsubtraction inside Demo component.




ng new AngularLearnings 	(create new project names AngularLearnings)
ng generate service arithmetic  	(creating service named as arithmetic)

Copy Service class name and put it in providers array in app.module.ts (to make service usable)

In arithmetic.component.ts file:
 - write 2 functions addition and subtraction


ng generate component demo  	(creating component named as demo)

(for rendering the above 1 components)
copy the selector name from demo.component.ts and paste it in app.component.html 


now in order to use Dependency Injection in demo class 
In demo.component.ts file 
1. Inject the ArithmeticService in its constructor
2. Create ngOninit() method and also implement its intercase Oninit
3.  - create 2 empty variables for getting the values of addition and subtraction methods written in arithmetic.service.ts file
    - call the service method addition ands subtraction by passing hardcoded value using the object variable of the service class(assigned in its constructor)
    - store the values in the empth variable created

In demo.component.html file
Using string interpolation:  {{}}
for displaying the values on browser:
 - get the values from the variable storing the result value in demo.component.ts file


run the angular application using below command 
ng serve --o
