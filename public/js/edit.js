const editFormhandler = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector('#post-title').value; 
    const content = document.querySelector('#post-content').value; 
    const post_id = document.querySelector('#postId').value; 
    

    await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      document.location.replace('/dashboard');
    };

document.querySelector('.edit').addEventListener('submit', editFormhandler);



