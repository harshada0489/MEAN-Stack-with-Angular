ng new AngularLearnings 	(create new project names AngularLearnings)
ng generate component child  	(creating component named as child)

(for rendering the above 1 components)
copy the selector name from child.component.ts and paste it in app.component.html 

edit  child component with text box and button text (child.component.html)
    - get the value from the textbox using #name
    -pass that name.value in the function defined in the child.component.ts

edit child component's .ts file  (child.component.ts) 

edit app component's .ts file (app.component.ts) 
-assign a variable, to fetch the value from child

edit  app component's html file for getting the me (app.component.html)
- only when event occurs i.e on button click , parent to child communication takes place.
    - the variable name mentioned in the app.component.ts file, will be in use to get the value 

-display the fetched value from the child component (using string interpolation)


run the angular application using below command 
ng serve --o


![image](https://user-images.githubusercontent.com/72671266/231653966-8aae44a9-611d-4345-8b3c-ff2ca6d854a6.png)
