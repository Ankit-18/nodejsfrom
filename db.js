var mysql=require('mysql');
var con=mysql.createConnection({
  host:"localhost",
  port:'3306',
  user:'root',
  password:'',
  database:'Emsdb'
});

con.connect(function(err){
  if(err) throw err;
  else {
    console.log("Mysql databse connected successfully");
  }
});

//var sql="insert into employee values(101,'sumit',12000)"
//var sql="update employee set ename='sumit' where eid=101"
//var sql="delete from employee where eid=101";
var sql="select * from login";
con.query(sql,(err,result)=>{
  if(err) throw err;
  else {
    console.log(result);
  }
});
module.exports=con;
