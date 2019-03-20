$(document).ready(function(){
   // alert("welcome to express");
});

function onEdit(a){
   $.ajax(
      {
         type: 'PUT',
         url: '/api/edit/'+a
      }
   );

   window.location.replace('/');
}

function onDelete(id){
   $.ajax(
      {
         type: 'DELETE',
         url: '/api/delete/'+ id
      }
   );

   window.location.replace('/');
}