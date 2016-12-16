# Word Web App

I had a great time working on this, and learnt a lot about some parts of React I hadn't touched before. I wish I had gotten a chance to move on to writing tests and adding in some more animations for the pages.

## Website
http://pump-attendant-careers-60231.netlify.com

## Running locally
* Clone repo
* $npm start

## ISSUES
* saving multiple definitions of the same word will overwrite previous saved ones.

## Questions to Answer When Finished
1. What technique did you use to handle state management? Why did you choose that approach?<br />
I used a single stateful component in the app (the search feature), and then built out the rest of the components as stateless. When I first started, I thought that the search bar was the only part of the app that would require setting the state, the rest it was possible to pass data to as props and use the components to work through and display it.

2. About how long did it take you to complete this assignment? What parts were hardest/easiest for you to complete? Was there anything you couldn't finish?<br />
I spent 2 days working on this assignment, Sunday and Tuesday. The majority of Sunday was spent trying to figure out why I was getting a 'No Access Control Origin Header is present on the requested resource' error whenever I attempted to access the owlbot.info api that was supplied, and trying to understand what that meant. When Tuesday arrived I found a Chrome plugin that enabled cross origin resource sharing so I could at least build out the rest of the app before attempting to fix the bug. I read a lot on what CORS is, and why its useful, but struggled to find methods on how best to work around it -  most seemed to require adding access on the server side. This was by far the most challenging part of the assignment, once I was able to access the data I enjoyed working through the rest of the assignment and styling the site.
-Once I added the sinatra backend to make the call, everything fell into place very nicely. I should have dug deeper into the create-react-app docs, there was a section about the error mentioned about and would have saved myself some trouble.

3. What was the last programming book you read?<br />
I recently finished 'The Mythical Man-Month' by Fred Brooks, and am reading something non-programming related before moving on to 'The Pragmatic Programmer' by Andy Hunt and Dave Thomas.

4. Do you have any side projects? If so, what are they and why did you start building it/them?<br />
I am currently working on building out an NFL stat site. Myself and another Launch Academy student tried to make one during a weekend hack-a-thon during the course, and after we finished decided to revisit it. The app scrapes play information from every game at the end of each week, then parses through it and stores it in our database. Players are associated with each stat, and then a React front end displays averages and combined stats. We are working on adding individual teams at the moment, and finding a way to visualize the data we are collecting. I try and always have a side project ongoing, before the stat site I built a 'picture-a-day' site to track and upload images throughout the year that only accepted on submission a day from each user.

5. Who inspires you in the programming community? Why?<br />
Most recently I was inspired by Fred Brooks' book mentioned above. Even though it was originally written 30 years ago, its amazing how relevant the programming concepts and team management issues he talks about still are. Before I started coding, I assumed that the way code is written moved as quickly as the technology it is being written on, and it was a pleasant realization that many of the core concepts have remained the same for so long. At Launch, the department head Alex Jarvis was a great inspiration, he was young, driven and had a great abstract way of approaching what we were learning that really stuck with me. Beyond that, I have been reading a lot recently about the technology that a lot of my favorite games are built on. I love reading about the humble beginnings many of the big names started from and the work they put into their early projects, people like Chris Roberts and John Romero.
