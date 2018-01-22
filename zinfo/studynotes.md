
comaring with JAVA, in  JS we use more comma(,) seprate statements 

Cloud types
-----------

Ia-a-s - Infrastructure as a service (more work.. we have to install webserver, loadbalancer, reverse proxy)
P-as-s - Platform as a service (less work.. webserver, loadbalancer, reverse proxy are given to developer. ex: Heroku)
Dass - Database as a service

Scaling
-------

horizontal scalling - adding more number of machine but no need to powerful.
Vertical scalling - add more powerful machine.

mongoose API
------------
somthon
Schema,

mongoose events are open, error

No SQL are good for
------------------


Mongo db
--------
--oplogSize
-replSet <replicatSetName>

below are rpelication set commands
rs.initiate()
rs.status()
rs.add()
rs.addArb()
rs.reconfig()
rs.conf()
rs.stepDown()
rs.syncFrom()
rs.remove() 
rs.isMaster()

Sharding for, more load handling
relication for, redundant and fail-safe.

- Horizontal partion is called sharding. 
- sharding is happing at collection level but not database level
- replica sets, which are clusters of mongod instances working together to provide redundant and fail-safe storage
- Combining sharding and replica sets enables you to create high-performance, highly reliable clusters
that can tolerate multimachine failure. It also enables you to maximize the performance and availability of
inexpensive, commodity-class hardware

mongo (shell) commands
---------------

db.printReplicationInfo()


Couchbase
--------
* i has to go for couchbase, when every document has to be associated with a key.
* it use memcache based cache machanism
* the use of cache machanism is one of the selling point of Couchbase
* Cross datacenter replaction(since v2.0), is another selling point for couchbase. it is give another benefit Locality with faste response to client
* Rack Awareness since v2.5,
* No downtime.
* Aysnchnous Data replication
* Couchbase has 3 copy of a document
* store document into bucket.
* 
nodejs
---------
* it is data intesive  real time network application
* scalable network application
* it seems for startup company or POC/ COE team, first use MEAN/CEAN stack for any application. since it boost the development, chance for more changes in requriment 


Root cause.
Transaction Isolation issues.

( unRepatable read) 
Repeatable read leads to timeout->data loss->
Heavy load

no way to check exactly in QA env.

pl/sql,
set to list
flush/refresh
report sqls okay..


tweeking jpa paremeter not helped.
file based integration
jpa - mybatis
hpppub schema to nosql dbs

we use 3+1 neo4j