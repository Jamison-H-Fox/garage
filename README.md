
# Jamison's Dream Garage

This project is conceived by me (not from a tutorial) and built from scratch to showcase the following:

### Front End:
- Client side routing
    - [x] Each page renders appropriately
- User interface
    - [ ] Maybe a spinner for loading???
    - [ ] Maybe Message for confirmation, etc???
    - [x] Login form
    - [ ] Welcome page
    - [x] Add new page
    - [x] Update page
    - [x] Delete confirmation page
    - [x] Garage page (carousel)
        - [x] CarCard components in carousel
    - [x] Logout
- Controlled forms w/ Yup validation
    - [x] Login form in login page
    - [x] Add form in add page
    - [x] Update form in update page
- Login and logout features
    - [ ] All routes except /login protected if not logged in
    - [x] Logout confirmation with confirm/cancel pushes to login
    - [x] Login/Logout buttons change to match state
- Redux store for state
    - [ ] Actions for api calls
        - [x] update current index in carousel
        - [x] set errors for validation
        - [x] login
        - [ ] logout
        - [ ] register new user
        - [ ] get all cars matching specific user
        - [ ] update specific car
        - [ ] add car
        - [ ] delete specific car
    - [ ] Reducers set res to state