Q: Create the application which contains two routes as Technologies and Books.
In Technology route display names of technologies as Angular, Node JS, Android, Big Data, Artificial Intelligence etc and Books route display rhe manes of books that we can refer.

Create Angular project with routhing support. Add two components for each route. Add its entry in Routes array and check the execution by adding the name of route at the end of URL manually

---------------------------------------------------------------------------------------------------------

ng new AngularRouting 	(create new project names AngularRouting)
Do you want routing (Y/N) ? Y

one new file will be created in app folder named as "app-routing.module.ts"

ng generate component technology  	(creating component named as technology)
ng generate component book  	    (creating component named as book)

In app.component.html:
![image](https://user-images.githubusercontent.com/72671266/232975626-90a9ca5a-970a-4ec5-88ba-b1537b37a71f.png)


In app-routing.module.ts
under Routes array add the path and component name which you want the links

![image](https://user-images.githubusercontent.com/72671266/232975455-fe09f27b-a601-4f41-8843-6768b1c2d23f.png)


In technology.component.html file
write the technology name that want to be displayed

![image](https://user-images.githubusercontent.com/72671266/232975255-f9b28533-0d2b-43a4-ac3f-740cacc2d44d.png)

In book.component.html file
write the books name that want to be displayed

![image](https://user-images.githubusercontent.com/72671266/232975040-9e677d47-4edb-4268-9db5-8ccbf005c43a.png)


run the angular application using below command 
ng serve --o

![image](https://user-images.githubusercontent.com/72671266/232974498-8146e450-6fc7-4225-b546-9f63e9a65f65.png)
![image](https://user-images.githubusercontent.com/72671266/232974525-a21b946b-18ff-4996-80ae-499446135c97.png)
![image](https://user-images.githubusercontent.com/72671266/232974563-ef1b6201-caa8-44c6-a446-bfca369877c1.png)
