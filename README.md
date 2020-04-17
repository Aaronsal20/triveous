# triveous
API service to add bookmarks similar to how chrome bookmarks work

run npm install in root folder to install all dependencies

run npm start to start server.

API Documentation

Bookmarks
1. Create bookmark(POST request).

/api/bookmark/create 

parameters 

⦁	title

⦁	link

⦁	publisher

⦁	tag (id)


2)  Get all bookmarks(GET request)
/api/bookmark/all/:page

3) Delete bookmark

/api/bookmark/delete/:id

(id = bookmark id)

Tag
1. Create tag(POST request).

/api/tag/create 

parameters 

⦁	title

2)  Get all tags(GET request)
/api/tag/all/:page

3) Delete tag (DELETE request)

/api/tag/delete/:id 

(id = tag id)


4) Add tag to bookmark (POST request)

/api/tag/create/add

parameters 
⦁	bookmark (id)

⦁	tag (id)


5 Remove  bookmark (POST request)

/api/tag/create/remove

parameters 

⦁	bookmark (id)

⦁	tag (id)



