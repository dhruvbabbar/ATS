 
function validate()
{
     var settings = {
              //set #id for hiring
                hiring:"#hiringFunction",
                hiringLocation : "#hiringLocation",
                //set id for RFA 
                RFA: "#RFHnumber",
                ErrorTextRFA : "Please enter a valid RFA number.",
                ErrorTextEmpty : "Cannot be empty",
                //set #id for consultant name
                consultantName: "#consultantName",
                ErrorAlpha : "Please enter only  characters",
                ErrorNumeric : "Please enter only numeric characters",
                ErrorTextRFAConsulantEmpty : "Cannot be empty",
                ErrorDropdown : "Please choose one.",
                //set #id for employee name
                employeeName : "#employeeName",
                EmployeeCode : "#EmployeeCode",
                //set #id for HR
                LineHrName : "#HRname",
                LineHrCode :"#HRCode",
                    
                //candidate details 
                CandidateName: "#cand_name",
                DOB : '#DOB',
                Mobile:"#mobile",
                ErrorTextMobile:"Please enter a valid phone number.",
                ErrorTextMobileLength:"Mobile number cannot exceed 10 characters",
           
                emailID: '#email',
                ErrorTextEmail: 'Please enter a valid email address. (email@domain.com)',
                
                gender : "#gender-check",
                ErrorRadio : "Please choose one.",
                    
                Address:"#address",
                ErrorAddressLength:"Address cannot exceed 200 characters.",
                    
                Country:"#country", 
                State:"#state",
                    
                ZIP: "#zip",
                ZipError : "Please enter a valid Zip Code.",
                ZipErrorLength :"Zip Code cannot exceed six characters.",
                
                MaritalStatus:"#maritalStatus",
                    
                Dependants:"#dependants",
                ErrorDependants:"Cannot exceed 100.",
                
                Aadhar:"#aadhar",
                ErrorAadhar :"Please enter a valid Aadhar number.",
                ErrorAadharLength :"Aadhar cannot exceed 12 characters.",
                
                PAN:"#pan",
                ErrorPan:"Please enter a valid PAN number",
                ErrorPanLength:"PAN Number cannot exceed 10 characters.",
                  
                //work experience details    
                YearsWorked: "#years",
                MonthsWorked: "#months",
                ErrorMonthsLength: "Number of months cannot exceed 12.",                    
                InsuranceCheck:"#CheckInsurance",
                ArmyCheck:"#CheckArmy",
                
                ErrorYear:"Please enter a valid year.",
                    
                //Previous Comapany Details
                Sector:".",
                Resume:'#resume',
                ErrorFileFormat:"Please select a file with valid extensions. (.pdf or .doc or .docx)",
                    
               
               //  set #id for validation password
               passwordID: '#inputPassword',
               //  set text for validation password
               ErrorTextPassword: 'Must be 7-20 characters long.',
                //  set value required chars for validation password
               MinCharsPass: '7',
               //  set #id for validation custom
               Custom: '#inputCustom',
               //  set text for validation password
               ErrorTextCustom: 'Must be 5-20 characters long custom.',
               //  set value required chars for validation custom form
               MinCharsCustom: '5'
                }
                $(settings.RFA).keyup(function()
                {
                    var RFA = $.trim($(settings.RFA).val()); //extract value  
                    if(RFA)
                    {
                        if(isValidRFA(RFA))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextRFA);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                $(settings.consultantName).keyup(function(e)
                {
                    var ConsultantName = $.trim($(settings.consultantName).val()); //extract value  
                    if(ConsultantName)
                    {
                        if(isValidName(ConsultantName))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorAlpha);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                            e.preventDefault();
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                $(settings.employeeName).keyup(function()
                {
                    var EmployeeName = $.trim($(settings.employeeName).val()); //extract value  
                    if(EmployeeName)
                    {
                        if(isValidName(EmployeeName))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorAlpha);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                $(settings.LineHrName).keyup(function()
                {
                    var LineHrName = $.trim($(settings.LineHrName).val()); //extract value  
                    if(LineHrName)
                    {
                        if(isValidName(LineHrName))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorAlpha);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
            //employee code
                $(settings.EmployeeCode).keyup(function()
                {
                    var EmployeeCode = $.trim($(settings.EmployeeCode).val()); //extract value  
                    if(EmployeeCode)
                    {
                        if(isValidCode(EmployeeCode))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorNumeric);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //hrcode
                $(settings.LineHrCode).keyup(function()
                {
                    var LineHrCode = $.trim($(settings.LineHrCode).val()); //extract value  
                    if(LineHrCode)
                    {
                        if(isValidCode(LineHrCode))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorNumeric);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for hiring function
                $(settings.hiring).change(function()
                {
                    var hire = $.trim($(settings.hiring).val()); //extract value  
                    if(hire==0)
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                });
                //for hiring location
                $(settings.hiringLocation).change(function()
                {
                    var hiringLocation = $.trim($(settings.hiringLocation).val()); //extract value  
                    if(!hiringLocation)
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                });
                //for candidate name
                $(settings.CandidateName).keyup(function()
                {
                    var CandidateName = $.trim($(settings.CandidateName).val()); //extract value  
                    if(CandidateName)
                    {
                        if(isValidName(CandidateName))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorAlpha);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for email
                $(settings.emailID).keyup(function()
                {
                    var emailID = $.trim($(settings.emailID).val()); //extract value  
                    if(emailID)
                    {
                        if(isValidEmail(emailID))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmail);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for gender
                $(".gender-check").change(function()
                {
                    var gender= document.querySelector('input[name="gender"]:checked').value;
                    if(gender)
                    {
                       $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                    else
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorRadio);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for address
                $(settings.Address).keyup(function()
                {
                    var Address = $.trim($(settings.Address).val()); //extract value  
                    if(Address)
                    {
                        if(Address.length<=200)
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorAddressLength);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for mobile
                $(settings.Mobile).keyup(function()
                {
                    var Mobile = $.trim($(settings.Mobile).val()); //extract value  
                    if(Mobile)
                    {
                        if(Mobile.length>10)
                        {
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextMobileLength);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                        else
                        {
                            if(isValidMobile(Mobile))
                            {
                                $(this).parents('.form-group').addClass('has-success');
                                $(this).addClass('form-control-success');
                                $(this).parents('.form-group').removeClass('has-danger');
                                $(this).removeClass('form-control-danger');
                                $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                            }
                            else
                            {
                                $(this).parents('.form-group').addClass('has-danger');
                                $(this).addClass('form-control-danger');
                                $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextMobile);
                                $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                            }
                        }
                        
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for country
                $(settings.Country).change(function()
                {
                    var Country = $.trim($(settings.Country).val()); //extract value  
                    if(Country=='')
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                });
                //for state
                $(settings.State).change(function()
                {
                    var State = $.trim($(settings.State).val()); //extract value  
                    if(State=='')
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                });
                //for zip
                $(settings.ZIP).keyup(function()
                {
                    var ZIP = $.trim($(settings.ZIP).val()); //extract value  
                    if(ZIP)
                    {
                        if(ZIP.length>6)
                        {
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ZipErrorLength);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                        else
                        {
                            if(isValidZip(ZIP))
                            {
                                $(this).parents('.form-group').addClass('has-success');
                                $(this).addClass('form-control-success');
                                $(this).parents('.form-group').removeClass('has-danger');
                                $(this).removeClass('form-control-danger');
                                $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                            }
                            else
                            {
                                $(this).parents('.form-group').addClass('has-danger');
                                $(this).addClass('form-control-danger');
                                $(this).parents('.form-group').find('.text-muted').text(settings.ZipError);
                                $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                            }
                        }
                        
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for marital status
                $(settings.MaritalStatus).change(function()
                {
                    var MaritalStatus = $.trim($(settings.MaritalStatus).val()); //extract value  
                    if(MaritalStatus=='')
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                });
                //for dependants
                $(settings.Dependants).keyup(function()
                {
                    var Dependants = $.trim($(settings.Dependants).val()); //extract value  
                    if(Dependants)
                    {
                        if(isValidCode(Dependants))
                        {
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                                
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorNumeric);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
            
                //for aadhar
                $(settings.Aadhar).keyup(function()
                {
                    var Aadhar = $.trim($(settings.Aadhar).val()); //extract value  
                    if(Aadhar)
                    {
                        if(isValidAadhar(Aadhar))
                        {
                            if(Aadhar.length==12)
                                {
                                    $(this).parents('.form-group').addClass('has-success');
                                    $(this).addClass('form-control-success');
                                    $(this).parents('.form-group').removeClass('has-danger');
                                    $(this).removeClass('form-control-danger');
                                    $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                                }
                            else
                                {
                                    $(this).parents('.form-group').addClass('has-danger');
                                    $(this).addClass('form-control-danger');
                                    $(this).parents('.form-group').find('.text-muted').text(settings.ErrorAadharLength);
                                    $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                                }
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorAadhar);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for PAN
                $(settings.PAN).keyup(function()
                {
                    var PAN = $.trim($(settings.PAN).val()); //extract value  
                    if(PAN)
                    {
                        if(isValidPan(PAN))
                        {
                            if(PAN.length==10)
                                {
                                    $(this).parents('.form-group').addClass('has-success');
                                    $(this).addClass('form-control-success');
                                    $(this).parents('.form-group').removeClass('has-danger');
                                    $(this).removeClass('form-control-danger');
                                    $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                                }
                            else
                                {
                                    $(this).parents('.form-group').addClass('has-danger');
                                    $(this).addClass('form-control-danger');
                                    $(this).parents('.form-group').find('.text-muted').text(settings.ErrorPanLength);
                                    $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                                }
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorPan);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for years worked
                $(settings.YearsWorked).keyup(function()
                {
                    var YearsWorked = $.trim($(settings.YearsWorked).val()); //extract value  
                    if(YearsWorked)
                    {
                        if(isValidCode(YearsWorked))
                        {   
                            $(this).parents('.form-group').addClass('has-success');
                            $(this).addClass('form-control-success');
                            $(this).parents('.form-group').removeClass('has-danger');
                            $(this).removeClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorNumeric);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for months worked
                $(settings.MonthsWorked).keyup(function()
                {
                    var MonthsWorked = $.trim($(settings.MonthsWorked).val()); //extract value  
                    if(MonthsWorked)
                    {
                        if(isValidCode(MonthsWorked))
                        {   
                            if(MonthsWorked>12)
                            {
                                $(this).parents('.form-group').addClass('has-danger');
                                $(this).addClass('form-control-danger');
                                $(this).parents('.form-group').find('.text-muted').text(settings.ErrorMonthsLength);
                                $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                            }
                            else
                            {
                                $(this).parents('.form-group').addClass('has-success');
                                $(this).addClass('form-control-success');
                                $(this).parents('.form-group').removeClass('has-danger');
                                $(this).removeClass('form-control-danger');
                                $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                            }
                            
                        }
                        else{
                            $(this).parents('.form-group').addClass('has-danger');
                            $(this).addClass('form-control-danger');
                            $(this).parents('.form-group').find('.text-muted').text(settings.ErrorNumeric);
                            $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                        }
                    }
                    else{
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorTextEmpty);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for insurance background check
                $(settings.InsuranceCheck).change(function()
                {
                    var InsuranceCheck= document.querySelector('input[name="insuranceCheck"]:checked').value;
                    if(InsuranceCheck)
                    {
                       $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                    else
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorRadio);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
                //for army background check
                $(settings.ArmyCheck).change(function()
                {
                    var ArmyCheck= document.querySelector('input[name="ArmyCheck"]:checked').value;
                    if(ArmyCheck)
                    {
                       $(this).parents('.form-group').addClass('has-success');
                        $(this).addClass('form-control-success');
                        $(this).parents('.form-group').removeClass('has-danger');
                        $(this).removeClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').css('display', 'none');
                    }
                    else
                    {
                        $(this).parents('.form-group').addClass('has-danger');
                        $(this).addClass('form-control-danger');
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorRadio);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
}