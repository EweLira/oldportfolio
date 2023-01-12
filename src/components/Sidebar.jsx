import Avatar from '../img/perfil.jpg';
import '../styles/components/sidebar.sass';
import InformartionContainer from './InformationContainer';

import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
    return (
        <aside id = "sidebar">
            <img src={Avatar} alt="Ewellyn" />
            <p className="title">Desenvolvedora</p>
            <SocialNetworks/>
            <InformartionContainer/>
            <a href="" className="btn">Download currículo</a>
            </aside>
    );
};
export default Sidebar