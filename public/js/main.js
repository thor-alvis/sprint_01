$(document).ready(function(){
  // APPEND NEW POST TO PAGE
  $('#publish').click(function(e){
    var content = $('#newPost').val();
    console.log(content);
    var addToPage = '<div class="userPost">' + content + '</div>';
    console.log(addToPage);
    $('#allPosts').append(addToPage);
    e.currentTarget.value = " ";

    // $.post('/', function(res){
    //   console.log('res =', res);
    //   const $appendContent = '<div class="userPost">' + $textbox + '</div>';
    //   $('.allPosts').append($appendContent);
    // });
  });
});
