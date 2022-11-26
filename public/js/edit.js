const editFormhandler = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector('#post-title').value; 
    const content = document.querySelector('#post-content').value; 
    const post_id = document.querySelector('#postId').value; 
    console.log( title, content )
   
         await fetch(`/api/posts/${post_id}`, {
            method: 'PUT', 
            body: JSON.stringify({ title, content }), 
            headers: {
                'Content-Type': 'application/json'
            },
        });
      
            document.location.replace('/dashboard'); 
        
};

document.querySelector('.new-blog-form').addEventListener('submit', editFormhandler);