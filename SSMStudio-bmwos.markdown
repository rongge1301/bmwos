Welcome to the Gitee wiki!  
  
#### http://114.55.92.124:9090/audit_star/create_report.do
//根据所选的条件创建对应的跑数任务

//POST 请求, json格式

- Requst

[必须]yhToken(登录了的token, 存在localstorage)

[必须]start_date(需要是数字型, yyyyMM)

[必须]end_date(需要是数字型, yyyyMM)

[可选]brand(如果报告有这个选项就需要, 否则可以没有)

[可选]market(如果报告有这个选项就需要, 否则可以没有)

[可选]dealer_include(如果报告有这个选项就需要, 否则可以没有)

[必须]report_id(各种不同报告对应的编号)

报告分两大块. 凡事offline的都是1开头,online就是2开头

offline - Market Report - Competitive Spend - 101

offline - Market Report - Market Spend - 102

online - Market Report - Competitive Spend - 201

online - Market Report - Market Spend - 202

目前还有几份没确定,后面陆续更新


举例:

```
{
  "yhToken":"CD4D3C2104B65E5F6FF6AEF51136BC91",
  "report_id":101,
  "start_date":201601,
  "end_date":201712,
  "brand":["BMW","Audi"],
  "market":["Total Market","Automotive Market","Car Market","Car Premium Market"],
  "dealer_include":"Yes"
}
```

- Response
```
{
    "status": 0,
    "msg": "Mission create successfully",
    "data":{
            "taskID": 10101
    }
}
```  
#### http://114.55.92.124:9090/audit_star/select_report.do
//查询最多10个历史的跑数任务

//POST 请求 


- Requst

[必须]yhToken(登录了的token, 存在localstorage)

```
http://114.55.92.124:9090/audit_star/select_report.do?yhToken=CD4D3C2104B65E5F6FF6AEF51136BC91
```

- Response
```
{
    "status": 0,
    "data":[
        {
            "taskID": 10088,
            "reportName": "Offline Reports-Market Report-Market Spend",
            "size": 10.38,
            "submitTime": "2018-04-04 18:57:22",
            "finishTime": "2018-04-04 18:57:43",
            "status": "finished"
        },
        {
            "taskID": 10087, 
            "reportName": "Offline Reports-Market Report-Market Spend", 
            "size": 10.38, 
            "submitTime": "2018-04-04 18:55:14",…
        }
    ]
}
```      
#### http://114.55.92.124:9090/audit_star/download_report.do
//下载已经跑好的数据报告

//GET 请求


- Requst

[必须]yhToken(登录了的token, 存在localstorage)

[必须]taskID(这个是数据报告的唯一ID,select_report.do接口返回)

```
http://114.55.92.124:9090/audit_star/download_report.do?yhToken=CD4D3C2104B65E5F6FF6AEF51136BC91&taskID=10086
```

- Response
返回对应的数据报告  
