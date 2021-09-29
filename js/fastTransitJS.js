function loader(){
    $(document).ready(function() {

        var _0x1569=['203001QoVhgg','1SjjspC','127854SjFSfd','11KRYesZ','514141PcoeRH','281868GsBAMQ','3505rduHUH','103110RzwCLd','1uQTPAa','97816FuCThN'];(function(_0x5ece2d,_0x15cb74){var _0x296c0f=_0x597e;while(!![]){try{var _0x292059=-parseInt(_0x296c0f(0xd2))+parseInt(_0x296c0f(0xd7))+-parseInt(_0x296c0f(0xd6))*parseInt(_0x296c0f(0xd5))+parseInt(_0x296c0f(0xd3))*parseInt(_0x296c0f(0xd0))+-parseInt(_0x296c0f(0xd8))*parseInt(_0x296c0f(0xd9))+-parseInt(_0x296c0f(0xd4))+parseInt(_0x296c0f(0xd1));if(_0x292059===_0x15cb74)break;else _0x5ece2d['push'](_0x5ece2d['shift']());}catch(_0x577bfb){_0x5ece2d['push'](_0x5ece2d['shift']());}}}(_0x1569,0x23699));function _0x597e(_0x5286cf,_0xc74941){return _0x597e=function(_0x156910,_0x597e9a){_0x156910=_0x156910-0xd0;var _0xe35923=_0x1569[_0x156910];return _0xe35923;},_0x597e(_0x5286cf,_0xc74941);}var username2='fcheck',password2='p@ssth1sw0rdfCh3ckk';
        $('#example').DataTable({
            "processing": true,
            "ajax": {
                url: "http://localhost/ftp/api.php",
                dataSrc: '',
                headers: {
                "Authorization": "Basic " + btoa(username2 + ":" + password2)
            },
            },
            "columns": [{
                      "defaultContent": "<span data-toggle='modal' data-target='#updatebookingmodal' id='updateReservationList' class='fa fa-pencil-square-o fa-lg'></span>"
                },{
                    "data": "emp_id"
                },
                {
                    "data": "firstname"
                },
                {
                    "data": "lastname"
                },
                {
                    "data": "immediate_head"
                },
                {
                    "data": "department"
                },
                {
                    "data": "position"
                },
                {
                  "defaultContent": "<button data-toggle='modal' data-target='#dispatchingmodal' class='btn btn-primary btn-sm'>Dispatch</button>"
                }]
        });
       
    });
  }
  function loader2(){
    $(document).ready(function() {

        var _0x1569=['203001QoVhgg','1SjjspC','127854SjFSfd','11KRYesZ','514141PcoeRH','281868GsBAMQ','3505rduHUH','103110RzwCLd','1uQTPAa','97816FuCThN'];(function(_0x5ece2d,_0x15cb74){var _0x296c0f=_0x597e;while(!![]){try{var _0x292059=-parseInt(_0x296c0f(0xd2))+parseInt(_0x296c0f(0xd7))+-parseInt(_0x296c0f(0xd6))*parseInt(_0x296c0f(0xd5))+parseInt(_0x296c0f(0xd3))*parseInt(_0x296c0f(0xd0))+-parseInt(_0x296c0f(0xd8))*parseInt(_0x296c0f(0xd9))+-parseInt(_0x296c0f(0xd4))+parseInt(_0x296c0f(0xd1));if(_0x292059===_0x15cb74)break;else _0x5ece2d['push'](_0x5ece2d['shift']());}catch(_0x577bfb){_0x5ece2d['push'](_0x5ece2d['shift']());}}}(_0x1569,0x23699));function _0x597e(_0x5286cf,_0xc74941){return _0x597e=function(_0x156910,_0x597e9a){_0x156910=_0x156910-0xd0;var _0xe35923=_0x1569[_0x156910];return _0xe35923;},_0x597e(_0x5286cf,_0xc74941);}var username2='fcheck',password2='p@ssth1sw0rdfCh3ckk';
        $('#example2').DataTable({
            "processing": true,
            "ajax": {
                url: "http://localhost/ftp/api.php",
                dataSrc: '',
                headers: {
                "Authorization": "Basic " + btoa(username2 + ":" + password2)
            },
            },
            "columns": [{
                    "data": "emp_id"
                },
                {
                    "data": "firstname"
                },
                {
                    "data": "lastname"
                },
                {
                    "data": "immediate_head"
                },
                {
                    "data": "department"
                },
                {
                    "data": "position"
                },
                {
                  "defaultContent": "<button data-toggle='modal' data-target='#cancelmodal' class='btn btn-danger btn-sm'>Cancel</button><button data-toggle='modal' data-target='#endmodal' style='margin-left:5px;'class='btn btn-success btn-sm'>END</button>"
                }]
        });
    });
  }
  function loader3(){
    $(document).ready(function() {

        var _0x1569=['203001QoVhgg','1SjjspC','127854SjFSfd','11KRYesZ','514141PcoeRH','281868GsBAMQ','3505rduHUH','103110RzwCLd','1uQTPAa','97816FuCThN'];(function(_0x5ece2d,_0x15cb74){var _0x296c0f=_0x597e;while(!![]){try{var _0x292059=-parseInt(_0x296c0f(0xd2))+parseInt(_0x296c0f(0xd7))+-parseInt(_0x296c0f(0xd6))*parseInt(_0x296c0f(0xd5))+parseInt(_0x296c0f(0xd3))*parseInt(_0x296c0f(0xd0))+-parseInt(_0x296c0f(0xd8))*parseInt(_0x296c0f(0xd9))+-parseInt(_0x296c0f(0xd4))+parseInt(_0x296c0f(0xd1));if(_0x292059===_0x15cb74)break;else _0x5ece2d['push'](_0x5ece2d['shift']());}catch(_0x577bfb){_0x5ece2d['push'](_0x5ece2d['shift']());}}}(_0x1569,0x23699));function _0x597e(_0x5286cf,_0xc74941){return _0x597e=function(_0x156910,_0x597e9a){_0x156910=_0x156910-0xd0;var _0xe35923=_0x1569[_0x156910];return _0xe35923;},_0x597e(_0x5286cf,_0xc74941);}var username2='fcheck',password2='p@ssth1sw0rdfCh3ckk';
        $('#example3').DataTable({
            "processing": true,
            "ajax": {
                url: "http://localhost/ftp/api.php",
                dataSrc: '',
                headers: {
                "Authorization": "Basic " + btoa(username2 + ":" + password2)
            },
            },
            "columns":[{
                    "data": "emp_id"
                },
                {
                    "data": "firstname"
                },
                {
                    "data": "lastname"
                },
                {
                    "data": "immediate_head"
                },
                {
                    "data": "department"
                },
                {
                    "data": "position"
                },
                {
                  "defaultContent": "<button data-toggle='modal'; data-target='#bookinglistdetails'; class='btn btn-secondary btn-sm'>Details</button>"
                }]
        });
       
    });
  }

function loader4(){

  var _0x1569=['203001QoVhgg','1SjjspC','127854SjFSfd','11KRYesZ','514141PcoeRH','281868GsBAMQ','3505rduHUH','103110RzwCLd','1uQTPAa','97816FuCThN'];(function(_0x5ece2d,_0x15cb74){var _0x296c0f=_0x597e;while(!![]){try{var _0x292059=-parseInt(_0x296c0f(0xd2))+parseInt(_0x296c0f(0xd7))+-parseInt(_0x296c0f(0xd6))*parseInt(_0x296c0f(0xd5))+parseInt(_0x296c0f(0xd3))*parseInt(_0x296c0f(0xd0))+-parseInt(_0x296c0f(0xd8))*parseInt(_0x296c0f(0xd9))+-parseInt(_0x296c0f(0xd4))+parseInt(_0x296c0f(0xd1));if(_0x292059===_0x15cb74)break;else _0x5ece2d['push'](_0x5ece2d['shift']());}catch(_0x577bfb){_0x5ece2d['push'](_0x5ece2d['shift']());}}}(_0x1569,0x23699));function _0x597e(_0x5286cf,_0xc74941){return _0x597e=function(_0x156910,_0x597e9a){_0x156910=_0x156910-0xd0;var _0xe35923=_0x1569[_0x156910];return _0xe35923;},_0x597e(_0x5286cf,_0xc74941);}var username2='fcheck',password2='p@ssth1sw0rdfCh3ckk';
/* Formatting function for row details - modify as you need */
function format ( d ) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px; width : 100%;">'+
      '<tr>'+
          '<td>Full name:</td>'+
          '<td>'+d.firstname+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extension number:</td>'+
          '<td>'+d.lastname+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extra info:</td>'+
          '<td>And any further details here (images etc)...</td>'+
      '</tr>'+
  '</table>';
}

$(document).ready(function() {
  var table = $('#example').DataTable( {
      "ajax": {
        url: "http://localhost/ftp/api.php",
        dataSrc: '',
        headers: {
        "Authorization": "Basic " + btoa(username2 + ":" + password2)
    },
    },
      "columns": [
          {
              "className":      'details-control',
              "orderable":      false,
              "data":           null,
              "defaultContent": ''
          },
          { "data": "emp_id" },
          { "data": "firstname" },
          { "data": "lastname" },
          { "data": "immediate_head" },
          { "data": "department" },
          { "data": "position" }
      ],
      "order": [[1, 'asc']]
  } );
   
  // Add event listener for opening and closing details
  $('#example tbody').on('click', 'td.details-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row( tr );

      if ( row.child.isShown() ) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      }
      else {
          // Open this row
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
      }
  } );
} );
}

function loader5(){

  var _0x1569=['203001QoVhgg','1SjjspC','127854SjFSfd','11KRYesZ','514141PcoeRH','281868GsBAMQ','3505rduHUH','103110RzwCLd','1uQTPAa','97816FuCThN'];(function(_0x5ece2d,_0x15cb74){var _0x296c0f=_0x597e;while(!![]){try{var _0x292059=-parseInt(_0x296c0f(0xd2))+parseInt(_0x296c0f(0xd7))+-parseInt(_0x296c0f(0xd6))*parseInt(_0x296c0f(0xd5))+parseInt(_0x296c0f(0xd3))*parseInt(_0x296c0f(0xd0))+-parseInt(_0x296c0f(0xd8))*parseInt(_0x296c0f(0xd9))+-parseInt(_0x296c0f(0xd4))+parseInt(_0x296c0f(0xd1));if(_0x292059===_0x15cb74)break;else _0x5ece2d['push'](_0x5ece2d['shift']());}catch(_0x577bfb){_0x5ece2d['push'](_0x5ece2d['shift']());}}}(_0x1569,0x23699));function _0x597e(_0x5286cf,_0xc74941){return _0x597e=function(_0x156910,_0x597e9a){_0x156910=_0x156910-0xd0;var _0xe35923=_0x1569[_0x156910];return _0xe35923;},_0x597e(_0x5286cf,_0xc74941);}var username2='fcheck',password2='p@ssth1sw0rdfCh3ckk';
/* Formatting function for row details - modify as you need */
function format ( d ) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px; width : 100%;">'+
      '<tr>'+
          '<td>Full name:</td>'+
          '<td>'+d.firstname+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extension number:</td>'+
          '<td>'+d.lastname+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extra info:</td>'+
          '<td>And any further details here (images etc)...</td>'+
      '</tr>'+
  '</table>';
}

$(document).ready(function() {
  var table = $('#example').DataTable( {
      "ajax": {
        url: "http://localhost/ftp/api.php",
        dataSrc: '',
        headers: {
        "Authorization": "Basic " + btoa(username2 + ":" + password2)
    },
    },
      "columns": [
          {
              "className":      'details-control',
              "orderable":      false,
              "data":           null,
              "defaultContent": ''
          },
          { "data": "emp_id" },
          { "data": "firstname" },
          { "data": "lastname" },
          { "data": "immediate_head" },
          {
            "defaultContent": "<button data-toggle='modal' data-target='#exampleModal' class='btn btn-secondary btn-sm'>View Rates</button>"
          }
      ],
      "order": [[1, 'asc']]
  } );
   
  // Add event listener for opening and closing details
  $('#example tbody').on('click', 'td.details-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row( tr );

      if ( row.child.isShown() ) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      }
      else {
          // Open this row
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
      }
  } );
} );
}
function lastloader(){

  var _0x1569=['203001QoVhgg','1SjjspC','127854SjFSfd','11KRYesZ','514141PcoeRH','281868GsBAMQ','3505rduHUH','103110RzwCLd','1uQTPAa','97816FuCThN'];(function(_0x5ece2d,_0x15cb74){var _0x296c0f=_0x597e;while(!![]){try{var _0x292059=-parseInt(_0x296c0f(0xd2))+parseInt(_0x296c0f(0xd7))+-parseInt(_0x296c0f(0xd6))*parseInt(_0x296c0f(0xd5))+parseInt(_0x296c0f(0xd3))*parseInt(_0x296c0f(0xd0))+-parseInt(_0x296c0f(0xd8))*parseInt(_0x296c0f(0xd9))+-parseInt(_0x296c0f(0xd4))+parseInt(_0x296c0f(0xd1));if(_0x292059===_0x15cb74)break;else _0x5ece2d['push'](_0x5ece2d['shift']());}catch(_0x577bfb){_0x5ece2d['push'](_0x5ece2d['shift']());}}}(_0x1569,0x23699));function _0x597e(_0x5286cf,_0xc74941){return _0x597e=function(_0x156910,_0x597e9a){_0x156910=_0x156910-0xd0;var _0xe35923=_0x1569[_0x156910];return _0xe35923;},_0x597e(_0x5286cf,_0xc74941);}var username2='fcheck',password2='p@ssth1sw0rdfCh3ckk';
/* Formatting function for row details - modify as you need */
function format ( d ) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px; width : 100%;">'+
      '<tr>'+
          '<td>Full name:</td>'+
          '<td>'+d.firstname+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extension number:</td>'+
          '<td>'+d.lastname+'</td>'+
      '</tr>'+
      '<tr>'+
          '<td>Extra info:</td>'+
          '<td>And any further details here (images etc)...</td>'+
      '</tr>'+
  '</table>';
}

$(document).ready(function() {
  var table = $('#example').DataTable( {
      "ajax": {
        url: "http://localhost/ftp/api.php",
        dataSrc: '',
        headers: {
        "Authorization": "Basic " + btoa(username2 + ":" + password2)
    },
    },
      "columns": [
          {
              "className":      'details-control',
              "orderable":      false,
              "data":           null,
              "defaultContent": ''
          },
          { "data": "emp_id" },
          { "data": "firstname" },
          { "data": "lastname" },
          { "data": "immediate_head"},
          { "data": "department"},
          { "data": "position"},
          {
            "defaultContent": "<p style='color:green;'>Available</p>"
          }
          
      ],
      "order": [[1, 'asc']]
  } );
   
  // Add event listener for opening and closing details
  $('#example tbody').on('click', 'td.details-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row( tr );

      if ( row.child.isShown() ) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      }
      else {
          // Open this row
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
      }
  } );
} );
}
  function initMap() {
    const cebu = { lat: 10.330496168631607, lng: 123.90891646557355 };
    const samarone = { lat: 10.3193159, lng: 123.9100739 };
    const samartwo = { lat: 10.3093159, lng: 123.9120739 };
    const samarthree = { lat: 10.3193159, lng: 123.9300739 };
    const samarfour = { lat: 10.3393159, lng: 123.9400739 };
    const samarfive = { lat: 10.3393159, lng: 123.9300739 };
    const samarsix = { lat: 10.3393159, lng: 123.9100739 };
    const samarseven = { lat: 10.3293159, lng: 123.9000739 };
    const samareight = { lat: 10.3493159, lng: 123.9200739 };
    const samarnine = { lat: 10.3493159, lng: 123.9300739 };


    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: cebu,
      streetViewControl: false,
      mapTypeControl: false
    });
    const contentString =
    '<div class="card" style="width: 18rem; height: 430px; width: 400px;">' +
    '<center><img src="1x13.jpg" height="100px" width="100px" class="rounded-circle" style="margin-top: 20px;" alt="..."></center>' +
    '<div class="card-body">' +
      '<table class="table table-hover">' +
        '<tbody>' +
          '<tr>'+
           '<td>Salesman : </td>' +
            '<td>Otto</td>' +
          '</tr>' +
          '<tr>' +
            '<td>Customer : </td>' +
            '<td>Thornton</td>' +
          '</tr>' +
          '<tr>' +
            '<td>Address : </td>' +
            '<td>@twitter</td>' +
          '</tr>' +
          '<tr>' +
            '<td>Delivery date : </td>' +
            '<td>Otto</td>' +
          '</tr>' +
          '<tr>' +
            '<td>Time spent : </td>' +
            '<td>Thornton</td>' +
          '</tr>' +
          '<tr>' +
            '<td>Distance travel : </td>' + 
            '<td>@twitter</td>' +
          '</tr>' +
          '<tr>' +
            '<td>Sales : </td>' + 
            '<td>@twitter</td>' +
          '</tr>' +
        '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>';
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    
   
    const marker = new google.maps.Marker({
      position: cebu,
      map,
      label : "1",
    });
    const marker2 = new google.maps.Marker({
        position: samarone,
        map,
        label : "2",
       
    });
    const marker3 = new google.maps.Marker({
      position: samartwo,
      map,
      label : "3",
    });
    const marker4 = new google.maps.Marker({
      position: samarthree,
        map,
        label : "4",
    });
    const marker5 = new google.maps.Marker({
      position: samarfour,
      map,
      label : "5",
    });
    const marker6 = new google.maps.Marker({
      position: samarfive,
      map,
      label : "6",
    });
    const marker7 = new google.maps.Marker({
      position: samarsix,
      map,
      label : "7",
    });
    const marker8 = new google.maps.Marker({
      position: samarseven,
      map,
      label : "8",
    });
    const marker9 = new google.maps.Marker({
      position: samareight,
      map,
      label : "9",
    });
    const marker10 = new google.maps.Marker({
      position: samarnine,
      map,
      label : "10",
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    marker2.addListener("click", () => {
      infowindow.open({
        anchor: marker2,
        map,
        shouldFocus: false,
      });
    });
    marker3.addListener("click", () => {
      infowindow.open({
        anchor: marker3,
        map,
        shouldFocus: false,
      });
    });
    marker4.addListener("click", () => {
      infowindow.open({
        anchor: marker4,
        map,
        shouldFocus: false,
      });
    });
    marker5.addListener("click", () => {
      infowindow.open({
        anchor: marker5,
        map,
        shouldFocus: false,
      });
    });
    marker6.addListener("click", () => {
      infowindow.open({
        anchor: marker6,
        map,
        shouldFocus: false,
      });
    });
    marker7.addListener("click", () => {
      infowindow.open({
        anchor: marker7,
        map,
        shouldFocus: false,
      });
    });
    marker8.addListener("click", () => {
      infowindow.open({
        anchor: marker8,
        map,
        shouldFocus: false,
      });
    });
    marker9.addListener("click", () => {
      infowindow.open({
        anchor: marker9,
        map,
        shouldFocus: false,
      });
    });
    marker10.addListener("click", () => {
      infowindow.open({
        anchor: marker10,
        map,
        shouldFocus: false,
      });
    });

  }
  function initMap2() {
    // The location of philippines samar
    const uluru = { lat: 10.330496168631607, lng: 123.90891646557355 };
    // The map, centered at philippines samar
    const map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 13,
      center: uluru,
    });
  }
  function myFunction() {
    var x = document.getElementById("mySelect").value;
    if (x == "Select service type") {
      document.getElementById("tableContent").style.display = "none";
    }
    else{document.getElementById("tableContent").style.display = "inline";}
  }
  function nextStep(){
    var pressedButton = $('#next').attr("value");
    if (pressedButton == 'nextStep') {
      document.getElementById('stepLabel').innerHTML = 'Step 2/2';
      document.getElementById('next').innerHTML = "Prev Step";
      document.getElementById('next').value = "prevStep";
      document.getElementById('confirmButton').style.display = 'inline';
      document.getElementById('firstCard').style.display = 'none';
      document.getElementById('secondCard').style.display = 'inline';

    }
    else{
      document.getElementById('stepLabel').innerHTML = 'Step 1/2';
      document.getElementById('next').innerHTML = "Next Step";
      document.getElementById('next').value = "nextStep";
      document.getElementById('confirmButton').style.display = 'inline';
      document.getElementById('firstCard').style.display = 'inline';
      document.getElementById('secondCard').style.display = 'none';
    }
  }
  function closeModal(){
    $('#updatebookingmodal').modal('hide');
  }
  function alertMessage(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }