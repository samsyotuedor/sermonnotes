var tracks = []
function save() {
    let sermondate = document.getElementById('tdate').value;
    let preacher = document.getElementById('preacher').value;    
    let hymns  = document.getElementById('hym').value;
    let scriptureredng =document.getElementById('scriptredng').value;
    let sermontopic = document.getElementById('sermtpc').value;
    let notes  = document.getElementById('text').value;
    let closngsong = document.getElementById('closngs').value;

    let sermon ={
        sermondate:sermondate,
        preacher:preacher,
        hymns:hymns, 
        scriptureredng:scriptureredng,
        sermontopic:sermontopic,
        notes:notes,
	    closngsong:closngsong
    }

    tracks.push(sermon)
    document.getElementById('notes').innerHTML = tracks.length;
    
}

function viewlist() {
    document.getElementById('recordlist').style.display= 'none'
    document.getElementById('rec').style.display = 'block'
    let myviewpg ='';
    for (i = 0; i <tracks.length; i++){
     let sermondate=(tracks[i].sermondate);
     let preacher = (tracks[i].preacher); 
     let hymns = (tracks[i].hymns);
     let scriptureredng = (tracks[i].scriptureredng);
     let closngsong =(tracks[i].closngsong);
     let notes=(tracks[i].notes);
     let sermontopic=(tracks[i].sermontopic);
	myviewpg  += sermondate +' ' + preacher  +' ' +hymns+' '+ scriptureredng +' ' + closngsong +' ' +notes +' ' +sermontopic+'<br>';
 }
     document.getElementById('rec').innerHTML = myviewpg; 

   
}























 // document.getElementById('recordlist' ).style.display= 'none'
 // document.getElementById('rec' ).style.display= 'block'






















 // document.getElementById('recordlist' ).style.display= 'none'
 // document.getElementById('rec' ).style.display= 'block'

   
}























 // document.getElementById('recordlist' ).style.display= 'none'
 // document.getElementById('rec' ).style.display= 'block'






















 // document.getElementById('recordlist' ).style.display= 'none'
 // document.getElementById('rec' ).style.display= 'block'