My goal, while going through this exercise, was to get familiar with Algolia's search capabilities and functionalities. In order to test things out/complete the exercise, I opted to select the dataset related to one of my favorite things: basketball! Though hypothetical, I wanted to create a 'Player Portal' using the data set. The 'Player Portal' is aimed at being a quick reference guide to not only understanding which professional team the players played/currently play for  but also what college teams they played for (if any). Because there are a ton of statistics affiliated with basketball players, I figured the dataset would allow me a 'solid foundation' but also the ability to add in/search by additional attributes in my testing.

Throughout this exercise, I not only learned some solid foundations of the Algolia but was able to get more familiar with JavaScript and Node.JS. I also was able to leverage some of my HTML and CSS knowledge to customize (though just a little bit) the app that I created. Below are the high-level steps I followed, in case the team is interested in my thought process going through the exercise. I'm happy to provide any additional context.

1. Selected the NBA Players Dataset fro GitHub, and downloaded the JSON file.
2. Used Algolia's code-free method, within the dashboard, of uploading the JSON file.
3. Configured the basic relevance settings
4. Installed Node Package Manager and node.js on my MacBook
5. Created an InstantSearch app by leveraging Algolia's instantsearch.js library
6. In order to play around with Crawlers, I attempted to pull in URLs (Pro Basketball Reference, NBA.com, etc) but it turned out that most of them are 'protected'.
7. To make the dataset a bit more robust, I added an additional attribute, 'college', to the original index I passed to Algolia.
8. After manually adding this attribute for various players in the JSON, I downloaded the updated JSON file and uploaded that as a new index (appended with 'v2' in the Dashboard).
9. Published the app using gh-pages
