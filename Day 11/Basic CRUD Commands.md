```bash
C:\Users\augus>mongosh
Current Mongosh Log ID: 6798fa574b3a1db870cb0ce1
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8
Using MongoDB:          8.0.4
Using Mongosh:          2.3.8

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-01-27T20:25:43.510+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> db
test
test>

test> show dbs
admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
test> use sample
switched to db sample
sample> db.createCollection('User')
{ ok: 1 }
sample> db
sample
sample> show dbs
admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
sample   8.00 KiB
sample> db.User.insert({'name': 'Augustine', 'Age': 20})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('6798fad14b3a1db870cb0ce2') }
}
sample> db.User.find()
[
  {
    _id: ObjectId('6798fad14b3a1db870cb0ce2'),
    name: 'Augustine',
    Age: 20
  }
]
sample> db.dropDatabase()
{ ok: 1, dropped: 'sample' }
sample> show dbs
admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
sample> use sample
already on db sample
sample> db
sample
sample> exit

C:\Users\augus>mongosh
Current Mongosh Log ID: 6798fb3d6fd2363e8dcb0ce1
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8
Using MongoDB:          8.0.4
Using Mongosh:          2.3.8

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-01-27T20:25:43.510+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
test> use sample
switched to db sample
sample> db.createCollection('user')
{ ok: 1 }
sample> db.createCollections('User')
TypeError: db.createCollections is not a function
sample> db.createCollection('User')
{ ok: 1 }
sample> db.user.drop()
true
sample> show collections
User
sample> db.User.insertMany([{'Name': 'Augustine', 'Age': 20, 'Place': 'Bengalore'}, {'Name': 'Rohith', 'Age': 35}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6798fc636fd2363e8dcb0ce2'),
    '1': ObjectId('6798fc636fd2363e8dcb0ce3')
  }
}
sample> db.User.find()
[
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce2'),
    Name: 'Augustine',
    Age: 20,
    Place: 'Bengalore'
  },
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce3'),
    Name: 'Rohith',
    Age: 35
  }
]
sample> db.User.find({Name: 'Augustine'})
[
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce2'),
    Name: 'Augustine',
    Age: 20,
    Place: 'Bengalore'
  }
]
sample> db.User.find({Age: {$gt:25}})
[
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce3'),
    Name: 'Rohith',
    Age: 35
  }
]
sample> db.User.find({Name: 'Augustine'}, {Age:0}, {Place:1})
[
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce2'),
    Name: 'Augustine',
    Place: 'Bengalore'
  }
]
sample> db.User.update({Name: 'Rohith'}, {$set: {Age: 40}})
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
sample> db.User.find()
[
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce2'),
    Name: 'Augustine',
    Age: 20,
    Place: 'Bengalore'
  },
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce3'),
    Name: 'Rohith',
    Age: 40
  }
]
sample> db.User.remove({Name: 'Rohith'})
DeprecationWarning: Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
{ acknowledged: true, deletedCount: 1 }
sample> db.User.find()
[
  {
    _id: ObjectId('6798fc636fd2363e8dcb0ce2'),
    Name: 'Augustine',
    Age: 20,
    Place: 'Bengalore'
  }
]
sample> db.dropDatabase
[Function: dropDatabase] AsyncFunction {
  apiVersions: [ 1, Infinity ],
  returnsPromise: true,
  serverVersions: [ '0.0.0', '999.999.999' ],
  topologies: [ 'ReplSet', 'Sharded', 'LoadBalanced', 'Standalone' ],
  returnType: { type: 'unknown', attributes: {} },
  deprecated: false,
  platforms: [ 'Compass', 'Browser', 'CLI' ],
  isDirectShellCommand: false,
  acceptsRawInput: false,
  shellCommandCompleter: undefined,
  help: [Function (anonymous)] Help
}
sample> exit

C:\Users\augus>show dbs
'show' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\augus>mongosht
'mongosht' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\augus>mongosh
Current Mongosh Log ID: 6798fe19f3c2f84f31cb0ce1
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8
Using MongoDB:          8.0.4
Using Mongosh:          2.3.8

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-01-27T20:25:43.510+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin   40.00 KiB
config  96.00 KiB
local   40.00 KiB
sample  72.00 KiB
test> use sample
switched to db sample
sample> db.dropDatabase()
{ ok: 1, dropped: 'sample' }
sample> show sbs
MongoshInvalidInputError: [COMMON-10001] 'sbs' is not a valid argument for "show".
sample> show dbs
admin   40.00 KiB
config  96.00 KiB
local   40.00 KiB
sample> exit

C:\Users\augus>mongosh
Current Mongosh Log ID: 6798fe56cf82297f83cb0ce1
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8
Using MongoDB:          8.0.4
Using Mongosh:          2.3.8

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-01-27T20:25:43.510+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin   40.00 KiB
config  96.00 KiB
local   40.00 KiB
test> exit

C:\Users\augus>
```
