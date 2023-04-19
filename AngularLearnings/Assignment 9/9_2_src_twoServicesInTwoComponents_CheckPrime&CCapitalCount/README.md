Create the application which contains 2 services as Number and String.
Number service contains 1 methods names as ChkPrime() which accepts number and check whether that number is prime or not.
String service contains 1 methods names as CountCapital() whick counts the capital characters and return its count
We have to create two child component named as child1 and child2  under app component. Child1 uses Number service and child2 uses String service using Dependency Injection.
Call both the methods from there respecive components by passing some  hardcoded values. And display the result.





ng new AngularLearnings 	(create new project names AngularLearnings)
ng generate service number  	(creating service named as number)
ng generate service string  	(creating service named as string)

Copy number and string Service class name and put it in providers array in app.module.ts (to make service usable)

In number.component.ts file:
 - write  ChkPrime() functions logic

 In string.component.ts file:
 - write  CountCapital() functions logic


ng generate component child1  	(creating component named as child1)
ng generate component child2  	(creating component named as child2)

(for rendering the above components)
copy the selector name from child1.component.ts and child2.component.ts and paste it in app.component.html 


now in order to use Dependency Injection in child1 class 
In child1.component.ts file 
1. Inject the NumberService in its constructor
2. Create ngOninit() method and also implement its method Oninit
3.  - create 1 empty variables for getting the value from the chkPrime() methods written in number.service.ts file
    - call the service method chkPrime() by passing hardcoded value using the object variable of the service class(assigned in its constructor)
    - store the values in the empth variable created

now in order to use Dependency Injection in child2 class 
In child2.component.ts file 
1. Inject the StringService in its constructor
2. Create ngOninit() method and also implement its method Oninit
3.  - create 1 empty variables for getting the value from the CountCapital() methods written in string.service.ts file
    - call the service method CountCapital() by passing hardcoded value using the object variable of the service class(assigned in its constructor)
    - store the values in the empth variable created


In child1.component.html file
Using string interpolation:  {{}}
for displaying the values on browser:
 - get the values from the variable storing the result value in child1.component.ts file

In child2.component.html file
Using string interpolation:  {{}}
for displaying the values on browser:
 - get the values from the variable storing the result value in child2.component.ts file


run the angular application using below command 
ng serve --o
