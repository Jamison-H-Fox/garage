
# Jamison's Dream Garage

This project is conceived by me (not from a tutorial) and built from scratch to showcase the following: 

### Front End:
- Client side routing
    - [ ] Each page renders appropriately
- User interface
    - [ ] Maybe a spinner for loading???
    - [ ] Login form
    - [ ] Welcome page
    - [ ] Add new page
    - [ ] Garage page (carousel)
        - [ ] CarCard components in carousel
    - [ ] Logout
- Controlled forms
    - [ ] Yup validation schema
    - [ ] Order form in add page
    - [ ] Update form in garage page
- Login and logout features
    - [ ] Login form bookends
    - [ ] Logout confirmation w/ button to login again
    - [ ] Login/Logout buttons change to match state
- Redux store for state
    - [ ] Store all stuff from axios calls in state
- Tool tips on hover

### Back End:
- API w/ router endpoints
    - /cars
        - [ ] GET - Load all cars into garage on load of component
        - [ ] PUT - Update w/ form in garage
        - [ ] POST - Order form in add page
        - [ ] DELETE - Remove car in garage
    - /users
        - [ ] POST - register
        - [ ] POST - login
- Middleware
    - [ ] Clean username/password data before submitting
    - [ ] Check username validity
    - [ ] Restricted to block routes w/out authorization
- Database structure
    - [x] Table for tracking vehicles
        - [x] car_id (auto-incrementing)
        - [x] user_id (required)
        - [x] make (required)
        - [x] model (required)
        - [x] trim (required)
        - [x] img_url (required)
        - [x] price
        - [x] build_url
    - [ ] Table for tracking users
        - [x] user_id (auto-incrementing)
        - [x] username (required, unique)
        - [x] password (required)
        - [ ] session???
    - [x] Foreign keys to assign vehicle to user
    - [ ] Users for session storage
- Database access
    - Users
        - [ ] findBy(username) to verify existence
        - [ ] add() to register new user
    - Cars
        - [ ] add() to add new car
        - [ ] update() to modify existing car
        - [ ] find() to find all cars matching user
        - [ ] delete() to delete indicated car
    - [ ] db for basic CRUD stuff
    - [ ] seeds and migrations
- Authentication and protected routes
    - [ ] Protect welcome, add, and garage pages
    - [ ] Store sessions in db for persistence
