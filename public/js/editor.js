const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id'); 

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE', 
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete'); 
        }
    }
};

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);

document.querySelector('.delete').addEventListener('click', delButtonHandler);



const newFormHandler = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector('#post-title').value.trim(); 
    const content = document.querySelector('#post-content').value.trim(); 

    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST', 
            body: JSON.stringify({ title, content }), 
            headers: {
                'Content-Type': 'application/json', 
            }, 
        });
        if (response.ok) {
            document.location.replace('/dashboard'); 
        }else {
            console.log(err)
        }
    }
}; 
document.querySelector('.new-blog-form').addEventListener('submit', editFormhandler);

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

