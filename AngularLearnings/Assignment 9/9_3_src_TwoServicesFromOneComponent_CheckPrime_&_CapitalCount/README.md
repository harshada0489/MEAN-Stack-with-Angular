Create the application which contains 2 services as Number and String.
Number service contains 1 methods names as ChkPrime() which accepts number and check whether that number is prime or not.
String service contains 1 methods names as CountCapital() whick counts the capital characters and return its count
We have to create one child component named as Child under app component useing Number service  String service using Dependency Injection.
Call both the methods from there respecive components by passing some  hardcoded values. And display the result.



ng new AngularLearnings 	(create new project names AngularLearnings)
ng generate service number  	(creating service named as number)
ng generate service string  	(creating service named as string)

Copy number and string Service class name and put it in providers array in app.module.ts (to make service usable)

In number.component.ts file:
 - write  ChkPrime() functions logic
![image](https://user-images.githubusercontent.com/72671266/232961927-66874653-4f88-4308-a61d-47dde28dffee.png)

 In string.component.ts file:
 - write  CountCapital() functions logic
![image](https://user-images.githubusercontent.com/72671266/232961955-e0289166-dcb8-428c-af37-9524f2256901.png)

![image](https://user-images.githubusercontent.com/72671266/232962040-06dc9c24-daca-451b-b4e8-f4ec60b66058.png)

ng generate component child  	(creating component named as child)

(for rendering the above components)
copy the selector name from child.component.ts and paste it in app.component.html 
![image](https://user-images.githubusercontent.com/72671266/232962086-af1b5318-d3a4-4974-9fa0-93ec4313a931.png)


now in order to use Dependency Injection in child1 class 
In child.component.ts file 
-For NumberSeriveDependency Injection
1. Inject the NumberService in its constructor
2. Create ngOninit() method and also implement its method Oninit
3.  - create 1 empty variables for getting the value from the chkPrime() methods written in number.service.ts file
    - call the service method chkPrime() by passing hardcoded value using the object variable of the service class(assigned in its constructor)
    - store the values in the empth variable created
-For StringService Dependency Injection
1. Inject the StringService in its constructor
2. Create ngOninit() method and also implement its method Oninit
3.  - create 1 empty variables for getting the value from the CountCapital() methods written in string.service.ts file
    - call the service method CountCapital() by passing hardcoded value using the object variable of the service class(assigned in its constructor)
    - store the values in the empth variable created
![image](https://user-images.githubusercontent.com/72671266/232962271-dcb6d117-f79a-4f04-bfcc-1fb7184b4dd9.png)


In child.component.html file
Using string interpolation:  {{}}

![image](https://user-images.githubusercontent.com/72671266/232962346-d0a1ebd4-b4a8-46f9-88a2-b42488d039df.png)


for displaying the values on browser:
 - get the values from the variable storing the result value in child.component.ts file
 - get the values from the variable storing the result value in child.component.ts file


run the angular application using below command 
ng serve --o

![image](https://user-images.githubusercontent.com/72671266/232962391-70e4c747-5229-46be-b687-661244af0b85.png)
