 
function addFields()
{
          
            var x = 2//for company add fields
            var y=1;     //for education add fields
            var z=1; //for certification add fields  
            var max_fields      = 10; //maximum input boxes allowed
            var maxqual_fields  = 10;
            var maxcerti_fields = 10;
            var companywrapper = $(".companyWrap"); //Fields wrapper
            var qulaification_wrap = $(".qualification-wrapper"); //Fields wrapper
            var add_company      = $(".add_company_button"); //Add button ID
            
            var add_qualification =$(".add_qualification_button "); //Add button ID
            var add_certification = $(".add_certification_button "); //Add button ID
            var remove_certification = $(".remove_certification_button "); //remove button ID
            var certification_wrap = $(".certification-wrapper"); //Fields wrapper
            
            $(add_company).click(function(e){ //on add input button click
                e.preventDefault();
                if(x < max_fields)
                { //max input box allowed
                    //text box increment
                    $(companywrapper).append('<div class="main_company_wrap"><hr class="mb-4"><div class="row"><div class="col-md-6 mb-1 form-group" id="WorkSector"><label for="sector">Sector<span style="color:red;">*</span></label><select class="custom-select d-block w-100 sel-sector form-control" name="sector[]" id="'+x+'" onchange="getSectorValue(this)"><option value="">Please choose One...</option><option value="Agribusiness">Agribusiness/Food Systems</option><option value="Aviation">Aviation</option><option value="Construction">Construction</option><option value="Financial Institutions" >Financial Institutions </option><option value="Healthcare" >Healthcare</option><option value="Insurance" >Insurance</option><option value="Marine" >Marine</option><option value="Public Sector" >Public Sector</option><option value="Railway">Railway</option><option value="Technology" >Technology</option></select><small class="text-muted"></small></div><div class="col-md-6 mb-1 form-group"  ><label for="subSector">Sub Sector<span style="color:red;">*</span></label><select class="custom-select d-block w-100 sub-sec " name="subSector[]" id="subsectorDropdown'+x+'" disabled ><option value="0">Please choose One...</option><option value="Accidental">Accidental</option><option value="Agriculture">Agriculture</option><option value="General" >General</option><option value="Health" >Health</option> <option value="Life Insurance" >Life Insurance</option><option value="Travel" >Travel</option> <option value="Other" >Other</option></select><small class="text-muted"></small></div></div><div class="row"><div class="col-md-6 mb-1 form-group"><label for="companyName">Company Name<span style="color:red;">*</span></label><input type="text" class="form-control companyName" name="companyName[]" id="CompanyName" ><small class="text-muted"></small></div><div class="col-md-6 mb-1 form-group"><label for="designation" >Designation<span style="color:red;">*</span></label><input type="text" class="form-control designationName" name="designation[]" id="Designation" ><small class="text-muted"></small></div></div><div class="row"><div class="col-md-6 mb-3 form-group"><label for="startDate">Start Date<span style="color:red;">*</span></label><input type="text" name="startDate[]" id="StartDate'+x+'" placeholder="mm/dd/yyyy"  style="background-color: white;" class="form-control datepicker" readonly /></div><div class="col-md-6 mb-3 form-group"><label for="endDate">End Date<span style="color:red;">*</span></label><input type ="text" name="endDate[]" id="EndDate'+x+'"  placeholder="mm/dd/yyyy"  style="background-color: white;" class="form-control datepicker "  readonly   /><small class="text-muted"></small></div></div><div class="row"><div class="col-md-6 mb-1 form-group"><label for="salary" >Last Annual Drawn Salary<span style="color:red;">*</span></label><input type="text" class="form-control lastSalary" id="salary'+x+'" name="salary[]" placeholder="" value="" ><small class="text-muted"></small></div></div><button class="remove_company_button ">Remove Field</button> </div> '); //add input box
                
                   
                        var startdate= "#StartDate" +x;
                        var enddate= "#EndDate" +x;                       
                        $(startdate).datepicker({
                            uiLibrary: 'bootstrap4',
                            maxDate: new Date()
                        });
                        var missingDate="Please choose a date."
                        $(startdate).datepicker()
                        .on('change', function(e)
                        {
                            var start = new Date($(startdate).val());                           
                            if(start)
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
                                $(this).parents('.form-group').find('.text-muted').text(missingDate);
                                $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                            }
                            
                        });
                       
                        
                          
                        $(enddate).datepicker({uiLibrary: 'bootstrap4',maxDate: new Date()});
                         $(enddate).datepicker()
                        .on('change', function(e)
                        {
                            var end = new Date($(enddate).val());                            
                            if(end)
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
                                $(this).parents('.form-group').find('.text-muted').text(missingDate);
                                $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                            }
                            
                        });
                        x++;
                   
                }
            });
            $(companywrapper).on("click",".remove_company_button", function(e){ //user click on remove text
                e.preventDefault(); $(this).parent('div').remove(); x--;
            })
             
             $(document).on('change', ".sel-sector", function ()
                {
                    var SectorValue=this.value;
                    if(SectorValue)
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
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });       
            
            //fix this disabled problem
            $(document).on('change', ".sub-sec", function ()
                {
                    var SubSectorValue=this.value;
                    if(SubSectorValue)
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
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
           $(document).on('keyup', ".companyName", function ()
            {
                var company = this.value; //extract value  
                if(company)
                {
                    if(isValidName(company))
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
            $(document).on('keyup', ".designationName", function ()
            {
                var designation = this.value; //extract value  
                if(designation)
                {
                    if(isValidName(designation))
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
            
            $(document).on('keyup', ".lastSalary", function ()
            {
                var lastSalary = this.value; //extract value  
                if(lastSalary)
                {
                    if(isValidCode(lastSalary))
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
            
           
            
           
            $(add_qualification).click(function(e){ //on add input button click
                e.preventDefault();
                if(y<maxqual_fields)
                { //max input box allowed
                    //text box increment
                    $(qulaification_wrap).append('<div class="qual-main"><hr class="mb-4"><div class="row"><div class="col-md-6 mb-1 form-group"><label for="sector">What is your educational qualification ?<span style="color:red;">*</span></label><select class="custom-select d-block w-100 sel-qualification form-control" name="qualification[]" id="qualification" onchange="" required><option value="" selected="selected" disabled="disabled">-- select one --</option><option value="No formal education">No formal education</option><option value="Primary education">Primary education</option><option value="Secondary education">Secondary education or high school</option><option value="GED">GED</option><option value="Vocational qualification">Vocational qualification</option><option value="Bachelors degree"></option><option value="Bachelors degree">Bachelors degree</option><option value="Masterdegree">Masters degree</option><option value="Doctorate or higher">Doctorate or higher</option></select><small class="text-muted"></small></div><div class="col-md-6 mb-1 form-group"><label for="yearOfCompletion">Year of Completion<span style="color:red;">*</span></label><input type="text" class="form-control CompletionYear" name="yearOfCompletion[]" id="yearOfCompletion" placeholder="" value="" required><small class="text-muted"></small></div></div><div class="row"><div class="col-md-6 mb-1 form-group"><label for="specialisation">Specialization<span style="color:red;">*</span></label><input type="text" class="form-control Specialisation" name="specialisation[]" id="specialisation" placeholder="" value="" required><small class="text-muted"></small></div><hr class="mb-4"></div> <button class="remove_qualification_button floar-right ">Remove Field</button></div>'); 
                    
                    y++; //counter for fields
                }
            });

            $(qulaification_wrap).on("click",".remove_qualification_button", function(e){ //user click on remove text
               e.preventDefault(); $(this).parent('div').remove(); y--;
            })
            $(document).on('change', ".sel-qualification", function ()
                {
                    var qualification=this.value;
                    if(qualification)
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
                        $(this).parents('.form-group').find('.text-muted').text(settings.ErrorDropdown);
                        $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                    }
                });
            $(document).on('keyup', ".CompletionYear", function ()
            {
                var CompletionYear = this.value; //extract value  
                
                if(CompletionYear)
                {
                    if(isValidCode(CompletionYear))
                    {
                        if(!isValidYear(CompletionYear))
                            {
                                $(this).parents('.form-group').addClass('has-danger');
                                $(this).addClass('form-control-danger');
                                $(this).parents('.form-group').find('.text-muted').text(settings.ErrorYear);
                                $(this).parents('.form-group').find('.text-muted').css('display', 'block');
                            }
                        else{
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
            
            $(document).on('keyup', ".Specialisation", function ()
            {
                var Specialisation = this.value; //extract value  
                if(Specialisation)
                {
                    if(isValidName(Specialisation))
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
}
    