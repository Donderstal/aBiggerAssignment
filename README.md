# Code Assignment

Build a weather 5 day forecast graph for 3 cities 

Cities: Amsterdam, Moscow, New York or any others that you would like to use

Data: 
You can use data from https://openweathermap.org/
You probably should create a free account there.
API docs: https://openweathermap.org/api. You will need "5 day / 3 hour forecast”

Description:
- It should be a single page application
- it should have 3 tabs (each tab for one city)
- each city should show it’s own graph
- API call to get a forecast should be made only if you select a tab
- by default the 1st tab is active
- API calls should be made only ones in 10 minute for each city (update data only if 10 minutes passed after the last API call)

Graph: You are free to choose a library to build graphs

Bonus task:

Build an algorithm to describe a weather mood for 5 days. 
You can use at least 3 different emojis (good weather, normal weather, bad weather) to describe it and place it near the graph
