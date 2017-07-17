

### 启动程序

``git clone git@github.com:lyf321/test.git``

``cd test``

``npm install``安装依赖

使用``npm start``启动服务

然后使用``npm run webpack``进行打包

最后使用浏览器打开``http://localhost:4000``

### 测试运行


1.``npm test``运行测试

2.需要有测试数据库 **users**,表**user1**
```
create databases users;

use users;

create table user1(
  userName varchar(20),
  name  varchar(50),
  age int(50),
  gender varchar(50),
  phone int(50),
  email varchar(50),
  remark varchar(50)
);

```


3.测试信息: 
            
            用户名： userName  (例："001")
            姓名：name  (例："lili")
            年龄：age  (例：15)
            性别：gender （例："female/male"） 
            电话：phone  (例：8853652)
            邮箱：email  (例："1233445@qq.com")
            备注：remark

4.需要**修改 mysql文件下的 mysql.js** ,将用户名密码改为自己的mysql的用户名和密码

**注意: npm test 和npm start 不能同时运行**


