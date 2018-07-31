from flask import Flask, render_template, request, jsonify,redirect,url_for
from datetime import datetime
import aiml
import json
import os
import pymysql.cursors
import base64
from flask_mail import Mail
from flask_mail import Message 
from werkzeug.utils import secure_filename

 
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'dhruvbabbar349@gmail.com'  # enter your email here
app.config['MAIL_DEFAULT_SENDER'] = 'dhruvbabbar349@gmail.com' # enter your email here
app.config['MAIL_PASSWORD'] = 'esavwvglwjpsjjej' # enter your password here
mail=Mail(app)
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def main():
    return render_template('candidateForm.html')


certiId=0
resumeId=0
global tier,maritalStatus,insuranceCheck,age,yearsWorked,dependants,score

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
    
@app.route("/uploader", methods=['POST'])
def uploader():
    if request.method == 'POST':
        # check if the post request has the file part
        
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('uploaded_file',
                                    filename=filename))
        return "safe"
    
@app.route("/save/<CandidateID>", methods=['POST'])
def save(CandidateID):     
            candidateId= CandidateID;
            connection = pymysql.connect(host='localhost',
                             user='Springstudent',
                             password='Springstudent',
                             db='candidate',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
#            result = request.get_json(force=True)
            score=""
            source= request.form['source'] 
#            
            RFHnumber= request.form['RFHnumber']
            ConsultantName= request.form['consultantName']
            employeeName= request.form['employeeName']
#            
            employeeCode= request.form['EmployeeCode']             
##            
            HRname= request.form['HRname']             
            HRcode= request.form['HRCode'] 
#            
            hiringFunction= request.form['hiringFunction']
            hiringLocation= request.form['hiringLocation'] 
            name= request.form['cand_name']        
            DOB= request.form['DOB']    
##            
            email= request.form['email'] 
            gender= request.form.get('gender')
            address= request.form['address']
##            
            mobile= request.form['mobile']
#           
#          
            country= request.form.get('country') 
            state= request.form.get('state')
            ZIP= request.form['zip']
#           
            maritalStatus= request.form['maritalStatus']         
            dependants= request.form['dependants']
#           
            aadhar= request.form['aadhar']
#            
            pan= request.form['pan']       
            yearsWorked= request.form['years']    
          
            if(DOB):
                DOBmonth,DOBday,DOByear=DOB.split("/")
                DOByear=int(DOByear)
                DOBmonth=int(DOBmonth)
                DOBday=int(DOBday)
                currentYear = datetime.now().year
                currentMonth= datetime.now().month
                currentDay = datetime.now().day
                age=currentYear - DOByear - ((currentMonth, currentDay) < (DOBmonth, DOBday))
            
#          
#            
            monthsWorked= request.form['months']               
##            
            insuranceCheck= request.form.get('insuranceCheck')   
            armyCheck = request.form.get('ArmyCheck')           
##            
            sector= request.form.getlist('sector[]') 
            subSector= request.form.getlist('subSector[]')    
            company= request.form.getlist('companyName[]')    
            designation= request.form.getlist('designation[]') 
            startDate= request.form.getlist('startDate[]')   
            endDate= request.form.getlist('endDate[]')    
            annualSalary= request.form.getlist('salary[]')
            
#            if(subSector)
            qualification= request.form.getlist('qualification[]')
            qualificationYear= request.form.getlist('yearOfCompletion[]')
            qualSpecialization= request.form.getlist('specialisation[]')
          
            resume = request.files.get('resumeFile')
            if resume:
                filename = secure_filename(resume.filename)
                resume.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
                path = "./uploads/"+filename
                with open(path, 'rb') as f:
                    blob = base64.b64encode(f.read())
            else:
                blob=resume

            tier=""           
            with connection.cursor() as cursor:
            # Read records
                
                if(hiringLocation):
                        sql = "SELECT tier FROM citytier WHERE city = %s";
                        cursor.execute(sql,hiringLocation)
                        tier=cursor.fetchone() 
                        tier= tier.get('tier')
                        
#
                if(hiringFunction and dependants and yearsWorked and age and tier and maritalStatus) :
                    if(hiringFunction=="Defence"):
                   
                        if dependants>4:
                            score="Green"

                        elif dependants<=2 and yearsWorked > 9:
                            score="Green"

                        elif (dependants==3 or dependants==4) and yearsWorked > 9 and age>=42 and tier=="Tier-2":
                            score="Green"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and tier=="Tier-3" and maritalStatus=="Single":
                            score="Green"


                        elif dependants<=4 and yearsWorked <=9 and age<43 and (tier=="Tier-1" or tier=="Tier-2") and insuranceCheck=="Non-Insurance":
                            score="Amber"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and tier=="Tier-3" and maritalStatus=="Married" and insuranceCheck=="Insurance":
                            score="Amber"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and tier=="Tier-3" and maritalStatus=="Married" and insuranceCheck=="Non-Insurance":
                            score="Amber"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and (tier=="Tier-1" or tier=="Tier-2") and insuranceCheck=="Insurance":
                            score="Red"

                        elif (dependants==3 or dependants==4) and yearsWorked >9 and age>=42 and (tier=="Tier-1" or tier=="Tier-3"):
                            score="Red"

                        elif (dependants==3 or dependants==4) and yearsWorked >9 and age<42 :
                            score="Red"

                        elif dependants<=4 and yearsWorked <=9 and age>=43:
                            score="Red" 

                    elif (hiringFunction=="Impact"):
                    
                        if dependants>4:
                            score="Green"

                        elif dependants==3 and (age>=24 and age <30) and maritalStatus=="Single":
                            score="Green"

                        elif dependants<=4 and age<24:
                            score="Green"

                        elif dependants<=3 and yearsWorked >7 and age>=30 and tier=="Tier-3":
                            score="Green"

                        elif dependants<=3 and yearsWorked <=7 and age>=30 :
                            score="Green"                        

                        elif dependants == 4 and (yearsWorked >2 and yearsWorked<=9) and age>=24 :
                            score="Amber"

                        elif dependants<=3 and yearsWorked >7 and age>=30 and (tier=="Tier-1" or tier=="Tier-2"):
                            score="Amber"                   

                        elif dependants == 4 and age>=24 and yearsWorked >9:
                            score="Red"

                        elif dependants == 4 and age>=24 and yearsWorked <=2:
                            score="Red"

                        elif dependants == 3 and (age>=24 and age<30) and maritalStatus == "Married" :
                            score="Red"

                        elif dependants <= 2 and (age>=24 and age<30):
                            score="Red"               
                    
                else:
                    score =""
               
               
                sql = "UPDATE candidate_information set Source=%s,RFHnumber=%s,ConsultantName=%s,EmployeeName=%s,EmployeeCode=%s,HRname=%s,HRcode=%s,HiringFunction=%s,HiringLocation=%s,CityTier=%s,Name=%s,DOB=%s,Email=%s,Gender=%s,Address=%s,Mobile=%s,Country=%s,State=%s,ZIP=%s,MaritalStatus=%s,Dependants=%s,Aadhar=%s,PAN=%s,Years=%s,Months=%s,InsuranceCheck=%s,ArmyCheck=%s,ProfileScore=%s,resume=%s WHERE CandidateID =%s ";
                cursor.execute(sql, (source,RFHnumber,ConsultantName,employeeName,employeeCode,HRname,HRcode,hiringFunction,hiringLocation,tier,name,DOB,email,gender,address,mobile,country,state,ZIP,maritalStatus,dependants,aadhar,pan,yearsWorked,monthsWorked,insuranceCheck,armyCheck,score,blob,candidateId))
                         
                for i in range(len(sector)):                   
                    sql = "UPDATE candidate_work SET Sector=%s,SubSector=%s,Company=%s,Designation=%s,StartDate=%s,EndDate=%s,Salary=%s WHERE CandidateID =%s ";
                    cursor.execute(sql, (sector[i],subSector[i],company[i],designation[i],startDate[i],endDate[i],annualSalary[i],candidateId))
##               
                for i in range(len(qualification)):                   
                    sql = "UPDATE candidate_education SET Qualification=%s,Year=%s,Specialization=%s WHERE CandidateID =%s ";
                    cursor.execute(sql, (qualification[i],qualificationYear[i],qualSpecialization[i],candidateId))
                
                connection.commit()
                connection.close()
#                      
#            msg = Message("DPLI:Registered Succesfully",
#                  sender="dhruvbabbar349@gmail.com",
#                  recipients=["dhruvbabbar349@gmail.com"])
#            
#            msg.html = render_template('mail.html',     name=name,source=source,hiringLocation=hiringLocation,aadhar=aadhar,score=score,mobile=mobile)
#            mail.send(msg)
            return "Saved"
        
@app.route("/register", methods=['POST'])
def register():     
            connection = pymysql.connect(host='localhost',
                             user='Springstudent',
                             password='Springstudent',
                             db='candidate',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
#            result = request.get_json(force=True)
            score=""
#            formStatus=""
            if request.form.get('save'):
                formStatus="Saved"
            elif request.form.get('submit'):
                formStatus="Submitted"
                
            source= request.form['source'] 
#            
            RFHnumber= request.form['RFHnumber']
            ConsultantName= request.form['consultantName']
            employeeName= request.form['employeeName']
#            
            employeeCode= request.form['EmployeeCode']             
##            
            HRname= request.form['HRname']             
            HRcode= request.form['HRCode'] 
#            
            hiringFunction= request.form['hiringFunction']
            hiringLocation= request.form['hiringLocation'] 
            name= request.form['cand_name']        
            DOB= request.form['DOB']    
##            
            email= request.form['email'] 
            gender= request.form.get('gender')
            address= request.form['address']
##            
            mobile= request.form['mobile']
#           
#          
            country= request.form.get('country') 
            state= request.form.get('state')
            ZIP= request.form['zip']
#           
            maritalStatus= request.form['maritalStatus']         
            dependants= request.form['dependants']
#           
            aadhar= request.form['aadhar']
#            
            pan= request.form['pan']       
            yearsWorked= request.form['years']    
          
            if(DOB):
                DOBmonth,DOBday,DOByear=DOB.split("/")
                DOByear=int(DOByear)
                DOBmonth=int(DOBmonth)
                DOBday=int(DOBday)
                currentYear = datetime.now().year
                currentMonth= datetime.now().month
                currentDay = datetime.now().day
                age=currentYear - DOByear - ((currentMonth, currentDay) < (DOBmonth, DOBday))
            
#          
#            
            monthsWorked= request.form['months']               
##            
            insuranceCheck= request.form.get('insuranceCheck')   
            armyCheck = request.form.get('ArmyCheck')           
##            
            sector= request.form.getlist('sector[]') 
            subSector= request.form.getlist('subSector[]')
            print(len(subSector))
            company= request.form.getlist('companyName[]')    
            designation= request.form.getlist('designation[]') 
            startDate= request.form.getlist('startDate[]')   
            endDate= request.form.getlist('endDate[]')    
            annualSalary= request.form.getlist('salary[]')
            
#            if(subSector)
            qualification= request.form.getlist('qualification[]')
            qualificationYear= request.form.getlist('yearOfCompletion[]')
            qualSpecialization= request.form.getlist('specialisation[]')
          
            resume = request.files.get('resumeFile')
            if resume:
                filename = secure_filename(resume.filename)
                resume.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
                path = "./uploads/"+filename
                with open(path, 'rb') as f:
                    blob = base64.b64encode(f.read())
            else:
                blob=resume

            tier=""           
            with connection.cursor() as cursor:
            # Read records
                
                if(hiringLocation):
                        sql = "SELECT tier FROM citytier WHERE city = %s";
                        cursor.execute(sql,hiringLocation)
                        tier=cursor.fetchone() 
                        tier= tier.get('tier')
                        
#
                if(hiringFunction and dependants and yearsWorked and age and tier and maritalStatus) :
                    if(hiringFunction=="Defence"):
                   
                        if dependants>4:
                            score="Green"

                        elif dependants<=2 and yearsWorked > 9:
                            score="Green"

                        elif (dependants==3 or dependants==4) and yearsWorked > 9 and age>=42 and tier=="Tier-2":
                            score="Green"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and tier=="Tier-3" and maritalStatus=="Single":
                            score="Green"


                        elif dependants<=4 and yearsWorked <=9 and age<43 and (tier=="Tier-1" or tier=="Tier-2") and insuranceCheck=="Non-Insurance":
                            score="Amber"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and tier=="Tier-3" and maritalStatus=="Married" and insuranceCheck=="Insurance":
                            score="Amber"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and tier=="Tier-3" and maritalStatus=="Married" and insuranceCheck=="Non-Insurance":
                            score="Amber"

                        elif dependants<=4 and yearsWorked <=9 and age<43 and (tier=="Tier-1" or tier=="Tier-2") and insuranceCheck=="Insurance":
                            score="Red"

                        elif (dependants==3 or dependants==4) and yearsWorked >9 and age>=42 and (tier=="Tier-1" or tier=="Tier-3"):
                            score="Red"

                        elif (dependants==3 or dependants==4) and yearsWorked >9 and age<42 :
                            score="Red"

                        elif dependants<=4 and yearsWorked <=9 and age>=43:
                            score="Red" 

                    elif (hiringFunction=="Impact"):
                    
                        if dependants>4:
                            score="Green"

                        elif dependants==3 and (age>=24 and age <30) and maritalStatus=="Single":
                            score="Green"

                        elif dependants<=4 and age<24:
                            score="Green"

                        elif dependants<=3 and yearsWorked >7 and age>=30 and tier=="Tier-3":
                            score="Green"

                        elif dependants<=3 and yearsWorked <=7 and age>=30 :
                            score="Green"                        

                        elif dependants == 4 and (yearsWorked >2 and yearsWorked<=9) and age>=24 :
                            score="Amber"

                        elif dependants<=3 and yearsWorked >7 and age>=30 and (tier=="Tier-1" or tier=="Tier-2"):
                            score="Amber"                   

                        elif dependants == 4 and age>=24 and yearsWorked >9:
                            score="Red"

                        elif dependants == 4 and age>=24 and yearsWorked <=2:
                            score="Red"

                        elif dependants == 3 and (age>=24 and age<30) and maritalStatus == "Married" :
                            score="Red"

                        elif dependants <= 2 and (age>=24 and age<30):
                            score="Red"               
                    
                else:
                    score =""
               
                sql = "INSERT INTO candidate_information (Source,RFHnumber,ConsultantName,EmployeeName,EmployeeCode,HRname,HRcode,HiringFunction,HiringLocation,CityTier,Name,DOB,Email,Gender,Address,Mobile,Country,State,ZIP,MaritalStatus,Dependants,Aadhar,PAN,Years,Months,InsuranceCheck,ArmyCheck,ProfileScore,resume,FormStatus) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)";
                cursor.execute(sql, (source,RFHnumber,ConsultantName,employeeName,employeeCode,HRname,HRcode,hiringFunction,hiringLocation,tier,name,DOB,email,gender,address,mobile,country,state,ZIP,maritalStatus,dependants,aadhar,pan,yearsWorked,monthsWorked,insuranceCheck,armyCheck,score,blob,formStatus))
#                
                sql = "SELECT MAX(ID) FROM candidate_information";
                cursor.execute(sql)
                status=cursor.fetchone()             
                certiId = status.get('MAX(ID)')  ;
#            
                paddedID = str(certiId).zfill(7) 
                paddedID="ATS"+paddedID
                
                sql = "UPDATE candidate_information set CandidateId = %s WHERE candidate_information.ID =%s ";
                cursor.execute(sql,(paddedID,certiId))
                certiId=certiId               
###                
#                
                for i in range(len(sector)):   
                    sql = "INSERT INTO candidate_work (Sector,SubSector,Company,Designation,StartDate,EndDate,Salary,CandidateID) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)";
                    cursor.execute(sql, (sector[i],subSector[i],company[i],designation[i],startDate[i],endDate[i],annualSalary[i],paddedID))
##               
                for j in range(len(qualification)):                   
                    sql = "INSERT INTO candidate_education (Qualification,Year,Specialization,CandidateID) VALUES (%s,%s,%s,%s)";
                    cursor.execute(sql, (qualification[j],qualificationYear[j],qualSpecialization[j],paddedID))
                
                connection.commit()
                connection.close()
#                      
#            msg = Message("DPLI:Registered Succesfully",
#                  sender="dhruvbabbar349@gmail.com",
#                  recipients=["dhruvbabbar349@gmail.com"])
#            
#            msg.html = render_template('mail.html',     name=name,source=source,hiringLocation=hiringLocation,aadhar=aadhar,score=score,mobile=mobile)
#            mail.send(msg)
#                    
            return "registered"

@app.route('/ResumeForm')
def ResumeForm():
#        if request.method == 'POST':
#            print("inside post")
#            return redirect('/resume')
##            return "redirected"
#        else:
#            print("insde get")
        return redirect('resume')
        
        

@app.route('/resume',methods=['POST','GET'])
def resume():
        connection = pymysql.connect(host='localhost',
                             user='Springstudent',
                             password='Springstudent',
                             db='candidate',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
        if request.method == 'POST':           
            result = request.get_json(force=True)
            CandidateID = result.get('CandidateID')            
            print(CandidateID)
            with connection.cursor() as cursor:
            # Read records
                sql = "SELECT CandidateID FROM candidate_information ";
                cursor.execute(sql)               
                results=cursor.fetchall()  
               
                CandidateIds=[]
                for row in results:
                    ID=row.get('CandidateID')
                    CandidateIds.append(ID)
                
                formStatus=""
                if CandidateID in CandidateIds:  
                    print("candidate id is there")
                    print(CandidateID)
                    sql = "SELECT FormStatus FROM candidate_information WHERE CandidateID= %s ";                    
                    cursor.execute(sql,CandidateID)   
                    result=cursor.fetchone()
                    print("checking status")
                    formStatus= result.get('FormStatus')
                    connection.commit()
                    connection.close() 
                    print(formStatus)
                    status='OK'  
                    print(status)
                    return jsonify({'status':status,'formStatus':formStatus}) 
                elif CandidateID not in CandidateIds:
                    status='NOT'      
                    print(status)
                    return jsonify({'status':status})    
                   
        else:
            return render_template('resumeForm.html')
        
@app.route("/candidateFormResume/<CandidateID>")
def candidateFormResume(CandidateID):    
    resumeId=CandidateID
    print(resumeId)
    return render_template('candidateFormResume.html', resumeId=resumeId)

@app.route("/getData", methods=['POST'])
def status():  
            connection = pymysql.connect(host='localhost',
                             user='Springstudent',
                             password='Springstudent',
                             db='candidate',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
            result = request.get_json(force=True)
            CandidateID = result.get('CandidateID') 
            results=[]            
            with connection.cursor() as cursor:
            # Read a single record
                sql = "SELECT * FROM candidate_information WHERE CandidateID = %s";
                cursor.execute(sql, CandidateID)
                data = cursor.fetchone()

                sql = "SELECT * FROM candidate_work WHERE CandidateID = %s";
                cursor.execute(sql, CandidateID)
                workData = cursor.fetchall()
                
                sql = "SELECT * FROM candidate_education WHERE CandidateID = %s";
                cursor.execute(sql, CandidateID)
                educationData = cursor.fetchall()
                
                connection.commit()   
                connection.close()
            source=data['Source']
            RFHnumber=data['RFHnumber']
            consultantName=data['ConsultantName']
            employeeName=data['EmployeeName']
            employeeCode=data['EmployeeCode']
            HRname=data['HRname']
            HRcode=data['HRcode']
            hiringFunction=data['HiringFunction']
            hiringLocation=data['HiringLocation']
            Name=data['Name']
            DOB=data['DOB']
            Email=data['Email']
            Gender=data['Gender']
            Address=data['Address']
            Mobile=data['Mobile']
            Country=data['Country']
            State=data['State']
            ZIP=data['ZIP']
            maritalStatus=data['MaritalStatus']
            Dependants=data['Dependants']
            Aadhar=data['Aadhar']
            Pan=data['PAN']
            Years=data['Years']
            Months=data['Months']
            insuranceCheck=data['InsuranceCheck']   
            armyCheck=data['ArmyCheck']
            
            WorkSector=[]
            WorkSubSector=[]
            WorkCompany=[]
            WorkDesignation=[]
            WorkStartDate=[]
            WorkEndDate=[]
            WorkSalary=[]
            
            EduQualification=[]
            EduSpecialisation=[]
            EduYear=[]
            
           
            
            for row in workData:
                WorkSector.append(row.get('Sector'))
                WorkSubSector.append(row.get('SubSector'))
                WorkCompany.append(row.get('Company'))
                WorkDesignation.append(row.get('Designation'))
                WorkStartDate.append(row.get('StartDate'))
                WorkEndDate.append(row.get('EndDate'))
                WorkSalary.append(row.get('Salary'))
            
            for row in educationData:
                EduQualification.append(row.get('Qualification'))
                EduSpecialisation.append(row.get('Specialization'))
                EduYear.append(row.get('Year'))
                
            return jsonify({'source':source,'RFHnumber':RFHnumber,'consultantName':consultantName,'employeeName':employeeName,'employeeCode':employeeCode,'HRname':HRname,'HRcode':HRcode,'hiringFunction':hiringFunction,'hiringLocation':hiringLocation,'Name':Name,'DOB':DOB,'Email':Email,'Gender':Gender,'Address':Address,'Mobile':Mobile,'Country':Country,'State':State,'ZIP':ZIP,'maritalStatus':maritalStatus,'Dependants':Dependants,'Aadhar':Aadhar,'Pan':Pan,'Years':Years,'Months':Months,'insuranceCheck':insuranceCheck,'armyCheck':armyCheck,'WorkSector':WorkSector,'WorkSubSector':WorkSubSector,'WorkCompany':WorkCompany,'WorkDesignation':WorkDesignation,'WorkStartDate':WorkStartDate,'WorkEndDate':WorkEndDate,'WorkSalary':WorkSalary,'EduQualification':EduQualification,'EduSpecialisation':EduSpecialisation,'EduYear':EduYear})  
#            return "saved"

@app.route('/city',methods=['POST'])
def cityTier():     
            connection = pymysql.connect(host='localhost',
                             user='Springstudent',
                             password='Springstudent',
                             db='candidate',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
           
            city=[]
           
            with connection.cursor() as cursor:
            # Read a single record
                sql = "SELECT city FROM citytier";
                cursor.execute(sql)
                data = cursor.fetchall()
                
                for row in data:
                    val=row.get('city')
                    city.append(val)
                
                connection.commit()   
                connection.close()
            return jsonify({'city':city})
    
@app.route('/success/<int:result_id>')
def success(result_id):     
        result = result_id
        print("resuly_id")
        print(result)        
        return render_template('candidateForm.html')

            
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
