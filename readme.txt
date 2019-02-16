Names: 
        Jake Richardson 101080786  jakerichardson@cmail.carelton.ca
        Ben Vandenberg  101081416  Ben.Vandenberg@carleton.ca

version
        node version : 8.11.4
        os: windows 10 

install
        in the console type "npm install"

Launch:
        open the directory to demo_code folder and
        in the terminal type "node express_food_server.js"
        
testing: 
        go to any of these urls:
        http://localhost:3000
        http://localhost:3000/
        http://localhost:3000/?ingredient=tomato
        http://localhost:3000/recipes.html
        http://localhost:3000/recipes
        http://localhost:3000/index.html

        recipes can be found by either searching the ingredient in the 
        text box or in the url with the right format

Issues: 
        client and server arent seperated into two files(broke everything when we tried) but information is still transfered 
        with JSON.
