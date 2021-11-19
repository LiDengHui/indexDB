# indexDB

IndexedDB 是一个比较复杂的 API，涉及不少概念。它把不同的实体，抽象成一个个对象接口。学习这个 API，就是学习它的各种对象接口。

        数据库：IDBDatabase 对象
        对象仓库：IDBObjectStore 对象
        索引： IDBIndex 对象
        事务： IDBTransaction 对象
        操作请求：IDBRequest 对象
        指针： IDBCursor 对象
        主键集合：IDBKeyRange 对象
下面是一些主要的概念。

##（1）数据库

数据库是一系列相关数据的容器。每个域名（严格的说，是协议 + 域名 + 端口）都可以新建任意多个数据库。

IndexedDB 数据库有版本的概念。同一个时刻，只能有一个版本的数据库存在。如果要修改数据库结构（新增或删除表、索引或者主键），只能通过升级数据库版本完成。

##（2）对象仓库

每个数据库包含若干个对象仓库（object store）。它类似于关系型数据库的表格。

##（3）数据记录

对象仓库保存的是数据记录。每条记录类似于关系型数据库的行，但是只有主键和数据体两部分。主键用来建立默认的索引，必须是不同的，否则会报错。主键可以是数据记录里面的一个属性，也可以指定为一个递增的整数编号。


    { id: 1, text: 'foo' }
上面的对象中，id属性可以当作主键。

数据体可以是任意数据类型，不限于对象。

##（4）索引

为了加速数据的检索，可以在对象仓库里面，为不同的属性建立索引。

##（5）事务

数据记录的读写和删改，都要通过事务完成。事务对象提供error、abort和complete三个事件，用来监听操作结果。