    //captcha
    let captcha;
    let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    var gencaptcha=document.getElementById("generated-captcha");
    var enteredcaptcha=document.getElementById("entered-captcha");

    generate = () => {
        let first = alphabets[Math.floor(Math.random() * alphabets.length)];
        let second = Math.floor(Math.random() * 10);
        let third = Math.floor(Math.random() * 10);
        let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
        let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
        let sixth = Math.floor(Math.random() * 10);
        captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
        gencaptcha.value = captcha;
        enteredcaptcha.value = '';
    }

    enteredcaptcha.onkeyup = function() {
    if (enteredcaptcha.value==gencaptcha.value){
        capterror.classList.remove("invalid");
        capterror.classList.add("valid");
        } else {
        capterror.classList.remove("valid");
        capterror.classList.add("invalid");
            }
        }

    function resetfunction(){
        document.getElementById("signupform").reset();
        //then
        generate();
    }

    //Jquery to show the password
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#pass');

    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    //Jquery to show the confirm password
    const togglecPassword = document.querySelector('#togglecPassword');
    const cpassword = document.querySelector('#conpass');

    togglecPassword.addEventListener('click', function (e) {
        const ctype = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
        cpassword.setAttribute('type', ctype);
        this.classList.toggle('fa-eye-slash');
    });

    //for xi and xii hide-unhide    
    var getbranch = document.getElementById('for_xi_xii');
    var getcls = document.getElementById("classteach");
    var getstream = document.getElementById('streamhigher');

    function forselect(){
        if (getcls.value==="XI" || getcls.value==="XII"){
            getbranch.style.display="block";
            getbranch.style.display="flex";
        }
        else
            getbranch.style.display="none";
    }

    //subject
    var subj=null;
    var subjKG = [ "Maths", "English", "General_Awareness", "Environmental_Science", "Hindi", "Language_Arts", "Character_Building", "Art","Practical_Life","Physical_Education"];
    var subjlowerprimarycls = [ "Maths", "Moral_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies", "Science"];
    var subjhigherprimarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Computer_Science", "General_Knowledge", "Environmental_Studies"];
    var subjlowersecoundarycls = [ "Maths", "Moral_Science", "Social_Science", "English", "Hindi", "Sanskit", "French", "German", "Computer_Science", "General_Knowledge", "Environmental_Studies"];
    var subjhighcls = [ "Science", "Hindi", "English", "Computer_Science", "Social_Science", "Biology", "Chemistry", "Physics"];
    var subjcommerce = [ "Physical_Education", "Accountancy", "Economics", "Business_Studies", "Economics", "Mathematics", "Informatics_Practices", "English", "Hindi"];
    var subjpcm = [ "Physics", "Chemistry", "English", "Mathematics", "Computer_Science", "Hindi", "Physical_Education"];
    var subjpcb = [ "Biology", "Physics", "Chemistry", "English", "Computer_Science", "Hindi", "Physical_Education"];
    var subjpcmb = [ "Mathematics", "Biology", "Physics", "Chemistry", "English", "Computer_Science", "Hindi", "Physical_Education"];
    var subjhumanities = [ "History", "Geography", "Political_Science", "Psychology", "Sociology", "English", "Hindi", "Sanskrit", "Physical_Education"];

    function forselectsubj(){
        if (getcls.value==="Pre-KG" || getcls.value==="KG" || getcls.value==="UKG")
            subj=subjKG;   
        else if (getcls.value==="I" || getcls.value==="II" || getcls.value==="III")
            subj=subjlowerprimarycls;
        else if (getcls.value==="IV" || getcls.value==="V")
            subj=subjhigherprimarycls;
        else if (getcls.value==="VI" || getcls.value==="VII" || getcls.value==="VIII")
            subj=subjlowersecoundarycls;
        else if (getcls.value==="IX" || getcls.value==="X")
            subj=subjhighcls;
        else if (getcls.value==="XI" || getcls.value==="XII"){
            if (getstream.value==="PCM")
                subj=subjpcm;
            else if (getstream.value==="PCB")
                subj=subjpcb;
            else if (getstream.value==="Commerce")
                subj=subjcommerce;
            else if (getstream.value==="Humanities")
                subj=subjhumanities;
            else
                subj=subjpcmb;
            }
        $("#teachsubj").empty();
        for (var i = 0; i < subj.length; i++) {
            var checkBox=`<input type="checkbox" id="${subj[i]}" value="${subj[i]}" name="${subj[i]}" onclick=ifchecked()><label for="${subj[i]}">${subj[i]}</label><br/>`;
            $("#teachsubj").append($(checkBox));
        }
    }

    //add more subject 
    var extrasubj=document.getElementById("extrasubj");
    var moresubjCount=0;
    var addsubj='';
    function onclickadd(){
        $("#extrasubj").empty();
        extrasubj.style.display="flex";
        extrasubj.style.flexDirection="column";
        extrasubj.style.padding="1rem";  
        addsubj = addsubj+`<label style="padding:0.5rem;"> Subject Name</label><div style="display:flex;flex-direction:row-reverse;"><input type="button" value=" Remove " style="width:8rem;" onclick="removesubjfunc('extrasubject${moresubjCount}');ifchecked();"><input type="button" value=" Add " style="width:4rem;" onclick="addsubjfunc('extrasubject${moresubjCount}');ifchecked();"><input type="text" id="extrasubject${moresubjCount}" name="extrasubject${moresubjCount}" placeholder=" Enter Subject Name " style="width:100%;"></div><br>`;
        moresubjCount++;
        $("#extrasubj").append($(addsubj));
        // var button = `<br><label for="otherspecify">Not in list? Specify others subject?</label><br/><input type="button" id="otherspecify" value="Click here to add one more subject!" onclick="onclickadd()"/>`;
        // $("#extrasubj").append($(button));
    }

    //other-subject
    var subjarray=[];    
    // add subject
    function addsubjfunc(subjid){
        var getvalue = document.getElementById(subjid).value;
		if (getvalue!=""){
			subjarray.push(getvalue);
			subjarray = [... new Set(subjarray)];
		}
    }

    //remove subject function
        Array.prototype.remove = function() {
            var what, a = arguments, L = a.length, ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                    }
                }
            return this;
        };

    // remove subject working
    function removesubjfunc(subjid){
        subjarray.remove(document.getElementById(subjid).value);
    }

    //hide and show subject code
    var displayContent=document.getElementById("showsubj");
    var displayContentTitle=document.getElementById("showsubj_title");
    displayContentTitle.style.display = "none";
    displayContent.style.display = "none";

    function ifchecked() {
        var showsubj='';
        var countsubj=0;
        for(var i=0;i<subj.length;i++){
            if(document.getElementById(subj[i]).checked == true){
                showsubj=showsubj+`<label class="subcodelabel" id='subjectname${countsubj}'>${subj[i]} </label><input type="text"  id="subjectcodeinput${countsubj}" placeholder=" ${subj[i]} subject code" style="padding-bottom:0.5rem;"><br>`;
                countsubj++;               
            }
        }
        
        othershowsubj='';
        //other subject
        for(var i=0;i<subjarray.length;i++){
            othershowsubj=othershowsubj+`<label class="subcodelabel" id='subjectname${i+countsubj}'>${subjarray[i]} </label><input type="text"  id="subjectcodeinput${i+countsubj}" placeholder=" ${subjarray[i]} subject code" style="padding-bottom:0.5rem;"><br>`;
            countsubj++;               
            }
        $("#showsubj").empty();
        $("#showsubj").append($(showsubj));
        $("#showsubj").append($(othershowsubj));
        displayContentTitle.style.display = "block";
        displayContent.style.display = "block";
        
        if (countsubj==0){
        displayContent.style.display = "none";
        displayContentTitle.style.display = "none";
        }
    }    

    //always run at beginning
    generate();
    forselect();
    forselectsubj();



    //emil pop
    function emailverify(){
        
        
    }

    // email popup
    // getting the value of the emailbuttn
    // var emailverify = document.getElementById("emailverify");

    // Get the button that opens
    var btn = document.getElementById("verifyemail");

    // Get the <span> element that closes the memail diloag box
    var span = document.getElementsByClassName("Cancelreg")[0];

    // When the user clicks on the button, open the email dilog box
    // btn.onclick = function() {
    //   emailverify.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the close
    // span.onclick = function() {
    //   emailverify.style.display = "none";
    // }