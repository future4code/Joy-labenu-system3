import app from "./app";
import { createClass } from "./data/endpoints/createClass";


//Endpoint used to create new classes
app.post('/class', createClass)