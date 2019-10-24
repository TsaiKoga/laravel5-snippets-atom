# Laravel 5 Snippets for Atom

# Install
Atom Package: https://atom.io/packages/laravel5-snippets-atom.

```bash
apm install laravel5-snippets-atom
```

Or Settings/Preferences ➔ Install ➔ Search for `laravel5-snippets-atom`.

You should restart Atom after the Install / Update of the package.

# Currently Available Snippets

## PHP:

* **pvar**: Protected variable.
* **pfun**: Define public method.
* **\__const**: Construct method.
* **try7**: Try ... catch.
* **throwex**: throw exception.
* **car:now**: Carbon now.
* **car:yesterday**: Carbon yesterday.
* **car:tomorrow**: Carbon tomorrow.
* **car:today:start**: Carbon today.
* **car:start**:  Carbon end of day.
* **car:end**: Carbon end of day.
* **car:week:start**: Carbon start of week.
* **car:week:end**: Carbon end of week.
* **car:create**: Carbon create datetime.

* **call:func**: php call function.
* **call:func:array**: php call function with more args.

* **file:get:contents**: php read the file's contents.
* **file:put:contents**: php write the file's contents.


## Laravel:
### Debug
* **dd**: Die Dump.

### Command
* **cmd:opt**: Give the user options for repsonse
* **cmd:confirm**: Prompts the user with a question in the console
* **cmd:info**: Log information to the console in green
* **cmd:error**: Log error to the console in red
* **cmd:warn**: Logs a warn message to the console
* **cmd:ask**: Prompts the user with a question in the console
* **cmd:bar:start**: Log a progress bar to the console and start it.
* **cmd:bar:adv**: Log a progress bar to the console and advance it.
* **cmd:bar:end**: Log a progress bar to the console and finish it.

### Models
* **filla:pp**: Fillable model property.
* **casts:col**: Attribute Cast to other type.
* **getfun**: Attribute Accessor(Getter).
* **setfun**: Attribute Mutator(Setter).
* **belongsto:fun**: BelongsTo method.
* **belongstom:fun**: BelongsToMany method.
* **hasone:fun**: HasOne method.
* **within**: With method.
* **boot:fun**: Boot method.
* **scope:fun**: Scope method.
* **leftjoin:closure**: Left join closure.
* **del:all**: Delete all records.
* **del:one**: Delete a record.
* **del:force**: Force delete record.
* **update:inc**: Update increment.
* **update:dec**: Update decrement.
* **db:update:case**: Update case when.
* **db:table:alias**: Alias table query.
* **schema:table:create**: Schema create table.
* **schema:table:drop**: Schema drop table.


### Controller
* **use:db**: Use DB.
* **use:log**: Use Log.
* **use:valid**: Use Validator.
* **use:file**: Use Filesystem.
* **use:redis**: Use Redis.
* **use:cache**: Use Cache.
* **valid:mk**: Validator check.
* **trans:try**: Transaction try catch.
* **mid:ctrl**: Middleware in controller.

### Request
* **req:method**: Get the request method (GET, POST, ...).
* **req:url**: Get the URL (no query string) for the request.
* **req:full:url**: Get the full URL for the request.
* **req:full:url:query**: Get the full URL for the request with the added query string parameters.
* **req:exists**: Determine if the request contains a given input item key.
* **req:has**: Determine if the request contains a non-empty value for an input item.
* **req:input**: Retrieve an input item from the request.
* **req:only**: Get a subset of the items from the input data.
* **req:except**: Get all of the input except for a specified array of items.
* **req:query**: Retrieve a query string item from the request.
* **req:has:cookie**: Determine if a cookie is set on the request.
* **req:cookie**: Retrieve a cookie from the request.
* **req:files**: Get an array of all of the files on the request.
* **req:has:file**: Determine if the uploaded data contains a file.
* **req:get:file**: Retrieve a file from the request.

### View
* **view:make**: Create a View with Data
* **view:make:compact**: Create a View, Pass Data with compact()
* **view:make:with**: Create a View, Pass Data using with()
* **view:make:render**: Render a view with some data
* **view:make:share**: Share Data across all Views
* **view:make:exists**: Determine if a view exists

### Cache
* **cc:get**: Retrieve an Item from the Cache
* **cc:has**: Check for existence in Cache
* **cc:re**: Retrieve item or Store a default value if it doesn't exist
* **cc:add**: Cache add if the key is not exists.
* **cc:put**: Store an item in the Cache (key, value, minutes)
* **cc:forget**: Remove an Item from the Cache
* **cc:pull**: Pulling An Item From The Cache
* **cc:inc**: Increment a Cached value
* **cc:dec**: Decrement a Cached value
* **cc:lock :get**: obtaining arbitrary locks
* **cc:lock :rel**: release locks
* **cc:lock :block**: block until the lock becomes available

### File
* **file:exists**: Check the file or dirctory exists
* **file:mkdir**: Create directory

### Config
* **cf:get**: Get the specified configuration value.
* **cf:has**: Determine if the given configuration value exists.
* **cf:set**: Set a given configuration value.
* **cf:set:many**: Set a given configuration value.

### Route
* **route:cur:act**: Get the current route name.
* **route:group**: Create a Group of Routes
* **route:group:middleware**: Create a Group of Routers with middleware defined in RouteServiceProvider
* **route:ctl:act**: Basic route to a controller action.
* **route:closure**: Basic Route with Closure.

### Auth
* **auth:check**: Determine if the current user is authenticated.
* **auth:guest**: Determine if the current user is a guest.
* **auth:logout**: Log the user out of the application.
* **auth:user**: Get the currently authenticated user.
* **auth:guard**: customize the \"guard\" that is used to authenticate and register users
* **auth:attempt**: Log by passing an array with key-value
* **auth:login**: Log an existing user instance into your application
* **auth:login:id**: To log a user into the application by their ID

### Array Helper
* **array:add**: Add an element to an array using \"dot\" notation if it doesn't exist.
* **array:collapse**: Collapse an array of arrays into a single array.
* **array:data:get**: Get an item from an array using \"dot\" notation.
* **array:divide**: Divide an array into two arrays. One with keys and the other with values.
* **array:dot**: Flatten a multi-dimensional associative array with dots.
* **array:last**: Get the last element of an array. Useful for method chaining.
* **array:except**: Get all of the given array except for a specified array of items.
* **array:first**: Return the first element in an array passing a given truth test.
* **array:flatten**: Will flatten a multi-dimensional array into a single level.
* **array:forget**: Remove one or many array items from a given array using \"dot\" notation.
* **array:get**: Get an item from an array using \"dot\" notation.
* **array:has**: Check if an item exists in an array using \"dot\" notation.
* **array:head**: Get the first element of an array. Useful for method chaining.
* **array:last**: Return the last element in an array passing a given truth test.
* **array:only**: Get a subset of the items from the given array.
* **array:pluck**: Pluck an array of values from an array.
* **array:prepend**: Push an item onto the beginning of an array.
* **array:pull**: Get a value from the array, and remove it.
* **array:set**:Set an array item to a given value using \"dot\" notation.
* **array:sort:rec**: Recursively sort an array by keys and values.
* **array:sort**: Sort the array using the given callback.
* **array:where**: Filter the array using the given callback.


### Log
* **log:files:daily**: Storing and use daily log file. (Not support 5.6+)
* **log:files**: Storing and use log file. (Not support 5.6+)
* **log:channel**: Log a message to a channel.
* **log:stack:channels**: Logging stack consisting of multiple channels.

### Predis
* **red:cont**: Redis connection.
* **red:get**: Redis get key.
* **red:set**: Redis set key value.
* **red:del**: Redis delete key value.
* **red:setrange**: Redis replace string by key and index.
* **red:exists**: Redis if key exists.
* **red:setex**: Redis set key-value and expire time.
* **red:setnx**: Redis set key-value if key not exists.
* **red:incr**: Redis increase value.
* **red:incrby**: Redis increase value by steps.
* **red:decr**: Redis descrease value.
* **red:decrby**: Redis descrease value by steps.

* **red:hmget**: Redis get multi hash.
* **red:hmset**: Redis set multi hash.
* **red:lpush**: Redis left push.
* **red:rpush**: Redis right push.
* **red:len**: Redis get list length.
* **red:lindex**: Redis get list specific position range value.
* **red:lrem**: Redis remove value from list on left.
* **red:lpop**: Redis left pop.
* **red:rpop**: Redis right pop.
* **red:lpop**: Redis left pop.
* **red:sort**: Redis sort in list.

* **red:sadd**: Redis add value to sets.
* **red:scard**: Redis return sets elem count.
* **red:smembers**: Redis return all members in sets.
* **red:srem**: Redis remove the element in sets.
* **red:spop**: Redis pop element from sets.
* **red:smove**: 'Redis move values from one to another.


* **red:zadd**: Redis add value to sorted sets.
* **red:zincrby**: Redis increase sorted sets value by steps.
* **red:zrem**: Redis remove sorted sets value.
* **red:zrange**: Redis return values in range.
* **red:zrevrange**: Redis return reverse values in range.
* **red:zscore**: Redis return index of sorted sets value.
* **red:zcount**: Redis return the sorted sets count.

* **red:keys**: Redis get keys.
* **red:scan**: Redis scan by keys.



***

![A screenshot of your package](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)
