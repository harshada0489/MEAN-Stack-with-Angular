ng new AngularLearnings 	(create new project names AngularLearnings)
ng generate component child  	(creating component named as child)

(for rendering the above 1 components)
copy the selector name from child.component.ts and paste it in app.component.html 

edit  child component with text box and button text (child.component.html)
    - get the value from the textbox using #name
    -pass that name.value in the function defined in the child.component.ts

edit child component's .ts file  (child.component.ts) 



![image](https://user-images.githubusercontent.com/72671266/232253753-c7325889-0591-4a7b-adfb-46180b1fd72c.png)



edit app component's .ts file (app.component.ts) 
-assign a variable, to fetch the value from child

edit  app component's html file for getting the me (app.component.html)
- only when event occurs i.e on button click , parent to child communication takes place.
    - the variable name mentioned in the app.component.ts file, will be in use to get the value 

-display the fetched value from the child component (using string interpolation)


![image](https://user-images.githubusercontent.com/72671266/232253789-2fbefc1d-8500-47fa-a807-0e52f7c3b0fc.png)


run the angular application using below command 
ng serve --o


![image](https://user-images.githubusercontent.com/72671266/232253704-64c64f7d-2883-43de-a489-2ce03837c98c.png)
