import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link, animateScroll as scroll} from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

class Portal extends Component{
    render(){
        return(
        <div>
            <Head/>
            <Contents/>
        </div>

            )
    }
}

class Head extends Component{
    render(){
        return(
            <div>
                <NavWrapper/>
            </div>
        )
    }
}

class Contents extends Component{
    render(){
        return(
            <div className="contents">
                <Section id="inicio">
                    <h1>Início</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi. Aenean sit amet tellus nec mauris bibendum rutrum eu sollicitudin enim. Mauris dignissim scelerisque mauris, auctor imperdiet leo elementum non. Praesent faucibus ligula non imperdiet facilisis. Nam nibh nisl, bibendum placerat fringilla eu, vehicula vitae tortor. Nunc condimentum ultricies pretium. Cras eget imperdiet lectus. Suspendisse tincidunt lorem eu dolor iaculis, a accumsan ipsum vulputate. Maecenas pellentesque, mauris in semper commodo, nisi arcu pharetra sapien, nec aliquet libero eros ut metus. Duis ultricies elit et justo tristique, quis ultricies tortor ultrices. Vestibulum at sodales lacus. Quisque semper eros maximus lectus molestie ultricies. Maecenas facilisis dictum vulputate. Ut feugiat molestie ornare. Suspendisse rutrum sodales vehicula. In sit amet sem ligula. Fusce pulvinar enim urna, eget posuere justo scelerisque id. Phasellus egestas sapien a sem dignissim sagittis. Donec turpis lacus, sodales facilisis risus ac, porta pharetra elit. Quisque suscipit ligula non quam pellentesque, in porta risus mattis. Fusce blandit nulla nec faucibus bibendum. Proin porttitor in orci a efficitur. Maecenas elit enim, hendrerit vel mi sit amet, lobortis sollicitudin augue. Aliquam elit ipsum, sodales quis velit at, vulputate consectetur magna. Curabitur viverra tellus ac velit pharetra tincidunt. Curabitur porttitor sit amet enim sed molestie. Nullam velit est, rhoncus a mi nec, aliquam cursus turpis. Quisque in semper nisi. Donec porta ligula ac sapien porta, vitae vehicula mauris tempus. Suspendisse placerat quis odio vitae bibendum. Mauris id tempus neque. Ut non diam sit amet lacus convallis pulvinar convallis vitae dolor. Curabitur auctor metus sit amet ornare pulvinar. Nunc efficitur nisi eu lorem euismod congue. Nunc lacinia sem sed diam porta, vitae volutpat leo fermentum. Mauris non semper mauris, ut fermentum orci. Nunc volutpat, quam id commodo finibus, quam mi rhoncus ipsum, non consequat neque purus vitae est. Suspendisse quis metus imperdiet, cursus augue sed, fermentum lacus. Pellentesque dignissim odio et libero suscipit mattis. Nam porttitor felis sit amet diam dignissim cursus. Nullam vestibulum rhoncus venenatis. Phasellus nec pharetra sem, nec venenatis felis. Phasellus vehicula lacus convallis commodo volutpat. Nam faucibus velit dolor, molestie gravida justo aliquet sit amet. Ut eleifend turpis odio, at molestie turpis ultricies in. Mauris fringilla odio nec dapibus lacinia. Cras eget justo et risus interdum bibendum non ut mi. Phasellus bibendum magna vel mi dignissim, ut pretium metus dapibus. Vivamus eget dolor dolor. Morbi vel ex ac lectus pulvinar auctor et a lacus. Fusce eu dictum velit. Nunc et lacus vitae odio volutpat tempus. Mauris a sem in purus pulvinar tincidunt. Nulla facilisi. Quisque rhoncus facilisis enim a vehicula. Mauris scelerisque tincidunt ultrices. Sed fermentum sed sapien vel ullamcorper. Quisque commodo in turpis vitae rutrum.
                    </p>
                </Section>

                <Section id="sobre">
                    <h1>Sobre</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi. Aenean sit amet tellus nec mauris bibendum rutrum eu sollicitudin enim. Mauris dignissim scelerisque mauris, auctor imperdiet leo elementum non. Praesent faucibus ligula non imperdiet facilisis. Nam nibh nisl, bibendum placerat fringilla eu, vehicula vitae tortor. Nunc condimentum ultricies pretium. Cras eget imperdiet lectus. Suspendisse tincidunt lorem eu dolor iaculis, a accumsan ipsum vulputate. Maecenas pellentesque, mauris in semper commodo, nisi arcu pharetra sapien, nec aliquet libero eros ut metus. Duis ultricies elit et justo tristique, quis ultricies tortor ultrices. Vestibulum at sodales lacus. Quisque semper eros maximus lectus molestie ultricies. Maecenas facilisis dictum vulputate. Ut feugiat molestie ornare. Suspendisse rutrum sodales vehicula. In sit amet sem ligula. Fusce pulvinar enim urna, eget posuere justo scelerisque id. Phasellus egestas sapien a sem dignissim sagittis. Donec turpis lacus, sodales facilisis risus ac, porta pharetra elit. Quisque suscipit ligula non quam pellentesque, in porta risus mattis. Fusce blandit nulla nec faucibus bibendum. Proin porttitor in orci a efficitur. Maecenas elit enim, hendrerit vel mi sit amet, lobortis sollicitudin augue. Aliquam elit ipsum, sodales quis velit at, vulputate consectetur magna. Curabitur viverra tellus ac velit pharetra tincidunt. Curabitur porttitor sit amet enim sed molestie. Nullam velit est, rhoncus a mi nec, aliquam cursus turpis. Quisque in semper nisi. Donec porta ligula ac sapien porta, vitae vehicula mauris tempus. Suspendisse placerat quis odio vitae bibendum. Mauris id tempus neque. Ut non diam sit amet lacus convallis pulvinar convallis vitae dolor. Curabitur auctor metus sit amet ornare pulvinar. Nunc efficitur nisi eu lorem euismod congue. Nunc lacinia sem sed diam porta, vitae volutpat leo fermentum. Mauris non semper mauris, ut fermentum orci. Nunc volutpat, quam id commodo finibus, quam mi rhoncus ipsum, non consequat neque purus vitae est. Suspendisse quis metus imperdiet, cursus augue sed, fermentum lacus. Pellentesque dignissim odio et libero suscipit mattis. Nam porttitor felis sit amet diam dignissim cursus. Nullam vestibulum rhoncus venenatis. Phasellus nec pharetra sem, nec venenatis felis. Phasellus vehicula lacus convallis commodo volutpat. Nam faucibus velit dolor, molestie gravida justo aliquet sit amet. Ut eleifend turpis odio, at molestie turpis ultricies in. Mauris fringilla odio nec dapibus lacinia. Cras eget justo et risus interdum bibendum non ut mi. Phasellus bibendum magna vel mi dignissim, ut pretium metus dapibus. Vivamus eget dolor dolor. Morbi vel ex ac lectus pulvinar auctor et a lacus. Fusce eu dictum velit. Nunc et lacus vitae odio volutpat tempus. Mauris a sem in purus pulvinar tincidunt. Nulla facilisi. Quisque rhoncus facilisis enim a vehicula. Mauris scelerisque tincidunt ultrices. Sed fermentum sed sapien vel ullamcorper. Quisque commodo in turpis vitae rutrum.
                    </p>
                </Section>

                <Section id="projetos">
                    <h1>Projetos</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi. Aenean sit amet tellus nec mauris bibendum rutrum eu sollicitudin enim. Mauris dignissim scelerisque mauris, auctor imperdiet leo elementum non. Praesent faucibus ligula non imperdiet facilisis. Nam nibh nisl, bibendum placerat fringilla eu, vehicula vitae tortor. Nunc condimentum ultricies pretium. Cras eget imperdiet lectus. Suspendisse tincidunt lorem eu dolor iaculis, a accumsan ipsum vulputate. Maecenas pellentesque, mauris in semper commodo, nisi arcu pharetra sapien, nec aliquet libero eros ut metus. Duis ultricies elit et justo tristique, quis ultricies tortor ultrices. Vestibulum at sodales lacus. Quisque semper eros maximus lectus molestie ultricies. Maecenas facilisis dictum vulputate. Ut feugiat molestie ornare. Suspendisse rutrum sodales vehicula. In sit amet sem ligula. Fusce pulvinar enim urna, eget posuere justo scelerisque id. Phasellus egestas sapien a sem dignissim sagittis. Donec turpis lacus, sodales facilisis risus ac, porta pharetra elit. Quisque suscipit ligula non quam pellentesque, in porta risus mattis. Fusce blandit nulla nec faucibus bibendum. Proin porttitor in orci a efficitur. Maecenas elit enim, hendrerit vel mi sit amet, lobortis sollicitudin augue. Aliquam elit ipsum, sodales quis velit at, vulputate consectetur magna. Curabitur viverra tellus ac velit pharetra tincidunt. Curabitur porttitor sit amet enim sed molestie. Nullam velit est, rhoncus a mi nec, aliquam cursus turpis. Quisque in semper nisi. Donec porta ligula ac sapien porta, vitae vehicula mauris tempus. Suspendisse placerat quis odio vitae bibendum. Mauris id tempus neque. Ut non diam sit amet lacus convallis pulvinar convallis vitae dolor. Curabitur auctor metus sit amet ornare pulvinar. Nunc efficitur nisi eu lorem euismod congue. Nunc lacinia sem sed diam porta, vitae volutpat leo fermentum. Mauris non semper mauris, ut fermentum orci. Nunc volutpat, quam id commodo finibus, quam mi rhoncus ipsum, non consequat neque purus vitae est. Suspendisse quis metus imperdiet, cursus augue sed, fermentum lacus. Pellentesque dignissim odio et libero suscipit mattis. Nam porttitor felis sit amet diam dignissim cursus. Nullam vestibulum rhoncus venenatis. Phasellus nec pharetra sem, nec venenatis felis. Phasellus vehicula lacus convallis commodo volutpat. Nam faucibus velit dolor, molestie gravida justo aliquet sit amet. Ut eleifend turpis odio, at molestie turpis ultricies in. Mauris fringilla odio nec dapibus lacinia. Cras eget justo et risus interdum bibendum non ut mi. Phasellus bibendum magna vel mi dignissim, ut pretium metus dapibus. Vivamus eget dolor dolor. Morbi vel ex ac lectus pulvinar auctor et a lacus. Fusce eu dictum velit. Nunc et lacus vitae odio volutpat tempus. Mauris a sem in purus pulvinar tincidunt. Nulla facilisi. Quisque rhoncus facilisis enim a vehicula. Mauris scelerisque tincidunt ultrices. Sed fermentum sed sapien vel ullamcorper. Quisque commodo in turpis vitae rutrum.
                    </p>
                </Section>

                <Section id="equipe">
                    <h1>Equipe</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi. Aenean sit amet tellus nec mauris bibendum rutrum eu sollicitudin enim. Mauris dignissim scelerisque mauris, auctor imperdiet leo elementum non. Praesent faucibus ligula non imperdiet facilisis. Nam nibh nisl, bibendum placerat fringilla eu, vehicula vitae tortor. Nunc condimentum ultricies pretium. Cras eget imperdiet lectus. Suspendisse tincidunt lorem eu dolor iaculis, a accumsan ipsum vulputate. Maecenas pellentesque, mauris in semper commodo, nisi arcu pharetra sapien, nec aliquet libero eros ut metus. Duis ultricies elit et justo tristique, quis ultricies tortor ultrices. Vestibulum at sodales lacus. Quisque semper eros maximus lectus molestie ultricies. Maecenas facilisis dictum vulputate. Ut feugiat molestie ornare. Suspendisse rutrum sodales vehicula. In sit amet sem ligula. Fusce pulvinar enim urna, eget posuere justo scelerisque id. Phasellus egestas sapien a sem dignissim sagittis. Donec turpis lacus, sodales facilisis risus ac, porta pharetra elit. Quisque suscipit ligula non quam pellentesque, in porta risus mattis. Fusce blandit nulla nec faucibus bibendum. Proin porttitor in orci a efficitur. Maecenas elit enim, hendrerit vel mi sit amet, lobortis sollicitudin augue. Aliquam elit ipsum, sodales quis velit at, vulputate consectetur magna. Curabitur viverra tellus ac velit pharetra tincidunt. Curabitur porttitor sit amet enim sed molestie. Nullam velit est, rhoncus a mi nec, aliquam cursus turpis. Quisque in semper nisi. Donec porta ligula ac sapien porta, vitae vehicula mauris tempus. Suspendisse placerat quis odio vitae bibendum. Mauris id tempus neque. Ut non diam sit amet lacus convallis pulvinar convallis vitae dolor. Curabitur auctor metus sit amet ornare pulvinar. Nunc efficitur nisi eu lorem euismod congue. Nunc lacinia sem sed diam porta, vitae volutpat leo fermentum. Mauris non semper mauris, ut fermentum orci. Nunc volutpat, quam id commodo finibus, quam mi rhoncus ipsum, non consequat neque purus vitae est. Suspendisse quis metus imperdiet, cursus augue sed, fermentum lacus. Pellentesque dignissim odio et libero suscipit mattis. Nam porttitor felis sit amet diam dignissim cursus. Nullam vestibulum rhoncus venenatis. Phasellus nec pharetra sem, nec venenatis felis. Phasellus vehicula lacus convallis commodo volutpat. Nam faucibus velit dolor, molestie gravida justo aliquet sit amet. Ut eleifend turpis odio, at molestie turpis ultricies in. Mauris fringilla odio nec dapibus lacinia. Cras eget justo et risus interdum bibendum non ut mi. Phasellus bibendum magna vel mi dignissim, ut pretium metus dapibus. Vivamus eget dolor dolor. Morbi vel ex ac lectus pulvinar auctor et a lacus. Fusce eu dictum velit. Nunc et lacus vitae odio volutpat tempus. Mauris a sem in purus pulvinar tincidunt. Nulla facilisi. Quisque rhoncus facilisis enim a vehicula. Mauris scelerisque tincidunt ultrices. Sed fermentum sed sapien vel ullamcorper. Quisque commodo in turpis vitae rutrum.
                    </p>
                </Section>

                <Section id="eventos">
                    <h1>Eventos</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi. Aenean sit amet tellus nec mauris bibendum rutrum eu sollicitudin enim. Mauris dignissim scelerisque mauris, auctor imperdiet leo elementum non. Praesent faucibus ligula non imperdiet facilisis. Nam nibh nisl, bibendum placerat fringilla eu, vehicula vitae tortor. Nunc condimentum ultricies pretium. Cras eget imperdiet lectus. Suspendisse tincidunt lorem eu dolor iaculis, a accumsan ipsum vulputate. Maecenas pellentesque, mauris in semper commodo, nisi arcu pharetra sapien, nec aliquet libero eros ut metus. Duis ultricies elit et justo tristique, quis ultricies tortor ultrices. Vestibulum at sodales lacus. Quisque semper eros maximus lectus molestie ultricies. Maecenas facilisis dictum vulputate. Ut feugiat molestie ornare. Suspendisse rutrum sodales vehicula. In sit amet sem ligula. Fusce pulvinar enim urna, eget posuere justo scelerisque id. Phasellus egestas sapien a sem dignissim sagittis. Donec turpis lacus, sodales facilisis risus ac, porta pharetra elit. Quisque suscipit ligula non quam pellentesque, in porta risus mattis. Fusce blandit nulla nec faucibus bibendum. Proin porttitor in orci a efficitur. Maecenas elit enim, hendrerit vel mi sit amet, lobortis sollicitudin augue. Aliquam elit ipsum, sodales quis velit at, vulputate consectetur magna. Curabitur viverra tellus ac velit pharetra tincidunt. Curabitur porttitor sit amet enim sed molestie. Nullam velit est, rhoncus a mi nec, aliquam cursus turpis. Quisque in semper nisi. Donec porta ligula ac sapien porta, vitae vehicula mauris tempus. Suspendisse placerat quis odio vitae bibendum. Mauris id tempus neque. Ut non diam sit amet lacus convallis pulvinar convallis vitae dolor. Curabitur auctor metus sit amet ornare pulvinar. Nunc efficitur nisi eu lorem euismod congue. Nunc lacinia sem sed diam porta, vitae volutpat leo fermentum. Mauris non semper mauris, ut fermentum orci. Nunc volutpat, quam id commodo finibus, quam mi rhoncus ipsum, non consequat neque purus vitae est. Suspendisse quis metus imperdiet, cursus augue sed, fermentum lacus. Pellentesque dignissim odio et libero suscipit mattis. Nam porttitor felis sit amet diam dignissim cursus. Nullam vestibulum rhoncus venenatis. Phasellus nec pharetra sem, nec venenatis felis. Phasellus vehicula lacus convallis commodo volutpat. Nam faucibus velit dolor, molestie gravida justo aliquet sit amet. Ut eleifend turpis odio, at molestie turpis ultricies in. Mauris fringilla odio nec dapibus lacinia. Cras eget justo et risus interdum bibendum non ut mi. Phasellus bibendum magna vel mi dignissim, ut pretium metus dapibus. Vivamus eget dolor dolor. Morbi vel ex ac lectus pulvinar auctor et a lacus. Fusce eu dictum velit. Nunc et lacus vitae odio volutpat tempus. Mauris a sem in purus pulvinar tincidunt. Nulla facilisi. Quisque rhoncus facilisis enim a vehicula. Mauris scelerisque tincidunt ultrices. Sed fermentum sed sapien vel ullamcorper. Quisque commodo in turpis vitae rutrum.
                    </p>
                </Section>

                <Section id="contato">
                    <h1>Contato</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi. Aenean sit amet tellus nec mauris bibendum rutrum eu sollicitudin enim. Mauris dignissim scelerisque mauris, auctor imperdiet leo elementum non. Praesent faucibus ligula non imperdiet facilisis. Nam nibh nisl, bibendum placerat fringilla eu, vehicula vitae tortor. Nunc condimentum ultricies pretium. Cras eget imperdiet lectus. Suspendisse tincidunt lorem eu dolor iaculis, a accumsan ipsum vulputate. Maecenas pellentesque, mauris in semper commodo, nisi arcu pharetra sapien, nec aliquet libero eros ut metus. Duis ultricies elit et justo tristique, quis ultricies tortor ultrices. Vestibulum at sodales lacus. Quisque semper eros maximus lectus molestie ultricies. Maecenas facilisis dictum vulputate. Ut feugiat molestie ornare. Suspendisse rutrum sodales vehicula. In sit amet sem ligula. Fusce pulvinar enim urna, eget posuere justo scelerisque id. Phasellus egestas sapien a sem dignissim sagittis. Donec turpis lacus, sodales facilisis risus ac, porta pharetra elit. Quisque suscipit ligula non quam pellentesque, in porta risus mattis. Fusce blandit nulla nec faucibus bibendum. Proin porttitor in orci a efficitur. Maecenas elit enim, hendrerit vel mi sit amet, lobortis sollicitudin augue. Aliquam elit ipsum, sodales quis velit at, vulputate consectetur magna. Curabitur viverra tellus ac velit pharetra tincidunt. Curabitur porttitor sit amet enim sed molestie. Nullam velit est, rhoncus a mi nec, aliquam cursus turpis. Quisque in semper nisi. Donec porta ligula ac sapien porta, vitae vehicula mauris tempus. Suspendisse placerat quis odio vitae bibendum. Mauris id tempus neque. Ut non diam sit amet lacus convallis pulvinar convallis vitae dolor. Curabitur auctor metus sit amet ornare pulvinar. Nunc efficitur nisi eu lorem euismod congue. Nunc lacinia sem sed diam porta, vitae volutpat leo fermentum. Mauris non semper mauris, ut fermentum orci. Nunc volutpat, quam id commodo finibus, quam mi rhoncus ipsum, non consequat neque purus vitae est. Suspendisse quis metus imperdiet, cursus augue sed, fermentum lacus. Pellentesque dignissim odio et libero suscipit mattis. Nam porttitor felis sit amet diam dignissim cursus. Nullam vestibulum rhoncus venenatis. Phasellus nec pharetra sem, nec venenatis felis. Phasellus vehicula lacus convallis commodo volutpat. Nam faucibus velit dolor, molestie gravida justo aliquet sit amet. Ut eleifend turpis odio, at molestie turpis ultricies in. Mauris fringilla odio nec dapibus lacinia. Cras eget justo et risus interdum bibendum non ut mi. Phasellus bibendum magna vel mi dignissim, ut pretium metus dapibus. Vivamus eget dolor dolor. Morbi vel ex ac lectus pulvinar auctor et a lacus. Fusce eu dictum velit. Nunc et lacus vitae odio volutpat tempus. Mauris a sem in purus pulvinar tincidunt. Nulla facilisi. Quisque rhoncus facilisis enim a vehicula. Mauris scelerisque tincidunt ultrices. Sed fermentum sed sapien vel ullamcorper. Quisque commodo in turpis vitae rutrum.
                    </p>
                </Section>
            </div>
        )
    }
}

class NavLink extends Component{
    render(){
        return(
            <Nav.Link>
                <Link to={this.props.to} smooth={true}>
                    {this.props.label}
                </Link>
            </Nav.Link>
        )
    }
}

class NavWrapper extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" sticy="bottom">
                    <Navbar.Brand onClick={scroll.scrollToTop()}> TAG </Navbar.Brand>
                    <Nav className="mr-auto">
                    <NavLink to="inicio" label="Início"/>
                    <NavLink to="sobre" label="Sobre"/>
                    <NavLink to="projetos" label="Projetos"/>
                    <NavLink to="equipe" label="Equipe"/>
                    <NavLink to="eventos" label="Eventos"/>
                    <NavLink to="contato" label="Contato"/>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

class Section extends Component{
    render(){
        return(
            <div id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

export default Portal