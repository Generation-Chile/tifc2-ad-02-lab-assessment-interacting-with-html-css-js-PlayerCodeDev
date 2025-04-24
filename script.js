document.getElementById('title').textContent = 'Adios';
document.getElementById('orange').style.color = 'orange';

const title = document.getElementById('title');

title.onclick = () => {
    title.style.color = 'brown';
}