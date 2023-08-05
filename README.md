# Leaflet_Challenge


![Alt text](Images/1-Logo.png)
Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

Instructions
The instructions for this activity are broken into two parts:
    Part 1: Create the Earthquake Visualization
    Part 2: Gather and Plot More Data (Optional with no extra points earning)

Part 1: Create the Earthquake Visualization


![Alt text](Images/2-BasicMap.png)
our first task is to visualize an earthquake dataset. Complete the following steps:
Get your dataset. To do so, follow these steps:
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
            {"type":"FeatureCollection","metadata":{"generated":1691200867000,"url":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson","title":"USGS All Earthquakes, Past Day","status":200,"api":"1.10.3","count":206},"features":[{"type":"Feature","properties":{"mag":0.9,"place":"7 km N of Moreno Valley, CA","time":1691198970690,"updated":1691199208584,"tz":null,"url":"https://earthquake.usgs.gov/earthquakes/eventpage/ci40529976","detail":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci40529976.geojson","felt":null,"cdi":null,"mmi":null,"alert":null,"status":"automatic","tsunami":0,"sig":12,"net":"ci","code":"40529976","ids":",ci40529976,","sources":",ci,","types":",nearby-cities,origin,phase-data,scitech-link,","nst":21,"dmin":0.05497,"rms":0.23,"gap":64,"magType":"ml","type":"earthquake","title":"M 0.9 - 7 km N of Moreno Valley, CA"},"geometry":{"type":"Point","coordinates":[-117.2156667,33.9893333,12.77]},"id":"ci40529976"},
Import and visualize the data by doing the following:
Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
    Hint: The depth of the earth can be found as the third coordinate for each earthquake.
Include popups that provide additional information about the earthquake when its associated marker is clicked.
Create a legend that will provide context for your map data.
Your visualization should look something like the preceding map.