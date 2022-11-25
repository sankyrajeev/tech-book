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