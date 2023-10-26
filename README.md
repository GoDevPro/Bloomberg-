# Bloomberg-
How to build/ run it
ClusteredData Warehouse

Suppose you are part of a scrum team developing data warehouse for Bloomberg to analyze FX deals. One of customer stories is to accept deals details from and persist them into DB.

Request logic as following:

Request Fields(Deal Unique Id, From Currency ISO Code "Ordering Currency", To Currency ISO Code, Deal timestamp, Deal Amount in ordering currency).
Validate row structure.(e.g: Missing fields, Type format..etc. We do not expect you to cover all possible cases but we'll look to how you'll implement validations)
System should not import same request twice.
No rollback allowed, what every rows imported should be saved in DB.
Deliverables should be ready to work including:

Use Actual Db, you can select between (Postgres, MySql or MongoDB)
Workable deployment including sample file (Docker Compose).
Maven or Gradle project is required for full source code.
Proper error/exception handling.
Proper Logging.
Proper unit testing with respected Coverage.
Proper documentation using md.
Delivered over Githhub.com.
Makefile to streamline running application (plus)
//
Bloomberg Project
Java8, Maven, Spring MVC, Hibernate, MySQl are concept used to build this application.
//Steps to run Bloomberg project: 0. Download project from git hub.

Import project to eclipse IDE.
Create MySQL Schema progress_soft and create all the required tables.
create table iso_currency_code, file_info, valid_deal, invalid_deal, accumulative_count as in puted in MySql_Scripts.sql file.
first insert all iso currency code into the iso_currency_code table as listed in MySql_Scripts.sql file.
Make all neccessory changes and run the project.
use sample csv date file for upload i.e : sample1.cvs and sample2.csv stored in project resources folder (Deal Unique Id, From Currency ISO Code "Ordering Currency", To Currency ISO Code, Deal timestamp, Deal Amount in ordering currency)
After Run project, it will open http://localhost:8081/Bloomberg/fileUploadPage , to upload only csv file and click upload button and you can file uploaded successfully.
After uploading file, it will display list of alll valid and invalid deals on http://localhost:8081/Bloomberg/listValidAndInvalidDeals.
use can run mysql query on mysql workbench to check whether file is stored on database.
In valid deal table use see all the valid deals and in Invalid deal table you can see all invalid deals with reason.
Iso currency code table store all currency code with country name.
In accumulative_count table you can see all accumulative_count.
You can list listValid And Invalid Deals by selecting file from drop down.
