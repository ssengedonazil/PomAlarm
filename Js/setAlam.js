


 local=AlermSetFunction.remoteStore("StoreMyAlermEvents");
 remote=AlermSetFunction.localStore("RemoteEvents");

function trapMyFunctionality2()  {
    AlermSetFunction.SetTheAlerm({ defaultForm: { set: 1, attr: "class='hdasjhas asda' dtrtra='sjkahjs'" } })// call the modal first others waits
    AlermSetFunction.DefaultSubmition(function (MyJasonValue) {
        // the are the values from the form MyJasonValue in a string form of json
        // theValueObject = MyJasonValue; //  use any thing u want to your data
        // AlarmType alerm should be one of two [Alarm/voiceRemaider,modal]
         AlermSetFunction.LocalMachineStorage({typeValue:MyJasonValue,StoreName:local});// set new Events OR scheduals
    })
}
AlermSetFunction.localStoreModal({AlarmType:["voiceRemaider","modal"],StoreName:local});

// typeValue = `[{"EventsDescription":"What's That bros ","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0"},{"EventsDescription":"What's That bro2 ","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0"},{"EventsDescription":"What's That bro1 ","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0"}
// ]`
// typeValue=`[{"EventsDescription":"What's That bro ","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0"},{"EventsDescription":"What's That bro","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0"},{"EventsDescription":"What's That bro","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0"},{"EventsDescription":"What's That bro","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0","day":"3"},{"EventsDescription":"What's That bro","Hours":"Hours","Minutes":"minutes","Years":"2021","month":"0","day":"3"}]`



// AlermSetFunction.RemoteMachineStorage({typeValue,StoreName:remote});
// AlermSetFunction.RemoteStoreModal({AlarmType:["voiceRemaider","modal"],StoreName:remote});
document.querySelectorAll(".openModel").forEach(everDIv => everDIv.addEventListener("click", trapMyFunctionality2));


