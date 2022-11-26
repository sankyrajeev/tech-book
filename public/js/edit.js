const editFormhandler = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector('#post-title').value; 
    const content = document.querySelector('#post-content').value; 
    const post_id = document.querySelector('#postId').value; 
    console.log( title, content )
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
document.querySelector('.edit').addEventListener('submit', editFormhandler);