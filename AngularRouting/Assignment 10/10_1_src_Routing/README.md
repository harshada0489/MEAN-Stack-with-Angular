Q: Create the application which contains two routes as Technologies and Books.
In Technology route display names of technologies as Angular, Node JS, Android, Big Data, Artificial Intelligence etc and Books route display rhe manes of books that we can refer.

Create Angular project with routhing support. Add two components for each route. Add its entry in Routes array and check the execution by adding the name of route at the end of URL manually

---------------------------------------------------------------------------------------------------------

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

run the angular application using below command 
ng serve --o

