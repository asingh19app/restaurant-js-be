# restaurant-part1

## Project Decsription 

Part one:This app will be a restaurant reviewer app. This app will have a real database powering the information behind it, and we will be able to add, update, and delete restaurants (full CRUD) as well as add and delete comments and reviews. User will have ability to view existing restaurants (places) in the app; click a specific restaurant (place) and to comment on it; create a new restaurant;change the restaurant information that you just created; and delete the restaurant created.

## Method Path Purpose

# GET / Home page

# GET /places Places index page

# POST /places Create new place

# GET /places/new Form page for creating a new place

# GET /places/:id Details about a particular place

# PUT /places/:id Update a particular place

# GET /places/:id/edit Form page for editing an existing place

# DELETE /places/:id Delete a particular place

# POST /places/:id/rant Create a rant (comment) about a particular place

# DELETE /places/:id/rant/:rantId Delete a rant (comment) about a particular place

# GET * 404 page (matches any route not defined above)

