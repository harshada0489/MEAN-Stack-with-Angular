Q: Create the similar application as (Question 1) as above and add navigation tabs to navigate between the two routes


-----------------------------------------------------------------------------------


ng new AngularRouting 	(create new project names AngularRouting)
Do you want routing (Y/N) ? Y

one new file will be created in app folder named as "app-routing.module.ts"

ng generate component technology  	(creating component named as technology)
ng generate component book  	    (creating component named as book)


In app-routing.module.ts
under Routes array add the path and component name which you want the links

In technology.component.html file
write the technology name that want to be displayed

In book.component.html file
write the books name that want to be displayed

In app.component.html
- write the <nav> tag and inside the nave tag give the link as mentioned in the app-routing.module.ts file's path variable

run the angular application using below command 
ng serve --o

  
  ![image](https://user-images.githubusercontent.com/72671266/232974632-e0ae5e5a-c8dc-46fd-b96b-96dd044c80cf.png)
![image](https://user-images.githubusercontent.com/72671266/232974661-e6c8b2b7-b82c-4d8a-b964-05b46ec57d14.png)
  ![image](https://user-images.githubusercontent.com/72671266/232974707-27096075-abf7-400f-b1e1-dfeb53812483.png)

