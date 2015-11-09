FORMAT: 1A

# Named Endpoints API
This API example demonstrates how to define a standalone endpoint with an identifier.

## API Blueprint
+ [Previous: Advanced Action](12.%20Advanced%20Action.md)
+ [This: Raw API Blueprint](https://raw.github.com/apiaryio/api-blueprint/master/examples/13.%20Named%20Endpoints.md)

# Group Quick start

## Create message [GET /message2]

Start out by creating a message for the world to see.

+ Response 200 (application/json)

    {
            "name": "Exercise in gym",
            "done": false,
            "type": "task"
        }

## Create a new task [POST /tasks2]

Now create a task that you need to do at a later date.

+ Request (application/json)

        {
            "name": "Exercise in gym",
            "done": false,
            "type": "task"
        }

+ Response 201

    + Headers

            Location: /tasks/1992
