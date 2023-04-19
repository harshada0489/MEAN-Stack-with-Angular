Q: Create the similar application as (Question 2) as above and add navigation tabs to navigate between the two routes. Add one another route which displays "Wrong choice" when user gives wrong route name. Display Technologies  route as a default route which gets automatically displayed when we open the application

----------------------------------------------------------------------------------------

ng new AngularRouting 	(create new project names AngularRouting)
Do you want routing (Y/N) ? Y

one new file will be created in app folder named as "app-routing.module.ts"

ng generate component technology  	(creating component named as technology)
ng generate component book  	    (creating component named as book)


In app-routing.module.ts
- under Routes array add the path and component name which you want the links
- for wild card routing
    -create a new Component named Wrongchoice
    -give the component name and path : '**'
-for default routing
    - give the name of component (eg: technology) that needs to be kept as default for the path : ''
![image](https://user-images.githubusercontent.com/72671266/232976401-edb3b9a0-c536-4f99-93c1-01d0d67929cb.png)


In technology.component.html file
write the technology name that want to be displayed
![image](https://user-images.githubusercontent.com/72671266/232976484-37331da9-ea97-49ac-85b4-c7d73d6bc9aa.png)


In book.component.html file
write the books name that want to be displayed
![image](https://user-images.githubusercontent.com/72671266/232976450-3d939043-d808-4d3c-ab6a-073b7fbb1cef.png)


In wrongchoice.component.html file
write as Wrong choice
![image](https://user-images.githubusercontent.com/72671266/232976357-d30a0328-efda-45e1-b779-7cbb38d907f3.png)




In app.component.html
- write the <nav> tag and inside the nave tag give the link as mentioned in the app-routing.module.ts file's path variable
![image](https://user-images.githubusercontent.com/72671266/232976568-c4062e2c-b7b7-4fc2-81e1-e801bd0b75d9.png)


run the angular application using below command 
ng serve --o

  
  ![image](https://user-images.githubusercontent.com/72671266/232974827-00c91c98-c79b-4345-bcb3-79a5a123f705.png)
  ![image](https://user-images.githubusercontent.com/72671266/232974862-db3f63b3-40c2-4302-961f-d94a820110e1.png)

  
