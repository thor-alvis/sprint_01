$(document).ready(function(){
  // APPEND NEW POST TO PAGE
  $('#publish').click(function(e){
    let $content = $('#newPost').val();
    console.log($content);
    const $addToPage = `<div class="userPost">${$content}</div>
    <div><button class="comment">comment</button><button class="delete">delete</button><button class="like">like</button></div>`;
    console.log($addToPage);
    $('#allPosts').append($addToPage);
    e.currentTarget.value = " ";

    // $.post('/', function(res){
    //   console.log('res =', res);

    // });
  });
});
