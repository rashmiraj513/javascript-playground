import '@fortawesome/fontawesome-free/css/all.css';
import './css/styles.css';
import Modal from './componets/Modal';
import IdeaForm from './componets/IdeaForm';
import IdeaList from './componets/IdeaList';

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
