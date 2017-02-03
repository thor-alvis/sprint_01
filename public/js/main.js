$(document).ready(function(){
  // APPEND NEW POST TO PAGE
  $('#publish').click(function(e){
    let $username = $('#username').text();
    let $title = $('#title').val();
    console.log($title);
    let $content = $('#newPost').val();
    console.log($content);
    let $data = {
      username: $username,
      posts: [{
         title: $title,
         content: $content
        //  likes: null
       }]
    };
    console.log($data);
    $.post('/blogs', {data: $data}, function(res){
      console.log('res =', res);
      const $addToPage = `<div class="userPost">${$title}<br>${$content}</div>
      <div><button class="comment">comment</button><button class="delete">delete</button><button class="like">like</button></div>`;
      console.log($addToPage);
      $('#allPosts').append($addToPage);
      e.currentTarget.value = " ";
    });
  });
});
