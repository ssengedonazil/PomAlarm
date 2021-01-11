

  AlermSetFunction={
   sayWord: function ({word,rate,volume}) {
      msg=new SpeechSynthesisUtterance();
    v=window.speechSynthesis.getVoices();
    msg.voice=v[1];
    msg.voiceURI='native';
    msg.volume=volume;
    msg.rate=rate;
    msg.pitch=0.8;
    msg.text=word;
    msg.lang='en-US';
    speechSynthesis.speak(msg);
    },
    dayString: new Date(),
    day:  function() {  return  this.dayString.getDay()},
    date:  function() {  return  this.dayString.getDate()},
    min:  function() {  return  this.dayString.getMinutes()},
    hr:  function() {  return  this.dayString.getHours()},
    Years:  function() {  return  this.dayString.getFullYear()},
    getMonth:  function() {  return  this.dayString.getMonth()},
    dateAndTime: function () { return this.dayString.toLocaleString() },
    dayIndex:function (params) {
     return ["Sun","Mon", "Tue", "Web", "Thur", "Fri", "Sat"];
    },
    MonthIndex:function (params) {
     return ["JUN", "FEB", "MAR", "APR", "MAY", "JUN", "JLY", "AUG", "SEP", "OCT", "NOV", "DEC"];
    },
      remoteStore:function (params) {
        if(typeof params =='string'){
           return  params
        }else
        alert("Please function sets a String Not"+typeof params );
      },
      localStore:function (params) {
        if(typeof params =='string'){
           return  params
        }else
        alert("Please function sets a String Not"+typeof params );
      },
    modalActivate: function ({ from, StoreName }, callback) {
      
      
      try {
        if (typeof from == 'string') {
            orgnisedEventsTocall=[];
          if (from == 'Local') {
            FoundInEvents =(localStorage.getItem(StoreName));
            if(FoundInEvents!='' || FoundInEvents!=null){
            FoundInEvents = JSON.parse(FoundInEvents);
            if( Array.isArray(FoundInEvents)){
            FoundInEvents.reverse();
          for (let i = 0; i < FoundInEvents.length; i++) {
            const element = FoundInEvents[i];
            var {EventsDescription, Hours, Minutes, Years, month,day,Activation}=element;
            if (this.getMonth() == parseInt(month) && parseInt(Years) == this.Years() && day == this.date()) {
              // if(this.getMonth()==parseInt(month) && parseInt(Years)==this.Years() && day==this.date() && Hours==this.hr() && Minutes==this.min()){
             EventsDescription=EventsDescription.replace("helo","Hello,");
             EventsDescription=EventsDescription.replace("hello","Hello,");
                  orgnisedEventsTocall.push([Years,month,day,EventsDescription,i,StoreName]);
                
              }else{
                console.log("No events  yet To call ");
              }
              }
          }
          }else{
            console.log("Please not Events Created yet");
          }
          }else {

          }
          return callback(orgnisedEventsTocall);
          
        } else {
          alert("Please Data Should be in string Format");
        }

      } catch (error) {
        alert("Please let me know my errors " + error+" Modal Part");
      }
      
    },
    RemoteMachineStorage:function ({typeValue,AlarmType,StoreName}) {
        var Events=StoreName;
        if (typeof typeValue != "" ) {
          theStore = localStorage.getItem(Events)
          if (theStore != undefined || theStore != null) {
            redults=this.EventsLoopOrgiser(theStore, typeValue); 
            data = JSON.stringify(redults);
          } else {
            data=typeValue
            console.warn("New store Events created From remote");
          }
          localStorage.setItem(Events, data);
        }
        else {
        alert("Please provide a data (" + typeof typeValue + ") To be An object Or object Needed In form of String remote part");
      }
    }, EventsLoopOrgiser: function (theStore,typeValue) {
       FoundInEvents = JSON.parse(theStore);
            NewEventobject = JSON.parse(typeValue);
      FoundInEvents.reverse();
      for (let i = 0; i < NewEventobject.length; i++) {
        const element = NewEventobject[i];
        var { EventsDescription, Hours, Minutes, Years, month, day} = element;/// f will stand for
        let schecdual = FoundInEvents.filter(function (el) {
          /* check if the event already exits in */
          if (EventsDescription == el.EventsDescription && Hours == el.Hours && day == el.day && month == el.month && Years == el.Years && Minutes == el.Minutes) {
            return el
          } 
        });

        (schecdual.length == 0) && FoundInEvents.push(element);
      }
      return FoundInEvents;
    }
    ,
    LocalMachineStorage: function ({typeValue,StoreName,Sound}) {
      try {
        var Events=StoreName;
        if (typeof typeValue != "" ) {
          theStore = localStorage.getItem(Events)
          if (theStore != undefined || theStore != null) {
            results=this.EventsLoopOrgiser(theStore, typeValue); 
            data = JSON.stringify(results);
          } else {
            data=typeValue
            console.warn("New store Events created");
          }
          localStorage.setItem(Events, data);
        } else {
        alert("Please provide a data (" + typeof typeValue + ") To be An object Or object Needed In form of String");
      }
      } catch (error) {
        alert("please let me know my errors " + error);
      }
      
    }, DoneEvents: function (o, event) {
      localStorage.setItem(o, event); /** note  this is not in use yet */
    },
    RemoteStoreModal:function ({AlarmType,StoreName}) {
   this.localStoreModal({AlarmType:AlarmType,StoreName:StoreName});
    },
    truncate: function (string, ends) {
      strlen = string.length;
      results = string;
      if (strlen>ends) {
        results = string.substr(0,ends)+".......";
      } 
      return results;
    },

    localStoreModal:function ({AlarmType,StoreName,from}) {
      from = from || "Local";
      this.modalActivate({from:from,StoreName:StoreName},function(params) {
             i=0;
        r = setInterval(() => {
         clearInterval(this)
              countedEventsArray=[{}];
              eventsValue=params.length;
         
              if(i>=eventsValue){
                i=0;
              }else{
                if (AlarmType.includes('Alarm')) {
              /*TriggerClick() */;
              alert("Alarm Not Activated");
                } else {
                  locationStore = params[i][5];
                  getAllEventsAgain=localStorage.getItem(locationStore);
                  FindThePassedOnEvent = JSON.parse(getAllEventsAgain);
                  CurrentRingingEvents=FindThePassedOnEvent.filter(ev=>ev["RingIngCounts"]<=5);
                  if (CurrentRingingEvents.length > 0) {
                    if (i <= 1 && AlarmType.includes("modal")) { 
                              SetAlerm =AlermSetFunction.getQ("#mymodal")[0];
                              AlermSetFunction.getQ("#header-Content")[0].innerText = "Today's  Reminder";
                              ModalBody = AlermSetFunction.getQ("#mymodal>.modal-content")[0];
                      parentNode = SetAlerm.style.display = "block";
                      AtivatedEvents = ``;
                      const Icons = AlermSetFunction.Bells();

                      CurrentRingingEvents.forEach(ActiveEvents => {
                        var { EventsDescription, Hours, Minutes, Years, month ,day} = ActiveEvents;
                        MoreInfo = `Desctription:${EventsDescription} \n Date:${Years}-${month+1}-${day} \n Time:${Hours}:${Minutes}`;
                        AtivatedEvents += `<div class='SchedulList'>
                        <div class='AlarmDiscription'>${AlermSetFunction.truncate(EventsDescription, 12)}  madjj asdmjk asdjhkj  adajsk</div><div class='scdu' title='${MoreInfo}'> ${Icons[2]}</div></div>`;
                      });
                      return ModalBody.innerHTML = AtivatedEvents;
                    }
                  }
                  ringing = ( FindThePassedOnEvent[i]["RingIngCounts"]) >= 0 ? FindThePassedOnEvent[i]["RingIngCounts"] + 1 : 0;
                  FindThePassedOnEvent.reverse();
                  if (ringing<=5) {
                    FindThePassedOnEvent[i]["RingIngCounts"] = ringing;
                    AlermSetFunction.sayWord({word:`Event ${i+1}:`+params[i][3],rate:"0.8",volume:0.2});
                  }
                }
                i++;
              }
            }, 1000);
            
            
              });
    },
    
    Bells: function () {
     return bel1={
       1: `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<g id="Bell">
	<path d="M46.6674995,8.6586504c-0.5527992,0-1,0.4473-1,1c0,0.5527992,0.4472008,1,1,1
		c3.5185013,0,6.3808022,2.8622999,6.3808022,6.3809004c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1
		C55.0483017,12.4184504,51.2886009,8.6586504,46.6674995,8.6586504z"/>
	<path d="M8.9517002,17.0395508c0,0.5527,0.4471998,1,1,1c0.5527,0,1-0.4473,1-1
		c0-3.5186005,2.8622999-6.3809004,6.3808002-6.3809004c0.5527992,0,1-0.4472008,1-1c0-0.5527-0.4472008-1-1-1
		C12.7114,8.6586504,8.9517002,12.4184504,8.9517002,17.0395508z"/>
	<path d="M48.1431007,1.27785c-0.5527992,0-1,0.4473-1,0.9999999s0.4472008,1,1,1
		c6.7743988,0,12.2860985,5.5107002,12.2860985,12.2851c0,0.5527992,0.4473,1,1,1s1-0.4472008,1-1
		C62.4291992,7.6860499,56.0200005,1.27785,48.1431007,1.27785z"/>
	<path d="M16.8560009,2.2778499c0-0.5526999-0.4473-0.9999999-1.000001-0.9999999
		c-7.8769999,0-14.2852001,6.4081998-14.2852001,14.2851c0,0.5527992,0.4473001,1,1.0000001,1s1-0.4472008,1-1
		c0-6.7743998,5.5107002-12.2851,12.2852001-12.2851C16.4087009,3.2778499,16.8560009,2.83055,16.8560009,2.2778499z"/>
	<path d="M51.7932014,46.2020493c-0.1280022-0.3828011-0.3692017-0.6965981-0.6621017-0.9463997
		c0.0236015-0.6092987,0.0386009-1.2222977,0.0386009-1.8409996c0-13.6198997-5.641201-25.1546001-13.4345016-29.1104012
		c0.1161003-0.4706001,0.1844025-0.9601002,0.1844025-1.4666996c0-3.3774004-2.7380028-6.1154003-6.1154022-6.1154003
		s-6.1153984,2.7379999-6.1153984,6.1154003c0,0.5065994,0.0682983,0.9960995,0.1843987,1.4666996
		C18.0799007,18.2600498,12.4386997,29.7947502,12.4386997,43.41465c0,0.6187019,0.0150003,1.2317009,0.0386,1.8409996
		c-0.2929001,0.2498016-0.5340996,0.5635986-0.6620998,0.9463997l-2.8975,8.6665993
		c-0.4692001,1.4033012,0.5754004,2.8535004,2.0555,2.8535004h14.1247005c0.8610001,2.8908005,3.535799,5,6.7062988,5
		s5.8453026-2.1091995,6.7063026-5h14.1246986c1.4800987,0,2.5247002-1.4501991,2.0555-2.8535004L51.7932014,46.2020493z
		 M26.7959003,16.1219501l1.4443989-0.7332001l-0.3878994-1.5727005c-0.0841999-0.3413-0.1252003-0.6613998-0.1252003-0.9784994
		c0-2.2480001,1.8290005-4.0769005,4.0769997-4.0769005s4.0769997,1.8289003,4.0769997,4.0769005
		c0,0.3170996-0.0410004,0.6371994-0.1251984,0.9784994l-0.3879013,1.5727005L36.8125,16.1219501
		c7.2531013,3.6816006,12.3186989,14.9046993,12.3186989,27.2926998c0,0.4183006-0.0060997,0.8419991-0.0181007,1.2691002
		H14.4953003c-0.0120001-0.4271011-0.0181007-0.8507996-0.0181007-1.2691002
		C14.4771996,31.0266495,19.5428009,19.8035507,26.7959003,16.1219501z M31.8041992,60.7221489
		c-2.0464001,0-3.8094997-1.2355003-4.5824986-3h9.164999C35.6137009,59.4866486,33.8506012,60.7221489,31.8041992,60.7221489z
		 M52.7711983,55.6526489c-0.0500984,0.0695-0.1102982,0.0695-0.1359978,0.0695H38.8041992h-14H10.9731998
		c-0.0256996,0-0.0859003,0-0.1359997-0.0695c-0.0496998-0.0690994-0.0307999-0.1256981-0.0227003-0.1497993l2.8975-8.6665993
		c0.0229006-0.0681992,0.0866003-0.1141014,0.1588001-0.1141014h35.8667984c0.0722008,0,0.1359024,0.0459023,0.158802,0.1140022
    l2.8974991,8.6666985C52.8019981,55.5269508,52.8209,55.5835495,52.7711983,55.6526489z"/>`,
       
       2: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#FFAA00;" d="M256,100.174c-27.619,0-50.087-22.468-50.087-50.087S228.381,0,256,0s50.087,22.468,50.087,50.087
	S283.619,100.174,256,100.174z M256,33.391c-9.196,0-16.696,7.5-16.696,16.696s7.5,16.696,16.696,16.696
	c9.196,0,16.696-7.5,16.696-16.696S265.196,33.391,256,33.391z"/>
<path style="fill:#F28D00;" d="M256.006,0v33.394c9.194,0.003,16.69,7.5,16.69,16.693s-7.496,16.69-16.69,16.693v33.394
	c27.618-0.004,50.081-22.469,50.081-50.087S283.624,0.004,256.006,0z"/>
<path style="fill:#FFAA00;" d="M256,512c-46.043,0-83.478-37.435-83.478-83.478c0-9.228,7.467-16.696,16.696-16.696h133.565
	c9.228,0,16.696,7.467,16.696,16.696C339.478,474.565,302.043,512,256,512z"/>
<path style="fill:#F28D00;" d="M322.783,411.826h-66.777V512c46.042-0.004,83.473-37.437,83.473-83.478
	C339.478,419.293,332.011,411.826,322.783,411.826z"/>
<path style="fill:#FFDA44;" d="M439.652,348.113v-97.678C439.642,149,357.435,66.793,256,66.783
	C154.565,66.793,72.358,149,72.348,250.435v97.678c-19.41,6.901-33.384,25.233-33.391,47.017
	c0.01,27.668,22.419,50.075,50.087,50.085h333.913c27.668-0.01,50.077-22.417,50.087-50.085
	C473.036,373.346,459.063,355.014,439.652,348.113z"/>
<path style="fill:#FFAA00;" d="M439.652,348.113v-97.678C439.642,149,357.435,66.793,256,66.783v378.432h166.957
	c27.668-0.01,50.077-22.417,50.087-50.085C473.036,373.346,459.063,355.014,439.652,348.113z"/>
<path style="fill:#FFF3DB;" d="M155.826,267.13c-9.228,0-16.696-7.467-16.696-16.696c0-47.022,28.011-89.283,71.381-107.641
	c8.446-3.587,18.294,0.326,21.88,8.836c3.62,8.51-0.358,18.294-8.836,21.88c-31.012,13.142-51.033,43.337-51.033,76.925
	C172.522,259.663,165.054,267.13,155.826,267.13z"/>
<g>
</g>

</svg>`
      }
    },

              TotalDays: function (month) {  return new Date(this.Years(), month, 0).getDate() },
              
              SetMydate: function (a) {
                AlermSetFunction.getQ('#selectTheAlarmMonth').forEach(ele => ele.addEventListener("change", function () {
                console.log(a)
                days="<option selected   >Date</option>"
                  selectedhValue = this.value
                    for (let i = 1; i <= 60; i++) {
                      if (i <= a.TotalDays(selectedhValue)) {
                        DayToday = a.day() == i ? "selected" : "";
                        days += `<option ${DayToday} value='${i}'>${i}</option>`;
                      }
                    }
                    /*return days */;
                    AlermSetFunction.getQ('#daysSElectNode')[0].innerHTML=`<select name='day' class='CreateTheAlarmOnClock' id='selectTheAlarmDay'>${days}</select>`
                  }));
                },
    
    SetTheAlerm: function (dataTtpe = { Form: "", defaultForm: {set:"",attr:""} }) {
      SetAlerm = document.getElementById("mymodal")
      document.getElementById("header-Content").innerText = "Please Set Your Alerm"
      ModalBody = AlermSetFunction.getQ("#mymodal>.modal-content")[0];
      parentNode = SetAlerm.style.display ="block" ;
      if (dataTtpe.defaultForm.set==true) {
      Hours = "<option selected disabled>Hours</option>";
      min = "<option selected disabled>minutes</option>";
      Years = "<option selected disabled>Years</option>";
      Month = "<option selected disabled>Month</option>";
      dayIndex =this.dayIndex();
      MonthIndex = this.MonthIndex();
      days = "<option selected disabled>Day</option>";
      
      for (let i = 0; i <= 11; i++) {
        Hours += `<option value='${i}'>${i}</option>`;
        MonthToday = this.getMonth() == i ? "selected" : "";
        m=MonthIndex[i];
        Month += `<option ${MonthToday} value='${i}'>${m}</option>`;
      }
      for (let i = 1; i <= 60; i++) {
        if (i <= 7) {
          DayToday = this.day() == i ? "selected" : "";
          days += `<option ${DayToday} value='${i}'>${dayIndex[i-1]}</option>`;
        }
        min += `<option value='${i}'>${i}</option>`;
        YearsSetUp = `20${i}`
        if (this.Years() <= parseInt(YearsSetUp)) { CurrentYrs = this.Years() == YearsSetUp ? "selected" : ""; Years += `<option ${CurrentYrs} value='${YearsSetUp}'>${YearsSetUp}</option>`; }
         
      }
        const Icons = AlermSetFunction.Bells();
        htmlToSetAlerm = `<form PomAlermIng="PomAlermIng"  ${dataTtpe.defaultForm.attr}>
      <div id='eventContainer'>
      <div class='form-contentClock '>
      <textarea row=2 column=6 placeholder='Enter Your events' name='EventsDescription'>textarea</textarea></div>
      <div class='inlineFormate'>
      <div class='form-content'><select name='Hours' class='CreateTheAlarmOnClock' id='selectTheAlarmHour'>${Hours}</select></div>
      <div class='form-content'><select name='Minutes' class='CreateTheAlarmOnClock' id='selectTheAlarmMin'>${min}</select></div>
      <div class='form-content'><select name='Years' class='CreateTheAlarmOnClock' style='display:none' id='selectTheAlarmYears' >${Years}</select></div> 
      <div class='form-content'><select name='month' class='CreateTheAlarmOnClock' id='selectTheAlarmMonth'>${Month}</select></div> 
      <div class='form-content' id='daysSElectNode'></div>
      </div>
      <div class='CreateTheEventsContainer'><button type='submit' id="CreateTheEventsContainerButton">${Icons[1]}</buton></div>
      </div>
      </form>
      `;
      } else {
        htmlToSetAlerm=`Please Set your Form ||  set to the default`
        if(dataTtpe.Form)
          htmlToSetAlerm = `${Form}`
      }
      setTimeout(() => {
        ModalBody.innerHTML = htmlToSetAlerm
      this.SetMydate.bind(null, this)()
      }, 500);
      
    },
    
    modalClosIng: function () {
      CloseModel = AlermSetFunction.getQ("#mymodal>.close")[0];
        parentNode=CloseModel.parentElement.style.display="NONE";
    },
    DefaultSubmition: function (calback) {

      setTimeout(() => {
        e = AlermSetFunction.getQ(`[PomAlermIng="PomAlermIng"]`)
      if (e) {
       e[0].addEventListener("submit", function (params) {
         calback(AlermSetFunction.FindFieldValues(params,function (params) {return  params})) /** callback is a reason returning  All form Values  */
        })
      } else 
        alert("Please Never grab The Form")
      
      }, 1000);
    },
    FindFieldValues:function (params,clbck) {
       params.preventDefault()
         Value = params.srcElement;
         valueToeach = [{}];
         for (let i = 0; i < Value.length; i++) {
           const element = Value[i];
           tag = element.tagName
           eleName = element.name
           eleValue=(element.value);
           if (tag.match(/input|select|textarea/i)) 
             valueToeach[0][eleName] = eleValue;
           
      }
      return clbck(JSON.stringify(valueToeach))
    }
    ,
    getQ: function (PomDefines) { return document.querySelectorAll(PomDefines) },
    ClockLogic:function (params) {
      this.TriggerClick(this.sounds())
                   const Deg=6
                   const hr=document.querySelector("#hr")
                   const mn=document.querySelector("#mn")
                   const sc=document.querySelector("#sc")
                   setInterval(() => {
                     let day= new Date()
                     let hh=day.getHours()*30;
                     let mm=day.getMinutes()*Deg;
                     let ss=day.getSeconds()*Deg;
                     hr.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`
                     mn.style.transform=`rotateZ(${mm}deg)`
                     sc.style.transform=`rotateZ(${ss}deg)`   
                    });
    },
    sounds: function () {return sound2 = new Howl({src: [ 'audio/clock-ticking-2.wav'],loop:true,html5:  true,valume:0.1,sprite: {one: [50, 5950],},})},
    TriggerClick:  function(sound2){
   r= setInterval(async () => {
       await sound2.stop()
       sound2.play("one")
        }, 1000);

        document.querySelector("*").addEventListener("click",function(){
           setTimeout(() => {
            clearInterval(r)
        }, 5000);})
      
}

  }
// AlermSetFunction.modal()
loaderSet = AlermSetFunction.getQ(".PomDefines");
function trapMyFunctionality(cl){
  ObjectSetUp={AlermSetFunction:cl.AlermSetFunction,...cl}
  return function (cl) {
    /** this will call the function dimically bassing on attribut id ie( this will mean id is the function to be called ) */
    GetNameOfMethod = this.id;
    posibleFuncTotake = `ObjectSetUp.AlermSetFunction.${GetNameOfMethod}("","block")`;
    eval(posibleFuncTotake);
   }
}
loaderSet.forEach(everDIv => everDIv.addEventListener("click", trapMyFunctionality({AlermSetFunction:AlermSetFunction})));

window.onload= async function() {
  await AlermSetFunction.ClockLogic();
                  }
