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

![image](https://user-images.githubusercontent.com/72671266/232961045-c67f0cad-6b0e-4039-9021-42fa66ed35f2.png)


 In string.component.ts file:
 - write  CountCapital() functions logic
![image](https://user-images.githubusercontent.com/72671266/232961075-fbdbb7a9-94b1-4706-ae02-774e55e6650a.png)

![image](https://user-images.githubusercontent.com/72671266/232961122-2886c9d4-443c-4bd7-8af8-3328d10a4472.png)

ng generate component child1  	(creating component named as child1)
ng generate component child2  	(creating component named as child2)

(for rendering the above components)
copy the selector name from child1.component.ts and child2.component.ts and paste it in app.component.html 
![image](https://user-images.githubusercontent.com/72671266/232961438-2196190e-c095-4be0-8d83-2f4e51e2be3d.png)

now in order to use Dependency Injection in child1 class 
In child1.component.ts file 
1. Inject the NumberService in its constructor
2. Create ngOninit() method and also implement its method Oninit
3.  - create 1 empty variables for getting the value from the chkPrime() methods written in number.service.ts file
    - call the service method chkPrime() by passing hardcoded value using the object variable of the service class(assigned in its constructor)
    - store the values in the empth variable created
![image](https://user-images.githubusercontent.com/72671266/232961152-8adf6b5e-8819-4826-8462-8cd110046d1a.png)


now in order to use Dependency Injection in child2 class 
In child2.component.ts file 
1. Inject the StringService in its constructor
2. Create ngOninit() method and also implement its method Oninit
3.  - create 1 empty variables for getting the value from the CountCapital() methods written in string.service.ts file
    - call the service method CountCapital() by passing hardcoded value using the object variable of the service class(assigned in its constructor)
    - store the values in the empth variable created
![image](https://user-images.githubusercontent.com/72671266/232961390-e7924855-4aa4-401c-8f59-10192d595268.png)




In child1.component.html file
Using string interpolation:  {{}}
for displaying the values on browser:
 - get the values from the variable storing the result value in child1.component.ts file

![image](https://user-images.githubusercontent.com/72671266/232961460-ac079004-f08d-45cf-8df9-b19f3d0fbdc1.png)


In child2.component.html file
Using string interpolation:  {{}}
for displaying the values on browser:
 - get the values from the variable storing the result value in child2.component.ts file

![image](https://user-images.githubusercontent.com/72671266/232961477-e046b4de-fd16-4025-8b7c-4ad9ada98137.png)


run the angular application using below command 
ng serve --o


![image](https://user-images.githubusercontent.com/72671266/232961842-6bb2a931-b90d-482d-a29e-b21c57478a2a.png)

