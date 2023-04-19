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

In technology.component.html file
write the technology name that want to be displayed

In book.component.html file
write the books name that want to be displayed

In app.component.html
- write the <nav> tag and inside the nave tag give the link as mentioned in the app-routing.module.ts file's path variable


run the angular application using below command 
ng serve --o
