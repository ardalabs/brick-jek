#BRICK SCRAP


### Problem statement
 - Currently we need to extracts last 1 month transactions, user balance and user full name from GoPay application and stores it in a csv file.

### Expected
  - create api that allowed to access an API to get gopay list transaction last 30 days (from now - 30days)

### Approach 1
 -  Decompile APK then find the endpoint
 -  Find endpoint certain

### Approach 2
 -  Using charles proxy to get enpoint
 -  Record all endpoint
   	![alt text](https://d3qcthppdybi1i.cloudfront.net/assets/Screen+Shot+2021-03-08+at+8.51.59+AM.png "Flow")


### TECH SPEC
|  Name       | Description                     |
|-------------|---------------------------------|
| Apk Tools   | Extract/ Decompile the APK      |
| SandroProxy | -                               |
| Wireshark   |                                 |
| NodeJs      | Implementing the Scrap Endpoint |
| RequestJs   | request Endpoint                |
| Json-CSV    |                                 |


### Application Flow
![alt text](https://d3qcthppdybi1i.cloudfront.net/assets/Screen+Shot+2021-03-06+at+4.43.16+PM.png "Flow")

###OUTPUT

|amount|currency|type |transacted_at        |trx_id                      |account_id|account_name|remark                                                                                                     |last_known_balance|
|------|--------|-----|---------------------|----------------------------|----------|------------|-----------------------------------------------------------------------------------------------------------|------------------|
|52000 |IDR     |debit|2021-02-13 13:36:36.0|0120210213131521RH2OGvbkqWID|542533035 |mas aryo.   |GO-FOOD Barbar Chinese Food, Sumbersari #F-1130542593                                                      |20244             |
|25000 |IDR     |debit|2021-02-11 22:27:16.0|0120210211222556Z8Uvc6MUirID|542533035 |mas aryo.   |GO-PAY Payment #PT Biznet Gio Nusantara #5c379939-fd24-42e8-8c20-d9aa2e18ac90 #0120210211222556Z8Uvc6MUirID|72244             |

###EVIDENCE
![alt text](https://d3qcthppdybi1i.cloudfront.net/assets/photo_2021-03-08+09.08.00.jpeg "Flow")




 
